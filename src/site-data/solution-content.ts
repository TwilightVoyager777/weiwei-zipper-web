import { getLocalizedContent, type AppLocale } from '@/localization/content';

export const solutionsPageContent = {
  metadata: {
    title: '解决方案 | 伟伟拉链',
    description: '查看伟伟拉链围绕打样开发、批量采购与返单供货建立的拉链配套解决方案，帮助项目更顺畅进入确认、报价与交付流程。',
  },
  title: '解决方案',
  subtitle: '围绕打样开发、批量采购和返单供货三个常见合作阶段，提供更清晰、更稳定的配套支持。',
  introText: '伟伟拉链的解决方案并不只是单一推荐某一类产品，而是围绕客户项目推进过程中最常见的几个关键阶段来展开。无论是前期开发选型、样品确认，还是进入批量采购与后续返单，我们都更关注如何把材质方向、规格结构、长度颜色、拉头搭配和交付节奏这些高频问题提前梳理清楚。这样做的目的，是帮助客户减少重复沟通，提高确认效率，并让后续采购和持续合作更顺畅。',
  whatWeOffer: '支持内容',
  items: [
    {
      title: '打样开发支持',
      imagePath: '/products/fsf.png',
      imageAlt: '拉链产品细节展示图',
      description: '围绕新款开发、样品确认和初步选型阶段，协助客户更快明确拉链材质、规格与结构方向。',
      detail: '在开发阶段，项目推进的关键通常不只是“要不要做”，而是能否尽快把材质、规格、结构、长度和颜色这些基础信息确认清楚。伟伟拉链会优先围绕服装、箱包、鞋帽等常见应用场景，结合 3 号 / 5 号 / 8 号等高频规格，为客户提供更贴近实际使用需求的配套建议，便于项目更快进入样品确认与报价沟通。',
      points: ['可结合实物图、旧样或基础规格信息判断方向', '优先围绕金属、树脂、尼龙三类常用方案做选型建议', '可按门襟、口袋、主仓或配件位确认结构方式', '有助于缩短从初步沟通到样品确认的推进路径'],
    },
    {
      title: '批量采购配套',
      imagePath: '/products/fsf.png',
      imageAlt: '拉链产品细节展示图',
      description: '围绕常规订单和稳定采购需求，提供更适合批量确认、集中下单与统一配套的解决方案。',
      detail: '当项目进入批量采购阶段后，客户通常更关注规格准确性、颜色一致性、拉头搭配统一以及交付节奏是否稳定。伟伟拉链会围绕常用规格和历史确认记录，协助客户在量产前进一步梳理关键细节，帮助项目在正式排单前建立更清晰的采购依据，从而降低批量阶段的重复确认成本。',
      points: ['可围绕常用规格与历史记录整理更稳定的采购方案', '有助于提前确认长度、颜色、拉头及包装等关键细节', '更适合服装、箱包、鞋帽等常见成品项目的批量采购', '便于项目从样品确认顺畅衔接到集中下单与量产安排'],
    },
    {
      title: '返单与持续供货',
      imagePath: '/products/fsf.png',
      imageAlt: '拉链产品细节展示图',
      description: '围绕常规补单、系列化采购和长期合作项目，提供更便于复用的规格沉淀与供货衔接支持。',
      detail: '返单项目真正需要的，往往不是重新从头确认，而是能否在原有基础上延续既有规格、颜色和结构逻辑。伟伟拉链更重视把常用方案、确认记录和高频规格整理得更清楚，帮助客户在后续补单、长期供货和系列化开发中维持更高的沟通效率与更稳定的交付节奏。',
      points: ['适合已有固定规格或系列化需求的持续合作项目', '便于在既有确认基础上推进补单与重复采购', '有助于提升后续返单阶段的沟通效率与供货连续性', '更适合需要长期配套与稳定交付的客户合作模式'],
    },
  ],
  process: {
    title: '合作流程',
    steps: [
      { title: '需求沟通', description: '先围绕用途、材质方向、规格结构、长度颜色等基础信息完成前期沟通。' },
      { title: '方案确认', description: '结合项目类型与常用规格，进一步确认更合适的金属、树脂或尼龙方案。' },
      { title: '样品推进', description: '按样卡、图片、旧样或既有记录推进样品确认，为后续报价与采购建立依据。' },
      { title: '批量交付', description: '在样品与规格确认后进入排单、量产及后续返单衔接流程。' },
    ],
  },
  ctaText: '如果你已有明确项目，欢迎直接提供规格、长度、颜色、数量及使用场景信息，以便更快进入方案确认与报价沟通。',
  ctaButton: '获取报价',
} as const;

