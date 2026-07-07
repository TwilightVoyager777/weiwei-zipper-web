# 02 · 技术 SEO 与元信息优化

> 前置阅读：`00-总览与执行顺序.md`。
> 类型：代码任务为主 + 一份需要用户亲自操作的注册清单（见第六节，整理好交给用户即可）。

## 一、现状盘点（哪些已经有了，别重复造轮子）

以下基建**已存在且质量合格**，本任务是在其上补强，不是重建：

- `src/app/sitemap.ts`：全部页面 × 5 语言 + hreflang alternates，含产品/分类/博客动态路由
- `src/app/robots.ts`
- `src/seo/localized-urls.ts`：`alternatesForPath()` 输出 canonical + languages + x-default，各页 `generateMetadata` 已调用
- JSON-LD：
  - `[locale]/layout.tsx`：Organization（含 PostalAddress/ContactPoint/Place/Brand）+ WebSite
  - `products/[slug]/page.tsx`：BreadcrumbList + Product（含 Brand/Organization/Offer）+ ItemList
  - `faq/page.tsx`：FAQPage
- title template：`[locale]/layout.tsx` 第 63 行 `template: '%s | ${siteName}'`

## 二、Bug 修复：标题品牌名重复

**问题**：部分页面在数据里自带品牌名，再经过 layout 的 `%s | 品牌名` 模板，产出 `产品中心 | 伟伟拉链 | 伟伟拉链`（已在浏览器标签实测确认）。

**修复**：全面检查 `src/site-data/product-catalog.ts` 和 `site-content.ts` 里所有 `metadata.title` 字段（5 个语言都要查），**把字段值里的 `| 伟伟拉链` / `| Weiwei Zipper` 后缀删掉**，只留页面名，品牌名交给 layout 模板统一追加。

```bash
grep -n "| 伟伟拉链'\|| Weiwei Zipper'" src/site-data/*.ts
```

## 三、标题与描述改写（本任务核心）

### 原则
- 每页一个主关键词，放 title 前半段；品牌名由模板追加在尾部
- **英文是主战场，优先打磨 en**；zh 服务国内客户保持自然；es/ru/ar 翻译 en 版本
- title ≤ 60 字符（en），description 140–160 字符、含一个差异点 + 行动暗示
- 不堆砌：`Metal Zippers Wholesale — #3/#5/#8, Custom Colors` ✅；`metal zipper manufacturer supplier factory wholesale` ❌

### 分类页 title 公式（en）
`{材质} {品类} Wholesale — #3/#5/#8, {差异点}`

| 页面 | 现状（en） | 改为（en） |
|---|---|---|
| /products/metal-zippers | Metal Zippers | Metal Zippers Wholesale — #3/#5/#8, 5 Teeth Finishes |
| /products/resin-zippers | Resin Zippers | Resin (Plastic) Zippers Wholesale — Lightweight, Custom Colors |
| /products/nylon-zippers | Nylon Zippers | Nylon Coil Zippers Wholesale — #3/#5/#8 for Apparel & Bags |
| /products/metal-zipper-rolls | Metal Zipper Rolls | Metal Zipper Rolls (Long Chain) — Continuous Zipper by the Meter |
| /products/resin-zipper-rolls | Resin Zipper Rolls | Resin Zipper Rolls — Continuous Plastic Zipper Chain in Bulk |
| /products/nylon-zipper-rolls | Nylon Zipper Rolls | Nylon Zipper Rolls — Coil Zipper by the Yard / Meter |

> 说明：码装类特意写入 "long chain / continuous zipper / by the yard / by the meter"，这些是海外真实搜索词而竞争极低。resin 加注 "(Plastic)"，因为海外买家更常搜 plastic/vislon zipper。

### 产品详情页 title 公式（en）
`{结构} {材质} Zipper — {规格/齿色卖点}`，例如：
- Metal Open-End Zippers — Silver, Gold, Antique Brass Teeth
- Metal Closed-End Zippers — Durable #5 for Bags & Workwear
- Nylon Open-End Zippers — Smooth Coil for Jackets & Hoodies

具体每条产品在 `product-catalog.ts` 各语言对象的 `metadata` 字段里改。改完 zh 和 en 后，es/ru/ar 参照 en 语义翻译（禁止直接机器翻译腔）。

