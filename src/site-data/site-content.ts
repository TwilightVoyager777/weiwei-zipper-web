import { getLocalizedContent, type AppLocale } from '@/localization/content';

export const siteBrand = {
  packageName: 'weiwei-zipper-web',
  siteName: '伟伟拉链',
  siteNameEn: 'Weiwei Zipper',
  companyName: '义乌市伟伟拉链有限公司',
  companyNameEn: 'Yiwu Weiwei Zipper Co., Ltd.',
  shortBrand: 'Weiwei Zipper',
  siteUrl: 'https://www.weiweizipper.com',
  email: 'twilightvoyager777@gmail.com',
  phone: '+86 13906892467',
  whatsapp: '+1 6506295275',
  whatsappUrl: 'https://wa.me/16506295275',
  businessHours: '周一至周六 08:30-18:00',
  responseTime: '工作时段内优先回复',
  logoPath: '/brand/weiwei-zipper-logo.png',
  logoAlt: '伟伟拉链商标',
  currentAddress: '浙江省义乌市国际商贸城三区59门三楼2街27449',
  historicalAddressNote: '',
  wechatQrPath: '/brand/wechat-qr-code.png',
  wechatId: 'x13906892467',
  foundedYear: '1992',
} as const;

export const navigationContent = {
  main: [
    { href: '/' as const, label: '首页' },
    { href: '/products' as const, label: '产品中心' },
    { href: '/industries' as const, label: '应用场景' },
    { href: '/services' as const, label: '解决方案' },
    { href: '/about' as const, label: '关于我们' },
    { href: '/blog' as const, label: '资讯' },
    { href: '/contact' as const, label: '联系我们' },
  ],
  primaryCta: '获取报价',
} as const;

export const homeContent = {
  metadata: {
    title: '伟伟拉链 | 3/5/8 号金属、树脂、尼龙拉链工厂',
    description: '伟伟拉链专注金属拉链、树脂拉链、尼龙拉链现货与定制，覆盖 3 号 / 5 号 / 8 号规格，适用于服装、箱包、鞋帽及防晒衣项目打样与量产。',
  },
  hero: {
    badges: ['工厂直供', '支持打样', '支持来样定制'],
    title: '伟伟拉链',
    subtitle: '伟伟拉链长期面向服装、箱包、鞋帽客户提供金属拉链、树脂拉链、尼龙拉链配套服务，覆盖 3 号 / 5 号 / 8 号常用规格，可配合打样确认、批量采购与后续返单需求。',
    visualPath: '/hero/profile.png',
    visualAlt: '半开状态金属拉链透明背景主视觉图',
    primaryCta: '查看产品',
    secondaryCta: '获取报价',
    stats: [
      { label: '常备规格', value: '3 / 5 / 8 号' },
      { label: '主推品类', value: '金属 / 树脂 / 尼龙' },
      { label: '适用行业', value: '服装 / 箱包 / 鞋帽' },
    ],
  },
  trust: {
    title: '为什么客户选择伟伟拉链',
    items: [
      {
        title: '常用规格稳定供应',
        description: '围绕 3 号、5 号、8 号高频规格建立标准化配套方案，便于客户在开发、批量采购与后续补单中保持供应连续性。',
        points: ['常规码装与成品拉链均可配套', '闭尾、开尾、双开结构可按需确认', '颜色与拉头可结合款式统一匹配', '减少重复沟通带来的确认成本'],
      },
      {
        title: '打样确认流程高效',
        description: '可结合色卡、样卡、样衣或旧样进行样品确认，先完成关键细节验证，再进入批量排产流程。',
        points: ['支持寄样核色与基础测试确认', '支持来样复刻常用结构', '可配合开发季小批量打样', '缩短从选型到出样的沟通路径'],
      },
      {
        title: '交付节奏可控',
        description: '常规款可优先协调备料与排单，规格确认后可更快进入生产节奏，适合快反项目与持续返单需求。',
        points: ['常规颜色与规格更便于快速安排', '返单项目可复用既有确认记录', '急单可根据排产情况优先协调', '关键节点可同步反馈进度'],
      },
      {
        title: '多渠道业务响应',
        description: '支持电话、微信与 WhatsApp 多渠道协同沟通，便于及时确认规格、颜色、样品安排与交期信息。',
        points: ['同一号码同步管理沟通记录', '工作时段内优先回复需求', '支持图片与视频快速确认细节', '适合跨地区项目持续跟进'],
      },
    ],
  },
  featuredProducts: {
    title: '产品分类',
    subtitle: '围绕常见采购需求整理金属、树脂、尼龙三大常用品类，便于先确认材质方向，再进一步沟通规格、结构、颜色与交付要求。',
  },
  useCasesPreview: {
    title: '常用场景',
    subtitle: '围绕服装、箱包、鞋帽等常见成品场景整理常用配套方向，便于结合实际用途进一步确认拉链类型、规格与结构。',
  },
  bottomCta: {
    title: '已有样品或采购需求？',
    description: '欢迎提供规格、长度、颜色、需求数量及使用场景，我们将尽快协助确认方案并进入报价沟通。',
    primaryCta: '获取报价',
    secondaryCta: '查看产品',
  },
} as const;