const solutionsPageContentEn = {
  metadata: {
    title: 'Solutions | Weiwei Zipper',
    description: 'Explore how Weiwei Zipper supports sampling, bulk purchasing, and repeat-order supply so projects can move more smoothly through confirmation, quotation, and delivery.',
  },
  title: 'Solutions',
  subtitle: 'We support three common project stages: sampling and development, bulk purchasing, and repeat-order supply.',
  introText: 'At Weiwei Zipper, a solution is not just about recommending one zipper type. We organize our support around the stages where customers usually need clearer coordination: early selection and development, sample confirmation, bulk purchasing, and later repeat orders. The goal is to sort out material direction, size, structure, length, color, slider matching, and delivery planning earlier so communication stays more efficient throughout the project.',
  whatWeOffer: 'Support Highlights',
  items: [
    {
      title: 'Sampling & Development Support',
      imagePath: '/products/fsf.png',
      imageAlt: 'Zipper product detail visual',
      description: 'We help customers confirm the right material, size, and structure direction more quickly during new development and sample preparation.',
      detail: 'At the development stage, the key issue is usually not simply whether a zipper can be made, but whether the basic parameters can be clarified early enough: material, size, structure, length, and color. Around common garment, bag, and footwear applications, and especially around size 3, 5, and 8 demand, Weiwei Zipper helps narrow the practical direction faster so the project can move into sampling and quotation more smoothly.',
      points: ['Direction can be judged from sample photos, old references, or basic specification notes', 'Selection suggestions can be narrowed around common metal, resin, and nylon solutions', 'Structure can be discussed according to front opening, pocket, main compartment, or accessory position', 'Helps shorten the path from first communication to sample confirmation'],
    },
    {
      title: 'Bulk Purchasing Support',
      imagePath: '/products/fsf.png',
      imageAlt: 'Zipper product detail visual',
      description: 'For regular orders and steady purchasing demand, we support clearer bulk confirmation and more consistent matching arrangements.',
      detail: 'Once a project enters the bulk purchasing stage, customers usually focus more on specification accuracy, color consistency, slider matching, and whether delivery remains stable. Weiwei Zipper helps organize those key details around common sizes and previously confirmed records so the project can enter production planning with a clearer purchasing basis and lower confirmation cost.',
      points: ['Purchasing plans can be organized around common sizes and historical records', 'Helps confirm length, color, sliders, and packing details earlier', 'Suitable for garments, bags, footwear, and other routine end-use projects', 'Makes it easier to connect sample confirmation into bulk ordering and production scheduling'],
    },
    {
      title: 'Repeat Orders & Ongoing Supply',
      imagePath: '/products/fsf.png',
      imageAlt: 'Zipper product detail visual',
      description: 'For replenishment, repeat programs, and long-term cooperation, we help preserve clear specification records and supply continuity.',
      detail: 'For repeat orders, the real need is usually not to start the confirmation process from zero again, but to continue with the same size, color, and structure logic already in use. Weiwei Zipper places more emphasis on keeping common solutions, confirmation records, and frequent specifications clearly organized so replenishment and long-term supply projects can maintain better communication efficiency and steadier delivery.',
      points: ['Suitable for ongoing projects with fixed specifications or recurring product programs', 'Makes replenishment easier to handle on the basis of prior confirmation', 'Improves communication efficiency and continuity during repeat-order stages', 'Fits long-term cooperation models that need stable matching and delivery'],
    },
  ],
  process: {
    title: 'Cooperation Process',
    steps: [
      { title: 'Requirement Discussion', description: 'We start by discussing use case, material direction, size, structure, length, and color information.' },
      { title: 'Solution Confirmation', description: 'Based on the project type and common sizes, we narrow down the most suitable metal, resin, or nylon direction.' },
      { title: 'Sample Progress', description: 'Samples are then confirmed against cards, photos, old samples, or existing records to build a basis for quotation and purchasing.' },
      { title: 'Bulk Delivery', description: 'After samples and specifications are confirmed, the project can move into scheduling, production, and later repeat-order supply.' },
    ],
  },
  ctaText: 'If your project is already clear, you are welcome to share size, length, color, quantity, and application details so we can move more quickly into solution confirmation and quotation.',
  ctaButton: 'Get Quote',
} as const;

