import { getLocalizedContent } from '@/localization/content';

const yiwuZipperLandingZh = {
  metadata: {
    title: '义乌拉链厂家 | 义乌国际商贸城三区拉链批发 | 伟伟拉链',
    description:
      '伟伟拉链长期服务义乌拉链批发与出口配套需求，位于义乌国际商贸城三区，主营金属拉链、树脂拉链、尼龙拉链及码装产品，适合服装、箱包、鞋帽项目。',
  },
  title: '义乌拉链厂家与拉链批发配套',
  subtitle:
    '伟伟拉链长期面向来义乌寻找拉链厂家、拉链批发和长期配套资源的客户，提供金属、树脂、尼龙拉链及对应码装产品，便于围绕规格、结构、颜色与交付安排快速推进。',
  intro:
    '如果你正在义乌寻找更稳定的拉链供应商，通常最关键的不只是价格，而是规格是否清楚、样品是否顺利、批量是否稳定，以及后续返单能否持续配合。伟伟拉链经营地址位于义乌国际商贸城三区，长期围绕服装、箱包、鞋帽等项目提供常用拉链配套，便于客户从询样、报价到批量采购更顺畅地衔接。',
  highlightsTitle: '为什么许多客户会在义乌选择伟伟拉链',
  highlights: [
    {
      title: '国际商贸城对接更直接',
      description: '对于来义乌国际商贸城找拉链批发和现货配套的客户来说，面对面确认规格、颜色、结构和样品细节会更高效。',
    },
    {
      title: '常用品类更集中',
      description: '围绕金属、树脂、尼龙拉链及码装产品建立常用配套，便于快速进入 3 号、5 号、8 号等高频规格的沟通。',
    },
    {
      title: '更适合长期返单',
      description: '在规格、颜色和拉头搭配确认后，后续返单和批量采购更容易复用既有方案，减少重复确认成本。',
    },
  ],
  categoriesTitle: '常见采购方向',
  categories: [
    {
      title: '金属拉链',
      description: '适合强调质感、耐用度和强度的箱包、工装、鞋靴及装饰性项目。',
      href: '/products/metal-zippers',
    },
    {
      title: '树脂拉链',
      description: '更适合服装、童装、鞋帽及轻量项目，便于做颜色系列化配套。',
      href: '/products/resin-zippers',
    },
    {
      title: '尼龙拉链',
      description: '适合服装、箱包、防晒衣等项目，兼顾顺滑度、柔韧性与轻量需求。',
      href: '/products/nylon-zippers',
    },
  ],
  checklistTitle: '在义乌询价前建议先确认的内容',
  checklist: [
    '拉链材质方向：金属、树脂、尼龙还是码装。',
    '规格大小：常用 3 号、5 号、8 号是否符合项目需求。',
    '结构方式：闭尾、开尾、双开或后续裁切加工。',
    '长度、颜色、拉头搭配和大致需求数量。',
    '是否需要先打样、核色或参考旧样推进。',
  ],
  ctaTitle: '已有样品、参考图或明确采购需求？',
  ctaDescription: '欢迎直接提交规格、长度、颜色、数量和使用场景，我们会尽快协助确认方案并进入报价沟通。',
  primaryCta: '获取报价',
  secondaryCta: '查看产品',
} as const;

