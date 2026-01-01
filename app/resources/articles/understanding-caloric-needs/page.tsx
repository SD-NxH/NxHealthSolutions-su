import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Decoding Your Fuel: Understanding Your Caloric Needs | NxHealth",
  description:
    "Learn how to understand your daily caloric needs and create a balanced nutrition plan that supports your individual lifestyle and health goals.",
}

export default function CalorieArticlePage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/resources" className="text-brand hover:text-brand-hover flex items-center mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Resources
        </Link>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-serif font-light text-gray-900 mb-6">
            Decoding Your Fuel: Understanding Your Caloric Needs
          </h1>

          <div className="relative h-[300px] md:h-[400px] w-full mb-8 rounded-xl overflow-hidden">
            <Image
              src="/balanced-diet-calculation.png"
              alt="Person calculating nutritional information"
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="text-xl text-gray-700 mb-8">
            Understanding your daily caloric needs is a fundamental step towards creating a balanced nutrition plan that
            supports your individual lifestyle and health goals. While there's no one-size-fits-all number, we can
            explore some key factors and principles based on current scientific understanding.
          </p>

          <h2 className="text-2xl font-serif font-medium text-gray-900 mt-10 mb-4">Beyond Calorie Counting</h2>

          <p>
            The impact of ultra-processed foods and sugar on brain development and potential addictive behaviors is
            significant. However, the underlying message emphasizes the importance of informed dietary choices for
            overall well-being. Understanding your caloric needs is a crucial aspect of making those informed choices.
          </p>

          <p>
            While many resources don't explicitly detail the calculation of caloric needs, they highlight the energy
            density of ultra-processed foods, which are often high in calories yet low in essential nutrients. This
            underscores the importance of focusing on nutrient-rich foods, rather than solely calorie counting. A
            balanced nutrition plan prioritizes whole, unprocessed foods that provide the necessary fuel and building
            blocks for your body.
          </p>

          <div className="bg-brand-lighter p-6 rounded-lg my-8">
            <h3 className="text-xl font-medium text-gray-900 mb-3">Key Components of a Balanced Nutrition Plan</h3>
            <p>
              Creating a balanced nutrition plan involves more than just calories. It requires considering the
              proportions of macronutrients (carbohydrates, proteins, and fats) and ensuring adequate intake of
              micronutrients (vitamins and minerals). Research emphasizes the potential negative impacts of diets high
              in unhealthy fats, added sugars, and salt, which are common in ultra-processed foods. A balanced plan
              would therefore prioritize whole grains, lean proteins, healthy fats, and an abundance of fruits and
              vegetables.
            </p>
          </div>

          <h2 className="text-2xl font-serif font-medium text-gray-900 mt-10 mb-4">Quality Over Quantity</h2>

          <p>
            While many resources don't offer a direct formula for calculating individual caloric needs, the information
            provided encourages a shift away from relying heavily on energy-dense, nutrient-poor options. Building a
            balanced nutrition plan that works for your lifestyle involves understanding the types of foods you consume
            and prioritizing those that nourish your body and support long-term health, rather than simply focusing on a
            specific number of calories.
          </p>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-xl font-medium text-gray-900 mb-4">
              Practical Steps to Create Your Balanced Nutrition Plan
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Focus on whole, unprocessed foods that provide essential nutrients</li>
              <li>Pay attention to portion sizes rather than strict calorie counting</li>
              <li>Include a variety of fruits, vegetables, whole grains, and lean proteins</li>
              <li>Limit intake of ultra-processed foods high in added sugars, unhealthy fats, and salt</li>
              <li>Stay hydrated by drinking plenty of water throughout the day</li>
              <li>Listen to your body's hunger and fullness cues</li>
            </ul>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-xl font-medium text-gray-900 mb-4">Tools and Resources</h3>
            <p>
              For those interested in a more detailed approach to understanding their caloric needs, our{" "}
              <Link href="/resources/calorie-counter" className="text-brand hover:text-brand-hover">
                Calorie & Nutrition Calculator
              </Link>{" "}
              can provide personalized estimates based on your age, weight, height, activity level, and goals.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
