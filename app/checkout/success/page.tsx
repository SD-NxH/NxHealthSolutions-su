"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, FileText } from "lucide-react"
import { motion } from "framer-motion"
import { useCart } from "@/context/cart-context"

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams()
  const paymentIntent = searchParams.get("payment_intent")
  const { clearCart } = useCart()
  const [orderNumber, setOrderNumber] = useState<string>("")

  useEffect(() => {
    // Clear the cart when the success page loads
    clearCart()

    // Generate a random order number
    const randomOrderNumber = Math.floor(10000000 + Math.random() * 90000000).toString()
    setOrderNumber(randomOrderNumber)
  }, [clearCart])

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-brand-lighter to-background">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-brand-lighter rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-brand" />
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-light tracking-tight text-brand-foreground mb-4">
              Order Confirmed!
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Thank you for your order. Your payment has been processed successfully.
            </p>

            <div className="bg-background p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-xl font-medium text-brand-foreground mb-4">Order Details</h2>
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Order Number:</span>
                <span className="font-medium">{orderNumber}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Payment ID:</span>
                <span className="font-medium">{paymentIntent || "N/A"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status:</span>
                <span className="text-brand font-medium">Paid</span>
              </div>
            </div>

            <p className="text-muted-foreground mb-8">
              We've sent a confirmation email with your order details. You'll receive another email when your order
              ships.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button className="bg-brand hover:bg-brand-hover text-brand-foreground rounded-full px-8 py-6">
                  Return to Home
                </Button>
              </Link>
              <Link href="/shop">
                <Button
                  variant="outline"
                  className="border-brand text-brand hover:bg-brand-light rounded-full px-8 py-6 bg-transparent"
                >
                  Continue Shopping
                </Button>
              </Link>
            </div>
            {searchParams.get("type") === "consultation" && (
              <div className="mt-8 bg-brand-lighter p-6 rounded-lg">
                <h3 className="text-xl font-medium text-brand-dark mb-3">What's Next?</h3>
                <p className="text-foreground mb-4">
                  Thank you for purchasing an online consultation! Here's what to expect:
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-foreground mb-6">
                  <li>Complete our comprehensive health assessment to help us understand your needs</li>
                  <li>Our health specialists will review your information and create a personalized plan</li>
                  <li>We'll send your customized health plan within 3-5 business days</li>
                  <li>You'll have the opportunity to schedule a follow-up session to discuss your plan</li>
                </ol>
                <div className="flex justify-center mt-6">
                  <Link href="/consultation/assessment">
                    <Button className="bg-brand hover:bg-brand-hover text-brand-foreground rounded-full px-8 py-4 flex items-center">
                      <FileText className="mr-2 h-5 w-5" />
                      Complete Your Health Assessment
                    </Button>
                  </Link>
                </div>
                <p className="mt-6 text-sm text-muted-foreground text-center">
                  If you have any questions in the meantime, please don't hesitate to contact us.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
