import { getLocalizedContent, type AppLocale } from '@/localization/content';

export const siteBrand = {
  packageName: 'weiwei-zipper-web',
  siteName: '伟伟拉链',
  siteNameEn: 'Weiwei Zipper',
  companyName: '义乌市伟伟拉链有限公司',
  companyNameEn: 'Yiwu Weiwei Zipper Co., Ltd.',
  shortBrand: 'Weiwei Zipper',
  siteUrl: 'https://www.weiweizipper.com',
  email: 'weiweizipper@gmail.com',
  phone: '+86 13906892467',
  whatsapp: '+1 6506295275',
  whatsappUrl: 'https://wa.me/16506295275',
  businessHours: '周一至周六 08:30-18:00',
  responseTime: '工作时段内优先回复',
  logoPath: '/brand/weiwei-zipper-logo.png',
  logoAlt: '伟伟拉链商标',
  currentAddress: '浙江省义乌市国际商贸城三区59门三楼2街27449',
  historicalAddressNote: '',
  wechatQrPath: '/brand/wechat-qr-code.jpg',
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
    description: '伟伟拉链专注义乌拉链厂家与义乌拉链批发配套，提供金属拉链、树脂拉链、尼龙拉链现货与定制，覆盖 3 号 / 5 号 / 8 号规格，适用于服装、箱包、鞋帽及防晒衣项目打样与量产。',
  },
  hero: {
    badges: ['工厂直供', '支持打样', '支持来样定制'],
    title: '伟伟拉链',
    titleTagline: '义乌 3 / 5 / 8 号金属、树脂、尼龙拉链工厂',
    subtitle: '作为长期深耕义乌拉链配套的拉链厂家，伟伟拉链面向服装、箱包、鞋帽客户提供金属拉链、树脂拉链、尼龙拉链服务，覆盖 3 号 / 5 号 / 8 号常用规格，可配合打样确认、批量采购与后续返单需求。',
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
        description: '围绕 3 号、5 号、8 号高频规格建立标准化配套方案，便于客户在开发、批量采购与后续补单中保持供应连续性。3 号 / 5 号 / 8 号分别对应闭合状态下链牙宽度约 3 / 5 / 8 毫米。',
        points: ['常规码装与成品拉链均可配套', '闭口、开口、双开结构可按需确认', '颜色与拉头可结合款式统一匹配', '成品拉链通常 1000 条起订，一个订单内可以混色'],
      },
      {
        title: '打样确认流程高效',
        description: '可结合色卡、样卡、样衣或旧样进行样品确认，先完成关键细节验证，再进入批量排产流程。',
        points: ['支持寄样核色与基础测试确认', '支持来样复刻常用结构', '可配合开发季小批量打样', '常规规格打样通常 3 天，新色或特殊结构会更长'],
      },
      {
        title: '交付节奏可控',
        description: '常规款可优先协调备料与排单，规格确认后可更快进入生产节奏，适合快反项目与持续返单需求。',
        points: ['常规颜色与规格更便于快速安排', '返单项目可复用既有确认记录', '急单可根据排产情况优先协调', '确认样品与订单细节后，大货通常 10 天'],
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
    title: '应用场景',
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
      focus: '常用规格以 3 号 / 5 号为主，树脂与尼龙方案使用更广，可结合门襟、口袋及局部结构进一步确认开口、闭口或双开方式。',
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
    title: '关于我们',
    description: '了解伟伟拉链作为义乌拉链厂家，自 1992 年以来围绕金属、树脂、尼龙拉链建立的配套经验，以及服务服装、箱包、鞋帽客户的合作方式。',
  },
  title: '关于我们',
  subtitle: '伟伟拉链成立于 1992 年，长期围绕金属、树脂、尼龙拉链开展配套服务，重点配合服装、箱包、鞋帽等客户在开发、打样、采购与返单中的常见需求。',
  story: {
    title: '关于伟伟拉链',
    paragraphs: [
      '伟伟拉链成立于 1992 年，经营地址位于浙江省义乌市国际商贸城三区59门三楼2街27449。作为长期扎根义乌国际商贸城的义乌拉链厂家，我们多年来一直围绕金属拉链、树脂拉链、尼龙拉链三大常用品类开展配套服务，面向服装、箱包、鞋帽等客户持续积累更贴近实际采购需求的合作经验。',
      '在日常合作中，我们更重视客户在开发和采购过程中真正需要优先确认的内容，例如材质方向、规格大小、结构方式、长度安排、颜色匹配以及拉头搭配。围绕这些高频需求，我们长期把 3 号、5 号、8 号等常用规格作为配套重点，不断整理更稳定、更便于复用的常用方案。',
      '对于许多来到义乌国际商贸城寻找义乌拉链批发和长期配套资源的客户来说，真正重要的不只是价格本身，而是规格是否清楚、样品是否顺利、批量是否稳定。我们对产品质量、技术精度和可靠交付始终保持稳定要求，也正因为这种长期坚持，伟伟拉链逐步与东南亚、中东、欧洲及美洲等市场的客户建立起持续合作关系。对我们来说，稳定的品质表现、清晰的沟通效率和可持续的交付能力，往往比一次性的成交更重要。',
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
    title: '联系我们',
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
    title: '获取报价',
    description: '通过表单、微信、电话或 WhatsApp 向伟伟拉链提交需求，获取金属、树脂、尼龙拉链的配套建议与报价。',
  },
  title: '获取报价',
  subtitle: '如需更快进入有效报价流程，请尽量一并提供用途、规格、长度、颜色和需求数量。',
  // 走到报价页的买家已经决定要问了，卡住他的是不知道自己的量够不够。
  // 这几条原先只存在于 /faq 的手风琴里，报价页一个数字都没有。
  terms: {
    title: '下单条件',
    items: [
      '成品拉链通常 1000 条起订。一个订单内可以混色，把配比告诉我们即可确认。',
      '染色按颜色安排：单一颜色数量低于 2000 条时，该颜色需另付 150 元染色费。',
      '常规规格打样通常 3 天；确认样品与订单细节后，大货通常 10 天。码装（卷装）另行报价。',
    ],
    faqLink: '查看完整的起订量、打样与交期说明',
  },
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
    title: '资讯',
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
    productModel: '例如：树脂闭口、双开尼龙、金属装饰拉链',
    productSize: '例如：5 号，60cm，开口',
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

const siteBrandEs = {
  ...siteBrandEn,
  businessHours: 'Lunes a sábado 08:30-18:00',
  responseTime: 'Respuesta prioritaria en horario laboral',
} as const;

const siteBrandAr = {
  ...siteBrandEn,
  businessHours: 'من الاثنين إلى السبت 08:30-18:00',
  responseTime: 'أولوية للرد خلال ساعات العمل',
} as const;

const siteBrandRu = {
  ...siteBrandEn,
  businessHours: 'Понедельник - суббота 08:30-18:00',
  responseTime: 'Приоритетный ответ в рабочее время',
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

const navigationContentEs = {
  main: [
    { href: '/' as const, label: 'Inicio' },
    { href: '/products' as const, label: 'Productos' },
    { href: '/industries' as const, label: 'Aplicaciones' },
    { href: '/services' as const, label: 'Soluciones' },
    { href: '/about' as const, label: 'Nosotros' },
    { href: '/blog' as const, label: 'Artículos' },
    { href: '/contact' as const, label: 'Contacto' },
  ],
  primaryCta: 'Solicitar cotización',
} as const;

const navigationContentAr = {
  main: [
    { href: '/' as const, label: 'الرئيسية' },
    { href: '/products' as const, label: 'المنتجات' },
    { href: '/industries' as const, label: 'الاستخدامات' },
    { href: '/services' as const, label: 'الحلول' },
    { href: '/about' as const, label: 'من نحن' },
    { href: '/blog' as const, label: 'المقالات' },
    { href: '/contact' as const, label: 'اتصل بنا' },
  ],
  primaryCta: 'طلب عرض سعر',
} as const;

const navigationContentRu = {
  main: [
    { href: '/' as const, label: 'Главная' },
    { href: '/products' as const, label: 'Продукция' },
    { href: '/industries' as const, label: 'Применение' },
    { href: '/services' as const, label: 'Решения' },
    { href: '/about' as const, label: 'О нас' },
    { href: '/blog' as const, label: 'Статьи' },
    { href: '/contact' as const, label: 'Контакты' },
  ],
  primaryCta: 'Запросить цену',
} as const;

const homeContentEn = {
  metadata: {
    title: 'Weiwei Zipper | Factory for Metal, Resin, and Nylon Zippers in Sizes 3 / 5 / 8',
    description: 'Weiwei Zipper supplies and customizes metal, resin, and nylon zippers in common size 3, 5, and 8 specifications for garments, bags, footwear, and sun-protective outerwear.',
  },
  hero: {
    badges: ['Factory Direct Supply', 'Sampling Support', 'Custom Development'],
    title: 'Weiwei Zipper',
    titleTagline: 'Factory for Metal, Resin, and Nylon Zippers in Yiwu · Sizes 3 / 5 / 8',
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
        description: 'We organize supply around the most commonly used size 3, 5, and 8 range, making development, bulk purchasing, and repeat orders easier to coordinate. Sizes 3, 5, and 8 correspond to a closed chain width of about 3, 5, and 8 mm.',
        points: ['Supports both finished zippers and zipper rolls', 'Closed-end, open-end, and two-way structures can be matched as needed', 'Colors and sliders can be aligned with the style direction', 'Finished zippers start at 1,000 pieces, with colors mixable within one order'],
      },
      {
        title: 'Efficient Sample Confirmation',
        description: 'Samples can be reviewed against color cards, reference cards, garments, or old samples so key details are aligned before bulk scheduling.',
        points: ['Supports color checking and basic sample review', 'Can follow old samples for common structures', 'Suitable for small-batch development sampling', 'Standard specifications sample in about 3 days; new colors or special structures take longer'],
      },
      {
        title: 'More Predictable Delivery',
        description: 'For standard options, materials and production slots can be coordinated earlier once specifications are confirmed, which works well for quick-turn projects and repeat orders.',
        points: ['Common colors and sizes are easier to arrange quickly', 'Repeat orders can reuse prior confirmation records', 'Urgent requests can be coordinated around production availability', 'Bulk production usually takes about 10 days once the sample and order details are confirmed'],
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

const homeContentEs = {
  metadata: {
    title: 'Weiwei Zipper | Fábrica de cremalleras metálicas, de resina y de nylon en tamaños 3 / 5 / 8',
    description: 'Weiwei Zipper suministra y personaliza cremalleras metálicas, de resina y de nylon en tamaños comunes 3, 5 y 8 para prendas, bolsos, calzado y ropa con protección solar.',
  },
  hero: {
    badges: ['Suministro directo de fábrica', 'Soporte de muestras', 'Desarrollo a medida'],
    title: 'Weiwei Zipper',
    titleTagline: 'Fábrica de cremalleras metálicas, de resina y de nylon en Yiwu · tamaños 3 / 5 / 8',
    subtitle: 'Weiwei Zipper suministra cremalleras metálicas, de resina y de nylon para proyectos de prendas, bolsos y calzado, con opciones comunes en tamaños 3, 5 y 8 adecuadas para muestreo, compras al por mayor y reposiciones.',
    visualPath: '/hero/profile.png',
    visualAlt: 'Visual principal de una cremallera metálica parcialmente abierta',
    primaryCta: 'Ver productos',
    secondaryCta: 'Solicitar cotización',
    stats: [
      { label: 'Tamaños comunes', value: '3 / 5 / 8' },
      { label: 'Tipos principales', value: 'Metal / Resina / Nylon' },
      { label: 'Aplicaciones', value: 'Prendas / Bolsos / Calzado' },
    ],
  },
  trust: {
    title: 'Por qué los compradores trabajan con Weiwei Zipper',
    items: [
      {
        title: 'Suministro estable de tamaños estándar',
        description: 'Organizamos el suministro alrededor de los tamaños 3, 5 y 8 de uso más frecuente, lo que facilita el desarrollo, las compras al por mayor y las reposiciones. Los tamaños 3, 5 y 8 corresponden a un ancho de cadena cerrada de unos 3, 5 y 8 mm.',
        points: ['Soporta cremalleras terminadas y cremalleras por rollo', 'Las estructuras cerradas, abiertas y de doble carro pueden coordinarse según la necesidad', 'Los colores y cursores pueden alinearse con el estilo del producto', 'Las cremalleras terminadas parten de 1000 unidades y se pueden mezclar colores en un mismo pedido'],
      },
      {
        title: 'Confirmación de muestras más eficiente',
        description: 'Las muestras pueden revisarse con cartas de color, tarjetas de referencia, prendas o muestras antiguas para alinear los detalles clave antes de programar la producción.',
        points: ['Admite control de color y revisión básica de muestras', 'Puede seguir muestras antiguas para estructuras habituales', 'Adecuado para muestreo de pequeños lotes de desarrollo', 'Las especificaciones estándar se muestrean en unos 3 días; los colores nuevos o las estructuras especiales tardan más'],
      },
      {
        title: 'Entrega más predecible',
        description: 'En opciones estándar, los materiales y los espacios de producción pueden coordinarse antes una vez confirmadas las especificaciones, lo que funciona bien para proyectos rápidos y pedidos recurrentes.',
        points: ['Los colores y tamaños comunes son más fáciles de organizar con rapidez', 'Los pedidos recurrentes pueden reutilizar registros de confirmación anteriores', 'Las urgencias pueden coordinarse según la disponibilidad de producción', 'La producción en volumen suele tardar unos 10 días una vez confirmados la muestra y los detalles del pedido'],
      },
      {
        title: 'Comunicación rápida por varios canales',
        description: 'Teléfono, WeChat y WhatsApp pueden usarse en paralelo, lo que facilita confirmar especificaciones, colores, muestras y entrega con mayor rapidez.',
        points: ['Un canal de contacto consistente ayuda a mantener el historial alineado', 'Respuesta prioritaria en horario laboral', 'Admite imágenes y videos para confirmar detalles', 'Útil para proyectos de largo plazo en distintas regiones'],
      },
    ],
  },
  featuredProducts: {
    title: 'Categorías de producto',
    subtitle: 'Organizamos la oferta en torno a necesidades de compra habituales para cremalleras metálicas, de resina y de nylon, de modo que sea más fácil confirmar primero el material y después hablar de tamaño, estructura, color y entrega.',
  },
  useCasesPreview: {
    title: 'Aplicaciones comunes',
    subtitle: 'Organizamos soluciones habituales para prendas, bolsos y calzado para que el tipo, tamaño y estructura adecuados puedan definirse a partir del uso final.',
  },
  bottomCta: {
    title: '¿Tiene ya muestras o necesidades de compra?',
    description: 'Puede compartir tamaño, longitud, color, cantidad y aplicación para que podamos confirmar la dirección adecuada y avanzar con la cotización con mayor eficiencia.',
    primaryCta: 'Solicitar cotización',
    secondaryCta: 'Ver productos',
  },
} as const;

const homeContentAr = {
  metadata: {
    title: 'Weiwei Zipper | مصنع سحابات معدنية وراتنج ونايلون بمقاسات 3 / 5 / 8',
    description: 'توفر Weiwei Zipper سحابات معدنية وسحابات راتنج وسحابات نايلون مع خدمات التوريد والتخصيص للمقاسات الشائعة 3 و5 و8 لمنتجات الملابس والحقائب والأحذية والملابس الواقية من الشمس.',
  },
  hero: {
    badges: ['توريد مباشر من المصنع', 'دعم العينات', 'تطوير مخصص'],
    title: 'Weiwei Zipper',
    titleTagline: 'مصنع سحابات معدنية وراتنج ونايلون في ييوو بمقاسات 3 / 5 / 8',
    subtitle: 'توفر Weiwei Zipper سحابات معدنية وراتنج ونايلون لمشاريع الملابس والحقائب والأحذية، مع خيارات شائعة بالمقاسات 3 و5 و8 مناسبة للعينات والشراء بالجملة وإعادة الطلب.',
    visualPath: '/hero/profile.png',
    visualAlt: 'صورة رئيسية لسحاب معدني مفتوح جزئيا',
    primaryCta: 'عرض المنتجات',
    secondaryCta: 'طلب عرض سعر',
    stats: [
      { label: 'المقاسات الشائعة', value: '3 / 5 / 8' },
      { label: 'الأنواع الرئيسية', value: 'معدني / راتنج / نايلون' },
      { label: 'الاستخدامات', value: 'ملابس / حقائب / أحذية' },
    ],
  },
  trust: {
    title: 'لماذا يختار المشترون Weiwei Zipper',
    items: [
      {
        title: 'توريد مستقر للمقاسات القياسية',
        description: 'ننظم التوريد حول المقاسات الأكثر استخداما 3 و5 و8، مما يجعل التطوير والشراء بالجملة وإعادة الطلب أكثر سهولة في التنسيق. وتقابل المقاسات 3 و5 و8 عرض سلسلة مغلقة نحو 3 و5 و8 مم.',
        points: ['يدعم السحابات الجاهزة وسحابات الرول', 'يمكن تنسيق الهياكل المغلقة والمفتوحة والمزدوجة حسب الحاجة', 'يمكن مواءمة الألوان والسحابات مع اتجاه التصميم', 'تبدأ السحابات الجاهزة من 1000 قطعة، ويمكن مزج الألوان ضمن الطلب الواحد'],
      },
      {
        title: 'تأكيد عينات أكثر كفاءة',
        description: 'يمكن مراجعة العينات بالاعتماد على بطاقات الألوان أو العينات المرجعية أو عينات قديمة لتأكيد التفاصيل الرئيسية قبل جدولة الإنتاج.',
        points: ['يدعم فحص الألوان ومراجعة العينات الأساسية', 'يمكن الرجوع إلى عينات سابقة للهياكل الشائعة', 'مناسب لعينات التطوير بكميات صغيرة', 'تستغرق العينة نحو 3 أيام للمواصفات القياسية؛ وتتطلب الألوان الجديدة أو الهياكل الخاصة وقتا أطول'],
      },
      {
        title: 'تسليم أكثر قابلية للتوقع',
        description: 'بالنسبة للخيارات القياسية، يمكن تنسيق الخامات وجدولة الإنتاج بشكل أبكر بعد تأكيد المواصفات، وهو ما يناسب المشاريع السريعة وإعادة الطلب.',
        points: ['يسهل ترتيب الألوان والمقاسات الشائعة بسرعة', 'يمكن إعادة استخدام سجلات التأكيد السابقة في إعادة الطلب', 'يمكن تنسيق الطلبات العاجلة حسب طاقة الإنتاج', 'يستغرق الإنتاج بالجملة نحو 10 أيام بعد تأكيد العينة وتفاصيل الطلب'],
      },
      {
        title: 'استجابة سريعة عبر قنوات متعددة',
        description: 'يمكن استخدام الهاتف وWeChat وWhatsApp بالتوازي لتأكيد المواصفات والألوان والعينات ومواعيد التسليم بشكل أسرع.',
        points: ['مسار تواصل موحد يساعد على حفظ السجلات بشكل منظم', 'أولوية للرد خلال ساعات العمل', 'يدعم مشاركة الصور والفيديو لتأكيد التفاصيل', 'مناسب للمشاريع طويلة الأجل عبر مناطق مختلفة'],
      },
    ],
  },
  featuredProducts: {
    title: 'فئات المنتجات',
    subtitle: 'ننظم المنتجات وفق احتياجات الشراء الشائعة في السحابات المعدنية والراتنج والنايلون، مما يسهل تأكيد اتجاه الخامة أولا ثم مناقشة المقاس والبنية واللون ومتطلبات التسليم.',
  },
  useCasesPreview: {
    title: 'الاستخدامات الشائعة',
    subtitle: 'نرتب الحلول الشائعة حسب استخدامات الملابس والحقائب والأحذية، بحيث يسهل تحديد النوع والمقاس والبنية الأنسب انطلاقا من المنتج النهائي.',
  },
  bottomCta: {
    title: 'هل لديك عينة أو طلب شراء واضح؟',
    description: 'يمكنك مشاركة المقاس والطول واللون والكمية والاستخدام، وسنساعدك على تأكيد الاتجاه الأنسب والانتقال إلى التسعير بسرعة أكبر.',
    primaryCta: 'طلب عرض سعر',
    secondaryCta: 'عرض المنتجات',
  },
} as const;

const homeContentRu = {
  metadata: {
    title: 'Weiwei Zipper | Производитель металлических, смоляных и нейлоновых молний размеров 3 / 5 / 8',
    description: 'Weiwei Zipper поставляет и изготавливает на заказ металлические, смоляные и нейлоновые молнии распространенных размеров 3, 5 и 8 для одежды, сумок, обуви и солнцезащитной верхней одежды.',
  },
  hero: {
    badges: ['Поставка напрямую с фабрики', 'Поддержка образцов', 'Индивидуальная разработка'],
    title: 'Weiwei Zipper',
    titleTagline: 'Производитель металлических, смоляных и нейлоновых молний в Иу · размеры 3 / 5 / 8',
    subtitle: 'Weiwei Zipper поставляет металлические, смоляные и нейлоновые молнии для проектов в одежде, сумках и обуви, предлагая распространенные размеры 3, 5 и 8 для образцов, оптовых закупок и повторных заказов.',
    visualPath: '/hero/profile.png',
    visualAlt: 'Основное изображение частично раскрытой металлической молнии',
    primaryCta: 'Смотреть продукцию',
    secondaryCta: 'Запросить цену',
    stats: [
      { label: 'Популярные размеры', value: '3 / 5 / 8' },
      { label: 'Основные типы', value: 'Металл / Смола / Нейлон' },
      { label: 'Применение', value: 'Одежда / Сумки / Обувь' },
    ],
  },
  trust: {
    title: 'Почему покупатели выбирают Weiwei Zipper',
    items: [
      {
        title: 'Стабильные поставки стандартных размеров',
        description: 'Мы выстраиваем поставки вокруг самых востребованных размеров 3, 5 и 8, чтобы упрощать разработку, оптовые закупки и повторные заказы. Размеры 3, 5 и 8 соответствуют ширине сомкнутой цепочки около 3, 5 и 8 мм.',
        points: ['Поддерживаем как готовые молнии, так и рулонные цепочки', 'Можно согласовать закрытую, разъемную и двухзамковую конструкцию', 'Цвета и бегунки подбираются под стиль изделия', 'Готовые молнии — от 1000 штук, цвета можно комбинировать в одном заказе'],
      },
      {
        title: 'Более эффективное подтверждение образцов',
        description: 'Образцы можно сверять по цветовым картам, эталонам, готовым изделиям или старым образцам, чтобы ключевые детали были согласованы до запуска заказа.',
        points: ['Поддерживается базовая проверка цвета и образца', 'Можно ориентироваться на старые образцы для типовых конструкций', 'Подходит для мелкосерийной разработки', 'Образец по стандартным спецификациям обычно готов примерно за 3 дня; новые цвета и особые конструкции требуют больше времени'],
      },
      {
        title: 'Более предсказуемые сроки поставки',
        description: 'Для стандартных позиций материалы и производственные окна можно согласовать заранее после подтверждения спецификации, что удобно для быстрых проектов и повторных заказов.',
        points: ['Популярные цвета и размеры проще организовать быстрее', 'Повторные заказы могут использовать прежние записи подтверждения', 'Срочные запросы координируются по доступности производства', 'Серийное производство занимает около 10 дней после подтверждения образца и деталей заказа'],
      },
      {
        title: 'Оперативная связь по нескольким каналам',
        description: 'Телефон, WeChat и WhatsApp можно использовать параллельно, чтобы быстрее согласовывать спецификации, цвета, образцы и сроки поставки.',
        points: ['Единый канал общения помогает лучше сохранять историю согласований', 'Приоритетный ответ в рабочее время', 'Подходит для согласования деталей по фото и видео', 'Удобно для долгосрочных проектов в разных странах'],
      },
    ],
  },
  featuredProducts: {
    title: 'Категории продукции',
    subtitle: 'Линейка продукции организована вокруг типичных закупочных задач по металлическим, смоляным и нейлоновым молниям, чтобы сначала определить направление по материалу, а затем обсуждать размер, конструкцию, цвет и требования к поставке.',
  },
  useCasesPreview: {
    title: 'Популярные области применения',
    subtitle: 'Мы группируем решения для одежды, сумок и обуви так, чтобы подходящий тип, размер и конструкцию было проще определить, исходя из конечного изделия.',
  },
  bottomCta: {
    title: 'У вас уже есть образец или четкая потребность в закупке?',
    description: 'Вы можете прислать размер, длину, цвет, количество и сферу применения, и мы поможем быстрее определить подходящее решение и перейти к расчету цены.',
    primaryCta: 'Запросить цену',
    secondaryCta: 'Смотреть продукцию',
  },
} as const;

const useCasesContentEn = {
  metadata: {
    title: 'Applications',
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

const useCasesContentEs = {
  metadata: {
    title: 'Aplicaciones',
    description: 'Weiwei Zipper apoya proyectos de prendas, bolsos y calzado con opciones más estables de cremalleras metálicas, de resina y de nylon, junto con orientación sobre tamaños.',
  },
  title: 'Aplicaciones',
  subtitle: 'Partir del uso final facilita confirmar el material, el tamaño, la estructura y los requisitos de entrega adecuados.',
  introText: 'Weiwei Zipper se centra actualmente en aplicaciones para prendas, bolsos y calzado. Cada uso final exige niveles distintos de suavidad, durabilidad, consistencia de color, sensación de uso y estabilidad entre lotes. Por eso solemos recomendar confirmar primero el uso final y después definir con más precisión la opción de metal, resina o nylon, junto con tamaño, estructura y longitud.',
  keyLabel: 'Punto clave:',
  items: [
    {
      slug: 'apparel',
      name: 'Prendas',
      imagePath: '/products/cloth.png',
      imageAlt: 'Aplicación de cremallera en prendas',
      imagePosition: 'center 10%',
      description: 'Adecuadas para chaquetas, sudaderas, pantalones, ropa infantil y prendas con protección solar, donde suele prestarse mucha atención a la suavidad, el peso ligero, la combinación de color y la estabilidad en el uso repetido.',
      focus: 'Los tamaños comunes son principalmente 3 y 5. Las opciones de resina y nylon se utilizan con frecuencia y pueden confirmarse según apertura frontal, bolsillos o si la estructura debe ser cerrada, abierta o de doble carro.',
    },
    {
      slug: 'bags',
      name: 'Bolsos',
      imagePath: '/products/bag.png',
      imageAlt: 'Aplicación de cremallera en bolsos',
      imagePosition: 'center center',
      description: 'Adecuadas para mochilas escolares, bolsos de viaje, organizadores y bolsos de herramientas, donde la durabilidad, el enganche estable de los dientes y la consistencia entre lotes suelen ser más importantes.',
      focus: 'Los tamaños comunes son principalmente 5 y 8. El nylon y el metal suelen ser las opciones preferidas, y la selección final depende de si la cremallera se usa en el compartimento principal, bolsillo lateral o bolsillo interior.',
    },
    {
      slug: 'footwear',
      name: 'Calzado y accesorios',
      imagePath: '/products/boost.jpg',
      imageAlt: 'Aplicación de cremallera en calzado',
      imagePosition: 'center center',
      description: 'Adecuadas para botas, calzado funcional y piezas accesorias donde la resistencia al desgaste, la facilidad de uso y la eficiencia de montaje son factores importantes.',
      focus: 'Los tamaños comunes son principalmente 3 y 5. Las opciones metálicas y de resina se utilizan con frecuencia en posiciones decorativas, aperturas funcionales y pequeñas secciones accesorias.',
    },
  ],
  whyChoose: {
    title: 'Por qué elegir Weiwei Zipper',
    items: [
      {
        title: 'Experiencia en el sector',
        description: 'Con 34 años de experiencia, hemos apoyado de forma continua proyectos de prendas, bolsos y calzado, y conocemos mejor las necesidades reales de material, tamaño y estructura detrás de cada tipo de producto.',
      },
      {
        title: 'Cotización rápida',
        description: 'Al organizar soluciones comunes alrededor de los tamaños 3, 5 y 8 más utilizados, normalmente podemos avanzar con mayor rapidez hacia la selección, el muestreo y la cotización una vez que la solicitud está clara.',
      },
      {
        title: 'Suministro global',
        description: 'Respaldados por una calidad estable, consistencia técnica y entrega fiable, seguimos apoyando proyectos orientados a exportación y programas de suministro a largo plazo.',
      },
    ],
  },
  ctaTitle: '¿Tiene ya muestras o necesidades de compra?',
  ctaDescription: 'Puede compartir tamaño, longitud, color, cantidad y aplicación para que podamos confirmar la dirección adecuada y avanzar con la cotización con mayor eficiencia.',
  ctaPrimary: 'Solicitar cotización',
  ctaSecondary: 'Ver productos',
} as const;

const useCasesContentAr = {
  metadata: {
    title: 'الاستخدامات',
    description: 'تدعم Weiwei Zipper مشاريع الملابس والحقائب والأحذية بخيارات أكثر استقرارا من السحابات المعدنية والراتنجية والنايلون مع إرشاد أوضح لاختيار المقاسات.',
  },
  title: 'الاستخدامات',
  subtitle: 'البدء من الاستخدام النهائي يجعل تأكيد الخامة والمقاس والبنية ومتطلبات التسليم أكثر سهولة.',
  introText: 'تركز Weiwei Zipper حاليا على استخدامات الملابس والحقائب والأحذية. فكل منتج نهائي يفرض متطلبات مختلفة من حيث سلاسة الحركة والمتانة وثبات اللون والإحساس أثناء الاستخدام والاستقرار بين الدفعات. لذلك نوصي عادة بتأكيد الاستخدام النهائي أولا، ثم تضييق الاختيار بين المعدني أو الراتنج أو النايلون مع المقاس والبنية والطول المناسبين.',
  keyLabel: 'النقطة الأساسية:',
  items: [
    {
      slug: 'apparel',
      name: 'الملابس',
      imagePath: '/products/cloth.png',
      imageAlt: 'استخدام السحاب في الملابس',
      imagePosition: 'center 10%',
      description: 'مناسبة للجاكيتات والهودي والبناطيل وملابس الأطفال والملابس الواقية من الشمس، حيث يكون التركيز عادة على السلاسة وخفة الوزن وتناسق اللون وثبات الاستخدام المتكرر.',
      focus: 'المقاسات الأكثر شيوعا هنا هي 3 و5. وغالبا ما تستخدم خيارات الراتنج والنايلون، ويمكن تحديد الهيكل النهائي حسب الفتحة الأمامية أو الجيب أو ما إذا كانت البنية مغلقة أو مفتوحة أو مزدوجة.',
    },
    {
      slug: 'bags',
      name: 'الحقائب',
      imagePath: '/products/bag.png',
      imageAlt: 'استخدام السحاب في الحقائب',
      imagePosition: 'center center',
      description: 'مناسبة للحقائب المدرسية وحقائب السفر والمنظمات وحقائب الأدوات، حيث تكون المتانة وتماسك الأسنان وثبات التوريد بين الدفعات أكثر أهمية.',
      focus: 'المقاسات الأكثر شيوعا هنا هي 5 و8. وعادة ما يكون النايلون أو المعدني هو الخيار المفضل، مع تحديد الحل النهائي حسب ما إذا كان السحاب يستخدم للحجرة الرئيسية أو الجيب الجانبي أو الجيب الداخلي.',
    },
    {
      slug: 'footwear',
      name: 'الأحذية والإكسسوارات',
      imagePath: '/products/boost.jpg',
      imageAlt: 'استخدام السحاب في الأحذية',
      imagePosition: 'center center',
      description: 'مناسبة للأحذية الطويلة والأحذية العملية والأجزاء الإكسسوارية التي تتطلب مقاومة للاحتكاك وسهولة استخدام وكفاءة في التجميع.',
      focus: 'المقاسات الأكثر شيوعا هنا هي 3 و5. وتستخدم الحلول المعدنية والراتنجية كثيرا في المواضع الزخرفية والفتحات الوظيفية والأجزاء الإكسسوارية الصغيرة.',
    },
  ],
  whyChoose: {
    title: 'لماذا تختار Weiwei Zipper',
    items: [
      {
        title: 'خبرة صناعية',
        description: 'مع 34 عاما من الخبرة، قدمنا دعما طويل الأجل لمشاريع الملابس والحقائب والأحذية، وأصبحنا أكثر دراية بالاحتياجات العملية للخامة والمقاس والبنية في مختلف المنتجات.',
      },
      {
        title: 'تسعير سريع',
        description: 'من خلال تنظيم الحلول الشائعة حول المقاسات 3 و5 و8 الأكثر استخداما، يمكننا غالبا الانتقال بسرعة أكبر إلى الاختيار والعينات والتسعير بمجرد وضوح الطلب.',
      },
      {
        title: 'توريد عالمي',
        description: 'استنادا إلى جودة مستقرة واتساق تقني وتسليم موثوق، نواصل دعم المشاريع الموجهة للتصدير وبرامج التوريد طويلة الأجل.',
      },
    ],
  },
  ctaTitle: 'هل لديك عينة أو طلب شراء واضح؟',
  ctaDescription: 'يمكنك مشاركة المقاس والطول واللون والكمية والاستخدام، وسنساعدك على تأكيد الاتجاه المناسب والانتقال إلى التسعير بسرعة أكبر.',
  ctaPrimary: 'طلب عرض سعر',
  ctaSecondary: 'عرض المنتجات',
} as const;

const useCasesContentRu = {
  metadata: {
    title: 'Применение',
    description: 'Weiwei Zipper поддерживает проекты в одежде, сумках и обуви, предлагая более стабильные металлические, смоляные и нейлоновые молнии и понятные рекомендации по размерам.',
  },
  title: 'Применение',
  subtitle: 'Если начать с конечного изделия, проще подтвердить подходящий материал, размер, конструкцию и требования к поставке.',
  introText: 'Weiwei Zipper сегодня в основном работает с проектами для одежды, сумок и обуви. Разные конечные изделия предъявляют разные требования к плавности хода, износостойкости, стабильности цвета, тактильным ощущениям и повторяемости между партиями. Поэтому мы обычно рекомендуем сначала определить сферу применения, а затем сузить выбор между металлическими, смоляными и нейлоновыми решениями по размеру, конструкции и длине.',
  keyLabel: 'Ключевой момент:',
  items: [
    {
      slug: 'apparel',
      name: 'Одежда',
      imagePath: '/products/cloth.png',
      imageAlt: 'Применение молнии в одежде',
      imagePosition: 'center 10%',
      description: 'Подходит для курток, худи, брюк, детской одежды и солнцезащитной верхней одежды, где важны плавный ход, легкость, совпадение цвета и стабильность при многократном использовании.',
      focus: 'Наиболее распространены размеры 3 и 5. Часто используются смоляные и нейлоновые решения, а финальная конструкция определяется по передней планке, карману или тому, нужна ли закрытая, разъемная или двухзамковая схема.',
    },
    {
      slug: 'bags',
      name: 'Сумки',
      imagePath: '/products/bag.png',
      imageAlt: 'Применение молнии в сумках',
      imagePosition: 'center center',
      description: 'Подходит для школьных рюкзаков, дорожных сумок, органайзеров и рабочих сумок, где особенно важны износостойкость, надежное сцепление зубьев и стабильность между партиями.',
      focus: 'Наиболее распространены размеры 5 и 8. Чаще выбирают нейлон или металл, а окончательное решение зависит от того, используется ли молния в основном отделении, боковом кармане или внутреннем кармане.',
    },
    {
      slug: 'footwear',
      name: 'Обувь и аксессуары',
      imagePath: '/products/boost.jpg',
      imageAlt: 'Применение молнии в обуви',
      imagePosition: 'center center',
      description: 'Подходит для сапог, функциональной обуви и аксессуарных деталей, где важны стойкость к износу, удобство использования и эффективность сборки.',
      focus: 'Чаще всего используются размеры 3 и 5. Металлические и смоляные решения популярны в декоративных зонах, функциональных разрезах и небольших аксессуарных секциях.',
    },
  ],
  whyChoose: {
    title: 'Почему выбирают Weiwei Zipper',
    items: [
      {
        title: 'Отраслевой опыт',
        description: 'За 34 года работы мы накопили значительный опыт в проектах для одежды, сумок и обуви и лучше понимаем практические требования к материалу, размеру и конструкции для разных категорий изделий.',
      },
      {
        title: 'Быстрый расчет цены',
        description: 'Благодаря организации типовых решений вокруг популярных размеров 3, 5 и 8 мы обычно можем быстрее перейти к подбору, образцам и расчету цены, как только запрос становится понятным.',
      },
      {
        title: 'Глобальные поставки',
        description: 'Опираясь на стабильное качество, техническую точность и надежную поставку, мы продолжаем поддерживать экспортные проекты и долгосрочные программы снабжения.',
      },
    ],
  },
  ctaTitle: 'У вас уже есть образец или четкая потребность в закупке?',
  ctaDescription: 'Вы можете прислать размер, длину, цвет, количество и сферу применения, и мы поможем подтвердить подходящее направление и быстрее перейти к расчету цены.',
  ctaPrimary: 'Запросить цену',
  ctaSecondary: 'Смотреть продукцию',
} as const;

const aboutContentEn = {
  metadata: {
    title: 'About Us',
    description: 'Learn how Weiwei Zipper has supported metal, resin, and nylon zipper projects since 1992 from Yiwu International Trade City, serving garment, bag, and footwear customers.',
  },
  title: 'About Us',
  subtitle: 'Founded in 1992, Weiwei Zipper has long focused on metal, resin, and nylon zipper supply from Yiwu International Trade City for garment, bag, and footwear customers across development, sampling, purchasing, and repeat orders.',
  story: {
    title: 'About Weiwei Zipper',
    paragraphs: [
      'Weiwei Zipper was founded in 1992 and operates from District 3 of Yiwu International Trade City. As a long-term zipper supplier based in Yiwu, we have stayed focused on three core product lines: metal, resin, and nylon zippers. By serving garment, bag, and footwear customers over the long term, we have built practical experience that stays close to real purchasing, development, and repeat-order needs.',
      'In day-to-day cooperation, we pay close attention to the details customers usually need to confirm early, including material direction, size, structure, length, color matching, and slider selection. Around those frequent requirements, we continue to organize more stable and reusable solutions based on the common size 3, 5, and 8 range.',
      'For many buyers looking for a zipper manufacturer or zipper wholesale source in Yiwu, what matters is not only price, but whether specifications are clear, samples move smoothly, and later supply stays stable. We have remained consistent in our focus on product quality, technical precision, and reliable delivery. That long-term discipline has helped Weiwei Zipper establish ongoing cooperation with customers serving Southeast Asia, the Middle East, Europe, and the Americas. To us, steady quality, clear communication, and dependable supply matter more than one-time transactions.',
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

const aboutContentEs = {
  metadata: {
    title: 'Nosotros',
    description: 'Descubra cómo Weiwei Zipper ha apoyado proyectos de cremalleras metálicas, de resina y de nylon desde 1992 desde el Distrito 3 de Yiwu International Trade City, sirviendo a clientes de prendas, bolsos y calzado.',
  },
  title: 'Nosotros',
  subtitle: 'Fundada en 1992, Weiwei Zipper se ha centrado durante muchos años en el suministro de cremalleras metálicas, de resina y de nylon desde Yiwu International Trade City para clientes de prendas, bolsos y calzado en desarrollo, muestreo, compras y reposiciones.',
  story: {
    title: 'Sobre Weiwei Zipper',
    paragraphs: [
      'Weiwei Zipper fue fundada en 1992 y opera desde el Distrito 3 de Yiwu International Trade City. Como proveedor de cremalleras con base en Yiwu, a lo largo de los años nos hemos mantenido enfocados en tres líneas principales: cremalleras metálicas, de resina y de nylon. Al trabajar de forma continua con clientes de prendas, bolsos y calzado, hemos acumulado una experiencia práctica muy cercana a las necesidades reales de compra, desarrollo y reposición.',
      'En la cooperación diaria prestamos especial atención a los puntos que normalmente deben confirmarse al principio, como el material, el tamaño, la estructura, la longitud, la combinación de color y la selección del cursor. Sobre esas necesidades frecuentes seguimos organizando soluciones más estables y reutilizables basadas en los tamaños comunes 3, 5 y 8.',
      'Para muchos compradores que buscan un proveedor de cremalleras o una fuente de compra al por mayor en Yiwu, lo importante no es solo el precio, sino también si las especificaciones quedan claras, si las muestras avanzan con fluidez y si el suministro posterior se mantiene estable. Nos hemos mantenido constantes en nuestro enfoque sobre calidad del producto, precisión técnica y entrega fiable. Esa disciplina a largo plazo ha ayudado a Weiwei Zipper a mantener cooperación continua con clientes que atienden el Sudeste Asiático, Oriente Medio, Europa y América. Para nosotros, la calidad estable, la comunicación clara y el suministro fiable importan más que las operaciones de una sola vez.',
      'Tanto si el proyecto es una reposición, un nuevo desarrollo o una conversación inicial basada en una muestra antigua o una imagen de referencia, nuestro objetivo es ayudar a los clientes a confirmar la dirección, avanzar en las muestras y conectar con las compras de una forma más fluida y eficiente.',
    ],
  },
  capabilities: {
    title: 'Capacidad de fábrica',
    items: [
      { value: siteBrand.foundedYear, label: 'Fundada en' },
      { value: '30+ años', label: 'Experiencia del sector' },
      { value: 'Metal / Resina / Nylon', label: 'Líneas principales' },
      { value: '3 / 5 / 8', label: 'Tamaños frecuentes' },
      { value: '50+ países y regiones', label: 'Mercados de exportación' },
      { value: 'Entrega fiable', label: 'Capacidad de suministro' },
    ],
  },
  mission: {
    title: 'Como trabajamos',
    items: [
      {
        title: 'Alineación de requisitos',
        description: 'Comenzamos alineando aplicación, dirección de material, tamaño, estructura, longitud, color y detalles del cursor para que el muestreo y la cotización avancen con una base clara.',
      },
      {
        title: 'Confirmación de muestras',
        description: 'Durante el muestreo revisamos detalles estructurales, sensación de uso y requisitos de color para que el proyecto pueda pasar con más fluidez a la compra al por mayor.',
      },
      {
        title: 'Entrega en volumen',
        description: 'Una vez establecidos los tamaños comunes y los registros de confirmación, las reposiciones, la programación y la cooperación a largo plazo pueden avanzar con mayor eficiencia y estabilidad de entrega.',
      },
    ],
  },
} as const;

const aboutContentAr = {
  metadata: {
    title: 'من نحن',
    description: 'تعرف على كيفية دعم Weiwei Zipper لمشاريع السحابات المعدنية والراتنجية والنايلون منذ عام 1992 من المنطقة الثالثة في مدينة ييوو التجارية الدولية، مع خدمة عملاء الملابس والحقائب والأحذية.',
  },
  title: 'من نحن',
  subtitle: 'تأسست Weiwei Zipper في عام 1992، وركزت لسنوات طويلة على توريد السحابات المعدنية والراتنجية والنايلون من مدينة ييوو التجارية الدولية لعملاء الملابس والحقائب والأحذية في مراحل التطوير والعينات والشراء وإعادة الطلب.',
  story: {
    title: 'عن Weiwei Zipper',
    paragraphs: [
      'تأسست Weiwei Zipper في عام 1992، وتعمل من داخل المنطقة الثالثة في مدينة ييوو التجارية الدولية. وبصفتنا موردا للسحابات في ييوو، حافظنا على تركيز واضح على ثلاث فئات رئيسية: السحابات المعدنية والراتنجية والنايلون. ومن خلال خدمة عملاء الملابس والحقائب والأحذية بشكل مستمر، تراكمت لدينا خبرة عملية مرتبطة مباشرة باحتياجات التطوير والشراء وإعادة الطلب.',
      'في التعاون اليومي، نولي اهتماما كبيرا للنقاط التي يحتاج العملاء عادة إلى تأكيدها مبكرا، مثل اتجاه الخامة والمقاس والبنية والطول ومطابقة اللون واختيار السحاب. وانطلاقا من هذه الاحتياجات المتكررة، نواصل تنظيم حلول أكثر استقرارا وقابلية لإعادة الاستخدام حول المقاسات الشائعة 3 و5 و8.',
      'بالنسبة للعديد من المشترين الذين يبحثون في ييوو عن مورد سحابات أو عن قناة شراء بالجملة، فإن الأمر لا يتعلق بالسعر فقط، بل بوضوح المواصفات وسهولة العينات واستقرار التوريد اللاحق. حافظنا باستمرار على التركيز على جودة المنتج والدقة التقنية والتسليم الموثوق. وقد ساعد هذا الانضباط طويل الأجل Weiwei Zipper على بناء تعاون مستمر مع عملاء يخدمون جنوب شرق آسيا والشرق الأوسط وأوروبا والأمريكتين. بالنسبة لنا، تبقى الجودة المستقرة والتواصل الواضح والتوريد الموثوق أهم من التعاملات المؤقتة.',
      'سواء كان المشروع إعادة طلب أو تطويرا جديدا أو مناقشة أولية بناء على عينة قديمة أو صورة مرجعية، فإن هدفنا هو مساعدة العميل على تأكيد الاتجاه، ودفع العينات إلى الأمام، وربط المشروع بمرحلة الشراء بشكل أكثر سلاسة وكفاءة.',
    ],
  },
  capabilities: {
    title: 'قدرات المصنع',
    items: [
      { value: siteBrand.foundedYear, label: 'سنة التأسيس' },
      { value: '30+ سنة', label: 'خبرة في القطاع' },
      { value: 'معدني / راتنج / نايلون', label: 'الخطوط الرئيسية' },
      { value: '3 / 5 / 8', label: 'المقاسات عالية التكرار' },
      { value: '50+ دولة ومنطقة', label: 'أسواق التصدير' },
      { value: 'تسليم موثوق', label: 'قدرة التوريد' },
    ],
  },
  mission: {
    title: 'كيف نعمل',
    items: [
      {
        title: 'مراجعة المتطلبات',
        description: 'نبدأ بمراجعة الاستخدام واتجاه الخامة والمقاس والبنية والطول واللون وتفاصيل السحاب حتى يتحرك التسعير والعينات على أساس واضح.',
      },
      {
        title: 'تأكيد العينات',
        description: 'أثناء مرحلة العينات، نراجع تفاصيل البنية والإحساس أثناء الاستخدام ومتطلبات اللون حتى ينتقل المشروع بسلاسة أكبر إلى الشراء بالجملة.',
      },
      {
        title: 'التسليم بالجملة',
        description: 'بعد تثبيت المقاسات الشائعة وسجلات التأكيد، يمكن أن تتحرك إعادة الطلب والجدولة والتعاون طويل الأجل بكفاءة أعلى واستقرار أكبر في التسليم.',
      },
    ],
  },
} as const;

const aboutContentRu = {
  metadata: {
    title: 'О нас',
    description: 'Узнайте, как Weiwei Zipper с 1992 года поддерживает проекты по металлическим, смоляным и нейлоновым молниям из района 3 Yiwu International Trade City для клиентов в одежде, сумках и обуви.',
  },
  title: 'О нас',
  subtitle: 'Компания Weiwei Zipper была основана в 1992 году и уже много лет специализируется на поставках металлических, смоляных и нейлоновых молний из Yiwu International Trade City для клиентов из сегментов одежды, сумок и обуви на этапах разработки, образцов, закупок и повторных заказов.',
  story: {
    title: 'О Weiwei Zipper',
    paragraphs: [
      'Weiwei Zipper была основана в 1992 году и работает из района 3 Yiwu International Trade City. Как поставщик молний в Иу, мы на протяжении многих лет сохраняем фокус на трех основных направлениях: металлические, смоляные и нейлоновые молнии. Долгосрочная работа с клиентами из сегментов одежды, сумок и обуви позволила нам накопить практический опыт, тесно связанный с реальными задачами разработки, закупок и повторных заказов.',
      'В ежедневной работе мы уделяем особое внимание тем деталям, которые клиенты обычно хотят подтвердить заранее: материал, размер, конструкция, длина, цвет и выбор бегунка. На основе этих часто повторяющихся потребностей мы продолжаем выстраивать более стабильные и удобные для повторного использования решения вокруг распространенных размеров 3, 5 и 8.',
      'Для многих покупателей, которые ищут в Иу поставщика молний или оптовый источник, важна не только цена, но и понятность спецификаций, плавность работы с образцами и стабильность дальнейших поставок. Мы последовательно придерживаемся требований к качеству продукции, технической точности и надежности поставок. Такая дисциплина помогла Weiwei Zipper выстроить долгосрочное сотрудничество с клиентами, работающими в Юго-Восточной Азии, на Ближнем Востоке, в Европе и Америке. Для нас стабильное качество, понятная коммуникация и надежное снабжение важнее разовых сделок.',
      'Независимо от того, идет ли речь о повторном заказе, новой разработке или первой дискуссии на основе старого образца или референсного изображения, наша задача состоит в том, чтобы помочь клиенту определить направление, продвинуть этап образцов и связать проект с закупкой более плавно и эффективно.',
    ],
  },
  capabilities: {
    title: 'Производственные возможности',
    items: [
      { value: siteBrand.foundedYear, label: 'Год основания' },
      { value: '30+ лет', label: 'Опыт в отрасли' },
      { value: 'Металл / Смола / Нейлон', label: 'Основные направления' },
      { value: '3 / 5 / 8', label: 'Высокочастотные размеры' },
      { value: '50+ стран и регионов', label: 'Экспортные рынки' },
      { value: 'Надежная поставка', label: 'Возможности снабжения' },
    ],
  },
  mission: {
    title: 'Как мы работаем',
    items: [
      {
        title: 'Согласование требований',
        description: 'Мы начинаем с уточнения сферы применения, материала, размера, конструкции, длины, цвета и деталей бегунка, чтобы образцы и расчет цены строились на понятной основе.',
      },
      {
        title: 'Подтверждение образцов',
        description: 'На этапе образцов мы проверяем конструктивные детали, ощущения при использовании и требования к цвету, чтобы проект легче переходил к оптовой закупке.',
      },
      {
        title: 'Оптовая поставка',
        description: 'После фиксации типовых спецификаций и записей подтверждения повторные заказы, планирование и долгосрочное сотрудничество можно вести с более высокой эффективностью и устойчивостью поставок.',
      },
    ],
  },
} as const;

const contactContentEn = {
  metadata: {
    title: 'Contact Us',
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

const contactContentEs = {
  metadata: {
    title: 'Contacto',
    description: 'Contacte con Weiwei Zipper por teléfono, WeChat, WhatsApp o correo electrónico y consulte la dirección de la empresa y la ubicación en el mapa.',
  },
  title: 'Contacto',
  subtitle: 'Puede contactarnos por teléfono, WeChat, WhatsApp o correo electrónico. Si su solicitud ya está clara, también puede ir directamente a la página de cotización y enviarla allí.',
  cardTitle: 'Información de contacto',
  responseNote: 'Durante el horario laboral, WeChat, teléfono, WhatsApp y correo electrónico pueden utilizarse para coordinar visitas, solicitudes de contacto y detalles básicos del proyecto con mayor rapidez.',
  addressTitle: 'Información para visitarnos',
  addressDescription: 'Si necesita una visita presencial o una referencia de ubicación, puede utilizar la dirección y la información de mapa que aparecen a continuación.',
  mapTitle: 'Ubicación en el mapa',
  mapOpenLabel: 'Abrir en Maps',
  quoteButton: 'Ir a cotización',
  whatsappButton: 'Contactar por WhatsApp',
  wechatLabel: 'WeChat',
  wechatScan: 'Escanee para agregar en WeChat',
} as const;

const contactContentAr = {
  metadata: {
    title: 'اتصل بنا',
    description: 'تواصل مع Weiwei Zipper عبر الهاتف أو WeChat أو WhatsApp أو البريد الإلكتروني، واطلع على عنوان الشركة وموقعها على الخريطة.',
  },
  title: 'اتصل بنا',
  subtitle: 'يمكنك التواصل معنا عبر الهاتف أو WeChat أو WhatsApp أو البريد الإلكتروني. وإذا كان طلبك واضحا بالفعل، يمكنك أيضا الانتقال مباشرة إلى صفحة عرض السعر وإرسال التفاصيل هناك.',
  cardTitle: 'معلومات التواصل',
  responseNote: 'خلال ساعات العمل، يمكن استخدام WeChat والهاتف وWhatsApp والبريد الإلكتروني لتنسيق الزيارات وطلبات التواصل وتفاصيل المشروع الأساسية بسرعة أكبر.',
  addressTitle: 'معلومات الزيارة',
  addressDescription: 'إذا كنت بحاجة إلى زيارة ميدانية أو مرجع للموقع، يمكنك استخدام العنوان ومعلومات الخريطة في الأسفل.',
  mapTitle: 'موقع الخريطة',
  mapOpenLabel: 'فتح في الخرائط',
  quoteButton: 'الانتقال إلى عرض السعر',
  whatsappButton: 'التواصل عبر WhatsApp',
  wechatLabel: 'WeChat',
  wechatScan: 'امسح الرمز للإضافة على WeChat',
} as const;

const contactContentRu = {
  metadata: {
    title: 'Контакты',
    description: 'Свяжитесь с Weiwei Zipper по телефону, WeChat, WhatsApp или электронной почте, а также ознакомьтесь с адресом компании и расположением на карте.',
  },
  title: 'Контакты',
  subtitle: 'Вы можете связаться с нами по телефону, WeChat, WhatsApp или электронной почте. Если ваш запрос уже достаточно ясен, вы также можете сразу перейти на страницу запроса цены и отправить его там.',
  cardTitle: 'Контактная информация',
  responseNote: 'В рабочее время WeChat, телефон, WhatsApp и электронная почта могут использоваться для более быстрого согласования визитов, запросов на связь и базовых деталей проекта.',
  addressTitle: 'Информация для посещения',
  addressDescription: 'Если вам нужен визит на место или ориентир по локации, вы можете использовать адрес и карту ниже.',
  mapTitle: 'Расположение на карте',
  mapOpenLabel: 'Открыть в картах',
  quoteButton: 'Перейти к запросу цены',
  whatsappButton: 'Связаться через WhatsApp',
  wechatLabel: 'WeChat',
  wechatScan: 'Сканируйте, чтобы добавить в WeChat',
} as const;

const quoteContentEn = {
  metadata: {
    title: 'Get Quote',
  description: 'Submit your inquiry to Weiwei Zipper by form, WeChat, phone, or WhatsApp to receive suggestions and quotations for metal, resin, and nylon zippers.',
  },
  title: 'Get Quote',
  subtitle: 'To move into quotation more efficiently, please include the application, size, length, color, and required quantity whenever possible.',
  terms: {
    title: 'Order conditions',
    items: [
      'For finished zippers the minimum order is usually 1,000 pieces. Colors can be mixed within one order — share the split you need and we will confirm it.',
      'Dyeing is arranged per color, so any color ordered in a quantity below 2,000 pieces carries a dyeing fee of RMB 150 for that color.',
      'Standard specifications sample in about 3 days; bulk production usually takes about 10 days once the sample and order details are confirmed. Zipper rolls are quoted separately.',
    ],
    faqLink: 'Read the full notes on minimum order, sampling, and lead time',
  },
  cardTitle: 'Contact Information',
  responseNote: 'WeChat, phone, and WhatsApp can all be used to confirm colors, specifications, sample arrangements, and lead time more efficiently.',
  wechatLabel: 'WeChat',
  wechatScan: 'Scan to add on WeChat',
} as const;

const quoteContentEs = {
  metadata: {
    title: 'Solicitar cotización',
    description: 'Envíe su consulta a Weiwei Zipper por formulario, WeChat, teléfono o WhatsApp para recibir recomendaciones y cotizaciones de cremalleras metálicas, de resina y de nylon.',
  },
  title: 'Solicitar cotización',
  subtitle: 'Para avanzar con la cotización de forma más eficiente, incluya siempre que sea posible la aplicación, el tamaño, la longitud, el color y la cantidad requerida.',
  terms: {
    title: 'Condiciones del pedido',
    items: [
      'Para cremalleras terminadas el pedido mínimo suele ser de 1000 unidades. Se pueden mezclar colores dentro de un mismo pedido: indíquenos el reparto que necesita y se lo confirmamos.',
      'El teñido se organiza por color, por lo que cualquier color con una cantidad inferior a 2000 unidades lleva una tasa de teñido de 150 RMB para ese color.',
      'Las especificaciones estándar se muestrean en unos 3 días; la producción en volumen suele tardar unos 10 días una vez confirmados la muestra y los detalles del pedido. Las cremalleras por rollo se cotizan aparte.',
    ],
    faqLink: 'Consulte las notas completas sobre pedido mínimo, muestras y plazos',
  },
  cardTitle: 'Información de contacto',
  responseNote: 'WeChat, teléfono y WhatsApp pueden utilizarse para confirmar colores, especificaciones, muestras y plazos con mayor eficiencia.',
  wechatLabel: 'WeChat',
  wechatScan: 'Escanee para agregar en WeChat',
} as const;

const quoteContentAr = {
  metadata: {
    title: 'طلب عرض سعر',
    description: 'أرسل استفسارك إلى Weiwei Zipper عبر النموذج أو WeChat أو الهاتف أو WhatsApp للحصول على اقتراحات وتسعير للسحابات المعدنية والراتنجية والنايلون.',
  },
  title: 'طلب عرض سعر',
  subtitle: 'للدخول في مرحلة التسعير بشكل أكثر كفاءة، يرجى تضمين الاستخدام والمقاس والطول واللون والكمية المطلوبة قدر الإمكان.',
  terms: {
    title: 'شروط الطلب',
    items: [
      'بالنسبة للسحابات الجاهزة يكون الحد الأدنى للطلب عادة 1000 قطعة. ويمكن مزج الألوان ضمن الطلب الواحد — أخبرنا بالتوزيع المطلوب وسنؤكده.',
      'تتم الصباغة حسب اللون، لذلك يضاف رسم صباغة قدره 150 يوان صيني لأي لون تقل كميته عن 2000 قطعة.',
      'تستغرق العينة عادة نحو 3 أيام للمواصفات القياسية؛ ويستغرق الإنتاج بالجملة نحو 10 أيام بعد تأكيد العينة وتفاصيل الطلب. أما السحابات بالرول فتسعّر بشكل منفصل.',
    ],
    faqLink: 'اقرأ التفاصيل الكاملة عن الحد الأدنى للطلب والعينات ومواعيد التسليم',
  },
  cardTitle: 'معلومات التواصل',
  responseNote: 'يمكن استخدام WeChat والهاتف وWhatsApp لتأكيد الألوان والمواصفات والعينات ومواعيد التسليم بكفاءة أكبر.',
  wechatLabel: 'WeChat',
  wechatScan: 'امسح الرمز للإضافة على WeChat',
} as const;

const quoteContentRu = {
  metadata: {
    title: 'Запросить цену',
    description: 'Отправьте запрос в Weiwei Zipper через форму, WeChat, телефон или WhatsApp, чтобы получить рекомендации и расчет цены по металлическим, смоляным и нейлоновым молниям.',
  },
  title: 'Запросить цену',
  subtitle: 'Чтобы быстрее перейти к расчету цены, по возможности укажите сферу применения, размер, длину, цвет и требуемое количество.',
  terms: {
    title: 'Условия заказа',
    items: [
      'Для готовых молний минимальный заказ обычно составляет 1000 штук. Цвета можно комбинировать в одном заказе — сообщите нужное распределение, и мы его подтвердим.',
      'Окрашивание организуется по цветам, поэтому для любого цвета в количестве менее 2000 штук взимается плата за окрашивание 150 юаней за этот цвет.',
      'Образец по стандартным спецификациям обычно готов примерно за 3 дня; серийное производство занимает около 10 дней после подтверждения образца и деталей заказа. Молния в рулонах рассчитывается отдельно.',
    ],
    faqLink: 'Полные условия по минимальному заказу, образцам и срокам',
  },
  cardTitle: 'Контактная информация',
  responseNote: 'WeChat, телефон и WhatsApp можно использовать для более оперативного согласования цветов, спецификаций, образцов и сроков поставки.',
  wechatLabel: 'WeChat',
  wechatScan: 'Сканируйте, чтобы добавить в WeChat',
} as const;

const footerContentEn = {
  description: 'Weiwei Zipper focuses on the supply and customization of metal, resin, and nylon zippers, with common size 3, 5, and 8 options that support more efficient sampling, quotation, and bulk purchasing.',
  quickLinksTitle: 'Quick Links',
  contactInfoTitle: 'Contact Information',
  privacy: 'Privacy Policy',
  terms: 'Terms of Service',
} as const;

const footerContentEs = {
  description: 'Weiwei Zipper se centra en el suministro y la personalización de cremalleras metálicas, de resina y de nylon, con opciones comunes en tamaños 3, 5 y 8 para apoyar con mayor eficiencia el muestreo, la cotización y la compra al por mayor.',
  quickLinksTitle: 'Enlaces rápidos',
  contactInfoTitle: 'Información de contacto',
  privacy: 'Política de privacidad',
  terms: 'Términos del servicio',
} as const;

const footerContentAr = {
  description: 'تركز Weiwei Zipper على توريد وتخصيص السحابات المعدنية والراتنجية والنايلون، مع خيارات شائعة بالمقاسات 3 و5 و8 لدعم العينات والتسعير والشراء بالجملة بكفاءة أعلى.',
  quickLinksTitle: 'روابط سريعة',
  contactInfoTitle: 'معلومات التواصل',
  privacy: 'سياسة الخصوصية',
  terms: 'شروط الخدمة',
} as const;

const footerContentRu = {
  description: 'Weiwei Zipper специализируется на поставке и изготовлении на заказ металлических, смоляных и нейлоновых молний, предлагая популярные размеры 3, 5 и 8 для более эффективной работы с образцами, расчетом цены и оптовыми закупками.',
  quickLinksTitle: 'Быстрые ссылки',
  contactInfoTitle: 'Контактная информация',
  privacy: 'Политика конфиденциальности',
  terms: 'Условия обслуживания',
} as const;

const faqSectionIntroEn = {
  title: 'FAQ',
  subtitle: 'Clarifying common questions early helps reduce repeated confirmation and keeps communication and quotation moving more smoothly.',
} as const;

const faqSectionIntroEs = {
  title: 'Preguntas frecuentes',
  subtitle: 'Aclarar las preguntas comunes desde el principio ayuda a reducir confirmaciones repetidas y mantiene la comunicación y la cotización en mejor ritmo.',
} as const;

const faqSectionIntroAr = {
  title: 'الأسئلة الشائعة',
  subtitle: 'توضيح الأسئلة المتكررة في وقت مبكر يساعد على تقليل التأكيدات المتكررة ويحافظ على سلاسة التواصل والتسعير.',
} as const;

const faqSectionIntroRu = {
  title: 'Частые вопросы',
  subtitle: 'Раннее прояснение типовых вопросов помогает сократить число повторных согласований и сделать коммуникацию и расчет цены более плавными.',
} as const;

const blogContentEn = {
  metadata: {
    title: 'Insights',
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

const blogContentEs = {
  metadata: {
    title: 'Artículos',
    description: 'Artículos prácticos de Weiwei Zipper sobre la selección de tamaños 3 / 5 / 8, estructuras abiertas y cerradas, preparación de consultas y mejora de la comunicación de compra.',
  },
  title: 'Artículos',
  subtitle: 'Contenido práctico centrado en selección de tamaños, decisiones de estructura, preparación de consultas y comunicación de compra para proyectos de cremalleras.',
  allArticles: 'Todos los artículos',
  readTimeLabel: 'min de lectura',
  readMoreLabel: 'Leer más',
  backToBlog: 'Volver a artículos',
  authorLabel: 'Autor',
  categories: {
    guide: 'Guía de selección',
    sourcing: 'Consejos de compra',
    general: 'Información del sector',
  },
  faq: {
    title: 'FAQ',
    description: 'Si aún está confirmando tamaño, estructura, cremalleras por rollo, cronograma de muestras o requisitos de cotización, la FAQ es un buen lugar para revisar primero los puntos más comunes.',
    button: 'Ver FAQ',
  },
  cta: {
    title: '¿Tiene ya un proyecto específico?',
    description: 'Puede compartir sus requisitos de producto. Con base en especificaciones comunes y experiencia de suministro, podemos ayudarle a avanzar más rápidamente hacia la cotización y el muestreo.',
    button: 'Solicitar cotización',
    secondary: 'Ver productos',
  },
} as const;

const blogContentAr = {
  metadata: {
    title: 'المقالات',
    description: 'محتوى عملي من Weiwei Zipper حول اختيار مقاسات 3 / 5 / 8، وفهم البنية المفتوحة والمغلقة، وتحضير الاستفسارات وتحسين تواصل الشراء.',
  },
  title: 'المقالات',
  subtitle: 'محتوى عملي يركز على اختيار المقاسات وقرارات البنية وتحضير الاستفسارات والتواصل الشرائي في مشاريع السحابات.',
  allArticles: 'جميع المقالات',
  readTimeLabel: 'دقائق قراءة',
  readMoreLabel: 'اقرأ المزيد',
  backToBlog: 'العودة إلى المقالات',
  authorLabel: 'الكاتب',
  categories: {
    guide: 'دليل الاختيار',
    sourcing: 'نصائح الشراء',
    general: 'معلومات القطاع',
  },
  faq: {
    title: 'الأسئلة الشائعة',
    description: 'إذا كنت لا تزال تؤكد المقاس أو البنية أو طريقة سحابات الرول أو جدول العينات أو متطلبات عرض السعر، فهذه الصفحة مناسبة لمراجعة النقاط الأكثر شيوعا أولا.',
    button: 'عرض الأسئلة الشائعة',
  },
  cta: {
    title: 'هل لديك مشروع محدد حاليا؟',
    description: 'يمكنك مشاركة متطلبات المنتج. وبالاستناد إلى المواصفات الشائعة وخبرة التوريد، يمكننا مساعدتك على الانتقال إلى التسعير والعينات بشكل أسرع.',
    button: 'طلب عرض سعر',
    secondary: 'عرض المنتجات',
  },
} as const;

const blogContentRu = {
  metadata: {
    title: 'Статьи',
    description: 'Практические статьи от Weiwei Zipper о выборе размеров 3 / 5 / 8, различии между разъемными и неразъемными молниями, подготовке запросов и улучшении закупочной коммуникации.',
  },
  title: 'Статьи',
  subtitle: 'Практический контент о выборе размеров, конструкций, подготовке запросов и закупочной коммуникации по молниям.',
  allArticles: 'Все статьи',
  readTimeLabel: 'мин чтения',
  readMoreLabel: 'Читать далее',
  backToBlog: 'Назад к статьям',
  authorLabel: 'Автор',
  categories: {
    guide: 'Руководство по выбору',
    sourcing: 'Советы по закупке',
    general: 'Информация по отрасли',
  },
  faq: {
    title: 'FAQ',
    description: 'Если вы еще уточняете размер, конструкцию, рулонные цепочки, график образцов или требования для расчета цены, сначала удобно посмотреть FAQ с наиболее частыми вопросами.',
    button: 'Смотреть FAQ',
  },
  cta: {
    title: 'У вас уже есть конкретный проект?',
    description: 'Вы можете отправить требования по вашему изделию. Опираясь на распространенные спецификации и опыт поставок, мы поможем быстрее перейти к расчету цены и образцам.',
    button: 'Запросить цену',
    secondary: 'Смотреть продукцию',
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

const inquiryFormContentEs = {
  title: 'Enviar consulta',
  success: 'Su consulta se ha enviado correctamente. Nos pondremos en contacto con usted lo antes posible en horario laboral.',
  error: 'El envío ha fallado. Intente de nuevo más tarde o contáctenos directamente por teléfono o WhatsApp.',
  sectionContact: 'Información de contacto',
  sectionProduct: 'Requisitos del producto',
  fields: {
    name: 'Nombre de contacto',
    email: 'Correo electrónico',
    company: 'Empresa',
    country: 'País / Región',
    phone: 'Teléfono',
    productInterest: 'Interés de producto',
    productModel: 'Notas de estilo / modelo',
    productSize: 'Tamaño / longitud',
    application: 'Aplicación',
    quantity: 'Cantidad',
    message: 'Notas adicionales',
  },
  placeholders: {
    productModel: 'Por ejemplo: resina cerrada, nylon de doble apertura, cremallera metálica decorativa',
    productSize: 'Por ejemplo: tamaño 5, 60 cm, abierta',
    quantity: 'Por ejemplo: 3.000 piezas, o 3 estilos para muestreo primero',
    message: 'Puede agregar aquí color, longitud, estilo de cursor, embalaje, plazo objetivo y cualquier otro detalle.',
  },
  selectProduct: 'Seleccione una categoría',
  productOptions: [
    { value: 'resin-zipper', label: 'Cremallera de resina' },
    { value: 'nylon-zipper', label: 'Cremallera de nylon' },
    { value: 'metal-zipper', label: 'Cremallera metálica' },
    { value: 'custom-zipper', label: 'Desarrollo a medida' },
  ],
  privacyNote: 'Después del envío, la información solo se utilizará para cotización, comunicación de muestras y seguimiento del proyecto, y no se utilizará para fines no relacionados.',
  submit: 'Solicitar cotización',
  submitting: 'Enviando...',
} as const;

const inquiryFormContentAr = {
  title: 'إرسال الاستفسار',
  success: 'تم إرسال استفسارك بنجاح. سنتواصل معك في أقرب وقت ممكن خلال ساعات العمل.',
  error: 'فشل الإرسال. يرجى المحاولة لاحقا أو التواصل معنا مباشرة عبر الهاتف أو WhatsApp.',
  sectionContact: 'معلومات التواصل',
  sectionProduct: 'متطلبات المنتج',
  fields: {
    name: 'اسم جهة الاتصال',
    email: 'البريد الإلكتروني',
    company: 'الشركة',
    country: 'الدولة / المنطقة',
    phone: 'الهاتف',
    productInterest: 'فئة المنتج',
    productModel: 'ملاحظات عن الطراز / الموديل',
    productSize: 'المقاس / الطول',
    application: 'الاستخدام',
    quantity: 'الكمية',
    message: 'ملاحظات إضافية',
  },
  placeholders: {
    productModel: 'مثال: راتنج مغلق، نايلون مزدوج الفتح، سحاب معدني زخرفي',
    productSize: 'مثال: مقاس 5، طول 60 سم، مفتوح',
    quantity: 'مثال: 3000 قطعة، أو 3 موديلات للعينات أولا',
    message: 'يمكنك إضافة اللون والطول ونوع السحاب والتعبئة وموعد التسليم المتوقع وأي تفاصيل أخرى هنا.',
  },
  selectProduct: 'يرجى اختيار الفئة',
  productOptions: [
    { value: 'resin-zipper', label: 'سحاب راتنج' },
    { value: 'nylon-zipper', label: 'سحاب نايلون' },
    { value: 'metal-zipper', label: 'سحاب معدني' },
    { value: 'custom-zipper', label: 'تطوير مخصص' },
  ],
  privacyNote: 'بعد الإرسال، ستستخدم المعلومات فقط لأغراض التسعير والتواصل بشأن العينات ومتابعة المشروع، ولن تستخدم لأغراض غير مرتبطة.',
  submit: 'طلب عرض سعر',
  submitting: 'جارٍ الإرسال...',
} as const;

const inquiryFormContentRu = {
  title: 'Отправить запрос',
  success: 'Ваш запрос успешно отправлен. Мы свяжемся с вами как можно скорее в рабочее время.',
  error: 'Отправка не удалась. Попробуйте позже или свяжитесь с нами напрямую по телефону или WhatsApp.',
  sectionContact: 'Контактная информация',
  sectionProduct: 'Требования к продукции',
  fields: {
    name: 'Контактное лицо',
    email: 'Электронная почта',
    company: 'Компания',
    country: 'Страна / регион',
    phone: 'Телефон',
    productInterest: 'Категория продукции',
    productModel: 'Примечания по модели / стилю',
    productSize: 'Размер / длина',
    application: 'Применение',
    quantity: 'Количество',
    message: 'Дополнительные примечания',
  },
  placeholders: {
    productModel: 'Например: смоляная закрытая, нейлоновая двухзамковая, декоративная металлическая молния',
    productSize: 'Например: размер 5, 60 см, разъемная',
    quantity: 'Например: 3000 штук, или 3 модели сначала на образцы',
    message: 'Здесь можно указать цвет, длину, тип бегунка, упаковку, желаемый срок и любые другие детали.',
  },
  selectProduct: 'Пожалуйста, выберите категорию',
  productOptions: [
    { value: 'resin-zipper', label: 'Смоляная молния' },
    { value: 'nylon-zipper', label: 'Нейлоновая молния' },
    { value: 'metal-zipper', label: 'Металлическая молния' },
    { value: 'custom-zipper', label: 'Индивидуальная разработка' },
  ],
  privacyNote: 'После отправки информация будет использоваться только для расчета цены, обсуждения образцов и сопровождения проекта, без использования в несвязанных целях.',
  submit: 'Запросить цену',
  submitting: 'Отправка...',
} as const;

const siteBrandByLocale = {
  zh: siteBrand,
  en: siteBrandEn,
  es: siteBrandEs,
  ar: siteBrandAr,
  ru: siteBrandRu,
} satisfies Partial<Record<AppLocale, unknown>>;

const navigationContentByLocale = {
  zh: navigationContent,
  en: navigationContentEn,
  es: navigationContentEs,
  ar: navigationContentAr,
  ru: navigationContentRu,
} satisfies Partial<Record<AppLocale, unknown>>;

const homeContentByLocale = {
  zh: homeContent,
  en: homeContentEn,
  es: homeContentEs,
  ar: homeContentAr,
  ru: homeContentRu,
} satisfies Partial<Record<AppLocale, unknown>>;

const useCasesContentByLocale = {
  zh: useCasesContent,
  en: useCasesContentEn,
  es: useCasesContentEs,
  ar: useCasesContentAr,
  ru: useCasesContentRu,
} satisfies Partial<Record<AppLocale, unknown>>;

const aboutContentByLocale = {
  zh: aboutContent,
  en: aboutContentEn,
  es: aboutContentEs,
  ar: aboutContentAr,
  ru: aboutContentRu,
} satisfies Partial<Record<AppLocale, unknown>>;

const contactContentByLocale = {
  zh: contactContent,
  en: contactContentEn,
  es: contactContentEs,
  ar: contactContentAr,
  ru: contactContentRu,
} satisfies Partial<Record<AppLocale, unknown>>;

const quoteContentByLocale = {
  zh: quoteContent,
  en: quoteContentEn,
  es: quoteContentEs,
  ar: quoteContentAr,
  ru: quoteContentRu,
} satisfies Partial<Record<AppLocale, unknown>>;

const footerContentByLocale = {
  zh: footerContent,
  en: footerContentEn,
  es: footerContentEs,
  ar: footerContentAr,
  ru: footerContentRu,
} satisfies Partial<Record<AppLocale, unknown>>;

const faqSectionIntroByLocale = {
  zh: faqSectionIntro,
  en: faqSectionIntroEn,
  es: faqSectionIntroEs,
  ar: faqSectionIntroAr,
  ru: faqSectionIntroRu,
} satisfies Partial<Record<AppLocale, unknown>>;

const blogContentByLocale = {
  zh: blogContent,
  en: blogContentEn,
  es: blogContentEs,
  ar: blogContentAr,
  ru: blogContentRu,
} satisfies Partial<Record<AppLocale, unknown>>;

const inquiryFormContentByLocale = {
  zh: inquiryFormContent,
  en: inquiryFormContentEn,
  es: inquiryFormContentEs,
  ar: inquiryFormContentAr,
  ru: inquiryFormContentRu,
} satisfies Partial<Record<AppLocale, unknown>>;

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
