import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing, type Locale } from '@/localization/routing';
import { SITE_URL, COMPANY_NAME_EN, COMPANY_NAME_ZH, CONTACT_EMAIL, CONTACT_PHONE, COMPANY_ADDRESS_EN } from '@/config/site-constants';
import { alternatesForPath, localizedUrl } from '@/seo/localized-urls';
import { DEFAULT_OG_IMAGE } from '@/seo/page-metadata';
import { SCHEMA_ID, htmlLangFor, schemaRef } from '@/seo/schema';
import { getHomeContent, getSiteBrand } from '@/site-data/site-content';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '../globals.css';

const ICON_CACHE_BUST = '20260302a';
const BAIDU_SITE_VERIFICATION = process.env.BAIDU_SITE_VERIFICATION || 'codeva-K6Q4UfkUrb';
const QIHOO_SITE_VERIFICATION = process.env.QIHOO_SITE_VERIFICATION || 'c4dd98193d4a3e7c38e2dbbde8166f81';
const LOCALE_METADATA = {
  // The BCP-47 tag lives in `@/seo/schema` so that `<html lang>` and every
  // schema `inLanguage` cannot drift apart — they did: this file emitted
  // `zh-CN` while the blog schema emitted a bare `zh` on the same page.
  en: { dir: 'ltr', ogLocale: 'en_US', companyName: COMPANY_NAME_EN },
  zh: { dir: 'ltr', ogLocale: 'zh_CN', companyName: COMPANY_NAME_ZH },
  ru: { dir: 'ltr', ogLocale: 'ru_RU', companyName: COMPANY_NAME_EN },
  es: { dir: 'ltr', ogLocale: 'es_ES', companyName: COMPANY_NAME_EN },
  ar: { dir: 'rtl', ogLocale: 'ar_AR', companyName: COMPANY_NAME_EN },
} as const;

const LOCALE_KEYWORDS = {
  zh: ['伟伟拉链', '义乌拉链厂', '义乌拉链厂家', '义乌拉链批发', '义乌拉链供应商', '义乌拉链定制', '义乌国际商贸城', '义乌国际商贸城拉链', '国际商贸城三区', '国际商贸城三区拉链', '拉链厂', '拉链供应商', '拉链定制', '码装拉链', '闭口拉链', '开口拉链', '双开拉链', '树脂拉链', '尼龙拉链', '金属拉链', '3号拉链', '5号拉链', '8号拉链', '服装拉链', '箱包拉链', '防晒衣拉链'],
  en: ['Weiwei Zipper', 'Yiwu zipper manufacturer', 'Yiwu zipper factory', 'Yiwu zipper supplier', 'Yiwu zipper wholesale', 'custom zipper supplier', 'custom zipper factory', 'Yiwu International Trade City zipper', 'District 3 International Trade City zipper', 'metal zipper', 'resin zipper', 'nylon zipper', 'zipper rolls', 'closed end zipper', 'open end zipper', 'two way zipper', 'size 3 zipper', 'size 5 zipper', 'size 8 zipper', 'garment zipper', 'bag zipper', 'sun protective jacket zipper'],
  ru: ['Weiwei Zipper', 'производитель молний в Иу', 'фабрика молний в Иу', 'поставщик молний в Иу', 'оптовые молнии Иу', 'молнии на заказ', 'рулонные молнии', 'молнии Иу Международный торговый город', 'молнии район 3 Международного торгового города', 'металлическая молния', 'смоляная молния', 'нейлоновая молния', 'неразъемная молния', 'разъемная молния', 'двухзамковая молния', 'молния размер 3', 'молния размер 5', 'молния размер 8', 'молния для одежды', 'молния для сумок', 'молния для солнцезащитной куртки'],
  es: ['Weiwei Zipper', 'fabricante de cremalleras en Yiwu', 'fábrica de cremalleras en Yiwu', 'proveedor de cremalleras en Yiwu', 'cremalleras al por mayor en Yiwu', 'cremalleras personalizadas', 'cremalleras por rollo', 'cremalleras en Yiwu International Trade City', 'cremalleras en el Distrito 3 del International Trade City', 'cremallera metálica', 'cremallera de resina', 'cremallera de nylon', 'cremallera cerrada', 'cremallera abierta', 'cremallera de doble cursor', 'cremallera tamaño 3', 'cremallera tamaño 5', 'cremallera tamaño 8', 'cremallera para prendas', 'cremallera para bolsos', 'cremallera para ropa con protección solar'],
  ar: ['Weiwei Zipper', 'مصنع سحابات في ييوو', 'شركة سحابات في ييوو', 'مورد سحابات في ييوو', 'سحابات جملة في ييوو', 'سحابات مخصصة', 'سحابات رول', 'سحابات مدينة ييوو للتجارة الدولية', 'سحابات المنطقة الثالثة في مدينة التجارة الدولية', 'سحاب معدني', 'سحاب راتنج', 'سحاب نايلون', 'سحاب مغلق', 'سحاب مفتوح', 'سحاب مزدوج', 'سحاب مقاس 3', 'سحاب مقاس 5', 'سحاب مقاس 8', 'سحاب للملابس', 'سحاب للحقائب', 'سحاب للملابس الواقية من الشمس'],
} as const;

/**
 * Distinct alternate names for a schema node, minus whatever that node already
 * uses as its `name`.
 *
 * In most locales siteName, siteNameEn and shortBrand hold the same string, so
 * spelling the array out by hand produced ["Weiwei Zipper","Weiwei Zipper"].
 *
 * Returns undefined rather than [] when nothing is left, so `JSON.stringify`
 * drops the property instead of emitting an empty list.
 */
