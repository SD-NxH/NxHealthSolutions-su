import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export const metadata = {
  title: "Broccoli | NxHealth",
  description: "Learn about the nutritional benefits and health properties of broccoli",
}

export default function BroccoliPage() {
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
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-green-800 mb-4">Broccoli</h1>
            <p className="text-xl text-gray-600">
              Explore the nutrient-dense cruciferous vegetable with powerful cancer-fighting compounds and
              detoxification support
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image src="/fresh-broccoli.jpg" alt="Fresh broccoli" fill className="object-cover" priority />
            </div>

            <div className="prose prose-green max-w-none">
              <h2 className="text-2xl font-serif text-green-800 mb-4">Nutritional Profile</h2>

              <p className="text-gray-700 mb-6">
                Broccoli is a nutritional powerhouse, packed with vitamins, minerals, fiber, and antioxidants.
              </p>

              <h2 className="text-2xl font-serif text-green-800 mb-4">Health Benefits</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Cancer prevention</h3>
                  <p className="text-gray-700">
                    Broccoli contains compounds like sulforaphane that have been shown to have cancer-fighting
                    properties.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Detoxification</h3>
                  <p className="text-gray-700">
                    Broccoli supports the body's natural detoxification processes, helping to eliminate harmful toxins.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Bone health</h3>
                  <p className="text-gray-700">
                    Broccoli is a good source of vitamin K and calcium, which are essential for maintaining strong
                    bones.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Heart health</h3>
                  <p className="text-gray-700">
                    Broccoli is rich in fiber, potassium, and antioxidants, which support cardiovascular health.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-serif text-green-800 mb-4">How to Incorporate Broccoli in Your Diet</h2>

              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Steam or roast broccoli florets for a simple side dish</li>
                <li>Add chopped broccoli to stir-fries, soups, or salads</li>
                <li>Blend broccoli into smoothies for a nutritional boost</li>
                <li>Use broccoli as a topping for pizzas or omelets</li>
                <li>Make broccoli slaw with a creamy dressing</li>
              </ul>

              <div className="bg-green-100 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-medium text-green-800 mb-2">Did You Know?</h3>
                <p className="text-gray-700">
                  Broccoli is a member of the cruciferous vegetable family, which also includes cabbage, cauliflower,
                  and Brussels sprouts.
                </p>
              </div>

              <p className="text-gray-700">
                Including broccoli in your diet can be a delicious way to increase your intake of vitamins, minerals,
                and antioxidants. Whether eaten raw, cooked, or roasted, broccoli offers versatile options for
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
