import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'Adatkezelési tájékoztató — IT Fehérvár',
  description: 'Tájékoztató az IT Fehérvár (SIROTECH Kft.) weboldalán és szolgáltatásnyújtása során történő személyesadat-kezelésről.',
};

export default function AdatkezelesPage() {
  return (
    <LegalPage title="Adatkezelési tájékoztató">
      <p><strong>Hatályos: 2026. szeptember 1-től, visszavonásig.</strong></p>

      <h2>1. Az adatkezelő</h2>
      <p>
        Adatkezelő: SIROTECH Informatikai és Biztonságtechnikai Kft.<br />
        Székhely: 8000 Székesfehérvár, Lövölde utca 24. 4/15.<br />
        Cégjegyzékszám: 07-09-037603<br />
        Adószám: 33056151-2-07<br />
        Képviselő: Skoda Dávid András<br />
        E-mail: szia@itfehervar.hu<br />
        Telefon: +36 70 273 5532
      </p>
      <p>A jelen tájékoztató a természetes személyeknek a személyes adatok kezelése tekintetében történő védelméről és az ilyen adatok szabad áramlásáról szóló (EU) 2016/679 rendelet (GDPR), valamint az információs önrendelkezési jogról és az információszabadságról szóló 2011. évi CXII. törvény (Infotv.) alapján készült.</p>

      <h2>2. Milyen adatokat kezelünk, és miért</h2>
      
      <h3>2.1. Visszahívás-kérő űrlap</h3>
      <p>Ha a weboldalon található űrlapon visszahívást kér, az alábbi adatokat kezeljük:</p>
      <ul>
        <li><strong>Név</strong> — a kapcsolattartáshoz szükséges.</li>
        <li><strong>Telefonszám</strong> — a visszahíváshoz szükséges.</li>
        <li><strong>Cég neve</strong> (ha megadja) — a céges megkeresés azonosításához.</li>
        <li><strong>Az üzenetben megadott szöveg</strong> (ha megadja) — a hívás előkészítéséhez, hogy tudjuk, milyen hibáról van szó.</li>
      </ul>
      <p>Az adatkezelés jogalapja: a GDPR 6. cikk (1) bekezdés b) pontja szerint a szerződés megkötését megelőzően, az Ön kérésére történő lépések megtétele (azaz a visszahívás és az esetleges szolgáltatás-megrendelés előkészítése).</p>
      <p>Az adatok megőrzési ideje: ha a megkeresésből nem lesz szolgáltatás-megrendelés, az adatokat a megkereséstől számított 90 napon belül töröljük. Ha szolgáltatás-megrendelés jön létre, az adatokat a számviteli és polgári jogi elévülési szabályok szerinti ideig (jellemzően 5–8 év) kezeljük, a kiállított számlával összefüggésben.</p>

      <h3>2.2. Telefonos és e-mailes megkeresés</h3>
      <p>Ha telefonon vagy e-mailben keres meg minket, az ennek során megadott adatokat (név, telefonszám/e-mail cím, a megkeresés tartalma) a kapcsolattartás és a szolgáltatás teljesítése céljából kezeljük, a 2.1. pontban foglaltakkal azonos jogalapon és megőrzési idővel.</p>

      <h3>2.3. Számlázási adatok</h3>
      <p>A teljesített szolgáltatásról kiállított számla adatait (név/cégnév, cím, adószám — ha van) a számviteli törvényben (2000. évi C. törvény) előírt megőrzési idő, azaz a számla kiállításától számított 8 évig kezeljük. Az adatkezelés jogalapja a GDPR 6. cikk (1) bekezdés c) pontja szerinti jogi kötelezettség teljesítése.</p>

      <h3>2.4. Weboldal-látogatottsági adatok (Google Analytics)</h3>
      <p>A weboldal a látogatottság és a felhasználói szokások megismerése céljából a Google Analytics (GA4) szolgáltatást használja, amely a látogató eszközén sütiket (cookie-kat) helyez el.</p>
      <p>Ez az adatkezelés kizárólag a látogató előzetes, a weboldalon megjelenő sütitájékoztató sávon adott hozzájárulása esetén történik. Az adatkezelés jogalapja a GDPR 6. cikk (1) bekezdés a) pontja szerinti hozzájárulás, amely bármikor, korlátozás nélkül visszavonható a sütibeállítások módosításával.</p>
      <p>A Google Analytics keretében kezelt adatok — a hozzájárulás esetén — a Google Ireland Limited-hez (mint adatfeldolgozóhoz) kerülnek továbbításra. Részletek: Google adatvédelmi irányelvei (policies.google.com/privacy).</p>

      <h2>3. Adatfeldolgozók</h2>
      <p>A megadott adatokhoz az alábbi, a Szolgáltató megbízásából eljáró adatfeldolgozók férhetnek hozzá, kizárólag a szolgáltatás technikai teljesítéséhez szükséges mértékben:</p>
      <ul>
        <li>a weboldal tárhely- és levelezésszolgáltatója (a visszahívás-kérő űrlap e-mailben történő továbbításához),</li>
        <li>könyvelési szolgáltató (a számlázási adatok kezeléséhez),</li>
        <li>a Google Analytics üzemeltetője (kizárólag hozzájárulás esetén, a 2.4. pont szerint).</li>
      </ul>

      <h2>4. Az Ön jogai</h2>
      <p>Ön az adatkezeléssel kapcsolatban jogosult:</p>
      <ul>
        <li>tájékoztatást kérni a kezelt adatairól,</li>
        <li>kérni az adatai helyesbítését, ha azok pontatlanok,</li>
        <li>kérni az adatai törlését, ha az adatkezelésnek nincs további jogalapja,</li>
        <li>kérni az adatkezelés korlátozását,</li>
        <li>tiltakozni az adatkezelés ellen,</li>
        <li>adathordozhatóságot kérni, ahol ez alkalmazandó,</li>
        <li>hozzájáruláson alapuló adatkezelés esetén a hozzájárulást bármikor visszavonni, ez azonban nem érinti a visszavonás előtt, a hozzájárulás alapján végzett adatkezelés jogszerűségét.</li>
      </ul>
      <p>A fenti jogok gyakorlásához forduljon hozzánk a <a href="mailto:szia@itfehervar.hu">szia@itfehervar.hu</a> e-mail címen.</p>

      <h2>5. Panasztételi jog</h2>
      <p>Ha úgy véli, hogy adatai kezelése nem felel meg a jogszabályi előírásoknak, panasszal fordulhat a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH):</p>
      <p>
        Cím: 1055 Budapest, Falk Miksa utca 9–11.<br />
        Postacím: 1363 Budapest, Pf. 9.<br />
        E-mail: ugyfelszolgalat@naih.hu<br />
        Weboldal: naih.hu
      </p>
      <p>Emellett jogorvoslatért a lakóhelye vagy tartózkodási helye szerint illetékes törvényszékhez is fordulhat.</p>

      <h2>6. A tájékoztató módosítása</h2>
      <p>Az Adatkezelő fenntartja a jogot a jelen tájékoztató módosítására; a módosított szöveg a weboldalon történő közzététellel lép hatályba.</p>
    </LegalPage>
  );
}
