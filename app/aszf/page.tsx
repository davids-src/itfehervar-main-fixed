import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Általános Szerződési Feltételek — IT Fehérvár',
  description:
    'Az IT Fehérvár (SIROTECH Kft.) helyszíni és távoli informatikai szolgáltatásának általános szerződési feltételei.',
  alternates: { canonical: `${SITE.url}/aszf` },
};

export default function AszfPage() {
  return (
    <LegalPage title="Általános Szerződési Feltételek">
      {/* Deploy blocker: verify company data / official full legal name against a fresh company extract before publish. */}
      <p>
        <strong>Hatályos: 2026. szeptember 30-tól, visszavonásig.</strong>
      </p>

      <h2>1. A szolgáltató adatai</h2>
      <p>
        Szolgáltató neve: SIROTECH Kft.
        <br />
        Székhely: 8000 Székesfehérvár, Lövölde utca 24. 4/15.
        <br />
        Cégjegyzékszám: 07-09-037603
        <br />
        Adószám: 33056151-2-07
        <br />
        Képviselő: Skoda Dávid András
        <br />
        E-mail: szia@itfehervar.hu
        <br />
        Telefon: +36 70 273 5532
      </p>
      <p>
        A jelen Általános Szerződési Feltételek (a továbbiakban: ÁSZF) a SIROTECH Kft. által
        &quot;IT Fehérvár&quot; néven, az itfehervar.hu weboldalon meghirdetett helyszíni és távoli
        informatikai szolgáltatásra vonatkoznak. A publikáláskor aktuális hivatalos cégnevet
        friss cégkivonattal kell ellenőrizni.
      </p>

      <h2>2. Fogalmak</h2>
      <p>
        <strong>Megrendelő</strong>: az a természetes vagy jogi személy, aki a Szolgáltatótól a
        jelen ÁSZF hatálya alá tartozó szolgáltatást megrendeli.
      </p>
      <p>
        <strong>Fogyasztó</strong>: a szakmája, önálló foglalkozása vagy üzleti tevékenysége
        körén kívül eljáró természetes személy Megrendelő.
      </p>
      <p>
        <strong>Szolgáltatás</strong>: helyszíni kiszállással vagy távoli hozzáféréssel
        (távsegítséggel) végzett informatikai hibaelhárítás, karbantartás, beüzemelés és ezekhez
        kapcsolódó tevékenység, a weboldalon feltüntetett körben.
      </p>

      <h2>3. A szolgáltatás tárgya és jellege</h2>
      <p>
        3.1. A Szolgáltatás jellemzően az alábbiakra terjed ki: számítógép, Wi-Fi, internet,
        nyomtató, hálózat, Microsoft 365, NAS/mentés, új eszköz beállítása, valamint kisebb otthoni
        és céges informatikai feladatok.
      </p>
      <p>
        3.2. A Szolgáltatás egy része — a hiba jellegétől függően — távsegítség útján is
        elvégezhető. A távsegítség igénybevételéhez a Megrendelő hozzájárulása és aktív
        közreműködése szükséges; a Megrendelő a kapcsolatot bármikor megszakíthatja.
      </p>
      <p>
        3.3. A Szolgáltató nem vállal olyan munkát, amely hatósági engedélyhez kötött tevékenységet
        igényel, vagy amely nyilvánvalóan meghaladja a bejelentett hiba javításának kereteit — ez
        utóbbi esetben a Szolgáltató tájékoztatja a Megrendelőt a további lehetőségekről.
      </p>

      <h2>4. A szerződés létrejötte</h2>
      <p>
        4.1. A weboldalon található űrlap elküldése kapcsolatfelvételi / ajánlatkérési megkeresés,
        önmagában nem minősül megrendelésnek. A szerződés a Megrendelő és a Szolgáltató közötti
        egyeztetést követően, a feladat és a díjazás elfogadásával jön létre.
      </p>
      <p>
        4.2. A Szolgáltató a munka megkezdése előtt tájékoztatja a Megrendelőt a várható díjazás
        módjáról. Amennyiben a helyszínen kiderül, hogy a feladat nagyobb terjedelmű munkát
        igényel, a Szolgáltató ezt a munka megkezdése előtt jelzi, és csak a Megrendelő
        jóváhagyása után folytatja a munkát.
      </p>

      <h2>5. Árazás és fizetési feltételek</h2>
      <p>
        5.1. A Szolgáltató a weboldalon nem tesz közzé mesterséges &apos;ettől&apos; árakat olyan
        feladatra, amelyet előbb meg kell érteni. A díjazás módját a munka előtt egyeztetik.
      </p>
      <p>
        5.2. A Szolgáltató a teljesített munkáról minden esetben számlát állít ki, magánszemély és
        gazdálkodó szervezet Megrendelő részére egyaránt.
      </p>
      <p>
        5.3. A fizetés a helyszínen, a munka befejezését követően, készpénzben vagy — ha ezt a
        Szolgáltató biztosítja — banki átutalással vagy elektronikus úton történik.
      </p>

      <h2>6. Teljesítés helye és ideje</h2>
      <p>
        6.1. A helyszíni szolgáltatás elsősorban Székesfehérváron és a környező Fejér vármegyei
        helyszíneken, a Megrendelővel egyeztetett időpontban kerül teljesítésre.
      </p>
      <p>
        6.2. A Szolgáltató a feladat jellegétől függően helyszíni vagy távoli vizsgálatot
        egyeztet. A teljesítés határidejét a felek a konkrét feladat alapján állapítják meg; a
        weboldalon nincs kötbérrel biztosított reakcióidő- vagy teljesítési garancia.
      </p>

      <h2>7. Elállási / felmondási jog fogyasztók esetében</h2>
      <p>
        7.1. Amennyiben a szerződés a fogyasztó Megrendelő otthonában vagy más, a Szolgáltató
        üzlethelyiségén kívüli helyszínen jön létre, arra a fogyasztó és a vállalkozás közötti
        szerződések részletes szabályairól szóló 45/2014. (II. 26.) Korm. rendelet rendelkezései az
        irányadók, ideértve a fogyasztót főszabály szerint megillető 14 napos indokolás nélküli
        elállási/felmondási jogot.
      </p>
      <p>
        7.2. A fenti jog alól kivételt képez az az eset, amikor a fogyasztó kifejezetten kéri a
        Szolgáltató helyszíni felkeresését sürgős javítási vagy karbantartási munka elvégzése
        céljából — ilyenkor a 45/2014. Korm. rendelet 29. § (1) bekezdés c) pontja alapján a
        fogyasztót nem illeti meg az elállás/felmondás joga a ténylegesen elvégzett, kifejezetten
        kért munka tekintetében. Erre a Szolgáltató a megrendelés visszaigazolásakor felhívja a
        fogyasztó figyelmét.
      </p>
      <p>
        7.3. Ha a Szolgáltatás nem minősül a 7.2. pont szerinti sürgős javításnak, a fogyasztót
        megillető elállási jog gyakorlásának módjáról a Szolgáltató a szerződéskötéskor külön
        tájékoztatást ad.
      </p>

      <h2>8. Szavatosság</h2>
      <p>
        8.1. A Szolgáltató az elvégzett munkára a Polgári Törvénykönyvről szóló 2013. évi V.
        törvény szerinti kellékszavatossági szabályok szerint felel.
      </p>
      <p>
        8.2. Amennyiben a javítás során a Szolgáltató alkatrészt vagy eszközt épített be, arra a
        gyártó/forgalmazó által vállalt jótállási és szavatossági feltételek is irányadók, amelyről
        a Szolgáltató a számlával együtt tájékoztatást ad.
      </p>
      <p>
        8.3. A Szolgáltató nem felel az olyan hibáért vagy adatvesztésért, amely a Megrendelő által
        korábban telepített, nem megfelelően karbantartott szoftverre vagy hardverre, illetve
        harmadik fél beavatkozására vezethető vissza.
      </p>

      <h2>9. Felelősség korlátozása</h2>
      <p>
        9.1. A Szolgáltató a tőle elvárható szakmai gondossággal jár el. Adatmentés hiányában a
        Szolgáltató nem vállal felelősséget a javítás során esetlegesen bekövetkező
        adatvesztésért; ezért a Szolgáltató javasolja, hogy a Megrendelő a munka megkezdése előtt
        gondoskodjon fontos adatai mentéséről.
      </p>
      <p>
        9.2. A Szolgáltató felelőssége nem terjed ki a Megrendelő által biztosított
        internetkapcsolat, elektromos hálózat vagy harmadik fél szolgáltatásának (pl.
        internetszolgáltató) hibájából eredő károkra.
      </p>

      <h2>10. Adatkezelés</h2>
      <p>
        A Szolgáltatás nyújtásával összefüggő adatkezelésről a Szolgáltató külön Adatvédelmi
        tájékoztatóban ad felvilágosítást, amely a <a href="/adatvedelem">/adatvedelem</a> oldalon
        érhető el.
      </p>

      <h2>11. Panaszkezelés</h2>
      <p>
        11.1. A Megrendelő panaszát a <a href="mailto:szia@itfehervar.hu">szia@itfehervar.hu</a>{' '}
        e-mail címen vagy a <a href="tel:+36702735532">+36 70 273 5532</a> telefonszámon jelezheti.
      </p>
      <p>
        11.2. A Szolgáltató a panaszt kivizsgálja, és a vonatkozó jogszabályok (fogyasztóvédelmi
        előírások) szerint jár el. Fogyasztói jogvita esetén a fogyasztó a lakóhelye szerint
        illetékes békéltető testülethez fordulhat.
      </p>

      <h2>12. Vegyes rendelkezések</h2>
      <p>
        12.1. A jelen ÁSZF-ben nem szabályozott kérdésekben a Polgári Törvénykönyv, a
        fogyasztóvédelemről szóló törvény, valamint a vonatkozó egyéb jogszabályok rendelkezései az
        irányadók.
      </p>
      <p>
        12.2. A Szolgáltató fenntartja a jogot a jelen ÁSZF módosítására; a módosítás a weboldalon
        történő közzététellel lép hatályba, és a közzétételt megelőzően létrejött szerződésekre nem
        alkalmazandó.
      </p>
    </LegalPage>
  );
}
