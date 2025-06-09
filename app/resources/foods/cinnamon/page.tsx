import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Heart, Brain, Shield, Zap, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Cinnamon - Health Benefits & Nutrition | NxHealth",
  description:
    "Discover the incredible health benefits of cinnamon, from blood sugar regulation to antioxidant properties. Learn about nutrition facts and culinary uses.",
}

export default function CinnamonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-r from-amber-900 via-orange-800 to-red-900 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 px-8 py-16 text-center">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-amber-100">
              <Leaf className="h-12 w-12 text-amber-900" />
            </div>
            <h1 className="mb-4 text-5xl font-bold">Cinnamon</h1>
            <p className="mx-auto max-w-2xl text-xl text-amber-100">
              The aromatic spice that's been treasured for thousands of years for its incredible flavor and powerful
              health benefits
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Badge className="bg-amber-200 text-amber-900 hover:bg-amber-300">Antioxidant Rich</Badge>
              <Badge className="bg-orange-200 text-orange-900 hover:bg-orange-300">Anti-inflammatory</Badge>
              <Badge className="bg-red-200 text-red-900 hover:bg-red-300">Blood Sugar Support</Badge>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 overflow-hidden rounded-xl max-h-96">
          <Image
            src="/cinnamon-sticks.jpeg"
            alt="Fresh cinnamon sticks"
            width={1200}
            height={400}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Quick Facts */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-amber-900">
                <Star className="h-5 w-5" />
                Origin
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-amber-800">Native to Sri Lanka and Southern India</p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-orange-900">
                <Zap className="h-5 w-5" />
                Active Compound
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-800">Cinnamaldehyde - responsible for flavor and benefits</p>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-red-900">
                <Heart className="h-5 w-5" />
                Best Type
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-800">Ceylon cinnamon (true cinnamon)</p>
            </CardContent>
          </Card>
        </div>

        {/* Health Benefits */}
        <Card className="mb-12 border-amber-300 bg-gradient-to-r from-amber-50 to-orange-50">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-900">Health Benefits</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-red-900">Blood Sugar Regulation</h3>
                  <p className="text-red-800">Helps improve insulin sensitivity and lower blood glucose levels</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-orange-900">Antioxidant Power</h3>
                  <p className="text-orange-800">Rich in polyphenols that fight oxidative stress and inflammation</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                  <Brain className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900">Brain Health</h3>
                  <p className="text-amber-800">
                    May support cognitive function and protect against neurodegenerative diseases
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-red-900">Heart Health</h3>
                  <p className="text-red-800">May help reduce cholesterol and support cardiovascular health</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Nutrition Facts */}
        <Card className="mb-12 border-orange-300 bg-gradient-to-r from-orange-50 to-red-50">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-900">Nutrition Facts (1 teaspoon ground cinnamon)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-900">6</div>
                <div className="text-sm text-orange-700">Calories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-900">2g</div>
                <div className="text-sm text-red-700">Carbohydrates</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-900">1.4g</div>
                <div className="text-sm text-amber-700">Fiber</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-900">26mg</div>
                <div className="text-sm text-orange-700">Calcium</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Culinary Uses */}
        <Card className="mb-12 border-red-300 bg-gradient-to-r from-red-50 to-amber-50">
          <CardHeader>
            <CardTitle className="text-2xl text-red-900">Culinary Uses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 font-semibold text-red-900">Sweet Applications</h3>
                <ul className="space-y-2 text-red-800">
                  <li>• Baked goods and desserts</li>
                  <li>• Oatmeal and breakfast cereals</li>
                  <li>• Smoothies and beverages</li>
                  <li>• Apple dishes and fruit salads</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 font-semibold text-amber-900">Savory Applications</h3>
                <ul className="space-y-2 text-amber-800">
                  <li>• Middle Eastern and Indian cuisine</li>
                  <li>• Meat rubs and marinades</li>
                  <li>• Rice and grain dishes</li>
                  <li>• Warm spice blends</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Storage Tips */}
        <Card className="border-amber-300 bg-gradient-to-r from-amber-50 to-orange-50">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-900">Storage & Selection Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 font-semibold text-amber-900">Selection</h3>
                <ul className="space-y-2 text-amber-800">
                  <li>• Choose Ceylon cinnamon when possible</li>
                  <li>• Look for fresh, aromatic smell</li>
                  <li>• Avoid sticks that are too thick or brittle</li>
                  <li>• Buy from reputable spice vendors</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 font-semibold text-orange-900">Storage</h3>
                <ul className="space-y-2 text-orange-800">
                  <li>• Store in airtight containers</li>
                  <li>• Keep in cool, dark places</li>
                  <li>• Ground cinnamon lasts 2-3 years</li>
                  <li>• Whole sticks last 3-4 years</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
