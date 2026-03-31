"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, Clock, Calendar, Share2, Gamepad2, Shield, Zap, Trophy } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function HowASillyGameCouldHelpPage() {
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
      title: "The TRUTH Doesn't Go Viral (But It Works)",
      image: "/images/articles/truth-viral.jpg",
      link: "/resources/articles/truth-doesnt-go-viral",
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
            src="/images/articles/silly-game.jpg"
            alt="How a silly game could help"
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
                <Calendar className="h-4 w-4 mr-1.5" /> March 1, 2026
              </span>
              <span className="flex items-center text-white/80 text-sm">
                <Clock className="h-4 w-4 mr-1.5" /> 5 min read
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight text-balance">
              How a Silly Game Could Help
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-6 text-pretty">
              If I built a game that secretly made you healthier... would you play?
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
                    My goal isn&apos;t small. I want to improve worldwide health. Not through trends. Not through hype. Not through simple motivation.
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  I want people — everywhere — to feel better. More energy. Clearer thinking. Stronger bodies. More stability in their day-to-day life.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  I kind of want to try something...
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">Hey, Let&apos;s Play A Game!</h2>

                <div className="my-12 py-8 border-y-2 border-primary/20">
                  <blockquote className="text-2xl md:text-3xl font-light text-center text-foreground italic">
                    {'"'}If I built a game that secretly made you healthier... would you play?{'"'}
                  </blockquote>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  In this game:
                </p>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Personal daily state determines your missions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Stability earns points</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Consistency multiplies power</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Miss a day, reset</span>
                  </li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  I&apos;m testing this in small groups of 6–7 people. Once your group fills, I&apos;ll message you with your official start date. If you want to try it, just play. Seven days. No pressure.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">Here&apos;s How It Works</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Every day (between 9AM–9PM):
                </p>

                <ol className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">1</span>
                    <span className="text-muted-foreground">You complete a quick daily check-in form at the start or end of your day (it&apos;ll take less than a minute).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">2</span>
                    <span className="text-muted-foreground">I send you up to 3 private missions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">3</span>
                    <span className="text-muted-foreground">You react to the missions you complete.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">4</span>
                    <span className="text-muted-foreground">Points are tracked. Leaderboard updates daily.</span>
                  </li>
                </ol>

                {/* Game Rules Card */}
                <Card className="bg-primary/5 border-primary/20 p-8 my-12">
                  <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Gamepad2 className="h-6 w-6 text-primary" />
                    Game Rules
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-primary mt-1 shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Max 3 missions per day</p>
                        <p className="text-sm text-muted-foreground">Daily max: 40 points</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-primary mt-1 shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">3-day streak = 1 Shield</p>
                        <p className="text-sm text-muted-foreground">Protects one missed day</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Trophy className="h-5 w-5 text-primary mt-1 shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Miss a day?</p>
                        <p className="text-sm text-muted-foreground">Point multiplier resets</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-primary mt-1 shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Game Duration</p>
                        <p className="text-sm text-muted-foreground">7 days total</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">The Structure</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  You&apos;re not trying to be perfect. You&apos;re trying to maintain control.
                </p>

                <div className="bg-accent/10 p-6 rounded-lg mb-8">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-destructive mt-2 shrink-0" />
                      <span className="text-muted-foreground"><strong className="text-foreground">Bad day?</strong> We protect.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-yellow-500 mt-2 shrink-0" />
                      <span className="text-muted-foreground"><strong className="text-foreground">Average day?</strong> We maintain.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground"><strong className="text-foreground">Good day?</strong> We deploy forward for more.</span>
                    </li>
                  </ul>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  You don&apos;t push harder. You regulate. Missions are private. Leaderboard is public.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">Mission Completion</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  After completing a mission, react with:
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-muted/30 p-4 rounded-lg text-center">
                    <span className="text-3xl mb-2 block">&#9757;</span>
                    <p className="text-sm text-muted-foreground">Mission #1</p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg text-center">
                    <span className="text-3xl mb-2 block">&#9996;</span>
                    <p className="text-sm text-muted-foreground">Mission #2</p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg text-center">
                    <span className="text-3xl mb-2 block">&#128076;</span>
                    <p className="text-sm text-muted-foreground">Mission #3</p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg text-center">
                    <span className="text-3xl mb-2 block">&#128170;</span>
                    <p className="text-sm text-muted-foreground">All Complete</p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">About NxHealth</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  I am building my company NxHealth, and it isn&apos;t about putting people on {'"'}diets{'"'}. It&apos;s about building infrastructure so your energy doesn&apos;t collapse quietly over time. I want you fully enjoying this life!
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  <strong className="text-foreground">&apos;CONTROL&apos;</strong> is the prototype. I&apos;m inviting 6–7 people. 7 days. No app. No downloads. Just the system.
                </p>

                {/* Final Thought */}
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl my-12 border border-primary/20">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Play?</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    If you want in, reach out with: {'"'}CONTROL{'"'}
                  </p>
                  <p className="text-lg font-medium text-foreground mb-6">
                    I&apos;ll send you the form and your start date. Let&apos;s see who can maintain stability. This might just change your life...
                  </p>
                  <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/control_prototype">
                      View CONTROL Prototype
                    </Link>
                  </Button>
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
                    {["quality life", "gamification", "CONTROL", "accountability", "wellness"].map((tag) => (
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
                    <h3 className="text-xl font-bold mb-3">Try CONTROL</h3>
                    <p className="mb-6 text-primary-foreground/90">
                      Explore the CONTROL prototype and see how gamified health accountability works.
                    </p>
                    <Button asChild className="w-full bg-background text-foreground hover:bg-background/90">
                      <Link href="/control_prototype">
                        View Prototype
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
