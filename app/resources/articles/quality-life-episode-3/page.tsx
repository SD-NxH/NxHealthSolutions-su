"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, Clock, Calendar, Share2, Play, ExternalLink, Leaf, Globe, ShoppingCart, Lightbulb } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function QualityLifeEpisode3Page() {
  const contentRef = useRef(null)
  const relatedRef = useRef(null)

  const isContentInView = useInView(contentRef, { once: true, amount: 0.1 })
  const isRelatedInView = useInView(relatedRef, { once: true, amount: 0.1 })

  const relatedArticles = [
    {
      title: "This Is Why You're Stuck",
      image: "/images/articles/quality-life-video-4.jpg",
      link: "/resources/articles/quality-life-episode-4",
      category: "Quality Life",
    },
    {
      title: "The Quality Life Series Has BEGUN",
      image: "/images/articles/quality-life-tn1.jpg",
      link: "/resources/articles/quality-life-series-has-begun",
      category: "Quality Life",
    },
    {
      title: "Oh Gosh, Protein Was Never The Problem",
      image: "/images/articles/protein-problem.jpg",
      link: "/resources/articles/protein-was-never-the-problem",
      category: "Quality Life",
    },
  ]

  const keyTakeaways = [
    {
      icon: Leaf,
      title: "Food Is More Than Nutrition",
      description: "It's about where food comes from, how it's produced, and the systems behind it.",
    },
    {
      icon: Globe,
      title: "The System We Live In",
      description: "Food is engineered to be highly appealing. Marketing is stronger than education.",
    },
    {
      icon: ShoppingCart,
      title: "Your Choices Matter",
      description: "They influence demand, production, and resources like land and water.",
    },
    {
      icon: Lightbulb,
      title: "Start Simple",
      description: "Add before you remove. Design your environment. Reduce decision fatigue.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[#faf9f6]">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/articles/quality-life-episode-3.png"
            alt="Quality Life Episode 3 - Your Food System"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2c3e2d]/95 via-[#2c3e2d]/60 to-transparent" />
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
              <span className="bg-[#4a7c59] text-white px-4 py-1.5 rounded-full text-sm font-medium">
                Quality Life
              </span>
              <span className="flex items-center text-white/80 text-sm">
                <Calendar className="h-4 w-4 mr-1.5" /> April 28, 2026
              </span>
              <span className="flex items-center text-white/80 text-sm">
                <Clock className="h-4 w-4 mr-1.5" /> 6 min read
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight text-balance">
              Food is Bigger Than What&apos;s on Your Plate
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-6 text-pretty">
              Your Food System: Understanding the bigger picture behind what we eat.
            </p>
            <p className="text-white/80 text-lg">
              By <span className="font-medium text-white">Eric Johnson, M.Sc</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 bg-[#f0ebe3]">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#e5dfd3]">
              <div className="aspect-video relative bg-black">
                <iframe
                  src="https://www.youtube.com/embed/uuygj1Uaq4w"
                  title="Quality Life Episode 3 - Your Food System"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="p-6 bg-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Play className="h-5 w-5 text-[#4a7c59]" />
                    <p className="text-sm text-[#5c6d5e]">Watch the full episode on YouTube</p>
                  </div>
                  <a
                    href="https://youtu.be/uuygj1Uaq4w"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4a7c59] hover:text-[#4a7c59]/80 transition-colors"
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
      <section ref={contentRef} className="py-12 bg-[#faf9f6]">
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
                <div className="bg-[#f0ebe3] border-l-4 border-[#4a7c59] p-6 rounded-r-lg mb-8">
                  <p className="text-xl text-[#2c3e2d] font-medium italic mb-0">
                    This week&apos;s Quality Life episode started with something usual... A conversation about food. But it quickly turned into something much bigger.
                  </p>
                </div>

                <p className="text-[#5c6d5e] leading-relaxed mb-6">
                  Hey! It&apos;s Coach J. I sat down with Gabriella, and we started with her personal journey. She made a shift in how she was eating... She joined the plant based family. And saw real improvements in her health.
                </p>

                <p className="text-[#5c6d5e] leading-relaxed mb-8">
                  But over time, her perspective expanded.
                </p>

                {/* Food Is More Than Nutrition */}
                <h2 className="text-3xl font-bold text-[#2c3e2d] mt-12 mb-6">Food Is Bigger Than Nutrition</h2>

                <p className="text-[#5c6d5e] leading-relaxed mb-6">
                  Food became more than:
                </p>

                <div className="grid gap-3 mb-8">
                  <div className="flex items-center gap-3 bg-[#fff8f0] rounded-lg p-4 border border-[#e5dfd3]">
                    <span className="text-xl">&#8226;</span>
                    <span className="text-[#5c6d5e]">calories</span>
                  </div>
                  <div className="flex items-center gap-3 bg-[#fff8f0] rounded-lg p-4 border border-[#e5dfd3]">
                    <span className="text-xl">&#8226;</span>
                    <span className="text-[#5c6d5e]">macros</span>
                  </div>
                  <div className="flex items-center gap-3 bg-[#fff8f0] rounded-lg p-4 border border-[#e5dfd3]">
                    <span className="text-xl">&#8226;</span>
                    <span className="text-[#5c6d5e]">weight goals</span>
                  </div>
                </div>

                <p className="text-[#5c6d5e] leading-relaxed mb-6">
                  It became about:
                </p>

                <div className="grid gap-3 mb-8">
                  <div className="flex items-center gap-3 bg-[#f0f7f1] rounded-lg p-4 border border-[#c8e6d7]">
                    <span className="text-2xl">&#9989;</span>
                    <span className="text-[#5c6d5e]">where food comes from</span>
                  </div>
                  <div className="flex items-center gap-3 bg-[#f0f7f1] rounded-lg p-4 border border-[#c8e6d7]">
                    <span className="text-2xl">&#9989;</span>
                    <span className="text-[#5c6d5e]">how it&apos;s produced</span>
                  </div>
                  <div className="flex items-center gap-3 bg-[#f0f7f1] rounded-lg p-4 border border-[#c8e6d7]">
                    <span className="text-2xl">&#9989;</span>
                    <span className="text-[#5c6d5e]">and the systems behind it</span>
                  </div>
                </div>

                {/* The System */}
                <h2 className="text-3xl font-bold text-[#2c3e2d] mt-12 mb-6">The System Most People Don&apos;t See</h2>

                <p className="text-[#5c6d5e] leading-relaxed mb-6">
                  We live in a system where:
                </p>

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5dfd3] mb-8">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-[#d4a373] mt-2 shrink-0" />
                      <span className="text-[#5c6d5e]">food is engineered to be highly appealing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-[#d4a373] mt-2 shrink-0" />
                      <span className="text-[#5c6d5e]">marketing is stronger than education</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-[#d4a373] mt-2 shrink-0" />
                      <span className="text-[#5c6d5e]">responsibility is placed on the individual</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#4a7c59] text-white rounded-2xl p-8 mb-8">
                  <p className="text-xl font-bold mb-4">
                    So when people feel sluggish, bloated, or low energy...
                  </p>
                  <p className="text-white/90 mb-0">
                    They assume something is wrong with them. But in many cases... They&apos;re responding exactly how their body should to &quot;products&quot; passing as food.
                  </p>
                </div>

                {/* A Bigger Perspective */}
                <h2 className="text-3xl font-bold text-[#2c3e2d] mt-12 mb-6">A Bigger Perspective</h2>

                <p className="text-[#5c6d5e] leading-relaxed mb-6">
                  Our choices don&apos;t exist in isolation. They influence:
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-[#f0ebe3] rounded-xl p-6 text-center">
                    <p className="text-lg font-bold text-[#2c3e2d]">Demand</p>
                  </div>
                  <div className="bg-[#f0ebe3] rounded-xl p-6 text-center">
                    <p className="text-lg font-bold text-[#2c3e2d]">Production</p>
                  </div>
                  <div className="bg-[#f0ebe3] rounded-xl p-6 text-center">
                    <p className="text-lg font-bold text-[#2c3e2d]">Resources</p>
                    <p className="text-sm text-[#5c6d5e]">(land and water)</p>
                  </div>
                </div>

                <p className="text-[#5c6d5e] leading-relaxed mb-8">
                  And yet, most of us never see that connection. I personally hadn&apos;t seen it until recently. Keep in mind I&apos;m almost 30! Because modern life keeps us removed from it.
                </p>

                {/* Health Solution */}
                <h2 className="text-3xl font-bold text-[#2c3e2d] mt-12 mb-6">Health Solution (Start Here)</h2>

                <p className="text-[#5c6d5e] leading-relaxed mb-6">
                  Don&apos;t overcomplicate this. Just make small, practical shifts:
                </p>

                <div className="space-y-4 mb-8">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e5dfd3]">
                    <h4 className="text-lg font-bold text-[#4a7c59] mb-2">Add Before You Remove</h4>
                    <p className="text-[#5c6d5e] mb-0">Add greens, fruit, or fiber to meals you already eat</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e5dfd3]">
                    <h4 className="text-lg font-bold text-[#4a7c59] mb-2">Design Your Environment</h4>
                    <p className="text-[#5c6d5e] mb-0">Keep better options visible, move processed foods out of reach</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e5dfd3]">
                    <h4 className="text-lg font-bold text-[#4a7c59] mb-2">Reduce Decision Fatigue</h4>
                    <p className="text-[#5c6d5e] mb-0">Repeat simple meals during the week</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e5dfd3]">
                    <h4 className="text-lg font-bold text-[#4a7c59] mb-2">Stack Small Habits</h4>
                    <p className="text-[#5c6d5e] mb-0">Walk during calls, move while doing daily tasks</p>
                  </div>
                </div>

                <div className="bg-[#f0ebe3] border-l-4 border-[#d4a373] p-6 rounded-r-lg mb-8">
                  <p className="text-lg text-[#2c3e2d] font-bold mb-0">
                    Start small. Stay consistent.
                  </p>
                </div>

                {/* One Thought */}
                <h2 className="text-3xl font-bold text-[#2c3e2d] mt-12 mb-6">One Thought to Sit With</h2>

                <div className="bg-gradient-to-br from-[#4a7c59] to-[#2c3e2d] rounded-2xl p-8 mb-8 text-white">
                  <p className="text-lg leading-relaxed mb-4">
                    You don&apos;t need to change everything overnight. But it&apos;s worth asking:
                  </p>
                  <p className="text-2xl font-bold mb-4">
                    Do my daily choices align with how I want to feel?
                  </p>
                  <p className="text-white/90 mb-0">
                    Because when they do... Health becomes easier to maintain.
                  </p>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                  <p className="text-xl text-[#2c3e2d] font-medium mb-6">
                    More coming soon.
                  </p>
                  <p className="text-lg text-[#5c6d5e] mb-4">
                    Be Well,
                  </p>
                  <p className="text-lg font-bold text-[#2c3e2d]">
                    - Eric Johnson
                  </p>
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                {/* Key Takeaways */}
                <Card className="p-6 bg-white border-[#e5dfd3]">
                  <h3 className="text-lg font-bold text-[#2c3e2d] mb-4">Key Takeaways</h3>
                  <div className="space-y-4">
                    {keyTakeaways.map((takeaway, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#f0f7f1] flex items-center justify-center">
                          <takeaway.icon className="h-5 w-5 text-[#4a7c59]" />
                        </div>
                        <div>
                          <h4 className="font-medium text-[#2c3e2d] text-sm">{takeaway.title}</h4>
                          <p className="text-xs text-[#5c6d5e] mt-0.5">{takeaway.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Share */}
                <Card className="p-6 bg-white border-[#e5dfd3]">
                  <h3 className="text-lg font-bold text-[#2c3e2d] mb-4">Share This Episode</h3>
                  <div className="flex gap-3">
                    <Button variant="outline" size="icon" className="border-[#e5dfd3] hover:bg-[#f0f7f1]">
                      <Share2 className="h-4 w-4 text-[#4a7c59]" />
                    </Button>
                  </div>
                </Card>

                {/* Watch Full Episode */}
                <Card className="p-6 bg-[#4a7c59] border-none text-white">
                  <h3 className="text-lg font-bold mb-2">Watch Full Episode</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Get the full conversation and deeper perspective on YouTube.
                  </p>
                  <a
                    href="https://youtu.be/uuygj1Uaq4w"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-[#4a7c59] px-4 py-2 rounded-lg font-medium hover:bg-white/90 transition-colors"
                  >
                    <Play className="h-4 w-4" />
                    Watch Now
                  </a>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section ref={relatedRef} className="py-16 bg-[#f0ebe3]">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isRelatedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-[#2c3e2d] mb-8">More from Quality Life</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((article, index) => (
                <Link key={index} href={article.link}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-white border-[#e5dfd3]">
                    <div className="relative h-48">
                      <Image src={article.image} alt={article.title} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <span className="text-xs font-medium text-[#4a7c59] uppercase tracking-wider">
                        {article.category}
                      </span>
                      <h3 className="text-lg font-bold text-[#2c3e2d] mt-1 line-clamp-2">{article.title}</h3>
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
