import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import ScrollProgress from "@/components/scroll-progress"
import ScrollToTop from "@/components/scroll-to-top"

export const metadata: Metadata = {
  title: "Carrots - Nutritional Benefits & Health Information | NxHealth",
  description:
    "Discover the nutritional benefits of carrots, their health properties, and how to incorporate them into your diet for optimal wellness.",
}

export default function CarrotsPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <ScrollProgress />
      <ScrollToTop />

      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
        <Image src="/vibrant-orange-carrots.png" alt="Fresh orange carrots" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Carrots</h1>
            <p className="text-white/90 text-lg">Nature's vibrant source of beta-carotene</p>
          </div>
        </div>
      </div>

      {/* Quick Facts */}
      <div className="bg-orange-50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-orange-800 mb-4">Quick Facts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-md p-4 shadow-sm">
            <h3 className="font-medium text-orange-700">Scientific Name</h3>
            <p>Daucus carota</p>
          </div>
          <div className="bg-white rounded-md p-4 shadow-sm">
            <h3 className="font-medium text-orange-700">Family</h3>
            <p>Apiaceae (Umbelliferae)</p>
          </div>
          <div className="bg-white rounded-md p-4 shadow-sm">
            <h3 className="font-medium text-orange-700">Origin</h3>
            <p>Central Asia and Middle East</p>
          </div>
        </div>
      </div>

      {/* Nutritional Information */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-orange-800 mb-4">Nutritional Information</h2>
        <p className="mb-4">
          Carrots are exceptionally rich in beta-carotene, which the body converts to vitamin A. They also provide
          significant amounts of fiber, vitamin K, potassium, and antioxidants.
        </p>

        <div className="bg-white border border-orange-200 rounded-lg p-4 mb-4">
          <h3 className="font-medium text-orange-700 mb-2">Nutritional Value per 100g</h3>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>Calories:</span>
              <span className="font-medium">41 kcal</span>
            </li>
            <li className="flex justify-between">
              <span>Carbohydrates:</span>
              <span className="font-medium">9.6 g</span>
            </li>
            <li className="flex justify-between">
              <span>Fiber:</span>
              <span className="font-medium">2.8 g</span>
            </li>
            <li className="flex justify-between">
              <span>Protein:</span>
              <span className="font-medium">0.9 g</span>
            </li>
            <li className="flex justify-between">
              <span>Fat:</span>
              <span className="font-medium">0.2 g</span>
            </li>
            <li className="flex justify-between">
              <span>Vitamin A:</span>
              <span className="font-medium">835 μg (104% DV)</span>
            </li>
            <li className="flex justify-between">
              <span>Vitamin K:</span>
              <span className="font-medium">13.2 μg (16% DV)</span>
            </li>
            <li className="flex justify-between">
              <span>Potassium:</span>
              <span className="font-medium">320 mg (9% DV)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-orange-800 mb-4">Health Benefits</h2>
        <div className="space-y-4">
          <div className="bg-orange-50 p-4 rounded-md">
            <h3 className="font-medium text-orange-700 mb-2">Eye Health</h3>
            <p>
              The beta-carotene in carrots is converted to vitamin A in the body, which is essential for good vision,
              especially in low light conditions. Regular consumption may help reduce the risk of age-related macular
              degeneration.
            </p>
          </div>
          <div className="bg-orange-50 p-4 rounded-md">
            <h3 className="font-medium text-orange-700 mb-2">Heart Health</h3>
            <p>
              Carrots contain potassium, which helps regulate blood pressure, and fiber, which can help lower
              cholesterol levels. The antioxidants in carrots may also help protect against heart disease.
            </p>
          </div>
          <div className="bg-orange-50 p-4 rounded-md">
            <h3 className="font-medium text-orange-700 mb-2">Cancer Prevention</h3>
            <p>
              The antioxidants in carrots, particularly beta-carotene and falcarinol, may help protect cells from damage
              and reduce the risk of certain cancers, including lung, breast, and colon cancer.
            </p>
          </div>
          <div className="bg-orange-50 p-4 rounded-md">
            <h3 className="font-medium text-orange-700 mb-2">Immune Function</h3>
            <p>
              Vitamin A plays a crucial role in immune function, and the high vitamin A content in carrots helps support
              a healthy immune system.
            </p>
          </div>
        </div>
      </section>

      {/* Culinary Uses */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-orange-800 mb-4">Culinary Uses</h2>
        <p className="mb-4">Carrots are incredibly versatile in the kitchen and can be enjoyed in numerous ways:</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Raw in salads or as crudités with dips</li>
          <li>Roasted with herbs and olive oil</li>
          <li>Steamed or boiled as a side dish</li>
          <li>Puréed in soups and sauces</li>
          <li>Juiced for a nutritious beverage</li>
          <li>Grated into baked goods like carrot cake or muffins</li>
          <li>Pickled for a tangy condiment</li>
          <li>Stir-fried with other vegetables</li>
        </ul>

        <div className="bg-orange-100 p-4 rounded-md">
          <h3 className="font-medium text-orange-800 mb-2">Quick Recipe: Honey Glazed Carrots</h3>
          <p className="mb-2">A simple side dish that highlights the natural sweetness of carrots.</p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Peel and slice 1 pound of carrots into rounds</li>
            <li>Melt 2 tablespoons of butter in a skillet over medium heat</li>
            <li>Add carrots and cook for 5 minutes until they begin to soften</li>
            <li>Add 2 tablespoons of honey, 1/4 teaspoon of salt, and a pinch of cinnamon</li>
            <li>Cook for another 5 minutes until carrots are tender and glazed</li>
            <li>Garnish with fresh parsley and serve</li>
          </ol>
        </div>
      </section>

      {/* Selection and Storage */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-orange-800 mb-4">Selection and Storage</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-orange-200 rounded-lg p-4">
            <h3 className="font-medium text-orange-700 mb-2">How to Select</h3>
            <ul className="space-y-2">
              <li>Look for firm, smooth carrots with vibrant color</li>
              <li>Avoid carrots that are soft, rubbery, or have cracks</li>
              <li>If the greens are attached, they should be fresh and bright</li>
              <li>Smaller carrots tend to be sweeter and more tender</li>
            </ul>
          </div>
          <div className="bg-white border border-orange-200 rounded-lg p-4">
            <h3 className="font-medium text-orange-700 mb-2">How to Store</h3>
            <ul className="space-y-2">
              <li>Remove green tops before storing to prevent moisture loss</li>
              <li>Store in the refrigerator in a perforated plastic bag</li>
              <li>Keep away from apples and pears, which release ethylene gas that can make carrots bitter</li>
              <li>Properly stored, carrots can last 3-4 weeks in the refrigerator</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-orange-800 mb-4">Fun Facts</h2>
        <div className="bg-orange-50 rounded-lg p-6">
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">•</span>
              <p>The world's longest carrot was grown in the UK and measured 20 feet 5.9 inches (6.245 meters).</p>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">•</span>
              <p>
                Carrots were originally purple or white. The orange carrot was developed in the Netherlands in the 16th
                century as a tribute to William of Orange.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">•</span>
              <p>
                During World War II, the British spread the rumor that their pilots' excellent night vision was due to
                eating carrots, to hide the fact that they had developed radar technology.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">•</span>
              <p>
                Carrots can actually turn your skin orange if you eat too many of them, a condition called carotenemia.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Related Foods */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-orange-800 mb-4">Related Foods</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/resources/foods/sweet-potato" className="group">
            <div className="bg-orange-100 rounded-lg p-4 text-center transition-all group-hover:bg-orange-200">
              <p className="font-medium text-orange-800">Sweet Potato</p>
            </div>
          </Link>
          <Link href="/resources/foods/pumpkin" className="group">
            <div className="bg-orange-100 rounded-lg p-4 text-center transition-all group-hover:bg-orange-200">
              <p className="font-medium text-orange-800">Pumpkin</p>
            </div>
          </Link>
          <Link href="/resources/foods/bell-pepper" className="group">
            <div className="bg-orange-100 rounded-lg p-4 text-center transition-all group-hover:bg-orange-200">
              <p className="font-medium text-orange-800">Bell Pepper</p>
            </div>
          </Link>
          <Link href="/resources/foods/butternut-squash" className="group">
            <div className="bg-orange-100 rounded-lg p-4 text-center transition-all group-hover:bg-orange-200">
              <p className="font-medium text-orange-800">Butternut Squash</p>
            </div>
          </Link>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Author Info */}
      <div className="flex items-center space-x-4">
        <div className="relative h-12 w-12 rounded-full overflow-hidden">
          <Image
            src="/ej-profile-photo.jpg"
            alt="Eric Johnson, Founder of NxHealth Solutions"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-medium text-gray-900">Eric Johnson M.S.</p>
          <p className="text-sm text-gray-500">Founder & Nutrition Specialist</p>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Button variant="carrot" href="/resources/foods" className="mr-4">
          Explore More Foods
        </Button>
        <Button variant="outline" href="/resources/calorie-counter">
          Calorie Counter
        </Button>
      </div>
    </main>
  )
}
