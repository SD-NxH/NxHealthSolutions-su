"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Leaf, Heart, Brain, Shield, Eye } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getFoodsByLetter, getAllLetters, type FoodData } from "@/lib/foods-data"
import { useParams } from "next/navigation"
import { notFound } from "next/navigation"

const categoryColors: Record<string, string> = {
  Fruit: "bg-accent text-accent-foreground",
  Vegetable: "bg-brand-lighter text-brand-dark",
  Berry: "bg-accent text-accent-foreground",
  Herb: "bg-secondary text-secondary-foreground",
  "Root Vegetable": "bg-brand-light text-brand-dark",
  "Leafy Green": "bg-brand-lighter text-brand-dark",
  Grain: "bg-accent text-accent-foreground",
  Legume: "bg-brand-lighter text-brand-dark",
  Nut: "bg-accent text-accent-foreground",
  Tuber: "bg-brand-light text-brand-dark",
  Mushroom: "bg-secondary text-secondary-foreground",
  Squash: "bg-accent text-accent-foreground",
  Spice: "bg-secondary text-secondary-foreground",
}

function getBenefitIcon(benefit: string) {
  const lower = benefit.toLowerCase()
  if (lower.includes("heart") || lower.includes("cardio") || lower.includes("blood pressure")) return Heart
  if (lower.includes("brain") || lower.includes("cognitive") || lower.includes("neuro")) return Brain
  if (lower.includes("eye") || lower.includes("vision")) return Eye
  if (lower.includes("immune") || lower.includes("antioxidant") || lower.includes("cancer") || lower.includes("vitamin")) return Shield
  return Leaf
}

function getTopBenefits(food: FoodData): string[] {
  return food.healthBenefits.slice(0, 3).map(b => b.title)
}

function getLetterDescription(letter: string): string {
  const descriptions: Record<string, string> = {
    I: "Explore nutritious foods beginning with the letter I.",
    J: "Discover healthy foods beginning with the letter J, including crunchy jicama.",
    K: "Explore nutritious foods beginning with the letter K, featuring nutrient-dense kale and kohlrabi.",
    L: "Discover healthy foods beginning with the letter L, from zesty lemons and limes to leafy lettuce.",
    M: "Explore nutritious foods beginning with the letter M, including mangoes, mushrooms, and mustard greens.",
    N: "Discover healthy foods beginning with the letter N.",
    O: "Explore nutritious foods beginning with the letter O, featuring immune-boosting oranges, onions, and okra.",
    P: "Discover healthy foods beginning with the letter P, from tropical pineapples and potassium-rich potatoes to protein-packed peas.",
    Q: "Explore nutritious foods beginning with the letter Q.",
    R: "Discover healthy foods beginning with the letter R, featuring antioxidant-rich raspberries, radishes, and rhubarb.",
    S: "Explore nutritious foods beginning with the letter S, from vibrant strawberries and spinach to sweet potatoes and squash.",
    T: "Discover healthy foods beginning with the letter T, including lycopene-rich tomatoes, tomatillos, and turnips.",
    U: "Explore nutritious foods beginning with the letter U.",
    V: "Discover healthy foods beginning with the letter V.",
    W: "Explore nutritious foods beginning with the letter W, featuring hydrating watermelon and crunchy water chestnuts.",
    X: "Discover foods beginning with the letter X.",
    Y: "Explore nutritious foods beginning with the letter Y, including starchy yams.",
    Z: "Discover healthy foods beginning with the letter Z, featuring versatile zucchini.",
  }
  return descriptions[letter.toUpperCase()] || `Explore nutritious foods beginning with the letter ${letter.toUpperCase()}.`
}

