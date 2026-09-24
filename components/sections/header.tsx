import { Logo } from '@/components/logo';
import { SITE } from '@/lib/site';

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-paper border-b border-line">
      <div className="mx-auto max-w-content px-5 flex items-center justify-between h-16">
        <a href="#top" aria-label="IT Fehérvár — vissza a lap tetejére">
          <Logo className="h-8" />
        </a>
        <div className="flex items-center gap-3">
          <a
            href={SITE.phoneHref}
            className="font-display font-bold text-navy text-lg leading-none hover:text-red transition-colors"
            aria-label={`Hívja a ${SITE.phone} telefonszámot`}
          >
            {SITE.phone}
          </a>
          <a
            href="#kapcsolat"
            className="hidden sm:inline-flex items-center px-4 py-2 border border-navy text-navy rounded-md font-medium text-sm hover:bg-navy hover:text-white transition-colors"
          >
            Visszahívást kérek
          </a>
        </div>
      </div>
    </header>
  );
}
