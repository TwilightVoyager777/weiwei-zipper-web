import { getLocalizedContent, type AppLocale } from '@/localization/content';

export const PRODUCT_SPEC_KEYS = [
  'type',
  'size',
  'length',
  'structure',
  'material',
  'sliderStyle',
  'colorOption',
  'samplingCycle',
  'productionLeadTime',
  'orderType',
  'applicationScope',
  'notes',
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
  inquiryCta: '已有样品、参考图或规格信息？',
  inquiryCtaDescription: '欢迎提供使用场景、规格要求及参考图，我们可先协助确认选型方向，再进一步沟通常用方案与报价安排。',
  inquiryButton: '提交需求',
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
  size: '常用规格',
  length: '长度范围',
  structure: '常见结构',
  material: '材质说明',
  sliderStyle: '拉头 / 牙型',
  colorOption: '颜色方式',
  samplingCycle: '打样周期',
  productionLeadTime: '量产节奏',
  orderType: '适合订单',
  applicationScope: '适用场景',
  notes: '备注',
};

export const PRODUCT_CATEGORIES = [
  'metalZippers',
  'resinZippers',
  'nylonZippers',
  'metalRolls',
  'resinRolls',
  'nylonRolls',
] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];

export const CATEGORY_SLUGS = [
  'metal-zippers',
  'resin-zippers',
  'nylon-zippers',
  'metal-zipper-rolls',
  'resin-zipper-rolls',
  'nylon-zipper-rolls',
] as const;

export type CategorySlug = (typeof CATEGORY_SLUGS)[number];

export const PRODUCT_SLUGS = [
  'metal-zipper-3-5-8',
  'resin-zipper-3-5-8',
  'nylon-zipper-3-5-8',
  'metal-no-5-closed-end-zipper',
  'resin-no-5-closed-end-zipper',
  'nylon-no-5-closed-end-zipper',
  'metal-zipper-roll-3-5-8',
  'resin-zipper-roll-3-5-8',
  'nylon-zipper-roll-3-5-8',
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
    description: '查看伟伟拉链的金属拉链、树脂拉链、尼龙拉链，以及金属码装、树脂码装、尼龙码装六大产品分类信息。',
  },
  title: '产品中心',
  subtitle: '产品中心当前按金属、树脂、尼龙拉链及对应码装六大分类整理，建议先确认品类方向，再进一步沟通规格、结构与数量，这样更便于快速进入样品或报价流程。',
  productsTitle: '常用规格与码装产品',
} as const;

export const categoryOrder: ProductCategory[] = [
  'metalZippers',
  'resinZippers',
  'nylonZippers',
];

export const productsPageCategoryOrder: ProductCategory[] = [
  'metalZippers',
  'resinZippers',
  'nylonZippers',
  'metalRolls',
  'resinRolls',
  'nylonRolls',
];

