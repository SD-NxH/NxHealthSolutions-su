import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export const metadata = {
  title: "Blackberries | NxHealth",
  description: "Learn about the nutritional benefits and health properties of blackberries",
}

export default function BlackberryPage() {
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
              Blackberries
            </h1>
            <p className="text-xl text-gray-600">
              Explore the dark, juicy berries loaded with antioxidants and fiber for digestive and brain health
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
                src="/glistening-blackberries.png"
                alt="Fresh blackberries"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="prose prose-green max-w-none">
              <h2 className="text-2xl font-serif text-green-800 mb-4">Nutritional Profile</h2>

              <p className="text-gray-700 mb-6">
                Blackberries are low in calories and high in fiber, vitamins, and antioxidants.
              </p>

              <h2 className="text-2xl font-serif text-green-800 mb-4">Health Benefits</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Brain health</h3>
                  <p className="text-gray-700">
                    Blackberries contain antioxidants that may help protect brain cells from damage and improve
                    cognitive function.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Digestive support</h3>
                  <p className="text-gray-700">
                    The high fiber content in blackberries promotes healthy digestion and prevents constipation.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Skin health</h3>
                  <p className="text-gray-700">
                    Blackberries are rich in vitamins and antioxidants that support skin health and may help protect
                    against sun damage.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Anti-aging properties</h3>
                  <p className="text-gray-700">
                    The antioxidants in blackberries help combat free radicals that contribute to premature aging.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-serif text-green-800 mb-4">How to Incorporate Blackberries in Your Diet</h2>

              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Enjoy fresh blackberries as a snack or dessert</li>
                <li>Add blackberries to smoothies, yogurt, or oatmeal</li>
                <li>Use blackberries in baking for muffins, pies, or cobblers</li>
                <li>Make blackberry jam or preserves</li>
                <li>Add blackberries to salads for a burst of flavor</li>
              </ul>

              <div className="bg-green-100 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-medium text-green-800 mb-2">Did You Know?</h3>
                <p className="text-gray-700">
                  Blackberries are native to North America and Europe and have been used for centuries in traditional
                  medicine.
                </p>
              </div>

              <p className="text-gray-700">
                Including blackberries in your diet can be a delicious way to increase your intake of fiber, vitamins,
                and antioxidants. Whether eaten fresh, cooked, or baked, blackberries offer versatile options for
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
