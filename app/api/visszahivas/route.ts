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
    const customer_type = (formData.get('customer_type') as string)?.trim();
    const request_type = (formData.get('request_type') as string)?.trim();
    const message = (formData.get('message') as string)?.trim();
    const first_touch = (formData.get('first_touch') as string)?.trim();
    const last_touch = (formData.get('last_touch') as string)?.trim();
    const location = (formData.get('location') as string)?.trim() || 'ismeretlen hely';

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
    const adminHtml = renderAdminNotification({ name, phone, customer_type, request_type, location, message, first_touch, last_touch, ip, date });
    
    const reqTypeStr = request_type || 'N/A';
    const custTypeStr = customer_type || 'N/A';

    await transporter.sendMail({
      from: `"IT Fehérvár" <${smtpUser}>`,
      to: adminEmail,
      subject: `[IT FEHÉRVÁR] ${reqTypeStr} | ${custTypeStr} | ${location}`,
      html: adminHtml,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('Callback form error:', error);
    return NextResponse.json(
      { error: 'Nem sikerült elküldeni' },
      { status: 500 },
    );
  }
}