export const categoryContent: Record<ProductCategory, ProductCategoryContent> = {
  resinZippers: {
    key: 'resinZippers',
    slug: 'resin-zippers',
    name: '树脂拉链',
    description: '主推 3 号 / 5 号 / 8 号常用规格，适合服装、童装、鞋帽等轻量项目配套。',
    overview: '树脂拉链是伟伟拉链当前的重要供应品类之一，主要适用于服装及轻量配件场景。常用 3 号、5 号、8 号规格，便于按款式进一步确认颜色、长度与拉头搭配，适合日常开发、批量采购与返单跟进。',
    keyFeatures: ['配色灵活，适合做常规成衣颜色匹配', '3 号 / 5 号 / 8 号常用规格覆盖完整', '闭尾、开尾、双开方式都可配', '适合服装与鞋帽等轻量使用场景'],
    applications: {
      title: '典型方案',
      items: [
        {
          title: '童装外套拉链',
          description: '优先考虑轻量手感、颜色一致性和常规开合稳定性，常用 3 号 / 5 号树脂拉链，便于与成衣系列配色同步。',
        },
        {
          title: '休闲服饰拉链',
          description: '适合需要颜色匹配和日常穿着手感平衡的常规款式，可按前中、口袋或局部结构确认闭尾、开尾或双开方式。',
        },
        {
          title: '鞋帽配件拉链',
          description: '适合需要轻量配套和颜色统一的鞋帽类项目，便于结合长度、织带和拉头方式推进开发与返单。',
        },
      ],
    },
    selectionGuide: {
      title: '选型建议',
      description: '树脂拉链通常先按成品重量、颜色要求和开合位置确认规格，再进一步判断结构、长度与拉头搭配方式。',
      factors: [
        {
          title: '先看成品风格与颜色',
          description: '如果项目更强调颜色统一和轻量手感，树脂拉链通常更容易做系列化配套。',
        },
        {
          title: '再定规格与结构',
          description: '可先结合前中、口袋或局部装饰位置确认 3 号、5 号或 8 号，以及闭尾、开尾或双开方式。',
        },
        {
          title: '最后确认长度与拉头',
          description: '在颜色和规格方向明确后，再结合款式细节确认长度、拉头样式与打样安排。',
        },
      ],
    },
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
  },
  metalZippers: {
    key: 'metalZippers',
    slug: 'metal-zippers',
    name: '金属拉链',
    description: '适合箱包、靴类、工装及对质感要求更高的款式，常用 3 号 / 5 号 / 8 号规格。',
    overview: '金属拉链更适合强调质感与耐用度的应用场景。伟伟拉链围绕常用 3 号、5 号、8 号规格提供基础配套，适合箱包、工装、靴类及局部装饰类项目的长期使用。',
    keyFeatures: ['外观质感更强，适合有装饰属性的款式', '耐磨耐用，适合箱包和鞋类场景', '可搭配不同拉头样式形成风格差异', '适合中高频返单的固定款式配套'],
    applications: {
      title: '典型方案',
      items: [
        {
          title: '箱包口袋拉链',
          description: '适合对耐磨度和五金质感有要求的箱包项目，可按口袋位、主仓位或局部装饰位进一步确认规格与结构。',
        },
        {
          title: '工装外套拉链',
          description: '更适合强调风格表达和使用强度的工装类款式，常围绕 5 号 / 8 号规格做前中或口袋位配套。',
        },
        {
          title: '鞋履配件拉链',
          description: '适合靴类和鞋履配件等需要稳定开合与金属外观效果的场景，便于结合牙色和拉头风格做整体配套。',
        },
      ],
    },
    selectionGuide: {
      title: '选型建议',
      description: '金属拉链通常先按成品质感、使用强度和安装位置确认规格，再进一步确定牙色、结构与拉头风格。',
      factors: [
        {
          title: '先看使用场景与强度',
          description: '箱包、鞋履和工装项目更关注耐磨度与外观质感，规格选择通常会更偏中等或偏大尺寸。',
        },
        {
          title: '再定规格与牙色',
          description: '在明确使用位置后，可进一步确认 3 号、5 号或 8 号，以及更适合款式风格的五金牙色方向。',
        },
        {
          title: '最后确认拉头与长度',
          description: '规格和牙色确定后，再结合拉头样式、长度与结构安排打样，会更便于后续批量复用。',
        },
      ],
    },
  },
  metalRolls: {
    key: 'metalRolls',
    slug: 'metal-zipper-rolls',
    name: '金属码装',
    description: '适合箱包、鞋类、工装等项目按卷使用或按需裁切加工，常用规格集中在 3 号 / 5 号 / 8 号。',
    overview: '金属码装主要用于后续裁切、装头与成品加工，适合需要保留金属质感并灵活控制长度的项目。伟伟拉链围绕 3 号、5 号、8 号常用规格提供金属码装基础配套，便于客户先确认牙色、织带与拉头方向，再按实际款式安排后道加工。',
    keyFeatures: ['按卷供货，便于批量裁切', '保留金属质感与耐用度', '适合后续装头与成品加工', '适合箱包、鞋帽与工装类项目'],
  },
  resinRolls: {
    key: 'resinRolls',
    slug: 'resin-zipper-rolls',
    name: '树脂码装',
    description: '适合服装、童装、鞋帽等项目按卷使用或按需裁切加工，常用规格集中在 3 号 / 5 号 / 8 号。',
    overview: '树脂码装主要用于后续裁切、装头与成品加工，不是长度已经固定的成品拉链。伟伟拉链围绕 3 号、5 号、8 号常用规格提供树脂码装基础配套，便于客户先确认牙型、颜色与织带方向，再按实际长度安排后道加工。',
    keyFeatures: ['按卷供货，便于批量裁切', '适合后续装头与定长加工', '配色灵活，便于系列化开发', '适合服装与鞋帽等轻量场景'],
  },
  nylonRolls: {
    key: 'nylonRolls',
    slug: 'nylon-zipper-rolls',
    name: '尼龙码装',
    description: '适用于服装、箱包和防晒衣项目按卷使用或按需裁切加工，兼顾顺滑度与配套灵活性。',
    overview: '尼龙码装主要用于后续裁切、装头与成品加工，适合需要兼顾顺滑度和长度灵活性的常见项目。伟伟拉链围绕 3 号、5 号、8 号常用规格提供尼龙码装基础配套，便于客户先确认规格方向，再结合长度、拉头与后道加工方式推进打样或报价。',
    keyFeatures: ['按卷供货，便于定长裁切', '顺滑度稳定，适合高频开合项目', '适合后续装头与成品加工', '适合服装、箱包与防晒衣项目'],
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
      size: '3 号 / 5 号 / 8 号',
      length: '可按需求长度配套',
      structure: '闭尾 / 开尾 / 双开',
      material: '树脂牙链配套常规织带',
      sliderStyle: '可按款式搭配不同拉头',
      colorOption: '支持按色卡沟通',
      samplingCycle: '常规样品可快速安排',
      productionLeadTime: '确认样品后进入批量排单',
      orderType: '适合开发单与返单',
      applicationScope: '服装 / 鞋帽 / 轻量配件',
      notes: '主打常规高频规格，便于稳定复用',
    },
  },
  'resin-zipper-roll-3-5-8': {
    slug: 'resin-zipper-roll-3-5-8',
    category: 'resinRolls',
    name: '树脂码装',
    description: '适合服装、童装、鞋帽等项目按卷使用或按需裁切加工，常用规格集中在 3 号 / 5 号 / 8 号。',
    overview: '树脂码装主要用于后续裁切、装头与成品加工，不是长度已经固定的成品拉链。伟伟拉链围绕 3 号、5 号、8 号常用规格提供树脂码装基础配套，便于客户先确认牙型、颜色与织带方向，再按实际长度安排后道加工。',
    features: ['按卷供货，便于批量裁切', '适合后续装头与定长加工', '配色灵活，便于系列化开发', '适合服装与鞋帽等轻量场景'],
    applications: ['服装加工', '鞋帽加工', '轻量配件'],
    specifications: {
      type: '树脂码装',
      size: '3 号 / 5 号 / 8 号',
      length: '按卷供货，可按需求裁切',
      structure: '卷装链带，不带上下止 / 插销，适合后续装头与定长加工',
      material: '树脂牙链配套常规织带',
      sliderStyle: '拉头可分开配套确认',
      colorOption: '支持按色卡沟通',
      samplingCycle: '可先确认色样与基础配套',
      productionLeadTime: '确认规格后进入配套与排单',
      orderType: '适合加工单、批量裁切与返单',
      applicationScope: '服装加工 / 鞋帽加工 / 轻量配件',
      notes: '码装主要用于后道加工，不同于成品拉链',
    },
  },
  'resin-no-5-closed-end-zipper': {
    slug: 'resin-no-5-closed-end-zipper',
    category: 'resinZippers',
    name: '五号树脂闭口拉链',
    description: '适合服装、童装、鞋帽等常见闭口结构，强调轻量手感、配色灵活与稳定配套。',
    overview: '五号树脂闭口拉链适合需要轻量感和颜色匹配的闭口结构项目。伟伟拉链可围绕长度、颜色、织带与拉头搭配做常规配套，便于客户先完成样品确认，再进入批量采购与后续返单安排。',
    features: ['5 号规格应用范围较广', '闭口结构适合口袋与内袋位', '树脂牙链配色灵活', '支持常规颜色与拉头搭配确认'],
    applications: ['服装口袋', '童装配件', '鞋帽配件'],
    specifications: {
      type: '树脂闭口拉链',
      size: '5 号',
      length: '可按需求长度定制',
      structure: '闭口',
      material: '树脂牙链配套常规织带',
      sliderStyle: '可按款式搭配常规拉头',
      colorOption: '支持色卡、样布或旧样确认',
      samplingCycle: '常规样品可优先安排',
      productionLeadTime: '确认样品后进入批量排单',
      orderType: '适合开发单、常规批量与返单',
      applicationScope: '服装口袋 / 童装配件 / 鞋帽配件',
      notes: '如需特殊长度、颜色或拉头方式，可结合样品进一步确认',
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
      size: '3 号 / 5 号 / 8 号',
      length: '可按需求长度配套',
      structure: '闭尾 / 开尾 / 双开',
      material: '尼龙牙链配套常规织带',
      sliderStyle: '可按使用手感选拉头',
      colorOption: '支持色卡与样衣确认',
      samplingCycle: '常规项目可优先安排打样',
      productionLeadTime: '确认后可进入快返单节奏',
      orderType: '适合常规批量和系列开发',
      applicationScope: '服装 / 箱包 / 防晒衣',
      notes: '适配面广，建议先按使用位置确认规格',
    },
  },
  'nylon-no-5-closed-end-zipper': {
    slug: 'nylon-no-5-closed-end-zipper',
    category: 'nylonZippers',
    name: '五号尼龙闭口拉链',
    description: '适合服装口袋、箱包内袋及轻工配件等常见闭口结构，强调顺滑度、颜色匹配与稳定配套。',
    overview: '五号尼龙闭口拉链是当前较常见的基础规格之一，适合需要闭口结构的服装、箱包及轻工配件项目。伟伟拉链可围绕长度、颜色、织带与拉头搭配做常规配套，便于客户先完成样品确认，再进入批量采购与后续返单安排。',
    features: ['5 号规格适用范围较广', '闭口结构适合口袋与内袋位', '尼龙牙链顺滑度稳定', '支持常规颜色与拉头搭配确认'],
    applications: ['服装口袋', '箱包内袋', '轻工配件'],
    specifications: {
      type: '尼龙闭口拉链',
      size: '5 号',
      length: '可按需求长度定制',
      structure: '闭口',
      material: '尼龙牙链配套常规织带',
      sliderStyle: '可按款式搭配常规拉头',
      colorOption: '支持色卡、样布或旧样确认',
      samplingCycle: '常规样品可优先安排',
      productionLeadTime: '确认样品后进入批量排单',
      orderType: '适合开发单、常规批量与返单',
      applicationScope: '服装口袋 / 箱包内袋 / 轻工配件',
      notes: '如需特殊长度、颜色或拉头方式，可结合样品进一步确认',
    },
  },
  'nylon-zipper-roll-3-5-8': {
    slug: 'nylon-zipper-roll-3-5-8',
    category: 'nylonRolls',
    name: '尼龙码装',
    description: '适用于服装、箱包和防晒衣项目按卷使用或按需裁切加工，兼顾顺滑度与配套灵活性。',
    overview: '尼龙码装主要用于后续裁切、装头与成品加工，适合需要兼顾顺滑度和长度灵活性的常见项目。伟伟拉链围绕 3 号、5 号、8 号常用规格提供尼龙码装基础配套，便于客户先确认规格方向，再结合长度、拉头与后道加工方式推进打样或报价。',
    features: ['按卷供货，便于定长裁切', '顺滑度稳定，适合高频开合项目', '适合后续装头与成品加工', '适合服装、箱包与防晒衣项目'],
    applications: ['服装加工', '箱包加工', '防晒衣加工'],
    specifications: {
      type: '尼龙码装',
      size: '3 号 / 5 号 / 8 号',
      length: '按卷供货，可按需求裁切',
      structure: '卷装链带，不带上下止 / 插销，适合后续装头与定长加工',
      material: '尼龙牙链配套常规织带',
      sliderStyle: '拉头可分开配套确认',
      colorOption: '支持色卡与样衣确认',
      samplingCycle: '可先确认色样、手感与基础配套',
      productionLeadTime: '确认规格后进入配套与排单',
      orderType: '适合系列开发、批量裁切与返单',
      applicationScope: '服装加工 / 箱包加工 / 防晒衣加工',
      notes: '码装更适合需要后续裁切加工的项目',
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
      size: '3 号 / 5 号 / 8 号',
      length: '可按需求长度配套',
      structure: '闭尾 / 开尾 / 双开',
      material: '金属牙链配套常规织带',
      sliderStyle: '可选常规与装饰型拉头',
      colorOption: '支持颜色与五金风格沟通',
      samplingCycle: '打样前先确认表面效果',
      productionLeadTime: '常规返单可复用历史规格',
      orderType: '适合中高频固定款',
      applicationScope: '箱包 / 鞋帽 / 工装',
      notes: '建议结合款式风格确认最终方案',
    },
  },
  'metal-no-5-closed-end-zipper': {
    slug: 'metal-no-5-closed-end-zipper',
    category: 'metalZippers',
    name: '五号金属闭口拉链',
    description: '适合箱包、鞋履、工装配件等常见闭口结构，强调质感、耐磨度与稳定配套。',
    overview: '五号金属闭口拉链适合需要闭口结构且更看重五金质感的款式。伟伟拉链可围绕长度、牙色、织带与拉头搭配做常规配套，便于客户先完成样品确认，再进入批量采购与返单安排。',
    features: ['5 号规格适合常规中等厚度款式', '闭口结构适合口袋与配件位', '金属牙链质感更强且耐磨', '支持常规五金色与拉头配套确认'],
    applications: ['箱包口袋', '鞋履配件', '工装配件'],
    specifications: {
      type: '金属闭口拉链',
      size: '5 号',
      length: '可按需求长度定制',
      structure: '闭口',
      material: '金属牙链配套常规织带',
      sliderStyle: '可按款式搭配常规或装饰型拉头',
      colorOption: '支持颜色与五金色确认',
      samplingCycle: '常规样品可优先安排',
      productionLeadTime: '确认样品后进入批量排单',
      orderType: '适合开发单、常规批量与返单',
      applicationScope: '箱包口袋 / 鞋履配件 / 工装配件',
      notes: '如需特殊长度、牙色或拉头方式，可结合样品进一步确认',
    },
  },
  'metal-zipper-roll-3-5-8': {
    slug: 'metal-zipper-roll-3-5-8',
    category: 'metalRolls',
    name: '金属码装',
    description: '适合箱包、鞋类、工装等项目按卷使用或按需裁切加工，常用规格集中在 3 号 / 5 号 / 8 号。',
    overview: '金属码装主要用于后续裁切、装头与成品加工，适合需要保留金属质感并灵活控制长度的项目。伟伟拉链围绕 3 号、5 号、8 号常用规格提供金属码装基础配套，便于客户先确认牙色、织带与拉头方向，再按实际款式安排后道加工。',
    features: ['按卷供货，便于批量裁切', '保留金属质感与耐用度', '适合后续装头与成品加工', '适合箱包、鞋帽与工装类项目'],
    applications: ['箱包加工', '鞋帽加工', '工装配件'],
    specifications: {
      type: '金属码装',
      size: '3 号 / 5 号 / 8 号',
      length: '按卷供货，可按需求裁切',
      structure: '卷装链带，不带上下止 / 插销，适合后续装头与定长加工',
      material: '金属牙链配套常规织带',
      sliderStyle: '拉头可分开配套确认',
      colorOption: '支持颜色与五金风格沟通',
      samplingCycle: '建议先确认牙色、拉头与后道要求',
      productionLeadTime: '确认规格后进入配套与排单',
      orderType: '适合加工单、固定款返单与批量裁切',
      applicationScope: '箱包加工 / 鞋帽加工 / 工装',
      notes: '码装主要用于后道加工，不同于成品拉链',
    },
  },
};

