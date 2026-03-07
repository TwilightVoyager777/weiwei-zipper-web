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
  whatsapp: '+86 13906892467',
  whatsappUrl: 'https://wa.me/8613906892467',
  businessHours: '周一至周六 08:30-18:00（北京时间）',
  responseTime: '工作时段内优先回复',
  logoPath: '/brand/weiwei-zipper-logo.png',
  logoAlt: '伟伟拉链商标',
  currentAddress: '浙江省义乌市国际商贸城三区59门三楼2街27449',
  historicalAddressNote: '',
  wechatQrPath: '/brand/wechat-qr-code.png',
  wechatId: 'x13906892467',
  foundedYear: '2013',
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
    title: '伟伟拉链 | 3/5/8 号树脂、尼龙、金属拉链工厂',
    description: '伟伟拉链专注树脂拉链、尼龙拉链、金属拉链现货与定制，覆盖 3 号 / 5 号 / 8 号规格，适用于服装、箱包、鞋帽及防晒衣项目打样与量产。',
  },
  hero: {
    badges: ['工厂直供', '支持打样', '支持来样定制'],
    title: '伟伟拉链',
    subtitle: '伟伟拉链专注为服装、箱包、鞋帽客户提供树脂拉链、尼龙拉链、金属拉链配套，覆盖 3 号 / 5 号 / 8 号常用规格，支持打样确认、批量采购与稳定返单。',
    primaryCta: '查看产品',
    secondaryCta: '获取报价',
    stats: [
      { label: '常备规格', value: '3 / 5 / 8 号' },
      { label: '主推品类', value: '树脂 / 尼龙 / 金属' },
      { label: '适用行业', value: '服装 / 箱包 / 鞋帽' },
    ],
  },
  trust: {
    title: '为什么客户选择伟伟拉链',
    items: [
      {
        title: '常用规格供应更稳',
        description: '围绕 3 号、5 号、8 号高频需求建立常规配套逻辑，便于样品开发、批量采购和后续补单。',
        points: ['常规码装与成品拉链均可配套', '闭尾、开尾、双开结构可按需确认', '颜色与拉头可结合款式统一匹配', '减少重复沟通带来的确认成本'],
      },
      {
        title: '样品确认更高效',
        description: '可结合色卡、样卡、样衣或旧样确认细节，先完成样品验证，再进入批量安排。',
        points: ['支持寄样核色与基础测试确认', '支持来样复刻常用结构', '可配合开发季小批量打样', '缩短从选型到出样的沟通路径'],
      },
      {
        title: '交期与返单更可控',
        description: '常规款可优先安排备料，规格确认后可更快进入排单流程，适合快反项目与持续返单。',
        points: ['常规颜色与规格更便于快速安排', '返单项目可复用既有确认记录', '急单可根据排产情况优先协调', '关键节点可同步反馈进度'],
      },
      {
        title: '业务沟通更直接',
        description: '支持电话、微信、WhatsApp 多渠道同步沟通，便于快速确认规格、颜色、样品与交期。',
        points: ['同一号码同步管理沟通记录', '工作时段内优先回复需求', '支持图片与视频快速确认细节', '适合跨地区项目持续跟进'],
      },
    ],
  },
  featuredProducts: {
    title: '产品分类',
    subtitle: '围绕实际采购需求整理树脂、尼龙、金属三大常用品类，便于先明确材质方向，再进一步确认规格、结构与交付细节。',
  },
  useCasesPreview: {
    title: '常用场景',
    subtitle: '先按成品用途判断使用方向，再确认材质和规格，可更高效进入报价与打样沟通。',
  },
  bottomCta: {
    title: '已有明确款式或采购需求？',
    description: '欢迎提供使用场景、规格、长度、颜色及需求数量，我们将结合现有配套经验尽快协助你确认方案并进入报价。',
    primaryCta: '获取报价',
    secondaryCta: '查看产品',
  },
} as const;

