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

  const imageMap: Record<string, string> = {
    gooseberries: "/images/foods/g/gooseberries.jpg",
    guava: "/images/foods/g/guava.jpg",
    "grapes-darkred": "/images/foods/g/grapes.jpg",
    garlic: "/images/foods/g/garlic.jpg",
    ginger: "/images/foods/g/ginger.jpg",
    "goji-berries": "/images/foods/g/goji-berries.jpg",
    grapefruit: "/images/foods/g/grapefruit.jpg",
    "galia-melon": "/images/foods/g/galia-melon.jpg",
    "green-beans": "/images/foods/g/green-beans.jpg",
    "garden-cress": "/images/foods/g/garden-cress.jpg",
    ginseng: "/images/foods/g/ginseng.jpg",
    "glandular-kale": "/images/foods/g/glandular-kale.jpg",
  }

  return imageMap[slug] || `/images/foods/g/${slug}.jpg`
}

const foods = [
  {
    name: "Gooseberries",
    description:
      "Tart berries that are exceptionally high in Vitamin C and contain various flavonols and aromatic acids that support heart and brain health.",
    image: getImagePath("Gooseberries"),
    alt: "Fresh gooseberries",
    benefits: ["Vitamin C", "Heart Health", "Brain Health"],
    category: "Berry",
    href: "/resources/foods/gooseberries",
  },
  {
    name: "Guava",
    description:
      "A tropical powerhouse fruit containing significantly more Vitamin C than oranges. It is rich in lycopene, an antioxidant that protects the skin and supports eye health.",
    image: getImagePath("Guava"),
    alt: "Fresh guava tropical fruit",
    benefits: ["Vitamin C", "Lycopene", "Eye Health"],
    category: "Fruit",
    href: "/resources/foods/guava",
  },
  {
    name: "Grapes (Dark/Red)",
    description:
      "Famous for containing resveratrol in their skins, these fruits are linked to cardiovascular protection and are a great source of anthocyanins.",
    image: getImagePath("Grapes (Dark/Red)"),
    alt: "Fresh dark red grapes",
    benefits: ["Resveratrol", "Heart Health", "Anthocyanins"],
    category: "Fruit",
    href: "/resources/foods/grapes",
  },
  {
    name: "Garlic",
    description:
      "A medicinal herb/vegetable known for its high sulfur content, specifically allicin, which provides potent antibacterial and immune-boosting properties.",
    image: getImagePath("Garlic"),
    alt: "Fresh garlic bulbs",
    benefits: ["Allicin", "Antibacterial", "Immune Support"],
    category: "Herb",
    href: "/resources/foods/garlic",
  },
  {
    name: "Ginger",
    description:
      "A powerful root herb that contains gingerol, a bioactive compound with strong anti-inflammatory and antioxidant effects, particularly useful for digestion.",
    image: getImagePath("Ginger"),
    alt: "Fresh ginger root",
    benefits: ["Anti-inflammatory", "Digestive Support", "Antioxidant Rich"],
    category: "Herb",
    href: "/resources/foods/ginger",
  },
  {
    name: "Goji Berries",
    description:
      "Often labeled a superfood, these are dense with zeaxanthin, an antioxidant crucial for protecting the eyes from oxidative stress.",
    image: getImagePath("Goji Berries"),
    alt: "Dried goji berries superfood",
    benefits: ["Zeaxanthin", "Eye Protection", "Antioxidant Rich"],
    category: "Berry",
    href: "/resources/foods/goji-berries",
  },
  {
    name: "Grapefruit",
    description:
      "A citrus fruit high in Vitamin C and lycopene (in pink/red varieties). It contains naringenin, which has been studied for its ability to improve insulin sensitivity.",
    image: getImagePath("Grapefruit"),
    alt: "Fresh grapefruit citrus",
    benefits: ["Vitamin C", "Insulin Sensitivity", "Lycopene"],
    category: "Fruit",
    href: "/resources/foods/grapefruit",
  },
  {
    name: "Galia Melon",
    description:
      "A hybrid melon that provides a wealth of Vitamin C and Vitamin A (as beta-carotene) to support skin health and immune function.",
    image: getImagePath("Galia Melon"),
    alt: "Fresh galia melon",
    benefits: ["Vitamin C", "Vitamin A", "Skin Health"],
    category: "Fruit",
    href: "/resources/foods/galia-melon",
  },
  {
    name: "Green Beans",
    description:
      "Also known as snap beans, they are a solid source of Vitamin K and silicon, promoting healthy bones and connective tissues.",
    image: getImagePath("Green Beans"),
    alt: "Fresh green beans",
    benefits: ["Vitamin K", "Bone Health", "Silicon"],
    category: "Vegetable",
    href: "/resources/foods/green-beans",
  },
  {
    name: "Garden Cress",
    description:
      "A peppery herb that is a concentrated source of Vitamin K and glucosinolates, which support the body's natural detoxification processes.",
    image: getImagePath("Garden Cress"),
    alt: "Fresh garden cress herb",
    benefits: ["Vitamin K", "Detoxification", "Glucosinolates"],
    category: "Herb",
    href: "/resources/foods/garden-cress",
  },
  {
    name: "Ginseng",
    description:
      "A popular medicinal herb known for its ginsenosides, which may help reduce inflammation and improve cognitive function and energy levels.",
    image: getImagePath("Ginseng"),
    alt: "Fresh ginseng root",
    benefits: ["Cognitive Support", "Energy Boost", "Anti-inflammatory"],
    category: "Herb",
    href: "/resources/foods/ginseng",
  },
  {
    name: "Glandular Kale",
    description:
      "A hardy leafy green packed with lutein, Vitamin C, and Vitamin K, essential for bone density and vision protection.",
    image: getImagePath("Glandular Kale"),
    alt: "Fresh glandular kale leafy green",
    benefits: ["Lutein", "Bone Health", "Vision Protection"],
    category: "Leafy Green",
    href: "/resources/foods/glandular-kale",
  },
]

