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
    id: "banana",
    name: "Bananas",
    image: "/bunch-of-fresh-bananas.png",
    description: "Potassium-rich fruit that provides quick energy and supports heart health",
    benefits: ["Heart health support", "Digestive health", "Energy booster", "Mood enhancer"],
    link: "/resources/foods/banana",
    isNextPage: true,
  },
  {
    id: "beetroot",
    name: "Beetroot",
    image: "/vibrant-beetroot-display.png",
    description: "Vibrant root vegetable packed with nitrates that support blood flow and exercise performance",
    benefits: ["Blood pressure regulation", "Exercise performance", "Anti-inflammatory", "Detoxification support"],
    link: "/resources/foods/beetroot",
    isNextPage: true,
  },
  {
    id: "bell-pepper",
    name: "Bell Peppers",
    image: "/vibrant-pepper-pile.png",
    description: "Colorful, crunchy vegetables with more vitamin C than oranges and excellent antioxidant properties",
    benefits: ["Immune support", "Eye health", "Antioxidant protection", "Metabolic health"],
    link: "/resources/foods/bell-pepper",
    isNextPage: true,
  },
  {
    id: "blackberry",
    name: "Blackberries",
    image: "/glistening-blackberries.png",
    description: "Dark, juicy berries loaded with antioxidants and fiber for digestive and brain health",
    benefits: ["Brain health", "Digestive support", "Skin health", "Anti-aging properties"],
    link: "/resources/foods/blackberry",
    isNextPage: true,
  },
  {
    id: "blueberry",
    name: "Blueberries",
    image: "/pile-of-blueberries.png",
    description: "Small but mighty berries with one of the highest antioxidant capacities of all fruits and vegetables",
    benefits: ["Cognitive function", "Heart health", "Blood sugar regulation", "Anti-inflammatory"],
    link: "/resources/foods/blueberry",
    isNextPage: true,
  },
  {
    id: "broccoli",
    name: "Broccoli",
    image: "/fresh-broccoli.jpg",
    description:
      "Nutrient-dense cruciferous vegetable with powerful cancer-fighting compounds and detoxification support",
    benefits: ["Cancer prevention", "Detoxification", "Bone health", "Heart health"],
    link: "/resources/foods/broccoli",
    isNextPage: true,
  },
  {
    id: "brussels-sprouts",
    name: "Brussels Sprouts",
    image: "/vibrant-brussels-sprouts.png",
    description: "Mini cabbage-like vegetables packed with fiber, vitamins, and compounds that support cellular health",
    benefits: ["Digestive health", "Anti-inflammatory", "Vitamin K source", "Detoxification support"],
    link: "/resources/foods/brussels-sprouts",
    isNextPage: true,
  },
  {
    id: "brazil-nuts",
    name: "Brazil Nuts",
    image: "/pile-of-brazil-nuts.png",
    description: "Selenium powerhouses that support thyroid function and immune health with just one or two nuts daily",
    benefits: ["Thyroid health", "Immune function", "Brain health", "Skin health"],
    link: "/resources/foods/brazil-nuts",
    isNextPage: true,
  },
  {
    id: "buckwheat",
    name: "Buckwheat",
    image: "/pile-of-buckwheat-groats.png",
    description:
      "Gluten-free pseudo-grain rich in resistant starch and compounds that support heart and blood vessel health",
    benefits: ["Heart health", "Blood sugar control", "Digestive health", "Gluten-free alternative"],
    link: "/resources/foods/buckwheat",
    isNextPage: true,
  },
  {
    id: "butternut-squash",
    name: "Butternut Squash",
    image: "/vibrant-butternut-display.png",
    description: "Sweet, nutty winter squash loaded with beta-carotene for eye health and immune support",
    benefits: ["Eye health", "Immune support", "Digestive health", "Anti-inflammatory"],
    link: "/resources/foods/butternut-squash",
    isNextPage: true,
  },
]

export default function FoodsStartingWithB() {
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
              Foods Starting With "B"
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
                        <Button
                          className="w-full bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => (window.location.href = food.link)}
                        >
                          Learn More About {food.name}
                        </Button>
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
