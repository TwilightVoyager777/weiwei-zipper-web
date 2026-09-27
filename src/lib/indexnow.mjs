/**
 * IndexNow: tell Bing, Yandex, Seznam and Naver that a URL is new or changed.
 *
 * Bing has not indexed this site at all, and ChatGPT and Copilot search Bing's
 * index, so being absent there costs more than the search traffic alone.
 * IndexNow needs no account: the key below is published at
 * `public/<key>.txt`, and a submission is accepted only if that file is
 * reachable and contains the same key.
 *
 * Plain JavaScript with no imports, like the other modules here: the weekly
 * GitHub Actions job runs it with bare Node and never installs packages.
 */

/** Public by design — it is served at https://www.weiweizipper.com/<key>.txt. */
export const INDEXNOW_KEY = 'b720d9a7b4786e74176172829de87fa3';

/** Must match SITE_URL in src/config/site-constants.ts (a test checks this). */
export const SITE_URL = 'https://www.weiweizipper.com';

export const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/IndexNow';

/**
 * The site URL for a path in one locale. English has no prefix.
 *
 * @param {string} locale
 * @param {string} path  Path without the locale prefix, e.g. '/blog/x'.
 * @param {string} [defaultLocale]
 * @returns {string}
 */
export function localeUrl(locale, path = '', defaultLocale = 'en') {
  return locale === defaultLocale ? `${SITE_URL}${path}` : `${SITE_URL}/${locale}${path}`;
}

/**
 * Every `<loc>` in a sitemap, in document order.
 *
 * @param {string} xml
 * @returns {string[]}
 */
export function extractSitemapUrls(xml) {
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((match) => match[1]);
}

/**
 * The URLs worth submitting when an article goes live: the article itself and
 * the news index in every locale, plus the home page, which lists it.
 *
 * IndexNow asks for changed URLs only, so an empty list is the normal result
 * on a week with nothing new.
 *
 * @param {{slugsDueToday: string[], locales: string[], defaultLocale?: string}} input
 * @returns {string[]}
 */
export function urlsForRelease({ slugsDueToday, locales, defaultLocale = 'en' }) {
  if (slugsDueToday.length === 0) return [];
  const urls = [];
  for (const locale of locales) {
    for (const slug of slugsDueToday) urls.push(localeUrl(locale, `/blog/${slug}`, defaultLocale));
    urls.push(localeUrl(locale, '/blog', defaultLocale));
    urls.push(localeUrl(locale, '', defaultLocale));
  }
  return urls;
}

/**
 * The submission body. `keyLocation` is explicit so the key file can live at
 * the site root whatever the submitted URLs look like.
 *
 * @param {string[]} urlList
 * @returns {{host: string, key: string, keyLocation: string, urlList: string[]}}
 */
export function buildPayload(urlList) {
  const host = new URL(SITE_URL).host;
  const foreign = urlList.filter((url) => new URL(url).host !== host);
  if (foreign.length > 0) {
    // IndexNow rejects the whole batch if one URL is off-host (HTTP 422).
    throw new Error(`URLs outside ${host}: ${foreign.slice(0, 3).join(', ')}`);
  }
  return {
    host,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList,
  };
}
