"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Leaf, Heart, Brain, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const getImagePath = (name: string): string => {
  const slug = name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "")

  const imageMap: Record<string, string> = {
    "figs-fresh": "/images/foods/f/figs.jpg",
    fennel: "/images/foods/f/fennel.jpg",
    "feijoa-pineapple-guava": "/images/foods/f/feijoa.jpg",
    "fava-beans": "/images/foods/f/fava-beans.jpg",
    fenugreek: "/images/foods/f/fenugreek.jpg",
    "fiddlehead-ferns": "/images/foods/f/fiddlehead-ferns.jpg",
    "forelle-pears": "/images/foods/f/forelle-pears.jpg",
    "finger-limes": "/images/foods/f/finger-limes.png",
    frisee: "/images/foods/f/frisee.png",
  }

  return imageMap[slug] || `/images/foods/f/${slug}.jpg`
}

const foods = [
  {
    name: "Figs (Fresh)",
    description:
      "A fiber-rich fruit known for its high concentration of protective polyphenols and minerals like potassium and magnesium, which support heart health and digestion.",
    image: getImagePath("Figs (Fresh)"),
    alt: "Fresh figs fruit",
    benefits: ["Heart Health", "Digestive Support", "Mineral Rich"],
    category: "Fruit",
    href: "/resources/foods/figs",
  },
  {
    name: "Fennel",
    description:
      "A versatile vegetable with a distinct anise-like flavor. It is a potent source of Vitamin C and contains anethole, a phytonutrient that helps reduce inflammation and supports digestive comfort.",
    image: getImagePath("Fennel"),
    alt: "Fresh fennel bulb and fronds",
    benefits: ["Anti-inflammatory", "Vitamin C", "Digestive Comfort"],
    category: "Vegetable",
    href: "/resources/foods/fennel",
  },
  {
    name: "Feijoa (Pineapple Guava)",
    description:
      "A tropical fruit exceptionally high in Vitamin C and saponins, which possess anti-cancer and anti-inflammatory properties.",
    image: getImagePath("Feijoa (Pineapple Guava)"),
    alt: "Fresh feijoa pineapple guava fruit",
    benefits: ["Vitamin C", "Anti-cancer", "Anti-inflammatory"],
    category: "Fruit",
    href: "/resources/foods/feijoa",
  },
  {
    name: "Fava Beans",
    description:
      "A nutrient-dense legume packed with plant-based protein, fiber, and L-dopa, a precursor to dopamine that may support brain health and motor function.",
    image: getImagePath("Fava Beans"),
    alt: "Fresh fava beans in pods",
    benefits: ["Brain Health", "High Protein", "Fiber Rich"],
    category: "Legume",
    href: "/resources/foods/fava-beans",
  },
  {
    name: "Fenugreek",
    description:
      "A powerful herb and spice used for centuries in traditional medicine. It contains 4-hydroxyisoleucine, which is known to help regulate blood sugar levels and improve insulin sensitivity.",
    image: getImagePath("Fenugreek"),
    alt: "Fenugreek seeds and leaves",
    benefits: ["Blood Sugar Support", "Traditional Medicine", "Insulin Sensitivity"],
    category: "Herb",
    href: "/resources/foods/fenugreek",
  },
  {
    name: "Fiddlehead Ferns",
    description:
      "Young, coiled fronds of certain ferns that are seasonally available. They are high in antioxidants, Omega-3 fatty acids, and fiber, though they must be cooked thoroughly before consumption.",
    image: getImagePath("Fiddlehead Ferns"),
    alt: "Fresh fiddlehead ferns coiled fronds",
    benefits: ["Antioxidant Rich", "Omega-3", "Fiber Rich"],
    category: "Vegetable",
    href: "/resources/foods/fiddlehead-ferns",
  },
  {
    name: "Forelle Pears",
    description:
      'A small, sweet variety of pear with "freckled" skin. Like the apple, most of its antioxidants (specifically flavonoids) and fiber are concentrated in the skin.',
    image: getImagePath("Forelle Pears"),
    alt: "Fresh forelle pears with freckled skin",
    benefits: ["Antioxidant Rich", "Flavonoids", "Fiber Rich"],
    category: "Fruit",
    href: "/resources/foods/forelle-pears",
  },
  {
    name: "Finger Limes",
    description:
      'Often called "citrus caviar," these contain tiny juice vesicles high in Vitamin C and Vitamin E, providing a sharp burst of acidity and immune-supporting antioxidants.',
    image: getImagePath("Finger Limes"),
    alt: "Finger limes citrus caviar",
    benefits: ["Vitamin C", "Vitamin E", "Immune Support"],
    category: "Fruit",
    href: "/resources/foods/finger-limes",
  },
  {
    name: "Frisée",
    description:
      "A member of the chicory family, this bitter leafy green is an excellent source of Vitamin K, Vitamin A, and folate, which are essential for bone health and cellular repair.",
    image: getImagePath("Frisée"),
    alt: "Fresh frisée leafy green",
    benefits: ["Vitamin K", "Vitamin A", "Bone Health"],
    category: "Leafy Green",
    href: "/resources/foods/frisee",
  },
]

const categoryColors: Record<string, string> = {
  Fruit: "bg-accent text-accent-foreground",
  Vegetable: "bg-brand-lighter text-brand-dark",
  "Leafy Green": "bg-brand-light text-brand-dark",
  Herb: "bg-secondary text-secondary-foreground",
  Legume: "bg-accent text-accent-foreground",
}

const benefitIcons: Record<string, typeof Leaf> = {
  "Heart Health": Heart,
  "Digestive Support": Leaf,
  "Mineral Rich": Shield,
  "Anti-inflammatory": Heart,
  "Vitamin C": Shield,
  "Digestive Comfort": Leaf,
  "Anti-cancer": Shield,
  "Brain Health": Brain,
  "High Protein": Heart,
  "Fiber Rich": Leaf,
  "Blood Sugar Support": Heart,
  "Traditional Medicine": Leaf,
  "Insulin Sensitivity": Heart,
  "Antioxidant Rich": Shield,
  "Omega-3": Heart,
  Flavonoids: Shield,
  "Vitamin E": Shield,
  "Immune Support": Shield,
  "Vitamin K": Shield,
  "Vitamin A": Shield,
  "Bone Health": Heart,
}

export default function FoodsStartingWithF() {
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
            <h1 className="text-4xl md:text-5xl font-serif font-light mb-4">Foods Starting with F</h1>
            <p className="text-xl text-brand-light/80 max-w-2xl">
              Explore nutritious foods beginning with the letter F, from fiber-rich figs to powerful herbs like
              fenugreek and unique citrus like finger limes.
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
