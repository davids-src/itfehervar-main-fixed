export const SITE = {
  name: 'IT Fehérvár',
  domain: 'itfehervar.hu',
  url: 'https://itfehervar.hu',
  phone: '+36 70 273 5532',
  phoneHref: 'tel:+36702735532',
  email: 'szia@itfehervar.hu',
  area: 'Székesfehérvár és Fejér vármegye',
  hours: {
    weekday: 'Hétköznap 8–20',
    saturday: 'Szombat 9–14',
  },
} as const;

export const COMPANY = {
  legalName: 'SIROTECH Kft.',
  address: '8000 Székesfehérvár, Lövölde utca 24. 4/15.',
  taxNumber: '33056151-2-07',
  // Cégjegyzékszám: később kerül kitöltésre
  companyNumber: process.env.CEGJEGYZEKSZAM || '',
};

export const ANALYTICS = {
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID || '',
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || '',
};

export const isAnalyticsEnabled = Boolean(
  ANALYTICS.ga4Id || ANALYTICS.metaPixelId,
);
