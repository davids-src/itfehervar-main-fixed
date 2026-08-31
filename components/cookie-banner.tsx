'use client';

import { useEffect, useState } from 'react';
import { isAnalyticsEnabled } from '@/lib/site';

const STORAGE_KEY = 'itfehervar-cookie-consent';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isAnalyticsEnabled) return;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(STORAGE_KEY, 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie hozzájárlás"
      className="fixed bottom-0 left-0 right-0 z-50 bg-navy-deep text-white px-5 py-4 shadow-lg"
    >
      <div className="mx-auto max-w-content flex flex-col sm:flex-row sm:items-center gap-3">
        <p className="text-sm leading-relaxed flex-1">
          Az oldal anonim mérőszámokat gyűjt a működés javításához. Ön bármikor
          letilthatja a sütiket.
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={handleReject}
            className="px-4 py-2 text-sm border border-white/30 rounded-md hover:bg-white/10 transition-colors"
          >
            Nem, köszönöm
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm bg-orange hover:bg-orange/90 rounded-md transition-colors"
          >
            Rendben
          </button>
        </div>
      </div>
    </div>
  );
}
