"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, Minus } from "lucide-react"

interface MealItem {
  id: string
  name: string
  calories: number
  protein: number
  carbs: number
  fat: number
}

export function MealTracker() {
  const [meals, setMeals] = useState<MealItem[]>([])
  const [newMeal, setNewMeal] = useState({
    name: "",
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
  })

  const addMeal = () => {
    if (newMeal.name) {
      setMeals([...meals, { ...newMeal, id: Date.now().toString() }])
      setNewMeal({ name: "", calories: 0, protein: 0, carbs: 0, fat: 0 })
    }
  }

  const removeMeal = (id: string) => {
    setMeals(meals.filter((meal) => meal.id !== id))
  }

  const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0)

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-serif font-light text-green-800">Daily Meal Tracker</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Add Meal Form */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <Label htmlFor="meal-name">Meal Name</Label>
            <Input
              id="meal-name"
              value={newMeal.name}
              onChange={(e) => setNewMeal({ ...newMeal, name: e.target.value })}
              placeholder="e.g., Quinoa Bowl"
            />
          </div>
          <div>
            <Label htmlFor="calories">Calories</Label>
            <Input
              id="calories"
              type="number"
              value={newMeal.calories}
              onChange={(e) => setNewMeal({ ...newMeal, calories: Number(e.target.value) })}
            />
          </div>
          <div>
            <Label htmlFor="protein">Protein (g)</Label>
            <Input
              id="protein"
              type="number"
              value={newMeal.protein}
              onChange={(e) => setNewMeal({ ...newMeal, protein: Number(e.target.value) })}
            />
          </div>
          <Button onClick={addMeal} className="col-span-2 bg-green-600 hover:bg-green-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Meal
          </Button>
        </div>

        {/* Meals List */}
        <div className="space-y-2">
          {meals.map((meal) => (
            <div key={meal.id} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div>
                <h4 className="font-medium">{meal.name}</h4>
                <p className="text-sm text-gray-600">
                  {meal.calories} cal • {meal.protein}g protein
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => removeMeal(meal.id)}
                className="text-red-600 hover:text-red-700"
              >
                <Minus className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Daily Summary */}
        <div className="p-4 bg-green-100 rounded-lg">
          <h3 className="font-medium text-green-800">Daily Total</h3>
          <p className="text-2xl font-bold text-green-900">{totalCalories} calories</p>
        </div>
      </CardContent>
    </Card>
  )
}
