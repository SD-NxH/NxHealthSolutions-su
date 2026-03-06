"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Heart, Shield, Leaf, Brain, Eye, Zap, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ScrollProgress } from "@/components/scroll-progress"
import { ScrollToTop } from "@/components/scroll-to-top"
import { getFoodBySlug, getRelatedFoods, getFoodColorClasses, type FoodData } from "@/lib/foods-data"

const benefitIcons = [Heart, Shield, Leaf, Brain, Eye, Zap]

function FoodNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Leaf className="h-10 w-10 text-green-600" />
        </div>
        <h1 className="text-3xl font-serif font-light text-green-900 mb-4">Coming Soon</h1>
        <p className="text-green-700 mb-8">
          We are still preparing the detailed profile for this food. Check back soon for the full nutritional breakdown and health benefits.
        </p>
        <Link
          href="/resources"
          className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Resources
        </Link>
      </div>
    </div>
  )
}

function RelatedFoodsSection({ food, colors }: { food: FoodData; colors: ReturnType<typeof getFoodColorClasses> }) {
  const related = getRelatedFoods(food.slug, 3)

  if (related.length === 0) return null

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${colors.bgLight}/50`}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl font-bold ${colors.text} mb-8 text-center`}>Related Foods to Explore</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((r) => {
            const rColors = getFoodColorClasses(r.color)
            return (
              <Link href={`/resources/foods/${r.slug}`} key={r.slug}>
                <Card className={`${rColors.border} bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow cursor-pointer h-full`}>
                  <CardContent className="p-6">
                    <div className="relative h-32 w-full mb-4 rounded-lg overflow-hidden bg-muted">
                      <Image
                        src={r.image || "/images/foods/placeholder.jpg"}
                        alt={r.name}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/images/foods/placeholder.jpg"
                        }}
                      />
                    </div>
                    <Badge className={rColors.badge}>{r.category}</Badge>
                    <h3 className={`font-semibold ${rColors.text} mt-2 mb-1`}>{r.name}</h3>
                    <p className={`${rColors.textLight} text-sm line-clamp-2`}>{r.shortDescription}</p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default function DynamicFoodPage() {
  const params = useParams()
  const slug = params?.slug as string
  const food = getFoodBySlug(slug)
  const [activeTab, setActiveTab] = useState("overview")

  if (!food) {
    return <FoodNotFound />
  }

  const colors = getFoodColorClasses(food.color)
  const letterLower = food.letter.toLowerCase()

  return (
    <div className={`min-h-screen bg-gradient-to-br ${colors.gradient}`}>
      <ScrollProgress />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Link
                  href={`/resources/${letterLower}`}
                  className={`inline-flex items-center ${colors.textLight} hover:${colors.text} mb-4 transition-colors text-sm`}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Foods Starting with {food.letter}
                </Link>
              </div>
              <div className="space-y-4">
                <Badge className={colors.badge}>{food.category}</Badge>
                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${colors.text} leading-tight`}>
                  {food.name}
                </h1>
                <p className={`text-xl ${colors.textLight} leading-relaxed`}>{food.description}</p>
              </div>
            </div>

            <div className="relative">
              <div className={`aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br ${colors.bgLight} to-white`}>
                <Image
                  src={food.image || "/images/foods/placeholder.jpg"}
                  alt={`Fresh ${food.name.toLowerCase()}`}
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/images/foods/placeholder.jpg"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Tabbed Interface */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className={`grid w-full ${food.howToUse && food.howToUse.length > 0 ? "grid-cols-4" : "grid-cols-3"} ${colors.bgLight} ${colors.border}`}>
              <TabsTrigger value="overview" className={`data-[state=active]:${colors.bg} data-[state=active]:text-white`}>
                Overview
              </TabsTrigger>
              {food.nutritionalProfile && (
                <TabsTrigger value="nutrition" className={`data-[state=active]:${colors.bg} data-[state=active]:text-white`}>
                  Nutrition
                </TabsTrigger>
              )}
              <TabsTrigger value="benefits" className={`data-[state=active]:${colors.bg} data-[state=active]:text-white`}>
                Benefits
              </TabsTrigger>
              {food.howToUse && food.howToUse.length > 0 && (
                <TabsTrigger value="uses" className={`data-[state=active]:${colors.bg} data-[state=active]:text-white`}>
                  Uses
                </TabsTrigger>
              )}
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <Card className={`${colors.border} bg-white/80 backdrop-blur-sm`}>
                <CardHeader className={`bg-gradient-to-r ${colors.bg} to-${food.color}-700 text-white rounded-t-lg`}>
                  <CardTitle className="text-2xl">About {food.name}</CardTitle>
                  <CardDescription className="text-white/80">{food.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <p className={`${colors.textLight} leading-relaxed`}>{food.description}</p>
                  {food.keyNutrients && food.keyNutrients.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {food.keyNutrients.map((nutrient) => (
                        <Badge key={nutrient} variant="outline" className={colors.border}>
                          {nutrient}
                        </Badge>
                      ))}
                    </div>
                  )}
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    {food.healthBenefits.slice(0, 3).map((benefit, idx) => {
                      const IconComponent = benefitIcons[idx % benefitIcons.length]
                      return (
                        <div key={benefit.title} className={`text-center p-4 ${colors.bgLight} rounded-lg ${colors.border} border`}>
                          <IconComponent className={`h-8 w-8 ${colors.textLight} mx-auto mb-2`} />
                          <div className={`font-semibold ${colors.text}`}>{benefit.title}</div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Nutrition Tab */}
            {food.nutritionalProfile && (
              <TabsContent value="nutrition" className="space-y-6">
                <Card className={`${colors.border} bg-white/80 backdrop-blur-sm`}>
                  <CardHeader className={`bg-gradient-to-r ${colors.bg} to-${food.color}-700 text-white rounded-t-lg`}>
                    <CardTitle className="text-2xl">Nutritional Profile</CardTitle>
                    <CardDescription className="text-white/80">Key nutritional facts for {food.name}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className={`${colors.textLight} leading-relaxed mb-6`}>{food.nutritionalProfile}</p>
                    {food.keyNutrients && food.keyNutrients.length > 0 && (
                      <div className="space-y-4">
                        <h3 className={`font-semibold ${colors.text} text-lg border-b ${colors.border} pb-2`}>
                          Key Nutrients
                        </h3>
                        <div className="grid md:grid-cols-2 gap-3">
                          {food.keyNutrients.map((nutrient) => (
                            <div key={nutrient} className={`flex items-center p-3 ${colors.bgLight} rounded-lg`}>
                              <Shield className={`h-4 w-4 ${colors.textLight} mr-3 flex-shrink-0`} />
                              <span className={colors.text}>{nutrient}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            )}

            {/* Benefits Tab */}
            <TabsContent value="benefits" className="space-y-6">
              <div className="grid gap-6">
                {food.healthBenefits.map((benefit, idx) => {
                  const IconComponent = benefitIcons[idx % benefitIcons.length]
                  return (
                    <Card key={benefit.title} className={`${colors.border} bg-white/80 backdrop-blur-sm`}>
                      <CardHeader className={`bg-gradient-to-r ${colors.bg} to-${food.color}-700 text-white rounded-t-lg`}>
                        <CardTitle className="flex items-center gap-2">
                          <IconComponent className="h-6 w-6" />
                          {benefit.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <p className={`${colors.textLight} leading-relaxed`}>{benefit.description}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>

            {/* Uses Tab */}
            {food.howToUse && food.howToUse.length > 0 && (
              <TabsContent value="uses" className="space-y-6">
                <Card className={`${colors.border} bg-white/80 backdrop-blur-sm`}>
                  <CardHeader className={`bg-gradient-to-r ${colors.bg} to-${food.color}-700 text-white rounded-t-lg`}>
                    <CardTitle className="text-2xl">How to Enjoy {food.name}</CardTitle>
                    <CardDescription className="text-white/80">
                      Delicious and nutritious ways to incorporate {food.name.toLowerCase()} into your diet
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    <ul className={`space-y-3 ${colors.textLight}`}>
                      {food.howToUse.map((use) => (
                        <li key={use} className="flex items-start gap-3">
                          <Leaf className={`h-5 w-5 ${colors.textLight} mt-0.5 flex-shrink-0`} />
                          <span>{use}</span>
                        </li>
                      ))}
                    </ul>

                    {food.cautions && food.cautions.length > 0 && (
                      <div className={`${colors.bgLight} p-4 rounded-lg ${colors.border} border mt-6`}>
                        <h4 className={`font-semibold ${colors.text} mb-3 flex items-center gap-2`}>
                          <AlertTriangle className="h-5 w-5" />
                          Important Considerations
                        </h4>
                        <ul className={`space-y-2 ${colors.textLight} text-sm`}>
                          {food.cautions.map((caution) => (
                            <li key={caution} className="flex items-start gap-2">
                              <span className={`${colors.textLight} mt-1`}>&#8226;</span>
                              <span>{caution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            )}
          </Tabs>
        </div>
      </section>

      {/* Related Foods */}
      <RelatedFoodsSection food={food} colors={colors} />

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className={`${colors.bgLight} rounded-xl p-8`}>
            <h2 className={`text-2xl font-serif font-light ${colors.text} mb-4`}>Discover More Healing Foods</h2>
            <p className="text-muted-foreground mb-6">
              Explore our complete A-Z guide of foods and their healing properties to support your health journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/resources/${letterLower}`}
                className={`inline-flex items-center ${colors.bg} hover:opacity-90 text-white px-6 py-3 rounded-full transition-opacity`}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Foods Starting with {food.letter}
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center bg-muted hover:bg-muted/80 text-foreground px-6 py-3 rounded-full transition-colors"
              >
                Explore All Foods
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
