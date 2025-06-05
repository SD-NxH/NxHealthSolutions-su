"use client"

import type React from "react"

import { useState } from "react"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { useCart } from "@/context/cart-context"
import Link from "next/link"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { Plus, Minus, Trash2 } from "lucide-react"

export default function ShoppingCartButton() {
  const { items, itemCount, subtotal, updateQuantity, removeItem } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  const handleCartClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsOpen(true)
  }

  return (
    <>
      <button
        onClick={handleCartClick}
        className="relative inline-flex items-center justify-center h-10 w-10 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground"
        aria-label="Open Shopping Cart"
        type="button"
      >
        <ShoppingCart className="h-5 w-5" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {itemCount}
          </span>
        )}
        <span className="sr-only">Shopping Cart</span>
      </button>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="w-full sm:max-w-md">
          <SheetHeader>
            <SheetTitle>Your Cart</SheetTitle>
          </SheetHeader>

          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[70vh]">
              <ShoppingCart className="h-16 w-16 text-gray-300 mb-4" />
              <p className="text-gray-500 mb-6">Your cart is empty</p>
              <Link href="/shop" onClick={() => setIsOpen(false)}>
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full">Browse Menu</Button>
              </Link>
            </div>
          ) : (
            <div className="mt-6 flex flex-col h-[calc(100vh-10rem)]">
              <div className="flex-1 overflow-y-auto pr-2">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 py-3">
                      <div className="relative h-20 w-20 rounded-md overflow-hidden flex-shrink-0">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-500 line-clamp-1">{item.description}</p>
                        <p className="text-green-600 font-medium mt-1">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <button
                          onClick={(e) => {
                            e.preventDefault()
                            removeItem(item.id)
                          }}
                          className="text-gray-400 hover:text-red-500"
                          type="button"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                        <div className="flex items-center border rounded-full">
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              updateQuantity(item.id, item.quantity - 1)
                            }}
                            className="h-8 w-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
                            type="button"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              updateQuantity(item.id, item.quantity + 1)
                            }}
                            className="h-8 w-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
                            type="button"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-6 border-t">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-medium">
                    <span>Total</span>
                    <span className="text-green-600">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Link href="/cart" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full">
                        View Cart
                      </Button>
                    </Link>
                    <Link href="/checkout" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-green-800 hover:bg-green-900 text-white rounded-full">
                        Checkout
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </>
  )
}
