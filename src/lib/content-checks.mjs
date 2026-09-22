/**
 * Checks that apply to every article in every language: claims the site does
 * not make, and structure a translation must keep.
 *
 * The rules encode the owner's decisions (2026-09-21): no certification
 * claims, no naming other zipper makers, and seven specifics that are agreed
 * per inquiry rather than published. Each rule carries its reason, so a
 * failure says why the sentence has to change.
 */

export const GUARDRAIL_RULES = [
  {
    id: 'certification',
    // Case-sensitive on purpose: /i would turn REACH into the verb "reach".
    pattern: /[Cc]ertif|\bISO\s?\d{3,5}\b|OEKO|\bREACH\b|\bSGS\b|认证|[Сс]ертифик|شهادة/,
    reason: 'Certification claims are not made on this site.',
  },
  {
    id: 'competitor',
    pattern: /\bYKK\b|\bRiri\b|\bSBS\b|浔兴|伟星/,
    reason: 'Articles do not name other zipper makers.',
  },
  {
    id: 'packing',
    pattern: /per carton|cartons? of \d|pcs\s*\/\s*ctn|每箱|箱规|外箱尺寸/i,
    reason: 'Packing details are agreed per inquiry.',
  },
  {
    id: 'roll-length',
    pattern: /\d+\s*(?:m|meters?|metres?|yards?)\s*(?:per|\/|a)\s*roll|每卷\s*\d|\d+\s*(?:米|码)\s*\/\s*卷/i,
    reason: 'Roll length is agreed per inquiry.',
  },
  {
    id: 'tape-width',
    pattern: /tape width[^.\n]{0,24}\d|带宽[^。\n]{0,12}\d|布带宽[^。\n]{0,12}\d/i,
    reason: 'Tape width is agreed per inquiry.',
  },
  {
    id: 'stock-colors',
    pattern: /\d+\s*(?:stock|in-stock|standard)\s+colou?rs|常备\s*\d+\s*(?:种|个)?\s*(?:颜色|色)|\d+\s*种常备色/i,
    reason: 'Stock color counts are agreed per inquiry.',
  },
  {
    id: 'length-range',
    pattern: /\d+\s*(?:cm|厘米)\s*(?:to|-|–|~|至|到)\s*\d+\s*(?:cm|厘米)/i,
    reason: 'A length range reads as a capability claim; use a single example value.',
  },
  {
    id: 'per-color-floor',
    pattern: /(?:minimum|at least|no fewer than)\s+\d[\d,]*\s*(?:pcs|pieces)?\s*(?:per|for each|each)\s+colou?r|(?:每色|单色)(?:最少|至少|不少于)\s*\d/i,
    reason: 'Per-color minimums are agreed per inquiry.',
  },
];

/**
 * @param {string} text
 * @returns {{ id: string, reason: string, match: string }[]}
 */
export function findGuardrailViolations(text) {
  const found = [];
  for (const rule of GUARDRAIL_RULES) {
    const match = text.match(rule.pattern);
    if (match) found.push({ id: rule.id, reason: rule.reason, match: match[0] });
  }
  return found;
}

/**
 * Internal link targets in a markdown body, sorted — a translation must carry
 * the same list as its English original.
 *
 * @param {string} markdown
 * @returns {string[]}
 */
export function internalLinks(markdown) {
  return [...markdown.matchAll(/\]\((\/[^)\s]*)\)/g)].map((m) => m[1]).sort();
}

/**
 * Numbers in a text, with thousands separators removed ("1,000", "1.000" and
 * "1 000" all become "1000"). A comma followed by a space is a list
 * separator, not part of a number.
 *
 * @param {string} text
 * @returns {Set<string>}
 */
export function numbersIn(text) {
  const found = text.matchAll(/\d+(?:[,.  ]\d{3})*(?:\.\d+)?/g);
  return new Set([...found].map((m) => m[0].replace(/[,.  ](?=\d{3}(?!\d))/g, '')));
}
