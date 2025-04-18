import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export const metadata = {
  title: "Butternut Squash | NxHealth",
  description: "Learn about the nutritional benefits and health properties of butternut squash",
}

export default function ButternutSquashPage() {
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
              Butternut Squash
            </h1>
            <p className="text-xl text-gray-600">
              Explore the sweet, nutty winter squash loaded with beta-carotene for eye health and immune support
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
                src="/vibrant-butternut-display.png"
                alt="Fresh butternut squash"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="prose prose-green max-w-none">
              <h2 className="text-2xl font-serif text-green-800 mb-4">Nutritional Profile</h2>

              <p className="text-gray-700 mb-6">
                Butternut squash is a winter squash that's low in fat and high in fiber, vitamins, and minerals.
              </p>

              <h2 className="text-2xl font-serif text-green-800 mb-4">Health Benefits</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Eye health</h3>
                  <p className="text-gray-700">
                    Butternut squash is rich in beta-carotene, which the body converts to vitamin A, essential for eye
                    health.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Immune support</h3>
                  <p className="text-gray-700">
                    The vitamin A and antioxidants in butternut squash help support immune function.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Digestive health</h3>
                  <p className="text-gray-700">
                    Butternut squash is a good source of fiber, which promotes healthy digestion and prevents
                    constipation.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Anti-inflammatory</h3>
                  <p className="text-gray-700">
                    Butternut squash contains anti-inflammatory compounds that may help reduce chronic inflammation.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-serif text-green-800 mb-4">
                How to Incorporate Butternut Squash in Your Diet
              </h2>

              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Roast butternut squash with herbs and spices for a flavorful side dish</li>
                <li>Add butternut squash to soups, stews, or curries</li>
                <li>Purée butternut squash for a creamy sauce or dip</li>
                <li>Use butternut squash in baking for pies, muffins, or breads</li>
                <li>Make butternut squash risotto or pasta dishes</li>
              </ul>

              <div className="bg-green-100 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-medium text-green-800 mb-2">Did You Know?</h3>
                <p className="text-gray-700">
                  Butternut squash is a type of winter squash that's related to pumpkins, zucchini, and gourds.
                </p>
              </div>

              <p className="text-gray-700">
                Including butternut squash in your diet can be a delicious way to increase your intake of vitamins,
                minerals, and antioxidants. Whether roasted, puréed, or baked, butternut squash offers versatile options
                for incorporating more nutrition into your daily routine.
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
