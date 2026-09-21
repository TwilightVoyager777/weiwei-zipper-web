import { pageMetadata } from '@/seo/page-metadata';
import { setRequestLocale } from 'next-intl/server';
import { getQuoteContent } from '@/site-data/site-content';
import type { Metadata } from 'next';
import InquiryPageLayout from '@/components/InquiryPageLayout';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const quoteContent = getQuoteContent(locale);
  return pageMetadata({
    locale,
    path: '/quote',
    title: quoteContent.metadata.title,
    description: quoteContent.metadata.description,
  });
}

export default async function QuotePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const quoteContent = getQuoteContent(locale);

  return <InquiryPageLayout content={quoteContent} />;
}