export const useCasesContent = {
  metadata: {
    title: '应用场景 | 伟伟拉链',
    description: '伟伟拉链面向服装、箱包、鞋帽等常用成品场景，提供更稳定的 3 号 / 5 号 / 8 号拉链配套。',
  },
  title: '应用场景',
  subtitle: '将常用规格放入实际成品场景中判断，更便于快速确认适配方向。',
  introText: '伟伟拉链目前主要服务于服装、箱包、鞋帽三类常见场景。不同应用对顺滑度、耐用度、颜色一致性和返单稳定性的要求各不相同，因此我们通常先按用途判断方向，再进一步确认材质、规格与结构，让沟通更聚焦、报价更高效。',
  keyLabel: '场景重点：',
  items: [
    {
      slug: 'apparel',
      name: '服装',
      description: '适用于夹克、卫衣、裤装、童装、防晒衣等款式，重点关注顺滑度、轻量感、颜色匹配和反复拉合稳定性。',
      focus: '常用 3 号 / 5 号；树脂和尼龙使用更广，可按版型匹配开尾、闭尾和双开。',
    },
    {
      slug: 'bags',
      name: '箱包',
      description: '适用于书包、旅行包、收纳包、工具包等，重点关注耐用度、咬合稳定性和大批量配套一致性。',
      focus: '常用 5 号 / 8 号；尼龙与金属拉链更常见，可按结构搭配不同拉头。',
    },
    {
      slug: 'footwear',
      name: '鞋帽',
      description: '适用于靴子、功能鞋、帽包配件等，重点关注耐磨、易操作和成品装配效率。',
      focus: '常用 3 号 / 5 号；金属与树脂方案更常见，适合做局部装饰和功能开合。',
    },
  ],
  whyChoose: {
    title: '伟伟拉链的配套思路',
    items: [
      {
        title: '先确认成品用途',
        description: '先明确项目属于服装、箱包还是鞋帽，再判断更合适的材质与规格组合。',
      },
      {
        title: '再确认规格与结构',
        description: '围绕 3 号 / 5 号 / 8 号常见需求，进一步确认长度、开合方式、颜色与拉头细节。',
      },
      {
        title: '再进入打样与量产',
        description: '先完成样品确认，再进入量产与返单流程，有助于提升后续配套的连续性与稳定性。',
      },
    ],
  },
  ctaTitle: '已有样衣、样包或旧样？',
  ctaDescription: '欢迎直接提供实物图、旧样或规格信息，我们可据此更快判断适合的拉链类型与常用规格。',
  ctaPrimary: '获取报价',
  ctaSecondary: '查看产品',
} as const;

export const aboutContent = {
  metadata: {
    title: '关于我们 | 伟伟拉链',
    description: '了解伟伟拉链的工厂配套思路、主要服务方式和稳定供货能力。',
  },
  title: '关于我们',
  subtitle: '我们更关注把规格确认、交付节奏与返单流程配合好，而不仅仅是提供单一产品参数。',
  story: {
    title: '我们的业务方向',
    paragraphs: [
      '伟伟拉链长期聚焦树脂拉链、尼龙拉链、金属拉链三大类配套，重点服务客户在开发、打样、采购与返单过程中最常见的规格、颜色、长度及交期需求。',
      '我们并不追求覆盖所有细分品类，而是把 3 号、5 号、8 号这类高频规格做得更稳定，帮助服装、箱包、鞋帽客户更快完成选型并进入采购流程。',
      '从样品确认到批量出货，我们更关注减少反复沟通与重复确认，让每一次配套都更直接、更清晰，也更适合长期合作。'
    ],
  },
  capabilities: {
    title: '当前配套重点',
    items: [
      { value: '3 类', label: '主推材质' },
      { value: '3 / 5 / 8', label: '常备规格' },
      { value: '服装', label: '高频场景' },
      { value: '箱包', label: '高频场景' },
      { value: '鞋帽', label: '高频场景' },
      { value: '快返单', label: '沟通目标' },
    ],
  },
  mission: {
    title: '合作方式',
    items: [
      {
        title: '先对版',
        description: '先把拉链类型、规格、颜色和长度确认准确，避免后面批量返工。',
      },
      {
        title: '再控节奏',
        description: '把打样、确认、排单和补单节奏做清楚，让时间节点更可控。',
      },
      {
        title: '长期复用',
        description: '同一客户的常用规格沉淀下来后，后续返单效率会明显提升。',
      },
    ],
  },
} as const;

export const contactContent = {
  metadata: {
    title: '联系伟伟拉链 | 获取报价',
    description: '通过电话、微信或 WhatsApp 联系伟伟拉链，获取树脂、尼龙、金属拉链的配套建议与报价。',
  },
  title: '联系我们',
  subtitle: '如需更快进入有效报价流程，请尽量一并提供用途、规格、长度、颜色和需求数量。',
  cardTitle: '联系信息',
  responseNote: '支持微信、电话、WhatsApp 同步沟通，便于快速确认颜色、规格、样品安排与交期信息。',
  wechatLabel: '微信沟通',
  wechatScan: '扫码添加微信',
} as const;

export const footerContent = {
  description: '伟伟拉链专注树脂、尼龙、金属三大类拉链供应与定制，常用 3 号 / 5 号 / 8 号规格可更高效进入打样、报价与批量采购流程。',
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
    description: '伟伟拉链的选型建议、打样沟通和返单经验。',
  },
  title: '资讯',
  subtitle: '围绕选型、打样、采购和返单等环节，整理常见问题与沟通要点。',
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
  sectionOrder: '订单信息',
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
    incoterms: '贸易条款',
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
  selectIncoterms: '请选择贸易条款',
  incotermsOptions: [
    { value: 'fob', label: 'FOB' },
    { value: 'cif', label: 'CIF' },
    { value: 'cfr', label: 'CFR' },
    { value: 'ddp', label: 'DDP' },
    { value: 'exw', label: 'EXW' },
    { value: 'other', label: '其他' },
  ],
  privacyNote: '提交后，我们仅将相关信息用于报价、打样沟通及后续业务跟进，不会用于与本次需求无关的用途。',
  submit: '获取报价',
  submitting: '提交中...',
} as const;
