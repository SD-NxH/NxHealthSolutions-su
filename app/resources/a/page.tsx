"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"
import { motion, useInView } from "framer-motion"

const foods = [
  {
    id: "almond",
    name: "Almonds",
    image: "/fresh-almonds.jpg",
    description: "Rich in healthy fats, protein, and essential nutrients",
    benefits: ["Heart health support", "Blood sugar regulation", "Weight management", "Brain function support"],
    link: "/resources/foods/almond",
    isNextPage: true,
  },
  {
    id: "apple",
    name: "Apples",
    image: "/basket-of-organic-apples.png",
    description: "High in fiber, vitamin C, and various antioxidants",
    benefits: ["Digestive health", "Immune system support", "Heart health", "Blood sugar regulation"],
    link: "/resources/foods/apple",
    isNextPage: true,
  },
  {
    id: "apricot",
    name: "Apricots",
    image: "/fresh-apricots.jpg",
    description: "Rich in vitamin A, vitamin C, and antioxidants",
    benefits: ["Vision health", "Immune support", "Skin health", "Digestive health"],
    link: "/resources/foods/apricot",
    isNextPage: true,
  },
  {
    id: "artichoke",
    name: "Artichokes",
    image: "/fresh-artichokes.jpg",
    description: "High in fiber, antioxidants, and various nutrients",
    benefits: ["Digestive health", "Liver support", "Cholesterol management", "Antioxidant protection"],
    link: "/resources/foods/artichoke",
    isNextPage: true,
  },
  {
    id: "asparagus",
    name: "Asparagus",
    image: "/fresh-asparagus.jpg",
    description: "Low in calories and high in essential vitamins and minerals",
    benefits: ["Anti-inflammatory properties", "Digestive health", "Blood pressure regulation", "Antioxidant support"],
    link: "/resources/foods/asparagus",
    isNextPage: true,
  },
  {
    id: "avocado",
    name: "Avocados",
    image: "/fresh-avocados.jpg",
    description: "Packed with healthy fats, fiber, and essential nutrients",
    benefits: ["Heart health", "Weight management", "Skin health", "Nutrient absorption"],
    link: "/resources/foods/avocado",
    isNextPage: true,
  },
]

export default function FoodsStartingWithA() {
  const headerRef = useRef(null)
  const foodsRef = useRef(null)

  const isFoodsInView = useInView(foodsRef, { once: true, amount: 0.1 })

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section ref={headerRef} className="relative w-full py-16 bg-gradient-to-b from-brand-lighter to-background">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <Link href="/resources" className="inline-flex items-center text-brand hover:text-brand-hover mb-6">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Resources
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-brand-dark mb-4">
              Foods Starting With "A"
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore the healing properties and health benefits of these nutritious foods.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Foods List Section */}
      <section ref={foodsRef} className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {foods.map((food, index) => (
              <motion.div
                key={food.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isFoodsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full">
                  <div className="relative h-48">
                    <Image src={food.image || "/placeholder.svg"} alt={food.name} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif">{food.name}</CardTitle>
                    <CardDescription>{food.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-medium text-foreground mb-2">Health Benefits:</h3>
                    <ul className="space-y-1">
                      {food.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-block h-5 w-5 rounded-full bg-brand-light text-brand flex-shrink-0 mr-2 text-center text-sm">
                            ✓
                          </span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    {food.link ? (
                      food.isNextPage ? (
                        <Button
                          className="w-full bg-brand hover:bg-brand-hover text-brand-foreground"
                          onClick={() => (window.location.href = food.link)}
                        >
                          Learn More About {food.name}
                        </Button>
                      ) : (
                        <a href={food.link} target="_blank" rel="noopener noreferrer" className="w-full">
                          <Button className="w-full bg-brand hover:bg-brand-hover text-brand-foreground">
                            Learn More About {food.name}
                          </Button>
                        </a>
                      )
                    ) : (
                      <Button
                        className="w-full bg-brand hover:bg-brand-hover text-brand-foreground opacity-70"
                        disabled
                      >
                        Coming Soon
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
