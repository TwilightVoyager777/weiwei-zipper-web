// Design-sync preview provider: makes the site's components renderable outside
// the Next.js runtime. Wraps previews in next-intl (zh locale), mocks the App
// Router contexts that next/link + next-intl navigation read, and points
// next/image at the production optimizer so real brand assets load.
import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { AppRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import {
  PathnameContext,
  SearchParamsContext,
  PathParamsContext,
} from 'next/dist/shared/lib/hooks-client-context.shared-runtime';
import { ImageConfigContext } from 'next/dist/shared/lib/image-config-context.shared-runtime';
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';
import zhMessages from '@/localization/messages/zh.json';

const noop = () => {};
const mockRouter = {
  back: noop,
  forward: noop,
  refresh: noop,
  push: noop,
  replace: noop,
  prefetch: () => Promise.resolve(),
  hmrRefresh: noop,
} as never;

const imageConfig = {
  ...imageConfigDefault,
  path: 'https://www.weiweizipper.com/_next/image',
} as never;

export function DSProvider({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterContext.Provider value={mockRouter}>
      <PathnameContext.Provider value="/zh">
        <SearchParamsContext.Provider value={new URLSearchParams() as never}>
          <PathParamsContext.Provider value={{ locale: 'zh' }}>
            <ImageConfigContext.Provider value={imageConfig}>
              <NextIntlClientProvider
                locale="zh"
                messages={zhMessages}
                timeZone="Asia/Shanghai"
              >
                {children}
              </NextIntlClientProvider>
            </ImageConfigContext.Provider>
          </PathParamsContext.Provider>
        </SearchParamsContext.Provider>
      </PathnameContext.Provider>
    </AppRouterContext.Provider>
  );
}
