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
    id: "cabbage",
    name: "Cabbage",
    image: "/vibrant-cabbage.png",
    description: "Cruciferous vegetable packed with vitamin K, vitamin C, and fiber that supports digestive health",
    benefits: ["Digestive health", "Anti-inflammatory", "Immune support", "Heart health"],
    link: "/resources/foods/cabbage",
    isNextPage: true,
  },
  {
    id: "carrots",
    name: "Carrots",
    image: "/vibrant-orange-carrots.png",
    description: "Root vegetable exceptionally rich in beta-carotene, fiber, vitamin K, and potassium",
    benefits: ["Eye health", "Skin health", "Cancer prevention", "Heart health"],
    link: "/resources/foods/carrots",
    isNextPage: true,
  },
  {
    id: "cauliflower",
    name: "Cauliflower",
    image: "/vibrant-cauliflower.png",
    description:
      "Versatile cruciferous vegetable high in choline, fiber, and antioxidants with anti-inflammatory properties",
    benefits: ["Brain health", "Digestive health", "Anti-inflammatory", "Cancer prevention"],
    link: "/resources/foods/cauliflower",
    isNextPage: true,
  },
  {
    id: "celery",
    name: "Celery",
    image: "/crisp-celery.png",
    description: "Crunchy vegetable with high water content, antioxidants, and compounds that may reduce inflammation",
    benefits: ["Blood pressure regulation", "Anti-inflammatory", "Digestive health", "Hydration"],
    link: "/resources/foods/celery",
    isNextPage: true,
  },
  {
    id: "chia-seeds",
    name: "Chia Seeds",
    image: "/chia-seed-bowl.png",
    description: "Tiny seeds packed with omega-3 fatty acids, fiber, protein, and various micronutrients",
    benefits: ["Heart health", "Blood sugar control", "Digestive health", "Bone health"],
    link: "/resources/foods/chia-seeds",
    isNextPage: true,
  },
  {
    id: "chickpeas",
    name: "Chickpeas",
    image: "/placeholder.svg?height=300&width=300&query=chickpeas garbanzo beans",
    description: "Versatile legume rich in plant protein, fiber, and minerals that support gut and heart health",
    benefits: ["Protein source", "Blood sugar regulation", "Digestive health", "Weight management"],
    link: "/resources/foods/chickpeas",
    isNextPage: true,
  },
  {
    id: "cinnamon",
    name: "Cinnamon",
    image: "/placeholder.svg?height=300&width=300&query=cinnamon sticks and powder",
    description:
      "Aromatic spice with powerful antioxidant and anti-inflammatory properties that may help regulate blood sugar",
    benefits: ["Blood sugar control", "Anti-inflammatory", "Heart health", "Brain function"],
    link: "/resources/foods/cinnamon",
    isNextPage: true,
  },
  {
    id: "coconut",
    name: "Coconut",
    image: "/placeholder.svg?height=300&width=300&query=fresh coconut halves",
    description: "Tropical fruit rich in medium-chain triglycerides, fiber, and minerals with antimicrobial properties",
    benefits: ["Energy boost", "Heart health", "Brain function", "Immune support"],
    link: "/resources/foods/coconut",
    isNextPage: true,
  },
  {
    id: "collard-greens",
    name: "Collard Greens",
    image: "/placeholder.svg?height=300&width=300&query=fresh collard greens",
    description:
      "Leafy green vegetable exceptionally high in vitamin K, calcium, and antioxidants that support bone health",
    benefits: ["Bone health", "Heart health", "Cancer prevention", "Digestive health"],
    link: "/resources/foods/collard-greens",
    isNextPage: true,
  },
  {
    id: "cranberries",
    name: "Cranberries",
    image: "/placeholder.svg?height=300&width=300&query=fresh red cranberries",
    description:
      "Tart berries rich in proanthocyanidins that help prevent urinary tract infections and support oral health",
    benefits: ["Urinary tract health", "Dental health", "Heart health", "Anti-inflammatory"],
    link: "/resources/foods/cranberries",
    isNextPage: true,
  },
  {
    id: "cucumber",
    name: "Cucumber",
    image: "/placeholder.svg?height=300&width=300&query=fresh green cucumbers",
    description: "Refreshing vegetable with high water content, antioxidants, and compounds that support hydration",
    benefits: ["Hydration", "Skin health", "Anti-inflammatory", "Digestive health"],
    link: "/resources/foods/cucumber",
    isNextPage: true,
  },
  {
    id: "cumin",
    name: "Cumin",
    image: "/placeholder.svg?height=300&width=300&query=cumin seeds and powder",
    description: "Aromatic spice rich in iron, antioxidants, and compounds that aid digestion and immune function",
    benefits: ["Digestive health", "Iron source", "Anti-inflammatory", "Blood sugar control"],
    link: "/resources/foods/cumin",
    isNextPage: true,
  },
]

export default function FoodsStartingWithC() {
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
              Foods Starting With "C"
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
