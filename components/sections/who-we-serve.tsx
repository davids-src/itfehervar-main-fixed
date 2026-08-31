export function WhoWeServe() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-content px-5 py-12 sm:py-16">
        <h2 className="font-display font-extrabold text-navy text-2xl sm:text-2xl tracking-tight">
          Kinek dolgozunk
        </h2>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Business column — larger (3/5) */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-bold text-navy text-xl leading-snug">
              Kisebb cégnek, boltnak, irodának, műhelynek
            </h3>
            <p className="mt-4 text-base leading-relaxed text-ink">
              Több gép egy hálózaton. Közös mappa, amit mindenki elér. Céges
              e-mail beállítása új kollégának. Nyomtató, ami mindenkinek megy.
              Wifi, ami az üzlet vagy a raktár végében sem szakad meg. Stabil
              net a kamerarendszerhez, a pénztárgéphez, a kártyaterminálhoz.
              Rendszeres mentés, hogy egy meghibásodás ne vigye el a
              könyvelést. Új gépek beszerzése és beüzemelése, a régi
              adatainak átköltöztetésével.
            </p>
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
      </div>
    </section>
  );
}
