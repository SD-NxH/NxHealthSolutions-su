"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, ExternalLink, Search } from "lucide-react"
import { motion } from "framer-motion"

// Sample product data - to be replaced with real deals
const allProducts = [
  {
    id: 1,
    name: "Premium Blender Pro 3000",
    description: "High-powered 1500W blender perfect for smoothies, soups, and nut butters",
    category: "Kitchen Tools",
    price: 149.99,
    image: "/premium-blender-kitchen-appliance.jpg",
    featured: true,
  },
  {
    id: 2,
    name: "Organic Quinoa 5lb Bag",
    description: "Protein-rich ancient grain, perfect for salads and meal prep",
    category: "Ingredients",
    price: 24.99,
    image: "/organic-quinoa-grains.jpg",
  },
  {
    id: 3,
    name: "Vitamin D3 + K2 Complex",
    description: "Premium supplement for bone and immune health (60 capsules)",
    category: "Supplements",
    price: 29.99,
    image: "/vitamin-supplement-bottle.jpg",
  },
  {
    id: 4,
    name: "Eco Yoga Mat Premium",
    description: "6mm non-slip, biodegradable TPE mat with alignment lines",
    category: "Fitness",
    price: 59.99,
    image: "/yoga-mat-fitness.jpg",
  },
  {
    id: 5,
    name: "Massage Foam Roller",
    description: "High-density foam roller for deep tissue massage and recovery",
    category: "Recovery",
    price: 34.99,
    image: "/foam-roller-muscle-recovery.jpg",
  },
  {
    id: 6,
    name: "Organic Spirulina Powder",
    description: "Pure Hawaiian spirulina superfood (16oz)",
    category: "Ingredients",
    price: 39.99,
    image: "/spirulina-powder.jpg",
  },
  {
    id: 7,
    name: "Food Storage Container Set",
    description: "12-piece glass container set with BPA-free lids",
    category: "Kitchen Tools",
    price: 44.99,
    image: "/glass-food-storage-containers.jpg",
  },
  {
    id: 8,
    name: "Resistance Bands Set",
    description: "5-band set with different resistance levels and door anchor",
    category: "Fitness",
    price: 27.99,
    image: "/resistance-exercise-bands.jpg",
  },
  {
    id: 9,
    name: "Organic Chia Seeds 2lb",
    description: "Premium organic chia seeds rich in omega-3 and fiber",
    category: "Ingredients",
    price: 19.99,
    image: "/organic-chia-seeds.jpg",
  },
]

const categoryColors: Record<string, string> = {
  "Kitchen Tools": "bg-secondary text-secondary-foreground",
  Ingredients: "bg-brand-light text-brand-dark",
  Supplements: "bg-accent text-accent-foreground",
  Fitness: "bg-primary text-primary-foreground",
  Recovery: "bg-muted text-foreground",
}

export default function DealsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("featured")

  // Filter and sort products
  const filteredProducts = allProducts
    .filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price
      if (sortBy === "price-high") return b.price - a.price
      if (sortBy === "featured") return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
      return 0
    })

  const categories = ["all", ...Array.from(new Set(allProducts.map((p) => p.category)))]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-lighter to-emerald-50 py-16">
        <div className="container px-4 md:px-6">
          <Link
            href="/resources"
            className="inline-flex items-center text-brand hover:text-brand-hover mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Resources
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-light text-brand-dark mb-4">
              Deals & Helpful Products
            </h1>
            <p className="text-lg text-muted-foreground">
              Curated selection of health-supporting products, quality ingredients, and fitness tools to help you on
              your wellness journey. These are products and deals Coach J recommends and uses personally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-card border-b sticky top-0 z-10 shadow-sm">
        <div className="container px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col">
                  <CardContent className="p-0 flex-1 flex flex-col">
                    <div className="relative h-64 overflow-hidden bg-muted">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {product.featured && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-brand text-brand-foreground shadow-lg">Featured</Badge>
                        </div>
                      )}
                    </div>
                    <div className="p-6 space-y-4 flex-1 flex flex-col">
                      <div className="space-y-3 flex-1">
                        <Badge className={categoryColors[product.category] || "bg-secondary"} variant="secondary">
                          {product.category}
                        </Badge>
                        <h3 className="font-medium text-xl text-brand-dark">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">{product.description}</p>
                      </div>
                      <div className="space-y-3 pt-4 border-t">
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-brand-dark">${product.price}</span>
                        </div>
                        <Button className="w-full bg-brand hover:bg-brand-hover">
                          View Deal <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
