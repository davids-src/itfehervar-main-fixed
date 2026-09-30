import { ScrollReveal } from '@/components/scroll-reveal';

export function Local() {
  return (
    <section className="bg-paper">
      <ScrollReveal className="mx-auto max-w-content px-5 py-12 sm:py-16">
        <h2 className="font-display font-bold text-navy text-2xl tracking-tight">
          Helyi informatikai segítség.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-ink max-w-[68ch]">
          Székesfehérvárról dolgozunk, ezért a városban és a környező Fejér vármegyei helyszíneken személyes kiszállást is tudunk egyeztetni.
        </p>
      </ScrollReveal>
    </section>
  );
}
