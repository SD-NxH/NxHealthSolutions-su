"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, Clock, Calendar, Share2 } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function StopQuittingColdTurkeyPage() {
  const contentRef = useRef(null)
  const relatedRef = useRef(null)

  const isContentInView = useInView(contentRef, { once: true, amount: 0.1 })
  const isRelatedInView = useInView(relatedRef, { once: true, amount: 0.1 })

  const relatedArticles = [
    {
      title: "A Practical Way to Think About Food (Without Diet Culture)",
      image: "/images/articles/practical-food.jpg",
      link: "/resources/articles/practical-way-to-think-about-food",
      category: "Quality Life",
    },
    {
      title: "Your Food Is Either A Tool or a Liability",
      image: "/images/articles/food-tool-liability.jpg",
      link: "/resources/articles/food-is-a-tool-or-liability",
      category: "Quality Life",
    },
    {
      title: "How a Silly Game Could Help",
      image: "/images/articles/silly-game.jpg",
      link: "/resources/articles/how-a-silly-game-could-help",
      category: "Quality Life",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/articles/cold-turkey.jpg"
            alt="Stop quitting cold turkey"
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
                <Calendar className="h-4 w-4 mr-1.5" /> March 5, 2026
              </span>
              <span className="flex items-center text-white/80 text-sm">
                <Clock className="h-4 w-4 mr-1.5" /> 6 min read
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight text-balance">
              Stop Quitting Cold Turkey, Do This Instead
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-6 text-pretty">
              Most diet changes fail not because of discipline issues — it&apos;s pure shock.
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
                    Let&apos;s talk about why most diet changes fail. It&apos;s not a discipline issue. It&apos;s pure shock.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">Stop Quitting {'"'}Cold Turkey{'"'}</h2>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  When you abruptly cut things like:
                </p>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Coffee</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Sugar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Ultra-processed foods</span>
                  </li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Your body reacts. Headaches. Cravings. Mood swings. Fatigue.
                </p>

                <div className="my-12 py-8 border-y-2 border-primary/20">
                  <blockquote className="text-2xl md:text-3xl font-light text-center text-foreground italic">
                    {'"'}That&apos;s not weakness. That&apos;s your body going through withdrawal.{'"'}
                  </blockquote>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  Instead of deleting everything overnight... Add first.
                </p>

                <Card className="bg-primary/5 border-primary/20 p-8 my-12">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Add First</h3>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">More plants</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">More fiber</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">More water</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">More mineral-rich foods</span>
                    </li>
                  </ul>
                  <p className="text-lg font-medium text-foreground mb-0">
                    Let your body level out before you remove what&apos;s harming you. Stability &gt; shock.
                  </p>
                </Card>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">The 14-Day Rule</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Here&apos;s something most people don&apos;t know: Taste buds shift every 10–14 days.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  That means the first week feels awkward. The second week feels normal.
                </p>

                <div className="bg-accent/10 p-6 rounded-lg mb-8">
                  <p className="text-lg font-medium text-foreground mb-0">
                    If you quit on day five, you never reach adaptation. Consistency for two weeks changes what you crave, what tastes {'"'}good,{'"'} and how your body feels. Give your biology time to catch up!
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">A Practical System: Beat Convenience</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Modern life is engineered for convenience. Convenience creates:
                </p>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-destructive mt-2 shrink-0" />
                    <span className="text-muted-foreground">Inflammation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-destructive mt-2 shrink-0" />
                    <span className="text-muted-foreground">Insulin resistance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-destructive mt-2 shrink-0" />
                    <span className="text-muted-foreground">Low circulation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-destructive mt-2 shrink-0" />
                    <span className="text-muted-foreground">Energy crashes</span>
                  </li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  So here&apos;s the move: Batch cook once. 30 intentional minutes can create:
                </p>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Chili</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Soup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Roasted vegetables</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Protein anchors</span>
                  </li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  Freeze your extra portions. Future you won&apos;t default to drive-thru guilt.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">Increase Plant Volume (Without Going Extreme)</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  You don&apos;t need a diet war. You need density. Add onions, peppers, carrots, apples, greens to traditional meals.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  More volume = More nutrients = More fullness = Fewer cravings.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">Address Deficiencies</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Nearly everyone is walking around slightly deficient in something. High-calorie, low-nutrient food is everywhere.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Low energy? Poor night vision? Brain fog? Track your intake for a week. Not to obsess. But to observe.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  Energy problems often start with nutrient gaps.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">Redefine Health Care</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  If nutrition, strength training, sleep, and stress management were prioritized...
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  Healthcare would mostly handle emergencies. Car crashes. Acute trauma. Not preventable chronic disease. That shift starts with individuals choosing systems over convenience!
                </p>

                {/* Final Thought */}
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl my-12 border border-primary/20">
                  <h2 className="text-3xl font-bold text-foreground mb-4">One Action Today</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Don&apos;t wait for next Monday. Don&apos;t wait for next month.
                  </p>
                  <p className="text-lg font-medium text-foreground mb-0">
                    Add one valuable health behavior today. Not extreme. Not dramatic. Just intentional. Better health is built in layers.
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
                    {["quality life", "habit change", "nutrition", "meal prep", "wellness"].map((tag) => (
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
                    <h3 className="text-xl font-bold mb-3">Start Building Today</h3>
                    <p className="mb-6 text-primary-foreground/90">
                      Ready to build sustainable health habits? Explore more resources and practical guidance.
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
