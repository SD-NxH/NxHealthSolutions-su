import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock, Users, ChefHat, Utensils, ShoppingBag, Leaf } from "lucide-react"

export default function PlantedFriedRicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50/50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link
          href="/resources/articles"
          className="inline-flex items-center text-green-600 mb-6 hover:underline font-medium"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Articles
        </Link>

        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-8 shadow-lg">
          <div className="relative h-[400px] w-full">
            <Image
              src="/colorful-vegetable-fried-rice.png"
              alt="Planted Fried Rice"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h1 className="text-4xl font-bold mb-2 font-serif">Planted Fried Rice</h1>
            <p className="text-white/90 text-lg max-w-2xl">
              A vibrant, nutritious plant-based fried rice loaded with colorful vegetables and protein-rich tofu.
            </p>
          </div>
        </div>

        {/* Recipe Info Cards */}
        <div className="flex flex-wrap gap-4 mb-10 justify-center">
          <div className="bg-white px-6 py-4 rounded-lg shadow-md flex items-center">
            <Clock className="h-5 w-5 text-green-600 mr-3" />
            <div>
              <p className="text-xs text-gray-500 uppercase font-medium">Prep Time</p>
              <p className="font-medium">20 minutes</p>
            </div>
          </div>
          <div className="bg-white px-6 py-4 rounded-lg shadow-md flex items-center">
            <ChefHat className="h-5 w-5 text-green-600 mr-3" />
            <div>
              <p className="text-xs text-gray-500 uppercase font-medium">Cook Time</p>
              <p className="font-medium">20 minutes</p>
            </div>
          </div>
          <div className="bg-white px-6 py-4 rounded-lg shadow-md flex items-center">
            <Users className="h-5 w-5 text-green-600 mr-3" />
            <div>
              <p className="text-xs text-gray-500 uppercase font-medium">Servings</p>
              <p className="font-medium">4 servings</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="h-8 w-1 bg-green-600 rounded-full mr-3"></div>
                <h2 className="text-2xl font-serif font-semibold">Ingredients</h2>
              </div>
              <ul className="list-none pl-0 space-y-3 mb-6">
                {[
                  "1 cup jasmine rice, or 1 ½ cups cooked quinoa, couscous, or orzo, or 4 cups cauliflower rice",
                  "1 tablespoon olive oil",
                  "1 cup diced tofu, patted dry",
                  "1 cup mixed vegetables (carrots, peas, corn), fresh or frozen",
                  "1 cup chopped broccolini",
                  "1/2 cup chopped pineapple",
                  "1/4 cup coconut aminos, plus more to taste",
                  "2 tablespoons teriyaki sauce, plus more to taste",
                  "1 cup Just Egg",
                  "Optional garnishes: chopped green onions, sesame seeds, sriracha",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs mr-3 mt-0.5">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <div className="h-8 w-1 bg-green-600 rounded-full mr-3"></div>
                <h2 className="text-2xl font-serif font-semibold">Equipment</h2>
              </div>
              <ul className="list-none pl-0 space-y-3">
                {["Large skillet or wok", "Large bowl", "Measuring cups and spoons"].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Utensils className="h-4 w-4 text-green-600 mr-3 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-10">
            <div className="flex items-center mb-6">
              <div className="h-8 w-1 bg-green-600 rounded-full mr-3"></div>
              <h2 className="text-2xl font-serif font-semibold">Instructions</h2>
            </div>
            <ol className="list-none pl-0 space-y-6 relative before:absolute before:left-3.5 before:top-0 before:h-full before:w-0.5 before:bg-green-100">
              <li className="pl-14 relative">
                <div className="absolute left-0 top-0 flex items-center justify-center h-7 w-7 rounded-full bg-green-600 text-white font-medium">
                  1
                </div>
                <h3 className="font-medium text-lg mb-2">Prepare the base (Choose Your Base):</h3>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                  <li>For rice: Cook the jasmine rice according to package directions.</li>
                  <li>For quinoa: Cook the quinoa according to package directions.</li>
                  <li>For couscous: Cook the couscous according to package directions.</li>
                  <li>For orzo: Cook the orzo according to package directions.</li>
                  <li>For cauliflower rice: If using cauliflower rice, skip to step 2.</li>
                </ul>
              </li>
              <li className="pl-14 relative">
                <div className="absolute left-0 top-0 flex items-center justify-center h-7 w-7 rounded-full bg-green-600 text-white font-medium">
                  2
                </div>
                <h3 className="font-medium text-lg mb-2">Cook tofu:</h3>
                <p className="text-gray-700">
                  Heat 1/2 tablespoon olive oil in the skillet over medium-high heat. Add the diced tofu and cook until
                  golden brown and slightly crispy, 5-7 minutes. Remove from the skillet and set aside.
                </p>
              </li>
              <li className="pl-14 relative">
                <div className="absolute left-0 top-0 flex items-center justify-center h-7 w-7 rounded-full bg-green-600 text-white font-medium">
                  3
                </div>
                <h3 className="font-medium text-lg mb-2">Sauté vegetables:</h3>
                <p className="text-gray-700">
                  Add the remaining 1/2 tablespoon olive oil to the skillet. Add the mixed vegetables and broccolini and
                  cook until tender-crisp, 5-7 minutes.
                </p>
              </li>
              <li className="pl-14 relative">
                <div className="absolute left-0 top-0 flex items-center justify-center h-7 w-7 rounded-full bg-green-600 text-white font-medium">
                  4
                </div>
                <h3 className="font-medium text-lg mb-2">Cook Just Egg:</h3>
                <p className="text-gray-700">
                  Push the vegetables to one side of the skillet and pour the Just Egg onto the other side. Scramble
                  until set, then mix with the vegetables.
                </p>
              </li>
              <li className="pl-14 relative">
                <div className="absolute left-0 top-0 flex items-center justify-center h-7 w-7 rounded-full bg-green-600 text-white font-medium">
                  5
                </div>
                <h3 className="font-medium text-lg mb-2">Combine ingredients:</h3>
                <p className="text-gray-700">
                  Add the cooked rice (or alternative grain) and cooked tofu to the skillet with the vegetables and Just
                  Egg. Stir in the coconut aminos and teriyaki sauce. Mix well.
                </p>
              </li>
              <li className="pl-14 relative">
                <div className="absolute left-0 top-0 flex items-center justify-center h-7 w-7 rounded-full bg-green-600 text-white font-medium">
                  6
                </div>
                <h3 className="font-medium text-lg mb-2">Add pineapple:</h3>
                <p className="text-gray-700">
                  Stir in the chopped pineapple and cook for another 2-3 minutes, until heated through.
                </p>
              </li>
              <li className="pl-14 relative">
                <div className="absolute left-0 top-0 flex items-center justify-center h-7 w-7 rounded-full bg-green-600 text-white font-medium">
                  7
                </div>
                <h3 className="font-medium text-lg mb-2">Serve:</h3>
                <p className="text-gray-700">
                  Taste and adjust seasonings as needed. Garnish with chopped green onions, sesame seeds, and sriracha,
                  if desired.
                </p>
              </li>
            </ol>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <ShoppingBag className="h-5 w-5 text-green-600 mr-3" />
                <h2 className="text-2xl font-serif font-semibold">Shopping List</h2>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <ul className="grid grid-cols-2 gap-2">
                  {[
                    "Jasmine rice",
                    "Quinoa",
                    "Couscous",
                    "Orzo",
                    "Olive oil",
                    "Tofu",
                    "Mixed vegetables",
                    "Broccolini",
                    "Pineapple",
                    "Coconut aminos",
                    "Teriyaki sauce",
                    "Just Egg",
                    "Green onions (optional)",
                    "Sesame seeds (optional)",
                    "Sriracha (optional)",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="inline-block h-4 w-4 rounded-full bg-white border border-green-600 mr-2"></span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <Leaf className="h-5 w-5 text-green-600 mr-3" />
                <h2 className="text-2xl font-serif font-semibold">Dietary Swaps</h2>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-white text-green-600 flex items-center justify-center text-xs mr-3 mt-0.5 border border-green-600">
                      ✓
                    </span>
                    <div>
                      <span className="font-medium">Grain-free:</span>
                      <span className="text-gray-700"> Use cauliflower rice instead of rice or other grains.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-white text-green-600 flex items-center justify-center text-xs mr-3 mt-0.5 border border-green-600">
                      ✓
                    </span>
                    <div>
                      <span className="font-medium">Gluten-free:</span>
                      <span className="text-gray-700">
                        {" "}
                        Ensure the teriyaki sauce and coconut aminos are gluten-free.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-white text-green-600 flex items-center justify-center text-xs mr-3 mt-0.5 border border-green-600">
                      ✓
                    </span>
                    <div>
                      <span className="font-medium">Vegetarian/Vegan:</span>
                      <span className="text-gray-700"> This recipe is already vegetarian and vegan.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-white text-green-600 flex items-center justify-center text-xs mr-3 mt-0.5 border border-green-600">
                      ✓
                    </span>
                    <div>
                      <span className="font-medium">Lower Sodium:</span>
                      <span className="text-gray-700">
                        {" "}
                        Use low-sodium coconut aminos and teriyaki sauce, or reduce the amount used and add other
                        seasonings like ginger, garlic, and pepper.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 mb-6">
            <div className="inline-block h-0.5 w-16 bg-green-600 mb-4"></div>
            <p className="text-gray-600 italic">
              Enjoy this delicious plant-based meal that's perfect for a quick weeknight dinner or meal prep!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
