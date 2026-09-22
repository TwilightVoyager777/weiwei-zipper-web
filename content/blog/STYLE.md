# 资讯写作规则

设计：`docs/superpowers/specs/2026-09-21-weekly-blog-design.md`。本文件是写每一批文章时的操作手册，校准批的反馈会追加到文末。

## 排期

- 一篇文章 = 5 个同名文件：`content/blog/{en,zh,es,ru,ar}/<slug>.md`。
- `date` 是上线的那个周一，带引号：`date: "2026-09-28"`，5 个语言一致。站点按美西时间（洛杉矶）只显示到期文章；每周一美西时间 08:30 GitHub Actions 触发重建，夏令时自动跟随。
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
| slider | 拉头 | cursor | бегунок | المنزلق |
| top and bottom stops | 上下止 | topes superiores e inferiores | верхние и нижние стопоры | نقاط توقف علوية وسفلية |
| insertion pin (open-end) | 插管（也叫插销） | pieza de inserción | вставной элемент | جزء الإدخال |
| closed-end / open-end / two-way | 闭口 / 开口 / 双开 | cerrada / abierta / doble cursor | неразъемная / разъемная / двухзамковая | مغلق / مفتوح / مزدوج |
| downstream processing | 后道加工 | procesamiento posterior | последующая обработка | المعالجة اللاحقة |
| sampling / bulk | 打样 / 大货 | muestra / producción en volumen | образец / серийное производство | العينة / الإنتاج بالجملة |
| teeth (elements) | 链牙 | dientes | зубья（别名 звенья） | الأسنان |
| tape | 布带 | cinta | тесьма | الشريط |
| chain | 链条 | cadena | цепочка | السلسلة |
| puller / pull tab | 拉片 | tirador | пуллер（别名 язычок） | لسان السحب |
| box / retainer box (open-end) | 插座（也叫方块） | caja（caja retenedora） | гнездо（别名 коробочка） | صندوق التثبيت |
| coil (nylon) | 螺旋线 | espiral | спираль | حلزون |
| locking / non-locking slider | 带锁 / 不带锁拉头 | cursor con bloqueo / sin bloqueo | бегунок с фиксатором / без фиксатора | المنزلق ذو القفل / بلا قفل |
| reinforced section (base of a two-way open-end chain) | 底部加固胶片 | refuerzo | усиленный участок | شريط التعزيز |
| closed chain width | 闭合链牙宽度 | ancho de la cadena cerrada | ширина сомкнутой цепочки | عرض السلسلة المغلقة |

- 中文里闭口 / 开口是站长确认的叫法（2026-09-21），不用闭尾 / 开尾。
- 西语双开统一用 doble cursor，俄语闭口统一用 неразъемная——都是站内原本占多数的说法（第一批时统一）。
- 表中第一批新增的术语由翻译时核实，来源网址记在 `pipe/claudecode/log/2026-09-21.md`（部分来源是其他拉链厂的外文站，只作术语参考，不进文章，也不放在这个公开仓库里）。
- 待统一：阿语产品规格表和 FAQ 把 slider 译成了 السحاب（意为「拉链」），两篇旧文章用了 الساحب（意为「拉片」），应改为 المنزلق。

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
