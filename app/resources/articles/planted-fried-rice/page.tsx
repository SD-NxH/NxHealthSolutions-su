import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ShoppingBag } from "lucide-react"

export default function PlantedFriedRicePage() {
  return (
    <div className="min-h-screen bg-muted">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] w-full">
        <Image
          src="/colorful-vegetable-fried-rice.png"
          alt="Planted Fried Rice"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-end">
          <div className="container mx-auto px-4 md:px-6 py-8">
            <h1 className="text-3xl md:text-5xl font-serif text-white mb-2">Planted Fried Rice</h1>
            <p className="text-white/90 text-lg">A delicious plant-based twist on a classic dish</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-foreground">Planted Fried Rice</h1>
        <p className="mb-4">A delicious and nutritious plant-based fried rice recipe.</p>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-foreground">Recipe Details</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>Prep time: 20 minutes</li>
            <li>Cook time: 20 minutes</li>
            <li>Servings: 4</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-foreground">Ingredients</h2>
          <ul className="list-disc pl-5">
            <li>1 cup jasmine rice (or alternative grain)</li>
            <li>1 tablespoon olive oil</li>
            <li>1 cup diced tofu, patted dry</li>
            <li>1 cup mixed vegetables (carrots, peas, corn)</li>
            <li>1 cup chopped broccolini</li>
            <li>1/2 cup chopped pineapple</li>
            <li>1/4 cup coconut aminos</li>
            <li>2 tablespoons teriyaki sauce</li>
            <li>1 cup Just Egg</li>
            <li>Optional garnishes: green onions, sesame seeds, sriracha</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-foreground">Instructions</h2>
          <ol className="list-decimal pl-5">
            <li className="mb-2">Cook rice according to package directions.</li>
            <li className="mb-2">Cook tofu in olive oil until crispy.</li>
            <li className="mb-2">Sauté vegetables until tender-crisp.</li>
            <li className="mb-2">Add Just Egg and scramble.</li>
            <li className="mb-2">Combine rice, tofu, vegetables, and sauces.</li>
            <li className="mb-2">Add pineapple and cook briefly.</li>
            <li className="mb-2">Garnish and serve.</li>
          </ol>
        </div>

        {/* Back Button */}
        <Link href="/resources/articles" className="inline-flex items-center text-brand mb-6 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Articles
        </Link>

        {/* Shopping List */}
        <div className="bg-background rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-serif font-medium text-foreground mb-4 flex items-center">
            <ShoppingBag className="h-5 w-5 text-brand mr-2" />
            Shopping List
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-muted-foreground">
              <li>Jasmine rice</li>
              <li>Quinoa</li>
              <li>Couscous</li>
              <li>Orzo</li>
              <li>Olive oil</li>
              <li>Tofu</li>
              <li>Mixed vegetables (carrots, peas, corn)</li>
              <li>Broccolini</li>
            </ul>
            <ul className="space-y-2 text-muted-foreground">
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
        <div className="bg-background rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-serif font-medium text-foreground mb-4">Dietary Swaps</h2>
          <ul className="space-y-2 text-muted-foreground">
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
              <strong>Lower Sodium:</strong> Use low-sodium coconut aminos and teriyaki sauce, or reduce the amount used
              and add other seasonings like ginger, garlic, and pepper.
            </li>
          </ul>
        </div>

        {/* Tips */}
        <div className="bg-brand-lighter rounded-lg p-6 mb-8">
          <h2 className="text-xl font-serif font-medium text-foreground mb-4">Chef's Tips</h2>
          <ul className="space-y-2 text-muted-foreground">
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
              Feel free to customize with whatever vegetables you have on hand - bell peppers, snap peas, and mushrooms
              all work great.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
