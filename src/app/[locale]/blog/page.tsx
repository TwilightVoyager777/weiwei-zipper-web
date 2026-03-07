import { Link } from '@/localization/navigation';
import { alternatesForPath } from '@/seo/localized-urls';
import { getAllBlogPosts } from '@/site-data/blog-posts';
import { getBlogContent } from '@/site-data/site-content';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const blogContent = getBlogContent(locale);
  return {
    title: blogContent.metadata.title,
    description: blogContent.metadata.description,
    alternates: alternatesForPath(locale, '/blog'),
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const blogContent = getBlogContent(locale);
  const posts = getAllBlogPosts(locale);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{blogContent.title}</h1>
        <p className="text-lg text-gray-600 mb-12">{blogContent.subtitle}</p>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-3">
            {blogContent.allArticles}
          </h2>
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-3">
                  <span className="bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full text-xs font-medium">
                    {blogContent.categories[post.category as keyof typeof blogContent.categories] || blogContent.categories.general}
                  </span>
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime} {blogContent.readTimeLabel}</span>
                </div>
                <Link href={`/blog/${post.slug}` as any} className="block group">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-800 transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="text-blue-800 text-sm font-medium group-hover:underline">
                    {blogContent.readMoreLabel} →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 bg-white border border-gray-200 rounded-lg p-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">{blogContent.faq.title}</h2>
          <p className="text-gray-600 mb-6">{blogContent.faq.description}</p>
          <Link
            href="/faq"
            className="inline-block border border-blue-800 text-blue-800 px-6 py-3 rounded font-medium hover:bg-blue-50 transition-colors"
          >
            {blogContent.faq.button}
          </Link>
        </section>

        <section className="mt-16 bg-blue-50 border border-blue-100 rounded-lg p-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">{blogContent.cta.title}</h2>
          <p className="text-gray-600 mb-6">{blogContent.cta.description}</p>
          <Link
            href="/quote"
            className="inline-block bg-blue-800 text-white px-6 py-3 rounded font-medium hover:bg-blue-900 transition-colors"
          >
            {blogContent.cta.button}
          </Link>
        </section>
      </div>
    </div>
  );
}
