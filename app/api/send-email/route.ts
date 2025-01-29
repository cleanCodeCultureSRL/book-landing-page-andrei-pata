import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "andrei.pata@cleancodeculture.com",
      pass: "lomr pcqk nstv crkh",
    },
  });

  const mailOptions = {
    from: "andrei.pata@cleancodeculture.com",
    to: "andreipatza@gmail.com",
    subject: "ONE LOVE - contact",
    text: `Tocmai ai primit un mesaj de contact de la: ${email} - ${name} - ${message}`,
  };

  try {
    // Send email
    await transporter.sendMail({
      from: `"Contact Form" <andrei.pata@cleancodeculture.com>`,
      to: "andrei.pata@cleancodeculture.com",
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
