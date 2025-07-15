// // import nodemailer from "nodemailer";
// // import {google} from "googleapis";

// // import dotenv from "dotenv";
// // import dns from "dns";

// // // ✅ Force Node.js to prioritize IPv4 (matches what PowerShell succeeded with)
// // dns.setDefaultResultOrder('ipv4first');
// // dotenv.config();


// // const oauth2Client = new google.auth.OAuth2(
// // //   process.env.CLIENT_ID,
// // "921782522136-f5pm84j9oc6taq4ucfbdtg7jsm0bl82r.apps.googleusercontent.com",
// // //   process.env.CLIENT_SECRET,
// // "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",
// // //   process.env.REDIRECT_URI
// // "https://developers.google.com/oauthplayground"
// // );
// // oauth2Client.setCredentials({refresh_token : "1//04qqotGAkGbNICgYIARAAGAQSNwF-L9Ir5roHysCAPd2j4j1f1pgY1L82efFUP-hKEvj-gM6_6SxD7_F5C0UEg4hARgzpcJgsaz0" });







// // const sendotp = async () => {

// // const  accessTokenObject =await oauth2Client.getAccessToken();

// // const transporter = nodemailer.createTransport({
// //  host : "smtp.gmail.com",
// //   port: 587,
// //   secure: false, 
// //   auth: {
// //     type : "OAuth2",
// //     user: "u24ai109@aid.svnit.ac.in",
// //     clientId :  "921782522136-f5pm84j9oc6taq4ucfbdtg7jsm0bl82r.apps.googleusercontent.com",
// //     clientSecret : "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",
// //     refreshToken : "1//04qqotGAkGbNICgYIARAAGAQSNwF-L9Ir5roHysCAPd2j4j1f1pgY1L82efFUP-hKEvj-gM6_6SxD7_F5C0UEg4hARgzpcJgsaz0",
// //     accessToken : accessTokenObject.token
// //   },
// //   requireTLS: true
// // });



// //   const info = await transporter.sendMail({
// //     from: " Raunak here <u24ai109@aid.svnit.ac.in>",
// //     to: "raunakrockiit@gmail.com",
// //     subject: "Hello ✔",
// //     text: "Hello world?", // plain‑text body
// //     html: "<b>Hello world?</b>", // HTML body
// //   });

 

// //   console.log("Message sent:", info.messageId);
// // };

// // export default sendotp;



// import nodemailer from 'nodemailer';
// import { google } from 'googleapis';
// import dns from 'dns';
// import dotenv from 'dotenv';
// import { Socket } from 'net';

// dns.setDefaultResultOrder('verbatim');

// dotenv.config();

// const oauth2Client = new google.auth.OAuth2(
//   process.env.CLIENT_ID,
//   process.env.CLIENT_SECRET,
//   process.env.REDIRECT_URI
// );

// oauth2Client.setCredentials({
//   refresh_token: process.env.REFRESH_TOKEN,
// });

// const sendotp = async () => {
//   try {
//     const accessTokenObj = await oauth2Client.getAccessToken();

//     const transporter = nodemailer.createTransport({
//      port: 587,
//   secure: false,
//   requireTLS: true,

//  // TLS
//       auth: {
//         type: 'OAuth2',
//         user: process.env.EMAIL_SENDER,
//         clientId: process.env.CLIENT_ID,
//         clientSecret: process.env.CLIENT_SECRET,
//         refreshToken: process.env.REFRESH_TOKEN,
//         accessToken: accessTokenObj.token,
//       },
//       getSocket: (options, callback) => {
//       const socket = new Socket();
//       socket.connect({
//         host: '2404:6800:4003:c03::6d',
//         port: 587,
//         family: 6 // ⬅️ Force IPv6
//       });
//       callback(null, socket);
//     }
//     });

//     const mailOptions = {
//       from: `Raunak <${process.env.EMAIL_SENDER}>`,
//       to: 'raunakrockiit@gmail.com',
//       subject: '✅ SMTP is Working!',
//       html: '<b>Yes! Your SMTP connection is live and healthy.</b>',
//     };

//     const result = await transporter.sendMail(mailOptions);
//     console.log('✅ Email sent:', result.messageId);
//   } catch (err) {
//     console.error('❌ Error sending email:', err.message);
//   }
// };

// export default sendotp;



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

 const sendotp = async (email , otp ) => {
  try {
    const raw = makeRawEmail(
      email,
      process.env.EMAIL_SENDER,
      'one time password ',
      '<b>the opt for verificcation is </b>' + otp
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

export default sendotp;
