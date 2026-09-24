import { SITE, COMPANY } from '@/lib/site';
import { FAQ_ITEMS } from '@/components/sections/faq';

export function JsonLd() {
  const serviceData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE.name,
    telephone: SITE.phone,
    email: SITE.email,
    url: SITE.url,
    image: `${SITE.url}/brand/it-fehervar-logo.png`,
    priceRange: 'Ár telefonon egyeztetve',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lövölde utca 24. 4/15.',
      addressLocality: 'Székesfehérvár',
      postalCode: '8000',
      addressCountry: 'HU',
    },
    areaServed: ['Székesfehérvár', 'Fejér vármegye'],
    taxID: COMPANY.taxNumber,
    vatID: COMPANY.taxNumber,
    parentOrganization: {
      '@type': 'Organization',
      name: COMPANY.legalName,
      taxID: COMPANY.taxNumber,
      vatID: COMPANY.taxNumber,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
        ],
        opens: '08:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
  };

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceData, faqData]) }}
    />
  );
}
