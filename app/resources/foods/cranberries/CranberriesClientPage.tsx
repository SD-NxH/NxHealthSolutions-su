"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ScrollProgress } from "@/components/scroll-progress"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Heart, Shield, Droplets, Brain } from "lucide-react"

export default function CranberriesClientPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-rose-50 to-pink-50">
      <ScrollProgress />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-red-100 text-red-800 border-red-200 hover:bg-red-200">Superfruit Powerhouse</Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-900 leading-tight">Cranberries</h1>
                <p className="text-xl text-red-700 leading-relaxed">
                  Nature's ruby gems packed with powerful antioxidants and proanthocyanidins. These tart berries are
                  renowned for supporting urinary tract health and providing exceptional immune system benefits for
                  overall wellness.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-red-100 to-rose-200">
                <img
                  src="/fresh-cranberries.jpg"
                  alt="Fresh red cranberries showing their vibrant color and glossy appearance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">46</div>
                  <div className="text-sm opacity-90">calories per cup</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 bg-red-100 border-red-200">
              <TabsTrigger value="overview" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                Overview
              </TabsTrigger>
              <TabsTrigger value="nutrition" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                Nutrition
              </TabsTrigger>
              <TabsTrigger value="benefits" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                Benefits
              </TabsTrigger>
              <TabsTrigger
                value="preparation"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white"
              >
                Uses
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card className="border-red-200 bg-white/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl">About Cranberries</CardTitle>
                  <CardDescription className="text-red-100">Nature's antioxidant powerhouse</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <p className="text-red-800 leading-relaxed">
                    Cranberries are small, tart berries that grow on low-running vines in acidic bogs and marshes.
                    Native to North America, these ruby-red fruits have been valued for centuries for their medicinal
                    properties and unique flavor profile.
                  </p>
                  <p className="text-red-800 leading-relaxed">
                    Rich in proanthocyanidins (PACs), vitamin C, and various antioxidants, cranberries are particularly
                    famous for their ability to support urinary tract health and boost immune function. Their natural
                    compounds help prevent harmful bacteria from adhering to the urinary tract walls.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
                      <Shield className="h-8 w-8 text-red-600 mx-auto mb-2" />
                      <div className="font-semibold text-red-900">Immune Support</div>
                      <div className="text-sm text-red-700">High vitamin C content</div>
                    </div>
                    <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
                      <Droplets className="h-8 w-8 text-red-600 mx-auto mb-2" />
                      <div className="font-semibold text-red-900">Urinary Health</div>
                      <div className="text-sm text-red-700">Natural PACs</div>
                    </div>
                    <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
                      <Heart className="h-8 w-8 text-red-600 mx-auto mb-2" />
                      <div className="font-semibold text-red-900">Heart Health</div>
                      <div className="text-sm text-red-700">Antioxidant protection</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="nutrition" className="space-y-6">
              <Card className="border-red-200 bg-white/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl">Nutritional Profile</CardTitle>
                  <CardDescription className="text-red-100">Per 1 cup (100g) of fresh cranberries</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-red-900 text-lg border-b border-red-200 pb-2">
                        Macronutrients
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                          <span className="text-red-800">Calories</span>
                          <span className="font-semibold text-red-900">46</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                          <span className="text-red-800">Carbohydrates</span>
                          <span className="font-semibold text-red-900">12.2g</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                          <span className="text-red-800">Dietary Fiber</span>
                          <span className="font-semibold text-red-900">4.6g</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                          <span className="text-red-800">Natural Sugars</span>
                          <span className="font-semibold text-red-900">4.0g</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                          <span className="text-red-800">Protein</span>
                          <span className="font-semibold text-red-900">0.4g</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-semibold text-red-900 text-lg border-b border-red-200 pb-2">
                        Key Vitamins & Minerals
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                          <span className="text-red-800">Vitamin C</span>
                          <span className="font-semibold text-red-900">13.3mg (15% DV)</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                          <span className="text-red-800">Vitamin E</span>
                          <span className="font-semibold text-red-900">1.2mg (8% DV)</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                          <span className="text-red-800">Manganese</span>
                          <span className="font-semibold text-red-900">0.4mg (17% DV)</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                          <span className="text-red-800">Vitamin K</span>
                          <span className="font-semibold text-red-900">5.1mcg (4% DV)</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                          <span className="text-red-800">Proanthocyanidins</span>
                          <span className="font-semibold text-red-900">418mg</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="benefits" className="space-y-6">
              <div className="grid gap-6">
                <Card className="border-red-200 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-t-lg">
                    <CardTitle className="flex items-center gap-2">
                      <Droplets className="h-6 w-6" />
                      Urinary Tract Health
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-red-800 leading-relaxed">
                      Cranberries contain unique proanthocyanidins (PACs) that prevent harmful bacteria, particularly E.
                      coli, from adhering to the urinary tract walls. This anti-adhesion property helps reduce the risk
                      of urinary tract infections and supports overall urinary system health.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-t-lg">
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-6 w-6" />
                      Immune System Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-red-800 leading-relaxed">
                      Rich in vitamin C and powerful antioxidants, cranberries help strengthen the immune system and
                      protect cells from oxidative stress. The high concentration of flavonoids and phenolic compounds
                      provides additional immune-boosting benefits.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-t-lg">
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="h-6 w-6" />
                      Cardiovascular Health
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-red-800 leading-relaxed">
                      The antioxidants in cranberries help reduce inflammation and may improve heart health by
                      supporting healthy cholesterol levels and blood pressure. Regular consumption may contribute to
                      better cardiovascular function and reduced risk of heart disease.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-t-lg">
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="h-6 w-6" />
                      Cognitive Function
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-red-800 leading-relaxed">
                      Studies suggest that the flavonoids in cranberries may help improve memory and cognitive function.
                      The anti-inflammatory properties may also help protect brain cells from age-related decline and
                      support overall brain health.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="preparation" className="space-y-6">
              <Card className="border-red-200 bg-white/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl">Ways to Enjoy Cranberries</CardTitle>
                  <CardDescription className="text-red-100">
                    From fresh to dried, discover delicious options
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-red-900 text-lg">Fresh Cranberries</h3>
                      <ul className="space-y-2 text-red-800">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Add to smoothies for tartness and nutrition</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Bake into muffins, breads, and scones</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Make homemade cranberry sauce</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Toss into salads for color and flavor</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-semibold text-red-900 text-lg">Dried Cranberries</h3>
                      <ul className="space-y-2 text-red-800">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Mix into trail mix and granola</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Add to oatmeal and yogurt</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Include in stuffing and grain dishes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Enjoy as a healthy snack</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-900 mb-2">💡 Pro Tip</h4>
                    <p className="text-red-800 text-sm">
                      Fresh cranberries are quite tart on their own. Try pairing them with naturally sweet ingredients
                      like apples, oranges, or a touch of maple syrup to balance the flavor while maintaining their
                      health benefits.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Berries Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-100/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-red-900 mb-8 text-center">Other Antioxidant-Rich Berries</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-red-200 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🫐</span>
                </div>
                <h3 className="font-semibold text-red-900 mb-2">Blueberries</h3>
                <p className="text-red-700 text-sm">High in anthocyanins and vitamin K for brain and bone health</p>
              </CardContent>
            </Card>
            <Card className="border-red-200 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🍓</span>
                </div>
                <h3 className="font-semibold text-red-900 mb-2">Strawberries</h3>
                <p className="text-red-700 text-sm">Excellent source of vitamin C and folate for immune support</p>
              </CardContent>
            </Card>
            <Card className="border-red-200 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🍇</span>
                </div>
                <h3 className="font-semibold text-red-900 mb-2">Grapes</h3>
                <p className="text-red-700 text-sm">Rich in resveratrol and flavonoids for heart health</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
