'use client';

import { useState, useRef } from 'react';
import { SITE } from '@/lib/site';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function CallbackForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [rateLimited, setRateLimited] = useState(false);
  const lastSubmitRef = useRef<number>(0);

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
    if (Object.keys(errs).length > 0) return;

    // Simple client-side rate limit: 1 per 60 seconds
    const now = Date.now();
    if (now - lastSubmitRef.current < 60000) {
      setRateLimited(true);
      return;
    }
    lastSubmitRef.current = now;

    setStatus('submitting');
    try {
      const res = await fetch('/api/visszahivas', {
        method: 'POST',
        body: data,
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="border border-navy/20 rounded-lg p-6 bg-paper">
        <p className="text-base leading-relaxed text-ink">
          Megkaptuk. Általában egy órán belül visszahívjuk a megadott számon. Ha
          sürgős, hívjon minket a{' '}
          <a href={SITE.phoneHref} className="font-semibold text-orange hover:underline">
            {SITE.phone}
          </a>{' '}
          számon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label>
          Ne töltse ki
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">
          Név <span className="text-orange">*</span>
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
          <p id="name-error" className="mt-1 text-sm text-orange">{errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-ink mb-1.5">
          Telefonszám <span className="text-orange">*</span>
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
          <p id="phone-error" className="mt-1 text-sm text-orange">{errors.phone}</p>
        )}
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-ink mb-1.5">
          Cég neve
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Ha céghez hívna minket."
          autoComplete="organization"
          className="w-full px-3.5 py-2.5 border border-line rounded-md text-base text-ink bg-paper focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">
          Mi a gond?
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
            <a href="/adatkezeles" className="text-navy underline hover:text-orange transition-colors">
              Adatkezelési tájékoztató
            </a>
            <span className="text-orange"> *</span>
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" className="mt-1 text-sm text-orange">{errors.consent}</p>
        )}
      </div>

      {status === 'error' && (
        <p className="text-base leading-relaxed text-orange">
          Nem sikerült elküldeni. Hívjon minket a {SITE.phone} számon, vagy
          próbálja újra pár perc múlva.
        </p>
      )}

      {rateLimited && (
        <p className="text-sm text-orange">
          Egy percenként csak egy kérést küldhet. Kérjük, várjon egy kicsit.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-orange text-white font-display font-bold rounded-md text-base hover:bg-orange/90 transition-colors disabled:opacity-60"
      >
        {status === 'submitting' ? 'Küldés…' : 'Visszahívást kérek'}
      </button>
    </form>
  );
}
