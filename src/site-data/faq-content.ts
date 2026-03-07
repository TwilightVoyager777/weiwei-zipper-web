import { getLocalizedContent, type AppLocale } from '@/localization/content';

export const faqPageContent = {
  metadata: {
    title: '常见问题 | 伟伟拉链',
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
      answer: '打样周期通常会根据规格复杂度、颜色确认方式、是否需要特殊拉头和当前排样情况综合判断。常规方案通常更快，特殊颜色或特殊结构会相应延长。最稳妥的做法，是在询盘时先把用途、规格、颜色和样品需求说明清楚，再确认具体样品安排。',
    },
    {
      question: '起订量是固定的吗？',
      answer: '起订量通常不会简单按单一数字统一判断，而是会结合品类、规格、颜色、是否常规款以及是否需要特殊配件一起确认。常用规格和常规方案沟通会更顺畅；如果是新色、新结构或特殊配套需求，建议先把数量预估同步说明，以便更准确评估安排方式。',
    },
    {
      question: '交期一般多久？',
      answer: '交期会受规格、颜色、数量、是否打样确认以及当前排单情况影响。常用规格通常更容易衔接安排；需要特殊颜色、特殊结构或多款并行时，交期会按实际项目确认。建议在报价阶段就同步说明目标时间节点，便于一起判断更合适的推进节奏。',
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
    title: 'FAQ | Weiwei Zipper',
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
      answer: 'Sampling timing depends on the complexity of the specification, the color confirmation method, whether special sliders are needed, and the current sample schedule. Standard solutions are usually faster, while special colors or structures can take longer. The clearest way is to share the use case, size, color, and sample requirements first, then confirm the actual sample timing based on that information.',
    },
    {
      question: 'Is there a fixed MOQ?',
      answer: 'MOQ is usually not judged by one single number alone. It often depends on the zipper type, size, color, whether it is a standard item, and whether special accessories are involved. Communication is usually easier for common sizes and standard solutions. If the project requires new colors, special structures, or matching parts, it is better to provide the estimated quantity early so the arrangement can be evaluated more accurately.',
    },
    {
      question: 'How is lead time usually judged?',
      answer: 'Lead time is influenced by size, color, quantity, whether sampling is required, and the current production schedule. Standard sizes are usually easier to arrange. Special colors, structures, or multi-style orders may take longer and need to be confirmed against the actual project. It is always better to share your target timing during the quotation stage so the delivery schedule can be assessed together.',
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
    title: 'Preguntas frecuentes | Weiwei Zipper',
    description: 'Revise las preguntas comunes sobre la seleccion de tamanos 3 / 5 / 8, estructuras cerradas y abiertas, cremalleras por rollo, muestreo, plazos, confirmacion de color y preparacion de cotizaciones.',
  },
  title: 'Preguntas frecuentes',
  subtitle: 'Esta pagina resume las preguntas que los clientes hacen con mas frecuencia sobre seleccion de cremalleras, muestreo, cotizaciones, cremalleras por rollo, plazos y confirmacion de color.',
  items: [
    {
      question: 'Como debo elegir entre los tamanos 3, 5 y 8?',
      answer: 'El primer paso suele ser evaluar el producto final y la posicion donde se utilizara la cremallera. El tamano 3 es mas comun en prendas ligeras, bolsillos y ropa infantil. El tamano 5 cubre la gama mas amplia, como chaquetas, sudaderas, pantalones y bolsos de uso diario. El tamano 8 es mas adecuado para maletas, bolsos de mayor resistencia, ropa de trabajo y posiciones que requieren mayor durabilidad. Si aun no esta seguro, una muestra antigua, una foto del producto o el uso previsto suelen ser suficientes para orientar la seleccion.',
    },
    {
      question: 'Cual es la diferencia entre una cremallera cerrada y una abierta?',
      answer: 'La cremallera cerrada tiene la parte inferior fija y suele utilizarse en bolsillos, pantalones, bolsos interiores y otras posiciones que no necesitan separarse por completo. La cremallera abierta puede separarse totalmente por la parte inferior y se usa con mayor frecuencia en chaquetas, sudaderas, chalecos y prendas con apertura frontal. Si el proyecto incluye doble apertura o cursores especiales, es mejor indicarlo al mismo tiempo.',
    },
    {
      question: 'Cual es la diferencia entre cremalleras por rollo y cremalleras terminadas?',
      answer: 'Las cremalleras terminadas ya se procesan con una longitud y estructura fijas, por lo que son adecuadas para instalarse directamente en prendas o productos terminados. Las cremalleras por rollo se suministran por rollo y son mas adecuadas cuando el cliente cortara longitudes, montara cursores o realizara un procesamiento posterior. La opcion correcta depende de si la cremallera se instalara directamente o si se procesara mas adelante en la siguiente fase de produccion.',
    },
    {
      question: 'Que informacion debe confirmarse antes de pedir cremalleras por rollo?',
      answer: 'Para las cremalleras por rollo, normalmente conviene confirmar el material, el tamano del diente, el color de la cinta, la longitud del rollo, si tambien se necesitan cursores y como se utilizaran despues. Si tiene rollos antiguos, muestras o historiales de compra anteriores, compartirlos ayuda mucho a confirmar soluciones habituales y detalles de cotizacion.',
    },
    {
      question: 'Puedo confirmar muestras antes de hacer un pedido al por mayor?',
      answer: 'Si. Para desarrollos nuevos, proyectos con muchos colores o estructuras mas detalladas, suele ser mas seguro confirmar primero las muestras y luego pasar a la produccion en volumen. Eso facilita alinear tamano, longitud, color, tipo de cursor y detalles estructurales antes de organizar cantidades mayores.',
    },
    {
      question: 'Como suele organizarse el tiempo de muestreo?',
      answer: 'El tiempo de muestreo depende de la complejidad de la especificacion, del metodo de confirmacion del color, de si se requieren cursores especiales y del calendario actual de muestras. Las soluciones estandar suelen ser mas rapidas, mientras que colores o estructuras especiales pueden requerir mas tiempo. La forma mas clara es compartir primero el uso previsto, el tamano, el color y los requisitos de muestra, y despues confirmar el calendario real con esa base.',
    },
    {
      question: 'Existe una MOQ fija?',
      answer: 'La MOQ normalmente no se define con un solo numero. Suele depender del tipo de cremallera, tamano, color, si es un articulo estandar y si incluye accesorios especiales. La comunicacion suele ser mas sencilla para tamanos comunes y soluciones estandar. Si el proyecto requiere nuevos colores, estructuras especiales o piezas complementarias, conviene indicar la cantidad estimada desde el principio para poder evaluar mejor la produccion.',
    },
    {
      question: 'Como se define normalmente el plazo de entrega?',
      answer: 'El plazo depende del tamano, color, cantidad, de si se requieren muestras y del calendario actual de produccion. Los tamanos estandar suelen organizarse con mas facilidad. Los colores especiales, las estructuras especiales o los pedidos con varios estilos pueden requerir mas tiempo y deben confirmarse segun el proyecto real. Siempre es mejor compartir el objetivo de tiempo durante la etapa de cotizacion para poder evaluar juntos el plan de entrega.',
    },
    {
      question: 'Como debe confirmarse normalmente el color?',
      answer: 'Si el proyecto exige mayor consistencia de color, lo ideal es proporcionar un numero de carta de color, una muestra de tejido, una muestra antigua o cualquier referencia fisica posible. El color es dificil de confirmar de forma fiable solo con una descripcion verbal, especialmente en prendas y ropa con proteccion solar. Cuanto mas completa sea la referencia de color, mas fluido suele ser el proceso de muestra y produccion.',
    },
    {
      question: 'Podemos hablar del proyecto si la especificacion aun no esta totalmente clara?',
      answer: 'Si. Muchos proyectos no empiezan con una lista completa de tamanos y estructuras. Puede comenzar con una foto de muestra, una muestra antigua, el tipo de producto, la posicion de uso o una cantidad estimada, y nosotros podemos ayudarle a reducir la seleccion entre opciones metalicas, de resina y de nylon dentro de los tamanos comunes 3, 5 y 8.',
    },
    {
      question: 'Que informacion ayuda a acelerar la cotizacion?',
      answer: 'Como minimo, es util preparar el tipo de cremallera, el tamano, la longitud, la estructura abierta o cerrada, la informacion de color, la cantidad requerida y el uso previsto. Si tambien conoce el tipo de cursor, el embalaje, el calendario de muestras o la fecha objetivo de entrega, compartirlo al mismo tiempo suele hacer mucho mas eficiente la confirmacion de solucion y la cotizacion.',
    },
  ],
} as const;

