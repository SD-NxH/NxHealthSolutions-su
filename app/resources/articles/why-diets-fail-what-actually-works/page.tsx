"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, Clock, Calendar, Share2, Play, ExternalLink } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function WhyDietsFailArticlePage() {
  const contentRef = useRef(null)
  const relatedRef = useRef(null)

  const isContentInView = useInView(contentRef, { once: true, amount: 0.1 })
  const isRelatedInView = useInView(relatedRef, { once: true, amount: 0.1 })

  const relatedArticles = [
    {
      title: "Why Accountability Groups Are the Fastest \"Cheat Code\" for Better Health",
      image: "/images/articles/accountability.jpg",
      link: "/resources/articles/accountability-groups-cheat-code-health",
      category: "Lifestyle",
    },
    {
      title: "Intermittent Fasting: Giving the Body Time to Repair, Not Just React",
      image: "/images/articles/intermittent-fasting.jpg",
      link: "/resources/articles/intermittent-fasting-body-repair",
      category: "Health",
    },
    {
      title: "The Food Pyramid Deception: It's Time to Reclaim Control of Your Plate",
      image: "/food-pyramid-deception.png",
      link: "/resources/articles/food-pyramid-deception",
      category: "Nutrition",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/articles/diets-failing.jpg"
            alt="Healthy whole foods vs restrictive dieting"
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
                Nutrition
              </span>
              <span className="flex items-center text-white/80 text-sm">
                <Calendar className="h-4 w-4 mr-1.5" /> February 5, 2026
              </span>
              <span className="flex items-center text-white/80 text-sm">
                <Clock className="h-4 w-4 mr-1.5" /> 7 min read
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight text-balance">
              Why Diets Keep Failing (and What Actually Works Long-Term)
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-6 text-pretty">
              Real health isn{"'"}t restriction -- it{"'"}s habits, biology, and systems that last.
            </p>
            <p className="text-white/80 text-lg">
              By <span className="font-medium text-white">Coach J (Eric Johnson)</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-video relative bg-black">
                <iframe
                  src="https://www.youtube.com/embed/uxHKV7mY-14"
                  title="Why Diets Keep Failing and What Actually Works Long-Term"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="p-6 bg-card">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Play className="h-5 w-5 text-primary" />
                    <p className="text-sm text-muted-foreground">Watch the full video discussion on YouTube</p>
                  </div>
                  <a
                    href="https://youtu.be/uxHKV7mY-14"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
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
                    Most people don{"'"}t fail at health because they{"'"}re lazy or unmotivated. They fail because they{"'"}re trying to force short-term rules onto a long-term body.
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  The entire wellness industry has trained us to think of a {"\""}diet{"\""} as something you start, endure, and eventually quit. But that definition is the problem.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Real health isn{"'"}t built on restriction. It{"'"}s built on intentional habits, biological understanding, and community support.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">{"Diet Isn't a Challenge — It's a Lifestyle"}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The word <em>diet</em> has been hijacked. A diet isn{"'"}t keto. It isn{"'"}t carnivore. It isn{"'"}t a 30-day reset. A diet is simply <strong className="text-foreground">the foods a person or community habitually eats</strong>. That{"'"}s it.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-3">Why fad diets eventually collapse</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Most popular diets {"\""}work{"\""} at first for one simple reason: they remove ultra-processed foods. That initial weight drop or energy boost feels like magic. But once the excitement fades, people regress -- not because they{"'"}re weak, but because the system was built on restriction, not joy.
                </p>

                <div className="my-12 py-8 border-y-2 border-primary/20">
                  <blockquote className="text-2xl md:text-3xl font-light text-center text-foreground italic">
                    {"\"If a way of eating feels like punishment, it will never last.\""}
                  </blockquote>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Instead of asking {"\""}What diet should I follow?{"\""}, a better question is: <strong className="text-foreground">{"\""}How do I want to feel day to day?{"\"}"}</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  When food supports stable energy, digestion, and mood, the body stops crashing into metabolic overdrive caused by industrial sugars, dyes, and processed additives.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">The Biology Most People Ignore</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Health isn{"'"}t mysterious -- but it is biological. When you understand how the body actually processes fuel, many common problems start to make sense.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-3">{"Plants are not \"side foods\""}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Plants, seeds, grains, legumes, and nuts are nutrient powerhouses. They deliver protein, fats, carbohydrates, minerals, and vitamins in combinations the body recognizes and knows how to use. This isn{"'"}t ideology. It{"'"}s physiology.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whole foods give the body what it needs without forcing it into emergency mode.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-3">Digestion starts in the mouth (not the stomach)</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  One of the most overlooked factors in gut health is chewing. Rushed meals create large clumps of food that move through a very long intestinal tract. That{"'"}s a recipe for bloating, constipation, and discomfort.
                </p>
                <div className="bg-accent/10 p-6 rounded-lg mb-8">
                  <p className="text-lg font-medium text-foreground mb-0">
                    Slow down. Chew more than you think you need to. Digestion begins before food ever reaches your gut.
                  </p>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">{"Real food doesn't need marketing"}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  If a package has an ingredient list that looks like a grocery receipt, your body has extra work to do. Whole foods don{"'"}t need explanations. Apples don{"'"}t need branding. Nuts don{"'"}t need preservatives. The simpler the food, the calmer the system.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">Systems Beat Willpower Every Time</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Great health doesn{"'"}t come from {"\""}winging it.{"\""} It comes from planning and advocacy -- advocating for your future self.
                </p>

                <Card className="bg-primary/5 border-primary/20 p-8 my-12">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{"You don't need perfection"}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You don{"'"}t need seven perfectly prepped meals. You don{"'"}t need gourmet recipes. Planning three meals a week is a win.
                  </p>
                  <p className="text-lg font-medium text-foreground mb-0">
                    That alone reduces decision fatigue, stress eating, and last-minute compromises.
                  </p>
                </Card>

                <h3 className="text-xl font-bold text-foreground mb-3">How you eat matters as much as what you eat</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Eating in a rush, in a car, or half-distracted sends the wrong signal to your body. Sitting down. Hydrating. Actually enjoying the meal. Those habits matter more than most people realize.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">Health Has Always Been a Group Activity</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Humans didn{"'"}t evolve eating alone in cars or scrolling phones during meals. Across history -- and in modern {"\""}Blue Zones{"\""} -- health thrived in community.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  People ate together. Moved together. Held each other accountable naturally. That{"'"}s why small accountability groups work so well today.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  A simple group message. A team of three or more. Shared goals and check-ins. It{"'"}s not pressure. It{"'"}s integrity. When others know your intentions, consistency becomes easier.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">Resilience Is the Real Goal</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Wellness isn{"'"}t about never slipping. It{"'"}s about knowing how to come back. Whether it{"'"}s a period of metabolic debt or a literal garden freeze wiping out your crops, setbacks are part of the cycle.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  The skill isn{"'"}t avoidance. The skill is returning to the drawing board. Replant. Relearn. Recommit. Health is not a destination -- it{"'"}s a lifelong practice of education, discernment, and adaptation.
                </p>

                {/* Final Thought */}
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl my-12 border border-primary/20">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Final Thought</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    If you research cars, phones, and careers with intention, your health deserves the same respect.
                  </p>
                  <p className="text-lg font-medium text-foreground mb-0">
                    Not extremes. Not trends. Not punishment. Just aligned habits, biological awareness, and the support of others. That{"'"}s how real lifestyle change lasts.
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
                      <strong>Coach J (Eric Johnson)</strong> is a health science and nutrition expert dedicated to making wellness accessible to everyone through education and advocacy.
                    </p>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Link href="/about">Learn More About Coach J</Link>
                    </Button>
                  </div>
                </Card>

                <Card className="bg-muted/30 border-border p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Article Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {["nutrition", "diets", "lifestyle", "habits", "whole foods"].map((tag) => (
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
                    <h3 className="text-xl font-bold mb-3">Join the Conversation</h3>
                    <p className="mb-6 text-primary-foreground/90">
                      Watch the full video and share what has worked for you -- or what hasn{"'"}t.
                    </p>
                    <Button asChild className="w-full bg-background text-foreground hover:bg-background/90">
                      <a href="https://youtu.be/uxHKV7mY-14" target="_blank" rel="noopener noreferrer">
                        Watch & Comment
                      </a>
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

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/resources/articles">Explore All Articles</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
