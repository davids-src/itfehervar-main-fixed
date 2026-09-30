type AdminData = {
  name: string;
  phone: string;
  problem?: string;
  segment?: string;
  location?: string;
  email?: string;
  message?: string;
  first_touch?: string;
  last_touch?: string;
  ip?: string;
  date: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function renderAdminNotification(data: AdminData) {
  const rows: Array<[string, string]> = [
    ['Név', data.name],
    ['Telefonszám', data.phone],
    ['Mi a gond?', data.problem || '—'],
    ['Otthoni vagy céges?', data.segment || '—'],
    ['Település', data.location || '—'],
    ['E-mail', data.email || '—'],
    ['Mi történt?', data.message || '—'],
    ['Időpont', data.date],
    ['Kliens IP', data.ip || 'Ismeretlen'],
    ['First touch', data.first_touch || '—'],
    ['Last touch', data.last_touch || '—'],
  ];

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
                    <div style="font-size:13px; opacity:0.85; margin-top:4px;">Új hibabejelentés</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0;">
                    <table width="100%" cellpadding="12" cellspacing="0" style="border-collapse:collapse;">
                      ${rows
                        .map(
                          ([label, value], i) => `
                        <tr style="background:${i % 2 === 0 ? '#FFFFFF' : '#F5F7F8'};">
                          <th align="left" style="width:160px; border-bottom:1px solid #D8DEE3; color:#65717C; font-size:13px; font-weight:600;">${label}</th>
                          <td style="border-bottom:1px solid #D8DEE3; font-size:15px; word-break:break-word;">${escapeHtml(value)}</td>
                        </tr>`,
                        )
                        .join('')}
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px;">
                    <a href="tel:${data.phone.replace(/[\s-]/g, '')}" style="display:inline-block; padding:10px 18px; background:#E00018; color:#FFFFFF; text-decoration:none; border-radius:4px; font-weight:700;">Hívás</a>
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
