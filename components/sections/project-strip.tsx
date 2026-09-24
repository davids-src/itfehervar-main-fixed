import { ScrollReveal } from '@/components/scroll-reveal';
import Link from 'next/link';

export function ProjectStrip() {
  return (
    <section className="bg-navy text-white">
      <ScrollReveal className="mx-auto max-w-content px-5 py-12 sm:py-16 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl">
          <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mb-4">
            Nagyobb feladat vagy új iroda?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            Ha a munka túlmutat egy gyors hibajavításon, hálózatot, Wi-Fi-t, munkaállomásokat és Microsoft 365 környezetet is össze tudunk hangolni.
          </p>
        </div>
        <div className="shrink-0">
          <Link
            href="/ceges-it-szekesfehervar"
            className="inline-flex items-center justify-center px-6 py-3.5 bg-red text-white font-display font-bold rounded-md text-base hover:bg-red-hover transition-colors"
          >
            Céges IT egyeztetés
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
