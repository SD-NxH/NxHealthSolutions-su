"use server"

import { revalidatePath } from "next/cache"

export interface SearchFilters {
  category?: string
  source?: string
  dateRange?: string
}

export interface SearchResult {
  title: string
  snippet: string
  url: string
  source: string
  category: string
  date: string
  internalUrl: string
}

// Simulated comprehensive health database
const healthDatabase = [
  // Nutrition articles
  {
    title: "The Complete Guide to Plant-Based Nutrition",
    snippet:
      "Discover the science behind plant-based eating and how it can transform your health. Learn about essential nutrients, meal planning, and evidence-based benefits.",
    url: "https://example.com/plant-based-nutrition-guide",
    source: "Nutrition Science Journal",
    category: "nutrition",
    date: "2024-01-15",
    internalUrl: "/resources/articles/power-up-with-plants",
  },
  {
    title: "Understanding Caloric Needs for Optimal Health",
    snippet:
      "Learn how to calculate your daily caloric needs based on age, gender, activity level, and health goals. Includes practical tools and calculators.",
    url: "https://example.com/caloric-needs-calculator",
    source: "Health & Wellness Today",
    category: "nutrition",
    date: "2024-01-10",
    internalUrl: "/resources/articles/understanding-caloric-needs",
  },
  {
    title: "Superfoods: Separating Fact from Fiction",
    snippet:
      "An evidence-based look at so-called superfoods. Which ones truly deserve the title and how to incorporate them into your daily diet.",
    url: "https://example.com/superfoods-guide",
    source: "Nutritional Research",
    category: "nutrition",
    date: "2024-01-08",
    internalUrl: "/resources/articles/power-up-with-plants",
  },

  // Wellness articles
  {
    title: "Mindfulness and Mental Health: A Comprehensive Guide",
    snippet:
      "Explore the connection between mindfulness practices and mental wellness. Includes guided exercises and scientific research.",
    url: "https://example.com/mindfulness-mental-health",
    source: "Wellness Magazine",
    category: "wellness",
    date: "2024-01-12",
    internalUrl: "/resources/articles/mindfulness-meditation",
  },
  {
    title: "The Science of Sleep: Optimizing Your Rest",
    snippet:
      "Understanding sleep cycles, creating the perfect sleep environment, and natural ways to improve sleep quality for better health.",
    url: "https://example.com/sleep-optimization",
    source: "Sleep Research Institute",
    category: "wellness",
    date: "2024-01-05",
    internalUrl: "/resources/articles/sleep-wellness",
  },

  // Fitness articles
  {
    title: "Beginner's Guide to Functional Fitness",
    snippet:
      "Start your fitness journey with functional movements that improve daily life. No gym required - bodyweight exercises for all levels.",
    url: "https://example.com/functional-fitness-beginners",
    source: "Fitness Today",
    category: "fitness",
    date: "2024-01-14",
    internalUrl: "/resources/articles/fitness-beginners",
  },
  {
    title: "The Benefits of Daily Movement",
    snippet:
      "Why consistent daily movement matters more than intense workouts. Simple ways to incorporate movement into your routine.",
    url: "https://example.com/daily-movement-benefits",
    source: "Movement Science",
    category: "fitness",
    date: "2024-01-09",
    internalUrl: "/resources/articles/daily-movement",
  },

  // Disease prevention
  {
    title: "Plant-Based Strategies for Cancer Prevention",
    snippet:
      "Research-backed dietary approaches to reduce cancer risk. Focus on colorectal cancer prevention through nutrition.",
    url: "https://example.com/cancer-prevention-diet",
    source: "Cancer Prevention Research",
    category: "disease-prevention",
    date: "2024-01-11",
    internalUrl: "/resources/articles/plant-based-strategies-colorectal-cancer",
  },
  {
    title: "Understanding Breast Cancer: Prevention and Nutrition",
    snippet:
      "Comprehensive guide to breast cancer prevention, risk factors, and the role of nutrition in reducing risk.",
    url: "https://example.com/breast-cancer-prevention",
    source: "Medical Research Journal",
    category: "disease-prevention",
    date: "2024-01-07",
    internalUrl: "/resources/articles/understanding-breast-cancer",
  },

  // Food-specific articles
  {
    title: "The Health Benefits of Coconut: Complete Guide",
    snippet:
      "Explore the nutritional profile of coconut, its medium-chain triglycerides, and how to incorporate it into a healthy diet.",
    url: "https://example.com/coconut-health-benefits",
    source: "Tropical Nutrition",
    category: "foods",
    date: "2024-01-13",
    internalUrl: "/resources/foods/coconut",
  },
  {
    title: "Cinnamon: More Than Just a Spice",
    snippet:
      "Discover the powerful health benefits of cinnamon, from blood sugar regulation to anti-inflammatory properties.",
    url: "https://example.com/cinnamon-health-benefits",
    source: "Spice Research",
    category: "foods",
    date: "2024-01-06",
    internalUrl: "/resources/foods/cinnamon",
  },
  {
    title: "Collard Greens: Nutritional Powerhouse",
    snippet:
      "Learn about the exceptional vitamin K content in collard greens and their role in bone health and heart disease prevention.",
    url: "https://example.com/collard-greens-nutrition",
    source: "Leafy Greens Research",
    category: "foods",
    date: "2024-01-04",
    internalUrl: "/resources/foods/collard-greens",
  },
  {
    title: "Cranberries for Urinary Tract Health",
    snippet:
      "The science behind cranberries' unique ability to prevent UTIs and their other impressive health benefits.",
    url: "https://example.com/cranberries-uti-prevention",
    source: "Urological Health",
    category: "foods",
    date: "2024-01-03",
    internalUrl: "/resources/foods/cranberries",
  },

  // Recipe articles
  {
    title: "Quick Healthy Meals for Busy Lives",
    snippet:
      "30-minute plant-based recipes that don't compromise on nutrition. Perfect for meal prep and busy schedules.",
    url: "https://example.com/quick-healthy-meals",
    source: "Healthy Cooking",
    category: "recipes",
    date: "2024-01-02",
    internalUrl: "/resources/articles/quick-healthy-recipes",
  },
  {
    title: "Planted Fried Rice: A Nutritious Twist",
    snippet:
      "Transform traditional fried rice into a nutrient-dense meal with vegetables, plant proteins, and whole grains.",
    url: "https://example.com/planted-fried-rice-recipe",
    source: "Plant-Based Cooking",
    category: "recipes",
    date: "2024-01-01",
    internalUrl: "/resources/articles/planted-fried-rice",
  },
]

