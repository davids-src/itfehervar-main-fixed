import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { renderAdminNotification } from '@/lib/email-templates/admin-notification';
import { renderCustomerConfirmation } from '@/lib/email-templates/customer-confirmation';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // Honeypot check
    const honeypot = formData.get('website');
    if (honeypot) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const name = (formData.get('name') as string)?.trim();
    const phone = (formData.get('phone') as string)?.trim();
    const company = (formData.get('company') as string)?.trim();
    const email = (formData.get('email') as string)?.trim();
    const message = (formData.get('message') as string)?.trim();

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Hiányzó kötelező mező' },
        { status: 400 },
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpSecure = process.env.SMTP_SECURE === 'true';
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const adminEmail = process.env.SIROTECH_ADMIN_EMAIL;
    const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://itfehervar.hu';

    if (!smtpHost || !smtpUser || !smtpPass || !adminEmail) {
      console.error('SMTP or Admin Email env vars not configured', { smtpHost, smtpUser, smtpPass, adminEmail });
      return NextResponse.json(
        { error: 'Szolgáltatás nem elérhető' },
        { status: 503 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort || '465', 10),
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Formatting date
    const date = new Intl.DateTimeFormat('hu-HU', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Europe/Budapest',
    }).format(new Date());

    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || undefined;

    // Send Admin Email
    const adminHtml = renderAdminNotification({ name, phone, company, message, ip, date });
    
    await transporter.sendMail({
      from: `"IT Fehérvár" <szia@itfehervar.hu>`,
      to: adminEmail,
      subject: `Új visszahívás-kérés — ${name} (${phone})`,
      html: adminHtml,
    });

    // Send Customer Email if email provided
    if (email) {
      try {
        const customerHtml = renderCustomerConfirmation({ name, phone, message, siteUrl });
        await transporter.sendMail({
          from: `"IT Fehérvár" <szia@itfehervar.hu>`,
          to: email,
          subject: 'Megkaptuk a megkeresését — IT Fehérvár',
          html: customerHtml,
        });
      } catch (err) {
        // Log but do not block successful response if admin email went through
        console.error('Failed to send customer confirmation email:', err);
      }
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('Callback form error:', error);
    return NextResponse.json(
      { error: 'Nem sikerült elküldeni' },
      { status: 500 },
    );
  }
}
