'use client';

import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/localization/navigation';
import { ClockIcon, LocationIcon, EmailIcon, PhoneIcon, WhatsAppIcon, WeChatIcon } from '@/components/Icons';
import { WHATSAPP_URL } from '@/config/site-constants';
import { getFooterContent, getNavigationContent, getSiteBrand } from '@/site-data/site-content';
import { categoryOrder, getCategoryContent } from '@/site-data/product-catalog';

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations('Footer');
  const footerContent = getFooterContent(locale);
  const navigationContent = getNavigationContent(locale);
  const brand = getSiteBrand(locale);
  const localizedCategories = getCategoryContent(locale);
  const footerLogoPath = '/brand/weiwei-zipper-logo-white.png';
  const productLinks = categoryOrder.map((key) => ({
    href: `/products/${localizedCategories[key].slug}`,
    label: localizedCategories[key].name,
  }));

  const companyLinks = [
    { href: '/about' as const, label: t('companyLinks.about') },
    { href: '/industries' as const, label: t('companyLinks.applications') },
    { href: '/services' as const, label: t('companyLinks.solutions') },
    { href: '/blog' as const, label: t('companyLinks.insights') },
    { href: '/faq' as const, label: t('companyLinks.faq') },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="relative h-14 w-24 mb-3">
              <Image
                src={footerLogoPath}
                alt={brand.logoAlt}
                fill
                unoptimized
                sizes="96px"
                className="object-contain object-left"
              />
            </div>
            <h3 className="text-white text-lg font-bold mb-3">{brand.siteName}</h3>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">{footerContent.description}</p>
            <div className="flex gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
                aria-label={t('whatsappAria')}
              >
                <WhatsAppIcon />
              </a>
              <a
                href={brand.wechatQrPath}
                className="text-gray-400 hover:text-green-300 transition-colors"
                aria-label={t('wechatQrAria')}
                title={t('wechatTitle', { wechatId: brand.wechatId })}
              >
                <WeChatIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">{t('productsTitle')}</h3>
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
            <address className="not-italic">
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li className="grid grid-cols-[16px_minmax(0,1fr)] items-start gap-2.5 leading-5">
                  <LocationIcon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span className="min-w-0 break-words">
                    {brand.currentAddress}
                    {brand.historicalAddressNote ? (
                      <span className="mt-1 block text-xs text-gray-500">{brand.historicalAddressNote}</span>
                    ) : null}
                  </span>
                </li>
                <li className="grid grid-cols-[16px_minmax(0,1fr)] items-start gap-2.5 leading-5">
                  <EmailIcon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <div className="min-w-0">
                    <span className="break-all sm:hidden">{brand.email}</span>
                    <a href={`mailto:${brand.email}`} className="hidden min-h-0 break-all hover:text-white transition-colors sm:inline">
                      {brand.email}
                    </a>
                  </div>
                </li>
                <li className="grid grid-cols-[16px_minmax(0,1fr)] items-start gap-2.5 leading-5">
                  <PhoneIcon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <div className="min-w-0">
                    <span className="break-words sm:hidden">{brand.phone}</span>
                    <a href={`tel:${brand.phone}`} className="hidden min-h-0 break-words hover:text-white transition-colors sm:inline">
                      {brand.phone}
                    </a>
                  </div>
                </li>
                <li className="grid grid-cols-[16px_minmax(0,1fr)] items-start gap-2.5 leading-5">
                  <WhatsAppIcon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <div className="min-w-0">
                    <span className="break-words sm:hidden">WhatsApp: {brand.whatsapp}</span>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden min-h-0 break-words hover:text-white transition-colors sm:inline"
                    >
                      WhatsApp: {brand.whatsapp}
                    </a>
                  </div>
                </li>
                <li className="grid grid-cols-[16px_minmax(0,1fr)] items-start gap-2.5 leading-5">
                  <WeChatIcon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span className="min-w-0 break-words">{t('wechatLabel')}: {brand.wechatId}</span>
                </li>
                <li className="grid grid-cols-[16px_minmax(0,1fr)] items-start gap-2.5 text-sm text-gray-500 leading-5">
                  <ClockIcon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span className="min-w-0 break-words">{t('businessHours')}: {brand.businessHours}</span>
                </li>
              </ul>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} {brand.companyName}
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs text-gray-400">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">{footerContent.privacy}</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">{footerContent.terms}</Link>
            <Link href="/quote" className="hover:text-white transition-colors">{navigationContent.primaryCta}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