export const useCasesContent = {
  metadata: {
    title: '应用场景 | 伟伟拉链',
    description: '伟伟拉链围绕服装、箱包、鞋帽等常见成品场景，提供更稳定的金属、树脂、尼龙拉链配套方案与规格建议。',
  },
  title: '应用场景',
  subtitle: '从实际成品用途出发判断拉链配套方向，更便于后续确认材质、规格、结构与交付要求。',
  introText: '伟伟拉链目前主要围绕服装、箱包、鞋帽三类常见成品场景提供配套服务。不同应用对于顺滑度、耐用度、颜色一致性、操作手感及批量稳定性的要求并不相同，因此我们通常建议先按实际用途明确方向，再进一步确认金属、树脂或尼龙方案，以及对应的规格、结构和长度安排，这样更有利于后续打样、报价与批量采购推进。',
  keyLabel: '配套重点：',
  items: [
    {
      slug: 'apparel',
      name: '服装',
      imagePath: '/products/cloth.png',
      imageAlt: '服装拉链应用场景',
      imagePosition: 'center 10%',
      description: '适用于夹克、卫衣、裤装、童装、防晒衣等常见成衣项目，通常更关注顺滑度、轻量手感、颜色匹配以及反复拉合后的稳定性。',
      focus: '常用规格以 3 号 / 5 号为主，树脂与尼龙方案使用更广，可结合门襟、口袋及局部结构进一步确认开尾、闭尾或双开方式。',
    },
    {
      slug: 'bags',
      name: '箱包',
      imagePath: '/products/bag.png',
      imageAlt: '箱包拉链应用场景',
      imagePosition: 'center center',
      description: '适用于书包、旅行包、收纳包、工具包等常见箱包项目，通常更强调耐用度、咬合稳定性以及批量配套的一致性。',
      focus: '常用规格以 5 号 / 8 号为主，尼龙与金属方案更常见，可围绕主仓、侧袋、口袋位等不同结构搭配相应拉头方式。',
    },
    {
      slug: 'footwear',
      name: '鞋帽',
      imagePath: '/products/boost.jpg',
      imageAlt: '鞋帽拉链应用场景',
      imagePosition: 'center center',
      description: '适用于靴类、功能鞋及帽包配件等项目，通常更关注耐磨表现、操作便利性以及成品装配过程中的配套效率。',
      focus: '常用规格以 3 号 / 5 号为主，金属与树脂方案更常见，适合用于局部装饰、功能开合及小部件配套。',
    },
  ],
  whyChoose: {
    title: '为什么选择伟伟拉链',
    items: [
      {
        title: '行业经验',
        description: '34年经验沉淀使我们长期围绕服装、箱包、鞋帽等常见成品场景开展配套服务，更熟悉不同项目对材质、规格与结构的实际需求。',
      },
      {
        title: '快速报价',
        description: '围绕 3 号 / 5 号 / 8 号等高频规格建立常用方案，更便于在需求明确后尽快进入选型、打样与报价沟通。',
      },
      {
        title: '全球供应',
        description: '在稳定品质、技术精度与交付节奏的基础上，持续服务面向海外市场的项目需求，更便于衔接长期合作与批量供货安排。',
      },
    ],
  },
  ctaTitle: '已有样品或采购需求？',
  ctaDescription: '欢迎提供规格、长度、颜色、需求数量及使用场景，我们将尽快协助确认方案并进入报价沟通。',
  ctaPrimary: '获取报价',
  ctaSecondary: '查看产品',
} as const;

