"use client"

import { motion } from "framer-motion"
import { SafeImage } from "@/components/safe-image"
import Link from "next/link"
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EricJohnsonBio } from "@/components/about/eric-johnson-bio"
import { useState, useEffect } from "react"

const galleryItems = [
  {
    id: 1,
    src: "/images/dsc00933.jpeg",
    alt: "Eric Johnson graduation at University of Texas Rio Grande Valley",
    caption: "Earning my Master of Science in Health Science & Nutrition at UT Rio Grande Valley",
    category: "Education",
  },
  {
    id: 2,
    src: "/images/img-0805.jpg",
    alt: "Eric Johnson coaching clients in gym",
    caption: "Coaching and building healthy habits one session at a time",
    category: "Coaching",
  },
  {
    id: 3,
    src: "/images/img-8234.jpeg",
    alt: "Eric Johnson at Anytime Fitness",
    caption: "Nothing truly great ever came from a comfort zone",
    category: "Fitness",
  },
  {
    id: 4,
    src: "/images/img-1418.jpeg",
    alt: "Eric Johnson mentoring student in library",
    caption: "Teaching health education and building futures in the classroom",
    category: "Community",
  },
  {
    id: 5,
    src: "/images/img-0802.jpg",
    alt: "Eric Johnson training client with bench press",
    caption: "Personal training and strength development",
    category: "Coaching",
  },
  {
    id: 6,
    src: "/images/about/eric/img-3103.jpeg", // Fixed extension from .jpg to .jpeg
    alt: "Eric Johnson with youth basketball team on court",
    caption: "Building character and leadership through basketball",
    category: "Basketball",
  },
  {
    id: 7,
    src: "/images/about/eric/img-0257.jpg",
    alt: "Eric Johnson coaching youth basketball team",
    caption: "Empowering young athletes on and off the court",
    category: "Basketball",
  },
  {
    id: 8,
    src: "/images/about/eric/img-9331.jpeg", // Fixed extension from .jpg to .jpeg
    alt: "Basketball player executing a dunk during training",
    caption: "The game that shaped my discipline and drive",
    category: "Basketball",
  },
  {
    id: 9,
    src: "/images/about/eric/img-2644.jpeg", // Fixed extension from .jpg to .jpeg
    alt: "Eric Johnson with middle school basketball team",
    caption: "Mentoring the next generation of leaders",
    category: "Basketball",
  },
  {
    id: 10,
    src: "/images/about/eric/img-0150.jpg",
    alt: "Eric Johnson with students in school hallway",
    caption: "Community engagement and health education in schools",
    category: "Community",
  },
  {
    id: 11,
    src: "/images/about/eric/img-0031.jpg",
    alt: "Eric Johnson with students at school event",
    caption: "Making health education fun and accessible for all",
    category: "Community",
  },
  {
    id: 12,
    src: "/images/about/eric/img-0367.jpg",
    alt: "Eric Johnson teaching youth basketball fundamentals",
    caption: "Teaching fundamentals: basketball, health, and life",
    category: "Basketball",
  },
  {
    id: 13,
    src: "/images/about/eric/img-9329.jpeg", // Fixed extension from .jpg to .jpeg
    alt: "Action shot of dunk during basketball event",
    caption: "Performance and passion meet on the court",
    category: "Basketball",
  },
]

export default function EricJohnsonPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)

  const goToNext = () => {
    setDirection(1)
    setCurrentImageIndex((prev) => (prev + 1) % galleryItems.length)
  }

  const goToPrevious = () => {
    setDirection(-1)
    setCurrentImageIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
  }

  useEffect(() => {
    if (!lightboxOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxOpen(false)
      } else if (e.key === "ArrowLeft") {
        goToPrevious()
      } else if (e.key === "ArrowRight") {
        goToNext()
      }
    }

    // Prevent body scroll when lightbox is open
    document.body.style.overflow = "hidden"

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [lightboxOpen])

  const openLightbox = (index: number) => {
    setDirection(0)
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return
    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStart - touchEnd
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext()
      } else {
        goToPrevious()
      }
    }
    setTouchStart(null)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-brand-lighter overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-brand rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-brand rounded-full blur-3xl" />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-brand hover:text-brand-hover mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to About</span>
          </Link>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-brand/20"
            >
              <SafeImage
                src="/ej-profile-photo.jpg"
                alt="Eric Johnson, Founder of NxHealth Solutions"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center md:text-left"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">About Me</h1>
              <p className="text-xl md:text-2xl text-brand font-medium">
                Eric Johnson <span aria-hidden="true">|</span>
                <span className="sr-only">,</span> Founder of NxHealth Solutions
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <EricJohnsonBio />


          {/* Photo Gallery Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Journey in Photos</h2>
            <div className="text-base md:text-lg leading-relaxed text-muted-foreground space-y-4 mb-8 text-pretty">
              <p>
                These moments represent the people, experiences, and communities that have shaped my journey through
                education, athletics, coaching, and service.
              </p>
              <p>They are reminders of where I started, what I’ve learned, and why I continue this work.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer group ${
                    index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                  }`}
                  onClick={() => openLightbox(index)}
                >
                  <div className={`relative ${index === 0 ? "h-96" : "h-64"}`}>
                    <SafeImage
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes={index === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <p className="text-sm font-medium mb-1">{item.category}</p>
                        <p className="text-xs">{item.caption}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-t border-border pt-8 text-center md:text-left"
          >
            <p className="text-lg font-semibold text-foreground">Eric Johnson, M.Sc, DHNM</p>
            <p className="text-brand">Founder, NxHealth Solutions</p>
            <p className="text-muted-foreground italic mt-2">Better Health. Better Life.</p>
            <p className="text-foreground font-medium mt-4">Be well</p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-brand hover:bg-brand-hover text-brand-foreground">
                <Link href="/get-started">Get Started with NxHealth</Link>
              </Button>
              <a
                href="https://donate.stripe.com/eVq00j0xqe1N3ry2IQ9oc0I"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Donate to NxHealth Solutions"
                className="donate-button inline-flex items-center justify-center h-11 px-8 text-base font-medium rounded-md border-2 border-brand bg-background text-brand hover:bg-brand-lighter hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 transition-all cursor-pointer"
              >
                Donate
              </a>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-brand transition-colors z-50 p-2"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            className="absolute left-2 md:left-4 text-white hover:text-brand transition-colors z-50 p-2 bg-black/30 rounded-full hover:bg-black/50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className="absolute right-2 md:right-4 text-white hover:text-brand transition-colors z-50 p-2 bg-black/30 rounded-full hover:bg-black/50"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
          </button>

          <div 
            className="max-w-5xl w-full max-h-[90vh] flex flex-col" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex-1 min-h-0 w-full overflow-hidden">
              <motion.div
                key={currentImageIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="relative w-full h-full"
                style={{ minHeight: "50vh", maxHeight: "70vh" }}
              >
                <SafeImage
                  src={galleryItems[currentImageIndex].src}
                  alt={galleryItems[currentImageIndex].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </motion.div>
            </div>
            <motion.div 
              key={`caption-${currentImageIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="text-center text-white pt-4 pb-2"
            >
              <p className="text-sm font-medium text-brand mb-2">{galleryItems[currentImageIndex].category}</p>
              <p className="text-base md:text-lg px-4">{galleryItems[currentImageIndex].caption}</p>
              <p className="text-sm text-white/60 mt-2">
                {currentImageIndex + 1} / {galleryItems.length}
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </main>
  )
}