export default function LetterPage() {
  const params = useParams()
  const letter = (params.letter as string || "").toUpperCase()

  // Validate it's a single letter
  if (!letter || letter.length !== 1 || !/[A-Z]/.test(letter)) {
    notFound()
  }

  const foods = getFoodsByLetter(letter)
  const allLetters = getAllLetters()

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-lighter to-background">
      {/* Header */}
      <div className="bg-brand text-brand-foreground py-16">
        <div className="container mx-auto px-4">
          <Link
            href="/resources"
            className="inline-flex items-center text-brand-light/80 hover:text-brand-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Resources
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-serif font-light mb-4">
              Foods Starting with {letter}
            </h1>
            <p className="text-xl text-brand-light/80 max-w-2xl">
              {getLetterDescription(letter)}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Letter Navigation */}
      <div className="bg-background border-b border-brand-lighter">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((l) => {
              const hasContent = allLetters.includes(l)
              return (
                <Link
                  key={l}
                  href={`/resources/${l.toLowerCase()}`}
                  className={`w-9 h-9 flex items-center justify-center rounded-md text-sm font-medium transition-colors ${
                    l === letter
                      ? "bg-brand text-brand-foreground"
                      : hasContent
                        ? "bg-brand-lighter text-brand-dark hover:bg-brand-light"
                        : "bg-muted text-muted-foreground opacity-50 cursor-default"
                  }`}
                >
                  {l}
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Foods Grid */}
      <div className="container mx-auto px-4 py-16">
        {foods.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {foods.map((food, index) => {
              const topBenefits = getTopBenefits(food)
              return (
                <motion.div
                  key={food.slug}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                >
                  <Link href={`/resources/foods/${food.slug}`} className="block h-full group">
                    <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-brand-lighter cursor-pointer">
                      <div className="relative h-48 w-full overflow-hidden rounded-t-lg bg-muted">
                        <Image
                          src={food.image || "/images/foods/placeholder.jpg"}
                          alt={`Fresh ${food.name}`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.src = "/images/foods/placeholder.jpg"
                          }}
                        />
                        <div className="absolute top-4 right-4">
                          <Badge className={categoryColors[food.category] || "bg-muted text-muted-foreground"}>
                            {food.category}
                          </Badge>
                        </div>
                      </div>

                      <CardHeader className="pb-3">
                        <CardTitle className="text-xl font-medium text-foreground group-hover:text-brand transition-colors">
                          {food.name}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground line-clamp-2">
                          {food.shortDescription}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-foreground mb-2">Key Benefits:</h4>
                          <div className="flex flex-wrap gap-2">
                            {topBenefits.map((benefit) => {
                              const IconComponent = getBenefitIcon(benefit)
                              return (
                                <div
                                  key={benefit}
                                  className="flex items-center gap-1 text-xs bg-brand-lighter text-brand-dark px-2 py-1 rounded-full"
                                >
                                  <IconComponent className="h-3 w-3" />
                                  {benefit}
                                </div>
                              )
                            })}
                          </div>
                          <div className="pt-4">
                            <span className="block w-full bg-brand group-hover:bg-brand-hover text-brand-foreground py-2 px-4 rounded-md transition-colors text-sm font-medium text-center">
                              Learn More About {food.name}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 bg-brand-lighter rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="h-10 w-10 text-brand" />
            </div>
            <h2 className="text-2xl font-serif font-light text-foreground mb-4">
              Coming Soon
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">
              {`We're working on adding foods starting with the letter ${letter}. Check back soon!`}
            </p>
            <Link
              href="/resources"
              className="inline-flex items-center bg-brand hover:bg-brand-hover text-brand-foreground px-6 py-3 rounded-full transition-colors"
            >
              Explore All Foods
              <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
            </Link>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-brand-lighter rounded-xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-serif font-light text-foreground mb-4">Discover More Healing Foods</h2>
            <p className="text-muted-foreground mb-6">
              Explore our complete A-Z guide of foods and their healing properties to support your health journey.
            </p>
            <Link
              href="/resources"
              className="inline-flex items-center bg-brand hover:bg-brand-hover text-brand-foreground px-6 py-3 rounded-full transition-colors"
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
