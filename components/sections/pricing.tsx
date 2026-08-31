import { SITE } from '@/lib/site';

export function Pricing() {
  return (
    <section className="bg-navy-deep">
      <div className="mx-auto max-w-content px-5 py-12 sm:py-16">
        <h2 className="font-display font-extrabold text-white text-2xl sm:text-2xl tracking-tight">
          Mennyibe kerül?
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-white/90 max-w-[68ch]">
          Árlistát szándékosan nem teszünk ki. Két ugyanúgy hangzó hiba mögött
          nagyon eltérő munka lehet: az egyik öt perc, a másik fél nap. Egy
          kitalált árral vagy Ön járna rosszul, vagy mi.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-white/90 max-w-[68ch]">
          Ehelyett ezt ígérjük: telefonon elmondja, mi a baj, mi pedig megmondjuk,
          körülbelül mire számíthat és mennyi időbe telik. A munka megkezdése
          előtt a helyszínen is megerősítjük az árat, és Ön dönt. Számlát minden
          esetben adunk.
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
            className="inline-flex items-center justify-center px-6 py-3.5 border border-white/40 text-white font-display font-bold rounded-md text-base hover:bg-white/10 transition-colors"
          >
            Kérek visszahívást
          </a>
        </div>
      </div>
    </section>
  );
}
