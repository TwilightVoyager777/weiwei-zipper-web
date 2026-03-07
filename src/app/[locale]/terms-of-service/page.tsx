import { COMPANY_NAME_EN, COMPANY_NAME_ZH, CONTACT_EMAIL } from '@/config/site-constants';
import { getMessages, getTranslations } from 'next-intl/server';
import { getSiteBrand } from '@/site-data/site-content';
import { alternatesForPath } from '@/seo/localized-urls';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };
type TermsOfServiceMessages = {
  meta: { title: string; description: string };
  title: string;
  lastUpdated: string;
  acceptance: { title: string; paragraph1: string; paragraph2: string };
  termsOfUse: { title: string; paragraph1: string; intro: string; items: string[] };
  productInfo: { title: string; paragraph: string; items: string[] };
  orders: { title: string; paragraph: string; paymentMethodsTitle: string; paymentMethods: string[]; paymentTerms: string };
  shipping: { title: string; paragraph: string; leadTimesTitle: string; leadTimes: string[]; tradeTermsTitle: string; tradeTerms: string[]; packagingTitle: string; packaging: string; forceMajeure: string };
  quality: { title: string; paragraph: string; claimsTitle: string; claims: string[]; notCoveredTitle: string; notCovered: string[] };
  intellectualProperty: { title: string; paragraph: string; items: string[] };
  liability: { title: string; paragraph1: string; paragraph2: string };
  governingLaw: { title: string; paragraph: string; stepsTitle: string; steps: string[] };
  contact: { title: string; intro: string; emailLabel: string; addressLabel: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'TermsOfService.meta' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: alternatesForPath(locale, '/terms-of-service'),
  };
}

export default async function TermsOfServicePage({ params }: Props) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const content = messages.TermsOfService as TermsOfServiceMessages;
  const companyName = locale === 'zh' ? COMPANY_NAME_ZH : COMPANY_NAME_EN;
  const siteBrand = getSiteBrand(locale);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{content.title}</h1>
        <p className="text-sm text-gray-500 mb-8">{content.lastUpdated}</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{content.acceptance.title}</h2>
          <p className="text-gray-600 leading-relaxed mb-3">{content.acceptance.paragraph1.replace('{companyName}', companyName)}</p>
          <p className="text-gray-600 leading-relaxed">{content.acceptance.paragraph2}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{content.termsOfUse.title}</h2>
          <p className="text-gray-600 leading-relaxed mb-3">{content.termsOfUse.paragraph1}</p>
          <p className="text-gray-600 leading-relaxed mb-3">{content.termsOfUse.intro}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {content.termsOfUse.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{content.productInfo.title}</h2>
          <p className="text-gray-600 leading-relaxed mb-3">{content.productInfo.paragraph}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {content.productInfo.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{content.orders.title}</h2>
          <p className="text-gray-600 leading-relaxed mb-3">{content.orders.paragraph}</p>
          <h3 className="text-base font-semibold text-gray-800 mb-2">{content.orders.paymentMethodsTitle}</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-3">
            {content.orders.paymentMethods.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="text-gray-600 leading-relaxed">{content.orders.paymentTerms}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{content.shipping.title}</h2>
          <p className="text-gray-600 leading-relaxed mb-3">{content.shipping.paragraph}</p>
          <h3 className="text-base font-semibold text-gray-800 mb-2">{content.shipping.leadTimesTitle}</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-3">
            {content.shipping.leadTimes.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <h3 className="text-base font-semibold text-gray-800 mb-2">{content.shipping.tradeTermsTitle}</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-3">
            {content.shipping.tradeTerms.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <h3 className="text-base font-semibold text-gray-800 mb-2">{content.shipping.packagingTitle}</h3>
          <p className="text-gray-600 leading-relaxed mb-3">{content.shipping.packaging}</p>
          <p className="text-gray-600 leading-relaxed">{content.shipping.forceMajeure}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{content.quality.title}</h2>
          <p className="text-gray-600 leading-relaxed mb-3">{content.quality.paragraph}</p>
          <h3 className="text-base font-semibold text-gray-800 mb-2">{content.quality.claimsTitle}</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-3">
            {content.quality.claims.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <h3 className="text-base font-semibold text-gray-800 mb-2">{content.quality.notCoveredTitle}</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {content.quality.notCovered.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{content.intellectualProperty.title}</h2>
          <p className="text-gray-600 leading-relaxed mb-3">{content.intellectualProperty.paragraph}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {content.intellectualProperty.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{content.liability.title}</h2>
          <p className="text-gray-600 leading-relaxed mb-3">{content.liability.paragraph1}</p>
          <p className="text-gray-600 leading-relaxed">{content.liability.paragraph2}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{content.governingLaw.title}</h2>
          <p className="text-gray-600 leading-relaxed mb-3">{content.governingLaw.paragraph}</p>
          <h3 className="text-base font-semibold text-gray-800 mb-2">{content.governingLaw.stepsTitle}</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            {content.governingLaw.steps.map((item) => <li key={item}>{item}</li>)}
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{content.contact.title}</h2>
          <p className="text-gray-600 leading-relaxed mb-3">{content.contact.intro}</p>
          <ul className="list-none space-y-2 text-gray-600">
            <li>
              <strong>{content.contact.emailLabel}</strong>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-800 hover:underline">{CONTACT_EMAIL}</a>
            </li>
            <li>
              <strong>{content.contact.addressLabel}</strong>
              {siteBrand.currentAddress}
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
