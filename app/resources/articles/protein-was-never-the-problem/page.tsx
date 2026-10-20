"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, Clock, Calendar, Share2, Play, ExternalLink, Check, AlertCircle } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function ProteinWasNeverTheProblemPage() {
  const contentRef = useRef(null)
  const relatedRef = useRef(null)

  const isContentInView = useInView(contentRef, { once: true, amount: 0.1 })
  const isRelatedInView = useInView(relatedRef, { once: true, amount: 0.1 })

  const relatedArticles = [
    {
      title: "A Powerful Seed of Truth",
      image: "/images/articles/powerful-seed-truth.jpg",
      link: "/resources/articles/a-powerful-seed-of-truth",
      category: "Nutrition",
    },
    {
      title: "A Quiet Realization About Health",
      image: "/images/articles/quiet-realization.jpg",
      link: "/resources/articles/quiet-realization-about-health",
      category: "Quality Life",
    },
    {
      title: "The Quality Life Series Has BEGUN",
      image: "/images/articles/quality-life-series.jpg",
      link: "/resources/articles/quality-life-series-has-begun",
      category: "Quality Life",
    },
  ]

  const proteinAnchors = [
    "Beans",
    "Lentils",
    "Tofu",
    "Tempeh",
    "Yogurt",
    "Edamame",
  ]

  const aminoBoosters = [
    "Quinoa",
    "Oats",
    "Nuts",
    "Seeds",
    "Hemp",
    "Chia",
    "Pumpkin seeds",
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[#f0faf5]">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/articles/protein-problem.jpg"
            alt="Protein was never the problem"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a3d2e]/90 via-[#1a3d2e]/50 to-transparent" />
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
              <span className="bg-[#2d6a4f] text-white px-4 py-1.5 rounded-full text-sm font-medium">
                Quality Life
              </span>
              <span className="flex items-center text-white/80 text-sm">
                <Calendar className="h-4 w-4 mr-1.5" /> April 3, 2026
              </span>
              <span className="flex items-center text-white/80 text-sm">
                <Clock className="h-4 w-4 mr-1.5" /> 6 min read
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight text-balance">
              Oh Gosh, Protein Was Never The Problem
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-6 text-pretty">
              You don&apos;t need protein. You need amino acids. Here&apos;s the framework that actually works.
            </p>
            <p className="text-white/80 text-lg">
              By <span className="font-medium text-white">Eric Johnson, M.Sc</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 bg-[#e5f5ed]">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#c8e6d7]">
              <div className="aspect-video relative bg-black">
                <iframe
                  src="https://www.youtube.com/embed/NWUzuX-oJFg"
                  title="Oh Gosh, Protein Was Never The Problem"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="p-6 bg-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Play className="h-5 w-5 text-[#2d6a4f]" />
                    <p className="text-sm text-[#4a5d52]">Watch the full video discussion on YouTube</p>
                  </div>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2d6a4f] hover:text-[#2d6a4f]/80 transition-colors"
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
      <section ref={contentRef} className="py-12 bg-[#f0faf5]">
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
                {/* Opening Visualization */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#c8e6d7] mb-8">
                  <p className="text-xl text-[#1a3d2e] font-medium italic mb-4">
                    Close your eyes for a second. Picture a lion in the Serengeti.
                  </p>
                  <p className="text-[#4a5d52] leading-relaxed mb-4">
                    There&apos;s no grill. No seasoning. No protein bar. Just food as is, or should I say &quot;as it lives&quot;.
                  </p>
                  <p className="text-lg font-bold text-[#2d6a4f] mb-0">
                    So here&apos;s the question that sparked this week&apos;s video: Why do humans need to do so much to make meat &quot;work&quot; for them? And what does that actually say about protein?
                  </p>
                </div>

                {/* Let's Clear Something Up */}
                <h2 className="text-3xl font-bold text-[#1a3d2e] mt-12 mb-6">Let&apos;s Clear Something Up</h2>
                
                <div className="bg-[#2d6a4f] text-white rounded-2xl p-8 mb-8">
                  <p className="text-2xl font-bold mb-4">
                    You don&apos;t technically &quot;need protein.&quot;
                  </p>
                  <p className="text-xl text-white/90 mb-4">
                    You need <span className="font-bold">amino acids</span>.
                  </p>
                  <p className="text-white/80 mb-0">
                    Protein is just the delivery system. Your body breaks food down into amino acids... Then rebuilds it into you.
                  </p>
                </div>

                <p className="text-[#4a5d52] leading-relaxed mb-6">
                  So the real question isn&apos;t:
                </p>

                <p className="text-xl text-[#1a3d2e] font-medium mb-4 line-through opacity-60">
                  &quot;Is protein a myth?&quot;
                </p>

                <p className="text-[#4a5d52] leading-relaxed mb-8">
                  It&apos;s: <strong className="text-[#1a3d2e]">Are you getting high-quality amino acids without wrecking your digestion, energy, or lifestyle?</strong>
                </p>

                {/* The Internet is Tired */}
                <h2 className="text-3xl font-bold text-[#1a3d2e] mt-12 mb-6">The Internet is Tired</h2>

                <p className="text-[#4a5d52] leading-relaxed mb-6">
                  The protein wars are exhausting.
                </p>

                <div className="grid gap-3 mb-8">
                  {[
                    "Gorillas eat plants.",
                    "Humans aren't gorillas.",
                    "Fitness influencers push 40-ingredient shakes.",
                    "Protein bars are basically candy with branding.",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-4 border border-[#c8e6d7]">
                      <AlertCircle className="h-5 w-5 text-[#d4a373] shrink-0" />
                      <span className="text-[#4a5d52]">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-[#fff8e7] border-l-4 border-[#d4a373] p-6 rounded-r-lg mb-8">
                  <p className="text-lg text-[#1a3d2e] font-bold mb-2">
                    The biggest problem isn&apos;t protein.
                  </p>
                  <p className="text-[#4a5d52] mb-0">
                    It&apos;s ultra-processed &quot;fitness food&quot; pretending to be infrastructure. That&apos;s marketing. Not systems.
                  </p>
                </div>

                {/* The Actual Framework */}
                <h2 className="text-3xl font-bold text-[#1a3d2e] mt-12 mb-6">Here&apos;s The Actual Framework</h2>

                <p className="text-[#4a5d52] leading-relaxed mb-6">
                  Instead of arguing online, do this:
                </p>

                <div className="space-y-4 mb-8">
                  <div className="bg-white rounded-xl p-6 border border-[#c8e6d7]">
                    <div className="flex items-start gap-4">
                      <span className="w-8 h-8 bg-[#2d6a4f] rounded-full flex items-center justify-center text-white font-bold shrink-0">1</span>
                      <div>
                        <h4 className="text-lg font-bold text-[#1a3d2e] mb-2">Pick your protein anchors each meal</h4>
                        <div className="flex flex-wrap gap-2">
                          {proteinAnchors.map((anchor) => (
                            <span key={anchor} className="bg-[#e5f5ed] text-[#2d6a4f] px-3 py-1.5 rounded-full text-sm font-medium">
                              {anchor}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-[#c8e6d7]">
                    <div className="flex items-start gap-4">
                      <span className="w-8 h-8 bg-[#2d6a4f] rounded-full flex items-center justify-center text-white font-bold shrink-0">2</span>
                      <div>
                        <h4 className="text-lg font-bold text-[#1a3d2e] mb-2">Add amino acid boosters</h4>
                        <div className="flex flex-wrap gap-2">
                          {aminoBoosters.map((booster) => (
                            <span key={booster} className="bg-[#e5f5ed] text-[#2d6a4f] px-3 py-1.5 rounded-full text-sm font-medium">
                              {booster}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-[#c8e6d7]">
                    <div className="flex items-start gap-4">
                      <span className="w-8 h-8 bg-[#2d6a4f] rounded-full flex items-center justify-center text-white font-bold shrink-0">3</span>
                      <div>
                        <h4 className="text-lg font-bold text-[#1a3d2e] mb-2">Stay consistent, not perfect</h4>
                        <p className="text-[#4a5d52]">
                          Most active adults do well with roughly <strong>20–40g per meal</strong> depending on body size and activity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#2d6a4f] rounded-2xl p-8 mb-12">
                  <h4 className="text-xl font-bold text-white mb-4">And track the right things:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Energy", "Digestion", "Strength", "Cravings"].map((metric) => (
                      <div key={metric} className="bg-white/10 rounded-lg p-4 text-center">
                        <Check className="h-6 w-6 text-white mx-auto mb-2" />
                        <span className="text-white font-medium">{metric}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-2xl font-bold text-white text-center mt-6 mb-0">
                    That&apos;s infrastructure :)
                  </p>
                </div>

                {/* Quality Life Series */}
                <h2 className="text-3xl font-bold text-[#1a3d2e] mt-12 mb-6">Introducing: The Quality Life Series</h2>

                <div className="bg-white rounded-2xl p-8 border-2 border-[#2d6a4f] mb-8">
                  <p className="text-lg text-[#4a5d52] leading-relaxed mb-4">
                    This series is part of something bigger. <strong className="text-[#1a3d2e]">I am so happy to be working on.</strong>
                  </p>
                  <p className="text-xl text-[#2d6a4f] font-bold mb-4">
                    Quality Life isn&apos;t about diet trends.
                  </p>
                  <ul className="space-y-2 text-[#4a5d52]">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-400 rounded-full" />
                      It&apos;s not product hype.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-400 rounded-full" />
                      It&apos;s not fear marketing.
                    </li>
                  </ul>
                  <p className="text-xl text-[#1a3d2e] font-bold mt-6 mb-4">
                    It&apos;s about clarity.
                  </p>
                  <p className="text-[#4a5d52] mb-0">
                    I&apos;ll be breaking down loud internet claims and replacing them with grounded, usable systems. No extremism. No urgency. No gimmicks. <strong className="text-[#2d6a4f]">Just signal over noise!</strong>
                  </p>
                </div>

                {/* Hey You Can */}
                <Card className="bg-gradient-to-br from-[#2d6a4f] to-[#1a3d2e] p-8 my-12 border-0">
                  <h3 className="text-2xl font-bold text-white mb-4">Quality Life Series — Hey! Yes You Can</h3>
                  <p className="text-white/90 leading-relaxed mb-4">
                    If you&apos;re ready (fasting claims are next) just say something, go watch the full breakdown and let me know.
                  </p>
                  <p className="text-xl font-bold text-white mb-0">
                    The goal hasn&apos;t changed. I want to empower you to live a quality life. You owe it to yourself to be full of energy each day. You have lots to accomplish!
                  </p>
                </Card>

                {/* Closing */}
                <h2 className="text-3xl font-bold text-[#1a3d2e] mt-12 mb-6">Closing</h2>

                <p className="text-[#4a5d52] leading-relaxed mb-6">
                  I want to give you value in as many ways as possible. We live in a time with more technology, more tools, and more resources than any generation before us.
                </p>

                <div className="bg-[#e5f5ed] border-l-4 border-[#2d6a4f] p-6 rounded-r-lg mb-8">
                  <p className="text-lg text-[#1a3d2e] font-medium mb-0">
                    The question isn&apos;t access. It&apos;s application.
                  </p>
                </div>

                <p className="text-[#4a5d52] leading-relaxed mb-8">
                  My commitment is to help you filter the noise, use the right tools, and build systems that actually improve your quality of life.
                </p>

                <div className="bg-white rounded-2xl p-8 border border-[#c8e6d7] mb-12 text-center">
                  <p className="text-2xl font-bold text-[#1a3d2e] mb-2">
                    That&apos;s what it&apos;s all about!
                  </p>
                  <p className="text-lg text-[#2d6a4f] font-medium mb-0">
                    And we&apos;re just getting started.
                  </p>
                </div>

                {/* Share Section */}
                <div className="flex items-center justify-between mt-12 pt-8 border-t border-[#c8e6d7]">
                  <p className="text-[#4a5d52] font-medium">Share this article:</p>
                  <div className="flex gap-3">
                    <Button variant="outline" size="icon" className="rounded-full border-[#c8e6d7] bg-transparent hover:bg-[#e5f5ed]">
                      <Share2 className="h-5 w-5 text-[#2d6a4f]" />
                      <span className="sr-only">Share</span>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                <Card className="bg-white border-[#c8e6d7] overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1a3d2e] mb-3">About the Author</h3>
                    <p className="text-[#4a5d52] mb-4">
                      <strong>Eric Johnson, M.Sc</strong> is a health science and nutrition expert dedicated to making wellness accessible to everyone through education and advocacy.
                    </p>
                    <Button asChild className="w-full bg-[#2d6a4f] hover:bg-[#2d6a4f]/90 text-white">
                      <Link href="/about">Learn More About Coach J</Link>
                    </Button>
                  </div>
                </Card>

                <Card className="bg-[#e5f5ed] border-[#c8e6d7] p-6">
                  <h3 className="text-lg font-bold text-[#1a3d2e] mb-4">Article Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {["protein", "amino acids", "plant-based", "nutrition", "quality life"].map((tag) => (
                      <span
                        key={tag}
                        className="bg-white px-3 py-1.5 rounded-full text-sm text-[#4a5d52] border border-[#c8e6d7] hover:bg-[#f0faf5] transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>

                <Card className="bg-gradient-to-br from-[#2d6a4f] to-[#1a3d2e] text-white border-0">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">Quality Life Series</h3>
                    <p className="mb-6 text-white/90">
                      Explore more episodes that break down health claims with clarity and practical systems.
                    </p>
                    <Button asChild className="w-full bg-white text-[#1a3d2e] hover:bg-white/90">
                      <Link href="/resources/articles?category=Quality+Life">
                        View All Episodes
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
      <section ref={relatedRef} className="py-16 bg-[#e5f5ed]">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isRelatedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a3d2e] mb-8">Continue Reading</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isRelatedInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Link href={article.link} className="block group">
                    <Card className="overflow-hidden border-[#c8e6d7] bg-white hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <span className="text-xs font-medium text-[#2d6a4f] mb-2 block">{article.category}</span>
                        <h3 className="text-lg font-semibold text-[#1a3d2e] group-hover:text-[#2d6a4f] transition-colors">
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
