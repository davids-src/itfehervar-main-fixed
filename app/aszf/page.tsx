import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'Általános Szerződési Feltételek — IT Fehérvár',
  description: 'Az IT Fehérvár (SIROTECH Kft.) helyszíni és távoli informatikai hibaelhárító szolgáltatásának általános szerződési feltételei.',
};

export default function AszfPage() {
  return (
    <LegalPage title="Általános Szerződési Feltételek">
      <p><strong>Hatályos: 2026. szeptember 1-től, visszavonásig.</strong></p>

      <h2>1. A szolgáltató adatai</h2>
      <p>
        Szolgáltató neve: SIROTECH Informatikai és Biztonságtechnikai Kft.<br />
        Székhely: 8000 Székesfehérvár, Lövölde utca 24. 4/15.<br />
        Cégjegyzékszám: Cg. 07-09-037603<br />
        Adószám: 33056151-2-07<br />
        Képviseli: Skoda Dávid András, ügyvezető<br />
        E-mail: szia@itfehervar.hu<br />
        Telefon: +36 70 273 5532
      </p>
      <p>A jelen Általános Szerződési Feltételek (a továbbiakban: ÁSZF) a SIROTECH Kft. által &quot;IT Fehérvár&quot; néven, az itfehervar.hu weboldalon meghirdetett helyszíni és távoli informatikai hibaelhárító szolgáltatásra vonatkoznak.</p>

      <h2>2. Fogalmak</h2>
      <p><strong>Megrendelő</strong>: az a természetes vagy jogi személy, aki a Szolgáltatótól a jelen ÁSZF hatálya alá tartozó szolgáltatást megrendeli.</p>
      <p><strong>Fogyasztó</strong>: a szakmája, önálló foglalkozása vagy üzleti tevékenysége körén kívül eljáró természetes személy Megrendelő.</p>
      <p><strong>Szolgáltatás</strong>: helyszíni kiszállással vagy távoli hozzáféréssel (távsegítséggel) végzett informatikai hibaelhárítás, karbantartás, beüzemelés és ezekhez kapcsolódó tevékenység, a weboldalon feltüntetett körben.</p>

      <h2>3. A szolgáltatás tárgya és jellege</h2>
      <p>3.1. A Szolgáltatás jellemzően az alábbiakra terjed ki: internet- és wifihibák elhárítása, számítógép, nyomtató és egyéb eszközök hibaelhárítása, új eszközök beüzemelése és adatátköltöztetés, alapszintű hálózati beállítások, vírusgyanú kivizsgálása, valamint az ezekhez kapcsolódó tanácsadás.</p>
      <p>3.2. A Szolgáltatás egy része — a hiba jellegétől függően — távsegítség (távoli asztali hozzáférés, pl. AnyDesk) útján is elvégezhető. A távsegítség igénybevételéhez a Megrendelő hozzájárulása és aktív közreműködése szükséges; a Megrendelő a kapcsolatot bármikor megszakíthatja.</p>
      <p>3.3. A Szolgáltató nem vállal olyan munkát, amely hatósági engedélyhez kötött tevékenységet igényel, vagy amely nyilvánvalóan meghaladja a bejelentett hiba javításának kereteit — ez utóbbi esetben a Szolgáltató tájékoztatja a Megrendelőt a további lehetőségekről.</p>

      <h2>4. A szerződés létrejötte</h2>
      <p>4.1. A szerződés a Megrendelő telefonos, e-mailes vagy a weboldalon található visszahívás-kérő űrlapon leadott megkeresése, és a Szolgáltató által visszaigazolt időpont egyeztetése alapján jön létre.</p>
      <p>4.2. A Szolgáltató a helyszíni munka megkezdése előtt tájékoztatja a Megrendelőt a várható munkadíj nagyságrendjéről. Amennyiben a helyszínen kiderül, hogy a hiba elhárítása a megbeszéltnél nagyobb terjedelmű munkát igényel, a Szolgáltató ezt a munka megkezdése előtt jelzi, és csak a Megrendelő jóváhagyása után folytatja a munkát.</p>

      <h2>5. Árazás és fizetési feltételek</h2>
      <p>5.1. A Szolgáltató a weboldalon nem tesz közzé rögzített árlistát, mivel az egyes hibák elhárításának időigénye és költsége esetenként eltérő. A díjazásról a Szolgáltató telefonon, a bejelentett hiba alapján ad tájékoztatást, amelyet a helyszínen, a munka megkezdése előtt megerősít.</p>
      <p>5.2. A Szolgáltató a teljesített munkáról minden esetben számlát állít ki, magánszemély és gazdálkodó szervezet Megrendelő részére egyaránt.</p>
      <p>5.3. A fizetés a helyszínen, a munka befejezését követően, készpénzben vagy — ha ezt a Szolgáltató biztosítja — banki átutalással vagy elektronikus úton történik.</p>

      <h2>6. Teljesítés helye és ideje</h2>
      <p>6.1. A helyszíni szolgáltatás Székesfehérváron és Fejér vármegye területén, a Megrendelővel egyeztetett időpontban kerül teljesítésre, a Szolgáltató weboldalon közzétett elérhetőségi idősávjában (hétköznap 8–20, szombat 9–14).</p>
      <p>6.2. A Szolgáltató törekszik arra, hogy a bejelentett hibákat a lehető legrövidebb időn belül, jellemzően még aznap elhárítsa; ez azonban nem jelent kötbérrel biztosított határidőt, tekintettel a hibaelhárítás egyedi jellegére.</p>

      <h2>7. Elállási / felmondási jog fogyasztók esetében</h2>
      <p>7.1. Amennyiben a szerződés a fogyasztó Megrendelő otthonában vagy más, a Szolgáltató üzlethelyiségén kívüli helyszínen jön létre, arra a fogyasztó és a vállalkozás közötti szerződések részletes szabályairól szóló 45/2014. (II. 26.) Korm. rendelet rendelkezései az irányadók, ideértve a fogyasztót főszabály szerint megillető 14 napos indokolás nélküli elállási/felmondási jogot.</p>
      <p>7.2. A fenti jog alól kivételt képez az az eset, amikor a fogyasztó kifejezetten kéri a Szolgáltató helyszíni felkeresését sürgős javítási vagy karbantartási munka elvégzése céljából — ilyenkor a 45/2014. Korm. rendelet 29. § (1) bekezdés c) pontja alapján a fogyasztót nem illeti meg az elállás/felmondás joga a ténylegesen elvégzett, kifejezetten kért munka tekintetében. Erre a Szolgáltató a megrendelés visszaigazolásakor felhívja a fogyasztó figyelmét.</p>
      <p>7.3. Ha a Szolgáltatás nem minősül a 7.2. pont szerinti sürgős javításnak, a fogyasztót megillető elállási jog gyakorlásának módjáról a Szolgáltató a szerződéskötéskor külön tájékoztatást ad.</p>

      <h2>8. Szavatosság</h2>
      <p>8.1. A Szolgáltató az elvégzett munkára a Polgári Törvénykönyvről szóló 2013. évi V. törvény szerinti kellékszavatossági szabályok szerint felel.</p>
      <p>8.2. Amennyiben a javítás során a Szolgáltató alkatrészt vagy eszközt épített be, arra a gyártó/forgalmazó által vállalt jótállási és szavatossági feltételek is irányadók, amelyről a Szolgáltató a számlával együtt tájékoztatást ad.</p>
      <p>8.3. A Szolgáltató nem felel az olyan hibáért vagy adatvesztésért, amely a Megrendelő által korábban telepített, nem megfelelően karbantartott szoftverre vagy hardverre, illetve harmadik fél beavatkozására vezethető vissza.</p>

      <h2>9. Felelősség korlátozása</h2>
      <p>9.1. A Szolgáltató a tőle elvárható szakmai gondossággal jár el. Adatmentés hiányában a Szolgáltató nem vállal felelősséget a javítás során esetlegesen bekövetkező adatvesztésért; ezért a Szolgáltató javasolja, hogy a Megrendelő a munka megkezdése előtt gondoskodjon fontos adatai mentéséről.</p>
      <p>9.2. A Szolgáltató felelőssége nem terjed ki a Megrendelő által biztosított internetkapcsolat, elektromos hálózat vagy harmadik fél szolgáltatásának (pl. internetszolgáltató) hibájából eredő károkra.</p>

      <h2>10. Adatkezelés</h2>
      <p>A Szolgáltatás nyújtásával összefüggő adatkezelésről a Szolgáltató külön Adatkezelési tájékoztatóban ad felvilágosítást, amely a <a href="/adatkezeles">/adatkezeles</a> oldalon érhető el.</p>

      <h2>11. Panaszkezelés</h2>
      <p>11.1. A Megrendelő panaszát a <a href="mailto:szia@itfehervar.hu">szia@itfehervar.hu</a> e-mail címen vagy a <a href="tel:+36702735532">+36 70 273 5532</a> telefonszámon jelezheti.</p>
      <p>11.2. A Szolgáltató a panaszt kivizsgálja, és a vonatkozó jogszabályok (fogyasztóvédelmi előírások) szerint jár el. Fogyasztói jogvita esetén a fogyasztó a lakóhelye szerint illetékes békéltető testülethez fordulhat.</p>

      <h2>12. Vegyes rendelkezések</h2>
      <p>12.1. A jelen ÁSZF-ben nem szabályozott kérdésekben a Polgári Törvénykönyv, a fogyasztóvédelemről szóló törvény, valamint a vonatkozó egyéb jogszabályok rendelkezései az irányadók.</p>
      <p>12.2. A Szolgáltató fenntartja a jogot a jelen ÁSZF módosítására; a módosítás a weboldalon történő közzététellel lép hatályba, és a közzétételt megelőzően létrejött szerződésekre nem alkalmazandó.</p>
    </LegalPage>
  );
}
