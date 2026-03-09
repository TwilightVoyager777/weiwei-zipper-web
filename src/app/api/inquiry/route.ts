import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import {
  COMPANY_ADDRESS_EN,
  COMPANY_ADDRESS_ZH,
  CONTACT_PHONE,
  SITE_URL,
  WHATSAPP_NUMBER,
  WHATSAPP_URL,
} from '@/config/site-constants';

interface InquiryData {
  locale?: string;
  name: string;
  email: string;
  company?: string;
  country?: string;
  phone?: string;
  productInterest?: string;
  productModel?: string;
  productSize?: string;
  quantity?: string;
  application?: string;
  message?: string;
  // UTM tracking fields
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  referrer?: string;
  landingPage?: string;
}

type SupportedLocale = 'zh' | 'en' | 'es' | 'ar' | 'ru';

const SUPPORTED_LOCALES: SupportedLocale[] = ['zh', 'en', 'es', 'ar', 'ru'];

function normalizeLocale(locale?: string): SupportedLocale {
  if (locale && SUPPORTED_LOCALES.includes(locale as SupportedLocale)) {
    return locale as SupportedLocale;
  }

  return 'en';
}

// Simple in-memory rate limiter (resets on cold start, sufficient for basic protection)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5; // max 5 requests per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  if (entry.count > RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  return false;
}