const faqPageContentAr = {
  metadata: {
    title: 'الأسئلة الشائعة | Weiwei Zipper',
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
      answer: 'تعتمد مدة إعداد العينة على تعقيد المواصفة وطريقة تأكيد اللون وما إذا كانت هناك حاجة إلى سحابات خاصة وكذلك على جدول العينات الحالي. وعادة تكون الحلول القياسية أسرع، بينما تحتاج الألوان أو البنى الخاصة إلى وقت أطول. وأوضح طريقة هي مشاركة الاستخدام والمقاس واللون ومتطلبات العينة أولا، ثم تأكيد المدة الفعلية بناء على تلك المعلومات.',
    },
    {
      question: 'هل توجد كمية طلب دنيا ثابتة؟',
      answer: 'غالبا لا يتم تحديد الحد الأدنى للطلب برقم واحد ثابت. بل يعتمد ذلك على نوع السحاب والمقاس واللون وما إذا كان المنتج قياسيا وما إذا كانت هناك ملحقات خاصة. وعادة يكون التنسيق أسهل في المقاسات الشائعة والحلول القياسية. وإذا كان المشروع يتطلب ألوانا جديدة أو هياكل خاصة أو ملحقات إضافية، فمن الأفضل مشاركة الكمية التقديرية مبكرا حتى يمكن تقييم الترتيب بدقة أكبر.',
    },
    {
      question: 'كيف يتم تحديد موعد التسليم عادة؟',
      answer: 'يتأثر موعد التسليم بالمقاس واللون والكمية، وما إذا كانت العينات مطلوبة، وكذلك بجدول الإنتاج الحالي. وعادة يكون ترتيب المقاسات القياسية أسهل. أما الألوان الخاصة أو البنى الخاصة أو الطلبات متعددة الموديلات فقد تحتاج إلى وقت أطول ويجب تأكيدها حسب المشروع الفعلي. ومن الأفضل دائما مشاركة الموعد المستهدف أثناء مرحلة التسعير لتقييم خطة التسليم بشكل مشترك.',
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
    title: 'Частые вопросы | Weiwei Zipper',
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
      answer: 'Срок подготовки образца зависит от сложности спецификации, способа подтверждения цвета, необходимости специальных бегунков и текущего графика образцов. Стандартные решения обычно быстрее, а особые цвета и конструкции требуют больше времени. Самый удобный способ — сначала прислать сферу применения, размер, цвет и требования к образцу, а затем уже подтвердить фактический срок на этой основе.',
    },
    {
      question: 'Есть ли фиксированный MOQ?',
      answer: 'MOQ редко определяется одной единственной цифрой. Он обычно зависит от типа молнии, размера, цвета, того, является ли позиция стандартной, и нужны ли специальные аксессуары. Для популярных размеров и типовых решений согласование обычно идет легче. Если проект требует новых цветов, особой конструкции или специальных комплектующих, лучше заранее сообщить ожидаемое количество, чтобы точнее оценить организацию поставки.',
    },
    {
      question: 'Как обычно оценивается срок поставки?',
      answer: 'Срок поставки зависит от размера, цвета, количества, необходимости образцов и текущей производственной загрузки. Стандартные размеры обычно организуются проще. Особые цвета, конструкции или заказы с несколькими стилями могут потребовать больше времени и должны подтверждаться исходя из реального проекта. Поэтому лучше уже на этапе расчета цены сообщить желаемый срок, чтобы вместе оценить подходящий график поставки.',
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
