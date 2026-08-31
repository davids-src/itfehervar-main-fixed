export function renderCustomerConfirmation(data: { name: string, phone: string, message?: string, siteUrl: string }) {
  return `
    <html>
      <body style="font-family: sans-serif; line-height: 1.5; color: #1C3461; margin: 0; padding: 20px; background-color: #f9f9fa;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden;">
          <tr>
            <td style="padding: 20px; background-color: #1C3461; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px;">IT Fehérvár</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 30px;">
              <h2 style="color: #1C3461; margin-top: 0;">Köszönjük, hogy megkeresett minket, ${data.name}!</h2>
              <p style="color: #444; font-size: 16px;">
                Megkaptuk az üzenetét, és általában egy órán belül visszahívjuk a <strong>${data.phone}</strong> számon.
              </p>
              
              <div style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <h3 style="margin-top: 0; font-size: 14px; color: #666; text-transform: uppercase;">A megadott adatai:</h3>
                <p style="margin: 0; color: #333;"><strong>Név:</strong> ${data.name}</p>
                <p style="margin: 5px 0 0 0; color: #333;"><strong>Telefonszám:</strong> ${data.phone}</p>
                ${data.message ? `<p style="margin: 5px 0 0 0; color: #333;"><strong>Üzenet:</strong> ${data.message}</p>` : ''}
              </div>

              <p style="color: #444; font-size: 16px;">
                Ha közben sürgőssé vált a probléma, hívjon minket azonnal:<br/>
                <a href="tel:+36702735532" style="color: #D9482B; font-weight: bold; font-size: 18px; text-decoration: none;">+36 70 273 5532</a>
              </p>
            </td>
          </tr>
          <tr>
            <td style="background-color: #f4f4f4; padding: 20px; text-align: center; font-size: 12px; color: #888;">
              <p style="margin: 0;">SIROTECH Kft. — IT Fehérvár</p>
              <p style="margin: 5px 0 0 0;">Ez egy automatikus visszaigazoló üzenet a visszahívás-kérésről.</p>
              <p style="margin: 5px 0 0 0;"><a href="${data.siteUrl}/adatkezeles" style="color: #1C3461; text-decoration: underline;">Adatkezelési tájékoztató</a></p>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}
