'use client';

import Image from 'next/image';
import { Link } from '@/localization/navigation';
import { LocationIcon, EmailIcon, PhoneIcon, WhatsAppIcon, WeChatIcon } from '@/components/Icons';
import { WHATSAPP_URL } from '@/config/site-constants';
import { footerContent, navigationContent, siteBrand } from '@/site-data/site-content';
import { categoryOrder, categoryContent } from '@/site-data/product-catalog';

export default function Footer() {
  const productLinks = categoryOrder.map((key) => ({
    href: `/products/${categoryContent[key].slug}`,
    label: categoryContent[key].name,
  }));

  const companyLinks = [
    { href: '/about' as const, label: '关于我们' },
    { href: '/industries' as const, label: '应用场景' },
    { href: '/services' as const, label: '解决方案' },
    { href: '/blog' as const, label: '资讯' },
    { href: '/faq' as const, label: '常见问题' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="relative h-14 w-24 mb-3">
              <Image
                src={siteBrand.logoPath}
                alt={siteBrand.logoAlt}
                fill
                unoptimized
                sizes="96px"
                className="object-contain object-left"
              />
            </div>
            <h3 className="text-white text-lg font-bold mb-3">{siteBrand.siteName}</h3>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">{footerContent.description}</p>
            <div className="flex gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
              <a
                href={siteBrand.wechatQrPath}
                className="text-gray-400 hover:text-green-300 transition-colors"
                aria-label="WeChat QR"
                title={`微信号：${siteBrand.wechatId}`}
              >
                <WeChatIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">产品中心</h3>
            <ul className="space-y-2">
              {productLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href as any} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              {footerContent.quickLinksTitle}
            </h3>
            <ul className="space-y-2">
              {companyLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              {footerContent.contactInfoTitle}
            </h3>
            <address className="not-italic text-sm text-gray-400 space-y-3">
              <p className="flex items-start gap-2">
                <LocationIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  {siteBrand.currentAddress}
                  {siteBrand.historicalAddressNote ? (
                    <span className="block text-xs text-gray-500 mt-1">{siteBrand.historicalAddressNote}</span>
                  ) : null}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <EmailIcon className="w-4 h-4 flex-shrink-0" />
                <a href={`mailto:${siteBrand.email}`} className="hover:text-white transition-colors">
                  {siteBrand.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 flex-shrink-0" />
                <a href={`tel:${siteBrand.phone}`} className="hover:text-white transition-colors">
                  {siteBrand.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp: {siteBrand.whatsapp}
                </a>
              </p>
              <p className="flex items-start gap-2">
                <WeChatIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>微信：{siteBrand.wechatId}</span>
              </p>
              <p className="text-xs text-gray-500">工作时间：{siteBrand.businessHours}</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} {siteBrand.companyName}
          </p>
          <div className="flex gap-6 text-xs text-gray-400">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">{footerContent.privacy}</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">{footerContent.terms}</Link>
            <Link href="/contact" className="hover:text-white transition-colors">{navigationContent.primaryCta}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
