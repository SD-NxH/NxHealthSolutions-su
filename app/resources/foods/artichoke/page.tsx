import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export const metadata = {
  title: "Artichokes | NxHealth",
  description: "Learn about the nutritional benefits and health properties of artichokes",
}

export default function ArtichokePage() {
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
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-green-800 mb-4">
              Artichokes
            </h1>
            <p className="text-xl text-gray-600">
              Delve into the layered complexity of artichokes - the flowering thistle with heart-healthy compounds and
              liver-supporting benefits
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image src="/fresh-artichokes.jpg" alt="Fresh artichokes" fill className="object-cover" priority />
            </div>

            <div className="prose prose-green max-w-none">
              <h2 className="text-2xl font-serif text-green-800 mb-4">Nutritional Profile</h2>

              <p className="text-gray-700 mb-6">
                Artichokes are low in fat while rich in fiber, vitamins, minerals, and antioxidants. Particularly high
                in folate and vitamins C and K, they also provide important minerals such as magnesium, potassium, and
                phosphorus. One medium artichoke contains only about 60 calories but provides nearly 7 grams of fiber,
                making it an excellent addition to a healthy diet.
              </p>

              <h2 className="text-2xl font-serif text-green-800 mb-4">Health Benefits</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Digestive Health</h3>
                  <p className="text-gray-700">
                    The high fiber content in artichokes supports healthy digestion, helps prevent constipation, and
                    promotes the growth of beneficial gut bacteria.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Liver Support</h3>
                  <p className="text-gray-700">
                    Artichokes contain cynarin and silymarin, compounds that may help protect the liver, stimulate bile
                    production, and support detoxification processes.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Cholesterol Management</h3>
                  <p className="text-gray-700">
                    Studies suggest that artichoke leaf extract may help lower cholesterol levels by inhibiting
                    cholesterol synthesis and increasing bile production.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Antioxidant Protection</h3>
                  <p className="text-gray-700">
                    Artichokes are rich in antioxidants, including quercetin, rutin, and anthocyanins, which help
                    protect cells from damage caused by free radicals.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-serif text-green-800 mb-4">How to Incorporate Artichokes in Your Diet</h2>

              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Steam or boil whole artichokes and enjoy the tender flesh by pulling off the leaves</li>
                <li>Add marinated artichoke hearts to salads, pasta dishes, or pizzas</li>
                <li>Blend artichoke hearts into dips or spreads with herbs and olive oil</li>
                <li>Grill halved artichokes for a smoky flavor</li>
                <li>Incorporate artichoke hearts into omelets or frittatas</li>
              </ul>

              <div className="bg-green-100 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-medium text-green-800 mb-2">Did You Know?</h3>
                <p className="text-gray-700">
                  Artichokes are actually flower buds that haven't yet bloomed. If allowed to flower, artichokes produce
                  beautiful violet-blue blossoms that can reach up to 7 inches in diameter.
                </p>
              </div>

              <p className="text-gray-700">
                Including artichokes in your diet can be a delicious way to support digestive health, liver function,
                and overall wellness. Whether enjoyed as a standalone dish or incorporated into various recipes,
                artichokes offer a unique flavor and impressive nutritional benefits.
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
