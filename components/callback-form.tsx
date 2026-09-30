'use client';

import { useState, useRef } from 'react';
import { SITE, PROBLEM_OPTIONS, SEGMENT_OPTIONS, FORM_NOTICE } from '@/lib/site';

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
        (window as any).dataLayer.push({ event: 'form_start', form_type: 'lead' });
      }
    }
  };

  const validate = (data: FormData) => {
    const errs: Record<string, string> = {};
    const problem = (data.get('problem') as string)?.trim();
    const segment = (data.get('segment') as string)?.trim();
    const location = (data.get('location') as string)?.trim();
    const name = (data.get('name') as string)?.trim();
    const phone = (data.get('phone') as string)?.trim();
    const email = (data.get('email') as string)?.trim();
    const message = (data.get('message') as string)?.trim();
    const consent = data.get('consent');

    if (!problem) errs.problem = 'Kérjük, válassza ki a problémát.';
    if (!segment) errs.segment = 'Kérjük, válassza ki: otthoni vagy céges.';
    if (!location) errs.location = 'Kérjük, adja meg a települést.';
    if (!name) errs.name = 'Kérjük, adja meg a nevét.';
    if (!phone) {
      errs.phone = 'Kérjük, adja meg a telefonszámát.';
    } else {
      const digits = phone.replace(/[\s\-()\/+.]/g, '');
      if (!/^(?:36|06)\d{8,9}$/.test(digits)) {
        errs.phone = 'Érvénytelen magyar telefonszám. Például: 06 70 123 4567';
      }
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Érvénytelen e-mail cím.';
    }
    if (!message) errs.message = 'Kérjük, írja le röviden, mi történt.';
    if (!consent) errs.consent = 'A hozzájárulás szükséges a kapcsolatfelvételhez.';
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
        (window as any).dataLayer.push({
          event: 'form_error',
          form_type: 'lead',
          error_type: 'validation',
        });
      }
      return;
    }

    const now = Date.now();
    if (now - lastSubmitRef.current < 60000) {
      setRateLimited(true);
      return;
    }
    lastSubmitRef.current = now;

    try {
      const firstTouch = localStorage.getItem('attribution_first_touch');
      const lastTouch = localStorage.getItem('attribution_last_touch');
      if (firstTouch) data.append('first_touch', firstTouch);
      if (lastTouch) data.append('last_touch', lastTouch);
    } catch {
      // ignore
    }

    const problem = data.get('problem') as string;
    const segment = data.get('segment') as string;
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
          form_type: 'lead',
          problem,
          segment,
          location_region: location,
          landing_page: window.location.pathname,
        });
      }
    } catch {
      setStatus('error');
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'form_error',
          form_type: 'lead',
          error_type: 'api',
        });
      }
    }
  };

  if (status === 'success') {
    return (
      <div className="border border-navy/20 rounded-lg p-6 bg-paper">
        <p className="text-base leading-relaxed text-ink">
          Megkaptuk a megkeresését. A feladat részleteinek egyeztetéséhez a megadott
          elérhetőségen jelentkezünk. Sürgős esetben hívjon minket:{' '}
          <a href={SITE.phoneHref} className="font-semibold text-red hover:underline">
            {SITE.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  const fieldClass =
    'w-full px-3.5 py-2.5 border border-line rounded-md text-base text-ink bg-paper focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy';

  return (
    <form onSubmit={handleSubmit} onChange={handleFormInteraction} noValidate className="space-y-4">
      <div className="hidden" aria-hidden="true">
        <label>
          Ne töltse ki
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label htmlFor="problem" className="block text-sm font-medium text-ink mb-1.5">
          Mi a gond? <span className="text-red">*</span>
        </label>
        <select id="problem" name="problem" required className={fieldClass} aria-invalid={!!errors.problem}>
          <option value="">Válasszon…</option>
          {PROBLEM_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.problem && <p className="mt-1 text-sm text-red">{errors.problem}</p>}
      </div>

      <div>
        <label htmlFor="segment" className="block text-sm font-medium text-ink mb-1.5">
          Otthoni vagy céges? <span className="text-red">*</span>
        </label>
        <select id="segment" name="segment" required className={fieldClass} aria-invalid={!!errors.segment}>
          <option value="">Válasszon…</option>
          {SEGMENT_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.segment && <p className="mt-1 text-sm text-red">{errors.segment}</p>}
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-medium text-ink mb-1.5">
          Település <span className="text-red">*</span>
        </label>
        <input
          id="location"
          name="location"
          type="text"
          required
          autoComplete="address-level2"
          className={fieldClass}
          aria-invalid={!!errors.location}
        />
        {errors.location && <p className="mt-1 text-sm text-red">{errors.location}</p>}
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
          className={fieldClass}
          aria-invalid={!!errors.name}
        />
        {errors.name && <p className="mt-1 text-sm text-red">{errors.name}</p>}
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
          className={fieldClass}
          aria-invalid={!!errors.phone}
        />
        {errors.phone && <p className="mt-1 text-sm text-red">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className={fieldClass}
          aria-invalid={!!errors.email}
        />
        {errors.email && <p className="mt-1 text-sm text-red">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">
          Mi történt? <span className="text-red">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className={`${fieldClass} resize-y`}
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="mt-1 text-sm text-red">{errors.message}</p>}
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-0.5 w-4 h-4 shrink-0 accent-red"
            aria-invalid={!!errors.consent}
          />
          <span className="text-sm leading-relaxed text-ink">
            Hozzájárulok, hogy a megkeresésem ügyében felvegyék velem a kapcsolatot.{' '}
            <a href="/adatvedelem" className="text-navy underline hover:text-red transition-colors">
              Adatvédelmi tájékoztató
            </a>
            <span className="text-red"> *</span>
          </span>
        </label>
        {errors.consent && <p className="mt-1 text-sm text-red">{errors.consent}</p>}
      </div>

      <p className="text-sm text-muted leading-relaxed">{FORM_NOTICE}</p>

      {status === 'error' && (
        <p className="text-base leading-relaxed text-red">
          Nem sikerült elküldeni. Hívjon minket a {SITE.phone} számon, vagy próbálja újra pár perc múlva.
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
        className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-red text-white font-bold rounded-md text-base hover:bg-red-hover transition-colors disabled:opacity-60"
      >
        {status === 'submitting' ? 'Küldés…' : 'Hibabejelentés'}
      </button>
    </form>
  );
}
