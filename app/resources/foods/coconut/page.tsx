"use client"

import { motion } from "framer-motion"
import { Droplets, Heart, Brain, Zap, Star, ChefHat, AlertCircle, Thermometer } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollProgress } from "@/components/scroll-progress"
import { ScrollToTop } from "@/components/scroll-to-top"
import Image from "next/image"

export default function CoconutPage() {
  const nutritionFacts = [
    { nutrient: "Calories", amount: "354 per 100g", icon: Zap },
    { nutrient: "Healthy Fats", amount: "33.5g", icon: Droplets },
    { nutrient: "Fiber", amount: "9g", icon: Heart },
    { nutrient: "Protein", amount: "3.3g", icon: Brain },
    { nutrient: "Potassium", amount: "356mg", icon: Star },
    { nutrient: "Manganese", amount: "1.5mg", icon: ChefHat },
  ]

  const healthBenefits = [
    {
      title: "Heart Health Support",
      description: "Medium-chain fatty acids may help support cardiovascular health and cholesterol levels.",
      icon: Heart,
    },
    {
      title: "Brain Function",
      description: "MCTs provide quick energy for the brain and may support cognitive function.",
      icon: Brain,
    },
    {
      title: "Hydration Support",
      description: "Coconut water provides natural electrolytes for optimal hydration.",
      icon: Droplets,
    },
    {
      title: "Energy Boost",
      description: "Medium-chain triglycerides provide quick, sustained energy for daily activities.",
      icon: Zap,
    },
  ]

  const culinaryUses = [
    "Tropical smoothies and beverages",
    "Coconut milk for curries and soups",
    "Baking and dessert making",
    "Coconut oil for cooking",
    "Shredded coconut for toppings",
    "Natural electrolyte drinks",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <ScrollProgress />
      <ScrollToTop />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-100 via-orange-100 to-yellow-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full flex items-center justify-center shadow-lg">
                <Droplets className="w-10 h-10 text-amber-800" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-amber-900 mb-4">Coconut</h1>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
              Nature's tropical treasure, packed with healthy fats, natural electrolytes, and versatile culinary
              applications.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              <Badge className="bg-amber-200 text-amber-800 hover:bg-amber-300">Tropical Fruit</Badge>
              <Badge className="bg-orange-200 text-orange-800 hover:bg-orange-300">Healthy Fats</Badge>
              <Badge className="bg-yellow-200 text-yellow-800 hover:bg-yellow-300">Natural Electrolytes</Badge>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-6xl mx-auto px-4 mb-12 -mt-8">
        <div className="overflow-hidden rounded-xl shadow-2xl h-96">
          <Image
            src="/fresh-coconut-halves.jpeg"
            alt="Fresh coconut halves showing white coconut meat"
            width={800}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200 shadow-lg">
            <CardContent className="p-8">
              <p className="text-lg text-amber-800 leading-relaxed">
                Coconuts are one of nature's most versatile foods, offering everything from refreshing water to creamy
                milk and nutritious flesh. Rich in medium-chain fatty acids and natural electrolytes, coconuts have been
                a staple food in tropical regions for thousands of years and are now celebrated worldwide for their
                health benefits.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Nutrition Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Nutritional Profile</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nutritionFacts.map((fact, index) => (
              <Card key={index} className="bg-white border-amber-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <fact.icon className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-amber-900 mb-2">{fact.nutrient}</h3>
                  <p className="text-amber-700">{fact.amount}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Health Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Health Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {healthBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-amber-900">
                    <benefit.icon className="w-6 h-6 text-amber-600" />
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-700">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Culinary Uses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Culinary Applications</h2>
          <Card className="bg-gradient-to-r from-orange-50 to-yellow-50 border-amber-200 shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {culinaryUses.map((use, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/50">
                    <ChefHat className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    <span className="text-amber-800">{use}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Storage & Selection Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-amber-900">
                  <AlertCircle className="w-6 h-6 text-amber-600" />
                  Selection Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-amber-700">
                <p>• Choose coconuts that feel heavy for their size</p>
                <p>• Listen for sloshing coconut water inside</p>
                <p>• Avoid coconuts with cracks or soft spots</p>
                <p>• Fresh coconut water should be clear</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 border-amber-200 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-amber-900">
                  <Thermometer className="w-6 h-6 text-amber-600" />
                  Storage Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-amber-700">
                <p>• Whole coconuts: Room temperature for weeks</p>
                <p>• Fresh coconut meat: Refrigerate 4-6 days</p>
                <p>• Coconut water: Refrigerate 2-3 days</p>
                <p>• Shredded coconut: Freeze for long-term storage</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-amber-100 via-orange-100 to-yellow-100 border-amber-200 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Ready to Go Tropical?</h3>
              <p className="text-amber-700 mb-6 max-w-2xl mx-auto">
                Discover the versatile world of coconuts and incorporate this nutritious tropical treasure into your
                daily diet.
              </p>
              <Button variant="coconut" size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                Explore More Foods
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
