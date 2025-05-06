"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, Clock, Calendar, Share2 } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function PowerUpWithPlantsPage() {
  const headerRef = useRef(null)
  const contentRef = useRef(null)
  const relatedRef = useRef(null)

  const isContentInView = useInView(contentRef, { once: true, amount: 0.1 })
  const isRelatedInView = useInView(relatedRef, { once: true, amount: 0.1 })

  // Generate current date for the article
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  // Related articles
  const relatedArticles = [
    {
      title: "Understanding Your Caloric Needs",
      image: "/balanced-diet-calculation.png",
      link: "/resources/calorie-counter",
    },
    {
      title: "Dark Chocolate: A Healthy Indulgence",
      image: "/dark-chocolate-still-life.png",
      link: "/resources/foods/dark-chocolate",
    },
    {
      title: "Meal Planning for Optimal Health",
      image: "/colorful-meal-planning.png",
      link: "/resources/meal-planning",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section ref={headerRef} className="relative w-full py-12 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <Link href="/resources" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Resources
            </Link>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">Nutrition</span>
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" /> {currentDate}
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" /> 4 min read
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-light tracking-tight text-gray-900 mb-4">
              Power Up with Plants: Fueling Your Health and Energy
            </h1>
            <p className="text-gray-600 mb-4">
              Discover the remarkable benefits of incorporating more plant-based foods into your daily diet
            </p>
            <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden mb-6">
              <Image
                src="/vibrant-plant-based-spread.png"
                alt="Colorful array of plant-based foods"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content Section */}
      <section ref={contentRef} className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="prose prose-green max-w-none">
                <p className="mb-6 text-gray-700 leading-relaxed">
                  In recent years, a growing body of research highlights the remarkable benefits of incorporating more
                  plant-based foods into our daily diets. From boosting energy levels to enhancing overall health, the
                  power of plants is becoming increasingly clear.
                </p>

                <h2 className="text-2xl font-serif font-light text-gray-900 mt-8 mb-4">Impact on Developing Brains</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  One significant area of impact is the developing brains of children and adolescents. Studies indicate
                  that diets high in ultra-processed foods (UPFs), which often displace nutrient-rich plant-based
                  options, can have detrimental effects. UPFs, characterized by their extensive industrial processing
                  and numerous artificial ingredients, constitute a large portion of the caloric intake for young
                  people, sometimes exceeding two-thirds of their daily consumption<sup>[1]</sup>. These foods are often
                  energy-dense yet nutrient-poor, lacking essential vitamins, minerals, antioxidants, and fiber.
                </p>

                <h2 className="text-2xl font-serif font-light text-gray-900 mt-8 mb-4">
                  Nutrient Density of Plant Foods
                </h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Conversely, plant-based foods are packed with these vital nutrients. Fruits, vegetables, whole grains,
                  legumes, nuts, and seeds provide sustained energy release thanks to their complex carbohydrates and
                  fiber. The antioxidants found abundantly in plant foods help protect our cells from damage,
                  contributing to long-term health<sup>[1]</sup>. Furthermore, many plant-based sources are rich in
                  essential vitamins and minerals crucial for various bodily functions, including energy production and
                  cognitive function.
                </p>

                <h2 className="text-2xl font-serif font-light text-gray-900 mt-8 mb-4">
                  Food and the Brain's Reward System
                </h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Even when considering the complex relationship between food and the brain's reward system,
                  understanding the role of whole, plant-based foods is key. While sugary, ultra-processed items can
                  trigger immediate pleasure responses, these are often followed by energy crashes and contribute to
                  unhealthy eating patterns<sup>[2]</sup>. In contrast, the sustained energy and nutritional density of
                  plant-based meals can help stabilize blood sugar levels and provide a more consistent source of fuel
                  for both the body and the brain.
                </p>

                <h2 className="text-2xl font-serif font-light text-gray-900 mt-8 mb-4">
                  Simple Steps to Incorporate More Plants
                </h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Making simple swaps, like choosing whole fruits over sugary snacks or adding legumes to meals for
                  extra protein and fiber, can be a powerful step towards improved health and sustained energy.
                  Embracing a more plant-centered approach to eating offers a delicious and effective way to power up
                  your life.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mt-8 mb-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Sources</h3>
                  <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700">
                    <li>
                      <a
                        href="https://www.bhf.org.uk/informationsupport/heart-matters-magazine/news/behind-the-headlines/ultra-processed-foods"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:underline"
                      >
                        British Heart Foundation: Ultra-processed foods
                      </a>
                    </li>
                    <li>Research on food reward systems and nutritional impact on brain function</li>
                  </ol>
                </div>

                <div className="flex items-center justify-between mt-12 pt-6 border-t border-gray-200">
                  <p className="text-gray-600">Share this article:</p>
                  <div className="flex gap-4">
                    <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                      <Share2 className="h-5 w-5 text-gray-600" />
                      <span className="sr-only">Share</span>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="bg-green-50 border-0 mb-8">
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-gray-900 mb-4">NxHealth Insight</h3>
                    <p className="text-gray-700 mb-6">
                      Our nutrition experts recommend starting with small changes - try adding one extra serving of
                      vegetables to your meals each day, or designating one day a week as "plant-based day."
                    </p>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full">
                      Get Personalized Advice
                    </Button>
                  </div>
                </Card>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Related Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href="/resources/search?q=plant-based"
                      className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-green-100 hover:text-green-700 transition-colors"
                    >
                      Plant-Based
                    </Link>
                    <Link
                      href="/resources/search?q=nutrition"
                      className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-green-100 hover:text-green-700 transition-colors"
                    >
                      Nutrition
                    </Link>
                    <Link
                      href="/resources/search?q=energy"
                      className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-green-100 hover:text-green-700 transition-colors"
                    >
                      Energy
                    </Link>
                    <Link
                      href="/resources/search?q=brain+health"
                      className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-green-100 hover:text-green-700 transition-colors"
                    >
                      Brain Health
                    </Link>
                    <Link
                      href="/resources/search?q=whole+foods"
                      className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-green-100 hover:text-green-700 transition-colors"
                    >
                      Whole Foods
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section ref={relatedRef} className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isRelatedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-light text-gray-900 mb-8">Related Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isRelatedInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Link href={article.link} className="block group">
                    <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-green-700 transition-colors">
                      {article.title}
                    </h3>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8">
                <Link href="/resources">Explore More Health Resources</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
