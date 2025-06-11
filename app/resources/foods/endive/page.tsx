"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Leaf, Heart, Brain, Shield, Eye, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function EndivePage() {
  const healthBenefits = [
    {
      icon: Eye,
      title: "Eye Health Support",
      description:
        "Rich in vitamin A and beta-carotene, endive supports healthy vision and may help prevent age-related eye conditions.",
    },
    {
      icon: Heart,
      title: "Heart Health",
      description:
        "Contains folate and potassium that support cardiovascular health and help maintain healthy blood pressure levels.",
    },
    {
      icon: Leaf,
      title: "Digestive Wellness",
      description:
        "High fiber content promotes healthy digestion, supports gut microbiome, and aids in regular bowel movements.",
    },
    {
      icon: Shield,
      title: "Antioxidant Protection",
      description:
        "Packed with antioxidants like vitamin C and flavonoids that help protect cells from oxidative stress and inflammation.",
    },
    {
      icon: Zap,
      title: "Weight Management",
      description:
        "Very low in calories but high in nutrients and fiber, making it an excellent choice for healthy weight management.",
    },
    {
      icon: Brain,
      title: "Cognitive Support",
      description:
        "Folate content supports brain health and may help reduce the risk of cognitive decline and support mental clarity.",
    },
  ]

  const usageRecommendations = [
    "Raw in salads for maximum nutrient retention",
    "Grilled or roasted as a side dish",
    "Braised with herbs and olive oil",
    "Used as cups for appetizers and dips",
    "Added to soups and stews",
    "Juiced for concentrated nutrients",
  ]

  const safetyInfo = [
    "Generally safe for most people when consumed as food",
    "May cause mild digestive upset in sensitive individuals",
    "Choose organic when possible to avoid pesticide residues",
    "Store in refrigerator and use within a week for best quality",
    "Wash thoroughly before consuming",
    "Those with ragweed allergies should consume with caution",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <Link
            href="/resources/e"
            className="inline-flex items-center text-green-100 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Foods Starting with E
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Badge className="bg-green-500 text-white mb-4">Leafy Green Vegetable</Badge>
              <h1 className="text-5xl md:text-6xl font-serif font-light mb-6">Endive</h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Discover the crisp, slightly bitter leafy green that's packed with essential nutrients and perfect for
                both raw and cooked preparations.
              </p>

              {/* Nutritional Highlights */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-500/20 rounded-lg p-4">
                  <div className="text-2xl font-bold">17</div>
                  <div className="text-green-100 text-sm">Calories per cup</div>
                </div>
                <div className="bg-green-500/20 rounded-lg p-4">
                  <div className="text-2xl font-bold">3.1g</div>
                  <div className="text-green-100 text-sm">Fiber per cup</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Fresh+Endive+Leaves"
                  alt="Fresh endive leaves"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Health Benefits Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-light text-gray-900 mb-6">Health Benefits of Endive</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Endive is a nutritional powerhouse that offers numerous health benefits while being incredibly low in
              calories.
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
                <Card className="h-full border-green-100 hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <benefit.icon className="h-8 w-8 text-green-600" />
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
      </div>

      {/* Usage and Safety Section */}
      <div className="bg-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Usage Recommendations */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Card className="h-full border-green-200">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif font-light text-gray-900 flex items-center">
                    <Leaf className="mr-3 h-6 w-6 text-green-600" />
                    How to Use Endive
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Versatile ways to incorporate endive into your diet
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {usageRecommendations.map((usage, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{usage}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Safety Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="h-full border-green-200">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif font-light text-gray-900 flex items-center">
                    <Shield className="mr-3 h-6 w-6 text-green-600" />
                    Safety & Considerations
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Important information for safe consumption
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {safetyInfo.map((info, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{info}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-2xl p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-light text-gray-900 mb-6">Ready to Add Endive to Your Diet?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Start incorporating this nutritious leafy green into your meals and experience its amazing health
                benefits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/resources/e"
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full transition-colors text-lg font-medium"
                >
                  <ArrowLeft className="mr-2 h-5 w-5 rotate-180" />
                  Explore More E Foods
                </Link>
                <Link
                  href="/resources"
                  className="inline-flex items-center border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-full transition-colors text-lg font-medium"
                >
                  Browse All Foods
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
