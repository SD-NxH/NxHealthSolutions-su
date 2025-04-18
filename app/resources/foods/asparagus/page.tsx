import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export const metadata = {
  title: "Asparagus | NxHealth",
  description: "Learn about the nutritional benefits and health properties of asparagus",
}

export default function AsparagusPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="relative w-full py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Link href="/resources/a" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Foods Starting with A
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-green-800 mb-4">Asparagus</h1>
            <p className="text-xl text-gray-600">
              Explore the tender spears of this vitamin-rich spring delicacy known for its distinctive flavor and
              powerful detoxifying properties
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image src="/fresh-asparagus.jpg" alt="Fresh asparagus spears" fill className="object-cover" priority />
            </div>

            <div className="prose prose-green max-w-none">
              <h2 className="text-2xl font-serif text-green-800 mb-4">Nutritional Profile</h2>

              <p className="text-gray-700 mb-6">
                Asparagus is a nutrient-dense vegetable that's low in calories but packed with essential vitamins,
                minerals, and antioxidants. A 1-cup (134g) serving of asparagus contains only about 27 calories while
                providing significant amounts of vitamin K, folate, vitamin A, vitamin C, and several B vitamins. It's
                also a good source of fiber, potassium, phosphorus, and antioxidants like glutathione, flavonoids, and
                polyphenols.
              </p>

              <h2 className="text-2xl font-serif text-green-800 mb-4">Health Benefits</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Anti-Inflammatory Properties</h3>
                  <p className="text-gray-700">
                    Asparagus contains various anti-inflammatory compounds that may help reduce chronic inflammation and
                    protect against certain diseases.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Digestive Health</h3>
                  <p className="text-gray-700">
                    The fiber in asparagus supports healthy digestion and may help prevent constipation. It also
                    contains inulin, a prebiotic that promotes beneficial gut bacteria.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Blood Pressure Regulation</h3>
                  <p className="text-gray-700">
                    Asparagus is rich in potassium, which helps regulate blood pressure by counteracting the effects of
                    sodium and relaxing blood vessel walls.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Antioxidant Support</h3>
                  <p className="text-gray-700">
                    The high levels of antioxidants in asparagus, including glutathione, flavonoids, and polyphenols,
                    help protect cells from oxidative stress and damage.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-serif text-green-800 mb-4">How to Incorporate Asparagus in Your Diet</h2>

              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Roast asparagus with olive oil, salt, and pepper for a simple side dish</li>
                <li>Add blanched asparagus to salads for extra crunch and nutrition</li>
                <li>Include chopped asparagus in omelets, frittatas, or quiches</li>
                <li>Grill asparagus spears for a smoky flavor that pairs well with many proteins</li>
                <li>Blend steamed asparagus into soups for a nutrient-rich meal</li>
              </ul>

              <div className="bg-green-100 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-medium text-green-800 mb-2">Did You Know?</h3>
                <p className="text-gray-700">
                  Asparagus is one of the fastest-growing vegetables, capable of growing up to 10 inches in a 24-hour
                  period under ideal conditions. This rapid growth is why asparagus spears need to be harvested daily
                  during the growing season.
                </p>
              </div>

              <p className="text-gray-700">
                Including asparagus in your diet can be a delicious way to boost your nutrient intake and support
                overall health. Whether enjoyed as a side dish or incorporated into various recipes, asparagus offers
                impressive nutritional benefits and a distinctive flavor that makes it a valuable addition to a balanced
                diet.
              </p>
            </div>

            <div className="mt-12 flex justify-center">
              <Link href="/resources/a">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Back to Foods Starting with A
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