const solutionsPageContentEs = {
  metadata: {
    title: 'Soluciones | Weiwei Zipper',
    description: 'Descubra como Weiwei Zipper apoya el muestreo, la compra al por mayor y el suministro para reposiciones para que los proyectos avancen con mas fluidez en confirmacion, cotizacion y entrega.',
  },
  title: 'Soluciones',
  subtitle: 'Apoyamos tres etapas habituales del proyecto: muestreo y desarrollo, compras al por mayor y suministro para reposiciones.',
  introText: 'En Weiwei Zipper, una solucion no consiste solo en recomendar un tipo de cremallera. Organizamos nuestro apoyo alrededor de las etapas en las que los clientes suelen necesitar una coordinacion mas clara: seleccion inicial y desarrollo, confirmacion de muestras, compras al por mayor y reposiciones posteriores. El objetivo es aclarar antes la direccion del material, el tamano, la estructura, la longitud, el color, la combinacion del cursor y la planificacion de entrega para que la comunicacion sea mas eficiente durante todo el proyecto.',
  whatWeOffer: 'Aspectos de soporte',
  items: [
    {
      title: 'Soporte para muestreo y desarrollo',
      imagePath: '/products/fsf.png',
      imageAlt: 'Visual de detalle de producto de cremallera',
      description: 'Ayudamos a los clientes a confirmar mas rapidamente la direccion adecuada de material, tamano y estructura durante el desarrollo de nuevos proyectos y la preparacion de muestras.',
      detail: 'En la fase de desarrollo, la clave no suele ser solo si la cremallera puede fabricarse, sino si los parametros basicos pueden definirse a tiempo: material, tamano, estructura, longitud y color. En torno a las aplicaciones comunes de prendas, bolsos y calzado, y especialmente alrededor de la demanda en tamanos 3, 5 y 8, Weiwei Zipper ayuda a reducir mas rapidamente la direccion practica para que el proyecto avance con mayor fluidez hacia el muestreo y la cotizacion.',
      points: ['La direccion puede evaluarse a partir de fotos de muestra, referencias antiguas o notas basicas de especificacion', 'Las sugerencias pueden reducirse alrededor de soluciones comunes de metal, resina y nylon', 'La estructura puede discutirse segun apertura frontal, bolsillo, compartimento principal o posicion accesoria', 'Ayuda a acortar el camino entre el primer contacto y la confirmacion de la muestra'],
    },
    {
      title: 'Soporte para compras al por mayor',
      imagePath: '/products/fsf.png',
      imageAlt: 'Visual de detalle de producto de cremallera',
      description: 'Para pedidos regulares y necesidades de compra estables, apoyamos una confirmacion mas clara y una coordinacion mas consistente en volumen.',
      detail: 'Una vez que el proyecto entra en la fase de compra al por mayor, los clientes suelen centrarse mas en la precision de las especificaciones, la consistencia del color, la combinacion del cursor y la estabilidad de la entrega. Weiwei Zipper ayuda a organizar esos puntos clave alrededor de tamanos comunes y registros previamente confirmados para que el proyecto entre en planificacion con una base de compra mas clara y menor costo de confirmacion.',
      points: ['Los planes de compra pueden organizarse alrededor de tamanos comunes y registros historicos', 'Ayuda a confirmar con antelacion longitud, color, cursores y detalles de embalaje', 'Adecuado para prendas, bolsos, calzado y otros proyectos de uso final habitual', 'Facilita la conexion entre la confirmacion de muestras y el pedido al por mayor con la programacion de produccion'],
    },
    {
      title: 'Reposiciones y suministro continuo',
      imagePath: '/products/fsf.png',
      imageAlt: 'Visual de detalle de producto de cremallera',
      description: 'Para reposiciones, programas recurrentes y cooperacion a largo plazo, ayudamos a mantener registros claros de especificaciones y continuidad de suministro.',
      detail: 'En los pedidos repetidos, la necesidad real no suele ser empezar la confirmacion desde cero, sino continuar con la misma logica de tamano, color y estructura ya utilizada. Weiwei Zipper pone mas enfasis en mantener organizadas las soluciones comunes, los registros de confirmacion y las especificaciones frecuentes para que las reposiciones y los proyectos de suministro a largo plazo mantengan una mejor eficiencia de comunicacion y una entrega mas estable.',
      points: ['Adecuado para proyectos continuos con especificaciones fijas o programas de producto recurrentes', 'Facilita las reposiciones sobre la base de confirmaciones anteriores', 'Mejora la eficiencia de comunicacion y la continuidad en fases de repeticion', 'Encaja con modelos de cooperacion a largo plazo que requieren suministro estable y coordinado'],
    },
  ],
  process: {
    title: 'Proceso de cooperacion',
    steps: [
      { title: 'Revision de requisitos', description: 'Comenzamos revisando uso previsto, direccion de material, tamano, estructura, longitud y color.' },
      { title: 'Confirmacion de solucion', description: 'Segun el tipo de proyecto y los tamanos comunes, definimos con mas precision la direccion adecuada en metal, resina o nylon.' },
      { title: 'Avance de muestras', description: 'Las muestras se confirman con cartas, fotos, muestras antiguas o registros existentes para crear una base de cotizacion y compra.' },
      { title: 'Entrega en volumen', description: 'Despues de confirmar muestras y especificaciones, el proyecto puede pasar a programacion, produccion y suministro para reposiciones posteriores.' },
    ],
  },
  ctaText: 'Si su proyecto ya esta claro, puede compartir tamano, longitud, color, cantidad y aplicacion para que avancemos mas rapidamente hacia la confirmacion de la solucion y la cotizacion.',
  ctaButton: 'Solicitar cotizacion',
} as const;

