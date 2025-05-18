import Link from "next/link"
import { ArrowLeft, Clock, Users, ChefHat } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import ResponsiveImage from "@/components/responsive-image"

export default function PlantedFriedRicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[300px] md:h-[400px] w-full">
          <ResponsiveImage
            src="/colorful-vegetable-fried-rice.png"
            alt="Colorful Vegetable Fried Rice"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-serif font-light mb-4">Planted Fried Rice</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              A delicious and nutritious plant-based fried rice recipe packed with vegetables and plant protein
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/resources/articles" className="text-green-600 hover:text-green-700 flex items-center text-sm">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Articles
          </Link>
        </div>
      </div>

      {/* Recipe Content */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Recipe Info */}
          <div className="flex flex-wrap gap-6 justify-center mb-8">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-green-600 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Prep Time</p>
                <p className="font-medium">20 minutes</p>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-green-600 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Cook Time</p>
                <p className="font-medium">20 minutes</p>
              </div>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 text-green-600 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Servings</p>
                <p className="font-medium">4 servings</p>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Ingredients */}
          <div className="mb-10">
            <h2 className="text-2xl font-serif font-light text-gray-900 mb-4">Ingredients</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>
                  1 cup jasmine rice, or 1 ½ cups cooked quinoa, couscous, or orzo, or 4 cups cauliflower rice
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>1 tablespoon olive oil</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>1 cup diced tofu, patted dry</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>1 cup mixed vegetables (carrots, peas, corn), fresh or frozen</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>1 cup chopped broccolini</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>1/2 cup chopped pineapple</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>1/4 cup coconut aminos, plus more to taste</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>2 tablespoons teriyaki sauce, plus more to taste</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>1 cup Just Egg</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Optional garnishes: chopped green onions, sesame seeds, sriracha</span>
              </li>
            </ul>
          </div>

          {/* Equipment */}
          <div className="mb-10">
            <h2 className="text-2xl font-serif font-light text-gray-900 mb-4">Equipment</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Large skillet or wok</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Large bowl</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Measuring cups and spoons</span>
              </li>
            </ul>
          </div>

          {/* Instructions */}
          <div className="mb-10">
            <h2 className="text-2xl font-serif font-light text-gray-900 mb-4">Instructions</h2>
            <ol className="space-y-4 list-decimal pl-5">
              <li>
                <p className="font-medium">Prepare the base (Choose Your Base):</p>
                <ul className="mt-2 space-y-2 pl-5">
                  <li>For rice: Cook the jasmine rice according to package directions.</li>
                  <li>For quinoa: Cook the quinoa according to package directions.</li>
                  <li>For couscous: Cook the couscous according to package directions.</li>
                  <li>For orzo: Cook the orzo according to package directions.</li>
                  <li>For cauliflower rice: If using cauliflower rice, skip to step 2.</li>
                </ul>
              </li>
              <li>
                <p className="font-medium">Cook tofu:</p>
                <p>
                  Heat 1/2 tablespoon olive oil in the skillet over medium-high heat. Add the diced tofu and cook until
                  golden brown and slightly crispy, 5-7 minutes. Remove from the skillet and set aside.
                </p>
              </li>
              <li>
                <p className="font-medium">Sauté vegetables:</p>
                <p>
                  Add the remaining 1/2 tablespoon olive oil to the skillet. Add the mixed vegetables and broccolini and
                  cook until tender-crisp, 5-7 minutes.
                </p>
              </li>
              <li>
                <p className="font-medium">Cook Just Egg:</p>
                <p>
                  Push the vegetables to one side of the skillet and pour the Just Egg onto the other side. Scramble
                  until set, then mix with the vegetables.
                </p>
              </li>
              <li>
                <p className="font-medium">Combine ingredients:</p>
                <p>
                  Add the cooked rice (or alternative grain) and cooked tofu to the skillet with the vegetables and Just
                  Egg. Stir in the coconut aminos and teriyaki sauce. Mix well.
                </p>
              </li>
              <li>
                <p className="font-medium">Add pineapple:</p>
                <p>Stir in the chopped pineapple and cook for another 2-3 minutes, until heated through.</p>
              </li>
              <li>
                <p className="font-medium">Serve:</p>
                <p>
                  Taste and adjust seasonings as needed. Garnish with chopped green onions, sesame seeds, and sriracha,
                  if desired.
                </p>
              </li>
            </ol>
          </div>

          {/* Shopping List */}
          <div className="mb-10">
            <h2 className="text-2xl font-serif font-light text-gray-900 mb-4">Shopping List</h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Jasmine rice</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Quinoa</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Couscous</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Orzo</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Olive oil</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Tofu</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Mixed vegetables</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Broccolini</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Pineapple</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Coconut aminos</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Teriyaki sauce</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Just Egg</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Green onions (optional)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Sesame seeds (optional)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Sriracha (optional)</span>
              </li>
            </ul>
          </div>

          {/* Dietary Swaps */}
          <div className="mb-10">
            <h2 className="text-2xl font-serif font-light text-gray-900 mb-4">Dietary Swaps</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <div>
                  <span className="font-medium">Grain-free:</span> Use cauliflower rice instead of rice or other grains.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <div>
                  <span className="font-medium">Gluten-free:</span> Ensure the teriyaki sauce and coconut aminos are
                  gluten-free.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <div>
                  <span className="font-medium">Vegetarian/Vegan:</span> This recipe is already vegetarian and vegan.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <div>
                  <span className="font-medium">Lower Sodium:</span> Use low-sodium coconut aminos and teriyaki sauce,
                  or reduce the amount used and add other seasonings like ginger, garlic, and pepper.
                </div>
              </li>
            </ul>
          </div>

          {/* Chef's Tips */}
          <div className="bg-green-50 p-6 rounded-lg mb-10">
            <div className="flex items-center mb-4">
              <ChefHat className="h-6 w-6 text-green-600 mr-2" />
              <h2 className="text-xl font-serif font-medium text-gray-900">Chef's Tips</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>
                  For the best texture, make sure your rice or grain is completely cooled before adding it to the stir
                  fry.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>
                  Press your tofu for at least 30 minutes before cooking to remove excess moisture and achieve a
                  crispier texture.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>
                  This recipe is highly adaptable - feel free to use whatever vegetables you have on hand or need to use
                  up.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>
                  For extra flavor, add minced garlic, grated ginger, or red pepper flakes when sautéing the vegetables.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
