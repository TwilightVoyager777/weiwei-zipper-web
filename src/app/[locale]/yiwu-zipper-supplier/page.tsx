import Image from 'next/image';
import type { Metadata } from 'next';
import { Link } from '@/localization/navigation';
import { alternatesForPath } from '@/seo/localized-urls';
import { getYiwuZipperLandingContent } from '@/site-data/market-landing-content';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = getYiwuZipperLandingContent(locale);

  return {
    title: content.metadata.title,
    description: content.metadata.description,
    alternates: alternatesForPath(locale, '/yiwu-zipper-supplier'),
  };
}

export default async function YiwuZipperSupplierPage({ params }: Props) {
  const { locale } = await params;
  const content = getYiwuZipperLandingContent(locale);
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

  return (
    <div className="container mx-auto px-4 py-10 sm:py-12">
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
