import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import ResponsiveImage from "@/components/responsive-image"
import { notFound } from "next/navigation"

// This would typically come from a CMS or API
const articles = {
  "food-pyramid-deception": {
    title: "The Food Pyramid Deception: It's Time to Reclaim Control of Your Plate",
    description:
      "Challenge conventional nutritional wisdom as we unpack the flaws in the traditional food pyramid and discover how to make truly informed choices about what goes on your plate.",
    image: "/food-pyramid-deception.png",
    category: "Nutrition",
    date: "May 15, 2025",
    readTime: "12 min read",
    content: `
      <p>For decades, the Food Pyramid has been the cornerstone of nutritional guidance in America. Introduced by the USDA in 1992, it was presented as the definitive blueprint for a healthy diet. But what if this widely accepted nutritional guide was fundamentally flawed from the beginning?</p>
      
      <h2>The Origins of Deception</h2>
      
      <p>The original Food Pyramid recommended 6-11 servings of bread, cereal, rice, and pasta daily – placing refined carbohydrates as the foundation of our diet. Meanwhile, it suggested limiting fats of all kinds, regardless of their source or quality.</p>
      
      <p>What many don't realize is that the Food Pyramid wasn't just shaped by nutritional science – it was heavily influenced by agricultural lobbies and economic interests. The grain industry, in particular, had a significant stake in positioning their products at the pyramid's base.</p>
      
      <h2>The Scientific Reality</h2>
      
      <p>Modern nutritional science has revealed numerous problems with the traditional Food Pyramid's recommendations:</p>
      
      <ul>
        <li>Not all fats are created equal. While trans fats and certain saturated fats can be problematic, healthy fats from sources like avocados, nuts, and olive oil are essential for optimal health.</li>
        <li>Refined carbohydrates, which the pyramid encouraged in abundance, can lead to blood sugar spikes, insulin resistance, and increased risk of type 2 diabetes.</li>
        <li>The pyramid failed to distinguish between processed foods and whole foods within the same category.</li>
        <li>Individual nutritional needs vary based on age, activity level, health conditions, and even genetics.</li>
      </ul>
      
      <h2>Reclaiming Your Plate</h2>
      
      <p>So how do we move beyond the deception and make truly informed choices about our nutrition?</p>
      
      <ol>
        <li><strong>Focus on whole foods</strong>: Prioritize foods that are as close to their natural state as possible.</li>
        <li><strong>Embrace plant diversity</strong>: Fill your plate with a colorful variety of vegetables and fruits.</li>
        <li><strong>Choose quality proteins</strong>: Whether plant-based or animal-derived, opt for minimally processed protein sources.</li>
        <li><strong>Don't fear healthy fats</strong>: Include sources of omega-3s, monounsaturated fats, and some saturated fats from whole food sources.</li>
        <li><strong>Limit ultra-processed foods</strong>: Regardless of where they might fall on any food pyramid or plate model.</li>
        <li><strong>Listen to your body</strong>: Pay attention to how different foods make you feel.</li>
      </ol>
      
      <p>The most powerful step you can take is to become your own nutrition advocate. Question dietary dogma, stay informed about nutritional research, and remember that your nutritional needs are unique to you.</p>
      
      <p>The Food Pyramid deception reminds us that nutritional guidance should be approached with critical thinking. By reclaiming control of your plate, you're not just making better food choices – you're taking an essential step toward long-term health and wellbeing.</p>
    `,
  },
  "power-up-with-plants": {
    title: "The Power of Plant-Based Eating",
    description:
      "Discover how incorporating more plant-based foods into your diet can transform your health and energy levels.",
    image: "/colorful-fruits-vegetables.png",
    category: "Nutrition",
    date: "May 2, 2023",
    readTime: "6 min read",
    content: `
      <p>Plant-based eating is more than just a trend – it's a powerful approach to nutrition that can transform your health, energy levels, and even your environmental impact. Whether you're considering going fully vegan or simply want to incorporate more plants into your current diet, the benefits are substantial and scientifically backed.</p>
      
      <h2>What is Plant-Based Eating?</h2>
      
      <p>A plant-based diet focuses on foods primarily from plants: fruits, vegetables, nuts, seeds, oils, whole grains, legumes, and beans. It doesn't necessarily mean that you never eat meat or dairy. Rather, you're proportionally choosing more of your foods from plant sources.</p>
      
      <h2>The Health Benefits</h2>
      
      <p>Research consistently shows that plant-based diets are associated with numerous health benefits:</p>
      
      <ul>
        <li><strong>Reduced inflammation</strong>: Plants are rich in antioxidants and phytonutrients that help combat chronic inflammation, a root cause of many diseases.</li>
        <li><strong>Heart health</strong>: Plant-based diets can lower blood pressure, improve cholesterol levels, and reduce the risk of heart disease by up to 25%.</li>
        <li><strong>Better weight management</strong>: Those who eat more plants tend to have lower BMIs and find it easier to maintain a healthy weight.</li>
        <li><strong>Improved digestion</strong>: The high fiber content in plant foods supports a healthy gut microbiome and regular digestion.</li>
        <li><strong>Reduced cancer risk</strong>: Many studies show that plant-based diets are associated with lower rates of certain cancers.</li>
        <li><strong>Better blood sugar control</strong>: Plant-based eating can improve insulin sensitivity and help manage or prevent type 2 diabetes.</li>
      </ul>
      
      <h2>Energy and Performance</h2>
      
      <p>One of the most immediate benefits many people notice when increasing their plant intake is improved energy levels. This happens for several reasons:</p>
      
      <ul>
        <li>Plants are rich in complex carbohydrates that provide sustained energy without crashes</li>
        <li>The high nutrient density of plant foods helps combat fatigue caused by nutritional deficiencies</li>
        <li>Better digestion means less energy diverted to processing heavy, animal-based meals</li>
        <li>Improved sleep quality, which often accompanies a shift to more plant-based eating</li>
      </ul>
      
      <p>Even elite athletes are increasingly adopting plant-based diets to enhance performance, recovery, and longevity in their sports.</p>
      
      <h2>Getting Started</h2>
      
      <p>You don't need to overhaul your diet overnight. Here are some simple ways to begin incorporating more plants:</p>
      
      <ol>
        <li><strong>Start with one plant-based day per week</strong>, like "Meatless Monday"</li>
        <li><strong>Build your plate differently</strong>: Make vegetables the star, with grains and proteins as supporting actors</li>
        <li><strong>Rethink your snacks</strong>: Choose fruits, nuts, or hummus instead of processed options</li>
        <li><strong>Explore new foods</strong>: Try one new plant food each week to expand your palate</li>
        <li><strong>Make simple swaps</strong>: Try plant milks, use lentils in place of ground meat, or choose bean-based pastas</li>
      </ol>
      
      <p>Remember that plant-based eating isn't about restriction – it's about abundance. By focusing on the incredible variety of delicious plant foods available, you'll discover new flavors, textures, and culinary traditions while powering up your health.</p>
    `,
  },
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles[slug as keyof typeof articles]

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[300px] md:h-[400px] w-full">
          <ResponsiveImage
            src={article.image}
            alt={article.title}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-serif font-light mb-4">{article.title}</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">{article.description}</p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/resources/articles" className="text-green-600 hover:text-green-700 flex items-center text-sm">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Articles
          </Link>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          {/* Article Info */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
            <span>{article.category}</span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>

          <Separator className="my-8" />

          {/* Article Content */}
          <div className="prose prose-green max-w-none" dangerouslySetInnerHTML={{ __html: article.content }}></div>

          {/* Related Articles */}
          <div className="mt-16">
            <h2 className="text-2xl font-serif font-light text-gray-900 mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(articles)
                .filter(([key]) => key !== slug)
                .slice(0, 2)
                .map(([key, relatedArticle]) => (
                  <Link
                    key={key}
                    href={`/resources/articles/${key}`}
                    className="block border rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="relative h-48 w-full">
                      <ResponsiveImage
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-serif font-medium text-gray-900 mb-2">{relatedArticle.title}</h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{relatedArticle.description}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
