import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export async function POST(req: Request) {
  const { sessionId } = await req.json();

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["customer"],
    });

    if (!session.customer) {
      throw new Error("No customer associated with this session");
    }

    const customer = session.customer as Stripe.Customer;

    console.log("CREATE INVOICE:", { customer });

    const invoice = await stripe.invoices.create({
      customer: customer.id,
      auto_advance: true, // Auto-finalize this draft after creation
      metadata: session.metadata,
      description: `Factură precomandă carte One Love - ${session.metadata?.packageType}`,
    });

    await stripe.invoiceItems.create({
      customer: customer.id,
      invoice: invoice.id,
      amount: session.amount_total!,
      currency: session.currency!,
      description: `One Love - ${session.metadata?.packageType}`,
      tax_rates: ["txr_1Qo4Vr01l9tUBUlHytFG1eV4"],
    });

    const finalizedInvoice = await stripe.invoices.finalizeInvoice(invoice.id);

    return NextResponse.json({ invoiceId: finalizedInvoice.id });
  } catch (err) {
    console.error("Error creating invoice:", err);
    return NextResponse.json(
      { error: "Error creating invoice" },
      { status: 500 }
    );
  }
}
