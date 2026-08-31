import './globals.css';
import '@fontsource/archivo/latin-ext-700.css';
import '@fontsource/archivo/latin-ext-800.css';
import '@fontsource/ibm-plex-sans/latin-ext-400.css';
import '@fontsource/ibm-plex-sans/latin-ext-500.css';
import type { Metadata } from 'next';
import { SITE, COMPANY, ANALYTICS } from '@/lib/site';
import { JsonLd } from '@/components/json-ld';
import { Analytics } from '@/components/analytics';
import { CookieBanner } from '@/components/cookie-banner';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: 'Számítógép- és internetszerelő Székesfehérváron — IT Fehérvár',
  description:
    'Kiszállunk Székesfehérváron és Fejér vármegyében: internet, wifi, lassú gép, nyomtató, vírus. Cégeknek és otthonra. Hívjon: +36 70 273 5532.',
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: 'website',
    locale: 'hu_HU',
    url: SITE.url,
    siteName: SITE.name,
    title: 'Számítógép- és internetszerelő Székesfehérváron — IT Fehérvár',
    description:
      'Kiszállunk Székesfehérváron és Fejér vármegyében: internet, wifi, lassú gép, nyomtató, vírus. Cégeknek és otthonra. Hívjon: +36 70 273 5532.',
    images: [
      {
        url: '/og-cover.png',
        width: 1200,
        height: 630,
        alt: 'IT Fehérvár — számítógép- és internetszerelő Székesfehérváron',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Számítógép- és internetszerelő Székesfehérváron — IT Fehérvár',
    description:
      'Kiszállunk Székesfehérváron és Fejér vármegyében: internet, wifi, lassú gép, nyomtató, vírus. Cégeknek és otthonra. Hívjon: +36 70 273 5532.',
    images: ['/og-cover.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  themeColor: '#1C3461',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <body className="font-sans text-ink antialiased">
        <JsonLd />
        <Analytics />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
