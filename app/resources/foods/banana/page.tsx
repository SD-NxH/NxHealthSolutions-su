"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Heart, Leaf, Droplets, Brain, Dumbbell, Utensils } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function BananaPage() {
  const headerRef = useRef(null)
  const nutritionRef = useRef(null)
  const benefitsRef = useRef(null)
  const recipesRef = useRef(null)

  const isNutritionInView = useInView(nutritionRef, { once: true, amount: 0.3 })
  const isBenefitsInView = useInView(benefitsRef, { once: true, amount: 0.3 })
  const isRecipesInView = useInView(recipesRef, { once: true, amount: 0.3 })

  return (
    <div className="flex flex-col min-h-screen bg-yellow-50">
      {/* Hero Section */}
      <section
        ref={headerRef}
        className="relative w-full py-20 bg-gradient-to-b from-yellow-300 via-yellow-200 to-yellow-50"
      >
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Link href="/resources/b" className="inline-flex items-center text-yellow-800 hover:text-yellow-900 mb-6">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to B Foods
              </Link>
              <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-yellow-900 mb-4">
                Bananas
              </h1>
              <p className="text-xl text-yellow-800 mb-6">
                Nature's perfect portable snack, packed with essential nutrients and natural energy.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-200 text-yellow-800">
                  <Heart className="h-4 w-4 mr-1" /> Heart Health
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-200 text-yellow-800">
                  <Leaf className="h-4 w-4 mr-1" /> Digestive Health
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-200 text-yellow-800">
                  <Dumbbell className="h-4 w-4 mr-1" /> Energy Booster
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-200 text-yellow-800">
                  <Brain className="h-4 w-4 mr-1" /> Mood Enhancer
                </span>
              </div>
              <Button variant="banana" size="lg" className="font-medium">
                Add to Meal Plan
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg"
            >
              <Image src="/bunch-of-fresh-bananas.png" alt="Fresh bananas" fill className="object-cover" priority />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nutritional Information */}
      <section ref={nutritionRef} className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isNutritionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-serif text-yellow-800 mb-8 text-center">Nutritional Information</h2>
            <div className="bg-yellow-100 rounded-2xl p-8 shadow-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-700 mb-2">105</div>
                  <div className="text-sm text-yellow-800">Calories</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-700 mb-2">27g</div>
                  <div className="text-sm text-yellow-800">Carbohydrates</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-700 mb-2">3g</div>
                  <div className="text-sm text-yellow-800">Fiber</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-700 mb-2">1g</div>
                  <div className="text-sm text-yellow-800">Protein</div>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-700 mb-2">422mg</div>
                  <div className="text-sm text-yellow-800">Potassium</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-700 mb-2">33%</div>
                  <div className="text-sm text-yellow-800">Vitamin B6</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-700 mb-2">11%</div>
                  <div className="text-sm text-yellow-800">Vitamin C</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-700 mb-2">8%</div>
                  <div className="text-sm text-yellow-800">Magnesium</div>
                </div>
              </div>
              <div className="mt-6 text-center text-sm text-yellow-800">
                *Percent Daily Values based on a 2,000 calorie diet
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Health Benefits */}
      <section ref={benefitsRef} className="py-16 bg-yellow-50">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-serif text-yellow-800 mb-8 text-center">Health Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-yellow-600 mr-3" />
                  <h3 className="text-xl font-medium text-yellow-800">Heart Health</h3>
                </div>
                <p className="text-yellow-700">
                  Bananas are rich in potassium, which helps maintain proper heart function and regulate blood pressure.
                  The high fiber content also contributes to heart health by helping to lower cholesterol levels.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex items-center mb-4">
                  <Droplets className="h-8 w-8 text-yellow-600 mr-3" />
                  <h3 className="text-xl font-medium text-yellow-800">Digestive Health</h3>
                </div>
                <p className="text-yellow-700">
                  Bananas contain both soluble and insoluble fiber, supporting digestive health. They're also rich in
                  prebiotics that feed beneficial gut bacteria, promoting a healthy microbiome.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex items-center mb-4">
                  <Dumbbell className="h-8 w-8 text-yellow-600 mr-3" />
                  <h3 className="text-xl font-medium text-yellow-800">Exercise Performance</h3>
                </div>
                <p className="text-yellow-700">
                  The easily digestible carbohydrates in bananas provide quick energy, making them perfect before or
                  during workouts. Potassium helps prevent muscle cramps and supports muscle function during exercise.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex items-center mb-4">
                  <Brain className="h-8 w-8 text-yellow-600 mr-3" />
                  <h3 className="text-xl font-medium text-yellow-800">Mood Enhancement</h3>
                </div>
                <p className="text-yellow-700">
                  Bananas contain tryptophan, which the body converts to serotonin, a mood-elevating neurotransmitter.
                  They also provide vitamin B6, which helps synthesize feel-good neurotransmitters.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recipe Ideas */}
      <section ref={recipesRef} className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isRecipesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-serif text-yellow-800 mb-8 text-center">Healthy Recipe Ideas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-yellow-100 p-6 rounded-2xl shadow-sm">
                <div className="flex items-center justify-center mb-4">
                  <Utensils className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-medium text-yellow-800 text-center mb-3">Banana Oatmeal Breakfast</h3>
                <p className="text-yellow-700 text-center">
                  Cook rolled oats with almond milk, then top with sliced banana, a drizzle of honey, and a sprinkle of
                  cinnamon for a nutritious start to your day.
                </p>
              </div>
              <div className="bg-yellow-100 p-6 rounded-2xl shadow-sm">
                <div className="flex items-center justify-center mb-4">
                  <Utensils className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-medium text-yellow-800 text-center mb-3">Green Banana Smoothie</h3>
                <p className="text-yellow-700 text-center">
                  Blend a ripe banana with spinach, Greek yogurt, almond butter, and a splash of almond milk for a
                  protein-rich smoothie that's perfect post-workout.
                </p>
              </div>
              <div className="bg-yellow-100 p-6 rounded-2xl shadow-sm">
                <div className="flex items-center justify-center mb-4">
                  <Utensils className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-medium text-yellow-800 text-center mb-3">Banana "Nice Cream"</h3>
                <p className="text-yellow-700 text-center">
                  Freeze ripe bananas, then blend them until creamy for a healthy ice cream alternative. Add cacao
                  powder for a chocolate version or berries for extra flavor.
                </p>
              </div>
            </div>
            <div className="mt-10 text-center">
              <Button variant="banana" size="lg">
                View More Banana Recipes
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Did You Know Section */}
      <section className="py-16 bg-yellow-100">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif text-yellow-800 mb-8 text-center">Did You Know?</h2>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-flex h-6 w-6 rounded-full bg-yellow-200 text-yellow-800 flex-shrink-0 mr-3 items-center justify-center text-sm font-bold">
                    1
                  </span>
                  <span className="text-yellow-700">
                    Bananas are technically berries, while strawberries are not botanically classified as berries.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex h-6 w-6 rounded-full bg-yellow-200 text-yellow-800 flex-shrink-0 mr-3 items-center justify-center text-sm font-bold">
                    2
                  </span>
                  <span className="text-yellow-700">
                    Bananas float in water because they are less dense than water, containing about 75% water
                    themselves.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex h-6 w-6 rounded-full bg-yellow-200 text-yellow-800 flex-shrink-0 mr-3 items-center justify-center text-sm font-bold">
                    3
                  </span>
                  <span className="text-yellow-700">
                    The inside of a banana peel can be used to polish silver and leather shoes due to its high potassium
                    content.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex h-6 w-6 rounded-full bg-yellow-200 text-yellow-800 flex-shrink-0 mr-3 items-center justify-center text-sm font-bold">
                    4
                  </span>
                  <span className="text-yellow-700">
                    Bananas emit a gas called ethylene that helps other fruits ripen faster when stored together.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Foods */}
      <section className="py-16 bg-yellow-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-serif text-yellow-800 mb-8 text-center">Related Foods</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <Link href="/resources/foods/apple" className="group">
              <div className="bg-white p-4 rounded-xl shadow-sm transition-all duration-300 group-hover:shadow-md">
                <div className="relative h-40 mb-4 overflow-hidden rounded-lg">
                  <Image src="/basket-of-organic-apples.png" alt="Apples" fill className="object-cover" />
                </div>
                <h3 className="text-lg font-medium text-yellow-800 text-center group-hover:text-yellow-600">Apples</h3>
              </div>
            </Link>
            <Link href="/resources/foods/blueberry" className="group">
              <div className="bg-white p-4 rounded-xl shadow-sm transition-all duration-300 group-hover:shadow-md">
                <div className="relative h-40 mb-4 overflow-hidden rounded-lg">
                  <Image src="/pile-of-blueberries.png" alt="Blueberries" fill className="object-cover" />
                </div>
                <h3 className="text-lg font-medium text-yellow-800 text-center group-hover:text-yellow-600">
                  Blueberries
                </h3>
              </div>
            </Link>
            <Link href="/resources/foods/dates" className="group">
              <div className="bg-white p-4 rounded-xl shadow-sm transition-all duration-300 group-hover:shadow-md">
                <div className="relative h-40 mb-4 overflow-hidden rounded-lg">
                  <Image src="/glistening-fresh-dates.png" alt="Dates" fill className="object-cover" />
                </div>
                <h3 className="text-lg font-medium text-yellow-800 text-center group-hover:text-yellow-600">Dates</h3>
              </div>
            </Link>
            <Link href="/resources/foods/dragon-fruit" className="group">
              <div className="bg-white p-4 rounded-xl shadow-sm transition-all duration-300 group-hover:shadow-md">
                <div className="relative h-40 mb-4 overflow-hidden rounded-lg">
                  <Image src="/dragon-fruit-vibrancy.png" alt="Dragon Fruit" fill className="object-cover" />
                </div>
                <h3 className="text-lg font-medium text-yellow-800 text-center group-hover:text-yellow-600">
                  Dragon Fruit
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
