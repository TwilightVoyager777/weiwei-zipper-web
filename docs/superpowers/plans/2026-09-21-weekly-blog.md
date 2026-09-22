# 资讯每周一篇 实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 资讯栏目每周一自动上线一篇文章（5 种语言），文章成批写、成批审；第一批 4 篇。

**Architecture:** 文章 frontmatter 的 `date` 就是上线日。`src/lib/` 下放几个不需要构建的 `.mjs` 模块，负责日期判断、语料校验、内容红线和 `llms.txt` 渲染，站点（TypeScript，`allowJs`）和 GitHub Actions（裸 Node）共用同一份代码。`blog-posts.ts` 的 `getBlogSlugs()` 按北京时间过滤未到期文章，并在构建时校验全部语料。GitHub Actions 每周一调 Vercel Deploy Hook 重建站点，排期只剩 1 篇时自动开 Issue。

**Tech Stack:** Next.js 15 App Router、TypeScript（`allowJs: true`）、gray-matter、Node 内置 `node:test`（不新增依赖）、GitHub Actions、Vercel Deploy Hook。

**Spec:** `docs/superpowers/specs/2026-09-21-weekly-blog-design.md`

## Global Constraints

- 语言：`en`、`zh`、`es`、`ru`、`ar`。每篇文章 5 个语言文件必须齐全、同名。
- 上线：周一 08:30 北京时间；cron `30 0 * * 1`。**修订（2026-09-21，检查点 B 之后）：改为美西时间周一 08:30（`cron: '30 8 * * 1'` 加 `timezone: "America/Los_Angeles"`），`shanghaiDate` 改名 `scheduleDate`。下文凡写「北京时间」的地方，按美西时间执行。**
- `date`：带引号的 `"YYYY-MM-DD"`，5 个语言一致，取值为上线那个周一。
- 文章路由的 `dynamicParams = false` 不动。
- 不新增 npm 依赖；测试用 `node --test`；YAML 校验用已装的 `js-yaml`。
- 作者：`en/es/ru/ar` 写 `"Weiwei Zipper"`，`zh` 写 `"伟伟拉链"`（与现有文章一致）。
- 英文用美式拼写（全站 `color` 239 处 vs `colour` 10 处）。
- 可以公开的公司事实**仅限**：成品 1000 条起订、一个订单内可混色、单色低于 2000 条每色另付 150 元染色费、常规规格打样约 3 天、确认样品与订单后大货约 10 天、码装另行报价、3/5/8 号约 3/5/8 毫米、1992 年起经营、义乌国际商贸城三区摊位。
- 按询盘沟通、**不写成公司事实**：包装箱规、常备拉头类型与默认款、卷长、带宽、对色依据与常备色数、成品长度区间、混色单色下限。
- 不写认证、客户名、客户评价、编造的数据或案例；不点名、不评价其他拉链厂。
- 文章内链不带语言前缀（渲染时 next-intl 的 `Link` 会自动加）；只能链到上线日不晚于本文的文章。
- 英文标题 ≤ 50 字符（加上「 | Weiwei Zipper」后缀不超过 SERP 截断线）；英文摘要 ≤ 155 字符；中文摘要 ≤ 60 字。
- `readTime = Math.max(4, Math.round(英文正文词数 / 110))`，5 个语言相同。
- 提交信息：英文祈使句标题 + 说明原因的正文，**不加任何 AI 署名行**。
- `npm run build` 只由主会话串行执行；子代理不跑构建、不启服务。
- 每次构建后按端口重启 3000 服务（`pkill -f "next start"` 匹配不到进程，别用）：

```bash
LOG="${TMPDIR:-/tmp}/weiwei-next-start.log"
kill $(lsof -nP -tiTCP:3000 -sTCP:LISTEN) 2>/dev/null
for i in $(seq 1 30); do lsof -nP -tiTCP:3000 -sTCP:LISTEN >/dev/null || break; sleep 0.3; done
: > "$LOG"; nohup npm run start > "$LOG" 2>&1 &
for i in $(seq 1 60); do grep -q "Ready in" "$LOG" && break; sleep 0.5; done
grep -q EADDRINUSE "$LOG" && echo "!! 端口被占，服务没起来" || echo "服务已就绪"
```

---

## 文件结构

| 文件 | 职责 | Task |
|---|---|---|
| `src/lib/blog-schedule.mjs` | 零依赖纯函数：北京日期、到期判断、预览开关、frontmatter 日期、排期计数、语料校验 | 1 |
| `src/lib/blog-schedule.test.mjs` | 上面的单元测试 | 1 |
| `src/lib/blog-corpus.mjs` | 从 `content/blog/<locale>/*.md` 读语料（fs + gray-matter），站点与命令行共用 | 2 |
| `src/lib/blog-corpus.test.mjs` | 临时目录夹具测试 | 2 |
| `src/site-data/blog-posts.ts` | 修改：按日期过滤 + 构建期校验 | 2、3 |
| `scripts/validate-blog.mjs` | 命令行版校验，写文章中途用 | 2 |
| `content/llms.template.txt` | `llms.txt` 模板 | 3 |
| `src/lib/llms-txt.mjs` / `llms-txt.test.mjs` | 模板渲染 + 快照测试 | 3 |
| `src/lib/__fixtures__/llms.before.txt` | 改造前的 `llms.txt` 快照 | 3 |
| `src/app/llms.txt/route.ts` | 构建时生成 `/llms.txt` | 3 |
| `public/llms.txt` | 删除 | 3 |
| `src/lib/content-checks.mjs` / `content-checks.test.mjs` | 红线规则、站内链接、数字提取；对真实内容跑红线与链接一致性 | 4 |
| `scripts/translation-report.mjs` | 译文与英文的数字差异报告（人工核对，不作为门禁） | 4 |
| `content/blog/STYLE.md` | 写作规则、术语表、验收命令、撤稿方法 | 4 |
| `scripts/blog-queue.mjs` | 零依赖：输出未到期篇数，给 Actions 用 | 5 |
| `.github/workflows/weekly-publish.yml` | 每周重建 + 队列提醒 | 5 |
| `content/blog/{en,zh,es,ru,ar}/<slug>.md` × 4 | 第一批文章 | 6–10 |
| `package.json` | 新增 `test` 脚本，Task 1–4 依次追加测试文件 | 1–4 |

---

### Task 0：英文统一为美式拼写

前几轮修复时我在 5 个文件的英文字符串里引入了 32 处英式拼写。代码注释里的 6 处不是用户可见文字，不动。

**Files:**
- Modify: `src/site-data/faq-content.ts`、`src/site-data/site-content.ts`、`src/site-data/product-catalog.ts`、`src/site-data/market-landing-content.ts`、`public/llms.txt`

**Interfaces:**
- Produces: 美式拼写的 `public/llms.txt`（Task 3 的快照以它为准）

- [ ] **Step 1：确认基线**

```bash
FILES="src/site-data/faq-content.ts src/site-data/site-content.ts src/site-data/product-catalog.ts src/site-data/market-landing-content.ts public/llms.txt"
grep -hoE '\b([Cc]olours?|customise|catalogue)\b' $FILES | wc -l
```

Expected: `32`

- [ ] **Step 2：替换**

```bash
node - <<'JS'
const fs = require('fs');
const files = ['src/site-data/faq-content.ts', 'src/site-data/site-content.ts', 'src/site-data/product-catalog.ts', 'src/site-data/market-landing-content.ts', 'public/llms.txt'];
const map = [[/\bcolours\b/g, 'colors'], [/\bColours\b/g, 'Colors'], [/\bcolour\b/g, 'color'], [/\bColour\b/g, 'Color'], [/\bcustomise\b/g, 'customize'], [/\bcatalogue\b/g, 'catalog']];
for (const f of files) {
  let text = fs.readFileSync(f, 'utf8');
  let n = 0;
  for (const [re, to] of map) text = text.replace(re, () => { n++; return to; });
  fs.writeFileSync(f, text);
  console.log(f, n);
}
JS
```

Expected：`faq-content.ts 6`、`site-content.ts 6`、`product-catalog.ts 16`、`market-landing-content.ts 1`、`public/llms.txt 3`

- [ ] **Step 3：复查**

（shell 变量不跨步骤保留，每一步都重新定义 `FILES`。）

```bash
FILES="src/site-data/faq-content.ts src/site-data/site-content.ts src/site-data/product-catalog.ts src/site-data/market-landing-content.ts public/llms.txt"
grep -hoE '\b([Cc]olours?|customise|catalogue)\b' $FILES | wc -l
git diff --stat
git diff -U0 | grep -E '^[-+][^-+]' | grep -vE 'colou?rs?|Colou?rs?|customi[sz]e|catalog(ue)?' | head
```

Expected：第一行 `0`；5 个文件有改动；最后一条命令无输出（每一行改动都只涉及这几个词）。

- [ ] **Step 4：构建并抽查**

```bash
npm run build 2>&1 | grep -E "✓ Compiled|✓ Generating|Failed|rror"
```

然后按 Global Constraints 重启服务：

```bash
curl -s http://localhost:3000/faq | grep -o "Colors can be mixed" | head -1
curl -s http://localhost:3000/llms.txt | grep -o "customize metal"
```

Expected：构建出现 `✓ Generating static pages (181/181)`；两条 `curl` 各输出一行。

- [ ] **Step 5：提交**

```bash
FILES="src/site-data/faq-content.ts src/site-data/site-content.ts src/site-data/product-catalog.ts src/site-data/market-landing-content.ts public/llms.txt"
git add $FILES
git diff --cached --stat | tail -1
git commit -F - <<'MSG'
Use American spelling throughout the English copy

The site is written in American English (color 239 times, colour 10),
but the copy added over the last few rounds introduced 32 British
spellings — in the FAQ answers, the quote page's order conditions, the
home page, the Yiwu checklist, the product specs and llms.txt. They are
all user-facing strings; code comments are left alone.
MSG
```

---

### Task 1：排期纯函数模块

**Files:**
- Create: `src/lib/blog-schedule.mjs`
- Create: `src/lib/blog-schedule.test.mjs`
- Modify: `package.json`（`scripts` 加 `test`）

**Interfaces:**
- Produces（后续 Task 按这些名字调用）：
  - `shanghaiDate(now?: Date): string`：返回 `YYYY-MM-DD`
  - `isValidDateString(value: unknown): value is string`
  - `isDue(date: string, today: string): boolean`
  - `shouldShowScheduled(env: Record<string, string | undefined>): boolean`
  - `readFrontmatterDate(markdown: string): string | null`
  - `countScheduled(dates: (string | null)[], today: string): number`
  - `extractBlogLinks(markdown: string): string[]`
  - `extractLocalePrefixedLinks(markdown: string, locales: readonly string[]): string[]`
  - `validateCorpus({ locales, articles }: { locales: readonly string[], articles: ArticleFile[] }): string[]`
  - typedef `ArticleFile = { slug: string, locale: string, date: unknown, content: string }`