export const aboutContent = {
  metadata: {
    title: '关于我们 | 伟伟拉链',
    description: '了解伟伟拉链自 1992 年以来在义乌国际商贸城围绕金属、树脂、尼龙拉链建立的配套经验，以及服务服装、箱包、鞋帽客户的合作方式。',
  },
  title: '关于我们',
  subtitle: '伟伟拉链成立于 1992 年，长期围绕金属、树脂、尼龙拉链开展配套服务，重点配合服装、箱包、鞋帽等客户在开发、打样、采购与返单中的常见需求。',
  story: {
    title: '关于伟伟拉链',
    paragraphs: [
      '伟伟拉链成立于 1992 年，经营地址位于浙江省义乌市国际商贸城三区59门三楼2街27449。多年来我们一直围绕金属拉链、树脂拉链、尼龙拉链三大常用品类开展配套服务，面向服装、箱包、鞋帽等客户持续积累更贴近实际采购需求的合作经验。',
      '在日常合作中，我们更重视客户在开发和采购过程中真正需要优先确认的内容，例如材质方向、规格大小、结构方式、长度安排、颜色匹配以及拉头搭配。围绕这些高频需求，我们长期把 3 号、5 号、8 号等常用规格作为配套重点，不断整理更稳定、更便于复用的常用方案。',
      '我们对产品质量、技术精度和可靠交付始终保持稳定要求，也正因为这种长期坚持，伟伟拉链逐步与东南亚、中东、欧洲及美洲等市场的客户建立起持续合作关系。对我们来说，稳定的品质表现、清晰的沟通效率和可持续的交付能力，往往比一次性的成交更重要。',
      '无论是常规补单、新款开发，还是先拿旧样、参考图做初步沟通，我们都希望让客户在更短时间内完成方向确认、打样推进与后续采购衔接，使合作过程更顺畅，也更适合长期复用。'
    ],
  },
  capabilities: {
    title: '工厂实力',
    items: [
      { value: siteBrand.foundedYear, label: '成立于' },
      { value: '30+年', label: '行业沉淀' },
      { value: '金属 / 树脂 / 尼龙', label: '主推品类' },
      { value: '3 / 5 / 8 号', label: '高频规格' },
      { value: '50+国家和地区', label: '出口市场' },
      { value: '稳定交付', label: '合作能力' },
    ],
  },
  mission: {
    title: '合作方式',
    items: [
      {
        title: '需求确认',
        description: '围绕用途、材质、规格、结构、长度、颜色及拉头搭配等基础信息完成前期确认，为后续打样与报价建立统一依据。',
      },
      {
        title: '样品确认',
        description: '在样品阶段同步核对结构细节、手感表现与配色要求，便于更顺畅衔接批量采购安排。',
      },
      {
        title: '批量交付',
        description: '在常用规格与确认记录沉淀后，后续补单、排产与持续合作能够保持更高的沟通效率与交付稳定性。',
      },
    ],
  },
} as const;

export const contactContent = {
  metadata: {
    title: '联系我们 | 伟伟拉链',
    description: '通过电话、微信、WhatsApp 或邮箱联系伟伟拉链，并查看公司地址与地图定位信息。',
  },
  title: '联系我们',
  subtitle: '欢迎通过电话、微信、WhatsApp 或邮箱与我们联系；如已有明确需求，也欢迎前往获取报价页面提交询盘信息。',
  cardTitle: '联系信息',
  responseNote: '工作时段内支持微信、电话、WhatsApp 与邮箱同步沟通，便于快速确认来访、联系或基础需求信息。',
  addressTitle: '到访信息',
  addressDescription: '如需线下到访或地图定位，可直接参考以下地址与地图位置。',
  mapTitle: '地图定位',
  mapOpenLabel: '打开地图导航',
  quoteButton: '前往获取报价',
  whatsappButton: 'WhatsApp 联系',
  wechatLabel: '微信沟通',
  wechatScan: '扫码添加微信',
} as const;

export const quoteContent = {
  metadata: {
    title: '获取报价 | 伟伟拉链',
    description: '通过表单、微信、电话或 WhatsApp 向伟伟拉链提交需求，获取金属、树脂、尼龙拉链的配套建议与报价。',
  },
  title: '获取报价',
  subtitle: '如需更快进入有效报价流程，请尽量一并提供用途、规格、长度、颜色和需求数量。',
  cardTitle: '联系信息',
  responseNote: '支持微信、电话、WhatsApp 同步沟通，便于快速确认颜色、规格、样品安排与交期信息。',
  wechatLabel: '微信沟通',
  wechatScan: '扫码添加微信',
} as const;

