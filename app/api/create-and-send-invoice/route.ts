import { NextResponse } from "next/server";
import Stripe from "stripe";
import nodemailer from "nodemailer";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
});

const invoiceCreated = new Set<string>();
const emailSent = new Set<string>();

export async function POST(req: Request) {
  const { sessionId, orderData } = await req.json();

  try {
    let invoiceUrl: string | null = null;

    // Use a transaction or locking mechanism here if available in your database
    if (!invoiceCreated.has(sessionId)) {
      // Check if an invoice already exists for this session
      const existingInvoices = await stripe.invoices.list({
        customer: orderData.customerId,
        metadata: { sessionId: sessionId },
      });

      if (existingInvoices.data.length > 0) {
        invoiceUrl = existingInvoices.data[0].invoice_pdf;
      } else {
        const session = await stripe.checkout.sessions.retrieve(sessionId, {
          expand: ["customer"],
        });

        if (!session.customer) {
          throw new Error("No customer associated with this session");
        }

        const customer = session.customer as Stripe.Customer;
        // Create a new invoice
        const invoice = await stripe.invoices.create({
          customer: customer.id,
          auto_advance: true, // Auto-finalize this draft after creation
          metadata: session.metadata,
          description: `Factură precomandă carte One Love - ${session.metadata?.packageType}`,
        });

        // Add line items to the invoice
        await stripe.invoiceItems.create({
          customer: orderData.customerId,
          invoice: invoice.id,
          amount: orderData.amount_total,
          currency: "ron",
          description: `${orderData.productName} - ${orderData.packageType}`,
        });

        // Add line items to the invoice
        await stripe.invoiceItems.create({
          customer: customer.id,
          invoice: invoice.id,
          amount: session.amount_total!,
          currency: session.currency!,
          description: `One Love - ${session.metadata?.packageType}`,
          tax_rates: ["txr_1Qo4Vr01l9tUBUlHytFG1eV4"],
        });

        // Finalize the invoice
        const finalizedInvoice = await stripe.invoices.finalizeInvoice(
          invoice.id
        );

        // Get the invoice PDF URL
        const invoiceUrl = finalizedInvoice.invoice_pdf;
      }

      // Mark invoice as created
      invoiceCreated.add(sessionId);
    }

    if (!emailSent.has(sessionId) && invoiceUrl) {
      // Send email with invoice
      await sendOrderEmail(orderData, invoiceUrl);

      // Mark email as sent
      emailSent.add(sessionId);
    }

    return NextResponse.json({ invoiceUrl });
  } catch (err) {
    console.error("Error creating invoice and sending email:", err);
    return NextResponse.json(
      { error: "Error creating invoice and sending email" },
      { status: 500 }
    );
  }
}

async function sendOrderEmail(orderData: any, invoiceUrl: string) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "andrei.pata@cleancodeculture.com",
      pass: "lomr pcqk nstv crkh",
    },
  });

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
        <p>Dragă ${orderData.firstName},</p>
        <p>Îți mulțumim pentru comanda ta! Suntem încântați că ai ales să faci parte din călătoria "One Love".</p>
        <h3>Detaliile comenzii tale:</h3>
        <ul>
          <li>Număr comandă: ${orderData.orderId}</li>
          <li>Produs: ${orderData.productName}</li>
          <li>Tip pachet: ${orderData.packageType}</li>
          <li>Cantitate: ${orderData.quantity}</li>
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
        <p>Poți descărca factura ta de aici: <a href="${invoiceUrl}">Descarcă factura</a></p>
      </div>
      <div class="footer">
        <p>© 2025 CLEAN CODE CULTURE S.R.L. Toate drepturile rezervate.</p>
      </div>
    </body>
    </html>
  `;

  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: orderData.email,
    subject: "Confirmare comandă - Cartea One Love",
    html: customerEmailHtml,
  };

  await transporter.sendMail(mailOptions);

  // Send email to admin
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
          <li>Număr comandă: ${orderData.orderId}</li>
          <li>Produs: ${orderData.productName}</li>
          <li>Tip pachet: ${orderData.packageType}</li>
          <li>Cantitate: ${orderData.quantity}</li>
          <li>Nume: ${orderData.firstName}</li>
          <li>Prenume: ${orderData.lastName}</li>
          <li>Email: ${orderData.email}</li>
          <li>Număr de telefon: ${orderData.phone}</li>
          <li>Adresă de livrare: ${orderData.address}</li>
        </ul>
        <p>Te rugăm să procesezi această comandă cât mai curând posibil.</p>
        <p>Link către factură: <a href="${invoiceUrl}">Descarcă factura</a></p>
      </div>
      <div class="footer">
        <p>© 2025 CLEAN CODE CULTURE S.R.L. Toate drepturile rezervate.</p>
      </div>
    </body>
    </html>
  `;

  const adminMailOptions = {
    from: process.env.SMTP_FROM,
    to: "andreipatza@gmail.com",
    subject: "Comandă primită - One Love",
    html: adminEmailHtml,
  };

  await transporter.sendMail(adminMailOptions);
}
