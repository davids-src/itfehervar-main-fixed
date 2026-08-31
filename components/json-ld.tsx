import { SITE } from '@/lib/site';

export function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE.name,
    telephone: SITE.phone,
    email: SITE.email,
    url: SITE.url,
    image: `${SITE.url}/og-cover.png`,
    priceRange: 'Ár telefonon egyeztetve',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lövölde utca 24. 4/15.',
      addressLocality: 'Székesfehérvár',
      postalCode: '8000',
      addressCountry: 'HU',
    },
    areaServed: ['Székesfehérvár', 'Fejér vármegye'],
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
