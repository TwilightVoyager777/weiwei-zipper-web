import Image from 'next/image';
import { Link } from '@/localization/navigation';
import { alternatesForPath } from '@/seo/localized-urls';
import {
  COMPANY_ADDRESS_EN,
  COMPANY_ADDRESS_ZH,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  WHATSAPP_URL,
} from '@/config/site-constants';
import {
  ClockIcon,
  EmailIcon,
  LocationIcon,
  PhoneIcon,
  WhatsAppIcon,
  WeChatIcon,
} from '@/components/Icons';
import { getContactContent, getSiteBrand } from '@/site-data/site-content';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

type ContactCard = {
  title: string;
  value: string;
  href?: string;
  external?: boolean;
  icon: typeof PhoneIcon;
};

const mapEmbedUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6956.023038953432!2d120.09984076023103!3d29.340658169538386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3449545eea2e5195%3A0x9fc5bbd29684b931!2z5Lit5Zu95LmJ5LmM5Zu96ZmF5ZWG6LS45Z-O5LiJ5Yy6!5e0!3m2!1szh-CN!2sus!4v1772861265332!5m2!1szh-CN!2sus';
const mapOpenUrl =
  'https://www.google.com/maps/place/%E4%B8%AD%E5%9B%BD%E4%B9%89%E4%B9%8C%E5%9B%BD%E9%99%85%E5%95%86%E8%B4%B8%E5%9F%8E%E4%B8%89%E5%8C%BA';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const contactContent = getContactContent(locale);
  return {
    title: contactContent.metadata.title,
    description: contactContent.metadata.description,
    alternates: alternatesForPath(locale, '/contact'),
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const isZh = locale === 'zh';
  const contactContent = getContactContent(locale);
  const siteBrand = getSiteBrand(locale);
  const contactCards: ContactCard[] = [
    {
      title: isZh ? '电话联系' : 'Phone',
      value: CONTACT_PHONE,
      href: `tel:${CONTACT_PHONE.replace(/[^\d+]/g, '')}`,
      icon: PhoneIcon,
    },
    {
      title: isZh ? '邮箱联系' : 'Email',
      value: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
      icon: EmailIcon,
    },
    {
      title: 'WhatsApp',
      value: siteBrand.whatsapp,
      href: WHATSAPP_URL,
      icon: WhatsAppIcon,
      external: true,
    },
    {
      title: isZh ? '工作时间' : 'Business Hours',
      value: siteBrand.businessHours,
      icon: ClockIcon,
    },
  ] as const;

  const contactCardColumns = [
    [contactCards[0], contactCards[2]],
    [contactCards[1], contactCards[3]],
  ] as const;
  const ui = isZh
    ? {
        wechatId: '微信号',
        zhAddress: '中文地址',
        enAddress: 'English Address',
      }
    : {
        wechatId: 'WeChat ID',
        zhAddress: 'Chinese Address',
        enAddress: 'English Address',
      };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{contactContent.title}</h1>
          <p className="text-lg text-gray-600 leading-relaxed">{contactContent.subtitle}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <Link
            href="/quote"
            className="bg-blue-800 text-white px-6 py-3 rounded font-semibold hover:bg-blue-900 transition-colors text-center"
          >
            {contactContent.quoteButton}
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-green-600 text-green-700 px-6 py-3 rounded font-semibold hover:bg-green-50 transition-colors text-center"
          >
            {contactContent.whatsappButton}
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] gap-8 mb-10">
          <section className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">{contactContent.cardTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] gap-4 items-start">
              {contactCardColumns.map((column, columnIndex) => (
                <div key={columnIndex} className="space-y-4">
                  {column.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.title} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                        <div className="flex items-start gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
                            {item.href ? (
                              <a
                                href={item.href}
                                target={item.external ? '_blank' : undefined}
                                rel={item.external ? 'noopener noreferrer' : undefined}
                                className="text-sm text-gray-600 hover:text-blue-800 break-words transition-colors"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="text-sm text-gray-600">{item.value}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3">
              <p className="text-sm font-medium text-green-800">{contactContent.responseNote}</p>
            </div>
          </section>

          <aside className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-4">
              <WeChatIcon className="w-5 h-5 text-green-600" />
              <h2 className="text-xl font-bold text-gray-900">{contactContent.wechatLabel}</h2>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-center">
              <Image
                src={siteBrand.wechatQrPath}
                alt={contactContent.wechatScan}
                width={220}
                height={220}
                className="mx-auto rounded-lg"
              />
              <p className="text-sm text-gray-600 mt-4">{contactContent.wechatScan}</p>
              <p className="text-sm text-gray-400 mt-1">{ui.wechatId}: {siteBrand.wechatId}</p>
            </div>
          </aside>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[minmax(300px,0.8fr)_minmax(0,1.2fr)] gap-8">
          <section className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-4">
              <LocationIcon className="w-5 h-5 text-blue-800" />
              <h2 className="text-xl font-bold text-gray-900">{contactContent.addressTitle}</h2>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">{contactContent.addressDescription}</p>

            <div className="space-y-5">
              <div>
                <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-2">{ui.zhAddress}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{COMPANY_ADDRESS_ZH}</p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-2">{ui.enAddress}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{COMPANY_ADDRESS_EN}</p>
              </div>
            </div>

            <a
              href={mapOpenUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-blue-800 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-900 transition-colors"
            >
              {contactContent.mapOpenLabel}
            </a>
          </section>

          <section className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5">
            <div className="flex items-center justify-between gap-4 px-2 pb-4">
              <h2 className="text-xl font-bold text-gray-900">{contactContent.mapTitle}</h2>
              <span className="text-xs text-gray-400">Google Maps</span>
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <iframe
                title={contactContent.mapTitle}
                src={mapEmbedUrl}
                width="100%"
                height="460"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block border-0"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
