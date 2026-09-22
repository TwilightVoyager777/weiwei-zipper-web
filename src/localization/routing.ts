import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'zh', 'ru', 'es', 'ar'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  // An unprefixed URL is the English page for every visitor. Redirecting it by
  // Accept-Language or cookie made `/faq` mean different pages to different
  // clients, and Googlebot — which crawls without Accept-Language from US IPs —
  // saw a default page that humans were bounced away from. The locale now
  // comes from the path alone; the header switcher is how people change it.
  localeDetection: false,
  // The cookie only exists to feed detection, so with detection off it would
  // just add a Set-Cookie to otherwise cacheable responses.
  localeCookie: false,
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
