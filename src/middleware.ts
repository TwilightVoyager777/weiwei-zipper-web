import createMiddleware from 'next-intl/middleware';
import type { NextRequest } from 'next/server';
import { routing } from './localization/routing';

// www → non-www redirect should be handled at the DNS/hosting level
// (e.g., Vercel domain settings or Cloudflare page rules),
// NOT in middleware, to avoid redirect loops.
const handleI18nRouting = createMiddleware(routing);

/** A path that already carries a locale prefix resolves to exactly one page. */
const HAS_LOCALE_PREFIX = new RegExp(`^/(${routing.locales.join('|')})(/|$)`);

function addVary(existing: string | null, ...values: string[]) {
  const seen = new Set(
    (existing ?? '')
      .split(',')
      .map((value) => value.trim())
      .filter(Boolean)
      .map((value) => value.toLowerCase()),
  );
  const merged = existing ? [existing] : [];
  for (const value of values) {
    if (!seen.has(value.toLowerCase())) {
      seen.add(value.toLowerCase());
      merged.push(value);
    }
  }
  return merged.join(', ');
}

export default function middleware(request: NextRequest) {
  const response = handleI18nRouting(request);

  // `localePrefix: 'as-needed'` leaves the default locale unprefixed, and
  // next-intl's locale detection reads Accept-Language and the NEXT_LOCALE
  // cookie. So `/products` is either the English page or a 307 to another
  // locale, depending on who asks — and those unprefixed URLs are the
  // `x-default` target of all 175 pages. Without Vary a shared cache is
  // entitled to serve the first visitor's outcome to everyone behind it.
  //
  // Scoped to unprefixed paths on purpose: `Vary: Cookie` on `/zh/products`
  // would fragment the edge cache for a response that cannot vary.
  if (!HAS_LOCALE_PREFIX.test(request.nextUrl.pathname)) {
    response.headers.set(
      'Vary',
      addVary(response.headers.get('Vary'), 'Accept-Language', 'Cookie'),
    );
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|images|favicon|apple-icon|.*\\..*).*)'],
};
