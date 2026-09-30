export const SITE = {
  name: 'IT Fehérvár',
  domain: 'itfehervar.hu',
  url: process.env.NEXT_PUBLIC_APP_URL || 'https://itfehervar.hu',
  phone: process.env.NEXT_PUBLIC_SIRONIC_PHONE || '+36 70 273 5532',
  get phoneHref() {
    return `tel:${this.phone.replace(/[\s-]/g, '')}`;
  },
  email: 'szia@itfehervar.hu',
  area: 'Székesfehérvár és Fejér vármegye',
} as const;

/** Deploy blocker: verify company data against a fresh company extract before publish. */
export const COMPANY = {
  legalName: 'SIROTECH Kft.',
  address: '8000 Székesfehérvár, Lövölde utca 24. 4/15.',
  taxNumber: '33056151-2-07',
  companyNumber: '07-09-037603',
  representative: 'Skoda Dávid András',
};

export const ANALYTICS = {
  ga4Id: 'G-8C38YTQSQ6',
};

export const isAnalyticsEnabled = Boolean(ANALYTICS.ga4Id);

export const NAV_ITEMS = [
  { label: 'Kezdőlap', href: '/' },
  { label: 'Otthoni IT', href: '/otthoni-it' },
  { label: 'Céges IT', href: '/ceges-it' },
  { label: 'Wi-Fi és hálózat', href: '/wifi-halozat' },
  { label: 'Számítógép segítség', href: '/szamitogep-segitseg' },
  { label: 'Kapcsolat', href: '/kapcsolat' },
] as const;

export const PROBLEM_OPTIONS = [
  'Számítógép',
  'Wi-Fi / internet',
  'Nyomtató',
  'Új eszköz beállítása',
  'Hálózat',
  'Microsoft 365 / e-mail',
  'NAS / mentés',
  'Céges IT feladat',
  'Egyéb',
] as const;

export const SEGMENT_OPTIONS = ['Otthoni', 'Céges'] as const;

export const FORM_NOTICE =
  'Az űrlap elküldése kapcsolatfelvételi / ajánlatkérési megkeresés, önmagában nem minősül megrendelésnek.';
