"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, ClipboardList, Plus, Trash2, Coffee, Sun, Sunset, Moon } from "lucide-react"

interface FoodEntry {
  id: string
  meal: string
  food: string
  calories: number
  time: string
}

export default function FoodLogPage() {
  const [entries, setEntries] = useState<FoodEntry[]>([])
  const [newEntry, setNewEntry] = useState({
    meal: "breakfast",
    food: "",
    calories: 0,
    time: "",
  })

  const addEntry = () => {
    if (!newEntry.food.trim() || newEntry.calories <= 0) return

    setEntries([
      ...entries,
      {
        id: Date.now().toString(),
        ...newEntry,
        time: newEntry.time || new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      },
    ])
    setNewEntry({ meal: "breakfast", food: "", calories: 0, time: "" })
  }

  const removeEntry = (id: string) => {
    setEntries(entries.filter((entry) => entry.id !== id))
  }

  const totalCalories = entries.reduce((sum, entry) => sum + entry.calories, 0)

  const getMealIcon = (meal: string) => {
    switch (meal) {
      case "breakfast":
        return <Coffee className="h-4 w-4" />
      case "lunch":
        return <Sun className="h-4 w-4" />
      case "dinner":
        return <Sunset className="h-4 w-4" />
      case "snack":
        return <Moon className="h-4 w-4" />
      default:
        return <Coffee className="h-4 w-4" />
    }
  }

  const mealColors: Record<string, string> = {
    breakfast: "bg-amber-100 text-amber-700",
    lunch: "bg-green-100 text-green-700",
    dinner: "bg-blue-100 text-blue-700",
    snack: "bg-purple-100 text-purple-700",
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-background">
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
              <ClipboardList className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-serif font-light text-brand-dark mb-4">Daily Food Log</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Track your daily food intake to build awareness of your eating habits. Simple logging helps you stay
              accountable and make healthier choices.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Add Food Entry</CardTitle>
                  <CardDescription>Log what you've eaten today</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <Label htmlFor="meal">Meal</Label>
                      <Select
                        value={newEntry.meal}
                        onValueChange={(value) => setNewEntry({ ...newEntry, meal: value })}
                      >
                        <SelectTrigger id="meal">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="breakfast">Breakfast</SelectItem>
                          <SelectItem value="lunch">Lunch</SelectItem>
                          <SelectItem value="dinner">Dinner</SelectItem>
                          <SelectItem value="snack">Snack</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <Label htmlFor="food">Food</Label>
                      <Input
                        id="food"
                        placeholder="e.g., Oatmeal with berries"
                        value={newEntry.food}
                        onChange={(e) => setNewEntry({ ...newEntry, food: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="calories">Calories</Label>
                      <Input
                        id="calories"
                        type="number"
                        placeholder="250"
                        value={newEntry.calories || ""}
                        onChange={(e) => setNewEntry({ ...newEntry, calories: Number(e.target.value) })}
                      />
                    </div>
                  </div>
                  <Button
                    onClick={addEntry}
                    className="w-full bg-brand hover:bg-brand-hover"
                    disabled={!newEntry.food.trim() || newEntry.calories <= 0}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Entry
                  </Button>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Today's Log</CardTitle>
                  <CardDescription>
                    {entries.length === 0
                      ? "No entries yet - start logging your meals"
                      : `${entries.length} ${entries.length === 1 ? "entry" : "entries"} recorded`}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {entries.length === 0 ? (
                    <div className="text-center py-12 text-muted-foreground">
                      <ClipboardList className="h-12 w-12 mx-auto mb-4 opacity-30" />
                      <p>Your food log is empty</p>
                      <p className="text-sm">Add your first meal above to get started</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {entries.map((entry) => (
                        <div
                          key={entry.id}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                        >
                          <div className="flex items-center gap-4">
                            <div className={`p-2 rounded-full ${mealColors[entry.meal]}`}>
                              {getMealIcon(entry.meal)}
                            </div>
                            <div>
                              <p className="font-medium">{entry.food}</p>
                              <p className="text-sm text-muted-foreground">
                                {entry.meal.charAt(0).toUpperCase() + entry.meal.slice(1)} · {entry.time}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="font-semibold text-brand">{entry.calories} cal</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeEntry(entry.id)}
                            >
                              <Trash2 className="h-4 w-4 text-muted-foreground" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="sticky top-6">
                <CardHeader>
                  <CardTitle>Daily Summary</CardTitle>
                  <CardDescription>{new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center p-6 bg-brand-lighter rounded-xl mb-6">
                    <span className="text-4xl font-bold text-brand">{totalCalories}</span>
                    <span className="block text-muted-foreground">Total Calories</span>
                  </div>

                  <div className="space-y-3">
                    {["breakfast", "lunch", "dinner", "snack"].map((meal) => {
                      const mealEntries = entries.filter((e) => e.meal === meal)
                      const mealCalories = mealEntries.reduce((sum, e) => sum + e.calories, 0)
                      return (
                        <div
                          key={meal}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="flex items-center gap-2">
                            <div className={`p-1.5 rounded-full ${mealColors[meal]}`}>
                              {getMealIcon(meal)}
                            </div>
                            <span className="capitalize">{meal}</span>
                          </div>
                          <span className="font-medium">{mealCalories} cal</span>
                        </div>
                      )
                    })}
                  </div>

                  <div className="mt-6 pt-4 border-t text-center">
                    <p className="text-sm text-muted-foreground">
                      Track your meals daily to build healthy eating habits
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 p-8 rounded-xl">
            <h2 className="text-xl font-semibold text-brand-dark mb-4">Why Track Your Food?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-medium mb-2">Build Awareness</h3>
                <p className="text-sm text-muted-foreground">
                  Understanding what you eat helps you identify patterns and make better choices.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Stay Accountable</h3>
                <p className="text-sm text-muted-foreground">
                  Logging meals keeps you mindful and accountable to your health goals.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Make Progress</h3>
                <p className="text-sm text-muted-foreground">
                  Track trends over time to see how small changes lead to big results.
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              <strong>Note:</strong> This is a session-based log. For persistent tracking, consider using the NxHealth
              app or keeping a physical food journal.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
