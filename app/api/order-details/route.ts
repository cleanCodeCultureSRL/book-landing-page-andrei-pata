import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.json({ error: "Missing session_id" }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const lineItems = await stripe.checkout.sessions.listLineItems(sessionId);

    return NextResponse.json({
      orderId: session.payment_intent,
      productName: lineItems.data[0]?.description,
      packageType: session.metadata?.packageType || "N/A",
      firstName: session.metadata?.firstName || "N/A",
      lastName: session.metadata?.lastName || "N/A",
      email: session.customer_email,
      phone: session.metadata?.phone || "N/A",
      address: session.metadata?.address || "N/A",
    });
  } catch (err) {
    console.error("Error fetching order details:", err);
    return NextResponse.json(
      { error: "Error fetching order details" },
      { status: 500 }
    );
  }
}
