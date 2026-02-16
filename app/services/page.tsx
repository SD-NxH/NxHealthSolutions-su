"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Leaf, HeartPulse, Calendar, BookOpen, MessageCircle, CheckCircle, Briefcase } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { redirectToStripePayment } from "../actions/stripe-redirect"
import { useRouter } from "next/navigation"
import { SafeImage } from "@/components/safe-image"

export default function ServicesPage() {
  const router = useRouter()
  const headerRef = useRef(null)
  const mainServicesRef = useRef(null)
  const specializedServicesRef = useRef(null)
  const pricingRef = useRef(null)
  const faqRef = useRef(null)
  const habitProgramRef = useRef(null)
  const freelanceRef = useRef(null)

  const isMainServicesInView = useInView(mainServicesRef, { once: true, amount: 0.2 })
  const isSpecializedServicesInView = useInView(specializedServicesRef, { once: true, amount: 0.2 })
  const isPricingInView = useInView(pricingRef, { once: true, amount: 0.2 })
  const isFaqInView = useInView(faqRef, { once: true, amount: 0.2 })
  const isHabitProgramInView = useInView(habitProgramRef, { once: true, amount: 0.2 })
  const isFreelanceInView = useInView(freelanceRef, { once: true, amount: 0.2 })

  const handlePaymentClick = async () => {
    const result = await redirectToStripePayment()
    if (result.redirect) {
      window.location.href = result.redirect
    }
  }

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
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-brand-dark mb-4">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive health and wellness solutions tailored to your individual needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section ref={mainServicesRef} className="py-16 bg-brand-lighter" id="core-services">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-4">Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
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
              <div className="relative w-full" style={{ minHeight: "200px", height: "30vh", maxHeight: "300px" }}>
                <Image
                  src="/nutrition-image.jpeg"
                  alt="Health consultation with a nutrition specialist"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-serif font-medium text-foreground mb-3">Consultation</h3>
                <p className="text-muted-foreground mb-6">
                  In this consultation, we will figure out your why and form a plan for moving forward. Meet with our
                  health experts face-to-face for personalized guidance.
                </p>
                <Button className="w-full bg-brand hover:bg-brand-hover text-brand-foreground rounded-full">
                  Schedule
                </Button>
              </div>
            </motion.div>

            {/* Online Consultation */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isMainServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-md"
            >
              <div className="relative w-full" style={{ minHeight: "200px", height: "30vh", maxHeight: "300px" }}>
                <Image
                  src="/async-consult.jpg"
                  alt="Online health consultation form"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-serif font-medium text-foreground mb-3">Online Consultation</h3>
                <p className="text-muted-foreground mb-6">
                  This is completely online (asynchronous)! Fill out the form in its entirety to help us figure out your
                  why and create a plan just for you moving forward.
                </p>
                <Link href="/checkout/online-consultation">
                  <Button className="w-full bg-brand hover:bg-brand-hover text-brand-foreground rounded-full">
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
              <div className="relative w-full" style={{ minHeight: "200px", height: "30vh", maxHeight: "300px" }}>
                <Image
                  src="/group-session.jpg"
                  alt="Group health solutions session"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-serif font-medium text-foreground mb-3">Standard Solutions Session</h3>
                <p className="text-muted-foreground mb-6">
                  This is a standard Health Solution session. These sessions will be composed of services comparable to
                  health & nutrition counseling or therapy, symptom alleviation, lifestyle change planning.
                </p>
                <Button className="w-full bg-brand hover:bg-brand-hover text-brand-foreground rounded-full">
                  Schedule
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Freelance Wellness & Education Services */}
      <section ref={freelanceRef} className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isFreelanceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-brand-lighter rounded-2xl overflow-hidden shadow-lg">
              <div className="md:flex items-center">
                <div className="md:w-2/5 relative" style={{ minHeight: "280px" }}>
                  <SafeImage
                    src="/freelance-wellness.jpg"
                    alt="Coach J providing freelance wellness and education services"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="md:w-3/5 p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-brand-light rounded-full flex items-center justify-center flex-shrink-0">
                      <Briefcase className="h-5 w-5 text-brand" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif font-light text-foreground">
                      Freelance Wellness & Education Services
                    </h2>
                  </div>
                  <p className="text-lg text-brand-dark font-medium mb-3">
                    Work directly with Coach J on custom wellness, education, and content solutions.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Hire Eric Johnson (Coach J) for freelance services including wellness workshops,
                    nutrition education, content creation, curriculum support, and digital health
                    consulting — tailored for individuals, schools, and organizations.
                  </p>
                  <a
                    href="https://www.fiverr.com/s/yvQNaPV"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-brand hover:bg-brand-hover text-brand-foreground rounded-full px-8">
                      View Services on Fiverr
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2 Week Habit Forming Program Section */}
      <section ref={habitProgramRef} className="py-16 bg-gradient-to-r from-brand-lighter to-blue-50">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isHabitProgramInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-card rounded-2xl overflow-hidden shadow-xl">
              <div className="md:flex">
                <div className="md:w-2/5 bg-gradient-to-br from-brand to-brand-dark text-brand-foreground p-8 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">2 Week Habit Forming Program</h2>
                  <h3 className="text-xl md:text-2xl font-medium mb-6">Food Freedom Fast Track</h3>
                  <p className="text-brand-light mb-8">
                    An immersive and supportive 14-day journey to break the cycle of food addiction through education,
                    daily guidance, and community support.
                  </p>
                  <div className="hidden md:block">
                    <Link href="/services/freedom-from-food">
                      <Button className="bg-background text-brand hover:bg-brand-lighter rounded-full px-8 py-6">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="md:w-3/5 p-8">
                  <h4 className="text-xl font-medium text-foreground mb-4">Program Highlights:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-brand mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-muted-foreground">Daily live or pre-recorded sessions (14 days)</p>
                    </div>
                    <div className="flex items-start">
                      <BookOpen className="h-5 w-5 text-brand mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-muted-foreground">Comprehensive digital workbook</p>
                    </div>
                    <div className="flex items-start">
                      <MessageCircle className="h-5 w-5 text-brand mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-muted-foreground">Daily email support and motivation</p>
                    </div>
                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-brand mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-muted-foreground">Private online community support</p>
                    </div>
                  </div>

                  <h4 className="text-xl font-medium text-foreground mb-4">What You'll Learn:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-muted-foreground">Identify and manage food triggers</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-muted-foreground">Break the physical cycle of addiction</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-muted-foreground">Develop sustainable eating habits</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-muted-foreground">Create a long-term vision for success</p>
                    </div>
                  </div>

                  <div className="md:hidden mt-6">
                    <Link href="/services/freedom-from-food">
                      <Button className="w-full bg-brand hover:bg-brand-hover text-brand-foreground rounded-full">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personalized Meal and Grocery Planning Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-4">
                Personalized Meal & Grocery Planning
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Get customized meal plans and grocery lists tailored specifically to your dietary needs, preferences,
                and health goals.
              </p>
            </div>

            <div className="bg-brand-lighter rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-medium text-foreground mb-4">Start Your Personalized Plan</h3>
                <p className="text-muted-foreground mb-6">
                  Fill out our comprehensive form to receive meal plans and grocery lists designed just for you.
                </p>
              </div>

              <div className="w-full max-w-4xl mx-auto">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSd1OK3okwLmimjhJkZmKe61_6o8IJWR776qXT5tosAcnUjmww/viewform?embedded=true"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="rounded-lg"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section ref={specializedServicesRef} className="py-16 bg-background" id="specialized-services">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isSpecializedServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-4">Specialized Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Targeted solutions for specific health and wellness needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Nutrition Planning */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isSpecializedServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-brand-lighter rounded-xl p-6"
            >
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mb-6 mx-auto">
                <Leaf className="h-8 w-8 text-brand" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3 text-center">Nutrition Planning</h3>
              <p className="text-muted-foreground mb-4 text-center">
                Personalized nutrition plans based on your unique health profile, dietary preferences, and wellness
                goals.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-brand-light text-brand flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-muted-foreground">Customized meal plans</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-brand-light text-brand flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-muted-foreground">Food as medicine approach</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-brand-light text-brand flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-muted-foreground">Dietary guidance for specific conditions</span>
                </li>
              </ul>
              <div className="text-center">
                <Link href="/services/nutrition-planning">
                  <Button
                    variant="outline"
                    className="border-brand text-brand hover:bg-brand-lighter rounded-full bg-transparent"
                  >
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
              className="bg-brand-lighter rounded-xl p-6"
            >
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mb-6 mx-auto">
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
                  className="h-8 w-8 text-brand"
                >
                  <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                  <path d="M7 2v20" />
                  <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3 text-center">The Ultimate Food Guide</h3>
              <p className="text-muted-foreground mb-4 text-center">
                Personalized meal plans based on your preferences with grocery lists and delicious recipes.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-brand-light text-brand flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-muted-foreground">3-day customized meal plans</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-brand-light text-brand flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-muted-foreground">Complete grocery shopping lists</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-brand-light text-brand flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-muted-foreground">Easy-to-follow recipes with instructions</span>
                </li>
              </ul>
              <div className="text-center">
                <Link href="/get-started">
                  <Button
                    variant="outline"
                    className="border-brand text-brand hover:bg-brand-lighter rounded-full bg-transparent"
                  >
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
              className="bg-brand-lighter rounded-xl p-6"
            >
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mb-6 mx-auto">
                <HeartPulse className="h-8 w-8 text-brand" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3 text-center">Wellness Coaching</h3>
              <p className="text-muted-foreground mb-4 text-center">
                Ongoing support and guidance to help you develop sustainable health habits and achieve your wellness
                goals.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-brand-light text-brand flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-muted-foreground">Regular check-ins and accountability</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-brand-light text-brand flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-muted-foreground">Lifestyle modification strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-brand-light text-brand flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-muted-foreground">Progress tracking and adjustments</span>
                </li>
              </ul>
              <div className="text-center">
                <Link href="/get-started">
                  <Button
                    variant="outline"
                    className="border-brand text-brand hover:bg-brand-lighter rounded-full bg-transparent"
                  >
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
              className="bg-brand-lighter rounded-xl p-6"
            >
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="h-8 w-8 text-brand" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3 text-center">Group Programs</h3>
              <p className="text-muted-foreground mb-4 text-center">
                Join a supportive community of individuals with similar health goals for shared learning and motivation.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-brand-light text-brand flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-muted-foreground">Weekly group sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-brand-light text-brand flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-muted-foreground">Peer support and accountability</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-brand-light text-brand flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-muted-foreground">Shared resources and experiences</span>
                </li>
              </ul>
              <div className="text-center">
                <Link href="/get-started">
                  <Button
                    variant="outline"
                    className="border-brand text-brand hover:bg-brand-lighter rounded-full bg-transparent"
                  >
                    Purchase
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Virtual Health Assessments */}
      <section ref={specializedServicesRef} className="py-16 bg-background" id="specialized-services">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isSpecializedServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-4">
              Virtual Health Assessments
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Evaluate and gain insights to improve your overall wellness with specialized testing and analysis.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isSpecializedServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-brand-lighter rounded-xl p-6"
            >
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mb-6 mx-auto">
                <Leaf className="h-8 w-8 text-brand" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3 text-center">Virtual Health Assessments</h3>
              <p className="text-muted-foreground mb-4 text-center">
                Understand your health better through virtual assessments.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-brand-light text-brand flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-muted-foreground">Comprehensive Health Review</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-brand-light text-brand flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-muted-foreground">Personalized Action Plan</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-brand-light text-brand flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-muted-foreground">Insights for Enhanced Wellbeing</span>
                </li>
              </ul>
              <div className="text-center">
                <Link href="/get-started">
                  <Button
                    variant="outline"
                    className="border-brand text-brand hover:bg-brand-lighter rounded-full bg-transparent"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Follow-up Sessions */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isSpecializedServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-brand-lighter rounded-xl p-6"
            >
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mb-6 mx-auto">
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
                  className="h-8 w-8 text-brand"
                >
                  <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                  <path d="M7 2v20" />
                  <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3 text-center">Follow-up Sessions</h3>
              <p className="text-muted-foreground mb-4 text-center">
                Review your progress and stay on track with additional coaching sessions and support.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-brand-light text-brand flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-muted-foreground">Customized meal plans</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-brand-light text-brand flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-muted-foreground">Food as medicine approach</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-brand-light text-brand flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-muted-foreground">Dietary guidance for specific conditions</span>
                </li>
              </ul>
              <div className="text-center">
                <Link href="/get-started">
                  <Button
                    variant="outline"
                    className="border-brand text-brand hover:bg-brand-lighter rounded-full bg-transparent"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Stress Management */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isSpecializedServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-brand-lighter rounded-xl p-6"
            >
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mb-6 mx-auto">
                <HeartPulse className="h-8 w-8 text-brand" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3 text-center">Stress Management</h3>
              <p className="text-muted-foreground mb-4 text-center">
                Learn the necessary methods and lifestyle changes to manage and reduce stress.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-brand-light text-brand flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-muted-foreground">Stress Reduction Techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-brand-light text-brand flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-muted-foreground">Nutritional Therapy</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 rounded-full bg-brand-light text-brand flex-shrink-0 mr-2 text-center text-sm">
                    ✓
                  </span>
                  <span className="text-muted-foreground">Lifestyle Guidance</span>
                </li>
              </ul>
              <div className="text-center">
                <Link href="/get-started">
                  <Button
                    variant="outline"
                    className="border-brand text-brand hover:bg-brand-lighter rounded-full bg-transparent"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef} className="py-16 bg-brand-lighter">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-4">Service Packages</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
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
                <h3 className="text-2xl font-serif font-medium text-foreground mb-2">Basic Package</h3>
                <p className="text-muted-foreground mb-6">Perfect for those just starting their health journey</p>
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-brand-light text-brand flex-shrink-0 mr-2 text-center text-sm">
                      ✓
                    </span>
                    <span className="text-muted-foreground">
                      The 3-month program guides teams of 2-5 through weekly coaching sessions to achieve their shared
                      health goals.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-brand-light text-brand flex-shrink-0 mr-2 text-center text-sm">
                      ✓
                    </span>
                    <span className="text-muted-foreground">
                      Teams benefit from personalized strategies, expert guidance, and powerful peer accountability.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-brand-light text-brand flex-shrink-0 mr-2 text-center text-sm">
                      ✓
                    </span>
                    <span className="text-muted-foreground">
                      We empower your group to build sustainable habits, enhance resilience, and optimize collective
                      well-being.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-brand-light text-brand flex-shrink-0 mr-2 text-center text-sm">
                      ✓
                    </span>
                    <span className="text-muted-foreground">
                      Together, you'll experience transformative shifts in energy, digestion, and overall vitality for
                      lasting results.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-brand-light text-brand flex-shrink-0 mr-2 text-center text-sm">
                      ✓
                    </span>
                    <span className="text-muted-foreground">Access to our NxHealth Support Community</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Premium Package */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-md border-2 border-brand transform md:scale-105"
            >
              <div className="bg-brand text-brand-foreground py-2 text-center text-sm font-medium">MOST POPULAR</div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-serif font-medium text-foreground mb-2">Premium Package</h3>
                <p className="text-muted-foreground mb-6">Comprehensive support for significant health improvements</p>
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-brand-light text-brand flex-shrink-0 mr-2 text-center text-sm">
                      ✓
                    </span>
                    <span className="text-muted-foreground">
                      6-month program takes you through deep, lasting health transformation.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-brand-light text-brand flex-shrink-0 mr-2 text-center text-sm">
                      ✓
                    </span>
                    <span className="text-muted-foreground">
                      Consistent, weekly expert guidance for their unique health goals.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-brand-light text-brand flex-shrink-0 mr-2 text-center text-sm">
                      ✓
                    </span>
                    <span className="text-muted-foreground">
                      Cultivate profound healing, optimize vitality, and master sustainable wellness together.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-brand-light text-brand flex-shrink-0 mr-2 text-center text-sm">
                      ✓
                    </span>
                    <span className="text-muted-foreground">
                      Access premium coaching with an accessible monthly investment, amplified by team power.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-brand-light text-brand flex-shrink-0 mr-2 text-center text-sm">
                      ✓
                    </span>
                    <span className="text-muted-foreground">Email support between sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-brand-light text-brand flex-shrink-0 mr-2 text-center text-sm">
                      ✓
                    </span>
                    <span className="text-muted-foreground">Access to our NxHealth Support Community</span>
                  </li>
                </ul>
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
                <h3 className="text-2xl font-serif font-medium text-foreground mb-2">Ultimate Package</h3>
                <p className="text-muted-foreground mb-6">Complete health transformation with ongoing support</p>
                <p className="text-muted-foreground mb-8">
                  This program helps you make big, lasting changes to your whole life. You will get constant help from
                  experts on your health, your mind, and how you perform, so your new habits really stick.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
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
                  <h3 className="text-xl font-medium text-foreground mb-2">
                    How do I know which service is right for me?
                  </h3>
                  <p className="text-muted-foreground">
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
                  <h3 className="text-xl font-medium text-foreground mb-2">How long does it take to see results?</h3>
                  <p className="text-muted-foreground">
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
                  <h3 className="text-xl font-medium text-foreground mb-2">Do you accept insurance?</h3>
                  <p className="text-muted-foreground">
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
                  <h3 className="text-xl font-medium text-foreground mb-2">What happens if I need to cancel or reschedule?</h3>
                  <p className="text-muted-foreground">
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
                  <h3 className="text-xl font-medium text-foreground mb-2">
                    Do you offer virtual services for clients who don't live locally?
                  </h3>
                  <p className="text-muted-foreground">
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
      <section className="py-16 bg-brand-dark text-brand-foreground">
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
            className="text-xl text-brand-light max-w-2xl mx-auto mb-10"
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
              <Button className="bg-background text-brand hover:bg-brand-lighter rounded-full px-8 py-6 text-lg">
                Get Started Today
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-background text-background hover:bg-brand-dark rounded-full px-8 py-6 text-lg bg-transparent"
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
