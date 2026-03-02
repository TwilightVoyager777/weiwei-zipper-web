import { alternatesForPath } from '@/lib/url';
import { faqPageContent } from '@/content/faq';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: faqPageContent.metadata.title,
    description: faqPageContent.metadata.description,
    alternates: alternatesForPath(locale, '/faq'),
  };
}

export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqPageContent.items.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{faqPageContent.title}</h1>
          <p className="text-lg text-gray-600 mb-10">{faqPageContent.subtitle}</p>
          <div className="space-y-6">
            {faqPageContent.items.map(({ question, answer }, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <h2 className="text-base font-semibold text-gray-900 p-5 bg-gray-50">{question}</h2>
                <p className="text-sm text-gray-600 p-5 leading-relaxed">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
