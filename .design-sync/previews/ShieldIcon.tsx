import { ShieldIcon as Icon } from 'weiwei-zipper-web';

// Stroke icon, sized via className (Tailwind), colored via currentColor.
export const Sizes = () => (
  <div className="flex items-end gap-6 text-gray-700">
    <Icon className="w-4 h-4" />
    <Icon className="w-6 h-6" />
    <Icon className="w-8 h-8" />
    <Icon className="w-12 h-12" />
  </div>
);

export const Colors = () => (
  <div className="flex items-center gap-6">
    <Icon className="w-8 h-8 text-gray-700" />
    <Icon className="w-8 h-8 text-blue-700" />
    <Icon className="w-8 h-8 text-green-600" />
    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-700 text-white">
      <Icon className="w-6 h-6" />
    </span>
  </div>
);

export const StrokeWeights = () => (
  <div className="flex items-center gap-6 text-gray-700">
    <Icon className="w-8 h-8" strokeWidth={1} />
    <Icon className="w-8 h-8" strokeWidth={1.5} />
    <Icon className="w-8 h-8" strokeWidth={2.5} />
  </div>
);
