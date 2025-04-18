"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export function NutritionCalculator() {
  const [weight, setWeight] = useState("")
  const [goal, setGoal] = useState("maintain")
  const [activityLevel, setActivityLevel] = useState("moderate")
  const [macros, setMacros] = useState<{ protein: number; carbs: number; fat: number } | null>(null)
  const [caloriesPerDay, setCaloriesPerDay] = useState<number | null>(null)
  const [distribution, setDistribution] = useState<"balanced" | "lowCarb" | "highProtein">("balanced")

  const calculateMacros = () => {
    if (!weight) return

    // Calculate base calories based on weight and activity level
    const weightInKg = Number.parseFloat(weight)

    // Base multiplier based on activity level
    let activityMultiplier = 30 // Moderate (baseline)
    if (activityLevel === "sedentary") activityMultiplier = 26
    if (activityLevel === "light") activityMultiplier = 28
    if (activityLevel === "active") activityMultiplier = 32
    if (activityLevel === "very-active") activityMultiplier = 34

    // Calculate daily calories
    let dailyCalories = weightInKg * activityMultiplier

    // Adjust based on goal
    if (goal === "lose") dailyCalories *= 0.8 // 20% deficit
    if (goal === "gain") dailyCalories *= 1.1 // 10% surplus

    // Round calories
    dailyCalories = Math.round(dailyCalories)
    setCaloriesPerDay(dailyCalories)

    // Calculate macros based on distribution type
    let proteinPct, carbsPct, fatPct

    switch (distribution) {
      case "lowCarb":
        proteinPct = 0.3 // 30%
        fatPct = 0.5 // 50%
        carbsPct = 0.2 // 20%
        break
      case "highProtein":
        proteinPct = 0.4 // 40%
        carbsPct = 0.3 // 30%
        fatPct = 0.3 // 30%
        break
      case "balanced":
      default:
        proteinPct = 0.3 // 30%
        carbsPct = 0.4 // 40%
        fatPct = 0.3 // 30%
        break
    }

    // Calculate grams of each macronutrient
    // Protein: 4 calories per gram
    // Carbs: 4 calories per gram
    // Fat: 9 calories per gram
    const proteinGrams = Math.round((dailyCalories * proteinPct) / 4)
    const carbsGrams = Math.round((dailyCalories * carbsPct) / 4)
    const fatGrams = Math.round((dailyCalories * fatPct) / 9)

    setMacros({
      protein: proteinGrams,
      carbs: carbsGrams,
      fat: fatGrams,
    })
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Macronutrient Calculator</CardTitle>
        <CardDescription>
          Calculate your recommended protein, carbohydrates, and fat intake based on your goals.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="weight">Weight</Label>
          <Input
            id="weight"
            type="number"
            placeholder="kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="goal">Your Goal</Label>
          <Select value={goal} onValueChange={setGoal}>
            <SelectTrigger id="goal">
              <SelectValue placeholder="Select your goal" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lose">Lose Weight</SelectItem>
              <SelectItem value="maintain">Maintain Weight</SelectItem>
              <SelectItem value="gain">Gain Weight/Muscle</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="activity">Activity Level</Label>
          <Select value={activityLevel} onValueChange={setActivityLevel}>
            <SelectTrigger id="activity">
              <SelectValue placeholder="Select activity level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
              <SelectItem value="light">Light (exercise 1-3 days/week)</SelectItem>
              <SelectItem value="moderate">Moderate (exercise 3-5 days/week)</SelectItem>
              <SelectItem value="active">Active (exercise 6-7 days/week)</SelectItem>
              <SelectItem value="very-active">Very Active (hard exercise daily)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Macro Distribution</Label>
          <Tabs defaultValue="balanced" value={distribution} onValueChange={(value) => setDistribution(value as any)}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="balanced">Balanced</TabsTrigger>
              <TabsTrigger value="lowCarb">Low Carb</TabsTrigger>
              <TabsTrigger value="highProtein">High Protein</TabsTrigger>
            </TabsList>
            <TabsContent value="balanced" className="p-4 bg-gray-50 rounded-md mt-2">
              <p className="text-sm text-gray-600">
                A balanced approach with moderate protein, carbs, and fat. Suitable for most people.
              </p>
            </TabsContent>
            <TabsContent value="lowCarb" className="p-4 bg-gray-50 rounded-md mt-2">
              <p className="text-sm text-gray-600">
                Higher fat, lower carbs. May help with satiety and blood sugar management.
              </p>
            </TabsContent>
            <TabsContent value="highProtein" className="p-4 bg-gray-50 rounded-md mt-2">
              <p className="text-sm text-gray-600">Emphasizes protein intake. Good for muscle building and recovery.</p>
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start space-y-4">
        <Button onClick={calculateMacros}>Calculate Macros</Button>
        {macros !== null && caloriesPerDay !== null && (
          <div className="text-center w-full space-y-6">
            <div>
              <p className="text-lg font-medium">Your daily calorie target:</p>
              <p className="text-3xl font-bold text-green-600">{caloriesPerDay} calories</p>
            </div>

            <div className="space-y-4">
              <p className="text-lg font-medium">Recommended Macronutrient Breakdown:</p>

              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span>Protein</span>
                    <span className="font-medium">{macros.protein}g</span>
                  </div>
                  <Progress value={distribution === "highProtein" ? 40 : 30} className="h-2 bg-gray-200" />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span>Carbohydrates</span>
                    <span className="font-medium">{macros.carbs}g</span>
                  </div>
                  <Progress
                    value={distribution === "balanced" ? 40 : distribution === "lowCarb" ? 20 : 30}
                    className="h-2 bg-gray-200"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span>Fat</span>
                    <span className="font-medium">{macros.fat}g</span>
                  </div>
                  <Progress value={distribution === "lowCarb" ? 50 : 30} className="h-2 bg-gray-200" />
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-2">
              These recommendations are estimates based on your inputs. Adjust as needed based on your individual
              response and consult with a nutrition professional for personalized advice.
            </p>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
