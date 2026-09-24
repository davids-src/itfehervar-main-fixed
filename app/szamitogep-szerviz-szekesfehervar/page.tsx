import { Metadata } from 'next';
import { SITE } from '@/lib/site';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';
import { Contact } from '@/components/sections/contact';
import { MobileCallBar } from '@/components/mobile-call-bar';
import { Battlement } from '@/components/battlement';
import Link from 'next/link';
import Script from 'next/script';

const CANONICAL = `${SITE.url}/szamitogep-szerviz-szekesfehervar`;

export const metadata: Metadata = {
  title: 'Számítógép szerviz Székesfehérváron — helyi IT segítség | IT Fehérvár',
  description: 'Lassú gép, vírus, adat-visszaállítás vagy új beállítás? Otthoni számítógép-szerviz Székesfehérváron és Fejér vármegyében, érthetően, szakzsargon nélkül.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Számítógép szerviz Székesfehérváron | IT Fehérvár',
    description: 'Lassú gép, vírus, adat-visszaállítás vagy új beállítás? Otthoni számítógép-szerviz Székesfehérváron.',
    url: CANONICAL,
  },
};

export default function SzamitogepSzervizPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 bg-paper">
        <div className="mx-auto max-w-content px-5">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ink/70">
            <ol className="flex items-center space-x-2">
              <li><Link href="/" className="hover:text-red">Főoldal</Link></li>
              <li>/</li>
              <li aria-current="page" className="text-navy font-medium">Számítógép szerviz</li>
            </ol>
          </nav>

          <h1 className="font-display font-extrabold text-navy text-3xl sm:text-4xl mb-6">
            Számítógép szerviz Székesfehérváron
          </h1>
          <p className="text-lg text-ink mb-10 max-w-3xl">
            Lassú gép, vírus, adatvesztés, nyomtatóprobléma vagy csak egy új gép beállítása — otthonra és irodába, érthetően, felesleges szakzsargon nélkül.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {[
              { title: 'Lassú vagy fagyó számítógép', text: 'Diagnosztizáljuk, mi lassítja, és megoldjuk — rendszerindítástól az operációs rendszerig.' },
              { title: 'Vírusirtás, kártevő-eltávolítás', text: 'Nem csak törlünk, hanem biztonságossá is tesszük a gépet a jövőre nézve.' },
              { title: 'Adatmentés és visszaállítás', text: 'Törölt fájlok, megsérült meghajtó — sok esetben visszanyerhető az adat.' },
              { title: 'Új gép vagy notebook beállítása', text: 'Windowstól a programokon át a fiók-szinkronig mindent beállítunk.' },
            ].map(item => (
              <div key={item.title} className="border border-line rounded-lg p-6 bg-white">
                <h3 className="font-display font-bold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-ink text-base">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-lg text-ink max-w-3xl mb-12">
            <p>
              Ha a <Link href="/wifi-internet-segitseg-szekesfehervar" className="text-navy underline">Wi-Fi vagy internet is problémás</Link>, azt is megnézzük ugyanabban a látogatásban. Céges géppel, munkaállomásokkal kapcsolatban a <Link href="/ceges-it-szekesfehervar" className="text-navy underline">céges IT oldalunkon</Link> talál bővebb információt.
            </p>
          </div>
        </div>
      </main>

      <Battlement className="bg-mist text-navy" />
      <Contact />
      <Footer />
      <MobileCallBar />

      <Script id="breadcrumb-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Főoldal", "item": SITE.url },
            { "@type": "ListItem", "position": 2, "name": "Számítógép szerviz", "item": CANONICAL }
          ]
        })}
      </Script>
      <Script id="service-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Számítógép szerviz Székesfehérváron",
          "provider": { "@type": "LocalBusiness", "name": "IT Fehérvár", "address": { "@type": "PostalAddress", "addressLocality": "Székesfehérvár", "addressRegion": "Fejér vármegye" } },
          "areaServed": { "@type": "State", "name": "Fejér vármegye" },
          "description": "Lassú gép, vírus, adatmentés, nyomtatóhiba és új gép beállítása Székesfehérváron."
        })}
      </Script>
    </>
  );
}
