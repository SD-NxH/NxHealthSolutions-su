import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export const metadata = {
  title: "Blueberries | NxHealth",
  description: "Learn about the nutritional benefits and health properties of blueberries",
}

export default function BlueberryPage() {
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
              Blueberries
            </h1>
            <p className="text-xl text-gray-600">
              Explore the small but mighty berries with one of the highest antioxidant capacities of all fruits and
              vegetables
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image src="/pile-of-blueberries.png" alt="Fresh blueberries" fill className="object-cover" priority />
            </div>

            <div className="prose prose-green max-w-none">
              <h2 className="text-2xl font-serif text-green-800 mb-4">Nutritional Profile</h2>

              <p className="text-gray-700 mb-6">
                Blueberries are low in calories and packed with nutrients, including fiber, vitamin C, vitamin K, and
                manganese.
              </p>

              <h2 className="text-2xl font-serif text-green-800 mb-4">Health Benefits</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Cognitive function</h3>
                  <p className="text-gray-700">
                    Blueberries contain antioxidants that may help protect brain cells from damage and improve cognitive
                    function.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Heart health</h3>
                  <p className="text-gray-700">
                    Blueberries may help lower blood pressure and reduce the risk of heart disease.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Blood sugar regulation</h3>
                  <p className="text-gray-700">
                    Blueberries may help improve insulin sensitivity and regulate blood sugar levels.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Anti-inflammatory</h3>
                  <p className="text-gray-700">
                    Blueberries contain antioxidants and anti-inflammatory compounds that may help reduce chronic
                    inflammation.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-serif text-green-800 mb-4">How to Incorporate Blueberries in Your Diet</h2>

              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Enjoy fresh blueberries as a snack or dessert</li>
                <li>Add blueberries to smoothies, yogurt, or oatmeal</li>
                <li>Use blueberries in baking for muffins, pancakes, or pies</li>
                <li>Make blueberry jam or preserves</li>
                <li>Add blueberries to salads for a burst of flavor</li>
              </ul>

              <div className="bg-green-100 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-medium text-green-800 mb-2">Did You Know?</h3>
                <p className="text-gray-700">
                  Blueberries are native to North America and have been used for centuries in traditional medicine.
                </p>
              </div>

              <p className="text-gray-700">
                Including blueberries in your diet can be a delicious way to increase your intake of vitamins, minerals,
                and antioxidants. Whether eaten fresh, cooked, or baked, blueberries offer versatile options for
                incorporating more nutrition into your daily routine.
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