export async function searchHealthInfo(query: string, filters: SearchFilters = {}) {
  // Simulate search delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  if (!query.trim()) {
    return []
  }

  const searchTerms = query.toLowerCase().split(" ")

  // Filter and score results
  let results = healthDatabase.filter((item) => {
    // Text matching
    const titleMatch = searchTerms.some((term) => item.title.toLowerCase().includes(term))
    const snippetMatch = searchTerms.some((term) => item.snippet.toLowerCase().includes(term))
    const categoryMatch = searchTerms.some((term) => item.category.toLowerCase().includes(term))

    const hasTextMatch = titleMatch || snippetMatch || categoryMatch

    // Apply filters
    const categoryFilter = !filters.category || item.category === filters.category
    const sourceFilter = !filters.source || item.source === filters.source

    let dateFilter = true
    if (filters.dateRange) {
      const itemDate = new Date(item.date)
      const now = new Date()
      switch (filters.dateRange) {
        case "week":
          dateFilter = now.getTime() - itemDate.getTime() <= 7 * 24 * 60 * 60 * 1000
          break
        case "month":
          dateFilter = now.getTime() - itemDate.getTime() <= 30 * 24 * 60 * 60 * 1000
          break
        case "year":
          dateFilter = now.getTime() - itemDate.getTime() <= 365 * 24 * 60 * 60 * 1000
          break
      }
    }

    return hasTextMatch && categoryFilter && sourceFilter && dateFilter
  })

  // Score and sort results
  results = results
    .map((item) => {
      let score = 0
      const titleLower = item.title.toLowerCase()
      const snippetLower = item.snippet.toLowerCase()

      searchTerms.forEach((term) => {
        if (titleLower.includes(term)) score += 3
        if (snippetLower.includes(term)) score += 1
        if (item.category.toLowerCase().includes(term)) score += 2
      })

      return { ...item, score }
    })
    .sort((a, b) => b.score - a.score)

  // Limit results
  results = results.slice(0, 10)

  revalidatePath("/resources/search")
  return results
}

export async function getSearchFilters() {
  // Return available filter options
  return {
    categories: [
      { value: "nutrition", label: "Nutrition" },
      { value: "wellness", label: "Wellness" },
      { value: "fitness", label: "Fitness" },
      { value: "disease-prevention", label: "Disease Prevention" },
      { value: "foods", label: "Foods" },
      { value: "recipes", label: "Recipes" },
    ],
    sources: [
      { value: "Nutrition Science Journal", label: "Nutrition Science Journal" },
      { value: "Health & Wellness Today", label: "Health & Wellness Today" },
      { value: "Wellness Magazine", label: "Wellness Magazine" },
      { value: "Medical Research Journal", label: "Medical Research Journal" },
      { value: "Fitness Today", label: "Fitness Today" },
    ],
    dateRanges: [
      { value: "week", label: "Past Week" },
      { value: "month", label: "Past Month" },
      { value: "year", label: "Past Year" },
    ],
  }
}
