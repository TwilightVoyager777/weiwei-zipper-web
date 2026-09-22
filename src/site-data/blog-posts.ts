import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { routing } from "@/localization/routing";
import { listSlugs, readCorpus } from "@/lib/blog-corpus.mjs";
import { isDue, scheduleDate, shouldShowScheduled, validateCorpus } from "@/lib/blog-schedule.mjs";

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: number;
  /** One-line summary for llms.txt (English files only); the excerpt is the fallback. */
  llmsSummary?: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), "content/blog");

/**
 * Refuse to build a news section that would publish something broken: an
 * article missing a language (the reader would get English text under /zh/),
 * locales that disagree on the date, or a link to an article that is not live
 * yet. Throwing here fails `next build`, so Vercel keeps serving the last good
 * deployment instead.
 */
function assertPublishable(): void {
  const errors = validateCorpus({ locales: routing.locales, articles: readCorpus(BLOG_DIR, routing.locales) });
  if (errors.length > 0) {
    throw new Error(`content/blog cannot be published:\n  - ${errors.join("\n  - ")}`);
  }
}

assertPublishable();

/**
 * Slugs of the articles that are live (shared across locales — same filename).
 *
 * An article whose date has not yet arrived in Los Angeles is left out, so it
 * is absent from the index, the sitemap and the static routes — and, with
 * `dynamicParams = false` on the article route, its URL is a real 404 — until
 * the first build on or after its date. Vercel branch previews show every
 * article so a batch can be reviewed early.
 */
export function getBlogSlugs(): string[] {
  const slugs = listSlugs(BLOG_DIR);
  if (shouldShowScheduled(process.env)) return slugs;
  const today = scheduleDate();
  return slugs.filter((slug) => {
    const { data } = matter(fs.readFileSync(path.join(BLOG_DIR, "en", `${slug}.md`), "utf-8"));
    return isDue(data.date, today);
  });
}

/**
 * Get all blog posts for a given locale, sorted by date descending.
 */
export function getAllBlogPosts(locale: string): BlogPostMeta[] {
  const slugs = getBlogSlugs();
  const posts = slugs.map((slug) => getBlogPostMeta(slug, locale));
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime() || a.slug.localeCompare(b.slug)
  );
}

/**
 * Get metadata only (no content) for a single blog post.
 */
export function getBlogPostMeta(slug: string, locale: string): BlogPostMeta {
  const filePath = path.join(BLOG_DIR, locale, `${slug}.md`);
  // Fallback to English if locale file doesn't exist
  const actualPath = fs.existsSync(filePath)
    ? filePath
    : path.join(BLOG_DIR, "en", `${slug}.md`);
  const raw = fs.readFileSync(actualPath, "utf-8");
  const { data } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    excerpt: data.excerpt ?? "",
    date: data.date ?? "",
    author: data.author ?? "",
    category: data.category ?? "general",
    readTime: data.readTime ?? 5,
    llmsSummary: data.llmsSummary,
  };
}

/**
 * Get full blog post including markdown content.
 */
export function getBlogPost(slug: string, locale: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, locale, `${slug}.md`);
  const actualPath = fs.existsSync(filePath)
    ? filePath
    : path.join(BLOG_DIR, "en", `${slug}.md`);
  if (!fs.existsSync(actualPath)) return null;
  const raw = fs.readFileSync(actualPath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    excerpt: data.excerpt ?? "",
    date: data.date ?? "",
    author: data.author ?? "",
    category: data.category ?? "general",
    readTime: data.readTime ?? 5,
    content,
  };
}

/** Export slugs for sitemap */
export const BLOG_SLUGS = getBlogSlugs();