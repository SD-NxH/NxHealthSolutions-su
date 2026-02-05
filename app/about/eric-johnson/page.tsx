"use client"

import { motion } from "framer-motion"
import { SafeImage } from "@/components/safe-image"
import Link from "next/link"
import { ArrowLeft, Leaf, Heart, Users, Sprout, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
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

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen, currentImageIndex])

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryItems.length)
  }

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
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
              <p className="text-xl md:text-2xl text-brand font-medium">Founder of NxHealth Solutions</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          {/* About Me Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">About Me</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                My name is Eric Johnson, and I believe health was never meant to be complicated, commercialized, or out
                of reach.
              </p>
              <p>
                I was born in Arkansas and raised largely in Texas, and for as long as I can remember, health, movement,
                and service have been central themes in my life. What began as a passion for sports—especially
                basketball—evolved into a deeper calling: helping people reclaim their health through real food,
                intentional living, and sustainable habits.
              </p>
              <p>
                I entered the fitness world as a personal trainer at 18, but it wasn't long before I realized something
                was missing. I could help people move, sweat, and push their bodies—but many were still sick, tired,
                inflamed, and confused about food. That curiosity led me into higher education and the world of
                nutrition and health science.
              </p>
              <p>
                I earned my Bachelor of Science in Exercise Science from Texas Wesleyan University, where a single
                nutrition course changed the direction of my life. From there, I went on to complete my Master of
                Science in Health Science & Nutrition at The University of Texas–Rio Grande Valley during the height of
                the pandemic—a time when the cracks in our healthcare and food systems became impossible to ignore. I am
                currently continuing my academic journey as a PhD candidate in Nutritional Medicine, deepening my focus
                on food as a foundational tool for healing, prevention, and quality of life.
              </p>
            </div>
          </motion.section>

          {/* Why I Created NxHealth Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">Why I Created NxHealth Solutions</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                NxHealth Solutions was born quietly in my college apartment in 2018—not as a brand, but as a response.
              </p>
              <p>
                I grew up seeing too many people struggle with preventable health issues. I saw confusion, burnout,
                chronic disease, and a system that often treats symptoms instead of addressing root causes. I also saw
                how far we've drifted from the basics—real food, movement, rest, community, and purpose.
              </p>
              <p>NxHealth exists to bring people back to those fundamentals.</p>
            </div>

            {/* Focus Areas */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-brand-lighter rounded-lg">
                <Leaf className="w-6 h-6 text-brand flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Food as Medicine</h4>
                  <p className="text-sm text-muted-foreground">Using food as medicine, not fear</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-brand-lighter rounded-lg">
                <Sprout className="w-6 h-6 text-brand flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Plant-Forward</h4>
                  <p className="text-sm text-muted-foreground">
                    Prioritizing plants, whole foods, and minimal processing
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-brand-lighter rounded-lg">
                <Heart className="w-6 h-6 text-brand flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Sustainable Habits</h4>
                  <p className="text-sm text-muted-foreground">Building habits, not short-term fixes</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-brand-lighter rounded-lg">
                <Users className="w-6 h-6 text-brand flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Health Ownership</h4>
                  <p className="text-sm text-muted-foreground">Teaching people to take ownership—without gimmicks</p>
                </div>
              </div>
            </div>

            <div className="mt-8 prose prose-lg max-w-none text-muted-foreground">
              <p>
                Through NxHealth, I offer education, coaching, and transformational programs that help individuals
                improve their quality of life step by step. My 30-day LifeRight Transformation approach is built around
                simple, evidence-based practices: hydration, plant-forward nutrition, mindful movement, sleep, mindset,
                community, and consistency—not perfection.
              </p>
            </div>
          </motion.section>

          {/* My Philosophy Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">My Philosophy</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                I don't believe health should feel overwhelming.
                <br />I don't believe it should be locked behind paywalls, products, or pressure.
                <br />
                And I don't believe we need more ultra-processed "solutions" to fix problems created by ultra-processed
                lifestyles.
              </p>
            </div>

            {/* Beliefs */}
            <div className="mt-8 bg-card border border-border rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">I believe:</h3>
              <ul className="space-y-3">
                {[
                  "Food heals",
                  "Plants are foundational",
                  "Small daily changes compound",
                  "Progress beats perfection",
                  "Health is a lifelong practice",
                ].map((belief, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-brand rounded-full flex-shrink-0" />
                    <span className="text-muted-foreground">{belief}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 prose prose-lg max-w-none text-muted-foreground">
              <p>
                Much of what I teach is freely shared—because access to knowledge should never be the barrier to better
                health. My goal is not to sell fear or trends, but to restore confidence and clarity around how the
                human body actually works.
              </p>
            </div>
          </motion.section>

          {/* Operation Free Food Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">Beyond the Individual: Operation Free Food</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>My mission extends beyond individual transformation.</p>
              <p>
                Through Operation Free Food, I'm working toward a future where communities are less dependent on broken
                systems and more connected to food, land, and each other. This includes education, gardening, local food
                systems, and reimagining how we feed ourselves—starting with feeding ourselves first.
              </p>
            </div>
          </motion.section>

          {/* Why I Do This Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">Why I Do This</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                I do this because I've seen what happens when people feel empowered instead of confused.
                <br />I do this because food was never meant to make us sick.
                <br />
                And I do this because I truly believe that changing our relationship with food can change our lives—and
                our communities.
              </p>
              <p>
                If you're here, you don't need perfection.
                <br />
                You need a starting point.
              </p>
              <p className="font-medium text-foreground">And I'm honored to walk that path with you.</p>
            </div>
          </motion.section>

          {/* Credentials & Background Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">Credentials & Background</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                My work is grounded in both lived experience and formal education across exercise science, nutrition,
                and health education.
              </p>
              <p>
                I hold a Bachelor of Science in Exercise Science from Texas Wesleyan University, where my academic path
                was reshaped by a foundational nutrition course that revealed the powerful role food plays in human
                performance, recovery, and long-term health. I later completed my Master of Science in Health Science &
                Nutrition at The University of Texas–Rio Grande Valley, studying during the height of the COVID-19
                pandemic—a period that exposed deep cracks in our healthcare and food systems and reinforced my
                commitment to prevention-focused, root-cause health solutions.
              </p>
              <p>
                I am currently a Doctoral Candidate in Nutritional Medicine, continuing my research and training with a
                focus on food as medicine, lifestyle-driven disease prevention, and sustainable health practices that
                improve quality of life.
              </p>
              <p>
                Professionally, my background spans education, fitness, and applied health practice. I have worked as a
                personal trainer and health fitness specialist, guiding individuals through strength training, group
                fitness, assessments, and behavior change. I've also served as a Health and Physical Education teacher,
                bringing evidence-based health education directly into schools and communities—where access to clear,
                practical health knowledge is often most needed.
              </p>
            </div>

            {/* Certifications List */}
            <div className="mt-8 bg-card border border-border rounded-xl p-6 md:p-8">
              <ul className="space-y-3">
                {[
                  "Health EC–12",
                  "Physical Education EC–12",
                  "American Council on Exercise (ACE) Certified Personal Trainer",
                  "American Heart Association CPR & AED",
                ].map((cert, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-brand rounded-full flex-shrink-0" />
                    <span className="text-muted-foreground">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Beyond formal roles, my experience includes years of community service, athletics, and leadership,
                including collegiate basketball, food pantry volunteering, and community health initiatives. These
                experiences shaped my belief that health is not an individual pursuit alone—it's cultural, communal, and
                deeply connected to access, education, and environment.
              </p>
              <p>
                This blend of academic training, real-world coaching, classroom teaching, and community involvement is
                what informs everything I build through NxHealth Solutions.
              </p>
            </div>
          </motion.section>

          {/* Photo Gallery Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">Journey in Photos</h2>
            <p className="text-lg text-muted-foreground mb-8">
              A visual story of my work in education, fitness, basketball, and community service.
            </p>

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
            <p className="text-lg font-semibold text-foreground">— Eric Johnson, M.S.</p>
            <p className="text-brand">Founder, NxHealth Solutions</p>
            <p className="text-muted-foreground italic mt-2">Better Health. Better Life.</p>
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
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-brand transition-colors z-50"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            className="absolute left-4 text-white hover:text-brand transition-colors z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className="absolute right-4 text-white hover:text-brand transition-colors z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video w-full mb-4">
              <SafeImage
                src={galleryItems[currentImageIndex].src}
                alt={galleryItems[currentImageIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            <div className="text-center text-white">
              <p className="text-sm font-medium text-brand mb-2">{galleryItems[currentImageIndex].category}</p>
              <p className="text-lg">{galleryItems[currentImageIndex].caption}</p>
              <p className="text-sm text-white/60 mt-2">
                {currentImageIndex + 1} / {galleryItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
