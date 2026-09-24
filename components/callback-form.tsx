'use client';

import { useState, useRef } from 'react';
import { SITE } from '@/lib/site';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function CallbackForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [rateLimited, setRateLimited] = useState(false);
  const lastSubmitRef = useRef<number>(0);

  const [formStarted, setFormStarted] = useState(false);

  const handleFormInteraction = () => {
    if (!formStarted) {
      setFormStarted(true);
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({ event: 'form_start', form_type: 'callback' });
      }
    }
  };

  const validate = (data: FormData) => {
    const errs: Record<string, string> = {};
    const name = (data.get('name') as string)?.trim();
    const phone = (data.get('phone') as string)?.trim();
    const consent = data.get('consent');

    if (!name) errs.name = 'Kérjük, adja meg a nevét.';
    if (!phone) {
      errs.phone = 'Kérjük, adja meg a telefonszámát.';
    } else {
      const digits = phone.replace(/[\s\-()\/+.]/g, '');
      if (!/^(?:36|06)\d{8,9}$/.test(digits)) {
        errs.phone = 'Érvénytelen magyar telefonszám. Például: 06 70 123 4567';
      }
    }
    if (!consent) errs.consent = 'A hozzájárulás szükséges a visszahíváshoz.';
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({ event: 'form_error', form_type: 'callback', error_type: 'validation' });
      }
      return;
    }

    const now = Date.now();
    if (now - lastSubmitRef.current < 60000) {
      setRateLimited(true);
      return;
    }
    lastSubmitRef.current = now;

    // Add tracking data
    try {
      const firstTouch = localStorage.getItem('attribution_first_touch');
      const lastTouch = localStorage.getItem('attribution_last_touch');
      if (firstTouch) data.append('first_touch', firstTouch);
      if (lastTouch) data.append('last_touch', lastTouch);
    } catch (e) {
      // Ignore localStorage errors
    }
    
    const customerType = data.get('customer_type') as string;
    const requestType = data.get('request_type') as string;
    const location = data.get('location') as string;

    setStatus('submitting');
    try {
      const res = await fetch('/api/visszahivas', {
        method: 'POST',
        body: data,
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      form.reset();
      
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'generate_lead',
          form_type: 'callback',
          customer_type: customerType,
          request_type: requestType,
          location_region: location,
          landing_page: window.location.pathname
        });
      }
    } catch {
      setStatus('error');
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({ event: 'form_error', form_type: 'callback', error_type: 'api' });
      }
    }
  };

  if (status === 'success') {
    return (
      <div className="border border-navy/20 rounded-lg p-6 bg-paper">
        <p className="text-base leading-relaxed text-ink">
          Megkaptuk. Általában egy órán belül visszahívjuk a megadott számon. Ha
          sürgős, hívjon minket a{' '}
          <a href={SITE.phoneHref} className="font-semibold text-red hover:underline">
            {SITE.phone}
          </a>{' '}
          számon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} onChange={handleFormInteraction} noValidate className="space-y-4">
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label>
          Ne töltse ki
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">
          Név <span className="text-red">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full px-3.5 py-2.5 border border-line rounded-md text-base text-ink bg-paper focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red">{errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-ink mb-1.5">
          Telefonszám <span className="text-red">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="06 70 123 4567"
          className="w-full px-3.5 py-2.5 border border-line rounded-md text-base text-ink bg-paper focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-sm text-red">{errors.phone}</p>
        )}
      </div>

      <div>
        <label htmlFor="customer_type" className="block text-sm font-medium text-ink mb-1.5">
          Magánszemély / vállalkozás
        </label>
        <select
          id="customer_type"
          name="customer_type"
          className="w-full px-3.5 py-2.5 border border-line rounded-md text-base text-ink bg-paper focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
          onChange={(e) => {
            if (typeof window !== 'undefined' && (window as any).dataLayer) {
              (window as any).dataLayer.push({ event: 'customer_type_select', customer_type: e.target.value });
            }
          }}
        >
          <option value="Magánszemély">Magánszemély</option>
          <option value="Vállalkozás">Vállalkozás</option>
        </select>
      </div>

      <div>
        <label htmlFor="request_type" className="block text-sm font-medium text-ink mb-1.5">
          Miben segíthetünk?
        </label>
        <select
          id="request_type"
          name="request_type"
          className="w-full px-3.5 py-2.5 border border-line rounded-md text-base text-ink bg-paper focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
          onChange={(e) => {
            if (typeof window !== 'undefined' && (window as any).dataLayer) {
              (window as any).dataLayer.push({ event: 'request_type_select', request_type: e.target.value });
            }
          }}
        >
          <option value="Hibajavítás">Hibajavítás</option>
          <option value="Beállítás">Beállítás</option>
          <option value="Bővítés">Bővítés</option>
          <option value="Új rendszer/iroda">Új rendszer/iroda</option>
          <option value="Hosszú távú támogatás">Hosszú távú támogatás</option>
          <option value="Egyéb">Egyéb</option>
        </select>
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-medium text-ink mb-1.5">
          Helyszín (Település)
        </label>
        <input
          id="location"
          name="location"
          type="text"
          placeholder="Pl. Székesfehérvár"
          className="w-full px-3.5 py-2.5 border border-line rounded-md text-base text-ink bg-paper focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">
          Rövid leírás (Mi a gond?)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Elég egy mondat. Például: reggel óta nincs net az irodában."
          className="w-full px-3.5 py-2.5 border border-line rounded-md text-base text-ink bg-paper focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy resize-y"
        />
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-0.5 w-4 h-4 shrink-0 accent-navy"
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? 'consent-error' : undefined}
          />
          <span className="text-sm leading-relaxed text-ink">
            Hozzájárulok, hogy visszahívás céljából felvegyék velem a kapcsolatot.{' '}
            <a href="/adatkezeles" className="text-navy underline hover:text-red transition-colors">
              Adatkezelési tájékoztató
            </a>
            <span className="text-red"> *</span>
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" className="mt-1 text-sm text-red">{errors.consent}</p>
        )}
      </div>

      {status === 'error' && (
        <p className="text-base leading-relaxed text-red">
          Nem sikerült elküldeni. Hívjon minket a {SITE.phone} számon, vagy
          próbálja újra pár perc múlva.
        </p>
      )}

      {rateLimited && (
        <p className="text-sm text-red">
          Egy percenként csak egy kérést küldhet. Kérjük, várjon egy kicsit.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-red text-white font-display font-bold rounded-md text-base hover:bg-red/90 transition-colors disabled:opacity-60"
      >
        {status === 'submitting' ? 'Küldés…' : 'Visszahívást kérek'}
      </button>
    </form>
  );
}
