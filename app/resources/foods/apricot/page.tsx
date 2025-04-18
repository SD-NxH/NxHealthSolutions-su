"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function ApricotPage() {
  const headerRef = useRef(null)
  const contentRef = useRef(null)
  const benefitsRef = useRef(null)

  const isContentInView = useInView(contentRef, { once: true, amount: 0.1 })
  const isBenefitsInView = useInView(benefitsRef, { once: true, amount: 0.1 })

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section ref={headerRef} className="relative w-full py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <Link href="/resources/a" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Foods Starting With "A"
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-green-800 mb-4">
              Apricots: Golden Gems of Nutrition
            </h1>
            <p className="text-xl text-gray-600">
              Discover the sweet, tangy flavor and impressive health benefits of this vibrant fruit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image src="/apricot-hero-image.jpg" alt="Fresh apricots" fill className="object-cover" priority />
            </div>

            <div ref={contentRef} className="prose prose-green max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl md:text-3xl font-serif font-medium text-gray-900 mb-4">
                  Nature's Nutritional Powerhouse
                </h2>
                <p className="text-gray-700 mb-6">
                  Apricots (Prunus armeniaca) are small, golden fruits with velvety skin and sweet-tart flesh.
                  Originally from China, these fruits have been cultivated for over 4,000 years and are now enjoyed
                  worldwide for their delicious flavor and impressive nutritional profile.
                </p>

                <h3 className="text-xl font-medium text-gray-900 mb-3">Nutritional Profile</h3>
                <p className="text-gray-700 mb-4">
                  Apricots are packed with essential nutrients while being relatively low in calories. A typical serving
                  of 3-4 fresh apricots (about 140g) contains:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Calories: 50-60</li>
                  <li>Protein: 1-2g</li>
                  <li>Fiber: 2-3g</li>
                  <li>Vitamin A: 40-50% of daily value</li>
                  <li>Vitamin C: 15-20% of daily value</li>
                  <li>Potassium: 6-8% of daily value</li>
                  <li>Antioxidants: Including beta-carotene, lutein, and zeaxanthin</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-900 mb-3">Culinary Uses</h3>
                <p className="text-gray-700 mb-4">Apricots can be enjoyed in numerous ways:</p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Fresh as a snack or in fruit salads</li>
                  <li>Dried for a concentrated sweet treat</li>
                  <li>Poached or baked in desserts</li>
                  <li>Puréed for jams, preserves, and sauces</li>
                  <li>Added to savory dishes like tagines and curries</li>
                  <li>Blended into smoothies or juices</li>
                </ul>
              </motion.div>
            </div>

            {/* Health Benefits Section */}
            <div ref={benefitsRef} className="mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl md:text-3xl font-serif font-medium text-gray-900 mb-6">
                  Health Benefits of Apricots
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-medium text-gray-900 mb-2">Vision Health</h3>
                      <p className="text-gray-700">
                        Rich in vitamin A and carotenoids like beta-carotene, apricots support eye health and may help
                        prevent age-related macular degeneration. The antioxidants lutein and zeaxanthin specifically
                        protect retinal cells from damage.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-medium text-gray-900 mb-2">Immune Support</h3>
                      <p className="text-gray-700">
                        The vitamin C and antioxidants in apricots help strengthen the immune system by protecting cells
                        from oxidative damage and supporting the body's natural defense mechanisms against infections
                        and diseases.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-medium text-gray-900 mb-2">Skin Health</h3>
                      <p className="text-gray-700">
                        Apricots' vitamin E and vitamin C content helps maintain skin elasticity and protect against UV
                        damage. The fruit's antioxidants combat free radicals that contribute to premature aging and
                        skin damage.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-medium text-gray-900 mb-2">Digestive Health</h3>
                      <p className="text-gray-700">
                        With a good amount of dietary fiber, apricots support healthy digestion, prevent constipation,
                        and promote the growth of beneficial gut bacteria. They also contain natural compounds that aid
                        in proper nutrient absorption.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-xl font-medium text-gray-900 mb-3">Research-Backed Benefits</h3>
                <p className="text-gray-700 mb-6">
                  Scientific studies have shown that regular consumption of apricots may:
                </p>
                <ul className="list-disc pl-6 mb-8 text-gray-700">
                  <li>Reduce inflammation markers in the body</li>
                  <li>Support heart health by improving cholesterol levels</li>
                  <li>Help regulate blood pressure due to potassium content</li>
                  <li>Protect liver function through antioxidant action</li>
                  <li>Support bone health with essential minerals</li>
                </ul>

                <div className="bg-green-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Did You Know?</h3>
                  <p className="text-gray-700">
                    Apricot kernels (the seeds inside the pits) have been used in traditional medicine, but should be
                    consumed with caution as they contain amygdalin, which can convert to cyanide in the body. The fruit
                    flesh, however, is completely safe and highly nutritious.
                  </p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <Link href="/resources/a">
                    <Button variant="outline" className="bg-white border-green-600 text-green-600 hover:bg-green-50">
                      Back to Foods Starting With "A"
                    </Button>
                  </Link>
                  <Link href="/resources">
                    <Button className="bg-green-600 hover:bg-green-700 text-white">Explore More Resources</Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
