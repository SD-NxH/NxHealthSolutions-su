import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, ArrowLeft, ExternalLink, Share2 } from "lucide-react"

export default function DarkChocolatePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src="/dark-chocolate-still-life.png"
          alt="Pieces of dark chocolate with cacao beans"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="container relative z-10 h-full flex flex-col justify-end pb-12 px-4 md:px-6">
          <Link href="/resources" className="text-white/80 hover:text-white flex items-center mb-6 w-fit">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Resources
          </Link>
          <h1 className="text-3xl md:text-5xl font-serif font-light text-white mb-4">
            Dark Chocolate: A Delicious Path to Wellness
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Discover the surprising health benefits of this rich indulgence
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="prose prose-green max-w-none">
              <p className="lead text-xl text-gray-600">
                Indulging in a piece of dark chocolate might feel like a treat, but it could also be a step towards
                better health. Emerging research suggests that this rich and flavorful food offers surprising benefits
                when incorporated into a balanced diet.
              </p>

              <h2>The Science Behind Dark Chocolate's Benefits</h2>

              <p>
                One key aspect of dark chocolate's health-promoting properties lies in its impact on the brain. Studies
                have explored how certain dietary components can influence cognitive function, and while many studies
                focus on the detrimental effects of ultra-processed foods and excessive sugar intake on the developing
                brain, the principle of food affecting brain health extends to beneficial foods as well.
              </p>

              <div className="not-prose my-8 bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-medium text-gray-900 mb-3">What Makes Dark Chocolate Special?</h3>
                <p className="text-gray-700 mb-4">
                  Dark chocolate, particularly varieties with a high cacao content, is rich in flavonoids, a type of
                  antioxidant. These compounds have been shown to have neuroprotective effects and may improve blood
                  flow to the brain.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-gray-900 mb-2">Flavonoids</h4>
                    <p className="text-sm text-gray-600">
                      Powerful antioxidants that may protect cells and improve blood flow
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-gray-900 mb-2">Theobromine</h4>
                    <p className="text-sm text-gray-600">Natural compound that may boost mood and energy</p>
                  </div>
                </div>
              </div>

              <p>
                Furthermore, the conversation around sugar's potential for triggering reward pathways in the brain
                highlights the importance of choosing satisfying alternatives. Dark chocolate, with its less intense
                sweetness compared to milk chocolate and often lower sugar content, can offer a pleasurable experience
                without the same rapid spikes in blood sugar and potential for craving cycles associated with more
                sugary treats.
              </p>

              <h2>Incorporating Dark Chocolate Into Your Diet</h2>

              <p>
                While the provided documents emphasize the need to limit ultra-processed foods and excessive sugar for
                optimal health, the broader understanding is that nutrient-rich foods play a vital role in supporting
                well-being. Dark chocolate, in moderation, can be a part of this picture, offering potential benefits
                thanks to its unique composition.
              </p>

              <p>
                Incorporating dark chocolate into a balanced diet can be as simple as enjoying a small square after a
                meal or adding cocoa powder (the less processed form of chocolate) to smoothies or oatmeal. Choosing
                dark chocolate with a higher percentage of cacao (70% or more) will generally provide more of these
                beneficial compounds and less added sugar.
              </p>

              <div className="not-prose my-8">
                <div className="bg-gray-100 p-6 rounded-xl">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Tips for Choosing Quality Dark Chocolate</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>Look for chocolate with at least 70% cacao content</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>Check the ingredients list – fewer ingredients often means less processing</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>Consider fair-trade and organic options for sustainable farming practices</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>Sample various origin chocolates to experience different flavor profiles</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2>Conclusion</h2>

              <p>
                In conclusion, while it's essential to be mindful of overall dietary patterns and limit less healthy
                options, dark chocolate, with its potential cognitive benefits and lower sugar content compared to other
                sweets, can be a delicious and perhaps even healthy indulgence when enjoyed as part of a balanced
                lifestyle.
              </p>

              <div className="not-prose mt-12 border-t pt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Sources:</h3>
                <ol className="space-y-2 text-sm text-gray-600">
                  <li>
                    <a
                      href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7071338/#:~:text=These%20findings%20support%20the%20notion,the%20brain%20in%20healthy%20consumers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline flex items-center"
                    >
                      PMC: Effects of chocolate on cognitive function and mood
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://health.ucdavis.edu/blog/good-food/dark-chocolate-health-benefits-the-good-and-the-bad-to-this-sweet-treat/2023/02#:~:text=Flavonoids%20present%20in%20chocolates%20can,More%20articles"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline flex items-center"
                    >
                      UC Davis Health: Dark chocolate health benefits
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Share Card */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Share This Article</h3>
              <div className="flex gap-2">
                <Button className="w-full" data-share="true">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>

            {/* Related Foods */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Related Foods</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/resources/foods/almonds"
                    className="text-green-600 hover:text-green-700 flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Almonds
                  </Link>
                </li>
                <li>
                  <Link href="/resources/foods/cacao" className="text-green-600 hover:text-green-700 flex items-center">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Cacao Beans
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/foods/blueberry"
                    className="text-green-600 hover:text-green-700 flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Blueberries
                  </Link>
                </li>
              </ul>
            </div>

            {/* More Articles */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-medium text-gray-900 mb-4">More Articles</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/resources/articles/power-up-with-plants">
                    <div className="group">
                      <h4 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                        Power Up with Plants: Fueling Your Health
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">Discover the benefits of plant-based eating</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/resources/calorie-counter">
                    <div className="group">
                      <h4 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                        Understanding Your Caloric Needs
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">Calculate your daily energy requirements</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
