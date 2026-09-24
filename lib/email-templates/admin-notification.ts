export function renderAdminNotification(data: { name: string, phone: string, customer_type?: string, request_type?: string, location?: string, message?: string, first_touch?: string, last_touch?: string, ip?: string, date: string }) {
  return `
    <html>
      <body style="font-family: sans-serif; line-height: 1.5; color: #333;">
        <h2>Új visszahívás-kérés érkezett az itfehervar.hu-ról</h2>
        <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <th align="left" style="background-color: #f4f4f4;">Név</th>
            <td>${data.name}</td>
          </tr>
          <tr>
            <th align="left" style="background-color: #f4f4f4;">Telefonszám</th>
            <td><a href="tel:${data.phone.replace(/[\s-]/g, '')}">${data.phone}</a></td>
          </tr>
          <tr>
            <th align="left" style="background-color: #f4f4f4;">Típus</th>
            <td>${data.customer_type || '—'}</td>
          </tr>
          <tr>
            <th align="left" style="background-color: #f4f4f4;">Igény</th>
            <td>${data.request_type || '—'}</td>
          </tr>
          <tr>
            <th align="left" style="background-color: #f4f4f4;">Helyszín</th>
            <td>${data.location || '—'}</td>
          </tr>
          <tr>
            <th align="left" style="background-color: #f4f4f4;">Üzenet</th>
            <td>${data.message || '—'}</td>
          </tr>
          <tr>
            <th align="left" style="background-color: #f4f4f4;">Időpont</th>
            <td>${data.date}</td>
          </tr>
          <tr>
            <th align="left" style="background-color: #f4f4f4;">Kliens IP</th>
            <td>${data.ip || 'Ismeretlen'}</td>
          </tr>
          <tr>
            <th align="left" style="background-color: #f4f4f4;">First touch</th>
            <td style="word-break: break-all; font-size: 12px;">${data.first_touch || '—'}</td>
          </tr>
          <tr>
            <th align="left" style="background-color: #f4f4f4;">Last touch</th>
            <td style="word-break: break-all; font-size: 12px;">${data.last_touch || '—'}</td>
          </tr>
        </table>
        <br />
        <a href="mailto:?subject=Válasz: ${data.name}" style="display: inline-block; padding: 10px 20px; background-color: #1C3461; color: #ffffff; text-decoration: none; border-radius: 5px;">Válasz e-mailben</a>
      </body>
    </html>
  `;
}
