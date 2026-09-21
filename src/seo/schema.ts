import { SITE_URL } from '@/config/site-constants';
import { routing } from '@/localization/routing';

/**
 * Canonical `@id`s for the entities that appear on more than one page.
 *
 * Every page used to spell its own copy of the company out inline — the
 * product page said `manufacturer: { name: 'Yiwu Weiwei Zipper Co., Ltd.' }`,
 * the blog said `publisher: { name: ... }`, the Yiwu page said
 * `parentOrganization: { name: ... }` — so a consumer had four unlinked
 * Organization nodes and no way to know they were the same company.
 *
 * With stable ids each page emits the entity once and refers to it everywhere
 * else. The referenced nodes are defined in `[locale]/layout.tsx`, which wraps
 * every page, so a bare `{ '@id': ... }` always resolves within the document.
 *
 * The ids are locale-independent on purpose: there is one company, not five.
 * Only the localized *labels* differ, and those live on the node itself.
 */
export const SCHEMA_ID = {
  organization: `${SITE_URL}/#organization`,
  brand: `${SITE_URL}/#brand`,
  website: `${SITE_URL}/#website`,
  /** The physical booth in Yiwu — a location of the organization, not a second company. */
  yiwuStore: `${SITE_URL}/yiwu-zipper-supplier#store`,
} as const;

/** A reference to a node defined elsewhere in the same document. */
export function schemaRef(id: string) {
  return { '@id': id };
}

/**
 * BCP-47 tag for `inLanguage` and `<html lang>`.
 *
 * `zh` alone does not say which script or region, and the site is written in
 * Simplified Chinese for mainland buyers. The layout has always emitted
 * `zh-CN`; the blog schema emitted a bare `zh`, so the two disagreed on the
 * same page.
 */
const HTML_LANG: Record<string, string> = {
  en: 'en',
  zh: 'zh-CN',
  ru: 'ru',
  es: 'es',
  ar: 'ar',
};

export function htmlLangFor(locale: string): string {
  return HTML_LANG[locale] ?? HTML_LANG[routing.defaultLocale] ?? 'en';
}
