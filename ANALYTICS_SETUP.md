# GA4 Analytics Setup & Implementation Guide
## IT FEHÉRVÁR (itfehervar.hu)

### Események (Events) és Konverziók

Az alábbi egyedi eseményeket implementáltuk a forráskódban:

1. **`generate_lead`** (Konverzió!)
   - **Mikor sül el:** Csak akkor, ha a szerveroldali form küldés sikeresen megtörtént (API 200 OK).
   - **Paraméterek:** `form_type` (callback), `customer_type` (maganszemely/vallalkozas), `request_type` (javitas/bovites/uj_kialakitas), `landing_page`.

2. **`form_start`**
   - **Mikor sül el:** (A kódban az első interakciókor manuálisan beküldendő GTM vagy kód szintjén. Itt `CallbackForm` onChange-ként implementálható, vagy GTM-ben form visibility triggerként).

3. **`form_error`**
   - **Mikor sül el:** Validációs hiba esetén (kliensoldal), vagy API hiba esetén (szerver válasz 500).
   - **Paraméterek:** `form_type` (callback), `error_type` (validation/api).

4. **`phone_click`**
   - **Mikor sül el:** Bármilyen `tel:` linkre történő kattintás.
   - **Paraméterek:** `cta_location` (global), `page_type` (home/service).

5. **`email_click`**
   - **Mikor sül el:** Bármilyen `mailto:` linkre történő kattintás.
   - **Paraméterek:** `cta_location`, `page_type`.

6. **`cta_click`**
   - **Mikor sül el:** Elsődleges (narancs) és másodlagos (navy) CTA gombok kattintásakor.
   - **Paraméterek:** `cta_label`, `cta_location`, `cta_type` (primary/secondary), `page_type`.

*(Megjegyzés: `form_step_complete` itt nem értelmezett, mivel a form egylépéses / compact.)*

### First-party Attribution Tracking

Az oldal érkezéskor (első betöltés) feldolgozza az URL-ben lévő kampányparamétereket (`utm_source`, `utm_medium`, `utm_campaign`, stb. és `gclid`, `gbraid`, `wbraid`). 
- Ezeket localStorage-ben tárolja el: `attribution_first_touch` (csak egyszer íródik) és `attribution_last_touch` (mindig frissül, ha új kampányparaméterrel érkeznek).
- A form beküldésekor ezek az adatok háttérben hozzáadódnak a payloadhoz, így a beérkező admin e-mail tartalmazni fogja, hogy honnan jött az érdeklődő! (Nincs PII, nincs adatbázis.)

### GA4 Admin feladatok (Handoff)

A következő Custom Dimension-öket (Egyedi Dimenziókat) kell felvenni a GA4 Admin -> Custom definitions menüpontban (Event hatókörrel), hogy az adatok megjelenjenek a riportokban:

1. `customer_type`
2. `request_type`
3. `project_type`
4. `service`
5. `region`
6. `cta_location`
7. `source_site`
8. `form_type`
9. `error_type`
10. `cta_type`
11. `cta_label`
12. `page_type`

Ezen felül be kell jelölni a `generate_lead` eseményt "Key Event"-ként (korábban: Conversion).
