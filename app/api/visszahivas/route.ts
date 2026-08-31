import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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
    const message = (formData.get('message') as string)?.trim();

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Hiányzó kötelező mező' },
        { status: 400 },
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const mailTo = process.env.MAIL_TO || 'szia@itfehervar.hu';

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.error('SMTP env vars not configured');
      return NextResponse.json(
        { error: 'Szolgáltatás nem elérhető' },
        { status: 503 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort || '587', 10),
      secure: parseInt(smtpPort || '587', 10) === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const emailBody = [
      'Új visszahívás-kérés érkezett:',
      '',
      `Név: ${name}`,
      `Telefonszám: ${phone}`,
      company ? `Cég: ${company}` : '',
      message ? `Üzenet: ${message}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    await transporter.sendMail({
      from: smtpUser,
      to: mailTo,
      subject: 'Visszahívás-kérés — itfehervar.hu',
      text: emailBody,
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
