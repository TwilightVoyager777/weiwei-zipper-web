import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { findGuardrailViolations, internalLinks, numbersIn } from './content-checks.mjs';
import { scheduleDate } from './blog-schedule.mjs';

const BLOG_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), '../../content/blog');

/**
 * Translations deliberately left behind English for a while, each with an end
 * date. After that date the hold no longer applies and link parity fails again,
 * so the translation cannot be forgotten.
 */
const LINK_PARITY_HOLDS = [
  {
    locale: 'zh',
    file: 'closed-end-vs-open-end-zippers.md',
    until: '2026-10-24',
    why: 'Control page for the 2026-09-26 title and description rewrite: the Chinese version stays exactly as it was for 28 days (plan: seo-audit/weiweizipper-prod-2026-09-21/TITLE-REWRITE-PLAN.md). Afterwards, add the three category links the other locales got.',
  },
];
const onHold = (locale, file) => LINK_PARITY_HOLDS.some((hold) => hold.locale === locale && hold.file === file && scheduleDate() < hold.until);
const LOCALES = fs.readdirSync(BLOG_DIR, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);
const body = (file) => fs.readFileSync(file, 'utf8').replace(/^---[\s\S]*?\n---\n/, '');

test('each guardrail catches its kind of claim', () => {
  const cases = {
    certification: 'Our zippers are ISO 9001 certified.',
    competitor: 'Comparable to YKK sizing.',
    packing: 'Packed 200 pcs per carton.',
    'roll-length': 'Supplied at 200 m per roll.',
    'tape-width': 'Tape width is 32 mm for size 5.',
    'stock-colors': 'We keep 300 stock colors.',
    'length-range': 'Lengths from 10 cm to 120 cm.',
    'per-color-floor': 'Minimum 300 pieces per color.',
  };
  for (const [id, sentence] of Object.entries(cases)) {
    assert.ok(findGuardrailViolations(sentence).some((v) => v.id === id), `${id} should flag: ${sentence}`);
  }
});

test('approved facts and ordinary words pass the guardrails', () => {
  const approved = [
    'For finished zippers the minimum order is usually 1,000 pieces, and colors can be mixed within one order.',
    'Any color ordered below 2,000 pieces carries a dyeing fee of RMB 150 for that color.',
    '成品拉链通常 1000 条起订。单一颜色数量低于 2000 条时，该颜色需另付 150 元染色费。',
    'Sizes 3, 5, and 8 correspond to a closed chain width of about 3, 5, and 8 mm.',
    'Reach out with your color split. An ideal choice for jackets.',
  ];
  for (const text of approved) assert.deepEqual(findGuardrailViolations(text), [], text);
});

test('internalLinks lists internal link targets, sorted', () => {
  assert.deepEqual(internalLinks('[a](/quote) [b](/products/metal-zippers) [c](https://example.com)'), ['/products/metal-zippers', '/quote']);
});

test('numbersIn normalizes thousands separators and keeps list items apart', () => {
  assert.deepEqual([...numbersIn('1,000 pieces, 2.000 unidades, 1 000 штук, sizes 3, 5, and 8, 1.5 mm')].sort(), ['1.5', '1000', '2000', '3', '5', '8']);
});

test('no article in any language makes a claim the site does not make', () => {
  const problems = [];
  for (const locale of LOCALES) {
    for (const file of fs.readdirSync(path.join(BLOG_DIR, locale)).filter((f) => f.endsWith('.md'))) {
      const text = fs.readFileSync(path.join(BLOG_DIR, locale, file), 'utf8');
      for (const v of findGuardrailViolations(text)) problems.push(`${locale}/${file}: ${v.reason} ("${v.match}")`);
    }
  }
  assert.deepEqual(problems, []);
});

test('no link-parity hold has outlived its end date', () => {
  const expired = LINK_PARITY_HOLDS.filter((hold) => scheduleDate() >= hold.until);
  assert.deepEqual(expired.map((hold) => `${hold.locale}/${hold.file} (until ${hold.until}): ${hold.why}`), []);
});

test('every translation links to the same pages as its English original', () => {
  const problems = [];
  for (const file of fs.readdirSync(path.join(BLOG_DIR, 'en')).filter((f) => f.endsWith('.md'))) {
    const expected = internalLinks(body(path.join(BLOG_DIR, 'en', file)));
    for (const locale of LOCALES.filter((l) => l !== 'en')) {
      const target = path.join(BLOG_DIR, locale, file);
      if (!fs.existsSync(target)) continue; // a missing file is the build validator's concern
      if (onHold(locale, file)) continue;
      const actual = internalLinks(body(target));
      if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        problems.push(`${locale}/${file}: ${JSON.stringify(actual)} ≠ en ${JSON.stringify(expected)}`);
      }
    }
  }
  assert.deepEqual(problems, []);
});
