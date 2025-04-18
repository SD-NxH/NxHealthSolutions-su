import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export const metadata = {
  title: "Apples | NxHealth",
  description: "Learn about the nutritional benefits and health properties of apples",
}

export default function ApplePage() {
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
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-green-800 mb-4">Apples</h1>
            <p className="text-xl text-gray-600">
              Explore the crisp, juicy goodness of apples - nature's perfect snack packed with fiber and antioxidants
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
                src="/basket-of-organic-apples.png"
                alt="Fresh apple varieties"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="prose prose-green max-w-none">
              <h2 className="text-2xl font-serif text-green-800 mb-4">Nutritional Profile</h2>

              <p className="text-gray-700 mb-6">
                Apples come in many shades, shapes, and sizes. The general nutrient yield from an apple is fiber. Apples
                are a good source of both soluble and insoluble fiber. The soluble fiber, called pectin, helps regulate
                blood sugar levels, lower cholesterol levels, and promote a feeling of fullness. Insoluble fiber adds
                bulk to the stool, aiding in healthy digestion and preventing constipation.
              </p>

              <h2 className="text-2xl font-serif text-green-800 mb-4">Health Benefits</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Digestive Health</h3>
                  <p className="text-gray-700">
                    The high fiber content in apples supports healthy digestion and may help prevent constipation.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Heart Health</h3>
                  <p className="text-gray-700">
                    The soluble fiber in apples can help lower cholesterol levels and support cardiovascular health.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Blood Sugar Regulation</h3>
                  <p className="text-gray-700">
                    Apples have a low glycemic index and may help regulate blood sugar levels.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Immune Support</h3>
                  <p className="text-gray-700">
                    Apples contain vitamin C and antioxidants that may help support immune function.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-serif text-green-800 mb-4">How to Incorporate Apples in Your Diet</h2>

              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Enjoy a fresh apple as a convenient and portable snack</li>
                <li>Add sliced apples to salads for a sweet crunch</li>
                <li>Make homemade applesauce with cinnamon for a healthy dessert</li>
                <li>Bake apples with a sprinkle of cinnamon for a warm treat</li>
                <li>Add diced apples to oatmeal or yogurt for breakfast</li>
              </ul>

              <div className="bg-green-100 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-medium text-green-800 mb-2">Did You Know?</h3>
                <p className="text-gray-700">
                  There are over 7,500 varieties of apples grown worldwide, each with its own unique flavor profile,
                  texture, and best uses in cooking or eating fresh.
                </p>
              </div>

              <p className="text-gray-700">
                Including apples in your diet can be a delicious way to increase your fiber intake and support overall
                digestive health. Whether eaten fresh, cooked, or baked, apples offer versatile options for
                incorporating more nutrients into your daily meals.
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
