"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { CheckCircle, Calendar, BookOpen, Users, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FreedomFromFoodPage() {
  const headerRef = useRef(null)
  const contentRef = useRef(null)
  const benefitsRef = useRef(null)
  const ctaRef = useRef(null)

  const isContentInView = useInView(contentRef, { once: true, amount: 0.2 })
  const isBenefitsInView = useInView(benefitsRef, { once: true, amount: 0.2 })
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.2 })

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        ref={headerRef}
        className="relative w-full py-24 md:py-32 flex items-center"
        style={{
          backgroundImage: "url('/freedom-from-food-produce.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-white mb-4">
              2-Week "Freedom From Food" Program
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Break free from food addiction and create a healthier relationship with eating
            </p>
            <Button className="bg-white text-green-800 hover:bg-gray-100 rounded-full px-8 py-6 text-lg">
              Learn More
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section ref={contentRef} className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-serif font-light text-gray-900 mb-6">
                Tired of food calling the shots in your life?
              </h2>

              <p className="text-gray-600 mb-4">
                Do you feel like cravings are your constant companion, dictating your day and derailing your
                well-intentioned efforts? Does the idea of being truly in control of your food choices feel like a
                distant dream?
              </p>

              <p className="text-xl font-medium text-green-800 mb-8">
                Imagine a life where food empowers you, not controls you.
              </p>

              <p className="text-gray-600 mb-8">
                Our 2-Week "Freedom From Food" Program is designed to help you break free from the grip of food
                addiction and step into a new era of mindful and joyful eating. Over 14 transformative days, we'll guide
                you through a step-by-step process to understand the roots of your challenges and equip you with
                practical strategies for lasting change.
              </p>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 md:p-10 rounded-2xl shadow-sm mb-10">
                <h3 className="text-2xl font-serif text-green-800 mb-6 text-center">Program Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-sm">
                    <Calendar className="h-10 w-10 text-green-600 mb-3" />
                    <p className="text-gray-700 font-medium text-center">
                      Daily live or pre-recorded sessions (14 days)
                    </p>
                  </div>
                  <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-sm">
                    <BookOpen className="h-10 w-10 text-green-600 mb-3" />
                    <p className="text-gray-700 font-medium text-center">Comprehensive Digital Sources</p>
                  </div>
                  <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-sm">
                    <MessageCircle className="h-10 w-10 text-green-600 mb-3" />
                    <p className="text-gray-700 font-medium text-center">Daily email support and motivation</p>
                  </div>
                  <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-sm">
                    <Users className="h-10 w-10 text-green-600 mb-3" />
                    <p className="text-gray-700 font-medium text-center">Private online community support</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-16 bg-green-50">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-serif font-light text-center text-gray-900 mb-12">
              In just two weeks, you will:
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <h3 className="text-xl font-medium text-gray-900">Uncover Your "Why"</h3>
                </div>
                <p className="text-gray-600 pl-9">
                  Delve into the nature of food addiction and identify your personal triggers and emotional connections
                  to food.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <h3 className="text-xl font-medium text-gray-900">Break the Chains</h3>
                </div>
                <p className="text-gray-600 pl-9">
                  Learn powerful techniques to manage cravings, reduce your reliance on sugar and processed foods, and
                  understand the physical cycle at play.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <h3 className="text-xl font-medium text-gray-900">Reclaim Your Power</h3>
                </div>
                <p className="text-gray-600 pl-9">
                  Cultivate mindful eating habits and develop a deeper awareness of your body's true hunger and fullness
                  cues.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <h3 className="text-xl font-medium text-gray-900">Build a Supportive Foundation</h3>
                </div>
                <p className="text-gray-600 pl-9">
                  Create an environment that sets you up for success and learn the importance of self-compassion in your
                  journey.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <h3 className="text-xl font-medium text-gray-900">Develop Lasting Strategies</h3>
                </div>
                <p className="text-gray-600 pl-9">
                  Craft a sustainable eating plan, integrate movement and stress management, and set realistic goals for
                  long-term well-being.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <h3 className="text-xl font-medium text-gray-900">Prepare for the Future</h3>
                </div>
                <p className="text-gray-600 pl-9">
                  Learn essential relapse prevention techniques and build the resilience you need to navigate challenges
                  and celebrate your victories.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600 italic mb-6">
                This isn't just another diet. This is about understanding yourself, rewiring your relationship with
                food, and building habits that will serve you for a lifetime.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-16 bg-green-800 text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-serif font-light mb-6">
              Are you ready to finally take control and experience the freedom that comes with it?
            </h2>
            <p className="text-xl text-green-100 mb-10">
              Join our 2-Week "Freedom From Food" Program and start your journey to a healthier, happier, and more
              empowered you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-green-800 hover:bg-green-100 rounded-full px-8 py-6 text-lg">
                Enroll Now
              </Button>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-green-700 rounded-full px-8 py-6 text-lg"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
