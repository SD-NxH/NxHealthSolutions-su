"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { ArrowLeft, PieChart, RefreshCw } from "lucide-react"

interface NutrientData {
  protein: number
  carbs: number
  fat: number
}

export default function NutrientRatioPage() {
  const [dailyCalories, setDailyCalories] = useState(2000)
  const [nutrients, setNutrients] = useState<NutrientData>({
    protein: 0,
    carbs: 0,
    fat: 0,
  })
  const [showResults, setShowResults] = useState(false)

  // Calculate calories from macros
  const proteinCalories = nutrients.protein * 4
  const carbCalories = nutrients.carbs * 4
  const fatCalories = nutrients.fat * 9
  const totalCalories = proteinCalories + carbCalories + fatCalories

  // Calculate percentages
  const proteinPercent = totalCalories > 0 ? Math.round((proteinCalories / totalCalories) * 100) : 0
  const carbPercent = totalCalories > 0 ? Math.round((carbCalories / totalCalories) * 100) : 0
  const fatPercent = totalCalories > 0 ? Math.round((fatCalories / totalCalories) * 100) : 0

  // Recommendations based on plant-based diet research
  const recommendations = {
    protein: { min: 10, max: 20, optimal: 15 },
    carbs: { min: 45, max: 65, optimal: 55 },
    fat: { min: 20, max: 35, optimal: 30 },
  }

  const getStatusColor = (value: number, rec: typeof recommendations.protein) => {
    if (value >= rec.min && value <= rec.max) return "text-green-600"
    if (value < rec.min - 5 || value > rec.max + 5) return "text-red-600"
    return "text-amber-600"
  }

  const handleCalculate = () => {
    if (nutrients.protein > 0 || nutrients.carbs > 0 || nutrients.fat > 0) {
      setShowResults(true)
    }
  }

  const handleReset = () => {
    setNutrients({ protein: 0, carbs: 0, fat: 0 })
    setShowResults(false)
  }

  // SVG donut chart calculations
  const radius = 80
  const circumference = 2 * Math.PI * radius
  const proteinOffset = 0
  const carbOffset = (proteinPercent / 100) * circumference
  const fatOffset = ((proteinPercent + carbPercent) / 100) * circumference

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-background">
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600 rounded-full mb-6">
              <PieChart className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-serif font-light text-brand-dark mb-4">Nutrient Ratio Visualizer</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enter your daily macronutrient intake to visualize your protein, carb, and fat ratios. Compare your
              current diet to recommended ranges for optimal health.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Enter Your Macros</CardTitle>
                <CardDescription>Input your daily macronutrient intake in grams</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="calories">Daily Calorie Target (optional)</Label>
                  <Input
                    id="calories"
                    type="number"
                    value={dailyCalories}
                    onChange={(e) => setDailyCalories(Number(e.target.value))}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="protein">Protein (g)</Label>
                  <Input
                    id="protein"
                    type="number"
                    placeholder="e.g., 75"
                    value={nutrients.protein || ""}
                    onChange={(e) => setNutrients({ ...nutrients, protein: Number(e.target.value) })}
                    className="mt-1"
                  />
                  <p className="text-xs text-muted-foreground mt-1">4 calories per gram</p>
                </div>

                <div>
                  <Label htmlFor="carbs">Carbohydrates (g)</Label>
                  <Input
                    id="carbs"
                    type="number"
                    placeholder="e.g., 275"
                    value={nutrients.carbs || ""}
                    onChange={(e) => setNutrients({ ...nutrients, carbs: Number(e.target.value) })}
                    className="mt-1"
                  />
                  <p className="text-xs text-muted-foreground mt-1">4 calories per gram</p>
                </div>

                <div>
                  <Label htmlFor="fat">Fat (g)</Label>
                  <Input
                    id="fat"
                    type="number"
                    placeholder="e.g., 65"
                    value={nutrients.fat || ""}
                    onChange={(e) => setNutrients({ ...nutrients, fat: Number(e.target.value) })}
                    className="mt-1"
                  />
                  <p className="text-xs text-muted-foreground mt-1">9 calories per gram</p>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-brand hover:bg-brand-hover" onClick={handleCalculate}>
                    Visualize Ratios
                  </Button>
                  <Button variant="outline" onClick={handleReset} className="bg-transparent">
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Macro Distribution</CardTitle>
                <CardDescription>
                  {showResults
                    ? `Total: ${totalCalories} calories from macros`
                    : "Enter your macros to see the visualization"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {showResults && totalCalories > 0 ? (
                  <div className="space-y-6">
                    <div className="flex justify-center">
                      <svg width="200" height="200" viewBox="0 0 200 200">
                        <circle cx="100" cy="100" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="20" />
                        {/* Protein segment */}
                        <circle
                          cx="100"
                          cy="100"
                          r={radius}
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="20"
                          strokeDasharray={`${(proteinPercent / 100) * circumference} ${circumference}`}
                          strokeDashoffset={-proteinOffset}
                          transform="rotate(-90 100 100)"
                        />
                        {/* Carbs segment */}
                        <circle
                          cx="100"
                          cy="100"
                          r={radius}
                          fill="none"
                          stroke="#f59e0b"
                          strokeWidth="20"
                          strokeDasharray={`${(carbPercent / 100) * circumference} ${circumference}`}
                          strokeDashoffset={-carbOffset}
                          transform="rotate(-90 100 100)"
                        />
                        {/* Fat segment */}
                        <circle
                          cx="100"
                          cy="100"
                          r={radius}
                          fill="none"
                          stroke="#f97316"
                          strokeWidth="20"
                          strokeDasharray={`${(fatPercent / 100) * circumference} ${circumference}`}
                          strokeDashoffset={-fatOffset}
                          transform="rotate(-90 100 100)"
                        />
                        <text x="100" y="95" textAnchor="middle" className="text-2xl font-bold" fill="currentColor">
                          {totalCalories}
                        </text>
                        <text x="100" y="115" textAnchor="middle" className="text-sm" fill="#6b7280">
                          calories
                        </text>
                      </svg>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 bg-green-500 rounded" />
                          <span>Protein</span>
                        </div>
                        <div className="text-right">
                          <span className={`font-bold ${getStatusColor(proteinPercent, recommendations.protein)}`}>
                            {proteinPercent}%
                          </span>
                          <span className="text-sm text-muted-foreground ml-2">({nutrients.protein}g)</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 bg-amber-500 rounded" />
                          <span>Carbohydrates</span>
                        </div>
                        <div className="text-right">
                          <span className={`font-bold ${getStatusColor(carbPercent, recommendations.carbs)}`}>
                            {carbPercent}%
                          </span>
                          <span className="text-sm text-muted-foreground ml-2">({nutrients.carbs}g)</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 bg-orange-500 rounded" />
                          <span>Fat</span>
                        </div>
                        <div className="text-right">
                          <span className={`font-bold ${getStatusColor(fatPercent, recommendations.fat)}`}>
                            {fatPercent}%
                          </span>
                          <span className="text-sm text-muted-foreground ml-2">({nutrients.fat}g)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <PieChart className="h-12 w-12 mx-auto mb-4 opacity-30" />
                    <p>Enter your macronutrient intake to see your nutrient ratios visualized</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Recommended Macro Ranges</CardTitle>
              <CardDescription>Based on whole-food, plant-based nutrition research</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-2">Protein</h4>
                  <p className="text-2xl font-bold text-green-600 mb-1">10-20%</p>
                  <p className="text-sm text-muted-foreground">
                    Optimal: ~15% of calories. Plant proteins from legumes, tofu, tempeh, and whole grains provide all
                    essential amino acids.
                  </p>
                </div>

                <div className="p-4 bg-amber-50 rounded-lg">
                  <h4 className="font-semibold text-amber-700 mb-2">Carbohydrates</h4>
                  <p className="text-2xl font-bold text-amber-600 mb-1">45-65%</p>
                  <p className="text-sm text-muted-foreground">
                    Optimal: ~55% of calories. Focus on complex carbs from whole grains, fruits, vegetables, and
                    legumes.
                  </p>
                </div>

                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-700 mb-2">Fat</h4>
                  <p className="text-2xl font-bold text-orange-600 mb-1">20-35%</p>
                  <p className="text-sm text-muted-foreground">
                    Optimal: ~30% of calories. Prioritize healthy fats from nuts, seeds, avocado, and olive oil.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 p-6 bg-teal-50 rounded-xl">
            <h3 className="font-semibold mb-3">Understanding Your Results</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>
                <span className="text-green-600 font-medium">Green</span> - Within recommended range
              </li>
              <li>
                <span className="text-amber-600 font-medium">Yellow</span> - Slightly outside recommended range
              </li>
              <li>
                <span className="text-red-600 font-medium">Red</span> - Significantly outside recommended range
              </li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4">
              These ranges are general guidelines. Individual needs may vary based on activity level, health goals, and
              other factors. Consult a healthcare professional for personalized advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