- [ ] **Step 1：写失败的测试** —— `src/lib/blog-schedule.test.mjs`

```js
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  countScheduled,
  extractBlogLinks,
  extractLocalePrefixedLinks,
  isDue,
  isValidDateString,
  readFrontmatterDate,
  shanghaiDate,
  shouldShowScheduled,
  validateCorpus,
} from './blog-schedule.mjs';

test('shanghaiDate rolls over at midnight Beijing time, not UTC', () => {
  // 2026-09-27 16:30 UTC is 00:30 on Monday 28 September in Beijing.
  assert.equal(shanghaiDate(new Date('2026-09-27T16:30:00Z')), '2026-09-28');
  assert.equal(shanghaiDate(new Date('2026-09-27T15:59:59Z')), '2026-09-27');
  // The weekly job runs at 00:30 UTC, which is 08:30 in Beijing.
  assert.equal(shanghaiDate(new Date('2026-09-28T00:30:00Z')), '2026-09-28');
});

test('isValidDateString accepts quoted calendar dates only', () => {
  assert.equal(isValidDateString('2026-09-28'), true);
  assert.equal(isValidDateString('2026-02-30'), false);
  assert.equal(isValidDateString('2026-9-28'), false);
  // gray-matter turns an unquoted YAML date into a Date object.
  assert.equal(isValidDateString(new Date('2026-09-28')), false);
  assert.equal(isValidDateString(undefined), false);
});

test('isDue includes the article date itself', () => {
  assert.equal(isDue('2026-09-28', '2026-09-28'), true);
  assert.equal(isDue('2026-09-29', '2026-09-28'), false);
  assert.equal(isDue('2026-03-06', '2026-09-28'), true);
});

test('shouldShowScheduled only for Vercel previews or the explicit flag', () => {
  assert.equal(shouldShowScheduled({ VERCEL_ENV: 'preview' }), true);
  assert.equal(shouldShowScheduled({ VERCEL_ENV: 'production' }), false);
  assert.equal(shouldShowScheduled({ BLOG_SHOW_SCHEDULED: '1' }), true);
  assert.equal(shouldShowScheduled({}), false);
});

test('readFrontmatterDate reads quoted and unquoted dates from frontmatter only', () => {
  assert.equal(readFrontmatterDate('---\ntitle: "x"\ndate: "2026-10-05"\n---\nbody'), '2026-10-05');
  assert.equal(readFrontmatterDate('---\ndate: 2026-10-05\n---\n'), '2026-10-05');
  assert.equal(readFrontmatterDate('no frontmatter\ndate: "2026-10-05"'), null);
});

test('countScheduled counts only dates after today', () => {
  assert.equal(countScheduled(['2026-09-28', '2026-10-05', '2026-10-12', null], '2026-09-28'), 2);
  assert.equal(countScheduled([], '2026-09-28'), 0);
});

test('extractBlogLinks finds article links, with or without an anchor', () => {
  const md = 'See [a](/blog/zipper-parts-explained) and [b](/blog/how-to-measure-zipper-length#open-end), not [c](/products/metal-zippers).';
  assert.deepEqual(extractBlogLinks(md), ['zipper-parts-explained', 'how-to-measure-zipper-length']);
});

test('extractLocalePrefixedLinks flags prefixed internal links only', () => {
  const md = '[x](/zh/products/metal-zippers) [y](/products/metal-zippers) [z](/es) [w](/zhongwen)';
  assert.deepEqual(extractLocalePrefixedLinks(md, ['en', 'zh', 'es', 'ru', 'ar']), ['/zh/products/metal-zippers', '/es']);
});

const LOCALES = ['en', 'zh'];
const article = (slug, locale, date, content = '') => ({ slug, locale, date, content });

test('validateCorpus passes a complete, consistent corpus', () => {
  const articles = [
    article('a', 'en', '2026-09-28'),
    article('a', 'zh', '2026-09-28'),
    article('b', 'en', '2026-10-05', '[a](/blog/a)'),
    article('b', 'zh', '2026-10-05', '[a](/blog/a)'),
  ];
  assert.deepEqual(validateCorpus({ locales: LOCALES, articles }), []);
});

test('validateCorpus reports a missing translation', () => {
  const errors = validateCorpus({ locales: LOCALES, articles: [article('a', 'en', '2026-09-28')] });
  assert.equal(errors.length, 1);
  assert.match(errors[0], /^a: missing zh translation/);
});

test('validateCorpus reports locales that disagree on the date', () => {
  const errors = validateCorpus({ locales: LOCALES, articles: [article('a', 'en', '2026-09-28'), article('a', 'zh', '2026-10-05')] });
  assert.deepEqual(errors, ['a: locales disagree on the date (2026-09-28, 2026-10-05)']);
});

test('validateCorpus rejects an unquoted or malformed date', () => {
  const errors = validateCorpus({ locales: ['en'], articles: [article('a', 'en', new Date('2026-09-28'))] });
  assert.equal(errors.length, 1);
  assert.match(errors[0], /date must be a quoted "YYYY-MM-DD" string/);
});

test('validateCorpus rejects a link to an article that goes live later', () => {
  const articles = [
    article('a', 'en', '2026-09-28', '[b](/blog/b)'),
    article('a', 'zh', '2026-09-28', '[b](/blog/b)'),
    article('b', 'en', '2026-10-05'),
    article('b', 'zh', '2026-10-05'),
  ];
  const errors = validateCorpus({ locales: LOCALES, articles });
  assert.equal(errors.length, 2);
  assert.match(errors[0], /goes live after this article/);
});

test('validateCorpus rejects a link to an article that does not exist', () => {
  const errors = validateCorpus({ locales: ['en'], articles: [article('a', 'en', '2026-09-28', '[x](/blog/nope)')] });
  assert.deepEqual(errors, ['a [en]: links to /blog/nope, which does not exist']);
});

test('validateCorpus rejects locale-prefixed links', () => {
  const errors = validateCorpus({ locales: ['en', 'zh'], articles: [article('a', 'en', '2026-09-28', '[q](/zh/quote)'), article('a', 'zh', '2026-09-28')] });
  assert.deepEqual(errors, ['a [en]: link /zh/quote carries a locale prefix; write it without one']);
});
```

- [ ] **Step 2：加测试脚本并确认失败**

在 `package.json` 的 `scripts` 里加一行（放在 `lint` 后面）：

```json
"test": "node --test src/lib/blog-schedule.test.mjs"
```

```bash
npm test 2>&1 | tail -5
```

Expected：FAIL，报错含 `Cannot find module` 和 `blog-schedule.mjs`。

- [ ] **Step 3：写实现** —— `src/lib/blog-schedule.mjs`

```js
/**
 * Publication schedule for the news section (资讯).
 *
 * Plain JavaScript rather than TypeScript on purpose: the site imports it from
 * TypeScript (tsconfig has allowJs), the weekly GitHub Actions job runs it with
 * bare Node, and `node --test` exercises it — no build step, no test framework.
 * Keep this file free of imports so the weekly job never needs `npm ci`.
 */

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

/**
 * Today's date in Beijing time, as YYYY-MM-DD.
 *
 * Builds run in UTC, whose date lags Beijing's between 00:00 and 08:00 Beijing
 * time; a build in that window would otherwise hide an article dated that day.
 *
 * @param {Date} [now]
 * @returns {string}
 */
export function shanghaiDate(now = new Date()) {
  // The en-CA locale formats a date as YYYY-MM-DD.
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now);
}

/**
 * Whether a frontmatter date is a real calendar date written as a string.
 *
 * gray-matter turns an unquoted `date: 2026-09-28` into a Date object.
 * Requiring the quoted form keeps every comparison here a plain string one.
 *
 * @param {unknown} value
 * @returns {value is string}
 */
export function isValidDateString(value) {
  if (typeof value !== 'string' || !DATE_RE.test(value)) return false;
  const [year, month, day] = value.split('-').map(Number);
  const probe = new Date(Date.UTC(year, month - 1, day));
  return probe.getUTCFullYear() === year && probe.getUTCMonth() === month - 1 && probe.getUTCDate() === day;
}

/**
 * An article is due on its own date, not the day after.
 *
 * @param {string} date  article date, YYYY-MM-DD
 * @param {string} today YYYY-MM-DD
 * @returns {boolean}
 */
export function isDue(date, today) {
  return date <= today;
}

/**
 * Scheduled articles are visible on Vercel branch previews, so a batch can be
 * reviewed before its dates arrive, and locally with BLOG_SHOW_SCHEDULED=1.
 *
 * @param {Record<string, string | undefined>} env
 * @returns {boolean}
 */
export function shouldShowScheduled(env) {
  return env.VERCEL_ENV === 'preview' || env.BLOG_SHOW_SCHEDULED === '1';
}

/**
 * The `date` field of a markdown file's frontmatter, or null.
 *
 * For the weekly job, which runs without installing dependencies; the site
 * itself parses frontmatter with gray-matter.
 *
 * @param {string} markdown
 * @returns {string | null}
 */
export function readFrontmatterDate(markdown) {
  const block = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!block) return null;
  const line = block[1].match(/^date:\s*["']?(\d{4}-\d{2}-\d{2})["']?\s*$/m);
  return line ? line[1] : null;
}

/**
 * How many articles are still waiting for their date.
 *
 * @param {(string | null)[]} dates
 * @param {string} today
 * @returns {number}
 */
export function countScheduled(dates, today) {
  return dates.filter((date) => typeof date === 'string' && date > today).length;
}

/**
 * Slugs of the articles a markdown body links to, written as `](/blog/<slug>)`.
 *
 * @param {string} markdown
 * @returns {string[]}
 */
export function extractBlogLinks(markdown) {
  return [...markdown.matchAll(/\]\(\/blog\/([a-z0-9-]+)\/?(?:#[^)]*)?\)/g)].map((m) => m[1]);
}

/**
 * Internal links written with a locale prefix. The article renderer passes
 * every internal link through next-intl's Link, which adds the prefix itself,
 * so `/zh/products` would render as `/zh/zh/products` and 404.
 *
 * @param {string} markdown
 * @param {readonly string[]} locales
 * @returns {string[]}
 */
export function extractLocalePrefixedLinks(markdown, locales) {
  const pattern = new RegExp(`\\]\\((\\/(?:${locales.join('|')})(?:\\/[^)]*)?)\\)`, 'g');
  return [...markdown.matchAll(pattern)].map((m) => m[1]);
}

/**
 * @typedef {object} ArticleFile
 * @property {string} slug
 * @property {string} locale
 * @property {unknown} date     frontmatter `date` as parsed
 * @property {string} content  markdown body
 */

/**
 * Everything that must hold before the news section may be built. Returns one
 * message per problem; an empty array means the corpus is publishable.
 *
 * @param {{ locales: readonly string[], articles: ArticleFile[] }} corpus
 * @returns {string[]}
 */
export function validateCorpus({ locales, articles }) {
  const errors = [];
  /** @type {Map<string, Map<string, ArticleFile>>} */
  const bySlug = new Map();
  for (const article of articles) {
    if (!bySlug.has(article.slug)) bySlug.set(article.slug, new Map());
    bySlug.get(article.slug).set(article.locale, article);
  }

  /** @type {Map<string, string>} */
  const dateOf = new Map();
  for (const [slug, perLocale] of bySlug) {
    for (const locale of locales) {
      if (!perLocale.has(locale)) {
        errors.push(`${slug}: missing ${locale} translation (content/blog/${locale}/${slug}.md)`);
      }
    }
    const dates = new Set();
    for (const [locale, article] of perLocale) {
      if (isValidDateString(article.date)) {
        dates.add(article.date);
      } else {
        errors.push(`${slug} [${locale}]: date must be a quoted "YYYY-MM-DD" string, got ${JSON.stringify(article.date)}`);
      }
    }
    if (dates.size > 1) errors.push(`${slug}: locales disagree on the date (${[...dates].sort().join(', ')})`);
    if (dates.size === 1) dateOf.set(slug, [...dates][0]);
  }

  for (const article of articles) {
    const ownDate = dateOf.get(article.slug);
    for (const target of extractBlogLinks(article.content)) {
      const targetDate = dateOf.get(target);
      if (!bySlug.has(target)) {
        errors.push(`${article.slug} [${article.locale}]: links to /blog/${target}, which does not exist`);
      } else if (ownDate && targetDate && targetDate > ownDate) {
        errors.push(
          `${article.slug} [${article.locale}]: links to /blog/${target} (${targetDate}), which goes live after this article (${ownDate})`,
        );
      }
    }
    for (const href of extractLocalePrefixedLinks(article.content, locales)) {
      errors.push(`${article.slug} [${article.locale}]: link ${href} carries a locale prefix; write it without one`);
    }
  }
  return errors;
}
```

