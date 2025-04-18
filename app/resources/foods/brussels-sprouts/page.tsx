import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export const metadata = {
  title: "Brussels Sprouts | NxHealth",
  description: "Learn about the nutritional benefits and health properties of brussels sprouts",
}

export default function BrusselsSproutsPage() {
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
              Brussels Sprouts
            </h1>
            <p className="text-xl text-gray-600">
              Explore the mini cabbage-like vegetables packed with fiber, vitamins, and compounds that support cellular
              health
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
                src="/vibrant-brussels-sprouts.png"
                alt="Fresh brussels sprouts"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="prose prose-green max-w-none">
              <h2 className="text-2xl font-serif text-green-800 mb-4">Nutritional Profile</h2>

              <p className="text-gray-700 mb-6">
                Brussels sprouts are low in calories and rich in fiber, vitamins, and minerals.
              </p>

              <h2 className="text-2xl font-serif text-green-800 mb-4">Health Benefits</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Digestive health</h3>
                  <p className="text-gray-700">
                    Brussels sprouts are high in fiber, which promotes healthy digestion and prevents constipation.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Anti-inflammatory</h3>
                  <p className="text-gray-700">
                    Brussels sprouts contain anti-inflammatory compounds that may help reduce chronic inflammation.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Vitamin K source</h3>
                  <p className="text-gray-700">
                    Brussels sprouts are an excellent source of vitamin K, which is essential for blood clotting and
                    bone health.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Detoxification support</h3>
                  <p className="text-gray-700">
                    Brussels sprouts contain compounds that support the body's natural detoxification processes.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-serif text-green-800 mb-4">
                How to Incorporate Brussels Sprouts in Your Diet
              </h2>

              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Roast brussels sprouts with olive oil, salt, and pepper for a simple side dish</li>
                <li>Shred brussels sprouts and add them to salads or slaws</li>
                <li>Sauté brussels sprouts with garlic and balsamic vinegar</li>
                <li>Add brussels sprouts to stir-fries or soups</li>
                <li>Make brussels sprouts chips by baking them until crispy</li>
              </ul>

              <div className="bg-green-100 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-medium text-green-800 mb-2">Did You Know?</h3>
                <p className="text-gray-700">
                  Brussels sprouts are named after Brussels, Belgium, where they were widely cultivated in the 16th
                  century.
                </p>
              </div>

              <p className="text-gray-700">
                Including brussels sprouts in your diet can be a delicious way to increase your intake of fiber,
                vitamins, and minerals. Whether roasted, sautéed, or shredded, brussels sprouts offer versatile options
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
