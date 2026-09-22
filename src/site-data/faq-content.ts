import { getLocalizedContent, type AppLocale } from '@/localization/content';

export const faqPageContent = {
  metadata: {
    title: '常见问题',
    description: '查看伟伟拉链关于 3 号 / 5 号 / 8 号规格、闭口与开口、码装、打样、交期、颜色确认及报价准备的常见问题。',
  },
  title: '常见问题',
  subtitle: '这里整理了客户在拉链选型、打样、报价、码装采购、交期和颜色确认中的高频问题，便于提前梳理沟通重点。',
  items: [
    {
      question: '3 号、5 号、8 号一般怎么选？',
      answer: '通常会先结合成品用途和使用位置判断规格方向。3 号更常用于轻量服装、口袋位和童装配套；5 号覆盖范围最广，常见于夹克、卫衣、裤装和日常箱包；8 号更适合行李箱包、工装、户外包具等对耐用度要求更高的位置。如暂时无法确定，也可以先提供样品图、旧样或使用场景，我们可先按常用规格协助判断。',
    },
    {
      question: '闭口和开口有什么区别？',
      answer: '闭口拉链底部固定，通常用于口袋、裤装、包袋内袋等位置；开口拉链底部可完全分离，更常用于外套门襟、卫衣、马甲等需要完全打开的结构。如果项目还涉及双开、双向或特殊拉头，也建议在询盘时一并说明。',
    },
    {
      question: '码装和成品拉链有什么区别？',
      answer: '成品拉链通常已按固定长度和结构完成加工，适合直接用于成衣或成品装配；码装一般按卷供货，更适合后续按需裁切、装头或做后道加工。选择哪种方式，主要取决于你是直接装配成品，还是需要在后续生产环节里自行裁切和组合。',
    },
    {
      question: '码装产品下单前通常要确认哪些信息？',
      answer: '码装采购一般建议先确认材质方向、齿型规格、布带颜色、卷长、是否配套拉头以及后续使用场景。如果你有既有样品、旧卷带或历史采购记录，也可以一并提供，这样更便于后续确认常用方案和报价口径。',
    },
    {
      question: '可以先打样再下大货吗？',
      answer: '可以。对于新款开发、颜色较多或结构要求较细的项目，通常建议先完成打样确认，再进入批量安排。这样更有利于提前核对规格、长度、颜色、拉头和结构细节，减少大货阶段的重复修改。',
    },
    {
      question: '打样周期一般怎么安排？',
      answer: '常规规格通常 3 天可以完成打样。新色、特殊结构或需要另行配套的项目会更长，确认需求后我们会同步具体安排。',
    },
    {
      question: '起订量是固定的吗？',
      answer: '成品拉链通常 1000 条起订。一个订单内可以混色，把配比告诉我们即可确认。染色按颜色安排，因此单一颜色数量低于 2000 条时，该颜色需另付 150 元染色费。码装（卷装）另行报价。',
    },
    {
      question: '交期一般多久？',
      answer: '确认样品与订单细节后，大货通常 10 天。新色、特殊结构或多款混单可能更长，下单前会先同步具体排期。',
    },
    {
      question: '颜色通常怎么确认？',
      answer: '如果项目对颜色一致性要求较高，建议尽量提供色卡编号、面料样、旧样颜色或实物参考。仅靠口头描述通常不够稳，尤其是服装和防晒衣项目。颜色信息确认越完整，后续打样和大货衔接越顺畅。',
    },
    {
      question: '如果我现在还没有明确规格，还能先沟通吗？',
      answer: '可以。很多项目一开始并不会把规格和结构一次确认完整。你可以先提供样品图、旧样、使用位置、成品类型或预估数量，我们会先围绕金属、树脂、尼龙及常用 3 号 / 5 号 / 8 号规格协助缩小范围。',
    },
    {
      question: '报价前提供哪些信息会更高效？',
      answer: '建议至少准备以下几项：品类方向、规格大小、长度、开口或闭口结构、颜色信息、需求数量和使用场景。如果还有拉头要求、包装要求、样品时间或交货节点，也可以一并说明，这样更有利于快速进入方案确认与报价沟通。',
    },
  ],
} as const;

