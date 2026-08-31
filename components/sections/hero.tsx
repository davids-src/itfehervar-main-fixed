import { SITE } from '@/lib/site';

export function Hero() {
  return (
    <section id="top" className="bg-paper hero-fade-in">
      <div className="mx-auto max-w-content px-5 pt-12 pb-10 sm:pt-16 sm:pb-14">
        <h1 className="font-display font-extrabold text-navy text-[2.125rem] leading-[1.1] sm:text-3xl sm:leading-[1.1] tracking-tight max-w-[20ch]">
          Ha megáll a net, a gép vagy a nyomtató, kimegyünk
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink max-w-[68ch]">
          Kisebb cégeknek, boltoknak, irodáknak és otthonra Székesfehérváron és
          Fejér vármegyében. A legtöbb hibát még aznap megjavítjuk, és utána
          elmondjuk emberi nyelven, mi volt a baj.
        </p>
        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center px-6 py-3.5 bg-orange text-white font-display font-bold rounded-md text-base hover:bg-orange/90 transition-colors"
          >
            Hívás: {SITE.phone}
          </a>
          <a
            href="#kapcsolat"
            className="inline-flex items-center justify-center px-6 py-3.5 border border-navy text-navy font-display font-bold rounded-md text-base hover:bg-navy hover:text-white transition-colors"
          >
            Kérek visszahívást
          </a>
        </div>
        <ul className="mt-8 flex flex-col gap-2 sm:flex-row sm:gap-8 sm:mt-6">
          <li className="text-sm text-ink/80">
            {SITE.hours.weekday}, {SITE.hours.saturday}
          </li>
          <li className="text-sm text-ink/80">{SITE.area}</li>
          <li className="text-sm text-ink/80">Általában egy órán belül visszahívjuk</li>
        </ul>
      </div>
    </section>
  );
}
