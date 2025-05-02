"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function HealthWellnessInfoPage() {
  const headerRef = useRef(null)
  const benefitsRef = useRef(null)
  const approachRef = useRef(null)
  const ctaRef = useRef(null)

  const isBenefitsInView = useInView(benefitsRef, { once: true, amount: 0.2 })
  const isApproachInView = useInView(approachRef, { once: true, amount: 0.2 })
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.2 })

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section ref={headerRef} className="relative w-full py-16 md:py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-green-800 mb-4">
              Health & Wellness
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive support for your journey to optimal health and wellbeing
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Health & Wellness Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6">
                What is Health & Wellness Support?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At NxHealth Solutions, our Health & Wellness support provides personalized guidance to help you achieve
                optimal physical, mental, and emotional wellbeing.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We take a holistic approach that addresses all aspects of your health, focusing on sustainable lifestyle
                changes rather than quick fixes or temporary solutions.
              </p>
              <p className="text-lg text-gray-600">
                Our evidence-based methods are tailored to your unique needs, goals, and circumstances, empowering you
                to take control of your health journey.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-md">
              <Image src="/nutrition-image.jpeg" alt="Health and wellness consultation" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-16 bg-green-50">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6">
              Benefits of Our Health & Wellness Support
            </h2>
            <p className="text-lg text-gray-600">
              Experience transformative changes in your health and quality of life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Personalized Approach</h3>
              <p className="text-gray-600">
                Tailored recommendations based on your unique health profile, goals, and lifestyle factors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Holistic Support</h3>
              <p className="text-gray-600">
                Guidance on nutrition, physical activity, stress management, sleep optimization, and more.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Sustainable Results</h3>
              <p className="text-gray-600">
                Focus on creating lasting habits and lifestyle changes rather than quick fixes or temporary solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Is This Right For You Section */}
      <section ref={approachRef} className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isApproachInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6">
              Is Health & Wellness Support Right For You?
            </h2>
            <p className="text-lg text-gray-600">Our Health & Wellness support is ideal for individuals who:</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="p-6 border border-green-100 rounded-xl bg-green-50">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Want to improve overall wellbeing</h3>
                <p className="text-gray-600">
                  If you're looking to enhance your energy levels, mood, and general quality of life through sustainable
                  health practices.
                </p>
              </div>

              <div className="p-6 border border-green-100 rounded-xl bg-green-50">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Need guidance with lifestyle changes</h3>
                <p className="text-gray-600">
                  If you're struggling to implement healthy habits or maintain positive changes in your daily routine.
                </p>
              </div>

              <div className="p-6 border border-green-100 rounded-xl bg-green-50">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Seek a holistic approach to health</h3>
                <p className="text-gray-600">
                  If you believe in addressing the whole person—body, mind, and spirit—rather than just treating
                  symptoms.
                </p>
              </div>

              <div className="p-6 border border-green-100 rounded-xl bg-green-50">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Want personalized health strategies</h3>
                <p className="text-gray-600">
                  If you're tired of one-size-fits-all health advice and want recommendations tailored to your unique
                  needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6 text-center">
              What to Expect
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              When you choose our Health & Wellness support, you'll receive:
            </p>

            <div className="space-y-6">
              <div className="p-6 border border-green-100 rounded-xl bg-white">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Comprehensive Assessment</h3>
                <p className="text-gray-600">
                  A thorough evaluation of your current health status, including health history, lifestyle factors, and
                  wellness goals.
                </p>
              </div>

              <div className="p-6 border border-green-100 rounded-xl bg-white">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Personalized Wellness Plan</h3>
                <p className="text-gray-600">
                  A customized roadmap for improving your health, with specific recommendations for nutrition, physical
                  activity, stress management, and more.
                </p>
              </div>

              <div className="p-6 border border-green-100 rounded-xl bg-white">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Ongoing Support</h3>
                <p className="text-gray-600">
                  Regular check-ins and adjustments to your plan as your health evolves and improves.
                </p>
              </div>

              <div className="p-6 border border-green-100 rounded-xl bg-white">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Educational Resources</h3>
                <p className="text-gray-600">
                  Access to a wealth of information, including guides, recipes, workout plans, and wellness tips.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-16 bg-green-800 text-white">
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
            className="text-xl text-green-100 max-w-2xl mx-auto mb-10"
          >
            Take the first step toward a healthier, more vibrant life with our personalized health and wellness support.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/services#core-services">
              <Button className="bg-white text-green-800 hover:bg-green-100 rounded-full px-8 py-6 text-lg">
                Explore Our Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
