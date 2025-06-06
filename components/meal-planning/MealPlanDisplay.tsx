import type React from "react"
import type { DayMealPlan } from "@/lib/types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Utensils, Coffee, Sun, Moon, Apple } from "lucide-react"

interface MealPlanDisplayProps {
  mealPlan: DayMealPlan[]
}

const MealPlanDisplay: React.FC<MealPlanDisplayProps> = ({ mealPlan }) => {
  if (!mealPlan || !Array.isArray(mealPlan) || mealPlan.length === 0) {
    return (
      <div className="text-center p-8 bg-red-50 rounded-lg border border-red-200">
        <p className="text-red-600">No meal plan data available. Please try again.</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-primary-dark mb-2">Your Personalized Meal Plan</h2>
        <p className="text-neutral-600">
          Here's your custom meal plan based on your preferences. Enjoy your delicious, healthy meals!
        </p>
      </div>

      {mealPlan.map((dayPlan, index) => (
        <Card key={index} className="overflow-hidden">
          <CardHeader className="bg-primary/5 py-4">
            <CardTitle className="flex items-center gap-2">
              <Utensils className="w-5 h-5 text-primary" />
              {dayPlan.day}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {dayPlan.meals.breakfast && (
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2 text-primary-dark font-medium">
                    <Coffee className="w-4 h-4 text-primary" />
                    <h3>Breakfast</h3>
                    {dayPlan.meals.breakfast.calories && (
                      <span className="ml-auto text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        ~{dayPlan.meals.breakfast.calories} cal
                      </span>
                    )}
                  </div>
                  <h4 className="font-medium mb-1">{dayPlan.meals.breakfast.name}</h4>
                  <p className="text-sm text-neutral-600">{dayPlan.meals.breakfast.description}</p>
                </div>
              )}

              {dayPlan.meals.lunch && (
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2 text-primary-dark font-medium">
                    <Sun className="w-4 h-4 text-primary" />
                    <h3>Lunch</h3>
                    {dayPlan.meals.lunch.calories && (
                      <span className="ml-auto text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        ~{dayPlan.meals.lunch.calories} cal
                      </span>
                    )}
                  </div>
                  <h4 className="font-medium mb-1">{dayPlan.meals.lunch.name}</h4>
                  <p className="text-sm text-neutral-600">{dayPlan.meals.lunch.description}</p>
                </div>
              )}

              {dayPlan.meals.dinner && (
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2 text-primary-dark font-medium">
                    <Moon className="w-4 h-4 text-primary" />
                    <h3>Dinner</h3>
                    {dayPlan.meals.dinner.calories && (
                      <span className="ml-auto text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        ~{dayPlan.meals.dinner.calories} cal
                      </span>
                    )}
                  </div>
                  <h4 className="font-medium mb-1">{dayPlan.meals.dinner.name}</h4>
                  <p className="text-sm text-neutral-600">{dayPlan.meals.dinner.description}</p>
                </div>
              )}

              {dayPlan.meals.snacks && (
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2 text-primary-dark font-medium">
                    <Apple className="w-4 h-4 text-primary" />
                    <h3>Snacks</h3>
                    {dayPlan.meals.snacks.calories && (
                      <span className="ml-auto text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        ~{dayPlan.meals.snacks.calories} cal
                      </span>
                    )}
                  </div>
                  <h4 className="font-medium mb-1">{dayPlan.meals.snacks.name}</h4>
                  <p className="text-sm text-neutral-600">{dayPlan.meals.snacks.description}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default MealPlanDisplay