const solutionsPageContentAr = {
  metadata: {
    title: 'الحلول | Weiwei Zipper',
    description: 'اكتشف كيف تدعم Weiwei Zipper مراحل العينات والشراء بالجملة والتوريد لإعادة الطلب بحيث تتحرك المشاريع بسلاسة أكبر في التأكيد والتسعير والتسليم.',
  },
  title: 'الحلول',
  subtitle: 'ندعم ثلاث مراحل شائعة في المشروع: العينات والتطوير، والشراء بالجملة، والتوريد لإعادة الطلب.',
  introText: 'في Weiwei Zipper، لا تعني الحلول مجرد التوصية بنوع واحد من السحابات. بل ننظم الدعم حول المراحل التي يحتاج فيها العملاء عادة إلى تنسيق أوضح: الاختيار الأولي والتطوير، وتأكيد العينات، والشراء بالجملة، وإعادة الطلب لاحقا. والهدف هو توضيح اتجاه الخامة والمقاس والبنية والطول واللون وتطابق السحاب وتخطيط التسليم في وقت أبكر حتى يبقى التواصل أكثر كفاءة طوال المشروع.',
  whatWeOffer: 'محاور الدعم',
  items: [
    {
      title: 'دعم العينات والتطوير',
      imagePath: '/products/fsf.png',
      imageAlt: 'صورة تفصيلية لمنتج سحاب',
      description: 'نساعد العملاء على تأكيد اتجاه الخامة والمقاس والبنية المناسبة بسرعة أكبر أثناء التطوير الجديد وتحضير العينات.',
      detail: 'في مرحلة التطوير، لا تكون المسألة الأساسية مجرد ما إذا كان السحاب يمكن إنتاجه، بل ما إذا كان من الممكن توضيح المعايير الأساسية مبكرا: الخامة والمقاس والبنية والطول واللون. وانطلاقا من الاستخدامات الشائعة في الملابس والحقائب والأحذية، وخاصة حول المقاسات 3 و5 و8، تساعد Weiwei Zipper على تضييق الاتجاه العملي بشكل أسرع حتى ينتقل المشروع إلى العينات والتسعير بسلاسة أكبر.',
      points: ['يمكن تحديد الاتجاه بالاعتماد على صور العينات أو المراجع القديمة أو الملاحظات الأساسية للمواصفات', 'يمكن تضييق الاختيار حول الحلول الشائعة من المعدني والراتنج والنايلون', 'يمكن مناقشة البنية حسب الفتحة الأمامية أو الجيب أو الحجرة الرئيسية أو موضع الإكسسوار', 'يساعد ذلك على تقصير الطريق من التواصل الأولي إلى اعتماد العينة'],
    },
    {
      title: 'دعم الشراء بالجملة',
      imagePath: '/products/fsf.png',
      imageAlt: 'صورة تفصيلية لمنتج سحاب',
      description: 'في الطلبات المنتظمة والاحتياجات المستقرة، ندعم تأكيدا أوضح وترتيبات أكثر اتساقا للشراء بالجملة.',
      detail: 'عندما يدخل المشروع في مرحلة الشراء بالجملة، يركز العملاء عادة بشكل أكبر على دقة المواصفات وثبات اللون وتطابق السحاب واستقرار التسليم. وتساعد Weiwei Zipper على تنظيم هذه النقاط الأساسية بالاعتماد على المقاسات الشائعة والسجلات المؤكدة سابقا، بحيث يدخل المشروع إلى التخطيط بمرجعية شراء أوضح وتكلفة أقل في التأكيد.',
      points: ['يمكن تنظيم خطط الشراء بالاعتماد على المقاسات الشائعة والسجلات التاريخية', 'يساعد على تأكيد الطول واللون والسحابات والتعبئة في مرحلة أبكر', 'مناسب للملابس والحقائب والأحذية وغيرها من المشاريع النهائية الشائعة', 'يسهل الربط بين تأكيد العينات والطلب بالجملة وجدولة الإنتاج'],
    },
    {
      title: 'إعادة الطلب والتوريد المستمر',
      imagePath: '/products/fsf.png',
      imageAlt: 'صورة تفصيلية لمنتج سحاب',
      description: 'لبرامج إعادة الطلب والتعاون طويل الأجل، نساعد على الحفاظ على سجلات واضحة للمواصفات واستمرارية التوريد.',
      detail: 'في إعادة الطلب، لا تكون الحاجة الحقيقية غالبا إلى البدء من الصفر، بل إلى الاستمرار بنفس منطق المقاس واللون والبنية المستخدم سابقا. وتضع Weiwei Zipper تركيزا أكبر على إبقاء الحلول الشائعة وسجلات التأكيد والمواصفات المتكررة منظمة بوضوح حتى تحافظ مشاريع إعادة الطلب والتوريد طويل الأجل على كفاءة أفضل في التواصل واستقرار أعلى في التسليم.',
      points: ['مناسب للمشاريع المستمرة ذات المواصفات الثابتة أو البرامج المتكررة', 'يسهل تنفيذ إعادة الطلب بناء على التأكيدات السابقة', 'يحسن كفاءة التواصل والاستمرارية في مراحل التكرار', 'ملائم لنماذج التعاون الطويل التي تحتاج إلى توريد ثابت ومنظم'],
    },
  ],
  process: {
    title: 'آلية التعاون',
    steps: [
      { title: 'مراجعة المتطلبات', description: 'نبدأ بمراجعة الاستخدام واتجاه الخامة والمقاس والبنية والطول واللون.' },
      { title: 'تأكيد الحل', description: 'بحسب نوع المشروع والمقاسات الشائعة، نحدد بشكل أوضح الاتجاه الأنسب بين المعدني أو الراتنج أو النايلون.' },
      { title: 'متابعة العينات', description: 'يتم تأكيد العينات اعتمادا على البطاقات أو الصور أو العينات القديمة أو السجلات القائمة لبناء أساس للتسعير والشراء.' },
      { title: 'التسليم بالجملة', description: 'بعد تأكيد العينات والمواصفات، يمكن أن ينتقل المشروع إلى الجدولة والإنتاج والتوريد لإعادة الطلب لاحقا.' },
    ],
  },
  ctaText: 'إذا كان مشروعك واضحا بالفعل، فيمكنك مشاركة المقاس والطول واللون والكمية والاستخدام حتى ننتقل بسرعة أكبر إلى تأكيد الحل والتسعير.',
  ctaButton: 'طلب عرض سعر',
} as const;

