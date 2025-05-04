"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Clock, Utensils, Heart, Leaf } from "lucide-react"

export default function MealPlanningPage() {
  const [preferences, setPreferences] = useState({
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    lowCarb: false,
    highProtein: false,
  })

  const [description, setDescription] = useState("")
  const [mealPlan, setMealPlan] = useState(null)
  const [isGenerating, setIsGenerating] = useState(false)

  // Sample meal options based on preferences
  const mealOptions = {
    breakfast: {
      standard: [
        "Scrambled eggs with whole grain toast and avocado",
        "Greek yogurt with berries and granola",
        "Oatmeal with banana, walnuts and honey",
        "Whole grain pancakes with fresh fruit",
        "Breakfast burrito with eggs, beans and salsa",
      ],
      vegetarian: [
        "Avocado toast with poached eggs and microgreens",
        "Greek yogurt parfait with berries and honey",
        "Spinach and feta omelet with whole grain toast",
        "Overnight chia pudding with almond milk and fruit",
        "Smoothie bowl with granola and fresh fruit",
      ],
      vegan: [
        "Overnight oats with almond milk, chia seeds and berries",
        "Tofu scramble with vegetables and nutritional yeast",
        "Avocado toast with roasted tomatoes and microgreens",
        "Smoothie bowl with plant-based protein and fruit",
        "Quinoa breakfast bowl with nuts and maple syrup",
      ],
      glutenFree: [
        "Gluten-free oatmeal with nuts and berries",
        "Egg and vegetable frittata",
        "Greek yogurt with gluten-free granola",
        "Smoothie with spinach, banana and almond butter",
        "Chia seed pudding with coconut milk",
      ],
      lowCarb: [
        "Egg muffins with spinach and feta",
        "Avocado and smoked salmon plate",
        "Greek yogurt with a few berries and nuts",
        "Crustless vegetable quiche",
        "Cottage cheese with cucumber and tomatoes",
      ],
    },
    lunch: {
      standard: [
        "Grilled chicken salad with mixed greens",
        "Turkey and avocado wrap with vegetables",
        "Quinoa bowl with roasted vegetables and feta",
        "Tuna salad sandwich on whole grain bread",
        "Lentil soup with a side salad",
      ],
      vegetarian: [
        "Mediterranean chickpea salad with feta",
        "Caprese sandwich with fresh mozzarella and tomato",
        "Vegetable and hummus wrap",
        "Black bean and sweet potato bowl",
        "Spinach and feta quiche with side salad",
      ],
      vegan: [
        "Buddha bowl with quinoa, roasted vegetables and tahini dressing",
        "Lentil and vegetable soup with whole grain bread",
        "Chickpea salad sandwich with avocado",
        "Tempeh and vegetable stir-fry with brown rice",
        "Mediterranean wrap with hummus and roasted vegetables",
      ],
      glutenFree: [
        "Chicken and vegetable stir-fry with rice",
        "Tuna salad on a bed of greens",
        "Mexican bowl with rice, beans, and guacamole",
        "Gluten-free wrap with turkey and vegetables",
        "Quinoa salad with roasted vegetables",
      ],
      lowCarb: [
        "Lettuce wraps with ground turkey and vegetables",
        "Zucchini noodles with pesto and grilled chicken",
        "Cauliflower rice bowl with salmon and avocado",
        "Greek salad with grilled chicken",
        "Egg salad on cucumber slices",
      ],
    },
    dinner: {
      standard: [
        "Baked salmon with roasted vegetables and quinoa",
        "Spaghetti with turkey meatballs and side salad",
        "Stir-fried chicken with vegetables and brown rice",
        "Beef and vegetable stew with whole grain bread",
        "Grilled fish tacos with cabbage slaw",
      ],
      vegetarian: [
        "Eggplant parmesan with side salad",
        "Vegetable stir-fry with tofu and brown rice",
        "Stuffed bell peppers with quinoa and black beans",
        "Mushroom risotto with roasted asparagus",
        "Vegetable lasagna with ricotta cheese",
      ],
      vegan: [
        "Lentil shepherd's pie with mashed potatoes",
        "Chickpea curry with brown rice",
        "Stuffed bell peppers with quinoa and black beans",
        "Vegetable and tofu stir-fry with brown rice",
        "Sweet potato and black bean enchiladas",
      ],
      glutenFree: [
        "Grilled salmon with roasted vegetables",
        "Chicken and vegetable stir-fry with rice",
        "Stuffed bell peppers with ground turkey and rice",
        "Gluten-free pasta with marinara and turkey meatballs",
        "Baked cod with quinoa and roasted vegetables",
      ],
      lowCarb: [
        "Grilled steak with roasted vegetables",
        "Baked chicken with cauliflower mash",
        "Salmon with asparagus and hollandaise",
        "Stuffed portobello mushrooms with ground turkey",
        "Zucchini boats with ground beef and cheese",
      ],
    },
    snacks: {
      standard: [
        "Apple with almond butter",
        "Greek yogurt with honey",
        "Handful of mixed nuts",
        "Hummus with carrot sticks",
        "Cheese and whole grain crackers",
      ],
      vegetarian: [
        "Greek yogurt with berries",
        "Cottage cheese with pineapple",
        "Trail mix with nuts and dried fruit",
        "Cheese stick with apple slices",
        "Hummus with vegetable sticks",
      ],
      vegan: [
        "Apple slices with almond butter",
        "Hummus with carrot and celery sticks",
        "Trail mix with nuts and dried fruit",
        "Roasted chickpeas",
        "Avocado toast on whole grain bread",
      ],
      glutenFree: [
        "Rice cakes with almond butter",
        "Hard-boiled eggs",
        "Yogurt with berries",
        "Gluten-free crackers with hummus",
        "Fruit and nut mix",
      ],
      lowCarb: [
        "Celery with cream cheese",
        "Hard-boiled eggs",
        "Cucumber slices with tuna salad",
        "String cheese",
        "Small handful of nuts",
      ],
    },
  }

  const generateMealPlan = () => {
    setIsGenerating(true)

    // Determine which meal category to use based on preferences
    let breakfastCategory = "standard"
    let lunchCategory = "standard"
    let dinnerCategory = "standard"
    let snackCategory = "standard"

    if (preferences.vegan) {
      breakfastCategory = "vegan"
      lunchCategory = "vegan"
      dinnerCategory = "vegan"
      snackCategory = "vegan"
    } else if (preferences.vegetarian) {
      breakfastCategory = "vegetarian"
      lunchCategory = "vegetarian"
      dinnerCategory = "vegetarian"
      snackCategory = "vegetarian"
    }

    if (preferences.glutenFree) {
      breakfastCategory = "glutenFree"
      lunchCategory = "glutenFree"
      dinnerCategory = "glutenFree"
      snackCategory = "glutenFree"
    }

    if (preferences.lowCarb) {
      breakfastCategory = "lowCarb"
      lunchCategory = "lowCarb"
      dinnerCategory = "lowCarb"
      snackCategory = "lowCarb"
    }

    // Randomly select meals from appropriate categories
    const breakfast =
      mealOptions.breakfast[breakfastCategory][
        Math.floor(Math.random() * mealOptions.breakfast[breakfastCategory].length)
      ]
    const lunch = mealOptions.lunch[lunchCategory][Math.floor(Math.random() * mealOptions.lunch[lunchCategory].length)]
    const dinner =
      mealOptions.dinner[dinnerCategory][Math.floor(Math.random() * mealOptions.dinner[dinnerCategory].length)]

    // Select two random snacks
    const snacks = []
    const snackIndices = new Set()
    while (snackIndices.size < 2) {
      snackIndices.add(Math.floor(Math.random() * mealOptions.snacks[snackCategory].length))
    }
    snackIndices.forEach((index) => {
      snacks.push(mealOptions.snacks[snackCategory][index])
    })

    // Create the meal plan
    const newMealPlan = {
      breakfast,
      lunch,
      dinner,
      snacks,
    }

    // Simulate API delay
    setTimeout(() => {
      setMealPlan(newMealPlan)
      setIsGenerating(false)
    }, 1000)
  }

  const handleCheckboxChange = (preference) => {
    setPreferences((prev) => ({
      ...prev,
      [preference]: !prev[preference],
    }))
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-light text-green-800 mb-4">Meal Planning</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the power of intentional eating with our meal planning resources and tools.
        </p>
      </div>

      {/* Benefits of Meal Planning */}
      <section className="mb-16">
        <h2 className="text-3xl font-serif font-light text-gray-900 mb-8 text-center">Why Meal Planning Matters</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <Clock className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle className="text-xl">Save Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Planning meals in advance reduces daily decision fatigue and streamlines grocery shopping, saving you
                valuable time throughout the week.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <Utensils className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle className="text-xl">Eat Better</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                When meals are planned, you're more likely to make nutritionally balanced choices and less likely to
                rely on convenient but unhealthy options.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <Heart className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle className="text-xl">Reduce Stress</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Eliminate the daily stress of figuring out what to eat. With a plan in place, you can focus your energy
                on other important aspects of your life.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Meal Plan Builder */}
      <section className="mb-16 bg-green-50 p-8 rounded-xl">
        <h2 className="text-3xl font-serif font-light text-gray-900 mb-8 text-center">Meal Plan Builder</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <div>
            <h3 className="text-xl font-medium mb-4">Your Preferences</h3>

            <div className="space-y-4 mb-6">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="vegetarian"
                    checked={preferences.vegetarian}
                    onCheckedChange={() => handleCheckboxChange("vegetarian")}
                  />
                  <Label htmlFor="vegetarian">Vegetarian</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="vegan"
                    checked={preferences.vegan}
                    onCheckedChange={() => handleCheckboxChange("vegan")}
                  />
                  <Label htmlFor="vegan">Vegan</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="glutenFree"
                    checked={preferences.glutenFree}
                    onCheckedChange={() => handleCheckboxChange("glutenFree")}
                  />
                  <Label htmlFor="glutenFree">Gluten-Free</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="dairyFree"
                    checked={preferences.dairyFree}
                    onCheckedChange={() => handleCheckboxChange("dairyFree")}
                  />
                  <Label htmlFor="dairyFree">Dairy-Free</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="lowCarb"
                    checked={preferences.lowCarb}
                    onCheckedChange={() => handleCheckboxChange("lowCarb")}
                  />
                  <Label htmlFor="lowCarb">Low-Carb</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="highProtein"
                    checked={preferences.highProtein}
                    onCheckedChange={() => handleCheckboxChange("highProtein")}
                  />
                  <Label htmlFor="highProtein">High-Protein</Label>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <Label htmlFor="description" className="block mb-2">
                Additional Details (optional)
              </Label>
              <Textarea
                id="description"
                placeholder="Describe any specific preferences, allergies, or goals (e.g., 'I prefer Mediterranean flavors' or 'I'm trying to incorporate more leafy greens')"
                className="min-h-[100px]"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <Button
              onClick={generateMealPlan}
              className="w-full bg-green-600 hover:bg-green-700"
              disabled={isGenerating}
            >
              {isGenerating ? "Generating..." : "Generate Meal Plan"}
            </Button>
          </div>

          {/* Output Section */}
          <div>
            <h3 className="text-xl font-medium mb-4">Your Daily Meal Plan</h3>

            {mealPlan ? (
              <Card className="bg-white">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-green-700 flex items-center">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded mr-2 text-sm">Breakfast</span>
                      </h4>
                      <p className="mt-2">{mealPlan.breakfast}</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-green-700 flex items-center">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded mr-2 text-sm">Lunch</span>
                      </h4>
                      <p className="mt-2">{mealPlan.lunch}</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-green-700 flex items-center">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded mr-2 text-sm">Dinner</span>
                      </h4>
                      <p className="mt-2">{mealPlan.dinner}</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-green-700 flex items-center">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded mr-2 text-sm">Snacks</span>
                      </h4>
                      <ul className="mt-2 list-disc pl-5">
                        {mealPlan.snacks.map((snack, index) => (
                          <li key={index}>{snack}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Button onClick={generateMealPlan} variant="outline" className="w-full">
                      Generate Another Plan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="bg-white p-8 rounded-lg border border-gray-200 text-center h-full flex flex-col items-center justify-center">
                <Leaf className="h-12 w-12 text-green-200 mb-4" />
                <p className="text-gray-500">Select your preferences and generate a personalized meal plan.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-2xl font-serif font-light text-gray-900 mb-4">Need More Personalized Guidance?</h2>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Our nutrition experts can create a customized meal plan tailored specifically to your health goals,
          preferences, and lifestyle.
        </p>
        <Link href="/services">
          <Button className="bg-green-600 hover:bg-green-700">
            Explore Our Nutrition Services <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </section>
    </div>
  )
}
