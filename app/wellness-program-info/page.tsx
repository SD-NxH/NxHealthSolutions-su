"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, HeartPulse } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function WellnessProgramInfoPage() {
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
              Wellness Programs
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Structured support and community for sustainable health transformation
            </p>
          </motion.div>
        </div>
      </section>

      {/* What are Wellness Programs Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6">
                What are Wellness Programs?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our Wellness Programs provide structured, comprehensive support for individuals committed to making
                significant health improvements through a combination of education, coaching, and community.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                These programs go beyond one-time consultations to offer ongoing guidance and accountability as you work
                toward your health goals.
              </p>
              <p className="text-lg text-gray-600">
                Whether in a group setting or through individualized coaching, our Wellness Programs create a supportive
                environment for lasting lifestyle changes.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-md">
              <Image src="/group-session.jpg" alt="Group wellness program session" fill className="object-cover" />
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
              Benefits of Our Wellness Programs
            </h2>
            <p className="text-lg text-gray-600">
              Experience the advantages of structured, community-based wellness support
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
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Community Support</h3>
              <p className="text-gray-600">
                Connect with like-minded individuals on similar health journeys for motivation and shared experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <HeartPulse className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Consistent Accountability</h3>
              <p className="text-gray-600">
                Regular check-ins and progress tracking to help you stay committed to your health goals.
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
              <h3 className="text-xl font-medium text-gray-900 mb-3">Comprehensive Approach</h3>
              <p className="text-gray-600">
                Address multiple aspects of wellness simultaneously for more significant and lasting results.
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
              Are Wellness Programs Right For You?
            </h2>
            <p className="text-lg text-gray-600">Our Wellness Programs are ideal for individuals who:</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="p-6 border border-green-100 rounded-xl bg-green-50">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Thrive in community settings</h3>
                <p className="text-gray-600">
                  If you're motivated by group dynamics and enjoy learning alongside others with similar goals.
                </p>
              </div>

              <div className="p-6 border border-green-100 rounded-xl bg-green-50">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Need consistent accountability</h3>
                <p className="text-gray-600">
                  If you benefit from regular check-ins and structured support to maintain your health commitments.
                </p>
              </div>

              <div className="p-6 border border-green-100 rounded-xl bg-green-50">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Want comprehensive lifestyle change</h3>
                <p className="text-gray-600">
                  If you're looking to transform multiple aspects of your health and wellness simultaneously.
                </p>
              </div>

              <div className="p-6 border border-green-100 rounded-xl bg-green-50">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Value long-term support</h3>
                <p className="text-gray-600">
                  If you recognize that sustainable health changes often require ongoing guidance and support.
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
              When you join one of our Wellness Programs, you'll receive:
            </p>

            <div className="space-y-6">
              <div className="p-6 border border-green-100 rounded-xl bg-white">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Structured Program Framework</h3>
                <p className="text-gray-600">
                  A clear roadmap with defined milestones, activities, and goals to guide your wellness journey.
                </p>
              </div>

              <div className="p-6 border border-green-100 rounded-xl bg-white">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Regular Group Sessions</h3>
                <p className="text-gray-600">
                  Scheduled meetings with program participants and health professionals for education, support, and
                  accountability.
                </p>
              </div>

              <div className="p-6 border border-green-100 rounded-xl bg-white">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Personalized Guidance</h3>
                <p className="text-gray-600">
                  Individual attention within the group context to address your specific health needs and goals.
                </p>
              </div>

              <div className="p-6 border border-green-100 rounded-xl bg-white">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Comprehensive Resources</h3>
                <p className="text-gray-600">
                  Access to educational materials, tools, and resources to support your progress between sessions.
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
            Ready to join a supportive wellness community?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-green-100 max-w-2xl mx-auto mb-10"
          >
            Take the first step toward sustainable health transformation with our structured Wellness Programs.
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
