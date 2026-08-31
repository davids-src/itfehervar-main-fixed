import { CallbackForm } from '@/components/callback-form';
import { ScrollReveal } from '@/components/scroll-reveal';
import { SITE } from '@/lib/site';

export function Contact() {
  return (
    <section id="kapcsolat" className="bg-mist">
      <ScrollReveal className="mx-auto max-w-content px-5 py-12 sm:py-16">
        <h2 className="font-display font-extrabold text-navy text-2xl sm:text-2xl tracking-tight">
          Hívjon, vagy kérje, hogy mi hívjuk vissza
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink max-w-[68ch]">
          Ha épp nem tud beszélni, írja ide a számát. Általában egy órán belül
          visszahívjuk.
        </p>
        <p className="mt-2 text-base leading-relaxed text-ink/70">
          Elérhetőség: {SITE.hours.weekday}, {SITE.hours.saturday}.
        </p>
        <div className="mt-8 max-w-xl">
          <CallbackForm />
        </div>
      </ScrollReveal>
    </section>
  );
}
