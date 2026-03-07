import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'zh', 'ru', 'es', 'ar'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
});

export type Locale = (typeof routing.locales)[number];

export const localeDisplayNames: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
  ru: 'Русский',
  es: 'Español',
  ar: 'العربية',
};

export const localeSwitcherOrder: Locale[] = ['zh', 'en', 'es', 'ru', 'ar'];
