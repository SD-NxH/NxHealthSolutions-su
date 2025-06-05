"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, CreditCard, Truck, ShoppingBag, Plus, Minus, Trash2, Check, ArrowRight } from "lucide-react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { toast } from "@/hooks/use-toast"
import { useCart } from "@/context/cart-context"
import { useRouter } from "next/navigation"
import { StripeProvider } from "@/components/stripe-provider"
import StripePaymentForm from "@/components/stripe-payment-form"
// Remove this import
// import { createPaymentIntent } from "@/app/actions/stripe-actions"

// Add this function to handle payment intent creation
const createPaymentIntentAPI = async (items: any[], shippingDetails: any) => {
  const response = await fetch("/api/create-payment-intent", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items,
      shippingDetails,
    }),
  })

  if (!response.ok) {
    throw new Error("Failed to create payment intent")
  }

  return response.json()
}

export default function CheckoutPage() {
  const router = useRouter()
  const { items, updateQuantity, removeItem, itemCount } = useCart()
  const [step, setStep] = useState(1)
  const [shippingDetails, setShippingDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "US",
    shippingMethod: "standard",
  })
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [isButtonAnimating, setIsButtonAnimating] = useState(false)
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [isLoadingPaymentIntent, setIsLoadingPaymentIntent] = useState(false)

  const cartRef = useRef(null)
  const shippingRef = useRef(null)
  const paymentRef = useRef(null)

  const isCartInView = useInView(cartRef, { once: true, amount: 0.2 })
  const isShippingInView = useInView(shippingRef, { once: true, amount: 0.2 })
  const isPaymentInView = useInView(paymentRef, { once: true, amount: 0.2 })

  // Calculate totals
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.08
  const shipping = subtotal > 50 ? 0 : 5.99
  const total = subtotal + tax + shipping

  // Create payment intent when reaching the payment step
  useEffect(() => {
    const getPaymentIntent = async () => {
      if (step === 3 && !clientSecret && items.length > 0) {
        try {
          setIsLoadingPaymentIntent(true)
          // In the useEffect, replace the createPaymentIntent call:
          // Change this:
          // const result = await createPaymentIntent(items, {
          //   name: `${shippingDetails.firstName} ${shippingDetails.lastName}`,
          //   email: shippingDetails.email,
          //   address: {
          //     line1: shippingDetails.address,
          //     city: shippingDetails.city,
          //     state: shippingDetails.state,
          //     postal_code: shippingDetails.zip,
          //     country: shippingDetails.country,
          //   },
          // })

          // To this:
          const result = await createPaymentIntentAPI(items, {
            name: `${shippingDetails.firstName} ${shippingDetails.lastName}`,
            email: shippingDetails.email,
            address: {
              line1: shippingDetails.address,
              city: shippingDetails.city,
              state: shippingDetails.state,
              postal_code: shippingDetails.zip,
              country: shippingDetails.country,
            },
          })

          if (result.clientSecret) {
            setClientSecret(result.clientSecret)
          }
        } catch (error) {
          console.error("Error creating payment intent:", error)
          toast({
            title: "Error",
            description: "Failed to initialize payment. Please try again.",
            variant: "destructive",
          })
        } finally {
          setIsLoadingPaymentIntent(false)
        }
      }
    }

    getPaymentIntent()
  }, [step, clientSecret, items, shippingDetails])

  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    updateQuantity(id, newQuantity)
  }

  const handleRemoveItem = (id: number) => {
    removeItem(id)

    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setShippingDetails((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error for this field if it exists
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleShippingMethodChange = (value: string) => {
    setShippingDetails((prev) => ({
      ...prev,
      shippingMethod: value,
    }))
  }

  const validateShippingForm = () => {
    const errors: Record<string, string> = {}
    const requiredFields = ["firstName", "lastName", "email", "address", "city", "state", "zip"]

    requiredFields.forEach((field) => {
      if (!shippingDetails[field as keyof typeof shippingDetails]) {
        errors[field] = "This field is required"
      }
    })

    // Email validation
    if (shippingDetails.email && !/\S+@\S+\.\S+/.test(shippingDetails.email)) {
      errors.email = "Please enter a valid email address"
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const nextStep = () => {
    if (step === 2 && !validateShippingForm()) {
      toast({
        title: "Form Validation Error",
        description: "Please fill in all required fields correctly.",
        variant: "destructive",
      })
      return
    }

    // Trigger button animation
    setIsButtonAnimating(true)

    // Set a timeout to match the animation duration
    setTimeout(() => {
      setStep((prev) => Math.min(prev + 1, 3))
      window.scrollTo({ top: 0, behavior: "smooth" })
      setIsButtonAnimating(false)
    }, 600)
  }

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1))
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handlePaymentSuccess = () => {
    router.push("/checkout/success")
  }

  // If cart is empty and not on success page, redirect to cart
  if (items.length === 0 && step !== 4) {
    return (
      <div className="flex flex-col min-h-screen">
        <section className="relative w-full py-16 bg-gradient-to-b from-green-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-serif font-light tracking-tight text-gray-900 mb-4">
                Your Cart is Empty
              </h1>
              <p className="text-gray-600 mb-8">You need to add items to your cart before proceeding to checkout.</p>
              <Link href="/shop">
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full">Browse Our Menu</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    )
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
            <Link href="/shop" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Continue Shopping
            </Link>
            <h1 className="text-3xl md:text-4xl font-serif font-light tracking-tight text-gray-900 mb-4">Checkout</h1>
            <div className="flex items-center justify-between max-w-md">
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{
                    scale: step === 1 ? [1, 1.1, 1] : 1,
                    backgroundColor: step >= 1 ? "#367936" : "#e5e7eb",
                    color: step >= 1 ? "#ffffff" : "#6b7280",
                  }}
                  transition={{ duration: 0.5 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                >
                  <ShoppingBag className="h-5 w-5" />
                </motion.div>
                <span className="text-sm mt-2">Cart</span>
              </div>
              <motion.div
                className="flex-1 h-1 mx-2 bg-gray-200 overflow-hidden"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
              >
                <motion.div
                  className="h-full bg-green-600"
                  initial={{ width: "0%" }}
                  animate={{ width: step >= 2 ? "100%" : "0%" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                ></motion.div>
              </motion.div>
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{
                    scale: step === 2 ? [1, 1.1, 1] : 1,
                    backgroundColor: step >= 2 ? "#367936" : "#e5e7eb",
                    color: step >= 2 ? "#ffffff" : "#6b7280",
                  }}
                  transition={{ duration: 0.5 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                >
                  <Truck className="h-5 w-5" />
                </motion.div>
                <span className="text-sm mt-2">Shipping</span>
              </div>
              <motion.div
                className="flex-1 h-1 mx-2 bg-gray-200 overflow-hidden"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
              >
                <motion.div
                  className="h-full bg-green-600"
                  initial={{ width: "0%" }}
                  animate={{ width: step >= 3 ? "100%" : "0%" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                ></motion.div>
              </motion.div>
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{
                    scale: step === 3 ? [1, 1.1, 1] : 1,
                    backgroundColor: step >= 3 ? "#367936" : "#e5e7eb",
                    color: step >= 3 ? "#ffffff" : "#6b7280",
                  }}
                  transition={{ duration: 0.5 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                >
                  <CreditCard className="h-5 w-5" />
                </motion.div>
                <span className="text-sm mt-2">Payment</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="py-12 bg-white flex-grow">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Left Column - Checkout Steps */}
            <div className="lg:col-span-2">
              {/* Step 1: Cart Review */}
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="cart-step"
                    ref={cartRef}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle>Your Cart</CardTitle>
                        <CardDescription>Review your items before checkout</CardDescription>
                      </CardHeader>
                      <CardContent>
                        {items.length > 0 ? (
                          <div className="space-y-6">
                            {items.map((item, index) => (
                              <motion.div
                                key={item.id}
                                className="flex gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                              >
                                <div className="relative h-24 w-24 rounded-md overflow-hidden flex-shrink-0">
                                  <Image
                                    src={item.image || "/placeholder.svg"}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div className="flex-1">
                                  <h3 className="font-medium text-gray-900">{item.name}</h3>
                                  <p className="text-sm text-gray-500 line-clamp-1">{item.description}</p>
                                  <p className="text-green-600 font-medium mt-1">${item.price.toFixed(2)}</p>
                                </div>
                                <div className="flex flex-col items-end justify-between">
                                  <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handleRemoveItem(item.id)}
                                    className="text-gray-400 hover:text-red-500"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </motion.button>
                                  <div className="flex items-center border rounded-full">
                                    <motion.button
                                      whileHover={{ backgroundColor: "#f3f4f6" }}
                                      whileTap={{ scale: 0.95 }}
                                      onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                      className="h-8 w-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
                                    >
                                      <Minus className="h-3 w-3" />
                                    </motion.button>
                                    <span className="w-8 text-center">{item.quantity}</span>
                                    <motion.button
                                      whileHover={{ backgroundColor: "#f3f4f6" }}
                                      whileTap={{ scale: 0.95 }}
                                      onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                      className="h-8 w-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
                                    >
                                      <Plus className="h-3 w-3" />
                                    </motion.button>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center py-12">
                            <ShoppingBag className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
                            <p className="text-gray-500 mb-6">
                              Looks like you haven't added any items to your cart yet.
                            </p>
                            <Link href="/shop">
                              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full">
                                Browse Menu
                              </Button>
                            </Link>
                          </div>
                        )}
                      </CardContent>
                      {items.length > 0 && (
                        <CardFooter className="flex justify-end">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            animate={
                              isButtonAnimating
                                ? {
                                    scale: [1, 1.05, 1],
                                    x: [0, 5, 0],
                                  }
                                : {}
                            }
                            transition={{ duration: 0.6 }}
                          >
                            <Button
                              onClick={nextStep}
                              className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 group"
                            >
                              Continue to Shipping
                              <motion.span
                                className="inline-block ml-2"
                                animate={{ x: isButtonAnimating ? [0, 4, 0] : 0 }}
                                transition={{ duration: 0.6 }}
                              >
                                <ArrowRight className="h-4 w-4" />
                              </motion.span>
                            </Button>
                          </motion.div>
                        </CardFooter>
                      )}
                    </Card>
                  </motion.div>
                )}

                {/* Step 2: Shipping Information */}
                {step === 2 && (
                  <motion.div
                    key="shipping-step"
                    ref={shippingRef}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle>Shipping Information</CardTitle>
                        <CardDescription>Enter your shipping details</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="firstName">
                                First Name <span className="text-red-500">*</span>
                              </Label>
                              <Input
                                id="firstName"
                                name="firstName"
                                value={shippingDetails.firstName}
                                onChange={handleInputChange}
                                placeholder="John"
                                className={formErrors.firstName ? "border-red-500" : ""}
                              />
                              {formErrors.firstName && (
                                <p className="text-red-500 text-sm mt-1">{formErrors.firstName}</p>
                              )}
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="lastName">
                                Last Name <span className="text-red-500">*</span>
                              </Label>
                              <Input
                                id="lastName"
                                name="lastName"
                                value={shippingDetails.lastName}
                                onChange={handleInputChange}
                                placeholder="Doe"
                                className={formErrors.lastName ? "border-red-500" : ""}
                              />
                              {formErrors.lastName && (
                                <p className="text-red-500 text-sm mt-1">{formErrors.lastName}</p>
                              )}
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email">
                              Email <span className="text-red-500">*</span>
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={shippingDetails.email}
                              onChange={handleInputChange}
                              placeholder="john.doe@example.com"
                              className={formErrors.email ? "border-red-500" : ""}
                            />
                            {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input
                              id="phone"
                              name="phone"
                              value={shippingDetails.phone}
                              onChange={handleInputChange}
                              placeholder="(555) 123-4567"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="address">
                              Address <span className="text-red-500">*</span>
                            </Label>
                            <Input
                              id="address"
                              name="address"
                              value={shippingDetails.address}
                              onChange={handleInputChange}
                              placeholder="123 Main St"
                              className={formErrors.address ? "border-red-500" : ""}
                            />
                            {formErrors.address && <p className="text-red-500 text-sm mt-1">{formErrors.address}</p>}
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="city">
                                City <span className="text-red-500">*</span>
                              </Label>
                              <Input
                                id="city"
                                name="city"
                                value={shippingDetails.city}
                                onChange={handleInputChange}
                                placeholder="New York"
                                className={formErrors.city ? "border-red-500" : ""}
                              />
                              {formErrors.city && <p className="text-red-500 text-sm mt-1">{formErrors.city}</p>}
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="state">
                                State <span className="text-red-500">*</span>
                              </Label>
                              <Input
                                id="state"
                                name="state"
                                value={shippingDetails.state}
                                onChange={handleInputChange}
                                placeholder="NY"
                                className={formErrors.state ? "border-red-500" : ""}
                              />
                              {formErrors.state && <p className="text-red-500 text-sm mt-1">{formErrors.state}</p>}
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="zip">
                                ZIP Code <span className="text-red-500">*</span>
                              </Label>
                              <Input
                                id="zip"
                                name="zip"
                                value={shippingDetails.zip}
                                onChange={handleInputChange}
                                placeholder="10001"
                                className={formErrors.zip ? "border-red-500" : ""}
                              />
                              {formErrors.zip && <p className="text-red-500 text-sm mt-1">{formErrors.zip}</p>}
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="country">Country</Label>
                              <Input
                                id="country"
                                name="country"
                                value={shippingDetails.country}
                                onChange={handleInputChange}
                                placeholder="United States"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label>Shipping Method</Label>
                            <RadioGroup
                              value={shippingDetails.shippingMethod}
                              onValueChange={handleShippingMethodChange}
                            >
                              <motion.div
                                className="flex items-center justify-between border rounded-lg p-4 mb-2"
                                whileHover={{ backgroundColor: "#f9fafb" }}
                                animate={
                                  shippingDetails.shippingMethod === "standard" ? { borderColor: "#367936" } : {}
                                }
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="standard" id="standard" />
                                  <Label htmlFor="standard" className="font-normal">
                                    Standard Shipping (3-5 business days)
                                  </Label>
                                </div>
                                <span className="text-gray-500">$5.99</span>
                              </motion.div>
                              <motion.div
                                className="flex items-center justify-between border rounded-lg p-4"
                                whileHover={{ backgroundColor: "#f9fafb" }}
                                animate={shippingDetails.shippingMethod === "express" ? { borderColor: "#367936" } : {}}
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="express" id="express" />
                                  <Label htmlFor="express" className="font-normal">
                                    Express Shipping (1-2 business days)
                                  </Label>
                                </div>
                                <span className="text-gray-500">$12.99</span>
                              </motion.div>
                            </RadioGroup>
                          </div>

                          <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.02 }}>
                            <Checkbox id="sameAsBilling" />
                            <Label htmlFor="sameAsBilling" className="font-normal">
                              Billing address same as shipping
                            </Label>
                          </motion.div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            variant="outline"
                            onClick={prevStep}
                            className="border-green-600 text-green-600 hover:bg-green-50 rounded-full px-6"
                          >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Cart
                          </Button>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          animate={
                            isButtonAnimating
                              ? {
                                  scale: [1, 1.05, 1],
                                  x: [0, 5, 0],
                                }
                              : {}
                          }
                          transition={{ duration: 0.6 }}
                        >
                          <Button
                            onClick={nextStep}
                            className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8"
                          >
                            Continue to Payment
                            <motion.span
                              className="inline-block ml-2"
                              animate={{ x: isButtonAnimating ? [0, 4, 0] : 0 }}
                              transition={{ duration: 0.6 }}
                            >
                              <ArrowRight className="h-4 w-4" />
                            </motion.span>
                          </Button>
                        </motion.div>
                      </CardFooter>
                    </Card>
                  </motion.div>
                )}

                {/* Step 3: Payment Information */}
                {step === 3 && (
                  <motion.div
                    key="payment-step"
                    ref={paymentRef}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle>Payment Information</CardTitle>
                        <CardDescription>Enter your payment details</CardDescription>
                      </CardHeader>
                      <CardContent>
                        {isLoadingPaymentIntent ? (
                          <div className="flex flex-col items-center justify-center py-8">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
                            <p className="mt-4 text-gray-600">Initializing payment form...</p>
                          </div>
                        ) : clientSecret ? (
                          <StripeProvider clientSecret={clientSecret}>
                            <StripePaymentForm
                              shippingDetails={{
                                name: `${shippingDetails.firstName} ${shippingDetails.lastName}`,
                                email: shippingDetails.email,
                                address: {
                                  line1: shippingDetails.address,
                                  city: shippingDetails.city,
                                  state: shippingDetails.state,
                                  postal_code: shippingDetails.zip,
                                  country: shippingDetails.country,
                                },
                              }}
                              clientSecret={clientSecret}
                              onSuccess={handlePaymentSuccess}
                            />
                          </StripeProvider>
                        ) : (
                          <div className="text-center py-8">
                            <p className="text-red-500">Failed to initialize payment form. Please try again.</p>
                            <Button
                              onClick={() => setStep(2)}
                              className="mt-4 bg-green-600 hover:bg-green-700 text-white"
                            >
                              Go Back
                            </Button>
                          </div>
                        )}
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            variant="outline"
                            onClick={prevStep}
                            className="border-green-600 text-green-600 hover:bg-green-50 rounded-full px-6"
                          >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Shipping
                          </Button>
                        </motion.div>
                      </CardFooter>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Column - Order Summary */}
            <div>
              <div className="sticky top-24">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {items.map((item, index) => (
                          <motion.div
                            key={item.id}
                            className="flex justify-between text-sm"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                          >
                            <span className="flex-1">
                              {item.name} <span className="text-gray-500">x{item.quantity}</span>
                            </span>
                            <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                          </motion.div>
                        ))}

                        <Separator />

                        <motion.div
                          className="flex justify-between"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.4 }}
                        >
                          <span className="text-gray-600">Subtotal</span>
                          <span className="font-medium">${subtotal.toFixed(2)}</span>
                        </motion.div>

                        <motion.div
                          className="flex justify-between"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.5 }}
                        >
                          <span className="text-gray-600">Tax</span>
                          <span className="font-medium">${tax.toFixed(2)}</span>
                        </motion.div>

                        <motion.div
                          className="flex justify-between"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.6 }}
                        >
                          <span className="text-gray-600">Shipping</span>
                          <span className="font-medium">${shipping.toFixed(2)}</span>
                        </motion.div>

                        <Separator />

                        <motion.div
                          className="flex justify-between text-lg font-medium"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.7 }}
                        >
                          <span>Total</span>
                          <span className="text-green-600">${total.toFixed(2)}</span>
                        </motion.div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <div className="w-full space-y-4">
                        <motion.div className="relative" whileHover={{ scale: 1.02 }}>
                          <Input placeholder="Promo code" className="pr-24" />
                          <Button className="absolute right-0 top-0 h-full rounded-l-none bg-gray-200 hover:bg-gray-300 text-gray-800">
                            Apply
                          </Button>
                        </motion.div>

                        <motion.div
                          className="bg-green-50 p-4 rounded-lg text-sm text-gray-700"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.8 }}
                        >
                          <div className="flex items-start">
                            <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <p>
                              {subtotal >= 50
                                ? "Your order qualifies for free shipping!"
                                : `Add $${(50 - subtotal).toFixed(2)} more to qualify for free shipping.`}
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    </CardFooter>
                  </Card>

                  <div className="mt-6 text-center text-sm text-gray-500">
                    <p>
                      Need help?{" "}
                      <Link href="/contact" className="text-green-600 hover:underline">
                        Contact us
                      </Link>
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
