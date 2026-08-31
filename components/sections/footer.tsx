import { Logo } from '@/components/logo';
import { SITE, COMPANY } from '@/lib/site';

export function Footer() {
  const companyLine = COMPANY.companyNumber
    ? `Az IT Fehérvár szolgáltatást a ${COMPANY.legalName} nyújtja. Székhely: ${COMPANY.address}. Adószám: ${COMPANY.taxNumber}. Cégjegyzékszám: ${COMPANY.companyNumber}.`
    : `Az IT Fehérvár szolgáltatást a ${COMPANY.legalName} nyújtja. Székhely: ${COMPANY.address}. Adószám: ${COMPANY.taxNumber}.`;

  return (
    <footer className="bg-navy-deep">
      <div className="mx-auto max-w-content px-5 py-12">
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
          {/* Left: logo + contact */}
          <div className="flex-1">
            <Logo variant="light" className="h-8" />
            <div className="mt-5 space-y-1.5 text-sm text-white/80">
              <p>
                <a
                  href={SITE.phoneHref}
                  className="hover:text-white transition-colors"
                >
                  {SITE.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE.email}
                </a>
              </p>
              <p>{SITE.area}</p>
              <p>
                {SITE.hours.weekday}, {SITE.hours.saturday}
              </p>
            </div>
          </div>
          {/* Right: legal links */}
          <nav className="flex flex-col gap-2 text-sm">
            <a
              href="/aszf"
              className="text-white/80 hover:text-white transition-colors"
            >
              ÁSZF
            </a>
            <a
              href="/adatkezeles"
              className="text-white/80 hover:text-white transition-colors"
            >
              Adatkezelési tájékoztató
            </a>
          </nav>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10">
          <p className="text-xs text-white/50 leading-relaxed">{companyLine}</p>
        </div>
      </div>
    </footer>
  );
}
