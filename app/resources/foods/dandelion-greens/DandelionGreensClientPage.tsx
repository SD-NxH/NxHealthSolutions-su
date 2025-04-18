"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export default function DandelionGreensClientPage() {
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
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-green-800 mb-4">
              Dandelion Greens
            </h1>
            <p className="text-xl text-gray-600">
              Explore the nutrient-rich leafy greens with powerful detoxifying and anti-inflammatory properties
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src="/vibrant-dandelion-harvest.png"
                alt="Fresh dandelion greens"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="prose prose-green max-w-none">
              <h2 className="text-2xl font-serif text-green-800 mb-4">Nutritional Profile</h2>

              <p className="text-gray-700 mb-6">
                Dandelion greens are a nutritional powerhouse, packed with vitamins, minerals, and antioxidants. They
                are an excellent source of vitamins A, C, and K, as well as calcium, potassium, and iron.
              </p>

              <h2 className="text-2xl font-serif text-green-800 mb-4">Health Benefits</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Liver support</h3>
                  <p className="text-gray-700">
                    Dandelion greens have been shown to support liver function and promote detoxification.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Digestive aid</h3>
                  <p className="text-gray-700">
                    The bitter compounds in dandelion greens can stimulate digestion and improve nutrient absorption.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Anti-inflammatory</h3>
                  <p className="text-gray-700">
                    Dandelion greens contain antioxidants and anti-inflammatory compounds that may help reduce
                    inflammation in the body.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Rich in vitamins A and K</h3>
                  <p className="text-gray-700">
                    Dandelion greens are an excellent source of vitamins A and K, which are essential for vision, immune
                    function, and blood clotting.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-serif text-green-800 mb-4">
                How to Incorporate Dandelion Greens in Your Diet
              </h2>

              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Add fresh dandelion greens to salads for a slightly bitter flavor</li>
                <li>Sauté dandelion greens with garlic and olive oil for a simple side dish</li>
                <li>Incorporate dandelion greens into soups, stews, or stir-fries</li>
                <li>Blend dandelion greens into smoothies for a nutritional boost</li>
                <li>Use dandelion greens to make pesto or other sauces</li>
              </ul>

              <div className="bg-green-100 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-medium text-green-800 mb-2">Did You Know?</h3>
                <p className="text-gray-700">
                  Dandelion greens have been used for centuries in traditional medicine for their diuretic and
                  detoxifying properties.
                </p>
              </div>

              <p className="text-gray-700">
                Including dandelion greens in your diet can be a delicious way to increase your intake of vitamins,
                minerals, and antioxidants. Whether eaten raw, cooked, or blended, dandelion greens offer versatile
                options for incorporating more nutrition into your daily routine.
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
