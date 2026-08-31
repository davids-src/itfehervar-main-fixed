const TRUST_ITEMS = [
  {
    title: 'Nem kell saját rendszergazdát tartania',
    body: 'Egy 4–5 fős irodának nincs szüksége főállású informatikusra. Akkor hívjon minket, amikor tényleg baj van.',
  },
  {
    title: 'Előre tudja, mire számíthat',
    body: 'Telefonon átbeszéljük, és a munka megkezdése előtt megmondjuk, mennyibe fog kerülni. Utólagos meglepetés nincs.',
  },
  {
    title: 'Érthetően elmondjuk, mi volt',
    body: 'Szakszavak nélkül. Azt is, hogy legközelebb mit tud egyedül megoldani.',
  },
  {
    title: 'Helybeli vagyunk',
    body: 'Nem külföldi call center. Fehérvárról indulunk, és tudjuk, hol van a Lövölde utca.',
  },
];

export function TrustStrip() {
  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-content px-5 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_ITEMS.map((item) => (
            <div key={item.title}>
              <h3 className="font-display font-bold text-navy text-base leading-snug">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/80">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