export const footerContent = {
  description: '伟伟拉链专注金属、树脂、尼龙三大类拉链供应与定制，围绕 3 号 / 5 号 / 8 号常用规格，便于更高效进入打样确认、报价沟通与批量采购流程。',
  quickLinksTitle: '快速入口',
  contactInfoTitle: '联系信息',
  privacy: '隐私政策',
  terms: '服务条款',
} as const;

export const faqSectionIntro = {
  title: '常见问题',
  subtitle: '提前说明高频问题，有助于减少反复确认，让沟通与报价推进更顺畅。',
} as const;

export const blogContent = {
  metadata: {
    title: '资讯 | 伟伟拉链',
    description: '伟伟拉链围绕 3 号 / 5 号 / 8 号规格选择、闭口与开口结构、询盘准备及采购沟通整理的实用文章。',
  },
  title: '资讯',
  subtitle: '围绕规格选择、结构判断、询盘准备和采购沟通，整理更适合拉链项目推进的实用内容。',
  allArticles: '全部文章',
  readTimeLabel: '分钟阅读',
  readMoreLabel: '继续阅读',
  backToBlog: '返回资讯',
  authorLabel: '作者',
  categories: {
    guide: '选型指南',
    sourcing: '采购建议',
    general: '行业信息',
  },
  faq: {
    title: '常见问题',
    description: '若当前正处于规格、结构形式、打样安排的确认阶段，可先查看常见问题，便于提前了解。',
    button: '查看常见问题',
  },
  cta: {
    title: '有具体项目需要配套拉链？',
    description: '欢迎提供款式需求，我们将根据现有规格与配套经验，协助你更快进入报价与打样沟通。',
    button: '获取报价',
    secondary: '查看产品',
  },
} as const;

export const inquiryFormContent = {
  title: '提交报价需求',
  success: '报价需求已提交成功，我们会在工作时段尽快与您联系。',
  error: '提交失败，请稍后重试，或直接通过电话 / WhatsApp 联系我们。',
  sectionContact: '联系信息',
  sectionProduct: '产品需求',
  fields: {
    name: '联系人',
    email: '邮箱',
    company: '公司名称',
    country: '国家 / 地区',
    phone: '联系电话',
    productInterest: '意向品类',
    productModel: '款式 / 型号备注',
    productSize: '规格 / 长度',
    application: '使用场景',
    quantity: '需求数量',
    message: '补充说明',
  },
  placeholders: {
    productModel: '例如：树脂闭尾、双开尼龙、金属装饰拉链',
    productSize: '例如：5 号，60cm，开尾',
    quantity: '例如：3000 条，或先打样 3 款',
    message: '颜色、长度、拉头款式、包装方式、交期要求等都可以写在这里。',
  },
  selectProduct: '请选择品类',
  productOptions: [
    { value: 'resin-zipper', label: '树脂拉链' },
    { value: 'nylon-zipper', label: '尼龙拉链' },
    { value: 'metal-zipper', label: '金属拉链' },
    { value: 'custom-zipper', label: '来样定制' },
  ],
  privacyNote: '提交后，我们仅将相关信息用于报价、打样沟通及后续业务跟进，不会用于与本次需求无关的用途。',
  submit: '获取报价',
  submitting: '提交中...',
} as const;

const siteBrandEn = {
  ...siteBrand,
  siteName: 'Weiwei Zipper',
  companyName: 'Yiwu Weiwei Zipper Co., Ltd.',
  businessHours: 'Monday to Saturday 08:30-18:00',
  responseTime: 'Priority reply during working hours',
  logoAlt: 'Weiwei Zipper logo',
  currentAddress: 'No. 27449, 2nd Street, 3rd Floor, Gate 59, District 3, Yiwu International Trade City, Yiwu, Zhejiang, China',
} as const;

const navigationContentEn = {
  main: [
    { href: '/' as const, label: 'Home' },
    { href: '/products' as const, label: 'Products' },
    { href: '/industries' as const, label: 'Applications' },
    { href: '/services' as const, label: 'Solutions' },
    { href: '/about' as const, label: 'About' },
    { href: '/blog' as const, label: 'Insights' },
    { href: '/contact' as const, label: 'Contact' },
  ],
  primaryCta: 'Get Quote',
} as const;

