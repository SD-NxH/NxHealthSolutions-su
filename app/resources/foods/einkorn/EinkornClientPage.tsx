"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Leaf, Heart, Brain, Shield, Info, AlertCircle, ChefHat } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function EinkornClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-700 to-amber-800 text-white py-16">
        <div className="container mx-auto px-4">
          <Link
            href="/resources/e"
            className="inline-flex items-center text-amber-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to E Foods
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            <div>
              <Badge className="bg-amber-100 text-amber-800 mb-4">Ancient Grain</Badge>
              <h1 className="text-4xl md:text-5xl font-serif font-light mb-4">Einkorn</h1>
              <p className="text-xl text-amber-100 mb-6">
                One of the world's most ancient cultivated wheat varieties, offering superior nutrition and easier
                digestibility than modern wheat.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="bg-amber-800/20 text-amber-100 border-amber-100/30">
                  High in Protein
                </Badge>
                <Badge variant="outline" className="bg-amber-800/20 text-amber-100 border-amber-100/30">
                  Rich in Antioxidants
                </Badge>
                <Badge variant="outline" className="bg-amber-800/20 text-amber-100 border-amber-100/30">
                  Contains Lutein
                </Badge>
                <Badge variant="outline" className="bg-amber-800/20 text-amber-100 border-amber-100/30">
                  Lower Gluten Content
                </Badge>
              </div>
            </div>
            <div className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Fresh einkorn grain"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Nutritional Highlights */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-serif font-light text-amber-800 mb-8">Nutritional Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-amber-50 border-amber-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-amber-800 text-lg">Protein</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Contains 30% more protein than modern wheat varieties, making it an excellent plant-based protein
                  source.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-amber-50 border-amber-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-amber-800 text-lg">Minerals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Higher in minerals like zinc, iron, phosphorus, and potassium compared to modern wheat.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-amber-50 border-amber-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-amber-800 text-lg">Antioxidants</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Rich in lutein and other antioxidants that support eye health and reduce inflammation.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-amber-50 border-amber-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-amber-800 text-lg">Gluten Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Contains a simpler gluten structure that may be easier to digest for some people with mild gluten
                  sensitivities.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Health Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-serif font-light text-amber-800 mb-8">Health Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-amber-100 hover:shadow-md transition-shadow">
              <div className="p-1 bg-gradient-to-r from-amber-600 to-amber-700 rounded-t-lg" />
              <CardHeader>
                <div className="bg-amber-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-amber-700" />
                </div>
                <CardTitle className="text-xl text-amber-800">Heart Health</CardTitle>
                <CardDescription>Supports cardiovascular wellness</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  The higher antioxidant content and beneficial fatty acid profile may help support heart health and
                  reduce inflammation markers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-100 hover:shadow-md transition-shadow">
              <div className="p-1 bg-gradient-to-r from-amber-600 to-amber-700 rounded-t-lg" />
              <CardHeader>
                <div className="bg-amber-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-amber-700" />
                </div>
                <CardTitle className="text-xl text-amber-800">Digestive Comfort</CardTitle>
                <CardDescription>Easier to digest than modern wheat</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Many people who experience discomfort with modern wheat report better tolerance with einkorn due to
                  its simpler gluten structure.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-100 hover:shadow-md transition-shadow">
              <div className="p-1 bg-gradient-to-r from-amber-600 to-amber-700 rounded-t-lg" />
              <CardHeader>
                <div className="bg-amber-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-amber-700" />
                </div>
                <CardTitle className="text-xl text-amber-800">Antioxidant Protection</CardTitle>
                <CardDescription>Rich in protective compounds</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Contains lutein, which supports eye health, and other antioxidants that help protect cells from
                  oxidative damage.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-100 hover:shadow-md transition-shadow">
              <div className="p-1 bg-gradient-to-r from-amber-600 to-amber-700 rounded-t-lg" />
              <CardHeader>
                <div className="bg-amber-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-amber-700" />
                </div>
                <CardTitle className="text-xl text-amber-800">Nutrient Density</CardTitle>
                <CardDescription>More nutrients per calorie</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Higher in essential nutrients compared to modern wheat varieties, providing better nutritional value
                  per serving.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-100 hover:shadow-md transition-shadow">
              <div className="p-1 bg-gradient-to-r from-amber-600 to-amber-700 rounded-t-lg" />
              <CardHeader>
                <div className="bg-amber-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <ChefHat className="h-6 w-6 text-amber-700" />
                </div>
                <CardTitle className="text-xl text-amber-800">Culinary Versatility</CardTitle>
                <CardDescription>Unique nutty flavor profile</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Offers a delicious nutty flavor that enhances baked goods, pasta, and grain dishes while providing
                  superior nutrition.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-100 hover:shadow-md transition-shadow">
              <div className="p-1 bg-gradient-to-r from-amber-600 to-amber-700 rounded-t-lg" />
              <CardHeader>
                <div className="bg-amber-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Info className="h-6 w-6 text-amber-700" />
                </div>
                <CardTitle className="text-xl text-amber-800">Sustainable Choice</CardTitle>
                <CardDescription>Environmentally friendly crop</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Requires fewer inputs like fertilizers and pesticides, making it a more environmentally sustainable
                  grain option.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Usage Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-serif font-light text-amber-800 mb-8">How to Use Einkorn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
              <h3 className="text-xl font-medium text-amber-800 mb-4">Culinary Uses</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-700 mr-2">•</span>
                  <span>
                    <strong>Baking:</strong> Use einkorn flour for bread, muffins, cookies, and cakes (note: requires
                    less liquid than modern wheat flour)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 mr-2">•</span>
                  <span>
                    <strong>Whole Berries:</strong> Cook like rice or other grains for grain bowls, salads, and side
                    dishes
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 mr-2">•</span>
                  <span>
                    <strong>Pasta:</strong> Look for einkorn pasta for a nutritious alternative to regular pasta
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 mr-2">•</span>
                  <span>
                    <strong>Breakfast:</strong> Make porridge or overnight oats using cracked einkorn berries
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
              <h3 className="text-xl font-medium text-amber-800 mb-4">Preparation Tips</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-700 mr-2">•</span>
                  <span>
                    <strong>Soaking:</strong> Soak whole einkorn berries for 8-12 hours before cooking to reduce cooking
                    time
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 mr-2">•</span>
                  <span>
                    <strong>Cooking Ratio:</strong> Use 2 cups water to 1 cup einkorn berries; simmer for 30-40 minutes
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 mr-2">•</span>
                  <span>
                    <strong>Baking Adjustment:</strong> When substituting einkorn flour for modern wheat, use 20-25%
                    less liquid
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 mr-2">•</span>
                  <span>
                    <strong>Storage:</strong> Store einkorn flour in the refrigerator or freezer to preserve freshness
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Safety Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <div className="flex items-start">
              <div className="mr-4">
                <AlertCircle className="h-6 w-6 text-amber-700" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-amber-800 mb-2">Important Notes</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • While einkorn contains less gluten and a simpler gluten structure than modern wheat, it is{" "}
                    <strong>not suitable for those with celiac disease</strong> or severe gluten allergies.
                  </li>
                  <li>
                    • Some people with mild wheat sensitivities may tolerate einkorn better than modern wheat, but
                    individual responses vary.
                  </li>
                  <li>
                    • When first incorporating einkorn into your diet, start with small amounts to see how your body
                    responds.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Recipe Ideas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-serif font-light text-amber-800 mb-8">Simple Einkorn Recipe Ideas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-amber-100 overflow-hidden">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=200&width=400" alt="Einkorn bread" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-amber-800">Rustic Einkorn Bread</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p>
                  A simple artisan bread made with 100% einkorn flour, water, salt, and yeast. The nutty flavor of
                  einkorn creates a delicious loaf with excellent texture.
                </p>
              </CardContent>
            </Card>
            <Card className="border-amber-100 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Einkorn berry salad"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-amber-800">Mediterranean Einkorn Salad</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p>
                  Cooked einkorn berries tossed with cucumber, tomatoes, red onion, feta cheese, olives, and herbs with
                  a lemon-olive oil dressing.
                </p>
              </CardContent>
            </Card>
            <Card className="border-amber-100 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Einkorn pancakes"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-amber-800">Fluffy Einkorn Pancakes</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p>
                  Light and fluffy pancakes made with einkorn flour, eggs, milk, and a touch of honey. Serve with fresh
                  berries and pure maple syrup.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Where to Find */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-serif font-light text-amber-800 mb-6">Where to Find Einkorn</h2>
          <p className="text-gray-700 mb-6">
            Einkorn can be found as whole berries, flour, pasta, and other products in:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 text-center">
              <p className="font-medium text-amber-800">Health Food Stores</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 text-center">
              <p className="font-medium text-amber-800">Specialty Grocery Stores</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 text-center">
              <p className="font-medium text-amber-800">Online Retailers</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 text-center">
              <p className="font-medium text-amber-800">Farmers Markets</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-xl p-8 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-serif font-light mb-4">Explore More Ancient Grains</h2>
              <p className="mb-6">
                Discover other nutritious ancient grains like emmer, spelt, and kamut to diversify your diet and enjoy
                their unique flavors and health benefits.
              </p>
              <Link
                href="/resources/e"
                className="inline-flex items-center bg-white text-amber-700 hover:bg-amber-50 px-6 py-3 rounded-full transition-colors"
              >
                Back to E Foods
                <ArrowLeft className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
