import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export const metadata = {
  title: "Bell Peppers | NxHealth",
  description: "Learn about the nutritional benefits and health properties of bell peppers",
}

export default function BellPepperPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="relative w-full py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Link href="/resources/b" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Foods Starting with B
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-green-800 mb-4">
              Bell Peppers
            </h1>
            <p className="text-xl text-gray-600">
              Explore the colorful, crunchy vegetables with more vitamin C than oranges and excellent antioxidant
              properties
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image src="/vibrant-pepper-pile.png" alt="Fresh bell peppers" fill className="object-cover" priority />
            </div>

            <div className="prose prose-green max-w-none">
              <h2 className="text-2xl font-serif text-green-800 mb-4">Nutritional Profile</h2>

              <p className="text-gray-700 mb-6">
                Bell peppers are low in calories and exceptionally rich in vitamin C and other antioxidants.
              </p>

              <h2 className="text-2xl font-serif text-green-800 mb-4">Health Benefits</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Immune support</h3>
                  <p className="text-gray-700">
                    Bell peppers are an excellent source of vitamin C, which is essential for immune function.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Eye health</h3>
                  <p className="text-gray-700">
                    Bell peppers contain carotenoids like lutein and zeaxanthin, which are linked to improved eye
                    health.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Antioxidant protection</h3>
                  <p className="text-gray-700">
                    Bell peppers are rich in antioxidants that help protect cells from damage caused by free radicals.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Metabolic health</h3>
                  <p className="text-gray-700">
                    Some studies suggest that bell peppers may help improve metabolic health and reduce the risk of
                    chronic diseases.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-serif text-green-800 mb-4">How to Incorporate Bell Peppers in Your Diet</h2>

              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Enjoy raw bell pepper slices as a crunchy and nutritious snack</li>
                <li>Add chopped bell peppers to salads, stir-fries, and omelets</li>
                <li>Roast bell peppers for a sweet and smoky flavor</li>
                <li>Stuff bell peppers with rice, meat, or vegetables for a hearty meal</li>
                <li>Use bell peppers to make sauces, dips, or salsas</li>
              </ul>

              <div className="bg-green-100 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-medium text-green-800 mb-2">Did You Know?</h3>
                <p className="text-gray-700">
                  Bell peppers come in a variety of colors, including green, red, yellow, and orange, each with slightly
                  different nutrient profiles.
                </p>
              </div>

              <p className="text-gray-700">
                Including bell peppers in your diet can be a delicious way to increase your intake of vitamins,
                antioxidants, and fiber. Whether eaten raw, cooked, or stuffed, bell peppers offer versatile options for
                incorporating more nutrition into your daily meals.
              </p>
            </div>

            <div className="mt-12 flex justify-center">
              <Link href="/resources/b">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Back to Foods Starting with B
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
