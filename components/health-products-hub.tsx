"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { motion, useInView } from "framer-motion"

const products = [
  {
    id: 1,
    name: "Premium Blender",
    description: "High-powered blender for smoothies and meal prep",
    category: "Kitchen Tools",
    image: "/premium-blender-kitchen-appliance.jpg",
    featured: true,
  },
  {
    id: 2,
    name: "Organic Quinoa",
    description: "Protein-rich ancient grain for healthy meals",
    category: "Ingredients",
    image: "/organic-quinoa-grains-bowl.jpg",
  },
  {
    id: 3,
    name: "Vitamin D3 Complex",
    description: "Essential supplement for immune support",
    category: "Supplements",
    image: "/vitamin-supplement-bottle.jpg",
  },
  {
    id: 4,
    name: "Yoga Mat Premium",
    description: "Non-slip eco-friendly exercise mat",
    category: "Fitness",
    image: "/yoga-mat-fitness-exercise.jpg",
  },
  {
    id: 5,
    name: "Foam Roller",
    description: "Muscle recovery and massage tool",
    category: "Recovery",
    image: "/foam-roller-muscle-recovery.jpg",
  },
  {
    id: 6,
    name: "Spirulina Powder",
    description: "Nutrient-dense superfood powder",
    category: "Ingredients",
    image: "/spirulina-powder-superfood.jpg",
  },
]

const categoryColors: Record<string, string> = {
  "Kitchen Tools": "bg-secondary text-secondary-foreground",
  Ingredients: "bg-brand-light text-brand-dark",
  Supplements: "bg-accent text-accent-foreground",
  Fitness: "bg-primary text-primary-foreground",
  Recovery: "bg-muted text-foreground",
}

export function HealthProductsHub() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const featuredProduct = products.find((p) => p.featured)
  const carouselProducts = products.filter((p) => !p.featured)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollLeft)
    }
  }

  return (
    <div ref={sectionRef} className="space-y-12">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h2 className="text-4xl md:text-5xl font-serif font-light text-brand-dark">
          Helpful Products for Better Health
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Tools, foods, ingredients, and deals that support a healthier lifestyle.
        </p>
      </motion.div>

      {/* Featured Product Spotlight */}
      {featuredProduct && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="relative h-80 md:h-96 overflow-hidden bg-muted">
                  <Image
                    src={featuredProduct.image || "/placeholder.svg"}
                    alt={featuredProduct.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-brand text-brand-foreground shadow-lg">Featured Deal</Badge>
                  </div>
                </div>
                <div className="p-8 space-y-6">
                  <div className="space-y-3">
                    <Badge className={categoryColors[featuredProduct.category] || "bg-secondary"}>
                      {featuredProduct.category}
                    </Badge>
                    <h3 className="text-3xl font-serif font-light text-brand-dark">{featuredProduct.name}</h3>
                    <p className="text-lg text-muted-foreground">{featuredProduct.description}</p>
                  </div>
                  <Button className="bg-brand hover:bg-brand-hover" size="lg">
                    View Deal <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Carousel Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-serif font-light text-brand-dark">More Helpful Products</h3>
          <div className="hidden md:flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="rounded-full hover:bg-brand-light"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="rounded-full hover:bg-brand-light"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {carouselProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex-none w-72 snap-start"
            >
              <Card className="overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full">
                <CardContent className="p-0">
                  <div className="relative h-56 overflow-hidden bg-muted">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="288px"
                    />
                  </div>
                  <div className="p-5 space-y-3">
                    <Badge className={categoryColors[product.category] || "bg-secondary"} variant="secondary">
                      {product.category}
                    </Badge>
                    <h4 className="font-medium text-lg text-brand-dark line-clamp-1">{product.name}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                    <Button variant="outline" className="w-full mt-2 bg-transparent" size="sm">
                      See Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Scroll indicators */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {carouselProducts.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                Math.floor(scrollPosition / 300) === index ? "w-8 bg-brand" : "w-2 bg-muted"
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center pt-8"
      >
        <Link href="/resources/deals">
          <Button size="lg" className="bg-brand hover:bg-brand-hover text-lg px-8 py-6">
            Explore Deals & Products
          </Button>
        </Link>
      </motion.div>
    </div>
  )
}
