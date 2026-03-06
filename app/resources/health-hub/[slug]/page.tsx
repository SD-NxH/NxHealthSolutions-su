import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink } from "lucide-react"

const healthHubData: Record<string, any> = {
  blueberries: {
    title: "Blueberries",
    type: "Food",
    image: "/images/health-hub/blueberries.jpg",
    overview:
      "Blueberries are small, nutrient-dense berries packed with antioxidants, particularly anthocyanins, which give them their deep blue color. They're commonly enjoyed fresh, frozen, or dried.",
    howToUse: [
      "Add fresh or frozen blueberries to smoothies for a nutrient boost",
      "Mix into oatmeal, yogurt, or cereal for breakfast",
      "Enjoy as a standalone snack throughout the day",
      "Blend into pancake or muffin batter for natural sweetness",
    ],
    whyItMatters:
      "Blueberries are rich in vitamins C and K, fiber, and powerful plant compounds. Their antioxidants may support brain health, recovery after exercise, and overall cellular function. The fiber content also supports digestive health.",
  },
  "leafy-greens": {
    title: "Leafy Greens",
    type: "Food",
    image: "/images/health-hub/leafy-greens.jpg",
    overview:
      "Leafy greens include kale, spinach, collards, arugula, and Swiss chard. These vegetables are among the most nutrient-dense foods available, providing vitamins, minerals, and fiber with very few calories.",
    howToUse: [
      "Add raw greens to salads or smoothies",
      "Sauté with garlic and olive oil as a side dish",
      "Mix into soups, stews, or pasta dishes",
      "Use as a base for grain bowls or wraps",
    ],
    whyItMatters:
      "Leafy greens are excellent sources of vitamins A, C, and K, as well as folate, iron, and calcium. They provide dietary fiber that supports gut health and may help with blood sugar regulation. Regular consumption is associated with overall health and vitality.",
  },
  oats: {
    title: "Oats",
    type: "Food",
    image: "/images/health-hub/oats.jpg",
    overview:
      "Oats are a whole grain cereal known for their hearty texture and mild, slightly nutty flavor. They come in several forms including steel-cut, rolled, and instant oats.",
    howToUse: [
      "Cook as oatmeal with your favorite toppings for breakfast",
      "Add to smoothies for texture and sustained energy",
      "Use oat flour in baking recipes like muffins and pancakes",
      "Make overnight oats for an easy grab-and-go breakfast",
    ],
    whyItMatters:
      "Oats are rich in beta-glucan fiber, which supports heart health and helps maintain healthy cholesterol levels. They provide sustained energy release, making them ideal for active individuals. Oats also contain important minerals like iron, magnesium, and zinc.",
  },
  turmeric: {
    title: "Turmeric",
    type: "Herb",
    image: "/images/health-hub/turmeric.jpg",
    overview:
      "Turmeric is a golden-yellow spice derived from the root of the Curcuma longa plant. It's been used for thousands of years in traditional medicine and cooking, particularly in South Asian cuisine.",
    howToUse: [
      "Add ground turmeric to curries, soups, and rice dishes",
      "Mix into scrambled eggs or tofu for color and flavor",
      "Blend into smoothies or golden milk lattes",
      "Combine with black pepper to enhance absorption of curcumin",
    ],
    whyItMatters:
      "Turmeric contains curcumin, a compound that may support a balanced inflammatory response in the body. When combined with black pepper (which contains piperine), absorption is significantly enhanced. It's commonly used to support joint health and overall wellness.",
  },
  ginger: {
    title: "Ginger",
    type: "Herb",
    image: "/images/health-hub/ginger.jpg",
    overview:
      "Ginger is a flowering plant root used both as a spice and in traditional medicine. It has a warm, slightly spicy flavor and can be used fresh, dried, powdered, or as a juice.",
    howToUse: [
      "Steep fresh ginger slices in hot water for soothing tea",
      "Grate fresh ginger into stir-fries and marinades",
      "Add ground ginger to baked goods and desserts",
      "Blend into smoothies for a warming kick",
    ],
    whyItMatters:
      "Ginger is well-known for supporting digestive comfort and may help with occasional nausea. It contains gingerol, a bioactive compound with potential anti-inflammatory properties. Many people use ginger to support overall digestive health.",
  },
  "magnesium-glycinate": {
    title: "Magnesium Glycinate",
    type: "Product",
    image: "/images/health-hub/magnesium.jpg",
    overview:
      "Magnesium glycinate is a highly bioavailable form of magnesium bound to the amino acid glycine. It's often chosen for its gentle effect on the digestive system and its potential calming properties.",
    howToUse: [
      "Take as directed on the product label, typically in the evening",
      "Start with a lower dose and gradually increase as needed",
      "Take with or without food based on personal preference",
      "Consult with a healthcare provider before starting any supplement",
    ],
    whyItMatters:
      "Magnesium is involved in over 300 biochemical reactions in the body. Many people use magnesium glycinate to support relaxation, sleep quality, and muscle function. The glycinate form is known for being gentle on the stomach.",
  },
  electrolytes: {
    title: "Electrolytes",
    type: "Product",
    image: "/images/health-hub/electrolytes.jpg",
    overview:
      "Electrolyte supplements provide minerals like sodium, potassium, magnesium, and calcium that are lost through sweat during physical activity or hot weather.",
    howToUse: [
      "Mix powder forms with water before, during, or after exercise",
      "Use on particularly active days or in hot weather",
      "Sip throughout the day for consistent hydration support",
      "Choose products without excessive added sugars when possible",
    ],
    whyItMatters:
      "Electrolytes help maintain fluid balance, support nerve and muscle function, and regulate pH levels in the body. Proper electrolyte balance is especially important for active individuals and during periods of increased fluid loss.",
  },
  "pumpkin-seeds": {
    title: "Pumpkin Seeds",
    type: "Food",
    image: "/images/health-hub/pumpkin-seeds.jpg",
    overview:
      "Pumpkin seeds, also called pepitas, are flat, oval-shaped seeds found inside pumpkins. They can be eaten raw or roasted and are rich in nutrients.",
    howToUse: [
      "Sprinkle toasted pumpkin seeds on salads or soups",
      "Add to trail mix with nuts and dried fruit",
      "Blend into smoothies or nut butter",
      "Use as a crunchy topping for oatmeal or yogurt",
    ],
    whyItMatters:
      "Pumpkin seeds are an excellent source of magnesium, zinc, and healthy fats. They provide plant-based protein and antioxidants. The zinc content supports immune function, while magnesium supports muscle and nerve function.",
  },
}

export default async function HealthHubItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = healthHubData[slug]

  if (!item) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-br from-brand-lighter to-brand-light">
        <div className="absolute inset-0">
          <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
        </div>
        <div className="relative container px-4 md:px-6 h-full flex flex-col justify-end pb-12">
          <Link href="/resources" className="inline-flex items-center gap-2 text-brand hover:text-brand-hover mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Resources
          </Link>
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-brand text-white w-fit mb-4">
            {item.type}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-light text-brand-dark mb-2">{item.title}</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6 max-w-4xl">
          {/* Overview */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{item.overview}</p>
          </div>

          {/* How to Use */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">How to Use</h2>
            <ul className="space-y-3">
              {item.howToUse.map((use: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand/10 text-brand flex items-center justify-center text-sm font-medium mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground">{use}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why It Matters */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Why It Matters</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{item.whyItMatters}</p>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <Link href="/resources">
              <Button className="bg-brand hover:bg-brand-hover text-white rounded-full px-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Resources
              </Button>
            </Link>
            <Link href="/resources#health-hub">
              <Button
                variant="outline"
                className="rounded-full px-6 border-brand text-brand hover:bg-brand-lighter bg-transparent"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Browse More Items
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