export const CATEGORY_SLUG_TO_KEY: Record<CategorySlug, ProductCategory> = {
  'metal-zippers': 'metalZippers',
  'resin-zippers': 'resinZippers',
  'nylon-zippers': 'nylonZippers',
  'metal-zipper-rolls': 'metalRolls',
  'resin-zipper-rolls': 'resinRolls',
  'nylon-zipper-rolls': 'nylonRolls',
};

export const CATEGORY_PRODUCTS: Record<CategorySlug, ProductSlug[]> = {
  'metal-zippers': ['metal-no-5-closed-end-zipper'],
  'resin-zippers': ['resin-no-5-closed-end-zipper'],
  'nylon-zippers': ['nylon-no-5-closed-end-zipper'],
  'metal-zipper-rolls': [],
  'resin-zipper-rolls': [],
  'nylon-zipper-rolls': [],
};

export const PRODUCT_IMAGES: Record<ProductSlug, string> = {
  'metal-zipper-3-5-8': '/products/metal-zipper-main.png?v=20260302b',
  'metal-no-5-closed-end-zipper': '/products/metal-zipper-main.png?v=20260302b',
  'metal-zipper-roll-3-5-8': '/products/metal-zipper-main.png?v=20260302b',
  'resin-zipper-3-5-8': '/products/resin-zipper-main.png?v=20260302b',
  'resin-no-5-closed-end-zipper': '/products/resin-zipper-main.png?v=20260302b',
  'resin-zipper-roll-3-5-8': '/products/resin-zipper-main.png?v=20260302b',
  'nylon-zipper-3-5-8': '/products/nylon-zipper-main.png?v=20260302b',
  'nylon-no-5-closed-end-zipper': '/products/nylon-zipper-main.png?v=20260302b',
  'nylon-zipper-roll-3-5-8': '/products/nylon-zipper-main.png?v=20260302b',
};

