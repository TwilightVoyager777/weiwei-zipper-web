import { pageMetadata, DEFAULT_OG_IMAGE } from '@/seo/page-metadata';
import { localizedUrl } from '@/seo/localized-urls';
import { SITE_URL } from '@/config/site-constants';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/localization/navigation';
import { getBlogPost, getBlogSlugs } from '@/site-data/blog-posts';
import { notFound } from 'next/navigation';
import { getBlogContent, getSiteBrand } from '@/site-data/site-content';
import type { Metadata } from 'next';
import BlogArticleContent from './BlogArticleContent';

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

// See the note in products/[slug]/page.tsx: without this an unknown slug is a
// soft 404 (HTTP 200) because notFound() throws after streaming has begun.
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const post = getBlogPost(slug, locale);
  // Unreachable while dynamicParams is false; an empty object would inherit the
  // parent layout's canonical (the locale home page) instead of staying out of
  // the index.
  if (!post) return { robots: { index: false, follow: false } };

  return pageMetadata({
    locale,
    path: `/blog/${slug}`,
    title: post.title,
    description: post.excerpt,
    type: 'article',
    publishedTime: post.date || undefined,
  });
}

export default async function BlogArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const blogContent = getBlogContent(locale);
  const post = getBlogPost(slug, locale);
  if (!post) notFound();

  const categoryLabel = blogContent.categories[post.category as keyof typeof blogContent.categories] || blogContent.categories.general;
  const brand = getSiteBrand(locale);

  // The 25 article pages previously carried no content schema at all — only the
  // site-wide Organization and WebSite nodes from the layout.
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    inLanguage: locale,
    articleSection: categoryLabel,
    mainEntityOfPage: { '@type': 'WebPage', '@id': localizedUrl(locale, `/blog/${slug}`) },
    url: localizedUrl(locale, `/blog/${slug}`),
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    // The frontmatter credits the company rather than a named person, so the
    // author is the organisation. A named author would be a stronger E-E-A-T
    // signal, but inventing one is not an option.
    author: { '@type': 'Organization', name: post.author || brand.siteNameEn, url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: brand.siteNameEn,
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}${brand.logoPath}` },
    },
    ...(post.date ? { datePublished: post.date, dateModified: post.date } : {}),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: brand.siteName, item: localizedUrl(locale) },
      { '@type': 'ListItem', position: 2, name: blogContent.metadata.title, item: localizedUrl(locale, '/blog') },
      { '@type': 'ListItem', position: 3, name: post.title },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="max-w-5xl mx-auto">
        <nav className="mb-8">
          <Link
            href="/blog"
            className="text-blue-800 text-sm font-medium hover:underline"
          >
            <span className="inline-block rtl:rotate-180">←</span> {blogContent.backToBlog}
          </Link>
        </nav>

        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
            <span className="bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full text-xs font-medium">
              {categoryLabel}
            </span>
            <time dateTime={post.date}>{post.date}</time>
            <span>·</span>
            <span>{post.readTime} {blogContent.readTimeLabel}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-gray-500 text-sm">
            {blogContent.authorLabel}: {post.author}
          </p>
        </header>

        <BlogArticleContent content={post.content} />

        <section className="mt-12 bg-blue-50 border border-blue-100 rounded-lg p-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">{blogContent.cta.title}</h2>
          <p className="text-gray-600 mb-6">{blogContent.cta.description}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/quote"
              className="inline-block bg-blue-800 text-white px-6 py-3 rounded font-medium hover:bg-blue-900 transition-colors"
            >
              {blogContent.cta.button}
            </Link>
            <Link
              href="/products"
              className="inline-block border border-blue-800 text-blue-800 px-6 py-3 rounded font-medium hover:bg-blue-50 transition-colors"
            >
              {blogContent.cta.secondary}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
