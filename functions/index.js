const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const nodemailer = require("nodemailer");

function escapeHtml(input) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getConfig() {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  return {
    smtpHost,
    smtpPort,
    smtpUser,
    smtpPass,
    receiverEmail,
    fromEmail,
  };
}

exports.contact = onRequest({ region: "us-central1" }, async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed." });
    return;
  }

  try {
    const config = getConfig();

    const missing = [];
    if (!config.smtpHost) missing.push("SMTP_HOST");
    if (!config.smtpPort) missing.push("SMTP_PORT");
    if (!config.smtpUser) missing.push("SMTP_USER");
    if (!config.smtpPass) missing.push("SMTP_PASS");
    if (!config.receiverEmail) {
      missing.push("CONTACT_RECEIVER_EMAIL");
    }

    if (missing.length > 0) {
      res.status(500).json({
        error: `Missing configuration: ${missing.join(", ")}`,
      });
      return;
    }

    const { name, email, subject, message } = req.body || {};

    const trimmedName = typeof name === "string" ? name.trim() : "";
    const trimmedEmail = typeof email === "string" ? email.trim() : "";
    const trimmedSubject = typeof subject === "string" ? subject.trim() : "";
    const trimmedMessage = typeof message === "string" ? message.trim() : "";

    if (!trimmedName || !trimmedEmail || !trimmedSubject || !trimmedMessage) {
      res.status(400).json({ error: "All fields are required." });
      return;
    }

    const transporter = nodemailer.createTransport({
      host: config.smtpHost,
      port: Number(config.smtpPort),
      secure: Number(config.smtpPort) === 465,
      auth: {
        user: config.smtpUser,
        pass: config.smtpPass,
      },
    });

    const escapedName = escapeHtml(trimmedName);
    const escapedEmail = escapeHtml(trimmedEmail);
    const escapedSubject = escapeHtml(trimmedSubject);
    const escapedMessage = escapeHtml(trimmedMessage).replace(/\n/g, "<br />");

    await transporter.sendMail({
      from: config.fromEmail || config.smtpUser,
      to: config.receiverEmail,
      replyTo: trimmedEmail,
      subject: `[Website Enquiry] ${trimmedSubject} - ${trimmedName}`,
      text: `Name: ${trimmedName}\nEmail: ${trimmedEmail}\nSubject: ${trimmedSubject}\n\nMessage:\n${trimmedMessage}`,
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

    res.status(200).json({
      message: "Thank you. Your enquiry has been sent successfully.",
    });
  } catch (error) {
    logger.error("Failed to send contact enquiry email", error);
    res.status(500).json({
      error: "Unable to send your enquiry right now. Please try again later.",
    });
  }
});
