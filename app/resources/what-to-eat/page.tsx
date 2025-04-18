import { CalorieCounter } from "@/components/calorie-counter"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "What to Eat | NxHealth",
  description: "Learn about healthy eating habits and calculate your daily calorie needs.",
}

export default function WhatToEatPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">What to Eat</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Healthy Eating Guidelines</h2>
          <p className="mb-4">
            Eating a balanced diet is essential for maintaining good health and wellbeing. Focus on whole foods, plenty
            of fruits and vegetables, lean proteins, and healthy fats while limiting processed foods and added sugars.
          </p>
          <p>
            Our nutrition experts have compiled resources to help you make informed choices about your diet and develop
            healthy eating habits that last a lifetime.
          </p>
        </div>

        <div>
          <CalorieCounter />
        </div>
      </div>

      {/* Rest of the content */}
    </div>
  )
}
