'use client';

import Image from 'next/image';
import { useState, useCallback, useRef, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/localization/navigation';
import { CONTACT_EMAIL, CONTACT_PHONE } from '@/config/site-constants';
import { MenuIcon } from '@/components/Icons';
import { navigationContent, siteBrand } from '@/site-data/site-content';
import { categoryOrder, categoryContent } from '@/site-data/product-catalog';

const PRODUCT_CATEGORIES = categoryOrder.map((key) => ({
  href: `/products/${categoryContent[key].slug}`,
  name: categoryContent[key].name,
}));

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const isZh = locale === 'zh';

  const navItems = [
    { href: '/' as const, label: '首页' },
    { href: '/products' as const, label: '产品中心', hasDropdown: true },
    { href: '/industries' as const, label: '应用场景' },
    { href: '/services' as const, label: '解决方案' },
    { href: '/about' as const, label: '关于我们' },
    { href: '/blog' as const, label: '资讯' },
    { href: '/contact' as const, label: '联系我们' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const switchLocale = useCallback((newLocale: 'en' | 'zh') => {
    router.replace(pathname, { locale: newLocale });
  }, [router, pathname]);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setIsProductsOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setIsProductsOpen(false), 150);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 will-change-transform">
      <div className="bg-gray-900 text-gray-300 text-sm hidden md:block">
        <div className="container mx-auto px-4 py-1.5 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">
              {CONTACT_EMAIL}
            </a>
            <a href={`tel:${CONTACT_PHONE.replace(/[^\d+]/g, '')}`} className="hover:text-white transition-colors">
              {CONTACT_PHONE}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-xs">{siteBrand.responseTime}</span>
            <span className="text-gray-400">|</span>
            <button
              onClick={() => switchLocale('en')}
              className={`text-xs px-2 py-1 min-h-[32px] min-w-[32px] flex items-center justify-center ${locale === 'en' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'}`}
            >
              EN
            </button>
            <span className="text-gray-400">/</span>
            <button
              onClick={() => switchLocale('zh')}
              className={`text-xs px-2 py-1 min-h-[32px] min-w-[32px] flex items-center justify-center ${locale === 'zh' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'}`}
            >
              中文
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-11 w-16 shrink-0 overflow-hidden">
              <Image
                src={siteBrand.logoPath}
                alt={siteBrand.logoAlt}
                fill
                priority
                unoptimized
                sizes="64px"
                className="object-contain object-left"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-blue-900 leading-tight">
                {siteBrand.siteName}
              </span>
              <span className="text-[10px] text-gray-500 hidden sm:block leading-tight">
                3 / 5 / 8 号树脂、尼龙、金属拉链
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main navigation">
            {navItems.map(({ href, label, hasDropdown }) => (
              hasDropdown ? (
                <div
                  key={href}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    href={href}
                    className={`px-3 py-2 rounded text-sm font-medium transition-colors inline-flex items-center gap-1 ${
                      isActive(href)
                        ? 'text-blue-800 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-800 hover:bg-gray-50'
                    }`}
                  >
                    {label}
                    <svg className={`w-3.5 h-3.5 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  <div
                    className={`absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-150 ${
                      isProductsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
                    }`}
                  >
                    <div className="py-2">
                      <Link
                        href="/products"
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 font-medium border-b border-gray-100"
                      >
                        查看全部产品 →
                      </Link>
                      {PRODUCT_CATEGORIES.map(({ href: catHref, name }) => (
                        <Link
                          key={catHref}
                          href={catHref as any}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                        >
                          {name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={href}
                  href={href}
                  className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                    isActive(href)
                      ? 'text-blue-800 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-800 hover:bg-gray-50'
                  }`}
                >
                  {label}
                </Link>
              )
            ))}
            <Link
              href="/contact"
              className="ml-3 bg-blue-800 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-900 transition-colors"
            >
              {navigationContent.primaryCta}
            </Link>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => switchLocale(isZh ? 'en' : 'zh')}
              className="text-xs px-3 py-2 min-h-[44px] min-w-[44px] flex items-center justify-center border border-gray-300 rounded text-gray-600 hover:bg-gray-50 active:bg-gray-100 transition-colors"
            >
              {isZh ? 'EN' : '中文'}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-gray-700 active:bg-gray-100 rounded transition-colors"
              aria-label="切换菜单"
              aria-expanded={isMenuOpen}
            >
              <MenuIcon isOpen={isMenuOpen} />
            </button>
          </div>
        </div>
      </div>

      <nav
        className={`lg:hidden border-t border-gray-200 bg-white overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[640px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        role="navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
      >
        <div className="container mx-auto px-4 py-2">
          {navItems.map(({ href, label, hasDropdown }) => (
            hasDropdown ? (
              <div key={href}>
                <div className="flex items-center">
                  <Link
                    href={href}
                    onClick={closeMenu}
                    className={`flex-1 px-3 py-3.5 rounded-l text-sm font-medium min-h-[44px] ${
                      isActive(href)
                        ? 'text-blue-800 bg-blue-50'
                        : 'text-gray-700 hover:bg-gray-50 active:bg-gray-100'
                    }`}
                  >
                    {label}
                  </Link>
                  <button
                    onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                    className="px-4 py-3.5 min-h-[44px] min-w-[44px] flex items-center justify-center text-gray-500 hover:bg-gray-50 active:bg-gray-100 rounded-r transition-colors"
                    aria-label="切换产品分类"
                    aria-expanded={isMobileProductsOpen}
                  >
                    <svg className={`w-4 h-4 transition-transform duration-200 ${isMobileProductsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                <div className={`overflow-hidden transition-all duration-200 ease-in-out ${isMobileProductsOpen ? 'max-h-[220px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-6 space-y-0.5 pb-1">
                    {PRODUCT_CATEGORIES.map(({ href: catHref, name }) => (
                      <Link
                        key={catHref}
                        href={catHref as any}
                        onClick={closeMenu}
                        className="block px-3 py-2.5 rounded text-sm text-gray-500 hover:bg-gray-50 active:bg-gray-100 min-h-[40px]"
                      >
                        {name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className={`block px-3 py-3.5 rounded text-sm font-medium min-h-[44px] ${
                  isActive(href)
                    ? 'text-blue-800 bg-blue-50'
                    : 'text-gray-700 hover:bg-gray-50 active:bg-gray-100'
                }`}
              >
                {label}
              </Link>
            )
          ))}
          <div className="px-3 py-3">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="block w-full text-center bg-blue-800 text-white px-4 py-3 min-h-[44px] rounded text-sm font-medium hover:bg-blue-900 active:bg-blue-950 transition-colors"
            >
              {navigationContent.primaryCta}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
