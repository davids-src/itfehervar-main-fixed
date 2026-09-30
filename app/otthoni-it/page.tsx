import type { Metadata } from 'next';
import { SITE } from '@/lib/site';
import { ServicePage } from '@/components/service-page';

const PATH = '/otthoni-it';

export const metadata: Metadata = {
  title: 'Otthoni IT segítség Székesfehérváron | IT Fehérvár',
  description:
    'Számítógép, Wi-Fi, új eszköz, nyomtató, otthoni hálózat és adattárolás Székesfehérváron. Helyszíni és távoli segítség.',
  alternates: { canonical: `${SITE.url}${PATH}` },
};

export default function OtthoniItPage() {
  return (
    <ServicePage
      title="Otthoni IT segítség Székesfehérváron."
      intro="Számítógép, Wi-Fi, új eszköz, nyomtató, otthoni hálózat és adattárolás."
      breadcrumbLabel="Otthoni IT"
      canonicalPath={PATH}
      items={[
        {
          title: 'Lassú vagy nem működő számítógép',
          text: 'Hibafeltárás, beállítás, szoftveres probléma vagy szükség esetén a következő javítási lépés meghatározása.',
        },
        {
          title: 'Wi-Fi vagy internet probléma',
          text: 'Gyenge lefedettség, szakadozó kapcsolat, router- vagy hálózati probléma esetén felmérjük, hol van a hiba.',
        },
        {
          title: 'Nyomtató és periféria',
          text: 'Új eszköz beállítása vagy meglévő kapcsolat hibájának vizsgálata.',
        },
        {
          title: 'Új számítógép',
          text: 'Beüzemelés, alapbeállítások és szükség szerint adatköltözés.',
        },
        {
          title: 'Otthoni vagy céges hálózat',
          text: 'Router, switch, Wi-Fi és vezetékes hálózati feladatok.',
        },
        {
          title: 'NAS, fájlmegosztás és mentés',
          text: 'Kisebb helyi adattárolási és mentési feladatok.',
        },
      ]}
    />
  );
}
