"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, ExternalLink, Youtube } from "lucide-react"
import Image from "next/image"

// Featured videos data
const featuredVideos = [
  {
    id: "YhuFv1woVXI",
    title: "Vivo Barefoot Sensus Shoe Review",
    thumbnail: `https://img.youtube.com/vi/YhuFv1woVXI/maxresdefault.jpg`,
    url: "https://youtu.be/YhuFv1woVXI",
  },
  {
    id: "ZjWVxKOXz9E",
    title: "Why You're Constipated (And How to Fix It Naturally)",
    thumbnail: `https://img.youtube.com/vi/ZjWVxKOXz9E/maxresdefault.jpg`,
    url: "https://youtu.be/ZjWVxKOXz9E",
  },
  {
    id: "T-vugc_BNX8",
    title: "YOU STINK…Here's Why!",
    thumbnail: `https://img.youtube.com/vi/T-vugc_BNX8/maxresdefault.jpg`,
    url: "https://youtu.be/T-vugc_BNX8",
  },
  {
    id: "QtWzloMAPNw",
    title: "Being Healthy Is Expensive… Here's Why.",
    thumbnail: `https://img.youtube.com/vi/QtWzloMAPNw/maxresdefault.jpg`,
    url: "https://youtu.be/QtWzloMAPNw",
  },
  {
    id: "tORFjgN6-6c",
    title: "What The Heck Am I Supposed To Eat?",
    thumbnail: `https://img.youtube.com/vi/tORFjgN6-6c/maxresdefault.jpg`,
    url: "https://youtu.be/tORFjgN6-6c",
  },
]

// Latest video (can be updated manually or via API later)
const latestVideo = {
  id: "0bKOol-3rJM",
  title: "Nutrition Fundamentals: Building a Healthy Foundation",
  description: "Learn the core principles of nutrition and how to build sustainable healthy eating habits.",
  thumbnail: `https://img.youtube.com/vi/0bKOol-3rJM/maxresdefault.jpg`,
  url: "https://youtu.be/0bKOol-3rJM",
}

const channelUrl = "https://youtube.com/@coachj.58?si=m5jCwqAmIWHcWdUm"
const subscribeUrl = "https://youtube.com/@coachj.58?sub_confirmation=1"

export function YoutubeMediaHub() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)

      // Calculate current index based on scroll position
      const cardWidth = 280 + 16 // card width + gap
      const newIndex = Math.round(scrollLeft / cardWidth)
      setCurrentIndex(Math.min(newIndex, featuredVideos.length - 1))
    }
  }

  useEffect(() => {
    checkScrollability()
    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener("scroll", checkScrollability)
      return () => carousel.removeEventListener("scroll", checkScrollability)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 296 // card width + gap
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = 296
      carouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Youtube className="h-8 w-8 text-red-600" />
            <h2 className="text-3xl md:text-4xl font-serif font-light text-brand-dark">Watch Coach J</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Latest videos on nutrition, lifestyle, and real-food health.
          </p>
        </motion.div>

        {/* Latest Video Feature */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            {/* Video Embed */}
            <a
              href={latestVideo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-video rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={latestVideo.thumbnail || "/placeholder.svg"}
                alt={latestVideo.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-10 w-10 text-white ml-1" fill="white" />
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-brand text-white px-3 py-1 rounded-full text-sm font-medium">
                Latest Video
              </div>
            </a>

            {/* Video Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">{latestVideo.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{latestVideo.description}</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href={latestVideo.url} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-6 py-5 text-base">
                    <Play className="h-5 w-5 mr-2" fill="white" />
                    Watch on YouTube
                  </Button>
                </a>
                <a href={channelUrl} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="rounded-full px-6 py-5 text-base border-brand text-brand hover:bg-brand-lighter bg-transparent"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    View Channel
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Videos Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground">Featured Videos</h3>
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="p-2 rounded-full bg-card border border-border hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-5 w-5 text-foreground" />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="p-2 rounded-full bg-card border border-border hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-5 w-5 text-foreground" />
              </button>
            </div>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div
              ref={carouselRef}
              className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {featuredVideos.map((video, index) => (
                <a
                  key={video.id}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-shrink-0 snap-start"
                >
                  <div className="w-[280px] bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]">
                    <div className="relative aspect-video">
                      <Image
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                          <Play className="h-7 w-7 text-white ml-0.5" fill="white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium text-foreground line-clamp-2 group-hover:text-brand transition-colors">
                        {video.title}
                      </h4>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Mobile Arrow Controls */}
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 p-2 rounded-full bg-card/90 border border-border shadow-lg disabled:opacity-0 transition-opacity z-10"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 p-2 rounded-full bg-card/90 border border-border shadow-lg disabled:opacity-0 transition-opacity z-10"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {featuredVideos.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-6 bg-brand" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Channel CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-4">
            <a href={channelUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-brand hover:bg-brand-hover text-white rounded-full px-8 py-5 text-base">
                <Youtube className="h-5 w-5 mr-2" />
                View Full Channel
              </Button>
            </a>
            <a href={subscribeUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="rounded-full px-8 py-5 text-base border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
              >
                Subscribe
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
