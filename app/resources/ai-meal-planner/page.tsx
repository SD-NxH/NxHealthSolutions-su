"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import PreferencesForm from "@/components/meal-planning/PreferencesForm"
import MealPlanDisplay from "@/components/meal-planning/MealPlanDisplay"
import GroceryListDisplay from "@/components/meal-planning/GroceryListDisplay"
import ErrorMessage from "@/components/meal-planning/ErrorMessage"
import LoadingSpinner from "@/components/meal-planning/LoadingSpinner"
import { ChefHat, ShoppingCart, Sparkles, Brain } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { generateMealPlanAndList } from "@/app/actions/meal-planning-actions"
import type { MealPreferences } from "@/lib/types"
import type { MealPlanResponse } from "@/components/meal-planning/types"

export default function AIMealPlannerPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [mealPlanData, setMealPlanData] = useState<MealPlanResponse | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("preferences")
  const { toast } = useToast()

  const generateMealPlan = async (preferences: MealPreferences) => {
    setIsLoading(true)
    setError(null)

    try {
      const result = await generateMealPlanAndList(preferences)
      setMealPlanData(result)
      setActiveTab("meal-plan")

      toast({
        title: "Success!",
        description: "Your personalized meal plan has been generated.",
      })
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to generate meal plan. Please try again."
      setError(errorMessage)
      console.error("Error generating meal plan:", err)

      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-nx-gradient">
      {isLoading && <LoadingSpinner />}

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-primary-dark">AI Meal Planner</h1>
                <p className="text-lg text-neutral-600 mt-2">
                  Personalized nutrition powered by artificial intelligence
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-6 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat className="w-4 h-4 text-primary" />
                <span>Personalized</span>
              </div>
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-4 h-4 text-primary" />
                <span>Shopping Lists</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <Card className="shadow-nx-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ChefHat className="w-5 h-5 text-primary" />
                Your Personalized Meal Planning Experience
              </CardTitle>
              <CardDescription>
                Create custom meal plans tailored to your dietary preferences, restrictions, and lifestyle goals.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="preferences" className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Preferences
                  </TabsTrigger>
                  <TabsTrigger value="meal-plan" disabled={!mealPlanData} className="flex items-center gap-2">
                    <ChefHat className="w-4 h-4" />
                    Meal Plan
                  </TabsTrigger>
                  <TabsTrigger value="grocery-list" disabled={!mealPlanData} className="flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Shopping List
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="preferences" className="mt-6">
                  {error && <ErrorMessage message={error} />}
                  <PreferencesForm onSubmit={generateMealPlan} isLoading={isLoading} />
                </TabsContent>

                <TabsContent value="meal-plan" className="mt-6">
                  {mealPlanData && <MealPlanDisplay mealPlan={mealPlanData.mealPlan} />}
                </TabsContent>

                <TabsContent value="grocery-list" className="mt-6">
                  {mealPlanData && <GroceryListDisplay groceryList={mealPlanData.groceryList} />}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="text-center">
              <CardHeader>
                <Brain className="w-12 h-12 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">AI-Powered Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600">
                  Advanced algorithms analyze your preferences to create perfectly tailored meal plans.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <ChefHat className="w-12 h-12 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Personalized Nutrition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600">
                  Every meal is customized to your dietary restrictions, preferences, and health goals.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <ShoppingCart className="w-12 h-12 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Smart Shopping Lists</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600">
                  Automatically generated, organized shopping lists make grocery shopping effortless.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
