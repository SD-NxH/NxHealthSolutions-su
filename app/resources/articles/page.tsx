"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Search, Filter, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const articles = [
  {
    id: "free-vaccines-but-not-free-food",
    title: "Free Vaccines but Not Free Food? The Hidden Health Divide No One Talks About",
    description:
      "We can get a free shot to treat disease — but not free food to prevent it. Explore the policies, priorities, and paradoxes behind modern health with Coach J.",
    image: "/articles/free-vaccines-food-cover.jpg",
    category: "Public Health",
    date: "Nov 2, 2025",
    readTime: "7 min read",
    url: "/resources/articles/free-vaccines-but-not-free-food",
    featured: true,
  },
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    image: "/gut-health-microbiome.jpg",
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

const categories = ["All", "Nutrition", "Health", "Wellness", "Lifestyle", "Fitness", "Recipes", "Public Health"]

export default function ArticlesPage() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState("All")

  // Filter articles based on search term and category
  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const featuredArticles = filteredArticles.filter((article) => article.featured)
  const regularArticles = filteredArticles.filter((article) => !article.featured)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark opacity-90" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <BookOpen className="h-4 w-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground">Knowledge Hub</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-light text-primary-foreground mb-6 text-balance">
              Explore Our Health & Wellness Articles
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 text-pretty max-w-2xl mx-auto">
              Evidence-based insights, practical tips, and inspiring stories to support your journey to optimal health
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles by title or topic..."
                  className="w-full bg-background border-0 shadow-lg rounded-full pl-12 pr-4 py-6 text-base focus-visible:ring-2 focus-visible:ring-accent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex items-center gap-2 text-muted-foreground shrink-0">
              <Filter className="h-4 w-4" />
              <span className="text-sm font-medium">Filter:</span>
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  className={`rounded-full whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "border-border hover:border-primary hover:bg-accent"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                  {selectedCategory === category && (
                    <Badge variant="secondary" className="ml-2 bg-primary-foreground/20 text-primary-foreground">
                      {filteredArticles.length}
                    </Badge>
                  )}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && selectedCategory === "All" && !searchTerm && (
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-3">Featured Articles</h2>
              <p className="text-muted-foreground text-lg">Our most popular and impactful content</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              {featuredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={article.url}>
                    <Card className="group h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-border hover:border-primary">
                      <div className="relative h-56 md:h-64 w-full overflow-hidden">
                        {article.id === "understanding-breast-cancer" ? (
                          <div className="h-full w-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
                            <span className="text-white text-xl font-bold">Breast Cancer Awareness</span>
                          </div>
                        ) : (
                          <Image
                            src={article.image || "/placeholder.svg"}
                            alt={article.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={index < 3}
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        )}
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary text-primary-foreground shadow-lg">Featured</Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge variant="secondary" className="bg-accent text-accent-foreground">
                            {article.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{article.readTime}</span>
                        </div>
                        <h3 className="text-xl font-serif font-medium text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">{article.description}</p>
                        <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                          Read Article
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-3">
              {selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
            </h2>
            <p className="text-muted-foreground text-lg">
              {filteredArticles.length} {filteredArticles.length === 1 ? "article" : "articles"} found
            </p>
          </motion.div>

          {filteredArticles.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center py-16"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-serif font-medium text-foreground mb-2">No articles found</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                We couldn't find any articles matching your search criteria. Try adjusting your filters or search term.
              </p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                }}
              >
                Clear All Filters
              </Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {(selectedCategory === "All" && !searchTerm ? regularArticles : filteredArticles).map(
                (article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Link href={article.url}>
                      <Card className="group h-full hover:shadow-lg transition-all duration-300 border-border hover:border-primary">
                        <div className="relative h-48 w-full overflow-hidden">
                          {article.id === "understanding-breast-cancer" ? (
                            <div className="h-full w-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
                              <span className="text-white text-lg font-bold">Breast Cancer Awareness</span>
                            </div>
                          ) : (
                            <Image
                              src={article.image || "/placeholder.svg"}
                              alt={article.title}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              loading="lazy"
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          )}
                        </div>
                        <CardContent className="p-5">
                          <div className="flex items-center justify-between mb-3">
                            <Badge variant="secondary" className="bg-accent text-accent-foreground text-xs">
                              {article.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{article.date}</span>
                          </div>
                          <h3 className="text-lg font-serif font-medium text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {article.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">{article.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">{article.readTime}</span>
                            <div className="flex items-center text-primary font-medium text-sm group-hover:gap-1 transition-all">
                              Read
                              <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ),
              )}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-20 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium text-primary">Stay Informed</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-4 text-balance">
              Never Miss a New Article
            </h2>
            <p className="text-muted-foreground text-lg mb-8 text-pretty max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest health insights, recipes, and wellness tips delivered
              straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="rounded-full px-6 flex-1 bg-background border-border focus-visible:ring-2 focus-visible:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-8 shadow-lg hover:shadow-xl transition-all">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
