import { MetadataRoute } from 'next';
import { routing } from '@/localization/routing';
import { alternatesForPath, localizedUrl } from '@/seo/localized-urls';
import { PRODUCT_SLUGS, CATEGORY_SLUGS } from '@/site-data/product-catalog';
import { BLOG_SLUGS } from '@/site-data/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = routing.locales;
  const routes = ['', '/products', '/about', '/contact', '/quote', '/industries', '/services', '/faq', '/blog', '/privacy-policy', '/terms-of-service'];
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [];

  // Static pages for each locale
  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: localizedUrl(locale, route),
        lastModified: now,
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
        lastModified: now,
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