- [ ] **Step 4：跑测试确认通过**

```bash
npm test 2>&1 | tail -8
```

Expected：`# pass 15`、`# fail 0`

- [ ] **Step 5：提交**

```bash
git add src/lib/blog-schedule.mjs src/lib/blog-schedule.test.mjs package.json
git commit -F - <<'MSG'
Add the publication schedule module and its tests

Pure functions for the weekly article schedule: today's date in Beijing
time, whether an article is due, when scheduled articles may be shown,
and the checks a corpus must pass before it is built — every locale
present, one date per article, no link to an article that goes live
later, no locale prefix on internal links.

Plain JavaScript so the site (TypeScript, allowJs) and the weekly GitHub
Actions job (bare Node, no npm ci) share one implementation, and so
`node --test` covers it without adding a test framework.
MSG
```

---

### Task 2：读取语料，并接入 `blog-posts.ts`

**Files:**
- Create: `src/lib/blog-corpus.mjs`
- Create: `src/lib/blog-corpus.test.mjs`
- Create: `scripts/validate-blog.mjs`
- Modify: `src/site-data/blog-posts.ts`（文件开头到 `getBlogSlugs()` 为止）
- Modify: `package.json`（`test` 脚本追加文件）

**Interfaces:**
- Consumes: Task 1 的 `isDue`、`shanghaiDate`、`shouldShowScheduled`、`validateCorpus`、`ArticleFile`
- Produces:
  - `listSlugs(blogDir: string): string[]`（按字母排序）
  - `readCorpus(blogDir: string, locales: readonly string[]): ArticleFile[]`
  - `getBlogSlugs()` 现在只返回已到期的 slug；签名不变

- [ ] **Step 1：写失败的测试** —— `src/lib/blog-corpus.test.mjs`

```js
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
```

把 `package.json` 的 `test` 改成：

```json
"test": "node --test src/lib/blog-schedule.test.mjs src/lib/blog-corpus.test.mjs"
```

```bash
npm test 2>&1 | tail -5
```

Expected：FAIL，报错含 `blog-corpus.mjs`。

- [ ] **Step 2：写实现** —— `src/lib/blog-corpus.mjs`

```js
/**
 * Reads the news articles from disk.
 *
 * Shared by the site (src/site-data/blog-posts.ts) and
 * scripts/validate-blog.mjs, so the command-line check sees exactly what the
 * build sees.
 */
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

/**
 * Every article slug, from the English folder — all locales share filenames.
 * Sorted, because readdir order differs between macOS and the Linux builders.
 *
 * @param {string} blogDir
 * @returns {string[]}
 */
export function listSlugs(blogDir) {
  const enDir = path.join(blogDir, 'en');
  if (!fs.existsSync(enDir)) return [];
  return fs
    .readdirSync(enDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.slice(0, -'.md'.length))
    .sort();
}

/**
 * One entry per article file that exists. A missing locale file is simply
 * absent; reporting it is the validator's job.
 *
 * @param {string} blogDir
 * @param {readonly string[]} locales
 * @returns {import('./blog-schedule.mjs').ArticleFile[]}
 */
export function readCorpus(blogDir, locales) {
  const articles = [];
  for (const slug of listSlugs(blogDir)) {
    for (const locale of locales) {
      const file = path.join(blogDir, locale, `${slug}.md`);
      if (!fs.existsSync(file)) continue;
      const { data, content } = matter(fs.readFileSync(file, 'utf8'));
      articles.push({ slug, locale, date: data.date, content });
    }
  }
  return articles;
}
```

```bash
npm test 2>&1 | tail -5
```

Expected：`# pass 18`、`# fail 0`

- [ ] **Step 3：接入站点** —— 把 `src/site-data/blog-posts.ts` 从文件开头到 `getBlogSlugs()` 结束（含）替换为下面的内容；`getAllBlogPosts`、`getBlogPostMeta`、`getBlogPost`、`BLOG_SLUGS` 原样保留：

```ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { routing } from "@/localization/routing";
import { listSlugs, readCorpus } from "@/lib/blog-corpus.mjs";
import { isDue, shanghaiDate, shouldShowScheduled, validateCorpus } from "@/lib/blog-schedule.mjs";

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: number;
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
 * An article whose date has not yet arrived in Beijing time is left out, so it
 * is absent from the index, the sitemap and the static routes — and, with
 * `dynamicParams = false` on the article route, its URL is a real 404 — until
 * the first build on or after its date. Vercel branch previews show every
 * article so a batch can be reviewed early.
 */
export function getBlogSlugs(): string[] {
  const slugs = listSlugs(BLOG_DIR);
  if (shouldShowScheduled(process.env)) return slugs;
  const today = shanghaiDate();
  return slugs.filter((slug) => {
    const { data } = matter(fs.readFileSync(path.join(BLOG_DIR, "en", `${slug}.md`), "utf-8"));
    return isDue(data.date, today);
  });
}
```

- [ ] **Step 4：命令行校验脚本** —— `scripts/validate-blog.mjs`

```js
#!/usr/bin/env node
/**
 * Runs the same publishability checks as `next build`, without building.
 * Useful mid-batch: `node scripts/validate-blog.mjs` lists every problem.
 */
import fs from 'node:fs';
import path from 'node:path';
import { readCorpus } from '../src/lib/blog-corpus.mjs';
import { validateCorpus } from '../src/lib/blog-schedule.mjs';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

// The build checks against routing.locales. This mirror uses the locale
// folders that exist — the same set unless a whole folder is missing, which
// the build would still catch.
const locales = fs
  .readdirSync(BLOG_DIR, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

const errors = validateCorpus({ locales, articles: readCorpus(BLOG_DIR, locales) });
if (errors.length === 0) {
  console.log(`content/blog OK (${locales.join(', ')})`);
} else {
  console.log(errors.map((error) => `- ${error}`).join('\n'));
  console.log(`${errors.length} problem(s)`);
  process.exitCode = 1;
}
```

```bash
node scripts/validate-blog.mjs
```

Expected：`content/blog OK (ar, en, es, ru, zh)`

- [ ] **Step 5：正常构建不受影响**

```bash
npm run build 2>&1 | grep -E "✓ Compiled|✓ Generating|Failed|rror"
node -e 'const m=require("./.next/prerender-manifest.json"); console.log(Object.keys(m.routes).filter(r=>/\/blog\/[a-z0-9-]+$/.test(r)).length)'
```

Expected：`✓ Generating static pages (181/181)`；第二行 `25`（5 篇 × 5 语言，全部已到期）。

- [ ] **Step 6：探针 A——未到期文章被隐藏**

```bash
PROBE=zz-schedule-probe
for l in en zh es ru ar; do
  printf -- '---\ntitle: "Schedule probe"\nexcerpt: "Probe."\ndate: "2099-01-05"\nauthor: "Weiwei Zipper"\ncategory: "guide"\nreadTime: 4\n---\n\nProbe.\n' > content/blog/$l/$PROBE.md
done
npm run build 2>&1 | grep -E "✓ Generating|Failed|rror"
```

按 Global Constraints 重启服务：

```bash
PROBE=zz-schedule-probe
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/blog/$PROBE
curl -s http://localhost:3000/sitemap.xml | grep -c "$PROBE"
curl -s http://localhost:3000/blog | grep -c "Schedule probe"
```

Expected：`404`、`0`、`0`

- [ ] **Step 7：探针 B——预览开关能显示**

```bash
BLOG_SHOW_SCHEDULED=1 npm run build 2>&1 | grep -E "✓ Generating|Failed|rror"
```

重启服务：

```bash
PROBE=zz-schedule-probe
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/blog/$PROBE
curl -s http://localhost:3000/sitemap.xml | grep -c "$PROBE"
```

Expected：`200`；第二行大于 `0`。

- [ ] **Step 8：探针 C——缺语言时构建失败**

```bash
PROBE=zz-schedule-probe
rm content/blog/ar/$PROBE.md
npm run build 2>&1 | grep -E "cannot be published|missing ar translation" | head -3
node scripts/validate-blog.mjs; echo "exit=$?"
```

Expected：两处都出现 `zz-schedule-probe: missing ar translation (content/blog/ar/zz-schedule-probe.md)`；`exit=1`。

- [ ] **Step 9：清理探针并恢复正常构建**

