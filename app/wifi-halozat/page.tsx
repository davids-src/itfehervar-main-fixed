import type { Metadata } from 'next';
import { SITE } from '@/lib/site';
import { ServicePage } from '@/components/service-page';

const PATH = '/wifi-halozat';

export const metadata: Metadata = {
  title: 'Wi-Fi és hálózat Székesfehérváron | IT Fehérvár',
  description:
    'Wi-Fi, internet és hálózati segítség Székesfehérváron: gyenge lefedettség, szakadozó kapcsolat, router és vezetékes hálózat.',
  alternates: { canonical: `${SITE.url}${PATH}` },
};

export default function WifiHalozatPage() {
  return (
    <ServicePage
      title="Wi-Fi és hálózat Székesfehérváron."
      intro="Gyenge lefedettség, szakadozó kapcsolat, router- vagy hálózati probléma esetén felmérjük, hol van a hiba."
      breadcrumbLabel="Wi-Fi és hálózat"
      canonicalPath={PATH}
      items={[
        {
          title: 'Wi-Fi vagy internet probléma',
          text: 'Gyenge lefedettség, szakadozó kapcsolat, router- vagy hálózati probléma esetén felmérjük, hol van a hiba.',
        },
        {
          title: 'Otthoni vagy céges hálózat',
          text: 'Router, switch, Wi-Fi és vezetékes hálózati feladatok.',
        },
        {
          title: 'Új iroda alap IT',
          text: 'Munkaállomások, hálózat, Wi-Fi és az induláshoz szükséges alapvető informatikai környezet.',
        },
      ]}
    />
  );
}
