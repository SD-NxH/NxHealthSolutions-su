import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export const metadata = {
  title: "Almonds | NxHealth",
  description: "Learn about the nutritional benefits and health properties of almonds",
}

export default function AlmondPage() {
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
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-green-800 mb-4">Almonds</h1>
            <p className="text-xl text-gray-600">
              Explore the remarkable benefits of these crunchy tree nuts packed with protein, healthy fats, and
              essential minerals
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image src="/fresh-almonds.jpg" alt="Fresh almonds" fill className="object-cover" priority />
            </div>

            <div className="prose prose-green max-w-none">
              <h2 className="text-2xl font-serif text-green-800 mb-4">Nutritional Profile</h2>

              <p className="text-gray-700 mb-6">
                Almonds are incredibly nutritious, packed with vitamins, minerals, protein, and fiber. A 1-ounce
                (28-gram) serving of almonds contains approximately 6 grams of protein, 14 grams of fat (mostly healthy
                monounsaturated fats), 3.5 grams of fiber, and is rich in vitamin E, manganese, and magnesium.
              </p>

              <h2 className="text-2xl font-serif text-green-800 mb-4">Health Benefits</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Heart Health</h3>
                  <p className="text-gray-700">
                    Almonds help reduce LDL (bad) cholesterol levels and increase HDL (good) cholesterol, supporting
                    cardiovascular health.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Blood Sugar Regulation</h3>
                  <p className="text-gray-700">
                    Despite containing carbohydrates, almonds have a low glycemic index and can help regulate blood
                    sugar levels.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Weight Management</h3>
                  <p className="text-gray-700">
                    The protein and fiber in almonds help increase feelings of fullness, potentially reducing overall
                    calorie intake.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Brain Function</h3>
                  <p className="text-gray-700">
                    Almonds contain nutrients like riboflavin and L-carnitine that support brain activity and cognitive
                    function.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-serif text-green-800 mb-4">How to Incorporate Almonds in Your Diet</h2>

              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Enjoy a handful of raw or roasted almonds as a convenient and portable snack</li>
                <li>Add sliced almonds to your morning oatmeal or yogurt for extra crunch</li>
                <li>Use almond flour in baking for a gluten-free alternative</li>
                <li>Blend almonds into smoothies for added nutrition</li>
                <li>Make homemade almond butter for spreading on toast or fruit</li>
                <li>Use almond milk as a dairy alternative in recipes</li>
              </ul>

              <div className="bg-green-100 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-medium text-green-800 mb-2">Did You Know?</h3>
                <p className="text-gray-700">
                  Almonds aren't actually nuts! Botanically speaking, they're seeds of the almond fruit, which is
                  related to peaches, plums, and cherries.
                </p>
              </div>

              <p className="text-gray-700">
                Including almonds in your diet can be a delicious way to increase your intake of healthy fats, protein,
                and essential nutrients. Whether eaten as a snack, added to meals, or used in cooking, almonds offer
                versatile options for incorporating more nutrition into your daily routine.
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
