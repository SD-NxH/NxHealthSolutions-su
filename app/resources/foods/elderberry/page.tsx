"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Shield, Heart, Zap, Leaf, Clock, Users, ChefHat, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ElderberryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <Link
            href="/resources/e"
            className="inline-flex items-center text-purple-100 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to E Foods
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <Badge className="bg-purple-500 text-white mb-4">Superfruit</Badge>
              <h1 className="text-5xl md:text-6xl font-serif font-light mb-6">Elderberry</h1>
              <p className="text-xl text-purple-100 leading-relaxed mb-8">
                Dark purple berries packed with powerful antioxidants and immune-boosting compounds. Nature's pharmacy
                in a tiny, potent package.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full">
                  <Shield className="h-5 w-5" />
                  <span>Immune Support</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full">
                  <Heart className="h-5 w-5" />
                  <span>Antioxidant Rich</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full">
                  <Zap className="h-5 w-5" />
                  <span>Anti-inflammatory</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/elderberry.jpg" alt="Fresh elderberries" fill className="object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Nutritional Information */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-serif font-light text-center mb-12 text-gray-900">Nutritional Powerhouse</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-purple-900">Immune Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Rich in vitamin C and anthocyanins that strengthen your immune system and help fight off infections
                  naturally.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <Heart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-purple-900">Heart Health</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Powerful antioxidants help reduce inflammation and support cardiovascular health by protecting blood
                  vessels.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-purple-900">Anti-inflammatory</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Natural compounds help reduce inflammation throughout the body, supporting overall wellness and
                  recovery.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Health Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-serif font-light text-center mb-12 text-gray-900">Health Benefits</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Immune System Boost</h3>
                  <p className="text-gray-600">
                    High levels of vitamin C and antioxidants help strengthen your body's natural defenses against
                    illness.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Cardiovascular Support</h3>
                  <p className="text-gray-600">
                    Anthocyanins help improve blood circulation and support healthy blood pressure levels.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Cold & Flu Relief</h3>
                  <p className="text-gray-600">
                    Traditional use and modern research support elderberry's effectiveness in reducing cold and flu
                    symptoms.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Antioxidant Protection</h3>
                  <p className="text-gray-600">
                    Rich in flavonoids that protect cells from oxidative stress and support healthy aging.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Faster Recovery</h3>
                  <p className="text-gray-600">
                    May help reduce the duration and severity of upper respiratory symptoms when taken early.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Family-Friendly</h3>
                  <p className="text-gray-600">
                    Safe and effective for adults and children, making it a great natural remedy for the whole family.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* How to Use */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-serif font-light text-center mb-12 text-gray-900">How to Enjoy Elderberry</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <ChefHat className="h-10 w-10 text-purple-600 mx-auto mb-3" />
                <CardTitle className="text-lg">Elderberry Syrup</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm">
                  Take 1-2 tablespoons daily as a natural immune booster or during illness.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <Leaf className="h-10 w-10 text-purple-600 mx-auto mb-3" />
                <CardTitle className="text-lg">Gummies</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm">
                  Convenient and tasty way to get your daily dose, especially great for kids.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <Shield className="h-10 w-10 text-purple-600 mx-auto mb-3" />
                <CardTitle className="text-lg">Supplements</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm">
                  Standardized extracts provide consistent potency for therapeutic benefits.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <Heart className="h-10 w-10 text-purple-600 mx-auto mb-3" />
                <CardTitle className="text-lg">Tea</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm">
                  Dried elderberries make a delicious, warming tea perfect for cold days.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Safety Information */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-amber-600" />
                <CardTitle className="text-amber-900">Important Safety Information</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-amber-800">
                <p>• Only consume ripe, cooked elderberries - raw elderberries can cause digestive upset</p>
                <p>• Avoid elderberry bark, seeds, and leaves as they contain compounds that can be toxic</p>
                <p>• Consult healthcare providers before use if pregnant, nursing, or taking medications</p>
                <p>• Start with small amounts to assess individual tolerance</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-purple-50 rounded-xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-serif font-light text-gray-900 mb-4">Ready to Boost Your Immune System?</h2>
            <p className="text-gray-600 mb-6">
              Discover more immune-supporting foods and create a personalized nutrition plan for optimal health.
            </p>
            <Link
              href="/resources"
              className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-colors"
            >
              Explore More Healing Foods
              <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
