import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export const metadata = {
  title: "[Food Name] | NxHealth",
  description: "Learn about the nutritional benefits and health properties of [food name]",
}

export default function FoodPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="relative w-full py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/resources/[letter]"
              className="inline-flex items-center text-green-600 hover:text-green-700 mb-6"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Foods Starting with [Letter]
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-green-800 mb-4">
              [Food Name]
            </h1>
            <p className="text-xl text-gray-600">
              Discover the nutritional benefits and health properties of this [brief description]
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image src="/[food-image-path]" alt="[Food name]" fill className="object-cover" priority />
            </div>

            <div className="prose prose-green max-w-none">
              <h2 className="text-2xl font-serif text-green-800 mb-4">Nutritional Profile</h2>

              <p className="text-gray-700 mb-6">[Description of nutritional content]</p>

              <h2 className="text-2xl font-serif text-green-800 mb-4">Health Benefits</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">[Benefit 1]</h3>
                  <p className="text-gray-700">[Description of benefit 1]</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">[Benefit 2]</h3>
                  <p className="text-gray-700">[Description of benefit 2]</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">[Benefit 3]</h3>
                  <p className="text-gray-700">[Description of benefit 3]</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">[Benefit 4]</h3>
                  <p className="text-gray-700">[Description of benefit 4]</p>
                </div>
              </div>

              <h2 className="text-2xl font-serif text-green-800 mb-4">How to Incorporate [Food Name] in Your Diet</h2>

              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>[Way to use food 1]</li>
                <li>[Way to use food 2]</li>
                <li>[Way to use food 3]</li>
                <li>[Way to use food 4]</li>
                <li>[Way to use food 5]</li>
              </ul>

              <div className="bg-green-100 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-medium text-green-800 mb-2">Did You Know?</h3>
                <p className="text-gray-700">[Interesting fact about the food]</p>
              </div>

              <p className="text-gray-700">[Concluding paragraph about incorporating this food into diet]</p>
            </div>

            <div className="mt-12 flex justify-center">
              <Link href="/resources/[letter]">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Back to Foods Starting with [Letter]
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