export const CATEGORY_IMAGES: Record<ProductCategory, string> = {
  metalZippers: '/products/metal-zipper-main.png?v=20260302b',
  resinZippers: '/products/resin-zipper-main.png?v=20260302b',
  nylonZippers: '/products/nylon-zipper-main.png?v=20260302b',
  metalRolls: '/products/metal-zipper-main.png?v=20260302b',
  resinRolls: '/products/resin-zipper-main.png?v=20260302b',
  nylonRolls: '/products/nylon-zipper-main.png?v=20260302b',
};

export const productsPagePrimaryCards = [
  {
    href: '/products/metal-zippers',
    name: categoryContent.metalZippers.name,
    description: categoryContent.metalZippers.description,
    image: CATEGORY_IMAGES.metalZippers,
  },
  {
    href: '/products/resin-zippers',
    name: categoryContent.resinZippers.name,
    description: categoryContent.resinZippers.description,
    image: CATEGORY_IMAGES.resinZippers,
  },
  {
    href: '/products/nylon-zippers',
    name: categoryContent.nylonZippers.name,
    description: categoryContent.nylonZippers.description,
    image: CATEGORY_IMAGES.nylonZippers,
  },
  {
    href: '/products/metal-zipper-rolls',
    name: categoryContent.metalRolls.name,
    description: categoryContent.metalRolls.description,
    image: CATEGORY_IMAGES.metalRolls,
  },
  {
    href: '/products/resin-zipper-rolls',
    name: categoryContent.resinRolls.name,
    description: categoryContent.resinRolls.description,
    image: CATEGORY_IMAGES.resinRolls,
  },
  {
    href: '/products/nylon-zipper-rolls',
    name: categoryContent.nylonRolls.name,
    description: categoryContent.nylonRolls.description,
    image: CATEGORY_IMAGES.nylonRolls,
  },
] as const;

export const productsPageProductOrder: ProductSlug[] = [
  'metal-no-5-closed-end-zipper',
  'resin-no-5-closed-end-zipper',
  'nylon-no-5-closed-end-zipper',
];

export const ALL_PRODUCT_PAGE_SLUGS = [...CATEGORY_SLUGS, ...PRODUCT_SLUGS] as const;

export function isCategorySlug(slug: string): slug is CategorySlug {
  return CATEGORY_SLUGS.includes(slug as CategorySlug);
}

export function isProductSlug(slug: string): slug is ProductSlug {
  return PRODUCT_SLUGS.includes(slug as ProductSlug);
}

const productDetailLabelsEn = {
  overview: 'Product Overview',
  features: 'Key Features',
  specifications: 'Specifications',
  property: 'Item',
  value: 'Details',
  applications: 'Applications',
  faqTitle: 'FAQ',
  inquiryCta: 'Do You Have Samples, Reference Images, or Specifications?',
  inquiryCtaDescription: 'You are welcome to share the application, target specifications, or reference images first. We can help narrow the selection direction before moving into solution and quotation discussion.',
  inquiryButton: 'Send Inquiry',
  ctaTitle: 'Need to Confirm Pricing, Samples, or Lead Time First?',
  ctaDescription: 'After you submit your requirements, we will reply with more suitable suggestions based on common specifications and supply experience.',
  qualityNote: 'The information shown here reflects common sizes and typical applications. The final solution should still be confirmed against the actual style, use requirements, and purchasing schedule.',
  backToProducts: 'Back to Products',
  otherCategories: 'Other Categories',
  viewAll: 'View All',
  requestQuote: 'Get Quote',
  talkToTeam: 'Contact Us',
  viewProducts: 'View Products',
} as const;

const productSpecLabelsEn: Record<ProductSpecKey, string> = {
  type: 'Type',
  size: 'Common Sizes',
  length: 'Length Range',
  structure: 'Common Structures',
  material: 'Material Notes',
  sliderStyle: 'Slider / Teeth Style',
  colorOption: 'Color Options',
  samplingCycle: 'Sampling Cycle',
  productionLeadTime: 'Bulk Lead Time',
  orderType: 'Suitable Order Type',
  applicationScope: 'Applications',
  notes: 'Notes',
};

const productsPageContentEn = {
  metadata: {
    title: 'Products | Weiwei Zipper',
    description: 'Explore six core product directions from Weiwei Zipper: metal zippers, resin zippers, nylon zippers, and the corresponding metal, resin, and nylon zipper rolls.',
  },
  title: 'Products',
  subtitle: 'The product center is organized around six main categories: metal, resin, and nylon zippers, together with the corresponding zipper rolls. We recommend confirming the product direction first, then discussing size, structure, and quantity in more detail.',
  productsTitle: 'Common Products and Zipper Rolls',
} as const;

