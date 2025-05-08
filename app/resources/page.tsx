"use client"

import type React from "react"

import { useRef, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, ArrowRight, Users, BookOpen, ShoppingBag, Check } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [recipe, setRecipe] = useState("main")
  const [cuisine, setCuisine] = useState("mediterranean")
  const [servings, setServings] = useState([2])
  const [diet, setDiet] = useState("regular")
  const [groceryList, setGroceryList] = useState(null)
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
    } else {
      return `/food-pages/${letter.toLowerCase()}-page.html`
    }
  }

  const generateGroceryList = () => {
    // Sample grocery lists based on recipe type and diet
    const lists = {
      main: {
        regular: {
          mediterranean: {
            produce: [
              { name: "Fresh tomatoes", quantity: `${servings[0] * 2} medium` },
              { name: "Red onion", quantity: `${servings[0] / 2} medium` },
              { name: "Cucumber", quantity: `${servings[0] / 2} medium` },
              { name: "Bell pepper", quantity: `${servings[0] / 2} medium` },
              { name: "Fresh parsley", quantity: "1 bunch" },
            ],
            protein: [{ name: "Chicken breast", quantity: `${servings[0] * 4} oz` }],
            grains: [{ name: "Couscous", quantity: `${servings[0] / 2} cup uncooked` }],
            pantry: [
              { name: "Olive oil", quantity: `${servings[0]} tbsp` },
              { name: "Lemon", quantity: `${servings[0] / 2} medium` },
              { name: "Garlic", quantity: `${servings[0]} clove(s)` },
              { name: "Dried oregano", quantity: "1 tsp" },
            ],
          },
          asian: {
            produce: [
              { name: "Broccoli", quantity: `${servings[0] * 0.5} cup` },
              { name: "Carrots", quantity: `${servings[0]} medium` },
              { name: "Green onions", quantity: `${servings[0] * 2} stalks` },
              { name: "Ginger root", quantity: "1 small piece" },
            ],
            protein: [{ name: "Tofu", quantity: `${servings[0] * 3} oz` }],
            grains: [{ name: "Rice", quantity: `${servings[0] / 2} cup uncooked` }],
            pantry: [
              { name: "Soy sauce", quantity: `${servings[0]} tbsp` },
              { name: "Sesame oil", quantity: `${servings[0] / 2} tbsp` },
              { name: "Garlic", quantity: `${servings[0]} clove(s)` },
            ],
          },
          american: {
            produce: [
              { name: "Lettuce", quantity: `${servings[0] / 2} head` },
              { name: "Tomato", quantity: `${servings[0] / 2} medium` },
              { name: "Onion", quantity: `${servings[0] / 4} medium` },
            ],
            protein: [{ name: "Ground beef", quantity: `${servings[0] * 4} oz` }],
            grains: [{ name: "Burger buns", quantity: `${servings[0]} bun(s)` }],
            pantry: [
              { name: "Ketchup", quantity: `${servings[0]} tbsp` },
              { name: "Mustard", quantity: `${servings[0]} tsp` },
              { name: "Salt and pepper", quantity: "to taste" },
            ],
          },
        },
        vegetarian: {
          mediterranean: {
            produce: [
              { name: "Fresh tomatoes", quantity: `${servings[0] * 2} medium` },
              { name: "Red onion", quantity: `${servings[0] / 2} medium` },
              { name: "Cucumber", quantity: `${servings[0] / 2} medium` },
              { name: "Bell pepper", quantity: `${servings[0] / 2} medium` },
              { name: "Fresh parsley", quantity: "1 bunch" },
            ],
            protein: [
              { name: "Feta cheese", quantity: `${servings[0] * 2} oz` },
              { name: "Chickpeas", quantity: `${servings[0] / 2} can` },
            ],
            grains: [{ name: "Couscous", quantity: `${servings[0] / 2} cup uncooked` }],
            pantry: [
              { name: "Olive oil", quantity: `${servings[0]} tbsp` },
              { name: "Lemon", quantity: `${servings[0] / 2} medium` },
              { name: "Garlic", quantity: `${servings[0]} clove(s)` },
              { name: "Dried oregano", quantity: "1 tsp" },
            ],
          },
        },
        vegan: {
          // Sample vegan lists would go here
        },
      },
      side: {
        // Sample side dish lists would go here
      },
    }

    // Get the list based on user selections, with fallbacks
    const selectedList = lists[recipe]?.[diet]?.[cuisine] || lists.main.regular.mediterranean

    setGroceryList(selectedList)
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
                  href={letter === "D" ? "/resources/d" : getLetterHref(letter)}
                  className="flex items-center justify-center h-12 w-12 rounded-full font-medium text-lg transition-all duration-300 bg-green-600 text-white hover:bg-green-700"
                  target={letter >= "D" ? "_blank" : undefined}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

          {/* Add the grocery list builder below the cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isWhatToEatInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-5xl mx-auto mt-12"
          >
            <Card className="border-green-100 shadow-md">
              <CardHeader className="border-b border-green-50 bg-green-50">
                <CardTitle className="text-2xl font-serif font-light text-green-800">Grocery List Builder</CardTitle>
                <CardDescription>Generate a shopping list with quantities for a single meal</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="recipe-type">Recipe Type</Label>
                      <Select value={recipe} onValueChange={setRecipe}>
                        <SelectTrigger id="recipe-type" className="w-full">
                          <SelectValue placeholder="Select recipe type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="main">Main Dish</SelectItem>
                          <SelectItem value="side">Side Dish</SelectItem>
                          <SelectItem value="salad">Salad</SelectItem>
                          <SelectItem value="soup">Soup</SelectItem>
                          <SelectItem value="dessert">Dessert</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cuisine">Cuisine</Label>
                      <Select value={cuisine} onValueChange={setCuisine}>
                        <SelectTrigger id="cuisine" className="w-full">
                          <SelectValue placeholder="Select cuisine" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mediterranean">Mediterranean</SelectItem>
                          <SelectItem value="asian">Asian</SelectItem>
                          <SelectItem value="american">American</SelectItem>
                          <SelectItem value="mexican">Mexican</SelectItem>
                          <SelectItem value="indian">Indian</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="servings">Servings: {servings[0]}</Label>
                      </div>
                      <Slider
                        id="servings"
                        min={1}
                        max={8}
                        step={1}
                        value={servings}
                        onValueChange={setServings}
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Dietary Preference</Label>
                      <RadioGroup value={diet} onValueChange={setDiet} className="flex flex-col space-y-1">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="regular" id="regular" />
                          <Label htmlFor="regular" className="font-normal">
                            Regular
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="vegetarian" id="vegetarian" />
                          <Label htmlFor="vegetarian" className="font-normal">
                            Vegetarian
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="vegan" id="vegan" />
                          <Label htmlFor="vegan" className="font-normal">
                            Vegan
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="gluten-free" id="gluten-free" />
                          <Label htmlFor="gluten-free" className="font-normal">
                            Gluten-Free
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <Button className="w-full bg-green-600 hover:bg-green-700" onClick={generateGroceryList}>
                      Generate Grocery List
                    </Button>
                  </div>

                  <div className="border-t md:border-t-0 md:border-l border-green-100 pt-6 md:pt-0 md:pl-8">
                    <h3 className="text-xl font-medium text-gray-900 mb-4">
                      {groceryList ? "Your Grocery List" : "Grocery List Preview"}
                    </h3>
                    {!groceryList ? (
                      <div className="text-center py-12 text-gray-500">
                        <ShoppingBag className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                        <p>Generate a list to see your personalized grocery items</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-green-700 mb-2">Produce</h4>
                          <ul className="space-y-1">
                            {groceryList.produce.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>
                                  <span className="font-medium">{item.name}</span>
                                  <span className="text-gray-600 ml-2">({item.quantity})</span>
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium text-green-700 mb-2">Protein</h4>
                          <ul className="space-y-1">
                            {groceryList.protein.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>
                                  <span className="font-medium">{item.name}</span>
                                  <span className="text-gray-600 ml-2">({item.quantity})</span>
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium text-green-700 mb-2">Grains</h4>
                          <ul className="space-y-1">
                            {groceryList.grains.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>
                                  <span className="font-medium">{item.name}</span>
                                  <span className="text-gray-600 ml-2">({item.quantity})</span>
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium text-green-700 mb-2">Pantry Items</h4>
                          <ul className="space-y-1">
                            {groceryList.pantry.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>
                                  <span className="font-medium">{item.name}</span>
                                  <span className="text-gray-600 ml-2">({item.quantity})</span>
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4 border-t border-green-100">
                          <Button variant="outline" className="w-full">
                            Print List
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
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
              <div className="aspect-video relative rounded-xl overflow-hidden shadow-md">
                <iframe
                  src="https://www.youtube.com/embed/0bKOol-3rJM"
                  title="NxHealth Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full border-0"
                ></iframe>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-medium text-gray-900">Latest Episode: Nutrition Fundamentals</h3>
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

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6">Explore Our Articles</h2>
            <p className="text-lg text-gray-600 mb-8">
              Dive into our collection of articles covering a wide range of health and wellness topics.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Example Article Card - Replace with actual article data */}
              <Link href="/resources/articles/article-1" className="group block">
                <div className="bg-green-50 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl h-full">
                  <div className="relative h-40 w-full">
                    <Image
                      src="/article-placeholder.png"
                      alt="Placeholder Article Image"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="text-xl font-medium mb-1">Article Title 1</h3>
                        <p className="text-sm text-white/80">Brief article summary...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/resources/articles/article-2" className="group block">
                <div className="bg-green-50 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl h-full">
                  <div className="relative h-40 w-full">
                    <Image
                      src="/article-placeholder.png"
                      alt="Placeholder Article Image"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="text-xl font-medium mb-1">Article Title 2</h3>
                        <p className="text-sm text-white/80">Brief article summary...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/resources/articles/article-3" className="group block">
                <div className="bg-green-50 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl h-full">
                  <div className="relative h-40 w-full">
                    <Image
                      src="/article-placeholder.png"
                      alt="Placeholder Article Image"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="text-xl font-medium mb-1">Article Title 3</h3>
                        <p className="text-sm text-white/80">Brief article summary...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/resources/articles"
                className="inline-block bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-3 text-lg transition-colors duration-300"
              >
                View All Articles
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