const faqPageContentEn = {
  metadata: {
    title: 'FAQ',
    description: 'Read common questions about choosing size 3 / 5 / 8 zippers, understanding closed-end and open-end structures, ordering zipper rolls, sampling, lead time, color approval, and quotation preparation.',
  },
  title: 'FAQ',
  subtitle: 'This page summarizes the questions customers ask most often around zipper selection, sampling, quotations, zipper rolls, lead time, and color confirmation.',
  items: [
    {
      question: 'How should I choose between size 3, 5, and 8?',
      answer: 'The first step is usually to judge based on the finished product and where the zipper will be used. Size 3 is more common for lightweight garments, pockets, and kidswear. Size 5 covers the broadest range, including jackets, hoodies, trousers, and everyday bags. Size 8 is more suitable for luggage, heavy-duty bags, workwear, and positions that require greater durability. If you are not sure yet, an old sample, product photo, or use case is often enough to help narrow the direction down.',
    },
    {
      question: 'What is the difference between closed-end and open-end zippers?',
      answer: 'A closed-end zipper has a fixed bottom and is commonly used for pockets, trousers, inner bags, and other positions that do not need to separate completely. An open-end zipper can separate fully at the bottom and is more often used for jackets, hoodies, vests, and front-opening apparel. If the project also involves two-way opening or special sliders, it is better to mention that at the same time.',
    },
    {
      question: 'What is the difference between zipper rolls and finished zippers?',
      answer: 'Finished zippers are already processed to a fixed length and structure, making them suitable for direct installation into garments or finished products. Zipper rolls are supplied by the roll and are more suitable when the customer will cut lengths, add sliders, or do post-processing later. The right choice depends on whether the zipper will be installed directly or processed further in the next production step.',
    },
    {
      question: 'What information should be confirmed before ordering zipper rolls?',
      answer: 'For zipper rolls, it is usually best to confirm the material direction, tooth size, tape color, roll length, whether sliders are also needed, and how the rolls will be used later. If you have old rolls, samples, or previous purchasing records, sharing them can make it easier to confirm common solutions and quotation details.',
    },
    {
      question: 'Can I confirm samples before placing a bulk order?',
      answer: 'Yes. For new developments, multi-color projects, or structures with more detail, it is usually safer to confirm samples first and then move into bulk production. That makes it easier to align size, length, color, slider choice, and structural details before larger quantities are arranged.',
    },
    {
      question: 'How is the sampling cycle usually arranged?',
      answer: 'For standard specifications a sample usually takes about 3 days. New colors, special structures, or projects that need separate accessories take longer, and we confirm the actual timing once the requirement is clear.',
    },
    {
      question: 'Is there a fixed MOQ?',
      answer: 'For finished zippers the minimum order is usually 1,000 pieces. Colors can be mixed within one order; share the split you need and we will confirm it. Dyeing is arranged per color, so any color ordered in a quantity below 2,000 pieces carries a dyeing fee of RMB 150 for that color. Zipper rolls are quoted separately.',
    },
    {
      question: 'How is lead time usually judged?',
      answer: 'Once the sample and order details are confirmed, bulk production usually takes about 10 days. New colors, special structures, or multi-style orders can take longer, and we confirm the schedule before the order is placed.',
    },
    {
      question: 'How should color usually be confirmed?',
      answer: 'If the project has higher requirements for color consistency, it is best to provide a color card number, fabric swatch, old sample color, or another physical reference whenever possible. Color is difficult to confirm reliably through verbal description alone, especially for garments and sun-protective outerwear. The more complete the color reference is, the smoother sampling and bulk follow-up usually become.',
    },
    {
      question: 'Can we still discuss the project if the specification is not fully clear yet?',
      answer: 'Yes. Many projects do not begin with a complete size and structure list. You can start with a sample photo, old sample, product type, use position, or estimated quantity, and we can help narrow the direction among metal, resin, and nylon options within the common size 3, 5, and 8 range.',
    },
    {
      question: 'What information helps quotation move faster?',
      answer: 'At minimum, it is helpful to prepare the zipper type, size, length, open-end or closed-end structure, color information, required quantity, and use case. If you also know the slider requirement, packing method, sample timing, or delivery target, sharing those details at the same time usually makes quotation and solution confirmation much more efficient.',
    },
  ],
} as const;

