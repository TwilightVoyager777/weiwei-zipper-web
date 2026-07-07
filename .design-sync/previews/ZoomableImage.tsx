import { ZoomableImage } from 'weiwei-zipper-web';

// 可放大图片（闭合态）— renders as a full-width cursor-zoom-in button; the
// fullscreen overlay is click-driven and not statically renderable.
export const ClosedState = () => (
  <div className="max-w-3xl mx-auto">
    <ZoomableImage
      src="/products/metal-zipper-main.png"
      alt="金属拉链产品细节图"
      width={1200}
      height={800}
      className="w-full h-auto rounded-lg border border-gray-200"
    />
  </div>
);
