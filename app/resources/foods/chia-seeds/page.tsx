import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Heart, Brain, Zap, ChefHat, ShoppingCart, Leaf } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Chia Seeds - Nutritional Information | NxHealth",
  description:
    "Discover the incredible nutritional benefits of chia seeds. Learn about their omega-3 fatty acids, fiber content, protein, and how to incorporate these superseeds into your daily diet.",
  keywords: "chia seeds, nutrition, omega-3, fiber, protein, superfoods, healthy eating, plant-based nutrition",
}

export default function ChiaSeedsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-100 to-slate-200 border-b border-gray-200">
        <div className="container px-4 md:px-6 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild className="text-gray-600 hover:text-gray-800">
              <Link href="/resources/c">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Foods
              </Link>
            </Button>
            <div className="h-6 w-px bg-gray-300" />
            <nav className="text-sm text-gray-500">
              <Link href="/resources" className="hover:text-gray-700">
                Resources
              </Link>
              <span className="mx-2">/</span>
              <Link href="/resources/foods" className="hover:text-gray-700">
                Foods
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-800 font-medium">Chia Seeds</span>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-gray-100 via-slate-100 to-gray-200">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Leaf className="w-4 h-4" />
              Superfood Seeds
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">Chia Seeds</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Tiny powerhouses packed with omega-3 fatty acids, fiber, and complete protein. These ancient seeds deliver
              exceptional nutrition in every spoonful.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">High in Omega-3</span>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">Complete Protein</span>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">Rich in Fiber</span>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">Antioxidant Rich</span>
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
                src="/chia-seed-bowl.png"
                alt="Bowl of chia seeds with various preparations"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Nutritional Profile */}
            <Card className="mb-12 border-gray-200 bg-gradient-to-r from-gray-50 to-slate-50">
              <CardContent className="p-8">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                  <Zap className="w-8 h-8 mr-3 text-gray-600" />
                  Nutritional Powerhouse
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Per 2 tablespoons (28g):</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex justify-between">
                        <span>Calories</span>
                        <span className="font-medium">138</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Protein</span>
                        <span className="font-medium">4.7g</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Fiber</span>
                        <span className="font-medium">9.8g</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Omega-3 ALA</span>
                        <span className="font-medium">5g</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Calcium</span>
                        <span className="font-medium">179mg</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Magnesium</span>
                        <span className="font-medium">95mg</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Nutrients:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • <strong>Complete Protein:</strong> Contains all 9 essential amino acids
                      </li>
                      <li>
                        • <strong>Omega-3 Fatty Acids:</strong> Plant-based ALA for heart health
                      </li>
                      <li>
                        • <strong>Soluble Fiber:</strong> Supports digestive health
                      </li>
                      <li>
                        • <strong>Antioxidants:</strong> Quercetin, kaempferol, chlorogenic acid
                      </li>
                      <li>
                        • <strong>Minerals:</strong> Calcium, phosphorus, magnesium, zinc
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Health Benefits */}
            <Card className="mb-12 border-gray-200">
              <CardContent className="p-8">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 flex items-center">
                  <Heart className="w-8 h-8 mr-3 text-gray-600" />
                  Health Benefits
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Heart className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Heart Health</h3>
                        <p className="text-gray-600">
                          Rich in omega-3 ALA fatty acids that support cardiovascular health and help reduce
                          inflammation.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Brain className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Brain Function</h3>
                        <p className="text-gray-600">
                          Omega-3s and antioxidants support cognitive function and may help protect against age-related
                          decline.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Zap className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Sustained Energy</h3>
                        <p className="text-gray-600">
                          High fiber and protein content provide steady energy release and help maintain stable blood
                          sugar.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <ShoppingCart className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Bone Health</h3>
                        <p className="text-gray-600">
                          Excellent source of calcium, phosphorus, and magnesium for strong bones and teeth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How to Use */}
            <Card className="mb-12 border-gray-200">
              <CardContent className="p-8">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">How to Incorporate Chia Seeds</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Easy Ways to Use:</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>
                          <strong>Chia Pudding:</strong> Mix with plant milk and let gel overnight
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>
                          <strong>Smoothie Boost:</strong> Add 1-2 tablespoons to any smoothie
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>
                          <strong>Egg Substitute:</strong> 1 tbsp + 3 tbsp water = 1 egg
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>
                          <strong>Sprinkle on Top:</strong> Add to yogurt, oatmeal, or salads
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>
                          <strong>Baking:</strong> Mix into muffins, bread, and energy bars
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Preparation Tips:</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Soak for 10-15 minutes to create gel-like texture</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Start with 1 tablespoon daily and increase gradually</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Drink plenty of water when consuming chia seeds</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Can be eaten raw or ground for better absorption</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recipe Spotlight */}
            <Card className="mb-12 border-gray-200 bg-gradient-to-r from-gray-50 to-slate-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center">
                  <ChefHat className="w-6 h-6 mr-3 text-gray-600" />
                  Recipe Spotlight: Vanilla Chia Pudding
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Ingredients:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• 3 tablespoons chia seeds</li>
                      <li>• 1 cup plant milk (almond, oat, or coconut)</li>
                      <li>• 1 tablespoon maple syrup</li>
                      <li>• 1/2 teaspoon vanilla extract</li>
                      <li>• Pinch of sea salt</li>
                      <li>• Fresh berries for topping</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Instructions:</h4>
                    <ol className="space-y-1 text-gray-700 text-sm">
                      <li>1. Whisk all ingredients except berries in a bowl</li>
                      <li>2. Let sit for 5 minutes, then whisk again</li>
                      <li>3. Refrigerate for at least 2 hours or overnight</li>
                      <li>4. Stir before serving and top with fresh berries</li>
                      <li>5. Enjoy as breakfast or healthy dessert</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Storage and Selection */}
            <Card className="mb-12 border-gray-200">
              <CardContent className="p-8">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Selection & Storage</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">How to Choose:</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Look for organic, non-GMO varieties when possible</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Seeds should be uniform in size and color</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Avoid packages with excessive dust or broken seeds</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Check expiration dates for freshness</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Storage Tips:</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Store in airtight container in cool, dry place</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Refrigeration extends shelf life up to 2 years</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Keep away from light and moisture</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Ground chia seeds should be used within 6 months</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Foods */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Related Superfoods</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Link href="/resources/foods/flax-seeds" className="group">
                    <div className="text-center p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                      <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                        <Leaf className="w-8 h-8 text-gray-600" />
                      </div>
                      <h3 className="font-medium text-gray-900 group-hover:text-gray-700">Flax Seeds</h3>
                    </div>
                  </Link>
                  <Link href="/resources/foods/hemp-seeds" className="group">
                    <div className="text-center p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                      <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                        <Leaf className="w-8 h-8 text-gray-600" />
                      </div>
                      <h3 className="font-medium text-gray-900 group-hover:text-gray-700">Hemp Seeds</h3>
                    </div>
                  </Link>
                  <Link href="/resources/foods/pumpkin-seeds" className="group">
                    <div className="text-center p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                      <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                        <Leaf className="w-8 h-8 text-gray-600" />
                      </div>
                      <h3 className="font-medium text-gray-900 group-hover:text-gray-700">Pumpkin Seeds</h3>
                    </div>
                  </Link>
                  <Link href="/resources/foods/sunflower-seeds" className="group">
                    <div className="text-center p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                      <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                        <Leaf className="w-8 h-8 text-gray-600" />
                      </div>
                      <h3 className="font-medium text-gray-900 group-hover:text-gray-700">Sunflower Seeds</h3>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
