import { SITE, COMPANY } from '@/lib/site';

export function JsonLd() {
  const serviceData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE.url}/#business`,
    name: SITE.name,
    telephone: SITE.phone,
    email: SITE.email,
    url: SITE.url,
    image: `${SITE.url}/itfehervar_logo_new.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lövölde utca 24. 4/15.',
      addressLocality: 'Székesfehérvár',
      postalCode: '8000',
      addressCountry: 'HU',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Székesfehérvár és Fejér vármegye',
    },
    taxID: COMPANY.taxNumber,
    parentOrganization: {
      '@type': 'Organization',
      name: COMPANY.legalName,
      taxID: COMPANY.taxNumber,
      vatID: COMPANY.taxNumber,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
    />
  );
}