const homeContentEn = {
  metadata: {
    title: 'Weiwei Zipper | Factory for Metal, Resin, and Nylon Zippers in Sizes 3 / 5 / 8',
    description: 'Weiwei Zipper supplies and customizes metal, resin, and nylon zippers in common size 3, 5, and 8 specifications for garments, bags, footwear, and sun-protective outerwear.',
  },
  hero: {
    badges: ['Factory Direct Supply', 'Sampling Support', 'Custom Development'],
    title: 'Weiwei Zipper',
    subtitle: 'Weiwei Zipper supplies metal, resin, and nylon zippers for garment, bag, and footwear projects, with common size 3, 5, and 8 options suited to sampling, bulk purchasing, and repeat orders.',
    visualPath: '/hero/profile.png',
    visualAlt: 'Main visual of a partially open metal zipper',
    primaryCta: 'View Products',
    secondaryCta: 'Get Quote',
    stats: [
      { label: 'Common Sizes', value: '3 / 5 / 8' },
      { label: 'Core Types', value: 'Metal / Resin / Nylon' },
      { label: 'Applications', value: 'Garments / Bags / Footwear' },
    ],
  },
  trust: {
    title: 'Why Buyers Work with Weiwei Zipper',
    items: [
      {
        title: 'Reliable Supply of Standard Sizes',
        description: 'We organize supply around the most commonly used size 3, 5, and 8 range, making development, bulk purchasing, and repeat orders easier to coordinate.',
        points: ['Supports both finished zippers and zipper rolls', 'Closed-end, open-end, and two-way structures can be matched as needed', 'Colors and sliders can be aligned with the style direction', 'Helps reduce repeated back-and-forth during confirmation'],
      },
      {
        title: 'Efficient Sample Confirmation',
        description: 'Samples can be reviewed against color cards, reference cards, garments, or old samples so key details are aligned before bulk scheduling.',
        points: ['Supports color checking and basic sample review', 'Can follow old samples for common structures', 'Suitable for small-batch development sampling', 'Shortens the path from selection to sample approval'],
      },
      {
        title: 'More Predictable Delivery',
        description: 'For standard options, materials and production slots can be coordinated earlier once specifications are confirmed, which works well for quick-turn projects and repeat orders.',
        points: ['Common colors and sizes are easier to arrange quickly', 'Repeat orders can reuse prior confirmation records', 'Urgent requests can be coordinated around production availability', 'Key milestones can be shared in a timely way'],
      },
      {
        title: 'Responsive Communication Across Channels',
        description: 'Phone, WeChat, and WhatsApp can be used side by side, making it easier to confirm specifications, colors, samples, and delivery details quickly.',
        points: ['A consistent contact path helps keep records aligned', 'Priority response during working hours', 'Supports image and video communication for detail checks', 'Useful for long-term projects across regions'],
      },
    ],
  },
  featuredProducts: {
    title: 'Product Categories',
    subtitle: 'Our product range is organized around common purchasing needs for metal, resin, and nylon zippers, making it easier to confirm the material direction before discussing size, structure, color, and delivery requirements.',
  },
  useCasesPreview: {
    title: 'Common Applications',
    subtitle: 'We organize common zipper solutions around garments, bags, and footwear so the right type, size, and structure can be narrowed down from the actual end use.',
  },
  bottomCta: {
    title: 'Do You Already Have Samples or Purchasing Requirements?',
    description: 'You are welcome to share size, length, color, quantity, and application details so we can help confirm the right direction and move into quotation more efficiently.',
    primaryCta: 'Get Quote',
    secondaryCta: 'View Products',
  },
} as const;

