#!/usr/bin/env node
/**
 * Submits URLs to IndexNow (Bing, Yandex, Seznam, Naver).
 *
 *   node scripts/indexnow.mjs            this week's article, in every locale
 *   node scripts/indexnow.mjs --all      every URL in the live sitemap
 *   node scripts/indexnow.mjs --dry-run  print the list, submit nothing
 *
 * The weekly GitHub Actions job runs the first form after the rebuild, so a
 * new article is pushed to Bing the morning it goes live. `--all` is for the
 * one-off backfill of a site Bing has never crawled. Dependency-free on
 * purpose: the job does not install packages.
 */
import fs from 'node:fs';
import path from 'node:path';
import { readFrontmatterDate, scheduleDate } from '../src/lib/blog-schedule.mjs';
import {
  INDEXNOW_ENDPOINT,
  SITE_URL,
  buildPayload,
  extractSitemapUrls,
  urlsForRelease,
} from '../src/lib/indexnow.mjs';

const args = new Set(process.argv.slice(2));
const dryRun = args.has('--dry-run');
const BLOG_DIR = path.join(process.cwd(), 'content/blog');

/** Locale folders under content/blog, English first so its URL leads. */
function locales() {
  const names = fs
    .readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
  return ['en', ...names.filter((name) => name !== 'en')];
}

/** Slugs whose date is today, i.e. the articles this rebuild publishes. */
function slugsDueToday() {
  const today = scheduleDate();
  const dir = path.join(BLOG_DIR, 'en');
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.md'))
    .filter((file) => readFrontmatterDate(fs.readFileSync(path.join(dir, file), 'utf8')) === today)
    .map((file) => file.replace(/\.md$/, ''));
}

async function sitemapUrls() {
  const response = await fetch(`${SITE_URL}/sitemap.xml`);
  if (!response.ok) throw new Error(`sitemap.xml returned ${response.status}`);
  return extractSitemapUrls(await response.text());
}

/**
 * Keep the URLs that are actually live. Submitting a 404 — a rebuild that has
 * not finished, say — teaches the engines to trust these submissions less.
 *
 * @param {string[]} candidates
 * @returns {Promise<{live: string[], dead: string[]}>}
 */
async function partitionLive(candidates) {
  const live = [];
  const dead = [];
  for (const group of chunks(candidates, 8)) {
    const statuses = await Promise.all(
      group.map((url) => fetch(url, { method: 'HEAD' }).then((r) => r.status, () => 0)),
    );
    group.forEach((url, index) => (statuses[index] === 200 ? live : dead).push(url));
  }
  return { live, dead };
}

function* chunks(items, size) {
  for (let index = 0; index < items.length; index += size) yield items.slice(index, index + size);
}

const candidates = args.has('--all')
  ? await sitemapUrls()
  : urlsForRelease({ slugsDueToday: slugsDueToday(), locales: locales() });

if (candidates.length === 0) {
  console.log('Nothing to submit: no article goes live today.');
  process.exit(0);
}

const { live: urls, dead } = await partitionLive(candidates);
if (dead.length > 0) console.log(`Skipping ${dead.length} URL(s) that are not live:\n${dead.join('\n')}`);
if (urls.length === 0) {
  console.log('Nothing live to submit.');
  process.exit(1);
}

const payload = buildPayload(urls);
console.log(`${urls.length} URL(s), first: ${urls[0]}`);
if (dryRun) {
  console.log(urls.join('\n'));
  process.exit(dead.length > 0 ? 1 : 0);
}

const response = await fetch(INDEXNOW_ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload),
});
const body = (await response.text()).trim();
console.log(`IndexNow ${response.status} ${response.statusText}${body ? ` — ${body}` : ''}`);
// 200 accepted, 202 accepted pending key validation. Anything else is a failure
// worth a red job: the URLs were not queued. A URL that was expected but is not
// live is also a failure — nobody would notice otherwise.
if (![200, 202].includes(response.status) || dead.length > 0) process.exit(1);
