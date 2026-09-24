import { Metadata } from 'next';
import { SITE } from '@/lib/site';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';
import { Contact } from '@/components/sections/contact';
import { MobileCallBar } from '@/components/mobile-call-bar';
import { Battlement } from '@/components/battlement';
import Link from 'next/link';
import Script from 'next/script';

const CANONICAL = `${SITE.url}/ceges-it-szekesfehervar`;

export const metadata: Metadata = {
  title: 'Céges IT segítség Székesfehérváron — helyi informatikus | IT Fehérvár',
  description: 'Helyi IT segítség kisvállalkozásoknak Székesfehérváron: hibaelhárítás, hálózat, munkaállomások, Microsoft 365 és rendszeres támogatás — saját informatikus nélkül.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Céges IT segítség Székesfehérváron | IT Fehérvár',
    description: 'Helyi IT segítség kisvállalkozásoknak Székesfehérváron: hibaelhárítás, hálózat, munkaállomások, Microsoft 365.',
    url: CANONICAL,
  },
};

export default function CegesItPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 bg-paper">
        <div className="mx-auto max-w-content px-5">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ink/70">
            <ol className="flex items-center space-x-2">
              <li><Link href="/" className="hover:text-red">Főoldal</Link></li>
              <li>/</li>
              <li aria-current="page" className="text-navy font-medium">Céges IT</li>
            </ol>
          </nav>

          <h1 className="font-display font-extrabold text-navy text-3xl sm:text-4xl mb-6">
            Helyi IT segítség kisvállalkozásoknak Székesfehérváron
          </h1>
          <p className="text-lg text-ink mb-10 max-w-3xl">
            Hibaelhárítás, gépek, nyomtatók, internet és hálózat — alkalmi feladatra vagy rendszeres segítségként. Saját informatikus nélkül is működő IT.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {[
              { title: 'Hibaelhárítás és karbantartás', text: 'Megáll a nyomtató, nem megy a net, nincs hozzáférés a közös mapához — gyorsan kijövünk.' },
              { title: 'Munkaállomások és gépek', text: 'Új gép beállítása, szoftver telepítése, frissítések és felhasználók kezelése.' },
              { title: 'Microsoft 365', text: 'Outlook, Teams, SharePoint és OneDrive beállítás és felhasználói menedzsment.' },
              { title: 'Rendszeres IT támogatás', text: 'Nem kell saját informatikust tartani: hívjon, amikor kell, és adjunk mérhető választ.' },
            ].map(item => (
              <div key={item.title} className="border border-line rounded-lg p-6 bg-white">
                <h3 className="font-display font-bold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-ink text-base">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-lg text-ink max-w-3xl mb-12">
            <p>
              Ha a vállalkozás hálózatát is fejleszteni kell, nézze meg a <Link href="/halozatepites-szekesfehervar" className="text-navy underline">hálózatépítés oldalunkat</Link>. Új iroda indításához az <Link href="/uj-iroda-it" className="text-navy underline">új iroda IT kialakítás</Link> oldalon talál részleteket. Magánszemélyként felmerülő problémákhoz a <Link href="/szamitogep-szerviz-szekesfehervar" className="text-navy underline">számítógép szerviz</Link> oldal ajánlott.
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
            { "@type": "ListItem", "position": 2, "name": "Céges IT", "item": CANONICAL }
          ]
        })}
      </Script>
      <Script id="service-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Céges IT segítség Székesfehérváron",
          "provider": { "@type": "LocalBusiness", "name": "IT Fehérvár", "address": { "@type": "PostalAddress", "addressLocality": "Székesfehérvár", "addressRegion": "Fejér vármegye" } },
          "areaServed": { "@type": "State", "name": "Fejér vármegye" },
          "description": "Helyi IT segítség kisvállalkozásoknak: hibaelhárítás, hálózat, Microsoft 365, rendszeres IT támogatás."
        })}
      </Script>
    </>
  );
}
