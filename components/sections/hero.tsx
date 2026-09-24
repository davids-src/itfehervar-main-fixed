import { SITE } from '@/lib/site';

export function Hero() {
  return (
    <section id="top" className="bg-paper hero-fade-in">
      <div className="mx-auto max-w-content px-5 pt-12 pb-10 sm:pt-16 sm:pb-14">
        <h1 className="font-display font-extrabold text-navy text-[2.125rem] leading-[1.1] sm:text-4xl sm:leading-[1.1] tracking-tight max-w-[28ch]">
          IT probléma vagy új informatikai feladat Székesfehérváron?
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink max-w-[68ch]">
          Számítógép, internet, Wi-Fi, nyomtató, hálózat vagy céges IT. Eseti hibától az új iroda informatikájáig segítünk Székesfehérváron és Fejér vármegyében.
        </p>
        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center px-6 py-3.5 bg-red text-white font-display font-bold rounded-md text-base hover:bg-red-hover transition-colors"
          >
            Hívás most
          </a>
          <a
            href="#kapcsolat"
            className="inline-flex items-center justify-center px-6 py-3.5 border border-navy text-navy font-display font-bold rounded-md text-base hover:bg-navy hover:text-white transition-colors"
          >
            Visszahívást kérek
          </a>
        </div>
        <ul className="mt-8 flex flex-col gap-2 sm:flex-row sm:gap-8 sm:mt-6">
          <li className="text-sm text-ink/80 flex items-center before:content-['✓'] before:text-red before:font-bold before:mr-2">Magánszemélyeknek és cégeknek</li>
          <li className="text-sm text-ink/80 flex items-center before:content-['✓'] before:text-red before:font-bold before:mr-2">Eseti hiba és projektmunka</li>
          <li className="text-sm text-ink/80 flex items-center before:content-['✓'] before:text-red before:font-bold before:mr-2">Helyi kiszállás Székesfehérvárról</li>
        </ul>
      </div>
    </section>
  );
}
