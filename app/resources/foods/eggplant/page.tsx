"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Heart, Shield, Leaf, Brain, Zap, Apple } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function EggplantPage() {
  const healthBenefits = [
    {
      icon: Heart,
      title: "Heart Health",
      description:
        "Rich in fiber and potassium, eggplant supports cardiovascular health and helps regulate blood pressure.",
    },
    {
      icon: Shield,
      title: "Antioxidant Power",
      description: "Contains nasunin and other anthocyanins that protect cells from oxidative damage and inflammation.",
    },
    {
      icon: Brain,
      title: "Brain Function",
      description: "Nasunin in eggplant skin helps protect brain cell membranes and supports cognitive health.",
    },
    {
      icon: Leaf,
      title: "Digestive Health",
      description: "High fiber content promotes healthy digestion and supports beneficial gut bacteria.",
    },
    {
      icon: Zap,
      title: "Weight Management",
      description:
        "Low in calories but high in fiber, helping you feel full while supporting healthy weight management.",
    },
    {
      icon: Apple,
      title: "Blood Sugar Control",
      description: "Fiber and compounds in eggplant help regulate blood sugar levels and improve insulin sensitivity.",
    },
  ]

  const usageRecommendations = [
    {
      method: "Roasted",
      description: "Roast cubed eggplant with olive oil and herbs for a delicious side dish or pasta addition.",
      benefits: "Enhances natural sweetness and creates a creamy texture",
    },
    {
      method: "Grilled",
      description: "Slice and grill eggplant for Mediterranean dishes, sandwiches, or as a meat substitute.",
      benefits: "Develops smoky flavor while maintaining nutritional value",
    },
    {
      method: "Baba Ganoush",
      description: "Blend roasted eggplant into a creamy, nutritious dip with tahini and lemon.",
      benefits: "Maximizes antioxidant absorption and creates a protein-rich snack",
    },
    {
      method: "Stuffed",
      description: "Hollow out eggplant and stuff with vegetables, grains, or legumes for a complete meal.",
      benefits: "Creates a nutrient-dense, satisfying main course",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <Link
            href="/resources/e"
            className="inline-flex items-center text-purple-100 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Foods Starting with E
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <Badge className="bg-purple-100 text-purple-800 px-4 py-2 text-sm font-medium">
                Nightshade Vegetable
              </Badge>
              <Badge className="bg-purple-100 text-purple-800 px-4 py-2 text-sm font-medium">
                Mediterranean Staple
              </Badge>
            </div>

            <h1 className="text-5xl md:text-6xl font-serif font-light mb-6">Eggplant</h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed max-w-3xl">
              A versatile purple vegetable packed with antioxidants, fiber, and heart-healthy compounds. Known for its
              creamy texture and ability to absorb flavors, eggplant is a cornerstone of Mediterranean cuisine.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-100">25</div>
                <div className="text-purple-200 text-sm">Calories per cup</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-100">3g</div>
                <div className="text-purple-200 text-sm">Fiber per cup</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-100">230mg</div>
                <div className="text-purple-200 text-sm">Potassium per cup</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-100">High</div>
                <div className="text-purple-200 text-sm">Antioxidant content</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 w-full">
        <Image
          src="/placeholder.svg?height=400&width=1200&text=Fresh+Purple+Eggplants"
          alt="Fresh purple eggplants"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      {/* Health Benefits */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-light text-gray-900 mb-6">Health Benefits of Eggplant</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how this nutrient-dense vegetable can support your health with its unique combination of
            antioxidants, fiber, and essential minerals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {healthBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
            >
              <Card className="h-full border-purple-100 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-medium text-gray-900">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Usage Recommendations */}
      <div className="bg-purple-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-light text-gray-900 mb-6">How to Enjoy Eggplant</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maximize the nutritional benefits and delicious potential of eggplant with these preparation methods.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {usageRecommendations.map((usage, index) => (
              <motion.div
                key={usage.method}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
              >
                <Card className="h-full border-purple-200 bg-white">
                  <CardHeader>
                    <CardTitle className="text-xl font-medium text-purple-700 flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Leaf className="h-4 w-4 text-purple-600" />
                      </div>
                      {usage.method}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">{usage.description}</p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="text-sm text-purple-700 font-medium">Benefits: {usage.benefits}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Safety Information */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-white">
            <CardHeader>
              <CardTitle className="text-2xl font-serif font-light text-gray-900 flex items-center gap-3">
                <Shield className="h-6 w-6 text-purple-600" />
                Important Considerations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Preparation Tips</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Salt sliced eggplant to remove bitterness</li>
                    <li>• Cook thoroughly to improve digestibility</li>
                    <li>• Keep skin on for maximum antioxidant benefits</li>
                    <li>• Choose firm, glossy eggplants without blemishes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Considerations</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Contains solanine (nightshade family)</li>
                    <li>• May cause sensitivity in some individuals</li>
                    <li>• Start with small amounts if new to your diet</li>
                    <li>• Pairs well with Mediterranean herbs and spices</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-serif font-light mb-6">Ready to Explore More Healing Foods?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Continue your journey through our comprehensive guide to nutrient-dense foods and their health benefits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resources/e"
                className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-full font-medium hover:bg-purple-50 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to E Foods
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center bg-purple-500 hover:bg-purple-400 text-white px-8 py-3 rounded-full font-medium transition-colors"
              >
                Explore All Foods
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