```bash
PROBE=zz-schedule-probe
rm -f content/blog/*/$PROBE.md
git status --short content/blog
npm run build 2>&1 | grep -E "✓ Generating|Failed|rror"
```

Expected：`git status` 无输出；构建 `181/181`。然后重启服务。

- [ ] **Step 10：提交**

```bash
git add src/lib/blog-corpus.mjs src/lib/blog-corpus.test.mjs scripts/validate-blog.mjs src/site-data/blog-posts.ts package.json
git commit -F - <<'MSG'
Hide articles until their date and refuse unpublishable batches

getBlogSlugs() now leaves out any article whose date has not arrived in
Beijing time. The index, sitemap and static routes all read through it,
and the article route has dynamicParams = false, so a scheduled
article's URL is a real 404 until the first build on or after its date.
Vercel previews and BLOG_SHOW_SCHEDULED=1 show everything, for review.

The build also stops on a corpus that would publish something broken: a
missing language (the reader would otherwise get the English fallback
under /zh/), locales disagreeing on the date, a link to an article that
is not live yet, or a locale-prefixed link. Vercel then keeps serving
the last good deployment. scripts/validate-blog.mjs runs the same check
without building.

Verified with probe articles: dated 2099 → 404 and absent from the
sitemap and index; with the flag → 200; with a language removed → the
build fails naming the file.
MSG
```

---

### Task 3：`llms.txt` 改为构建时生成

**Files:**
- Create: `src/lib/__fixtures__/llms.before.txt`（Task 0 之后的 `public/llms.txt` 原样拷贝）
- Create: `content/llms.template.txt`
- Create: `src/lib/llms-txt.mjs`
- Create: `src/lib/llms-txt.test.mjs`
- Create: `src/app/llms.txt/route.ts`
- Delete: `public/llms.txt`
- Modify: `src/site-data/blog-posts.ts`（`BlogPostMeta` 加 `llmsSummary`；`getBlogPostMeta` 读取它；`getAllBlogPosts` 同日按 slug 排序）
- Modify: `content/blog/en/*.md`（现有 5 篇加 `llmsSummary`）
- Modify: `package.json`

**Interfaces:**
- Consumes: Task 2 的 `getAllBlogPosts('en')`（只含已到期文章）
- Produces: `renderLlmsTxt({ template, siteUrl, urlCount, articles }): string`，其中 `articles: { slug, title, summary }[]`；`BlogPostMeta.llmsSummary?: string`

- [ ] **Step 1：存快照、生成模板**

```bash
mkdir -p src/lib/__fixtures__
cp public/llms.txt src/lib/__fixtures__/llms.before.txt
node - <<'JS'
const fs = require('fs');
const lines = fs.readFileSync('public/llms.txt', 'utf8').split('\n');
const isArticle = (l) => l.startsWith('- [') && l.includes('https://www.weiweizipper.com/blog/');
const first = lines.findIndex(isArticle);
if (first < 0) throw new Error('no article lines found');
const out = [...lines.slice(0, first), '{{BLOG_ARTICLES}}', ...lines.slice(first).filter((l) => !isArticle(l))];
let text = out.join('\n');
if (!text.includes('All 175 URLs')) throw new Error('expected "All 175 URLs" in llms.txt');
text = text.replace('All 175 URLs', 'All {{SITEMAP_URL_COUNT}} URLs');
fs.writeFileSync('content/llms.template.txt', text);
console.log('template lines:', text.split('\n').length);
JS
grep -n "{{" content/llms.template.txt
```

Expected：`template lines: 55`（58 − 5 篇文章行 + 1 行标记 + 1 行文件末尾换行造成的空串）；`grep` 输出两行，一行 `{{BLOG_ARTICLES}}` 在 `## Guides` 下面，一行 `All {{SITEMAP_URL_COUNT}} URLs`。

- [ ] **Step 2：写失败的测试** —— `src/lib/llms-txt.test.mjs`

```js
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
```

`package.json` 的 `test` 改为：

```json
"test": "node --test src/lib/blog-schedule.test.mjs src/lib/blog-corpus.test.mjs src/lib/llms-txt.test.mjs"
```

```bash
npm test 2>&1 | tail -5
```

Expected：FAIL，报错含 `llms-txt.mjs`。

- [ ] **Step 3：写实现** —— `src/lib/llms-txt.mjs`

```js
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
```

```bash
npm test 2>&1 | tail -5
```

Expected：`# pass 22`、`# fail 0`

- [ ] **Step 4：现有 5 篇英文加 `llmsSummary`**（沿用手写 `llms.txt` 的简介）

```bash
node - <<'JS'
const fs = require('fs');
const summaries = {
  'how-to-choose-zipper-size-3-5-8': 'Which size fits which garment, bag, and accessory position.',
  'closed-end-vs-open-end-zippers': 'How the two structures differ and where each is used.',
  'yiwu-zipper-wholesale-guide': 'What to confirm when sourcing zippers in Yiwu.',
  'how-to-evaluate-a-zipper-supplier-in-yiwu': 'What to check when sourcing in District 3 of Yiwu International Trade City.',
  'how-to-prepare-a-zipper-inquiry': 'What to include so sampling and quotation move faster.',
};
for (const [slug, summary] of Object.entries(summaries)) {
  const file = `content/blog/en/${slug}.md`;
  const text = fs.readFileSync(file, 'utf8');
  if (text.includes('llmsSummary:')) continue;
  fs.writeFileSync(file, text.replace(/^(readTime: .*)$/m, `$1\nllmsSummary: "${summary}"`));
}
JS
grep -c "^llmsSummary:" content/blog/en/*.md
```

Expected：5 个文件各 `1`。

- [ ] **Step 5：`blog-posts.ts` 读取 `llmsSummary`，同日按 slug 排序**

`BlogPostMeta` 里 `readTime: number;` 后面加：

```ts
  /** One-line summary for llms.txt (English files only); the excerpt is the fallback. */
  llmsSummary?: string;
```

`getBlogPostMeta` 的返回对象里 `readTime: data.readTime ?? 5,` 后面加：

```ts
    llmsSummary: data.llmsSummary,
```

`getAllBlogPosts` 的排序改为（同一天的两篇按 slug 排，Linux 与 macOS 的目录顺序不同，不这样做列表顺序会因构建机而变）：

```ts
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime() || a.slug.localeCompare(b.slug)
  );
```

- [ ] **Step 6：路由** —— `src/app/llms.txt/route.ts`

```ts
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
```

```bash
git rm -q public/llms.txt
```

- [ ] **Step 7：构建并与快照对比**

```bash
npm run build 2>&1 | grep -E "llms|✓ Generating|Failed|rror"
```

重启服务：

```bash
curl -sI http://localhost:3000/llms.txt | grep -i "^content-type"
curl -s http://localhost:3000/llms.txt > "${TMPDIR:-/tmp}/llms.after.txt"
diff src/lib/__fixtures__/llms.before.txt "${TMPDIR:-/tmp}/llms.after.txt"
```

Expected：
- 构建输出含 `○ /llms.txt`（静态）
- `content-type: text/plain; charset=utf-8`
- `diff` 只落在 `## Guides` 的 5 行里：顺序变为新到旧；3 个标题从手写的缩写变成文章的正式标题——`Closed-End vs Open-End Zippers: What Is the Difference?`、`How to Evaluate a Zipper Supplier in Yiwu International Trade City`、`How to Prepare a Zipper Inquiry That Moves Faster`。其余行（包括 `All 175 URLs`）完全相同。

- [ ] **Step 8：提交**

```bash
git add content/llms.template.txt src/lib/llms-txt.mjs src/lib/llms-txt.test.mjs src/lib/__fixtures__/llms.before.txt src/app/llms.txt/route.ts src/site-data/blog-posts.ts content/blog/en package.json
git commit -F - <<'MSG'
Generate llms.txt at build time

llms.txt was a hand-written file that listed each article. Articles now
go live on a schedule, so a hand-kept list would either miss them or
point at pages that 404 until their date. It is now rendered from
content/llms.template.txt with the live articles, newest first, and the
sitemap's URL count, which had been hard-coded as 175.

Every other line is unchanged; a snapshot test holds the template to the
file it replaces. Article lines now carry each article's real title, and
the one-line summaries move into an llmsSummary frontmatter field.

Also sorts same-day articles by slug, since directory order differs
between macOS and the Linux builders.
MSG
```

---

### Task 4：内容红线、链接一致性，以及 `STYLE.md`

**Files:**
- Create: `src/lib/content-checks.mjs`
- Create: `src/lib/content-checks.test.mjs`
- Create: `scripts/translation-report.mjs`
- Create: `content/blog/STYLE.md`
- Modify: `content/blog/{es,ru,ar}/yiwu-zipper-wholesale-guide.md`（补上漏译的最后一段）
- Modify: `package.json`

**Interfaces:**
- Produces: `GUARDRAIL_RULES`、`findGuardrailViolations(text): { id, reason, match }[]`、`internalLinks(markdown): string[]`（已排序）、`numbersIn(text): Set<string>`

- [ ] **Step 1：写失败的测试** —— `src/lib/content-checks.test.mjs`

```js
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { findGuardrailViolations, internalLinks, numbersIn } from './content-checks.mjs';

const BLOG_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), '../../content/blog');
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

test('every translation links to the same pages as its English original', () => {
  const problems = [];
  for (const file of fs.readdirSync(path.join(BLOG_DIR, 'en')).filter((f) => f.endsWith('.md'))) {
    const expected = internalLinks(body(path.join(BLOG_DIR, 'en', file)));
    for (const locale of LOCALES.filter((l) => l !== 'en')) {
      const target = path.join(BLOG_DIR, locale, file);
      if (!fs.existsSync(target)) continue; // a missing file is the build validator's concern
      const actual = internalLinks(body(target));
      if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        problems.push(`${locale}/${file}: ${JSON.stringify(actual)} ≠ en ${JSON.stringify(expected)}`);
      }
    }
  }
  assert.deepEqual(problems, []);
});
```

`package.json` 的 `test` 改为：

```json
"test": "node --test src/lib/blog-schedule.test.mjs src/lib/blog-corpus.test.mjs src/lib/llms-txt.test.mjs src/lib/content-checks.test.mjs"
```

```bash
npm test 2>&1 | tail -5
```

Expected：FAIL，报错含 `content-checks.mjs`。

- [ ] **Step 2：写实现** —— `src/lib/content-checks.mjs`

```js
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
```

```bash
npm test 2>&1 | grep -E "^# (pass|fail)|not ok|≠" | head -8
```

Expected：`# fail 1`，失败的是链接一致性测试，列出 3 条：`es/`、`ru/`、`ar/yiwu-zipper-wholesale-guide.md` 各缺 `/quote`。其余全部通过，红线测试在现有内容上零命中（写计划时已用 grep 预查过）。

