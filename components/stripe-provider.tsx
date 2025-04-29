"use client"

import type { ReactNode } from "react"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

// Initialize Stripe with your publishable key from environment variables
// IMPORTANT: Only use the publishable key on the client side
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "")

export function StripeProvider({
  children,
  clientSecret,
}: {
  children: ReactNode
  clientSecret?: string
}) {
  // Define appearance options for Stripe Elements
  const appearance = {
    theme: "stripe",
    variables: {
      colorPrimary: "#367936",
      colorBackground: "#ffffff",
      colorText: "#30313d",
      colorDanger: "#df1b41",
      fontFamily: "system-ui, sans-serif",
      spacingUnit: "4px",
      borderRadius: "8px", // Increased border radius for a more modern look
    },
    rules: {
      ".Input": {
        boxShadow: "none",
        padding: "12px",
        transition: "border-color 0.2s ease, box-shadow 0.2s ease",
      },
      ".Input:focus": {
        boxShadow: "0 0 0 1px rgba(54, 121, 54, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.07)",
      },
      ".Label": {
        fontWeight: "500",
      },
      ".Tab": {
        padding: "10px 16px",
        borderRadius: "8px",
      },
      ".Tab:hover": {
        backgroundColor: "rgba(54, 121, 54, 0.1)",
      },
      ".Tab--selected": {
        backgroundColor: "rgba(54, 121, 54, 0.1)",
        borderColor: "#367936",
      },
    },
  }

  // Only create options when we have a clientSecret
  const options = clientSecret
    ? {
        clientSecret,
        appearance,
        loader: "auto",
      }
    : undefined

  // If we don't have a clientSecret, show a loading state
  if (!clientSecret) {
    return (
      <div className="flex flex-col items-center justify-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
        <p className="mt-4 text-gray-600">Initializing payment form...</p>
      </div>
    )
  }

  return (
    <Elements stripe={stripePromise} options={options}>
      {children}
    </Elements>
  )
}
