import { ScrollReveal } from '@/components/scroll-reveal';

const PROBLEMS = [
  'Lassú vagy hibás számítógép',
  'Wi-Fi vagy internet probléma',
  'Nyomtató és hálózati hiba',
  'Új gép vagy munkaállomás beállítása',
  'Céges hálózat bővítése',
  'Új iroda informatikai kialakítása',
];

export function Problems() {
  return (
    <section className="bg-paper">
      <ScrollReveal className="mx-auto max-w-content px-5 py-12 sm:py-16">
        <h2 className="font-display font-extrabold text-navy text-2xl sm:text-2xl tracking-tight">
          Ilyenekkel szoktak keresni minket
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROBLEMS.map((problem) => (
            <div
              key={problem}
              className="border border-line rounded-lg p-5 bg-paper hover:border-navy/30 transition-colors"
            >
              <p className="text-base leading-relaxed text-ink">
                {problem}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-lg leading-relaxed text-ink max-w-[68ch]">
          Ha az Öné nincs a listán, akkor is hívjon. A legtöbb hiba pont így
          kezdődik.
        </p>
      </ScrollReveal>
    </section>
  );
}