const categoryContentEn: Record<ProductCategory, ProductCategoryContent> = {
  resinZippers: {
    key: 'resinZippers',
    slug: 'resin-zippers',
    name: 'Resin Zippers',
    description: 'Built around common size 3 / 5 / 8 demand for garments, kidswear, footwear, and other lightweight projects.',
    overview: 'Resin zippers are one of Weiwei Zipper’s core product lines and are widely used in garments and lightweight accessory projects. Common size 3, 5, and 8 options are organized in a way that makes it easier to confirm color, length, and slider matching for development, bulk purchasing, and repeat orders.',
    keyFeatures: ['Flexible color matching for routine garment projects', 'Clear coverage across size 3 / 5 / 8 demand', 'Closed-end, open-end, and two-way options can all be supported', 'Suitable for garments, footwear, and other lighter-use scenarios'],
    applications: {
      title: 'Typical Solutions',
      items: [
        {
          title: 'Kidswear Outerwear Zippers',
          description: 'Usually focused on lightweight feel, color consistency, and stable routine opening and closing, with size 3 / 5 resin solutions often used for coordinated series colors.',
        },
        {
          title: 'Casual Apparel Zippers',
          description: 'Suitable for styles that need balanced color matching and everyday handling feel, with structure further judged by front opening, pocket, or localized sections.',
        },
        {
          title: 'Footwear & Cap Accessory Zippers',
          description: 'Suitable for projects that need lighter supporting parts and unified colors, making it easier to coordinate length, tape, and slider options for development and repeat orders.',
        },
      ],
    },
    selectionGuide: {
      title: 'Selection Guide',
      description: 'Resin zippers are usually selected by looking first at the weight of the finished product, color requirements, and opening position, then confirming structure, length, and slider matching.',
      factors: [
        {
          title: 'Start with product style and color',
          description: 'If the project places more emphasis on unified color and a lighter hand feel, resin zippers are often easier to use in repeated series development.',
        },
        {
          title: 'Then decide size and structure',
          description: 'Based on front openings, pockets, or decorative positions, the project can then narrow down size 3, 5, or 8 together with closed-end, open-end, or two-way structures.',
        },
        {
          title: 'Confirm length and slider last',
          description: 'Once color and size direction are clear, length, slider style, and sample arrangements can be aligned more efficiently.',
        },
      ],
    },
  },
  nylonZippers: {
    key: 'nylonZippers',
    slug: 'nylon-zippers',
    name: 'Nylon Zippers',
    description: 'Suitable for garments, bags, and sun-protective outerwear, with common size 3 / 5 / 8 options.',
    overview: 'Nylon zippers balance smooth operation, flexibility, and broad adaptability, making them a high-frequency choice in garments, bags, and sun-protective outerwear. Weiwei Zipper organizes stable supply mainly around size 3, 5, and 8 demand so customers can move more smoothly through quick-turn development, bulk purchasing, and repeat orders.',
    keyFeatures: ['Stable smoothness for high-frequency opening and closing', 'Better flexibility for light fabrics and softer bag structures', 'Broad color matching range for series development', 'Suitable across sun-protective outerwear, jackets, and backpacks'],
    applications: {
      title: 'Typical Solutions',
      items: [
        {
          title: 'Sun-Protective Outerwear Zippers',
          description: 'Usually focused on lightweight feel, smooth operation, and color consistency, with size 3 / 5 nylon solutions often used for front openings and pocket positions.',
        },
        {
          title: 'Lightweight Jacket Zippers',
          description: 'Suitable for projects that need easier handling and stable repeated use, with open-end or two-way structures judged against the apparel style.',
        },
        {
          title: 'Daily Backpack Zippers',
          description: 'Useful for routine bag projects that need a balance of flexibility and durability, making coordinated development and repeat orders easier to manage.',
        },
      ],
    },
    selectionGuide: {
      title: 'Selection Guide',
      description: 'Nylon zippers are usually selected by first judging fabric thickness, use frequency, and opening position, then confirming size, length, structure, and slider matching.',
      factors: [
        {
          title: 'Start with the use position',
          description: 'Front openings, pockets, side openings, and accessory positions often lead to different preferred sizes.',
        },
        {
          title: 'Then judge fabric and weight',
          description: 'Lighter fabrics often suit lighter sizes, while routine outerwear and bags can often start from size 5.',
        },
        {
          title: 'Finish with color and slider',
          description: 'Once color consistency and slider feel are clear, sampling and bulk scheduling become easier to coordinate.',
        },
      ],
    },
  },
  metalZippers: {
    key: 'metalZippers',
    slug: 'metal-zippers',
    name: 'Metal Zippers',
    description: 'More suitable for bags, footwear, workwear, and styles that require stronger texture and durability, usually within the size 3 / 5 / 8 range.',
    overview: 'Metal zippers are more suitable for applications that emphasize durability and visual texture. Weiwei Zipper mainly supports common size 3, 5, and 8 options in this category, making them useful for bags, workwear, boots, and projects that need stronger decorative presence and long-term reuse.',
    keyFeatures: ['Stronger decorative appearance and visual texture', 'Better suited to durable-use scenarios', 'Can be matched with different slider styles for stronger style variation', 'Suitable for fixed styles with repeat-order potential'],
    applications: {
      title: 'Typical Solutions',
      items: [
        {
          title: 'Bag Pocket Zippers',
          description: 'Suitable for bag projects that require higher abrasion resistance and a stronger hardware feel, with size and structure confirmed according to pocket, main compartment, or decorative positions.',
        },
        {
          title: 'Workwear Jacket Zippers',
          description: 'More suitable for workwear styles that emphasize appearance and strength, often built around size 5 / 8 configurations for front openings or pockets.',
        },
        {
          title: 'Footwear Accessory Zippers',
          description: 'Suitable for boots and footwear accessory positions that need stable opening and closing with a clear metal appearance, making it easier to coordinate tooth color and slider style.',
        },
      ],
    },
    selectionGuide: {
      title: 'Selection Guide',
      description: 'Metal zippers are usually selected by first looking at product texture, use intensity, and installation position, then confirming tooth color, structure, and slider style.',
      factors: [
        {
          title: 'Start with use case and strength requirements',
          description: 'Bag, footwear, and workwear projects often care more about abrasion resistance and hardware appearance, so size selection usually leans toward medium or larger ranges.',
        },
        {
          title: 'Then confirm size and hardware color',
          description: 'Once the use position is clear, the project can narrow down size 3, 5, or 8 together with the more suitable hardware color direction.',
        },
        {
          title: 'Finally confirm slider and length',
          description: 'After size and tooth color are confirmed, slider style, length, and structure can be aligned more efficiently for sampling and later reuse.',
        },
      ],
    },
  },
  metalRolls: {
    key: 'metalRolls',
    slug: 'metal-zipper-rolls',
    name: 'Metal Zipper Rolls',
    description: 'Suitable for bags, footwear, workwear, and other projects that use zipper chain by the roll and cut it as needed, mainly within the size 3 / 5 / 8 range.',
    overview: 'Metal zipper rolls are mainly used for later cutting, slider fitting, and product assembly, making them suitable for projects that need metal texture together with more flexible length control. Weiwei Zipper organizes common size 3, 5, and 8 options here so customers can confirm tooth color, tape, and slider direction before moving into post-processing.',
    keyFeatures: ['Supplied by the roll for easier batch cutting', 'Keeps metal texture and durability', 'Suitable for later slider fitting and product processing', 'Useful for bags, footwear, and workwear projects'],
  },
  resinRolls: {
    key: 'resinRolls',
    slug: 'resin-zipper-rolls',
    name: 'Resin Zipper Rolls',
    description: 'Suitable for garments, kidswear, footwear, and similar projects that use zipper chain by the roll and cut to length later, mainly within the size 3 / 5 / 8 range.',
    overview: 'Resin zipper rolls are used mainly for later cutting, slider fitting, and product processing rather than as fixed-length finished zippers. Weiwei Zipper organizes common size 3, 5, and 8 options here so customers can confirm tooth type, color, and tape direction before final processing arrangements.',
    keyFeatures: ['Supplied by the roll for easier batch cutting', 'Suitable for later slider fitting and cut-to-length processing', 'Flexible color matching for repeated series development', 'Suitable for garments, footwear, and other lighter-use scenarios'],
  },
  nylonRolls: {
    key: 'nylonRolls',
    slug: 'nylon-zipper-rolls',
    name: 'Nylon Zipper Rolls',
    description: 'Suitable for garments, bags, and sun-protective outerwear projects that use zipper chain by the roll and cut it as needed, balancing smooth operation and flexibility.',
    overview: 'Nylon zipper rolls are mainly used for later cutting, slider fitting, and product processing, especially where smooth operation and flexible length handling are both important. Weiwei Zipper organizes common size 3, 5, and 8 options in this category so customers can confirm size direction first, then proceed into sampling or quotation around length, sliders, and post-processing requirements.',
    keyFeatures: ['Supplied by the roll for easier custom cutting', 'Stable smoothness for high-frequency opening and closing', 'Suitable for later slider fitting and finished product processing', 'Useful for garments, bags, and sun-protective outerwear projects'],
  },
};

