"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, Clock, Calendar, Share2, Play, ExternalLink, User } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function Newsletter006QualityLifeSeriesPage() {
  const contentRef = useRef(null)
  const relatedRef = useRef(null)

  const isContentInView = useInView(contentRef, { once: true, amount: 0.1 })
  const isRelatedInView = useInView(relatedRef, { once: true, amount: 0.1 })

  const relatedArticles = [
    {
      title: "Newsletter 005 — Do I really need \"Protein\"?",
      image: "/images/articles/do-you-need-protein.jpg",
      link: "/resources/articles/newsletter-005-do-you-need-protein",
      category: "Blog",
    },
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
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/articles/quality-life-series.png"
            alt="Quality Life Series - Eric Johnson"
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
                <Calendar className="h-4 w-4 mr-1.5" /> March 6, 2026
              </span>
              <span className="flex items-center text-white/80 text-sm">
                <Clock className="h-4 w-4 mr-1.5" /> 5 min read
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight text-balance">
              Newsletter 006 — The Quality Life Series Has Begun
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-6 text-pretty">
              Making health clearer, calmer, and more practical.
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
                  This week marked the start of something I{"'"}ve been wanting to build for a long time.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  I officially launched a new recurring series called <strong className="text-foreground">Quality Life</strong>.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  The goal of this series is simple:
                </p>

                <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mb-8">
                  <p className="text-xl text-foreground font-medium mb-0">
                    To make health clearer, calmer, and more practical.
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Because if you look around the internet right now, health has become incredibly complicated.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-3">There are:</p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground">supplements for everything</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground">endless morning routines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground">conflicting diet rules</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground">optimization hacks everywhere</span>
                  </li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  And the result is that people end up feeling <strong className="text-foreground">overwhelmed instead of empowered</strong>.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  But the truth is much simpler.
                </p>

                <div className="my-12 py-8 border-y-2 border-primary/20">
                  <p className="text-2xl md:text-3xl font-light text-center text-foreground">
                    Your body already knows how to repair itself.
                    <br />
                    It already knows how to regulate itself.
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  Most of the time, the problem isn{"'"}t that the body is broken. <strong className="text-foreground">The problem is the environment we place it in.</strong>
                </p>

                {/* Section: Quality Life Trailer */}
                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Quality Life: Official Trailer</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  The first video released this week introduces the philosophy behind the entire series.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  The focus is not on adding more hacks.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  <strong className="text-foreground">It{"'"}s on removing the interruptions</strong> that block your biology from working the way it was designed.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-3">
                  The foundation of the series is built around three pillars:
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground"><strong className="text-foreground">Mind</strong> — how stress, focus, and recovery influence health</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground"><strong className="text-foreground">Macros</strong> — the quality and structure of the food we eat</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground"><strong className="text-foreground">Movement</strong> — how physical capability supports long-term vitality</span>
                  </li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  Everything in the series will connect back to those three ideas.
                </p>

                {/* Video Embed - Trailer */}
                <Card className="bg-card rounded-2xl overflow-hidden shadow-lg mb-12">
                  <div className="aspect-video relative bg-black">
                    <iframe
                      src="https://www.youtube.com/embed/sfwMRkgZmZY"
                      title="Quality Life Series - Official Trailer"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                  <div className="p-6 bg-card">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Play className="h-5 w-5 text-primary" />
                        <p className="text-sm text-muted-foreground">Watch the Quality Life trailer on YouTube</p>
                      </div>
                      <a
                        href="https://youtu.be/sfwMRkgZmZY"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </Card>

                {/* Section: Episode 1 */}
                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Episode 1: Strength Training Is Medicine</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  The first full episode focuses on the <strong className="text-foreground">Movement</strong> pillar.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  I visited Discover Strength and spoke with exercise physiologist <strong className="text-foreground">Kwaku Akore</strong> about something many people misunderstand:
                </p>

                <div className="bg-accent/10 border-l-4 border-primary p-6 rounded-r-lg mb-8">
                  <p className="text-xl text-foreground font-medium mb-0">
                    Strength training isn{"'"}t just for bodybuilding. It{"'"}s medicine. For adults of all ages.
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  One of the most interesting takeaways is that busy professionals don{"'"}t need hours in the gym.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  In many cases, <strong className="text-foreground">two focused sessions per week</strong> are enough to produce real physiological benefits when the training is evidence-based and intentional.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-3">We also talked about:</p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground">why many people struggle with back and shoulder pain from sitting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground">the difference between personal trainers and exercise physiologists</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground">why women don{"'"}t suddenly become {"\""}bulky{"\""} from lifting weights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">{"•"}</span>
                    <span className="text-muted-foreground">why machines can actually be highly effective for strength training</span>
                  </li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  If you{"'"}ve ever been unsure where strength training fits into your life, this episode is a great place to start.
                </p>

                {/* Video Embed - Episode 1 */}
                <Card className="bg-card rounded-2xl overflow-hidden shadow-lg mb-12">
                  <div className="aspect-video relative bg-black">
                    <iframe
                      src="https://www.youtube.com/embed/YU3gsqIfNZw"
                      title="Quality Life Episode 1: Strength Training Is Medicine"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                  <div className="p-6 bg-card">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Play className="h-5 w-5 text-primary" />
                        <p className="text-sm text-muted-foreground">Watch Episode 1 on YouTube</p>
                      </div>
                      <a
                        href="https://youtu.be/YU3gsqIfNZw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </Card>

                {/* Section: A Quick Reflection */}
                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">A quick reflection</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Health doesn{"'"}t require perfection.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  <strong className="text-foreground">It requires systems.</strong>
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  When the environment supports your biology, the body tends to do what it was designed to do.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  That{"'"}s the spirit behind Quality Life.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  Each episode will explore a different system, environment, or idea that helps people live stronger, clearer, and more capable lives.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  More episodes are coming soon.
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
                    {["quality life", "newsletter", "strength training", "movement", "mind", "macros"].map((tag) => (
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
                    <h3 className="text-xl font-bold mb-3">Watch the Series</h3>
                    <p className="mb-6 text-primary-foreground/90">
                      Catch all Quality Life episodes and subscribe for new content.
                    </p>
                    <Button asChild className="w-full bg-background text-foreground hover:bg-background/90">
                      <a href="https://youtu.be/sfwMRkgZmZY" target="_blank" rel="noopener noreferrer">
                        Watch on YouTube
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