const yiwuZipperLandingEn = {
  metadata: {
    title: 'Yiwu Zipper Supplier | Wholesale Zipper Source in Yiwu | Weiwei Zipper',
    description:
      'Weiwei Zipper supports wholesale zipper sourcing in Yiwu from District 3 of Yiwu International Trade City, supplying metal, resin, nylon, and zipper roll products for garment, bag, and footwear projects.',
  },
  title: 'Yiwu Zipper Supplier & Wholesale Zipper Source',
  subtitle:
    'Weiwei Zipper supports buyers who come to Yiwu looking for a zipper supplier, wholesale zipper source, and long-term factory coordination for metal, resin, nylon, and zipper roll products.',
  intro:
    'If you are sourcing zippers in Yiwu, the key issue is usually not price alone. Buyers also need to know whether specifications are clear, sampling can move smoothly, bulk supply can stay stable, and repeat orders can be coordinated without unnecessary back-and-forth. Operating from District 3 of Yiwu International Trade City, Weiwei Zipper focuses on practical zipper supply for garments, bags, footwear, and related projects, helping connect sampling, quotation, and bulk purchasing more efficiently.',
  highlightsTitle: 'Why buyers in Yiwu work with Weiwei Zipper',
  highlights: [
    {
      title: 'Direct coordination in International Trade City',
      description: 'For buyers visiting Yiwu International Trade City, confirming size, color, structure, and sample details in a more direct way can save time.',
    },
    {
      title: 'Common categories are already organized',
      description: 'Metal, resin, nylon, and zipper roll options are organized around common purchasing needs, making it easier to move into size 3, 5, and 8 discussions quickly.',
    },
    {
      title: 'Better fit for repeat orders',
      description: 'Once size, color, and slider details are confirmed, the same records can support replenishment and long-term supply more efficiently.',
    },
  ],
  categoriesTitle: 'Common sourcing directions',
  categories: [
    {
      title: 'Metal Zippers',
      description: 'Suitable for bags, workwear, boots, and styles that require stronger texture and durability.',
      href: '/products/metal-zippers',
    },
    {
      title: 'Resin Zippers',
      description: 'A practical option for garments, kidswear, footwear, and lighter projects with stronger color coordination needs.',
      href: '/products/resin-zippers',
    },
    {
      title: 'Nylon Zippers',
      description: 'Frequently used in garments, bags, and sun-protective outerwear where smooth operation and flexibility matter.',
      href: '/products/nylon-zippers',
    },
  ],
  checklistTitle: 'What to confirm before requesting a quote in Yiwu',
  checklist: [
    'Material direction: metal, resin, nylon, or zipper rolls.',
    'Size range: whether common sizes 3, 5, or 8 are suitable.',
    'Structure: closed-end, open-end, two-way, or later cutting and assembly.',
    'Length, color, slider style, and estimated order quantity.',
    'Whether sampling, color matching, or reference samples are needed first.',
  ],
  ctaTitle: 'Do you already have samples, reference images, or a clear purchasing request?',
  ctaDescription: 'You are welcome to share size, length, color, quantity, and application details so we can help confirm the right direction and move into quotation quickly.',
  primaryCta: 'Get Quote',
  secondaryCta: 'View Products',
} as const;

const yiwuZipperLandingEs = {
  metadata: {
    title: 'Proveedor de cremalleras en Yiwu | Compra mayorista en Yiwu | Weiwei Zipper',
    description:
      'Weiwei Zipper apoya la compra mayorista de cremalleras en Yiwu desde el Distrito 3 de Yiwu International Trade City, con cremalleras metalicas, de resina, de nylon y por rollo para prendas, bolsos y calzado.',
  },
  title: 'Proveedor de cremalleras y fuente mayorista en Yiwu',
  subtitle:
    'Weiwei Zipper apoya a compradores que llegan a Yiwu en busca de un proveedor de cremalleras, compra al por mayor y coordinacion estable para cremalleras metalicas, de resina, de nylon y por rollo.',
  intro:
    'Si esta buscando cremalleras en Yiwu, normalmente el punto clave no es solo el precio. Tambien importa si las especificaciones estan claras, si el muestreo puede avanzar con fluidez, si el suministro en volumen es estable y si las reposiciones pueden coordinarse sin demasiadas confirmaciones repetidas. Desde el Distrito 3 de Yiwu International Trade City, Weiwei Zipper se centra en soluciones practicas para prendas, bolsos, calzado y proyectos relacionados, conectando de forma mas eficiente muestreo, cotizacion y compra al por mayor.',
  highlightsTitle: 'Por que muchos compradores en Yiwu trabajan con Weiwei Zipper',
  highlights: [
    {
      title: 'Coordinacion directa en International Trade City',
      description: 'Para compradores que visitan Yiwu International Trade City, confirmar tamano, color, estructura y detalles de muestras de forma directa ayuda a ahorrar tiempo.',
    },
    {
      title: 'Categorias frecuentes ya organizadas',
      description: 'Las opciones de metal, resina, nylon y rollo ya estan organizadas alrededor de necesidades habituales, lo que facilita entrar rapidamente en medidas 3, 5 y 8.',
    },
    {
      title: 'Mejor preparacion para reposiciones',
      description: 'Cuando se confirman tamanos, colores y cursores, los mismos registros ayudan a reposiciones y suministro continuo con mayor eficiencia.',
    },
  ],
  categoriesTitle: 'Direcciones de compra mas comunes',
  categories: [
    {
      title: 'Cremalleras metalicas',
      description: 'Adecuadas para bolsos, ropa de trabajo, botas y estilos que requieren mayor textura y durabilidad.',
      href: '/products/metal-zippers',
    },
    {
      title: 'Cremalleras de resina',
      description: 'Una opcion practica para prendas, ropa infantil, calzado y proyectos ligeros con mayor necesidad de coordinacion de color.',
      href: '/products/resin-zippers',
    },
    {
      title: 'Cremalleras de nylon',
      description: 'Muy utilizadas en prendas, bolsos y ropa con proteccion solar donde importan la suavidad y la flexibilidad.',
      href: '/products/nylon-zippers',
    },
  ],
  checklistTitle: 'Que conviene confirmar antes de pedir cotizacion en Yiwu',
  checklist: [
    'Tipo de material: metal, resina, nylon o rollo.',
    'Tamano: si las medidas comunes 3, 5 u 8 son adecuadas.',
    'Estructura: cerrada, abierta, doble carro o para corte posterior.',
    'Longitud, color, cursor y cantidad estimada.',
    'Si primero se necesita muestra, revision de color o referencia previa.',
  ],
  ctaTitle: 'Tiene ya muestras, imagenes de referencia o una necesidad de compra clara?',
  ctaDescription: 'Puede compartir tamano, longitud, color, cantidad y aplicacion para que podamos confirmar la direccion adecuada y avanzar con la cotizacion.',
  primaryCta: 'Solicitar cotizacion',
  secondaryCta: 'Ver productos',
} as const;

