"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { Leaf, CheckCircle, ArrowLeft } from "lucide-react"

export default function NutritionPlanningPage() {
  const headerRef = useRef(null)
  const overviewRef = useRef(null)
  const benefitsRef = useRef(null)
  const plansRef = useRef(null)
  const ctaRef = useRef(null)

  const isOverviewInView = useInView(overviewRef, { once: true, amount: 0.2 })
  const isBenefitsInView = useInView(benefitsRef, { once: true, amount: 0.2 })
  const isPlansInView = useInView(plansRef, { once: true, amount: 0.2 })
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.2 })

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section ref={headerRef} className="relative w-full py-16 md:py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
            >
              <Link href="/services" className="inline-flex items-center text-green-600 mb-4 hover:text-green-700">
                <ArrowLeft className="h-4 w-4 mr-1" />
                <span>Back to Services</span>
              </Link>
              <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-green-800 mb-4">
                Nutrition Planning
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Personalized nutrition plans tailored to your unique health profile, dietary preferences, and wellness
                goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/services" className="bg-green-600 hover:bg-green-700 text-white rounded-full">
                  View All Services
                </Button>
                <Button
                  href="/get-started"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 rounded-full"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2"
            >
              <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/vibrant-healthy-groceries.png"
                  alt="Nutrition planning with fresh ingredients"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section ref={overviewRef} className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isOverviewInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-4">
              Our Nutrition Planning Approach
            </h2>
            <p className="text-lg text-gray-600">
              We believe that nutrition is the foundation of good health. Our approach combines evidence-based
              nutritional science with personalized strategies that fit your lifestyle and preferences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isOverviewInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-green-50 rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-green-600"
                >
                  <path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM15.42 15.42l6.37-6.37a4.5 4.5 0 0 0-6.37-6.36l-6.36 6.36a4.5 4.5 0 0 0 6.36 6.37z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Personalized Assessment</h3>
              <p className="text-gray-600">
                We start with a comprehensive assessment of your health history, current diet, lifestyle, and goals to
                create a truly personalized plan.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isOverviewInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-green-50 rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Food as Medicine</h3>
              <p className="text-gray-600">
                We emphasize whole foods and natural ingredients that nourish your body and address specific health
                concerns through targeted nutrition.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isOverviewInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-green-50 rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-green-600"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Sustainable Habits</h3>
              <p className="text-gray-600">
                We focus on creating sustainable eating habits that you can maintain long-term, rather than restrictive
                diets that are difficult to follow.
              </p>
            </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-4">
              Benefits of Nutrition Planning
            </h2>
            <p className="text-lg text-gray-600">
              Proper nutrition planning can transform your health and wellbeing in numerous ways.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex items-start"
            >
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1 mr-3" />
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Increased Energy Levels</h3>
                <p className="text-gray-600">
                  Proper nutrition ensures your body has the fuel it needs to function optimally, leading to sustained
                  energy throughout the day.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-start"
            >
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1 mr-3" />
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Weight Management</h3>
                <p className="text-gray-600">
                  A personalized nutrition plan helps you achieve and maintain a healthy weight through balanced eating
                  rather than restrictive dieting.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-start"
            >
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1 mr-3" />
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Improved Digestion</h3>
                <p className="text-gray-600">
                  Identifying and addressing food sensitivities and optimizing your diet can significantly improve
                  digestive health and comfort.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-start"
            >
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1 mr-3" />
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Enhanced Mood</h3>
                <p className="text-gray-600">
                  The gut-brain connection means that proper nutrition can positively impact your mental health and
                  emotional wellbeing.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-start"
            >
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1 mr-3" />
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Disease Prevention</h3>
                <p className="text-gray-600">
                  Proper nutrition is a powerful tool for preventing chronic diseases and supporting your body's natural
                  defense systems.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-start"
            >
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1 mr-3" />
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Better Sleep</h3>
                <p className="text-gray-600">
                  What you eat affects your sleep quality. Our nutrition plans consider timing and content of meals to
                  optimize your sleep patterns.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section ref={plansRef} className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isPlansInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-4">
              Our Nutrition Planning Services
            </h2>
            <p className="text-lg text-gray-600">
              Choose the nutrition planning service that best fits your needs and goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isPlansInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
            >
              <div className="p-6">
                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-2">Basic Nutrition Plan</h3>
                <p className="text-gray-600 mb-6">Perfect for those just starting their nutrition journey</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mr-2" />
                    <span className="text-gray-600">Initial nutrition assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mr-2" />
                    <span className="text-gray-600">7-day meal plan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mr-2" />
                    <span className="text-gray-600">Shopping list</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mr-2" />
                    <span className="text-gray-600">Basic nutrition guidelines</span>
                  </li>
                </ul>
                <Button href="/services" className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full">
                  View All Services
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isPlansInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-md border-2 border-green-600 transform md:scale-105"
            >
              <div className="bg-green-600 text-white py-2 text-center text-sm font-medium">MOST POPULAR</div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-2">Comprehensive Nutrition Plan</h3>
                <p className="text-gray-600 mb-6">Detailed nutrition guidance for specific health goals</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mr-2" />
                    <span className="text-gray-600">In-depth nutrition assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mr-2" />
                    <span className="text-gray-600">14-day customized meal plan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mr-2" />
                    <span className="text-gray-600">Shopping list & recipes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mr-2" />
                    <span className="text-gray-600">1 follow-up consultation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mr-2" />
                    <span className="text-gray-600">Supplement recommendations</span>
                  </li>
                </ul>
                <Button href="/services" className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full">
                  View All Services
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isPlansInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
            >
              <div className="p-6">
                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-2">Premium Nutrition Plan</h3>
                <p className="text-gray-600 mb-6">Complete nutrition transformation with ongoing support</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mr-2" />
                    <span className="text-gray-600">Comprehensive nutrition assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mr-2" />
                    <span className="text-gray-600">30-day customized meal plan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mr-2" />
                    <span className="text-gray-600">Detailed shopping lists & recipes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mr-2" />
                    <span className="text-gray-600">3 follow-up consultations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mr-2" />
                    <span className="text-gray-600">Personalized supplement plan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mr-2" />
                    <span className="text-gray-600">Email support for 30 days</span>
                  </li>
                </ul>
                <Button href="/services" className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full">
                  View All Services
                </Button>
              </div>
            </motion.div>
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
            Take the first step toward better health with our personalized nutrition planning services.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              href="/get-started"
              className="bg-white text-green-800 hover:bg-green-100 rounded-full px-8 py-6 text-lg"
            >
              Get Started Today
            </Button>
            <Button
              href="/services"
              variant="outline"
              className="border-white text-white hover:bg-green-700 rounded-full px-8 py-6 text-lg"
            >
              View All Services
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
