export const SITE = {
  name: 'IT Fehérvár',
  domain: 'itfehervar.hu',
  url: process.env.NEXT_PUBLIC_APP_URL || 'https://itfehervar.hu',
  phone: process.env.NEXT_PUBLIC_SIRONIC_PHONE || '+36 70 273 5532',
  get phoneHref() { return `tel:${this.phone.replace(/[\s-]/g, '')}` },
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
  companyNumber: 'Cg. 07-09-037603',
};

export const ANALYTICS = {
  ga4Id: process.env.NEXT_PUBLIC_GA_ID || '',
};

export const isAnalyticsEnabled = Boolean(ANALYTICS.ga4Id);
