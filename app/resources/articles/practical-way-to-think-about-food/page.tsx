"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, Clock, Calendar, Share2 } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function PracticalWayToThinkAboutFoodPage() {
  const contentRef = useRef(null)
  const relatedRef = useRef(null)

  const isContentInView = useInView(contentRef, { once: true, amount: 0.1 })
  const isRelatedInView = useInView(relatedRef, { once: true, amount: 0.1 })

  const relatedArticles = [
    {
      title: "Your Food Is Either A Tool or a Liability",
      image: "/images/articles/food-tool-liability.jpg",
      link: "/resources/articles/food-is-a-tool-or-liability",
      category: "Quality Life",
    },
    {
      title: "Stop Quitting Cold Turkey, Do This Instead",
      image: "/images/articles/cold-turkey.jpg",
      link: "/resources/articles/stop-quitting-cold-turkey",
      category: "Quality Life",
    },
    {
      title: "The TRUTH Doesn't Go Viral (But It Works)",
      image: "/images/articles/truth-viral.jpg",
      link: "/resources/articles/truth-doesnt-go-viral",
      category: "Quality Life",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/articles/practical-food.jpg"
            alt="A practical way to think about food"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
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
              <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium">
                Quality Life
              </span>
              <span className="flex items-center text-white/80 text-sm">
                <Calendar className="h-4 w-4 mr-1.5" /> March 15, 2026
              </span>
              <span className="flex items-center text-white/80 text-sm">
                <Clock className="h-4 w-4 mr-1.5" /> 7 min read
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight text-balance">
              A Practical Way to Think About Food (Without Diet Culture)
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-6 text-pretty">
              {'"'}Diet{'"'} isn&apos;t a trend. Diet is simply what you eat to nourish your body.
            </p>
            <p className="text-white/80 text-lg">
              By <span className="font-medium text-white">Eric Johnson, M.Sc</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section ref={contentRef} className="py-12 bg-background">
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
                <div className="bg-accent/10 border-l-4 border-primary p-6 rounded-r-lg mb-8">
                  <p className="text-xl text-foreground font-medium italic mb-0">
                    Let&apos;s clear something up first: {'"'}Diet{'"'} isn&apos;t a trend. Diet is simply what you eat to nourish your body. The problem isn&apos;t food itself — it&apos;s how disconnected we&apos;ve become from it.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">The Real Issue with Ultra-Processed Foods</h2>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Most ultra-processed foods aren&apos;t just {'"'}unhealthy.{'"'} They&apos;re engineered to override your body&apos;s signals.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  They&apos;re packed with:
                </p>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Super-added sugars</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Unhealthy, industrial fats</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Artificial colors and additives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Preservatives designed for extreme shelf life</span>
                  </li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  These {'"'}frankenstein foods{'"'} force your body to work overtime and over time (pun intended) are linked to:
                </p>

                <ul className="space-y-2 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-destructive mt-2 shrink-0" />
                    <span className="text-muted-foreground">Low energy and brain fog</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-destructive mt-2 shrink-0" />
                    <span className="text-muted-foreground">Metabolic disease</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-destructive mt-2 shrink-0" />
                    <span className="text-muted-foreground">Cardiovascular issues</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-destructive mt-2 shrink-0" />
                    <span className="text-muted-foreground">Premature aging</span>
                  </li>
                </ul>

                <div className="my-12 py-8 border-y-2 border-primary/20">
                  <blockquote className="text-2xl md:text-3xl font-light text-center text-foreground italic">
                    {'"'}If a food can sit on a shelf for years, your body has to pay the price for processing it.{'"'}
                  </blockquote>
                </div>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">What Your Body Actually Needs</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Your body doesn&apos;t need extremes. It needs balance and quality:
                </p>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Protein (not only from meat)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Healthy fats</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Carbohydrates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Vitamins and minerals</span>
                  </li>
                </ul>

                <Card className="bg-primary/5 border-primary/20 p-8 my-12">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Fat Isn&apos;t the Enemy</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The real problem is trans fats and hydrogenated oils. Those are the {'"'}criminals.{'"'}
                  </p>
                  <p className="text-lg font-medium text-foreground mb-0">
                    When reading labels, keep it simple: short ingredient lists, words you recognize, and avoid vague terms like {'"'}and/or{'"'} — if the label looks unsure, that&apos;s your cue to get out of there!
                  </p>
                </Card>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">A Realistic Note on Meat</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  People will continue to eat meat — and that&apos;s reality. What matters is awareness. Much of today&apos;s commercial meat comes from animals that are:
                </p>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Heavily medicated</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Fed pesticide-treated feed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Raised in chronically stressed environments</span>
                  </li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  Like produce, meat loses quality quickly after harvest. Freshness matters more than most people realize. I am not looking to raise fear, but rather raise your chances in making informed decisions.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">Change Works Better When You Add Before You Delete</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  One of the biggest mistakes people make is trying to remove everything at once. That&apos;s not how humans work.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Instead:
                </p>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Add more plants</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Add fruits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Add whole foods</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Add healthy fats</span>
                  </li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  As your body starts receiving what it needs, unhealthy cravings naturally lose their grip.
                </p>

                <div className="bg-accent/10 p-6 rounded-lg mb-8">
                  <p className="text-lg font-medium text-foreground mb-0">
                    Be aware: Highly processed foods can create real withdrawals. That&apos;s normal. It doesn&apos;t mean you&apos;re failing — it means your body is recalibrating.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">Pay Attention to Your Own Data</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Your body gives feedback every day. Start noticing:
                </p>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Your energy levels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Digestion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Mental clarity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">How you feel when you wake up</span>
                  </li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  You research your car. Your phone. Your clothes. Your body deserves the same level of attention.
                </p>

                {/* Final Thought */}
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl my-12 border border-primary/20">
                  <h2 className="text-3xl font-bold text-foreground mb-4">One Solution to Sit With</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Food should support your life, not control it.
                  </p>
                  <p className="text-lg font-medium text-foreground mb-0">
                    When nourishment improves, clarity follows. When clarity improves, quality of life follows.
                  </p>
                </div>

                {/* Share Section */}
                <div className="flex items-center justify-between mt-12 pt-8 border-t border-border">
                  <p className="text-muted-foreground font-medium">Share this article:</p>
                  <div className="flex gap-3">
                    <Button variant="outline" size="icon" className="rounded-full bg-transparent">
                      <Share2 className="h-5 w-5" />
                      <span className="sr-only">Share</span>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                <Card className="bg-card border-border overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">About the Author</h3>
                    <p className="text-muted-foreground mb-4">
                      <strong>Eric Johnson, M.Sc</strong> is a health science and nutrition expert dedicated to making wellness accessible to everyone through education and advocacy.
                    </p>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Link href="/about">Learn More About Coach J</Link>
                    </Button>
                  </div>
                </Card>

                <Card className="bg-muted/30 border-border p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Article Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {["quality life", "nutrition", "whole foods", "processed foods", "diet culture"].map((tag) => (
                      <span
                        key={tag}
                        className="bg-background px-3 py-1.5 rounded-full text-sm text-foreground border border-border hover:bg-accent transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>

                <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">More Health Solutions</h3>
                    <p className="mb-6 text-primary-foreground/90">
                      Stay connected for practical insights on building systems that support better health and a higher quality of life.
                    </p>
                    <Button asChild className="w-full bg-background text-foreground hover:bg-background/90">
                      <Link href="/resources/articles">
                        Browse Articles
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
      <section ref={relatedRef} className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isRelatedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Continue Reading</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isRelatedInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Link href={article.link} className="block group">
                    <Card className="overflow-hidden border-border hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <span className="text-xs font-medium text-primary mb-2 block">{article.category}</span>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
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
