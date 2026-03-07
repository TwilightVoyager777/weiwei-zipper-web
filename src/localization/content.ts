import { routing } from './routing';

export type AppLocale = (typeof routing.locales)[number];

const localeSet = new Set<string>(routing.locales);

export function isSupportedLocale(locale: string): locale is AppLocale {
  return localeSet.has(locale);
}

export function normalizeContentLocale(locale: string): AppLocale {
  return isSupportedLocale(locale) ? locale : routing.defaultLocale;
}

export function getLocalizedContent<TByLocale extends Record<AppLocale, unknown>>(
  contentByLocale: TByLocale,
  locale: string,
): TByLocale[AppLocale] {
  const normalizedLocale = normalizeContentLocale(locale);
  return contentByLocale[normalizedLocale] ?? contentByLocale[routing.defaultLocale];
}