const yiwuZipperLandingAr = {
  metadata: {
    title: 'مورد سحابات في ييوو | مصدر جملة للسحابات في ييوو | Weiwei Zipper',
    description:
      'تدعم Weiwei Zipper شراء السحابات بالجملة في ييوو من المنطقة الثالثة في مدينة ييوو التجارية الدولية، مع سحابات معدنية وراتنجية ونايلون وسحابات رول لمشاريع الملابس والحقائب والأحذية.',
  },
  title: 'مورد سحابات ومصدر جملة في ييوو',
  subtitle:
    'تدعم Weiwei Zipper المشترين الذين يأتون إلى ييوو بحثا عن مورد سحابات ومصدر شراء بالجملة وتنسيق طويل الأجل للسحابات المعدنية والراتنجية والنايلون وسحابات الرول.',
  intro:
    'إذا كنت تبحث عن السحابات في ييوو، فالنقطة الأساسية عادة لا تتعلق بالسعر فقط. بل تتعلق أيضا بوضوح المواصفات، وسهولة تقدم العينات، واستقرار التوريد بالجملة، وإمكانية تنسيق إعادة الطلب دون تكرار مرهق. ومن داخل المنطقة الثالثة في مدينة ييوو التجارية الدولية، تركز Weiwei Zipper على حلول عملية لمشاريع الملابس والحقائب والأحذية، بما يساعد على ربط العينات والتسعير والشراء بالجملة بشكل أكثر كفاءة.',
  highlightsTitle: 'لماذا يعمل المشترون في ييوو مع Weiwei Zipper',
  highlights: [
    {
      title: 'تنسيق مباشر داخل مدينة التجارة الدولية',
      description: 'بالنسبة للمشترين الذين يزورون مدينة ييوو التجارية الدولية، فإن تأكيد المقاس واللون والبنية وتفاصيل العينات بشكل مباشر يوفر الوقت.',
    },
    {
      title: 'الفئات الشائعة جاهزة للمراجعة',
      description: 'تم تنظيم خيارات المعدني والراتنج والنايلون والرول حول احتياجات الشراء الشائعة، مما يسهل الانتقال بسرعة إلى مقاسات 3 و5 و8.',
    },
    {
      title: 'أنسب لإعادة الطلب والتوريد المستمر',
      description: 'بعد تثبيت المقاس واللون وتفاصيل السحاب، يمكن استخدام نفس السجلات لتنسيق إعادة الطلب والتوريد الطويل الأجل بكفاءة أعلى.',
    },
  ],
  categoriesTitle: 'اتجاهات الشراء الشائعة',
  categories: [
    {
      title: 'السحابات المعدنية',
      description: 'مناسبة للحقائب والملابس العملية والأحذية والمنتجات التي تحتاج إلى مظهر أقوى وتحمل أعلى.',
      href: '/products/metal-zippers',
    },
    {
      title: 'السحابات الراتنجية',
      description: 'خيار عملي للملابس وملابس الأطفال والأحذية والمشاريع الخفيفة التي تحتاج إلى تنسيق ألوان أوضح.',
      href: '/products/resin-zippers',
    },
    {
      title: 'سحابات النايلون',
      description: 'تستخدم كثيرا في الملابس والحقائب وملابس الحماية من الشمس حيث تكون السلاسة والمرونة مهمتين.',
      href: '/products/nylon-zippers',
    },
  ],
  checklistTitle: 'ما الذي يفضل تأكيده قبل طلب السعر في ييوو',
  checklist: [
    'اتجاه الخامة: معدني أو راتنج أو نايلون أو رول.',
    'المقاس: هل تناسب المقاسات الشائعة 3 أو 5 أو 8 المشروع.',
    'البنية: مغلق أو مفتوح أو مزدوج أو مخصص للقص والتركيب لاحقا.',
    'الطول واللون ونوع السحاب والكمية التقديرية.',
    'هل يلزم أولا عمل عينة أو مراجعة لون أو الاعتماد على نموذج مرجعي.',
  ],
  ctaTitle: 'هل لديك عينات أو صور مرجعية أو طلب شراء واضح؟',
  ctaDescription: 'يمكنك مشاركة المقاس والطول واللون والكمية والاستخدام، وسنساعدك على تأكيد الاتجاه المناسب والدخول في التسعير بسرعة.',
  primaryCta: 'طلب عرض سعر',
  secondaryCta: 'عرض المنتجات',
} as const;

