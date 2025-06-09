"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Leaf, Heart, Shield, Zap, ChefHat, Star } from "lucide-react"

export default function CuminClientPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">Aromatic Spice</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6">Cumin</h1>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
              A warm, earthy spice that has been treasured for thousands of years for its distinctive flavor and
              remarkable health benefits, supporting digestion and overall wellness.
            </p>
          </div>

          {/* Featured Image */}
          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/cumin-seeds-detailed.jpg"
                alt="Detailed view of cumin seeds showing their characteristic ridged, elongated shape"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-amber-100 border-amber-200">
              <TabsTrigger value="overview" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="nutrition"
                className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
              >
                Nutrition
              </TabsTrigger>
              <TabsTrigger value="benefits" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                Benefits
              </TabsTrigger>
              <TabsTrigger value="uses" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                Uses
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-amber-900">
                    <Leaf className="h-6 w-6" />
                    About Cumin
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-amber-800">
                  <p>
                    Cumin (Cuminum cyminum) is a flowering plant native to the Mediterranean and Southwest Asia. The
                    seeds of this plant are dried and used as a spice, prized for their warm, earthy flavor with hints
                    of both sweetness and bitterness.
                  </p>
                  <p>
                    This ancient spice has been used for over 4,000 years, not only for culinary purposes but also for
                    its medicinal properties. Cumin is a key ingredient in many spice blends including curry powder,
                    chili powder, and garam masala.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                      <h4 className="font-semibold text-amber-900 mb-2">Scientific Name</h4>
                      <p className="text-amber-700">Cuminum cyminum</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                      <h4 className="font-semibold text-amber-900 mb-2">Family</h4>
                      <p className="text-amber-700">Apiaceae (Carrot family)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="nutrition" className="space-y-8">
              <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-amber-900">
                    <Star className="h-6 w-6" />
                    Nutritional Profile (per 1 tablespoon/6g)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                      <h4 className="font-semibold text-amber-900">Calories</h4>
                      <p className="text-2xl font-bold text-amber-700">22</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                      <h4 className="font-semibold text-amber-900">Iron</h4>
                      <p className="text-2xl font-bold text-amber-700">4mg</p>
                      <p className="text-sm text-amber-600">22% DV</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                      <h4 className="font-semibold text-amber-900">Manganese</h4>
                      <p className="text-2xl font-bold text-amber-700">0.3mg</p>
                      <p className="text-sm text-amber-600">17% DV</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                      <h4 className="font-semibold text-amber-900">Magnesium</h4>
                      <p className="text-2xl font-bold text-amber-700">22mg</p>
                      <p className="text-sm text-amber-600">5% DV</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                      <h4 className="font-semibold text-amber-900">Calcium</h4>
                      <p className="text-2xl font-bold text-amber-700">56mg</p>
                      <p className="text-sm text-amber-600">4% DV</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                      <h4 className="font-semibold text-amber-900">Fiber</h4>
                      <p className="text-2xl font-bold text-amber-700">0.6g</p>
                      <p className="text-sm text-amber-600">2% DV</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="benefits" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-amber-900">
                      <Heart className="h-6 w-6" />
                      Digestive Health
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-amber-800">
                    <p>
                      Cumin stimulates the production of digestive enzymes, helping to break down food more efficiently
                      and reduce bloating, gas, and indigestion.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-amber-900">
                      <Shield className="h-6 w-6" />
                      Antioxidant Power
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-amber-800">
                    <p>
                      Rich in antioxidants like cuminaldehyde and thymol, cumin helps protect cells from oxidative
                      stress and may reduce the risk of chronic diseases.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-amber-900">
                      <Zap className="h-6 w-6" />
                      Iron Rich
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-amber-800">
                    <p>
                      Excellent source of iron, essential for oxygen transport in the blood and preventing
                      iron-deficiency anemia, especially important for vegetarians.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-amber-900">
                      <Heart className="h-6 w-6" />
                      Blood Sugar Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-amber-800">
                    <p>
                      Studies suggest cumin may help improve insulin sensitivity and glucose metabolism, potentially
                      beneficial for blood sugar management.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="uses" className="space-y-8">
              <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-amber-900">
                    <ChefHat className="h-6 w-6" />
                    Culinary Uses & Preparation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-amber-800">
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-2">Cooking Methods</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Toast whole seeds in a dry pan to enhance flavor before grinding</li>
                      <li>Add ground cumin to spice rubs for meats and vegetables</li>
                      <li>Use in curry powders, chili powders, and spice blends</li>
                      <li>Sprinkle over roasted vegetables or rice dishes</li>
                    </ul>
                  </div>

                  <Separator className="bg-amber-200" />

                  <div>
                    <h4 className="font-semibold text-amber-900 mb-2">Storage Tips</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Store whole seeds in airtight containers for up to 3 years</li>
                      <li>Ground cumin stays fresh for 1-2 years when properly stored</li>
                      <li>Keep in a cool, dark place away from heat and moisture</li>
                      <li>Grind seeds fresh for maximum flavor and potency</li>
                    </ul>
                  </div>

                  <Separator className="bg-amber-200" />

                  <div>
                    <h4 className="font-semibold text-amber-900 mb-2">Popular Dishes</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Middle Eastern and Indian curries</li>
                      <li>Mexican and Tex-Mex cuisine</li>
                      <li>Moroccan tagines and spice blends</li>
                      <li>Roasted vegetables and meat rubs</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Spices Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-100/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">Related Aromatic Spices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-amber-200 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-amber-900">Coriander</CardTitle>
                <CardDescription className="text-amber-700">Citrusy seeds often paired with cumin</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-amber-200 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-amber-900">Turmeric</CardTitle>
                <CardDescription className="text-amber-700">
                  Golden spice with anti-inflammatory properties
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-amber-200 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-amber-900">Cardamom</CardTitle>
                <CardDescription className="text-amber-700">Aromatic spice with sweet and spicy notes</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
