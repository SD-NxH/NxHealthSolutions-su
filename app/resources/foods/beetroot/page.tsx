import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Check, ChefHat, Heart, Info, Leaf, Salad, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollProgress } from "@/components/scroll-progress"
import { ScrollToTop } from "@/components/scroll-to-top"

export const metadata: Metadata = {
  title: "Beetroot - Nutritional Information | NxHealth",
  description:
    "Learn about the nutritional benefits of beetroot, its health properties, and how to incorporate it into your diet.",
}

export default function BeetrootPage() {
  return (
    <>
      <ScrollProgress />
      <ScrollToTop />
      <main className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-purple-900 to-purple-950 text-pink-50 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block px-3 py-1 rounded-md bg-purple-800 text-pink-100 text-sm font-medium mb-2">
                  Superfood Spotlight
                </div>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
                  Beetroot: The Vibrant Powerhouse of Nutrition
                </h1>
                <p className="text-pink-100 md:text-xl">
                  Discover the incredible health benefits, culinary versatility, and rich nutritional profile of this
                  deep crimson root vegetable that can transform your health and your plate.
                </p>
                <div className="flex flex-wrap gap-3 mt-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-800 text-pink-100 text-sm">
                    <Leaf className="mr-1 h-4 w-4" /> Plant-Based
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-800 text-pink-100 text-sm">
                    <Heart className="mr-1 h-4 w-4" /> Heart Healthy
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-800 text-pink-100 text-sm">
                    <Sparkles className="mr-1 h-4 w-4" /> Antioxidant Rich
                  </span>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-full border-4 border-purple-700 shadow-xl">
                  <Image
                    src="/vibrant-beetroot-display.png"
                    alt="Fresh beetroot with vibrant purple color"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* General Information */}
        <section className="bg-gradient-to-b from-purple-950 to-purple-100 text-white py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-pink-50">About Beetroot</h2>

              <div className="prose prose-lg prose-invert max-w-none">
                <p className="mb-4">
                  Beetroot (Beta vulgaris), also known simply as beet, is a root vegetable known for its distinctive
                  deep crimson color. It belongs to the same family as chard and spinach, and both the roots and leaves
                  are edible and packed with nutrients.
                </p>

                <p className="mb-4">
                  Originally grown around the Mediterranean and Atlantic coasts of Europe, beetroot has been cultivated
                  for thousands of years. The ancient Romans were among the first to cultivate beets and used them for
                  their medicinal properties rather than as food.
                </p>

                <p className="mb-4">
                  Today, beetroot is celebrated not only for its earthy, sweet flavor but also for its remarkable health
                  benefits. Modern research has revealed that beetroot contains unique bioactive compounds called
                  betalains, which give it both its color and many of its health-promoting properties.
                </p>

                <div className="bg-purple-800 p-6 rounded-lg mt-6 shadow-inner">
                  <h3 className="text-xl font-semibold mb-3 text-pink-100">Key Characteristics:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Rich in essential nutrients including folate, manganese, potassium, iron, and vitamin C</li>
                    <li>
                      Contains high levels of inorganic nitrates, which can improve blood flow and lower blood pressure
                    </li>
                    <li>Excellent source of fiber, supporting digestive health</li>
                    <li>Low in calories but high in nutritional value</li>
                    <li>Available year-round but at its peak from June to October</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nutritional Information */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-purple-50 to-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-8 text-center">Nutritional Profile</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-white border-purple-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                      <span className="text-purple-900 font-bold">58</span>
                    </div>
                    <h3 className="font-medium text-purple-900">Calories</h3>
                    <p className="text-sm text-gray-500">per 100g</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white border-purple-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                      <span className="text-purple-900 font-bold">1.6g</span>
                    </div>
                    <h3 className="font-medium text-purple-900">Protein</h3>
                    <p className="text-sm text-gray-500">per 100g</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white border-purple-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                      <span className="text-purple-900 font-bold">9.6g</span>
                    </div>
                    <h3 className="font-medium text-purple-900">Carbs</h3>
                    <p className="text-sm text-gray-500">per 100g</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white border-purple-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                      <span className="text-purple-900 font-bold">2.8g</span>
                    </div>
                    <h3 className="font-medium text-purple-900">Fiber</h3>
                    <p className="text-sm text-gray-500">per 100g</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Key Nutrients</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-white p-4 rounded-lg border border-purple-100 shadow-sm">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-purple-600 mr-2" />
                    <span className="font-medium">Folate (20% DV)</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1 ml-7">Essential for cell growth and metabolism</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-100 shadow-sm">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-purple-600 mr-2" />
                    <span className="font-medium">Manganese (16% DV)</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1 ml-7">Important for bone health and metabolism</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-100 shadow-sm">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-purple-600 mr-2" />
                    <span className="font-medium">Potassium (9% DV)</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1 ml-7">Helps maintain healthy blood pressure</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-100 shadow-sm">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-purple-600 mr-2" />
                    <span className="font-medium">Vitamin C (8% DV)</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1 ml-7">Supports immune function and collagen production</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-100 shadow-sm">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-purple-600 mr-2" />
                    <span className="font-medium">Iron (6% DV)</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1 ml-7">Essential for oxygen transport in the blood</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-100 shadow-sm">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-purple-600 mr-2" />
                    <span className="font-medium">Nitrates</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1 ml-7">Natural compounds that support heart health</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Health Benefits */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-white to-purple-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-8 text-center">Health Benefits</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white border-purple-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                      <Heart className="h-6 w-6 text-purple-700" />
                    </div>
                    <h3 className="font-medium text-purple-900 mb-2">Supports Heart Health</h3>
                    <p className="text-gray-600">
                      The nitrates in beetroot can help lower blood pressure and improve blood flow, reducing the risk
                      of heart disease.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white border-purple-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                      <Sparkles className="h-6 w-6 text-purple-700" />
                    </div>
                    <h3 className="font-medium text-purple-900 mb-2">Rich in Antioxidants</h3>
                    <p className="text-gray-600">
                      Betalains, the pigments that give beetroot its color, have powerful antioxidant properties that
                      fight inflammation.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white border-purple-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                      <Award className="h-6 w-6 text-purple-700" />
                    </div>
                    <h3 className="font-medium text-purple-900 mb-2">Athletic Performance</h3>
                    <p className="text-gray-600">
                      Studies suggest beetroot juice can enhance endurance and improve exercise performance by
                      increasing oxygen use efficiency.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white border-purple-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                      <Leaf className="h-6 w-6 text-purple-700" />
                    </div>
                    <h3 className="font-medium text-purple-900 mb-2">Liver Support</h3>
                    <p className="text-gray-600">
                      Beetroot contains betaine, which helps protect the liver and stimulates the function of liver
                      cells.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white border-purple-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                      <Info className="h-6 w-6 text-purple-700" />
                    </div>
                    <h3 className="font-medium text-purple-900 mb-2">Brain Health</h3>
                    <p className="text-gray-600">
                      The nitrates in beetroot may improve blood flow to the brain, potentially slowing cognitive
                      decline.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white border-purple-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                      <Salad className="h-6 w-6 text-purple-700" />
                    </div>
                    <h3 className="font-medium text-purple-900 mb-2">Digestive Health</h3>
                    <p className="text-gray-600">
                      The fiber in beetroot supports digestive health and helps maintain a healthy gut microbiome.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Culinary Uses */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-purple-50 to-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-8 text-center">Culinary Uses</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="bg-white border-purple-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="aspect-video relative">
                  <Image src="/fresh-beetroots.png" alt="Fresh beetroots with leaves" fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-medium text-purple-900 mb-2 flex items-center">
                    <ChefHat className="h-5 w-5 mr-2 text-purple-700" />
                    Roasted Beetroot
                  </h3>
                  <p className="text-gray-600">
                    Roasting beetroot enhances its natural sweetness. Toss with olive oil, salt, and herbs, then roast
                    until tender. Perfect as a side dish or added to salads.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-purple-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src="/beetroot-berry-smoothie.png"
                    alt="Beetroot smoothie with berries"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-medium text-purple-900 mb-2 flex items-center">
                    <ChefHat className="h-5 w-5 mr-2 text-purple-700" />
                    Beetroot Smoothie
                  </h3>
                  <p className="text-gray-600">
                    Blend raw beetroot with berries, banana, and yogurt for a nutritious and vibrant smoothie. Add a
                    touch of honey or maple syrup if desired.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 bg-purple-100 rounded-xl p-6 md:p-8">
              <h3 className="font-medium text-purple-900 mb-4">More Ways to Enjoy Beetroot:</h3>
              <ul className="grid gap-3 md:grid-cols-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-purple-700 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Grated raw in salads for color and crunch</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-purple-700 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Pickled for a tangy condiment</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-purple-700 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Juiced with apple and ginger</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-purple-700 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Baked into chocolate cakes for moisture</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-purple-700 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Pureed into vibrant soups</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-purple-700 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Added to homemade veggie burgers</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Did You Know */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-white to-purple-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-8 text-center">Did You Know?</h2>
            <div className="bg-white rounded-xl shadow-md border border-purple-100 p-6 md:p-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h3 className="font-medium text-purple-900 mb-2">Natural Food Coloring</h3>
                  <p className="text-gray-600 text-sm">
                    Beetroot is used as a natural food coloring in many products, from ice cream to pasta.
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h3 className="font-medium text-purple-900 mb-2">Ancient History</h3>
                  <p className="text-gray-600 text-sm">
                    Beetroot has been cultivated since ancient times, with evidence dating back to prehistoric times.
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h3 className="font-medium text-purple-900 mb-2">Colorful Urine</h3>
                  <p className="text-gray-600 text-sm">
                    Don't be alarmed if your urine turns pink after eating beetroot—it's a harmless condition called
                    beeturia.
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h3 className="font-medium text-purple-900 mb-2">Sugar Source</h3>
                  <p className="text-gray-600 text-sm">
                    Before sugarcane became widely available, beetroot was a primary source of sugar in many countries.
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h3 className="font-medium text-purple-900 mb-2">Leaves Are Edible</h3>
                  <p className="text-gray-600 text-sm">
                    Beetroot leaves are highly nutritious and can be cooked like spinach or added to salads.
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h3 className="font-medium text-purple-900 mb-2">World Record</h3>
                  <p className="text-gray-600 text-sm">
                    The heaviest beetroot on record weighed over 23 kg (51 lbs), grown in the Netherlands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Foods */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-purple-50 to-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-8 text-center">Explore Related Foods</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link href="/resources/foods/carrot" className="group">
                <Card className="bg-white border-purple-200 shadow-sm group-hover:shadow-md transition-shadow h-full">
                  <div className="aspect-square relative">
                    <Image
                      src="/vibrant-orange-carrots.png"
                      alt="Fresh carrots"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardContent className="p-4 flex items-center justify-between">
                    <h3 className="font-medium text-purple-900">Carrots</h3>
                    <ArrowRight className="h-5 w-5 text-purple-700 group-hover:translate-x-1 transition-transform" />
                  </CardContent>
                </Card>
              </Link>
              <Link href="/resources/foods/cabbage" className="group">
                <Card className="bg-white border-purple-200 shadow-sm group-hover:shadow-md transition-shadow h-full">
                  <div className="aspect-square relative">
                    <Image src="/vibrant-cabbage.png" alt="Fresh cabbage" fill className="object-cover rounded-t-lg" />
                  </div>
                  <CardContent className="p-4 flex items-center justify-between">
                    <h3 className="font-medium text-purple-900">Cabbage</h3>
                    <ArrowRight className="h-5 w-5 text-purple-700 group-hover:translate-x-1 transition-transform" />
                  </CardContent>
                </Card>
              </Link>
              <Link href="/resources/foods/sweet-potato" className="group">
                <Card className="bg-white border-purple-200 shadow-sm group-hover:shadow-md transition-shadow h-full">
                  <div className="aspect-square relative">
                    <Image
                      src="/fresh-sweet-potatoes.png"
                      alt="Sweet potatoes"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardContent className="p-4 flex items-center justify-between">
                    <h3 className="font-medium text-purple-900">Sweet Potato</h3>
                    <ArrowRight className="h-5 w-5 text-purple-700 group-hover:translate-x-1 transition-transform" />
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-purple-900 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to incorporate beetroot into your diet?</h2>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Explore our nutrition plans and personalized consultations to learn how to maximize the benefits of
              beetroot and other superfoods.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="beetroot" size="lg" className="bg-white text-purple-900 hover:bg-purple-50">
                Get Nutrition Plan
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-purple-800">
                Browse More Foods
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
