import test from 'node:test';
import assert from 'node:assert/strict';
import {
  countScheduled,
  extractBlogLinks,
  extractLocalePrefixedLinks,
  isDue,
  isValidDateString,
  readFrontmatterDate,
  shanghaiDate,
  shouldShowScheduled,
  validateCorpus,
} from './blog-schedule.mjs';

test('shanghaiDate rolls over at midnight Beijing time, not UTC', () => {
  // 2026-09-27 16:30 UTC is 00:30 on Monday 28 September in Beijing.
  assert.equal(shanghaiDate(new Date('2026-09-27T16:30:00Z')), '2026-09-28');
  assert.equal(shanghaiDate(new Date('2026-09-27T15:59:59Z')), '2026-09-27');
  // The weekly job runs at 00:30 UTC, which is 08:30 in Beijing.
  assert.equal(shanghaiDate(new Date('2026-09-28T00:30:00Z')), '2026-09-28');
});

test('isValidDateString accepts quoted calendar dates only', () => {
  assert.equal(isValidDateString('2026-09-28'), true);
  assert.equal(isValidDateString('2026-02-30'), false);
  assert.equal(isValidDateString('2026-9-28'), false);
  // gray-matter turns an unquoted YAML date into a Date object.
  assert.equal(isValidDateString(new Date('2026-09-28')), false);
  assert.equal(isValidDateString(undefined), false);
});

test('isDue includes the article date itself', () => {
  assert.equal(isDue('2026-09-28', '2026-09-28'), true);
  assert.equal(isDue('2026-09-29', '2026-09-28'), false);
  assert.equal(isDue('2026-03-06', '2026-09-28'), true);
});

test('shouldShowScheduled only for Vercel previews or the explicit flag', () => {
  assert.equal(shouldShowScheduled({ VERCEL_ENV: 'preview' }), true);
  assert.equal(shouldShowScheduled({ VERCEL_ENV: 'production' }), false);
  assert.equal(shouldShowScheduled({ BLOG_SHOW_SCHEDULED: '1' }), true);
  assert.equal(shouldShowScheduled({}), false);
});

test('readFrontmatterDate reads quoted and unquoted dates from frontmatter only', () => {
  assert.equal(readFrontmatterDate('---\ntitle: "x"\ndate: "2026-10-05"\n---\nbody'), '2026-10-05');
  assert.equal(readFrontmatterDate('---\ndate: 2026-10-05\n---\n'), '2026-10-05');
  assert.equal(readFrontmatterDate('no frontmatter\ndate: "2026-10-05"'), null);
});

test('countScheduled counts only dates after today', () => {
  assert.equal(countScheduled(['2026-09-28', '2026-10-05', '2026-10-12', null], '2026-09-28'), 2);
  assert.equal(countScheduled([], '2026-09-28'), 0);
});

test('extractBlogLinks finds article links, with or without an anchor', () => {
  const md = 'See [a](/blog/zipper-parts-explained) and [b](/blog/how-to-measure-zipper-length#open-end), not [c](/products/metal-zippers).';
  assert.deepEqual(extractBlogLinks(md), ['zipper-parts-explained', 'how-to-measure-zipper-length']);
});

test('extractLocalePrefixedLinks flags prefixed internal links only', () => {
  const md = '[x](/zh/products/metal-zippers) [y](/products/metal-zippers) [z](/es) [w](/zhongwen)';
  assert.deepEqual(extractLocalePrefixedLinks(md, ['en', 'zh', 'es', 'ru', 'ar']), ['/zh/products/metal-zippers', '/es']);
});

const LOCALES = ['en', 'zh'];
const article = (slug, locale, date, content = '') => ({ slug, locale, date, content });

test('validateCorpus passes a complete, consistent corpus', () => {
  const articles = [
    article('a', 'en', '2026-09-28'),
    article('a', 'zh', '2026-09-28'),
    article('b', 'en', '2026-10-05', '[a](/blog/a)'),
    article('b', 'zh', '2026-10-05', '[a](/blog/a)'),
  ];
  assert.deepEqual(validateCorpus({ locales: LOCALES, articles }), []);
});

test('validateCorpus reports a missing translation', () => {
  const errors = validateCorpus({ locales: LOCALES, articles: [article('a', 'en', '2026-09-28')] });
  assert.equal(errors.length, 1);
  assert.match(errors[0], /^a: missing zh translation/);
});

test('validateCorpus reports locales that disagree on the date', () => {
  const errors = validateCorpus({ locales: LOCALES, articles: [article('a', 'en', '2026-09-28'), article('a', 'zh', '2026-10-05')] });
  assert.deepEqual(errors, ['a: locales disagree on the date (2026-09-28, 2026-10-05)']);
});

test('validateCorpus rejects an unquoted or malformed date', () => {
  const errors = validateCorpus({ locales: ['en'], articles: [article('a', 'en', new Date('2026-09-28'))] });
  assert.equal(errors.length, 1);
  assert.match(errors[0], /date must be a quoted "YYYY-MM-DD" string/);
});

test('validateCorpus rejects a link to an article that goes live later', () => {
  const articles = [
    article('a', 'en', '2026-09-28', '[b](/blog/b)'),
    article('a', 'zh', '2026-09-28', '[b](/blog/b)'),
    article('b', 'en', '2026-10-05'),
    article('b', 'zh', '2026-10-05'),
  ];
  const errors = validateCorpus({ locales: LOCALES, articles });
  assert.equal(errors.length, 2);
  assert.match(errors[0], /goes live after this article/);
});

test('validateCorpus rejects a link to an article that does not exist', () => {
  const errors = validateCorpus({ locales: ['en'], articles: [article('a', 'en', '2026-09-28', '[x](/blog/nope)')] });
  assert.deepEqual(errors, ['a [en]: links to /blog/nope, which does not exist']);
});

test('validateCorpus rejects locale-prefixed links', () => {
  const errors = validateCorpus({ locales: ['en', 'zh'], articles: [article('a', 'en', '2026-09-28', '[q](/zh/quote)'), article('a', 'zh', '2026-09-28')] });
  assert.deepEqual(errors, ['a [en]: link /zh/quote carries a locale prefix; write it without one']);
});
