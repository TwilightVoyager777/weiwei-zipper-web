# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing/lead-gen website for **Weiwei Zipper** (义乌市伟伟拉链有限公司), a Yiwu-based zipper manufacturer. Next.js 15 App Router, React 19, TypeScript (strict), Tailwind CSS v4, and `next-intl` for a 5-locale SEO-driven site. It is statically generated where possible and deployed on Vercel. The single dynamic surface is a contact-form API that emails inquiries via Resend.

The Next.js app lives in `weiwei-zipper-web/` (the repo root also contains a `Photo/` asset folder that is not part of the build). Run all commands from `weiwei-zipper-web/`.

## Commands

```bash
npm run dev      # dev server at http://localhost:3000
npm run build    # production build (also the real typecheck — tsc has noEmit, no separate script)
npm run start    # serve the production build
npm run lint     # next lint (ESLint)
```

Node version is pinned to 20 (`.nvmrc`). There is **no test framework** configured — do not assume `npm test` exists. Verify changes with `npm run build` (catches type errors across the static-generation pass) plus manual checks against `npm run dev`.

## Internationalization — the core architectural concern

Locales: `en` (default), `zh`, `ru`, `es`, `ar`. `ar` is RTL. Config is `localePrefix: 'as-needed'`, so the **default locale `en` has no URL prefix** (`/products`), while others are prefixed (`/zh/products`). Keep this in mind for any URL/redirect/link logic.

There are **two distinct localization systems** — know which one a given string belongs to:

1. **UI strings** → `next-intl` message catalogs in `src/localization/messages/{locale}.json`, consumed via `useTranslations` (client) / `getTranslations` (server) with namespaces (e.g. `'ProductPage'`, `'Header'`). Adding a key means adding it to **all five** JSON files.

2. **Structured page content** (hero copy, product specs, category descriptions, FAQ, blog metadata) → typed TypeScript objects in `src/site-data/*.ts`. Each dataset is defined per-locale (e.g. `productItems`, `productItemsEn`, `productItemsRu`, …), aggregated into a `*ByLocale` map, and read through `getLocalizedContent(map, locale)` from `src/localization/content.ts`. That helper falls back to the default locale, then to the first available locale, before throwing. When adding content, extend every locale variant and the `*ByLocale` aggregate.

Routing/i18n plumbing:
- `src/localization/routing.ts` — single source of truth for the locale list, default locale, and display names. Most other modules derive from `routing.locales`; change locales here.
- `src/localization/navigation.ts` — **always import `Link`, `redirect`, `usePathname`, `useRouter` from here**, not from `next/link` or `next/navigation`, so locale prefixing is handled automatically.
- `src/middleware.ts` — next-intl middleware; the `matcher` excludes `api`, `_next`, static assets.
- `i18n/request.ts` re-exports `src/localization/request.ts`, which is wired in `next.config.ts` via `createNextIntlPlugin`.

## Page & content structure

- `src/app/[locale]/` — all pages, one folder per route. `layout.tsx` is the heart of per-locale SEO: it builds `generateMetadata` (title/keywords/OpenGraph/alternates), sets `<html lang dir>` per `LOCALE_METADATA`, and injects Organization + WebSite JSON-LD via `StructuredData`. Each page typically exports its own `generateMetadata` and `generateStaticParams`.
- `src/site-data/` — content datasets (`product-catalog.ts` is large; also `site-content.ts`, `faq-content.ts`, `blog-posts.ts`, `solution-content.ts`, `market-landing-content.ts`).
- `src/config/site-constants.ts` — canonical brand/contact constants (site URL, emails, phone, WhatsApp, address). Mirrored in `site-content.ts`'s `siteBrand`. Update both when changing contact info.
- `src/seo/localized-urls.ts` — `localizedUrl()` and `alternatesForPath()`; use these for canonical/hreflang URLs. `src/app/sitemap.ts` and `robots.ts` build the sitemap from `routing.locales` × route list × product/blog slugs.
- Product URLs distinguish **category** slugs vs **product** slugs vs roll slugs — see the exported slug constants and `isCategorySlug`/`isProductSlug` guards in `product-catalog.ts`. Removed product slugs are 301-redirected to home in `next.config.ts`; add to that `removedSlugs` list when retiring a slug.

## Blog

Markdown files in `content/blog/{locale}/{slug}.md` with gray-matter frontmatter (`title`, `excerpt`, `date`, `author`, `category`, `readTime`). `src/site-data/blog-posts.ts` reads them with `fs` at build time; slugs are derived from the `en/` directory and **must share the same filename across locales** (missing locale files fall back to English). Rendered via `react-markdown` + `remark-gfm`.

## Inquiry API (`src/app/api/inquiry/route.ts`)

The only server runtime logic. POST handler: in-memory per-IP rate limiting (5/min), validation (name + email required, length caps), then sends two emails via **Resend** — a notification to the team and a localized auto-reply (per-locale templates inline, with RTL handling for `ar`). Email failures are swallowed so the inquiry still succeeds. Captures UTM/referrer attribution fields.

Env vars: `RESEND_API_KEY` (required for email; absent → email skipped with a warning), `NOTIFY_EMAIL`, `RESEND_FROM_EMAIL`, plus search-engine verification vars read in `[locale]/layout.tsx` (`GOOGLE_SITE_VERIFICATION`, `BAIDU_SITE_VERIFICATION`, `QIHOO_SITE_VERIFICATION`).

## Conventions

- Path alias `@/*` → `src/*`.
- `next.config.ts` defines strict security headers including a CSP (`script-src` allows Vercel analytics + inline). New external scripts, frames, or connect origins must be added to the CSP there or they will be blocked.
- Server Components by default; pages call the `getX(locale)` content accessors and `getTranslations`. Interactive pieces (`ContactForm`, `Header` menu, `WhatsAppFloat`) are client components.
