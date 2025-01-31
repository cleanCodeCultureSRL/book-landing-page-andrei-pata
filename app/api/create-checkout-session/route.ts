import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia", // Use the latest API version
});

export async function POST(req: Request) {
  const { packageType, quantity, firstName, lastName, email, phone, address } =
    await req.json();

  // Define prices based on package type
  const prices = {
    "Sponsorizează-mă în scrierea cărții (50RON)": 5000, // 50 RON in cents
    "Precomandă cartea – reducere specială (39RON)": 3900, // 39 RON in cents
    "Precomandă cartea – preț întreg (50RON)": 5000, // 50 RON in cents
  };

  const price = prices[packageType as keyof typeof prices];

  if (!price) {
    return NextResponse.json(
      { error: "Invalid package type" },
      { status: 400 }
    );
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "ron",
            product_data: {
              name: `One Love - ${packageType}`,
            },
            unit_amount: price,
          },
          quantity: Number.parseInt(quantity),
        },
      ],
      mode: "payment",
      success_url: `http://localhost:3000/comanda-efectuata?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost:3000/comanda-nefinalizata`,
      // success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/comanda-efectuata?session_id={CHECKOUT_SESSION_ID}`,
      // cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/comanda-nefinalizata`,
      customer_email: email,
      metadata: {
        firstName,
        lastName,
        phone,
        address,
        packageType,
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (err) {
    console.error("Error creating checkout session:", err);
    return NextResponse.json(
      { error: "Error creating checkout session" },
      { status: 500 }
    );
  }
}
