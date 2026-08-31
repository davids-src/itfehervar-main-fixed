import { ScrollReveal } from '@/components/scroll-reveal';

const STEPS = [
  {
    title: 'Felhívja, és elmondja, mi a baj',
    body: 'Kérdezünk pár dolgot, hogy tudjuk, mit vigyünk magunkkal. Ha távolról megoldható, meg sem várjuk a kiszállást.',
  },
  {
    title: 'Kimegyünk a megbeszélt időpontban',
    body: 'Ha a helyszínen kiderül, hogy nagyobb munka lesz, előtte szólunk, mennyibe kerül. Addig nem csinálunk semmit.',
  },
  {
    title: 'Megjavítjuk, és elmondjuk, mi volt',
    body: 'Számlát adunk, és ha pár nap múlva kérdés merül fel, nyugodtan hívhat.',
  },
];

function SignalBars({ count }: { count: number }) {
  return (
    <div className="flex items-end gap-1 h-8" aria-hidden="true">
      <div
        className={`w-2 rounded-sm ${count >= 1 ? 'bg-orange' : 'bg-line'}`}
        style={{ height: '30%' }}
      />
      <div
        className={`w-2 rounded-sm ${count >= 2 ? 'bg-orange' : 'bg-line'}`}
        style={{ height: '65%' }}
      />
      <div
        className={`w-2 rounded-sm ${count >= 3 ? 'bg-orange' : 'bg-line'}`}
        style={{ height: '100%' }}
      />
    </div>
  );
}

export function Process() {
  return (
    <section className="bg-paper">
      <ScrollReveal className="mx-auto max-w-content px-5 py-12 sm:py-16">
        <h2 className="font-display font-extrabold text-navy text-2xl sm:text-2xl tracking-tight">
          Hogyan zajlik
        </h2>
        <div className="mt-8 space-y-0">
          {STEPS.map((step, index) => (
            <div
              key={step.title}
              className="flex gap-5 py-6 border-t border-line first:border-t-0"
            >
              <div className="flex flex-col items-center shrink-0">
                <SignalBars count={index + 1} />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-extrabold text-orange text-lg">
                    {index + 1}.
                  </span>
                  <h3 className="font-display font-bold text-navy text-lg leading-snug">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-2 text-base leading-relaxed text-ink">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
