import { WhatsAppIcon as Icon } from 'weiwei-zipper-web';

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

// Floating chat button, as rendered by WhatsAppFloat on the site.
export const FloatingButton = () => (
  <span className="inline-flex items-center justify-center rounded-full bg-green-500 text-white p-3 shadow-lg">
    <Icon className="w-6 h-6" />
  </span>
);
