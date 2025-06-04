import { CalorieCounter } from "@/components/calorie-counter"
import { NutritionCalculator } from "@/components/nutrition-calculator"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Calorie & Nutrition Calculator | NxHealth",
  description: "Calculate your daily calorie needs and macronutrient requirements based on your profile and goals.",
}

export default function CalorieCounterPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Nutrition Calculators</h1>

      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-lg text-gray-700 mb-6 text-center">
          Use our calculators to estimate your daily calorie needs and macronutrient requirements based on your profile,
          activity level, and goals.
        </p>
        <p className="text-md text-gray-600 mb-8 text-center">
          These calculators use scientifically-backed formulas to provide personalized nutrition recommendations.
        </p>
      </div>

      <div className="max-w-2xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-6">Daily Calorie Calculator</h2>
        <CalorieCounter />
      </div>

      <div className="max-w-2xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-6">Macronutrient Calculator</h2>
        <NutritionCalculator />
      </div>

      <div className="max-w-3xl mx-auto mt-16">
        <h2 className="text-2xl font-semibold mb-4">Understanding Your Nutrition Needs</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">Calories</h3>
        <p className="mb-4">
          Your daily calorie needs are influenced by several factors including your basal metabolic rate (BMR) and your
          activity level. The BMR represents the calories your body needs to maintain basic functions at rest.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Macronutrients</h3>
        <p className="mb-4">
          Macronutrients are the nutrients your body needs in large amounts: protein, carbohydrates, and fats.
        </p>

        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-lg mb-2">Protein</h4>
            <p className="text-sm">
              Essential for muscle repair and growth. Each gram provides 4 calories. Good protein-packed plant-based
              options include: Pumpkin Seeds, Seitan, Tempeh, Lentils, Edamame, Peanuts, Hemp Seeds.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-lg mb-2">Carbohydrates</h4>
            <p className="text-sm">
              Your body's primary energy source. Each gram provides 4 calories. Focus on complex carbs from whole
              grains, fruits, vegetables, and legumes.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-lg mb-2">Fats</h4>
            <p className="text-sm">
              Essential for hormone production and nutrient absorption. Each gram provides 9 calories. Prioritize
              healthy fats from avocados, nuts, seeds, and olive oil.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">Activity Levels Explained:</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>
            <strong>Sedentary:</strong> Little or no exercise, desk job
          </li>
          <li>
            <strong>Light:</strong> Light exercise 1-3 days per week
          </li>
          <li>
            <strong>Moderate:</strong> Moderate exercise 3-5 days per week
          </li>
          <li>
            <strong>Active:</strong> Hard exercise 6-7 days per week
          </li>
          <li>
            <strong>Very Active:</strong> Hard daily exercise and physical job or training twice a day
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Using Your Results:</h3>
        <p className="mb-4">
          The calculated values represent estimates based on your inputs. For weight loss, you would typically consume
          fewer calories than your maintenance level. For weight gain or muscle building, you would consume more.
        </p>
        <p className="mb-4">
          Tracking your food intake and adjusting based on your results is key to reaching your nutrition goals.
          Consider using a food diary or nutrition tracking app to monitor your intake.
        </p>

        <div className="bg-green-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3">Important Note</h3>
          <p>
            These calculators provide estimates only. Individual needs may vary based on factors not accounted for in
            these calculations. For personalized nutrition advice, consult with a healthcare professional or registered
            dietitian.
          </p>
        </div>
      </div>
    </div>
  )
}
