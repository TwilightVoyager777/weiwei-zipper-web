#!/usr/bin/env node
/**
 * Runs the same publishability checks as `next build`, without building.
 * Useful mid-batch: `node scripts/validate-blog.mjs` lists every problem.
 */
import fs from 'node:fs';
import path from 'node:path';
import { readCorpus } from '../src/lib/blog-corpus.mjs';
import { validateCorpus } from '../src/lib/blog-schedule.mjs';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

// The build checks against routing.locales. This mirror uses the locale
// folders that exist — the same set unless a whole folder is missing, which
// the build would still catch.
const locales = fs
  .readdirSync(BLOG_DIR, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

const errors = validateCorpus({ locales, articles: readCorpus(BLOG_DIR, locales) });
if (errors.length === 0) {
  console.log(`content/blog OK (${locales.join(', ')})`);
} else {
  console.log(errors.map((error) => `- ${error}`).join('\n'));
  console.log(`${errors.length} problem(s)`);
  process.exitCode = 1;
}
