import { ScrollReveal } from '@/components/scroll-reveal';

export const FAQ_ITEMS = [
  {
    question: 'Hova hívjak, ha elromlik a számítógépem Székesfehérváron?',
    answer: 'Az IT Fehérvár házhoz megy Székesfehérváron és Fejér vármegyében, és a legtöbb hibát még aznap megoldja. Hívható a +36 70 273 5532 számon, hétköznap 8–20, szombaton 9–14 óra között.',
  },
  {
    question: 'Mennyibe kerül egy házhoz jövő számítógépszerelő?',
    answer: 'Az IT Fehérvár nem közöl fix árlistát, mert két hasonlónak tűnő hiba mögött nagyon eltérő munka lehet. Telefonos egyeztetéskor elmondják, mire lehet számítani, a helyszínen pedig a munka megkezdése előtt megerősítik az árat.',
  },
  {
    question: 'Mit tegyek, ha nem működik az internet otthon vagy az irodában?',
    answer: 'Először érdemes újraindítani a routert, és ellenőrizni, hogy minden kábel a helyén van-e — ez sok esetben megoldja a problémát. Ha nem, hívja az IT Fehérvárt a +36 70 273 5532 számon, egyeztetünk egy időpontot, és kimegyünk megnézni.',
  },
  {
    question: 'Lassú lett a számítógépem, ez normális, vagy hiba?',
    answer: 'A hirtelen belassulás leggyakrabban túltelt tárhelyre, elavult szoftverre vagy háttérben futó kártevőre vezethető vissza, és a legtöbb esetben javítható. Az IT Fehérvár helyszínen megnézi és megoldja.',
  },
  {
    question: 'Vírusgyanú esetén kihez forduljak Székesfehérváron?',
    answer: 'Ha furcsa felugró ablakok jelennek meg, vagy gyanús, hogy vírus került a gépre, érdemes minél előbb hívni az IT Fehérvárt a +36 70 273 5532 számon — egyeztetünk egy időpontot, és kimegyünk megnézni a gépet.',
  },
  {
    question: 'Vállal az IT Fehérvár informatikai ügyeletet kisvállalkozásoknak?',
    answer: 'Igen — az IT Fehérvár elsősorban kisebb cégeknek, boltoknak és irodáknak dolgozik, amelyeknek nincs saját rendszergazdájuk. Hálózat, közös mappa, céges e-mail, nyomtató és a napi működéshez szükséges informatika karbantartását és hibaelhárítását végzik, hívásra.',
  },
  {
    question: 'Milyen területen dolgozik az IT Fehérvár?',
    answer: 'Az IT Fehérvár Székesfehérváron és Fejér vármegye egész területén vállal helyszíni kiszállást, a Székesfehérvárhoz közelebbi településeken jellemzően rövidebb várakozással.',
  },
  {
    question: 'Vállal garanciát az IT Fehérvár az elvégzett munkára?',
    answer: 'Igen, az elvégzett munkára a Polgári Törvénykönyv szerinti kellékszavatossági szabályok vonatkoznak. Ha a javítás után rövid időn belül visszatér ugyanaz a hiba, hívja nyugodtan az IT Fehérvárt.',
  },
  {
    question: 'Ad az IT Fehérvár számlát magánszemélyeknek is?',
    answer: 'Igen, az IT Fehérvár minden elvégzett munkáról számlát ad, magánszemélyeknek és cégeknek egyaránt.',
  },
  {
    question: 'Mennyi idő alatt ér ki a szerelő egy bejelentés után?',
    answer: 'A visszahívás-kérő űrlapon leadott megkeresésre az IT Fehérvár általában egy órán belül visszahívja az ügyfelet, a kiszállás időpontját pedig telefonon egyeztetik.',
  },
];

export function FAQ() {
  return (
    <section id="gyik" className="bg-paper">
      <ScrollReveal className="mx-auto max-w-content px-5 py-12 sm:py-16">
        <h2 className="font-display font-extrabold text-navy text-2xl sm:text-2xl tracking-tight">
          Gyakori kérdések
        </h2>
        <div className="mt-8 space-y-6">
          {FAQ_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="border-b border-navy/10 pb-6 last:border-b-0 last:pb-0"
            >
              <h3 className="font-display font-bold text-navy text-xl leading-snug">
                {item.question}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
