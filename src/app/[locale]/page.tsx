import Image from 'next/image';
import { Link } from '@/localization/navigation';
import { homeContent, useCasesContent } from '@/site-data/site-content';
import { categoryOrder, categoryContent, CATEGORY_IMAGES } from '@/site-data/product-catalog';

const trustIcons: Record<number, string> = {
  0: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  1: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  2: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  3: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
};

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
              {homeContent.hero.badges.map((badge) => (
                <span key={badge} className="bg-white/15 text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full border border-white/20">
                  {badge}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {homeContent.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
              {homeContent.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3.5 rounded font-semibold text-center transition-colors"
              >
                {homeContent.hero.primaryCta}
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-3.5 rounded font-semibold text-center transition-colors"
              >
                {homeContent.hero.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-4 sm:py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-3 sm:gap-6 text-center">
            {homeContent.hero.stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400">{stat.value}</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {homeContent.trust.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeContent.trust.items.map((block, index) => (
              <div key={block.title} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={trustIcons[index]} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{block.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{block.description}</p>
                <ul className="space-y-1.5">
                  {block.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-xs text-gray-500">
                      <svg className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{homeContent.featuredProducts.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">{homeContent.featuredProducts.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {categoryOrder.map((cat) => (
              <Link
                key={cat}
                href={`/products/${categoryContent[cat].slug}` as any}
                className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg active:shadow-md transition-all"
              >
                <div className="h-44 sm:h-52 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                  <Image
                    src={CATEGORY_IMAGES[cat]}
                    alt={categoryContent[cat].name}
                    width={400}
                    height={300}
                    className="object-contain max-h-[200px] w-auto group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-800 transition-colors">
                    {categoryContent[cat].name}
                  </h3>
                  <p className="text-sm text-gray-600">{categoryContent[cat].description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{homeContent.useCasesPreview.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">{homeContent.useCasesPreview.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {useCasesContent.items.map((item) => (
              <div key={item.slug} className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/industries" className="text-blue-800 font-medium hover:underline">
              查看全部 →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">{homeContent.bottomCta.title}</h2>
          <p className="text-blue-100 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base">{homeContent.bottomCta.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-900 px-6 sm:px-8 py-3 rounded font-semibold hover:bg-blue-50 active:bg-blue-100 transition-colors">
              {homeContent.bottomCta.primaryCta}
            </Link>
            <Link href="/products" className="border-2 border-white px-6 sm:px-8 py-3 rounded font-semibold hover:bg-white/10 active:bg-white/20 transition-colors">
              {homeContent.bottomCta.secondaryCta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
