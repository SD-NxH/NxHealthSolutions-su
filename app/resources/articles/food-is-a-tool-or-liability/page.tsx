"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, Clock, Calendar, Share2, Play, ExternalLink } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function FoodIsAToolOrLiabilityPage() {
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
      title: "A Practical Way to Think About Food (Without Diet Culture)",
      image: "/images/articles/practical-food.jpg",
      link: "/resources/articles/practical-way-to-think-about-food",
      category: "Quality Life",
    },
    {
      title: "Stop Quitting Cold Turkey, Do This Instead",
      image: "/images/articles/cold-turkey.jpg",
      link: "/resources/articles/stop-quitting-cold-turkey",
      category: "Quality Life",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/articles/food-tool-liability.jpg"
            alt="Food as a tool or liability"
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
                <Calendar className="h-4 w-4 mr-1.5" /> March 20, 2026
              </span>
              <span className="flex items-center text-white/80 text-sm">
                <Clock className="h-4 w-4 mr-1.5" /> 6 min read
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight text-balance">
              Your Food Is Either A Tool or a Liability
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-6 text-pretty">
              Are you eating to pass time... or to power your life?
            </p>
            <p className="text-white/80 text-lg">
              By <span className="font-medium text-white">Eric Johnson, M.Sc</span>
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
                  src="https://www.youtube.com/embed/9kPNVBhMZaI"
                  title="Your Food Is Either A Tool or a Liability"
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
                    href="https://www.youtube.com/watch?v=9kPNVBhMZaI"
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
                    Let me ask you something simple. Are you eating to pass time... or to power your life?
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  Food isn&apos;t random. It&apos;s not neutral. It&apos;s either a tool or it quietly works against you. This week&apos;s videos are about one thing: Eating with purpose.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">1. Eat for the Outcome You Want</h2>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  If you want to feel:
                </p>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Energized</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Clear-minded</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Powerful</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Stable</span>
                  </li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Then your food has to match that state.
                </p>

                <div className="my-12 py-8 border-y-2 border-primary/20">
                  <blockquote className="text-2xl md:text-3xl font-light text-center text-foreground italic">
                    {'"'}If a food makes you feel weird, sluggish, foggy, or sick... it&apos;s not supporting your mission.{'"'}
                  </blockquote>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  Food affects how you think, how you perceive, and how you perform. It&apos;s the {'"'}golden token{'"'} that keeps your system moving.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">2. Stop Eating Out of Habit</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  One of the biggest shifts you can make? Only eat when you&apos;re actually hungry.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  A lot of eating today is behavioral:
                </p>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Snacking during a movie</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Eating early because {'"'}that&apos;s what you do{'"'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Grabbing something because it&apos;s there</span>
                  </li>
                </ul>

                <Card className="bg-primary/5 border-primary/20 p-8 my-12">
                  <h3 className="text-2xl font-bold text-foreground mb-4">That&apos;s Not Survival. That&apos;s Conditioning.</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    When you constantly snack, you keep your body in metabolic overdrive. When you create space between meals, your body shifts into a more efficient, restorative state.
                  </p>
                  <p className="text-lg font-medium text-foreground mb-0">
                    Your biology already knows what to do. You just have to stop interrupting it.
                  </p>
                </Card>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">3. Make Food Sacred Again</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Look at the world&apos;s Blue Zones! These are places where people regularly live past 100. Food isn&apos;t rushed. It isn&apos;t eaten in the car. It isn&apos;t consumed while scrolling.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  It&apos;s:
                </p>

                <ul className="space-y-2 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Shared</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Slow</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Chewed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Respected</span>
                  </li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  Digestion starts in the mouth. Connection starts at the table. When food becomes intentional and social, accountability naturally follows.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">Health Doesn&apos;t Have to Be Selfish</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  You can&apos;t help others effectively if you&apos;re constantly tired, foggy, or inflamed.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  When you treat food as fuel instead of a pastime:
                </p>

                <ul className="space-y-2 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Brain fog decreases</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Energy stabilizes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Performance improves</span>
                  </li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  That&apos;s your responsibility.
                </p>

                {/* Final Thought */}
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl my-12 border border-primary/20">
                  <h2 className="text-3xl font-bold text-foreground mb-4">One Thought to Sit With</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    You don&apos;t need another diet. You need integrity with your inputs.
                  </p>
                  <p className="text-lg font-medium text-foreground mb-0">
                    Eat how you want to feel. Pause when you&apos;re not hungry. Slow down and respect the process. Food is a tool. Use it intentionally.
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
                    {["quality life", "nutrition", "mindful eating", "energy", "wellness"].map((tag) => (
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
                      Watch the full video and share how you use food as a tool in your life.
                    </p>
                    <Button asChild className="w-full bg-background text-foreground hover:bg-background/90">
                      <a href="https://www.youtube.com/watch?v=9kPNVBhMZaI" target="_blank" rel="noopener noreferrer">
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
          </motion.div>
        </div>
      </section>
    </div>
  )
}
