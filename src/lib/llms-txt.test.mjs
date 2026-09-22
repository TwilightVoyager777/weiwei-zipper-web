import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { renderLlmsTxt } from './llms-txt.mjs';

const SITE = 'https://www.weiweizipper.com';

test('renders one line per article, in the order given', () => {
  const out = renderLlmsTxt({
    template: '## Guides\n\n{{BLOG_ARTICLES}}\n- [Insights](x): Index.\nAll {{SITEMAP_URL_COUNT}} URLs\n',
    siteUrl: SITE,
    urlCount: 180,
    articles: [
      { slug: 'b', title: 'B', summary: 'Second.' },
      { slug: 'a', title: 'A', summary: 'First.' },
    ],
  });
  assert.equal(out, `## Guides\n\n- [B](${SITE}/blog/b): Second.\n- [A](${SITE}/blog/a): First.\n- [Insights](x): Index.\nAll 180 URLs\n`);
});

test('an empty article list leaves no blank line behind', () => {
  const out = renderLlmsTxt({ template: 'x\n{{BLOG_ARTICLES}}\ny {{SITEMAP_URL_COUNT}}\n', siteUrl: SITE, urlCount: 1, articles: [] });
  assert.equal(out, 'x\ny 1\n');
});

test('a template without its markers is rejected', () => {
  assert.throws(() => renderLlmsTxt({ template: 'no markers', siteUrl: SITE, urlCount: 1, articles: [] }), /missing/);
});

test('the template reproduces the hand-written llms.txt it replaces', () => {
  const template = readFileSync(new URL('../../content/llms.template.txt', import.meta.url), 'utf8');
  const before = readFileSync(new URL('./__fixtures__/llms.before.txt', import.meta.url), 'utf8');
  // The five article lines exactly as the hand-written file had them.
  const articles = [
    { slug: 'how-to-choose-zipper-size-3-5-8', title: 'How to Choose Zipper Size 3, 5, or 8', summary: 'Which size fits which garment, bag, and accessory position.' },
    { slug: 'closed-end-vs-open-end-zippers', title: 'Closed-End vs Open-End Zippers', summary: 'How the two structures differ and where each is used.' },
    { slug: 'yiwu-zipper-wholesale-guide', title: 'A Practical Guide to Zipper Wholesale in Yiwu', summary: 'What to confirm when sourcing zippers in Yiwu.' },
    { slug: 'how-to-evaluate-a-zipper-supplier-in-yiwu', title: 'How to Evaluate a Zipper Supplier in Yiwu', summary: 'What to check when sourcing in District 3 of Yiwu International Trade City.' },
    { slug: 'how-to-prepare-a-zipper-inquiry', title: 'How to Prepare a Zipper Inquiry', summary: 'What to include so sampling and quotation move faster.' },
  ];
  const out = renderLlmsTxt({ template, siteUrl: SITE, urlCount: 175, articles });
  const isArticle = (line) => line.startsWith('- [') && line.includes(`${SITE}/blog/`);
  assert.deepEqual(out.split('\n').filter((l) => !isArticle(l)), before.split('\n').filter((l) => !isArticle(l)));
  assert.deepEqual(out.split('\n').filter(isArticle).sort(), before.split('\n').filter(isArticle).sort());
});
