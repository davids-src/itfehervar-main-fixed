import { IconNoAdmin, IconClock, IconSpeechBubble, IconPin } from '@/components/icons';
import { ScrollReveal } from '@/components/scroll-reveal';

const TRUST_ITEMS = [
  {
    title: 'Nem kell saját rendszergazdát tartania',
    body: 'Egy 4–5 fős irodának nincs szüksége főállású informatikusra. Akkor hívjon minket, amikor tényleg baj van.',
    icon: IconNoAdmin,
  },
  {
    title: 'Előre tudja, mire számíthat',
    body: 'Telefonon átbeszéljük, és a munka megkezdése előtt megmondjuk, mennyibe fog kerülni. Utólagos meglepetés nincs.',
    icon: IconClock,
  },
  {
    title: 'Megjavítjuk, nem csak megnézzük',
    body: 'Nem magyarázatot kap, hanem működő gépet, internetet vagy nyomtatót.',
    icon: IconSpeechBubble,
  },
  {
    title: 'Helybeli vagyunk',
    body: 'Nem külföldi call center. Fehérvárról indulunk, és tudjuk, hol van a Lövölde utca.',
    icon: IconPin,
  },
];

export function TrustStrip() {
  return (
    <section className="bg-mist">
      <ScrollReveal className="mx-auto max-w-content px-5 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title}>
                <div className="mb-3 text-navy">
                  <Icon />
                </div>
                <h3 className="font-display font-bold text-navy text-base leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </ScrollReveal>
    </section>
  );
}