如果红线测试在现有文章上有命中，逐条看原文：确实是对外承诺的，就改写那句话；是误报（普通用词撞上了规则），就收窄那条规则，并在单测的「approved」用例里加上这句原文。**不要为了让测试通过而放宽规则。**

- [ ] **Step 3：补上漏译的最后一段**

英文版结尾有一段「If you already have an old sample, reference image, or purchasing request, you can also go directly to our [quote page](/quote) and send the core details first.」，西、俄、阿版本整段缺失。在三个文件末尾各追加一个空行和下面这段：

```bash
printf '\nSi ya tiene una muestra antigua, una imagen de referencia o un requerimiento de compra, también puede ir directamente a nuestra [página de cotización](/quote) y enviar primero los datos principales.\n' >> content/blog/es/yiwu-zipper-wholesale-guide.md
printf '\nЕсли у вас уже есть старый образец, референсное изображение или закупочный запрос, можно сразу перейти на [страницу запроса цены](/quote) и сначала отправить основные данные.\n' >> content/blog/ru/yiwu-zipper-wholesale-guide.md
printf '\nإذا كانت لديك عينة قديمة أو صورة مرجعية أو طلب شراء، يمكنك أيضا الانتقال مباشرة إلى [صفحة طلب عرض السعر](/quote) وإرسال التفاصيل الأساسية أولا.\n' >> content/blog/ar/yiwu-zipper-wholesale-guide.md
tail -c 300 content/blog/es/yiwu-zipper-wholesale-guide.md
npm test 2>&1 | grep -E "^# (pass|fail)"
```

Expected：`# pass 28`、`# fail 0`。（`tail` 确认新段落前正好一个空行；如果原文件末尾没有换行，出现了连行，就改成先补一个换行。）

- [ ] **Step 4：译文数字报告脚本** —— `scripts/translation-report.mjs`

```js
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
```

```bash
node scripts/translation-report.mjs how-to-choose-zipper-size-3-5-8
```

Expected：输出 4 行（zh/es/ru/ar），每行是 `numbers match` 或者差异清单。这里只确认脚本能跑，现有文章的差异不在本 Task 处理范围内。

- [ ] **Step 5：写作规则** —— `content/blog/STYLE.md`（放在 `content/blog/` 根目录，不在任何语言目录里，不会被当成文章）

````markdown
# 资讯写作规则

设计：`docs/superpowers/specs/2026-09-21-weekly-blog-design.md`。本文件是写每一批文章时的操作手册，校准批的反馈会追加到文末。

## 排期

- 一篇文章 = 5 个同名文件：`content/blog/{en,zh,es,ru,ar}/<slug>.md`。
- `date` 是上线的那个周一，带引号：`date: "2026-09-28"`，5 个语言一致。站点按北京时间只显示到期文章；每周一 08:30 GitHub Actions 触发重建。
- 每批在分支 `blog/batch-N` 上写，站长在 Vercel 预览上审中文版，确认后合并到 `master`。合并不会立刻上线任何文章。

## Frontmatter

```yaml
---
title: "…"          # 英文 ≤ 50 字符
excerpt: "…"        # 英文 ≤ 155 字符，中文 ≤ 60 字；同时用作 meta description
date: "YYYY-MM-DD"  # 周一
author: "Weiwei Zipper"   # zh 写 "伟伟拉链"
category: "guide"   # guide | sourcing | general
readTime: 6         # max(4, round(英文正文词数 / 110))，5 个语言相同
llmsSummary: "…"    # 仅英文文件：llms.txt 里的一句话简介
---
```

## 只写两类事实

1. **行业通用知识**：每一条在发布前对照公开来源核实（厂商技术页、行业标准、专业辅料资料；不认内容农场），来源记进当天的 `pipe/claudecode/log/`。
2. **站长已批准公开的公司数字**：成品 1000 条起订、一个订单内可混色、单色低于 2000 条每色另付 150 元染色费、常规规格打样约 3 天、确认样品与订单后大货约 10 天、码装另行报价、3/5/8 号约 3/5/8 毫米、1992 年起经营、义乌国际商贸城三区摊位。

**按询盘沟通、不写成公司事实**：包装箱规、常备拉头类型与默认款、卷长、带宽、对色依据与常备色数、成品长度区间、混色单色下限。文章可以解释这些概念是什么，涉及本公司的具体做法一律写「按项目确认」。

**不写**：认证、客户名、客户评价、编造的数据或案例、其他拉链厂的名字（包括用品牌名代指工艺，例如不用 Vislon 指树脂齿）。

`npm test` 会对全部语言的全部文章跑红线规则（`src/lib/content-checks.mjs`），命中即失败。

## 结构

- 首段直接回答标题里的问题，不铺垫。
- 正文用 H2 分节，不跳级；英文正文 600–900 词。
- 结尾一段简短的询价引导，链到 `/quote`。
- 美式拼写。

## 链接

- 站内链接写成 `/products/metal-zippers`，**不带语言前缀**（渲染时自动加）。
- 每篇至少链 2 个产品或品类页，外加 `/quote`。
- 只能链到上线日**不晚于**本文的文章，构建时强制检查。
- 5 个语言的链接目标必须和英文完全一致，`npm test` 检查。
- 不链外部网站。

## 翻译

- 英文为准，中文用来消除歧义。
- 标题、摘要、正文、链接文字都要翻译；链接目标、数字、`date`、`category`、`readTime` 原样保留；只有英文文件带 `llmsSummary`。
- 数字一律用西文数字，阿语也一样。
- 西语：重音与 `¿ ¡` 必须完整，用 usted。俄语：书面语体。阿语：不插入任何双向控制字符，用阿语逗号「،」。

### 术语表

站内已经在用的译法以本表为准。新术语由翻译时核实后补进来，并注明来源。

| 英文 | 中文 | 西语 | 俄语 | 阿语 |
|---|---|---|---|---|
| zipper roll / roll chain | 码装 | cremallera por rollo / cadena por rollo | рулонная цепочка | سحاب بالرول |
| finished zipper | 成品拉链 | cremallera terminada | готовая молния | السحابات الجاهزة |
| slider | 拉头 | cursor | бегунок | （翻译时核实并补充） |
| top and bottom stops | 上下止 | topes superiores e inferiores | верхние и нижние стопоры | نقاط توقف علوية وسفلية |
| insertion pin (open-end) | 插管（也叫插销） | pieza de inserción | вставной элемент | جزء الإدخال |
| closed-end / open-end / two-way | 闭尾 / 开尾 / 双开 | cerrada / abierta / doble carro | закрытая / разъемная / двухзамковая | مغلق / مفتوح / مزدوج |
| downstream processing | 后道加工 | procesamiento posterior | последующая обработка | المعالجة اللاحقة |
| sampling / bulk | 打样 / 大货 | muestra / producción en volumen | образец / серийное производство | العينة / الإنتاج بالجملة |

## 验收命令（每批合并前）

```bash
npm test                                   # 红线 + 链接一致性 + 各模块单测
node scripts/validate-blog.mjs             # 与构建相同的语料校验
node scripts/translation-report.mjs <slug> # 译文数字差异，逐行人工核对
npm run build                              # 构建期校验
```

## 撤下一篇文章

删掉 5 个语言文件，或者把 `date` 改到将来，推送到 `master` 即可；重建后该网址返回 404。

## 注意

- 公开仓库 60 天没有提交，GitHub 会自动停用定时任务并发邮件通知；到 Actions 页面重新启用即可。正常按批合并不会触发。
- 排期只剩 1 篇时，定时任务会开一个标题为「资讯队列快空了」的 Issue，看到它就该写下一批了。

## 校准记录

（第一批审稿后，把站长的反馈整理成规则追加在这里。）
````

- [ ] **Step 6：全部检查**

```bash
npm test 2>&1 | grep -E "^# (pass|fail)"
node scripts/validate-blog.mjs
npm run build 2>&1 | grep -E "✓ Generating|Failed|rror"
```

Expected：`# pass 28`、`# fail 0`；`content/blog OK`；构建 `181/181`。然后重启服务。

- [ ] **Step 7：提交**

```bash
git add src/lib/content-checks.mjs src/lib/content-checks.test.mjs scripts/translation-report.mjs content/blog/STYLE.md content/blog/es/yiwu-zipper-wholesale-guide.md content/blog/ru/yiwu-zipper-wholesale-guide.md content/blog/ar/yiwu-zipper-wholesale-guide.md package.json
git commit -F - <<'MSG'
Guard article content and restore a missing closing paragraph

npm test now scans every article in every language for claims the site
does not make — certifications, other zipper makers, and the seven
specifics the owner agrees per inquiry (packing, stocked slider types,
roll length, tape width, color-card basis and stock colors, length
range, per-color minimum) — and checks that each translation links to
exactly the pages its English original does. Approved facts such as the
1,000-piece minimum and the RMB 150 dyeing fee pass.

The link check caught a real gap on its first run: the Spanish, Russian
and Arabic Yiwu wholesale guides were missing their final paragraph,
and with it the only link to the quote page. It is translated and
restored.

content/blog/STYLE.md is the working rulebook for each batch;
scripts/translation-report.mjs lists number differences between a
translation and the English for manual review.
MSG
```

---

### Task 5：GitHub Actions 每周重建与队列提醒

**Files:**
- Create: `scripts/blog-queue.mjs`
- Create: `.github/workflows/weekly-publish.yml`

**Interfaces:**
- Consumes: Task 1 的 `countScheduled`、`readFrontmatterDate`、`shanghaiDate`（零依赖，Actions 里不跑 `npm ci`）

- [ ] **Step 1：计数脚本** —— `scripts/blog-queue.mjs`

```js
#!/usr/bin/env node
/**
 * Prints how many articles are still waiting for their date, for the weekly
 * GitHub Actions job. Dependency-free on purpose: the job does not install
 * packages.
 */
import fs from 'node:fs';
import path from 'node:path';
import { countScheduled, readFrontmatterDate, shanghaiDate } from '../src/lib/blog-schedule.mjs';

const EN_DIR = path.join(process.cwd(), 'content/blog/en');
const dates = fs
  .readdirSync(EN_DIR)
  .filter((file) => file.endsWith('.md'))
  .map((file) => readFrontmatterDate(fs.readFileSync(path.join(EN_DIR, file), 'utf8')));

console.log(countScheduled(dates, shanghaiDate()));
```

```bash
node scripts/blog-queue.mjs
printf -- '---\ndate: "2099-01-05"\n---\n' > content/blog/en/zz-queue-probe.md
node scripts/blog-queue.mjs
rm content/blog/en/zz-queue-probe.md
```

