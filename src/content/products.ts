export const PRODUCT_SPEC_KEYS = [
  'type',
  'boreDiameter',
  'outerDiameter',
  'width',
  'material',
  'cageType',
  'precisionClass',
  'speedRating',
  'dynamicLoad',
  'staticLoad',
  'sealOptions',
  'standards',
] as const;

export type ProductSpecKey = (typeof PRODUCT_SPEC_KEYS)[number];

export const productDetailLabels = {
  overview: '产品概览',
  features: '核心特点',
  specifications: '规格参考',
  property: '项目',
  value: '内容',
  applications: '适用场景',
  faqTitle: '常见问题',
  inquiryCta: '有旧样或参考图可供确认？',
  inquiryCtaDescription: '欢迎提供用途、规格及参考图，我们可先协助你缩小选型范围并确认常用方案。',
  ctaTitle: '需要先确认价格、打样或交期安排？',
  ctaDescription: '提交需求后，我们将结合现有规格与配套经验，尽快回复更合适的建议。',
  qualityNote: '页面展示为常用规格与典型应用场景，最终方案仍建议结合实际款式、使用要求及采购节奏确认。',
  backToProducts: '返回产品中心',
  otherCategories: '其他品类',
  viewAll: '查看全部',
  requestQuote: '获取报价',
  talkToTeam: '直接沟通',
  viewProducts: '查看产品',
} as const;

export const productSpecLabels: Record<ProductSpecKey, string> = {
  type: '品类',
  boreDiameter: '常用规格',
  outerDiameter: '长度范围',
  width: '常见结构',
  material: '材质说明',
  cageType: '拉头 / 牙型',
  precisionClass: '颜色方式',
  speedRating: '打样周期',
  dynamicLoad: '量产节奏',
  staticLoad: '适合订单',
  sealOptions: '适用场景',
  standards: '备注',
};

export const PRODUCT_CATEGORIES = [
  'metalZippers',
  'resinZippers',
  'nylonZippers',
] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];

export const CATEGORY_SLUGS = [
  'metal-zippers',
  'resin-zippers',
  'nylon-zippers',
] as const;

export type CategorySlug = (typeof CATEGORY_SLUGS)[number];

export const PRODUCT_SLUGS = [
  'metal-zipper-3-5-8',
  'resin-zipper-3-5-8',
  'nylon-zipper-3-5-8',
] as const;

export type ProductSlug = (typeof PRODUCT_SLUGS)[number];

export type ProductCategoryContent = {
  key: ProductCategory;
  slug: CategorySlug;
  name: string;
  description: string;
  overview: string;
  keyFeatures: string[];
  applications?: {
    title: string;
    items: { title: string; description: string }[];
  };
  selectionGuide?: {
    title: string;
    description: string;
    factors: { title: string; description: string }[];
  };
  faq?: { question: string; answer: string }[];
};

export type ProductItemContent = {
  slug: ProductSlug;
  category: ProductCategory;
  name: string;
  description: string;
  overview: string;
  features: string[];
  applications: string[];
  specifications: Record<ProductSpecKey, string>;
};

export const productsPageContent = {
  metadata: {
    title: '产品中心 | 伟伟拉链',
    description: '查看伟伟拉链的树脂拉链、尼龙拉链、金属拉链分类与 3 号 / 5 号 / 8 号常用规格信息。',
  },
  title: '产品中心',
  subtitle: '建议先确认品类方向，再进一步沟通规格、结构与数量，这样更便于快速进入样品或报价流程。',
} as const;

export const categoryOrder: ProductCategory[] = [
  'metalZippers',
  'resinZippers',
  'nylonZippers',
];

