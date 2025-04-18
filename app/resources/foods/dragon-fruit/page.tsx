import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export const metadata = {
  title: "Dragon Fruit | NxHealth",
  description: "Learn about the nutritional benefits and health properties of dragon fruit",
}

export default function DragonFruitPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="relative w-full py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Link href="/resources/d" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Foods Starting with D
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-green-800 mb-4">
              Dragon Fruit
            </h1>
            <p className="text-xl text-gray-600">
              Explore the exotic, antioxidant-rich fruit with striking appearance and mild, sweet flavor
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image src="/dragon-fruit-vibrancy.png" alt="Fresh dragon fruit" fill className="object-cover" priority />
            </div>

            <div className="prose prose-green max-w-none">
              <h2 className="text-2xl font-serif text-green-800 mb-4">Nutritional Profile</h2>

              <p className="text-gray-700 mb-6">
                Dragon fruit is low in calories and high in fiber, magnesium, and antioxidants.
              </p>

              <h2 className="text-2xl font-serif text-green-800 mb-4">Health Benefits</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Immune support</h3>
                  <p className="text-gray-700">
                    Dragon fruit is rich in vitamin C and antioxidants, which can help boost the immune system.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Digestive health</h3>
                  <p className="text-gray-700">
                    The high fiber content in dragon fruit promotes healthy digestion and prevents constipation.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Rich in magnesium</h3>
                  <p className="text-gray-700">
                    Dragon fruit is a good source of magnesium, which is essential for many bodily functions.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Low in calories</h3>
                  <p className="text-gray-700">
                    Dragon fruit is low in calories, making it a healthy choice for weight management.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-serif text-green-800 mb-4">How to Incorporate Dragon Fruit in Your Diet</h2>

              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Enjoy dragon fruit as a refreshing snack on its own</li>
                <li>Add dragon fruit to smoothies for a vibrant color and nutritional boost</li>
                <li>Use dragon fruit in fruit salads or desserts</li>
                <li>Grill or bake dragon fruit for a unique flavor</li>
                <li>Make dragon fruit juice or cocktails</li>
              </ul>

              <div className="bg-green-100 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-medium text-green-800 mb-2">Did You Know?</h3>
                <p className="text-gray-700">
                  Dragon fruit is also known as pitaya or pitahaya and comes in several varieties, including white, red,
                  and yellow flesh.
                </p>
              </div>

              <p className="text-gray-700">
                Including dragon fruit in your diet can be a delicious way to increase your intake of vitamins,
                minerals, and antioxidants. Whether eaten fresh, blended into smoothies, or used in desserts, dragon
                fruit offers versatile options for incorporating more nutrition into your daily routine.
              </p>
            </div>

            <div className="mt-12 flex justify-center">
              <Link href="/resources/d">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Back to Foods Starting with D
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
