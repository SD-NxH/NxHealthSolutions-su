"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Check, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"
import { createConsultationPaymentIntent } from "@/app/actions/stripe-actions"
import { StripeProvider } from "@/components/stripe-provider"
import { StripeConsultationPaymentForm } from "@/components/stripe-consultation-payment-form"

export default function OnlineConsultationCheckout() {
  const router = useRouter()
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fixed price for the consultation
  const price = 20.0

  useEffect(() => {
    const initializePayment = async () => {
      try {
        setIsLoading(true)
        const result = await createConsultationPaymentIntent(price)

        if (result.clientSecret) {
          setClientSecret(result.clientSecret)
        } else {
          setError("Failed to initialize payment. Please try again.")
        }
      } catch (err) {
        console.error("Payment initialization error:", err)
        setError("An error occurred while setting up the payment. Please try again.")
      } finally {
        setIsLoading(false)
      }
    }

    initializePayment()
  }, [])

  const handlePaymentSuccess = () => {
    router.push("/checkout/success?type=consultation")
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="relative w-full py-12 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <Link href="/services" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
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
                  <CardDescription>Enter your payment details to complete your purchase</CardDescription>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-8">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
                      <p className="mt-4 text-gray-600">Initializing payment form...</p>
                    </div>
                  ) : error ? (
                    <div className="text-center py-8 bg-red-50 rounded-lg">
                      <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-red-800 mb-2">Payment Error</h3>
                      <p className="text-red-600">{error}</p>
                      <Button
                        onClick={() => window.location.reload()}
                        className="mt-4 bg-red-600 hover:bg-red-700 text-white"
                      >
                        Try Again
                      </Button>
                    </div>
                  ) : clientSecret ? (
                    <StripeProvider clientSecret={clientSecret}>
                      <StripeConsultationPaymentForm clientSecret={clientSecret} onSuccess={handlePaymentSuccess} />
                    </StripeProvider>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-red-500">Failed to initialize payment form. Please try again.</p>
                      <Button
                        onClick={() => window.location.reload()}
                        className="mt-4 bg-green-600 hover:bg-green-700 text-white"
                      >
                        Reload
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
                        <span className="text-green-600">${price.toFixed(2)}</span>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg mt-4">
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
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
                    <div className="w-full text-center text-sm text-gray-500">
                      <p>
                        Need help?{" "}
                        <Link href="/contact" className="text-green-600 hover:underline">
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
