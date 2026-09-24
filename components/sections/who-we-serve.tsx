import { IconCheck } from '@/components/icons';
import { ScrollReveal } from '@/components/scroll-reveal';

const BUSINESS_ITEMS = [
  'Több gép egy hálózaton',
  'Közös mappa, amit mindenki elér',
  'Céges e-mail beállítása új kollégának',
  'Nyomtató, ami mindenkinek megy',
  'Wifi, ami az üzlet vagy a raktár végében sem szakad meg',
  'Stabil net a kamerarendszerhez, a pénztárgéphez, a kártyaterminálhoz',
  'Rendszeres mentés, hogy egy meghibásodás ne vigye el a könyvelést',
  'Új gépek beszerzése és beüzemelése, a régi adatainak átköltöztetésével',
];

export function WhoWeServe() {
  return (
    <section className="bg-paper">
      <ScrollReveal className="mx-auto max-w-content px-5 py-12 sm:py-16">
        <h2 className="font-display font-extrabold text-navy text-2xl sm:text-2xl tracking-tight">
          Kinek dolgozunk
        </h2>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Business column — larger (3/5) */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-bold text-navy text-xl leading-snug">
              Kisebb cégnek, boltnak, irodának, műhelynek
            </h3>
            <ul className="mt-4 space-y-2">
              {BUSINESS_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <div className="mt-[4px] text-red shrink-0">
                    <IconCheck />
                  </div>
                  <span className="text-base leading-relaxed text-ink">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-base leading-relaxed text-ink">
              Ha valami leáll, felhív minket, és nem Önnek kell kitalálnia, kit
              hívjon.
            </p>
          </div>
          {/* Home column — smaller (2/5) */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-bold text-navy text-xl leading-snug">
              Otthonra
            </h3>
            <p className="mt-4 text-base leading-relaxed text-ink">
              Internet- és wifihibák. Lassú vagy el sem induló gép. Nyomtató.
              Vírusgyanú, furcsa felugró ablakok. Új gép beüzemelése és az
              adatok átköltöztetése. Fényképek, dokumentumok mentése. Tévé,
              okoseszköz felrakása a hálózatra.
            </p>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-navy/10">
          <p className="text-sm text-ink/70 leading-relaxed text-center sm:text-left">
            Kiszállunk többek között Székesfehérváron, Dunaújvárosban, Bicskén, Móron, Gárdonyban, Martonvásáron, Sárbogárdon, Velencén, Polgárdiban, Abán, Bodajkon és Enyingen is — ha a település nincs a listán, hívjon, és megmondjuk, mikor tudunk menni.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
