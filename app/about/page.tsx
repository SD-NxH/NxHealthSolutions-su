"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Award, Heart } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function AboutPage() {
  const storyRef = useRef(null)
  const valuesRef = useRef(null)
  const approachRef = useRef(null)
  const teamRef = useRef(null)
  const testimonialsRef = useRef(null)
  const ctaRef = useRef(null)

  const isStoryInView = useInView(storyRef, { once: true, amount: 0.2 })
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.2 })
  const isApproachInView = useInView(approachRef, { once: true, amount: 0.2 })
  const isTeamInView = useInView(teamRef, { once: true, amount: 0.2 })
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.2 })
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.2 })

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-green-800 mb-4">
              About NxHealth Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Dedicated to improving lives through evidence-based health and wellness solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={storyRef} className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-2xl overflow-hidden order-2 md:order-1 flex items-center justify-center bg-green-50"
            >
              <Image
                src="/NxLogo-ALT-2.png"
                alt="NxHealth Solutions Logo"
                width={350}
                height={350}
                className="object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                NxHealth Solutions was founded with a simple yet powerful mission: to help people live healthier, more
                fulfilling lives through evidence-based approaches to health and wellness.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What began as a small consulting practice has grown into a comprehensive health solutions provider,
                offering a range of services from personalized nutrition plans to wellness coaching and healthy food
                products.
              </p>
              <p className="text-lg text-gray-600">
                Our team of dedicated health professionals brings together expertise from various disciplines to provide
                holistic solutions that address the unique needs of each individual we serve.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6">Our Mission in Action</h2>
            <p className="text-lg text-gray-600 mb-8">
              Watch how we're making a difference in people's lives through our holistic approach to health and
              wellness.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/dJhahkNzu4g"
                title="NxHealth Mission Video"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section ref={valuesRef} className="py-16 bg-green-50">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6">Our Values</h2>
            <p className="text-lg text-gray-600">
              At NxHealth Solutions, our work is guided by a set of core values that inform everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Compassion</h3>
              <p className="text-gray-600">
                We approach each client with empathy and understanding, recognizing that health journeys are deeply
                personal.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We are committed to honesty, transparency, and ethical practices in all aspects of our work.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for the highest standards in our services, products, and client interactions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600">
                We believe in building supportive communities that foster lasting health transformations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section ref={approachRef} className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isApproachInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6 text-center">Our Approach</h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              We believe in a holistic, evidence-based approach to health and wellness that considers all aspects of an
              individual's life.
            </p>

            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-green-600">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Personalized Assessment</h3>
                  <p className="text-gray-600">
                    We begin by understanding your unique health profile, goals, and challenges through comprehensive
                    assessments.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-green-600">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Customized Solutions</h3>
                  <p className="text-gray-600">
                    Based on your assessment, we develop tailored recommendations and plans that align with your
                    specific needs and lifestyle.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-green-600">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Ongoing Support</h3>
                  <p className="text-gray-600">
                    We provide continuous guidance, education, and motivation to help you implement and sustain positive
                    health changes.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-green-600">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Measurable Results</h3>
                  <p className="text-gray-600">
                    We track progress and adjust strategies as needed to ensure you achieve meaningful, lasting health
                    improvements.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-16 bg-green-50">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6">Our Team</h2>
            <p className="text-lg text-gray-600">Meet the dedicated professionals behind NxHealth Solutions.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm max-w-sm"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src="/ej-profile-photo.jpg"
                  alt="Eric Johnson, Founder of NxHealth Solutions"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-900 mb-1">Eric Johnson M.S.</h3>
                <p className="text-green-600 mb-3">Founder & Nutrition Specialist</p>
                <p className="text-gray-600 text-sm">
                  Welcome! I'm Eric Johnson, a nutritionist and food scientist with a background in exercise and health
                  science. I created NxHealth to help improve quality of life through targeted health solutions. Our
                  health is our true wealth, and the food we consume, along with our daily habits, can create conditions
                  for our bodies to heal and thrive.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm max-w-sm"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jasmine_profile%20photo-JiCD0gr2ealUo12h1DSfZAWBK15v8R.jpeg"
                  alt="Jasmine M. Johnson, Holistic Health Practitioner"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-900 mb-1">Jasmine M. Johnson</h3>
                <p className="text-green-600 mb-3">Holistic Health Practitioner</p>
                <p className="text-gray-600 text-sm">
                  Jasmine is a certified Holistic Health Practitioner, born and raised in Elizabeth City, North
                  Carolina. A proud graduate of North Carolina Central University with a degree in Criminal Justice,
                  Jasmine's passion has always centered on mental health, particularly in supporting incarcerated
                  individuals. Her journey led her to explore holistic healing, where she discovered the powerful
                  connection between the mind, body, and spirit.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm max-w-sm"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=320&width=320&text=Lena+Harris"
                  alt="Lena Harris, Health Coach"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-900 mb-1">Lena Harris</h3>
                <p className="mb-1 text-gray-600">"The Light"</p>
                <p className="text-green-600 mb-3">Health Coach</p>
                <p className="text-gray-600 text-sm">
                  Originally from Newburgh, NY, and currently living in Tampa, FL-I faced a life-altering diagnosis of
                  congestive heart failure—and completely reversed it in just 60 days using an all-fruit diet. My
                  journey from illness to vibrant health ignited a passion to share the truth I learned about the body's
                  ability to heal itself naturally. Now, I'm on a mission to inspire and guide others toward reclaiming
                  their wellness—no matter the diagnosis. If you're ready to challenge everything you thought you knew
                  about healing, I'd love to connect.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm max-w-sm"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src="/marquezz-leday-profile.jpg"
                  alt="Marquezz Leday, Master Herbalist"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-900 mb-1">Marquezz Leday</h3>
                <p className="text-green-600 mb-3">Master Herbalist</p>
                <p className="text-gray-600 text-sm">
                  Shalom…I'm Marquezz Leday, certified Master Herbalist, I study nutrition, Cell biology and how to heal
                  the body on a cellular level! Our bodies are designed by God to heal itself given the necessary
                  nutrients, I believe that when the body is out of alignment with God physically and spiritually we
                  experience dis-ease!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">
              Hear from people whose lives have been transformed through our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-green-50 p-8 rounded-xl"
            >
              <p className="text-gray-600 italic mb-6">
                "Working with NxHealth Solutions has been life-changing. Their personalized approach helped me address
                long-standing health issues that other providers couldn't solve. I'm healthier and happier than I've
                been in years."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-medium text-gray-900">Rebecca T.</p>
                  <p className="text-sm text-gray-500">Client since 2020</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-green-50 p-8 rounded-xl"
            >
              <p className="text-gray-600 italic mb-6">
                "The nutrition plan I received from NxHealth Solutions was exactly what I needed. It was practical, easy
                to follow, and most importantly, it worked! I've lost weight, gained energy, and feel better overall."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-medium text-gray-900">David M.</p>
                  <p className="text-sm text-gray-500">Client since 2021</p>
                </div>
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
            Ready to start your health journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-green-100 max-w-2xl mx-auto mb-10"
          >
            Contact us today to learn how we can help you achieve your health and wellness goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button className="bg-white text-green-800 hover:bg-green-100 rounded-full px-8 py-6 text-lg">
              Contact Us
            </Button>
            <Link href="/services">
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
