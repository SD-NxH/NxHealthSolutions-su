import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export const metadata = {
  title: "Avocados | NxHealth",
  description: "Learn about the nutritional benefits and health properties of avocados",
}

export default function AvocadoPage() {
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
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-green-800 mb-4">Avocados</h1>
            <p className="text-xl text-gray-600">
              Explore the creamy, nutrient-rich fruit packed with healthy fats, fiber, and essential vitamins that's as
              versatile as it is delicious
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image src="/fresh-avocados.jpg" alt="Fresh avocados" fill className="object-cover" priority />
            </div>

            <div className="prose prose-green max-w-none">
              <h2 className="text-2xl font-serif text-green-800 mb-4">Nutritional Profile</h2>

              <p className="text-gray-700 mb-6">
                Avocados are incredibly nutritious fruits that are unique in the plant kingdom. Unlike most fruits that
                consist primarily of carbohydrates, avocados are high in healthy fats. They contain about 15% fat by
                weight, making them one of the fattiest plant foods in existence. However, they're packed with
                heart-healthy monounsaturated fats, particularly oleic acid, which is also found in olive oil.
              </p>

              <h2 className="text-2xl font-serif text-green-800 mb-4">Health Benefits</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Heart Health</h3>
                  <p className="text-gray-700">
                    The monounsaturated fats in avocados can help reduce bad cholesterol levels and lower the risk of
                    heart disease and stroke.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Weight Management</h3>
                  <p className="text-gray-700">
                    Despite being high in fat, avocados are filling and can help with weight management by keeping you
                    satisfied longer.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Skin Health</h3>
                  <p className="text-gray-700">
                    The healthy fats, vitamins E and C in avocados support skin health and may help protect against sun
                    damage.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Nutrient Absorption</h3>
                  <p className="text-gray-700">
                    Avocados can increase the absorption of fat-soluble nutrients from other foods eaten alongside them.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-serif text-green-800 mb-4">How to Incorporate Avocados in Your Diet</h2>

              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Spread mashed avocado on toast for a nutritious breakfast</li>
                <li>Add sliced avocado to salads, sandwiches, and wraps</li>
                <li>Make guacamole as a healthy dip for vegetables or whole grain chips</li>
                <li>Blend into smoothies for a creamy texture and nutrient boost</li>
                <li>Use as a substitute for butter or mayonnaise in recipes</li>
              </ul>

              <div className="bg-green-100 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-medium text-green-800 mb-2">Did You Know?</h3>
                <p className="text-gray-700">
                  Avocados are technically berries, and they contain more potassium than bananas. They're also one of
                  the few fruits that contain significant amounts of protein.
                </p>
              </div>

              <p className="text-gray-700">
                Including avocados in your diet can be a delicious way to increase your intake of healthy fats, fiber,
                and essential nutrients. Whether eaten alone or incorporated into various dishes, avocados offer
                versatile options for enhancing your nutritional intake.
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
