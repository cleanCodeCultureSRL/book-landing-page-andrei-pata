import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  const { email } = await req.json();

  // Create a transporter using SMTP
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "andrei.pata@cleancodeculture.com",
      pass: "lomr pcqk nstv crkh",
    },
  });

  try {
    // Read the PDF file
    const pdfPath = path.join(process.cwd(), "public", "sample-chapter-6.pdf");
    const pdfContent = await fs.readFile(pdfPath);

    // HTML email body
    const htmlBody = `
      <!DOCTYPE html>
      <html lang="ro">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Capitolul gratuit din "One Love"</title>
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
          <h1>Îți mulțumesc din inimă pentru abonare!</h1>
        </div>
        <div class="content">
          <img src="https://www.andreipata.ro/_next/image?url=%2Fbook_cover.png&w=1920&q=75&dpl=dpl_9szAPyTNvT9XiSSCdY8PgBYPnm4A" alt="Coperta cărții One Love" class="book-image">
          <h2>Capitolul gratuit din "One Love"</h2>
          <p>Dragă cititorule,</p>
          <p>Îți mulțumesc pentru interesul arătat față de cartea "One Love". Atașat acestui email, vei găsi un capitol gratuit care îți va oferi o mostră din călătoria inspirațională a lui Jimmy.</p>
          <h3>Despre "One Love":</h3>
          <ul>
            <li>O poveste captivantă despre puterea prieteniei și a curajului</li>
            <li>Lecții valoroase despre depășirea obstacolelor și urmărirea visurilor</li>
            <li>O sursă de inspirație pentru tinerii care caută să-și găsească drumul în viață</li>
          </ul>
          <p>Sper ca acest capitol te va inspira și îți va stârni curiozitatea de a descoperi întreaga poveste a lui Jimmy.</p>
          <a href="www.andreipata.ro/#pricing-section" class="cta-button">Comandă cartea acum</a>
        </div>
        <div class="footer">
          <p>© 2025 CLEAN CODE CULTURE S.R.L. Toate drepturile rezervate.</p>
        </div>
      </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"One Love - Andrei-Valentin Pața" <andrei.pata@cleancodeculture.com>`,
      to: email,
      subject: 'Capitolul gratuit din "One Love"',
      text: 'Îți mulțumesc din inimă pentru abonare! Găsești atașat un capitol gratuit din cartea "One Love".',
      html: htmlBody,
      attachments: [
        {
          filename: "capitol-gratuit-one-love.pdf",
          content: pdfContent,
        },
      ],
    });

    await transporter.sendMail({
      from: `"One Love - Andrei-Valentin Pața" <andrei.pata@cleancodeculture.com>`,
      to: "andreipatza@gmail.com",
      subject: "SUBSCRIBE - New subscriber",
      text: "New subscriber: " + email,
      // attachments: [
      //   {
      //     filename: "capitol-gratuit-one-love.pdf",
      //     content: pdfContent,
      //   },
      // ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
