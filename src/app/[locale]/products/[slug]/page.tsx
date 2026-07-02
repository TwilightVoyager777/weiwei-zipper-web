import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/localization/navigation';
import ProductGallery from '@/components/ProductGallery';
import { alternatesForPath, localizedUrl } from '@/seo/localized-urls';
import { SITE_URL } from '@/config/site-constants';
import { permanentRedirect } from 'next/navigation';
import type { Metadata } from 'next';
import {
  ALL_PRODUCT_PAGE_SLUGS,
  CATEGORY_PRODUCTS,
  CATEGORY_SLUGS,
  CATEGORY_SLUG_TO_KEY,
  PRODUCT_IMAGES,
  getCategoryContent,
  getProductDetailLabels,
  getProductItems,
  getProductSpecLabels,
  isCategorySlug,
  isProductSlug,
} from '@/site-data/product-catalog';
import type { CategorySlug, ProductSlug, ProductSpecKey } from '@/site-data/product-catalog';

type Props = { params: Promise<{ locale: string; slug: string }> };
type ProductPageUi = {
  home: string;
  products: string;
  quoteDescription: string;
  breadcrumbAria: string;
};

async function getProductPageUi(locale: string): Promise<ProductPageUi> {
  const t = await getTranslations({ locale, namespace: 'ProductPage' });
  return {
    home: t('home'),
    products: t('products'),
    quoteDescription: t('quoteDescription'),
    breadcrumbAria: t('breadcrumbAria'),
  };
}

export function generateStaticParams() {
  return ALL_PRODUCT_PAGE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const categoryContent = getCategoryContent(locale);
  const productItems = getProductItems(locale);

  if (isCategorySlug(slug)) {
    const catKey = CATEGORY_SLUG_TO_KEY[slug];
    const category = categoryContent[catKey];
    return {
      title: category.name,
      description: category.description,
      alternates: alternatesForPath(locale, `/products/${slug}`),
    };
  }

  if (isProductSlug(slug)) {
    const product = productItems[slug];
    return {
      title: product.name,
      description: product.description,
      alternates: alternatesForPath(locale, `/products/${slug}`),
    };
  }

  return {};
}

