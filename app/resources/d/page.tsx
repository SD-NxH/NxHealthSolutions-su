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
    id: "dates",
    name: "Dates",
    image: "/glistening-fresh-dates.png",
    description: "Sweet, energy-dense fruits packed with fiber, potassium, and antioxidants",
    benefits: ["Natural energy booster", "Digestive health", "Heart health support", "Bone health"],
    link: "/resources/foods/dates",
    isNextPage: true,
  },
  {
    id: "dandelion-greens",
    name: "Dandelion Greens",
    image: "/vibrant-dandelion-harvest.png",
    description: "Nutrient-rich leafy greens with powerful detoxifying and anti-inflammatory properties",
    benefits: ["Liver support", "Digestive aid", "Anti-inflammatory", "Rich in vitamins A and K"],
    link: "/resources/foods/dandelion-greens",
    isNextPage: true,
  },
  {
    id: "dragon-fruit",
    name: "Dragon Fruit",
    image: "/dragon-fruit-vibrancy.png",
    description: "Exotic, antioxidant-rich fruit with striking appearance and mild, sweet flavor",
    benefits: ["Immune support", "Digestive health", "Rich in magnesium", "Low in calories"],
    link: "/resources/foods/dragon-fruit",
    isNextPage: true,
  },
  {
    id: "dill",
    name: "Dill",
    image: "/vibrant-dill.png",
    description: "Aromatic herb with distinctive flavor and impressive medicinal properties",
    benefits: ["Digestive aid", "Antimicrobial properties", "Anti-inflammatory", "Rich in antioxidants"],
    link: "/resources/d/dill",
    isNextPage: true,
  },
  {
    id: "durian",
    name: "Durian",
    image: "/spiky-durian.png",
    description: "Notorious 'king of fruits' with strong odor but exceptional nutritional profile",
    benefits: ["Energy booster", "Blood pressure regulation", "Fertility support", "Rich in B vitamins"],
    link: "/resources/d/durian",
    isNextPage: true,
  },
  {
    id: "daikon",
    name: "Daikon Radish",
    image: "/crisp-daikon-display.png",
    description: "Mild winter radish popular in Asian cuisine with impressive detoxifying properties",
    benefits: ["Digestive aid", "Detoxification support", "Anti-inflammatory", "Low in calories"],
    link: "/resources/foods/daikon",
    isNextPage: true,
  },
  {
    id: "damson-plums",
    name: "Damson Plums",
    image: "/bowl-of-damsons.png",
    description: "Small, tart plums packed with antioxidants and fiber for digestive health",
    benefits: ["Digestive health", "Antioxidant protection", "Anti-inflammatory", "Heart health support"],
    link: "/resources/foods/damson-plums",
    isNextPage: true,
  },
  {
    id: "dark-chocolate",
    name: "Dark Chocolate",
    image: "/dark-chocolate-still-life.png",
    description: "Antioxidant-rich treat derived from cacao with numerous health benefits when consumed in moderation",
    benefits: ["Heart health support", "Mood enhancer", "Antioxidant protection", "Brain function support"],
    link: "/resources/foods/dark-chocolate",
    isNextPage: true,
  },
  {
    id: "dulse",
    name: "Dulse",
    image: "/crimson-seaweed-harvest.png",
    description: "Mineral-rich red seaweed with a unique flavor profile and impressive iodine content",
    benefits: ["Thyroid support", "Rich in minerals", "Protein source", "Blood pressure regulation"],
    link: "/resources/foods/dulse",
    isNextPage: true,
  },
]

export default function FoodsStartingWithD() {
  const headerRef = useRef(null)
  const foodsRef = useRef(null)

  const isFoodsInView = useInView(foodsRef, { once: true, amount: 0.1 })

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section ref={headerRef} className="relative w-full py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <Link href="/resources" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Resources
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-green-800 mb-4">
              Foods Starting With "D"
            </h1>
            <p className="text-xl text-gray-600">
              Explore the healing properties and health benefits of these nutritious foods.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Foods List Section */}
      <section ref={foodsRef} className="py-16 bg-white">
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
                    <h3 className="font-medium text-gray-900 mb-2">Health Benefits:</h3>
                    <ul className="space-y-1">
                      {food.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
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
                        <Link href={food.link} className="w-full">
                          <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                            Learn More About {food.name}
                          </Button>
                        </Link>
                      ) : (
                        <a href={food.link} target="_blank" rel="noopener noreferrer" className="w-full">
                          <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                            Learn More About {food.name}
                          </Button>
                        </a>
                      )
                    ) : (
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white opacity-70" disabled>
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
