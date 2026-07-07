// Design-sync bundle entry. The 7 site components are default exports, which
// the converter's synthesized `export * from` entry cannot re-export — this
// barrel names them explicitly. prepare.sh copies it into the stub package at
// node_modules/weiwei-zipper-web/ds-entry.ts, where ./src resolves via symlink.
// Adding a component? Add it here AND in componentSrcMap in config.json.
export { default as Header } from './src/components/Header';
export { default as Footer } from './src/components/Footer';
export { default as ContactForm } from './src/components/ContactForm';
export { default as ProductGallery } from './src/components/ProductGallery';
export { default as ZoomableImage } from './src/components/ZoomableImage';
export { default as WhatsAppFloat } from './src/components/WhatsAppFloat';
export { default as InquiryPageLayout } from './src/components/InquiryPageLayout';
export * from './src/components/Icons';
