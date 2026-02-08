"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, Clock, Calendar, Share2, Play, ExternalLink } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function AccountabilityGroupsArticlePage() {
  const contentRef = useRef(null)
  const relatedRef = useRef(null)

  const isContentInView = useInView(contentRef, { once: true, amount: 0.1 })
  const isRelatedInView = useInView(relatedRef, { once: true, amount: 0.1 })

  const relatedArticles = [
    {
      title: "Why Diets Keep Failing (and What Actually Works Long-Term)",
      image: "/images/articles/diets-failing.jpg",
      link: "/resources/articles/why-diets-fail-what-actually-works",
      category: "Nutrition",
    },
    {
      title: "Intermittent Fasting: Giving the Body Time to Repair, Not Just React",
      image: "/images/articles/intermittent-fasting.jpg",
      link: "/resources/articles/intermittent-fasting-body-repair",
      category: "Health",
    },
    {
      title: "From Secret Eating To Sobriety",
      image: "/weight-scale-measuring-tape.png",
      link: "/resources/articles/secret-eating-to-sobriety",
      category: "Wellness",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/articles/accountability.jpg"
            alt="Accountability group wellness discussion"
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
                Lifestyle
              </span>
              <span className="flex items-center text-white/80 text-sm">
                <Calendar className="h-4 w-4 mr-1.5" /> February 5, 2026
              </span>
              <span className="flex items-center text-white/80 text-sm">
                <Clock className="h-4 w-4 mr-1.5" /> 6 min read
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight text-balance">
              {"Why Accountability Groups Are the Fastest \"Cheat Code\" for Better Health"}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-6 text-pretty">
              Health changes faster when it{"'"}s social -- structured, supportive, and consistent.
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
                  src="https://www.youtube.com/embed/k9ZPjB_gayU"
                  title="Why Accountability Groups Are the Fastest Cheat Code for Better Health"
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
                    href="https://youtu.be/k9ZPjB_gayU"
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
                    Most people think health and weight loss are purely individual battles. Eat better. Move more. Try harder. But if that were true, we wouldn{"'"}t see so many smart, motivated people stuck in the same loop year after year.
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  One of the biggest takeaways reinforced in my recent breakdown -- and echoed in my masterclass on accountability -- is simple but powerful:
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  <strong className="text-foreground">Health changes faster when it{"'"}s social.</strong> Not toxic. Not shame-based. Structured, supportive, and consistent.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  Let{"'"}s break down why community support groups work so well -- and how to use them without turning wellness into a full-time job.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">The Science Behind Group Success</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  There{"'"}s real data behind this. A large study involving over 2,500 participants at the Bohi Health Center in China looked at how people performed in structured health groups. What they found surprised a lot of folks.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-3">What actually worked:</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground"><strong className="text-foreground">Diversity improved outcomes</strong> -- Groups with different body types, fitness levels, and backgrounds were more active and more supportive -- not less.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground"><strong className="text-foreground">Engagement predicted success</strong> -- The people who posted updates, commented on others{"'"} progress, and stayed involved were far more likely to reach their goals.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground"><strong className="text-foreground">Social accountability drove consistency</strong> -- When you know you have to {"\""}answer to somebody,{"\""} skipped workouts and poor food choices suddenly feel less invisible.</span>
                  </li>
                </ul>

                <div className="my-12 py-8 border-y-2 border-primary/20">
                  <blockquote className="text-2xl md:text-3xl font-light text-center text-foreground italic">
                    {"\"This isn't about pressure. It's about being seen.\""}
                  </blockquote>
                </div>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">The Three-Person Rule: Small Groups, Big Results</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  One of the most practical {"\""}cheat codes{"\""} I share is what I call the Three-Person Framework. You don{"'"}t need a massive group. You don{"'"}t need a paid program. You need at least three people.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-3">Why three works:</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground">There{"'"}s always a third voice to balance things out</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground">Someone can call you out without it becoming personal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground">Momentum doesn{"'"}t die when one person has an off week</span>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Anything less than three becomes fragile. Anything bigger can still work -- but three is the minimum for durability.
                </p>

                <Card className="bg-primary/5 border-primary/20 p-8 my-12">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Keep it simple</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    No crazy protocols. No spreadsheets. No perfection. The only rule: meet or check in consistently.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl">{"•"}</span>
                      <span className="text-muted-foreground">Daily text check-ins</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl">{"•"}</span>
                      <span className="text-muted-foreground">Weekly voice calls</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl">{"•"}</span>
                      <span className="text-muted-foreground">Monthly goal reviews</span>
                    </li>
                  </ul>
                  <p className="text-lg font-medium text-foreground mt-4 mb-0">Consistency beats complexity every time.</p>
                </Card>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">Rewiring the Brain Through Accountability</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Here{"'"}s where it gets interesting. Consistent group accountability doesn{"'"}t just change behavior -- it changes decision-making.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  When you know you{"'"}ll have to report back to your group:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground">Late-night {"\""}whatever{"\""} snacks lose their appeal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground">Skipping movement feels less automatic</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground">Excuses get quieter</span>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Not because someone is watching -- but because you{"'"}re part of something.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  There{"'"}s also a healthy competitive edge at play. Humans don{"'"}t like falling behind. When you see someone else meal prepping, walking daily, or improving their digestion, it creates a shared standard. That{"'"}s why even something small -- like sharing a picture of a healthy dinner -- can shift the tone of the entire group.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">Accountability Isn{"'"}t Just for Weight Loss</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  This is where most people miss the bigger picture. Community accountability works for any health upgrade, not just the scale.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">I see these groups help with:</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground">Gut health and digestion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground">Skin issues like eczema or chronic breakouts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground">Energy consistency and sickness prevention</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground">Long-term resilience, not short-term fixes</span>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Your gut, your skin, and your immune system all respond to consistency -- and consistency thrives in community.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">Health Is a Social Skill</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">Whether it{"'"}s:</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground">Restarting after a garden freeze</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground">Sharing Sunday meal prep wins</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground">Checking in through a group message</span>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-6">The pattern is the same.</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  <strong className="text-foreground">Health isn{"'"}t just willpower. It{"'"}s collective resilience.</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">You don{"'"}t need to spend thousands on programs. You don{"'"}t need perfect discipline. You need:</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground">A few aligned people</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground">Honest check-ins</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground">A non-toxic environment</span>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  That{"'"}s how you move out of metabolic debt and into a lifestyle that actually feels sustainable.
                </p>

                {/* Final Thought */}
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl my-12 border border-primary/20">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Final Thought</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    If you{"'"}re trying to do everything alone, you{"'"}re playing on hard mode.
                  </p>
                  <p className="text-lg font-medium text-foreground mb-0">
                    Build a small circle. Keep it simple. Stay consistent. That{"'"}s the real cheat code.
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
                    {["accountability", "community", "lifestyle", "wellness", "habits"].map((tag) => (
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
                      Watch the full video and share your own accountability tips in the comments.
                    </p>
                    <Button asChild className="w-full bg-background text-foreground hover:bg-background/90">
                      <a href="https://youtu.be/k9ZPjB_gayU" target="_blank" rel="noopener noreferrer">
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
