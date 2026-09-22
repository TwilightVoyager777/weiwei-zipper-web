#!/usr/bin/env node
/**
 * Lists numbers that appear in the English article but not in a translation,
 * or the other way round. Not a gate — a translation may legitimately repeat
 * or restate a number — but every line it prints deserves a look before a
 * batch is merged.
 *
 * Usage: node scripts/translation-report.mjs <slug> [<slug>...]
 */
import fs from 'node:fs';
import path from 'node:path';
import { numbersIn } from '../src/lib/content-checks.mjs';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');
const body = (file) => fs.readFileSync(file, 'utf8').replace(/^---[\s\S]*?\n---\n/, '');

const slugs = process.argv.slice(2);
if (slugs.length === 0) {
  console.error('usage: node scripts/translation-report.mjs <slug> [<slug>...]');
  process.exit(2);
}

for (const slug of slugs) {
  const english = numbersIn(body(path.join(BLOG_DIR, 'en', `${slug}.md`)));
  for (const locale of ['zh', 'es', 'ru', 'ar']) {
    const file = path.join(BLOG_DIR, locale, `${slug}.md`);
    if (!fs.existsSync(file)) {
      console.log(`${slug} [${locale}]: missing`);
      continue;
    }
    const other = numbersIn(body(file));
    const missing = [...english].filter((n) => !other.has(n));
    const extra = [...other].filter((n) => !english.has(n));
    const verdict = missing.length || extra.length ? `missing ${JSON.stringify(missing)} extra ${JSON.stringify(extra)}` : 'numbers match';
    console.log(`${slug} [${locale}]: ${verdict}`);
  }
}
