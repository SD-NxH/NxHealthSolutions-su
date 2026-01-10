"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Leaf, Heart, Brain, Shield, Eye } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const getImagePath = (name: string): string => {
  const slug = name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "")

  // Map food names to their actual file paths with correct extensions
  const imageMap: Record<string, string> = {
    "honeydew-melon": "/images/foods/h/honeydew-melon.jpg",
    "habanero-pepper": "/images/foods/h/habanero-pepper.jpg",
    hibiscus: "/images/foods/h/hibiscus.jpg",
    huckleberries: "/images/foods/h/huckleberries.jpg",
    horseradish: "/images/foods/h/horseradish.jpg",
    "holy-basil-tulsi": "/images/foods/h/holy-basil.jpg",
    "hass-avocado": "/images/foods/h/hass-avocado.jpg",
    hazelnut: "/images/foods/h/hazelnut.jpg",
    "hearts-of-palm": "/images/foods/h/hearts-of-palm.jpg",
    "heirloom-tomatoes": "/images/foods/h/heirloom-tomatoes.jpg",
    hops: "/images/foods/h/hops.jpg",
  }

  return imageMap[slug] || `/images/foods/h/${slug}.jpg`
}

const foods = [
  {
    name: "Honeydew Melon",
    description:
      "A refreshing fruit high in Vitamin C and potassium. It contains lutein and zeaxanthin, which are essential for maintaining healthy vision and protecting the eyes.",
    image: getImagePath("Honeydew Melon"),
    alt: "Fresh honeydew melon",
    benefits: ["Vitamin C", "Eye Health", "Hydrating"],
    category: "Fruit",
    href: "/resources/foods/honeydew-melon",
  },
  {
    name: "Habanero Pepper",
    description:
      "A very hot chili pepper that is a massive source of Vitamin C and capsaicin. Capsaicin is known for its ability to boost metabolism and provide natural pain relief.",
    image: getImagePath("Habanero Pepper"),
    alt: "Fresh habanero pepper",
    benefits: ["Metabolism Boost", "Vitamin C", "Pain Relief"],
    category: "Vegetable",
    href: "/resources/foods/habanero-pepper",
  },
  {
    name: "Hibiscus",
    description:
      "Often used in teas, this herb is packed with organic acids and anthocyanins. It has been shown to support healthy blood pressure levels and liver health.",
    image: getImagePath("Hibiscus"),
    alt: "Fresh hibiscus flower",
    benefits: ["Blood Pressure", "Liver Health", "Antioxidant Rich"],
    category: "Herb",
    href: "/resources/foods/hibiscus",
  },
  {
    name: "Huckleberries",
    description:
      "Similar to blueberries but often higher in antioxidants. They are rich in anthocyanins and Vitamin C, which help protect the cardiovascular system and reduce inflammation.",
    image: getImagePath("Huckleberries"),
    alt: "Fresh huckleberries",
    benefits: ["Heart Health", "Anti-inflammatory", "Antioxidant Rich"],
    category: "Berry",
    href: "/resources/foods/huckleberries",
  },
  {
    name: "Horseradish",
    description:
      "A pungent root vegetable containing high levels of glucosinolates. these compounds have potent antibacterial properties and support the body's detoxification enzymes.",
    image: getImagePath("Horseradish"),
    alt: "Fresh horseradish root",
    benefits: ["Antibacterial", "Detoxification", "Respiratory Support"],
    category: "Root Vegetable",
    href: "/resources/foods/horseradish",
  },
  {
    name: "Holy Basil (Tulsi)",
    description:
      'A medicinal herb known as an "adaptogen." It contains ursolic acid and eugenol, which help the body manage stress and provide strong anti-inflammatory benefits.',
    image: getImagePath("Holy Basil (Tulsi)"),
    alt: "Fresh holy basil (tulsi) herb",
    benefits: ["Stress Relief", "Anti-inflammatory", "Adaptogen"],
    category: "Herb",
    href: "/resources/foods/holy-basil",
  },
  {
    name: "Hass Avocado",
    description:
      "The most popular variety of avocado, rich in heart-healthy monounsaturated fats and Vitamin E. It also contains lutein, which supports skin and eye health.",
    image: getImagePath("Hass Avocado"),
    alt: "Fresh hass avocado",
    benefits: ["Heart Health", "Healthy Fats", "Skin Health"],
    category: "Fruit",
    href: "/resources/foods/hass-avocado",
  },
  {
    name: "Hazelnut",
    description:
      "Technically a fruit (nut), it is an excellent source of Vitamin E and manganese. It contains high levels of phenolic compounds that protect against oxidative stress.",
    image: getImagePath("Hazelnut"),
    alt: "Fresh hazelnuts",
    benefits: ["Vitamin E", "Antioxidant Rich", "Brain Health"],
    category: "Nut",
    href: "/resources/foods/hazelnut",
  },
  {
    name: "Hearts of Palm",
    description:
      "A vegetable harvested from the inner core of certain palm trees. It is low in fat and high in fiber, potassium, and Vitamin C, making it excellent for heart and digestive health.",
    image: getImagePath("Hearts of Palm"),
    alt: "Fresh hearts of palm",
    benefits: ["Heart Health", "Digestive Health", "Low Fat"],
    category: "Vegetable",
    href: "/resources/foods/hearts-of-palm",
  },
  {
    name: "Heirloom Tomatoes",
    description:
      "These varieties often contain a wider array of phytochemicals than standard tomatoes. They are an excellent source of lycopene, which supports skin health and reduces the risk of chronic disease.",
    image: getImagePath("Heirloom Tomatoes"),
    alt: "Fresh heirloom tomatoes",
    benefits: ["Lycopene", "Skin Health", "Antioxidant Rich"],
    category: "Fruit",
    href: "/resources/foods/heirloom-tomatoes",
  },
  {
    name: "Hops",
    description:
      "While famous for brewing, as an herb, hops contain xanthohumol, a powerful antioxidant that has been studied for its potential anti-cancer and anti-inflammatory effects.",
    image: getImagePath("Hops"),
    alt: "Fresh hops",
    benefits: ["Anti-cancer", "Anti-inflammatory", "Antioxidant Rich"],
    category: "Herb",
    href: "/resources/foods/hops",
  },
]