Expected：`0`，然后 `1`。

- [ ] **Step 2：workflow** —— `.github/workflows/weekly-publish.yml`

```yaml
name: weekly-publish

# Every Monday at 08:30 Beijing time (00:30 UTC). Articles are dated to the
# Monday they go live and the site hides them until then, so a rebuild is all
# it takes to publish the week's article. Design:
# docs/superpowers/specs/2026-09-21-weekly-blog-design.md
on:
  schedule:
    - cron: '30 0 * * 1'
  workflow_dispatch:

jobs:
  rebuild:
    runs-on: ubuntu-latest
    permissions: {}
    steps:
      - name: Ask Vercel to rebuild production
        env:
          VERCEL_DEPLOY_HOOK: ${{ secrets.VERCEL_DEPLOY_HOOK }}
        run: |
          if [ -z "$VERCEL_DEPLOY_HOOK" ]; then
            echo "::error::VERCEL_DEPLOY_HOOK is not set. See section 3.5 of docs/superpowers/specs/2026-09-21-weekly-blog-design.md"
            exit 1
          fi
          curl -fsS -X POST "$VERCEL_DEPLOY_HOOK"

  # Independent of the rebuild, so the reminder still arrives if the rebuild fails.
  queue-check:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      issues: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Count articles still waiting for their date
        id: queue
        run: echo "remaining=$(node scripts/blog-queue.mjs)" >> "$GITHUB_OUTPUT"
      - name: Open a reminder when one scheduled article or fewer is left
        if: fromJSON(steps.queue.outputs.remaining) <= 1
        env:
          GH_TOKEN: ${{ github.token }}
          REMAINING: ${{ steps.queue.outputs.remaining }}
        run: |
          title="资讯队列快空了"
          open=$(gh issue list --state open --limit 100 --json title --jq "[.[] | select(.title == \"$title\")] | length")
          if [ "$open" != "0" ]; then
            echo "A reminder is already open."
            exit 0
          fi
          gh issue create --title "$title" --body "排期里还剩 ${REMAINING} 篇未上线的资讯文章。按每周一篇的节奏，排完之后的那个周一就会空档。

          请让 Claude 写下一批（8 篇）：写好并构建通过后推到一个分支，你在 Vercel 预览上看完中文版再合并。写作规则见 content/blog/STYLE.md。"
```

- [ ] **Step 3：校验 YAML**

```bash
node -e "const y=require('js-yaml').load(require('fs').readFileSync('.github/workflows/weekly-publish.yml','utf8')); console.log(Object.keys(y.jobs).join(','), '|', y.on.schedule[0].cron)"
```

Expected：`rebuild,queue-check | 30 0 * * 1`

- [ ] **Step 4：提交并推送 master**

```bash
git add scripts/blog-queue.mjs .github/workflows/weekly-publish.yml
git commit -F - <<'MSG'
Rebuild the site every Monday morning to publish that week's article

A GitHub Actions job calls the Vercel Deploy Hook at 00:30 UTC every
Monday — 08:30 in Beijing. Articles are dated to the Monday they go
live and the site hides them until then, so the rebuild is what
publishes them. It fails loudly if the hook secret is missing rather
than doing nothing.

A second, independent job counts the articles still waiting for their
date and opens a "资讯队列快空了" issue when one or none is left, so the
weekly rhythm does not quietly stop when a batch runs out. It uses only
the built-in token and pushes nothing.
MSG
git push origin master
gh workflow list | grep weekly-publish
```

Expected：推送成功；`weekly-publish  active`。**这一步不要手动运行 workflow**：此时排期为 0，会立刻开出一个提醒 Issue。workflow 的验证放到 Task 12，第一批合并之后再做。

---

### 检查点 A：机制完成，汇报并请站长做一次性设置

向站长汇报（中文）：

1. 已上线到正式站的变化：英文拼写统一；`/llms.txt` 改为自动生成（内容不变，3 个文章标题变成正式标题）；义乌指南西俄阿三语补上了漏译的结尾段。其余机制对访客不可见。
2. 请完成设计文档 §3.5 的一次性设置，**在 9 月 27 日（周日）之前**：
   - Vercel → 本项目 → Settings → Git → Deploy Hooks：名称填 `weekly-publish`，分支填 `master`，创建后复制生成的网址。
   - GitHub → `weiwei-zipper-web` → Settings → Secrets and variables → Actions → New repository secret：Name 填 `VERCEL_DEPLOY_HOOK`，Secret 粘贴上一步的网址。
   - 做完告诉我。我在第一批合并后手动运行一次，确认 Vercel 出现新部署。
3. 接下来写第一批 4 篇，写完后发预览链接请你审中文版。

然后继续 Task 6（不必等站长的设置）。

---

## 第一批文章（Task 6–9）的共同步骤

每篇文章一个 Task，在分支 `blog/batch-1` 上完成。第一篇开始前先建分支：

```bash
git checkout -b blog/batch-1
```

每篇都按下面 6 步走，具体内容见各 Task：

1. **SERP 核对**：用 WebSearch 搜该 Task 给出的主查询。记下前 5 条结果的页面类型，以及「相关问题」里的问题。如果搜索意图和大纲有出入，在本主题范围内调整大纲。结果记进 `pipe/claudecode/log/<当天>.md`。
2. **事实核查**：该 Task 列出的每条行业说法，都用 WebSearch 找至少 1 个可靠来源（厂商技术页、行业标准、专业辅料资料），把来源网址记进日志。找不到可靠来源的说法就删掉，或者改成不需要来源的表述。
3. **写英文** `content/blog/en/<slug>.md`，按 frontmatter 和大纲写，遵守 `content/blog/STYLE.md`。
4. **写中文** `content/blog/zh/<slug>.md`，同样的结构，写地道的中文，不要逐句直译。
5. **检查**：

   ```bash
   npm test 2>&1 | grep -E "^# (pass|fail)"
   node scripts/validate-blog.mjs
   awk 'BEGIN{n=0} /^---$/{n++; next} n>=2' content/blog/en/<slug>.md | wc -w
   node -e 'const m=require("gray-matter"),fs=require("fs"); for (const l of ["en","zh"]) { const d=m(fs.readFileSync(`content/blog/${l}/<slug>.md`,"utf8")).data; console.log(l, "title", [...d.title].length, "excerpt", [...d.excerpt].length); }'
   ```

   Expected：`# fail 0`；`validate-blog` 只报「本批已写文章缺 es/ru/ar」这一类错误（写完第 N 篇时正好 3N 条），没有别的错误；英文词数 600–900；英文标题 ≤ 50、英文摘要 ≤ 155、中文摘要 ≤ 60。
6. **提交**（仍在 `blog/batch-1` 上）。

---

### Task 6：《拉链各部件叫什么》（9 月 28 日）

**Files:** Create `content/blog/en/zipper-parts-explained.md`、`content/blog/zh/zipper-parts-explained.md`

**英文 frontmatter：**

```yaml
---
title: "Parts of a Zipper: Names and What Each One Does"
excerpt: "Teeth, tape, slider, puller, top and bottom stops, insertion pin and box: what each zipper part does and which to name when you specify an order."
date: "2026-09-28"
author: "Weiwei Zipper"
category: "guide"
readTime: 6
llmsSummary: "What each zipper part is called and does, and which parts to name in a spec."
---
```

**中文 frontmatter：**

```yaml
---
title: "拉链各部件叫什么：链牙、拉头、上下止与插管"
excerpt: "链牙、布带、拉头、拉片、上下止、插管与插座分别是什么，下单时哪些部件需要说清楚。"
date: "2026-09-28"
author: "伟伟拉链"
category: "guide"
readTime: 6
---
```

（`readTime` 写完后按实际英文词数重算，5 个语言统一。）

**SERP 主查询：** `parts of a zipper names`

**大纲（H2）：** 首段不设标题，说明拉链由几个有名字的部件组成，叫对名字能避免规格上最常见的误会 → The chain: teeth and tape → The slider and the puller → Top stops and the bottom stop → Open-end parts: the insertion pin and the box → Two-way zippers → Which parts to name in an order → Conclusion

**要核实的说法：**

| 说法 | 查询 |
|---|---|
| 尼龙拉链的链牙是连续的尼龙单丝螺旋（coil），缝或织在布带上 | `nylon coil zipper teeth monofilament spiral sewn to tape` |
| 树脂拉链的链牙是注塑直接成型在布带上 | `molded plastic zipper teeth injection molded onto tape` |
| 金属拉链的链牙是逐个压装在布带边缘 | `metal zipper teeth individually clamped onto tape` |
| 开尾拉链一侧是插管（insertion pin），一侧是插座（box / retainer box），两边可以完全分开 | `separating zipper insertion pin retainer box how it works` |
| 双开拉链有两个拉头；双开开尾拉链可以从下端打开 | `two way separating zipper two sliders open from bottom` |
| 上止防止拉头从顶端脱出；闭尾拉链的下止把两边在底部连住 | `zipper top stop bottom stop function` |

**必需链接：** `/blog/closed-end-vs-open-end-zippers`、`/blog/how-to-choose-zipper-size-3-5-8`、`/blog/how-to-prepare-a-zipper-inquiry`、`/products/metal-zippers`、`/products/nylon-zippers`、`/quote`

**「Which parts to name in an order」一节写这些：** 尺码（3/5/8 号约 3/5/8 毫米）、材质、牙色或齿面（金属齿面可写站上已有的亮银、金、古铜、青古铜）、布带颜色、拉头和拉片的样式、闭尾/开尾/双开、长度。**不能**写本公司常备哪些拉头锁定方式，也不能写带宽数字。**不能**链到《拉链长度怎么量》（它 10 月 5 日才上线，构建会拦下）。

**提交：**

```bash
git add content/blog/en/zipper-parts-explained.md content/blog/zh/zipper-parts-explained.md
git commit -m "Write the zipper parts article (en, zh)" -m "First of the weekly articles, dated 28 September. Defines the part names every later article relies on: teeth, tape, slider, puller, stops, and the open-end pin and box."
```

---

### Task 7：《拉链长度怎么量》（10 月 5 日）

**Files:** Create `content/blog/en/how-to-measure-zipper-length.md`、`content/blog/zh/how-to-measure-zipper-length.md`

**英文 frontmatter：**

```yaml
---
title: "How to Measure Zipper Length"
excerpt: "Zipper length covers the chain, not the whole tape. How to measure closed-end, open-end, and two-way zippers, and how to state length in an inquiry."
date: "2026-10-05"
author: "Weiwei Zipper"
category: "guide"
readTime: 6
llmsSummary: "How closed-end, open-end, and two-way zipper lengths are measured and stated."
---
```

**中文 frontmatter：**

