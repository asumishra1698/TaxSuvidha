import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const requiredEnvVars = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
  'CONTACT_RECEIVER_EMAIL',
] as const;

function getMissingEnvVars() {
  return requiredEnvVars.filter((key) => !process.env[key]);
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: Request) {
  try {
    const missingEnvVars = getMissingEnvVars();
    if (missingEnvVars.length > 0) {
      return NextResponse.json(
        {
          error: `Missing environment variables: ${missingEnvVars.join(', ')}`,
        },
        { status: 500 }
      );
    }

    const body = (await request.json()) as Partial<ContactPayload>;

    const name = body.name?.trim();
    const email = body.email?.trim();
    const subject = body.subject?.trim();
    const message = body.message?.trim();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    const escapedName = escapeHtml(name);
    const escapedEmail = escapeHtml(email);
    const escapedSubject = escapeHtml(subject);
    const escapedMessage = escapeHtml(message).replace(/\n/g, '<br />');

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.CONTACT_FROM_EMAIL ?? process.env.SMTP_USER,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      replyTo: email,
      subject: `[Website Enquiry] ${subject} - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="margin:0;background:#f4f7fb;padding:24px 12px;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e2e8f0;">
            <tr>
              <td style="background:linear-gradient(135deg,#0b3d91,#0ea5e9);padding:24px 28px;">
                <p style="margin:0;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#bfdbfe;">Tax Suvidha Kendra</p>
                <h2 style="margin:10px 0 0;font-size:24px;line-height:1.3;color:#ffffff;">New Website Enquiry</h2>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 28px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;width:140px;font-size:13px;color:#64748b;"><strong>Name</strong></td>
                    <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:15px;color:#0f172a;">${escapedName}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;width:140px;font-size:13px;color:#64748b;"><strong>Email</strong></td>
                    <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:15px;color:#0f172a;">${escapedEmail}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;width:140px;font-size:13px;color:#64748b;"><strong>Subject</strong></td>
                    <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:15px;color:#0f172a;">${escapedSubject}</td>
                  </tr>
                </table>

                <div style="margin-top:20px;">
                  <p style="margin:0 0 8px;font-size:13px;color:#64748b;"><strong>Message</strong></p>
                  <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:14px 16px;font-size:15px;line-height:1.6;color:#0f172a;">
                    ${escapedMessage}
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 28px;background:#f8fafc;border-top:1px solid #e2e8f0;font-size:12px;color:#64748b;">
                Sent from Tax Suvidha Kendra website contact form.
              </td>
            </tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Thank you. Your enquiry has been sent successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Failed to send contact enquiry email', error);

    return NextResponse.json(
      { error: 'Unable to send your enquiry right now. Please try again later.' },
      { status: 500 }
    );
  }
}