// Periodically clean up expired entries to prevent memory leak
function cleanupRateLimitMap() {
  const now = Date.now();
  for (const [key, entry] of rateLimitMap) {
    if (now > entry.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}

function buildEmailHtml(inquiry: Record<string, string>): string {
  const rows = [
    { label: 'Inquiry ID', value: inquiry.id },
    { label: 'Timestamp', value: inquiry.timestamp },
    { label: 'Name', value: inquiry.name },
    { label: 'Email', value: inquiry.email },
    { label: 'Company', value: inquiry.company },
    { label: 'Country / Region', value: inquiry.country },
    { label: 'Phone', value: inquiry.phone },
    { label: 'Product Interest', value: inquiry.productInterest },
    { label: 'Style / Model Note', value: inquiry.productModel },
    { label: 'Size / Length', value: inquiry.productSize },
    { label: 'Quantity', value: inquiry.quantity },
    { label: 'Use Case', value: inquiry.application },
    { label: 'Message', value: inquiry.message },
    { label: '── Attribution ──', value: '' },
    { label: 'UTM Source', value: inquiry.utmSource },
    { label: 'UTM Medium', value: inquiry.utmMedium },
    { label: 'UTM Campaign', value: inquiry.utmCampaign },
    { label: 'UTM Content', value: inquiry.utmContent },
    { label: 'UTM Term', value: inquiry.utmTerm },
    { label: 'Referrer', value: inquiry.referrer },
    { label: 'Landing Page', value: inquiry.landingPage },
  ].filter(row => row.value); // Only include fields that have values

  const tableRows = rows.map(row =>
    `<tr>
      <td style="padding:8px 12px;border:1px solid #e2e8f0;font-weight:600;background:#f8fafc;white-space:nowrap;vertical-align:top;">${row.label}</td>
      <td style="padding:8px 12px;border:1px solid #e2e8f0;">${row.value}</td>
    </tr>`
  ).join('');

  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#1e40af;border-bottom:2px solid #1e40af;padding-bottom:8px;">
        New Inquiry from Weiwei Zipper Website
      </h2>
      <table style="width:100%;border-collapse:collapse;margin:16px 0;">
        ${tableRows}
      </table>
      <p style="color:#64748b;font-size:12px;margin-top:24px;">
        This email was automatically sent from the Weiwei Zipper website contact form.
      </p>
    </div>
  `;
}

function buildAutoReplyHtml(inquiry: Record<string, string>, locale: SupportedLocale): string {
  const contentByLocale: Record<
    SupportedLocale,
    {
      title: string;
      greeting: string;
      intro: string;
      contactByPhone: string;
      contactByEmail: string;
      reference: string;
      summaryTitle: string;
      summaryIntro: string;
      labels: {
        productInterest: string;
        productModel: string;
        productSize: string;
        quantity: string;
        application: string;
      };
      contactTitle: string;
      contactDescription: string;
      contactLabels: {
        phone: string;
        whatsapp: string;
        address: string;
      };
      replyHint: string;
      closing: string;
      signoff: string;
      dir?: 'rtl' | 'ltr';
    }
  > = {
    zh: {
      title: '感谢您联系伟伟拉链',
      greeting: `${inquiry.name}，您好：`,
      intro: '我们已经收到您的问价信息，团队会尽快查看并跟进。',
      contactByPhone: '我们会尽快通过邮箱或电话与您联系。',
      contactByEmail: '我们会尽快通过邮箱与您联系。',
      reference: '您的问价编号为',
      summaryTitle: '您提交的信息摘要',
      summaryIntro: '以下是我们收到的主要信息，便于您核对：',
      labels: {
        productInterest: '意向产品',
        productModel: '款式 / 备注',
        productSize: '规格 / 长度',
        quantity: '需求数量',
        application: '使用场景',
      },
      contactTitle: '联系方式',
      contactDescription: '如需补充资料或希望更快沟通，也可直接通过以下方式联系我们：',
      contactLabels: {
        phone: '电话',
        whatsapp: 'WhatsApp',
        address: '地址',
      },
      replyHint: '如需补充更多细节，可直接回复这封邮件。',
      closing: '此致',
      signoff: '伟伟拉链',
    },
    en: {
      title: 'Thank you for contacting Weiwei Zipper',
      greeting: `Dear ${inquiry.name},`,
      intro: 'We have received your inquiry and our team will review the details shortly.',
      contactByPhone: 'We will follow up with you by email or phone as soon as possible.',
      contactByEmail: 'We will follow up with you by email as soon as possible.',
      reference: 'Your inquiry reference is',
      summaryTitle: 'Summary of your submission',
      summaryIntro: 'Below is a short summary of the information we received for your reference:',
      labels: {
        productInterest: 'Product interest',
        productModel: 'Style / model note',
        productSize: 'Size / length',
        quantity: 'Quantity',
        application: 'Use case',
      },
      contactTitle: 'Direct contact',
      contactDescription: 'If you would like to add more details or speak with us sooner, you can also contact us directly:',
      contactLabels: {
        phone: 'Phone',
        whatsapp: 'WhatsApp',
        address: 'Address',
      },
      replyHint: 'If you need to add more details, you can reply directly to this email.',
      closing: 'Best regards,',
      signoff: 'Weiwei Zipper',
    },
    es: {
      title: 'Gracias por contactar con Weiwei Zipper',
      greeting: `Estimado/a ${inquiry.name}:`,
      intro: 'Hemos recibido su consulta y nuestro equipo revisará los detalles en breve.',
      contactByPhone: 'Nos pondremos en contacto con usted lo antes posible por correo o por teléfono.',
      contactByEmail: 'Nos pondremos en contacto con usted lo antes posible por correo electrónico.',
      reference: 'Su número de consulta es',
      summaryTitle: 'Resumen de su solicitud',
      summaryIntro: 'A continuación encontrará un breve resumen de la información que hemos recibido:',
      labels: {
        productInterest: 'Producto de interés',
        productModel: 'Modelo / nota',
        productSize: 'Tamaño / longitud',
        quantity: 'Cantidad',
        application: 'Aplicación',
      },
      contactTitle: 'Contacto directo',
      contactDescription: 'Si desea añadir más detalles o hablar con nosotros con mayor rapidez, también puede contactarnos directamente:',
      contactLabels: {
        phone: 'Teléfono',
        whatsapp: 'WhatsApp',
        address: 'Dirección',
      },
      replyHint: 'Si desea añadir más información, puede responder directamente a este correo.',
      closing: 'Saludos cordiales,',
      signoff: 'Weiwei Zipper',
    },
    ar: {
      title: 'شكرا لتواصلك مع Weiwei Zipper',
      greeting: `السيد/السيدة ${inquiry.name}،`,
      intro: 'لقد استلمنا طلبك، وسيقوم فريقنا بمراجعة التفاصيل والرد عليك في أقرب وقت.',
      contactByPhone: 'سنتواصل معك قريبا عبر البريد الإلكتروني أو الهاتف.',
      contactByEmail: 'سنتواصل معك قريبا عبر البريد الإلكتروني.',
      reference: 'رقم طلبك هو',
      summaryTitle: 'ملخص المعلومات المرسلة',
      summaryIntro: 'فيما يلي ملخص مختصر للمعلومات التي استلمناها للرجوع إليها:',
      labels: {
        productInterest: 'المنتج المطلوب',
        productModel: 'الموديل / الملاحظة',
        productSize: 'المقاس / الطول',
        quantity: 'الكمية',
        application: 'الاستخدام',
      },
      contactTitle: 'وسائل التواصل المباشر',
      contactDescription: 'إذا رغبت في إضافة مزيد من التفاصيل أو التواصل معنا بشكل أسرع، يمكنك أيضا استخدام الوسائل التالية:',
      contactLabels: {
        phone: 'الهاتف',
        whatsapp: 'واتساب',
        address: 'العنوان',
      },
      replyHint: 'إذا رغبت في إضافة مزيد من التفاصيل، يمكنك الرد مباشرة على هذه الرسالة.',
      closing: 'مع أطيب التحيات،',
      signoff: 'Weiwei Zipper',
      dir: 'rtl',
    },
    ru: {
      title: 'Спасибо за обращение в Weiwei Zipper',
      greeting: `Здравствуйте, ${inquiry.name}!`,
      intro: 'Мы получили ваш запрос, и наша команда скоро проверит детали.',
      contactByPhone: 'Мы свяжемся с вами как можно скорее по электронной почте или по телефону.',
      contactByEmail: 'Мы свяжемся с вами как можно скорее по электронной почте.',
      reference: 'Номер вашего запроса',
      summaryTitle: 'Краткая информация по вашему запросу',
      summaryIntro: 'Ниже приведено краткое резюме информации, которую мы получили:',
      labels: {
        productInterest: 'Интересующий продукт',
        productModel: 'Модель / примечание',
        productSize: 'Размер / длина',
        quantity: 'Количество',
        application: 'Применение',
      },
      contactTitle: 'Прямой контакт',
      contactDescription: 'Если вы хотите добавить детали или связаться с нами быстрее, вы также можете использовать следующие контакты:',
      contactLabels: {
        phone: 'Телефон',
        whatsapp: 'WhatsApp',
        address: 'Адрес',
      },
      replyHint: 'Если вы хотите добавить детали, просто ответьте на это письмо.',
      closing: 'С уважением,',
      signoff: 'Weiwei Zipper',
    },
  };

  const content = contentByLocale[locale];
  const contactLine = inquiry.phone ? content.contactByPhone : content.contactByEmail;
  const dir = content.dir ?? 'ltr';
  const address = locale === 'zh' ? COMPANY_ADDRESS_ZH : COMPANY_ADDRESS_EN;
  const textAlign = dir === 'rtl' ? 'right' : 'left';
  const logoUrl = `${SITE_URL}/brand/weiwei-zipper-logo-white.png`;

  return `
    <div dir="${dir}" style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;color:#0f172a;background:#f8fafc;padding:24px;">
      <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;box-shadow:0 8px 24px rgba(15,23,42,0.06);">
        <div style="background:linear-gradient(135deg,#0f172a 0%,#1d4ed8 100%);padding:24px 28px;color:#ffffff;text-align:${textAlign};">
          <div style="margin-bottom:14px;">
            <img src="${logoUrl}" alt="Weiwei Zipper" style="height:34px;width:auto;display:inline-block;vertical-align:middle;" />
          </div>
          <div style="font-size:12px;letter-spacing:0.08em;text-transform:uppercase;opacity:0.82;margin-bottom:10px;">Weiwei Zipper</div>
          <h2 style="margin:0;font-size:24px;line-height:1.35;">${content.title}</h2>
        </div>
        <div style="padding:28px;text-align:${textAlign};">
          <p style="margin:0 0 14px;font-size:15px;line-height:1.8;">${content.greeting}</p>
          <p style="margin:0 0 14px;font-size:15px;line-height:1.8;">
            ${content.intro}
            ${contactLine}
          </p>
          <p style="margin:0 0 22px;font-size:15px;line-height:1.8;">
            ${content.reference} <strong>${inquiry.id}</strong>.
          </p>

          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:18px 20px;margin-bottom:18px;">
            <p style="margin:0 0 8px;font-size:16px;font-weight:700;color:#0f172a;">${content.summaryTitle}</p>
            <p style="margin:0 0 12px;font-size:14px;line-height:1.7;color:#475569;">${content.summaryIntro}</p>
            <ul style="margin:0;padding-left:${dir === 'rtl' ? '0' : '20px'};padding-right:${dir === 'rtl' ? '20px' : '0'};line-height:1.8;color:#0f172a;">
        ${inquiry.productInterest ? `<li><strong>${content.labels.productInterest}:</strong> ${inquiry.productInterest}</li>` : ''}
        ${inquiry.productModel ? `<li><strong>${content.labels.productModel}:</strong> ${inquiry.productModel}</li>` : ''}
        ${inquiry.productSize ? `<li><strong>${content.labels.productSize}:</strong> ${inquiry.productSize}</li>` : ''}
        ${inquiry.quantity ? `<li><strong>${content.labels.quantity}:</strong> ${inquiry.quantity}</li>` : ''}
        ${inquiry.application ? `<li><strong>${content.labels.application}:</strong> ${inquiry.application}</li>` : ''}
            </ul>
          </div>

          <div style="border:1px solid #dbeafe;background:#eff6ff;border-radius:12px;padding:18px 20px;margin-bottom:18px;">
            <p style="margin:0 0 8px;font-size:16px;font-weight:700;color:#1d4ed8;">${content.contactTitle}</p>
            <p style="margin:0 0 12px;font-size:14px;line-height:1.7;color:#334155;">${content.contactDescription}</p>
            <table style="width:100%;border-collapse:collapse;font-size:14px;color:#0f172a;">
              <tr>
                <td style="padding:6px 0;font-weight:700;vertical-align:top;width:132px;">${content.contactLabels.phone}</td>
                <td style="padding:6px 0;">${CONTACT_PHONE}</td>
              </tr>
              <tr>
                <td style="padding:6px 0;font-weight:700;vertical-align:top;">${content.contactLabels.whatsapp}</td>
                <td style="padding:6px 0;"><a href="${WHATSAPP_URL}" style="color:#1d4ed8;text-decoration:none;">${WHATSAPP_NUMBER}</a></td>
              </tr>
              <tr>
                <td style="padding:6px 0;font-weight:700;vertical-align:top;">${content.contactLabels.address}</td>
                <td style="padding:6px 0;">${address}</td>
              </tr>
            </table>
          </div>

          <p style="margin:0 0 22px;font-size:14px;line-height:1.8;color:#475569;">
            ${content.replyHint}
          </p>
          <p style="margin:0;font-size:15px;line-height:1.8;">
            ${content.closing}<br />
            <strong>${content.signoff}</strong>
          </p>
        </div>
      </div>
    </div>
  `;
}

async function sendNotificationEmail(
  resend: Resend,
  fromEmail: string,
  notifyEmail: string,
  inquiry: Record<string, string>
): Promise<void> {
  const companyPart = inquiry.company ? ` from ${inquiry.company}` : '';
  const subject = `New Inquiry ${inquiry.id}${companyPart} - ${inquiry.name}`;

  const { error } = await resend.emails.send({
    from: `Weiwei Zipper <${fromEmail}>`,
    to: [notifyEmail],
    subject,
    html: buildEmailHtml(inquiry),
  });

  if (error) {
    throw new Error(`Resend API error: ${error.message}`);
  }
}

async function sendAutoReplyEmail(
  resend: Resend,
  fromEmail: string,
  inquiry: Record<string, string>,
  locale: SupportedLocale
): Promise<void> {
  const subjectByLocale: Record<SupportedLocale, string> = {
    zh: `我们已收到您的问价 - ${inquiry.id}`,
    en: `We received your inquiry - ${inquiry.id}`,
    es: `Hemos recibido su consulta - ${inquiry.id}`,
    ar: `لقد استلمنا طلبك - ${inquiry.id}`,
    ru: `Мы получили ваш запрос - ${inquiry.id}`,
  };

  const { error } = await resend.emails.send({
    from: `Weiwei Zipper <${fromEmail}>`,
    to: [inquiry.email],
    subject: subjectByLocale[locale],
    html: buildAutoReplyHtml(inquiry, locale),
  });

  if (error) {
    throw new Error(`Resend API error: ${error.message}`);
  }
}

async function sendEmail(inquiry: Record<string, string>): Promise<void> {
  const resendApiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.NOTIFY_EMAIL || 'weiweizipper@gmail.com';

  if (!resendApiKey) {
    console.warn('[Inquiry] RESEND_API_KEY not configured. Skipping email notification.');
    return;
  }

  const resend = new Resend(resendApiKey);
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'noreply@send.weiweizipper.com';
  const locale = normalizeLocale(inquiry.locale);
  await sendNotificationEmail(resend, fromEmail, notifyEmail, inquiry);
  await sendAutoReplyEmail(resend, fromEmail, inquiry, locale);

  console.log(`[Inquiry] Email sent to ${notifyEmail} for ${inquiry.id}`);
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Clean up old entries periodically (every request is fine for low-traffic)
    cleanupRateLimitMap();

    const data: InquiryData = await request.json();

    // Server-side validation — only name and email are required
    if (!data.name || !data.email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    // Sanitize input lengths
    if (data.name.length > 200 || data.email.length > 200) {
      return NextResponse.json({ error: 'Field length exceeds maximum' }, { status: 400 });
    }

    if (data.company && data.company.length > 200) {
      return NextResponse.json({ error: 'Field length exceeds maximum' }, { status: 400 });
    }

    if (data.message && data.message.length > 5000) {
      return NextResponse.json({ error: 'Message too long' }, { status: 400 });
    }

    const inquiry: Record<string, string> = {
      id: `INQ-${Date.now()}`,
      locale: normalizeLocale(data.locale),
      timestamp: new Date().toISOString(),
      name: data.name,
      email: data.email,
      company: data.company || '',
      country: data.country || '',
      phone: data.phone || '',
      productInterest: data.productInterest || '',
      productModel: data.productModel || '',
      productSize: data.productSize || '',
      quantity: data.quantity || '',
      application: data.application || '',
      message: data.message || '',
      utmSource: data.utmSource || '',
      utmMedium: data.utmMedium || '',
      utmCampaign: data.utmCampaign || '',
      utmContent: data.utmContent || '',
      utmTerm: data.utmTerm || '',
      referrer: data.referrer || '',
      landingPage: data.landingPage || '',
    };

    console.log(`[Inquiry] ${inquiry.id} from ${inquiry.name} (${inquiry.email})${inquiry.company ? ` - ${inquiry.company}` : ''}`);

    // Send email notification
    try {
      await sendEmail(inquiry);
    } catch (emailError) {
      console.error('[Inquiry] Failed to send email notification:', emailError);
      // Don't fail the whole request if email fails — the inquiry is still logged
    }

    return NextResponse.json({ success: true, id: inquiry.id });
  } catch (error) {
    console.error('[Inquiry Error]', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
