import { ScrollReveal } from '@/components/scroll-reveal';

const PROBLEMS = [
  {
    title: 'Lassú vagy nem működő számítógép',
    text: 'Hibafeltárás, beállítás, szoftveres probléma vagy szükség esetén a következő javítási lépés meghatározása.',
  },
  {
    title: 'Wi-Fi vagy internet probléma',
    text: 'Gyenge lefedettség, szakadozó kapcsolat, router- vagy hálózati probléma esetén felmérjük, hol van a hiba.',
  },
  {
    title: 'Nyomtató és periféria',
    text: 'Új eszköz beállítása vagy meglévő kapcsolat hibájának vizsgálata.',
  },
  {
    title: 'Új számítógép',
    text: 'Beüzemelés, alapbeállítások és szükség szerint adatköltözés.',
  },
  {
    title: 'Otthoni vagy céges hálózat',
    text: 'Router, switch, Wi-Fi és vezetékes hálózati feladatok.',
  },
  {
    title: 'Új felhasználó vagy Microsoft 365',
    text: 'Fiók, levelezés és alapvető céges hozzáférések beállítása.',
  },
  {
    title: 'NAS, fájlmegosztás és mentés',
    text: 'Kisebb helyi adattárolási és mentési feladatok.',
  },
  {
    title: 'Új iroda alap IT',
    text: 'Munkaállomások, hálózat, Wi-Fi és az induláshoz szükséges alapvető informatikai környezet.',
  },
];

export function Problems() {
  return (
    <section className="bg-mist">
      <ScrollReveal className="mx-auto max-w-content px-5 py-12 sm:py-16">
        <h2 className="font-display font-bold text-navy text-2xl tracking-tight">
          Miben tudunk segíteni?
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PROBLEMS.map((problem) => (
            <div key={problem.title} className="border border-line rounded-lg p-5 bg-paper">
              <h3 className="font-bold text-navy text-base leading-snug">{problem.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-ink">{problem.text}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