### description 模板（en 示例，各页替换括号内容）
`{Product} from a Yiwu zipper factory since 1992. {差异点：finishes/colors/sizes}. Low MOQ, fast sampling, worldwide shipping. Request a quote today.`

### 核心页面
- 首页（en）title 建议：`Weiwei Zipper — Metal, Nylon & Resin Zipper Factory in Yiwu, China`（首页不吃模板后缀的话注意别重复品牌）
- `/yiwu-zipper-supplier`、`/quote`、`/faq`、`/industries` 同步检查 title 是否含目标词且无品牌重复

## 四、结构化数据补强

1. **Product schema 加图片**：`products/[slug]/page.tsx` 的 Product JSON-LD 目前核对 `image` 字段——若缺失或只有一张，改为数组，注入该产品 gallery 的全部实拍图绝对 URL（用 `SITE_URL` 拼接）。图片丰富度影响富结果外观
2. **Article schema**：`blog/[slug]/page.tsx` 检查是否有 Article/BlogPosting JSON-LD；没有就加：headline、datePublished（frontmatter date）、author（Person，name 用 frontmatter author）、image、publisher 引用 Organization
3. **不要在产品页重复放 FAQPage**——产品页 FAQ 的 schema 由 `05-产品页SEO与FAQ.md` 任务统一处理，本任务不碰
4. 全部改完后用 Google Rich Results Test（https://search.google.com/test/rich-results）验证首页、一个分类页、一个产品页、一篇博客

## 五、Open Graph / 社交分享图

1. 检查 `[locale]/layout.tsx` metadata 是否配置 `openGraph.images`；分享到 WhatsApp/LinkedIn/Facebook 时的预览图对 B2B 转发很重要（客户之间会转链接）
2. 规格：1200×630 JPG/PNG ≤ 300KB。默认全站一张（品牌名 + 一条金齿拉链实拍横图），可用现有实拍裁剪合成，存 `public/og/og-default.jpg`
3. 分类页/产品页的 `generateMetadata` 里把 `openGraph.images` 指到该页主图（已有实拍，直接引用）
4. 验证：`curl -s http://localhost:3000/products/metal-zippers | grep 'og:image'`

## 六、交给用户的注册清单（整理输出，不是代码）

把下面清单整理成给用户的操作指引（他的邮箱 weiweizipper@gmail.com）：

1. **Google Search Console**（最重要）
   - https://search.google.com/search-console → 添加资源 → 域名资源 `weiweizipper.com`（需在域名 DNS 加 TXT 记录，域名在哪买的就去哪加）
   - 验证后：站点地图 → 提交 `https://www.weiweizipper.com/sitemap.xml`
   - 之后每周看「效果」报告：查询词 / 曝光 / 点击
2. **Bing Webmaster Tools**：https://www.bing.com/webmasters → 支持从 GSC 一键导入，2 分钟搞定。北美 B2B 用 Bing 的不少
3. **Yandex Webmaster**：https://webmaster.yandex.com → 站点有俄语版，俄语区一半流量在 Yandex；同样提交 sitemap
4. **Google Business Profile**：见 `07-站外SEO与分发.md`
5. **GA4**（如未装）：Vercel 项目已有 Speed Insights；GA4 用于看转化事件（quote 表单提交、WhatsApp 点击）

## 七、验收标准

1. 全站无 `xx | 品牌 | 品牌` 重复标题：build 后 `curl -s localhost:3000/zh/products | grep -o '<title>[^<]*'` 抽查 6+ 页面
2. 6 个分类页 + 全部产品页的 en title 按公式更新，5 语言 metadata 无缺项，`npm run build` 通过
3. `og:image` 在首页和分类页可见
4. Rich Results Test 对抽查页面报告无错误
5. 用户注册清单以 markdown 输出（可以存 `docs/growth-plan/搜索引擎注册操作指引.md`）
6. commit + push，不加 AI co-author；收尾确认 3000 服务在运行

## 八、红线提醒

- title/description 是给人看的文案，写完自己读一遍是否像正常英文
- 不改 URL 结构、不动 slug
- sitemap/robots/hreflang 已经是好的，没有明确 bug 不要重构
