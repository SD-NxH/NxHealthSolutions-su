import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock, Users, ChefHat, ShoppingBag } from "lucide-react"

export default function PlantedFriedRicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] w-full">
        <Image
          src="/colorful-vegetable-fried-rice.png"
          alt="Planted Fried Rice"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-end">
          <div className="container mx-auto px-4 md:px-6 py-8">
            <h1 className="text-3xl md:text-5xl font-serif text-white mb-2">Planted Fried Rice</h1>
            <p className="text-white/90 text-lg">A delicious plant-based twist on a classic dish</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link href="/resources/articles" className="inline-flex items-center text-green-600 mb-6 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Articles
          </Link>

          {/* Recipe Info */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-green-600 mr-2" />
                <span>Yields: 4 servings</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-green-600 mr-2" />
                <span>Prep time: 20 minutes</span>
              </div>
              <div className="flex items-center">
                <ChefHat className="h-5 w-5 text-green-600 mr-2" />
                <span>Cook time: 20 minutes</span>
              </div>
            </div>

            <p className="text-gray-700 mb-6">
              This versatile plant-based fried rice recipe is perfect for busy professionals looking for a quick,
              nutritious meal. With multiple base options and simple ingredients, you can customize it to your
              preferences while getting a delicious dinner on the table in under 40 minutes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Ingredients */}
              <div>
                <h2 className="text-xl font-serif font-medium text-gray-900 mb-4">Ingredients</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>1 cup jasmine rice, or 1 ½ cups cooked quinoa, couscous, or orzo, or 4 cups cauliflower rice</li>
                  <li>1 tablespoon olive oil</li>
                  <li>1 cup diced tofu, patted dry</li>
                  <li>1 cup mixed vegetables (carrots, peas, corn), fresh or frozen</li>
                  <li>1 cup chopped broccolini</li>
                  <li>1/2 cup chopped pineapple</li>
                  <li>1/4 cup coconut aminos, plus more to taste</li>
                  <li>2 tablespoons teriyaki sauce, plus more to taste</li>
                  <li>1 cup Just Egg</li>
                  <li>Optional garnishes: chopped green onions, sesame seeds, sriracha</li>
                </ul>

                <h2 className="text-xl font-serif font-medium text-gray-900 mt-6 mb-4">Equipment</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>Large skillet or wok</li>
                  <li>Large bowl</li>
                  <li>Measuring cups and spoons</li>
                </ul>
              </div>

              {/* Instructions */}
              <div>
                <h2 className="text-xl font-serif font-medium text-gray-900 mb-4">Instructions</h2>
                <ol className="space-y-3 text-gray-700 list-decimal pl-5">
                  <li>
                    <strong>Prepare the base (Choose Your Base):</strong>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>For rice: Cook the jasmine rice according to package directions.</li>
                      <li>For quinoa: Cook the quinoa according to package directions.</li>
                      <li>For couscous: Cook the couscous according to package directions.</li>
                      <li>For orzo: Cook the orzo according to package directions.</li>
                      <li>For cauliflower rice: If using cauliflower rice, skip to step 2.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Cook tofu:</strong> Heat 1/2 tablespoon olive oil in the skillet over medium-high heat. Add
                    the diced tofu and cook until golden brown and slightly crispy, 5-7 minutes. Remove from the skillet
                    and set aside.
                  </li>
                  <li>
                    <strong>Sauté vegetables:</strong> Add the remaining 1/2 tablespoon olive oil to the skillet. Add
                    the mixed vegetables and broccolini and cook until tender-crisp, 5-7 minutes.
                  </li>
                  <li>
                    <strong>Cook Just Egg:</strong> Push the vegetables to one side of the skillet and pour the Just Egg
                    onto the other side. Scramble until set, then mix with the vegetables.
                  </li>
                  <li>
                    <strong>Combine ingredients:</strong> Add the cooked rice (or alternative grain) and cooked tofu to
                    the skillet with the vegetables and Just Egg. Stir in the coconut aminos and teriyaki sauce. Mix
                    well.
                  </li>
                  <li>
                    <strong>Add pineapple:</strong> Stir in the chopped pineapple and cook for another 2-3 minutes,
                    until heated through.
                  </li>
                  <li>
                    <strong>Serve:</strong> Taste and adjust seasonings as needed. Garnish with chopped green onions,
                    sesame seeds, and sriracha, if desired.
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* Shopping List */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-serif font-medium text-gray-900 mb-4 flex items-center">
              <ShoppingBag className="h-5 w-5 text-green-600 mr-2" />
              Shopping List
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-gray-700">
                <li>Jasmine rice</li>
                <li>Quinoa</li>
                <li>Couscous</li>
                <li>Orzo</li>
                <li>Olive oil</li>
                <li>Tofu</li>
                <li>Mixed vegetables (carrots, peas, corn)</li>
                <li>Broccolini</li>
              </ul>
              <ul className="space-y-2 text-gray-700">
                <li>Pineapple</li>
                <li>Coconut aminos</li>
                <li>Teriyaki sauce</li>
                <li>Just Egg</li>
                <li>Green onions (optional)</li>
                <li>Sesame seeds (optional)</li>
                <li>Sriracha (optional)</li>
              </ul>
            </div>
          </div>

          {/* Dietary Swaps */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-serif font-medium text-gray-900 mb-4">Dietary Swaps</h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Grain-free:</strong> Use cauliflower rice instead of rice or other grains.
              </li>
              <li>
                <strong>Gluten-free:</strong> Ensure the teriyaki sauce and coconut aminos are gluten-free.
              </li>
              <li>
                <strong>Vegetarian/Vegan:</strong> This recipe is already vegetarian and vegan.
              </li>
              <li>
                <strong>Lower Sodium:</strong> Use low-sodium coconut aminos and teriyaki sauce, or reduce the amount
                used and add other seasonings like ginger, garlic, and pepper.
              </li>
            </ul>
          </div>

          {/* Tips */}
          <div className="bg-green-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-serif font-medium text-gray-900 mb-4">Chef's Tips</h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                For best results, cook your rice a day ahead and refrigerate it overnight. Cold rice makes for better
                fried rice texture.
              </li>
              <li>
                Don't overcrowd your pan - if needed, cook in batches to ensure everything gets properly browned rather
                than steamed.
              </li>
              <li>
                This recipe is perfect for meal prep! Make a double batch and portion into containers for quick lunches
                throughout the week.
              </li>
              <li>
                Feel free to customize with whatever vegetables you have on hand - bell peppers, snap peas, and
                mushrooms all work great.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
