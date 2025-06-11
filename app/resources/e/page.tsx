"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Leaf, Heart, Brain, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const foods = [
  {
    name: "Elderberry",
    description: "Dark purple berries packed with antioxidants and immune-boosting properties.",
    image: "/elderberry.jpg",
    benefits: ["Immune Support", "Antioxidant Rich", "Anti-inflammatory"],
    category: "Berry",
    href: "/resources/foods/elderberry",
  },
  {
    name: "Eggplant",
    description: "Versatile purple vegetable rich in fiber and antioxidants, perfect for Mediterranean dishes.",
    image: "/placeholder.svg?height=200&width=300",
    benefits: ["Heart Health", "Fiber Rich", "Low Calorie"],
    category: "Vegetable",
    href: "/resources/foods/eggplant",
  },
  {
    name: "Endive",
    description: "Crisp, slightly bitter leafy green that's excellent for salads and appetizers.",
    image: "/placeholder.svg?height=200&width=300",
    benefits: ["Digestive Health", "Vitamin K", "Low Calorie"],
    category: "Leafy Green",
    href: "/resources/foods/endive",
  },
  {
    name: "Escarole",
    description: "Broad-leafed endive with a mild, slightly bitter flavor, perfect for soups and salads.",
    image: "/placeholder.svg?height=200&width=300",
    benefits: ["Vitamin A", "Folate", "Fiber"],
    category: "Leafy Green",
    href: "/resources/foods/escarole",
  },
  {
    name: "Epazote",
    description: "Pungent Mexican herb traditionally used with beans to aid digestion.",
    image: "/placeholder.svg?height=200&width=300",
    benefits: ["Digestive Aid", "Traditional Medicine", "Antimicrobial"],
    category: "Herb",
    href: "/resources/foods/epazote",
  },
  {
    name: "Einkorn",
    description: "Ancient wheat variety with superior nutrition and easier digestibility than modern wheat.",
    image: "/placeholder.svg?height=200&width=300",
    benefits: ["Ancient Grain", "Protein Rich", "Easier Digestion"],
    category: "Grain",
    href: "/resources/foods/einkorn",
  },
  {
    name: "Emmer",
    description: "Nutritious ancient wheat with a nutty flavor and excellent protein content.",
    image: "/placeholder.svg?height=200&width=300",
    benefits: ["High Protein", "Fiber Rich", "Ancient Grain"],
    category: "Grain",
    href: "/resources/foods/emmer",
  },
]

const categoryColors = {
  Berry: "bg-purple-100 text-purple-800",
  Vegetable: "bg-green-100 text-green-800",
  "Leafy Green": "bg-emerald-100 text-emerald-800",
  Herb: "bg-lime-100 text-lime-800",
  Grain: "bg-amber-100 text-amber-800",
}

const benefitIcons = {
  "Immune Support": Shield,
  "Heart Health": Heart,
  "Digestive Health": Leaf,
  "Brain Health": Brain,
  "Antioxidant Rich": Shield,
  "Anti-inflammatory": Heart,
  "Fiber Rich": Leaf,
  "Low Calorie": Leaf,
  "Vitamin K": Shield,
  "Vitamin A": Shield,
  Folate: Heart,
  Fiber: Leaf,
  "Digestive Aid": Leaf,
  "Traditional Medicine": Leaf,
  Antimicrobial: Shield,
  "Ancient Grain": Leaf,
  "Protein Rich": Heart,
  "Easier Digestion": Leaf,
  "High Protein": Heart,
}

