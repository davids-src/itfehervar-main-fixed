import { ScrollReveal } from '@/components/scroll-reveal';

export function Pricing() {
  return (
    <section className="bg-navy">
      <ScrollReveal className="mx-auto max-w-content px-5 py-12 sm:py-16">
        <h2 className="font-display font-bold text-white text-2xl tracking-tight">
          Az árat a feladat alapján egyeztetjük.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-white/90 max-w-[68ch]">
          Két hasonló hibajelenség mögött eltérő ok és munka lehet. Ezért nem teszünk ki mesterséges &apos;ettől&apos; árakat olyan feladatra, amelyet előbb meg kell érteni.
        </p>
      </ScrollReveal>
    </section>
  );
}
