"use server"

import { redirect } from "next/navigation"
import Stripe from "stripe"
import type { CartItem } from "@/context/cart-context"

// Initialize Stripe with the secret key from environment variables
// IMPORTANT: This is server-side code, so it's safe to use the secret key here
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2023-10-16",
})

export async function createPaymentIntent(
  items: CartItem[],
  shippingDetails: {
    name: string
    email: string
    address: {
      line1: string
      city: string
      state: string
      postal_code: string
      country: string
    }
  },
) {
  try {
    // Calculate order amount
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
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
          items.map((item) => ({
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
          postal_code: shippingDetails.postal_code,
          country: shippingDetails.country,
        },
      },
    })

    return { clientSecret: paymentIntent.client_secret }
  } catch (error) {
    console.error("Error creating payment intent:", error)
    throw new Error("Failed to create payment intent")
  }
}

export async function createConsultationPaymentIntent(price: number) {
  try {
    // Convert to cents for Stripe
    const amount = Math.round(price * 100)

    // Create a PaymentIntent with the fixed amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        product: "Online Consultation",
        price: price.toString(),
      },
    })

    return { clientSecret: paymentIntent.client_secret }
  } catch (error) {
    console.error("Error creating consultation payment intent:", error)
    throw new Error("Failed to create payment intent")
  }
}

export async function handlePaymentSuccess(paymentIntentId: string) {
  try {
    // Retrieve the payment intent to verify payment status
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId)

    if (paymentIntent.status === "succeeded") {
      // Here you would typically:
      // 1. Update your database with order information
      // 2. Send confirmation emails
      // 3. Update inventory, etc.

      // For now, we'll just redirect to a success page
      redirect("/checkout/success?payment_intent=" + paymentIntentId)
    } else {
      throw new Error("Payment has not succeeded yet")
    }
  } catch (error) {
    console.error("Error handling payment success:", error)
    throw new Error("Failed to process payment confirmation")
  }
}

export async function redirectToStripePayment() {
  return {
    redirect: "https://buy.stripe.com/fZe0057zydIT8z6cNe",
  }
}
