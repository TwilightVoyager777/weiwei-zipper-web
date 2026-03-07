import Image from 'next/image';
import { Link } from '@/localization/navigation';
import { alternatesForPath } from '@/seo/localized-urls';
import {
  CATEGORY_IMAGES,
  categoryOrder,
  categoryContent,
  productItems,
  PRODUCT_SLUGS,
  PRODUCT_IMAGES,
  productsPageContent,
} from '@/site-data/product-catalog';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: productsPageContent.metadata.title,
    description: productsPageContent.metadata.description,
    alternates: alternatesForPath(locale, '/products'),
  };
}

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{productsPageContent.title}</h1>
        <p className="text-gray-600 text-lg">{productsPageContent.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {categoryOrder.map((cat) => (
          <Link
            key={cat}
            href={`/products/${categoryContent[cat].slug}` as any}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all group"
          >
            <div className="h-44 sm:h-52 bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center overflow-hidden">
              <Image
                src={CATEGORY_IMAGES[cat]}
                alt={categoryContent[cat].name}
                width={400}
                height={300}
                className="object-contain max-h-[200px] w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <h2 className="text-lg font-semibold text-blue-900 mb-1 group-hover:text-blue-800">
                {categoryContent[cat].name}
              </h2>
              <p className="text-sm text-gray-600">{categoryContent[cat].description}</p>
            </div>
          </Link>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6">全部产品</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCT_SLUGS.map((slug) => (
          <Link
            key={slug}
            href={`/products/${slug}` as any}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all group"
          >
            <div className="h-40 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
              <Image
                src={PRODUCT_IMAGES[slug]}
                alt={productItems[slug].name}
                width={300}
                height={200}
                className="object-contain max-h-[150px] w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-800">
                {productItems[slug].name}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">{productItems[slug].description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
