"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, BookOpen, Plus, Trash2, Calculator } from "lucide-react"

// Ingredient nutrition database (per 100g)
const ingredientDatabase: Record<string, { calories: number; protein: number; carbs: number; fat: number; fiber: number }> = {
  "brown rice": { calories: 111, protein: 2.6, carbs: 23, fat: 0.9, fiber: 1.8 },
  "quinoa": { calories: 120, protein: 4.4, carbs: 21, fat: 1.9, fiber: 2.8 },
  "chickpeas": { calories: 164, protein: 8.9, carbs: 27, fat: 2.6, fiber: 7.6 },
  "black beans": { calories: 132, protein: 8.9, carbs: 24, fat: 0.5, fiber: 8.7 },
  "lentils": { calories: 116, protein: 9, carbs: 20, fat: 0.4, fiber: 7.9 },
  "tofu": { calories: 76, protein: 8, carbs: 1.9, fat: 4.8, fiber: 0.3 },
  "tempeh": { calories: 192, protein: 20, carbs: 7.6, fat: 11, fiber: 0 },
  "spinach": { calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4, fiber: 2.2 },
  "kale": { calories: 49, protein: 4.3, carbs: 9, fat: 0.9, fiber: 3.6 },
  "broccoli": { calories: 34, protein: 2.8, carbs: 7, fat: 0.4, fiber: 2.6 },
  "sweet potato": { calories: 86, protein: 1.6, carbs: 20, fat: 0.1, fiber: 3 },
  "avocado": { calories: 160, protein: 2, carbs: 8.5, fat: 15, fiber: 6.7 },
  "olive oil": { calories: 884, protein: 0, carbs: 0, fat: 100, fiber: 0 },
  "almonds": { calories: 579, protein: 21, carbs: 22, fat: 50, fiber: 12.5 },
  "walnuts": { calories: 654, protein: 15, carbs: 14, fat: 65, fiber: 6.7 },
  "banana": { calories: 89, protein: 1.1, carbs: 23, fat: 0.3, fiber: 2.6 },
  "oats": { calories: 389, protein: 17, carbs: 66, fat: 7, fiber: 10.6 },
  "tomatoes": { calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2, fiber: 1.2 },
  "onion": { calories: 40, protein: 1.1, carbs: 9.3, fat: 0.1, fiber: 1.7 },
  "garlic": { calories: 149, protein: 6.4, carbs: 33, fat: 0.5, fiber: 2.1 },
}

interface Ingredient {
  id: string
  name: string
  amount: number
  unit: string
}

