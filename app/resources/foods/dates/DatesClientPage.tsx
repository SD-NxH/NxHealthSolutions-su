"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export default function DatesClientPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="relative w-full py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Link href="/resources/d" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Foods Starting with D
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-green-800 mb-4">Dates</h1>
            <p className="text-xl text-gray-600">
              Explore the sweet, energy-dense fruits packed with fiber, potassium, and antioxidants
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image src="/glistening-fresh-dates.png" alt="Fresh dates" fill className="object-cover" priority />
            </div>

            <div className="prose prose-green max-w-none">
              <h2 className="text-2xl font-serif text-green-800 mb-4">Nutritional Profile</h2>

              <p className="text-gray-700 mb-6">
                Dates are sweet, energy-dense fruits packed with fiber, potassium, and antioxidants.
              </p>

              <h2 className="text-2xl font-serif text-green-800 mb-4">Health Benefits</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Natural energy booster</h3>
                  <p className="text-gray-700">
                    Dates provide a quick and sustained energy boost due to their natural sugars.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Digestive health</h3>
                  <p className="text-gray-700">
                    The high fiber content in dates promotes healthy digestion and prevents constipation.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Heart health support</h3>
                  <p className="text-gray-700">
                    Dates are rich in potassium, which helps regulate blood pressure and supports heart health.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Bone health</h3>
                  <p className="text-gray-700">
                    Dates contain minerals like calcium, magnesium, and phosphorus, which are essential for maintaining
                    strong bones.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-serif text-green-800 mb-4">How to Incorporate Dates in Your Diet</h2>

              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Enjoy dates as a natural sweetener in smoothies and desserts</li>
                <li>Add chopped dates to oatmeal, yogurt, or trail mix</li>
                <li>Use date paste as a spread on toast or sandwiches</li>
                <li>Stuff dates with nuts or cheese for a delicious snack</li>
                <li>Incorporate dates into savory dishes like tagines and stews</li>
              </ul>

              <div className="bg-green-100 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-medium text-green-800 mb-2">Did You Know?</h3>
                <p className="text-gray-700">
                  Dates have been cultivated for thousands of years and are considered a staple food in many Middle
                  Eastern countries.
                </p>
              </div>

              <p className="text-gray-700">
                Including dates in your diet can be a delicious way to increase your intake of fiber, potassium, and
                antioxidants. Whether eaten as a snack, added to meals, or used as a natural sweetener, dates offer
                versatile options for incorporating more nutrition into your daily routine.
              </p>
            </div>

            <div className="mt-12 flex justify-center">
              <Link href="/resources/d">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Back to Foods Starting with D
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
