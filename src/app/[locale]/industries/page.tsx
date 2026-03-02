import { Link } from '@/i18n/navigation';
import { alternatesForPath } from '@/lib/url';
import { useCasesContent } from '@/content/site';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: useCasesContent.metadata.title,
    description: useCasesContent.metadata.description,
    alternates: alternatesForPath(locale, '/industries'),
  };
}

export default function IndustriesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{useCasesContent.title}</h1>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">{useCasesContent.subtitle}</p>
        <p className="text-gray-600 leading-relaxed">{useCasesContent.introText}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {useCasesContent.items.map((item) => (
          <div key={item.slug} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold text-gray-900 mb-3">{item.name}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
            <div className="border-t border-gray-100 pt-4">
              <h3 className="text-sm font-semibold text-gray-800 mb-2">{useCasesContent.keyLabel}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.focus}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{useCasesContent.whyChoose.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {useCasesContent.whyChoose.items.map((item) => (
            <div key={item.title}>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-900 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">{useCasesContent.ctaTitle}</h2>
        <p className="text-blue-100 mb-6 max-w-xl mx-auto">{useCasesContent.ctaDescription}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded font-semibold hover:bg-blue-50 transition-colors">
            {useCasesContent.ctaPrimary}
          </Link>
          <Link href="/products" className="border border-white/30 px-8 py-3 rounded font-medium hover:bg-white/10 transition-colors">
            {useCasesContent.ctaSecondary}
          </Link>
        </div>
      </section>
    </div>
  );
}
