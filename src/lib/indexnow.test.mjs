import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {
  INDEXNOW_KEY,
  SITE_URL,
  buildPayload,
  extractSitemapUrls,
  localeUrl,
  urlsForRelease,
} from './indexnow.mjs';

test('the key file is published and holds exactly the key', () => {
  // A submission is rejected unless https://host/<key>.txt returns this key.
  const file = new URL(`../../public/${INDEXNOW_KEY}.txt`, import.meta.url);
  assert.ok(fs.existsSync(file), `public/${INDEXNOW_KEY}.txt is missing`);
  assert.equal(fs.readFileSync(file, 'utf8').trim(), INDEXNOW_KEY);
});

test('the site URL matches the one the site itself uses', () => {
  const constants = fs.readFileSync(new URL('../config/site-constants.ts', import.meta.url), 'utf8');
  assert.match(constants, new RegExp(`SITE_URL = '${SITE_URL}'`));
});

test('extractSitemapUrls reads every loc', () => {
  const xml = '<urlset><url><loc>https://a.test/</loc><lastmod>x</lastmod></url><url><loc>\n  https://a.test/b\n</loc></url></urlset>';
  assert.deepEqual(extractSitemapUrls(xml), ['https://a.test/', 'https://a.test/b']);
  assert.deepEqual(extractSitemapUrls('<urlset></urlset>'), []);
});

test('localeUrl leaves the default locale unprefixed', () => {
  assert.equal(localeUrl('en', '/blog/x'), `${SITE_URL}/blog/x`);
  assert.equal(localeUrl('zh', '/blog/x'), `${SITE_URL}/zh/blog/x`);
  assert.equal(localeUrl('ar', ''), `${SITE_URL}/ar`);
});

test('urlsForRelease covers the article, the index and the home page per locale', () => {
  const urls = urlsForRelease({ slugsDueToday: ['x'], locales: ['en', 'zh'] });
  assert.deepEqual(urls, [
    `${SITE_URL}/blog/x`,
    `${SITE_URL}/blog`,
    SITE_URL,
    `${SITE_URL}/zh/blog/x`,
    `${SITE_URL}/zh/blog`,
    `${SITE_URL}/zh`,
  ]);
});

test('urlsForRelease submits nothing on a week with no article', () => {
  assert.deepEqual(urlsForRelease({ slugsDueToday: [], locales: ['en', 'zh'] }), []);
});

test('buildPayload names the key file and rejects off-host URLs', () => {
  const payload = buildPayload([`${SITE_URL}/blog`]);
  assert.equal(payload.host, 'www.weiweizipper.com');
  assert.equal(payload.key, INDEXNOW_KEY);
  assert.equal(payload.keyLocation, `${SITE_URL}/${INDEXNOW_KEY}.txt`);
  assert.deepEqual(payload.urlList, [`${SITE_URL}/blog`]);
  assert.throws(() => buildPayload([`${SITE_URL}/blog`, 'https://example.com/blog']), /example\.com/);
});
