import { WeChatIcon as Icon } from 'weiwei-zipper-web';

// Filled brand glyph (fill="currentColor"); no strokeWidth support.
export const Sizes = () => (
  <div className="flex items-end gap-6 text-green-600">
    <Icon className="w-4 h-4" />
    <Icon className="w-6 h-6" />
    <Icon className="w-8 h-8" />
    <Icon className="w-12 h-12" />
  </div>
);

export const BrandColors = () => (
  <div className="flex items-center gap-6">
    <Icon className="w-8 h-8 text-green-600" />
    <Icon className="w-8 h-8 text-gray-700" />
    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white">
      <Icon className="w-6 h-6" />
    </span>
  </div>
);

// Footer contact row, as rendered on the dark site footer.
export const ContactRow = () => (
  <div className="inline-flex items-center gap-3 rounded-lg bg-gray-900 text-gray-300 p-3 text-sm">
    <Icon className="w-5 h-5" />
    <span>WeChat: weiweizipper</span>
  </div>
);
