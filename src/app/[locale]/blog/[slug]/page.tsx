import { Link } from '@/localization/navigation';
import { alternatesForPath } from '@/seo/localized-urls';
import { getBlogPost, getBlogSlugs } from '@/site-data/blog-posts';
import { notFound } from 'next/navigation';
import { blogContent } from '@/site-data/site-content';
import type { Metadata } from 'next';
import BlogArticleContent from './BlogArticleContent';

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPost(slug, locale);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: alternatesForPath(locale, `/blog/${slug}`),
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  const post = getBlogPost(slug, locale);
  if (!post) notFound();

  const categoryLabel = blogContent.categories[post.category as keyof typeof blogContent.categories] || blogContent.categories.general;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <nav className="mb-8">
          <Link
            href="/blog"
            className="text-blue-800 text-sm font-medium hover:underline"
          >
            ← {blogContent.backToBlog}
          </Link>
        </nav>

        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
            <span className="bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full text-xs font-medium">
              {categoryLabel}
            </span>
            <span>{post.date}</span>
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
              href="/contact"
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
