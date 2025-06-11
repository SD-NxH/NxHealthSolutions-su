"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Leaf, Heart, Brain, Shield, Eye, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function EscarolePage() {
  const healthBenefits = [
    {
      icon: Eye,
      title: "Eye Health Support",
      description:
        "Rich in vitamin A and lutein, escarole helps protect against age-related macular degeneration and supports overall eye health.",
    },
    {
      icon: Heart,
      title: "Heart Health",
      description:
        "Contains folate and potassium that support cardiovascular health by helping to regulate blood pressure and homocysteine levels.",
    },
    {
      icon: Leaf,
      title: "Digestive Wellness",
      description:
        "High fiber content promotes healthy digestion, supports beneficial gut bacteria, and helps maintain regular bowel movements.",
    },
    {
      icon: Shield,
      title: "Antioxidant Protection",
      description:
        "Packed with antioxidants including vitamin C and beta-carotene that help protect cells from oxidative stress and inflammation.",
    },
    {
      icon: Zap,
      title: "Energy & Metabolism",
      description:
        "B-vitamins, particularly folate, support energy metabolism and help convert food into usable energy for the body.",
    },
    {
      icon: Brain,
      title: "Cognitive Support",
      description:
        "Folate and vitamin K contribute to brain health, supporting memory, cognitive function, and neurological development.",
    },
  ]

  const usageRecommendations = [
    "Raw in salads - Use young, tender leaves for a slightly bitter, refreshing crunch",
    "Sautéed - Quick sauté with garlic and olive oil to reduce bitterness",
    "Braised - Slow cook with broth for a tender, flavorful side dish",
    "Soups and stews - Add to hearty soups for extra nutrition and flavor",
    "Grilled - Brush with olive oil and grill for a smoky, caramelized taste",
    "Stuffed - Use large leaves as wraps for grain or protein fillings",
  ]

  const safetyInfo = [
    "Choose escarole with crisp, fresh leaves and avoid any with brown spots or wilting",
    "Store in the refrigerator and use within 3-5 days for best quality and nutrition",
    "Wash thoroughly before eating, as the layered leaves can trap dirt and debris",
    "Those on blood-thinning medications should consult their doctor due to vitamin K content",
    "Start with small amounts if you're sensitive to bitter flavors",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="bg-green-600 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <Link
            href="/resources/e"
            className="inline-flex items-center text-green-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Foods Starting with E
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <Badge className="bg-green-500 text-white mb-4">Leafy Green</Badge>
              <h1 className="text-4xl lg:text-6xl font-serif font-light mb-6">Escarole</h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                A broad-leafed endive with a mild, slightly bitter flavor that's perfect for both raw and cooked
                preparations. Rich in vitamins A, K, and folate, escarole offers exceptional nutritional value with a
                versatile culinary profile.
              </p>

              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold">High</div>
                  <div className="text-green-200 text-sm">Vitamin A</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">Rich</div>
                  <div className="text-green-200 text-sm">Folate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">Low</div>
                  <div className="text-green-200 text-sm">Calories</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10"
              >
                <Image
                  src="/placeholder.svg?height=400&width=400&text=Fresh+Escarole+Leaves"
                  alt="Fresh escarole leaves"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
              <div className="absolute inset-0 bg-green-400 rounded-2xl transform rotate-6 opacity-20"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Health Benefits Section */}
      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-light text-gray-900 mb-6">
              Health Benefits of Escarole
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the powerful nutritional benefits that make escarole a valuable addition to your healthy eating
              plan.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
              >
                <Card className="h-full border-green-100 hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Usage & Safety Section */}
      <div className="bg-green-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Usage Recommendations */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl lg:text-3xl font-serif font-light text-gray-900 mb-8">How to Use Escarole</h3>
              <div className="space-y-4">
                {usageRecommendations.map((usage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{usage}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Safety Information */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-2xl lg:text-3xl font-serif font-light text-gray-900 mb-8">Safety & Preparation</h3>
              <div className="space-y-4">
                {safetyInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{info}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-green-600 text-white rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-serif font-light mb-6">Ready to Add Escarole to Your Diet?</h2>
              <p className="text-green-100 mb-8 text-lg">
                Explore more nutrient-dense foods and discover personalized nutrition guidance to support your health
                journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/resources"
                  className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-full hover:bg-green-50 transition-colors font-medium"
                >
                  Explore More Foods
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-green-600 transition-colors font-medium"
                >
                  Get Nutrition Guidance
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
