"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function HealthWellnessPage() {
  const headerRef = useRef(null)
  const approachRef = useRef(null)
  const benefitsRef = useRef(null)
  const ctaRef = useRef(null)

  const isApproachInView = useInView(approachRef, { once: true, amount: 0.2 })
  const isBenefitsInView = useInView(benefitsRef, { once: true, amount: 0.2 })
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.2 })

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        ref={headerRef}
        className="relative w-full py-16 md:py-24 bg-gradient-to-b from-brand-lighter to-background"
      >
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-brand mb-4">
              Health & Wellness Support
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive, personalized solutions to help you achieve optimal health and wellbeing
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section ref={approachRef} className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isApproachInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-6">Our Approach</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At NxHealth Solutions, we believe in a holistic approach to health and wellness that addresses the whole
                person—body, mind, and spirit.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our health and wellness support services are designed to help you identify and address the root causes
                of health concerns, rather than just treating symptoms.
              </p>
              <p className="text-lg text-muted-foreground">
                Through personalized assessments, evidence-based recommendations, and ongoing support, we empower you to
                make sustainable lifestyle changes that lead to lasting health improvements.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isApproachInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-md"
            >
              <Image
                src="/nutrition-image.jpeg"
                alt="Fresh fruits and vegetables representing holistic health approach"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-16 bg-brand-lighter">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-6">
              Benefits of Our Health & Wellness Support
            </h2>
            <p className="text-lg text-muted-foreground">
              Experience transformative changes in your health and quality of life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-card p-6 rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-brand" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">Personalized Approach</h3>
              <p className="text-muted-foreground">
                Tailored recommendations based on your unique health profile, goals, and lifestyle factors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-card p-6 rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-brand" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">Comprehensive Support</h3>
              <p className="text-muted-foreground">
                Guidance on nutrition, physical activity, stress management, sleep optimization, and more.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-card p-6 rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-brand" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">Sustainable Results</h3>
              <p className="text-muted-foreground">
                Focus on creating lasting habits and lifestyle changes rather than quick fixes or temporary solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-card p-6 rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-brand" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">Evidence-Based Approach</h3>
              <p className="text-muted-foreground">
                Recommendations grounded in scientific research and proven health principles.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-card p-6 rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-brand" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">Ongoing Guidance</h3>
              <p className="text-muted-foreground">
                Regular check-ins and adjustments to your plan as your health evolves and improves.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-card p-6 rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-brand" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">Empowering Education</h3>
              <p className="text-muted-foreground">
                Learn the why behind our recommendations so you can make informed health decisions independently.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-6 text-center">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              Our health and wellness support services include:
            </p>

            <div className="space-y-6">
              <div className="p-6 border border-brand/20 rounded-xl bg-brand-lighter">
                <h3 className="text-xl font-medium text-foreground mb-2">Initial Health Assessment</h3>
                <p className="text-muted-foreground">
                  A comprehensive evaluation of your current health status, including health history, lifestyle factors,
                  and wellness goals.
                </p>
              </div>

              <div className="p-6 border border-brand/20 rounded-xl bg-brand-lighter">
                <h3 className="text-xl font-medium text-foreground mb-2">Personalized Wellness Plan</h3>
                <p className="text-muted-foreground">
                  A customized roadmap for improving your health, with specific recommendations for nutrition, physical
                  activity, stress management, and more.
                </p>
              </div>

              <div className="p-6 border border-brand/20 rounded-xl bg-brand-lighter">
                <h3 className="text-xl font-medium text-foreground mb-2">One-on-One Coaching Sessions</h3>
                <p className="text-muted-foreground">
                  Regular meetings with our health professionals to provide guidance, answer questions, and help you
                  overcome challenges.
                </p>
              </div>

              <div className="p-6 border border-brand/20 rounded-xl bg-brand-lighter">
                <h3 className="text-xl font-medium text-foreground mb-2">Progress Monitoring</h3>
                <p className="text-muted-foreground">
                  Tracking of key health metrics and wellness indicators to measure improvements and make adjustments as
                  needed.
                </p>
              </div>

              <div className="p-6 border border-brand/20 rounded-xl bg-brand-lighter">
                <h3 className="text-xl font-medium text-foreground mb-2">Educational Resources</h3>
                <p className="text-muted-foreground">
                  Access to a wealth of information, including guides, recipes, workout plans, and wellness tips.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-16 bg-brand text-brand-foreground">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-serif font-light mb-6"
          >
            Ready to transform your health?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-brand-foreground/90 max-w-2xl mx-auto mb-10"
          >
            Take the first step toward a healthier, more vibrant life with our personalized health and wellness support.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/services#core-services">
              <Button className="bg-background text-brand hover:bg-background/90 rounded-full px-8 py-6 text-lg">
                Get Started Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
