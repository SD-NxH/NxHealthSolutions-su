"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Clock, Calendar, Share2, Play, ExternalLink, Brain, Utensils, Dumbbell } from "lucide-react"
import { motion, useInView, AnimatePresence } from "framer-motion"

export default function QualityLifeSeriesHasBegunPage() {
  const contentRef = useRef(null)
  const relatedRef = useRef(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

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
      title: "Oh Gosh, Protein Was Never The Problem",
      image: "/images/articles/protein-problem.jpg",
      link: "/resources/articles/protein-was-never-the-problem",
      category: "Quality Life",
    },
    {
      title: "A Quiet Realization About Health",
      image: "/images/articles/quiet-realization.jpg",
      link: "/resources/articles/quiet-realization-about-health",
      category: "Quality Life",
    },
  ]

  const qualityLifeVideos = [
    {
      id: 1,
      title: "Lift or Decline",
      thumbnail: "/images/articles/quality-life-video-1.jpg",
      duration: "8:24",
      url: "https://youtube.com/playlist?list=PLb4-LURph2uCCNtLXPeHb-XUGHVhfpseq",
    },
    {
      id: 2,
      title: "The Missing Pillar",
      thumbnail: "/images/articles/quality-life-video-2.jpg",
      duration: "10:12",
      url: "https://youtube.com/playlist?list=PLb4-LURph2uCCNtLXPeHb-XUGHVhfpseq",
    },
    {
      id: 3,
      title: "Your Food System",
      thumbnail: "/images/articles/quality-life-video-3.jpg",
      duration: "7:45",
      url: "https://youtube.com/playlist?list=PLb4-LURph2uCCNtLXPeHb-XUGHVhfpseq",
    },
    {
      id: 4,
      title: "This Is Why You're Stuck",
      thumbnail: "/images/articles/quality-life-video-4.jpg",
      duration: "9:30",
      url: "https://youtube.com/playlist?list=PLb4-LURph2uCCNtLXPeHb-XUGHVhfpseq",
    },
    {
      id: 5,
      title: "This Saved Her Life",
      thumbnail: "/images/articles/quality-life-video-5.jpg",
      duration: "11:15",
      url: "https://youtube.com/playlist?list=PLb4-LURph2uCCNtLXPeHb-XUGHVhfpseq",
    },
  ]

  const pillars = [
    {
      icon: Brain,
      title: "Mind",
      description: "How stress, focus, and recovery influence health",
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: Utensils,
      title: "Macros",
      description: "The quality and structure of the food we eat",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Dumbbell,
      title: "Movement",
      description: "How physical capability supports long-term vitality",
      color: "from-orange-500 to-red-500",
    },
  ]

  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 320
      const newScrollLeft = direction === "left" 
        ? sliderRef.current.scrollLeft - scrollAmount 
        : sliderRef.current.scrollLeft + scrollAmount
      sliderRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" })
    }
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % qualityLifeVideos.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + qualityLifeVideos.length) % qualityLifeVideos.length)
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/articles/quality-life-series.jpg"
            alt="The Quality Life Series Has Begun"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
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
                <Calendar className="h-4 w-4 mr-1.5" /> April 10, 2026
              </span>
              <span className="flex items-center text-white/80 text-sm">
                <Clock className="h-4 w-4 mr-1.5" /> 5 min read
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight text-balance">
              The Quality Life Series Has BEGUN
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-6 text-pretty">
              Making health clearer, calmer, and more practical. This is the start of something I&apos;ve been wanting to build for a long time.
            </p>
            <p className="text-white/80 text-lg">
              By <span className="font-medium text-white">Eric Johnson, M.Sc</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Slider Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">Latest Quality Life Videos</h2>
                <p className="text-muted-foreground">Watch the series on YouTube</p>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => scrollSlider("left")}
                  className="rounded-full border-border hover:bg-accent"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => scrollSlider("right")}
                  className="rounded-full border-border hover:bg-accent"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Desktop Slider */}
            <div 
              ref={sliderRef}
              className="hidden md:flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {qualityLifeVideos.map((video, index) => (
                <motion.a
                  key={video.id}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex-shrink-0 w-[300px]"
                >
                  <Card className="overflow-hidden border-border hover:shadow-xl transition-all duration-300 hover:border-primary">
                    <div className="relative aspect-video">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                          <Play className="h-8 w-8 text-primary ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs font-medium">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {video.title}
                      </h3>
                    </div>
                  </Card>
                </motion.a>
              ))}
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden relative">
              <div className="overflow-hidden rounded-xl">
                <AnimatePresence mode="wait">
                  <motion.a
                    key={currentSlide}
                    href={qualityLifeVideos[currentSlide].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    className="block"
                  >
                    <Card className="overflow-hidden border-border">
                      <div className="relative aspect-video">
                        <Image
                          src={qualityLifeVideos[currentSlide].thumbnail}
                          alt={qualityLifeVideos[currentSlide].title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                            <Play className="h-8 w-8 text-primary ml-1" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs font-medium">
                          {qualityLifeVideos[currentSlide].duration}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-foreground">
                          {qualityLifeVideos[currentSlide].title}
                        </h3>
                      </div>
                    </Card>
                  </motion.a>
                </AnimatePresence>
              </div>

              {/* Mobile Navigation */}
              <div className="flex items-center justify-center gap-4 mt-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="rounded-full"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <div className="flex gap-2">
                  {qualityLifeVideos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${
                        index === currentSlide ? "bg-primary" : "bg-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  className="rounded-full"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* View Playlist CTA */}
            <div className="text-center mt-8">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a 
                  href="https://youtube.com/playlist?list=PLb4-LURph2uCCNtLXPeHb-XUGHVhfpseq&si=ezCHBpRZOyIcJ14h" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Play className="h-4 w-4" />
                  Watch Full Playlist on YouTube
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
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
                    This week (3/06/26) marked the start of something I&apos;ve been wanting to build for a long time. I officially launched a new recurring series called <strong>Quality Life</strong>.
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  The goal of this series is simple:
                </p>

                <div className="bg-primary text-primary-foreground rounded-2xl p-8 mb-8 text-center">
                  <p className="text-2xl md:text-3xl font-bold mb-0">
                    To make health clearer, calmer, and more practical.
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Because if you look around the internet right now, health has become incredibly complicated.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  There are:
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "supplements for everything",
                    "endless morning routines",
                    "conflicting diet rules",
                    "optimization hacks everywhere",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-destructive mt-2 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  And the result is that people end up feeling <strong className="text-foreground">overwhelmed instead of empowered</strong>.
                </p>

                <div className="bg-muted/50 rounded-2xl p-8 my-12 border border-border">
                  <p className="text-xl text-foreground font-medium mb-4">But the truth is much simpler.</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Your body already knows how to repair itself. It already knows how to regulate itself. Most of the time, the problem isn&apos;t that the body is broken.
                  </p>
                  <p className="text-lg font-bold text-primary mb-0">
                    The problem is the environment we place it in.
                  </p>
                </div>

                {/* Official Trailer Section */}
                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Quality Life: Official Trailer</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  The trailer introduces the philosophy behind the entire series. The focus should not be on adding more hacks. I want to focus on <strong className="text-foreground">removing the interruptions</strong> that block your biology from working the way it was designed.
                </p>

                {/* Three Pillars */}
                <h3 className="text-2xl font-bold text-foreground mt-10 mb-6">The Three Pillars of Health</h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  The foundation of the series is built around three pillars:
                </p>

                <div className="grid gap-4 mb-12">
                  {pillars.map((pillar, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group"
                    >
                      <Card className="overflow-hidden border-border hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-4 p-6">
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center shrink-0`}>
                            <pillar.icon className="h-7 w-7 text-white" />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-foreground mb-1">{pillar.title}</h4>
                            <p className="text-muted-foreground text-sm">{pillar.description}</p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  Everything in the series will connect back to those three pillars of health.
                </p>

                {/* Quick Reflection */}
                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Quick Reflection</h2>

                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl my-8 border border-primary/20">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Health doesn&apos;t require perfection. It requires <strong className="text-foreground">systems</strong>.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-0">
                    When the environment supports your biology, the body tends to do what it was designed to do. That&apos;s the spirit behind Quality Life.
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  Each episode will explore a different system, environment, or idea that helps people live <strong className="text-foreground">stronger, clearer, and more capable lives</strong>.
                </p>

                {/* Final Section */}
                <Card className="bg-primary text-primary-foreground p-8 my-12 border-0">
                  <h3 className="text-2xl font-bold mb-4">More Episodes Coming Soon!</h3>
                  <p className="text-primary-foreground/90 leading-relaxed mb-6">
                    Subscribe to stay updated as we release new episodes exploring practical health systems.
                  </p>
                  <Button asChild className="bg-background text-foreground hover:bg-background/90">
                    <a 
                      href="https://youtube.com/playlist?list=PLb4-LURph2uCCNtLXPeHb-XUGHVhfpseq&si=ezCHBpRZOyIcJ14h" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <Play className="h-4 w-4" />
                      Subscribe on YouTube
                    </a>
                  </Button>
                </Card>

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
                  <h3 className="text-lg font-bold text-foreground mb-4">Series Focus</h3>
                  <div className="flex flex-wrap gap-2">
                    {["mind", "macros", "movement", "systems", "quality life"].map((tag) => (
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
                      Explore all Quality Life episodes on YouTube.
                    </p>
                    <Button asChild className="w-full bg-background text-foreground hover:bg-background/90">
                      <a 
                        href="https://youtube.com/playlist?list=PLb4-LURph2uCCNtLXPeHb-XUGHVhfpseq&si=ezCHBpRZOyIcJ14h" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        View Playlist
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
