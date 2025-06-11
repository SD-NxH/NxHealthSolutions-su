"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Leaf, Heart, Brain, Shield, Zap, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function EpazotePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <Link
            href="/resources/e"
            className="inline-flex items-center text-green-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to E Foods
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <Badge className="bg-lime-100 text-lime-800 text-sm px-3 py-1">Traditional Herb</Badge>
              <Badge className="bg-green-100 text-green-800 text-sm px-3 py-1">Digestive Aid</Badge>
            </div>

            <h1 className="text-5xl md:text-6xl font-serif font-light mb-6">Epazote</h1>

            <p className="text-xl text-green-100 mb-8 leading-relaxed max-w-3xl">
              A pungent Mexican herb traditionally used with beans to aid digestion and reduce gas. Known for its
              distinctive flavor and powerful medicinal properties in traditional Mexican cuisine.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Rich in</div>
                <div className="text-green-100">Antioxidants</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">High in</div>
                <div className="text-green-100">Vitamins A & C</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Contains</div>
                <div className="text-green-100">Essential Oils</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Source of</div>
                <div className="text-green-100">Minerals</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Health Benefits */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-serif font-light text-gray-900 mb-8 text-center">Health Benefits of Epazote</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Leaf className="h-5 w-5 text-green-600" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">Digestive Health</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Traditionally used to reduce gas and bloating when eating beans and legumes. Contains compounds that
                  aid in digestion and reduce intestinal discomfort.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Shield className="h-5 w-5 text-green-600" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">Antimicrobial Properties</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Contains natural compounds with antimicrobial and antiparasitic properties. Traditionally used in folk
                  medicine to support immune system health.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Heart className="h-5 w-5 text-green-600" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">Antioxidant Rich</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  High in vitamins A and C, providing powerful antioxidant protection against free radicals and
                  supporting overall cellular health.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Zap className="h-5 w-5 text-green-600" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">Respiratory Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Traditional use includes supporting respiratory health and helping to clear congestion. The essential
                  oils may help with breathing comfort.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Brain className="h-5 w-5 text-green-600" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">Traditional Medicine</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Used for centuries in Mexican traditional medicine for various ailments. Valued for its therapeutic
                  properties in folk healing practices.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">Culinary Enhancement</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Enhances the digestibility of beans and legumes while adding a unique, pungent flavor to traditional
                  Mexican dishes like black beans and quesadillas.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Usage and Preparation */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-serif font-light text-gray-900 mb-8 text-center">How to Use Epazote</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-green-100">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Culinary Uses</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-gray-900">Bean Dishes</h4>
                    <p className="text-gray-600 text-sm">
                      Add fresh or dried epazote to black beans, pinto beans, or any legume dish during cooking
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-gray-900">Quesadillas</h4>
                    <p className="text-gray-600 text-sm">
                      Traditional addition to cheese quesadillas, especially with Oaxaca cheese
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-gray-900">Soups and Stews</h4>
                    <p className="text-gray-600 text-sm">
                      Add to Mexican soups and stews for authentic flavor and digestive benefits
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-gray-900">Herbal Tea</h4>
                    <p className="text-gray-600 text-sm">
                      Steep dried leaves in hot water for a traditional digestive tea
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Preparation Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-gray-900">Fresh vs. Dried</h4>
                    <p className="text-gray-600 text-sm">
                      Fresh epazote has a stronger flavor; use dried when fresh is unavailable
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-gray-900">Amount to Use</h4>
                    <p className="text-gray-600 text-sm">
                      Start with small amounts (1-2 sprigs) as the flavor is quite strong and pungent
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-gray-900">When to Add</h4>
                    <p className="text-gray-600 text-sm">
                      Add during the last 10-15 minutes of cooking to preserve flavor and properties
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-gray-900">Storage</h4>
                    <p className="text-gray-600 text-sm">
                      Store fresh epazote in refrigerator; dried epazote in airtight container
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Safety Information */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-xl text-amber-800 flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Important Safety Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-amber-700">
                <strong>Pregnancy and Nursing:</strong> Epazote should be avoided during pregnancy and breastfeeding as
                it may have uterine stimulant properties.
              </p>
              <p className="text-amber-700">
                <strong>Dosage:</strong> Use in culinary amounts only. Large medicinal doses should be avoided without
                professional guidance.
              </p>
              <p className="text-amber-700">
                <strong>Essential Oil:</strong> The concentrated essential oil should never be consumed as it can be
                toxic in large amounts.
              </p>
              <p className="text-amber-700">
                <strong>Allergies:</strong> Some people may be sensitive to epazote. Start with small amounts to test
                tolerance.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-green-50 rounded-xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-serif font-light text-gray-900 mb-4">Explore More Healing Foods</h2>
            <p className="text-gray-600 mb-6">
              Discover other traditional herbs and foods that can support your health and enhance your culinary
              adventures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resources/e"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition-colors"
              >
                More E Foods
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-full transition-colors"
              >
                All Foods A-Z
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
