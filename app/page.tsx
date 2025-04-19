"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Leaf, ClipboardList, Apple } from "lucide-react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

export default function Home() {
  const isMobile = useMobile()
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const aboutRef = useRef(null)
  const ctaRef = useRef(null)

  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.2 })
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.2 })
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.2 })

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-green-50 to-white"
        style={{
          opacity: heroOpacity,
          scale: heroScale,
          y: heroY,
        }}
      >
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto pt-4 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-40 h-40 md:w-56 md:h-56"
            >
              <Link href="/resources" className="p-4">
                <div className="absolute inset-0 bg-green-100/30 backdrop-blur-md rounded-full transform -rotate-6 scale-110"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl border-4 border-white/30 backdrop-filter backdrop-blur-sm">
                  <Image
                    src="/NxLogo-ALT-2.png"
                    alt="NX Health Solutions Logo"
                    fill
                    className="object-contain scale-95 hover:scale-100 transition-all duration-500"
                  />
                </div>
                <div className="absolute -inset-4 bg-green-200/20 rounded-full blur-xl -z-10 animate-pulse"></div>
              </Link>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-serif font-light tracking-tight text-green-800"
            >
              Better Health.
              <br />
              Better Life.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-600 max-w-2xl"
            >
              We provide evidence-based health solutions to help you achieve optimal wellness and improve your quality
              of life.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg">
                <Link href="/services">Our Services</Link>
              </Button>
              <Link href="/shop">
                <Button
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 rounded-full px-8 py-6 text-lg"
                >
                  Shop Our Menu
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive health and wellness solutions tailored to your individual needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Leaf className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-serif font-medium text-gray-900 mb-3">Health & Wellness</h3>
              <p className="text-gray-600">
                Holistic approaches to improve your overall health and wellbeing through personalized wellness plans.
              </p>
              {/* Now update the links to point to specific sections on the services page */}

              {/* For the Health & Wellness service */}
              <Link href="/health-wellness" className="mt-6 inline-flex items-center text-green-600 font-medium">
                Learn more <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <ClipboardList className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-serif font-medium text-gray-900 mb-3">Diet Coaching</h3>
              <p className="text-gray-600">
                Expert guidance on nutrition and dietary habits to help you achieve your health goals.
              </p>
              {/* For the Diet Counseling service */}
              <Link href="/services/diet-coaching" className="mt-6 inline-flex items-center text-green-600 font-medium">
                Learn more <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Apple className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-serif font-medium text-gray-900 mb-3">Nutrition Planning</h3>
              <p className="text-gray-600">
                Personalized nutrition recommendations based on your unique health profile and goals.
              </p>
              {/* For the Nutrition Advice service */}
              <Link href="/get-started" className="mt-6 inline-flex items-center text-green-600 font-medium">
                Get Started <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-green-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 mb-6">
                At NxHealth Solutions, our goal is to help increase the quality of your life in any way possible. We
                believe that everyone deserves access to quality health information and services.
              </p>
              <p className="text-xl text-gray-600 mb-8">
                Through evidence-based approaches and personalized care, we empower you to take control of your health
                journey.
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg">
                <Link href="/about">About Us</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
              <Image
                src="/fresh-produce.jpeg"
                alt="Fresh fruits and vegetables including apples, oranges, broccoli and spinach"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <p className="text-white text-lg font-medium drop-shadow-md">
                  Food as medicine: The foundation of our approach to health
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-green-800 text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-serif font-light mb-6"
          >
            Ready to transform your health?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-green-100 max-w-2xl mx-auto mb-10"
          >
            Take the first step toward a healthier lifestyle with our personalized health solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button className="bg-white text-green-800 hover:bg-green-100 rounded-full px-8 py-6 text-lg">
              <Link href="/get-started">Get Started Today</Link>
            </Button>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-green-700 rounded-full px-8 py-6 text-lg"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