const yiwuZipperLandingRu = {
  metadata: {
    title: 'Поставщик молний в Иу | Оптовый источник молний в Иу | Weiwei Zipper',
    description:
      'Weiwei Zipper поддерживает оптовые закупки молний в Иу из района 3 Yiwu International Trade City, поставляя металлические, смоляные, нейлоновые и рулонные молнии для одежды, сумок и обуви.',
  },
  title: 'Поставщик молний и оптовый источник в Иу',
  subtitle:
    'Weiwei Zipper поддерживает покупателей, приезжающих в Иу в поисках поставщика молний, оптового источника и долгосрочной координации по металлическим, смоляным, нейлоновым и рулонным молниям.',
  intro:
    'Если вы ищете молнии в Иу, ключевой вопрос обычно не сводится только к цене. Важно также, насколько понятны спецификации, насколько плавно можно двигать образцы, насколько стабилен оптовый supply и насколько легко координировать повторные заказы без лишних согласований. Работая из района 3 Yiwu International Trade City, Weiwei Zipper предлагает практичные решения для одежды, сумок, обуви и смежных проектов, помогая эффективнее связать образцы, расчет цены и закупку.',
  highlightsTitle: 'Почему покупатели в Иу работают с Weiwei Zipper',
  highlights: [
    {
      title: 'Прямое согласование в International Trade City',
      description: 'Для покупателей, приезжающих в Yiwu International Trade City, прямое подтверждение размера, цвета, конструкции и деталей образцов экономит время.',
    },
    {
      title: 'Часто используемые категории уже структурированы',
      description: 'Металлические, смоляные, нейлоновые и рулонные решения уже организованы вокруг типовых задач, что ускоряет обсуждение размеров 3, 5 и 8.',
    },
    {
      title: 'Подходит для повторных заказов',
      description: 'После подтверждения размеров, цвета и бегунка те же записи можно использовать для пополнения запасов и долгосрочного снабжения.',
    },
  ],
  categoriesTitle: 'Типовые направления закупки',
  categories: [
    {
      title: 'Металлические молнии',
      description: 'Подходят для сумок, рабочей одежды, обуви и изделий, где важны фактура и более высокая износостойкость.',
      href: '/products/metal-zippers',
    },
    {
      title: 'Смоляные молнии',
      description: 'Практичный вариант для одежды, детских изделий, обуви и легких проектов, где важно цветовое согласование.',
      href: '/products/resin-zippers',
    },
    {
      title: 'Нейлоновые молнии',
      description: 'Часто используются в одежде, сумках и солнцезащитной верхней одежде, где важны плавность хода и гибкость.',
      href: '/products/nylon-zippers',
    },
  ],
  checklistTitle: 'Что лучше подтвердить до запроса цены в Иу',
  checklist: [
    'Материал: металл, смола, нейлон или рулонная цепочка.',
    'Размер: подходят ли распространенные размеры 3, 5 или 8.',
    'Конструкция: закрытая, разъемная, двухзамковая или под дальнейшую резку и сборку.',
    'Длина, цвет, тип бегунка и примерный объем заказа.',
    'Нужны ли сначала образцы, проверка цвета или старый референс.',
  ],
  ctaTitle: 'У вас уже есть образцы, референсные изображения или четкая закупочная задача?',
  ctaDescription: 'Вы можете прислать размер, длину, цвет, количество и сферу применения, и мы поможем быстрее подтвердить подходящее решение и перейти к расчету цены.',
  primaryCta: 'Запросить цену',
  secondaryCta: 'Смотреть продукцию',
} as const;

const yiwuZipperLandingByLocale = {
  zh: yiwuZipperLandingZh,
  en: yiwuZipperLandingEn,
  es: yiwuZipperLandingEs,
  ar: yiwuZipperLandingAr,
  ru: yiwuZipperLandingRu,
} as const;

export function getYiwuZipperLandingContent(locale: string) {
  return getLocalizedContent(yiwuZipperLandingByLocale, locale);
}
