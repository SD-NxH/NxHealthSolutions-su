import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock, Users, ChefHat } from "lucide-react"

export default function TropicalGreenSmoothiePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link href="/resources/articles" className="inline-flex items-center text-green-600 mb-6 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Articles
        </Link>

        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="relative h-64 md:h-80">
            <Image
              src="/tropical-green-smoothie.png"
              alt="Tropical Green Smoothie"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">Tropical Green Smoothie</h1>
              <p className="text-lg text-green-100">
                A vibrant smoothie packed with vitamins, minerals, and healthy fats
              </p>
            </div>
          </div>

          {/* Recipe Info Cards */}
          <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Yields</p>
                    <p className="font-semibold text-gray-900">2 servings</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Clock className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Prep Time</p>
                    <p className="font-semibold text-gray-900">5 minutes</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <ChefHat className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Difficulty</p>
                    <p className="font-semibold text-gray-900">Easy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Ingredients & Equipment */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="h-1 w-8 bg-green-600 rounded mr-3"></div>
                <h2 className="text-2xl font-serif font-semibold text-gray-900">Ingredients</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>1 whole ripe avocado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>1 cup water (adjust for desired consistency)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>1 cup frozen pineapple chunks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>2 cups fresh greens (spinach or kale work well)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>1 cup frozen mango chunks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>1/2 cup frozen strawberries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>1/2 cup frozen blueberries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>1/2 cup frozen raspberries</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <div className="h-1 w-8 bg-green-600 rounded mr-3"></div>
                <h2 className="text-2xl font-serif font-semibold text-gray-900">Equipment</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">•</span>
                  <span>High-speed blender</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">•</span>
                  <span>Measuring cups</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <div className="flex items-center mb-6">
              <div className="h-1 w-8 bg-green-600 rounded mr-3"></div>
              <h2 className="text-2xl font-serif font-semibold text-gray-900">Instructions</h2>
            </div>

            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold mr-4 mt-1">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">Prepare ingredients</h3>
                  <p className="text-gray-700">
                    Peel and pit the avocado. If using fresh pineapple, mango, strawberries, blueberries, or
                    raspberries, chop them into smaller pieces. Using frozen fruit is recommended for a thicker, colder
                    smoothie without needing extra ice.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold mr-4 mt-1">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">Add liquids first</h3>
                  <p className="text-gray-700">Pour the water into your blender.</p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold mr-4 mt-1">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">Add soft ingredients</h3>
                  <p className="text-gray-700">Add the avocado and greens to the blender.</p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold mr-4 mt-1">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">Add frozen fruits</h3>
                  <p className="text-gray-700">
                    Add the pineapple, mango, strawberries, blueberries, and raspberries to the blender.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold mr-4 mt-1">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">Blend</h3>
                  <p className="text-gray-700">
                    Secure the lid and blend on high speed until completely smooth and creamy. If the mixture is too
                    thick, add a little more water (1-2 tablespoons at a time) and blend again until you reach your
                    desired consistency.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold mr-4 mt-1">
                  6
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">Serve</h3>
                  <p className="text-gray-700">Pour evenly into two glasses and enjoy immediately.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tips for Success */}
          <div className="border-t border-gray-200 pt-8 mt-8">
            <div className="flex items-center mb-6">
              <div className="h-1 w-8 bg-green-600 rounded mr-3"></div>
              <h2 className="text-2xl font-serif font-semibold text-gray-900">Tips for Success</h2>
            </div>

            <div className="bg-green-50 rounded-xl p-6 space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Adjust Consistency</h3>
                <p className="text-gray-700">
                  For a thicker smoothie, use more frozen fruit or less water. For a thinner smoothie, add more water.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Sweetness</h3>
                <p className="text-gray-700">
                  Taste the smoothie before serving. If you prefer it sweeter, you can add a small amount of agave,
                  maple syrup, or a pitted Medjool date.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Protein Boost</h3>
                <p className="text-gray-700">
                  For an extra protein kick, you can add a scoop of your favorite non-dairy protein powder.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Make Ahead (Partial)</h3>
                <p className="text-gray-700">
                  You can pre-portion all the frozen fruits and greens into freezer bags for quick smoothie prep
                  throughout the week. Just add the avocado and water when you're ready to blend.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Closing */}
        <div className="text-center mt-8 pt-8 border-t border-gray-200">
          <div className="w-16 h-1 bg-green-600 mx-auto mb-4 rounded"></div>
          <p className="text-gray-600 italic">Enjoy your nutrient-packed tropical smoothie!</p>
        </div>
      </div>
    </div>
  )
}
