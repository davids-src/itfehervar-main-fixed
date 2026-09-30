export function renderCustomerConfirmation() {
  return `
    <html>
      <body style="font-family: 'Source Sans 3', Arial, sans-serif; line-height: 1.5; color: #18212A; margin: 0; padding: 0;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5F7F8; padding: 24px 0;">
          <tr>
            <td align="center">
              <table width="100%" style="max-width:600px; background:#FFFFFF; border-collapse:collapse;">
                <tr>
                  <td style="background:#102235; padding:20px; color:#FFFFFF;">
                    <strong style="font-size:18px;">IT Fehérvár</strong>
                  </td>
                </tr>
                <tr>
                  <td style="padding:28px 24px;">
                    <p style="margin:0 0 16px 0; font-size:16px; color:#18212A;">
                      Köszönjük, hogy írt az IT Fehérvár oldalán. Az elküldött adatokat megkaptuk. A feladat részleteinek egyeztetéséhez a megadott elérhetőségen jelentkezünk. Sürgős esetben hívjon minket: +36 70 273 5532.
                    </p>
                    <p style="margin:0;">
                      <a href="tel:+36702735532" style="display:inline-block; padding:10px 18px; background:#E00018; color:#FFFFFF; text-decoration:none; border-radius:4px; font-weight:700;">Hívás: +36 70 273 5532</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="background:#F5F7F8; padding:16px 24px; font-size:12px; color:#65717C;">
                    SIROTECH Kft. — IT Fehérvár
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}
