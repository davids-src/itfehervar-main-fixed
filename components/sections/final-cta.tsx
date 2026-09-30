import { SITE } from '@/lib/site';
import { ScrollReveal } from '@/components/scroll-reveal';

export function FinalCta() {
  return (
    <section className="bg-paper">
      <ScrollReveal className="mx-auto max-w-content px-5 py-12 sm:py-16">
        <h2 className="font-display font-bold text-navy text-2xl tracking-tight">
          Mi nem működik?
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink max-w-[68ch]">
          Írja le röviden a hibát, adja meg a helyszínt és egy telefonszámot.
        </p>
        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          <a
            href="/kapcsolat"
            className="inline-flex items-center justify-center px-6 py-3.5 bg-red text-white font-bold rounded-md text-base hover:bg-red-hover transition-colors"
          >
            Hibabejelentés
          </a>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center px-6 py-3.5 border border-navy text-navy font-bold rounded-md text-base hover:bg-navy hover:text-white transition-colors"
          >
            Hívás
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
