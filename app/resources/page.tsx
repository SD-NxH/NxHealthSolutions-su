"use client"

import type React from "react"

import { useRef, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, ArrowRight, Users, BookOpen } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const heroRef = useRef(null)
  const azListRef = useRef(null)
  const startHereRef = useRef(null)
  const referRef = useRef(null)
  const nxplateRef = useRef(null)
  const servicesRef = useRef(null)
  // Add a new ref for the "What To Eat" section after the existing refs
  const whatToEatRef = useRef(null)

  const isAzListInView = useInView(azListRef, { once: true, amount: 0.2 })
  const isStartHereInView = useInView(startHereRef, { once: true, amount: 0.2 })
  const isReferInView = useInView(referRef, { once: true, amount: 0.2 })
  const isNxplateInView = useInView(nxplateRef, { once: true, amount: 0.2 })
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.2 })
  // Add a new useInView hook for the "What To Eat" section after the existing useInView hooks
  const isWhatToEatInView = useInView(whatToEatRef, { once: true, amount: 0.2 })

  // Generate A-Z letters
  const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/resources/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  // Function to get the href for a letter
  const getLetterHref = (letter: string) => {
    if (letter < "D") {
      return `/resources/${letter.toLowerCase()}`
    } else if (letter === "D" || letter === "E") {
      return `/resources/${letter.toLowerCase()}`
    } else {
      return `/food-pages/${letter.toLowerCase()}-page.html`
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full py-16 md:py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-green-800 mb-4">
              NxHealth Resources
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover our collection of health resources, food as medicine guides, and holistic health solutions.
            </p>

            <form onSubmit={handleSearch} className="relative max-w-xl mx-auto">
              <Input
                type="text"
                placeholder="Find Your Solution..."
                className="pl-10 pr-4 py-6 rounded-full border-green-200 focus:border-green-500 focus:ring-green-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Button
                type="submit"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full bg-green-600 hover:bg-green-700 h-10 w-10 p-0"
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </form>
            <p className="text-sm text-gray-500 mt-3">
              Search for health topics, nutrition information, wellness tips, and more
            </p>
          </motion.div>
        </div>
      </section>

      {/* A-Z Food List Section */}
      <section ref={azListRef} className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isAzListInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6">Health Solutions</h2>
            <p className="text-lg text-gray-600 mb-8">
              Explore our comprehensive A-Z guide of foods and their healing properties. Discover how different foods
              can be used to support your health journey.
            </p>
            <div className="bg-green-50 p-4 rounded-lg text-sm text-gray-600 mb-8">
              <p>
                <strong>Note:</strong> Our A-Z food guide is still under construction. Browse through available letters
                to discover the healing properties of various foods.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isAzListInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 lg:grid-cols-13 gap-2 md:gap-4">
              {letters.map((letter, index) => (
                <Link
                  key={letter}
                  href={getLetterHref(letter)}
                  className={`flex items-center justify-center h-12 w-12 rounded-full font-medium text-lg transition-all duration-300 ${
                    letter === "D" || letter === "E"
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : letter < "D"
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : "bg-gray-200 text-gray-500 hover:bg-gray-300"
                  }`}
                  target={letter > "E" ? "_blank" : undefined}
                >
                  {letter}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Start Here Section */}
      <section ref={startHereRef} className="py-16 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isStartHereInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6">Start Here!</h2>
              <p className="text-lg text-gray-600 mb-6">
                Begin your health journey with a personalized assessment. Our comprehensive questionnaire helps us
                understand your unique needs and goals.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                After completing the assessment, you'll receive tailored recommendations and resources to support your
                health transformation.
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg">
                Take the Assessment <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isStartHereInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="aspect-video relative bg-gray-100 rounded-lg overflow-hidden mb-4">
                <Image src="/assessment-image.jpeg" alt="Health assessment form" fill className="object-cover" />
              </div>
              <p className="text-gray-600 text-center">Our assessment takes approximately 5-10 minutes to complete</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What To Eat Section */}
      <section ref={whatToEatRef} className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isWhatToEatInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6">What To Eat</h2>
            <p className="text-lg text-gray-600 mb-8">
              Discover healthy meal ideas, explore different cuisines, and build your personalized grocery list.
            </p>

            <form className="relative max-w-xl mx-auto mb-12">
              <Input
                type="text"
                placeholder="Search for recipes, ingredients, or meal ideas..."
                className="pl-10 pr-4 py-6 rounded-full border-green-200 focus:border-green-500 focus:ring-green-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Button
                type="submit"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full bg-green-600 hover:bg-green-700 h-10 w-10 p-0"
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isWhatToEatInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/resources/cuisines"
                className="group block transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                <div className="bg-green-50 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl h-full">
                  <div className="relative h-40 w-full">
                    <Image src="/culinary-diversity.png" alt="Various world cuisines" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end transition-all duration-300 group-hover:from-black/75">
                      <div className="p-4 text-white transform transition-all duration-300 group-hover:translate-y-[-4px]">
                        <h3 className="text-xl font-medium mb-1">Explore Cuisines</h3>
                        <p className="text-sm text-white/80">Mediterranean, Asian, Latin & more</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                href="/resources/meal-planning"
                className="group block transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                <div className="bg-green-50 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl h-full">
                  <div className="relative h-40 w-full">
                    <Image
                      src="/colorful-meal-planning.png"
                      alt="Meal planning calendar with healthy food"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end transition-all duration-300 group-hover:from-black/75">
                      <div className="p-4 text-white transform transition-all duration-300 group-hover:translate-y-[-4px]">
                        <h3 className="text-xl font-medium mb-1">Meal Planning</h3>
                        <p className="text-sm text-white/80">Weekly plans for optimal nutrition</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                href="/resources/grocery-list"
                className="group block transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                <div className="bg-green-50 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl h-full">
                  <div className="relative h-40 w-full">
                    <Image
                      src="/vibrant-healthy-groceries.png"
                      alt="Grocery shopping list with fresh produce"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end transition-all duration-300 group-hover:from-black/75">
                      <div className="p-4 text-white transform transition-all duration-300 group-hover:translate-y-[-4px]">
                        <h3 className="text-xl font-medium mb-1">Grocery List Builder</h3>
                        <p className="text-sm text-white/80">Create & customize your shopping list</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <a
                href="/resources/calorie-counter"
                className="group block transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                <div className="bg-green-50 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl h-full">
                  <div className="relative h-40 w-full">
                    <Image src="/balanced-diet-calculation.png" alt="Calorie Counter" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end transition-all duration-300 group-hover:from-black/75">
                      <div className="p-4 text-white transform transition-all duration-300 group-hover:translate-y-[-4px]">
                        <h3 className="text-xl font-medium mb-1">Calorie Counter</h3>
                        <p className="text-sm text-white/80">Calculate your daily calorie needs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NxPlate Section */}
      <section ref={nxplateRef} className="pt-24 pb-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isNxplateInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1 relative rounded-xl overflow-hidden"
            >
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="NxPlate cooking show"
                  fill
                  className="object-cover rounded-xl"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 bg-white/90 rounded-full flex items-center justify-center">
                    <div className="h-12 w-12 bg-green-600 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-white ml-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-.1643V5.653z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-xl font-medium text-white">Latest Episode: Superfood Smoothies</h3>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isNxplateInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <div className="flex items-center mb-6">
                <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900">Watch NxHealth</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Discover our collection of educational videos featuring nutrition, health, and wellness guidance.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Follow us on our various social media platforms for regular updates on the latest health trends and
                practical wellness strategies you can implement today.
              </p>
              <a href="https://youtube.com/@nxhealth?si=rf5hEmahpl5aJCzV" target="_blank" rel="noopener noreferrer">
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg">
                  Watch
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Refer a Friend Section */}
      <section ref={referRef} className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isReferInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="grid md:grid-cols-2">
                <div className="bg-green-600 p-8 text-white flex flex-col justify-center">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-3xl font-serif font-light">Refer A Friend</CardTitle>
                    <CardDescription className="text-green-100 text-lg">
                      Get a free consultation or health solution session!
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4 pb-6">
                    <p className="mb-6">
                      Share the gift of health with your friends and family. For each successful referral, you'll
                      receive a complimentary consultation or health solution session.
                    </p>
                    <div className="flex items-center mb-4">
                      <Users className="h-6 w-6 mr-3 text-green-200" />
                      <span>Help others discover their path to wellness</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-6 w-6 mr-3 text-green-200" />
                      <span>Earn valuable health resources for yourself</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-white text-green-600 hover:bg-green-50 rounded-full px-6 py-5">
                      Refer A Friend
                    </Button>
                  </CardFooter>
                </div>
                <div className="relative min-h-[300px] p-4 flex items-center justify-center bg-white">
                  <Image
                    src="/nxhealth-flyer.png"
                    alt="NxHealth referral program flyer showing free consultation offer"
                    fill
                    className="object-contain p-2"
                    priority
                  />
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-16 bg-green-800 text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-serif font-light mb-6"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-green-100 max-w-2xl mx-auto mb-10"
          >
            Explore our range of personalized health and wellness services designed to support your unique journey.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/services">
              <Button className="bg-white text-green-800 hover:bg-green-100 rounded-full px-8 py-6 text-lg">
                View All Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