async function CategoryPage({ locale, slug }: { locale: string; slug: CategorySlug }) {
  const categoryContent = getCategoryContent(locale);
  const productItems = getProductItems(locale);
  const productDetailLabels = getProductDetailLabels(locale);
  const ui = await getProductPageUi(locale);
  const catKey = CATEGORY_SLUG_TO_KEY[slug];
  const category = categoryContent[catKey];
  const productSlugs = CATEGORY_PRODUCTS[slug];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: ui.home, item: localizedUrl(locale) },
      { '@type': 'ListItem', position: 2, name: ui.products, item: localizedUrl(locale, '/products') },
      { '@type': 'ListItem', position: 3, name: category.name },
    ],
  };

  const itemListSchema = productSlugs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: category.name,
    description: category.description,
    numberOfItems: productSlugs.length,
    itemListElement: productSlugs.map((productSlug: ProductSlug, index: number) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: productItems[productSlug].name,
      url: localizedUrl(locale, `/products/${productSlug}`),
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {itemListSchema ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      ) : null}

      <div className="container mx-auto px-4 py-8 sm:py-12">
        <nav className="text-sm text-gray-500 mb-6" aria-label={ui.breadcrumbAria}>
          <ol className="flex items-center gap-2 flex-wrap">
            <li><Link href="/" className="hover:text-blue-800">{ui.home}</Link></li>
            <li>/</li>
            <li><Link href="/products" className="hover:text-blue-800">{ui.products}</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{category.name}</li>
          </ol>
        </nav>

        <div className="max-w-3xl mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">{category.name}</h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{category.description}</p>
        </div>

        <section className="max-w-3xl mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{productDetailLabels.overview}</h2>
          <p className="text-gray-700 leading-relaxed mb-6">{category.overview}</p>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">{productDetailLabels.features}</h3>
          <ul className="space-y-2">
            {category.keyFeatures.map((feature: string) => (
              <li key={feature} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {category.gallery ? (
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{category.gallery.title}</h2>
            {category.gallery.description ? (
              <p className="text-gray-600 mb-6 max-w-3xl">{category.gallery.description}</p>
            ) : null}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {category.gallery.items.map((item) => (
                <div key={item.image} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {productSlugs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
            {productSlugs.map((productSlug: ProductSlug) => (
              <Link
                key={productSlug}
                href={`/products/${productSlug}` as any}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg active:shadow-md transition-all group"
              >
                <div className="h-40 sm:h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                  <Image
                    src={PRODUCT_IMAGES[productSlug]}
                    alt={productItems[productSlug].name}
                    width={300}
                    height={200}
                    className="object-contain max-h-[160px] w-auto group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-800 transition-colors">
                    {productItems[productSlug].name}
                  </h2>
                  <p className="text-sm text-gray-600 line-clamp-2">{productItems[productSlug].description}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : null}

        {category.applications && (
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{category.applications.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.applications.items.map((item: { title: string; description: string }) => (
                <div key={item.title} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-sm transition-shadow">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {category.selectionGuide && (
          <section className="mb-12 bg-gray-50 rounded-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{category.selectionGuide.title}</h2>
            <p className="text-gray-600 mb-6 max-w-3xl">{category.selectionGuide.description}</p>
            <div className="space-y-4">
              {category.selectionGuide.factors.map((factor: { title: string; description: string }, index: number) => (
                <div key={factor.title} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold text-blue-800">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">{factor.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{factor.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {category.faq && category.faq.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{productDetailLabels.faqTitle}</h2>
            <div className="space-y-4">
              {category.faq.map((item: { question: string; answer: string }, index: number) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <h3 className="text-sm font-semibold text-gray-900 p-4 bg-gray-50">{item.question}</h3>
                  <p className="text-sm text-gray-600 p-4 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mb-12 bg-blue-50 border border-blue-100 rounded-lg p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1">
              <h2 className="text-lg font-bold text-gray-900 mb-1">{productDetailLabels.inquiryCta}</h2>
              <p className="text-sm text-gray-600">{productDetailLabels.inquiryCtaDescription}</p>
            </div>
            <Link href="/quote" className="w-full md:w-auto bg-blue-900 text-white px-6 py-3 rounded font-semibold hover:bg-blue-800 transition-colors text-center whitespace-nowrap">
              {productDetailLabels.inquiryButton}
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">{productDetailLabels.otherCategories}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {CATEGORY_SLUGS.filter((categorySlug) => categorySlug !== slug).map((categorySlug) => (
              <Link
                key={categorySlug}
                href={`/products/${categorySlug}` as any}
                className="bg-blue-50 border border-blue-100 rounded-lg p-3 sm:p-4 text-center hover:bg-blue-100 transition-colors"
              >
                <span className="text-sm font-medium text-blue-900">
                  {categoryContent[CATEGORY_SLUG_TO_KEY[categorySlug]].name}
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12 bg-blue-900 text-white rounded-lg p-6 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">{productDetailLabels.ctaTitle}</h2>
          <p className="text-blue-100 mb-6 max-w-lg mx-auto text-sm sm:text-base">{productDetailLabels.ctaDescription}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/quote" className="w-full sm:w-auto bg-white text-blue-900 px-6 py-2.5 rounded font-semibold hover:bg-blue-50 transition-colors">
              {productDetailLabels.requestQuote}
            </Link>
            <Link href="/products" className="w-full sm:w-auto border border-white/30 px-6 py-2.5 rounded font-medium text-sm hover:bg-white/10 transition-colors">
              {productDetailLabels.viewProducts}
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

async function ProductDetailPage({ locale, slug }: { locale: string; slug: ProductSlug }) {
  const productItems = getProductItems(locale);
  const productDetailLabels = getProductDetailLabels(locale);
  const productSpecLabels = getProductSpecLabels(locale);
  const ui = await getProductPageUi(locale);
  const product = productItems[slug];

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.overview,
    image: `${SITE_URL}${PRODUCT_IMAGES[slug]}`,
    brand: { '@type': 'Brand', name: 'Weiwei Zipper' },
    manufacturer: {
      '@type': 'Organization',
      name: 'Yiwu Weiwei Zipper Co., Ltd.',
    },
    category: 'Zippers',
    url: localizedUrl(locale, `/products/${slug}`),
    offers: {
      '@type': 'Offer',
      priceCurrency: 'CNY',
      price: '0',
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Yiwu Weiwei Zipper Co., Ltd.',
      },
      url: localizedUrl(locale, '/quote'),
      description: ui.quoteDescription,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: ui.home, item: localizedUrl(locale) },
      { '@type': 'ListItem', position: 2, name: ui.products, item: localizedUrl(locale, '/products') },
      { '@type': 'ListItem', position: 3, name: product.name },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="container mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6" aria-label={ui.breadcrumbAria}>
          <ol className="flex items-center gap-2 flex-wrap">
            <li><Link href="/" className="hover:text-blue-800">{ui.home}</Link></li>
            <li>/</li>
            <li><Link href="/products" className="hover:text-blue-800">{ui.products}</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{product.name}</li>
          </ol>
        </nav>

        <div className="mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">{product.name}</h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl">{product.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
          <div className="lg:col-span-2 space-y-10">
            <section>
              {product.gallery && product.gallery.length > 0 ? (
                <ProductGallery
                  images={product.gallery.map((item) => ({ src: item.image, alt: item.title }))}
                />
              ) : (
                <div className="bg-gray-50 rounded-lg p-4 sm:p-8 flex items-center justify-center border border-gray-200">
                  <Image
                    src={PRODUCT_IMAGES[slug]}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="object-contain max-h-[280px] w-auto sm:max-h-[400px]"
                    priority
                  />
                </div>
              )}
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{productDetailLabels.overview}</h2>
              <p className="text-gray-700 leading-relaxed">{product.overview}</p>
            </section>

            {product.gallery && product.gallery.length > 0 ? (
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{productDetailLabels.galleryTitle}</h2>
                <div className="space-y-5">
                  {product.gallery.map((item) => (
                    <div
                      key={item.image}
                      className="grid grid-cols-1 sm:grid-cols-2 bg-white border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <div className="bg-gray-50">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={800}
                          height={534}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-5 sm:p-6 flex flex-col justify-center">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{productDetailLabels.features}</h2>
              <ul className="space-y-2">
                {product.features.map((feature: string) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{productDetailLabels.specifications}</h2>
              <div className="overflow-x-auto -mx-4 sm:mx-0 border border-gray-200 rounded-lg">
                <table className="w-full text-sm min-w-[400px]">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left px-3 py-3 font-semibold text-gray-900 w-1/3 sm:px-4">{productDetailLabels.property}</th>
                      <th className="text-left px-3 py-3 font-semibold text-gray-900 sm:px-4">{productDetailLabels.value}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(Object.entries(product.specifications) as [ProductSpecKey, string][]).map(([key, value], index: number) => (
                      <tr key={key} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-3 py-3 font-medium text-gray-700 sm:px-4">{productSpecLabels[key]}</td>
                        <td className="px-3 py-3 text-gray-600 sm:px-4">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{productDetailLabels.applications}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.applications.map((application: string) => (
                  <div key={application} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700">{application}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="bg-blue-900 text-white rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">{productDetailLabels.ctaTitle}</h3>
              <p className="text-blue-100 text-sm mb-4">{productDetailLabels.ctaDescription}</p>
              <Link
                href="/quote"
                className="block w-full text-center bg-white text-blue-900 px-4 py-2.5 rounded font-semibold hover:bg-blue-50 transition-colors mb-3"
              >
                {productDetailLabels.requestQuote}
              </Link>
              <Link
                href="/contact"
                className="block w-full text-center border border-white/30 px-4 py-2.5 rounded text-sm hover:bg-white/10 transition-colors"
              >
                {productDetailLabels.talkToTeam}
              </Link>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <p className="text-sm text-green-800">{productDetailLabels.qualityNote}</p>
              </div>
            </div>

            <Link href="/products" className="flex items-center gap-2 text-blue-800 font-medium hover:underline text-sm">
              ← {productDetailLabels.backToProducts}
            </Link>
          </aside>
        </div>
      </div>
    </>
  );
}

export default async function ProductSlugPage({ params }: Props) {
  const { locale, slug } = await params;

  if (isCategorySlug(slug)) {
    return <CategoryPage locale={locale} slug={slug} />;
  }

  if (isProductSlug(slug)) {
    return <ProductDetailPage locale={locale} slug={slug} />;
  }

  permanentRedirect(`/${locale}`);
}
