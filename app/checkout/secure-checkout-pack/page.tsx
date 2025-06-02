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

// Use the publishable key from environment variables
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "")

export default function SecureCheckoutPack() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Fixed price for the secure checkout pack
  const price = 30.0

  const handleCheckout = async () => {
    setIsLoading(true)
    setError(null)

    try {
      // Try to open in new tab first
      const newWindow = window.open("https://buy.stripe.com/7sI9AFbPOfR15mU00F", "_blank", "noopener,noreferrer")

      // Check if popup was blocked
      if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
        // Popup was blocked, show fallback
        setError("popup-blocked")
      } else {
        // Success - close loading state
        setIsLoading(false)
      }
    } catch (err) {
      console.error("Checkout error:", err)
      setError("Failed to open checkout")
      setIsLoading(false)
    }
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
              Secure Checkout Pack
            </h1>
            <p className="text-gray-600">Complete your payment to access your secure checkout pack.</p>
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
                    <div className="text-center py-8 bg-yellow-50 rounded-lg">
                      <AlertCircle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                      {error === "popup-blocked" ? (
                        <>
                          <h3 className="text-lg font-medium text-yellow-800 mb-2">Popup Blocked</h3>
                          <p className="text-yellow-700 mb-4">
                            Your browser blocked the checkout popup. Please click the link below to proceed:
                          </p>
                          <a
                            href="https://buy.stripe.com/7sI9AFbPOfR15mU00F"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium"
                          >
                            <CreditCard className="mr-2 h-5 w-5" />
                            Open Secure Checkout
                          </a>
                        </>
                      ) : (
                        <>
                          <h3 className="text-lg font-medium text-red-800 mb-2">Payment Error</h3>
                          <p className="text-red-600 mb-4">{error}</p>
                          <Button onClick={() => setError(null)} variant="outline" className="mx-auto">
                            Try Again
                          </Button>
                        </>
                      )}
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
                        className="w-full max-w-md bg-green-600 hover:bg-green-700 text-white py-6 text-lg rounded-lg flex items-center justify-center"
                      >
                        {isLoading ? (
                          <span className="flex items-center justify-center">
                            <span className="animate-spin mr-2 h-5 w-5 border-b-2 border-white rounded-full"></span>
                            Opening checkout...
                          </span>
                        ) : (
                          <>
                            <CreditCard className="mr-2 h-5 w-5" />
                            Proceed to Secure Checkout
                          </>
                        )}
                      </Button>

                      {/* Fallback link */}
                      <p className="text-sm text-gray-500 mt-4 text-center">
                        Having trouble?
                        <a
                          href="https://buy.stripe.com/7sI9AFbPOfR15mU00F"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 hover:underline ml-1"
                        >
                          Click here to open checkout directly
                        </a>
                      </p>
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
                        <span className="flex-1">Secure Checkout Pack</span>
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
                              <li>• Secure payment processing</li>
                              <li>• Premium checkout experience</li>
                              <li>• Enhanced security features</li>
                              <li>• Priority customer support</li>
                              <li>• Digital receipt and confirmation</li>
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
