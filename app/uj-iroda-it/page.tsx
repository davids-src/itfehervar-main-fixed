import { Metadata } from 'next';
import { SITE } from '@/lib/site';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';
import { Contact } from '@/components/sections/contact';
import { MobileCallBar } from '@/components/mobile-call-bar';
import { Battlement } from '@/components/battlement';
import Link from 'next/link';
import Script from 'next/script';

const CANONICAL = `${SITE.url}/uj-iroda-it`;

export const metadata: Metadata = {
  title: 'Új iroda IT beüzemelése Székesfehérváron | IT Fehérvár',
  description: 'Új iroda IT alapjai egy kézből: internet, Wi-Fi, hálózat, munkaállomások, Microsoft 365 és nyomtatók beüzemelése kisebb irodák számára Székesfehérváron.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Új iroda IT beüzemelése | IT Fehérvár',
    description: 'Új iroda IT alapjai egy kézből Székesfehérváron: internet, Wi-Fi, hálózat, munkaállomások és Microsoft 365.',
    url: CANONICAL,
  },
};

export default function UjIrodaItPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 bg-paper">
        <div className="mx-auto max-w-content px-5">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ink/70">
            <ol className="flex items-center space-x-2">
              <li><Link href="/" className="hover:text-red">Főoldal</Link></li>
              <li>/</li>
              <li aria-current="page" className="text-navy font-medium">Új iroda IT</li>
            </ol>
          </nav>

          <h1 className="font-display font-extrabold text-navy text-3xl sm:text-4xl mb-6">
            Új iroda IT alapjai egy kézből
          </h1>
          <p className="text-lg text-ink mb-10 max-w-3xl">
            Új helyszín, több munkaállomás vagy teljes IT-kialakítás — az internet bekötésétől a Microsoft 365 fiókokig mindent összehangolunk, hogy az indulás napján minden működjön.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {[
              { title: 'Internet és Wi-Fi kialakítás', text: 'Stabil kapcsolat az iroda minden pontján — router, access point és struktúrált kábelezés.' },
              { title: 'Munkaállomások beüzemelése', text: 'Gépek telepítése, domain vagy Microsoft 365 csatlakoztatása, felhasználók létrehozása.' },
              { title: 'Microsoft 365 beállítás', text: 'Tenant létrehozása vagy bővítése, Outlook, Teams, SharePoint és OneDrive konfiguráció.' },
              { title: 'Nyomtatók és perifériák', text: 'Hálózati nyomtató, szkenner és egyéb eszközök bekötése és tesztelése.' },
            ].map(item => (
              <div key={item.title} className="border border-line rounded-lg p-6 bg-white">
                <h3 className="font-display font-bold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-ink text-base">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-lg text-ink max-w-3xl mb-12">
            <p>
              A hálózati infrastruktúra részleteivel a <Link href="/halozatepites-szekesfehervar" className="text-navy underline">hálózatépítés oldalunkon</Link> talál bővebb információt. A beüzemelés utáni rendszeres informatikai támogatáshoz a <Link href="/ceges-it-szekesfehervar" className="text-navy underline">céges IT szolgáltatás</Link> áll rendelkezésre.
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
            { "@type": "ListItem", "position": 2, "name": "Új iroda IT", "item": CANONICAL }
          ]
        })}
      </Script>
      <Script id="service-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Új iroda IT beüzemelése",
          "provider": { "@type": "LocalBusiness", "name": "IT Fehérvár", "address": { "@type": "PostalAddress", "addressLocality": "Székesfehérvár", "addressRegion": "Fejér vármegye" } },
          "areaServed": { "@type": "State", "name": "Fejér vármegye" },
          "description": "Új iroda IT kialakítása: internet, Wi-Fi, hálózat, munkaállomások és Microsoft 365 beüzemelése kisebb irodákba."
        })}
      </Script>
    </>
  );
}
