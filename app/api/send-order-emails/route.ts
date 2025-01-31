import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const testAccount = await nodemailer.createTestAccount();

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
    quantity,
  } = await req.json();

  const customerEmailHtml = `
    <!DOCTYPE html>
    <html lang="ro">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Confirmare comandă - One Love</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background-color: rgb(65,103,112);
          color: white;
          padding: 20px;
          text-align: center;
        }
        .content {
          background-color: #f9f9f9;
          padding: 20px;
          border-radius: 5px;
        }
        .book-image {
          max-width: 200px;
          display: block;
          margin: 0 auto;
        }
        .cta-button {
          display: inline-block;
          background-color: rgb(162,130,167);
          color: white;
          padding: 10px 20px;
          text-decoration: none;
          border-radius: 5px;
          margin-top: 20px;
        }
        .footer {
          margin-top: 20px;
          text-align: center;
          font-size: 0.8em;
          color: #666;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Îți mulțumim pentru comanda ta!</h1>
      </div>
      <div class="content">
        <img src="https://www.andreipata.ro/_next/image?url=%2Fbook_cover.png&w=1920&q=75&dpl=dpl_9szAPyTNvT9XiSSCdY8PgBYPnm4A" alt="Coperta cărții One Love" class="book-image">
        <h2>Confirmare comandă - One Love</h2>
        <p>Dragă ${firstName},</p>
        <p>Îți mulțumim pentru comanda ta! Suntem încântați că ai ales să faci parte din călătoria "One Love".</p>
        <h3>Detaliile comenzii tale:</h3>
        <ul>
          <li>Număr comandă: ${orderId}</li>
          <li>Produs: ${productName}</li>
          <li>Tip pachet: ${packageType}</li>
          <li>Cantitate: ${quantity}</li>
        </ul>
        <p>Te vom ține la curent cu statusul cărții și data estimată de livrare. Între timp, pregătește-te să începi o călătorie inspirațională alături de Jimmy!</p>
        <h3>Ce urmează?</h3>
        <ul>
          <li>Vei primi un email de confirmare când comanda ta va fi expediată</li>
          <li>Cartea va fi livrată la adresa furnizată în comandă</li>
          <li>Pregătește-te să fii inspirat și să descoperi puterea prieteniei și a curajului</li>
        </ul>
        <p>Dacă ai întrebări despre comanda ta, nu ezita să ne contactezi.</p>
        <a href="www.andreipata.ro/#contact-section" class="cta-button">Contactează-ne</a>
      </div>
      <div class="footer">
        <p>© 2025 CLEAN CODE CULTURE S.R.L. Toate drepturile rezervate.</p>
      </div>
    </body>
    </html>
  `;

  const adminEmailHtml = `
    <!DOCTYPE html>
    <html lang="ro">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nouă comandă - One Love</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background-color: rgb(65,103,112);
          color: white;
          padding: 20px;
          text-align: center;
        }
        .content {
          background-color: #f9f9f9;
          padding: 20px;
          border-radius: 5px;
        }
        .footer {
          margin-top: 20px;
          text-align: center;
          font-size: 0.8em;
          color: #666;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Nouă comandă primită!</h1>
      </div>
      <div class="content">
        <h2>Detaliile comenzii:</h2>
        <ul>
          <li>Număr comandă: ${orderId}</li>
          <li>Produs: ${productName}</li>
          <li>Tip pachet: ${packageType}</li>
          <li>Cantitate: ${quantity}</li>
          <li>Nume: ${firstName}</li>
          <li>Prenume: ${lastName}</li>
          <li>Email: ${email}</li>
          <li>Număr de telefon: ${phone}</li>
          <li>Adresă de livrare: ${address}</li>
        </ul>
        <p>Te rugăm să procesezi această comandă cât mai curând posibil.</p>
      </div>
      <div class="footer">
        <p>© 2025 CLEAN CODE CULTURE S.R.L. Toate drepturile rezervate.</p>
      </div>
    </body>
    </html>
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
