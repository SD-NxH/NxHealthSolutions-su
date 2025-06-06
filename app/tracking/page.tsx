import { MealTracker } from "@/components/meal-tracker"

export default function TrackingPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-serif font-light text-center mb-8">Nutrition Tracking</h1>
      <MealTracker />
    </div>
  )
}
