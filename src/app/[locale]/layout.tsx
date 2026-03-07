import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing, type Locale } from '@/localization/routing';
import { SITE_URL, COMPANY_NAME_EN, COMPANY_NAME_ZH, CONTACT_EMAIL, CONTACT_PHONE, COMPANY_ADDRESS_EN } from '@/config/site-constants';
import { getHomeContent, getSiteBrand } from '@/site-data/site-content';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '../globals.css';

const ICON_CACHE_BUST = '20260302a';

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
  const isZh = locale === 'zh';
  const homeContent = getHomeContent(locale);
  const siteBrand = getSiteBrand(locale);
  const defaultTitle = homeContent.metadata.title;
  const description = homeContent.metadata.description;
  const siteName = siteBrand.siteName;
  const companyName = isZh ? COMPANY_NAME_ZH : COMPANY_NAME_EN;

  return {
    title: {
      default: defaultTitle,
      template: `%s | ${siteName}`,
    },
    description,
    keywords: isZh
      ? ['伟伟拉链', '树脂拉链', '尼龙拉链', '金属拉链', '3号拉链', '5号拉链', '8号拉链', '服装拉链', '箱包拉链', '防晒衣拉链']
      : ['Weiwei Zipper', 'metal zipper', 'resin zipper', 'nylon zipper', 'size 3 zipper', 'size 5 zipper', 'size 8 zipper', 'garment zipper', 'bag zipper', 'sun protective jacket zipper'],
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
      locale: isZh ? 'zh_CN' : 'en_US',
      alternateLocale: isZh ? 'en_US' : 'zh_CN',
      title: defaultTitle,
      description,
      siteName,
      url: isZh ? `${SITE_URL}/zh` : SITE_URL,
      images: [
        {
          url: `${SITE_URL}${siteBrand.logoPath}`,
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
      images: [`${SITE_URL}${siteBrand.logoPath}`],
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
      canonical: isZh ? `${SITE_URL}/zh` : SITE_URL,
      languages: {
        en: SITE_URL,
        zh: `${SITE_URL}/zh`,
        'x-default': SITE_URL,
      },
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
  const isZh = locale === 'zh';
  const homeContent = getHomeContent(locale);
  const siteBrand = getSiteBrand(locale);
  const companyName = isZh ? COMPANY_NAME_ZH : COMPANY_NAME_EN;
  const siteName = siteBrand.siteName;
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: companyName,
    alternateName: [
      siteBrand.siteName,
      siteBrand.siteNameEn,
      siteBrand.shortBrand,
    ],
    url: SITE_URL,
    logo: `${SITE_URL}${siteBrand.logoPath}`,
    image: `${SITE_URL}${siteBrand.logoPath}`,
    description: homeContent.metadata.description,
    foundingDate: siteBrand.foundedYear,
    brand: {
      '@type': 'Brand',
      name: siteBrand.siteNameEn,
      alternateName: [siteBrand.siteName, siteBrand.shortBrand],
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
      availableLanguage: ['English', 'Chinese'],
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
    name: siteName,
    alternateName: [siteBrand.siteName, siteBrand.siteNameEn],
    url: SITE_URL,
    inLanguage: isZh ? 'zh-CN' : 'en',
    publisher: {
      '@type': 'Organization',
      name: companyName,
    },
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

  // Validate locale
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale === 'zh' ? 'zh-CN' : 'en'} suppressHydrationWarning>
      <head>
        <link rel="icon" href={`/favicon-tab.ico?v=${ICON_CACHE_BUST}`} sizes="any" />
        <link rel="icon" href={`/favicon-tab.png?v=${ICON_CACHE_BUST}`} type="image/png" sizes="512x512" />
        <link rel="shortcut icon" href={`/favicon-tab.ico?v=${ICON_CACHE_BUST}`} />
        <link rel="apple-touch-icon" href={`/apple-icon-tab.png?v=${ICON_CACHE_BUST}`} />
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