const categoryColors: Record<string, string> = {
  Berry: "bg-accent text-accent-foreground",
  Fruit: "bg-accent text-accent-foreground",
  Vegetable: "bg-brand-lighter text-brand-dark",
  "Leafy Green": "bg-brand-light text-brand-dark",
  Herb: "bg-secondary text-secondary-foreground",
}

const benefitIcons: Record<string, typeof Leaf> = {
  "Vitamin C": Shield,
  "Heart Health": Heart,
  "Brain Health": Brain,
  Lycopene: Shield,
  "Eye Health": Eye,
  Resveratrol: Heart,
  Anthocyanins: Shield,
  Allicin: Shield,
  Antibacterial: Shield,
  "Immune Support": Shield,
  "Anti-inflammatory": Heart,
  "Digestive Support": Leaf,
  "Antioxidant Rich": Shield,
  Zeaxanthin: Eye,
  "Eye Protection": Eye,
  "Insulin Sensitivity": Heart,
  "Vitamin A": Shield,
  "Skin Health": Shield,
  "Vitamin K": Shield,
  "Bone Health": Heart,
  Silicon: Shield,
  Detoxification: Leaf,
  Glucosinolates: Leaf,
  "Cognitive Support": Brain,
  "Energy Boost": Heart,
  Lutein: Eye,
  "Vision Protection": Eye,
}

export default function FoodsStartingWithG() {
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
            <h1 className="text-4xl md:text-5xl font-serif font-light mb-4">Foods Starting with G</h1>
            <p className="text-xl text-brand-light/80 max-w-2xl">
              Explore nutritious foods beginning with the letter G, from antioxidant-rich gooseberries and goji berries
              to powerful herbs like garlic, ginger, and ginseng.
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
