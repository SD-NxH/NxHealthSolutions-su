"use client"

import type React from "react"
import { useState } from "react"
import type { MealPreferences } from "@/lib/types"
import { Sparkles, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

interface PreferencesFormProps {
  onSubmit: (preferences: MealPreferences) => void
  isLoading: boolean
}

const PreferencesForm: React.FC<PreferencesFormProps> = ({ onSubmit, isLoading }) => {
  const [preferences, setPreferences] = useState<MealPreferences>({
    dietaryRestrictions: "",
    preferredCuisines: "",
    numberOfDays: 7,
    includeBreakfast: true,
    includeLunch: true,
    includeDinner: true,
    includeSnacks: false,
    calorieTarget: undefined,
    otherRequests: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === "number") {
      setPreferences((prev) => ({ ...prev, [name]: value ? Number.parseInt(value, 10) : undefined }))
    } else {
      setPreferences((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setPreferences((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (preferences.numberOfDays < 1) {
      alert("Number of days must be at least 1.")
      return
    }
    onSubmit(preferences)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-primary-dark mb-4 flex items-center">
          <Sparkles className="w-5 h-5 mr-2 text-primary" />
          Your Meal Preferences
        </h2>
        <p className="text-sm text-neutral-600">
          Tell us about your dietary needs and preferences to create your perfect meal plan.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="dietaryRestrictions">Dietary Restrictions & Allergies</Label>
        <Textarea
          id="dietaryRestrictions"
          name="dietaryRestrictions"
          rows={3}
          value={preferences.dietaryRestrictions}
          onChange={handleChange}
          placeholder="e.g., vegan, gluten-free, nut allergies, dairy-free"
        />
        <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <Info className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
          <p className="text-xs text-blue-800">
            Be specific about your restrictions. For example: "Strict vegan - no animal products including meat, dairy,
            eggs, or honey"
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="preferredCuisines">Preferred Cuisines</Label>
        <Textarea
          id="preferredCuisines"
          name="preferredCuisines"
          rows={2}
          value={preferences.preferredCuisines}
          onChange={handleChange}
          placeholder="e.g., Mediterranean, Asian, Mexican, Italian"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="numberOfDays">Meal Plan Duration (Days)</Label>
        <Input
          type="number"
          id="numberOfDays"
          name="numberOfDays"
          value={preferences.numberOfDays}
          onChange={handleChange}
          min="1"
          max="14"
          required
        />
      </div>

      <div className="space-y-3">
        <Label className="text-base font-semibold text-primary-dark">Meals to Include:</Label>
        <div className="grid grid-cols-2 gap-3">
          {[
            { key: "includeBreakfast", label: "Breakfast", icon: "🌅" },
            { key: "includeLunch", label: "Lunch", icon: "☀️" },
            { key: "includeDinner", label: "Dinner", icon: "🌙" },
            { key: "includeSnacks", label: "Snacks", icon: "🍎" },
          ].map((meal) => (
            <div key={meal.key} className="flex items-center space-x-2 bg-neutral-50 p-3 rounded-lg">
              <Checkbox
                id={meal.key}
                checked={preferences[meal.key as keyof MealPreferences] as boolean}
                onCheckedChange={(checked) => handleCheckboxChange(meal.key, checked as boolean)}
              />
              <Label htmlFor={meal.key} className="flex items-center gap-2 cursor-pointer">
                <span>{meal.icon}</span>
                {meal.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="calorieTarget">Daily Calorie Target (Optional)</Label>
        <Input
          type="number"
          id="calorieTarget"
          name="calorieTarget"
          value={preferences.calorieTarget || ""}
          onChange={handleChange}
          placeholder="e.g., 2000"
          min="0"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="otherRequests">Additional Preferences</Label>
        <Textarea
          id="otherRequests"
          name="otherRequests"
          rows={3}
          value={preferences.otherRequests}
          onChange={handleChange}
          placeholder="e.g., quick 30-minute meals, budget-friendly options, family-friendly"
        />
      </div>

      <div className="pt-6 border-t border-neutral-200">
        <Button type="submit" disabled={isLoading} className="w-full" size="lg">
          {isLoading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Generating Your Personalized Plan...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5 mr-2" />
              Generate My Meal Plan
            </>
          )}
        </Button>
      </div>
    </form>
  )
}

export default PreferencesForm
