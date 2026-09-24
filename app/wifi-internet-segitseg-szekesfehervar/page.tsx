import { Metadata } from 'next';
import { SITE } from '@/lib/site';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';
import { Contact } from '@/components/sections/contact';
import { MobileCallBar } from '@/components/mobile-call-bar';
import { Battlement } from '@/components/battlement';
import Link from 'next/link';
import Script from 'next/script';

const CANONICAL = `${SITE.url}/wifi-internet-segitseg-szekesfehervar`;

export const metadata: Metadata = {
  title: 'Wi-Fi és internet segítség Székesfehérváron | IT Fehérvár',
  description: 'Lassú vagy megszakadó Wi-Fi, nincs internet? Helyszíni Wi-Fi és internet hibaelhárítás otthonra és irodába Székesfehérváron és Fejér vármegyében.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Wi-Fi és internet segítség Székesfehérváron | IT Fehérvár',
    description: 'Lassú vagy megszakadó Wi-Fi, nincs internet? Helyszíni hibaelhárítás és bővítés Székesfehérváron.',
    url: CANONICAL,
  },
};

export default function WifiInternetPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 bg-paper">
        <div className="mx-auto max-w-content px-5">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ink/70">
            <ol className="flex items-center space-x-2">
              <li><Link href="/" className="hover:text-red">Főoldal</Link></li>
              <li>/</li>
              <li aria-current="page" className="text-navy font-medium">Wi-Fi és internet segítség</li>
            </ol>
          </nav>

          <h1 className="font-display font-extrabold text-navy text-3xl sm:text-4xl mb-6">
            Wi-Fi és internet segítség Székesfehérváron
          </h1>
          <p className="text-lg text-ink mb-10 max-w-3xl">
            Lassú vagy megszakadó Wi-Fi, egyáltalán nincs internet, rossz lefedettség az otthon vagy az iroda egyik részében — helyszínen diagnosztizálunk és megoldjuk.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {[
              { title: 'Nincs vagy akadozó internet', text: 'Megkeressük a hibát a routertől a falig — legyen szó provider-problémáról vagy belső hibáról.' },
              { title: 'Gyenge Wi-Fi jel', text: 'A raktárban, a kertben vagy a felső emeleten sem ér el a Wi-Fi? Bővítjük a lefedettséget.' },
              { title: 'Router és modem beállítás', text: 'Új eszköz üzembe helyezése, jelszócsere, vendéghálózat — profi beállítással.' },
              { title: 'Sebesség- és stabilitásmérés', text: 'Megmutatjuk, valóban az előfizetett sebességet kapja-e, és mi okozza a lassulást.' },
            ].map(item => (
              <div key={item.title} className="border border-line rounded-lg p-6 bg-white">
                <h3 className="font-display font-bold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-ink text-base">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-lg text-ink max-w-3xl mb-12">
            <p>
              Nagyobb hálózatépítési feladathoz nézze meg a <Link href="/halozatepites-szekesfehervar" className="text-navy underline">hálózatépítés oldalunkat</Link>. Ha irodai hálózatot kell kialakítani, a <Link href="/ceges-it-szekesfehervar" className="text-navy underline">céges IT szolgáltatásunk</Link> ehhez is segítséget nyújt.
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
            { "@type": "ListItem", "position": 2, "name": "Wi-Fi és internet segítség", "item": CANONICAL }
          ]
        })}
      </Script>
      <Script id="service-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Wi-Fi és internet hibaelhárítás Székesfehérváron",
          "provider": { "@type": "LocalBusiness", "name": "IT Fehérvár", "address": { "@type": "PostalAddress", "addressLocality": "Székesfehérvár", "addressRegion": "Fejér vármegye" } },
          "areaServed": { "@type": "State", "name": "Fejér vármegye" },
          "description": "Lassú vagy megszakadó Wi-Fi és internet hibaelhárítás Székesfehérváron, otthonra és irodába."
        })}
      </Script>
    </>
  );
}
