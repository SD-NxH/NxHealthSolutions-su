import { NextResponse } from "next/server"
import Stripe from "stripe"

// Initialize Stripe with the secret key from environment variables
// IMPORTANT: This is server-side code, so it's safe to use the secret key here
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2023-10-16",
})

export async function POST(request: Request) {
  try {
    const { items, shippingDetails } = await request.json()

    // Validate inputs
    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Invalid items" }, { status: 400 })
    }

    if (!shippingDetails || !shippingDetails.name || !shippingDetails.email) {
      return NextResponse.json({ error: "Invalid shipping details" }, { status: 400 })
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({ error: "Stripe secret key is not configured" }, { status: 500 })
    }

    // Calculate order amount
    const subtotal = items.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0)
    const tax = subtotal * 0.08
    const shipping = subtotal > 50 ? 0 : 5.99
    const total = subtotal + tax + shipping

    // Convert to cents for Stripe
    const amount = Math.round(total * 100)

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        order_items: JSON.stringify(
          items.map((item: any) => ({
            id: item.id,
            name: item.name,
            quantity: item.quantity,
            price: item.price,
          })),
        ),
      },
      receipt_email: shippingDetails.email,
      shipping: {
        name: shippingDetails.name,
        address: {
          line1: shippingDetails.address.line1,
          city: shippingDetails.address.city,
          state: shippingDetails.address.state,
          postal_code: shippingDetails.address.postal_code,
          country: shippingDetails.address.country,
        },
      },
    })

    return NextResponse.json({ clientSecret: paymentIntent.client_secret })
  } catch (error: any) {
    console.error("Error creating payment intent:", error)
    return NextResponse.json(
      {
        error: error.message || "Failed to create payment intent",
      },
      { status: 500 },
    )
  }
}
