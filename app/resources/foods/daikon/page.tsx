import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export const metadata = {
  title: "Daikon Radish | NxHealth",
  description: "Learn about the nutritional benefits and health properties of daikon radish",
}

export default function DaikonPage() {
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
              Daikon Radish
            </h1>
            <p className="text-xl text-gray-600">
              Discover the crisp, mild flavor and impressive health benefits of daikon radish - a versatile root
              vegetable in Asian cuisine
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image src="/crisp-daikon-display.png" alt="Fresh daikon radish" fill className="object-cover" priority />
            </div>

            <div className="prose prose-green max-w-none">
              <h2 className="text-2xl font-serif text-green-800 mb-4">Nutritional Profile</h2>

              <p className="text-gray-700 mb-6">
                Daikon radish is a nutritional powerhouse with very few calories. It's composed of approximately 95%
                water and contains significant amounts of vitamin C, potassium, and phosphorus. Daikon is also a good
                source of folate, calcium, and magnesium. What makes daikon particularly valuable is its high content of
                digestive enzymes, specifically amylase, diastase, and esterase, which aid in the digestion of
                carbohydrates, fats, and proteins.
              </p>

              <h2 className="text-2xl font-serif text-green-800 mb-4">Health Benefits</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Digestive Health</h3>
                  <p className="text-gray-700">
                    The natural enzymes in daikon help break down food and improve digestion, potentially reducing
                    bloating and indigestion.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Detoxification</h3>
                  <p className="text-gray-700">
                    Daikon has natural diuretic properties that help flush toxins from the body and support kidney and
                    liver function.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Respiratory Health</h3>
                  <p className="text-gray-700">
                    Traditionally used in Asian medicine to treat respiratory issues, daikon can help reduce congestion
                    and soothe sore throats.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Anti-inflammatory</h3>
                  <p className="text-gray-700">
                    Contains compounds that may help reduce inflammation and support overall immune function.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-serif text-green-800 mb-4">How to Incorporate Daikon in Your Diet</h2>

              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Enjoy raw daikon slices in salads for a crisp, peppery crunch</li>
                <li>Add to soups and stews for a mild flavor that absorbs surrounding seasonings</li>
                <li>Pickle daikon for a tangy side dish or condiment</li>
                <li>Grate and use as a garnish for sushi or Asian-inspired dishes</li>
                <li>Stir-fry with other vegetables for a nutritious side dish</li>
                <li>Juice it with other vegetables for a detoxifying drink</li>
              </ul>

              <div className="bg-green-100 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-medium text-green-800 mb-2">Did You Know?</h3>
                <p className="text-gray-700">
                  The name "daikon" comes from Japanese, where "dai" means large and "kon" means root. In traditional
                  Japanese cuisine, daikon is often served with oily or fatty foods because its enzymes are believed to
                  help break down fats and aid digestion.
                </p>
              </div>

              <h2 className="text-2xl font-serif text-green-800 mb-4">Selecting and Storing</h2>

              <p className="text-gray-700 mb-6">
                When selecting daikon, look for firm roots with smooth, unblemished skin. The leaves (if attached)
                should be crisp and green. Store daikon in the refrigerator, wrapped in a damp paper towel inside a
                plastic bag. The root will stay fresh for up to two weeks, while the leaves should be used within a few
                days.
              </p>

              <p className="text-gray-700">
                Including daikon in your diet can be a delicious way to support digestive health and add variety to your
                meals. Its mild flavor makes it versatile enough to incorporate into many different cuisines, while its
                impressive nutritional profile offers numerous health benefits.
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
