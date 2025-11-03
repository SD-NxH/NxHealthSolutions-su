"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, Clock, Calendar, Share2, Play, ExternalLink } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function FreeVaccinesArticlePage() {
  const headerRef = useRef(null)
  const contentRef = useRef(null)
  const relatedRef = useRef(null)

  const isContentInView = useInView(contentRef, { once: true, amount: 0.1 })
  const isRelatedInView = useInView(relatedRef, { once: true, amount: 0.1 })

  const relatedArticles = [
    {
      title: "Power Up with Plants",
      image: "/vibrant-plant-based-spread.png",
      link: "/resources/articles/power-up-with-plants",
      category: "Nutrition",
    },
    {
      title: "Understanding Breast Cancer",
      image: "/breast-cancer-awareness.png",
      link: "/resources/articles/understanding-breast-cancer",
      category: "Health",
    },
    {
      title: "Plant-Based Strategies for Colorectal Cancer",
      image: "/colorectal-cancer-prevention.png",
      link: "/resources/articles/plant-based-strategies-colorectal-cancer",
      category: "Prevention",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section with Cover Image */}
      <section ref={headerRef} className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/articles/free-vaccines-food-cover.jpg"
            alt="Free Vaccines but Not Free Food"
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
                Public Health
              </span>
              <span className="flex items-center text-white/80 text-sm">
                <Calendar className="h-4 w-4 mr-1.5" /> November 2, 2025
              </span>
              <span className="flex items-center text-white/80 text-sm">
                <Clock className="h-4 w-4 mr-1.5" /> 7 min read
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight text-balance">
              Free Vaccines but Not Free Food?
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-6 text-pretty">
              The Hidden Health Divide No One Talks About
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
                  src="https://www.youtube.com/embed/GiG4mbu8esI"
                  title="Free Vaccines but Not Free Food? — What's Really Going On"
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
                    href="https://youtu.be/GiG4mbu8esI"
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
                    We can get a free shot to treat a disease — but we can't get free food that prevents it.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">💡 The Thought That Started It All</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  All right, let's think about this for a second. We can get a <em>free shot</em> to treat a disease —
                  but we can't get <em>free food</em> that prevents it.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  That simple thought sent me down a rabbit hole. Because when you stop and look closely, there's a
                  strange imbalance in how our society defines "health." Medical care is often free, but nourishment —
                  the foundation of health itself — is treated like a luxury item.
                </p>

                {/* Pull Quote */}
                <div className="my-12 py-8 border-y-2 border-primary/20">
                  <blockquote className="text-2xl md:text-3xl font-light text-center text-foreground italic">
                    "If prevention truly mattered, wouldn't we invest in it the same way we invest in treatment?"
                  </blockquote>
                </div>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">🧩 The Public Health Paradox</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  When there's a public health scare, vaccines and essential medicines are publicly funded and
                  distributed quickly. Pharmacies like Walgreens or CVS advertise <em>free shots everywhere</em>. It's
                  seen as a <strong>public good</strong>, part of keeping society safe.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  But when it comes to food — the very fuel that keeps our immune systems functioning — access suddenly
                  becomes a <strong>personal responsibility</strong>. Fresh produce, whole foods, and nutrient-dense
                  meals are often priced far beyond what many families can afford.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">🏙️ Policy Over Produce</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Here's where it gets even more complicated: policy.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  In many cities — especially here in Texas — even <em>planting a fruit tree</em> can trigger
                  regulations. Local ordinances label them as "unapproved landscaping." Sharing produce from a community
                  garden may require a <em>Temporary Food Establishment Permit</em>, the same type of paperwork
                  restaurants file.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  What should be an act of kindness becomes a bureaucratic obstacle course. The message?{" "}
                  <em>Healing through food requires permission.</em>
                </p>

                {/* Callout Box */}
                <Card className="bg-primary/5 border-primary/20 p-8 my-12">
                  <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                    🌳 The Urban Orchard Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Imagine neighborhoods lined not just with decorative trees but with <strong>fruit trees</strong>,{" "}
                    <strong>berry bushes</strong>, and <strong>edible gardens</strong> — public spaces where anyone
                    could pick something fresh on their morning walk.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-0">
                    This vision isn't a fantasy. Cities like Philadelphia and Los Angeles have already begun developing
                    food forests that feed their communities for free. It's proof that when policies change,
                    possibilities bloom.
                  </p>
                </Card>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">💰 The Economics of "Free"</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A vaccine is publicly funded — your taxes pay for the research, production, and distribution. Free
                  food initiatives? Mostly volunteers and underfunded nonprofits.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We've normalized spending billions to treat diet-related diseases while investing next to nothing in
                  the <em>nutrition that prevents them.</em>
                </p>
                <div className="bg-accent/10 p-6 rounded-lg mb-8">
                  <p className="text-lg font-medium text-foreground mb-0">
                    💡 Every $1 spent on preventive nutrition saves $3 to $5 in medical costs later — yet prevention
                    rarely gets public support.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">🧠 Rethinking What's "Normal"</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We often talk about healthcare reform, but real reform begins before the hospital — at the dinner
                  table.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Access to nourishing food shouldn't depend on privilege or proximity. It should be a public right.
                  Because when people are fed, they're not just healthier — they're freer.
                </p>

                {/* Final Call to Action */}
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl my-12 border border-primary/20">
                  <h2 className="text-3xl font-bold text-foreground mb-4">🌱 The Call to Action</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    So here's the question: If we can publicly fund medicine to treat disease, why can't we publicly
                    fund the food that prevents it?
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl">•</span>
                      <span className="text-muted-foreground">Plant something.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl">•</span>
                      <span className="text-muted-foreground">Share something.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl">•</span>
                      <span className="text-muted-foreground">
                        Ask your city about community gardens and edible landscapes.
                      </span>
                    </li>
                  </ul>
                  <p className="text-lg font-medium text-foreground mb-0">
                    Because true health isn't just about treatment — it's about <strong>nourishment.</strong>
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
                {/* Author Card */}
                <Card className="bg-card border-border overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">About the Author</h3>
                    <p className="text-muted-foreground mb-4">
                      <strong>Coach J (Eric Johnson)</strong> is a health science and nutrition expert dedicated to
                      making wellness accessible to everyone through education and advocacy.
                    </p>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Learn More About Coach J
                    </Button>
                  </div>
                </Card>

                {/* Tags */}
                <Card className="bg-muted/30 border-border p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Article Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {["nutrition", "public health", "policy", "food access", "wellness"].map((tag) => (
                      <span
                        key={tag}
                        className="bg-background px-3 py-1.5 rounded-full text-sm text-foreground border border-border hover:bg-accent transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>

                {/* CTA Card */}
                <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">Join the Conversation</h3>
                    <p className="mb-6 text-primary-foreground/90">
                      Comment on the video and share your perspective — do you think food should be treated as medicine?
                    </p>
                    <Button asChild className="w-full bg-background text-foreground hover:bg-background/90">
                      <a href="https://youtu.be/GiG4mbu8esI" target="_blank" rel="noopener noreferrer">
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
