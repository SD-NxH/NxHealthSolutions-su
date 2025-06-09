"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Droplets, Shield, Heart, Leaf, Apple } from "lucide-react"
import Link from "next/link"

export default function CucumberClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <div className="bg-white border-b border-green-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-green-600">
            <Link href="/resources" className="hover:text-green-700">
              Resources
            </Link>
            <span>→</span>
            <Link href="/resources/c" className="hover:text-green-700">
              Foods Starting with C
            </Link>
            <span>→</span>
            <span className="text-green-800 font-medium">Cucumber</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="bg-green-500 text-white mb-4 px-3 py-1">Hydrating Vegetable</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Cucumber</h1>
              <p className="text-xl text-green-100 max-w-2xl mx-auto">
                Nature's hydration hero, cucumber is a refreshing vegetable that provides essential nutrients while
                supporting skin health, weight management, and overall wellbeing with its high water content.
              </p>
            </div>

            {/* Featured Image */}
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-2xl mx-auto max-w-2xl">
              <img
                src="/fresh-cucumbers.jpg"
                alt="Fresh green cucumbers with glossy skin stacked together showing their vibrant color"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-green-100">
              <TabsTrigger value="overview" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="nutrition"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
              >
                Nutrition
              </TabsTrigger>
              <TabsTrigger value="benefits" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                Benefits
              </TabsTrigger>
              <TabsTrigger
                value="preparation"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
              >
                Preparation
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card className="border-green-200">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-green-800 mb-4">About Cucumber</h2>
                  <div className="prose prose-green max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      Cucumber (Cucumis sativus) is a cooling, hydrating vegetable that belongs to the gourd family.
                      Composed of about 96% water, it's nature's way of providing refreshment while delivering essential
                      nutrients. This crisp vegetable has been cultivated for over 3,000 years and is enjoyed worldwide
                      for its mild flavor and versatile uses.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Available in many varieties, from small pickling cucumbers to long English cucumbers, they're
                      perfect for salads, snacks, juices, and even skincare applications. Their high water content and
                      cooling properties make them especially valuable for hydration and skin health.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-green-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-green-800 mb-3">Key Characteristics</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <Droplets className="h-4 w-4 text-green-600" />
                        96% water content for maximum hydration
                      </li>
                      <li className="flex items-center gap-2">
                        <Leaf className="h-4 w-4 text-green-600" />
                        Very low in calories (16 per cup)
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-green-600" />
                        Natural source of silica for skin health
                      </li>
                      <li className="flex items-center gap-2">
                        <Heart className="h-4 w-4 text-green-600" />
                        Contains anti-inflammatory compounds
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-green-800 mb-3">Popular Varieties</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        <strong>English Cucumbers:</strong> Long, seedless, thin skin
                      </li>
                      <li>
                        <strong>Kirby Cucumbers:</strong> Small, bumpy, perfect for pickling
                      </li>
                      <li>
                        <strong>Persian Cucumbers:</strong> Mini, sweet, no bitter taste
                      </li>
                      <li>
                        <strong>Lemon Cucumbers:</strong> Round, yellow, mild flavor
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="nutrition" className="space-y-6">
              <Card className="border-green-200">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-green-800 mb-4">Nutritional Profile</h2>
                  <p className="text-gray-600 mb-6">Per 1 cup sliced (119g)</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-green-700 mb-3">Macronutrients</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Calories</span>
                          <span className="font-semibold">16</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Carbohydrates</span>
                          <span className="font-semibold">4g</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Fiber</span>
                          <span className="font-semibold">1g</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Protein</span>
                          <span className="font-semibold">0.7g</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Fat</span>
                          <span className="font-semibold">0.1g</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-green-700 mb-3">Key Vitamins & Minerals</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Vitamin K</span>
                          <span className="font-semibold">17% DV</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Vitamin C</span>
                          <span className="font-semibold">4% DV</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Potassium</span>
                          <span className="font-semibold">152mg</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Magnesium</span>
                          <span className="font-semibold">15mg</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Silica</span>
                          <span className="font-semibold">High content</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="benefits" className="space-y-6">
              <div className="grid gap-6">
                <Card className="border-green-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Droplets className="h-6 w-6 text-green-600" />
                      <h3 className="text-xl font-semibold text-green-800">Superior Hydration</h3>
                    </div>
                    <p className="text-gray-700">
                      With 96% water content, cucumber is one of the most hydrating foods available. It helps maintain
                      fluid balance, supports kidney function, and can contribute significantly to daily hydration
                      needs, especially during hot weather or after exercise.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-green-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="h-6 w-6 text-green-600" />
                      <h3 className="text-xl font-semibold text-green-800">Skin Health Support</h3>
                    </div>
                    <p className="text-gray-700">
                      Cucumber contains silica, which supports collagen production for healthy skin. Its cooling
                      properties and high water content help reduce puffiness and irritation. Used topically, cucumber
                      slices can soothe tired eyes and provide natural skin hydration.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-green-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Heart className="h-6 w-6 text-green-600" />
                      <h3 className="text-xl font-semibold text-green-800">Weight Management</h3>
                    </div>
                    <p className="text-gray-700">
                      Extremely low in calories but high in water and fiber, cucumber helps create satiety without
                      adding significant calories. It's perfect for healthy snacking and can help reduce overall caloric
                      intake while maintaining hydration and nutrients.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="preparation" className="space-y-6">
              <Card className="border-green-200">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-green-800 mb-4">How to Prepare Cucumber</h2>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-green-700 mb-3">Preparation Tips</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Wash thoroughly under cold running water</li>
                        <li>• Peel if desired (skin is edible and nutritious)</li>
                        <li>• Remove seeds if using for salads (optional)</li>
                        <li>• Slice, dice, or spiralize as needed</li>
                        <li>• Salt and drain if reducing water content</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-green-700 mb-3">Storage Tips</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Store in refrigerator for up to 1 week</li>
                        <li>• Keep in crisper drawer for best quality</li>
                        <li>• Wrap cut cucumbers in plastic wrap</li>
                        <li>• Don't store with tomatoes (they spoil faster)</li>
                        <li>• Freeze is not recommended (texture changes)</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-green-700 mb-3">Popular Uses</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Raw Applications</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Fresh salads and slaws</li>
                        <li>• Cucumber water and smoothies</li>
                        <li>• Healthy snacking with hummus</li>
                        <li>• Gazpacho and cold soups</li>
                        <li>• Cucumber sandwiches</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Other Uses</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Pickled cucumbers and relishes</li>
                        <li>• Face masks and skincare</li>
                        <li>• Infused waters and detox drinks</li>
                        <li>• Garnishes and decorative cuts</li>
                        <li>• Cucumber ice cubes</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Related Vegetables Section */}
          <Card className="mt-8 border-green-200">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Related Hydrating Vegetables</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Link href="/resources/foods/celery" className="group">
                  <div className="bg-green-50 p-4 rounded-lg hover:bg-green-100 transition-colors">
                    <Apple className="h-8 w-8 text-green-600 mb-2" />
                    <h3 className="font-semibold text-green-800 group-hover:text-green-900">Celery</h3>
                    <p className="text-sm text-gray-600">Crunchy, hydrating, and low-calorie</p>
                  </div>
                </Link>
                <Link href="/resources/foods/lettuce" className="group">
                  <div className="bg-green-50 p-4 rounded-lg hover:bg-green-100 transition-colors">
                    <Leaf className="h-8 w-8 text-green-600 mb-2" />
                    <h3 className="font-semibold text-green-800 group-hover:text-green-900">Lettuce</h3>
                    <p className="text-sm text-gray-600">High water content and fresh flavor</p>
                  </div>
                </Link>
                <Link href="/resources/foods/zucchini" className="group">
                  <div className="bg-green-50 p-4 rounded-lg hover:bg-green-100 transition-colors">
                    <Apple className="h-8 w-8 text-green-600 mb-2" />
                    <h3 className="font-semibold text-green-800 group-hover:text-green-900">Zucchini</h3>
                    <p className="text-sm text-gray-600">Versatile summer squash</p>
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
