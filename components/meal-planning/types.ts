export type { MealPreferences, Meal, DayMealPlan, GroceryListItem, GeneratedPlan } from "@/lib/types"

// Add the response interface for compatibility
export interface MealPlanResponse extends GeneratedPlan {
  nutritionalSummary?: {
    totalCalories: number
    avgCaloriesPerDay: number
    macroBreakdown: {
      protein: number
      carbs: number
      fat: number
    }
  }
}
