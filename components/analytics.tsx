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

    // Parse and store attribution
    const parseAttribution = () => {
      const params = new URLSearchParams(window.location.search);
      const utms: Record<string, string> = {};
      const fields = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'gbraid', 'wbraid'];
      let hasNewUtms = false;
      
      fields.forEach(field => {
        const val = params.get(field);
        if (val) {
          utms[field] = val;
          hasNewUtms = true;
        }
      });

      if (hasNewUtms || !localStorage.getItem('attribution_first_touch')) {
        const data = {
          ...utms,
          landing_page: window.location.pathname + window.location.search,
          referrer: document.referrer,
          timestamp: new Date().toISOString()
        };
        const dataStr = JSON.stringify(data);
        
        if (!localStorage.getItem('attribution_first_touch')) {
          localStorage.setItem('attribution_first_touch', dataStr);
        }
        if (hasNewUtms) {
          localStorage.setItem('attribution_last_touch', dataStr);
        }
      }
    };
    parseAttribution();

    const handleClick = (e: MouseEvent) => {
      if (typeof window === 'undefined' || !(window as any).dataLayer) return;
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;
      
      const href = anchor.getAttribute('href') || '';
      const ctaLabel = anchor.textContent?.trim() || '';

      if (href.startsWith('tel:')) {
        (window as any).dataLayer.push({
          event: 'phone_click',
          cta_location: 'global',
          page_type: window.location.pathname === '/' ? 'home' : 'service'
        });
      } else if (href.startsWith('mailto:')) {
        (window as any).dataLayer.push({
          event: 'email_click',
          cta_location: 'global',
          page_type: window.location.pathname === '/' ? 'home' : 'service'
        });
      } else if (anchor.classList.contains('bg-red') || anchor.classList.contains('border-navy')) {
        (window as any).dataLayer.push({
          event: 'cta_click',
          cta_label: ctaLabel,
          cta_location: 'content',
          cta_type: anchor.classList.contains('bg-red') ? 'primary' : 'secondary',
          page_type: window.location.pathname === '/' ? 'home' : 'service'
        });
      }
    };
    
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('cookieConsentGranted', checkConsent);
      document.removeEventListener('click', handleClick);
    };
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
