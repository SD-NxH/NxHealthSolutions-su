"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Brain, Shield, Waves, Share2, BookOpen, ChefHat, Leaf } from "lucide-react"

export default function DulseClientPage() {
  const [isSharing, setIsSharing] = useState(false)

  const handleShare = async () => {
    setIsSharing(true)
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Dulse - Ocean's Superfood | NxHealth",
          text: "Discover the incredible health benefits of dulse, the nutrient-rich red seaweed from the ocean.",
          url: window.location.href,
        })
      } else {
        await navigator.clipboard.writeText(window.location.href)
        alert("Link copied to clipboard!")
      }
    } catch (error) {
      console.error("Error sharing:", error)
    } finally {
      setIsSharing(false)
    }
  }

  const nutritionFacts = [
    { nutrient: "Iodine", amount: "2,984 mcg", dailyValue: "1,989%" },
    { nutrient: "Potassium", amount: "8,060 mg", dailyValue: "171%" },
    { nutrient: "Iron", amount: "150 mg", dailyValue: "833%" },
    { nutrient: "Vitamin B12", amount: "8.6 mcg", dailyValue: "358%" },
    { nutrient: "Magnesium", amount: "2,844 mg", dailyValue: "677%" },
    { nutrient: "Calcium", amount: "567 mg", dailyValue: "44%" },
  ]

  const healthBenefits = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Cardiovascular Health",
      description:
        "Rich in potassium and magnesium, dulse supports heart health and helps regulate blood pressure naturally.",
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Cognitive Function",
      description: "High in vitamin B12 and iodine, essential for brain health, memory, and nervous system function.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Thyroid Support",
      description: "Exceptional source of iodine, crucial for proper thyroid function and metabolic regulation.",
    },
    {
      icon: <Waves className="h-8 w-8" />,
      title: "Mineral Powerhouse",
      description: "Contains over 20 trace minerals from the ocean, supporting overall health and vitality.",
    },
  ]

  const recipes = [
    {
      name: "Dulse Flake Seasoning",
      description: "Sprinkle dried dulse flakes on salads, soups, or roasted vegetables for an umami boost.",
      time: "2 min",
    },
    {
      name: "Ocean Smoothie Bowl",
      description: "Blend dulse powder with berries and banana for a mineral-rich breakfast.",
      time: "5 min",
    },
    {
      name: "Crispy Dulse Chips",
      description: "Lightly toast whole dulse leaves for a healthy, salty snack straight from the sea.",
      time: "3 min",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-rose-50 to-red-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <Badge className="bg-red-100 text-red-900 hover:bg-red-200">Ocean Superfood</Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Dulse
                  <span className="block text-red-200 text-3xl lg:text-4xl font-normal mt-2">
                    Nature's Mineral Treasure
                  </span>
                </h1>
                <p className="text-xl text-red-100 leading-relaxed max-w-2xl">
                  Discover the incredible nutritional power of dulse, a vibrant red seaweed that's been nourishing
                  coastal communities for centuries. Packed with essential minerals and vitamins from the pristine
                  ocean.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-red-900 hover:bg-red-50 hover:text-red-800">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Learn More
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-900"
                  onClick={handleShare}
                  disabled={isSharing}
                >
                  <Share2 className="mr-2 h-5 w-5" />
                  {isSharing ? "Sharing..." : "Share"}
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-red-100 to-rose-200 max-w-sm mx-auto">
                <Image
                  src="/crimson-seaweed-harvest.png"
                  alt="Fresh dulse seaweed showing its distinctive red color and delicate fronds"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Health Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-red-900 mb-6">Ocean's Gift to Your Health</h2>
            <p className="text-xl text-red-700 max-w-3xl mx-auto leading-relaxed">
              Dulse delivers an extraordinary concentration of minerals and nutrients that can only come from the sea,
              supporting your body's most vital functions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-red-200 hover:border-red-300 transition-colors">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-red-100 rounded-full text-red-700">{benefit.icon}</div>
                    <CardTitle className="text-red-900">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-red-700 text-center leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Profile Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-rose-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-red-900 mb-6">Exceptional Nutrition Profile</h2>
            <p className="text-xl text-red-700 max-w-3xl mx-auto">
              Per 100g of dried dulse - one of nature's most mineral-dense foods
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-red-200">
              <CardHeader className="bg-gradient-to-r from-red-100 to-rose-100">
                <CardTitle className="text-2xl text-red-900 text-center">Dulse Nutritional Facts</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {nutritionFacts.map((fact, index) => (
                    <motion.div
                      key={fact.nutrient}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex justify-between items-center p-4 bg-red-50 rounded-lg"
                    >
                      <div>
                        <span className="font-semibold text-red-900">{fact.nutrient}</span>
                        <div className="text-sm text-red-600">DV: {fact.dailyValue}</div>
                      </div>
                      <span className="text-lg font-bold text-red-800">{fact.amount}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recipe Ideas Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-red-900 mb-6">Simple Ways to Enjoy Dulse</h2>
            <p className="text-xl text-red-700 max-w-3xl mx-auto">
              From seasoning to snacking, discover easy ways to incorporate this ocean superfood into your daily routine
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {recipes.map((recipe, index) => (
              <motion.div
                key={recipe.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-red-200 hover:border-red-300 transition-colors">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <ChefHat className="h-6 w-6 text-red-600" />
                      <Badge variant="outline" className="text-red-600 border-red-300">
                        {recipe.time}
                      </Badge>
                    </div>
                    <CardTitle className="text-red-900">{recipe.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-red-700 leading-relaxed">{recipe.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold">Ready to Harness the Ocean's Power?</h2>
            <p className="text-xl text-red-100 leading-relaxed">
              Join thousands who have discovered the transformative benefits of dulse. Start your journey to optimal
              health with nature's most mineral-rich superfood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-900 hover:bg-red-50 hover:text-red-800">
                <Leaf className="mr-2 h-5 w-5" />
                Start Your Health Journey
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-900">
                <BookOpen className="mr-2 h-5 w-5" />
                Explore More Foods
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
