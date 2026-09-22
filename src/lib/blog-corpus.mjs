/**
 * Reads the news articles from disk.
 *
 * Shared by the site (src/site-data/blog-posts.ts) and
 * scripts/validate-blog.mjs, so the command-line check sees exactly what the
 * build sees.
 */
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

/**
 * Every article slug, from the English folder — all locales share filenames.
 * Sorted, because readdir order differs between macOS and the Linux builders.
 *
 * @param {string} blogDir
 * @returns {string[]}
 */
export function listSlugs(blogDir) {
  const enDir = path.join(blogDir, 'en');
  if (!fs.existsSync(enDir)) return [];
  return fs
    .readdirSync(enDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.slice(0, -'.md'.length))
    .sort();
}

/**
 * One entry per article file that exists. A missing locale file is simply
 * absent; reporting it is the validator's job.
 *
 * @param {string} blogDir
 * @param {readonly string[]} locales
 * @returns {import('./blog-schedule.mjs').ArticleFile[]}
 */
export function readCorpus(blogDir, locales) {
  const articles = [];
  for (const slug of listSlugs(blogDir)) {
    for (const locale of locales) {
      const file = path.join(blogDir, locale, `${slug}.md`);
      if (!fs.existsSync(file)) continue;
      const { data, content } = matter(fs.readFileSync(file, 'utf8'));
      articles.push({ slug, locale, date: data.date, content });
    }
  }
  return articles;
}
