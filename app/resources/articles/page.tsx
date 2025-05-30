"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"

const articles = [
  {
    id: "food-pyramid-deception",
    title: "The Food Pyramid Deception: It's Time to Reclaim Control of Your Plate",
    description:
      "Challenge conventional nutritional wisdom as we unpack the flaws in the traditional food pyramid and discover how to make truly informed choices about what goes on your plate.",
    image: "/food-pyramid-deception.png",
    category: "Nutrition",
    date: "May 15, 2025",
    readTime: "12 min read",
    url: "/resources/articles/food-pyramid-deception",
  },
  {
    id: "plant-based-strategies-colorectal-cancer",
    title: "Plant-Based Dietary Strategies and Lifestyle Modifications for Colorectal Cancer",
    description:
      "A comprehensive examination of plant-based dietary strategies and lifestyle modifications as approaches for addressing colorectal cancer.",
    image: "/colorful-fruits-vegetables.png",
    category: "Health",
    date: "March 30, 2025",
    readTime: "15 min read",
    url: "/resources/articles/plant-based-strategies-colorectal-cancer",
  },
  {
    id: "understanding-breast-cancer",
    title: "Understanding Breast Cancer: A Holistic Approach to Management",
    description:
      "A comprehensive guide to breast cancer, including types, stages, and holistic management strategies with a focus on plant-based nutrition and lifestyle interventions.",
    image: "/breast-cancer-awareness.png",
    category: "Health",
    date: "May 10, 2023",
    readTime: "15 min read",
    url: "/resources/articles/understanding-breast-cancer",
  },
  {
    id: "power-up-with-plants",
    title: "The Power of Plant-Based Eating",
    description:
      "Discover how incorporating more plant-based foods into your diet can transform your health and energy levels.",
    image: "/colorful-fruits-vegetables.png",
    category: "Nutrition",
    date: "May 2, 2023",
    readTime: "6 min read",
    url: "/resources/articles/power-up-with-plants",
  },
  {
    id: "dark-chocolate",
    title: "Dark Chocolate: A Healthy Indulgence",
    description:
      "Learn about the surprising health benefits of dark chocolate and how to incorporate it into a balanced diet.",
    image: "/dark-chocolate-still-life.png",
    category: "Wellness",
    date: "April 15, 2023",
    readTime: "5 min read",
    url: "/resources/foods/dark-chocolate",
  },
  {
    id: "understanding-caloric-needs",
    title: "Decoding Your Fuel: Understanding Your Caloric Needs",
    description:
      "Find out how to calculate your daily caloric needs and create a balanced nutrition plan that works for your lifestyle.",
    image: "/balanced-diet-calculation.png",
    category: "Health",
    date: "April 8, 2023",
    readTime: "7 min read",
    url: "/resources/articles/understanding-caloric-needs",
  },
]

// More articles can be added here
const additionalArticles = [
  {
    id: "seasonal-eating",
    title: "Seasonal Eating: Why It Matters",
    description:
      "Explore the benefits of eating foods when they're in season and how it can improve your health and the environment.",
    image: "/seasonal-produce.png",
    category: "Nutrition",
    date: "March 22, 2023",
    readTime: "4 min read",
    url: "#",
  },
  {
    id: "meal-prep-101",
    title: "Meal Prep 101: Save Time and Eat Better",
    description: "Learn the basics of meal preparation to save time, reduce stress, and improve your eating habits.",
    image: "/healthy-meal-prep.png",
    category: "Lifestyle",
    date: "March 10, 2023",
    readTime: "8 min read",
    url: "#",
  },
  {
    id: "gut-health",
    title: "The Gut-Brain Connection: How Your Diet Affects Your Mood",
    description: "Understand the fascinating relationship between your gut microbiome and your mental wellbeing.",
    image: "/placeholder.svg?key=w839x",
    category: "Health",
    date: "February 28, 2023",
    readTime: "9 min read",
    url: "#",
  },
  {
    id: "fitness-beginners",
    title: "Fitness for Beginners: Where to Start",
    description: "A comprehensive guide to starting your fitness journey with confidence and safety.",
    image: "/fitness-beginners.png",
    category: "Fitness",
    date: "February 15, 2023",
    readTime: "10 min read",
    url: "#",
  },
  {
    id: "quick-healthy-recipes",
    title: "10 Quick and Healthy Recipes for Busy Professionals",
    description: "Delicious, nutritious meals you can prepare in under 30 minutes for your busy lifestyle.",
    image: "/healthy-quick-meals.png",
    category: "Recipes",
    date: "January 28, 2023",
    readTime: "8 min read",
    url: "/resources/articles/quick-healthy-recipes",
  },
  {
    id: "mindfulness-practice",
    title: "Mindfulness Practices for Daily Wellness",
    description: "Simple mindfulness techniques you can incorporate into your daily routine for better mental health.",
    image: "/mindfulness-meditation.png",
    category: "Wellness",
    date: "January 10, 2023",
    readTime: "6 min read",
    url: "#",
  },
  {
    id: "planted-fried-rice",
    title: "Planted Fried Rice: A Nutrient-Dense Plant-Based Recipe",
    description:
      "A delicious and nutritious plant-based fried rice recipe packed with vegetables and plant protein that's perfect for a quick weeknight dinner.",
    image: "/colorful-vegetable-fried-rice.png",
    category: "Recipes",
    date: "May 18, 2023",
    readTime: "5 min read",
    url: "/resources/planted-fried-rice",
  },
  {
    id: "tropical-green-smoothie",
    title: "Tropical Green Smoothie: A Nutrient-Packed Refreshing Blend",
    description:
      "This vibrant smoothie is packed with vitamins, minerals, and healthy fats from avocado, tropical fruits, and fresh greens, making it a refreshing and filling option perfect for any time of day.",
    image: "/tropical-green-smoothie.png",
    category: "Recipes",
    date: "May 20, 2023",
    readTime: "3 min read",
    url: "/resources/tropical-green-smoothie",
  },
  {
    id: "banana-buckwheat-muffins",
    title: "Banana Buckwheat Muffins with Nuts & Seeds",
    description:
      "Naturally gluten-free muffins packed with flavor and fiber, made with buckwheat flour and loaded with nutritious nuts and seeds for a perfect snack or breakfast.",
    image: "/banana-buckwheat-muffins.png",
    category: "Recipes",
    date: "May 27, 2025",
    readTime: "4 min read",
    url: "/resources/banana-buckwheat-muffins",
  },
  {
    id: "vanilla-coconut-ice-cream",
    title: "Vanilla 'Nice' Cream (Freeze & Blend Method)",
    description:
      "A simple, plant-based frozen treat made with almond milk that's naturally sweet and creamy. This easy recipe focuses on simplicity and natural sweetness for a refreshing dessert.",
    image: "/vanilla-coconut-ice-cream.jpeg",
    category: "Recipes",
    date: "May 29, 2025",
    readTime: "3 min read",
    url: "/resources/vanilla-coconut-ice-cream",
  },
  {
    id: "secret-eating-to-sobriety",
    title: "From Secret Eating To Sobriety",
    description:
      "A personal journey exploring the connections between disordered eating patterns and addiction, with insights on finding balance and recovery through mindful nutrition and self-compassion.",
    image: "/weight-scale-measuring-tape.png",
    category: "Wellness",
    date: "June 2, 2025",
    readTime: "8 min read",
    url: "/resources/articles/secret-eating-to-sobriety",
  },
]

