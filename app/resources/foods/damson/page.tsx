import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export const metadata = {
  title: "Damson Plums | NxHealth",
  description: "Learn about the nutritional benefits and health properties of damson plums",
}

export default function DamsonPage() {
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
              Damson Plums
            </h1>
            <p className="text-xl text-gray-600">
              Discover the tart, distinctive flavor and impressive health benefits of damson plums - small fruits with
              big nutritional impact
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image src="/bowl-of-damsons.png" alt="Fresh damson plums" fill className="object-cover" priority />
            </div>

            <div className="prose prose-green max-w-none">
              <h2 className="text-2xl font-serif text-green-800 mb-4">Nutritional Profile</h2>

              <p className="text-gray-700 mb-6">
                Damson plums, despite their small size, pack a significant nutritional punch. They are relatively low in
                calories but high in dietary fiber, making them excellent for digestive health. These small plums are
                rich in vitamins A and C, which support immune function and skin health. They also contain potassium,
                which helps regulate blood pressure, and various B vitamins that contribute to energy metabolism.
                Notably, damsons contain anthocyanins, powerful antioxidants responsible for their deep purple color.
              </p>

              <h2 className="text-2xl font-serif text-green-800 mb-4">Health Benefits</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Antioxidant Protection</h3>
                  <p className="text-gray-700">
                    The anthocyanins in damson plums help combat oxidative stress and may reduce inflammation throughout
                    the body.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Digestive Health</h3>
                  <p className="text-gray-700">
                    High fiber content supports healthy digestion, aids regularity, and promotes beneficial gut
                    bacteria.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Heart Health</h3>
                  <p className="text-gray-700">
                    Potassium, fiber, and antioxidants work together to support cardiovascular health and help maintain
                    healthy blood pressure.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Immune Support</h3>
                  <p className="text-gray-700">
                    Vitamin C and other nutrients in damsons help strengthen the immune system and protect against
                    seasonal illnesses.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-serif text-green-800 mb-4">How to Incorporate Damson Plums in Your Diet</h2>

              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Transform them into traditional damson jam or preserves</li>
                <li>Create damson gin or vodka by steeping the fruit in spirits</li>
                <li>Bake them into tarts, crumbles, or pies for a tart flavor contrast</li>
                <li>Make damson sauce as an accompaniment to game meats or poultry</li>
                <li>Simmer into compotes to serve with yogurt or oatmeal</li>
                <li>Dry them for a concentrated flavor addition to trail mixes</li>
              </ul>

              <div className="bg-green-100 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-medium text-green-800 mb-2">Did You Know?</h3>
                <p className="text-gray-700">
                  Damson plums have been cultivated since ancient times and were highly prized in the Roman Empire. The
                  name "damson" derives from "Damascus plum," as they were believed to have originated near Damascus in
                  Syria. These resilient fruits were among the first brought to the Americas by settlers and have been
                  grown in Britain since before the Norman conquest.
                </p>
              </div>

              <h2 className="text-2xl font-serif text-green-800 mb-4">Seasonal Availability</h2>

              <p className="text-gray-700 mb-6">
                Damson plums typically come into season in late summer and early autumn (August to October in the
                Northern Hemisphere). Their short season makes them a special treat, often preserved to be enjoyed
                throughout the year. When selecting damsons, look for firm fruits with a deep blue-purple color and a
                slight bloom on the skin. Unlike dessert plums, damsons are naturally quite tart and astringent when
                raw, which is why they're often cooked with sugar or preserved.
              </p>

              <p className="text-gray-700">
                Including damson plums in your diet, particularly when in season, can add variety to your fruit intake
                while providing valuable nutrients and antioxidants. While they may be too tart for most people to enjoy
                raw, their transformative qualities when cooked make them a prized ingredient in preserves and
                traditional recipes across Europe.
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