```yaml
---
title: "拉链长度怎么量：闭尾、开尾、双开的量法"
excerpt: "拉链长度量的是链牙部分，不是整条布带。闭尾、开尾、双开分别怎么量，询价时怎么写。"
date: "2026-10-05"
author: "伟伟拉链"
category: "guide"
readTime: 6
---
```

**SERP 主查询：** `how to measure zipper length`

**大纲（H2）：** 首段不设标题，说明长度订错大多是因为双方量的不是同一段 → What "zipper length" refers to → Measuring a closed-end zipper → Measuring an open-end zipper → Measuring a two-way zipper → Tape ends are not part of the length → Working back from the garment or bag → How to state length in an inquiry → Conclusion

**要核实的说法（整篇文章以这几条为基础。如果来源之间说法不一致，就在文中直说有不同口径，并建议询价时写明按哪种量法）：**

| 说法 | 查询 |
|---|---|
| 闭尾拉链：从拉头或上止的顶端，量到下止的底端 | `how to measure zipper length closed end top stop to bottom stop` |
| 开尾拉链：从拉头或上止的顶端，量到插座的底端 | `how to measure separating zipper length bottom of box` |
| 双开拉链的量法 | `how to measure two way zipper length` |
| 上下两端多出的布带不计入长度 | 同上几条的结果 |

**必需链接：** `/blog/zipper-parts-explained`（9 月 28 日，早于本文，可以链）、`/blog/closed-end-vs-open-end-zippers`、`/blog/how-to-prepare-a-zipper-inquiry`、`/products/metal-no-5-open-end-zipper`、`/products/resin-no-5-closed-end-zipper`、`/quote`

**不能写：** 本公司能做的长度区间、公差数值。举例一律用单个数值（比如「一条 60 厘米的开尾拉链」），不写区间，红线测试会拦下区间写法。

**提交：**

```bash
git add content/blog/en/how-to-measure-zipper-length.md content/blog/zh/how-to-measure-zipper-length.md
git commit -m "Write the zipper length article (en, zh)" -m "Second weekly article, dated 5 October. How closed-end, open-end and two-way lengths are measured, and how to state the convention in an inquiry so both sides measure the same span."
```

---

### Task 8：《金属、树脂、尼龙拉链怎么选》（10 月 12 日）

**Files:** Create `content/blog/en/metal-vs-resin-vs-nylon-zippers.md`、`content/blog/zh/metal-vs-resin-vs-nylon-zippers.md`

**英文 frontmatter：**

```yaml
---
title: "Metal vs Resin vs Nylon Zippers: How to Choose"
excerpt: "Metal, resin, and nylon zippers differ in look, strength, weight, and flexibility. A side-by-side comparison, and which suits jackets, pockets, bags, and shoes."
date: "2026-10-12"
author: "Weiwei Zipper"
category: "guide"
readTime: 7
llmsSummary: "Side-by-side comparison of metal, resin, and nylon zippers, by position and use."
---
```

**中文 frontmatter：**

```yaml
---
title: "金属、树脂、尼龙拉链怎么选"
excerpt: "金属、树脂、尼龙拉链在外观、强度、重量和柔韧性上各有侧重。三种材质对比，以及外套、口袋、箱包、鞋履怎么选。"
date: "2026-10-12"
author: "伟伟拉链"
category: "guide"
readTime: 7
---
```

**SERP 主查询：** `metal vs nylon vs plastic zipper`

**大纲（H2）：** 首段不设标题，说明按拉链的位置和要承受什么来选，外观放在后面考虑 → The three materials at a glance（markdown 表格，列：Material / Teeth / Look / Hard-wearing / Weight and flexibility / Common positions，只写定性描述，不写强度数值）→ Metal zippers → Resin zippers → Nylon zippers → Choosing by position（外套前襟、口袋、箱包、鞋履、童装、防晒衣）→ Size comes next（3/5/8 号约 3/5/8 毫米，链到尺码指南）→ Try two before you commit（常规规格打样约 3 天，可以两种材质各打一个样对比）→ Conclusion

**要核实的说法：**

| 说法 | 查询 |
|---|---|
| 金属拉链较重、较硬、耐磨，常见于牛仔、工装、箱包 | `metal zipper vs nylon zipper vs molded plastic zipper pros cons uses` |
| 树脂（注塑）拉链比金属轻、齿形粗、颜色范围广、不生锈 | `molded plastic zipper advantages lightweight corrosion resistant` |
| 尼龙（螺旋）拉链柔软、顺滑、轻，能顺着弧线走 | `nylon coil zipper flexible curves advantages` |

站上已公开的金属齿面（亮银、金、古铜、青古铜）可以直接写，不需要另找来源。

**必需链接：** `/products/metal-zippers`、`/products/resin-zippers`、`/products/nylon-zippers`、`/blog/how-to-choose-zipper-size-3-5-8`、`/blog/zipper-parts-explained`、`/quote`（可选：`/blog/how-to-measure-zipper-length`，10 月 5 日，早于本文）

**不能写：** 品牌名（Vislon 是注册商标）、强度数值、常备色数。不要照抄三个品类页的文案，本文的价值在于对比，写对比、再链出去。

**提交：**

```bash
git add content/blog/en/metal-vs-resin-vs-nylon-zippers.md content/blog/zh/metal-vs-resin-vs-nylon-zippers.md
git commit -m "Write the material comparison article (en, zh)" -m "Third weekly article, dated 12 October. Compares metal, resin and nylon side by side and by position — the question none of the three category pages can answer on its own."
```

---

### Task 9：《起订量与混色》（10 月 19 日）

**Files:** Create `content/blog/en/zipper-moq-and-color-mixing.md`、`content/blog/zh/zipper-moq-and-color-mixing.md`

**英文 frontmatter：**

```yaml
---
title: "Zipper MOQ and Color Mixing, Explained"
excerpt: "Finished zippers start at 1,000 pieces per order and colors can be mixed; a color under 2,000 pieces carries a RMB 150 dyeing fee. How to plan the split."
date: "2026-10-19"
author: "Weiwei Zipper"
category: "sourcing"
readTime: 6
llmsSummary: "How the 1,000-piece minimum, color mixing, and the per-color dyeing fee work."
---
```

**中文 frontmatter：**

```yaml
---
title: "拉链起订量与混色：订单数量怎么排"
excerpt: "成品拉链 1000 条起订、可以混色，单一颜色低于 2000 条每色另付 150 元染色费。颜色配比怎么排更合适。"
date: "2026-10-19"
author: "伟伟拉链"
category: "sourcing"
readTime: 6
---
```

**SERP 主查询：** `zipper MOQ color mixing dyeing`

**大纲（H2）：** 首段不设标题，一段话讲清三条规则（只用已批准的数字）→ The minimum counts the whole order → Why dyeing is charged per color（理由沿用已公开的说法「染色按颜色安排」：每个颜色单独染一缸，不另找外部数据）→ A worked example → When mixing colors is worth the fee（开发打样、同一系列颜色很多）→ Zipper rolls are quoted separately → From sample to bulk（打样约 3 天，确认后大货约 10 天）→ What to send with your inquiry（颜色配比、每色数量、材质、尺码、长度）→ Conclusion

**「A worked example」一节，数字照写：**
- 3000 条分 3 个颜色，每色 1000 条：每个颜色都低于 2000 条，染色费 3 × 150 = 450 元。
- 同样 3000 条，排成一个颜色 2000 条、另一个颜色 1000 条：只有一个颜色低于 2000 条，染色费 150 元。
- 然后说明：单个颜色最少能排多少条，按订单确认（**不写**任何下限数字）。

**必需链接：** `/quote`、`/faq`、`/blog/how-to-prepare-a-zipper-inquiry`、`/blog/metal-vs-resin-vs-nylon-zippers`（10 月 12 日，早于本文）、`/products/resin-zippers`、`/products/nylon-zippers`

**不能写：** 单色下限、常备色数、包装，也不能写任何会被读成单价的数字。

**提交：**

```bash
git add content/blog/en/zipper-moq-and-color-mixing.md content/blog/zh/zipper-moq-and-color-mixing.md
git commit -m "Write the MOQ and color mixing article (en, zh)" -m "Fourth weekly article, dated 19 October. Turns the three published rules — 1,000-piece minimum, mixable colors, RMB 150 per color under 2,000 — into planning advice, with worked arithmetic and no new figures."
```

---

### Task 10：译成西语、俄语、阿语

**Files:** Create `content/blog/{es,ru,ar}/{zipper-parts-explained,how-to-measure-zipper-length,metal-vs-resin-vs-nylon-zippers,zipper-moq-and-color-mixing}.md`（12 个文件）；Modify `content/blog/STYLE.md`（补术语）

- [ ] **Step 1：派 3 个翻译代理，并行运行**（`general-purpose`，每个代理负责一个语言、4 篇文章）

每个语言的提示词如下，把 `{LANGUAGE}` / `{locale}` 替换成 `Spanish`/`es`、`Russian`/`ru`、`Arabic`/`ar`：

```text
You are translating four new articles for the news section of a Yiwu zipper manufacturer's website into {LANGUAGE} ({locale}).

Working directory: /Users/dragonhope/Documents/Project/weiweizipper/app/weiwei-zipper-web

Read first, and follow: content/blog/STYLE.md — especially the terminology table and the lists of facts the site does and does not publish.

Sources: content/blog/en/<slug>.md (the source of truth) and content/blog/zh/<slug>.md (use it to resolve ambiguity) for:
- zipper-parts-explained
- how-to-measure-zipper-length
- metal-vs-resin-vs-nylon-zippers
- zipper-moq-and-color-mixing

Write exactly these four files and nothing else: content/blog/{locale}/<slug>.md

Rules:
1. Frontmatter: copy date, category and readTime from the English file exactly; author is "Weiwei Zipper"; translate title and excerpt; do NOT include llmsSummary.
2. Keep every markdown link target exactly as in English — same paths, same number of links, no locale prefix. Translate only the link text.
3. Keep every number and its value. Western digits only. Do not add a number the English does not have.
4. Keep the heading structure: the same H2s, in the same order.
5. Translate meaning, not words, in the register the existing {LANGUAGE} articles in content/blog/{locale}/ use. Read one of them first.
6. For a zipper part name not in STYLE.md's table, find the standard {LANGUAGE} term on supplier or technical pages written in {LANGUAGE} (WebSearch), use it consistently, and report it with one source URL.
7. Do not edit any other file. Do not run npm, next or any build, and do not start a server.

Spanish only: complete accents and ¿ ¡ (this site has shipped "Por que" for "Por qué" and "envie" for "envíe" before — proof-read for exactly that), usted.
Russian only: formal written register.
Arabic only: Western digits (3, 5, 8, 1000), never Arabic-Indic; no bidirectional control characters (U+200E, U+200F, U+202A–U+202E); Arabic comma «،».

Report back: the four file paths, and a table of every term you added (English → {locale} → source URL).
```

