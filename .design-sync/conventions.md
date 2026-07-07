# Building with the Weiwei Zipper (伟伟拉链) design system

B2B marketing/lead-gen visual language for a Chinese zipper manufacturer.
Language: **Chinese (zh)** — all component-internal strings (nav, form labels,
footer) come from a built-in zh catalog. Write your own copy in Chinese too.

## Wrapping — required

Wrap every design in `DSProvider` (exported by the bundle). `Header`, `Footer`,
`ContactForm`, `WhatsAppFloat`, and `InquiryPageLayout` read i18n/router context
from it and **throw without it**; icons and image components work either way.

```jsx
const { DSProvider, Header, Footer } = window.WeiweiZipper;
<DSProvider>
  <Header />
  {/* your page */}
  <Footer />
</DSProvider>
```

## Styling idiom — Tailwind utility classes (subset!)

Style layout glue with Tailwind classes, BUT the shipped stylesheet contains
only the utilities the site itself uses — an arbitrary Tailwind class may not
exist. Before leaning on one, check it appears in `styles.css`'s import
`_ds_bundle.css`. Verified core vocabulary:

- **Primary/brand**: `bg-blue-700` `hover:bg-blue-800` `text-blue-700` `bg-blue-50` `border-blue-700` (CTA blue); `bg-green-500` (WhatsApp green); dark panels `bg-gray-900`
- **Surfaces/text**: `bg-white` `bg-gray-50` `text-gray-900` `text-gray-600` `text-white` `border-gray-200`
- **Layout**: `flex` `items-center` `justify-between` `grid` `grid-cols-2` `md:grid-cols-3` `gap-8` `mx-auto` `max-w-6xl` `max-w-4xl` `max-w-3xl` `px-4` `px-6` `py-8` `py-12` `py-20`
- **Type/shape**: `font-bold` `text-3xl` `text-4xl` `text-sm` `rounded-lg` `rounded-full` `shadow-lg` `prose` (long-form)

No CSS variables API and no theme props — the design language is these
utilities plus system-font stacks (Avenir Next / PingFang SC; nothing to load).

## Where the truth lives

- `styles.css` → imports `_ds_bundle.css` (every available utility class — grep it when unsure)
- `components/general/<Name>/<Name>.d.ts` — exact props; `<Name>.prompt.md` — usage
- Icons (16, e.g. `PhoneIcon`, `WhatsAppIcon`, `WeChatIcon`): props `{ className?, strokeWidth? }`, sized/colored via className (`w-6 h-6 text-blue-700`), stroke icons honor `strokeWidth`, brand glyphs are filled

## Idiomatic page snippet

```jsx
const { DSProvider, Header, Footer, ContactForm, ProductGallery, WhatsAppFloat } = window.WeiweiZipper;
<DSProvider>
  <Header />
  <main className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
    <ProductGallery images={[
      { src: '/products/metal-zipper-main.png', alt: '金属拉链' },
      { src: '/products/nylon-zipper-main.png', alt: '尼龙拉链' },
    ]} />
    <div>
      <h1 className="text-3xl font-bold text-gray-900">金属拉链定制</h1>
      <p className="text-gray-600 py-8">3号/5号/8号常用规格，支持打样。</p>
      <ContactForm />
    </div>
  </main>
  <Footer />
  <WhatsAppFloat />
</DSProvider>
```

**Images: always pass root-relative site paths** (`/products/metal-zipper-main.png`,
`/products/nylon-zipper-main.png`, `/products/resin-zipper-main.png`, `/brand/…`,
`/hero/…`) to image props and `<img>` tags — they resolve against the live site
automatically (via the bundled image loader and img-src rewriter). Absolute
`https://…` URLs FAIL in `ProductGallery`/`ZoomableImage` (the image optimizer
rejects them).
