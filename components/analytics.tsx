'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { ANALYTICS } from '@/lib/site';

export function Analytics() {
  const ga4Id = ANALYTICS.ga4Id;
  const [consentGranted, setConsentGranted] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      if (localStorage.getItem('analytics-consent') === 'granted') {
        setConsentGranted(true);
      }
    };
    checkConsent();

    window.addEventListener('cookieConsentGranted', checkConsent);
    return () => window.removeEventListener('cookieConsentGranted', checkConsent);
  }, []);

  if (!ga4Id || !consentGranted) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ga4Id}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
