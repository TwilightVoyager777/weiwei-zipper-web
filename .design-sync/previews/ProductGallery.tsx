import { ProductGallery } from 'weiwei-zipper-web';

const images = [
  { src: '/products/metal-zipper-main.png', alt: '金属拉链主图' },
  { src: '/products/nylon-zipper-main.png', alt: '尼龙拉链主图' },
  { src: '/products/resin-zipper-main.png', alt: '树脂拉链主图' },
  { src: '/products/bag.png', alt: '箱包应用场景' },
];

// 多图画廊 — large hero image plus clickable thumbnail strip (active thumb
// gets a blue border).
export const MultiImageGallery = () => (
  <div className="max-w-3xl mx-auto">
    <ProductGallery images={images} />
  </div>
);

// 单图模式 — thumbnails are hidden automatically when only one image is passed.
export const SingleImageGallery = () => (
  <div className="max-w-3xl mx-auto">
    <ProductGallery images={[{ src: '/products/cloth.png', alt: '服装面料应用' }]} />
  </div>
);
