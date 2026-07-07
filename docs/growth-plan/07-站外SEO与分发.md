# 07 · 站外 SEO 与免费分发渠道

> 前置阅读：`00-总览与执行顺序.md`。
> 类型：**主要是用户操作清单**。执行 agent 的职责是把本文档细化成可勾选的步骤指引、准备好所需文案素材（各平台简介、视频描述模板等），注册和发布动作由用户完成。
> 原则：全部免费白帽。**绝不购买外链**。

## 一、搜索引擎入口注册（第 1 周做完）

| 平台 | 地址 | 要点 |
|---|---|---|
| Google Search Console | search.google.com/search-console | 域名资源验证（DNS TXT）→ 提交 sitemap.xml → 每周看效果报告 |
| Bing Webmaster | bing.com/webmasters | 支持从 GSC 一键导入，2 分钟；北美 B2B 有真实份额 |
| Yandex Webmaster | webmaster.yandex.com | 站点有俄语版，俄语区约一半搜索在 Yandex；提交 sitemap |

Agent 准备物：给用户的图文步骤指引（存 `docs/growth-plan/搜索引擎注册操作指引.md`，若 02 任务已生成则复用补充）。

## 二、Google Business Profile（免费，见效最快的一项）

- 地址：business.google.com → 创建商家 → 类别选 Zipper supplier / Manufacturer
- 填写要点：名称/地址/电话与站内完全一致（见 06 文档 NAP 一节）；营业时间周一至周六 08:30-18:00；官网链接；上传 10+ 张实拍（产品 + 门店门头 + 车间）
- 验证方式通常是明信片/视频验证，义乌地址可收
- 上线后效果：`zipper supplier yiwu`、`zipper factory near me`（采购商访义乌时）的地图结果里出现
- 维护：每月发 1 条动态（新品照片即可）；有客户合作愉快时请对方留 Google 评价——**B2B 目录里 3 条真实好评就能超过大多数同行**

## 三、YouTube 频道（工厂的第二搜索引擎）

现有账号入口已挂在 About 页。价值：`zipper factory`、`how zippers are made` 类搜索有稳定流量；视频还会插入 Google 搜索结果；B2B 客户看到真实厂房的信任度是图文的十倍。

### 12 条视频选题（每条 1-3 分钟，手机拍摄即可，不需要剪辑技巧）
1. Inside a Yiwu zipper factory — full tour（门店+仓库+设备一镜到底）
2. How continuous zipper rolls are made / packaged
3. Cutting zipper rolls to custom lengths（码装裁切过程）
4. Metal zipper teeth finishes side by side（齿色实物对比，转动看反光）
5. #3 vs #5 vs #8 zippers size comparison（实物上手对比）
6. Open-end vs closed-end zipper — 30 second explainer
7. Zipper quality check before shipping（质检过程）
8. Packing an export order（打包、贴唛、装箱）
9. How we match tape color to a customer's fabric sample（对色过程）
10. Sample room tour — 1000+ zipper samples（样品墙）
11. A day at Yiwu International Trade City District 3
12. How to send us an inquiry that gets a same-day quote（对着镜头讲询盘要素）

### 每条视频的描述模板（agent 准备好文案）
```
{一句话说明视频内容}
We are Weiwei Zipper, a zipper factory in Yiwu, China since 1992. Metal, nylon and resin zippers in #3/#5/#8.
🔗 Website: https://www.weiweizipper.com
📄 Related guide: {对应博客文章 URL}
📧 weiweizipper@gmail.com | WhatsApp: {确认后的号码}
```
标题带关键词（如 "Metal Zipper Teeth Finishes Compared: Gold vs Antique Brass vs Gunmetal"）；封面用实拍大字幕。视频发布后嵌入对应博客文章（YouTube iframe，注意 next.js 里用 lite-youtube 或懒加载以免拖累性能——嵌入部分可交给代码 agent）。

## 四、B2B 目录与平台（NAP 一致性前提：06 文档完成）

**值得做（免费档）**：
- Kompass、Europages（欧洲采购常用）
- Made-in-China / Alibaba 如已有店铺：确保公司名、地址、官网链接与官网一致，店铺简介里放官网链接
- ExportHub、TradeIndia 等免费收录可顺手提交，不花钱升级

**注意**：目录的价值是 NAP 引用一致性和少量引流，不是"外链权重"，不要为目录付费买"高级会员链接"。

## 五、社区参与（长期，每周 30 分钟）

- **Reddit**：r/sewing、r/myog（make your own gear，重度拉链消费群）、r/streetwearstartup、r/Entrepreneur 的产品制造话题
- **Quora**：搜 "zipper" 相关问题（size、YKK alternative、where to buy bulk）
- **规则（必须遵守，违反会被封号并伤品牌）**：
  1. 只在别人提问时回答，回答本身要有干货，**90% 的回答不带任何链接**
  2. 偶尔在确实相关时链自家博客文章（不是产品页）
  3. 资料页写明身份："I run a zipper factory in Yiwu" —— 透明身份反而加分
  4. 不发广告贴、不私信推销
- Pinterest（可选）：把齿色对比、尺码表这类"信息图"钉上去，图片流量对视觉品类有效；每张 pin 链回对应博客

## 六、可链接资产（Link-worthy Assets）

别人主动引用你的前提是你有值得引用的东西。规划两个：
1. **拉链尺码对照表**（04 文档文章二）做成页面内可下载的 PDF 版 —— 缝纫博主、教程作者会引用
2. **拉链部件术语图解**（03 文档 A3）—— 同理，是教程作者的刚需配图（图上带轻量水印 weiweizipper.com）

Agent 职责：文章上线后生成对应 PDF/图解素材。

## 七、明确不做的清单

1. ❌ 购买外链、Fiverr 链接包、PBN、"高 DA 目录"付费收录
2. ❌ 论坛/博客评论区批量留链接（垃圾外链）
3. ❌ 互链农场、友情链接页交换
4. ❌ 为发外链写的低质客座文章
5. ❌ 社媒买粉——B2B 客户会看真实互动
6. ❌ 在 Reddit/Quora 开小号自问自答

## 八、验收标准（agent 部分）

1. 各平台注册指引文档 + 简介文案（en）+ 12 条视频的标题/描述文案准备完毕，交付用户
2. NAP 标准信息卡（公司名/地址/电话/邮箱/官网的唯一标准写法，en+zh）随文档交付
3. 视频嵌入博客的代码方案就绪（懒加载）
4. 用户操作项整理成带复选框的 checklist markdown
