'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { SITE, NAV_ITEMS } from '@/lib/site';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-paper border-b border-line">
      <div className="mx-auto max-w-content px-5 flex items-center justify-between h-16 gap-4">
        <Link href="/" aria-label="IT Fehérvár — kezdőlap" className="shrink-0">
          <Logo className="h-8" />
        </Link>

        <nav className="hidden lg:flex items-center gap-5" aria-label="Fő navigáció">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-navy hover:text-red transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={SITE.phoneHref}
            className="font-bold text-red text-base sm:text-lg leading-none hover:text-red-hover transition-colors"
            aria-label={`Hívás: ${SITE.phone}`}
          >
            <span className="sm:hidden" aria-hidden="true">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </span>
            <span className="hidden sm:inline">{SITE.phone}</span>
          </a>
          <Link
            href="/kapcsolat"
            className="hidden sm:inline-flex items-center px-4 py-2 bg-red text-white rounded-md font-semibold text-sm hover:bg-red-hover transition-colors"
          >
            Hibabejelentés
          </Link>
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 text-navy"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Menü bezárása' : 'Menü megnyitása'}
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="lg:hidden border-t border-line bg-paper px-5 py-3" aria-label="Mobil navigáció">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2.5 text-base font-semibold text-navy hover:text-red"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