const useCasesContentEn = {
  metadata: {
    title: 'Applications | Weiwei Zipper',
    description: 'Weiwei Zipper supports garments, bags, and footwear projects with more stable metal, resin, and nylon zipper options and sizing guidance.',
  },
  title: 'Applications',
  subtitle: 'Starting with the end use makes it easier to confirm the right material, size, structure, and delivery requirements.',
  introText: 'Weiwei Zipper currently focuses on garment, bag, and footwear applications. Different end uses place different demands on smooth operation, durability, color consistency, handling feel, and batch-to-batch stability. For that reason, we usually recommend confirming the end use first, then narrowing down the most suitable metal, resin, or nylon direction together with size, structure, and length planning.',
  keyLabel: 'Key consideration:',
  items: [
    {
      slug: 'apparel',
      name: 'Garments',
      imagePath: '/products/cloth.png',
      imageAlt: 'Garment zipper application',
      imagePosition: 'center 10%',
      description: 'Suitable for jackets, hoodies, trousers, kidswear, and sun-protective outerwear, where buyers usually pay close attention to smooth operation, lightweight feel, color matching, and reliable repeated use.',
      focus: 'Common sizes are mainly 3 and 5. Resin and nylon options are widely used and can be further confirmed by front opening, pocket position, and whether the structure should be closed-end, open-end, or two-way.',
    },
    {
      slug: 'bags',
      name: 'Bags',
      imagePath: '/products/bag.png',
      imageAlt: 'Bag zipper application',
      imagePosition: 'center center',
      description: 'Suitable for school bags, travel bags, organizers, and tool bags, where durability, secure tooth engagement, and consistency across batches are often more important.',
      focus: 'Common sizes are mainly 5 and 8. Nylon and metal options are often preferred, with the final choice depending on whether the zipper is used for the main compartment, side pocket, or internal pocket position.',
    },
    {
      slug: 'footwear',
      name: 'Footwear & Accessories',
      imagePath: '/products/boost.jpg',
      imageAlt: 'Footwear zipper application',
      imagePosition: 'center center',
      description: 'Suitable for boots, functional footwear, and accessory parts where abrasion resistance, ease of use, and assembly efficiency are all important.',
      focus: 'Common sizes are mainly 3 and 5. Metal and resin options are often used for decorative positions, functional openings, and smaller accessory sections.',
    },
  ],
  whyChoose: {
    title: 'Why Choose Weiwei Zipper',
    items: [
      {
        title: 'Industry Experience',
        description: 'With 34 years of experience, we have long supported garment, bag, and footwear projects and are more familiar with the practical material, size, and structure needs behind different product types.',
      },
      {
        title: 'Fast Quotation',
        description: 'By organizing common solutions around frequently used size 3, 5, and 8 specifications, we can usually move more quickly into selection, sampling, and quotation once the request is clear.',
      },
      {
        title: 'Global Supply',
        description: 'Built on stable quality, technical consistency, and reliable delivery, we continue to support export-oriented projects and long-term supply programs.',
      },
    ],
  },
  ctaTitle: 'Do You Already Have Samples or Purchasing Requirements?',
  ctaDescription: 'You are welcome to share size, length, color, quantity, and application details so we can help confirm the right direction and move into quotation more efficiently.',
  ctaPrimary: 'Get Quote',
  ctaSecondary: 'View Products',
} as const;

const aboutContentEn = {
  metadata: {
    title: 'About Us | Weiwei Zipper',
    description: 'Learn how Weiwei Zipper has supported metal, resin, and nylon zipper projects since 1992 from Yiwu International Trade City, serving garment, bag, and footwear customers.',
  },
  title: 'About Us',
  subtitle: 'Founded in 1992, Weiwei Zipper has long focused on metal, resin, and nylon zipper supply for garment, bag, and footwear customers across development, sampling, purchasing, and repeat orders.',
  story: {
    title: 'About Weiwei Zipper',
    paragraphs: [
      'Weiwei Zipper was founded in 1992 and operates from Yiwu International Trade City. Over the years, we have stayed focused on three core product lines: metal, resin, and nylon zippers. By serving garment, bag, and footwear customers over the long term, we have built practical experience that stays close to real purchasing, development, and repeat-order needs.',
      'In day-to-day cooperation, we pay close attention to the details customers usually need to confirm early, including material direction, size, structure, length, color matching, and slider selection. Around those frequent requirements, we continue to organize more stable and reusable solutions based on the common size 3, 5, and 8 range.',
      'We have remained consistent in our focus on product quality, technical precision, and reliable delivery. That long-term discipline has helped Weiwei Zipper establish ongoing cooperation with customers serving Southeast Asia, the Middle East, Europe, and the Americas. To us, steady quality, clear communication, and dependable supply matter more than one-time transactions.',
      'Whether the project is a repeat order, a new development, or an early-stage discussion based on an old sample or reference image, our goal is to help customers confirm direction, move sampling forward, and connect into purchasing more smoothly and efficiently.',
    ],
  },
  capabilities: {
    title: 'Factory Strength',
    items: [
      { value: siteBrand.foundedYear, label: 'Founded In' },
      { value: '30+ Years', label: 'Industry Experience' },
      { value: 'Metal / Resin / Nylon', label: 'Core Product Lines' },
      { value: '3 / 5 / 8', label: 'High-Frequency Sizes' },
      { value: '50+ Countries & Regions', label: 'Export Markets' },
      { value: 'Reliable Delivery', label: 'Supply Capability' },
    ],
  },
  mission: {
    title: 'How We Work',
    items: [
      {
        title: 'Requirement Alignment',
        description: 'We begin by aligning application, material direction, size, structure, length, color, and slider details so sampling and quotation can proceed on a clear basis.',
      },
      {
        title: 'Sample Confirmation',
        description: 'During sampling, we check structural details, handling feel, and color requirements so the project can connect more smoothly into bulk purchasing.',
      },
      {
        title: 'Bulk Delivery',
        description: 'Once common specifications and confirmation records are established, replenishment, scheduling, and long-term cooperation can move with higher efficiency and stronger delivery stability.',
      },
    ],
  },
} as const;

