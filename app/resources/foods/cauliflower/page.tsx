import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Heart, Brain, Shield, Apple, Clock, ChefHat } from "lucide-react"

export const metadata: Metadata = {
  title: "Cauliflower - Nutritional Information & Health Benefits | NxHealth",
  description:
    "Discover the incredible health benefits of cauliflower, including its nutritional profile, cooking tips, and delicious recipe ideas for optimal wellness.",
  keywords: "cauliflower, nutrition, health benefits, vegetables, cruciferous, vitamin C, fiber, antioxidants",
}

export default function CauliflowerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-100 to-emerald-100">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-200 text-green-800 hover:bg-green-300">
                <Leaf className="w-4 h-4 mr-1" />
                Cruciferous Vegetable
              </Badge>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-green-900 mb-6">Cauliflower</h1>
              <p className="text-xl text-green-700 mb-8 leading-relaxed">
                The versatile white powerhouse packed with nutrients, fiber, and incredible health benefits. A
                cruciferous champion for your wellness journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  <ChefHat className="w-4 h-4 mr-2" />
                  View Recipes
                </Button>
                <Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
                  <Apple className="w-4 h-4 mr-2" />
                  Nutrition Facts
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/vibrant-cauliflower.png"
                  alt="Fresh white cauliflower head with green leaves"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-full p-4 shadow-lg">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
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
                src="/vibrant-cauliflower.png"
                alt="Close-up of fresh cauliflower florets"
                fill
                className="object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-serif font-bold text-green-900 mb-6">The Nutritional Powerhouse</h2>
              <p className="text-green-800 leading-relaxed mb-6">
                Cauliflower is a remarkable cruciferous vegetable that has gained popularity as a versatile,
                nutrient-dense food. This white flowering vegetable is not only low in calories but also packed with
                essential vitamins, minerals, and powerful plant compounds that support optimal health.
              </p>

              <p className="text-green-800 leading-relaxed mb-8">
                What makes cauliflower truly special is its incredible versatility - it can be transformed into rice,
                mashed like potatoes, roasted to perfection, or enjoyed raw in salads. This adaptability makes it an
                excellent choice for those looking to increase their vegetable intake while maintaining delicious,
                satisfying meals.
              </p>
            </div>

            {/* Nutritional Information */}
            <Card className="mb-12 border-green-200 bg-green-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold text-green-900 mb-6 flex items-center">
                  <Apple className="w-6 h-6 mr-3 text-green-600" />
                  Nutritional Profile (per 100g)
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-700">25</div>
                    <div className="text-sm text-green-600">Calories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-700">2g</div>
                    <div className="text-sm text-green-600">Fiber</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-700">48mg</div>
                    <div className="text-sm text-green-600">Vitamin C</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-700">16mcg</div>
                    <div className="text-sm text-green-600">Folate</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Health Benefits */}
            <div className="mb-12">
              <h3 className="text-3xl font-serif font-bold text-green-900 mb-8">Health Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-green-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <Heart className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900 mb-2">Heart Health</h4>
                        <p className="text-green-700 text-sm">
                          Rich in fiber and antioxidants that support cardiovascular health and help maintain healthy
                          cholesterol levels.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <Brain className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900 mb-2">Brain Function</h4>
                        <p className="text-green-700 text-sm">
                          Contains choline and vitamin K, essential nutrients for brain health and cognitive function.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <Shield className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900 mb-2">Immune Support</h4>
                        <p className="text-green-700 text-sm">
                          High in vitamin C and antioxidants that strengthen the immune system and fight inflammation.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <Leaf className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900 mb-2">Detoxification</h4>
                        <p className="text-green-700 text-sm">
                          Contains glucosinolates that support the body's natural detoxification processes.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* How to Incorporate */}
            <div className="mb-12">
              <h3 className="text-3xl font-serif font-bold text-green-900 mb-6">
                How to Incorporate Cauliflower in Your Diet
              </h3>
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <ul className="space-y-3 text-green-800">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      <strong>Cauliflower Rice:</strong> Pulse florets in a food processor for a low-carb rice
                      alternative
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      <strong>Roasted:</strong> Toss with olive oil and spices, roast until golden and caramelized
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      <strong>Mashed:</strong> Steam and mash as a lighter alternative to mashed potatoes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      <strong>Raw:</strong> Add to salads or serve with hummus as a crunchy snack
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      <strong>Soups:</strong> Blend into creamy soups for added nutrition and texture
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Recipe Spotlight */}
            <Card className="mb-12 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold text-green-900 mb-4 flex items-center">
                  <ChefHat className="w-6 h-6 mr-3 text-green-600" />
                  Recipe Spotlight: Garlic Roasted Cauliflower
                </h3>
                <p className="text-green-800 mb-4">
                  A simple yet delicious way to enjoy cauliflower that brings out its natural nutty flavor.
                </p>
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-2">Ingredients:</h4>
                  <ul className="text-sm text-green-700 space-y-1 mb-4">
                    <li>• 1 large head cauliflower, cut into florets</li>
                    <li>• 3 tbsp olive oil</li>
                    <li>• 3 cloves garlic, minced</li>
                    <li>• Salt and pepper to taste</li>
                    <li>• Fresh parsley for garnish</li>
                  </ul>
                  <p className="text-sm text-green-700">
                    <strong>Instructions:</strong> Preheat oven to 425°F. Toss cauliflower with oil, garlic, salt, and
                    pepper. Roast for 25-30 minutes until golden and caramelized. Garnish with parsley.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Selection and Storage Tips */}
            <div className="mb-12">
              <h3 className="text-3xl font-serif font-bold text-green-900 mb-6">Selection and Storage Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-green-200">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                      <Apple className="w-5 h-5 mr-2 text-green-600" />
                      How to Select
                    </h4>
                    <ul className="text-green-700 text-sm space-y-2">
                      <li>• Choose heads with tight, compact florets</li>
                      <li>• Look for creamy white color without dark spots</li>
                      <li>• Leaves should be fresh and green</li>
                      <li>• Should feel heavy for its size</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-green-600" />
                      Storage Tips
                    </h4>
                    <ul className="text-green-700 text-sm space-y-2">
                      <li>• Store in refrigerator for up to 1 week</li>
                      <li>• Keep in perforated plastic bag</li>
                      <li>• Don't wash until ready to use</li>
                      <li>• Can be frozen after blanching</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Related Foods */}
            <div className="mb-12">
              <h3 className="text-3xl font-serif font-bold text-green-900 mb-6">Related Cruciferous Vegetables</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link href="/resources/foods/broccoli" className="group">
                  <Card className="border-green-200 hover:shadow-lg transition-all group-hover:border-green-300">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl mb-2">🥦</div>
                      <div className="font-medium text-green-900 group-hover:text-green-700">Broccoli</div>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/resources/foods/brussels-sprouts" className="group">
                  <Card className="border-green-200 hover:shadow-lg transition-all group-hover:border-green-300">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl mb-2">🥬</div>
                      <div className="font-medium text-green-900 group-hover:text-green-700">Brussels Sprouts</div>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/resources/foods/cabbage" className="group">
                  <Card className="border-green-200 hover:shadow-lg transition-all group-hover:border-green-300">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl mb-2">🥬</div>
                      <div className="font-medium text-green-900 group-hover:text-green-700">Cabbage</div>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/resources/foods/kale" className="group">
                  <Card className="border-green-200 hover:shadow-lg transition-all group-hover:border-green-300">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl mb-2">🥬</div>
                      <div className="font-medium text-green-900 group-hover:text-green-700">Kale</div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>

            {/* Call to Action */}
            <Card className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-serif font-bold mb-4">Ready to Transform Your Health?</h3>
                <p className="mb-6 opacity-90">
                  Discover more nutrient-dense foods and personalized nutrition guidance with our comprehensive wellness
                  programs.
                </p>
                <Button className="bg-white text-green-600 hover:bg-green-50">Explore Our Services</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
