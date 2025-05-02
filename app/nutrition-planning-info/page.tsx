"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Leaf } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function NutritionPlanningInfoPage() {
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
              Nutrition Planning
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Personalized nutrition strategies to fuel your body and optimize your health
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Nutrition Planning Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6">
                What is Nutrition Planning?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our Nutrition Planning service provides personalized dietary guidance based on your unique health
                profile, preferences, and goals.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe that nutrition is not just about calories—it's about nourishing your body with the right
                balance of nutrients to support optimal health and wellbeing.
              </p>
              <p className="text-lg text-gray-600">
                Our evidence-based approach focuses on sustainable eating patterns rather than restrictive diets,
                helping you develop a positive relationship with food that lasts a lifetime.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/fruits-and-veggies.jpeg"
                alt="Fresh colorful fruits and vegetables including apples, oranges, broccoli and cucumbers"
                fill
                className="object-cover"
              />
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
              Benefits of Nutrition Planning
            </h2>
            <p className="text-lg text-gray-600">Discover how personalized nutrition can transform your health</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Increased Energy</h3>
              <p className="text-gray-600">
                Fuel your body with the right nutrients to maintain consistent energy levels throughout the day.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Weight Management</h3>
              <p className="text-gray-600">
                Achieve and maintain a healthy weight through balanced nutrition rather than restrictive dieting.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Improved Digestion</h3>
              <p className="text-gray-600">
                Support gut health with dietary strategies that reduce bloating, discomfort, and digestive issues.
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
              Is Nutrition Planning Right For You?
            </h2>
            <p className="text-lg text-gray-600">Our Nutrition Planning service is ideal for individuals who:</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="p-6 border border-green-100 rounded-xl bg-green-50">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Want to improve their relationship with food</h3>
                <p className="text-gray-600">
                  If you're tired of restrictive diets and want to develop a positive, sustainable approach to eating.
                </p>
              </div>

              <div className="p-6 border border-green-100 rounded-xl bg-green-50">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Need guidance for specific health conditions</h3>
                <p className="text-gray-600">
                  If you're managing conditions like diabetes, heart disease, or digestive disorders through nutrition.
                </p>
              </div>

              <div className="p-6 border border-green-100 rounded-xl bg-green-50">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Seek support for athletic performance</h3>
                <p className="text-gray-600">
                  If you're looking to optimize your nutrition for sports, fitness, or active lifestyle goals.
                </p>
              </div>

              <div className="p-6 border border-green-100 rounded-xl bg-green-50">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Want personalized meal planning</h3>
                <p className="text-gray-600">
                  If you're overwhelmed by conflicting nutrition advice and want clear, personalized guidance.
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
              When you choose our Nutrition Planning service, you'll receive:
            </p>

            <div className="space-y-6">
              <div className="p-6 border border-green-100 rounded-xl bg-white">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Nutritional Assessment</h3>
                <p className="text-gray-600">
                  A comprehensive evaluation of your current eating patterns, nutritional needs, and health goals.
                </p>
              </div>

              <div className="p-6 border border-green-100 rounded-xl bg-white">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Customized Meal Plans</h3>
                <p className="text-gray-600">
                  Personalized meal suggestions that fit your preferences, lifestyle, and nutritional requirements.
                </p>
              </div>

              <div className="p-6 border border-green-100 rounded-xl bg-white">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Practical Strategies</h3>
                <p className="text-gray-600">
                  Actionable tips for grocery shopping, meal preparation, and eating out while maintaining your
                  nutrition goals.
                </p>
              </div>

              <div className="p-6 border border-green-100 rounded-xl bg-white">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Ongoing Support</h3>
                <p className="text-gray-600">
                  Regular check-ins to monitor progress, answer questions, and adjust your nutrition plan as needed.
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
            Ready to transform your nutrition?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-green-100 max-w-2xl mx-auto mb-10"
          >
            Take the first step toward better health through personalized nutrition planning.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/services#specialized-services">
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