const productItemsEn: Record<ProductSlug, ProductItemContent> = {
  'resin-zipper-3-5-8': {
    slug: 'resin-zipper-3-5-8',
    category: 'resinZippers',
    name: 'Resin Zippers (Sizes 3 / 5 / 8)',
    description: 'Suitable for garments, kidswear, footwear, and other common styles, with demand concentrated around size 3 / 5 / 8.',
    overview: 'This resin zipper range is more suitable for finished products that need flexible color matching and a lighter hand feel. Around frequent garment and footwear demand, Weiwei Zipper supplies common size 3, 5, and 8 options and can coordinate basic adjustments around length and structure to support development and repeat orders.',
    features: ['Flexible color options', 'Clear common size range', 'Suitable for garment and footwear uses', 'Convenient for sampling and repeat orders'],
    applications: ['Garments', 'Footwear', 'Lightweight accessories'],
    specifications: {
      type: 'Resin Zipper',
      size: 'Sizes 3 / 5 / 8',
      length: 'Can be matched to required lengths',
      structure: 'Closed-end / Open-end / Two-way',
      material: 'Resin teeth with routine zipper tape',
      sliderStyle: 'Different slider styles can be matched by design',
      colorOption: 'Supports communication by color card',
      samplingCycle: 'Routine samples can usually be arranged quickly',
      productionLeadTime: 'Bulk scheduling starts after sample confirmation',
      orderType: 'Suitable for development orders and repeat orders',
      applicationScope: 'Garments / Footwear / Lightweight accessories',
      notes: 'Focused on common high-frequency sizes for stable reuse',
    },
  },
  'resin-zipper-roll-3-5-8': {
    slug: 'resin-zipper-roll-3-5-8',
    category: 'resinRolls',
    name: 'Resin Zipper Roll',
    description: 'Suitable for garments, kidswear, footwear, and similar projects that use zipper chain by the roll and cut it as needed, mainly in sizes 3 / 5 / 8.',
    overview: 'Resin zipper rolls are mainly used for later cutting, slider fitting, and finished product processing rather than as fixed-length finished zippers. Weiwei Zipper supplies common size 3, 5, and 8 resin rolls so customers can confirm tooth type, color, and tape direction first, then arrange post-processing based on actual lengths.',
    features: ['Supplied by the roll for easier batch cutting', 'Suitable for later slider fitting and fixed-length processing', 'Flexible colors for series development', 'Suitable for garments and footwear projects'],
    applications: ['Garment processing', 'Footwear processing', 'Lightweight accessory processing'],
    specifications: {
      type: 'Resin Zipper Roll',
      size: 'Sizes 3 / 5 / 8',
      length: 'Supplied by the roll and can be cut as needed',
      structure: 'Roll chain without top or bottom stops / insertion parts, suitable for later slider fitting and fixed-length processing',
      material: 'Resin teeth with routine zipper tape',
      sliderStyle: 'Sliders can be confirmed separately',
      colorOption: 'Supports color-card communication',
      samplingCycle: 'Color samples and basic matching can be confirmed first',
      productionLeadTime: 'Scheduling begins after specifications are confirmed',
      orderType: 'Suitable for processing orders, batch cutting, and repeat orders',
      applicationScope: 'Garment processing / Footwear processing / Lightweight accessories',
      notes: 'Zipper rolls are mainly used for post-processing and differ from finished zippers',
    },
  },
  'resin-no-5-closed-end-zipper': {
    slug: 'resin-no-5-closed-end-zipper',
    category: 'resinZippers',
    name: 'No. 5 Resin Closed-End Zipper',
    description: 'Suitable for garments, kidswear, and footwear accessories that use closed-end structures, emphasizing lightweight feel, color flexibility, and stable matching.',
    overview: 'The No. 5 resin closed-end zipper suits projects that need closed-end structure together with lighter handling feel and better color coordination. Weiwei Zipper can coordinate common matching around length, color, tape, and sliders so customers can complete sample confirmation first and then move into bulk purchasing and repeat orders.',
    features: ['Size 5 works across a broad range of common projects', 'Closed-end structure suits pockets and inner positions', 'Resin teeth allow flexible color coordination', 'Common colors and sliders can be confirmed routinely'],
    applications: ['Garment pockets', 'Kidswear accessories', 'Footwear accessories'],
    specifications: {
      type: 'Resin Closed-End Zipper',
      size: 'No. 5',
      length: 'Can be customized to required lengths',
      structure: 'Closed-end',
      material: 'Resin teeth with routine zipper tape',
      sliderStyle: 'Routine sliders can be matched by style',
      colorOption: 'Can be confirmed by color card, fabric swatch, or old sample',
      samplingCycle: 'Routine samples can usually be arranged first',
      productionLeadTime: 'Bulk scheduling starts after sample confirmation',
      orderType: 'Suitable for development orders, routine bulk, and repeat orders',
      applicationScope: 'Garment pockets / Kidswear accessories / Footwear accessories',
      notes: 'If special lengths, colors, or sliders are required, they can be confirmed against the sample in more detail',
    },
  },
  'nylon-zipper-3-5-8': {
    slug: 'nylon-zipper-3-5-8',
    category: 'nylonZippers',
    name: 'Nylon Zippers (Sizes 3 / 5 / 8)',
    description: 'Suitable for garments, bags, and sun-protective outerwear, balancing smoothness, flexibility, and lightweight use.',
    overview: 'Nylon zippers are one of the most widely used categories today. Weiwei Zipper focuses mainly on common size 3, 5, and 8 demand in this range, making them suitable for sun-protective outerwear, jackets, backpacks, and other projects that need lightweight feel together with smoother operation and easier series purchasing.',
    features: ['Stable smoothness', 'More suitable for lighter fabrics', 'Suitable for sun-protective outerwear uses', 'Broad range for color matching'],
    applications: ['Garments', 'Bags', 'Sun-protective outerwear'],
    specifications: {
      type: 'Nylon Zipper',
      size: 'Sizes 3 / 5 / 8',
      length: 'Can be matched to required lengths',
      structure: 'Closed-end / Open-end / Two-way',
      material: 'Nylon teeth with routine zipper tape',
      sliderStyle: 'Slider style can be chosen based on handling preference',
      colorOption: 'Supports color card and sample garment confirmation',
      samplingCycle: 'Routine projects can usually enter sampling earlier',
      productionLeadTime: 'Can move into quick repeat-order rhythm after confirmation',
      orderType: 'Suitable for routine bulk and series development',
      applicationScope: 'Garments / Bags / Sun-protective outerwear',
      notes: 'Widely adaptable. It is best to confirm size based on the actual use position first.',
    },
  },
  'nylon-no-5-closed-end-zipper': {
    slug: 'nylon-no-5-closed-end-zipper',
    category: 'nylonZippers',
    name: 'No. 5 Nylon Closed-End Zipper',
    description: 'Suitable for garment pockets, inner bag sections, and other common closed-end positions, emphasizing smooth operation, color matching, and stable routine supply.',
    overview: 'The No. 5 nylon closed-end zipper is one of the most common basic choices today and is suitable for garment, bag, and light accessory projects that need closed-end structures. Weiwei Zipper can coordinate routine matching around length, color, tape, and slider options so customers can complete sample confirmation first and then move into bulk purchasing and later replenishment.',
    features: ['Size 5 works across a broad range of routine projects', 'Closed-end structure suits pockets and inner sections', 'Stable smoothness from nylon teeth', 'Routine color and slider matching can be confirmed'],
    applications: ['Garment pockets', 'Inner bag sections', 'Light accessories'],
    specifications: {
      type: 'Nylon Closed-End Zipper',
      size: 'No. 5',
      length: 'Can be customized to required lengths',
      structure: 'Closed-end',
      material: 'Nylon teeth with routine zipper tape',
      sliderStyle: 'Routine sliders can be matched by style',
      colorOption: 'Can be confirmed by color card, fabric swatch, or old sample',
      samplingCycle: 'Routine samples can usually be arranged first',
      productionLeadTime: 'Bulk scheduling starts after sample confirmation',
      orderType: 'Suitable for development orders, routine bulk, and repeat orders',
      applicationScope: 'Garment pockets / Inner bag sections / Light accessories',
      notes: 'If special lengths, colors, or sliders are required, they can be confirmed against the sample in more detail',
    },
  },
  'nylon-zipper-roll-3-5-8': {
    slug: 'nylon-zipper-roll-3-5-8',
    category: 'nylonRolls',
    name: 'Nylon Zipper Roll',
    description: 'Suitable for garment, bag, and sun-protective outerwear projects that use zipper chain by the roll and cut it as needed, balancing smoothness and processing flexibility.',
    overview: 'Nylon zipper rolls are mainly used for later cutting, slider fitting, and product processing. They suit common projects that need both smooth operation and flexible length handling. Weiwei Zipper supplies common size 3, 5, and 8 nylon rolls so customers can confirm the size direction first, then move into sampling or quotation around length, sliders, and post-processing.',
    features: ['Supplied by the roll for easier custom cutting', 'Stable smoothness for high-frequency opening and closing', 'Suitable for later slider fitting and finished-product processing', 'Useful for garments, bags, and sun-protective outerwear'],
    applications: ['Garment processing', 'Bag processing', 'Sun-protective outerwear processing'],
    specifications: {
      type: 'Nylon Zipper Roll',
      size: 'Sizes 3 / 5 / 8',
      length: 'Supplied by the roll and can be cut as needed',
      structure: 'Roll chain without top or bottom stops / insertion parts, suitable for later slider fitting and fixed-length processing',
      material: 'Nylon teeth with routine zipper tape',
      sliderStyle: 'Sliders can be confirmed separately',
      colorOption: 'Supports color cards and sample garment confirmation',
      samplingCycle: 'Color, handling feel, and basic matching can be confirmed first',
      productionLeadTime: 'Scheduling begins after specifications are confirmed',
      orderType: 'Suitable for series development, batch cutting, and repeat orders',
      applicationScope: 'Garment processing / Bag processing / Sun-protective outerwear processing',
      notes: 'Zipper rolls are more suitable for projects that require later cutting and processing',
    },
  },
  'metal-zipper-3-5-8': {
    slug: 'metal-zipper-3-5-8',
    category: 'metalZippers',
    name: 'Metal Zippers (Sizes 3 / 5 / 8)',
    description: 'More suitable for bags, footwear, workwear, and other styles that require stronger texture and durability.',
    overview: 'Metal zippers place more emphasis on durability and visual texture, making them suitable for bags, boots, workwear, and products with stronger decorative character. Weiwei Zipper currently focuses mainly on common size 3, 5, and 8 options in this range, making them easier to reuse over the long term in fixed styles while keeping supply more stable.',
    features: ['Stronger decorative effect', 'Suitable for durable-use scenarios', 'Can be matched with different style sliders', 'Suitable for fixed-style repeat orders'],
    applications: ['Bags', 'Footwear', 'Workwear accessories'],
    specifications: {
      type: 'Metal Zipper',
      size: 'Sizes 3 / 5 / 8',
      length: 'Can be matched to required lengths',
      structure: 'Closed-end / Open-end / Two-way',
      material: 'Metal teeth with routine zipper tape',
      sliderStyle: 'Routine and decorative slider options available',
      colorOption: 'Supports coordination around tape color and hardware style',
      samplingCycle: 'Surface effect is usually confirmed before sampling',
      productionLeadTime: 'Routine repeat orders can reuse prior specifications',
      orderType: 'Suitable for medium- to high-frequency fixed styles',
      applicationScope: 'Bags / Footwear / Workwear',
      notes: 'It is best to confirm the final solution against the actual style direction',
    },
  },
  'metal-no-5-closed-end-zipper': {
    slug: 'metal-no-5-closed-end-zipper',
    category: 'metalZippers',
    name: 'No. 5 Metal Closed-End Zipper',
    description: 'Suitable for bag, footwear, and workwear accessory positions that use closed-end structures and place more emphasis on texture, abrasion resistance, and stable matching.',
    overview: 'The No. 5 metal closed-end zipper is suitable for styles that require a closed-end structure together with a stronger hardware feel. Weiwei Zipper can coordinate routine matching around length, tooth color, tape, and slider combinations so customers can complete sample confirmation first and then move into bulk purchasing and replenishment.',
    features: ['Size 5 suits routine medium-thickness styles', 'Closed-end structure suits pocket and accessory positions', 'Metal teeth give stronger texture and better wear resistance', 'Routine hardware colors and sliders can be confirmed'],
    applications: ['Bag pockets', 'Footwear accessories', 'Workwear accessories'],
    specifications: {
      type: 'Metal Closed-End Zipper',
      size: 'No. 5',
      length: 'Can be customized to required lengths',
      structure: 'Closed-end',
      material: 'Metal teeth with routine zipper tape',
      sliderStyle: 'Routine or decorative sliders can be matched by style',
      colorOption: 'Supports coordination around tape color and hardware color',
      samplingCycle: 'Routine samples can usually be arranged first',
      productionLeadTime: 'Bulk scheduling starts after sample confirmation',
      orderType: 'Suitable for development orders, routine bulk, and repeat orders',
      applicationScope: 'Bag pockets / Footwear accessories / Workwear accessories',
      notes: 'If special lengths, tooth colors, or sliders are needed, they can be confirmed against the sample in more detail',
    },
  },
  'metal-zipper-roll-3-5-8': {
    slug: 'metal-zipper-roll-3-5-8',
    category: 'metalRolls',
    name: 'Metal Zipper Roll',
    description: 'Suitable for bag, footwear, workwear, and similar projects that use zipper chain by the roll and cut it as needed, mainly in sizes 3 / 5 / 8.',
    overview: 'Metal zipper rolls are used mainly for later cutting, slider fitting, and finished-product processing. They suit projects that need metal texture together with flexible length control. Weiwei Zipper supplies common size 3, 5, and 8 metal rolls so customers can confirm tooth color, tape, and slider direction first before arranging later processing against the actual style.',
    features: ['Supplied by the roll for easier batch cutting', 'Keeps metal texture and durability', 'Suitable for later slider fitting and product processing', 'Useful for bags, footwear, and workwear projects'],
    applications: ['Bag processing', 'Footwear processing', 'Workwear accessories'],
    specifications: {
      type: 'Metal Zipper Roll',
      size: 'Sizes 3 / 5 / 8',
      length: 'Supplied by the roll and can be cut as needed',
      structure: 'Roll chain without top or bottom stops / insertion parts, suitable for later slider fitting and fixed-length processing',
      material: 'Metal teeth with routine zipper tape',
      sliderStyle: 'Sliders can be confirmed separately',
      colorOption: 'Supports coordination around tape color and hardware style',
      samplingCycle: 'It is best to confirm tooth color, sliders, and post-processing requirements first',
      productionLeadTime: 'Scheduling begins after specifications are confirmed',
      orderType: 'Suitable for processing orders, fixed-style repeat orders, and batch cutting',
      applicationScope: 'Bag processing / Footwear processing / Workwear',
      notes: 'Zipper rolls are mainly used for post-processing and differ from finished zippers',
    },
  },
};

