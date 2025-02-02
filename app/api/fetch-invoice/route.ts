import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia", // Use the latest API version
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const invoiceId = searchParams.get("invoiceId");

  if (!invoiceId) {
    return NextResponse.json({ error: "Missing invoiceId" }, { status: 400 });
  }

  try {
    const invoice = await stripe.invoices.retrieve(invoiceId);
    return NextResponse.json({ invoiceUrl: invoice.invoice_pdf });
  } catch (err) {
    console.error("Error fetching invoice:", err);
    return NextResponse.json(
      { error: "Error fetching invoice" },
      { status: 500 }
    );
  }
}
