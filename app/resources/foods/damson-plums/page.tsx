import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export const metadata = {
  title: "Damson Plums | NxHealth",
  description: "Learn about the nutritional benefits and health properties of damson plums",
}

export default function DamsonPlumsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="relative w-full py-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Link href="/resources/d" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Foods Starting with D
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-purple-800 mb-4">
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

            <div className="prose prose-purple max-w-none">
              <h2 className="text-2xl font-serif text-purple-800 mb-4">Nutritional Profile</h2>

              <p className="text-gray-700 mb-6">
                Damson plums, despite their small size, pack a significant nutritional punch. They are relatively low in
                calories but high in dietary fiber, making them excellent for digestive health. These small plums are
                rich in vitamins A and C, which support immune function and skin health. They also contain potassium,
                which helps regulate blood pressure, and various B vitamins that contribute to energy metabolism.
                Notably, damsons contain anthocyanins, powerful antioxidants responsible for their deep purple color.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-medium text-purple-800 mb-2">Nutritional Facts (per 100g)</h3>
                <ul className="grid grid-cols-2 gap-2">
                  <li className="flex justify-between">
                    <span>Calories:</span> <span>45 kcal</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Carbohydrates:</span> <span>11g</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Fiber:</span> <span>1.5g</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Protein:</span> <span>0.7g</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Vitamin C:</span> <span>10% DV</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Vitamin A:</span> <span>8% DV</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Potassium:</span> <span>6% DV</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Iron:</span> <span>2% DV</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-serif text-purple-800 mb-4">Health Benefits</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-purple-800 mb-2">Antioxidant Protection</h3>
                  <p className="text-gray-700">
                    The anthocyanins in damson plums help combat oxidative stress and may reduce inflammation throughout
                    the body.
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-purple-800 mb-2">Digestive Health</h3>
                  <p className="text-gray-700">
                    High fiber content supports healthy digestion, aids regularity, and promotes beneficial gut
                    bacteria.
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-purple-800 mb-2">Heart Health</h3>
                  <p className="text-gray-700">
                    Potassium, fiber, and antioxidants work together to support cardiovascular health and help maintain
                    healthy blood pressure.
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-purple-800 mb-2">Immune Support</h3>
                  <p className="text-gray-700">
                    Vitamin C and other nutrients in damsons help strengthen the immune system and protect against
                    seasonal illnesses.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-serif text-purple-800 mb-4">How to Incorporate Damson Plums in Your Diet</h2>

              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Transform them into traditional damson jam or preserves</li>
                <li>Create damson gin or vodka by steeping the fruit in spirits</li>
                <li>Bake them into tarts, crumbles, or pies for a tart flavor contrast</li>
                <li>Make damson sauce as an accompaniment to game meats or poultry</li>
                <li>Simmer into compotes to serve with yogurt or oatmeal</li>
                <li>Dry them for a concentrated flavor addition to trail mixes</li>
              </ul>

              <div className="bg-purple-100 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-medium text-purple-800 mb-2">Did You Know?</h3>
                <p className="text-gray-700">
                  Damson plums have been cultivated since ancient times and were highly prized in the Roman Empire. The
                  name "damson" derives from "Damascus plum," as they were believed to have originated near Damascus in
                  Syria. These resilient fruits were among the first brought to the Americas by settlers and have been
                  grown in Britain since before the Norman conquest.
                </p>
              </div>

              <h2 className="text-2xl font-serif text-purple-800 mb-4">Selecting and Storing</h2>

              <p className="text-gray-700 mb-6">
                When selecting damson plums, look for firm fruits with a deep blue-purple color and a slight bloom on
                the skin. Unlike dessert plums, damsons are naturally quite tart and astringent when raw, which is why
                they're often cooked with sugar or preserved. Store ripe damsons in the refrigerator for up to a week.
                They can also be frozen whole (after removing the pit) for up to 6 months, or preserved through canning
                or drying.
              </p>

              <h2 className="text-2xl font-serif text-purple-800 mb-4">Seasonal Availability</h2>

              <p className="text-gray-700 mb-6">
                Damson plums typically come into season in late summer and early autumn (August to October in the
                Northern Hemisphere). Their short season makes them a special treat, often preserved to be enjoyed
                throughout the year. In many regions, they're considered a heritage fruit, with some orchards
                maintaining centuries-old varieties.
              </p>

              <h2 className="text-2xl font-serif text-purple-800 mb-4">Traditional Uses</h2>

              <p className="text-gray-700">
                Historically, damson plums have been used not only for food but also for dyes, with their skin providing
                a purple colorant for fabrics. In traditional medicine, damson preparations were used to treat digestive
                ailments and sore throats. Today, they remain a beloved ingredient in European cuisine, particularly in
                British, German, and Eastern European cooking traditions.
              </p>
            </div>

            <div className="mt-12 flex justify-center">
              <Link href="/resources/d">
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
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
