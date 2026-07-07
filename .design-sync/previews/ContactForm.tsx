import { ContactForm } from 'weiwei-zipper-web';

// 询价表单 — the site's only lead-capture form (posts to /api/inquiry).
// Self-contained: all labels/placeholders come from the zh message catalog.
export const InquiryForm = () => (
  <div className="max-w-3xl bg-white">
    <ContactForm />
  </div>
);
