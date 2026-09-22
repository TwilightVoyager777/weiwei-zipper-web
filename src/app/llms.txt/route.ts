import fs from 'fs';
import path from 'path';
import sitemap from '@/app/sitemap';
import { SITE_URL } from '@/config/site-constants';
import { getAllBlogPosts } from '@/site-data/blog-posts';
import { renderLlmsTxt } from '@/lib/llms-txt.mjs';

// Rendered at build time, so the weekly rebuild that publishes an article
// also lists it here — the hand-written file this replaces could not.
export const dynamic = 'force-static';

export function GET() {
  const template = fs.readFileSync(path.join(process.cwd(), 'content/llms.template.txt'), 'utf-8');
  const body = renderLlmsTxt({
    template,
    siteUrl: SITE_URL,
    urlCount: sitemap().length,
    articles: getAllBlogPosts('en').map((post) => ({
      slug: post.slug,
      title: post.title,
      summary: post.llmsSummary || post.excerpt,
    })),
  });
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
