import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import CartButton from "@/components/cart-button"

// Sample product data based on the menu.html page
const products = [
  {
    id: 1,
    name: "Protein Smoothie",
    description: "High-protein smoothie with fruits and plant-based protein.",
    price: 8.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Smoothies",
  },
  {
    id: 2,
    name: "Green Detox",
    description: "Cleansing smoothie with kale, spinach, apple, and ginger.",
    price: 9.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Smoothies",
  },
  {
    id: 3,
    name: "Berry Blast",
    description: "Antioxidant-rich smoothie with mixed berries and chia seeds.",
    price: 8.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Smoothies",
  },
  {
    id: 4,
    name: "Avocado Toast",
    description: "Whole grain toast with avocado, microgreens, and seeds.",
    price: 10.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Meals",
  },
  {
    id: 5,
    name: "Quinoa Bowl",
    description: "Protein-packed bowl with quinoa, roasted vegetables, and tahini dressing.",
    price: 12.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Meals",
  },
  {
    id: 6,
    name: "Superfood Salad",
    description: "Nutrient-dense salad with kale, berries, nuts, and lemon vinaigrette.",
    price: 11.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Meals",
  },
  {
    id: 7,
    name: "Wellness Shot",
    description: "Immunity-boosting shot with ginger, turmeric, and lemon.",
    price: 4.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Drinks",
  },
  {
    id: 8,
    name: "Kombucha",
    description: "Probiotic-rich fermented tea for gut health.",
    price: 5.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Drinks",
  },
  {
    id: 9,
    name: "Protein Bites",
    description: "Energy-boosting snack with nuts, seeds, and plant protein.",
    price: 6.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Snacks",
  },
  {
    id: 10,
    name: "Peanut Butter Cup",
    description: "Decadent chocolate blended with organic peanut butter for a guilt-free treat.",
    price: 9.99,
    image: "/peanut-butter-cup-spread-jar.png",
    category: "Nut Butters",
  },
  {
    id: 11,
    name: "Pumpkin Pie",
    description: "Seasonal favorite with real pumpkin, pecans and warm spices.",
    price: 12.99,
    image: "/spiced-pumpkin-swirl.png",
    category: "Nut Butters",
  },
  {
    id: 12,
    name: "Cinnamon Roll",
    description: "Creamy almond base with swirls of cinnamon and vanilla.",
    price: 11.99,
    image: "/swirled-cinnamon-nut-butter.png",
    category: "Nut Butters",
  },
  {
    id: 13,
    name: "Hazel Nut Butter",
    description: "Rich, pure hazelnut butter made from roasted organic hazelnuts.",
    price: 13.99,
    image: "/creamy-hazelnut-spread.png",
    category: "Nut Butters",
  },
  {
    id: 14,
    name: "Choco-Hazel Nut",
    description: "Chocolate-infused hazelnut butter for a healthier dessert alternative.",
    price: 14.99,
    image: "/decadent-chocolate-hazelnut.png",
    category: "Nut Butters",
  },
  {
    id: 15,
    name: "Macadamia Butter",
    description: "Ultra-creamy butter from premium macadamia nuts with a hint of sea salt.",
    price: 16.99,
    image: "/placeholder.svg?height=300&width=300&query=macadamia nut butter",
    category: "Nut Butters",
  },
  {
    id: 16,
    name: "Cashew Butter",
    description: "Smooth, naturally sweet cashew butter perfect for spreading or recipes.",
    price: 12.99,
    image: "/placeholder.svg?height=300&width=300&query=cashew butter jar",
    category: "Nut Butters",
  },
  {
    id: 17,
    name: "Almond Butter",
    description: "Classic stone-ground almond butter with no additives or sugar.",
    price: 11.99,
    image: "/placeholder.svg?height=300&width=300&query=almond butter",
    category: "Nut Butters",
  },
  {
    id: 18,
    name: "Pecan Butter",
    description: "Luxurious pecan butter with a naturally sweet, buttery flavor.",
    price: 14.99,
    image: "/placeholder.svg?height=300&width=300&query=pecan butter jar",
    category: "Nut Butters",
  },
  {
    id: 19,
    name: "Pecan Pie",
    description: "Dessert-inspired pecan butter with maple and vanilla notes.",
    price: 13.99,
    image: "/placeholder.svg?height=300&width=300&query=pecan pie nut butter",
    category: "Nut Butters",
  },
  {
    id: 20,
    name: "Pumpkin Seed Butter",
    description: "Nutrient-rich butter made from organic pumpkin seeds.",
    price: 12.99,
    image: "/placeholder.svg?height=300&width=300&query=pumpkin seed butter",
    category: "Nut Butters",
  },
  {
    id: 21,
    name: "Super Seed Butter",
    description: "Blend of nutritious seeds for a protein-packed spread.",
    price: 14.99,
    image: "/placeholder.svg?height=300&width=300&query=mixed seed butter",
    category: "Nut Butters",
  },
  {
    id: 22,
    name: "Eric's Choice",
    description: "Our founder's special blend of nuts, seeds and superfoods. Staff favorite!",
    price: 17.99,
    image: "/placeholder.svg?height=300&width=300&query=premium artisanal nut butter",
    category: "Nut Butters",
    featured: true,
  },
]

// Group products by category
const groupedProducts = products.reduce(
  (acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = []
    }
    acc[product.category].push(product)
    return acc
  },
  {} as Record<string, typeof products>,
)

export default function ShopPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-green-800 mb-4">Our Menu</h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover our nutritious and delicious offerings, carefully crafted to support your health journey.
            </p>
            <CartButton />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
            <div key={category} className="mb-16">
              <h2 className="text-2xl md:text-3xl font-serif font-light text-gray-900 mb-8 pb-2 border-b">
                {category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {categoryProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    className={product.featured ? "ring-2 ring-green-400 shadow-lg" : ""}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nutrition Information */}
      <section className="py-16 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6">Nutrition You Can Trust</h2>
            <p className="text-xl text-gray-600 mb-8">
              All our menu items are made with whole, natural ingredients. We prioritize organic produce and sustainable
              sourcing whenever possible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                <p className="text-gray-700">Natural Ingredients</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">0</div>
                <p className="text-gray-700">Artificial Preservatives</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">80%</div>
                <p className="text-gray-700">Organic Ingredients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Information */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6">How to Order</h2>
            <p className="text-xl text-gray-600 mb-12">
              Enjoy our nutritious menu items with convenient ordering options.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-green-600">
                  1
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Browse Our Menu</h3>
                <p className="text-gray-600 text-center">Explore our selection of nutritious options.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-green-600">
                  2
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Place Your Order</h3>
                <p className="text-gray-600 text-center">Add items to your cart and checkout securely.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-green-600">
                  3
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Enjoy Your Meal</h3>
                <p className="text-gray-600 text-center">Pick up at our location or select delivery.</p>
              </div>
            </div>
            <div className="mt-12">
              <Link href="/cart">
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg">
                  Start Your Order
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
