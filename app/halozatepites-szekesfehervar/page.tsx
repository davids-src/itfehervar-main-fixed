import { Metadata } from 'next';
import { SITE } from '@/lib/site';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';
import { Contact } from '@/components/sections/contact';
import { MobileCallBar } from '@/components/mobile-call-bar';
import { Battlement } from '@/components/battlement';
import Link from 'next/link';
import Script from 'next/script';

const CANONICAL = `${SITE.url}/halozatepites-szekesfehervar`;

export const metadata: Metadata = {
  title: 'Hálózatépítés Székesfehérváron — Wi-Fi és LAN kiépítés | IT Fehérvár',
  description: 'Irodai és otthoni hálózatépítés Székesfehérváron: Wi-Fi bővítés, kábelezés, switch és access point telepítés. Stabil, biztonságos hálózat a helyszínhez igazítva.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Hálózatépítés Székesfehérváron | IT Fehérvár',
    description: 'Irodai és otthoni hálózatépítés: Wi-Fi bővítés, kábelezés, switch és access point telepítés Székesfehérváron.',
    url: CANONICAL,
  },
};

export default function HalozatepitesPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 bg-paper">
        <div className="mx-auto max-w-content px-5">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ink/70">
            <ol className="flex items-center space-x-2">
              <li><Link href="/" className="hover:text-red">Főoldal</Link></li>
              <li>/</li>
              <li aria-current="page" className="text-navy font-medium">Hálózatépítés</li>
            </ol>
          </nav>

          <h1 className="font-display font-extrabold text-navy text-3xl sm:text-4xl mb-6">
            Hálózatépítés Székesfehérváron
          </h1>
          <p className="text-lg text-ink mb-10 max-w-3xl">
            Otthon, irodában vagy üzletben: stabil lefedettség, kábelezés és hálózati eszközök a helyszínhez igazítva — tervezéstől a beüzemelésig.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {[
              { title: 'Wi-Fi bővítés és optimalizálás', text: 'Access point telepítés, mesh rendszer kialakítása — minden sarokba elér a jel.' },
              { title: 'Strukturált kábelezés', text: 'Cat6 UTP kábelezés, patch panel, rack szekrény kiépítése irodahelyiségekbe.' },
              { title: 'Switch és router konfiguráció', text: 'VLAN, portbiztonság, QoS — a hálózat biztonságos és gyors lesz.' },
              { title: 'Meglévő hálózat fejlesztése', text: 'Lassú vagy instabil hálózat felülvizsgálata, szűk keresztmetszet megszüntetése.' },
            ].map(item => (
              <div key={item.title} className="border border-line rounded-lg p-6 bg-white">
                <h3 className="font-display font-bold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-ink text-base">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-lg text-ink max-w-3xl mb-12">
            <p>
              Teljes irodai IT kialakítást keres? Nézze meg az <Link href="/uj-iroda-it" className="text-navy underline">új iroda IT beüzemelés</Link> oldalunkat. Gyorsabb Wi-Fi javítást keres? A <Link href="/wifi-internet-segitseg-szekesfehervar" className="text-navy underline">Wi-Fi és internet segítség</Link> oldal lehet a megfelelő. A komplex céges igényekhez a <Link href="/ceges-it-szekesfehervar" className="text-navy underline">céges IT</Link> oldalon talál bővebb információt.
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
            { "@type": "ListItem", "position": 2, "name": "Hálózatépítés", "item": CANONICAL }
          ]
        })}
      </Script>
      <Script id="service-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Hálózatépítés Székesfehérváron",
          "provider": { "@type": "LocalBusiness", "name": "IT Fehérvár", "address": { "@type": "PostalAddress", "addressLocality": "Székesfehérvár", "addressRegion": "Fejér vármegye" } },
          "areaServed": { "@type": "State", "name": "Fejér vármegye" },
          "description": "Irodai és otthoni hálózatépítés: Wi-Fi bővítés, kábelezés, switch és access point telepítés Székesfehérváron."
        })}
      </Script>
    </>
  );
}