const faqPageContentEs = {
  metadata: {
    title: 'Preguntas frecuentes',
    description: 'Revise las preguntas comunes sobre la selección de tamaños 3 / 5 / 8, estructuras cerradas y abiertas, cremalleras por rollo, muestreo, plazos, confirmación de color y preparación de cotizaciones.',
  },
  title: 'Preguntas frecuentes',
  subtitle: 'Esta página resume las preguntas que los clientes hacen con más frecuencia sobre selección de cremalleras, muestreo, cotizaciones, cremalleras por rollo, plazos y confirmación de color.',
  items: [
    {
      question: '¿Cómo debo elegir entre los tamaños 3, 5 y 8?',
      answer: 'El primer paso suele ser evaluar el producto final y la posición donde se utilizará la cremallera. El tamaño 3 es más común en prendas ligeras, bolsillos y ropa infantil. El tamaño 5 cubre la gama más amplia, como chaquetas, sudaderas, pantalones y bolsos de uso diario. El tamaño 8 es más adecuado para maletas, bolsos de mayor resistencia, ropa de trabajo y posiciones que requieren mayor durabilidad. Si aún no está seguro, una muestra antigua, una foto del producto o el uso previsto suelen ser suficientes para orientar la selección.',
    },
    {
      question: '¿Cuál es la diferencia entre una cremallera cerrada y una abierta?',
      answer: 'La cremallera cerrada tiene la parte inferior fija y suele utilizarse en bolsillos, pantalones, bolsos interiores y otras posiciones que no necesitan separarse por completo. La cremallera abierta puede separarse totalmente por la parte inferior y se usa con mayor frecuencia en chaquetas, sudaderas, chalecos y prendas con apertura frontal. Si el proyecto incluye doble apertura o cursores especiales, es mejor indicarlo al mismo tiempo.',
    },
    {
      question: '¿Cuál es la diferencia entre cremalleras por rollo y cremalleras terminadas?',
      answer: 'Las cremalleras terminadas ya se procesan con una longitud y estructura fijas, por lo que son adecuadas para instalarse directamente en prendas o productos terminados. Las cremalleras por rollo se suministran por rollo y son más adecuadas cuando el cliente cortará longitudes, montará cursores o realizará un procesamiento posterior. La opción correcta depende de si la cremallera se instalará directamente o si se procesará más adelante en la siguiente fase de producción.',
    },
    {
      question: '¿Qué información debe confirmarse antes de pedir cremalleras por rollo?',
      answer: 'Para las cremalleras por rollo, normalmente conviene confirmar el material, el tamaño del diente, el color de la cinta, la longitud del rollo, si también se necesitan cursores y cómo se utilizarán después. Si tiene rollos antiguos, muestras o historiales de compra anteriores, compartirlos ayuda mucho a confirmar soluciones habituales y detalles de cotización.',
    },
    {
      question: '¿Puedo confirmar muestras antes de hacer un pedido al por mayor?',
      answer: 'Sí. Para desarrollos nuevos, proyectos con muchos colores o estructuras más detalladas, suele ser más seguro confirmar primero las muestras y luego pasar a la producción en volumen. Eso facilita alinear tamaño, longitud, color, tipo de cursor y detalles estructurales antes de organizar cantidades mayores.',
    },
    {
      question: '¿Cómo suele organizarse el tiempo de muestreo?',
      answer: 'Para especificaciones estándar la muestra suele tardar unos 3 días. Los colores nuevos, las estructuras especiales o los proyectos que necesitan accesorios aparte llevan más tiempo, y confirmamos el plazo real una vez que el requisito está claro.',
    },
    {
      question: '¿Existe una MOQ fija?',
      answer: 'Para cremalleras terminadas el pedido mínimo suele ser de 1000 unidades. Se pueden mezclar colores dentro de un mismo pedido; indíquenos el reparto que necesita y se lo confirmamos. El teñido se organiza por color, por lo que cualquier color con una cantidad inferior a 2000 unidades lleva una tasa de teñido de 150 RMB para ese color. Las cremalleras por rollo se cotizan aparte.',
    },
    {
      question: '¿Cómo se define normalmente el plazo de entrega?',
      answer: 'Una vez confirmados la muestra y los detalles del pedido, la producción en volumen suele tardar unos 10 días. Los colores nuevos, las estructuras especiales o los pedidos con varios modelos pueden llevar más tiempo, y confirmamos el calendario antes de cerrar el pedido.',
    },
    {
      question: '¿Cómo debe confirmarse normalmente el color?',
      answer: 'Si el proyecto exige mayor consistencia de color, lo ideal es proporcionar un número de carta de color, una muestra de tejido, una muestra antigua o cualquier referencia física posible. El color es difícil de confirmar de forma fiable solo con una descripción verbal, especialmente en prendas y ropa con protección solar. Cuanto más completa sea la referencia de color, más fluido suele ser el proceso de muestra y producción.',
    },
    {
      question: '¿Podemos hablar del proyecto si la especificación aún no está totalmente clara?',
      answer: 'Sí. Muchos proyectos no empiezan con una lista completa de tamaños y estructuras. Puede comenzar con una foto de muestra, una muestra antigua, el tipo de producto, la posición de uso o una cantidad estimada, y nosotros podemos ayudarle a reducir la selección entre opciones metálicas, de resina y de nylon dentro de los tamaños comunes 3, 5 y 8.',
    },
    {
      question: '¿Qué información ayuda a acelerar la cotización?',
      answer: 'Como mínimo, es útil preparar el tipo de cremallera, el tamaño, la longitud, la estructura abierta o cerrada, la información de color, la cantidad requerida y el uso previsto. Si también conoce el tipo de cursor, el embalaje, el calendario de muestras o la fecha objetivo de entrega, compartirlo al mismo tiempo suele hacer mucho más eficiente la confirmación de solución y la cotización.',
    },
  ],
} as const;

