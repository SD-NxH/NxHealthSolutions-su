"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export default function MealPlanningPage() {
  const [dietType, setDietType] = useState("balanced")
  const [cuisineType, setCuisineType] = useState("mediterranean")
  const [calorieGoal, setCalorieGoal] = useState("2000")
  const [allergies, setAllergies] = useState("")
  const [mealPlan, setMealPlan] = useState<null | MealPlan>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  type Meal = {
    name: string
    description: string
    calories: number
  }

  type MealPlan = {
    breakfast: Meal
    lunch: Meal
    dinner: Meal
    snack: Meal
    totalCalories: number
  }

  const generateMealPlan = () => {
    setIsGenerating(true)

    // Simulate API call with setTimeout
    setTimeout(() => {
      const breakfastOptions = {
        balanced: [
          { name: "Greek Yogurt Parfait", description: "Greek yogurt with berries, honey, and granola", calories: 320 },
          {
            name: "Avocado Toast",
            description: "Whole grain toast with avocado, poached egg, and microgreens",
            calories: 350,
          },
          {
            name: "Overnight Oats",
            description: "Oats soaked in almond milk with chia seeds and fresh fruit",
            calories: 310,
          },
        ],
        vegetarian: [
          {
            name: "Spinach Omelette",
            description: "Egg white omelette with spinach, tomatoes, and feta cheese",
            calories: 280,
          },
          {
            name: "Fruit Smoothie Bowl",
            description: "Banana smoothie topped with granola, berries, and nut butter",
            calories: 340,
          },
          {
            name: "Tofu Scramble",
            description: "Scrambled tofu with bell peppers, onions, and nutritional yeast",
            calories: 290,
          },
        ],
        keto: [
          { name: "Bacon and Eggs", description: "Fried eggs with bacon and avocado", calories: 450 },
          { name: "Keto Smoothie", description: "Coconut milk, avocado, and protein powder smoothie", calories: 380 },
          {
            name: "Almond Flour Pancakes",
            description: "Low-carb pancakes with butter and sugar-free syrup",
            calories: 420,
          },
        ],
        paleo: [
          {
            name: "Sweet Potato Hash",
            description: "Sweet potatoes with ground turkey and bell peppers",
            calories: 380,
          },
          { name: "Paleo Porridge", description: "Grain-free porridge with nuts, seeds, and berries", calories: 340 },
          { name: "Breakfast Salad", description: "Mixed greens with poached eggs and avocado", calories: 310 },
        ],
        vegan: [
          {
            name: "Chia Pudding",
            description: "Chia seeds soaked in almond milk with maple syrup and berries",
            calories: 310,
          },
          {
            name: "Tofu Scramble",
            description: "Scrambled tofu with nutritional yeast, spinach, and tomatoes",
            calories: 290,
          },
          {
            name: "Avocado Toast",
            description: "Whole grain toast with mashed avocado, tomato, and nutritional yeast",
            calories: 320,
          },
        ],
        elimination: [
          {
            name: "Rice Porridge",
            description: "Rice cooked with coconut milk and cinnamon",
            calories: 290,
          },
          {
            name: "Fruit Salad",
            description: "Mixed fresh fruits with mint leaves",
            calories: 240,
          },
          {
            name: "Sweet Potato Hash",
            description: "Roasted sweet potatoes with olive oil and herbs",
            calories: 280,
          },
        ],
      }

      const lunchOptions = {
        balanced: [
          {
            name: "Quinoa Salad",
            description: "Quinoa with roasted vegetables, chickpeas, and lemon dressing",
            calories: 420,
          },
          {
            name: "Turkey Wrap",
            description: "Whole grain wrap with turkey, hummus, and mixed vegetables",
            calories: 450,
          },
          { name: "Lentil Soup", description: "Hearty lentil soup with carrots, celery, and spinach", calories: 380 },
        ],
        vegetarian: [
          {
            name: "Buddha Bowl",
            description: "Brown rice with roasted vegetables, tofu, and tahini sauce",
            calories: 410,
          },
          {
            name: "Caprese Sandwich",
            description: "Whole grain bread with mozzarella, tomato, and basil",
            calories: 440,
          },
          {
            name: "Chickpea Salad",
            description: "Mixed greens with chickpeas, cucumber, and feta cheese",
            calories: 390,
          },
        ],
        keto: [
          {
            name: "Cobb Salad",
            description: "Lettuce with grilled chicken, bacon, avocado, and blue cheese",
            calories: 520,
          },
          {
            name: "Zucchini Boats",
            description: "Zucchini filled with ground beef, cheese, and marinara",
            calories: 480,
          },
          {
            name: "Cauliflower Rice Bowl",
            description: "Cauliflower rice with grilled salmon and broccoli",
            calories: 450,
          },
        ],
        paleo: [
          {
            name: "Chicken Lettuce Wraps",
            description: "Lettuce leaves filled with grilled chicken and vegetables",
            calories: 410,
          },
          {
            name: "Stuffed Bell Peppers",
            description: "Bell peppers filled with ground turkey and vegetables",
            calories: 440,
          },
          { name: "Tuna Salad", description: "Mixed greens with tuna, olives, and olive oil dressing", calories: 390 },
        ],
        vegan: [
          {
            name: "Quinoa Bowl",
            description: "Quinoa with roasted vegetables, avocado, and tahini dressing",
            calories: 430,
          },
          {
            name: "Lentil Soup",
            description: "Hearty lentil soup with vegetables and fresh herbs",
            calories: 380,
          },
          {
            name: "Chickpea Wrap",
            description: "Whole grain wrap with mashed chickpeas, vegetables, and hummus",
            calories: 410,
          },
        ],
        elimination: [
          {
            name: "Chicken and Rice",
            description: "Plain grilled chicken with white rice and steamed carrots",
            calories: 420,
          },
          {
            name: "Turkey Lettuce Wraps",
            description: "Ground turkey with herbs wrapped in lettuce leaves",
            calories: 390,
          },
          {
            name: "Plain Fish",
            description: "Baked white fish with olive oil and sweet potatoes",
            calories: 410,
          },
        ],
      }

      const dinnerOptions = {
        balanced: [
          { name: "Baked Salmon", description: "Baked salmon with quinoa and roasted asparagus", calories: 520 },
          { name: "Chicken Stir-Fry", description: "Chicken stir-fried with vegetables and brown rice", calories: 550 },
          {
            name: "Vegetable Pasta",
            description: "Whole grain pasta with tomato sauce and mixed vegetables",
            calories: 480,
          },
        ],
        vegetarian: [
          {
            name: "Eggplant Parmesan",
            description: "Baked eggplant with marinara sauce and mozzarella",
            calories: 510,
          },
          {
            name: "Vegetable Curry",
            description: "Mixed vegetable curry with chickpeas and brown rice",
            calories: 540,
          },
          {
            name: "Stuffed Portobello Mushrooms",
            description: "Portobello mushrooms filled with quinoa and vegetables",
            calories: 470,
          },
        ],
        keto: [
          { name: "Ribeye Steak", description: "Grilled ribeye with buttered asparagus and mushrooms", calories: 650 },
          {
            name: "Baked Chicken Thighs",
            description: "Chicken thighs with creamed spinach and cauliflower mash",
            calories: 580,
          },
          {
            name: "Salmon with Hollandaise",
            description: "Pan-seared salmon with hollandaise sauce and broccoli",
            calories: 610,
          },
        ],
        paleo: [
          {
            name: "Grilled Chicken",
            description: "Grilled chicken with sweet potatoes and green beans",
            calories: 520,
          },
          { name: "Beef and Vegetable Skillet", description: "Grass-fed beef with mixed vegetables", calories: 560 },
          { name: "Baked Cod", description: "Baked cod with roasted Brussels sprouts and carrots", calories: 490 },
        ],
        vegan: [
          {
            name: "Buddha Bowl",
            description: "Brown rice with baked tofu, steamed broccoli, and tahini sauce",
            calories: 510,
          },
          {
            name: "Mushroom Risotto",
            description: "Creamy risotto with mushrooms, nutritional yeast, and herbs",
            calories: 480,
          },
          {
            name: "Stuffed Bell Peppers",
            description: "Bell peppers filled with quinoa, black beans, and vegetables",
            calories: 450,
          },
        ],
        elimination: [
          {
            name: "Plain Turkey",
            description: "Roasted turkey breast with steamed broccoli and white rice",
            calories: 490,
          },
          {
            name: "Simple Salmon",
            description: "Baked salmon with olive oil, sweet potatoes, and green beans",
            calories: 520,
          },
          {
            name: "Lamb and Rice",
            description: "Grilled lamb with white rice and steamed zucchini",
            calories: 540,
          },
        ],
      }

      const snackOptions = {
        balanced: [
          {
            name: "Apple with Almond Butter",
            description: "Sliced apple with a tablespoon of almond butter",
            calories: 180,
          },
          { name: "Greek Yogurt with Berries", description: "Plain Greek yogurt with mixed berries", calories: 150 },
          { name: "Hummus with Vegetables", description: "Hummus with carrot and cucumber sticks", calories: 160 },
        ],
        vegetarian: [
          { name: "Trail Mix", description: "Mixed nuts, seeds, and dried fruit", calories: 190 },
          { name: "Cottage Cheese with Fruit", description: "Cottage cheese with pineapple chunks", calories: 160 },
          { name: "Roasted Chickpeas", description: "Spiced roasted chickpeas", calories: 170 },
        ],
        keto: [
          { name: "Cheese and Olives", description: "Cheddar cheese cubes with green olives", calories: 210 },
          {
            name: "Avocado Deviled Eggs",
            description: "Deviled eggs made with avocado instead of mayo",
            calories: 180,
          },
          { name: "Pepperoni Chips", description: "Crispy baked pepperoni slices", calories: 190 },
        ],
        paleo: [
          { name: "Mixed Nuts", description: "Assorted raw nuts", calories: 200 },
          { name: "Beef Jerky", description: "Grass-fed beef jerky", calories: 170 },
          { name: "Fruit and Nut Bar", description: "Homemade fruit and nut bar", calories: 180 },
        ],
        vegan: [
          {
            name: "Energy Balls",
            description: "Date and nut energy balls with coconut flakes",
            calories: 180,
          },
          {
            name: "Vegetable Sticks with Hummus",
            description: "Carrot and cucumber sticks with homemade hummus",
            calories: 160,
          },
          {
            name: "Fruit Smoothie",
            description: "Banana, berries, and plant milk smoothie",
            calories: 170,
          },
        ],
        elimination: [
          {
            name: "Rice Cakes",
            description: "Plain rice cakes with a drizzle of olive oil",
            calories: 140,
          },
          {
            name: "Baked Apple",
            description: "Baked apple with cinnamon",
            calories: 120,
          },
          {
            name: "Cucumber Slices",
            description: "Fresh cucumber slices with a pinch of salt",
            calories: 30,
          },
        ],
      }

      // Select random meals based on diet type
      const diet = dietType as keyof typeof breakfastOptions
      const breakfast = breakfastOptions[diet][Math.floor(Math.random() * breakfastOptions[diet].length)]
      const lunch = lunchOptions[diet][Math.floor(Math.random() * lunchOptions[diet].length)]
      const dinner = dinnerOptions[diet][Math.floor(Math.random() * dinnerOptions[diet].length)]
      const snack = snackOptions[diet][Math.floor(Math.random() * snackOptions[diet].length)]

      const totalCalories = breakfast.calories + lunch.calories + dinner.calories + snack.calories

      setMealPlan({
        breakfast,
        lunch,
        dinner,
        snack,
        totalCalories,
      })

      setIsGenerating(false)
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-light text-green-800 mb-4">Meal Planning</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create a personalized meal plan tailored to your dietary preferences and nutritional needs.
          </p>
        </div>

        <Card className="mb-12 border-green-100 shadow-md">
          <CardHeader className="bg-green-50">
            <CardTitle className="text-2xl font-serif font-light text-green-800">Why Meal Planning Matters</CardTitle>
            <CardDescription className="text-gray-600">
              Discover the benefits of planning your meals in advance
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-green-700 mb-3">Benefits of Meal Planning</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Saves time and reduces decision fatigue</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Helps maintain a balanced diet with proper nutrition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Reduces food waste and saves money</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Makes it easier to reach health and fitness goals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Encourages more home cooking and less eating out</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/colorful-meal-planning.png"
                  alt="Meal planning calendar with healthy food"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-green-100 shadow-md">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-xl font-medium text-green-800">Create Your Meal Plan</CardTitle>
              <CardDescription>
                Tell us about your preferences and we'll generate a personalized meal plan
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="diet-type">Diet Type</Label>
                <RadioGroup
                  id="diet-type"
                  value={dietType}
                  onValueChange={setDietType}
                  className="flex flex-col space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="balanced" id="balanced" />
                    <Label htmlFor="balanced" className="cursor-pointer">
                      Balanced
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="vegetarian" id="vegetarian" />
                    <Label htmlFor="vegetarian" className="cursor-pointer">
                      Vegetarian
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="vegan" id="vegan" />
                    <Label htmlFor="vegan" className="cursor-pointer">
                      Vegan
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="keto" id="keto" />
                    <Label htmlFor="keto" className="cursor-pointer">
                      Keto
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paleo" id="paleo" />
                    <Label htmlFor="paleo" className="cursor-pointer">
                      Paleo
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="elimination" id="elimination" />
                    <Label htmlFor="elimination" className="cursor-pointer">
                      Elimination
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cuisine-type">Cuisine Preference</Label>
                <Select value={cuisineType} onValueChange={setCuisineType}>
                  <SelectTrigger id="cuisine-type">
                    <SelectValue placeholder="Select cuisine" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mediterranean">Mediterranean</SelectItem>
                    <SelectItem value="asian">Asian</SelectItem>
                    <SelectItem value="mexican">Mexican</SelectItem>
                    <SelectItem value="italian">Italian</SelectItem>
                    <SelectItem value="american">American</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="calorie-goal">Daily Calorie Goal</Label>
                <Input
                  id="calorie-goal"
                  type="number"
                  value={calorieGoal}
                  onChange={(e) => setCalorieGoal(e.target.value)}
                  placeholder="2000"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="allergies">Allergies or Restrictions</Label>
                <Input
                  id="allergies"
                  value={allergies}
                  onChange={(e) => setAllergies(e.target.value)}
                  placeholder="e.g., nuts, dairy, gluten"
                  className="w-full"
                />
              </div>
            </CardContent>
            <CardFooter className="bg-gray-50">
              <Button
                onClick={generateMealPlan}
                className="w-full bg-green-600 hover:bg-green-700"
                disabled={isGenerating}
              >
                {isGenerating ? "Generating..." : "Generate Meal Plan"}
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-green-100 shadow-md">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-xl font-medium text-green-800">Your Daily Meal Plan</CardTitle>
              <CardDescription>A balanced day of meals based on your preferences</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              {mealPlan ? (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-green-700 flex items-center">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs mr-2">Breakfast</span>
                      {mealPlan.breakfast.name}
                    </h3>
                    <p className="text-gray-600 mt-1">{mealPlan.breakfast.description}</p>
                    <p className="text-sm text-gray-500 mt-1">{mealPlan.breakfast.calories} calories</p>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-medium text-green-700 flex items-center">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs mr-2">Lunch</span>
                      {mealPlan.lunch.name}
                    </h3>
                    <p className="text-gray-600 mt-1">{mealPlan.lunch.description}</p>
                    <p className="text-sm text-gray-500 mt-1">{mealPlan.lunch.calories} calories</p>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-medium text-green-700 flex items-center">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs mr-2">Dinner</span>
                      {mealPlan.dinner.name}
                    </h3>
                    <p className="text-gray-600 mt-1">{mealPlan.dinner.description}</p>
                    <p className="text-sm text-gray-500 mt-1">{mealPlan.dinner.calories} calories</p>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-medium text-green-700 flex items-center">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs mr-2">Snack</span>
                      {mealPlan.snack.name}
                    </h3>
                    <p className="text-gray-600 mt-1">{mealPlan.snack.description}</p>
                    <p className="text-sm text-gray-500 mt-1">{mealPlan.snack.calories} calories</p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg mt-4">
                    <p className="font-medium text-green-800">Total Daily Calories: {mealPlan.totalCalories}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      {mealPlan.totalCalories < Number.parseInt(calorieGoal)
                        ? `${Number.parseInt(calorieGoal) - mealPlan.totalCalories} calories under your daily goal`
                        : `${mealPlan.totalCalories - Number.parseInt(calorieGoal)} calories over your daily goal`}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <p className="mb-4">Your meal plan will appear here</p>
                  <p className="text-sm">Fill out your preferences and click "Generate Meal Plan"</p>
                </div>
              )}
            </CardContent>
            {mealPlan && (
              <CardFooter className="flex justify-between bg-gray-50">
                <Button variant="outline" onClick={() => setMealPlan(null)}>
                  Reset
                </Button>
                <Button className="bg-green-600 hover:bg-green-700">Save Plan</Button>
              </CardFooter>
            )}
          </Card>
        </div>

        <Card className="border-green-100 shadow-md">
          <CardHeader className="bg-green-50">
            <CardTitle className="text-xl font-medium text-green-800">Tips for Successful Meal Planning</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-green-700 mb-2">Start Small</h3>
                <p className="text-gray-600 text-sm">
                  Begin by planning just 2-3 days at a time until you get comfortable with the process.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-green-700 mb-2">Batch Cook</h3>
                <p className="text-gray-600 text-sm">
                  Prepare larger portions and use leftovers for lunches or freeze for future meals.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-green-700 mb-2">Theme Nights</h3>
                <p className="text-gray-600 text-sm">
                  Create theme nights like "Meatless Monday" or "Taco Tuesday" to simplify planning.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-green-700 mb-2">Shop Smart</h3>
                <p className="text-gray-600 text-sm">
                  Create a shopping list based on your meal plan and stick to it to avoid impulse purchases.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-green-700 mb-2">Use a Template</h3>
                <p className="text-gray-600 text-sm">
                  Create a reusable template for your weekly meal plan to save time.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-green-700 mb-2">Be Flexible</h3>
                <p className="text-gray-600 text-sm">
                  Allow for some flexibility in your plan to accommodate unexpected events or cravings.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