const contactContentEn = {
  metadata: {
    title: 'Contact Us | Weiwei Zipper',
    description: 'Contact Weiwei Zipper by phone, WeChat, WhatsApp, or email, and view the company address and map location.',
  },
  title: 'Contact Us',
  subtitle: 'You are welcome to contact us by phone, WeChat, WhatsApp, or email. If your inquiry is already clear, you can also go directly to the quote page and submit it there.',
  cardTitle: 'Contact Information',
  responseNote: 'During working hours, WeChat, phone, WhatsApp, and email can all be used for faster coordination on visits, contact requests, and basic project details.',
  addressTitle: 'Visit Information',
  addressDescription: 'If you need an on-site visit or map reference, you can use the address and location details below.',
  mapTitle: 'Map Location',
  mapOpenLabel: 'Open in Maps',
  quoteButton: 'Go to Quote',
  whatsappButton: 'Contact via WhatsApp',
  wechatLabel: 'WeChat',
  wechatScan: 'Scan to add on WeChat',
} as const;

const quoteContentEn = {
  metadata: {
    title: 'Get Quote | Weiwei Zipper',
  description: 'Submit your inquiry to Weiwei Zipper by form, WeChat, phone, or WhatsApp to receive suggestions and quotations for metal, resin, and nylon zippers.',
  },
  title: 'Get Quote',
  subtitle: 'To move into quotation more efficiently, please include the application, size, length, color, and required quantity whenever possible.',
  cardTitle: 'Contact Information',
  responseNote: 'WeChat, phone, and WhatsApp can all be used to confirm colors, specifications, sample arrangements, and lead time more efficiently.',
  wechatLabel: 'WeChat',
  wechatScan: 'Scan to add on WeChat',
} as const;

const footerContentEn = {
  description: 'Weiwei Zipper focuses on the supply and customization of metal, resin, and nylon zippers, with common size 3, 5, and 8 options that support more efficient sampling, quotation, and bulk purchasing.',
  quickLinksTitle: 'Quick Links',
  contactInfoTitle: 'Contact Information',
  privacy: 'Privacy Policy',
  terms: 'Terms of Service',
} as const;

const faqSectionIntroEn = {
  title: 'FAQ',
  subtitle: 'Clarifying common questions early helps reduce repeated confirmation and keeps communication and quotation moving more smoothly.',
} as const;

const blogContentEn = {
  metadata: {
    title: 'Insights | Weiwei Zipper',
    description: 'Practical articles from Weiwei Zipper on choosing size 3 / 5 / 8 zippers, understanding closed-end and open-end structures, preparing inquiries, and improving purchasing communication.',
  },
  title: 'Insights',
  subtitle: 'Practical content focused on size selection, structure decisions, inquiry preparation, and purchasing communication for zipper projects.',
  allArticles: 'All Articles',
  readTimeLabel: 'min read',
  readMoreLabel: 'Read more',
  backToBlog: 'Back to Insights',
  authorLabel: 'Author',
  categories: {
    guide: 'Selection Guide',
    sourcing: 'Sourcing Advice',
    general: 'Industry Info',
  },
  faq: {
    title: 'FAQ',
    description: 'If you are still confirming size, structure, zipper rolls, sampling schedules, or quotation requirements, the FAQ is a good place to review the most common points first.',
    button: 'View FAQ',
  },
  cta: {
    title: 'Do You Have a Specific Project in Mind?',
    description: 'You are welcome to share your product requirements. Based on common specifications and supply experience, we can help move your project into quotation and sampling more quickly.',
    button: 'Get Quote',
    secondary: 'View Products',
  },
} as const;