const faqPageContentAr = {
  metadata: {
    title: 'الأسئلة الشائعة',
    description: 'اطلع على الأسئلة الشائعة حول اختيار المقاسات 3 / 5 / 8، والبنية المغلقة والمفتوحة، وسحابات الرول، والعينات، ومواعيد التسليم، وتأكيد اللون، وتحضير عروض الأسعار.',
  },
  title: 'الأسئلة الشائعة',
  subtitle: 'تجمع هذه الصفحة أكثر الأسئلة التي يطرحها العملاء حول اختيار السحابات والعينات والتسعير وسحابات الرول ومواعيد التسليم وتأكيد الألوان.',
  items: [
    {
      question: 'كيف أختار عادة بين المقاسات 3 و5 و8؟',
      answer: 'الخطوة الأولى عادة هي تقييم المنتج النهائي والمكان الذي سيستخدم فيه السحاب. فالمقاس 3 أكثر شيوعا في الملابس الخفيفة والجيوب وملابس الأطفال. أما المقاس 5 فهو الأكثر انتشارا ويستخدم كثيرا في الجاكيتات والهودي والبناطيل والحقائب اليومية. بينما يكون المقاس 8 أنسب للحقائب الكبيرة وملابس العمل والمواضع التي تتطلب متانة أعلى. وإذا لم تكن متأكدا بعد، فإن عينة قديمة أو صورة للمنتج أو وصف الاستخدام تكون غالبا كافية لتحديد الاتجاه الأولي.',
    },
    {
      question: 'ما الفرق بين السحاب المغلق والسحاب المفتوح؟',
      answer: 'السحاب المغلق تكون نهايته السفلية ثابتة، ويستخدم غالبا في الجيوب والبناطيل والجيوب الداخلية للحقائب والمواضع التي لا تحتاج إلى انفصال كامل. أما السحاب المفتوح فينفصل بالكامل من الأسفل، ويستخدم أكثر في الجاكيتات والهودي والصديريات والملابس ذات الفتحة الأمامية الكاملة. وإذا كان المشروع يشمل فتحا مزدوجا أو سحابات خاصة، فمن الأفضل ذكر ذلك مع الطلب.',
    },
    {
      question: 'ما الفرق بين سحابات الرول والسحابات الجاهزة؟',
      answer: 'السحابات الجاهزة تكون معالجة مسبقا بطول وبنية ثابتين، ولذلك تكون مناسبة للتركيب المباشر في الملابس أو المنتجات النهائية. أما سحابات الرول فتورد على شكل لفات، وتكون أنسب عندما يحتاج العميل إلى قص الأطوال أو تركيب السحابات أو إجراء معالجة لاحقة داخل خط الإنتاج. ويعتمد الاختيار الصحيح على ما إذا كان السحاب سيستخدم مباشرة أم سيخضع لمرحلة معالجة لاحقة.',
    },
    {
      question: 'ما المعلومات التي ينبغي تأكيدها قبل طلب سحابات الرول؟',
      answer: 'بالنسبة لسحابات الرول، يفضل عادة تأكيد نوع الخامة ومقاس الأسنان ولون الشريط وطول اللفة وما إذا كانت السحابات مطلوبة معها، إضافة إلى طريقة الاستخدام اللاحقة. وإذا كانت لديك لفات قديمة أو عينات أو سجلات شراء سابقة، فإن مشاركتها تساعد كثيرا في تأكيد الحلول الشائعة وتفاصيل التسعير.',
    },
    {
      question: 'هل يمكن تأكيد العينات قبل طلب الكمية الكبيرة؟',
      answer: 'نعم. في حالات التطوير الجديد أو المشاريع متعددة الألوان أو الهياكل الأكثر تفصيلا، يكون من الأنسب غالبا تأكيد العينات أولا ثم الانتقال إلى الإنتاج بالجملة. وهذا يسهل توحيد المقاس والطول واللون ونوع السحاب والتفاصيل الهيكلية قبل ترتيب الكميات الكبيرة.',
    },
    {
      question: 'كيف يتم ترتيب مدة إعداد العينة عادة؟',
      answer: 'بالنسبة للمواصفات القياسية تستغرق العينة عادة نحو 3 أيام. أما الألوان الجديدة أو الهياكل الخاصة أو المشاريع التي تحتاج مستلزمات منفصلة فتتطلب وقتا أطول، ونؤكد المدة الفعلية بمجرد وضوح المتطلبات.',
    },
    {
      question: 'هل توجد كمية طلب دنيا ثابتة؟',
      answer: 'بالنسبة للسحابات الجاهزة يكون الحد الأدنى للطلب عادة 1000 قطعة. يمكن مزج الألوان ضمن الطلب الواحد؛ أخبرنا بالتوزيع المطلوب وسنؤكده. تتم الصباغة حسب اللون، لذلك يضاف رسم صباغة قدره 150 يوان صيني لأي لون تقل كميته عن 2000 قطعة. أما السحابات بالرول فتسعّر بشكل منفصل.',
    },
    {
      question: 'كيف يتم تحديد موعد التسليم عادة؟',
      answer: 'بعد تأكيد العينة وتفاصيل الطلب، يستغرق الإنتاج بالجملة عادة نحو 10 أيام. قد تحتاج الألوان الجديدة أو الهياكل الخاصة أو الطلبات متعددة الموديلات وقتا أطول، ونؤكد الجدول قبل تثبيت الطلب.',
    },
    {
      question: 'كيف يتم تأكيد اللون عادة؟',
      answer: 'إذا كان المشروع يتطلب درجة أعلى من ثبات اللون، فمن الأفضل توفير رقم بطاقة اللون أو عينة قماش أو عينة قديمة أو أي مرجع مادي متاح. ويصعب غالبا تأكيد اللون بشكل موثوق بالوصف الشفهي فقط، خاصة في الملابس والملابس الواقية من الشمس. وكلما كانت مرجعية اللون أوضح، كان الانتقال إلى العينات والإنتاج أكثر سلاسة.',
    },
    {
      question: 'هل يمكن مناقشة المشروع إذا لم تكن المواصفة واضحة بالكامل بعد؟',
      answer: 'نعم. كثير من المشاريع لا تبدأ بقائمة كاملة من المقاسات والهياكل. يمكنك البدء بصورة لعينة أو عينة قديمة أو نوع المنتج أو موضع الاستخدام أو كمية تقديرية، وسنساعدك على تضييق الاختيار بين المعدني والراتنج والنايلون ضمن المقاسات الشائعة 3 و5 و8.',
    },
    {
      question: 'ما المعلومات التي تجعل التسعير أسرع؟',
      answer: 'كحد أدنى، من المفيد تجهيز نوع السحاب والمقاس والطول والبنية المفتوحة أو المغلقة ومعلومات اللون والكمية المطلوبة والاستخدام النهائي. وإذا كنت تعرف أيضا نوع السحاب أو طريقة التعبئة أو موعد العينات أو موعد التسليم المستهدف، فإن مشاركتها في الوقت نفسه تجعل تأكيد الحل والتسعير أكثر كفاءة بكثير.',
    },
  ],
} as const;

