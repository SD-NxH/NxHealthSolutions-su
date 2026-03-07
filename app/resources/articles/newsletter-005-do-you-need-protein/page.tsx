"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, Clock, Calendar, Share2, User } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function Newsletter005ProteinPage() {
  const contentRef = useRef(null)
  const relatedRef = useRef(null)

  const isContentInView = useInView(contentRef, { once: true, amount: 0.1 })
  const isRelatedInView = useInView(relatedRef, { once: true, amount: 0.1 })

  const relatedArticles = [
    {
      title: "Newsletter 006 — The Quality Life Series Has Begun",
      image: "/images/articles/quality-life-series.png",
      link: "/resources/articles/newsletter-006-quality-life-series-has-begun",
      category: "Blog",
    },
    {
      title: "Why Diets Keep Failing (and What Actually Works Long-Term)",
      image: "/images/articles/diets-failing.jpg",
      link: "/resources/articles/why-diets-fail-what-actually-works",
      category: "Nutrition",
    },
    {
      title: "The Power of Plant-Based Eating",
      image: "/colorful-fruits-vegetables.png",
      link: "/resources/articles/power-up-with-plants",
      category: "Nutrition",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/articles/do-you-need-protein.jpg"
            alt="Stop Interrupting It - Protein Discussion"
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
                Blog
              </span>
              <span className="flex items-center text-white/80 text-sm">
                <Calendar className="h-4 w-4 mr-1.5" /> February 27, 2026
              </span>
              <span className="flex items-center text-white/80 text-sm">
                <Clock className="h-4 w-4 mr-1.5" /> 6 min read
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight text-balance">
              {"Newsletter 005 — Do I really need \"Protein\"?"}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-6 text-pretty">
              You need amino acids. Protein is just the delivery system.
            </p>
            <p className="text-white/80 text-lg flex items-center gap-2">
              <User className="h-4 w-4" />
              By <span className="font-medium text-white">Eric Johnson, M.Sc</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section ref={contentRef} className="py-12 md:py-16 bg-background">
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
                <p className="text-xl text-foreground leading-relaxed mb-8">
                  Close your eyes for a second. Picture a lion in the Serengeti. There{"'"}s no grill. No seasoning. No protein bar. Just food as is, or should I say {"\""}as it lives{"\""}.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  So here{"'"}s the question that sparked this week{"'"}s video:
                </p>

                <div className="bg-accent/10 border-l-4 border-primary p-6 rounded-r-lg mb-8">
                  <p className="text-xl text-foreground font-medium mb-0">
                    Why do humans need to do so much to make meat {"\""}work{"\""} for them?
                    <br />
                    And what does that actually say about protein?
                  </p>
                </div>

                {/* Section: Let's clear something up */}
                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">{"Let's clear something up"}</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  You don{"'"}t technically {"\""}need protein.{"\""}
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  <strong className="text-foreground">You need amino acids.</strong>
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Protein is just the delivery system.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Your body breaks food down into amino acids... then rebuilds it into you.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-3">
                  So the real question isn{"'"}t:
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  {"\""}Is protein a myth?{"\""}
                </p>

                <p className="text-muted-foreground leading-relaxed mb-3">
                  It{"'"}s:
                </p>

                <div className="my-8 py-6 border-y-2 border-primary/20">
                  <p className="text-2xl font-medium text-center text-foreground">
                    Are you getting high-quality amino acids without wrecking your digestion, energy, or lifestyle?
                  </p>
                </div>

                {/* Section: The internet is tired */}
                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">The internet is tired</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  The protein wars are exhausting.
                </p>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground">Gorillas eat plants.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground">Humans aren{"'"}t gorillas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground">Fitness influencers push 40-ingredient shakes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground">Protein bars are basically candy with branding.</span>
                  </li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  <strong className="text-foreground">The biggest problem isn{"'"}t protein.</strong>
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  It{"'"}s ultra-processed {"\""}fitness food{"\""} pretending to be infrastructure.
                </p>

                <div className="bg-destructive/10 border border-destructive/20 p-6 rounded-lg mb-8">
                  <p className="text-lg text-foreground font-medium mb-0">
                    That{"'"}s marketing. Not systems.
                  </p>
                </div>

                {/* Section: Here's the actual framework */}
                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">{"Here's the actual framework"}</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Instead of arguing online, do this:
                </p>

                <Card className="bg-primary/5 border-primary/20 p-8 mb-8">
                  <ol className="space-y-4">
                    <li className="flex items-start gap-4">
                      <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                      <div>
                        <p className="text-foreground font-medium mb-1">Pick your protein anchors each meal</p>
                        <p className="text-muted-foreground text-sm">(beans, lentils, tofu, tempeh, yogurt, etc.)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                      <div>
                        <p className="text-foreground font-medium mb-1">Add amino acid boosters</p>
                        <p className="text-muted-foreground text-sm">(quinoa, oats, nuts, seeds, hemp, chia, pumpkin seeds)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                      <div>
                        <p className="text-foreground font-medium">Stay consistent, not perfect</p>
                      </div>
                    </li>
                  </ol>
                </Card>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Most active adults do well with roughly <strong className="text-foreground">20–40g per meal</strong> depending on body size and activity.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-3">
                  And track the right things:
                </p>

                <ul className="space-y-2 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground">Energy.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground">Digestion.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground">Strength.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground">Cravings.</span>
                  </li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  <strong className="text-foreground">That{"'"}s infrastructure.</strong>
                </p>

                {/* Section: Introducing Quality Life */}
                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Introducing: The Quality Life Series</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  This series is part of something bigger. I am so happy to be working on.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-3">
                  <strong className="text-foreground">Quality Life</strong> isn{"'"}t about diet trends.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground">It{"'"}s not product hype.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground">It{"'"}s not fear marketing.</span>
                  </li>
                </ul>

                <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mb-8">
                  <p className="text-xl text-foreground font-medium mb-0">
                    It{"'"}s about clarity.
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  I{"'"}ll be breaking down loud internet claims and replacing them with grounded, usable systems.
                </p>

                <ul className="space-y-2 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground">No extremism.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground">No urgency.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground">No gimmicks.</span>
                  </li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  <strong className="text-foreground">Just signal over noise.</strong>
                </p>

                {/* Section: Hey! Yes You Can */}
                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Hey! Yes You Can</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  If you{"'"}re ready (fasting claims are next) just say something, go watch the full breakdown and let me know.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  The goal hasn{"'"}t changed.
                </p>

                <div className="my-8 py-6 border-y-2 border-primary/20">
                  <p className="text-2xl font-medium text-center text-foreground">
                    I want to empower you to live a quality life.
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  You owe it to yourself to be full of energy each day.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  <strong className="text-foreground">You have lots to accomplish!</strong>
                </p>

                {/* Section: Closing */}
                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Closing</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  I want to give you value in as many ways as possible.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  We live in a time with more technology, more tools, and more resources than any generation before us.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  The question isn{"'"}t access.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  <strong className="text-foreground">It{"'"}s application.</strong>
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  My commitment is to help you filter the noise, use the right tools, and build systems that actually improve your quality of life.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  <strong className="text-foreground">That{"'"}s what it{"'"}s all about!</strong>
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  And we{"'"}re just getting started.
                </p>

                {/* Sign Off */}
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl my-12 border border-primary/20">
                  <p className="text-lg text-foreground mb-4">
                    Coach J
                  </p>
                  <p className="text-muted-foreground mb-2">
                    NxHealth Solutions
                  </p>
                  <p className="text-lg font-medium text-foreground mb-0">
                    Better Health. Better Life.
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
                    {["protein", "amino acids", "nutrition", "newsletter", "quality life"].map((tag) => (
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
                    <h3 className="text-xl font-bold mb-3">Quality Life Series</h3>
                    <p className="mb-6 text-primary-foreground/90">
                      Clarity over chaos. Systems over hacks. Watch the series.
                    </p>
                    <Button asChild className="w-full bg-background text-foreground hover:bg-background/90">
                      <Link href="/resources/articles/newsletter-006-quality-life-series-has-begun">
                        Read Latest Newsletter
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
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-foreground mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((article) => (
                <Link key={article.link} href={article.link}>
                  <Card className="group h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-border hover:border-primary">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-medium text-primary mb-2 block">{article.category}</span>
                      <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
