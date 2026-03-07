import { SITE_URL } from '@/config/site-constants';
import { routing } from '@/localization/routing';

/**
 * Generate locale-aware URL for metadata (canonical, alternates, etc.)
 * Default locale has no prefix; all others use /{locale}.
 */
export function localizedUrl(locale: string, path: string = '') {
  const normalizedLocale = routing.locales.includes(locale as any) ? locale : routing.defaultLocale;
  return normalizedLocale === routing.defaultLocale
    ? `${SITE_URL}${path}`
    : `${SITE_URL}/${normalizedLocale}${path}`;
}

/**
 * Generate standard alternates metadata for a given path.
 */
export function alternatesForPath(locale: string, path: string = '') {
  const languages = Object.fromEntries(
    routing.locales.map((item) => [item, localizedUrl(item, path)]),
  ) as Record<string, string>;

  return {
    canonical: localizedUrl(locale, path),
    languages: {
      ...languages,
      'x-default': localizedUrl(routing.defaultLocale, path),
    },
  };
}
