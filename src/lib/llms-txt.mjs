/**
 * llms.txt is rendered from content/llms.template.txt at build time.
 *
 * It used to be a hand-written static file listing each article. With
 * articles now going live on a schedule, a hand-kept list would either miss
 * them or point at pages that 404 until their date. The template keeps every
 * other line exactly as written.
 */

const ARTICLES_LINE = '{{BLOG_ARTICLES}}\n';
const URL_COUNT = '{{SITEMAP_URL_COUNT}}';

/**
 * @param {{
 *   template: string,
 *   siteUrl: string,
 *   urlCount: number,
 *   articles: { slug: string, title: string, summary: string }[],
 * }} input
 * @returns {string}
 */
export function renderLlmsTxt({ template, siteUrl, urlCount, articles }) {
  for (const marker of [ARTICLES_LINE, URL_COUNT]) {
    if (!template.includes(marker)) throw new Error(`llms.txt template is missing ${JSON.stringify(marker)}`);
  }
  const lines = articles.map((article) => `- [${article.title}](${siteUrl}/blog/${article.slug}): ${article.summary}\n`).join('');
  return template.replace(ARTICLES_LINE, lines).replace(URL_COUNT, String(urlCount));
}
