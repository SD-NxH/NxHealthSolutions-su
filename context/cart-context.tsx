"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

export interface CartItem {
  id: number
  name: string
  description: string
  price: number
  image: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: Omit<CartItem, "quantity">) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  itemCount: number
  subtotal: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [mounted, setMounted] = useState(false)

  // Calculate total number of items in cart
  const itemCount = items.reduce((count, item) => count + item.quantity, 0)

  // Calculate subtotal
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)

  // Load cart from localStorage on mount
  useEffect(() => {
    setMounted(true)
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      try {
        setItems(JSON.parse(storedCart))
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error)
        localStorage.removeItem("cart")
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("cart", JSON.stringify(items))
    }
  }, [items, mounted])

  // Add an item to the cart
  const addItem = (newItem: Omit<CartItem, "quantity">) => {
    setItems((currentItems) => {
      const existingItemIndex = currentItems.findIndex((item) => item.id === newItem.id)

      if (existingItemIndex > -1) {
        // Item exists, increment quantity
        const updatedItems = [...currentItems]
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        }
        return updatedItems
      } else {
        // Item doesn't exist, add it with quantity 1
        return [...currentItems, { ...newItem, quantity: 1 }]
      }
    })
  }

  // Remove an item from the cart
  const removeItem = (id: number) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id))
  }

  // Update the quantity of an item
  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return

    setItems((currentItems) => currentItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  // Clear the entire cart
  const clearCart = () => {
    setItems([])
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
