import type { Metadata } from 'next';
import { SITE } from '@/lib/site';
import { ServicePage } from '@/components/service-page';

const PATH = '/szamitogep-segitseg';

export const metadata: Metadata = {
  title: 'Számítógép segítség Székesfehérváron | IT Fehérvár',
  description:
    'Számítógép segítség Székesfehérváron: hibafeltárás, beállítás, új gép beüzemelése és adatköltözés.',
  alternates: { canonical: `${SITE.url}${PATH}` },
};

export default function SzamitogepSegitsegPage() {
  return (
    <ServicePage
      title="Számítógép segítség Székesfehérváron."
      intro="Hibafeltárás, beállítás, szoftveres probléma vagy szükség esetén a következő javítási lépés meghatározása."
      breadcrumbLabel="Számítógép segítség"
      canonicalPath={PATH}
      items={[
        {
          title: 'Lassú vagy nem működő számítógép',
          text: 'Hibafeltárás, beállítás, szoftveres probléma vagy szükség esetén a következő javítási lépés meghatározása.',
        },
        {
          title: 'Új számítógép',
          text: 'Beüzemelés, alapbeállítások és szükség szerint adatköltözés.',
        },
        {
          title: 'Nyomtató és periféria',
          text: 'Új eszköz beállítása vagy meglévő kapcsolat hibájának vizsgálata.',
        },
      ]}
    />
  );
}
