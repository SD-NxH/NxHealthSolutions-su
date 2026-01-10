"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
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
import jsPDF from "jspdf"
import { YoutubeMediaHub } from "@/components/youtube-media-hub"
import { HealthProductsHub } from "@/components/health-products-hub"

// Define the article interface
interface Article {
  id: string
  title: string
  description: string
  image: string
  category: string
  date: string
  readTime: string
  url: string
}

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [recipe, setRecipe] = useState("main")
  const [cuisine, setCuisine] = useState("mediterranean")
  const [servings, setServings] = useState([2])
  const [diet, setDiet] = useState("regular")
  const [groceryList, setGroceryList] = useState(null)
  const [randomArticles, setRandomArticles] = useState<Article[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  const heroRef = useRef(null)
  const azListRef = useRef(null)
  const startHereRef = useRef(null)
  const referRef = useRef(null)
  const nxplateRef = useRef(null)
  const servicesRef = useRef(null)
  const whatToEatRef = useRef(null)
  const articlesRef = useRef(null)

  const isAzListInView = useInView(azListRef, { once: true, amount: 0.2 })
  const isStartHereInView = useInView(startHereRef, { once: true, amount: 0.2 })
  const isReferInView = useInView(referRef, { once: true, amount: 0.2 })
  const isNxplateInView = useInView(nxplateRef, { once: true, amount: 0.2 })
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.2 })
  const isWhatToEatInView = useInView(whatToEatRef, { once: true, amount: 0.2 })
  const isArticlesInView = useInView(articlesRef, { once: true, amount: 0.2 })

  // List of all available articles
  const allArticles: Article[] = [
    {
      id: "food-pyramid-deception",
      title: "The Food Pyramid Deception: It's Time to Reclaim Control of Your Plate",
      description:
        "Challenge conventional nutritional wisdom and discover how to become an empowered advocate for your own nutritional sovereignty.",
      image: "/food-pyramid-deception.png",
      category: "Nutrition",
      date: "May 15, 2025",
      readTime: "12 min read",
      url: "/resources/articles/food-pyramid-deception",
    },
    {
      id: "power-up-with-plants",
      title: "Power Up with Plants: Transforming Your Health with Plant-Based Eating",
      description:
        "Discover how incorporating more plant-based foods into your diet can transform your health and energy levels.",
      image: "/colorful-fruits-vegetables.png",
      category: "Nutrition",
      date: "April 28, 2025",
      readTime: "8 min read",
      url: "/resources/articles/power-up-with-plants",
    },
    {
      id: "understanding-caloric-needs",
      title: "Understanding Your Caloric Needs",
      description:
        "Find out how to calculate your daily caloric needs and create a balanced nutrition plan that works for your lifestyle.",
      image: "/balanced-diet-calculation.png",
      category: "Nutrition",
      date: "April 15, 2025",
      readTime: "10 min read",
      url: "/resources/articles/understanding-caloric-needs",
    },
    {
      id: "understanding-breast-cancer",
      title: "Understanding Breast Cancer: Prevention Through Nutrition",
      description:
        "Learn about the role of nutrition in breast cancer prevention and how dietary choices can impact your health.",
      image: "/healthy-meal-prep.png",
      category: "Health",
      date: "March 22, 2025",
      readTime: "15 min read",
      url: "/resources/articles/understanding-breast-cancer",
    },
    {
      id: "plant-based-strategies-colorectal-cancer",
      title: "Plant-Based Strategies for Colorectal Cancer Prevention",
      description:
        "Explore how plant-based eating patterns can help reduce the risk of colorectal cancer and promote gut health.",
      image: "/vibrant-plant-based-spread.png",
      category: "Health",
      date: "March 10, 2025",
      readTime: "14 min read",
      url: "/resources/articles/plant-based-strategies-colorectal-cancer",
    },
    {
      id: "seasonal-eating",
      title: "Seasonal Eating: Why It Matters",
      description:
        "Explore the benefits of eating foods when they're in season and how it can improve your health and the environment.",
      image: "/seasonal-produce.png",
      category: "Nutrition",
      date: "February 18, 2025",
      readTime: "9 min read",
      url: "/resources/articles/seasonal-eating",
    },
    {
      id: "mindfulness-meditation",
      title: "Mindfulness Meditation for Stress Reduction",
      description: "Learn practical mindfulness techniques to reduce stress and improve your overall well-being.",
      image: "/mindfulness-meditation.png",
      category: "Wellness",
      date: "February 5, 2025",
      readTime: "11 min read",
      url: "/resources/articles/mindfulness-meditation",
    },
    {
      id: "fitness-beginners",
      title: "Fitness for Beginners: Starting Your Journey",
      description:
        "A comprehensive guide to starting your fitness journey with practical tips and beginner-friendly workouts.",
      image: "/fitness-beginners.png",
      category: "Fitness",
      date: "January 20, 2025",
      readTime: "13 min read",
      url: "/resources/articles/fitness-beginners",
    },
    {
      id: "healthy-quick-meals",
      title: "Healthy Quick Meals for Busy Professionals",
      description:
        "Discover nutritious and delicious meals that can be prepared in 30 minutes or less for your busy lifestyle.",
      image: "/healthy-quick-meals.png",
      category: "Nutrition",
      date: "January 8, 2025",
      readTime: "7 min read",
      url: "/resources/articles/healthy-quick-meals",
    },
  ]

  // Fisher-Yates shuffle algorithm for true randomness
  const shuffleArray = (array: any[]) => {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
  }

  // Add a randomization helper function after the shuffleArray function:

  function getRandomItems(array, count) {
    const shuffled = [...array].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }

  // Get random articles on component mount (page refresh)
  useEffect(() => {
    setIsLoading(true)
    // Simulate a small delay to prevent flickering
    setTimeout(() => {
      const shuffled = shuffleArray(allArticles)
      setRandomArticles(shuffled.slice(0, 3))
      setIsLoading(false)
    }, 300)
  }, [])

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

  // Modify the generateGroceryList function to include randomization:

  const generateGroceryList = () => {
    // Database of ingredients by category
    const ingredientDb = {
      produce: [
        { name: "Fresh tomatoes", baseQuantity: 2, unit: "medium" },
        { name: "Red onion", baseQuantity: 0.5, unit: "medium" },
        { name: "Cucumber", baseQuantity: 0.5, unit: "medium" },
        { name: "Bell pepper", baseQuantity: 0.5, unit: "medium" },
        { name: "Fresh parsley", baseQuantity: 1, unit: "bunch" },
        { name: "Spinach", baseQuantity: 1, unit: "cup" },
        { name: "Kale", baseQuantity: 1, unit: "cup" },
        { name: "Arugula", baseQuantity: 1, unit: "cup" },
        { name: "Broccoli", baseQuantity: 0.5, unit: "cup" },
        { name: "Carrots", baseQuantity: 1, unit: "medium" },
        { name: "Green onions", baseQuantity: 2, unit: "stalks" },
        { name: "Ginger root", baseQuantity: 1, unit: "small piece" },
        { name: "Bok choy", baseQuantity: 1, unit: "head" },
        { name: "Sweet potato", baseQuantity: 0.5, unit: "medium" },
        { name: "Brussels sprouts", baseQuantity: 0.5, unit: "cup" },
        { name: "Red cabbage", baseQuantity: 0.25, unit: "head" },
        { name: "Avocado", baseQuantity: 0.5, unit: "medium" },
        { name: "Mushrooms", baseQuantity: 4, unit: "oz" },
        { name: "Zucchini", baseQuantity: 1, unit: "medium" },
        { name: "Cauliflower", baseQuantity: 0.5, unit: "head" },
      ],
      protein: [
        { name: "Chickpeas", baseQuantity: 0.5, unit: "can" },
        { name: "Hemp seeds", baseQuantity: 1, unit: "tbsp" },
        { name: "Tempeh", baseQuantity: 3, unit: "oz" },
        { name: "Edamame", baseQuantity: 0.5, unit: "cup" },
        { name: "Lentils", baseQuantity: 0.5, unit: "cup dried" },
        { name: "Pumpkin seeds", baseQuantity: 1, unit: "tbsp" },
        { name: "Seitan", baseQuantity: 3, unit: "oz" },
        { name: "Tofu", baseQuantity: 3, unit: "oz" },
        { name: "Black beans", baseQuantity: 0.5, unit: "can" },
        { name: "Peanuts", baseQuantity: 1, unit: "tbsp" },
        { name: "Almonds", baseQuantity: 1, unit: "tbsp" },
        { name: "Plant protein powder", baseQuantity: 1, unit: "scoop" },
      ],
      grains: [
        { name: "Quinoa", baseQuantity: 0.5, unit: "cup uncooked" },
        { name: "Brown rice", baseQuantity: 0.5, unit: "cup uncooked" },
        { name: "Farro", baseQuantity: 0.5, unit: "cup uncooked" },
        { name: "Buckwheat", baseQuantity: 0.5, unit: "cup uncooked" },
        { name: "Millet", baseQuantity: 0.5, unit: "cup uncooked" },
        { name: "Oats", baseQuantity: 0.5, unit: "cup" },
        { name: "Whole grain pasta", baseQuantity: 0.5, unit: "cup uncooked" },
        { name: "Barley", baseQuantity: 0.5, unit: "cup uncooked" },
        { name: "Corn tortillas", baseQuantity: 2, unit: "tortillas" },
        { name: "Whole grain bread", baseQuantity: 2, unit: "slices" },
      ],
      pantry: [
        { name: "Olive oil", baseQuantity: 1, unit: "tbsp" },
        { name: "Lemon", baseQuantity: 0.5, unit: "medium" },
        { name: "Garlic", baseQuantity: 1, unit: "clove(s)" },
        { name: "Tahini", baseQuantity: 1, unit: "tbsp" },
        { name: "Tamari", baseQuantity: 1, unit: "tbsp" },
        { name: "Sesame oil", baseQuantity: 0.5, unit: "tbsp" },
        { name: "Rice vinegar", baseQuantity: 0.5, unit: "tbsp" },
        { name: "Nutritional yeast", baseQuantity: 1, unit: "tbsp" },
        { name: "Coconut aminos", baseQuantity: 1, unit: "tbsp" },
        { name: "Chia seeds", baseQuantity: 0.5, unit: "tbsp" },
        { name: "Flax seeds", baseQuantity: 0.5, unit: "tbsp" },
        { name: "Maple syrup", baseQuantity: 1, unit: "tbsp" },
        { name: "Coconut milk", baseQuantity: 0.5, unit: "cup" },
        { name: "Curry powder", baseQuantity: 1, unit: "tsp" },
        { name: "Cumin", baseQuantity: 1, unit: "tsp" },
        { name: "Paprika", baseQuantity: 1, unit: "tsp" },
        { name: "Turmeric", baseQuantity: 0.5, unit: "tsp" },
        { name: "Cinnamon", baseQuantity: 0.5, unit: "tsp" },
      ],
    }

    // Determine how many items to include from each category based on recipe type
    const counts = {
      produce: 4,
      protein: 2,
      grains: 1,
      pantry: 3,
    }

    // Adjust counts based on recipe type
    if (recipe === "buddha-bowl" || recipe === "grain-bowl") {
      counts.produce = 5
      counts.protein = 2
      counts.grains = 1
      counts.pantry = 4
    } else if (recipe === "smoothie") {
      counts.produce = 4
      counts.protein = 1
      counts.grains = 0
      counts.pantry = 2
    } else if (recipe === "salad") {
      counts.produce = 6
      counts.protein = 1
      counts.grains = 0
      counts.pantry = 3
    }

    // Generate random grocery list
    const groceryList = {
      produce: getRandomItems(ingredientDb.produce, counts.produce).map((item) => ({
        name: item.name,
        quantity: `${(item.baseQuantity * servings[0]).toFixed(1).replace(/\.0$/, "")} ${item.unit}`,
      })),
      protein: getRandomItems(ingredientDb.protein, counts.protein).map((item) => ({
        name: item.name,
        quantity: `${(item.baseQuantity * servings[0]).toFixed(1).replace(/\.0$/, "")} ${item.unit}`,
      })),
      grains: getRandomItems(ingredientDb.grains, counts.grains).map((item) => ({
        name: item.name,
        quantity: `${(item.baseQuantity * servings[0]).toFixed(1).replace(/\.0$/, "")} ${item.unit}`,
      })),
      pantry: getRandomItems(ingredientDb.pantry, counts.pantry).map((item) => ({
        name: item.name,
        quantity: `${(item.baseQuantity * servings[0]).toFixed(1).replace(/\.0$/, "")} ${item.unit}`,
      })),
    }

    setGroceryList(groceryList)
  }

  const downloadGroceryListPDF = () => {
    if (!groceryList) return

    const doc = new jsPDF()

    // Define brand colors
    const colors = {
      primary: [22, 163, 74], // green-600
      secondary: [240, 253, 244], // green-50
      headings: [20, 83, 45], // green-800
      text: [55, 65, 81], // gray-700
      categoryHeadings: [21, 128, 61], // green-700
      background: [255, 255, 255], // white
    }

    // Add a light green background to the header area
    doc.setFillColor(...colors.secondary)
    doc.rect(0, 0, 210, 40, "F")

    // Add NxHealth logo to top right corner
    try {
      // Create a canvas to draw the logo
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")
      canvas.width = 60
      canvas.height = 30

      // Set background to transparent
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw NxHealth logo text since we can't easily load the image file
      ctx.fillStyle = "#059669" // green-600 color
      ctx.font = "bold 14px Arial"
      ctx.textAlign = "center"
      ctx.fillText("NxHealth", canvas.width / 2, 20)

      // Convert canvas to image data and add to PDF
      const logoDataUrl = canvas.toDataURL("image/png")
      doc.addImage(logoDataUrl, "PNG", 150, 5, 30, 15)
    } catch (error) {
      // Fallback: just add text logo if image fails
      doc.setFontSize(12)
      doc.setTextColor(...colors.primary)
      doc.text("NxHealth", 150, 15)
    }

    // Add a green line under the header
    doc.setDrawColor(...colors.primary)
    doc.setLineWidth(1)
    doc.line(20, 40, 190, 40)

    // Set title
    doc.setFontSize(24)
    doc.setTextColor(...colors.headings)
    doc.text("NxHealth Grocery List", 20, 30)

    // Add meal details
    doc.setFontSize(12)
    doc.setTextColor(...colors.text)
    doc.text(`Recipe Type: ${recipe.charAt(0).toUpperCase() + recipe.slice(1)}`, 20, 50)
    doc.text(`Cuisine: ${cuisine.charAt(0).toUpperCase() + cuisine.slice(1)}`, 20, 60)
    doc.text(`Servings: ${servings[0]}`, 20, 70)
    doc.text(`Diet: ${diet.charAt(0).toUpperCase() + diet.slice(1)}`, 20, 80)

    let yPosition = 100

    // Add Produce section
    doc.setFontSize(16)
    doc.setTextColor(...colors.categoryHeadings)
    doc.text("Produce:", 20, yPosition)
    yPosition += 10
    doc.setFontSize(11)
    doc.setTextColor(...colors.text)
    groceryList.produce.forEach((item) => {
      doc.text(`• ${item.name} (${item.quantity})`, 25, yPosition)
      yPosition += 8
    })

    yPosition += 10

    // Add Protein section
    doc.setFontSize(16)
    doc.setTextColor(...colors.categoryHeadings)
    doc.text("Protein:", 20, yPosition)
    yPosition += 10
    doc.setFontSize(11)
    doc.setTextColor(...colors.text)
    groceryList.protein.forEach((item) => {
      doc.text(`• ${item.name} (${item.quantity})`, 25, yPosition)
      yPosition += 8
    })

    yPosition += 10

    // Add Grains section
    doc.setFontSize(16)
    doc.setTextColor(...colors.categoryHeadings)
    doc.text("Grains:", 20, yPosition)
    yPosition += 10
    doc.setFontSize(11)
    doc.setTextColor(...colors.text)
    groceryList.grains.forEach((item) => {
      doc.text(`• ${item.name} (${item.quantity})`, 25, yPosition)
      yPosition += 8
    })

    yPosition += 10

    // Add Pantry section
    doc.setFontSize(16)
    doc.setTextColor(...colors.categoryHeadings)
    doc.text("Pantry Items:", 20, yPosition)
    yPosition += 10
    doc.setFontSize(11)
    doc.setTextColor(...colors.text)
    groceryList.pantry.forEach((item) => {
      doc.text(`• ${item.name} (${item.quantity})`, 25, yPosition)
      yPosition += 8
    })

    // Add green footer bar
    doc.setFillColor(...colors.primary)
    doc.rect(0, 280, 210, 17, "F")

    // Add footer text
    doc.setFontSize(10)
    doc.setTextColor(255, 255, 255) // White text
    doc.text("Generated by NxHealth - Your Partner in Wellness", 20, 290)

    // Add current date
    const today = new Date()
    const dateStr = today.toLocaleDateString()
    doc.text(`Created: ${dateStr}`, 150, 290)

    // Save the PDF
    doc.save("nxhealth-grocery-list.pdf")
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
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
              NxHealth Resources
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover our collection of health resources, food as medicine guides, and holistic health solutions.
            </p>

            <form onSubmit={handleSearch} className="relative max-w-xl mx-auto">
              <Input
                type="text"
                placeholder="Find Your Solution..."
                className="pl-10 pr-4 py-6 rounded-full border-border focus:border-brand focus:ring-brand"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Button
                type="submit"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full bg-brand hover:bg-brand-hover h-10 w-10 p-0"
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </form>
            <p className="text-sm text-muted-foreground mt-3">
              Search for health topics, nutrition information, wellness tips, and more
            </p>
          </motion.div>
        </div>
      </section>

      {/* A-Z Food List Section */}
      <section ref={azListRef} className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isAzListInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-brand-dark mb-6">Health Solutions</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Explore our comprehensive A-Z guide of foods and their healing properties. Discover how different foods
              can be used to support your health journey.
            </p>
            <div className="bg-brand-lighter p-4 rounded-lg text-sm text-muted-foreground mb-8">
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
                  href={
                    letter === "C"
                      ? "/resources/c"
                      : letter === "E"
                        ? "/resources/e"
                        : letter === "D"
                          ? "/resources/d"
                          : letter === "F"
                            ? "/resources/f"
                            : letter === "G"
                              ? "/resources/g"
                              : // Added H button link to new Foods Starting with H page
                                letter === "H"
                                ? "/resources/h"
                                : getLetterHref(letter)
                  }
                  className="flex items-center justify-center h-12 w-12 rounded-full font-medium text-lg transition-all duration-300 bg-brand text-white hover:bg-brand-hover"
                  target={
                    letter === "E" || letter === "F" || letter === "G" || letter === "H"
                      ? undefined
                      : letter >= "I"
                        ? "_blank"
                        : undefined
                  }
                >
                  {letter}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Start Here Section */}
      <section ref={startHereRef} className="py-16 bg-brand-lighter">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isStartHereInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-light text-brand-dark mb-6">Start Here!</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Begin your health journey with a personalized assessment. Our comprehensive questionnaire helps us
                understand your unique needs and goals.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                After completing the assessment, you'll receive tailored recommendations and resources to support your
                health transformation.
              </p>
              <Button className="bg-brand hover:bg-brand-hover text-white rounded-full px-8 py-6 text-lg">
                Take the Assessment <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isStartHereInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-background p-6 rounded-xl shadow-md"
            >
              <div className="aspect-video relative bg-border rounded-lg overflow-hidden mb-4">
                <Image src="/assessment-image.jpeg" alt="Health assessment form" fill className="object-cover" />
              </div>
              <p className="text-muted-foreground text-center">
                Our assessment takes approximately 5-10 minutes to complete
              </p>
              <div className="text-center mt-4">
                <Link href="/get-started">
                  <Button className="bg-brand hover:bg-brand-hover text-white rounded-full px-6 py-3">
                    Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="text-center mt-8">
            <Link href="/get-started">
              <Button className="bg-brand hover:bg-brand-hover text-white rounded-full px-8 py-6 text-lg">
                Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What To Eat Section */}
      <section ref={whatToEatRef} className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isWhatToEatInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-brand-dark mb-6">What To Eat</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Discover healthy meal ideas, explore different cuisines, and build your personalized grocery list.
            </p>

            <form className="relative max-w-xl mx-auto mb-12">
              <Input
                type="text"
                placeholder="Search for recipes, ingredients, or meal ideas..."
                className="pl-10 pr-4 py-6 rounded-full border-border focus:border-brand focus:ring-brand"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Button
                type="submit"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full bg-brand hover:bg-brand-hover h-10 w-10 p-0"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/resources/cuisines"
                className="group block transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                <div className="bg-brand-lighter rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl h-full">
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
                <div className="bg-brand-lighter rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl h-full">
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
                <div className="bg-brand-lighter rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl h-full">
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

              <Link
                href="/resources/ai-meal-planner"
                className="group block transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl h-full border-2 border-green-300">
                  <div className="relative h-40 w-full">
                    <Image
                      src="/personalized-nutrition-plan.png"
                      alt="AI-powered meal planning"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-800/80 to-green-600/40 flex items-end transition-all duration-300 group-hover:from-green-800/90">
                      <div className="p-4 text-white transform transition-all duration-300 group-hover:translate-y-[-4px]">
                        <span className="px-2 py-1 bg-yellow-500 text-xs font-bold rounded-full mb-2 inline-block">
                          PREMIUM
                        </span>
                        <h3 className="text-xl font-medium mb-1">NxMeal Planner</h3>
                        <p className="text-sm text-white/90">Personalized meal plans to make life easier.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Add the grocery list builder below the cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isWhatToEatInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-5xl mx-auto mt-12"
          >
            <Card className="border-brand-lighter shadow-md">
              <CardHeader className="border-b border-brand-lighter bg-brand-lighter">
                <CardTitle className="text-2xl font-serif font-light text-brand-dark">Grocery List Builder</CardTitle>
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
                          <SelectItem value="smoothie">Smoothie Bowl</SelectItem>
                          <SelectItem value="buddha-bowl">Buddha Bowl</SelectItem>
                          <SelectItem value="stir-fry">Plant-Based Stir-Fry</SelectItem>
                          <SelectItem value="grain-bowl">Grain Bowl</SelectItem>
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

                    <Button className="w-full bg-brand hover:bg-brand-hover" onClick={generateGroceryList}>
                      Generate Grocery List
                    </Button>
                  </div>

                  <div className="border-t md:border-t-0 md:border-l border-brand-lighter pt-6 md:pt-0 md:pl-8">
                    <h3 className="text-xl font-medium text-brand-dark mb-4">
                      {groceryList ? "Your Grocery List" : "Grocery List Preview"}
                    </h3>
                    {!groceryList ? (
                      <div className="text-center py-12 text-muted-foreground">
                        <ShoppingBag className="mx-auto h-12 w-12 text-border mb-4" />
                        <p>Generate a list to see your personalized grocery items</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-brand mb-2">Produce</h4>
                          <ul className="space-y-1">
                            {groceryList.produce.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <Check className="h-5 w-5 text-brand mr-2 flex-shrink-0 mt-0.5" />
                                <span>
                                  <span className="font-medium">{item.name}</span>
                                  <span className="text-muted-foreground ml-2">({item.quantity})</span>
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium text-brand mb-2">Protein</h4>
                          <ul className="space-y-1">
                            {groceryList.protein.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <Check className="h-5 w-5 text-brand mr-2 flex-shrink-0 mt-0.5" />
                                <span>
                                  <span className="font-medium">{item.name}</span>
                                  <span className="text-muted-foreground ml-2">({item.quantity})</span>
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium text-brand mb-2">Grains</h4>
                          <ul className="space-y-1">
                            {groceryList.grains.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <Check className="h-5 w-5 text-brand mr-2 flex-shrink-0 mt-0.5" />
                                <span>
                                  <span className="font-medium">{item.name}</span>
                                  <span className="text-muted-foreground ml-2">({item.quantity})</span>
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium text-brand mb-2">Pantry Items</h4>
                          <ul className="space-y-1">
                            {groceryList.pantry.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <Check className="h-5 w-5 text-brand mr-2 flex-shrink-0 mt-0.5" />
                                <span>
                                  <span className="font-medium">{item.name}</span>
                                  <span className="text-muted-foreground ml-2">({item.quantity})</span>
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4 border-t border-brand-lighter">
                          <Button variant="outline" className="w-full bg-transparent" onClick={downloadGroceryListPDF}>
                            Download PDF
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

      {/* CHANGE> Add Health Products Hub section between Grocery List Builder and Watch Coach J */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-background to-brand-lighter/20">
        <div className="container px-4 md:px-6">
          <HealthProductsHub />
        </div>
      </section>

      {/* NxPlate Section - now YouTube Media Hub */}
      <section ref={nxplateRef} className="pt-24 pb-16 bg-background">
        <div className="container px-4 md:px-6">
          <YoutubeMediaHub />
        </div>
      </section>

      {/* Transform Your Life eBook Section */}
      <section className="py-16 bg-gradient-to-br from-brand-lighter to-emerald-50">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <div className="relative">
                <motion.div
                  initial={{ rotateY: -15, scale: 0.9 }}
                  animate={{ rotateY: 0, scale: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="relative mx-auto w-80 h-96 perspective-1000"
                >
                  <div className="relative w-full h-full transform-gpu transition-transform duration-700 hover:scale-105">
                    <div className="absolute inset-0 rounded-lg shadow-2xl overflow-hidden">
                      <Image
                        src="/transform-your-life-cover.jpg"
                        alt="Transform Your Life in 30 Days book cover by Eric Johnson"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 320px"
                        priority
                      />
                    </div>
                    <div className="absolute -right-2 top-2 w-full h-full bg-brand-hover rounded-lg -z-10"></div>
                    <div className="absolute -right-4 top-4 w-full h-full bg-brand-dark rounded-lg -z-20"></div>
                  </div>
                </motion.div>

                {/* Floating elements animation */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80"
                ></motion.div>
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-6 -left-6 w-6 h-6 bg-green-400 rounded-full opacity-70"
                ></motion.div>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute top-1/2 -left-8 w-4 h-4 border-2 border-brand opacity-60"
                ></motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <div className="mb-6">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-3xl md:text-4xl font-serif font-light text-brand-dark mb-4"
                >
                  Transform Your Life In 30 Days
                </motion.h2>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100px" }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="h-1 bg-gradient-to-r from-brand to-emerald-600 mb-6"
                ></motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="prose prose-lg text-muted-foreground mb-8"
              >
                <p className="mb-4">
                  Hello! I'm Eric Johnson, and I am thrilled you're here to explore the wonderful world of health with
                  NxHealth Solutions! For as long as I can remember, health has been a staple in my life—from my passion
                  for basketball to becoming a personal trainer and diving deep into nutrition through higher education.
                  My journey led me to discover how profoundly wellness and helping people achieve optimum health
                  resonate with me.
                </p>
                <p className="mb-4">
                  That's why I created "Transform Your Life In 30 Days," a 30-day approach designed for anyone seeking a
                  fulfilling change in their life. In this book, I can't promise you instant success, but I can promise
                  a new feeling, better habits, and the star power to truly change your life for the better. My
                  philosophy is rooted in the centuries-old truth that food heals, and changing our relationship with
                  what we eat and how we live can truly make us a healthier world.
                </p>
                <p className="mb-4">
                  I believe that if you focus and commit to making simple habit changes, you will see and feel huge
                  differences in your health. This isn't just about developing new habits; it's about embracing a new
                  perspective on your health, increasing your quality of life, and finding real solutions for a
                  healthier, happier you.
                </p>
                <p className="mb-6">
                  Your new life awaits! I invite you to embark on this journey with me and see what happens. Enjoy the
                  process, and feel free to bring a friend or family member along for the ride.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="/transform-your-life-in-30-days.pdf"
                  download="Transform-Your-Life-In-30-Days-NxHealth.pdf"
                  className="inline-flex items-center justify-center bg-brand hover:bg-brand-hover text-white rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Get Your Copy Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <Button
                  prvebook1="true"
                  variant="outline"
                  className="border-brand text-brand hover:bg-brand-lighter rounded-full px-8 py-6 text-lg font-medium bg-transparent"
                >
                  Listen
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mt-6 pt-6 border-t border-brand-lighter"
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NxHealth Podcast Section - This section is now replaced by YoutubeMediaHub */}
      {/* <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-brand-dark mb-6">NxHealth Podcast</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Tune in to our podcast for expert insights on nutrition, wellness, and healthy living.
              </p>
              <a
                href="https://open.spotify.com/show/2E8oq25EKHAEscmPwstEvu?si=S9e8q9aiR_yq-sogzw4yvw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-brand hover:bg-brand-hover text-white rounded-full px-6 py-3 text-lg transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
                Listen on Spotify
              </a>
            </div>

            <div className="relative">
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex space-x-6 pb-4" style={{ width: "max-content" }}>
                  <div className="flex-shrink-0 w-80 bg-brand-lighter rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-brand rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-brand-dark mb-1">Episode 1: Nutrition Fundamentals</h3>
                        <p className="text-sm text-muted-foreground">45 min • Health & Wellness</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      Discover the building blocks of proper nutrition and how to create sustainable eating habits.
                    </p>
                    <div className="flex items-center justify-between">
                      <button className="bg-brand hover:bg-brand-hover text-white px-4 py-2 rounded-full text-sm transition-colors duration-300">
                        Play Episode
                      </button>
                      <span className="text-xs text-muted-foreground">Dec 15, 2024</span>
                    </div>
                  </div>

                  <div className="flex-shrink-0 w-80 bg-brand-lighter rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-brand rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-brand-dark mb-1">Episode 2: Plant-Based Power</h3>
                        <p className="text-sm text-muted-foreground">38 min • Nutrition</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      Explore the benefits of plant-based eating and practical tips for incorporating more plants.
                    </p>
                    <div className="flex items-center justify-between">
                      <button className="bg-brand hover:bg-brand-hover text-white px-4 py-2 rounded-full text-sm transition-colors duration-300">
                        Play Episode
                      </button>
                      <span className="text-xs text-muted-foreground">Dec 8, 2024</span>
                    </div>
                  </div>

                  <div className="flex-shrink-0 w-80 bg-brand-lighter rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-brand rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-brand-dark mb-1">Episode 3: Mindful Eating</h3>
                        <p className="text-sm text-muted-foreground">42 min • Wellness</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      Learn how to develop a healthier relationship with food through mindfulness practices.
                    </p>
                    <div className="flex items-center justify-between">
                      <button className="bg-brand hover:bg-brand-hover text-white px-4 py-2 rounded-full text-sm transition-colors duration-300">
                        Play Episode
                      </button>
                      <span className="text-xs text-muted-foreground">Dec 1, 2024</span>
                    </div>
                  </div>

                  <div className="flex-shrink-0 w-80 bg-brand-lighter rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-brand rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-brand-dark mb-1">Episode 4: Meal Prep Mastery</h3>
                        <p className="text-sm text-muted-foreground">35 min • Practical Tips</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      Master the art of meal preparation to save time and maintain healthy eating habits.
                    </p>
                    <div className="flex items-center justify-between">
                      <button className="bg-brand hover:bg-brand-hover text-white px-4 py-2 rounded-full text-sm transition-colors duration-300">
                        Play Episode
                      </button>
                      <span className="text-xs text-muted-foreground">Nov 24, 2024</span>
                    </div>
                  </div>

                  <div className="flex-shrink-0 w-80 bg-brand-lighter rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-brand rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-brand-dark mb-1">Episode 5: Stress & Nutrition</h3>
                        <p className="text-sm text-muted-foreground">40 min • Mental Health</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      Understanding the connection between stress, mental health, and nutritional choices.
                    </p>
                    <div className="flex items-center justify-between">
                      <button className="bg-brand hover:bg-brand-hover text-white px-4 py-2 rounded-full text-sm transition-colors duration-300">
                        Play Episode
                      </button>
                      <span className="text-xs text-muted-foreground">Nov 17, 2024</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-6 space-x-2">
                <div className="w-2 h-2 bg-brand rounded-full"></div>
                <div className="w-2 h-2 bg-border rounded-full"></div>
                <div className="w-2 h-2 bg-border rounded-full"></div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">Subscribe to never miss an episode</p>
              <a
                href="https://open.spotify.com/show/2E8oq25EKHAEscmPwstEvu?si=S9e8q9aiR_yq-sogzw4yvw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-brand hover:text-brand-hover font-medium transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
                Follow on Spotify →
              </a>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Refer a Friend Section */}
      <section ref={referRef} className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isReferInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="grid md:grid-cols-2">
                <div className="bg-brand p-8 text-white flex flex-col justify-center">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-3xl font-serif font-light">Refer A Friend</CardTitle>
                    <CardDescription className="text-brand-lighter text-lg">
                      Get a free consultation or health solution session!
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4 pb-6">
                    <p className="mb-6">
                      Share the gift of health with your friends and family. For each successful referral, you'll
                      receive a complimentary consultation or health solution session.
                    </p>
                    <div className="flex items-center mb-4">
                      <Users className="h-6 w-6 mr-3 text-brand-lighter" />
                      <span>Help others discover their path to wellness</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-6 w-6 mr-3 text-brand-lighter" />
                      <span>Earn valuable health resources for yourself</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-background text-brand hover:bg-brand-lighter rounded-full px-6 py-5">
                      Refer A Friend
                    </Button>
                  </CardFooter>
                </div>
                <div className="relative min-h-[300px] p-4 flex items-center justify-center bg-background">
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
      <section ref={servicesRef} className="py-16 bg-brand-dark text-white">
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
            className="text-xl text-brand-lighter max-w-2xl mx-auto mb-10"
          >
            Explore our range of personalized health and wellness services designed to support your unique journey.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/services">
              <Button className="bg-background text-brand-dark hover:bg-brand-lighter rounded-full px-8 py-6 text-lg">
                View All Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Articles Section */}
      <section ref={articlesRef} className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isArticlesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-brand-dark mb-6">Explore Our Articles</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Dive into our collection of articles covering a wide range of health and wellness topics.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isArticlesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {isLoading
                ? // Loading state
                  Array(3)
                    .fill(0)
                    .map((_, index) => (
                      <div key={index} className="bg-border rounded-xl overflow-hidden h-full animate-pulse">
                        <div className="h-40 w-full bg-border"></div>
                        <div className="p-4">
                          <div className="h-6 bg-border rounded mb-2 w-3/4"></div>
                          <div className="h-4 bg-border rounded w-full mb-2"></div>
                          <div className="h-4 bg-border rounded w-2/3"></div>
                        </div>
                      </div>
                    ))
                : // Random articles
                  randomArticles.map((article) => (
                    <Link key={article.id} href={article.url} className="group block">
                      <div className="bg-brand-lighter rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl h-full">
                        <div className="relative h-40 w-full">
                          <Image
                            src={article.image || "/placeholder.svg"}
                            alt={article.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                            <div className="p-4 text-white">
                              <div className="flex items-center mb-2">
                                <span className="text-xs bg-brand text-white px-2 py-1 rounded-full">
                                  {article.category}
                                </span>
                                <span className="text-xs text-brand-lighter ml-2">{article.readTime}</span>
                              </div>
                              <h3 className="text-xl font-medium mb-1 line-clamp-1">{article.title}</h3>
                              <p className="text-sm text-white/80 line-clamp-2">{article.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/resources/articles"
                className="inline-block bg-brand hover:bg-brand-hover text-white rounded-full px-8 py-3 text-lg transition-colors duration-300"
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
