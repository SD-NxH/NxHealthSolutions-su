import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Share2, Calendar, Clock, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ScrollProgress } from "@/components/scroll-progress"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function FoodPyramidDeceptionArticle() {
  return (
    <>
      <ScrollProgress />
      <ScrollToTop />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-amber-700 to-amber-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <Link
                href="/resources/articles"
                className="inline-flex items-center text-amber-200 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Articles
              </Link>
              <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                The Food Pyramid Deception: It's Time to Reclaim Control of Your Plate
              </h1>
              <div className="flex flex-wrap items-center text-amber-100 mb-8 gap-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="text-sm">May 15, 2025</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">12 min read</span>
                </div>
                <div className="flex items-center">
                  <Tag className="h-4 w-4 mr-1" />
                  <span className="text-sm">Nutrition</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="ml-auto border-amber-200 text-amber-100 hover:bg-amber-800 hover:text-white"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
              <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/food-pyramid-deception.png"
                  alt="Food pyramid with question marks"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <p className="lead text-xl text-gray-700">
                For decades, the food pyramid stood as a seemingly unshakeable guide to healthy eating, a visual
                representation of nutritional wisdom passed down through generations. But what if this widely accepted
                model isn't the beacon of health we've been led to believe? What if the very foundation of our dietary
                understanding has been subtly influenced by forces with agendas beyond our well-being?
              </p>

              <p>
                This powerful message, echoing through a thought-provoking discussion, challenges the conventional food
                pyramid, urging us to critically examine what we consider "healthy" and to become empowered advocates
                for our own nutritional sovereignty.
              </p>

              <h2>Unpacking the Pyramid: A Foundation Built on Shaky Ground?</h2>

              <p>
                The traditional food pyramid often champions the consumption of dairy products like milk, yogurt, and
                cheese. However, the discussion highlights a crucial point: these foods are not universally beneficial.
                Lactose intolerance affects a significant portion of the population, and the inflammatory properties of
                dairy are increasingly being recognized. Is it truly a foundational food group for everyone?
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-8">
                <p className="italic text-amber-800">
                  "Even small, 'moderate' amounts of unhealthy substances, consumed consistently over time, can have
                  detrimental effects on our bodies."
                </p>
              </div>

              <p>
                Furthermore, the principle of "eating in moderation" comes under scrutiny. While seemingly sensible, the
                discussion raises the concern of accumulation. Even small, "moderate" amounts of unhealthy substances,
                consumed consistently over time, can have detrimental effects on our bodies. The positioning of fats,
                oils, and sweets at the pyramid's apex, often without nuanced guidance on types and quantities, is also
                presented as a potential flaw, lacking the crucial context needed for truly informed choices.
              </p>

              <h2>The Sinister Side of Processed Foods: Addiction by Design</h2>

              <p>
                The discussion delves into the alarming reality of processed foods and their pervasive presence in our
                modern diets. Seed oils like grape seed, cotton, and canola oil, along with processed breads, chips, and
                pastas, are flagged as particularly problematic. These aren't simply convenient options; they are often
                engineered with additives that trigger our brain's reward system, leading to addictive eating patterns.
              </p>

              <p>
                The industrial revolution, while bringing advancements, also ushered in an era of mass food processing.
                This shift, the discussion suggests, has prioritized shelf life and profit margins over genuine
                nutritional value, leaving us vulnerable to foods that actively harm our health.
              </p>

              <h2>Beyond the Pyramid: Embracing True Nourishment</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-green-800 mb-4">What to Embrace</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Vibrant Vegetables: Packed with essential vitamins, minerals, and antioxidants</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Nutritious Fruits: Offering natural sweetness and vital nutrients</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Wholesome Whole Grains: Providing sustained energy and fiber</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Protein-Rich Legumes: A fantastic source of plant-based protein and fiber</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Healthy Fats from Nuts and Seeds: Essential for brain health</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-red-50 border-red-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-red-800 mb-4">What to Limit</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        <span>Processed Foods: Often high in unhealthy additives and preservatives</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        <span>Refined Sugars: Can lead to energy crashes and inflammation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        <span>Seed Oils: May contribute to inflammation when consumed in excess</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        <span>Excessive Dairy: Not essential for everyone and may cause issues for many</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        <span>Ultra-Processed Foods: Designed for addiction, not nutrition</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <p>
                So, if the food pyramid isn't the ultimate guide, what is? The discussion champions a return to a more
                holistic and natural way of eating, emphasizing a diet abundant in vibrant vegetables, nutritious
                fruits, wholesome whole grains, protein-rich legumes, healthy fats from nuts and seeds, and beneficial
                oils such as olive oil and avocado oil.
              </p>

              <p>
                The key takeaway is the importance of reading food ingredients. We must become conscious consumers,
                understanding exactly what we are putting into our bodies and reducing our reliance on heavily
                processed, often chemically laden foods. The long-held belief that milk is essential for strong bones is
                also challenged, encouraging a broader understanding of calcium sources and bone health.
              </p>

              <h2>Take Back Your Plate: It's Time for Conscious Consumption</h2>

              <p>
                The power to choose our food ultimately lies within us. The discussion empowers viewers to take control
                by:
              </p>

              <ul>
                <li>Planning Meals: Proactive preparation sets the stage for healthier choices.</li>
                <li>Creating Smart Grocery Lists: Avoiding impulse buys of processed foods.</li>
                <li>Eating for Energy: Fueling our bodies with nutrient-dense foods rather than empty calories.</li>
                <li>
                  Distinguishing Fullness from Satisfaction: Paying attention to our body's true hunger and satiety
                  cues.
                </li>
                <li>Embracing Discipline: Making conscious choices that align with our health goals.</li>
                <li>Having Fun with Healthy Eating: Discovering the deliciousness and variety of whole foods.</li>
              </ul>

              <div className="bg-gray-100 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Did You Know?</h3>
                <p className="text-gray-700">
                  Certain food ingredients and products that are legally sold in America are banned in other countries
                  due to their known health risks. This stark comparison underscores the need for greater awareness and
                  critical evaluation of our food system.
                </p>
              </div>

              <h2>Ready to Break Free from the Food Pyramid Paradigm?</h2>

              <p>
                The time for passive acceptance is over. It's time to question, to learn, and to actively choose a path
                towards genuine health and well-being.
              </p>

              <p>
                By becoming more conscious of what we eat, reading labels, understanding ingredients, and prioritizing
                whole, nutrient-dense foods, we can reclaim control of our plates and, by extension, our health.
              </p>

              <div className="bg-amber-100 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold text-amber-900 mb-4">Take Action Today</h3>
                <p className="text-amber-800 mb-4">
                  Start your journey toward nutritional sovereignty with these simple steps:
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-amber-800">
                  <li>Audit your pantry and refrigerator, identifying processed foods to gradually replace</li>
                  <li>Create a meal plan focused on whole foods, incorporating a rainbow of fruits and vegetables</li>
                  <li>Learn to read and understand food labels, paying special attention to added sugars and oils</li>
                  <li>
                    Experiment with new recipes that celebrate natural, unprocessed ingredients and diverse flavors
                  </li>
                  <li>
                    Share your knowledge with friends and family, creating a supportive community for healthier eating
                  </li>
                </ol>
              </div>

              <p>
                Remember, true health isn't about following a prescribed pyramid or plate model—it's about understanding
                your unique body, its needs, and nourishing it with foods that genuinely support your wellbeing.
              </p>

              <p>
                The journey to reclaiming your plate starts with a single, conscious choice. What will you choose to eat
                today?
              </p>
            </div>
          </div>
        </section>

        {/* Author Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <Separator className="mb-8" />
              <div className="flex items-center">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image src="/ej-profile-photo.jpg" alt="Eric Johnson" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Eric Johnson M.S.</h3>
                  <p className="text-sm text-amber-700 mb-1">Founder & Nutrition Specialist</p>
                  <p className="text-gray-600">
                    A nutritionist and food scientist with a background in exercise and health science. Eric created
                    NxHealth to help improve quality of life through targeted health solutions, believing that our
                    health is our true wealth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif font-light text-gray-900 mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="hover:shadow-md transition-shadow">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/colorful-fruits-vegetables.png"
                      alt="Colorful fruits and vegetables"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-2">The Power of Plant-Based Eating</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      Discover how incorporating more plant-based foods into your diet can transform your health and
                      energy levels.
                    </p>
                    <Link
                      href="/resources/articles/power-up-with-plants"
                      className="text-amber-600 font-medium inline-flex items-center"
                    >
                      Read Article <ArrowLeft className="ml-1 h-3 w-3 rotate-180" />
                    </Link>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-md transition-shadow">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/balanced-diet-calculation.png"
                      alt="Balanced diet calculation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-2">Understanding Your Caloric Needs</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      Find out how to calculate your daily caloric needs and create a balanced nutrition plan that works
                      for your lifestyle.
                    </p>
                    <Link
                      href="/resources/articles/understanding-caloric-needs"
                      className="text-amber-600 font-medium inline-flex items-center"
                    >
                      Read Article <ArrowLeft className="ml-1 h-3 w-3 rotate-180" />
                    </Link>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-md transition-shadow">
                  <div className="relative h-48 w-full">
                    <Image src="/seasonal-produce.png" alt="Seasonal produce" fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-2">Seasonal Eating: Why It Matters</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      Explore the benefits of eating foods when they're in season and how it can improve your health and
                      the environment.
                    </p>
                    <Link href="#" className="text-amber-600 font-medium inline-flex items-center">
                      Read Article <ArrowLeft className="ml-1 h-3 w-3 rotate-180" />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-amber-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-amber-900 mb-4">
                Ready to Transform Your Relationship with Food?
              </h2>
              <p className="text-amber-800 mb-8">
                Book a consultation with our nutrition experts to create a personalized plan that works for your unique
                needs and lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">Book a Consultation</Button>
                <Button variant="outline" className="border-amber-600 text-amber-700 hover:bg-amber-100">
                  Explore Our Services
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
