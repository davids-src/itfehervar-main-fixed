import './globals.css';
import '@fontsource/source-sans-3/latin-ext-400.css';
import '@fontsource/source-sans-3/latin-ext-600.css';
import '@fontsource/source-sans-3/latin-ext-700.css';
import type { Metadata } from 'next';
import { SITE } from '@/lib/site';
import { Analytics } from '@/components/analytics';
import { CookieBanner } from '@/components/cookie-banner';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: 'Informatikai segítség Székesfehérváron | IT Fehérvár',
  description:
    'Számítógép, Wi-Fi, hálózat, nyomtató és céges vagy otthoni IT-probléma Székesfehérváron. Helyszíni és távoli segítség.',
  themeColor: '#102235',
  alternates: {
    canonical: SITE.url,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    other: {
      'msvalidate.01': process.env.BING_SITE_VERIFICATION || '',
    },
  },
  other: {
    'geo.region': 'HU-FE',
    'geo.placename': 'Székesfehérvár',
    ICBM: '47.191632, 18.420625',
    'geo.position': '47.191632;18.420625',
  },
  openGraph: {
    type: 'website',
    locale: 'hu_HU',
    url: SITE.url,
    siteName: SITE.name,
    title: 'Informatikai segítség Székesfehérváron | IT Fehérvár',
    description:
      'Számítógép, Wi-Fi, hálózat, nyomtató és céges vagy otthoni IT-probléma Székesfehérváron. Helyszíni és távoli segítség.',
    emails: [SITE.email],
    phoneNumbers: [SITE.phone],
    images: [
      {
        url: '/itfehervar_logo_new.png',
        width: 1200,
        height: 630,
        alt: 'IT Fehérvár',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Informatikai segítség Székesfehérváron | IT Fehérvár',
    description:
      'Számítógép, Wi-Fi, hálózat, nyomtató és céges vagy otthoni IT-probléma Székesfehérváron. Helyszíni és távoli segítség.',
    images: ['/itfehervar_logo_new.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <body className="font-sans text-ink antialiased">
        <Analytics />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
