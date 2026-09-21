import { pageMetadata } from '@/seo/page-metadata';
import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Link } from '@/localization/navigation';
import { getYiwuZipperLandingContent } from '@/site-data/market-landing-content';
import { getSiteBrand } from '@/site-data/site-content';
import { localizedUrl } from '@/seo/localized-urls';
import { SCHEMA_ID, schemaRef } from '@/seo/schema';
import {
  BOOTH_LATITUDE,
  BOOTH_LONGITUDE,
  COMPANY_ADDRESS_EN,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  FOUNDED_YEAR,
  MAP_EMBED_URL,
  MAP_OPEN_URL,
  OPENING_HOURS_SCHEMA,
  SITE_URL,
  WHATSAPP_URL,
} from '@/config/site-constants';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = getYiwuZipperLandingContent(locale);

  return pageMetadata({
    locale,
    path: '/yiwu-zipper-supplier',
    title: content.metadata.title,
    description: content.metadata.description,
  });
}

export default async function YiwuZipperSupplierPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = getYiwuZipperLandingContent(locale);
  const brand = getSiteBrand(locale);
  const boothAlt =
    locale === 'zh'
      ? '伟伟拉链义乌国际商贸城摊位实拍'
      : locale === 'es'
        ? 'Puesto de Weiwei Zipper en Yiwu International Trade City'
        : locale === 'ar'
          ? 'صورة جناح Weiwei Zipper في مدينة ييوو التجارية الدولية'
          : locale === 'ru'
            ? 'Стенд Weiwei Zipper в Yiwu International Trade City'
            : 'Weiwei Zipper booth at Yiwu International Trade City';

  // The page targets "Yiwu zipper supplier"; the competing listings that rank
  // for it are physical stalls described with their exact address. WholesaleStore
  // rather than Store because nothing here is sold at retail.
  const storeSchema = {
    '@context': 'https://schema.org',
    '@type': 'WholesaleStore',
    '@id': SCHEMA_ID.yiwuStore,
    name: brand.siteNameEn,
    // No `legalName` here. This node is the booth in the trade city, a location
    // of the company — giving it the company's legal name *and* naming the same
    // company as its parent made the two entities indistinguishable. The legal
    // name now lives only on the Organization node, which the layout emits on
    // this page and which `parentOrganization` points at.
    url: localizedUrl(locale, '/yiwu-zipper-supplier'),
    image: `${SITE_URL}/hero/tanwei.png`,
    telephone: CONTACT_PHONE,
    email: CONTACT_EMAIL,
    foundingDate: FOUNDED_YEAR,
    openingHours: OPENING_HOURS_SCHEMA,
    hasMap: MAP_OPEN_URL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_ADDRESS_EN,
      addressLocality: 'Yiwu',
      addressRegion: 'Zhejiang',
      postalCode: '322000',
      addressCountry: 'CN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BOOTH_LATITUDE,
      longitude: BOOTH_LONGITUDE,
    },
    parentOrganization: schemaRef(SCHEMA_ID.organization),
    // No priceRange: this is a quote-only supplier with no published prices.
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${localizedUrl(locale, '/yiwu-zipper-supplier')}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: brand.siteName, item: localizedUrl(locale) },
      { '@type': 'ListItem', position: 2, name: content.title },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-10 sm:py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="mx-auto max-w-5xl">
        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">{content.title}</h1>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">{content.subtitle}</p>
            <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">{content.intro}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-lg bg-blue-800 px-6 py-3 font-semibold text-white transition hover:bg-blue-900"
              >
                {content.primaryCta}
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-900 transition hover:border-gray-400"
              >
                {content.secondaryCta}
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <Image
              src="/hero/tanwei.png"
              alt={boothAlt}
              width={3024}
              height={1614}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </section>

        <section className="mt-12 sm:mt-14">
          <h2 className="text-2xl font-bold text-gray-900">{content.highlightsTitle}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {content.highlights.map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 sm:mt-14">
          <h2 className="text-2xl font-bold text-gray-900">{content.categoriesTitle}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {content.categories.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-xl border border-blue-100 bg-blue-50 p-5 transition hover:border-blue-200 hover:bg-blue-100/60"
              >
                <h3 className="text-lg font-semibold text-blue-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-blue-900/75">{item.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:mt-14 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900">{content.checklistTitle}</h2>
          <ul className="mt-5 space-y-3">
            {content.checklist.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-6 text-gray-700 sm:text-base">
                <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-blue-700" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* The booth address, hours and history lived only in the footer and on
            /contact. Competing stalls rank on exactly this, so the page that
            targets "Yiwu zipper supplier" should carry it too. */}
        <section className="mt-12 sm:mt-14">
          <h2 className="text-2xl font-bold text-gray-900">{content.visit.title}</h2>
          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">{content.visit.note}</p>
          <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <dl className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">{content.visit.addressLabel}</dt>
                <dd className="mt-1.5 text-sm leading-6 text-gray-900">{brand.currentAddress}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">{content.visit.hoursLabel}</dt>
                <dd className="mt-1.5 text-sm leading-6 text-gray-900">{brand.businessHours}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">{content.visit.sinceLabel}</dt>
                <dd className="mt-1.5 text-sm leading-6 text-gray-900">{FOUNDED_YEAR}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">{content.visit.contactLabel}</dt>
                <dd className="mt-1.5 space-y-1 text-sm leading-6">
                  <a href={`tel:${CONTACT_PHONE.replace(/[^\d+]/g, '')}`} className="block text-blue-800 hover:underline">
                    <span dir="ltr">{CONTACT_PHONE}</span>
                  </a>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block text-blue-800 hover:underline">
                    <span dir="ltr">WhatsApp {brand.whatsapp}</span>
                  </a>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="block break-all text-blue-800 hover:underline">
                    <span dir="ltr">{CONTACT_EMAIL}</span>
                  </a>
                </dd>
              </div>
              <a
                href={MAP_OPEN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-semibold text-blue-800 hover:underline"
              >
                {content.visit.mapLinkLabel}
              </a>
            </dl>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <iframe
                src={MAP_EMBED_URL}
                title={content.visit.title}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-[320px] w-full border-0 sm:h-full sm:min-h-[360px]"
              />
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-2xl bg-blue-900 px-6 py-8 text-white sm:mt-14 sm:px-8">
          <h2 className="text-2xl font-bold">{content.ctaTitle}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-blue-100 sm:text-base">{content.ctaDescription}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50"
            >
              {content.primaryCta}
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              {content.secondaryCta}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