const solutionsPageContentRu = {
  metadata: {
    title: 'Решения | Weiwei Zipper',
    description: 'Посмотрите, как Weiwei Zipper поддерживает этапы образцов, оптовых закупок и повторных поставок, чтобы проекты двигались более плавно через подтверждение, расчет цены и поставку.',
  },
  title: 'Решения',
  subtitle: 'Мы поддерживаем три типичных этапа проекта: образцы и разработку, оптовые закупки и поставки для повторных заказов.',
  introText: 'В Weiwei Zipper решение не сводится к рекомендации одного типа молнии. Мы выстраиваем поддержку вокруг тех этапов, где клиентам обычно нужна более четкая координация: ранний выбор и разработка, подтверждение образцов, оптовая закупка и последующие повторные заказы. Наша цель — раньше прояснить материал, размер, конструкцию, длину, цвет, подбор бегунка и график поставки, чтобы коммуникация в проекте оставалась более эффективной.',
  whatWeOffer: 'Ключевые элементы поддержки',
  items: [
    {
      title: 'Поддержка образцов и разработки',
      imagePath: '/products/fsf.png',
      imageAlt: 'Детальное изображение молнии',
      description: 'Мы помогаем клиентам быстрее определить подходящий материал, размер и конструкцию на этапе новой разработки и подготовки образцов.',
      detail: 'На этапе разработки ключевой вопрос обычно состоит не только в том, можно ли изготовить молнию, а в том, удастся ли заранее прояснить базовые параметры: материал, размер, конструкцию, длину и цвет. Ориентируясь на типичные задачи в одежде, сумках и обуви, а особенно на распространенные размеры 3, 5 и 8, Weiwei Zipper помогает быстрее сузить практическое направление и перевести проект к образцам и расчету цены.',
      points: ['Направление можно определить по фото образца, старым референсам или базовым заметкам по спецификации', 'Подбор можно сузить вокруг типовых металлических, смоляных и нейлоновых решений', 'Конструкцию можно обсуждать по передней планке, карману, основному отделению или аксессуарной зоне', 'Это помогает сократить путь от первого общения до подтверждения образца'],
    },
    {
      title: 'Поддержка оптовых закупок',
      imagePath: '/products/fsf.png',
      imageAlt: 'Детальное изображение молнии',
      description: 'Для регулярных заказов и стабильного спроса мы поддерживаем более понятное подтверждение и более согласованную организацию оптовой партии.',
      detail: 'Когда проект входит в стадию оптовой закупки, клиентов обычно больше интересуют точность спецификации, стабильность цвета, подбор бегунка и надежность поставки. Weiwei Zipper помогает организовать эти ключевые моменты вокруг популярных размеров и ранее подтвержденных записей, чтобы проект переходил к планированию партии с более понятной закупочной базой и меньшими затратами на повторные согласования.',
      points: ['План закупки можно строить вокруг популярных размеров и исторических записей', 'Помогает раньше подтвердить длину, цвет, бегунки и детали упаковки', 'Подходит для одежды, сумок, обуви и других типовых конечных проектов', 'Упрощает переход от подтверждения образца к оптовому заказу и производственной очереди'],
    },
    {
      title: 'Повторные заказы и непрерывные поставки',
      imagePath: '/products/fsf.png',
      imageAlt: 'Детальное изображение молнии',
      description: 'Для пополнения, повторных программ и долгосрочного сотрудничества мы помогаем сохранять четкие записи спецификаций и непрерывность поставок.',
      detail: 'В повторных заказах реальная задача обычно состоит не в том, чтобы начинать все подтверждение заново, а в том, чтобы продолжать работать с той же логикой размера, цвета и конструкции, которая уже используется. Поэтому Weiwei Zipper уделяет больше внимания тому, чтобы типовые решения, записи подтверждения и часто используемые спецификации были четко организованы, а повторные заказы и долгосрочные поставки проходили с лучшей эффективностью общения и более стабильной логистикой.',
      points: ['Подходит для постоянных проектов с фиксированными спецификациями или регулярными программами', 'Упрощает повторный заказ на базе уже подтвержденных решений', 'Повышает эффективность общения и непрерывность на этапе повторных заказов', 'Подходит для долгосрочных моделей сотрудничества, где важны стабильное снабжение и согласованность'],
    },
  ],
  process: {
    title: 'Процесс сотрудничества',
    steps: [
      { title: 'Обсуждение требований', description: 'Мы начинаем с уточнения применения, материала, размера, конструкции, длины и цвета.' },
      { title: 'Подтверждение решения', description: 'Исходя из типа проекта и популярных размеров, мы точнее определяем подходящее направление: металл, смола или нейлон.' },
      { title: 'Работа с образцами', description: 'Образцы подтверждаются по картам, фото, старым образцам или существующим записям, создавая основу для расчета цены и закупки.' },
      { title: 'Оптовая поставка', description: 'После подтверждения образцов и спецификаций проект может перейти к планированию, производству и дальнейшим повторным поставкам.' },
    ],
  },
  ctaText: 'Если ваш проект уже достаточно понятен, вы можете прислать размер, длину, цвет, количество и сферу применения, чтобы мы быстрее перешли к подтверждению решения и расчету цены.',
  ctaButton: 'Запросить цену',
} as const;

const solutionsPageContentByLocale = {
  zh: solutionsPageContent,
  en: solutionsPageContentEn,
  es: solutionsPageContentEs,
  ar: solutionsPageContentAr,
  ru: solutionsPageContentRu,
} satisfies Partial<Record<AppLocale, unknown>>;

export function getSolutionsPageContent(locale: string) {
  return getLocalizedContent(solutionsPageContentByLocale, locale);
}
