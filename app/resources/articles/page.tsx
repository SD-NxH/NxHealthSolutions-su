"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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

const categories = ["All", "Nutrition", "Health", "Wellness", "Lifestyle", "Fitness", "Recipes"]

export default function ArticlesPage() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState("All")

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const articleCount = filteredArticles.length

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-light mb-6 text-balance">Health & Wellness Articles</h1>
            <p className="text-lg md:text-xl mb-10 text-primary-foreground/90 text-pretty">
              Evidence-based insights, practical tips, and inspiring stories to support your journey to optimal health
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles by title or topic..."
                  className="w-full pl-12 pr-4 py-6 rounded-full bg-background text-foreground border-border focus:ring-2 focus:ring-accent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="sticky top-0 z-20 bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex items-center gap-2 text-muted-foreground whitespace-nowrap">
              <Filter className="h-4 w-4" />
              <span className="text-sm font-medium">Filter:</span>
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  className="rounded-full whitespace-nowrap"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <section className="py-6 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{articleCount}</span>{" "}
            {articleCount === 1 ? "article" : "articles"}
            {selectedCategory !== "All" && (
              <>
                {" "}
                in <span className="font-semibold text-foreground">{selectedCategory}</span>
              </>
            )}
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          {filteredArticles.length === 0 ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No articles found</h3>
                <p className="text-muted-foreground mb-6">
                  We couldn't find any articles matching your search criteria. Try adjusting your filters or search
                  term.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("All")
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link href={article.url} className="group block h-full">
                    <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 border-border bg-card">
                      <div className="relative h-56 w-full overflow-hidden bg-muted">
                        {article.id === "understanding-breast-cancer" ? (
                          <div className="h-full w-full bg-accent flex items-center justify-center">
                            <span className="text-accent-foreground text-xl font-semibold">
                              Breast Cancer Awareness
                            </span>
                          </div>
                        ) : (
                          <Image
                            src={article.image || "/placeholder.svg"}
                            alt={article.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        )}
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <Badge variant="secondary" className="text-xs font-semibold">
                            {article.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{article.readTime}</span>
                        </div>
                        <h3 className="text-xl font-serif font-medium text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{article.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{article.date}</span>
                          <div className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                            Read Article
                            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-secondary-foreground mb-4">
              Never Miss an Article
            </h2>
            <p className="text-secondary-foreground/80 mb-8 text-pretty">
              Get the latest health insights, recipes, and wellness tips delivered straight to your inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="rounded-full px-6 flex-1 bg-background" />
              <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-secondary-foreground/60 mt-4">
              Join 5,000+ health enthusiasts. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
