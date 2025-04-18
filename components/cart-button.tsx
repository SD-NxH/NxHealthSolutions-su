"use client"

import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CartButton() {
  const { itemCount } = useCart()

  return (
    <Link href="/cart">
      <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full">
        View Cart {itemCount > 0 && `(${itemCount} ${itemCount === 1 ? "item" : "items"})`}
      </Button>
    </Link>
  )
}
