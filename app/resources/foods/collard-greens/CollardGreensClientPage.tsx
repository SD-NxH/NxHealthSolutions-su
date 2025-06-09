"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft, Leaf, Heart, Brain, Shield, Apple } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CollardGreensClientPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-green-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Link href="/resources/c" className="inline-flex items-center text-green-700 hover:text-green-800 mb-4">
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Back to C Foods
                </Link>
                <h1 className="text-3xl font-serif font-medium tracking-tight sm:text-4xl md:text-5xl text-green-900">
                  Collard Greens
                </h1>
                <p className="max-w-[700px] text-gray-600 md:text-xl">
                  A nutrient-dense leafy green vegetable packed with vitamins, minerals, and antioxidants that support
                  overall health and wellbeing.
                </p>
              </div>
            </div>
            <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last">
              <Image
                src="/collard-greens-fresh.jpg"
                alt="Fresh collard green leaves with prominent white veins on a wooden cutting board"
                width={600}
                height={400}
                className="rounded-md object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
              <TabsTrigger value="preparation">Preparation</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="grid gap-8 md:grid-cols-2">
                  <Card className="overflow-hidden border-green-200 bg-green-50">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                        <Leaf className="h-5 w-5 mr-2 text-green-600" />
                        What are Collard Greens?
                      </h3>
                      <p className="text-gray-700">
                        Collard greens are a leafy green vegetable that belongs to the Brassica oleracea species, which
                        includes cabbage, kale, and broccoli. They have large, dark green leaves with tough stems and
                        are a staple in Southern American and African cuisines. Collard greens are one of the most
                        nutrient-dense vegetables available, providing exceptional amounts of vitamins K, A, and C, as
                        well as calcium and fiber.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden border-green-200 bg-green-50">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                        <Apple className="h-5 w-5 mr-2 text-green-600" />
                        Culinary Uses
                      </h3>
                      <p className="text-gray-700">
                        Collard greens are incredibly versatile in the kitchen. They can be sautéed, steamed, braised,
                        or added to soups and stews. In Southern cooking, they're traditionally slow-cooked with smoked
                        meat for flavor. For a healthier approach, they can be quickly sautéed with garlic and olive oil
                        or added to smoothies for a nutritional boost. The leaves can also be used as a gluten-free wrap
                        alternative.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </TabsContent>
            <TabsContent value="nutrition" className="space-y-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card className="border-green-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">Nutritional Profile</h3>
                    <p className="text-gray-700 mb-6">
                      Collard greens are exceptionally nutritious with very few calories. A one-cup (190g) serving of
                      cooked collard greens contains:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-green-100 p-4 rounded-lg text-center">
                        <p className="text-sm text-green-700">Calories</p>
                        <p className="text-2xl font-bold text-green-900">49</p>
                      </div>
                      <div className="bg-green-100 p-4 rounded-lg text-center">
                        <p className="text-sm text-green-700">Protein</p>
                        <p className="text-2xl font-bold text-green-900">4g</p>
                      </div>
                      <div className="bg-green-100 p-4 rounded-lg text-center">
                        <p className="text-sm text-green-700">Fiber</p>
                        <p className="text-2xl font-bold text-green-900">5.3g</p>
                      </div>
                      <div className="bg-green-100 p-4 rounded-lg text-center">
                        <p className="text-sm text-green-700">Carbs</p>
                        <p className="text-2xl font-bold text-green-900">9g</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h4 className="font-medium text-green-800 mb-2">Vitamins & Minerals (% Daily Value)</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <li className="flex items-center">
                          <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                          <span className="text-gray-700">Vitamin K: 1045%</span>
                        </li>
                        <li className="flex items-center">
                          <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                          <span className="text-gray-700">Vitamin A: 308%</span>
                        </li>
                        <li className="flex items-center">
                          <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                          <span className="text-gray-700">Vitamin C: 58%</span>
                        </li>
                        <li className="flex items-center">
                          <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                          <span className="text-gray-700">Folate: 44%</span>
                        </li>
                        <li className="flex items-center">
                          <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                          <span className="text-gray-700">Calcium: 27%</span>
                        </li>
                        <li className="flex items-center">
                          <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                          <span className="text-gray-700">Iron: 12%</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            <TabsContent value="benefits" className="space-y-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border-green-200 bg-green-50">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                        <Heart className="h-5 w-5 mr-2 text-green-600" />
                        Heart Health
                      </h3>
                      <p className="text-gray-700">
                        Collard greens contain compounds that bind to bile acids in the digestive system, which helps
                        lower cholesterol levels. Their high fiber content also supports heart health by reducing
                        cholesterol and blood pressure. Additionally, the vitamin K in collard greens helps prevent
                        arterial calcification, which can lead to heart disease.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-green-200 bg-green-50">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                        <Brain className="h-5 w-5 mr-2 text-green-600" />
                        Bone Health
                      </h3>
                      <p className="text-gray-700">
                        With their exceptional vitamin K content, collard greens are excellent for bone health. Vitamin
                        K is essential for bone formation and helps reduce the risk of fractures. Collard greens also
                        provide calcium, which is crucial for maintaining strong bones and preventing osteoporosis,
                        especially important for those who don't consume dairy products.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-green-200 bg-green-50">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                        <Shield className="h-5 w-5 mr-2 text-green-600" />
                        Cancer Prevention
                      </h3>
                      <p className="text-gray-700">
                        As a member of the cruciferous vegetable family, collard greens contain glucosinolates, which
                        break down into compounds that have been shown to inhibit cancer growth. Regular consumption of
                        cruciferous vegetables like collard greens is associated with a reduced risk of several types of
                        cancer, including breast, prostate, and colorectal cancers.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-green-200 bg-green-50">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                        <Leaf className="h-5 w-5 mr-2 text-green-600" />
                        Anti-Inflammatory Properties
                      </h3>
                      <p className="text-gray-700">
                        Collard greens contain various antioxidants and anti-inflammatory compounds that help reduce
                        inflammation in the body. Chronic inflammation is linked to numerous health issues, including
                        heart disease, diabetes, and arthritis. The vitamin E and other antioxidants in collard greens
                        help neutralize free radicals and reduce oxidative stress.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </TabsContent>
            <TabsContent value="preparation" className="space-y-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card className="border-green-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">How to Prepare Collard Greens</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium text-green-700 mb-2">Selection & Storage</h4>
                        <p className="text-gray-700">
                          Choose collard greens with firm, unwilted leaves that are deep green in color without any
                          yellowing or brown spots. Smaller leaves tend to be more tender and have a milder flavor.
                          Store unwashed collard greens in a plastic bag in the refrigerator crisper drawer for up to 5
                          days. For longer storage, you can blanch and freeze them.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-green-700 mb-2">Preparation</h4>
                        <ol className="list-decimal list-inside space-y-2 text-gray-700">
                          <li>Wash the leaves thoroughly under cold running water to remove any dirt or grit.</li>
                          <li>
                            Remove the tough center stem by folding the leaf in half along the stem and cutting or
                            tearing it away.
                          </li>
                          <li>Stack the leaves, roll them up, and slice into ribbons for cooking.</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-medium text-green-700 mb-2">Quick & Healthy Cooking Methods</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>
                            <span className="font-medium">Sautéing:</span> Heat olive oil in a pan with minced garlic,
                            add sliced collards, and cook for 5-7 minutes until tender. Season with salt, pepper, and a
                            squeeze of lemon juice.
                          </li>
                          <li>
                            <span className="font-medium">Steaming:</span> Steam collard greens for 4-5 minutes until
                            bright green and tender. Drizzle with olive oil and season to taste.
                          </li>
                          <li>
                            <span className="font-medium">Raw:</span> Young, tender collard leaves can be used in salads
                            or as wraps for sandwiches and burritos.
                          </li>
                          <li>
                            <span className="font-medium">Smoothies:</span> Add a small amount of collard greens to
                            fruit smoothies for a nutritional boost.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Foods Section */}
      <section className="py-12 bg-green-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-serif font-medium text-green-900 mb-8">Related Leafy Greens</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="border-green-200">
              <CardContent className="p-4 text-center">
                <div className="aspect-square relative mb-3">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Kale"
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
                <h3 className="font-medium text-green-800">Kale</h3>
              </CardContent>
            </Card>
            <Card className="border-green-200">
              <CardContent className="p-4 text-center">
                <div className="aspect-square relative mb-3">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Spinach"
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
                <h3 className="font-medium text-green-800">Spinach</h3>
              </CardContent>
            </Card>
            <Card className="border-green-200">
              <CardContent className="p-4 text-center">
                <div className="aspect-square relative mb-3">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Swiss Chard"
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
                <h3 className="font-medium text-green-800">Swiss Chard</h3>
              </CardContent>
            </Card>
            <Card className="border-green-200">
              <CardContent className="p-4 text-center">
                <div className="aspect-square relative mb-3">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Mustard Greens"
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
                <h3 className="font-medium text-green-800">Mustard Greens</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
