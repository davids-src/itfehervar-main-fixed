import Link from 'next/link';
import { ScrollReveal } from '@/components/scroll-reveal';

const COLUMNS = [
  {
    title: 'Otthoni segítség',
    body: 'Számítógép, Wi-Fi, új eszköz, nyomtató, otthoni hálózat és adattárolás.',
    cta: 'Otthoni IT',
    href: '/otthoni-it',
  },
  {
    title: 'Céges segítség',
    body: 'Munkaállomás, hálózat, felhasználó, Microsoft 365, nyomtató és kisebb üzleti informatikai feladat.',
    cta: 'Céges IT',
    href: '/ceges-it',
  },
];

export function Segments() {
  return (
    <section className="bg-paper">
      <ScrollReveal className="mx-auto max-w-content px-5 py-12 sm:py-16">
        <h2 className="font-display font-bold text-navy text-2xl tracking-tight text-center">
          Otthon és munkahelyen is.
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {COLUMNS.map((col) => (
            <div key={col.href} className="border border-line rounded-lg p-8 bg-paper flex flex-col">
              <h3 className="font-bold text-navy text-xl">{col.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-ink flex-1">{col.body}</p>
              <Link
                href={col.href}
                className="mt-6 inline-flex items-center text-red font-bold hover:text-red-hover transition-colors"
              >
                {col.cta}
              </Link>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
