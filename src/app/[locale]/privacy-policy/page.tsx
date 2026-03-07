import { COMPANY_NAME_EN, COMPANY_NAME_ZH, CONTACT_EMAIL } from '@/config/site-constants';
import { getMessages, getTranslations } from 'next-intl/server';
import { getSiteBrand } from '@/site-data/site-content';
import { alternatesForPath } from '@/seo/localized-urls';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };
type PrivacyPolicyMessages = {
  meta: { title: string; description: string };
  title: string;
  lastUpdated: string;
  overview: { title: string; paragraph1: string; paragraph2: string };
  informationWeCollect: { title: string; intro: string; items: { personal: string; business: string; technical: string }; outro: string };
  howWeUse: { title: string; intro: string; items: string[] };
  cookies: { title: string; paragraph1: string; items: { essential: string; analytics: string }; paragraph2: string };
  dataProtection: { title: string; intro: string; items: string[]; outro: string };
  dataRetention: { title: string; items: string[]; outro: string };
  internationalTransfers: { title: string; paragraph: string };
  thirdPartyLinks: { title: string; paragraph: string };
  yourRights: { title: string; intro: string; items: string[] };
  changes: { title: string; paragraph: string };
  contact: { title: string; intro: string; emailLabel: string; addressLabel: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'PrivacyPolicy.meta' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: alternatesForPath(locale, '/privacy-policy'),
  };
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const content = messages.PrivacyPolicy as PrivacyPolicyMessages;
  const companyName = locale === 'zh' ? COMPANY_NAME_ZH : COMPANY_NAME_EN;
  const siteBrand = getSiteBrand(locale);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{content.title}</h1>
        <p className="text-sm text-gray-500 mb-8">{content.lastUpdated}</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{content.overview.title}</h2>
          <p className="text-gray-600 leading-relaxed mb-3">{content.overview.paragraph1.replace('{companyName}', companyName)}</p>
          <p className="text-gray-600 leading-relaxed">{content.overview.paragraph2}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{content.informationWeCollect.title}</h2>
          <p className="text-gray-600 leading-relaxed mb-3">{content.informationWeCollect.intro}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-3">
            <li>{content.informationWeCollect.items.personal}</li>
            <li>{content.informationWeCollect.items.business}</li>
            <li>{content.informationWeCollect.items.technical}</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">{content.informationWeCollect.outro}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{content.howWeUse.title}</h2>
          <p className="text-gray-600 leading-relaxed mb-3">{content.howWeUse.intro}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {content.howWeUse.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{content.cookies.title}</h2>
          <p className="text-gray-600 leading-relaxed mb-3">{content.cookies.paragraph1}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-3">
            <li>{content.cookies.items.essential}</li>
            <li>{content.cookies.items.analytics}</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">{content.cookies.paragraph2}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{content.dataProtection.title}</h2>
          <p className="text-gray-600 leading-relaxed mb-3">{content.dataProtection.intro}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-3">
            {content.dataProtection.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="text-gray-600 leading-relaxed">{content.dataProtection.outro}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{content.dataRetention.title}</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-3">
            {content.dataRetention.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="text-gray-600 leading-relaxed">{content.dataRetention.outro}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{content.internationalTransfers.title}</h2>
          <p className="text-gray-600 leading-relaxed">{content.internationalTransfers.paragraph}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{content.thirdPartyLinks.title}</h2>
          <p className="text-gray-600 leading-relaxed">{content.thirdPartyLinks.paragraph}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{content.yourRights.title}</h2>
          <p className="text-gray-600 leading-relaxed mb-3">{content.yourRights.intro}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {content.yourRights.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{content.changes.title}</h2>
          <p className="text-gray-600 leading-relaxed">{content.changes.paragraph}</p>
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