- [ ] **Step 2：代理全部返回后检查**

```bash
npm test 2>&1 | grep -E "^# (pass|fail)|≠" | head
node scripts/validate-blog.mjs
node scripts/translation-report.mjs zipper-parts-explained how-to-measure-zipper-length metal-vs-resin-vs-nylon-zippers zipper-moq-and-color-mixing
grep -rnE "Por que |\benvie\b|\banos\b" content/blog/es/ || echo "西语高频漏重音：无"
# macOS 的 grep 不支持 -P，用 node 查阿语里的印度数字与双向控制符
node -e 'const fs=require("fs"); const bad=fs.readdirSync("content/blog/ar").filter(f=>/[٠-٩‎‏‪-‮]/.test(fs.readFileSync("content/blog/ar/"+f,"utf8"))); console.log(bad.length ? "有问题: "+bad.join(", ") : "阿语印度数字与双向控制符：无")'
```

Expected：`# fail 0`；`content/blog OK (ar, en, es, ru, zh)`；数字报告逐行核对，每一条 `missing` 或 `extra` 都要查原文，确认是译法造成的（比如中文把「3 号、5 号」重复了一遍），不是改错了数值；后两条各输出「无」。

- [ ] **Step 3：把代理报告的新术语补进 `STYLE.md` 的术语表**（每条带来源网址）

- [ ] **Step 4：构建**

```bash
npm run build 2>&1 | grep -E "✓ Generating|Failed|rror"
```

Expected：`181/181`（新文章都未到期，页面数不变）。然后重启服务。

- [ ] **Step 5：提交**

```bash
git add content/blog/es content/blog/ru content/blog/ar content/blog/STYLE.md
git commit -m "Translate the first batch into Spanish, Russian and Arabic" -m "Links, numbers and dates are identical to the English; new part names are recorded in STYLE.md with their sources."
```

---

### Task 11：整批验证，推送预览

- [ ] **Step 1：正式环境下 4 篇都隐藏**

（如果执行这一步时北京时间已经到了 2026-09-28 或之后，先按 Task 12 Step 3 把 4 篇的日期整体顺延，再往下做。）

```bash
for s in zipper-parts-explained how-to-measure-zipper-length metal-vs-resin-vs-nylon-zippers zipper-moq-and-color-mixing; do
  printf "%-36s %s\n" "$s" "$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/blog/$s)"
done
curl -s http://localhost:3000/llms.txt | grep -c "zipper-parts-explained"
```

Expected：4 行都是 `404`；最后一行 `0`。

- [ ] **Step 2：预览模式下 4 篇、5 个语言都能打开**

```bash
BLOG_SHOW_SCHEDULED=1 npm run build 2>&1 | grep -E "✓ Generating|Failed|rror"
```

重启服务：

```bash
for s in zipper-parts-explained how-to-measure-zipper-length metal-vs-resin-vs-nylon-zippers zipper-moq-and-color-mixing; do
  for l in "" /zh /es /ru /ar; do printf "%s " "$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000$l/blog/$s)"; done; echo " $s"
done
```

Expected：`201/201` 页（多出 4 篇 × 5 语言）；每行 5 个 `200`。

- [ ] **Step 3：全量回归**（预览模式构建下跑，让新文章也进入抓取）

```bash
SCRATCH="${TMPDIR:-/tmp}/weiwei-regress-batch-1"; mkdir -p "$SCRATCH"
PY=/Users/dragonhope/Documents/Project/weiweizipper/.claude/skills/geo/.venv/bin/python3
C=/Users/dragonhope/Documents/Project/weiweizipper/seo-audit/weiweizipper-prod-2026-09-21/crawl
(cd "$SCRATCH" && CRAWL_WORKERS=8 "$PY" "$C/crawl.py" http://localhost:3000 https://www.weiweizipper.com pages.json | tail -2 && "$PY" "$C/analyze.py" pages.json summary.json >/dev/null)
node -e '
const s=require(process.argv[1]); const zero={};
const walk=(o,p="")=>{ if(o&&typeof o==="object"&&!Array.isArray(o)) for(const[k,v] of Object.entries(o)) walk(v,p?p+"."+k:k); else if(typeof o==="number"&&/(missing|invalid|non_200|mismatch|duplicat|orphan|canonical_issues)/.test(p)&&!/width_or_height|examples/.test(p)&&o!==0) zero[p]=o; };
walk(s); console.log(Object.keys(zero).length ? zero : "零指标全部为 0");' "$SCRATCH/summary.json"
```

Expected：状态分布全部 200；`零指标全部为 0`（`missing_width_or_height` 是已知误报，已排除）。然后用普通模式重新构建并重启服务，恢复正式行为。

- [ ] **Step 4：推送分支，拿到 Vercel 预览地址**

```bash
git push -u origin blog/batch-1
SHA=$(git rev-parse HEAD)
for i in $(seq 1 40); do
  URL=$(gh api "repos/TwilightVoyager777/weiwei-zipper-web/deployments?sha=$SHA" --jq '.[0].id' 2>/dev/null | xargs -I{} gh api "repos/TwilightVoyager777/weiwei-zipper-web/deployments/{}/statuses" --jq '[.[] | select(.state=="success")][0].environment_url' 2>/dev/null)
  [ -n "$URL" ] && [ "$URL" != "null" ] && break; sleep 15
done
echo "预览：$URL"
```

Expected：输出一个 `https://…vercel.app` 地址。打开 `$URL/zh/blog/zipper-parts-explained` 确认能看到文章。**10 分钟内拿不到预览**（项目可能关了分支预览）时，改成本地审稿：用 `BLOG_SHOW_SCHEDULED=1` 构建并重启服务，请站长在 `http://localhost:3000/zh/blog/<slug>` 上看。

---

### 检查点 B：请站长审稿

向站长发 4 篇中文版的地址（预览地址或本地地址），并说明：

- 只需要看中文。西俄阿三语已核对过链接、数字、重音和术语。
- 审稿重点：说法是否符合实际做法；有没有不该对外说的话；语气和深度是否合适。
- 意见直接在对话里说，我同步改到 5 个语言。
- 确认后我合并。合并本身不会上线任何文章，第一篇在 9 月 28 日 08:30 上线。
- 提醒：§3.5 的一次性设置如果还没做，请在周日前完成。

---

### Task 12：按反馈修改、合并、收尾

- [ ] **Step 1：按站长意见修改**

先改中、英文。改动涉及的段落再同步到西、俄、阿：可以直接改，改动较大时对改动段落重新派翻译代理（沿用 Task 10 的提示词，范围缩到这些段落）。然后重跑 Task 10 Step 2 的全部检查。

- [ ] **Step 2：把反馈整理成规则**，追加到 `content/blog/STYLE.md` 的「校准记录」。每条写成可执行的规则，例如「不要写 X，改写成 Y」，并注明来自第一批审稿。

- [ ] **Step 3：如果合并时已经过了第一篇的日期**，把 4 篇的日期整体顺延到合并后的第一个周一起。`N` 是要顺延的周数：

```bash
N=1
node - "$N" <<'JS'
const fs = require('fs');
const weeks = Number(process.argv[2]);
const slugs = ['zipper-parts-explained', 'how-to-measure-zipper-length', 'metal-vs-resin-vs-nylon-zippers', 'zipper-moq-and-color-mixing'];
for (const locale of ['en', 'zh', 'es', 'ru', 'ar']) for (const slug of slugs) {
  const file = `content/blog/${locale}/${slug}.md`;
  const text = fs.readFileSync(file, 'utf8');
  fs.writeFileSync(file, text.replace(/^date: "(\d{4}-\d{2}-\d{2})"$/m, (_, d) => {
    const t = new Date(`${d}T00:00:00Z`); t.setUTCDate(t.getUTCDate() + 7 * weeks);
    return `date: "${t.toISOString().slice(0, 10)}"`;
  }));
}
JS
node scripts/validate-blog.mjs
```

Expected：`content/blog OK`（整体顺延，文章之间的先后关系不变，链接规则仍然满足）。

- [ ] **Step 4：提交反馈修改并合并**

提交信息的正文逐条写站长的意见和对应改动，一条一行，写法如：`- Dropped the washing claim from the metal section, at the owner's request.` 先把正文写进临时文件，再提交：

```bash
MSGFILE="${TMPDIR:-/tmp}/batch-1-review-msg.txt"   # 第一行写标题 "Apply the owner's review of the first batch"，空一行，再逐条写意见
git add content/blog
git commit -F "$MSGFILE"
npm test 2>&1 | grep -E "^# (pass|fail)"
npm run build 2>&1 | grep -E "✓ Generating|Failed|rror"
git checkout master
git merge --ff-only blog/batch-1
git push origin master
git push origin --delete blog/batch-1
git branch -d blog/batch-1
```

Expected：`# fail 0`；构建 `181/181`；快进合并成功，推送成功。

- [ ] **Step 5：确认正式站此时仍然隐藏**（等 Vercel 部署完成，大约 2 分钟）

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://www.weiweizipper.com/blog/zipper-parts-explained
```

Expected：`404`（第一篇的日期还没到）。

- [ ] **Step 6：站长完成 §3.5 后，验证 workflow**

```bash
gh workflow run weekly-publish
sleep 60
gh run list --workflow weekly-publish --limit 1
gh run view "$(gh run list --workflow weekly-publish --limit 1 --json databaseId --jq '.[0].databaseId')" --json jobs --jq '.jobs[] | "\(.name) \(.conclusion)"'
gh issue list --state open --search "资讯队列快空了 in:title"
```

Expected：`rebuild success`、`queue-check success`；没有新开 Issue（排期里还有 4 篇）；Vercel 出现一次新的正式部署。

- [ ] **Step 7：上线日核对**（9 月 28 日 08:30 之后）

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://www.weiweizipper.com/blog/zipper-parts-explained
curl -s https://www.weiweizipper.com/llms.txt | grep -c "zipper-parts-explained"
curl -s https://www.weiweizipper.com/sitemap.xml | grep -c "zipper-parts-explained"
```

Expected：`200`、`1`、大于 `0`。

- [ ] **Step 8：更新交接区**

按 `app/CLAUDE.md` 覆盖 `../pipe/claudecode/latest.md`，并在 `../pipe/claudecode/log/<当天>.md` 追加：改了哪些文件、SERP 与事实核查的来源、踩的坑、需要规划层知道的事（下一批的时间：排期只剩 1 篇时会收到 Issue）。
