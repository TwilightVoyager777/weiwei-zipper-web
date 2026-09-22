import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { listSlugs, readCorpus } from './blog-corpus.mjs';

function fixture(files) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'blog-corpus-'));
  for (const [rel, body] of Object.entries(files)) {
    fs.mkdirSync(path.dirname(path.join(dir, rel)), { recursive: true });
    fs.writeFileSync(path.join(dir, rel), body);
  }
  return dir;
}

const md = (date, body = 'Body.') => `---\ntitle: "T"\ndate: ${date}\n---\n${body}\n`;

test('listSlugs reads the English folder, sorted', () => {
  const dir = fixture({ 'en/b.md': md('"2026-01-01"'), 'en/a.md': md('"2026-01-01"'), 'zh/c.md': md('"2026-01-01"') });
  assert.deepEqual(listSlugs(dir), ['a', 'b']);
});

test('readCorpus returns one entry per existing locale file', () => {
  const dir = fixture({ 'en/a.md': md('"2026-09-28"', 'See [x](/blog/b).'), 'zh/a.md': md('"2026-09-28"') });
  const corpus = readCorpus(dir, ['en', 'zh', 'es']);
  assert.deepEqual(corpus.map((a) => a.locale), ['en', 'zh']);
  assert.equal(corpus[0].date, '2026-09-28');
  assert.match(corpus[0].content, /\/blog\/b/);
});

test('readCorpus passes an unquoted YAML date through as a Date, for the validator to reject', () => {
  const dir = fixture({ 'en/a.md': md('2026-09-28') });
  assert.ok(readCorpus(dir, ['en'])[0].date instanceof Date);
});
