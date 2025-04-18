"use client"

import type React from "react"

import { useState } from "react"
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { toast } from "@/hooks/use-toast"
import { motion } from "framer-motion"
import { CreditCard, CheckCircle, AlertCircle } from "lucide-react"

interface ShippingDetails {
  name: string
  email: string
  address: {
    line1: string
    city: string
    state: string
    postal_code: string
    country: string
  }
}

export default function StripePaymentForm({
  shippingDetails,
  onSuccess,
  clientSecret,
}: {
  shippingDetails: ShippingDetails
  onSuccess: () => void
  clientSecret: string
}) {
  const stripe = useStripe()
  const elements = useElements()
  const { items, clearCart } = useCart()

  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "processing" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js hasn't loaded yet
      return
    }

    setIsLoading(true)
    setMessage(null)
    setPaymentStatus("processing")

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/checkout/success`,
      },
      redirect: "if_required",
    })

    if (error) {
      // Show error to your customer
      setMessage(error.message || "An unexpected error occurred.")
      setPaymentStatus("error")
      toast({
        title: "Payment failed",
        description: error.message || "An unexpected error occurred.",
        variant: "destructive",
      })
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      // Payment succeeded
      setMessage("Payment successful!")
      setPaymentStatus("success")
      toast({
        title: "Payment successful!",
        description: "Thank you for your order.",
      })
      clearCart()

      // Add a small delay before redirecting to show the success animation
      setTimeout(() => {
        onSuccess()
      }, 1500)
    } else {
      setMessage("An unexpected error occurred.")
      setPaymentStatus("error")
      toast({
        title: "Payment status",
        description: "Your payment is processing.",
      })
    }

    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <CreditCard className="mr-2 h-5 w-5 text-green-600" />
            <h3 className="text-lg font-medium">Payment Details</h3>
          </div>
          <PaymentElement
            options={{
              layout: {
                type: "tabs",
                defaultCollapsed: false,
              },
            }}
          />
        </div>
      </motion.div>

      <motion.div
        className="pt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Button
          type="submit"
          disabled={isLoading || !stripe || !elements || paymentStatus === "success"}
          className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full py-6 relative overflow-hidden"
        >
          {isLoading ? (
            <motion.span
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.span
                className="mr-2 inline-block"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </motion.span>
              Processing Payment...
            </motion.span>
          ) : paymentStatus === "success" ? (
            <motion.span
              className="flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <CheckCircle className="mr-2 h-5 w-5" />
              Payment Successful!
            </motion.span>
          ) : (
            <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Pay Now
            </motion.span>
          )}

          {/* Animated background for success state */}
          {paymentStatus === "success" && (
            <motion.div
              className="absolute inset-0 bg-green-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
              style={{ transformOrigin: "left" }}
            />
          )}
        </Button>
      </motion.div>

      {message && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`text-center p-4 rounded-lg ${
            message.includes("successful") ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
          }`}
        >
          <div className="flex items-center justify-center">
            {message.includes("successful") ? (
              <CheckCircle className="h-5 w-5 mr-2" />
            ) : (
              <AlertCircle className="h-5 w-5 mr-2" />
            )}
            {message}
          </div>
        </motion.div>
      )}
    </form>
  )
}
