"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Plus, Minus } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { toast } from "@/hooks/use-toast"

interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
}

interface ProductCardProps {
  product: Product
  className?: string
}

export default function ProductCard({ product, className = "" }: ProductCardProps) {
  const { items, addItem, updateQuantity } = useCart()
  const existingItem = items.find((item) => item.id === product.id)
  const quantity = existingItem?.quantity || 0

  const handleAddToCart = () => {
    addItem(product)
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const incrementQuantity = () => {
    updateQuantity(product.id, quantity + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 0) {
      updateQuantity(product.id, quantity - 1)
    }
  }

  return (
    <div
      className={`group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${className}`}
    >
      <div className="relative h-48 w-full bg-gray-100">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-medium text-gray-900 mb-1">{product.name}</h3>
        <p className="text-green-600 font-medium mb-3">${product.price.toFixed(2)}</p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

        {quantity === 0 ? (
          <Button
            onClick={handleAddToCart}
            className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center gap-2"
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
        ) : (
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-full border-green-600 text-green-600"
              onClick={decrementQuantity}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="font-medium">{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-full border-green-600 text-green-600"
              onClick={incrementQuantity}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
