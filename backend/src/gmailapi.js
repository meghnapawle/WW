import dotenv from 'dotenv';
import { google } from 'googleapis';

dotenv.config();

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
});

const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

function makeRawEmail(to, from, subject, message) {
  const str = [
    `To: ${to}`,
    `From: ${from}`,
    `Subject: ${subject}`,
    `Content-Type: text/html; charset=utf-8`,
    '',
    message,
  ].join('\n');

  const encodedMessage = Buffer.from(str)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  return encodedMessage;
}

export const sendEmail = async () => {
  try {
    const raw = makeRawEmail(
      'raunakrockiit@gmail.com',
      process.env.EMAIL_SENDER,
      '✅ Gmail API Test',
      '<b>This email was sent via Gmail REST API, not SMTP!</b>'
    );

    const res = await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: raw,
      },
    });

    console.log('✅ Email sent via Gmail API:', res.data.id);
  } catch (err) {
    console.error('❌ Failed to send email via Gmail API:', err.message);
  }
};
