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

const faqPageContentByLocale = {
  zh: faqPageContent,
  en: faqPageContentEn,
} satisfies Record<AppLocale, unknown>;

export function getFaqPageContent(locale: string) {
  return getLocalizedContent(faqPageContentByLocale, locale);
}