// Combine all articles
const allArticles = [...articles, ...additionalArticles]

// Categories for filtering
const categories = ["All", "Nutrition", "Wellness", "Health", "Lifestyle", "Fitness", "Recipes"]

export default function ArticlesPage() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState("All")

  // Filter articles based on search term and category
  const filteredArticles = allArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-serif font-light mb-6">NxHealth Articles</h1>
            <p className="text-lg md:text-xl mb-8 text-green-100">
              Discover insights, tips, and knowledge to support your health journey
            </p>

            {/* Search Bar */}
            <div className="relative max-w-lg mx-auto">
              <div className="flex">
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full bg-white/10 backdrop-blur-sm border-green-600 text-white placeholder:text-green-200 rounded-l-full rounded-r-none pl-4 pr-10 focus:ring-green-500 focus:border-green-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button
                  className="rounded-l-none rounded-r-full bg-green-800 hover:bg-green-900 px-5"
                  onClick={() => console.log("Search for", searchTerm)}
                >
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 border-b border-gray-200 bg-white sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex overflow-x-auto pb-2 scrollbar-hide space-x-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`rounded-full text-sm px-4 py-2 whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : "border-green-600 text-green-700 hover:bg-green-50"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-gray-900 mb-8">Featured Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  {article.id === "understanding-breast-cancer" ? (
                    <div className="relative h-48 md:h-56 w-full bg-pink-400 flex items-center justify-center">
                      <span className="text-white text-xl font-bold">Breast Cancer Awareness</span>
                    </div>
                  ) : (
                    <div className="relative h-48 md:h-56 w-full">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index < 3}
                        className="object-cover"
                      />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-green-600 uppercase tracking-wider">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-serif font-medium text-gray-900 mb-3">{article.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.description}</p>
                    <Link href={article.url} className="inline-flex items-center text-green-600 font-medium">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="max-w-5xl mx-auto" />

      {/* All Articles */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-gray-900 mb-8">All Articles</h2>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">No articles found matching your search criteria.</p>
              <Button
                variant="outline"
                className="mt-4 border-green-600 text-green-600"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow duration-300">
                    <div className="relative h-48 w-full">
                      {article.id === "understanding-breast-cancer" ? (
                        <div className="h-full w-full bg-pink-400 flex items-center justify-center">
                          <span className="text-white text-xl font-bold">Breast Cancer Awareness</span>
                        </div>
                      ) : (
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          loading="lazy"
                          className="object-cover"
                        />
                      )}
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-green-600 uppercase tracking-wider">
                          {article.category}
                        </span>
                        <span className="text-xs text-gray-500">{article.date}</span>
                      </div>
                      <h3 className="text-lg font-serif font-medium text-gray-900 mb-3">{article.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{article.description}</p>
                      <Link
                        href={
                          article.id === "planted-fried-rice"
                            ? "/resources/planted-fried-rice"
                            : article.id === "tropical-green-smoothie"
                              ? "/resources/tropical-green-smoothie"
                              : article.id === "banana-buckwheat-muffins"
                                ? "/resources/banana-buckwheat-muffins"
                                : article.id === "vanilla-coconut-ice-cream"
                                  ? "/resources/vanilla-coconut-ice-cream"
                                  : article.id === "secret-eating-to-sobriety"
                                    ? "/resources/articles/secret-eating-to-sobriety"
                                    : article.url
                        }
                        className="inline-flex items-center text-green-600 font-medium text-sm"
                      >
                        Read Article <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-16 bg-green-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-gray-900 mb-4">
              Stay Updated with Our Latest Articles
            </h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter to receive new articles, tips, and exclusive content directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input type="email" placeholder="Your email address" className="rounded-full px-4 flex-1" />
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