const faqPageContentRu = {
  metadata: {
    title: 'Частые вопросы',
    description: 'Посмотрите частые вопросы о выборе размеров 3 / 5 / 8, разнице между разъемной и неразъемной конструкцией, рулонных молниях, образцах, сроках, подтверждении цвета и подготовке к расчету цены.',
  },
  title: 'Частые вопросы',
  subtitle: 'Здесь собраны вопросы, которые клиенты чаще всего задают по выбору молний, образцам, расчету цены, рулонным цепочкам, срокам и подтверждению цвета.',
  items: [
    {
      question: 'Как обычно выбирать между размерами 3, 5 и 8?',
      answer: 'Первый шаг обычно связан с оценкой конечного изделия и места использования молнии. Размер 3 чаще встречается в легкой одежде, карманах и детских изделиях. Размер 5 охватывает самый широкий круг задач, включая куртки, худи, брюки и повседневные сумки. Размер 8 больше подходит для чемоданов, плотных сумок, рабочей одежды и зон, где требуется повышенная износостойкость. Если вы еще не уверены, старый образец, фото изделия или описание применения обычно уже помогают сузить выбор.',
    },
    {
      question: 'В чем разница между неразъемной и разъемной молнией?',
      answer: 'Неразъемная молния имеет фиксированный низ и обычно используется для карманов, брюк, внутренних карманов сумок и других зон, где не требуется полное разделение. Разъемная молния полностью разделяется снизу и чаще используется для курток, худи, жилетов и одежды с полной передней застежкой. Если в проекте также есть двухзамковые решения или особые бегунки, лучше упомянуть это сразу.',
    },
    {
      question: 'Чем рулонные молнии отличаются от готовых молний?',
      answer: 'Готовые молнии уже обработаны под фиксированную длину и конструкцию, поэтому подходят для прямой установки в одежду или готовое изделие. Рулонные цепочки поставляются в рулонах и удобнее там, где заказчик будет сам нарезать длину, ставить бегунки или выполнять последующую обработку. Выбор зависит от того, будет ли молния устанавливаться сразу или сначала проходить следующий этап обработки.',
    },
    {
      question: 'Что нужно подтвердить перед заказом рулонных молний?',
      answer: 'Для рулонных молний обычно лучше заранее подтвердить материал, размер зуба, цвет ленты, длину рулона, нужны ли бегунки, и как рулон будет использоваться дальше. Если у вас есть старые рулоны, образцы или прежние закупочные записи, их совместное использование заметно упрощает подбор типового решения и расчета цены.',
    },
    {
      question: 'Можно ли сначала утвердить образцы, а потом размещать оптовый заказ?',
      answer: 'Да. Для новых разработок, многоцветных проектов или более сложных конструкций обычно безопаснее сначала подтвердить образцы, а уже потом переходить к крупной партии. Это помогает заранее согласовать размер, длину, цвет, тип бегунка и конструктивные детали.',
    },
    {
      question: 'Как обычно определяется срок подготовки образца?',
      answer: 'Для стандартных спецификаций образец обычно готов примерно за 3 дня. Новые цвета, особые конструкции или проекты, которым нужна отдельная фурнитура, требуют больше времени — точный срок мы подтверждаем, когда требование становится ясным.',
    },
    {
      question: 'Есть ли фиксированный MOQ?',
      answer: 'Для готовых молний минимальный заказ обычно составляет 1000 штук. Цвета можно комбинировать в одном заказе — сообщите нужное распределение, и мы его подтвердим. Окрашивание организуется по цветам, поэтому для любого цвета в количестве менее 2000 штук взимается плата за окрашивание 150 юаней за этот цвет. Молния в рулонах рассчитывается отдельно.',
    },
    {
      question: 'Как обычно оценивается срок поставки?',
      answer: 'После подтверждения образца и деталей заказа серийное производство обычно занимает около 10 дней. Новые цвета, особые конструкции или заказы с несколькими моделями могут занять больше времени; график мы подтверждаем до размещения заказа.',
    },
    {
      question: 'Как обычно подтверждается цвет?',
      answer: 'Если для проекта важна более точная стабильность цвета, лучше по возможности предоставить номер цветовой карты, образец ткани, старый образец или любой другой физический ориентир. По одному лишь словесному описанию цвет надежно подтвердить сложно, особенно в одежде и солнцезащитной верхней одежде. Чем точнее ориентир по цвету, тем проще дальнейшая работа по образцам и партии.',
    },
    {
      question: 'Можно ли обсуждать проект, если спецификация еще не до конца понятна?',
      answer: 'Да. Многие проекты не начинаются с полного списка размеров и конструкций. Вы можете начать с фото образца, старого образца, типа изделия, места применения или ориентировочного количества, а мы поможем сузить выбор между металлическими, смоляными и нейлоновыми решениями в рамках популярных размеров 3, 5 и 8.',
    },
    {
      question: 'Какая информация помогает ускорить расчет цены?',
      answer: 'Как минимум полезно подготовить тип молнии, размер, длину, открытую или закрытую конструкцию, информацию по цвету, необходимое количество и сферу применения. Если вы также знаете требования к бегунку, упаковке, срокам образцов или дате поставки, совместная передача этих данных обычно делает подтверждение решения и расчет цены намного эффективнее.',
    },
  ],
} as const;

const faqPageContentByLocale = {
  zh: faqPageContent,
  en: faqPageContentEn,
  es: faqPageContentEs,
  ar: faqPageContentAr,
  ru: faqPageContentRu,
} satisfies Partial<Record<AppLocale, unknown>>;

export function getFaqPageContent(locale: string) {
  return getLocalizedContent(faqPageContentByLocale, locale);
}
