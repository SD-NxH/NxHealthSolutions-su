"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, TrendingUp, Medal } from "lucide-react"

// Nutrient density data (per 100g)
const foodData = [
  { name: "Kale", category: "Vegetable", vitaminC: 120, vitaminK: 817, iron: 1.5, calcium: 150, fiber: 3.6, score: 92 },
  { name: "Spinach", category: "Vegetable", vitaminC: 28, vitaminK: 483, iron: 2.7, calcium: 99, fiber: 2.2, score: 88 },
  { name: "Broccoli", category: "Vegetable", vitaminC: 89, vitaminK: 102, iron: 0.7, calcium: 47, fiber: 2.6, score: 82 },
  { name: "Swiss Chard", category: "Vegetable", vitaminC: 30, vitaminK: 830, iron: 1.8, calcium: 51, fiber: 1.6, score: 80 },
  { name: "Collard Greens", category: "Vegetable", vitaminC: 35, vitaminK: 437, iron: 0.5, calcium: 232, fiber: 4.0, score: 78 },
  { name: "Watercress", category: "Vegetable", vitaminC: 43, vitaminK: 250, iron: 0.2, calcium: 120, fiber: 0.5, score: 76 },
  { name: "Bok Choy", category: "Vegetable", vitaminC: 45, vitaminK: 46, iron: 0.8, calcium: 105, fiber: 1.0, score: 74 },
  { name: "Blueberries", category: "Fruit", vitaminC: 10, vitaminK: 19, iron: 0.3, calcium: 6, fiber: 2.4, score: 72 },
  { name: "Sweet Potato", category: "Vegetable", vitaminC: 2.4, vitaminK: 1.8, iron: 0.6, calcium: 30, fiber: 3.0, score: 70 },
  { name: "Lentils", category: "Legume", vitaminC: 1.5, vitaminK: 1.7, iron: 3.3, calcium: 19, fiber: 7.9, score: 68 },
  { name: "Quinoa", category: "Grain", vitaminC: 0, vitaminK: 0, iron: 1.5, calcium: 17, fiber: 2.8, score: 66 },
  { name: "Chickpeas", category: "Legume", vitaminC: 1.3, vitaminK: 4, iron: 2.9, calcium: 49, fiber: 7.6, score: 64 },
  { name: "Almonds", category: "Nut", vitaminC: 0, vitaminK: 0, iron: 3.7, calcium: 264, fiber: 12.5, score: 62 },
  { name: "Avocado", category: "Fruit", vitaminC: 10, vitaminK: 21, iron: 0.6, calcium: 12, fiber: 6.7, score: 60 },
  { name: "Pumpkin Seeds", category: "Seed", vitaminC: 1.9, vitaminK: 7.3, iron: 8.8, calcium: 46, fiber: 6.0, score: 58 },
]

type NutrientKey = "score" | "vitaminC" | "vitaminK" | "iron" | "calcium" | "fiber"

const nutrients: { key: NutrientKey; label: string; unit: string }[] = [
  { key: "score", label: "Overall Nutrient Density", unit: "score" },
  { key: "vitaminC", label: "Vitamin C", unit: "mg" },
  { key: "vitaminK", label: "Vitamin K", unit: "mcg" },
  { key: "iron", label: "Iron", unit: "mg" },
  { key: "calcium", label: "Calcium", unit: "mg" },
  { key: "fiber", label: "Fiber", unit: "g" },
]

export default function NutrientRankingPage() {
  const [selectedNutrient, setSelectedNutrient] = useState<NutrientKey>("score")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const currentNutrient = nutrients.find((n) => n.key === selectedNutrient) || nutrients[0]

  const filteredData = foodData
    .filter((food) => selectedCategory === "all" || food.category === selectedCategory)
    .sort((a, b) => b[selectedNutrient] - a[selectedNutrient])

  const maxValue = Math.max(...filteredData.map((f) => f[selectedNutrient]))

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-background">
      <div className="container mx-auto px-4 py-12">
        <Link
          href="/resources"
          className="inline-flex items-center text-brand hover:text-brand-hover mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Resources
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-6">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-serif font-light text-brand-dark mb-4">Nutrient Density Ranking</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover which foods pack the most nutritional punch. Compare foods by specific nutrients or overall
              nutrient density to make smarter choices.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Filter Rankings</CardTitle>
              <CardDescription>Select a nutrient and category to see top foods</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Rank By</label>
                  <Select
                    value={selectedNutrient}
                    onValueChange={(value) => setSelectedNutrient(value as NutrientKey)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {nutrients.map((nutrient) => (
                        <SelectItem key={nutrient.key} value={nutrient.key}>
                          {nutrient.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Food Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="Vegetable">Vegetables</SelectItem>
                      <SelectItem value="Fruit">Fruits</SelectItem>
                      <SelectItem value="Legume">Legumes</SelectItem>
                      <SelectItem value="Grain">Grains</SelectItem>
                      <SelectItem value="Nut">Nuts</SelectItem>
                      <SelectItem value="Seed">Seeds</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Foods by {currentNutrient.label}</CardTitle>
              <CardDescription>Per 100g serving</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredData.map((food, index) => {
                  const value = food[selectedNutrient]
                  const percentage = (value / maxValue) * 100

                  return (
                    <div key={food.name} className="flex items-center gap-4">
                      <div className="w-8 flex justify-center">
                        {index < 3 ? (
                          <Medal
                            className={`h-6 w-6 ${
                              index === 0
                                ? "text-yellow-500"
                                : index === 1
                                  ? "text-gray-400"
                                  : "text-amber-700"
                            }`}
                          />
                        ) : (
                          <span className="text-muted-foreground font-medium">{index + 1}</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <div>
                            <span className="font-medium">{food.name}</span>
                            <span className="text-sm text-muted-foreground ml-2">({food.category})</span>
                          </div>
                          <span className="font-semibold text-brand">
                            {value} {currentNutrient.unit}
                          </span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-brand to-emerald-500 rounded-full transition-all duration-500"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Card className="bg-brand-lighter border-0">
              <CardHeader>
                <CardTitle className="text-lg">What is Nutrient Density?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Nutrient density measures the amount of beneficial nutrients per calorie. Foods with high nutrient
                  density provide more vitamins, minerals, and fiber relative to their calorie content, making them
                  ideal choices for optimal health.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-0">
              <CardHeader>
                <CardTitle className="text-lg">Why It Matters</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Choosing nutrient-dense foods helps you meet your nutritional needs without excess calories. Leafy
                  greens, colorful vegetables, legumes, and whole grains are among the most nutrient-dense foods
                  available.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-xl">
            <p className="text-sm text-muted-foreground text-center">
              <strong>Note:</strong> Nutrient values are approximate and based on raw food data. Actual values may vary
              based on growing conditions, preparation methods, and other factors.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
