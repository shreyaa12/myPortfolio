// import { NextResponse } from 'next/server';
// import { Resend } from 'resend';


// const resend = new Resend(process.env.RESEND_API_KEY);

// const TO_EMAIL = process.env.TO_EMAIL;

// export async function POST(req,res) {
//   const { email, subject, message } = await req.body;
//   console.log("req.json",email, subject, message);
//   try {
//     const data = await resend.emails.send({
//       from: TO_EMAIL,
//       to: [TO_EMAIL,email],
//       subject: 'Hello world',
//       react: <>
//         <h1>{subject}</h1>
//           <p>Thank you for contacting us!</p>
//           <p>New message submitted:</p>
//           <p>{message}</p>
//           </>,
//     });

//     return NextResponse.json(data);
//   } catch (error) {
//     console.log("here is error",error)
//     return NextResponse.json({ error });
//   }
// }


// src/app/api/email/route.js
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const TO_EMAIL = process.env.TO_EMAIL;

export async function POST(req, res) {
  try {
    // Ensure the req.body is parsed correctly as JSON
    const { email, name, message } = await req.json();

    const msg = {
      to: TO_EMAIL,
      from: {
        email: email,
        name: name,
      },
      subject: 'Contact Inquiry',
      html: `<h1>${name}</h1><p>Thank you for contacting us!</p><p>New message submitted:</p><p>${message}</p>`,
    };

    const data = await sgMail.send(msg);

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error });
  }

}





