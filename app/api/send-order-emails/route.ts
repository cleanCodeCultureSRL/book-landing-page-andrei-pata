import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create a transporter using SMTP
// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: Number.parseInt(process.env.SMTP_PORT || "587"),
//   secure: process.env.SMTP_SECURE === "true",
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });

export async function POST(req: Request) {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "andrei.pata@cleancodeculture.com",
      pass: "lomr pcqk nstv crkh",
    },
  });

  const {
    orderId,
    productName,
    packageType,
    firstName,
    lastName,
    email,
    phone,
    address,
  } = await req.json();

  const customerEmailHtml = `
    <h1>Mulțumim pentru comanda ta!</h1>
    <p>Detaliile comenzii tale:</p>
    <ul>
      <li>Număr comandă: ${orderId}</li>
      <li>Produs: ${productName}</li>
      <li>Tip pachet: ${packageType}</li>
    </ul>
    <p>Te vom ține la curent cu statusul cărții și data estimată de livrare.</p>
  `;

  const adminEmailHtml = `
    <h1>Nouă comandă primită!</h1>
    <p>Detaliile comenzii:</p>
    <ul>
      <li>Număr comandă: ${orderId}</li>
      <li>Produs: ${productName}</li>
      <li>Tip pachet: ${packageType}</li>
      <li>Nume: ${firstName}</li>
      <li>Prenume: ${lastName}</li>
      <li>Email: ${email}</li>
      <li>Număr de telefon: ${phone}</li>
      <li>Adresă de livrare: ${address}</li>
    </ul>
  `;

  try {
    console.log("Attempting to send customer email...");
    // Send email to customer
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: "Confirmare comandă - One Love",
      html: customerEmailHtml,
    });
    console.log("Customer email sent successfully");

    console.log("Attempting to send admin email...");
    // Send email to admin
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: "andreipatza@gmail.com",
      subject: "Nouă comandă - One Love",
      html: adminEmailHtml,
    });
    console.log("Admin email sent successfully");

    return NextResponse.json({ message: "Emails sent successfully" });
  } catch (error) {
    const err = error as Error;
    console.error("Error sending emails:", err);
    console.error("Error stack:", err.stack);
    return NextResponse.json(
      {
        error: "Failed to send emails",
        details: err.message,
        stack: err.stack,
      },
      { status: 500 }
    );
  }
}
