import type { Metadata } from 'next';
import { SITE } from '@/lib/site';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';
import { Contact } from '@/components/sections/contact';
import { MobileCallBar } from '@/components/mobile-call-bar';

const PATH = '/kapcsolat';

export const metadata: Metadata = {
  title: 'Kapcsolat | IT Fehérvár',
  description:
    'Írja le a hibát, adja meg a helyszínt és egy telefonszámot. Informatikai segítség Székesfehérváron.',
  alternates: { canonical: `${SITE.url}${PATH}` },
};

export default function KapcsolatPage() {
  return (
    <>
      <Header />
      <main className="pb-20 sm:pb-0">
        <div className="mx-auto max-w-content px-5 pt-10 sm:pt-14">
          <h1 className="font-display font-bold text-navy text-3xl tracking-tight">
            Kapcsolat
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink max-w-[68ch]">
            Ha informatikai gond van, legyen egyértelmű, hogy lehet telefonálni vagy írni, és a
            feladatot helyben vagy távolról megvizsgáljuk.
          </p>
          <p className="mt-3 text-base text-ink">
            Telefon:{' '}
            <a href={SITE.phoneHref} className="font-semibold text-red hover:underline">
              {SITE.phone}
            </a>
          </p>
        </div>
        <Contact heading="Írja le, mi a probléma." showIntro={false} />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
