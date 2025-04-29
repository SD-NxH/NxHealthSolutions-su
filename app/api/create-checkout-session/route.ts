import { NextResponse } from "next/server"
import Stripe from "stripe"

export async function POST(request: Request) {
  try {
    // Initialize Stripe with the secret key from environment variables
    // IMPORTANT: This is server-side code, so it's safe to use the secret key here
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
      apiVersion: "2023-10-16",
    })

    const { price, productName, successUrl, cancelUrl } = await request.json()

    // Validate inputs
    if (!price || !productName || !successUrl || !cancelUrl) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({ error: "Stripe secret key is not configured" }, { status: 500 })
    }

    // Create a Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: productName,
              description: "Online health consultation with a certified nutritionist",
            },
            unit_amount: Math.round(price * 100), // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        product_type: "consultation",
      },
    })

    return NextResponse.json({ id: session.id, url: session.url })
  } catch (error: any) {
    console.error("Error creating checkout session:", error)
    return NextResponse.json(
      {
        error: error.message || "Failed to create checkout session",
      },
      { status: 500 },
    )
  }
}
