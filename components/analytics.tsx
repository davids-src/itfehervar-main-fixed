'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { ANALYTICS } from '@/lib/site';

export function Analytics() {
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

  if (!ANALYTICS.ga4Id || !consentGranted) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS.ga4Id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ANALYTICS.ga4Id}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