const productsPagePrimaryCardsEn = [
  {
    href: '/products/metal-zippers',
    name: categoryContentEn.metalZippers.name,
    description: categoryContentEn.metalZippers.description,
    image: CATEGORY_IMAGES.metalZippers,
  },
  {
    href: '/products/resin-zippers',
    name: categoryContentEn.resinZippers.name,
    description: categoryContentEn.resinZippers.description,
    image: CATEGORY_IMAGES.resinZippers,
  },
  {
    href: '/products/nylon-zippers',
    name: categoryContentEn.nylonZippers.name,
    description: categoryContentEn.nylonZippers.description,
    image: CATEGORY_IMAGES.nylonZippers,
  },
  {
    href: '/products/metal-zipper-rolls',
    name: categoryContentEn.metalRolls.name,
    description: categoryContentEn.metalRolls.description,
    image: CATEGORY_IMAGES.metalRolls,
  },
  {
    href: '/products/resin-zipper-rolls',
    name: categoryContentEn.resinRolls.name,
    description: categoryContentEn.resinRolls.description,
    image: CATEGORY_IMAGES.resinRolls,
  },
  {
    href: '/products/nylon-zipper-rolls',
    name: categoryContentEn.nylonRolls.name,
    description: categoryContentEn.nylonRolls.description,
    image: CATEGORY_IMAGES.nylonRolls,
  },
] as const;