export const categoryContent: Record<ProductCategory, ProductCategoryContent> = {
  resinZippers: {
    key: 'resinZippers',
    slug: 'resin-zippers',
    name: '树脂拉链',
    description: '主推 3 号 / 5 号 / 8 号常用规格，适合服装、童装、鞋帽等轻量项目配套。',
    overview: '树脂拉链是伟伟拉链当前的重要供应品类之一，主要适用于服装及轻量配件场景。常用 3 号、5 号、8 号规格，便于按款式进一步确认颜色、长度与拉头搭配，适合日常开发、批量采购与返单跟进。',
    keyFeatures: ['配色灵活，适合做常规成衣颜色匹配', '3 号 / 5 号 / 8 号常用规格覆盖完整', '闭尾、开尾、双开方式都可配', '适合服装与鞋帽等轻量使用场景'],
  },
  nylonZippers: {
    key: 'nylonZippers',
    slug: 'nylon-zippers',
    name: '尼龙拉链',
    description: '适合服装、箱包与防晒衣项目，常用 3 号 / 5 号 / 8 号规格。',
    overview: '尼龙拉链兼顾顺滑度、柔韧性和广泛适配性，是服装、箱包和防晒衣项目中的高频应用品类。伟伟拉链围绕 3 号、5 号、8 号常用规格建立稳定配套，便于快反开发、批量采购与持续返单。',
    keyFeatures: ['顺滑度稳定，适合高频拉合场景', '柔韧性更好，适合轻薄面料与软包结构', '颜色匹配空间大，适合系列化开发', '可覆盖防晒衣、外套、背包等多场景'],
    applications: {
      title: '典型方案',
      items: [
        {
          title: '防晒衣拉链',
          description: '优先考虑轻量、顺滑和颜色一致性，常用 3 号 / 5 号尼龙拉链，适合做前中开合与口袋位。',
        },
        {
          title: '轻便外套拉链',
          description: '注重拉合顺手和反复使用稳定性，可按成衣版型匹配开尾或双开结构。',
        },
        {
          title: '日常背包拉链',
          description: '适合需要兼顾柔韧和耐用的常规箱包款，便于成套开发与返单。',
        },
      ],
    },
    selectionGuide: {
      title: '选型建议',
      description: '尼龙拉链通常先按面料厚薄、使用频率和开合位置确认规格，再决定长度、结构与拉头搭配。',
      factors: [
        {
          title: '先定使用位置',
          description: '前中、口袋、侧开或帽包配件的位置不同，优先规格会不同。',
        },
        {
          title: '再看面料和重量',
          description: '轻薄面料更适合轻量规格，常规外套或箱包可优先考虑 5 号。',
        },
        {
          title: '最后看颜色与拉头',
          description: '确认颜色一致性和拉头手感后，再进入打样和批量排单。',
        },
      ],
    },
    faq: [
      {
        question: '防晒衣为什么更常用尼龙拉链？',
        answer: '因为尼龙拉链更轻、更柔和，顺滑度更稳定，适合轻薄面料和高频开合的使用体验。',
      },
      {
        question: '尼龙拉链常用什么规格？',
        answer: '当前高频需求集中在 3 号、5 号、8 号，具体还是看成衣或箱包的结构需求。',
      },
      {
        question: '可以先打样再量产吗？',
        answer: '可以，建议先确认规格、颜色、长度和拉头方式，样品通过后再进入批量排单。',
      },
    ],
  },
  metalZippers: {
    key: 'metalZippers',
    slug: 'metal-zippers',
    name: '金属拉链',
    description: '适合箱包、靴类、工装及对质感要求更高的款式，常用 3 号 / 5 号 / 8 号规格。',
    overview: '金属拉链更适合强调质感与耐用度的应用场景。伟伟拉链围绕常用 3 号、5 号、8 号规格提供基础配套，适合箱包、工装、靴类及局部装饰类项目的长期使用。',
    keyFeatures: ['外观质感更强，适合有装饰属性的款式', '耐磨耐用，适合箱包和鞋类场景', '可搭配不同拉头样式形成风格差异', '适合中高频返单的固定款式配套'],
  },
};

