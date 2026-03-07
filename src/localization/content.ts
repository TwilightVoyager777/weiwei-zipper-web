import { routing } from './routing';

export type AppLocale = (typeof routing.locales)[number];
export type LocalizedContentMap<T> = Partial<Record<AppLocale, T>>;

const localeSet = new Set<string>(routing.locales);

export function isSupportedLocale(locale: string): locale is AppLocale {
  return localeSet.has(locale);
}

export function normalizeContentLocale(locale: string): AppLocale {
  return isSupportedLocale(locale) ? locale : routing.defaultLocale;
}

export function getLocalizedContent<TByLocale extends Partial<Record<AppLocale, unknown>>>(
  contentByLocale: TByLocale,
  locale: string,
): TByLocale[keyof TByLocale] {
  const normalizedLocale = normalizeContentLocale(locale);
  const localizedContent = contentByLocale[normalizedLocale];
  if (localizedContent !== undefined) {
    return localizedContent as TByLocale[keyof TByLocale];
  }

  const defaultContent = contentByLocale[routing.defaultLocale];
  if (defaultContent !== undefined) {
    return defaultContent as TByLocale[keyof TByLocale];
  }

  const firstAvailableContent = Object.values(contentByLocale)[0];
  if (firstAvailableContent !== undefined) {
    return firstAvailableContent as TByLocale[keyof TByLocale];
  }

  throw new Error(`Localized content is missing for locale "${locale}" and no fallback is available.`);
}
