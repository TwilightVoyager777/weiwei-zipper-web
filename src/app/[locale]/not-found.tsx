'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
// Locale-aware router: the plain next/navigation one sent every visitor to the
// English home page, so a 404 under /zh, /ru, /es or /ar dropped the reader out
// of their language.
import { useRouter } from '@/localization/navigation';

export default function NotFound() {
  const router = useRouter();
  const t = useTranslations('NotFound');

  useEffect(() => {
    // Auto-redirect to the home page of the current locale
    router.replace('/');
  }, [router]);

  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <p className="text-lg text-gray-600">{t('message')}</p>
    </div>
  );
}