export const productItems: Record<ProductSlug, ProductItemContent> = {
  'resin-zipper-3-5-8': {
    slug: 'resin-zipper-3-5-8',
    category: 'resinZippers',
    name: '树脂拉链（3 / 5 / 8 号）',
    description: '适合服装、童装、鞋帽等常见款式，常用规格集中在 3 号 / 5 号 / 8 号。',
    overview: '这类树脂拉链更适合对颜色匹配和轻量手感有要求的成品。伟伟拉链围绕服装与鞋帽客户的高频需求，提供 3 号、5 号、8 号常用规格，并可根据长度与结构进行基础配套调整，便于开发与返单复用。',
    features: ['颜色选择灵活', '常用规格清晰', '适合服装和鞋帽场景', '便于打样和返单'],
    applications: ['服装', '鞋帽', '轻量配件'],
    specifications: {
      type: '树脂拉链',
      boreDiameter: '3 号 / 5 号 / 8 号',
      outerDiameter: '可按需求长度配套',
      width: '闭尾 / 开尾 / 双开',
      material: '树脂牙链配套常规织带',
      cageType: '可按款式搭配不同拉头',
      precisionClass: '支持按色卡沟通',
      speedRating: '常规样品可快速安排',
      dynamicLoad: '确认样品后进入批量排单',
      staticLoad: '适合开发单与返单',
      sealOptions: '服装 / 鞋帽 / 轻量配件',
      standards: '主打常规高频规格，便于稳定复用',
    },
  },
  'nylon-zipper-3-5-8': {
    slug: 'nylon-zipper-3-5-8',
    category: 'nylonZippers',
    name: '尼龙拉链（3 / 5 / 8 号）',
    description: '适用于服装、箱包和防晒衣项目，兼顾顺滑度、柔韧性和轻量需求。',
    overview: '尼龙拉链是当前应用范围较广的一类。伟伟拉链重点围绕 3 号、5 号、8 号常规规格提供配套，适用于防晒衣、外套、背包等对轻量与顺滑体验有要求的项目，也便于系列化采购。',
    features: ['顺滑度稳定', '更适合轻薄面料', '可覆盖防晒衣场景', '颜色匹配空间大'],
    applications: ['服装', '箱包', '防晒衣拉链'],
    specifications: {
      type: '尼龙拉链',
      boreDiameter: '3 号 / 5 号 / 8 号',
      outerDiameter: '可按需求长度配套',
      width: '闭尾 / 开尾 / 双开',
      material: '尼龙牙链配套常规织带',
      cageType: '可按使用手感选拉头',
      precisionClass: '支持色卡与样衣确认',
      speedRating: '常规项目可优先安排打样',
      dynamicLoad: '确认后可进入快返单节奏',
      staticLoad: '适合常规批量和系列开发',
      sealOptions: '服装 / 箱包 / 防晒衣',
      standards: '适配面广，建议先按使用位置确认规格',
    },
  },
  'metal-zipper-3-5-8': {
    slug: 'metal-zipper-3-5-8',
    category: 'metalZippers',
    name: '金属拉链（3 / 5 / 8 号）',
    description: '更适合箱包、鞋类、工装等对质感和耐用度要求更高的款式。',
    overview: '金属拉链更强调耐用性和外观质感，适合箱包、靴类、工装及装饰性较强的产品。伟伟拉链当前以 3 号、5 号、8 号常用规格为主，便于客户在固定款式中长期复用并保持配套稳定。',
    features: ['装饰感更强', '适合耐用型场景', '可配不同风格拉头', '适合固定款返单'],
    applications: ['箱包', '鞋帽', '工装配件'],
    specifications: {
      type: '金属拉链',
      boreDiameter: '3 号 / 5 号 / 8 号',
      outerDiameter: '可按需求长度配套',
      width: '闭尾 / 开尾 / 双开',
      material: '金属牙链配套常规织带',
      cageType: '可选常规与装饰型拉头',
      precisionClass: '支持颜色与五金风格沟通',
      speedRating: '打样前先确认表面效果',
      dynamicLoad: '常规返单可复用历史规格',
      staticLoad: '适合中高频固定款',
      sealOptions: '箱包 / 鞋帽 / 工装',
      standards: '建议结合款式风格确认最终方案',
    },
  },
};

export const CATEGORY_SLUG_TO_KEY: Record<CategorySlug, ProductCategory> = {
  'resin-zippers': 'resinZippers',
  'nylon-zippers': 'nylonZippers',
  'metal-zippers': 'metalZippers',
};

export const CATEGORY_PRODUCTS: Record<CategorySlug, ProductSlug[]> = {
  'resin-zippers': ['resin-zipper-3-5-8'],
  'nylon-zippers': ['nylon-zipper-3-5-8'],
  'metal-zippers': ['metal-zipper-3-5-8'],
};

export const PRODUCT_IMAGES: Record<ProductSlug, string> = {
  'resin-zipper-3-5-8': '/home/resinzipper.png?v=20260302b',
  'nylon-zipper-3-5-8': '/home/nylonzipper.png?v=20260302b',
  'metal-zipper-3-5-8': '/home/metalzipper.png?v=20260302b',
};

export const CATEGORY_IMAGES: Record<ProductCategory, string> = {
  resinZippers: '/home/resinzipper.png?v=20260302b',
  nylonZippers: '/home/nylonzipper.png?v=20260302b',
  metalZippers: '/home/metalzipper.png?v=20260302b',
};

export const ALL_PRODUCT_PAGE_SLUGS = [...CATEGORY_SLUGS, ...PRODUCT_SLUGS] as const;

export function isCategorySlug(slug: string): slug is CategorySlug {
  return CATEGORY_SLUGS.includes(slug as CategorySlug);
}

export function isProductSlug(slug: string): slug is ProductSlug {
  return PRODUCT_SLUGS.includes(slug as ProductSlug);
}
