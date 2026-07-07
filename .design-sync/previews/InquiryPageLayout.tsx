import { InquiryPageLayout } from 'weiwei-zipper-web';

// 询盘页整体布局 — title/subtitle, blue contact card with WhatsApp CTA and
// 微信 QR block, plus the embedded ContactForm (dynamic import).
export const InquiryPage = () => (
  <InquiryPageLayout
    content={{
      title: '获取报价',
      subtitle: '告诉我们您的拉链需求，我们将在24小时内回复，并提供免费样品与详细报价。',
      cardTitle: '联系方式',
      responseNote: '工作日24小时内回复，支持中英文沟通。',
      wechatLabel: '微信咨询',
      wechatScan: '扫码添加微信',
    }}
  />
);
