"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, ArrowLeft, Leaf, Apple, Carrot, Cherry } from "lucide-react"

// Sample food data for demonstration - no external API required
const sampleFoods = [
  {
    name: "Apple",
    calories: 95,
    protein: 0.5,
    carbs: 25,
    fat: 0.3,
    fiber: 4.4,
    vitaminC: 8.4,
    category: "Fruit",
  },
  {
    name: "Banana",
    calories: 105,
    protein: 1.3,
    carbs: 27,
    fat: 0.4,
    fiber: 3.1,
    vitaminC: 10.3,
    category: "Fruit",
  },
  {
    name: "Broccoli",
    calories: 55,
    protein: 3.7,
    carbs: 11,
    fat: 0.6,
    fiber: 5.1,
    vitaminC: 135,
    category: "Vegetable",
  },
  {
    name: "Spinach",
    calories: 23,
    protein: 2.9,
    carbs: 3.6,
    fat: 0.4,
    fiber: 2.2,
    vitaminC: 28,
    category: "Vegetable",
  },
  {
    name: "Quinoa",
    calories: 222,
    protein: 8.1,
    carbs: 39,
    fat: 3.6,
    fiber: 5.2,
    vitaminC: 0,
    category: "Grain",
  },
  {
    name: "Chickpeas",
    calories: 269,
    protein: 14.5,
    carbs: 45,
    fat: 4.3,
    fiber: 12.5,
    vitaminC: 2.1,
    category: "Legume",
  },
  {
    name: "Avocado",
    calories: 240,
    protein: 3,
    carbs: 12,
    fat: 22,
    fiber: 10,
    vitaminC: 15,
    category: "Fruit",
  },
  {
    name: "Sweet Potato",
    calories: 103,
    protein: 2.3,
    carbs: 24,
    fat: 0.1,
    fiber: 3.8,
    vitaminC: 22,
    category: "Vegetable",
  },
]

export default function NutritionSearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<typeof sampleFoods>([])
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return

    const results = sampleFoods.filter(
      (food) =>
        food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        food.category.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    setSearchResults(results)
    setHasSearched(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-lighter to-background">
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand rounded-full mb-6">
              <Search className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-serif font-light text-brand-dark mb-4">Nutrition Facts Search</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Look up nutritional information for thousands of whole foods. Understand what you're eating and make
              informed choices for your health journey.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Search Foods</CardTitle>
              <CardDescription>
                Enter a food name or category to view its nutritional profile
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSearch} className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search for apple, broccoli, quinoa..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button type="submit" className="bg-brand hover:bg-brand-hover">
                  Search
                </Button>
              </form>
            </CardContent>
          </Card>

          {hasSearched && (
            <div className="space-y-4">
              {searchResults.length > 0 ? (
                <>
                  <p className="text-muted-foreground">
                    Found {searchResults.length} result{searchResults.length !== 1 ? "s" : ""} for "{searchQuery}"
                  </p>
                  {searchResults.map((food, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-brand-dark">{food.name}</h3>
                            <span className="text-sm text-muted-foreground">{food.category}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-2xl font-bold text-brand">{food.calories}</span>
                            <span className="text-sm text-muted-foreground block">calories</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                          <div className="bg-brand-lighter p-3 rounded-lg text-center">
                            <span className="block text-lg font-semibold text-brand-dark">{food.protein}g</span>
                            <span className="text-xs text-muted-foreground">Protein</span>
                          </div>
                          <div className="bg-brand-lighter p-3 rounded-lg text-center">
                            <span className="block text-lg font-semibold text-brand-dark">{food.carbs}g</span>
                            <span className="text-xs text-muted-foreground">Carbs</span>
                          </div>
                          <div className="bg-brand-lighter p-3 rounded-lg text-center">
                            <span className="block text-lg font-semibold text-brand-dark">{food.fat}g</span>
                            <span className="text-xs text-muted-foreground">Fat</span>
                          </div>
                          <div className="bg-brand-lighter p-3 rounded-lg text-center">
                            <span className="block text-lg font-semibold text-brand-dark">{food.fiber}g</span>
                            <span className="text-xs text-muted-foreground">Fiber</span>
                          </div>
                          <div className="bg-brand-lighter p-3 rounded-lg text-center">
                            <span className="block text-lg font-semibold text-brand-dark">{food.vitaminC}mg</span>
                            <span className="text-xs text-muted-foreground">Vitamin C</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </>
              ) : (
                <Card>
                  <CardContent className="py-12 text-center">
                    <p className="text-muted-foreground">
                      No results found for "{searchQuery}". Try searching for common foods like "apple", "spinach", or
                      "quinoa".
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {!hasSearched && (
            <div className="mt-12">
              <h2 className="text-2xl font-serif text-brand-dark mb-6 text-center">Popular Foods</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Fruits", icon: Apple, color: "bg-red-100 text-red-600" },
                  { name: "Vegetables", icon: Carrot, color: "bg-orange-100 text-orange-600" },
                  { name: "Grains", icon: Leaf, color: "bg-amber-100 text-amber-600" },
                  { name: "Legumes", icon: Cherry, color: "bg-green-100 text-green-600" },
                ].map((category) => (
                  <button
                    type="button"
                    key={category.name}
                    onClick={() => {
                      setSearchQuery(category.name)
                      const results = sampleFoods.filter(
                        (food) => food.category.toLowerCase() === category.name.slice(0, -1).toLowerCase(),
                      )
                      setSearchResults(results)
                      setHasSearched(true)
                    }}
                    className={`${category.color} p-6 rounded-xl text-center hover:shadow-md transition-all cursor-pointer`}
                  >
                    <category.icon className="h-8 w-8 mx-auto mb-2" />
                    <span className="font-medium">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-16 bg-brand-lighter p-8 rounded-xl">
            <h2 className="text-xl font-semibold text-brand-dark mb-4">About This Tool</h2>
            <p className="text-muted-foreground mb-4">
              The NxHealth Nutrition Facts Search helps you understand the nutritional content of whole, plant-based
              foods. Use this tool to make informed decisions about your diet and discover nutrient-dense options for
              your meals.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> Nutritional values are approximate and based on standard serving sizes. Individual
              foods may vary based on growing conditions, preparation methods, and other factors.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
