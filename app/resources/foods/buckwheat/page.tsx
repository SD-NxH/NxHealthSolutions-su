import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export const metadata = {
  title: "Buckwheat | NxHealth",
  description: "Learn about the nutritional benefits and health properties of buckwheat",
}

export default function BuckwheatPage() {
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
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-green-800 mb-4">Buckwheat</h1>
            <p className="text-xl text-gray-600">
              Explore the gluten-free pseudo-grain rich in resistant starch and compounds that support heart and blood
              vessel health
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
                src="/pile-of-buckwheat-groats.png"
                alt="Fresh buckwheat groats"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="prose prose-green max-w-none">
              <h2 className="text-2xl font-serif text-green-800 mb-4">Nutritional Profile</h2>

              <p className="text-gray-700 mb-6">
                Buckwheat is a gluten-free pseudo-grain that's rich in resistant starch, fiber, and minerals.
              </p>

              <h2 className="text-2xl font-serif text-green-800 mb-4">Health Benefits</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Heart health</h3>
                  <p className="text-gray-700">
                    Buckwheat contains compounds that may help lower cholesterol levels and improve heart health.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Blood sugar control</h3>
                  <p className="text-gray-700">
                    The resistant starch in buckwheat may help regulate blood sugar levels and improve insulin
                    sensitivity.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Digestive health</h3>
                  <p className="text-gray-700">
                    Buckwheat is a good source of fiber, which promotes healthy digestion and prevents constipation.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Gluten-free alternative</h3>
                  <p className="text-gray-700">
                    Buckwheat is naturally gluten-free, making it a great option for people with celiac disease or
                    gluten sensitivity.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-serif text-green-800 mb-4">How to Incorporate Buckwheat in Your Diet</h2>

              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Use buckwheat flour to make pancakes, waffles, or crepes</li>
                <li>Cook buckwheat groats as a side dish or in salads</li>
                <li>Add buckwheat noodles (soba noodles) to soups or stir-fries</li>
                <li>Use buckwheat in baking for muffins, breads, or cookies</li>
                <li>Make buckwheat porridge for a hearty breakfast</li>
              </ul>

              <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-medium text-amber-800 mb-2">Featured Recipe</h3>
                <p className="text-amber-700 mb-3">
                  Try our delicious Banana Buckwheat Muffins with Nuts & Seeds - a perfect way to enjoy the nutritional
                  benefits of buckwheat in a tasty treat!
                </p>
                <Link
                  href="/resources/banana-buckwheat-muffins"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                >
                  View Recipe →
                </Link>
              </div>

              <div className="bg-green-100 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-medium text-green-800 mb-2">Did You Know?</h3>
                <p className="text-gray-700">
                  Despite its name, buckwheat is not related to wheat. It's actually a seed that's related to rhubarb
                  and sorrel.
                </p>
              </div>

              <p className="text-gray-700">
                Including buckwheat in your diet can be a delicious way to increase your intake of fiber, minerals, and
                antioxidants. Whether eaten as a grain, flour, or noodle, buckwheat offers versatile options for
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
