'use client';

import { useEffect } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  const locale = useLocale();
  const message = locale === 'zh' ? '页面不存在，正在返回首页...' : 'Page not found. Redirecting to the homepage...';

  useEffect(() => {
    // Auto-redirect to home page for any non-existent page
    router.replace('/');
  }, [router]);

  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <p className="text-lg text-gray-600">{message}</p>
    </div>
  );
}
