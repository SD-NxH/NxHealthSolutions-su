import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export const metadata = {
  title: "Dulse | NxHealth",
  description: "Learn about the nutritional benefits and culinary uses of dulse, a mineral-rich red seaweed.",
}

export default function DulsePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] bg-gradient-to-b from-red-900/90 to-red-950/90">
        <Image
          src="/crimson-seaweed-harvest.png"
          alt="Fresh dulse seaweed"
          fill
          className="object-cover mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white mb-4">Dulse</h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-2xl">
            A mineral-rich red seaweed with unique flavor and impressive nutritional profile
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <Link href="/resources/d" className="inline-flex items-center text-red-800 hover:text-red-700 mb-6">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Foods Starting With "D"
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-serif mb-4 text-red-900">What is Dulse?</h2>
                <p className="text-gray-700">
                  Dulse (Palmaria palmata) is a red seaweed that grows on the northern coasts of the Atlantic and
                  Pacific oceans. It has been harvested for centuries as a food source and for its medicinal properties.
                  With its distinctive reddish-purple color and unique flavor profile that's often described as having
                  notes of the ocean with a slightly spicy undertone, dulse has become increasingly popular in modern
                  cuisine.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-serif mb-4 text-red-900">Nutritional Profile</h2>
                <p className="text-gray-700 mb-4">
                  Dulse is exceptionally nutrient-dense, particularly rich in minerals due to its ability to absorb
                  nutrients from seawater. It's an excellent source of:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Iodine - essential for thyroid function</li>
                  <li>Iron - higher content than many land vegetables</li>
                  <li>Potassium - important for heart and muscle function</li>
                  <li>Magnesium - supports hundreds of biochemical reactions</li>
                  <li>Vitamin B6 - important for brain development and function</li>
                  <li>Vitamin B12 - one of the few plant sources of this vitamin</li>
                  <li>Fiber - supports digestive health</li>
                  <li>Protein - contains all essential amino acids</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-serif mb-4 text-red-900">Health Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-medium text-red-900 mb-2">Thyroid Support</h3>
                    <p className="text-sm text-gray-700">
                      The high iodine content in dulse makes it beneficial for maintaining healthy thyroid function,
                      which regulates metabolism and energy production.
                    </p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-medium text-red-900 mb-2">Heart Health</h3>
                    <p className="text-sm text-gray-700">
                      Rich in potassium and with natural compounds that may help lower blood pressure and improve
                      cholesterol levels.
                    </p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-medium text-red-900 mb-2">Blood Building</h3>
                    <p className="text-sm text-gray-700">
                      The high iron content helps prevent anemia and supports oxygen transport throughout the body.
                    </p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-medium text-red-900 mb-2">Detoxification</h3>
                    <p className="text-sm text-gray-700">
                      Contains alginates that can bind to heavy metals and radioactive elements in the digestive tract,
                      helping to remove them from the body.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-serif mb-4 text-red-900">Culinary Uses</h2>
                <p className="text-gray-700 mb-4">Dulse is versatile in the kitchen and can be used in many ways:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Eaten dried as a snack</li>
                  <li>Rehydrated and added to soups and stews</li>
                  <li>Pan-fried until crisp (develops a bacon-like flavor)</li>
                  <li>Powdered and used as a seasoning</li>
                  <li>Added to salads for texture and mineral boost</li>
                  <li>Incorporated into bread and other baked goods</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-serif mb-4 text-red-900">How to Store</h2>
                <p className="text-gray-700">
                  Dried dulse can be stored in an airtight container in a cool, dark place for up to a year. Once
                  rehydrated, it should be used immediately or stored in the refrigerator for no more than 3-4 days.
                  Fresh dulse is more perishable and should be used within a few days of harvesting or kept refrigerated
                  in a damp cloth.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-red-900 mb-4">Quick Facts</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-700 mr-2">•</span>
                    <span>Scientific name: Palmaria palmata</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-700 mr-2">•</span>
                    <span>Also known as: Sea lettuce flakes, red dulse, dillisk</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-700 mr-2">•</span>
                    <span>Origin: North Atlantic and Pacific coastal regions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-700 mr-2">•</span>
                    <span>Taste: Umami, salty, slightly spicy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-700 mr-2">•</span>
                    <span>Sustainability: Highly sustainable when wild-harvested responsibly</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-red-900 mb-4">Simple Dulse Recipe</h3>
                <h4 className="font-medium text-gray-900 mb-2">Crispy Dulse Chips</h4>
                <p className="text-sm text-gray-700 mb-3">A quick, nutritious snack with a bacon-like flavor.</p>
                <h5 className="font-medium text-gray-800 mb-1">Ingredients:</h5>
                <ul className="list-disc pl-5 mb-3 text-sm text-gray-700">
                  <li>1 cup dried dulse</li>
                  <li>1 tablespoon olive oil</li>
                  <li>Optional: garlic powder, smoked paprika</li>
                </ul>
                <h5 className="font-medium text-gray-800 mb-1">Instructions:</h5>
                <ol className="list-decimal pl-5 text-sm text-gray-700">
                  <li>Heat oil in a skillet over medium heat</li>
                  <li>Add dulse in a single layer</li>
                  <li>Cook for 2-3 minutes until crisp</li>
                  <li>Sprinkle with seasonings if desired</li>
                  <li>Enjoy as a snack or salad topping</li>
                </ol>
              </div>

              <div className="bg-red-100 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-red-900 mb-3">Explore More</h3>
                <div className="space-y-3">
                  <Button variant="dulse" href="/resources/foods/seaweed" className="w-full justify-start">
                    Seaweed Varieties
                  </Button>
                  <Button variant="dulse" href="/resources/cuisines" className="w-full justify-start">
                    Coastal Cuisines
                  </Button>
                  <Button variant="dulse" href="/resources/what-to-eat" className="w-full justify-start">
                    Mineral-Rich Foods
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
