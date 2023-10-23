import { NextResponse } from 'next/server';
import { Resend } from 'resend';

console.log("API key", process.env.RESEND_API_KEY)
// const apiKey = process.env.RESEND_API_KEY; 
const resend = new Resend("re_KrfxDw5T_L8rqyEJdSqphbjqmKJXxixX5");

const fromEmail = process.env.FROM_EMAIL;
console.log("fromEnmail",fromEmail)

export async function POST(req,res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: email,
      to: [fromEmail,email],
      subject: 'Hello world',
      react: <>
        <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
          </>,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
