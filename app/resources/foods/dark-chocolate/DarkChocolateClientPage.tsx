"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Heart, Brain, Shield, Zap, Share2 } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function DarkChocolateClientPage() {
  const heroRef = useRef(null)
  const benefitsRef = useRef(null)
  const nutritionRef = useRef(null)
  const recipesRef = useRef(null)

  const isBenefitsInView = useInView(benefitsRef, { once: true, amount: 0.2 })
  const isNutritionInView = useInView(nutritionRef, { once: true, amount: 0.2 })
  const isRecipesInView = useInView(recipesRef, { once: true, amount: 0.2 })

  const benefits = [
    {
      icon: Heart,
      title: "Heart Health",
      description: "Rich in flavonoids that may help improve cardiovascular function and reduce blood pressure.",
      color: "bg-amber-100 text-amber-800",
    },
    {
      icon: Brain,
      title: "Brain Function",
      description:
        "Contains compounds that may enhance cognitive function and protect against neurodegenerative diseases.",
      color: "bg-orange-100 text-orange-800",
    },
    {
      icon: Shield,
      title: "Antioxidant Power",
      description: "Packed with powerful antioxidants that help protect cells from oxidative stress and inflammation.",
      color: "bg-red-100 text-red-800",
    },
    {
      icon: Zap,
      title: "Mood Enhancement",
      description: "Contains natural compounds that may help improve mood and reduce stress levels.",
      color: "bg-yellow-100 text-yellow-800",
    },
  ]

  const nutritionFacts = [
    { nutrient: "Calories", amount: "170", unit: "per oz" },
    { nutrient: "Fiber", amount: "3.1", unit: "g" },
    { nutrient: "Iron", amount: "3.9", unit: "mg" },
    { nutrient: "Magnesium", amount: "64", unit: "mg" },
    { nutrient: "Copper", amount: "0.5", unit: "mg" },
    { nutrient: "Manganese", amount: "0.5", unit: "mg" },
  ]

  const recipes = [
    {
      title: "Dark Chocolate Avocado Mousse",
      description: "A creamy, healthy dessert that combines the richness of dark chocolate with nutritious avocado.",
      time: "15 min",
      difficulty: "Easy",
    },
    {
      title: "Chocolate-Dipped Strawberries",
      description: "Fresh strawberries dipped in melted dark chocolate for a simple, elegant treat.",
      time: "20 min",
      difficulty: "Easy",
    },
    {
      title: "Dark Chocolate Energy Balls",
      description: "No-bake energy balls made with dates, nuts, and dark chocolate for a healthy snack.",
      time: "25 min",
      difficulty: "Easy",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-br from-amber-900 via-orange-900 to-red-900"
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative z-10 px-4 md:px-6 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Link
                  href="/resources"
                  className="inline-flex items-center text-amber-200 hover:text-amber-100 transition-colors mb-6"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Resources
                </Link>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Badge className="bg-amber-200 text-amber-900 hover:bg-amber-300 mb-4">Superfood</Badge>
                  <h1 className="text-4xl md:text-6xl font-serif font-light text-white mb-6">Dark Chocolate</h1>
                  <p className="text-xl md:text-2xl text-amber-100 mb-8 leading-relaxed">
                    Nature's most delicious antioxidant powerhouse, offering heart-healthy benefits and mood-boosting
                    compounds in every rich, satisfying bite.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-wrap gap-3"
              >
                <Badge variant="secondary" className="bg-amber-800/30 text-amber-100 border-amber-700">
                  Rich in Flavonoids
                </Badge>
                <Badge variant="secondary" className="bg-orange-800/30 text-orange-100 border-orange-700">
                  Heart Healthy
                </Badge>
                <Badge variant="secondary" className="bg-red-800/30 text-red-100 border-red-700">
                  Antioxidant Rich
                </Badge>
              </motion.div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-amber-100 to-orange-200 max-w-sm mx-auto">
                <Image
                  src="/dark-chocolate-still-life.png"
                  alt="Pieces of dark chocolate with cacao beans showing rich, glossy texture"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-3xl opacity-30" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-red-400 to-pink-500 rounded-full blur-2xl opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Health Benefits Section */}
      <section ref={benefitsRef} className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-amber-900 mb-4">Health Benefits</h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Dark chocolate is more than just a treat—it's a functional food packed with compounds that support your
              health and wellbeing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full border-amber-200 hover:shadow-lg transition-all duration-300 hover:border-amber-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-full ${benefit.color}`}>
                        <benefit.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl font-serif text-amber-900">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-amber-700 text-base leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Facts Section */}
      <section ref={nutritionRef} className="py-16 md:py-24 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isNutritionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-amber-900 mb-4">Nutrition Profile</h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Dark chocolate (70-85% cacao) provides essential minerals and beneficial compounds in every serving.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-amber-200">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
                <CardTitle className="text-2xl font-serif text-amber-900 text-center">
                  Nutritional Content (1 oz serving)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {nutritionFacts.map((fact, index) => (
                    <motion.div
                      key={fact.nutrient}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isNutritionInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="text-center p-4 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200"
                    >
                      <div className="text-2xl md:text-3xl font-bold text-amber-900 mb-1">
                        {fact.amount}
                        <span className="text-lg text-amber-700">{fact.unit}</span>
                      </div>
                      <div className="text-sm font-medium text-amber-700">{fact.nutrient}</div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recipe Ideas Section */}
      <section ref={recipesRef} className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isRecipesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-amber-900 mb-4">Healthy Recipe Ideas</h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Transform dark chocolate into nutritious treats that satisfy your cravings while supporting your health
              goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recipes.map((recipe, index) => (
              <motion.div
                key={recipe.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isRecipesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full border-amber-200 hover:shadow-lg transition-all duration-300 hover:border-amber-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif text-amber-900">{recipe.title}</CardTitle>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="border-amber-300 text-amber-700">
                        {recipe.time}
                      </Badge>
                      <Badge variant="outline" className="border-orange-300 text-orange-700">
                        {recipe.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-amber-700 text-base leading-relaxed">
                      {recipe.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-900 via-orange-900 to-red-900">
        <div className="container px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-white mb-6">
              Ready to Embrace the Power of Dark Chocolate?
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Discover more nutrient-dense foods and create a personalized nutrition plan that includes your favorite
              healthy indulgences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8 py-6 text-lg"
                onClick={() => (window.location.href = "/resources")}
              >
                Explore More Foods
              </Button>
              <Button
                variant="outline"
                className="border-amber-200 text-amber-100 hover:bg-amber-800/20 rounded-full px-8 py-6 text-lg"
                onClick={() => (window.location.href = "/get-started")}
              >
                Get Personalized Plan
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-8 bg-amber-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="mb-4 sm:mb-0">
              <h3 className="text-lg font-medium text-amber-900">Share this article</h3>
              <p className="text-amber-700">Help others discover the benefits of dark chocolate</p>
            </div>
            <Button variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-200" data-share="true">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
