"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  ChefHat,
  ShoppingCart,
  Target,
  Plus,
  X,
  Clock,
  Users,
  Search,
  Star,
  Heart,
  Download,
  Share2,
  Utensils,
  Apple,
  Leaf,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Meal {
  id: string
  name: string
  calories: number
  protein: number
  carbs: number
  fat: number
  fiber: number
  prepTime: number
  servings: number
  ingredients: string[]
  instructions: string[]
  tags: string[]
  difficulty: "Easy" | "Medium" | "Hard"
  rating: number
  image?: string
  isFavorite?: boolean
}

interface MealPlanEntry {
  id: string
  mealId: string
  meal: Meal
  day: string
  mealType: string
  servings: number
}

interface NutritionGoals {
  calories: number
  protein: number
  carbs: number
  fat: number
  fiber: number
}

export default function NxMealPlannerPage() {
  const [selectedWeek, setSelectedWeek] = useState("current")
  const [mealPlan, setMealPlan] = useState<MealPlanEntry[]>([])
  const [nutritionGoals, setNutritionGoals] = useState<NutritionGoals>({
    calories: 2000,
    protein: 150,
    carbs: 250,
    fat: 65,
    fiber: 30,
  })
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterTag, setFilterTag] = useState("all")
  const [filterDifficulty, setFilterDifficulty] = useState("all")
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)
  const [draggedMeal, setDraggedMeal] = useState<Meal | null>(null)
  const [activeTab, setActiveTab] = useState("planner")

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack"]

  const mealDatabase: Meal[] = [
    {
      id: "1",
      name: "Mediterranean Quinoa Bowl",
      calories: 450,
      protein: 18,
      carbs: 65,
      fat: 12,
      fiber: 8,
      prepTime: 25,
      servings: 2,
      difficulty: "Easy",
      rating: 4.8,
      ingredients: [
        "1 cup quinoa",
        "1 can chickpeas, drained and rinsed",
        "1 cucumber, diced",
        "2 tomatoes, chopped",
        "1/4 cup feta cheese, crumbled",
        "2 tbsp extra virgin olive oil",
        "1 lemon, juiced",
        "Fresh herbs (parsley, mint)",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Rinse quinoa and cook according to package directions (about 15 minutes)",
        "While quinoa cooks, prepare vegetables by dicing cucumber and chopping tomatoes",
        "Drain and rinse chickpeas, pat dry",
        "In a large bowl, combine cooked quinoa, chickpeas, cucumber, and tomatoes",
        "Whisk together olive oil, lemon juice, salt, and pepper for dressing",
        "Pour dressing over quinoa mixture and toss gently",
        "Top with crumbled feta cheese and fresh herbs",
        "Serve immediately or chill for 30 minutes for better flavor",
      ],
      tags: ["Mediterranean", "Vegetarian", "High-Protein", "Gluten-Free", "Meal-Prep"],
      isFavorite: false,
    },
    {
      id: "2",
      name: "Green Power Smoothie Bowl",
      calories: 320,
      protein: 12,
      carbs: 45,
      fat: 8,
      fiber: 12,
      prepTime: 10,
      servings: 1,
      difficulty: "Easy",
      rating: 4.6,
      ingredients: [
        "2 cups fresh spinach",
        "1 frozen banana",
        "1/2 ripe avocado",
        "1 cup unsweetened almond milk",
        "2 tbsp chia seeds",
        "1/2 cup mixed berries",
        "1 tbsp almond butter",
        "1 tsp honey (optional)",
      ],
      instructions: [
        "Add spinach, banana, avocado, and almond milk to blender",
        "Blend on high until smooth and creamy",
        "Pour into a bowl",
        "Top with chia seeds, mixed berries, and almond butter",
        "Drizzle with honey if desired",
        "Serve immediately",
      ],
      tags: ["Vegan", "Raw", "High-Fiber", "Antioxidant-Rich", "Breakfast"],
      isFavorite: true,
    },
    {
      id: "3",
      name: "Hearty Lentil Curry",
      calories: 380,
      protein: 20,
      carbs: 55,
      fat: 10,
      fiber: 15,
      prepTime: 35,
      servings: 4,
      difficulty: "Medium",
      rating: 4.7,
      ingredients: [
        "1 cup red lentils",
        "1 can (400ml) coconut milk",
        "2 cups vegetable broth",
        "1 large onion, diced",
        "3 cloves garlic, minced",
        "1 tbsp curry powder",
        "1 tsp turmeric",
        "1 cup brown rice",
        "Mixed vegetables (carrots, bell peppers)",
        "Fresh cilantro for garnish",
      ],
      instructions: [
        "Cook brown rice separately according to package directions",
        "Heat oil in large pot, sauté onion until translucent",
        "Add garlic, curry powder, and turmeric, cook for 1 minute",
        "Add lentils, coconut milk, and vegetable broth",
        "Bring to boil, then reduce heat and simmer for 20 minutes",
        "Add mixed vegetables in last 10 minutes of cooking",
        "Season with salt and pepper",
        "Serve over rice, garnish with fresh cilantro",
      ],
      tags: ["Vegan", "High-Protein", "Comfort-Food", "Meal-Prep", "Spicy"],
      isFavorite: false,
    },
    {
      id: "4",
      name: "Avocado Toast with Hemp Seeds",
      calories: 280,
      protein: 8,
      carbs: 30,
      fat: 16,
      fiber: 10,
      prepTime: 5,
      servings: 1,
      difficulty: "Easy",
      rating: 4.4,
      ingredients: [
        "2 slices whole grain bread",
        "1 ripe avocado",
        "2 tbsp hemp seeds",
        "1/2 lemon, juiced",
        "Sea salt to taste",
        "Black pepper to taste",
        "Red pepper flakes (optional)",
        "Cherry tomatoes for garnish",
      ],
      instructions: [
        "Toast bread slices to desired doneness",
        "Cut avocado in half, remove pit",
        "Mash avocado with lemon juice, salt, and pepper",
        "Spread avocado mixture evenly on toast",
        "Sprinkle with hemp seeds and red pepper flakes",
        "Garnish with halved cherry tomatoes",
        "Serve immediately",
      ],
      tags: ["Quick", "Healthy-Fats", "Plant-Based", "Breakfast", "No-Cook"],
      isFavorite: true,
    },
    {
      id: "5",
      name: "Rainbow Buddha Bowl",
      calories: 420,
      protein: 16,
      carbs: 48,
      fat: 18,
      fiber: 12,
      prepTime: 30,
      servings: 2,
      difficulty: "Medium",
      rating: 4.9,
      ingredients: [
        "1 cup quinoa",
        "2 cups mixed roasted vegetables",
        "1/2 cup chickpeas",
        "2 cups mixed leafy greens",
        "1/4 cup tahini",
        "2 tbsp lemon juice",
        "1 tbsp maple syrup",
        "Pumpkin seeds for topping",
        "Shredded purple cabbage",
      ],
      instructions: [
        "Cook quinoa according to package directions",
        "Roast vegetables (sweet potato, broccoli, bell peppers) at 400°F for 25 minutes",
        "Prepare tahini dressing by whisking tahini, lemon juice, maple syrup, and water",
        "Arrange greens in bowls as base",
        "Add quinoa, roasted vegetables, and chickpeas in sections",
        "Drizzle with tahini dressing",
        "Top with pumpkin seeds and purple cabbage",
        "Serve immediately",
      ],
      tags: ["Vegan", "Nutrient-Dense", "Colorful", "Balanced", "Instagram-Worthy"],
      isFavorite: false,
    },
    {
      id: "6",
      name: "Overnight Oats with Berries",
      calories: 300,
      protein: 10,
      carbs: 52,
      fat: 6,
      fiber: 8,
      prepTime: 5,
      servings: 1,
      difficulty: "Easy",
      rating: 4.5,
      ingredients: [
        "1/2 cup rolled oats",
        "1/2 cup unsweetened almond milk",
        "1 tbsp chia seeds",
        "1 tbsp pure maple syrup",
        "1/2 cup mixed berries",
        "1 tbsp almond butter",
        "1/2 tsp vanilla extract",
        "Pinch of cinnamon",
      ],
      instructions: [
        "In a jar or container, mix oats, almond milk, chia seeds, maple syrup, and vanilla",
        "Stir well to combine all ingredients",
        "Cover and refrigerate overnight (at least 4 hours)",
        "In the morning, stir the mixture",
        "Top with mixed berries and almond butter",
        "Sprinkle with cinnamon",
        "Enjoy cold or let sit at room temperature for 10 minutes",
      ],
      tags: ["Make-Ahead", "No-Cook", "Fiber-Rich", "Breakfast", "Portable"],
      isFavorite: true,
    },
    {
      id: "7",
      name: "Spicy Black Bean Tacos",
      calories: 350,
      protein: 14,
      carbs: 58,
      fat: 8,
      fiber: 14,
      prepTime: 20,
      servings: 3,
      difficulty: "Easy",
      rating: 4.6,
      ingredients: [
        "6 corn tortillas",
        "1 can black beans, drained and rinsed",
        "1 bell pepper, diced",
        "1/2 red onion, diced",
        "2 cloves garlic, minced",
        "1 tsp cumin",
        "1/2 tsp chili powder",
        "1 avocado, sliced",
        "Fresh cilantro",
        "Lime wedges",
      ],
      instructions: [
        "Heat a pan over medium heat",
        "Sauté onion and bell pepper until softened",
        "Add garlic, cumin, and chili powder, cook for 1 minute",
        "Add black beans and cook until heated through",
        "Warm tortillas in a dry pan or microwave",
        "Fill tortillas with bean mixture",
        "Top with avocado slices and cilantro",
        "Serve with lime wedges",
      ],
      tags: ["Mexican", "Vegan", "Quick", "Budget-Friendly", "Spicy"],
      isFavorite: false,
    },
    {
      id: "8",
      name: "Asian-Style Stir-Fry",
      calories: 390,
      protein: 15,
      carbs: 45,
      fat: 16,
      fiber: 8,
      prepTime: 25,
      servings: 2,
      difficulty: "Medium",
      rating: 4.7,
      ingredients: [
        "2 cups mixed vegetables (broccoli, snap peas, carrots)",
        "1 block firm tofu, cubed",
        "2 tbsp sesame oil",
        "2 tbsp soy sauce",
        "1 tbsp rice vinegar",
        "1 tsp fresh ginger, grated",
        "2 cloves garlic, minced",
        "1 cup brown rice",
        "Sesame seeds for garnish",
        "Green onions, sliced",
      ],
      instructions: [
        "Cook brown rice according to package directions",
        "Press tofu and cut into cubes",
        "Heat sesame oil in large wok or pan",
        "Add tofu and cook until golden on all sides",
        "Remove tofu, add vegetables to pan",
        "Stir-fry vegetables for 5-7 minutes until crisp-tender",
        "Mix soy sauce, rice vinegar, ginger, and garlic",
        "Return tofu to pan, add sauce, toss everything together",
        "Serve over rice, garnish with sesame seeds and green onions",
      ],
      tags: ["Asian", "Vegan", "High-Protein", "Stir-Fry", "Umami"],
      isFavorite: false,
    },
  ]

  const allTags = Array.from(new Set(mealDatabase.flatMap((meal) => meal.tags)))

  const filteredMeals = mealDatabase.filter((meal) => {
    const matchesSearch =
      meal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      meal.ingredients.some((ing) => ing.toLowerCase().includes(searchTerm.toLowerCase())) ||
      meal.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesFilter = filterTag === "all" || meal.tags.includes(filterTag)
    const matchesDifficulty = filterDifficulty === "all" || meal.difficulty === filterDifficulty
    const matchesFavorites = !showFavoritesOnly || meal.isFavorite

    return matchesSearch && matchesFilter && matchesDifficulty && matchesFavorites
  })

  const addMealToPlan = (meal: Meal, day: string, mealType: string, servings: number = meal.servings) => {
    const newEntry: MealPlanEntry = {
      id: `${day}-${mealType}-${Date.now()}`,
      mealId: meal.id,
      meal,
      day,
      mealType,
      servings,
    }
    setMealPlan((prev) => [...prev, newEntry])
  }

  const removeMealFromPlan = (entryId: string) => {
    setMealPlan((prev) => prev.filter((entry) => entry.id !== entryId))
  }

  const getMealsForDayAndType = (day: string, mealType: string) => {
    return mealPlan.filter((entry) => entry.day === day && entry.mealType === mealType)
  }

  const calculateDayNutrition = (day: string) => {
    const dayMeals = mealPlan.filter((entry) => entry.day === day)
    return dayMeals.reduce(
      (total, entry) => {
        const multiplier = entry.servings / entry.meal.servings
        return {
          calories: total.calories + entry.meal.calories * multiplier,
          protein: total.protein + entry.meal.protein * multiplier,
          carbs: total.carbs + entry.meal.carbs * multiplier,
          fat: total.fat + entry.meal.fat * multiplier,
          fiber: total.fiber + entry.meal.fiber * multiplier,
        }
      },
      { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 },
    )
  }

  const calculateWeeklyNutrition = () => {
    return days.reduce(
      (total, day) => {
        const dayNutrition = calculateDayNutrition(day)
        return {
          calories: total.calories + dayNutrition.calories,
          protein: total.protein + dayNutrition.protein,
          carbs: total.carbs + dayNutrition.carbs,
          fat: total.fat + dayNutrition.fat,
          fiber: total.fiber + dayNutrition.fiber,
        }
      },
      { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 },
    )
  }

  const generateShoppingList = () => {
    const allIngredients = mealPlan.flatMap((entry) => {
      const multiplier = entry.servings / entry.meal.servings
      return entry.meal.ingredients.map((ingredient) => ({
        ingredient,
        multiplier,
      }))
    })

    const ingredientCounts = allIngredients.reduce(
      (acc, { ingredient, multiplier }) => {
        const baseIngredient = ingredient.split(",")[0] // Get base ingredient name
        acc[baseIngredient] = (acc[baseIngredient] || 0) + multiplier
        return acc
      },
      {} as Record<string, number>,
    )

    return Object.entries(ingredientCounts).map(([ingredient, count]) => ({
      ingredient,
      count: Math.ceil(count * 10) / 10, // Round to 1 decimal place
    }))
  }

  const toggleFavorite = (mealId: string) => {
    // In a real app, this would update the database
    console.log(`Toggle favorite for meal ${mealId}`)
  }

  const exportMealPlan = () => {
    const weeklyNutrition = calculateWeeklyNutrition()
    const shoppingList = generateShoppingList()

    const exportData = {
      week: selectedWeek,
      mealPlan: mealPlan,
      weeklyNutrition,
      shoppingList,
      nutritionGoals,
    }

    const dataStr = JSON.stringify(exportData, null, 2)
    const dataBlob = new Blob([dataStr], { type: "application/json" })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement("a")
    link.href = url
    link.download = `nxhealth-meal-plan-${selectedWeek}.json`
    link.click()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-lighter to-background">
      {/* Header */}
      <div className="bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-serif font-light text-brand-dark">NxMeal Planner</h1>
              <p className="text-muted-foreground mt-1">Plan your weekly meals with personalized nutrition guidance</p>
            </div>
            <div className="flex items-center space-x-4">
              <Select value={selectedWeek} onValueChange={setSelectedWeek}>
                <SelectTrigger className="w-48 border-border">
                  <SelectValue placeholder="Select week" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="current">Current Week</SelectItem>
                  <SelectItem value="next">Next Week</SelectItem>
                  <SelectItem value="custom">Custom Date</SelectItem>
                </SelectContent>
              </Select>
              <Button
                onClick={exportMealPlan}
                variant="outline"
                className="border-border text-brand hover:bg-brand-lighter bg-transparent"
              >
                <Download className="w-4 h-4 mr-2" />
                Export Plan
              </Button>
              <Button className="bg-brand hover:bg-brand-hover text-brand-foreground">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Shopping List
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-brand-lighter border border-border">
            <TabsTrigger
              value="planner"
              className="flex items-center data-[state=active]:bg-brand data-[state=active]:text-brand-foreground"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Meal Planner
            </TabsTrigger>
            <TabsTrigger
              value="recipes"
              className="flex items-center data-[state=active]:bg-brand data-[state=active]:text-brand-foreground"
            >
              <ChefHat className="w-4 h-4 mr-2" />
              Recipe Library
            </TabsTrigger>
            <TabsTrigger
              value="nutrition"
              className="flex items-center data-[state=active]:bg-brand data-[state=active]:text-brand-foreground"
            >
              <Target className="w-4 h-4 mr-2" />
              Nutrition Goals
            </TabsTrigger>
            <TabsTrigger
              value="shopping"
              className="flex items-center data-[state=active]:bg-brand data-[state=active]:text-brand-foreground"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Shopping Lists
            </TabsTrigger>
          </TabsList>

          <TabsContent value="planner" className="space-y-6">
            {/* Weekly Calendar Grid */}
            <Card className="border-border shadow-lg">
              <CardHeader className="bg-brand-lighter border-b border-border">
                <CardTitle className="text-brand-dark">Weekly Meal Plan</CardTitle>
                <CardDescription>Drag meals from the library below or click on meal slots to add meals</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <div className="grid grid-cols-8 gap-3 min-w-[900px]">
                    {/* Header Row */}
                    <div className="font-medium text-foreground p-3"></div>
                    {days.map((day) => {
                      const dayNutrition = calculateDayNutrition(day)
                      return (
                        <div
                          key={day}
                          className="font-medium text-foreground text-center py-3 bg-brand-light rounded-lg border border-border"
                        >
                          <div className="text-sm font-semibold">{day.slice(0, 3)}</div>
                          <div className="text-xs text-brand">{Math.round(dayNutrition.calories)} cal</div>
                          <div className="text-xs text-muted-foreground">
                            {Math.round(dayNutrition.protein)}p | {Math.round(dayNutrition.carbs)}c |{" "}
                            {Math.round(dayNutrition.fat)}f
                          </div>
                        </div>
                      )
                    })}

                    {/* Meal Rows */}
                    {mealTypes.map((mealType) => (
                      <React.Fragment key={mealType}>
                        <div className="font-medium text-foreground py-4 px-3 bg-muted rounded-lg flex items-center border border-border">
                          <div className="flex items-center">
                            {mealType === "Breakfast" && <Apple className="w-4 h-4 mr-2 text-orange-500" />}
                            {mealType === "Lunch" && <Utensils className="w-4 h-4 mr-2 text-blue-500" />}
                            {mealType === "Dinner" && <ChefHat className="w-4 h-4 mr-2 text-purple-500" />}
                            {mealType === "Snack" && <Leaf className="w-4 h-4 mr-2 text-green-500" />}
                            {mealType}
                          </div>
                        </div>
                        {days.map((day) => {
                          const meals = getMealsForDayAndType(day, mealType)
                          return (
                            <div
                              key={`${day}-${mealType}`}
                              className="border-2 border-dashed border-border rounded-lg p-3 min-h-[120px] hover:border-brand transition-all duration-200 bg-card"
                              onDrop={(e) => {
                                e.preventDefault()
                                if (draggedMeal) {
                                  addMealToPlan(draggedMeal, day, mealType)
                                  setDraggedMeal(null)
                                }
                              }}
                              onDragOver={(e) => e.preventDefault()}
                            >
                              {meals.length === 0 ? (
                                <div className="flex items-center justify-center h-full text-muted-foreground cursor-pointer hover:text-brand transition-colors">
                                  <Plus className="w-6 h-6" />
                                </div>
                              ) : (
                                <div className="space-y-2">
                                  <AnimatePresence>
                                    {meals.map((entry) => (
                                      <motion.div
                                        key={entry.id}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="bg-brand-light rounded-lg p-2 text-xs relative group hover:bg-brand-lighter transition-colors cursor-pointer"
                                        onClick={() => setSelectedMeal(entry.meal)}
                                      >
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation()
                                            removeMealFromPlan(entry.id)
                                          }}
                                          className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                                        >
                                          <X className="w-3 h-3" />
                                        </button>
                                        <div className="font-medium text-brand-dark truncate pr-4">
                                          {entry.meal.name}
                                        </div>
                                        <div className="text-brand flex items-center justify-between">
                                          <span>
                                            {Math.round((entry.meal.calories * entry.servings) / entry.meal.servings)}{" "}
                                            cal
                                          </span>
                                          <div className="flex items-center">
                                            <Clock className="w-3 h-3 mr-1" />
                                            <span>{entry.meal.prepTime}m</span>
                                          </div>
                                        </div>
                                      </motion.div>
                                    ))}
                                  </AnimatePresence>
                                </div>
                              )}
                            </div>
                          )
                        })}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Add Meals */}
            <Card className="border-border shadow-lg">
              <CardHeader className="bg-brand-lighter border-b border-border">
                <CardTitle className="text-brand-dark">Recipe Library</CardTitle>
                <CardDescription>Search, filter, and drag meals to add to your plan</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-4 mb-6">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Search meals, ingredients, or tags..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="border-border focus:border-brand"
                    />
                  </div>
                  <Select value={filterTag} onValueChange={setFilterTag}>
                    <SelectTrigger className="w-48 border-border">
                      <SelectValue placeholder="Filter by tag" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Tags</SelectItem>
                      {allTags.map((tag) => (
                        <SelectItem key={tag} value={tag}>
                          {tag}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={filterDifficulty} onValueChange={setFilterDifficulty}>
                    <SelectTrigger className="w-48 border-border">
                      <SelectValue placeholder="Filter by difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Difficulties</SelectItem>
                      <SelectItem value="Easy">Easy</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="Hard">Hard</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    variant={showFavoritesOnly ? "default" : "outline"}
                    onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                    className={
                      showFavoritesOnly
                        ? "bg-brand hover:bg-brand-hover text-brand-foreground"
                        : "border-border text-brand hover:bg-brand-lighter"
                    }
                  >
                    <Heart className={`w-4 h-4 mr-2 ${showFavoritesOnly ? "fill-current" : ""}`} />
                    Favorites
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <AnimatePresence>
                    {filteredMeals.map((meal) => (
                      <motion.div
                        key={meal.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        whileHover={{ scale: 1.02 }}
                        className="border border-border rounded-lg p-4 hover:shadow-md transition-all duration-200 cursor-grab active:cursor-grabbing bg-card"
                        draggable
                        onDragStart={() => setDraggedMeal(meal)}
                        onDragEnd={() => setDraggedMeal(null)}
                        onClick={() => setSelectedMeal(meal)}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-medium text-brand text-sm leading-tight">{meal.name}</h4>
                          <div className="flex items-center space-x-1 ml-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                toggleFavorite(meal.id)
                              }}
                              className="text-muted-foreground hover:text-red-500 transition-colors"
                            >
                              <Heart className={`w-4 h-4 ${meal.isFavorite ? "fill-current text-red-500" : ""}`} />
                            </button>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Star className="w-3 h-3 mr-1 fill-current text-yellow-400" />
                              {meal.rating}
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-3">
                          <div>Calories: {meal.calories}</div>
                          <div>Protein: {meal.protein}g</div>
                          <div>Prep: {meal.prepTime}m</div>
                          <div>Difficulty: {meal.difficulty}</div>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-3">
                          {meal.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs bg-brand-light text-brand">
                              {tag}
                            </Badge>
                          ))}
                          {meal.tags.length > 3 && (
                            <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">
                              +{meal.tags.length - 3}
                            </Badge>
                          )}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Users className="w-3 h-3 mr-1" />
                            {meal.servings} servings
                          </div>
                          <Button
                            size="sm"
                            className="bg-brand hover:bg-brand-hover text-brand-foreground text-xs"
                            onClick={(e) => {
                              e.stopPropagation()
                              setSelectedMeal(meal)
                            }}
                          >
                            View Recipe
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {filteredMeals.length === 0 && (
                  <div className="text-center py-12 text-muted-foreground">
                    <ChefHat className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                    <p>No meals found matching your criteria</p>
                    <Button
                      variant="outline"
                      className="mt-4 border-border text-brand hover:bg-brand-lighter bg-transparent"
                      onClick={() => {
                        setSearchTerm("")
                        setFilterTag("all")
                        setFilterDifficulty("all")
                        setShowFavoritesOnly(false)
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recipes" className="space-y-6">
            <Card className="border-border shadow-lg">
              <CardHeader className="bg-brand-lighter border-b border-border">
                <CardTitle className="text-brand-dark">Recipe Collection</CardTitle>
                <CardDescription>Browse and manage your complete recipe library</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mealDatabase.map((meal) => (
                    <Card key={meal.id} className="overflow-hidden border-border hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-medium text-lg text-brand-dark">{meal.name}</h3>
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Star className="w-4 h-4 mr-1 fill-current text-yellow-400" />
                              {meal.rating}
                            </div>
                            <button
                              onClick={() => toggleFavorite(meal.id)}
                              className="text-muted-foreground hover:text-red-500 transition-colors"
                            >
                              <Heart className={`w-4 h-4 ${meal.isFavorite ? "fill-current text-red-500" : ""}`} />
                            </button>
                          </div>
                        </div>

                        <div className="grid grid-cols-4 gap-2 text-sm text-muted-foreground mb-3">
                          <div className="text-center">
                            <div className="font-medium">{meal.calories}</div>
                            <div className="text-xs">Calories</div>
                          </div>
                          <div className="text-center">
                            <div className="font-medium">{meal.protein}g</div>
                            <div className="text-xs">Protein</div>
                          </div>
                          <div className="text-center">
                            <div className="font-medium">{meal.prepTime}m</div>
                            <div className="text-xs">Prep Time</div>
                          </div>
                          <div className="text-center">
                            <div className="font-medium">{meal.difficulty}</div>
                            <div className="text-xs">Difficulty</div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-3">
                          {meal.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs border-border text-brand">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="space-y-2">
                          <div>
                            <h4 className="font-medium text-sm mb-1">Key Ingredients:</h4>
                            <div className="text-xs text-muted-foreground">
                              {meal.ingredients.slice(0, 3).join(", ")}
                              {meal.ingredients.length > 3 && "..."}
                            </div>
                          </div>
                        </div>

                        <Button
                          className="w-full mt-3 bg-brand hover:bg-brand-hover text-brand-foreground"
                          onClick={() => setSelectedMeal(meal)}
                        >
                          View Full Recipe
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="nutrition" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-border shadow-lg">
                <CardHeader className="bg-brand-lighter border-b border-border">
                  <CardTitle className="text-brand-dark">Nutrition Goals</CardTitle>
                  <CardDescription>Set your daily nutrition targets</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="calories">Daily Calories</Label>
                      <Input
                        id="calories"
                        type="number"
                        value={nutritionGoals.calories}
                        onChange={(e) =>
                          setNutritionGoals({ ...nutritionGoals, calories: Number.parseInt(e.target.value) })
                        }
                        className="border-border focus:border-brand"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="protein">Protein (g)</Label>
                      <Input
                        id="protein"
                        type="number"
                        value={nutritionGoals.protein}
                        onChange={(e) =>
                          setNutritionGoals({ ...nutritionGoals, protein: Number.parseInt(e.target.value) })
                        }
                        className="border-border focus:border-brand"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="carbs">Carbohydrates (g)</Label>
                      <Input
                        id="carbs"
                        type="number"
                        value={nutritionGoals.carbs}
                        onChange={(e) =>
                          setNutritionGoals({ ...nutritionGoals, carbs: Number.parseInt(e.target.value) })
                        }
                        className="border-border focus:border-brand"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fat">Fat (g)</Label>
                      <Input
                        id="fat"
                        type="number"
                        value={nutritionGoals.fat}
                        onChange={(e) => setNutritionGoals({ ...nutritionGoals, fat: Number.parseInt(e.target.value) })}
                        className="border-border focus:border-brand"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fiber">Fiber (g)</Label>
                      <Input
                        id="fiber"
                        type="number"
                        value={nutritionGoals.fiber}
                        onChange={(e) =>
                          setNutritionGoals({ ...nutritionGoals, fiber: Number.parseInt(e.target.value) })
                        }
                        className="border-border focus:border-brand"
                      />
                    </div>
                  </div>
                  <Button className="w-full bg-brand hover:bg-brand-hover text-brand-foreground">Save Goals</Button>
                </CardContent>
              </Card>

              {/* Weekly Nutrition Summary */}
              <Card className="border-border shadow-lg">
                <CardHeader className="bg-brand-lighter border-b border-border">
                  <CardTitle className="text-brand-dark">Weekly Progress</CardTitle>
                  <CardDescription>Track your nutrition against your goals</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {days.map((day) => {
                      const dayNutrition = calculateDayNutrition(day)
                      const calorieProgress = (dayNutrition.calories / nutritionGoals.calories) * 100
                      const proteinProgress = (dayNutrition.protein / nutritionGoals.protein) * 100

                      return (
                        <div key={day} className="p-3 bg-muted rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-sm">{day.slice(0, 3)}</span>
                            <span className="text-xs text-muted-foreground">
                              {Math.round(dayNutrition.calories)}/{nutritionGoals.calories} cal
                            </span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2 mb-1">
                            <div
                              className="bg-brand h-2 rounded-full transition-all duration-300"
                              style={{ width: `${Math.min(calorieProgress, 100)}%` }}
                            ></div>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
                            <span>P: {Math.round(dayNutrition.protein)}g</span>
                            <span>C: {Math.round(dayNutrition.carbs)}g</span>
                            <span>F: {Math.round(dayNutrition.fat)}g</span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="shopping" className="space-y-6">
            <Card className="border-border shadow-lg">
              <CardHeader className="bg-brand-lighter border-b border-border">
                <CardTitle className="text-brand-dark">Shopping Lists</CardTitle>
                <CardDescription>Generated from your meal plans</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                {mealPlan.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    <ShoppingCart className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                    <p>No meals planned yet</p>
                    <Button
                      className="mt-4 bg-brand hover:bg-brand-hover text-brand-foreground"
                      onClick={() => setActiveTab("planner")}
                    >
                      Start Planning Meals
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium text-brand-dark">This Week's Shopping List</h3>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          className="border-border text-brand hover:bg-brand-lighter bg-transparent"
                        >
                          <Share2 className="w-4 h-4 mr-2" />
                          Share
                        </Button>
                        <Button className="bg-brand hover:bg-brand-hover text-brand-foreground">
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3 text-brand-dark">Ingredients Needed</h4>
                        <div className="space-y-2 max-h-96 overflow-y-auto">
                          {generateShoppingList().map(({ ingredient, count }, index) => (
                            <div
                              key={index}
                              className="flex justify-between items-center p-2 bg-muted rounded border border-border"
                            >
                              <span className="text-sm">{ingredient}</span>
                              <Badge variant="secondary" className="bg-brand-light text-brand">
                                {count}x
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-3 text-brand-dark">Meal Summary</h4>
                        <div className="space-y-2 max-h-96 overflow-y-auto">
                          {mealPlan.map((entry) => (
                            <div key={entry.id} className="p-2 bg-brand-light rounded border border-brand">
                              <div className="text-sm font-medium text-brand-dark">{entry.meal.name}</div>
                              <div className="text-xs text-muted-foreground">
                                {entry.day} - {entry.mealType} | {entry.servings} servings
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Meal Detail Modal */}
      <AnimatePresence>
        {selectedMeal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedMeal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-border bg-brand-lighter">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-serif font-light text-brand-dark">{selectedMeal.name}</h2>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {selectedMeal.prepTime} minutes
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {selectedMeal.servings} servings
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 fill-current text-yellow-400" />
                        {selectedMeal.rating}
                      </div>
                      <Badge variant="outline" className="border-border text-brand">
                        {selectedMeal.difficulty}
                      </Badge>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedMeal(null)}
                    className="text-muted-foreground hover:text-foreground text-2xl p-1 hover:bg-muted rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Nutrition Info */}
                <div className="grid grid-cols-5 gap-4 text-center">
                  <div className="bg-brand-lighter p-4 rounded-lg border border-border">
                    <div className="font-medium text-brand-dark text-lg">{selectedMeal.calories}</div>
                    <div className="text-xs text-muted-foreground">Calories</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <div className="font-medium text-blue-800 text-lg">{selectedMeal.protein}g</div>
                    <div className="text-xs text-muted-foreground">Protein</div>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                    <div className="font-medium text-yellow-800 text-lg">{selectedMeal.carbs}g</div>
                    <div className="text-xs text-muted-foreground">Carbs</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                    <div className="font-medium text-purple-800 text-lg">{selectedMeal.fat}g</div>
                    <div className="text-xs text-muted-foreground">Fat</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                    <div className="font-medium text-orange-800 text-lg">{selectedMeal.fiber}g</div>
                    <div className="text-xs text-muted-foreground">Fiber</div>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <h3 className="font-medium mb-3 text-brand-dark">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedMeal.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-border text-brand">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Ingredients */}
                  <div>
                    <h3 className="font-medium mb-3 text-brand-dark">Ingredients</h3>
                    <ul className="space-y-2">
                      {selectedMeal.ingredients.map((ingredient, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Instructions */}
                  <div>
                    <h3 className="font-medium mb-3 text-brand-dark">Instructions</h3>
                    <ol className="space-y-3">
                      {selectedMeal.instructions.map((instruction, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex">
                          <span className="font-medium text-brand mr-3 flex-shrink-0 w-6 h-6 bg-brand-light rounded-full flex items-center justify-center text-xs">
                            {index + 1}
                          </span>
                          <span>{instruction}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                {/* Add to Plan Section */}
                <div className="border-t pt-6 bg-muted -mx-6 px-6 -mb-6 pb-6">
                  <h3 className="font-medium mb-4 text-brand-dark">Add to Meal Plan</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Select>
                      <SelectTrigger className="border-border">
                        <SelectValue placeholder="Select day" />
                      </SelectTrigger>
                      <SelectContent>
                        {days.map((day) => (
                          <SelectItem key={day} value={day}>
                            {day}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="border-border">
                        <SelectValue placeholder="Select meal" />
                      </SelectTrigger>
                      <SelectContent>
                        {mealTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button className="bg-brand hover:bg-brand-hover text-brand-foreground">
                      <Plus className="w-4 h-4 mr-2" />
                      Add to Plan
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
