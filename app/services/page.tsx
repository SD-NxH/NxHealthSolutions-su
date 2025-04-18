"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Leaf, HeartPulse } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { redirectToStripePayment } from "../actions/stripe-redirect"
import { useRouter } from "next/navigation"

export default function ServicesPage() {
  const router = useRouter()
  const headerRef = useRef(null)
  const mainServicesRef = useRef(null)
  const specializedServicesRef = useRef(null)
  const pricingRef = useRef(null)
  const faqRef = useRef(null)

  const isMainServicesInView = useInView(mainServicesRef, { once: true, amount: 0.2 })
  const isSpecializedServicesInView = useInView(specializedServicesRef, { once: true, amount: 0.2 })
  const isPricingInView = useInView(pricingRef, { once: true, amount: 0.2 })
  const isFaqInView = useInView(faqRef, { once: true, amount: 0.2 })

  const handlePaymentClick = async () => {
    const result = await redirectToStripePayment()
    if (result.redirect) {
      window.location.href = result.redirect
    }
  }

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
              Our Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive health and wellness solutions tailored to your individual needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section ref={mainServicesRef} className="py-16 bg-green-50" id="core-services">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-4">Core Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the consultation format that works best for you and your health journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* In-Person Consultation */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isMainServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md"
            >
              <div className="relative h-64 w-full">
                <Image
                  src="/nutrition-image.jpeg"
                  alt="Health consultation with a nutrition specialist"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-3">Consultation</h3>
                <p className="text-gray-600 mb-6">
                  In this consultation, we will figure out your why and form a plan for moving forward. Meet with our
                  health experts face-to-face for personalized guidance.
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full">Schedule</Button>
              </div>
            </motion.div>

            {/* Online Consultation */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isMainServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-md"
            >
              <div className="relative h-64 w-full">
                <Image src="/async-consult.jpg" alt="Online health consultation form" fill className="object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-3">Online Consultation</h3>
                <p className="text-gray-600 mb-6">
                  This is completely online (asynchronous)! Fill out the form in its entirety to help us figure out your
                  why and create a plan just for you moving forward.
                </p>
                <Link href="/checkout/online-consultation">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full">
                    Pay & Schedule
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Standard Solutions Session */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isMainServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-xl overflow-hidden shadow-md"
            >
              <div className="relative h-64 w-full">
                <Image src="/group-session.jpg" alt="Group health solutions session" fill className="object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-3">Standard Solutions Session</h3>
                <p className="text-gray-600 mb-6">
                  This is a standard Health Solution session. These sessions will be composed of services comparable to
                  health & nutrition counseling or therapy, symptom alleviation, lifestyle change planning.
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full">Schedule</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section ref={specializedServicesRef} className="py-16 bg-white" id="specialized-services">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isSpecializedServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-4">Specialized Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Targeted solutions for specific health and wellness needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Nutrition Planning */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isSpecializedServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-green-50 rounded-xl p-6"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3 text-center">Nutrition Planning</h3>
              <p className="text-gray-600 mb-4 text-center">
                Personalized nutrition plans based on your unique health profile, dietary preferences, and wellness
                goals.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-gray-600">Customized meal plans</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-gray-600">Food as medicine approach</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-gray-600">Dietary guidance for specific conditions</span>
                </li>
              </ul>
              <div className="text-center">
                <Link href="/get-started">
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 rounded-full">
                    Purchase
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Ultimate Food Guide */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isSpecializedServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-green-50 rounded-xl p-6"
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
                  <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                  <path d="M7 2v20" />
                  <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3 text-center">The Ultimate Food Guide</h3>
              <p className="text-gray-600 mb-4 text-center">
                Personalized meal plans based on your preferences with grocery lists and delicious recipes.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-gray-600">3-day customized meal plans</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-gray-600">Complete grocery shopping lists</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-gray-600">Easy-to-follow recipes with instructions</span>
                </li>
              </ul>
              <div className="text-center">
                <Link href="/get-started">
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 rounded-full">
                    Purchase
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Wellness Coaching */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isSpecializedServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-green-50 rounded-xl p-6"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <HeartPulse className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3 text-center">Wellness Coaching</h3>
              <p className="text-gray-600 mb-4 text-center">
                Ongoing support and guidance to help you develop sustainable health habits and achieve your wellness
                goals.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-gray-600">Regular check-ins and accountability</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-gray-600">Lifestyle modification strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-gray-600">Progress tracking and adjustments</span>
                </li>
              </ul>
              <div className="text-center">
                <Link href="/get-started">
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 rounded-full">
                    Purchase
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Group Programs */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isSpecializedServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-green-50 rounded-xl p-6"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3 text-center">Group Programs</h3>
              <p className="text-gray-600 mb-4 text-center">
                Join a supportive community of individuals with similar health goals for shared learning and motivation.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-gray-600">Weekly group sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-gray-600">Peer support and accountability</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-gray-600">Shared resources and experiences</span>
                </li>
              </ul>
              <div className="text-center">
                <Link href="/get-started">
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 rounded-full">
                    Purchase
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Virtual Health Assessments */}
      <section ref={specializedServicesRef} className="py-16 bg-white" id="specialized-services">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isSpecializedServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-4">
              Virtual Health Assessments
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Evaluate and gain insights to improve your overall wellness with specialized testing and analysis.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isSpecializedServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-green-50 rounded-xl p-6"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3 text-center">Virtual Health Assessments</h3>
              <p className="text-gray-600 mb-4 text-center">
                Understand your health better through virtual assessments.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-gray-600">Comprehensive Health Review</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-gray-600">Personalized Action Plan</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-gray-600">Insights for Enhanced Wellbeing</span>
                </li>
              </ul>
              <div className="text-center">
                <Link href="/get-started">
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 rounded-full">
                    Purchase
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Follow-up Sessions */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isSpecializedServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-green-50 rounded-xl p-6"
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
                  <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                  <path d="M7 2v20" />
                  <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3 text-center">Follow-up Sessions</h3>
              <p className="text-gray-600 mb-4 text-center">
                Review your progress and stay on track with additional coaching sessions and support.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-gray-600">Customized meal plans</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-gray-600">Food as medicine approach</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-gray-600">Dietary guidance for specific conditions</span>
                </li>
              </ul>
              <div className="text-center">
                <Link href="/get-started">
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 rounded-full">
                    Purchase
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Stress Management */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isSpecializedServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-green-50 rounded-xl p-6"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <HeartPulse className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3 text-center">Stress Management</h3>
              <p className="text-gray-600 mb-4 text-center">
                Learn the necessary methods and lifestyle changes to manage and reduce stress.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-gray-600">Stress Reduction Techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-gray-600">Nutritional Therapy</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-gray-600">Lifestyle Guidance</span>
                </li>
              </ul>
              <div className="text-center">
                <Link href="/get-started">
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 rounded-full">
                    Purchase
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef} className="py-16 bg-green-50">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-4">Service Packages</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the package that best fits your health needs and goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Package */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md"
            >
              <div className="p-6 text-center">
                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-2">Basic Package</h3>
                <div className="text-4xl font-bold text-green-600 mb-4 filter blur(5px)">$99</div>
                <p className="text-gray-600 mb-6">Perfect for those just starting their health journey</p>
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                      ✓
                    </span>
                    <span className="text-gray-600">Initial consultation (60 min)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                      ✓
                    </span>
                    <span className="text-gray-600">Basic health assessment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                      ✓
                    </span>
                    <span className="text-gray-600">Personalized health plan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                      ✓
                    </span>
                    <span className="text-gray-600">1 follow-up session (30 min)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                      ✓
                    </span>
                    <span className="text-gray-600">Access to our NxHealth Support Community</span>
                  </li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full">Get Started</Button>
              </div>
            </motion.div>

            {/* Premium Package */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-md border-2 border-green-600 transform md:scale-105"
            >
              <div className="bg-green-600 text-white py-2 text-center text-sm font-medium">MOST POPULAR</div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-2">Premium Package</h3>
                <div className="text-4xl font-bold text-green-600 mb-4 filter blur(5px)">$249</div>
                <p className="text-gray-600 mb-6">Comprehensive support for significant health improvements</p>
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                      ✓
                    </span>
                    <span className="text-gray-600">In-depth consultation (90 min)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                      ✓
                    </span>
                    <span className="text-gray-600">Comprehensive health assessment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                      ✓
                    </span>
                    <span className="text-gray-600">Customized nutrition and wellness plan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                      ✓
                    </span>
                    <span className="text-gray-600">3 follow-up sessions (45 min each)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                      ✓
                    </span>
                    <span className="text-gray-600">Email support between sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                      ✓
                    </span>
                    <span className="text-gray-600">Access to our NxHealth Support Community</span>
                  </li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full">Get Started</Button>
              </div>
            </motion.div>

            {/* Ultimate Package */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-xl overflow-hidden shadow-md"
            >
              <div className="p-6 text-center">
                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-2">Ultimate Package</h3>
                <div className="text-4xl font-bold text-green-600 mb-4 filter blur(5px)">$399</div>
                <p className="text-gray-600 mb-6">Complete health transformation with ongoing support</p>
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                      ✓
                    </span>
                    <span className="text-gray-600">VIP consultation (120 min)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                      ✓
                    </span>
                    <span className="text-gray-600">Advanced health assessment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                      ✓
                    </span>
                    <span className="text-gray-600">Comprehensive wellness program</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                      ✓
                    </span>
                    <span className="text-gray-600">6 follow-up sessions (45 min each)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                      ✓
                    </span>
                    <span className="text-gray-600">Priority email and text support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                      ✓
                    </span>
                    <span className="text-gray-600">Access to exclusive resources</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-2 text-center text-sm">
                      ✓
                    </span>
                    <span className="text-gray-600">Access to our NxHealth Support Community</span>
                  </li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full">Get Started</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    How do I know which service is right for me?
                  </h3>
                  <p className="text-gray-600">
                    We recommend starting with an initial consultation (either in-person or online) where we can assess
                    your specific needs and goals. Based on this assessment, we'll recommend the most appropriate
                    services for your situation. You can also contact us directly to discuss your needs before booking.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">How long does it take to see results?</h3>
                  <p className="text-gray-600">
                    Results vary depending on individual circumstances, goals, and commitment level. Some clients notice
                    improvements in energy and well-being within a few weeks, while more significant health
                    transformations may take several months. During your consultation, we'll discuss realistic
                    timeframes based on your specific situation.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-6"
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Do you accept insurance?</h3>
                  <p className="text-gray-600">
                    We do not directly bill insurance companies, but we can provide you with detailed receipts that you
                    may submit to your insurance provider for potential reimbursement. We recommend checking with your
                    insurance company about coverage for nutrition and wellness services before booking.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-6"
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    What happens if I need to cancel or reschedule?
                  </h3>
                  <p className="text-gray-600">
                    We understand that schedules can change. We request at least 24 hours' notice for cancellations or
                    rescheduling to avoid a cancellation fee. You can easily reschedule through our online booking
                    system or by contacting our office directly.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    Do you offer virtual services for clients who don't live locally?
                  </h3>
                  <p className="text-gray-600">
                    Yes! Many of our services are available virtually, including consultations, health assessments,
                    nutrition planning, and wellness coaching. Our online platform makes it easy to connect with our
                    health professionals from anywhere in the world.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-800 text-white">
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
            <Link href="/get-started">
              <Button className="bg-white text-green-800 hover:bg-green-100 rounded-full px-8 py-6 text-lg">
                Get Started Today
              </Button>
            </Link>
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
