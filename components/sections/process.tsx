import { ScrollReveal } from '@/components/scroll-reveal';

const STEPS = [
  {
    title: 'Mondja el, mi a gond',
    text: 'Telefonon vagy az űrlapon röviden írja le a hibát és a helyszínt.',
  },
  {
    title: 'Egyeztetjük a következő lépést',
    text: 'Megnézzük, kezelhető-e távolról, helyszíni kiszállás kell, vagy további információ szükséges. A díjazás módját a munka előtt egyeztetjük.',
  },
  {
    title: 'Megoldjuk vagy meghatározzuk a javítás útját',
    text: 'Elvégezzük az egyeztetett feladatot. Ha alkatrész, további munka vagy más szakági beavatkozás szükséges, azt külön jelezzük.',
  },
];

export function Process() {
  return (
    <section className="bg-mist">
      <ScrollReveal className="mx-auto max-w-content px-5 py-12 sm:py-16">
        <h2 className="font-display font-bold text-navy text-2xl tracking-tight">
          Hogyan indul?
        </h2>
        <div className="mt-8 space-y-0">
          {STEPS.map((step, index) => (
            <div
              key={step.title}
              className="flex gap-5 py-6 border-t border-line first:border-t-0"
            >
              <span className="font-bold text-red text-lg shrink-0 w-6">
                {index + 1}.
              </span>
              <div>
                <h3 className="font-bold text-navy text-lg leading-snug">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-ink">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
