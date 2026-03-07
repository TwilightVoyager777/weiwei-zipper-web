import { Link } from '@/localization/navigation';
import { alternatesForPath } from '@/seo/localized-urls';
import { getSolutionsPageContent } from '@/site-data/solution-content';
import type { Metadata } from 'next';
import Image from 'next/image';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const solutionsPageContent = getSolutionsPageContent(locale);
  return {
    title: solutionsPageContent.metadata.title,
    description: solutionsPageContent.metadata.description,
    alternates: alternatesForPath(locale, '/services'),
  };
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  const solutionsPageContent = getSolutionsPageContent(locale);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{solutionsPageContent.title}</h1>
        <p className="text-lg text-gray-600 mb-6">{solutionsPageContent.subtitle}</p>
        <p className="text-gray-600 mb-10 leading-relaxed">{solutionsPageContent.introText}</p>

        <div className="space-y-8">
          {solutionsPageContent.items.map((item) => (
            <div key={item.title} className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">{item.detail}</p>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">{solutionsPageContent.whatWeOffer}</h3>
              <ul className="space-y-2">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
              {item.imagePath ? (
                <div className="relative mt-5 overflow-hidden rounded-lg border border-gray-100 bg-gray-50">
                  <div className="relative aspect-[16/8] w-full">
                    <Image
                      src={item.imagePath}
                      alt={item.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 896px, 100vw"
                    />
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <section className="mt-12 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{solutionsPageContent.process.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutionsPageContent.process.steps.map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">{index + 1}</div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">{step.title}</h3>
                <p className="text-xs text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">{solutionsPageContent.ctaText}</p>
          <Link href="/quote" className="bg-blue-800 text-white px-8 py-3 rounded font-semibold hover:bg-blue-900 transition-colors inline-block">
            {solutionsPageContent.ctaButton}
          </Link>
        </div>
      </div>
    </div>
  );
}