const categoryColors: Record<string, string> = {
  Fruit: "bg-accent text-accent-foreground",
  Vegetable: "bg-brand-lighter text-brand-dark",
  Berry: "bg-accent text-accent-foreground",
  Herb: "bg-secondary text-secondary-foreground",
  "Root Vegetable": "bg-brand-light text-brand-dark",
  Nut: "bg-accent text-accent-foreground",
}

const benefitIcons: Record<string, typeof Leaf> = {
  "Vitamin C": Shield,
  "Eye Health": Eye,
  Hydrating: Leaf,
  "Metabolism Boost": Heart,
  "Pain Relief": Shield,
  "Blood Pressure": Heart,
  "Liver Health": Shield,
  "Antioxidant Rich": Shield,
  "Heart Health": Heart,
  "Anti-inflammatory": Heart,
  Antibacterial: Shield,
  Detoxification: Leaf,
  "Respiratory Support": Leaf,
  "Stress Relief": Brain,
  Adaptogen: Brain,
  "Healthy Fats": Heart,
  "Skin Health": Leaf,
  "Vitamin E": Shield,
  "Brain Health": Brain,
  "Digestive Health": Leaf,
  "Low Fat": Leaf,
  Lycopene: Shield,
  "Anti-cancer": Shield,
}

export default function FoodsStartingWithH() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-lighter to-background">
      {/* Header */}
      <div className="bg-brand text-white py-16">
        <div className="container mx-auto px-4">
          <Link
            href="/resources"
            className="inline-flex items-center text-brand-light/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Resources
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-serif font-light mb-4">Foods Starting with H</h1>
            <p className="text-xl text-brand-light/80 max-w-2xl">
              Explore nutritious foods beginning with the letter H, from heart-healthy hass avocados to medicinal herbs
              like holy basil and hibiscus.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Foods Grid */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {foods.map((food, index) => (
            <motion.div
              key={food.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
            >
              <Link href={food.href} className="block h-full">
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-brand-lighter cursor-pointer">
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg bg-muted">
                    <Image
                      src={food.image || "/images/foods/placeholder.jpg"}
                      alt={food.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/images/foods/placeholder.jpg"
                      }}
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className={categoryColors[food.category] || "bg-muted text-muted-foreground"}>
                        {food.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-medium text-foreground group-hover:text-brand transition-colors">
                      {food.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground line-clamp-2">{food.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-foreground mb-2">Health Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {food.benefits.map((benefit) => {
                          const IconComponent = benefitIcons[benefit] || Leaf
                          return (
                            <div
                              key={benefit}
                              className="flex items-center gap-1 text-xs bg-brand-lighter text-brand-dark px-2 py-1 rounded-full"
                            >
                              <IconComponent className="h-3 w-3" />
                              {benefit}
                            </div>
                          )
                        })}
                      </div>
                      <div className="pt-4">
                        <button className="w-full bg-brand hover:bg-brand-hover text-white py-2 px-4 rounded-md transition-colors text-sm font-medium">
                          Learn More About {food.name}
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-brand-lighter rounded-xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-serif font-light text-foreground mb-4">Discover More Healing Foods</h2>
            <p className="text-muted-foreground mb-6">
              Explore our complete A-Z guide of foods and their healing properties to support your health journey.
            </p>
            <Link
              href="/resources"
              className="inline-flex items-center bg-brand hover:bg-brand-hover text-white px-6 py-3 rounded-full transition-colors"
            >
              Explore All Foods
              <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