const productDetailLabelsByLocale = {
  zh: productDetailLabels,
  en: productDetailLabelsEn,
} satisfies Record<AppLocale, unknown>;

const productSpecLabelsByLocale = {
  zh: productSpecLabels,
  en: productSpecLabelsEn,
} satisfies Record<AppLocale, unknown>;

const productsPageContentByLocale = {
  zh: productsPageContent,
  en: productsPageContentEn,
} satisfies Record<AppLocale, unknown>;

const categoryContentByLocale = {
  zh: categoryContent,
  en: categoryContentEn,
} satisfies Record<AppLocale, unknown>;

const productItemsByLocale = {
  zh: productItems,
  en: productItemsEn,
} satisfies Record<AppLocale, unknown>;

const productsPagePrimaryCardsByLocale = {
  zh: productsPagePrimaryCards,
  en: productsPagePrimaryCardsEn,
} satisfies Record<AppLocale, unknown>;

export function getProductDetailLabels(locale: string) {
  return getLocalizedContent(productDetailLabelsByLocale, locale);
}

export function getProductSpecLabels(locale: string) {
  return getLocalizedContent(productSpecLabelsByLocale, locale);
}

export function getProductsPageContent(locale: string) {
  return getLocalizedContent(productsPageContentByLocale, locale);
}

export function getCategoryContent(locale: string) {
  return getLocalizedContent(categoryContentByLocale, locale);
}

export function getProductItems(locale: string) {
  return getLocalizedContent(productItemsByLocale, locale);
}

export function getProductsPagePrimaryCards(locale: string) {
  return getLocalizedContent(productsPagePrimaryCardsByLocale, locale);
}
