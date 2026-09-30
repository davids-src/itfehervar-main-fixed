import { SITE } from '@/lib/site';

export function Hero() {
  return (
    <section id="top" className="bg-paper hero-fade-in">
      <div className="mx-auto max-w-content px-5 pt-12 pb-10 sm:pt-16 sm:pb-14">
        <h1 className="font-display font-bold text-navy text-[2.125rem] leading-[1.1] sm:text-4xl sm:leading-[1.1] tracking-tight max-w-[28ch]">
          Informatikai segítség Székesfehérváron.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink max-w-[68ch]">
          Nem működik a számítógép, a Wi-Fi, az internet vagy a nyomtató? Új eszközt kell beállítani? Céges és otthoni informatikai feladatokhoz is kiszállunk.
        </p>
        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center px-6 py-3.5 bg-red text-white font-bold rounded-md text-base hover:bg-red-hover transition-colors"
          >
            Hívás most
          </a>
          <a
            href="/kapcsolat"
            className="inline-flex items-center justify-center px-6 py-3.5 border border-navy text-navy font-bold rounded-md text-base hover:bg-navy hover:text-white transition-colors"
          >
            Leírom a hibát
          </a>
        </div>
        <p className="mt-8 text-sm text-muted">
          Magánszemélyeknek és cégeknek · Helyszíni és távoli segítség · Székesfehérvárról
        </p>
      </div>
    </section>
  );
}