function alternateNames(primary: string, ...candidates: string[]) {
  const names = [...new Set(candidates)].filter((value) => value && value !== primary);
  return names.length > 0 ? names : undefined;
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1e3a8a',
};

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const homeContent = getHomeContent(locale);
  const siteBrand = getSiteBrand(locale);
  const defaultTitle = homeContent.metadata.title;
  const description = homeContent.metadata.description;
  const siteName = siteBrand.siteName;
  const localeMeta = LOCALE_METADATA[(locale as Locale) ?? 'en'] ?? LOCALE_METADATA.en;
  const companyName = localeMeta.companyName;
  const alternateLocales = routing.locales
    .filter((item) => item !== locale)
    .map((item) => LOCALE_METADATA[item].ogLocale);

  return {
    title: {
      default: defaultTitle,
      template: `%s | ${siteName}`,
    },
    description,
    keywords: [...(LOCALE_KEYWORDS[(locale as keyof typeof LOCALE_KEYWORDS)] ?? LOCALE_KEYWORDS.en)],
    authors: [{ name: companyName }],
    creator: companyName,
    publisher: companyName,
    icons: {
      icon: [
        { url: `/favicon-tab.ico?v=${ICON_CACHE_BUST}`, type: 'image/x-icon' },
        { url: `/favicon-tab.png?v=${ICON_CACHE_BUST}`, sizes: '512x512', type: 'image/png' },
      ],
      shortcut: [{ url: `/favicon-tab.ico?v=${ICON_CACHE_BUST}`, type: 'image/x-icon' }],
      apple: [{ url: `/apple-icon-tab.png?v=${ICON_CACHE_BUST}`, sizes: '180x180', type: 'image/png' }],
    },
    openGraph: {
      type: 'website',
      locale: localeMeta.ogLocale,
      alternateLocale: alternateLocales,
      title: defaultTitle,
      description,
      siteName,
      url: localizedUrl(locale),
      images: [
        {
          // Purpose-built 1200x630 card. The logo used to stand in here, but it
          // is 3:2 and was being declared as 1200x630 regardless.
          url: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
          width: 1200,
          height: 630,
          alt: siteBrand.logoAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: defaultTitle,
      description,
      images: [`${SITE_URL}${DEFAULT_OG_IMAGE}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      ...alternatesForPath(locale),
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION || '',
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Organization + WebSite JSON-LD structured data
function StructuredData({ locale }: { locale: string }) {
  const homeContent = getHomeContent(locale);
  const siteBrand = getSiteBrand(locale);
  const localeMeta = LOCALE_METADATA[(locale as Locale) ?? 'en'] ?? LOCALE_METADATA.en;
  const companyName = localeMeta.companyName;
  const siteName = siteBrand.siteName;
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': SCHEMA_ID.organization,
    name: companyName,
    legalName: COMPANY_NAME_EN,
    alternateName: alternateNames(companyName, siteBrand.siteName, siteBrand.siteNameEn, siteBrand.shortBrand),
    url: SITE_URL,
    // ImageObject rather than a bare URL: article pages point their
    // `publisher` at this node by `@id`, and Google's Article documentation
    // asks for the publisher logo in that form.
    logo: { '@type': 'ImageObject', '@id': `${SITE_URL}/#logo`, url: `${SITE_URL}${siteBrand.logoPath}` },
    image: `${SITE_URL}${siteBrand.logoPath}`,
    description: homeContent.metadata.description,
    foundingDate: siteBrand.foundedYear,
    brand: {
      '@type': 'Brand',
      '@id': SCHEMA_ID.brand,
      name: siteBrand.siteNameEn,
      alternateName: alternateNames(siteBrand.siteNameEn, siteBrand.siteName, siteBrand.shortBrand),
      url: SITE_URL,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_ADDRESS_EN,
      addressLocality: 'Yiwu',
      addressRegion: 'Zhejiang',
      postalCode: '322000',
      addressCountry: 'CN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: CONTACT_PHONE,
      email: CONTACT_EMAIL,
      contactType: 'sales',
      availableLanguage: ['English', 'Chinese', 'Russian', 'Spanish', 'Arabic'],
    },
    knowsAbout: ['metal zipper', 'resin zipper', 'nylon zipper', 'garment accessories', 'zipper manufacturing'],
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': SCHEMA_ID.website,
    name: siteName,
    alternateName: alternateNames(siteName, siteBrand.siteName, siteBrand.siteNameEn),
    url: SITE_URL,
    inLanguage: htmlLangFor(locale),
    // Reference rather than repeat: the full Organization node is emitted just
    // above, on this same page.
    publisher: schemaRef(SCHEMA_ID.organization),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  // Validate locale
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();
  const localeMeta = LOCALE_METADATA[(locale as Locale) ?? 'en'] ?? LOCALE_METADATA.en;

  return (
    <html lang={htmlLangFor(locale)} dir={localeMeta.dir} suppressHydrationWarning>
      <head>
        <link rel="icon" href={`/favicon-tab.ico?v=${ICON_CACHE_BUST}`} sizes="any" />
        <link rel="icon" href={`/favicon-tab.png?v=${ICON_CACHE_BUST}`} type="image/png" sizes="512x512" />
        <link rel="shortcut icon" href={`/favicon-tab.ico?v=${ICON_CACHE_BUST}`} />
        <link rel="apple-touch-icon" href={`/apple-icon-tab.png?v=${ICON_CACHE_BUST}`} />
        <meta name="baidu-site-verification" content={BAIDU_SITE_VERIFICATION} />
        <meta name="360-site-verification" content={QIHOO_SITE_VERIFICATION} />
        <StructuredData locale={locale} />
      </head>
      <body
        className="antialiased min-h-screen flex flex-col bg-white text-gray-900"
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppFloat />
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
