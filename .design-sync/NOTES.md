# design-sync notes — weiwei-zipper-web

Repo is a Next.js 15 app, not a packaged component library. The sync treats
`src/components/` as the design system (7 site components + 16 icons).

## Build quirks

- **No dist, no self-install**: the converter needs `node_modules/weiwei-zipper-web`
  to exist. A plain self-symlink (`ln -s ../ node_modules/weiwei-zipper-web`)
  recurses infinitely and crashes the ts-morph `.d.ts` scan with ENAMETOOLONG.
  Instead `.design-sync/prepare.sh` builds a **stub package dir** there: real
  `package.json` copy + symlinks to `src/`, `tsconfig.json`, `.design-sync/`.
  Run `bash .design-sync/prepare.sh` (= cfg.buildCmd) before every build; any
  `npm install` may wipe the stub.
- **Default exports**: the 7 site components are `export default`, which the
  synthesized `export * from` entry drops (`[BUNDLE_EXPORT]` 7/23 missing).
  Fix: hand-written barrel `.design-sync/ds-entry.ts` (copied into the stub by
  prepare.sh) + `cfg.entry` pointing at it. New component → add to the barrel
  AND `componentSrcMap`.
- **Tailwind v4, no static stylesheet**: prepare.sh compiles
  `src/app/globals.css` → `node_modules/weiwei-zipper-web/ds-tailwind.css`
  (cssEntry is security-bounded to the stub dir's realpath, so it must live
  physically inside). Tailwind's auto content scan respects .gitignore, so the
  committed `.design-sync/previews/*.tsx` ARE scanned — preview-only utility
  classes work — but anything gitignored is not.
- **`process is not defined`**: bundled Next.js internals read
  `process.env.__NEXT_*` at module scope. `.design-sync/ds-shim.ts` (FIRST in
  cfg.extraEntries — order matters) defines `globalThis.process` before
  anything else evaluates.
- **Provider**: `.design-sync/ds-provider.tsx` (`DSProvider`) supplies
  NextIntlClientProvider (locale **zh** — user's choice), mock App Router
  contexts (Header uses usePathname/useRouter via next-intl navigation), and
  ImageConfigContext pointing next/image at the production optimizer
  `https://www.weiweizipper.com/_next/image` — previews load real brand
  images from the live site.

## Known render warns

- `[TOKENS_MISSING] --font-sans--font-feature-settings` (+3 similar): Tailwind
  v4 internal optional vars referenced with empty fallbacks — never defined
  anywhere, harmless.
- `[FONT_MISSING]` → suppressed via cfg.runtimeFontPrefixes: the site's design
  IS system-font stacks (Avenir Next / PingFang SC / Microsoft YaHei…); there
  are no font files to ship, viewers get their OS fonts exactly like
  production.

## Preview-authoring learnings (wave 1, 2026-07-07)

- **next/image srcs must be site-relative, not absolute**: the production
  optimizer (`/_next/image`) returns 400 for absolute `url=` values (no
  remotePatterns). Pass `/products/*.png` style paths to ProductGallery /
  ZoomableImage; absolute URLs only work on `unoptimized` images that the
  ds-shim prefix-rewrites.
- ZoomableImage open state + hover/drag states are click-driven → not
  statically renderable, previews show closed state only.
- WhatsAppFloat (`position: fixed`) is contained in a card via a wrapper with
  `transform: translateZ(0)` (creates a containing block for fixed children).
- InquiryPageLayout renders single-column at capture width (lg: breakpoint not
  reached); visible portion complete, no overflow — acceptable.
- `bg-green-600` is not in the compiled CSS (site never uses it) — use
  `bg-green-500`. Filled brand glyphs (LinkedIn/WhatsApp/WeChat icons) ignore
  strokeWidth; MenuIcon has hardcoded strokeWidth=2 + `isOpen` prop.

## Re-sync risks

- The stub package dir + compiled Tailwind CSS are machine state under
  node_modules — always re-run prepare.sh (cfg.buildCmd) first.
- Preview images depend on the **live production site** (weiweizipper.com
  serving /_next/image). If the domain or image paths change, previews break
  silently (broken-image icons).
- zh message catalog is bundled into the provider at build time — UI-string
  changes in `src/localization/messages/zh.json` need a rebuild to show.
- Playwright: use playwright@1.60.0 (pins the cached chromium-1223 in
  ~/Library/Caches/ms-playwright).
- Node pinned to 20 in .nvmrc but v22 was used for this sync without issue.
- Verified-state carries forward from the uploaded project's `_ds_sync.json`
  (fetch it to `.design-sync/.cache/remote-sync.json` and run resync.mjs with
  `--remote` per the skill) — grades are NOT in git.
- First sync completed 2026-07-07: 23/23 components authored + graded good,
  render check clean, project a2d2f004-ff50-40fc-b855-abc7e3fe1fc5.
