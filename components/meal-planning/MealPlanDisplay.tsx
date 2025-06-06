import type React from "react"
// components/meal-planning/MealPlanDisplay.tsx

// Update the import at the top
import type { DayMealPlan } from "@/lib/types"

interface MealPlanDisplayProps {
  mealPlan: DayMealPlan[]
}

const MealPlanDisplay: React.FC<MealPlanDisplayProps> = ({ mealPlan }) => {
  return (
    <div>
      {mealPlan.map((dayPlan) => (
        <div key={dayPlan.day}>
          <h3>{dayPlan.day}</h3>
          {dayPlan.meals.map((meal, index) => (
            <div key={index}>
              <h4>{meal.name}</h4>
              <ul>
                {meal.recipes.map((recipe) => (
                  <li key={recipe.id}>{recipe.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default MealPlanDisplay
