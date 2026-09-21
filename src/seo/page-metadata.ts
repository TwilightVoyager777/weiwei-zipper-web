import type { Metadata } from 'next';
import { SITE_URL } from '@/config/site-constants';
import { routing } from '@/localization/routing';
import { getSiteBrand } from '@/site-data/site-content';
import { alternatesForPath, localizedUrl } from './localized-urls';

/** Open Graph locale codes, keyed by app locale. */
export const OG_LOCALE: Record<string, string> = {
  en: 'en_US',
  zh: 'zh_CN',
  ru: 'ru_RU',
  es: 'es_ES',
  ar: 'ar_AR',
};

/** Branded 1200x630 card used whenever a page has no image of its own. */
export const DEFAULT_OG_IMAGE = '/brand/og-default.png';

type PageMetadataOptions = {
  locale: string;
  /** Path without the locale prefix, e.g. '/products/metal-zippers'. */
  path?: string;
  title: string;
  description: string;
  /** Site-relative image path. Falls back to the branded default card. */
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
};

/**
 * Build the full metadata for a page, including its own Open Graph and Twitter
 * cards.
 *
 * Without this, pages returned only title/description/alternates and inherited
 * `openGraph` from the locale layout, so every URL shared on WhatsApp, WeChat
 * or LinkedIn previewed as the home page: same title, same description, and an
 * `og:url` pointing at the site root rather than at the page itself.
 */
export function pageMetadata({
  locale,
  path = '',
  title,
  description,
  image,
  imageAlt,
  type = 'website',
  publishedTime,
}: PageMetadataOptions): Metadata {
  const brand = getSiteBrand(locale);
  const url = localizedUrl(locale, path);
  const imagePath = image ?? DEFAULT_OG_IMAGE;
  const isDefaultImage = imagePath === DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    alternates: alternatesForPath(locale, path),
    openGraph: {
      type,
      locale: OG_LOCALE[locale] ?? OG_LOCALE[routing.defaultLocale],
      alternateLocale: routing.locales
        .filter((item) => item !== locale)
        .map((item) => OG_LOCALE[item]),
      title,
      description,
      siteName: brand.siteName,
      url,
      ...(type === 'article' && publishedTime ? { publishedTime } : {}),
      images: [
        {
          url: `${SITE_URL}${imagePath}`,
          // Only the default card has known dimensions; product photography
          // varies, and a wrong width/height is worse than none.
          ...(isDefaultImage ? { width: 1200, height: 630 } : {}),
          alt: imageAlt ?? title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_URL}${imagePath}`],
    },
  };
}
