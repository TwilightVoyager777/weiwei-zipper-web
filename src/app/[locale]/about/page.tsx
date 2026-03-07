import Image from 'next/image';
import { alternatesForPath } from '@/seo/localized-urls';
import { getAboutContent } from '@/site-data/site-content';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const aboutContent = getAboutContent(locale);
  return {
    title: aboutContent.metadata.title,
    description: aboutContent.metadata.description,
    alternates: alternatesForPath(locale, '/about'),
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const aboutContent = getAboutContent(locale);
  const imageAlt = locale === 'zh' ? '伟伟拉链义乌国际商贸城摊位实拍' : 'Weiwei Zipper booth at Yiwu International Trade City';

  return (
    <div className="container mx-auto px-4 py-10 sm:py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{aboutContent.title}</h1>
        <p className="text-base sm:text-lg text-gray-600 mb-10 sm:mb-12">{aboutContent.subtitle}</p>

        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{aboutContent.story.title}</h2>
          <div className="prose prose-gray max-w-none space-y-4">
            {aboutContent.story.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-gray-700 leading-relaxed">{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 overflow-hidden rounded-xl sm:rounded-2xl border border-gray-200 bg-white shadow-sm">
            <Image
              src="/hero/tanwei.png"
              alt={imageAlt}
              width={3024}
              height={1614}
              priority
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{aboutContent.capabilities.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {aboutContent.capabilities.items.map((item) => (
              <div key={`${item.value}-${item.label}`} className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-900 mb-1">{item.value}</div>
                <div className="text-sm text-blue-700/70">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{aboutContent.mission.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aboutContent.mission.items.map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
