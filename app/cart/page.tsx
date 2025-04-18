"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Plus, Minus, Trash2, ShoppingCart, ArrowLeft } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useCart } from "@/context/cart-context"
import { toast } from "@/hooks/use-toast"

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal, clearCart, itemCount } = useCart()

  const headerRef = useRef(null)
  const cartRef = useRef(null)

  const isCartInView = useInView(cartRef, { once: true, amount: 0.2 })

  const handleRemoveItem = (id: number, name: string) => {
    removeItem(id)
    toast({
      title: "Item removed",
      description: `${name} has been removed from your cart.`,
    })
  }

  const tax = subtotal * 0.08
  const shipping = subtotal > 0 ? 5.99 : 0
  const total = subtotal + tax + shipping

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section ref={headerRef} className="relative w-full py-12 bg-gradient-to-b from-green-50 to-white">
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
            <h1 className="text-3xl md:text-4xl font-serif font-light tracking-tight text-gray-900 mb-4">Your Cart</h1>
            <p className="text-gray-600">
              {itemCount === 0
                ? "Your cart is empty."
                : `You have ${itemCount} item${itemCount !== 1 ? "s" : ""} in your cart.`}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cart Content */}
      <section ref={cartRef} className="py-12 bg-white flex-grow">
        <div className="container px-4 md:px-6">
          {items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isCartInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center py-12"
            >
              <ShoppingCart className="h-24 w-24 text-gray-300 mx-auto mb-6" />
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added any items to your cart yet. Browse our menu to find delicious, nutritious
                options.
              </p>
              <Link href="/shop">
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg">
                  Browse Our Menu
                </Button>
              </Link>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Cart Items */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isCartInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="lg:col-span-2"
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-medium text-gray-900">Cart Items</h2>
                      <Button
                        variant="ghost"
                        className="text-gray-500 hover:text-red-600"
                        onClick={() => {
                          clearCart()
                          toast({
                            title: "Cart cleared",
                            description: "All items have been removed from your cart.",
                          })
                        }}
                      >
                        Clear Cart
                      </Button>
                    </div>

                    <div className="space-y-6">
                      {items.map((item) => (
                        <div key={item.id} className="flex flex-col sm:flex-row gap-4 py-4 border-b border-gray-100">
                          <div className="relative h-24 sm:h-32 w-full sm:w-32 rounded-md overflow-hidden flex-shrink-0">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:justify-between">
                              <h3 className="font-medium text-lg text-gray-900">{item.name}</h3>
                              <p className="text-green-600 font-medium mt-1 sm:mt-0">
                                ${(item.price * item.quantity).toFixed(2)}
                              </p>
                            </div>
                            <p className="text-sm text-gray-500 mt-1 mb-4">{item.description}</p>

                            <div className="flex justify-between items-center">
                              <div className="flex items-center border rounded-full">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="h-8 w-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
                                  disabled={item.quantity <= 1}
                                >
                                  <Minus className="h-3 w-3" />
                                </button>
                                <span className="w-8 text-center">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="h-8 w-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
                                >
                                  <Plus className="h-3 w-3" />
                                </button>
                              </div>

                              <button
                                onClick={() => handleRemoveItem(item.id, item.name)}
                                className="text-gray-400 hover:text-red-500 flex items-center"
                              >
                                <Trash2 className="h-4 w-4 mr-1" />
                                <span className="text-sm">Remove</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Order Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isCartInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="sticky top-24">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-medium text-gray-900 mb-6">Order Summary</h2>

                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Subtotal</span>
                          <span className="font-medium">${subtotal.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between">
                          <span className="text-gray-600">Tax (8%)</span>
                          <span className="font-medium">${tax.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between">
                          <span className="text-gray-600">Shipping</span>
                          <span className="font-medium">${shipping.toFixed(2)}</span>
                        </div>

                        <Separator />

                        <div className="flex justify-between text-lg font-medium">
                          <span>Total</span>
                          <span className="text-green-600">${total.toFixed(2)}</span>
                        </div>
                      </div>

                      <div className="mt-8 space-y-4">
                        <Link href="/checkout">
                          <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full py-6">
                            Proceed to Checkout
                          </Button>
                        </Link>

                        <Link href="/shop">
                          <Button
                            variant="outline"
                            className="w-full border-green-600 text-green-600 hover:bg-green-50 rounded-full"
                          >
                            Continue Shopping
                          </Button>
                        </Link>
                      </div>

                      <div className="mt-6 bg-green-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">Free shipping</span> on orders over $50
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
