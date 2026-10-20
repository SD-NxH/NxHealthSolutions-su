"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, Clock, Calendar, Share2, Sparkles, Zap, Heart, Bone, Activity, ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function APowerfulSeedOfTruthPage() {
  const contentRef = useRef(null)
  const relatedRef = useRef(null)

  const isContentInView = useInView(contentRef, { once: true, amount: 0.1 })
  const isRelatedInView = useInView(relatedRef, { once: true, amount: 0.1 })

  const relatedArticles = [
    {
      title: "A Quiet Realization About Health",
      image: "/images/articles/quiet-realization.jpg",
      link: "/resources/articles/quiet-realization-about-health",
      category: "Quality Life",
    },
    {
      title: "Oh Gosh, Protein Was Never The Problem",
      image: "/images/articles/protein-problem.jpg",
      link: "/resources/articles/protein-was-never-the-problem",
      category: "Quality Life",
    },
    {
      title: "A Practical Way to Think About Food (Without Diet Culture)",
      image: "/images/articles/practical-food.jpg",
      link: "/resources/articles/practical-way-to-think-about-food",
      category: "Quality Life",
    },
  ]

  const magnesiumBenefits = [
    {
      icon: Zap,
      title: "Energy Production (ATP)",
      description: "Magnesium is required for the conversion of food into ATP, the primary energy molecule of your cells. Low magnesium levels often show up as fatigue and poor energy regulation.",
    },
    {
      icon: Sparkles,
      title: "Nervous System Balance",
      description: "Magnesium helps regulate NMDA receptors in the brain, which influence memory, learning, and neurological stability. It also helps calm the nervous system and support stress resilience.",
    },
    {
      icon: Heart,
      title: "Muscle Relaxation",
      description: "Magnesium works in balance with calcium. Calcium helps muscles contract, while magnesium allows muscles to relax. This relationship supports healthy muscle function and heart rhythm.",
    },
    {
      icon: Bone,
      title: "Bone Health",
      description: "About 60% of magnesium in the body is stored in bone tissue. It helps regulate calcium and vitamin D, both critical for maintaining bone density.",
    },
    {
      icon: Activity,
      title: "Blood Sugar Regulation",
      description: "Magnesium plays a major role in glucose metabolism and insulin sensitivity, helping prevent the sudden energy crashes many people experience after meals.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[#f8faf5]">
      {/* Hero Section - Calm pondering colors */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/articles/powerful-seed-truth.jpg"
            alt="Chia seeds - a powerful seed of truth"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2d4a3e]/90 via-[#2d4a3e]/50 to-transparent" />
        </div>

        <div className="relative h-full container px-4 md:px-6 flex flex-col justify-end pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <Link
              href="/resources/articles"
              className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Articles
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-[#4a7c59] text-white px-4 py-1.5 rounded-full text-sm font-medium">
                Nutrition
              </span>
              <span className="flex items-center text-white/80 text-sm">
                <Calendar className="h-4 w-4 mr-1.5" /> April 7, 2026
              </span>
              <span className="flex items-center text-white/80 text-sm">
                <Clock className="h-4 w-4 mr-1.5" /> 8 min read
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight text-balance">
              A Powerful Seed of Truth
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-6 text-pretty">
              Discover why chia seeds might be the most underrated source of magnesium — and why magnesium matters more than you think.
            </p>
            <p className="text-white/80 text-lg">
              By <span className="font-medium text-white">Eric Johnson, M.Sc</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section ref={contentRef} className="py-12 bg-[#f8faf5]">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8"
            >
              <div className="prose prose-lg max-w-none">
                {/* Introduction */}
                <div className="bg-[#e8f0e5] border-l-4 border-[#4a7c59] p-6 rounded-r-lg mb-8">
                  <p className="text-xl text-[#2d4a3e] font-medium italic mb-0">
                    You&apos;ll hear people claim magnesium can improve sleep, calm the nervous system, boost energy, and even regulate blood sugar. Whenever one nutrient gets that much credit, it&apos;s fair to pause and ask: Is this real biology... or just another supplement trend?
                  </p>
                </div>

                <p className="text-[#4a5d52] leading-relaxed mb-6">
                  The interesting part is that some of the best sources of magnesium aren&apos;t expensive supplements at all. One of them is a tiny seed that has been used for centuries.
                </p>

                <p className="text-3xl font-bold text-[#2d4a3e] text-center my-8">Chia seeds.</p>

                {/* Chia Seeds Section */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#d4e5d0] my-12">
                  <h2 className="text-2xl font-bold text-[#2d4a3e] mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-[#4a7c59] rounded-full flex items-center justify-center">
                      <Sparkles className="h-5 w-5 text-white" />
                    </span>
                    Chia Seeds: The Magnesium Powerhouse
                  </h2>
                  <p className="text-[#4a5d52] leading-relaxed mb-4">
                    For thousands of years, chia seeds (Salvia hispanica) were considered a foundational food by the Aztec and Mayan civilizations. Warriors carried them during long journeys because they provided sustained energy, hydration, and endurance.
                  </p>
                  <p className="text-[#4a5d52] leading-relaxed">
                    Today, chia seeds are often praised for their fiber and Omega-3 content. But one of their most powerful benefits is often overlooked: <strong className="text-[#2d4a3e]">Magnesium</strong>.
                  </p>
                  <p className="text-lg font-medium text-[#4a7c59] mt-4">
                    And magnesium is one of the most important minerals for human health.
                  </p>
                </div>

                {/* Magnesium Section */}
                <h2 className="text-3xl font-bold text-[#2d4a3e] mt-12 mb-6">Magnesium: The Spark Plug of Life</h2>
                
                <div className="bg-[#e8f0e5] rounded-xl p-6 mb-8">
                  <p className="text-lg text-[#2d4a3e] font-medium mb-0">
                    Chia seeds contain approximately <strong>335 mg of magnesium per 100 grams</strong>. Just two tablespoons (about 28 g) can provide roughly <strong>25–30% of your daily magnesium needs</strong>.
                  </p>
                </div>

                <p className="text-[#4a5d52] leading-relaxed mb-8">
                  Magnesium is involved in over 300 enzymatic reactions in the body, which is why many physiologists refer to it as the spark plug of the biological engine. Without adequate magnesium, many core functions begin to slow down.
                </p>

                {/* Benefits Grid */}
                <h3 className="text-2xl font-bold text-[#2d4a3e] mb-6">Key Roles of Magnesium</h3>
                <div className="grid gap-4 mb-12">
                  {magnesiumBenefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-xl p-6 border border-[#d4e5d0] hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#4a7c59]/10 rounded-xl flex items-center justify-center shrink-0">
                          <benefit.icon className="h-6 w-6 text-[#4a7c59]" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-[#2d4a3e] mb-2">{benefit.title}</h4>
                          <p className="text-[#4a5d52] text-sm leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Nutritional Profile */}
                <h2 className="text-3xl font-bold text-[#2d4a3e] mt-12 mb-6">The Nutritional Profile of Chia Seeds</h2>
                
                <p className="text-[#4a5d52] leading-relaxed mb-6">
                  Chia seeds are not just a mineral source. They provide a powerful combination of macronutrients that support metabolic stability.
                </p>

                <div className="bg-white rounded-xl p-6 border border-[#d4e5d0] mb-8">
                  <h4 className="text-lg font-bold text-[#2d4a3e] mb-4">Key Nutritional Characteristics:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#4a7c59] rounded-full" />
                      <span className="text-[#4a5d52]">Healthy fats, including Omega-3 ALA</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#4a7c59] rounded-full" />
                      <span className="text-[#4a5d52]">Moderate plant-based protein</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#4a7c59] rounded-full" />
                      <span className="text-[#4a5d52]">Extremely high fiber content</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#4a7c59]/10 border-l-4 border-[#4a7c59] p-6 rounded-r-lg mb-8">
                  <p className="text-[#2d4a3e] font-medium mb-0">
                    <strong>The &quot;Gel Effect&quot;:</strong> When chia seeds absorb water, they can hold up to 12 times their weight in liquid. This forms a mucilaginous gel that slows digestion and the conversion of carbohydrates into glucose. The result is more stable energy and improved satiety.
                  </p>
                </div>

                {/* Practical Ways */}
                <h2 className="text-3xl font-bold text-[#2d4a3e] mt-12 mb-6">Practical Ways to Use Chia Seeds</h2>
                
                <p className="text-[#4a5d52] leading-relaxed mb-8">
                  Chia seeds are versatile and easy to incorporate into daily meals. Here are a few effective ways to use them:
                </p>

                {/* Recipe Cards */}
                <div className="space-y-6 mb-12">
                  <Card className="bg-white border-[#d4e5d0] overflow-hidden">
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-[#2d4a3e] mb-2">Chia Pudding (Best for Fullness)</h4>
                      <p className="text-[#4a7c59] text-sm mb-4 italic">I use this with my oats!</p>
                      <div className="bg-[#f8faf5] rounded-lg p-4">
                        <p className="text-sm font-medium text-[#2d4a3e] mb-2">Mix:</p>
                        <ul className="text-[#4a5d52] space-y-1 text-sm">
                          <li>• 3 tablespoons chia seeds</li>
                          <li>• 1 cup almond or coconut milk</li>
                        </ul>
                        <p className="text-[#4a5d52] text-sm mt-3">
                          Let the mixture sit overnight in the refrigerator. The seeds will expand and soften, making the nutrients easier to absorb.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-white border-[#d4e5d0] overflow-hidden">
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-[#2d4a3e] mb-2">The &quot;Internal Hydration Drink&quot;</h4>
                      <div className="bg-[#f8faf5] rounded-lg p-4">
                        <p className="text-sm font-medium text-[#2d4a3e] mb-2">Add:</p>
                        <ul className="text-[#4a5d52] space-y-1 text-sm">
                          <li>• 1 tablespoon chia seeds</li>
                          <li>• A large glass of water</li>
                          <li>• Squeeze of lemon</li>
                          <li>• Small pinch of mineral salt</li>
                        </ul>
                        <p className="text-[#4a5d52] text-sm mt-3">
                          This creates a natural hydration drink that provides fiber, minerals, and sustained fluid absorption.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-white border-[#d4e5d0] overflow-hidden">
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-[#2d4a3e] mb-2">Smoothie Stabilizer</h4>
                      <p className="text-[#4a5d52] text-sm">
                        Add one tablespoon to your smoothie. The fiber and fats help slow the absorption of fruit sugars, lowering the overall glycemic impact of the drink.
                      </p>
                    </div>
                  </Card>

                  <Card className="bg-white border-[#d4e5d0] overflow-hidden">
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-[#2d4a3e] mb-2">Vegan Egg Substitute</h4>
                      <div className="bg-[#f8faf5] rounded-lg p-4">
                        <p className="text-sm font-medium text-[#2d4a3e] mb-2">Mix:</p>
                        <ul className="text-[#4a5d52] space-y-1 text-sm">
                          <li>• 1 tablespoon ground chia seeds</li>
                          <li>• 3 tablespoons water</li>
                        </ul>
                        <p className="text-[#4a5d52] text-sm mt-3">
                          Let sit for five minutes to form a gel. This mixture can replace eggs in many baking recipes.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-white border-[#d4e5d0] overflow-hidden">
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-[#2d4a3e] mb-2">Nutrient Bowl Topping</h4>
                      <p className="text-[#4a5d52] text-sm mb-2">Sprinkle dry seeds over meals such as:</p>
                      <div className="flex flex-wrap gap-2">
                        {["Quinoa bowls", "Oatmeal", "Yogurt", "Salads"].map((item) => (
                          <span key={item} className="bg-[#4a7c59]/10 text-[#4a7c59] px-3 py-1 rounded-full text-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                      <p className="text-[#4a5d52] text-sm mt-3">
                        This adds texture while boosting fiber, healthy fats, and magnesium.
                      </p>
                    </div>
                  </Card>
                </div>

                {/* A Small Seed */}
                <h2 className="text-3xl font-bold text-[#2d4a3e] mt-12 mb-6">A Small Seed With a Big Role</h2>
                
                <p className="text-[#4a5d52] leading-relaxed mb-6">
                  Many people struggle with fatigue, muscle tension, poor sleep, and blood sugar swings without realizing they may be consuming insufficient magnesium.
                </p>

                <p className="text-[#4a5d52] leading-relaxed mb-6">
                  Adding magnesium-rich foods like chia seeds can help support:
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {["Stable energy", "Nervous system resilience", "Muscle recovery", "Metabolic health"].map((benefit) => (
                    <div key={benefit} className="bg-white rounded-lg p-4 border border-[#d4e5d0] flex items-center gap-3">
                      <span className="w-3 h-3 bg-[#4a7c59] rounded-full shrink-0" />
                      <span className="text-[#2d4a3e] font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[#4a5d52] leading-relaxed mb-8">
                  Sometimes the most powerful health solutions are also the simplest. A few tablespoons of chia seeds each day can help ensure that your biological spark plugs stay firing. And when your system has the nutrients it needs, the body tends to do what it was designed to do.
                </p>

                {/* Final Thought */}
                <div className="bg-gradient-to-br from-[#4a7c59] to-[#2d4a3e] p-8 rounded-2xl my-12 text-white">
                  <h2 className="text-3xl font-bold mb-4">Repair. Regulate. Perform.</h2>
                  <p className="text-lg text-white/90 leading-relaxed mb-0">
                    Good Day.
                  </p>
                </div>

                {/* CTA to Chia Seeds Page */}
                <Card className="bg-[#e8f0e5] border-[#4a7c59] border-2 p-8 my-12">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#2d4a3e] mb-2">Explore Chia Seeds In-Depth</h3>
                      <p className="text-[#4a5d52] mb-4">
                        Discover more about chia seeds, including detailed nutritional information, health benefits, and more recipes in our comprehensive food guide.
                      </p>
                      <Button asChild className="bg-[#4a7c59] hover:bg-[#3d6b4a] text-white">
                        <Link href="/resources/foods/chia-seeds" className="inline-flex items-center gap-2">
                          Learn More About Chia Seeds
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>

                {/* Share Section */}
                <div className="flex items-center justify-between mt-12 pt-8 border-t border-[#d4e5d0]">
                  <p className="text-[#4a5d52] font-medium">Share this article:</p>
                  <div className="flex gap-3">
                    <Button variant="outline" size="icon" className="rounded-full border-[#d4e5d0] bg-transparent hover:bg-[#e8f0e5]">
                      <Share2 className="h-5 w-5 text-[#4a7c59]" />
                      <span className="sr-only">Share</span>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                <Card className="bg-white border-[#d4e5d0] overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#2d4a3e] mb-3">About the Author</h3>
                    <p className="text-[#4a5d52] mb-4">
                      <strong>Eric Johnson, M.Sc</strong> is a health science and nutrition expert dedicated to making wellness accessible to everyone through education and advocacy.
                    </p>
                    <Button asChild className="w-full bg-[#4a7c59] hover:bg-[#3d6b4a] text-white">
                      <Link href="/about">Learn More About Coach J</Link>
                    </Button>
                  </div>
                </Card>

                <Card className="bg-[#e8f0e5] border-[#d4e5d0] p-6">
                  <h3 className="text-lg font-bold text-[#2d4a3e] mb-4">Article Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {["chia seeds", "magnesium", "nutrition", "energy", "plant-based"].map((tag) => (
                      <span
                        key={tag}
                        className="bg-white px-3 py-1.5 rounded-full text-sm text-[#4a5d52] border border-[#d4e5d0] hover:bg-[#f8faf5] transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>

                {/* Quick Link to Chia Seeds */}
                <Card className="bg-gradient-to-br from-[#4a7c59] to-[#2d4a3e] text-white border-0">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">Want to Learn More?</h3>
                    <p className="mb-6 text-white/90">
                      Explore our complete guide to chia seeds with nutritional facts, benefits, and recipes.
                    </p>
                    <Button asChild className="w-full bg-white text-[#2d4a3e] hover:bg-white/90">
                      <Link href="/resources/foods/chia-seeds">
                        View Chia Seeds Guide
                      </Link>
                    </Button>
                  </div>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section ref={relatedRef} className="py-16 bg-[#e8f0e5]">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isRelatedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d4a3e] mb-8">Continue Reading</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isRelatedInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Link href={article.link} className="block group">
                    <Card className="overflow-hidden border-[#d4e5d0] bg-white hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <span className="text-xs font-medium text-[#4a7c59] mb-2 block">{article.category}</span>
                        <h3 className="text-lg font-semibold text-[#2d4a3e] group-hover:text-[#4a7c59] transition-colors">
                          {article.title}
                        </h3>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