export default function FoodsStartingWithE() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Link
            href="/resources"
            className="inline-flex items-center text-green-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Resources
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-serif font-light mb-4">Foods Starting with E</h1>
            <p className="text-xl text-green-100 max-w-2xl">
              Explore nutritious foods beginning with the letter E, from antioxidant-rich elderberries to ancient grains
              like einkorn and emmer.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Foods Grid */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {foods.map((food, index) => (
            <motion.div
              key={food.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
            >
              {food.name === "Elderberry" ? (
                <Link href="/resources/foods/elderberry" className="block h-full">
                  <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-green-100 cursor-pointer">
                    <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                      <Image
                        src={food.image || "/placeholder.svg"}
                        alt={food.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className={categoryColors[food.category] || "bg-gray-100 text-gray-800"}>
                          {food.category}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                        {food.name}
                      </CardTitle>
                      <CardDescription className="text-gray-600 line-clamp-2">{food.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Health Benefits:</h4>
                        <div className="flex flex-wrap gap-2">
                          {food.benefits.map((benefit) => {
                            const IconComponent = benefitIcons[benefit] || Leaf
                            return (
                              <div
                                key={benefit}
                                className="flex items-center gap-1 text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full"
                              >
                                <IconComponent className="h-3 w-3" />
                                {benefit}
                              </div>
                            )
                          })}
                        </div>
                        <div className="pt-4">
                          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors text-sm font-medium">
                            Learn More About {food.name}
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ) : food.name === "Eggplant" ? (
                <Link href="/resources/foods/eggplant" className="block h-full">
                  <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-green-100 cursor-pointer">
                    <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                      <Image
                        src={food.image || "/placeholder.svg"}
                        alt={food.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className={categoryColors[food.category] || "bg-gray-100 text-gray-800"}>
                          {food.category}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                        {food.name}
                      </CardTitle>
                      <CardDescription className="text-gray-600 line-clamp-2">{food.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Health Benefits:</h4>
                        <div className="flex flex-wrap gap-2">
                          {food.benefits.map((benefit) => {
                            const IconComponent = benefitIcons[benefit] || Leaf
                            return (
                              <div
                                key={benefit}
                                className="flex items-center gap-1 text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full"
                              >
                                <IconComponent className="h-3 w-3" />
                                {benefit}
                              </div>
                            )
                          })}
                        </div>
                        <div className="pt-4">
                          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors text-sm font-medium">
                            Learn More About {food.name}
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ) : food.name === "Endive" ? (
                <Link href="/resources/foods/endive" className="block h-full">
                  <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-green-100 cursor-pointer">
                    <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                      <Image
                        src={food.image || "/placeholder.svg"}
                        alt={food.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className={categoryColors[food.category] || "bg-gray-100 text-gray-800"}>
                          {food.category}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                        {food.name}
                      </CardTitle>
                      <CardDescription className="text-gray-600 line-clamp-2">{food.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Health Benefits:</h4>
                        <div className="flex flex-wrap gap-2">
                          {food.benefits.map((benefit) => {
                            const IconComponent = benefitIcons[benefit] || Leaf
                            return (
                              <div
                                key={benefit}
                                className="flex items-center gap-1 text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full"
                              >
                                <IconComponent className="h-3 w-3" />
                                {benefit}
                              </div>
                            )
                          })}
                        </div>
                        <div className="pt-4">
                          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors text-sm font-medium">
                            Learn More About {food.name}
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ) : food.name === "Escarole" ? (
                <Link href="/resources/foods/escarole" className="block h-full">
                  <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-green-100 cursor-pointer">
                    <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                      <Image
                        src={food.image || "/placeholder.svg"}
                        alt={food.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className={categoryColors[food.category] || "bg-gray-100 text-gray-800"}>
                          {food.category}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                        {food.name}
                      </CardTitle>
                      <CardDescription className="text-gray-600 line-clamp-2">{food.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Health Benefits:</h4>
                        <div className="flex flex-wrap gap-2">
                          {food.benefits.map((benefit) => {
                            const IconComponent = benefitIcons[benefit] || Leaf
                            return (
                              <div
                                key={benefit}
                                className="flex items-center gap-1 text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full"
                              >
                                <IconComponent className="h-3 w-3" />
                                {benefit}
                              </div>
                            )
                          })}
                        </div>
                        <div className="pt-4">
                          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors text-sm font-medium">
                            Learn More About {food.name}
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ) : food.name === "Einkorn" ? (
                <Link href="/resources/foods/einkorn" className="block h-full">
                  <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-green-100 cursor-pointer">
                    <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                      <Image
                        src={food.image || "/placeholder.svg"}
                        alt={food.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className={categoryColors[food.category] || "bg-gray-100 text-gray-800"}>
                          {food.category}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                        {food.name}
                      </CardTitle>
                      <CardDescription className="text-gray-600 line-clamp-2">{food.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Health Benefits:</h4>
                        <div className="flex flex-wrap gap-2">
                          {food.benefits.map((benefit) => {
                            const IconComponent = benefitIcons[benefit] || Leaf
                            return (
                              <div
                                key={benefit}
                                className="flex items-center gap-1 text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full"
                              >
                                <IconComponent className="h-3 w-3" />
                                {benefit}
                              </div>
                            )
                          })}
                        </div>
                        <div className="pt-4">
                          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors text-sm font-medium">
                            Learn More About {food.name}
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ) : (
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-green-100">
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={food.image || "/placeholder.svg"}
                      alt={food.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className={categoryColors[food.category] || "bg-gray-100 text-gray-800"}>
                        {food.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                      {food.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600 line-clamp-2">{food.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Health Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {food.benefits.map((benefit) => {
                          const IconComponent = benefitIcons[benefit] || Leaf
                          return (
                            <div
                              key={benefit}
                              className="flex items-center gap-1 text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full"
                            >
                              <IconComponent className="h-3 w-3" />
                              {benefit}
                            </div>
                          )
                        })}
                      </div>
                      <div className="pt-4">
                        {food.name === "Eggplant" ? (
                          <Link href="/resources/foods/eggplant">
                            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors text-sm font-medium">
                              Learn More About {food.name}
                            </button>
                          </Link>
                        ) : food.name === "Endive" ? (
                          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors text-sm font-medium">
                            Learn More About {food.name}
                          </button>
                        ) : food.name === "Escarole" ? (
                          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors text-sm font-medium">
                            Learn More About {food.name}
                          </button>
                        ) : food.name === "Epazote" ? (
                          <Link href="/resources/foods/epazote">
                            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors text-sm font-medium">
                              Learn More About {food.name}
                            </button>
                          </Link>
                        ) : food.name === "Einkorn" ? (
                          <Link href="/resources/foods/einkorn">
                            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors text-sm font-medium">
                              Learn More About {food.name}
                            </button>
                          </Link>
                        ) : (
                          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors text-sm font-medium">
                            Learn More About {food.name}
                          </button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-green-50 rounded-xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-serif font-light text-gray-900 mb-4">Discover More Healing Foods</h2>
            <p className="text-gray-600 mb-6">
              Explore our complete A-Z guide of foods and their healing properties to support your health journey.
            </p>
            <Link
              href="/resources"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition-colors"
            >
              Explore All Foods
              <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
