import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ChefHat, Heart, Leaf, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Chickpeas - Complete Nutrition Guide | NxHealth",
  description:
    "Discover the incredible nutritional benefits of chickpeas. Learn about protein content, fiber, vitamins, minerals, and delicious ways to incorporate chickpeas into your healthy diet.",
  keywords: [
    "chickpeas",
    "garbanzo beans",
    "legumes",
    "protein",
    "fiber",
    "nutrition",
    "healthy eating",
    "plant-based protein",
  ],
}

export default function ChickpeasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      {/* Navigation */}
      <nav className="border-b border-amber-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container px-4 md:px-6 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild className="text-amber-700 hover:text-amber-900">
              <Link href="/resources/c">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to C Foods
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-amber-100 to-yellow-100">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-amber-900 mb-6">Chickpeas</h1>
            <p className="text-xl text-amber-800 mb-8 leading-relaxed">
              The golden powerhouse of plant-based nutrition, packed with protein, fiber, and essential nutrients for
              optimal health.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-amber-700">
              <span className="flex items-center gap-2 bg-white/70 px-3 py-1 rounded-full">
                <Heart className="w-4 h-4" />
                Heart Healthy
              </span>
              <span className="flex items-center gap-2 bg-white/70 px-3 py-1 rounded-full">
                <Leaf className="w-4 h-4" />
                Plant-Based Protein
              </span>
              <span className="flex items-center gap-2 bg-white/70 px-3 py-1 rounded-full">
                <ShoppingCart className="w-4 h-4" />
                Budget Friendly
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src="/fresh-chickpeas-bowl.jpeg"
                alt="Fresh golden chickpeas in a white ceramic bowl"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Nutritional Information */}
            <Card className="mb-8 border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-900 flex items-center">
                  <Leaf className="w-6 h-6 mr-3 text-amber-600" />
                  Nutritional Profile (1 cup cooked, 164g)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-3">Macronutrients</h4>
                    <ul className="space-y-2 text-amber-700">
                      <li>
                        <strong>Calories:</strong> 269
                      </li>
                      <li>
                        <strong>Protein:</strong> 14.5g (29% DV)
                      </li>
                      <li>
                        <strong>Carbohydrates:</strong> 45g
                      </li>
                      <li>
                        <strong>Fiber:</strong> 12.5g (50% DV)
                      </li>
                      <li>
                        <strong>Fat:</strong> 4.3g
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-3">Key Vitamins & Minerals</h4>
                    <ul className="space-y-2 text-amber-700">
                      <li>
                        <strong>Folate:</strong> 282mcg (71% DV)
                      </li>
                      <li>
                        <strong>Iron:</strong> 4.7mg (26% DV)
                      </li>
                      <li>
                        <strong>Phosphorus:</strong> 276mg (22% DV)
                      </li>
                      <li>
                        <strong>Potassium:</strong> 477mg (10% DV)
                      </li>
                      <li>
                        <strong>Zinc:</strong> 2.5mg (23% DV)
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Health Benefits */}
            <Card className="mb-8 border-amber-200">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-900 flex items-center">
                  <Heart className="w-6 h-6 mr-3 text-amber-600" />
                  Health Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-amber-800">
                <div>
                  <h4 className="font-semibold mb-2">Heart Health Support</h4>
                  <p>
                    Rich in soluble fiber and potassium, chickpeas help lower cholesterol levels and support healthy
                    blood pressure regulation.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Blood Sugar Management</h4>
                  <p>
                    The high fiber and protein content helps stabilize blood sugar levels and provides sustained energy
                    release.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Digestive Health</h4>
                  <p>
                    Excellent source of dietary fiber promotes healthy gut bacteria and supports digestive regularity.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Plant-Based Protein Power</h4>
                  <p>
                    Complete protein source when combined with grains, making them ideal for vegetarian and vegan diets.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* How to Use */}
            <Card className="mb-8 border-amber-200">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-900">How to Incorporate Chickpeas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 text-amber-800">
                  <div>
                    <h4 className="font-semibold mb-3">Cooking Methods</h4>
                    <ul className="space-y-2">
                      <li>• Hummus and dips</li>
                      <li>• Roasted chickpea snacks</li>
                      <li>• Curry and stew additions</li>
                      <li>• Salad toppings</li>
                      <li>• Chickpea flour for baking</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Preparation Tips</h4>
                    <ul className="space-y-2">
                      <li>• Soak dried chickpeas 8-12 hours</li>
                      <li>• Cook for 1-2 hours until tender</li>
                      <li>• Save aquafaba (chickpea liquid)</li>
                      <li>• Season roasted chickpeas while warm</li>
                      <li>• Store cooked chickpeas refrigerated</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recipe Spotlight */}
            <Card className="mb-12 border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold text-amber-900 mb-4 flex items-center">
                  <ChefHat className="w-6 h-6 mr-3 text-amber-600" />
                  Recipe Spotlight: Classic Hummus
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-3">Ingredients:</h4>
                    <ul className="space-y-1 text-amber-700">
                      <li>• 2 cups cooked chickpeas</li>
                      <li>• 1/4 cup fresh lemon juice</li>
                      <li>• 1/4 cup tahini</li>
                      <li>• 1 garlic clove, minced</li>
                      <li>• 2 tbsp olive oil</li>
                      <li>• 1/2 tsp cumin</li>
                      <li>• Salt to taste</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-3">Instructions:</h4>
                    <ol className="space-y-1 text-amber-700 list-decimal list-inside">
                      <li>Blend all ingredients in food processor</li>
                      <li>Add ice water gradually for consistency</li>
                      <li>Process until smooth and creamy</li>
                      <li>Taste and adjust seasonings</li>
                      <li>Drizzle with olive oil and paprika</li>
                      <li>Serve with vegetables or pita</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Selection and Storage */}
            <Card className="mb-8 border-amber-200">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-900">Selection & Storage</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-amber-800">
                <div>
                  <h4 className="font-semibold mb-2">Choosing Chickpeas</h4>
                  <p>
                    Look for plump, uniform dried chickpeas without cracks or discoloration. For canned, choose
                    low-sodium varieties and check for firm texture.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Storage Tips</h4>
                  <p>
                    Store dried chickpeas in airtight containers in a cool, dry place for up to 2 years. Cooked
                    chickpeas keep refrigerated for 3-4 days or frozen for 6 months.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Related Foods */}
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-900">Related Legumes & Proteins</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: "Black Beans", href: "/resources/foods/black-beans" },
                    { name: "Lentils", href: "/resources/foods/lentils" },
                    { name: "Kidney Beans", href: "/resources/foods/kidney-beans" },
                    { name: "Quinoa", href: "/resources/foods/quinoa" },
                  ].map((food) => (
                    <Link
                      key={food.name}
                      href={food.href}
                      className="text-center p-3 rounded-lg bg-amber-50 hover:bg-amber-100 transition-colors text-amber-800 hover:text-amber-900"
                    >
                      {food.name}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
