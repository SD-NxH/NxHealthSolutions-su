import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export const metadata = {
  title: "Brazil Nuts | NxHealth",
  description: "Learn about the nutritional benefits and health properties of brazil nuts",
}

export default function BrazilNutsPage() {
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
              Brazil Nuts
            </h1>
            <p className="text-xl text-gray-600">
              Explore the selenium powerhouses that support thyroid function and immune health with just one or two nuts
              daily
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image src="/pile-of-brazil-nuts.png" alt="Fresh brazil nuts" fill className="object-cover" priority />
            </div>

            <div className="prose prose-green max-w-none">
              <h2 className="text-2xl font-serif text-green-800 mb-4">Nutritional Profile</h2>

              <p className="text-gray-700 mb-6">
                Brazil nuts are a nutritional powerhouse, particularly known for their high selenium content.
              </p>

              <h2 className="text-2xl font-serif text-green-800 mb-4">Health Benefits</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Thyroid health</h3>
                  <p className="text-gray-700">
                    Selenium is essential for thyroid hormone production and function, making Brazil nuts beneficial for
                    thyroid health.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Immune function</h3>
                  <p className="text-gray-700">
                    Selenium also plays a crucial role in immune function, helping to protect against infections and
                    diseases.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Brain health</h3>
                  <p className="text-gray-700">
                    Some studies suggest that selenium may have neuroprotective effects and support brain health.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Skin health</h3>
                  <p className="text-gray-700">
                    Selenium is an antioxidant that may help protect skin cells from damage and promote healthy skin.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-serif text-green-800 mb-4">How to Incorporate Brazil Nuts in Your Diet</h2>

              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Enjoy one or two Brazil nuts as a snack to meet your daily selenium needs</li>
                <li>Add chopped Brazil nuts to salads, trail mix, or granola</li>
                <li>Use Brazil nuts in baking for cookies, cakes, or breads</li>
                <li>Make Brazil nut butter for spreading on toast or fruit</li>
              </ul>

              <div className="bg-green-100 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-medium text-green-800 mb-2">Did You Know?</h3>
                <p className="text-gray-700">
                  Brazil nuts are one of the richest dietary sources of selenium, with just one nut providing well over
                  100% of the recommended daily intake.
                </p>
              </div>

              <p className="text-gray-700">
                Including Brazil nuts in your diet can be a delicious way to increase your intake of selenium and
                support thyroid function, immune health, and overall wellness. However, due to their high selenium
                content, it's important to consume them in moderation.
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