const inquiryFormContentEn = {
  title: 'Submit Your Inquiry',
  success: 'Your inquiry has been submitted successfully. We will contact you as soon as possible during working hours.',
  error: 'Submission failed. Please try again later, or contact us directly by phone or WhatsApp.',
  sectionContact: 'Contact Information',
  sectionProduct: 'Product Requirements',
  fields: {
    name: 'Contact Name',
    email: 'Email',
    company: 'Company',
    country: 'Country / Region',
    phone: 'Phone',
    productInterest: 'Product Interest',
    productModel: 'Style / Model Notes',
    productSize: 'Size / Length',
    application: 'Application',
    quantity: 'Quantity',
    message: 'Additional Notes',
  },
  placeholders: {
    productModel: 'For example: resin closed-end, double-open nylon, decorative metal zipper',
    productSize: 'For example: size 5, 60cm, open-end',
    quantity: 'For example: 3,000 pcs, or 3 styles for sampling first',
    message: 'You can add color, length, slider style, packing, target lead time, and any other details here.',
  },
  selectProduct: 'Please select a category',
  productOptions: [
    { value: 'resin-zipper', label: 'Resin Zipper' },
    { value: 'nylon-zipper', label: 'Nylon Zipper' },
    { value: 'metal-zipper', label: 'Metal Zipper' },
    { value: 'custom-zipper', label: 'Custom Development' },
  ],
  privacyNote: 'After submission, the information will only be used for quotation, sampling communication, and project follow-up, and will not be used for unrelated purposes.',
  submit: 'Get Quote',
  submitting: 'Submitting...',
} as const;

const siteBrandByLocale = {
  zh: siteBrand,
  en: siteBrandEn,
} satisfies Record<AppLocale, unknown>;

const navigationContentByLocale = {
  zh: navigationContent,
  en: navigationContentEn,
} satisfies Record<AppLocale, unknown>;

const homeContentByLocale = {
  zh: homeContent,
  en: homeContentEn,
} satisfies Record<AppLocale, unknown>;

const useCasesContentByLocale = {
  zh: useCasesContent,
  en: useCasesContentEn,
} satisfies Record<AppLocale, unknown>;

const aboutContentByLocale = {
  zh: aboutContent,
  en: aboutContentEn,
} satisfies Record<AppLocale, unknown>;

const contactContentByLocale = {
  zh: contactContent,
  en: contactContentEn,
} satisfies Record<AppLocale, unknown>;

const quoteContentByLocale = {
  zh: quoteContent,
  en: quoteContentEn,
} satisfies Record<AppLocale, unknown>;

const footerContentByLocale = {
  zh: footerContent,
  en: footerContentEn,
} satisfies Record<AppLocale, unknown>;

const faqSectionIntroByLocale = {
  zh: faqSectionIntro,
  en: faqSectionIntroEn,
} satisfies Record<AppLocale, unknown>;

const blogContentByLocale = {
  zh: blogContent,
  en: blogContentEn,
} satisfies Record<AppLocale, unknown>;

const inquiryFormContentByLocale = {
  zh: inquiryFormContent,
  en: inquiryFormContentEn,
} satisfies Record<AppLocale, unknown>;

export function getSiteBrand(locale: string) {
  return getLocalizedContent(siteBrandByLocale, locale);
}

export function getNavigationContent(locale: string) {
  return getLocalizedContent(navigationContentByLocale, locale);
}

export function getHomeContent(locale: string) {
  return getLocalizedContent(homeContentByLocale, locale);
}

export function getUseCasesContent(locale: string) {
  return getLocalizedContent(useCasesContentByLocale, locale);
}

export function getAboutContent(locale: string) {
  return getLocalizedContent(aboutContentByLocale, locale);
}

export function getContactContent(locale: string) {
  return getLocalizedContent(contactContentByLocale, locale);
}

export function getQuoteContent(locale: string) {
  return getLocalizedContent(quoteContentByLocale, locale);
}

export function getFooterContent(locale: string) {
  return getLocalizedContent(footerContentByLocale, locale);
}

export function getFaqSectionIntro(locale: string) {
  return getLocalizedContent(faqSectionIntroByLocale, locale);
}

export function getBlogContent(locale: string) {
  return getLocalizedContent(blogContentByLocale, locale);
}

export function getInquiryFormContent(locale: string) {
  return getLocalizedContent(inquiryFormContentByLocale, locale);
}
