"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { SafeImage } from "@/components/safe-image"

// Health hub items data
const healthHubItems = [
  {
    id: "blueberries",
    title: "Blueberries",
    image: "/images/health-hub/blueberries.jpg",
    type: "Food",
    url: "/resources/foods/blueberry",
    isExternal: false,
  },
  {
    id: "tofu-press",
    title: "Tofu Press",
    image: "/images/health-hub/tofu-press.png",
    type: "Product",
    url: "https://amzn.to/49Cagaq",
    isExternal: true,
  },
  {
    id: "oats",
    title: "Oats",
    image: "/images/health-hub/oats.jpg",
    type: "Food",
    url: "/resources/health-hub/oats",
    isExternal: false,
  },
  {
    id: "turmeric",
    title: "Turmeric",
    image: "/images/health-hub/turmeric.jpg",
    type: "Herb",
    url: "/resources/health-hub/turmeric",
    isExternal: false,
  },
  {
    id: "ginger",
    title: "Ginger",
    image: "/images/health-hub/ginger.jpg",
    type: "Herb",
    url: "/resources/health-hub/ginger",
    isExternal: false,
  },
  {
    id: "totos-cookies",
    title: "Toto's Cookies",
    image: "/images/health-hub/totos-cookies.png",
    type: "Product",
    url: "https://amzn.to/4998wq5",
    isExternal: true,
  },
  {
    id: "electrolytes",
    title: "Electrolytes",
    image: "/images/health-hub/electrolytes.jpg",
    type: "Product",
    url: "/resources/health-hub/electrolytes",
    isExternal: false,
  },
  {
    id: "pumpkin-seeds",
    title: "Pumpkin Seeds",
    image: "/images/health-hub/pumpkin-seeds.jpg",
    type: "Food",
    url: "/resources/health-hub/pumpkin-seeds",
    isExternal: false,
  },
]

export function HealthHub() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)

      const cardWidth = 280 + 16
      const newIndex = Math.round(scrollLeft / cardWidth)
      setCurrentIndex(Math.min(newIndex, healthHubItems.length - 1))
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
      const scrollAmount = 296
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
          <h2 className="text-3xl md:text-4xl font-serif font-light text-brand-dark mb-4">Health Hub</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Products, foods, and herbs that can increase your quality of life.
          </p>
        </motion.div>

        {/* Featured Item - Vivo Barefoot Shoes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            {/* Featured Image */}
            <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-xl">
              <SafeImage
                src="/images/health-hub/featured-vivo.png"
                alt="Vivo Barefoot Shoes"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Featured Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">Vivo Barefoot Shoes</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Have you ever thought about trying zero-drop shoes? They've changed my life. They come with many
                  benefits, from improved posture and balance to strengthened foot muscles and enhanced natural
                  movement. Experience the difference barefoot technology can make.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="https://youtu.be/YhuFv1woVXI" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-brand hover:bg-brand-hover text-white rounded-full px-6 py-5 text-base">
                    Learn More
                  </Button>
                </a>
                <a href="https://amzn.to/4qh2nyh" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="rounded-full px-6 py-5 text-base border-brand text-brand hover:bg-brand-lighter bg-transparent"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Explore
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Health Hub Items Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground">Explore More</h3>
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
              {healthHubItems.map((item) => {
                const ItemWrapper = item.isExternal ? "a" : Link
                const linkProps = item.isExternal
                  ? { href: item.url, target: "_blank", rel: "noopener noreferrer" }
                  : { href: item.url }

                return (
                  <ItemWrapper key={item.id} {...linkProps} className="group flex-shrink-0 snap-start">
                    <div className="w-[280px] bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]">
                      <div className="relative aspect-square">
                        <SafeImage
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-3 right-3">
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-brand text-white">
                            {item.type}
                          </span>
                        </div>
                        {item.isExternal && (
                          <div className="absolute bottom-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ExternalLink className="h-4 w-4 text-brand" />
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h4 className="font-medium text-foreground group-hover:text-brand transition-colors">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  </ItemWrapper>
                )
              })}
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
            {healthHubItems.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-6 bg-brand" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to item ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
