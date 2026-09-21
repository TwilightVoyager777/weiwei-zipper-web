import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'zh', 'ru', 'es', 'ar'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  // The middleware's hreflang `Link` header is built from the request Host, so
  // on any hostname other than the canonical one (an apex domain, a
  // *.vercel.app preview) it advertises alternates that contradict the HTML
  // tags and the sitemap, both of which use the fixed SITE_URL. Those two
  // already satisfy Google, which needs only one of the three signals.
  alternateLinks: false,
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
