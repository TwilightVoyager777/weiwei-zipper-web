# 05 · 产品页 SEO 与 FAQ 区块

> 前置阅读：`00-总览与执行顺序.md`（尤其「内容数据的架构约定」）。建议在 `02-技术SEO与元信息.md` 完成后执行。
> 类型：纯代码任务。⚠ 本任务与 `08-UI视觉升级.md` 都会修改 `src/app/[locale]/products/[slug]/page.tsx`，两者不要并行。

## 一、任务目标

1. 给每个产品详情页和分类页增加 FAQ 区块（页面内容 + FAQPage 结构化数据），承接采购员下单前的长尾疑问搜索
2. 增强产品页之间的内链（相关产品推荐）

FAQ 的 SEO 价值：每个问题本身是长尾搜索词；FAQPage schema 有机会在搜索结果展开富摘要；同时减少重复询盘沟通成本。

## 二、数据模型改动

`src/site-data/product-catalog.ts`：

```ts
export interface FaqItem {
  question: string;
  answer: string;
}

// ProductItemContent 增加可选字段
faq?: FaqItem[];

// ProductCategoryContent 增加可选字段
faq?: FaqItem[];
```

按既有模式：zh 内容写在 `productItems`/`categoryContent`，en 写在 `*En`；es/ar/ru 三个对象因为用 `...spread En` 的写法，**FAQ 会自动回退英文——第一版可接受**，后续再补翻译。字段设为可选（`?`）保证旧模板产品不加 FAQ 也能编译通过。

## 三、FAQ 内容（直接可用的初稿，落库前给用户过目数字类事实）

写作原则：答案 2-3 句、直接、含具体信息；问题用买家的原话口吻；zh/en 语义一致而非逐字直译。

### 六个分类页通用底稿（每类 4-5 问，按材质微调）

**金属拉链分类页（zh / en 对照）**
1. 金属拉链的起订量是多少？/ What is the MOQ for metal zippers?
   → 常规规格起订量灵活，样品单和小批量都可谈；具体以颜色和齿色确认为准。`TODO(用户确认): 真实 MOQ`
2. 可以定制织带颜色吗？/ Can the tape color be customized?
   → 支持按色卡/样衣对色，常用色现货，定染需要达到起染量。`TODO(用户确认): 起染量`
3. 有哪些齿色可选？/ Which teeth finishes are available?
   → 银齿、金齿、古铜齿、青古铜齿等，可参考页面实拍；不同齿色可搭配不同织带。
4. 打样需要多久？/ How long does sampling take?
   → `TODO(用户确认): 常规打样时长`；确认样品后进入批量排产。
5. 长度可以按需求定做吗？/ Can lengths be customized?
   → 可以，按订单裁切；开口/闭口结构都支持指定长度。

**树脂拉链分类页**：MOQ / 颜色定制（树脂齿本体可染色是卖点，问题改为 "Can the teeth color match our fabric?"）/ 适合童装的安全性（轻量、无金属锐边）/ 打样时长 / 与尼龙怎么选（一句话 + 链博客 B2 文章）

**尼龙拉链分类页**：MOQ / 反光织带等特殊织带（数据里已提到可选反光织带）/ 开口闭口都有吗 / 码装是否供应（链尼龙码装页）/ 打样时长

**三个码装分类页**：常规卷长？/ 拉头是否按只另配？/ 可以按指定长度裁切吗？/ 码装 MOQ？/ 出口包装方式？（与 04 文档文章三的 FAQ 保持一致口径，均 `TODO(用户确认)`）

### 产品详情页（每个产品 3-4 问）
从所属分类的 FAQ 里挑不重复的 + 产品特有问题：
- 金属开口拉链：外套门襟常用什么规格？双开尾是否支持？
- 金属闭口拉链：箱包口袋位建议什么齿色？
- 树脂开口/闭口、尼龙开口/闭口：同理按用途写 2 个特有问题
- 旧模板产品（metal-zipper-3 等）**不加**，它们将来会删

## 四、页面渲染改动

`src/app/[locale]/products/[slug]/page.tsx`：

1. **UI**：在产品详情页「适用场景」之后 / 分类页「其他品类」之前插入 FAQ 节：
   - 标题用 `productDetailLabels` 模式新增 `faqTitle` 标签（5 语言：常见问题 / FAQ / Preguntas frecuentes / الأسئلة الشائعة / Частые вопросы）
   - 展示形式：`<details>/<summary>` 原生折叠（无需 client 组件、SEO 友好、零 JS），summary 加图标旋转样式即可，风格对齐现有卡片（border-gray-200 rounded-lg）
2. **结构化数据**：页面已有 JSON-LD 脚本，追加一个 FAQPage 对象：
   ```ts
   {
     '@context': 'https://schema.org',
     '@type': 'FAQPage',
     mainEntity: faq.map((f) => ({
       '@type': 'Question',
       name: f.question,
       acceptedAnswer: { '@type': 'Answer', text: f.answer },
     })),
   }
   ```
   仅当该产品/分类有 faq 数据时输出。**注意**：一个页面只放一个 FAQPage 块；`/faq` 页已有 FAQPage 不受影响（不同页面互不冲突）
3. `faq` 为空的页面完全不渲染该节（旧模板产品自然跳过）

## 五、相关产品内链

产品详情页现有「返回产品中心」，补一个「相关产品」小节：
- 数据来源：同分类的其他产品（`CATEGORY_PRODUCTS` 反查）+ 对应码装分类页
- 形式：3 张小卡（图 + 名称），复用产品中心卡片样式缩小版
- 例：金属开口拉链页 → 金属闭口拉链、金属码装、（可选）齿色指南博客文章

## 六、验收标准

1. `npm run build` 通过（类型完整性 = 5 语言无缺漏）
2. 抽查 `/zh/products/metal-zippers`、`/products/metal-zippers`（en）、`/zh/products/metal-no-5-open-end-zipper`：FAQ 区块渲染正常、折叠可用、RTL（`/ar/...`）不破版
3. `curl -s localhost:3000/products/metal-zippers | grep -o 'FAQPage'` 命中
4. Google Rich Results Test 对一个分类页验证 FAQPage 无错误
5. 所有 `TODO(用户确认)` 汇总成清单随交付说明给用户；未确认的数字不上线（该问题先不放入数组）
6. commit + push（不加 AI co-author）；收尾确认 3000 服务在运行

## 七、红线提醒

- MOQ/交期/起染量等数字**绝不编造**，宁可少一个问题
- 不改动现有 gallery/海报布局（那是 08 任务的范围）
- FAQ 答案不堆关键词，像客服回复一样自然
