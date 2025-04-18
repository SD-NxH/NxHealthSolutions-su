"use client"

import { useRef } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, Clock, Calendar, Share2 } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function ArticlePage() {
  const searchParams = useSearchParams()
  const title = searchParams.get("title") || "Health Article"
  const source = searchParams.get("source") || "Health Source"
  const content = searchParams.get("content") || "No content available."

  // Generate a longer article content based on the snippet
  const fullContent = content
    .repeat(5)
    .split(". ")
    .map((sentence) => sentence + ".")
    .join("\n\n")

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

  // Generate related articles based on the title
  const relatedArticles = [
    {
      title: `Related: ${title.split(" ").slice(0, 3).join(" ")} Benefits`,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: `How to Incorporate ${title.split(" ").slice(0, 2).join(" ")} Daily`,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: `${title.split(" ").slice(0, 2).join(" ")} Research Updates`,
      image: "/placeholder.svg?height=200&width=300",
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
            <Link
              href="/resources/search"
              className="inline-flex items-center text-green-600 hover:text-green-700 mb-6"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Search Results
            </Link>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">Health Resource</span>
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" /> {currentDate}
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" /> 5 min read
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-light tracking-tight text-gray-900 mb-4">{title}</h1>
            <p className="text-gray-600 mb-4">
              Curated from <span className="font-medium">{source}</span> and enhanced with NxHealth insights
            </p>
            <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden mb-6">
              <Image src="/placeholder.svg?height=600&width=1200" alt={title} fill className="object-cover" />
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
                {fullContent.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                <h2 className="text-2xl font-serif font-light text-gray-900 mt-12 mb-6">Key Takeaways</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="inline-block h-6 w-6 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-3 text-center">
                      1
                    </span>
                    <span>Regular incorporation of these principles can lead to significant health improvements.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-6 w-6 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-3 text-center">
                      2
                    </span>
                    <span>
                      Consult with a healthcare professional before making major changes to your health regimen.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-6 w-6 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-3 text-center">
                      3
                    </span>
                    <span>Consistency is key - small, sustainable changes often yield the best long-term results.</span>
                  </li>
                </ul>

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
                      Our health experts recommend combining this information with a personalized approach that takes
                      into account your unique health profile and goals.
                    </p>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full">
                      Get Personalized Advice
                    </Button>
                  </div>
                </Card>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Related Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {title.split(" ").map((word, index) => (
                      <Link
                        key={index}
                        href={`/resources/search?q=${encodeURIComponent(word)}`}
                        className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-green-100 hover:text-green-700 transition-colors"
                      >
                        {word}
                      </Link>
                    ))}
                    <Link
                      href={`/resources/search?q=health+benefits`}
                      className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-green-100 hover:text-green-700 transition-colors"
                    >
                      Health Benefits
                    </Link>
                    <Link
                      href={`/resources/search?q=nutrition`}
                      className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-green-100 hover:text-green-700 transition-colors"
                    >
                      Nutrition
                    </Link>
                    <Link
                      href={`/resources/search?q=wellness`}
                      className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-green-100 hover:text-green-700 transition-colors"
                    >
                      Wellness
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
                  <Link href={`/resources/search?q=${encodeURIComponent(article.title)}`} className="block group">
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
                Explore More Health Resources
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
