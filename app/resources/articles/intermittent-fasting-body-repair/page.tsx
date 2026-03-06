"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, Clock, Calendar, Share2, Play, ExternalLink, AlertTriangle } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function IntermittentFastingArticlePage() {
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
      title: "Why Accountability Groups Are the Fastest \"Cheat Code\" for Better Health",
      image: "/images/articles/accountability.jpg",
      link: "/resources/articles/accountability-groups-cheat-code-health",
      category: "Lifestyle",
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
            src="/images/articles/intermittent-fasting.jpg"
            alt="Intermittent fasting concept with clock and plate"
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
                Health
              </span>
              <span className="flex items-center text-white/80 text-sm">
                <Calendar className="h-4 w-4 mr-1.5" /> February 5, 2026
              </span>
              <span className="flex items-center text-white/80 text-sm">
                <Clock className="h-4 w-4 mr-1.5" /> 8 min read
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight text-balance">
              Intermittent Fasting: Giving the Body Time to Repair, Not Just React
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-6 text-pretty">
              Not deprivation -- timing. Give your body space to reset and repair.
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
                  src="https://www.youtube.com/embed/dez_SbEsFlw"
                  title="Intermittent Fasting: Giving the Body Time to Repair"
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
                    href="https://youtu.be/dez_SbEsFlw"
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
                    Most people think of food as fuel -- and that{"'"}s true. But what rarely gets discussed is what happens when the body never gets a break from processing that fuel.
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  We live in a culture of constant eating. Snacks between meals. Calories before bed. Sugar for energy. Caffeine to override the crash. The result is a body stuck in a permanent state of digestion -- what I often call <strong className="text-foreground">metabolic overdrive</strong>.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Intermittent fasting isn{"'"}t about deprivation. It{"'"}s about giving the body time to reset, repair, and level up.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">{"What Fasting Actually Is (and Isn't)"}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  At its core, fasting is simply a prolonged period without eating. Everyone already fasts while they sleep. Intermittent fasting just extends that natural window a bit longer, allowing the body to shift out of digestion mode and into <strong className="text-foreground">repair mode</strong>.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  When food isn{"'"}t constantly coming in, your systems finally get breathing room. That{"'"}s where the real benefits show up.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">What Happens When the Body Gets a Break</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  When digestion slows down, something powerful kicks in.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-3">Cellular repair turns on</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  During a fasting window, the body initiates a deep cellular clean-up process -- often described as a biological {"\""}wildfire.{"\""} Damaged cells, dysfunctional components, and accumulated waste are broken down and recycled.
                </p>
                <div className="bg-accent/10 p-6 rounded-lg mb-8">
                  <p className="text-lg font-medium text-foreground mb-0">
                    This isn{"'"}t hype. It{"'"}s maintenance.
                  </p>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">Inflammation begins to calm</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Many people notice reduced swelling in joints like knees, ankles, and wrists -- even without changing what they eat. Simply stopping the constant intake of food can lower systemic inflammation.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-3">Metabolic health improves</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Fasting can significantly improve insulin sensitivity and blood sugar regulation. For people dealing with metabolic dysfunction or diabetes risk, this alone can be life-changing.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  The body remembers how to regulate itself when it{"'"}s given the chance.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">{"The Hard Part: Getting Through the \"Suck\""}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Let{"'"}s be honest -- the transition can be uncomfortable at first. As the body shifts, some people experience a detox phase: fatigue, lightheadedness, irritability. It can feel like you might {"\""}fall over.{"\""}
                </p>

                <div className="my-12 py-8 border-y-2 border-primary/20">
                  <blockquote className="text-2xl md:text-3xl font-light text-center text-foreground italic">
                    {"\"You won't. The body has stored energy. It's built for this. Humans didn't evolve eating every two hours.\""}
                  </blockquote>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  What{"'"}s interesting is the psychological reaction fasting tends to trigger -- both internally and socially. People will eat hospital-inducing foods without a second thought. But suggest not eating for a few hours longer, and suddenly everyone has concerns.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Choosing to level up your health can create friction. You might get labeled {"\""}extra,{"\""} {"\""}bougie,{"\""} or extreme. That{"'"}s usually a sign you{"'"}re stepping outside the norm -- and prioritizing total body wellness over convenience.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">Benefits That Go Beyond Weight Loss</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Yes, weight loss can happen. A calorie deficit is part of the equation. But focusing only on the scale misses the bigger picture.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-3">Physical repair</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Through fasting, I was able to resolve lipomas -- fatty buildups on my back that even healthcare providers couldn{"'"}t fully explain. Giving the body time to repair allowed it to handle what medicine couldn{"'"}t address directly.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-3">Mental clarity</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The brain fog disappeared. Focus sharpened. Thinking became cleaner. Mental endurance increased. Honestly, fasting did more for my cognitive performance than years spent in academic environments.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-3">Strength and resilience</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Despite being over 200 pounds and eating a strictly plant-based diet, strength didn{"'"}t disappear. What did disappear was chronic soreness and frequent illness. The body became more resilient -- not weaker.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-3">Cravings lost their grip</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Those ferocious hunger signals? Gone. When the system resets, cravings quiet down. The constant demand for stimulation fades. Whether that{"'"}s hormonal balance, improved signaling, or clearing out things that don{"'"}t belong in the body, the result is the same: <strong className="text-foreground">freedom from food noise</strong>.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">Fasting as a Professional and Lifestyle Tool</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  This isn{"'"}t just about personal health. A clear mind, stable energy, and a resilient body directly affect how you show up -- for work, for family, for community.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Fasting reinforces the <strong className="text-foreground">Mind and Food</strong> pillars we talk about in corporate wellness:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground">Better focus</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground">More consistent energy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground">Improved stress tolerance</span>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Like gardening with a group or using accountability messages, fasting works best when approached with intentional experimentation, not perfection. Try it. Observe. Adjust.
                </p>

                {/* Disclaimer */}
                <Card className="bg-destructive/5 border-destructive/20 p-8 my-12">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">A Necessary Disclaimer</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Fasting isn{"'"}t for everyone. Those who are breastfeeding, pregnant, or managing certain medical conditions should not jump in without professional guidance. Listening to your body always comes first.
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-0">
                        But for many people, intermittent fasting is a powerful way to take care of the body{"'"}s motor -- so it runs longer, cleaner, and more efficiently.
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Final Thought */}
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl my-12 border border-primary/20">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Final Thought</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    This isn{"'"}t about extremes. It{"'"}s about timing. Give your body space to do what it already knows how to do.
                  </p>
                  <p className="text-lg font-medium text-foreground mb-0">
                    Repair. Reset. Perform. That{"'"}s the real level-up.
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
                    {["fasting", "metabolic health", "inflammation", "repair", "wellness"].map((tag) => (
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
                      Watch the full video and share your fasting experience in the comments.
                    </p>
                    <Button asChild className="w-full bg-background text-foreground hover:bg-background/90">
                      <a href="https://youtu.be/dez_SbEsFlw" target="_blank" rel="noopener noreferrer">
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
