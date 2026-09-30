import Link from 'next/link';
import { Logo } from '@/components/logo';
import { SITE, COMPANY, NAV_ITEMS } from '@/lib/site';

export function Footer() {
  return (
    <footer className="bg-navy">
      <div className="mx-auto max-w-content px-5 py-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
          <div className="flex-1">
            <Logo className="h-8" />
            <div className="mt-5 space-y-1.5 text-sm text-white/80">
              <p>
                <a href={SITE.phoneHref} className="hover:text-white transition-colors">
                  {SITE.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">
                  {SITE.email}
                </a>
              </p>
              <p>{SITE.area}</p>
            </div>
          </div>

          <nav className="flex flex-col gap-2 text-sm" aria-label="Lábléc navigáció">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/aszf" className="text-white/80 hover:text-white transition-colors mt-2">
              ÁSZF
            </Link>
            <Link href="/adatvedelem" className="text-white/80 hover:text-white transition-colors">
              Adatvédelem
            </Link>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 space-y-2">
          <p className="text-xs text-white/50 leading-relaxed">
            {COMPANY.legalName} · {COMPANY.address} · Adószám: {COMPANY.taxNumber} ·
            Cégjegyzékszám: {COMPANY.companyNumber}
          </p>
        </div>
      </div>
    </footer>
  );
}
