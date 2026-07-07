import { WhatsAppFloat } from 'weiwei-zipper-web';

// 浮动 WhatsApp 按钮 — normally fixed to the viewport's bottom-right; the
// transformed wrapper makes the fixed positioning resolve inside this cell.
export const FloatingButton = () => (
  <div
    className="relative h-40 w-full bg-gray-50 rounded-lg border border-gray-200"
    style={{ transform: 'translateZ(0)' }}
  >
    <WhatsAppFloat />
  </div>
);