export default function RecipeCalculatorPage() {
  const [recipeName, setRecipeName] = useState("")
  const [servings, setServings] = useState(4)
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { id: "1", name: "", amount: 0, unit: "g" },
  ])
  const [totals, setTotals] = useState<{
    calories: number
    protein: number
    carbs: number
    fat: number
    fiber: number
  } | null>(null)

  const addIngredient = () => {
    setIngredients([
      ...ingredients,
      { id: Date.now().toString(), name: "", amount: 0, unit: "g" },
    ])
  }

  const removeIngredient = (id: string) => {
    if (ingredients.length > 1) {
      setIngredients(ingredients.filter((ing) => ing.id !== id))
    }
  }

  const updateIngredient = (id: string, field: keyof Ingredient, value: string | number) => {
    setIngredients(
      ingredients.map((ing) =>
        ing.id === id ? { ...ing, [field]: value } : ing
      )
    )
  }

  const calculateNutrition = () => {
    let totalCalories = 0
    let totalProtein = 0
    let totalCarbs = 0
    let totalFat = 0
    let totalFiber = 0

    for (const ingredient of ingredients) {
      const name = ingredient.name.toLowerCase().trim()
      const data = ingredientDatabase[name]
      if (data && ingredient.amount > 0) {
        // Convert to per 100g basis
        let amountInGrams = ingredient.amount
        if (ingredient.unit === "cup") amountInGrams = ingredient.amount * 128
        if (ingredient.unit === "tbsp") amountInGrams = ingredient.amount * 15
        if (ingredient.unit === "tsp") amountInGrams = ingredient.amount * 5

        const factor = amountInGrams / 100
        totalCalories += data.calories * factor
        totalProtein += data.protein * factor
        totalCarbs += data.carbs * factor
        totalFat += data.fat * factor
        totalFiber += data.fiber * factor
      }
    }

    setTotals({
      calories: Math.round(totalCalories),
      protein: Math.round(totalProtein * 10) / 10,
      carbs: Math.round(totalCarbs * 10) / 10,
      fat: Math.round(totalFat * 10) / 10,
      fiber: Math.round(totalFiber * 10) / 10,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-background">
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600 rounded-full mb-6">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-serif font-light text-brand-dark mb-4">Recipe Nutrition Calculator</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enter your recipe ingredients to calculate the total nutritional content. Great for meal prepping and
              understanding what's in your homemade dishes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Recipe Details</CardTitle>
                <CardDescription>Add your recipe ingredients below</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="recipe-name">Recipe Name</Label>
                    <Input
                      id="recipe-name"
                      placeholder="My Recipe"
                      value={recipeName}
                      onChange={(e) => setRecipeName(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="servings">Servings</Label>
                    <Input
                      id="servings"
                      type="number"
                      min={1}
                      value={servings}
                      onChange={(e) => setServings(Number(e.target.value))}
                    />
                  </div>
                </div>

                <div>
                  <Label className="mb-3 block">Ingredients</Label>
                  <div className="space-y-3">
                    {ingredients.map((ingredient) => (
                      <div key={ingredient.id} className="flex gap-2 items-center">
                        <Select
                          value={ingredient.name}
                          onValueChange={(value) => updateIngredient(ingredient.id, "name", value)}
                        >
                          <SelectTrigger className="flex-1">
                            <SelectValue placeholder="Select ingredient" />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.keys(ingredientDatabase).map((name) => (
                              <SelectItem key={name} value={name}>
                                {name.charAt(0).toUpperCase() + name.slice(1)}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Input
                          type="number"
                          placeholder="Amount"
                          className="w-20"
                          value={ingredient.amount || ""}
                          onChange={(e) => updateIngredient(ingredient.id, "amount", Number(e.target.value))}
                        />
                        <Select
                          value={ingredient.unit}
                          onValueChange={(value) => updateIngredient(ingredient.id, "unit", value)}
                        >
                          <SelectTrigger className="w-20">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="g">g</SelectItem>
                            <SelectItem value="cup">cup</SelectItem>
                            <SelectItem value="tbsp">tbsp</SelectItem>
                            <SelectItem value="tsp">tsp</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => removeIngredient(ingredient.id)}
                          disabled={ingredients.length === 1}
                        >
                          <Trash2 className="h-4 w-4 text-muted-foreground" />
                        </Button>
                      </div>
                    ))}
                  </div>

                  <Button
                    type="button"
                    variant="outline"
                    className="w-full mt-4 bg-transparent"
                    onClick={addIngredient}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Ingredient
                  </Button>
                </div>

                <Button
                  className="w-full bg-brand hover:bg-brand-hover"
                  onClick={calculateNutrition}
                >
                  <Calculator className="h-4 w-4 mr-2" />
                  Calculate Nutrition
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Nutritional Breakdown</CardTitle>
                <CardDescription>
                  {totals ? `Per serving (${servings} servings total)` : "Add ingredients and calculate"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {totals ? (
                  <div className="space-y-6">
                    <div className="text-center p-6 bg-brand-lighter rounded-xl">
                      <span className="text-4xl font-bold text-brand">{Math.round(totals.calories / servings)}</span>
                      <span className="block text-muted-foreground">Calories per serving</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg text-center">
                        <span className="text-2xl font-semibold text-green-700">
                          {(totals.protein / servings).toFixed(1)}g
                        </span>
                        <span className="block text-sm text-green-600">Protein</span>
                      </div>
                      <div className="bg-amber-50 p-4 rounded-lg text-center">
                        <span className="text-2xl font-semibold text-amber-700">
                          {(totals.carbs / servings).toFixed(1)}g
                        </span>
                        <span className="block text-sm text-amber-600">Carbs</span>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg text-center">
                        <span className="text-2xl font-semibold text-orange-700">
                          {(totals.fat / servings).toFixed(1)}g
                        </span>
                        <span className="block text-sm text-orange-600">Fat</span>
                      </div>
                      <div className="bg-emerald-50 p-4 rounded-lg text-center">
                        <span className="text-2xl font-semibold text-emerald-700">
                          {(totals.fiber / servings).toFixed(1)}g
                        </span>
                        <span className="block text-sm text-emerald-600">Fiber</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h4 className="font-medium mb-2">Total Recipe</h4>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>Calories: {totals.calories} kcal</p>
                        <p>Protein: {totals.protein}g</p>
                        <p>Carbohydrates: {totals.carbs}g</p>
                        <p>Fat: {totals.fat}g</p>
                        <p>Fiber: {totals.fiber}g</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <Calculator className="h-12 w-12 mx-auto mb-4 opacity-30" />
                    <p>Add ingredients and click "Calculate Nutrition" to see the breakdown</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-amber-50 p-8 rounded-xl">
            <h2 className="text-xl font-semibold text-brand-dark mb-4">How to Use This Tool</h2>
            <ul className="text-muted-foreground space-y-2">
              <li>1. Enter your recipe name and number of servings</li>
              <li>2. Select ingredients from the dropdown and specify amounts</li>
              <li>3. Click "Calculate Nutrition" to see the nutritional breakdown</li>
              <li>4. Results show both per-serving and total recipe values</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4">
              <strong>Tip:</strong> Use this tool to plan balanced meals and ensure you're meeting your nutritional
              goals with whole, plant-based ingredients.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
