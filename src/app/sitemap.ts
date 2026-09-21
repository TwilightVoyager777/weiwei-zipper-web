import { MetadataRoute } from 'next';
import { routing } from '@/localization/routing';
import { alternatesForPath, localizedUrl } from '@/seo/localized-urls';
import { PRODUCT_SLUGS, CATEGORY_SLUGS } from '@/site-data/product-catalog';
import { BLOG_SLUGS, getBlogPostMeta } from '@/site-data/blog-posts';

/**
 * Real publication date for a post, or undefined when the frontmatter has none.
 *
 * Every URL used to carry the build timestamp as its lastModified, which made
 * the whole sitemap claim that all 175 pages changed on every deploy. Google
 * ignores a lastmod it cannot trust, so an absent date is worth more than a
 * wrong one — hence undefined rather than a fallback to `now`.
 */
function blogPostDate(slug: string, locale: string): Date | undefined {
  const raw = getBlogPostMeta(slug, locale).date;
  if (!raw) return undefined;
  const parsed = new Date(raw);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed;
}

/**
 * Newest post date in a locale, used as the blog index's lastmod.
 *
 * The index lists the posts, so it genuinely changes when the newest one does —
 * unlike the other static routes, this is a real date rather than a guess.
 */
function blogIndexDate(locale: string): Date | undefined {
  const dates = BLOG_SLUGS.map((slug) => blogPostDate(slug, locale)).filter(
    (date): date is Date => date !== undefined,
  );
  if (dates.length === 0) return undefined;
  return new Date(Math.max(...dates.map((date) => date.getTime())));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = routing.locales;
  const routes = ['', '/products', '/about', '/contact', '/quote', '/industries', '/services', '/faq', '/blog', '/yiwu-zipper-supplier', '/privacy-policy', '/terms-of-service'];
  // Static and product pages have no per-page date source in the content model,
  // so they are published without a lastmod rather than with a fabricated one.
  const now = undefined;

  const entries: MetadataRoute.Sitemap = [];

  // Static pages for each locale
  for (const locale of locales) {
    const blogIndexLastModified = blogIndexDate(locale);

    for (const route of routes) {
      entries.push({
        url: localizedUrl(locale, route),
        lastModified: route === '/blog' ? blogIndexLastModified : now,
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : route === '/products' ? 0.9 : 0.8,
        alternates: alternatesForPath(locale, route).languages ? { languages: alternatesForPath(locale, route).languages } : undefined,
      });
    }

    // Product category pages
    for (const slug of CATEGORY_SLUGS) {
      entries.push({
        url: localizedUrl(locale, `/products/${slug}`),
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.85,
        alternates: alternatesForPath(locale, `/products/${slug}`).languages ? { languages: alternatesForPath(locale, `/products/${slug}`).languages } : undefined,
      });
    }

    // Blog article pages
    for (const slug of BLOG_SLUGS) {
      entries.push({
        url: localizedUrl(locale, `/blog/${slug}`),
        lastModified: blogPostDate(slug, locale),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: alternatesForPath(locale, `/blog/${slug}`).languages ? { languages: alternatesForPath(locale, `/blog/${slug}`).languages } : undefined,
      });
    }

    // Product detail pages
    for (const slug of PRODUCT_SLUGS) {
      entries.push({
        url: localizedUrl(locale, `/products/${slug}`),
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: alternatesForPath(locale, `/products/${slug}`).languages ? { languages: alternatesForPath(locale, `/products/${slug}`).languages } : undefined,
      });
    }
  }

  return entries;
}
