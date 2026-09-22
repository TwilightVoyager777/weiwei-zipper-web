/**
 * Publication schedule for the news section (资讯).
 *
 * Plain JavaScript rather than TypeScript on purpose: the site imports it from
 * TypeScript (tsconfig has allowJs), the weekly GitHub Actions job runs it with
 * bare Node, and `node --test` exercises it — no build step, no test framework.
 * Keep this file free of imports so the weekly job never needs `npm ci`.
 */

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

/**
 * The time zone the schedule runs in. The site owner is on the US West Coast,
 * so an article dated Monday goes live on Monday morning there. The weekly job
 * in .github/workflows/weekly-publish.yml is scheduled in the same zone.
 */
export const SCHEDULE_TIME_ZONE = 'America/Los_Angeles';

/**
 * Today's date in the schedule's time zone, as YYYY-MM-DD.
 *
 * Builds run in UTC, whose date runs ahead of Los Angeles from 16:00 or 17:00
 * local time until midnight; a build on a Sunday evening would otherwise
 * publish Monday's article early.
 *
 * @param {Date} [now]
 * @returns {string}
 */
export function scheduleDate(now = new Date()) {
  // The en-CA locale formats a date as YYYY-MM-DD.
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: SCHEDULE_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now);
}

/**
 * Whether a frontmatter date is a real calendar date written as a string.
 *
 * gray-matter turns an unquoted `date: 2026-09-28` into a Date object.
 * Requiring the quoted form keeps every comparison here a plain string one.
 *
 * @param {unknown} value
 * @returns {value is string}
 */
export function isValidDateString(value) {
  if (typeof value !== 'string' || !DATE_RE.test(value)) return false;
  const [year, month, day] = value.split('-').map(Number);
  const probe = new Date(Date.UTC(year, month - 1, day));
  return probe.getUTCFullYear() === year && probe.getUTCMonth() === month - 1 && probe.getUTCDate() === day;
}

/**
 * An article is due on its own date, not the day after.
 *
 * @param {string} date  article date, YYYY-MM-DD
 * @param {string} today YYYY-MM-DD
 * @returns {boolean}
 */
export function isDue(date, today) {
  return date <= today;
}

/**
 * Scheduled articles are visible on Vercel branch previews, so a batch can be
 * reviewed before its dates arrive, and locally with BLOG_SHOW_SCHEDULED=1.
 *
 * @param {Record<string, string | undefined>} env
 * @returns {boolean}
 */
export function shouldShowScheduled(env) {
  return env.VERCEL_ENV === 'preview' || env.BLOG_SHOW_SCHEDULED === '1';
}

/**
 * The `date` field of a markdown file's frontmatter, or null.
 *
 * For the weekly job, which runs without installing dependencies; the site
 * itself parses frontmatter with gray-matter.
 *
 * @param {string} markdown
 * @returns {string | null}
 */
export function readFrontmatterDate(markdown) {
  const block = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!block) return null;
  const line = block[1].match(/^date:\s*["']?(\d{4}-\d{2}-\d{2})["']?\s*$/m);
  return line ? line[1] : null;
}

/**
 * How many articles are still waiting for their date.
 *
 * @param {(string | null)[]} dates
 * @param {string} today
 * @returns {number}
 */
export function countScheduled(dates, today) {
  return dates.filter((date) => typeof date === 'string' && date > today).length;
}

/**
 * Slugs of the articles a markdown body links to, written as `](/blog/<slug>)`.
 *
 * @param {string} markdown
 * @returns {string[]}
 */
export function extractBlogLinks(markdown) {
  return [...markdown.matchAll(/\]\(\/blog\/([a-z0-9-]+)\/?(?:#[^)]*)?\)/g)].map((m) => m[1]);
}

/**
 * Internal links written with a locale prefix. The article renderer passes
 * every internal link through next-intl's Link, which adds the prefix itself,
 * so `/zh/products` would render as `/zh/zh/products` and 404.
 *
 * @param {string} markdown
 * @param {readonly string[]} locales
 * @returns {string[]}
 */
export function extractLocalePrefixedLinks(markdown, locales) {
  const pattern = new RegExp(`\\]\\((\\/(?:${locales.join('|')})(?:\\/[^)]*)?)\\)`, 'g');
  return [...markdown.matchAll(pattern)].map((m) => m[1]);
}

/**
 * @typedef {object} ArticleFile
 * @property {string} slug
 * @property {string} locale
 * @property {unknown} date     frontmatter `date` as parsed
 * @property {string} content  markdown body
 */

/**
 * Everything that must hold before the news section may be built. Returns one
 * message per problem; an empty array means the corpus is publishable.
 *
 * @param {{ locales: readonly string[], articles: ArticleFile[] }} corpus
 * @returns {string[]}
 */
export function validateCorpus({ locales, articles }) {
  const errors = [];
  /** @type {Map<string, Map<string, ArticleFile>>} */
  const bySlug = new Map();
  for (const article of articles) {
    if (!bySlug.has(article.slug)) bySlug.set(article.slug, new Map());
    bySlug.get(article.slug).set(article.locale, article);
  }

  /** @type {Map<string, string>} */
  const dateOf = new Map();
  for (const [slug, perLocale] of bySlug) {
    for (const locale of locales) {
      if (!perLocale.has(locale)) {
        errors.push(`${slug}: missing ${locale} translation (content/blog/${locale}/${slug}.md)`);
      }
    }
    const dates = new Set();
    for (const [locale, article] of perLocale) {
      if (isValidDateString(article.date)) {
        dates.add(article.date);
      } else {
        errors.push(`${slug} [${locale}]: date must be a quoted "YYYY-MM-DD" string, got ${JSON.stringify(article.date)}`);
      }
    }
    if (dates.size > 1) errors.push(`${slug}: locales disagree on the date (${[...dates].sort().join(', ')})`);
    if (dates.size === 1) dateOf.set(slug, [...dates][0]);
  }

  for (const article of articles) {
    const ownDate = dateOf.get(article.slug);
    for (const target of extractBlogLinks(article.content)) {
      const targetDate = dateOf.get(target);
      if (!bySlug.has(target)) {
        errors.push(`${article.slug} [${article.locale}]: links to /blog/${target}, which does not exist`);
      } else if (ownDate && targetDate && targetDate > ownDate) {
        errors.push(
          `${article.slug} [${article.locale}]: links to /blog/${target} (${targetDate}), which goes live after this article (${ownDate})`,
        );
      }
    }
    for (const href of extractLocalePrefixedLinks(article.content, locales)) {
      errors.push(`${article.slug} [${article.locale}]: link ${href} carries a locale prefix; write it without one`);
    }
  }
  return errors;
}
