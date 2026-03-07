import { alternatesForPath } from '@/seo/localized-urls';
import { getQuoteContent } from '@/site-data/site-content';
import type { Metadata } from 'next';
import InquiryPageLayout from '@/components/InquiryPageLayout';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const quoteContent = getQuoteContent(locale);
  return {
    title: quoteContent.metadata.title,
    description: quoteContent.metadata.description,
    alternates: alternatesForPath(locale, '/quote'),
  };
}

export default async function QuotePage({ params }: Props) {
  const { locale } = await params;
  const quoteContent = getQuoteContent(locale);

  return <InquiryPageLayout content={quoteContent} />;
}
