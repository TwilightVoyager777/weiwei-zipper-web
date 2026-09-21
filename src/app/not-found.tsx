'use client';

import { useEffect, useState } from 'react';
import { routing } from '@/localization/routing';
import { htmlLangFor } from '@/seo/schema';

/**
 * Root 404.
 *
 * `[locale]/not-found.tsx` never renders: both dynamic routes set
 * `dynamicParams = false`, so an unknown slug is rejected at the routing layer
 * before the `[locale]` tree is entered, and a path that matches no segment at
 * all never had a locale to begin with. Without this file every 404 fell back
 * to Next.js's built-in English page.
 *
 * The root layout is a pass-through, so this page owns its own <html>/<body>.
 *
 * The copy is inlined rather than read from the message catalogues: this page
 * sits outside the next-intl tree by construction, and importing all five
 * catalogues to resolve one string would ship every UI string in the site to a
 * page nobody should reach. Keep in sync with the `NotFound` namespace.
 */
const COPY = {
  en: { message: 'Page not found. Redirecting to the homepage...', home: 'Home', products: 'Products', contact: 'Contact' },
  zh: { message: '页面不存在，正在返回首页...', home: '首页', products: '产品中心', contact: '联系我们' },
  es: { message: 'Página no encontrada. Redirigiendo al inicio...', home: 'Inicio', products: 'Productos', contact: 'Contacto' },
  ru: { message: 'Страница не найдена. Перенаправляем на главную...', home: 'Главная', products: 'Продукция', contact: 'Контакты' },
  ar: { message: 'الصفحة غير موجودة. يتم التحويل إلى الصفحة الرئيسية...', home: 'الرئيسية', products: 'المنتجات', contact: 'اتصل بنا' },
} as const;

type Locale = keyof typeof COPY;

export default function NotFound() {
  // Nothing upstream resolved a locale, so read it off the path.
  const [locale, setLocale] = useState<Locale>(routing.defaultLocale as Locale);

  useEffect(() => {
    const segment = window.location.pathname.split('/')[1];
    const detected = (routing.locales as readonly string[]).includes(segment)
      ? (segment as Locale)
      : (routing.defaultLocale as Locale);
    setLocale(detected);

    // Same behaviour as the locale-level page it replaces: send the visitor to
    // the home page of their own language rather than to the English one.
    const home = detected === routing.defaultLocale ? '/' : `/${detected}`;
    const timer = setTimeout(() => window.location.replace(home), 2000);
    return () => clearTimeout(timer);
  }, []);

  const copy = COPY[locale];
  const prefix = locale === routing.defaultLocale ? '' : `/${locale}`;

  return (
    <html lang={htmlLangFor(locale)} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        {/* A 404 must never be indexed, and this page is rendered for every
            unmatched URL on the site. */}
        <meta name="robots" content="noindex, nofollow" />
        <title>404</title>
      </head>
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif', background: '#fff', color: '#111827' }}>
        <main style={{ maxWidth: 640, margin: '0 auto', padding: '96px 16px', textAlign: 'center' }}>
          <p style={{ fontSize: 48, fontWeight: 700, margin: '0 0 12px', color: '#1e3a8a' }}>404</p>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: '#4b5563', margin: '0 0 32px' }}>{copy.message}</p>
          {/* Real links, so the page still works if the redirect is slow or
              JavaScript never runs. */}
          <nav style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap', fontSize: 15 }}>
            <a href={prefix || '/'} style={{ color: '#1e40af' }}>{copy.home}</a>
            <a href={`${prefix}/products`} style={{ color: '#1e40af' }}>{copy.products}</a>
            <a href={`${prefix}/contact`} style={{ color: '#1e40af' }}>{copy.contact}</a>
          </nav>
        </main>
      </body>
    </html>
  );
}
