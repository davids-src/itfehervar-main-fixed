import type { Metadata } from 'next';
import { SITE } from '@/lib/site';
import { ServicePage } from '@/components/service-page';

const PATH = '/ceges-it';

export const metadata: Metadata = {
  title: 'Céges IT segítség Székesfehérváron | IT Fehérvár',
  description:
    'Munkaállomás, hálózat, felhasználó, Microsoft 365, nyomtató és kisebb üzleti informatikai feladat Székesfehérváron.',
  alternates: { canonical: `${SITE.url}${PATH}` },
};

export default function CegesItPage() {
  return (
    <ServicePage
      title="Céges IT segítség Székesfehérváron."
      intro="Munkaállomás, hálózat, felhasználó, Microsoft 365, nyomtató és kisebb üzleti informatikai feladat."
      breadcrumbLabel="Céges IT"
      canonicalPath={PATH}
      items={[
        {
          title: 'Lassú vagy nem működő számítógép',
          text: 'Hibafeltárás, beállítás, szoftveres probléma vagy szükség esetén a következő javítási lépés meghatározása.',
        },
        {
          title: 'Otthoni vagy céges hálózat',
          text: 'Router, switch, Wi-Fi és vezetékes hálózati feladatok.',
        },
        {
          title: 'Új felhasználó vagy Microsoft 365',
          text: 'Fiók, levelezés és alapvető céges hozzáférések beállítása.',
        },
        {
          title: 'Nyomtató és periféria',
          text: 'Új eszköz beállítása vagy meglévő kapcsolat hibájának vizsgálata.',
        },
        {
          title: 'NAS, fájlmegosztás és mentés',
          text: 'Kisebb helyi adattárolási és mentési feladatok.',
        },
        {
          title: 'Új iroda alap IT',
          text: 'Munkaállomások, hálózat, Wi-Fi és az induláshoz szükséges alapvető informatikai környezet.',
        },
      ]}
    />
  );
}
