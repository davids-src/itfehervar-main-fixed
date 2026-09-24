# Changelog - IT Fehérvár stratégiai bővítés

## 1. Design & UI
- **Hero szekció:** Szövegezés frissítve (H1, bevezető szöveg) az egyértelműség és a szélesebb célközönség érdekében.
- **Balance Section ("Otthoni segítség vagy céges IT?"):** Új, 50-50 arányú elágazó kártyás szekció hozzáadva a főoldalhoz, hogy a B2B és B2C közönség vizuálisan egyenrangú legyen. Ikonok: ház és irodaház.
- **Project Strip ("Új iroda vagy nagyobb hálózati munka?"):** Külön kiemelő sáv a főoldalon, amely egyedi projektmunkákra (iroda IT kialakítása) tereli a megfelelő látogatókat.
- **Design nyelv:** A "navy-orange" és "világos/papír/köd" színvilág maradt, sötét mód / enterprise design nem került bevezetésre.

## 2. Új Aloldalak (SEO és Tartalom)
A megfelelő célcsoportok célzása érdekében 4 új szolgáltatás oldal készült (Server-rendered / SSG):
- `/cegeknek` (Helyi IT segítség kisvállalkozásoknak)
- `/otthoni-it` (Otthoni informatikai segítség)
- `/halozat-wifi` (Wi-Fi és kisebb hálózat kialakítás)
- `/uj-iroda-it` (Új iroda IT alapjai)

**Minden új oldal:**
- Kapott egyedi Title-t, Description-t, Canonical linket és OpenGraph metaadatokat.
- Tartalmaz legalább 2-4 belső linket más szolgáltatások felé.
- Kiegészült `BreadcrumbList` és `Service` JSON-LD strukturált adattal (Schema.org).
- Integrálódott a főoldal meglévő `Contact` (visszahívás) űrlapjával.
- Bekerült a dinamikus `sitemap.ts` (és `routes.ts`) fájlba explicite definiált `lastModified` értékkel.

## 3. Callback Form (Űrlap) és API
- **Rövid maradt:** Az űrlap kompakt egyoldalas maradt, de okosabb lett.
- E-mail mező eltávolítva (hogy még rövidebb legyen). Csak Név, Telefonszám, és a hiba rövid leírása maradt.
- Két új rejtett / kompakt legördülő mező hozzáadva: `customer_type` (Magánszemély / Vállalkozás) és `request_type` (Javítás / Bővítés / Új kialakítás).
- Az API (`/api/visszahivas/route.ts`) frissítve, hogy feldolgozza az új mezőket, és szépen táblázatosan beküldje a Nodemailer-rel az admin értesítőbe.

## 4. Analytics & Tracking (GA4)
- Teljes first-party Attribution Storage (localStorage alapú) beépítve a `first_touch` és `last_touch` elkapására (UTM és GCLID adatokkal), amely beküldésre kerül a lead e-mailbe! (Így pontosan látszik kampányszinten a beérkezés.)
- Szerveroldalról sikeresen visszatérő űrlap után `generate_lead` esemény triggerelve, a megfelelő dataLayer attribútumokkal (forma, ügyféltípus, igény típusa, landing page).
- Globális Click-tracker implementálva az `analytics.tsx`-ben a `phone_click`, `email_click`, és `cta_click` automatikus mérésére.
- Részletes dokumentáció létrehozva az `ANALYTICS_SETUP.md`-ben.
