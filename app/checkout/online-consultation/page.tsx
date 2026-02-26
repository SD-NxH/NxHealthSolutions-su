"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Check, AlertCircle, CreditCard } from "lucide-react"
import { motion } from "framer-motion"
import { loadStripe } from "@stripe/stripe-js"
import { safeParseJson } from "@/lib/safe-json"

// Use the publishable key from environment variables
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "")

export default function OnlineConsultationCheckout() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Fixed price for the consultation
  const price = 20.0

  const handleCheckout = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          price: price,
          productName: "Online Consultation",
          successUrl: `${window.location.origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
          cancelUrl: window.location.href,
        }),
      })

      const text = await response.text()

      if (!response.ok) {
        let errorMessage = "Failed to create checkout session"
        const contentType = response.headers.get("content-type")
        if (contentType && contentType.includes("application/json") && text) {
          const data = safeParseJson<{ error?: string }>(text, {})
          errorMessage = data.error || errorMessage
        }
        throw new Error(errorMessage)
      }

      // Parse the successful response safely
      const data = safeParseJson<{ url?: string }>(text, {})

      // Redirect to Stripe Checkout
      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error("No checkout URL returned from server")
      }
    } catch (err) {
      console.error("Checkout error:", err)
      setError(err instanceof Error ? err.message : "An unexpected error occurred")
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="relative w-full py-12 bg-gradient-to-b from-brand-lighter to-background">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <Link href="/services" className="inline-flex items-center text-brand hover:text-brand-hover mb-6">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Services
            </Link>
            <h1 className="text-3xl md:text-4xl font-serif font-light tracking-tight text-gray-900 mb-4">
              Online Consultation Checkout
            </h1>
            <p className="text-gray-600">Complete your payment to schedule your online consultation.</p>
          </motion.div>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="py-12 bg-white flex-grow">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Left Column - Payment Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Information</CardTitle>
                  <CardDescription>Proceed to checkout to complete your purchase</CardDescription>
                </CardHeader>
                <CardContent>
                  {error ? (
                    <div className="text-center py-8 bg-destructive/10 rounded-lg">
                      <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-destructive mb-2">Payment Error</h3>
                      <p className="text-destructive mb-4">{error}</p>
                      <Button onClick={() => setError(null)} variant="outline" className="mx-auto">
                        Try Again
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-8">
                      <div className="mb-8 text-center">
                        <h3 className="text-xl font-medium mb-4">Ready to complete your purchase?</h3>
                        <p className="text-gray-600 max-w-md mx-auto">
                          Click the button below to proceed to our secure checkout. You'll be able to pay using credit
                          card, debit card, or other payment methods.
                        </p>
                      </div>
                      <Button
                        onClick={handleCheckout}
                        disabled={isLoading}
                        className="w-full max-w-md bg-brand hover:bg-brand-hover text-brand-foreground py-6 text-lg rounded-lg flex items-center justify-center"
                      >
                        {isLoading ? (
                          <span className="flex items-center justify-center">
                            <span className="animate-spin mr-2 h-5 w-5 border-b-2 border-white rounded-full"></span>
                            Processing...
                          </span>
                        ) : (
                          <>
                            <CreditCard className="mr-2 h-5 w-5" />
                            Proceed to Secure Checkout
                          </>
                        )}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Order Summary */}
            <div>
              <div className="sticky top-24">
                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span className="flex-1">Online Consultation</span>
                        <span className="font-medium">${price.toFixed(2)}</span>
                      </div>

                      <Separator />

                      <div className="flex justify-between text-lg font-medium">
                        <span>Total</span>
                        <span className="text-brand">${price.toFixed(2)}</span>
                      </div>

                      <div className="bg-brand-lighter p-4 rounded-lg mt-4">
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-brand mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-sm text-gray-700 font-medium">What's included:</p>
                            <ul className="text-sm text-gray-600 mt-2 space-y-1">
                              <li>• Complete online health assessment</li>
                              <li>• Personalized health plan</li>
                              <li>• Detailed recommendations</li>
                              <li>• Follow-up support</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="w-full text-center text-sm text-muted-foreground">
                      <p>
                        Need help?{" "}
                        <Link href="/contact" className="text-brand hover:underline">
                          Contact us
                        </Link>
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
