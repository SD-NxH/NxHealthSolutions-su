import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Share2, Calendar, Clock, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ScrollProgress } from "@/components/scroll-progress"
import { ScrollToTop } from "@/components/scroll-to-top"

export const metadata = {
  title: "Navigating the Protein Phobia | NxHealth",
  description:
    "Protein has become one of the most misunderstood topics in modern nutrition. Discover the science behind plant proteins, amino acids, and sustainable dietary patterns.",
}

export default function NavigatingProteinPhobiaPage() {
  return (
    <>
      <ScrollProgress />
      <ScrollToTop />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brand to-brand-dark text-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <Link
                href="/resources/articles"
                className="inline-flex items-center text-brand-lighter hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Articles
              </Link>
              <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                Navigating the Protein Phobia
              </h1>
              <div className="flex flex-wrap items-center text-white mb-8 gap-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="text-sm">March 10, 2026</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">8 min read</span>
                </div>
                <div className="flex items-center">
                  <Tag className="h-4 w-4 mr-1" />
                  <span className="text-sm">Nutrition</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="ml-auto border-brand-lighter/50 text-white hover:bg-brand-dark hover:text-white bg-transparent"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
              <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/colorful-fruits-vegetables.png"
                  alt="Variety of plant-based protein sources including legumes, grains, and vegetables"
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
                Protein has become one of the most misunderstood topics in modern nutrition.
                Ask almost anyone about plant-forward diets, and one question inevitably appears:
                &ldquo;But where do you get your protein?&rdquo; This concern has been repeated so often
                that it has created what can only be described as protein anxiety across the public.
                However, when we examine the scientific literature, much of this fear begins to dissolve.
              </p>

              <h2>The Myth of &ldquo;Incomplete&rdquo; Plant Proteins</h2>

              <p>
                A common belief is that plant foods do not contain complete proteins.
                In reality, all plant foods contain all twenty amino acids required by the human body.
                The misunderstanding stems from something known as a <strong>limiting amino acid</strong>.
              </p>

              <p>
                A limiting amino acid simply refers to the amino acid present in the lowest proportion
                relative to the body&apos;s needs. For example:
              </p>

              <ul>
                <li>Grains tend to be lower in lysine</li>
                <li>Legumes and beans tend to be lower in methionine</li>
              </ul>

              <p>
                The amino acids are still present&mdash;they simply appear in different proportions.
                Because of this, early interpretations suggested that plant proteins must be combined
                within the same meal to form a &ldquo;complete&rdquo; protein. For decades, people were told
                that foods such as rice and beans had to be eaten together on the same plate.
              </p>

              <div className="bg-brand-lighter/30 border-l-4 border-brand p-4 my-8">
                <p className="italic text-brand-dark">
                  Modern research shows that this level of precision is unnecessary. The body maintains
                  an internal pool of amino acids and can combine them throughout the day. As long as
                  a variety of plant foods are consumed across a 24-hour period, the body can easily
                  assemble the proteins it needs.
                </p>
              </div>

              <p>
                In other words, amino acids function much like letters in a word.
                If lunch provides most of the letters and dinner provides the remaining ones,
                the body can still complete the word.
              </p>

              <h2>How Much Protein Do We Actually Need?</h2>

              <p>
                Protein requirements are also widely misunderstood. The Recommended Dietary Allowance
                (RDA) for protein is approximately:
              </p>

              <div className="bg-muted p-6 rounded-lg my-8 text-center">
                <p className="text-2xl font-bold text-foreground mb-2">
                  0.8 grams of protein per kilogram of body weight
                </p>
                <p className="text-muted-foreground">
                  For an average 175-pound adult, this equals roughly 63 grams of protein per day.
                </p>
              </div>

              <p>
                Many people unknowingly meet this amount well before dinner. Consider a typical day:
              </p>

              <ul>
                <li>Greek yogurt at breakfast</li>
                <li>A sandwich or salad with protein at lunch</li>
              </ul>

              <p>
                By the middle of the day, daily protein requirements may already be satisfied.
                Yet cultural messaging often encourages people to consume far more.
              </p>

              <h2>The Reality: Most People Already Eat Too Much Protein</h2>

              <p>
                Data suggests that Americans consume between 90 and 100 grams of protein per day,
                significantly above the recommended intake. Even more notable is where this protein comes from.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <Card className="bg-destructive/10 border-destructive/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-destructive mb-2">70-85%</h3>
                    <p className="text-sm text-muted-foreground">
                      of protein in the typical American diet is derived from animal sources
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-brand-lighter border-brand">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-brand-dark mb-2">Key Insight</h3>
                    <p className="text-sm text-muted-foreground">
                      Unlike certain nutrients, the body cannot store excess protein for later use
                    </p>
                  </CardContent>
                </Card>
              </div>

              <p>
                When intake exceeds the body&apos;s needs, the surplus protein is converted into other
                energy forms such as carbohydrates or fat. This means that extremely high protein
                intake does not necessarily translate to increased muscle storage or improved health outcomes.
              </p>

              <h2>Protein and the Environmental Equation</h2>

              <p>
                Beyond human biology, protein choices also carry environmental consequences.
                Animal protein production&mdash;particularly beef&mdash;requires enormous amounts of resources.
              </p>

              <div className="bg-accent-light p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold text-accent-dark mb-4">Carbon Emissions</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-accent-dark">Beef production</span>
                    <span className="font-bold text-destructive">~70%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-destructive h-3 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-accent-dark">Plant proteins</span>
                    <span className="font-bold text-brand">~4%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-brand h-3 rounded-full" style={{ width: '4%' }}></div>
                  </div>
                </div>
              </div>

              <p>
                Water usage follows a similar pattern:
              </p>

              <ul>
                <li>Beef represents approximately 58% of the protein-related water footprint</li>
                <li>Plant proteins account for roughly 23%</li>
              </ul>

              <p>
                These numbers reveal that dietary protein sources influence not only personal health
                but also environmental sustainability.
              </p>

              <h2>Shifting the Conversation</h2>

              <p>
                Importantly, scientists are not advocating universal veganism.
                The message emerging from current research is much simpler:
              </p>

              <div className="bg-brand-lighter/30 border-l-4 border-brand p-4 my-8">
                <p className="italic text-brand-dark font-medium text-lg">
                  The average diet contains far more animal protein than necessary.
                  Reducing this excess&mdash;while incorporating a greater diversity of plant foods&mdash;can
                  support both human health and planetary stability.
                </p>
              </div>

              <p>
                This shift does not require abandoning cultural traditions or eliminating meat entirely.
                Instead, it encourages a <strong>plant-forward dietary pattern</strong>, where plant foods
                make up the majority of meals and animal foods are consumed more moderately.
              </p>

              <h2>Moving Beyond Protein Anxiety</h2>

              <p>
                Protein is essential for life. But the fear surrounding plant-based protein is largely
                unsupported by modern research. The evidence shows that:
              </p>

              <div className="bg-brand-lighter border-brand border p-6 rounded-lg my-8">
                <ul className="space-y-3 mb-0">
                  <li className="flex items-start">
                    <span className="text-brand mr-3 font-bold">1</span>
                    <span>Plant foods contain all essential amino acids</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-3 font-bold">2</span>
                    <span>Daily protein needs are lower than most people assume</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-3 font-bold">3</span>
                    <span>Excess protein consumption is common</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-3 font-bold">4</span>
                    <span>Plant-forward protein patterns can support both human and environmental health</span>
                  </li>
                </ul>
              </div>

              <p>
                Rather than obsessing over protein intake, a more productive approach is to focus on
                overall dietary patterns&mdash;variety, fiber, whole foods, and balanced nutrition.
                When those foundations are in place, protein needs are almost always met naturally.
              </p>

              <div className="bg-muted p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Take Action Today</h3>
                <p className="text-muted-foreground mb-4">
                  Start shifting your relationship with protein by:
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                  <li>Adding more legumes, beans, and lentils to your weekly meals</li>
                  <li>Experimenting with whole grains like quinoa, farro, and buckwheat</li>
                  <li>Including nuts and seeds as regular snacks or toppings</li>
                  <li>Aiming for variety throughout the day rather than protein combining at each meal</li>
                  <li>Considering the environmental impact alongside nutritional value</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* References Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl font-serif font-medium text-foreground mb-4">Sources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Challenges and opportunities for better nutrition science - BMJ (2020)</li>
                <li>Gut Microbiota-Targeted Diets Modulate Human Immune Status (2020)</li>
                <li>Maximizing the intersection of human health and the health of the environment - Nutrition Reviews (2019)</li>
                <li>Plant proteins in relation to human protein and amino acid nutrition - The American Journal of Clinical Nutrition (1994)</li>
                <li>Consumption of ultra-processed foods and associated sociodemographic factors in the USA - BMJ Open (2018)</li>
                <li>Diet Quality of Americans Differs by Age, Sex, Race/Ethnicity, Income, and Education Level - Journal of the Academy of Nutrition and Dietetics (2013)</li>
              </ul>
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
                  <p className="text-sm text-brand-dark mb-1">Founder & Nutrition Specialist</p>
                  <p className="text-muted-foreground">
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
                      className="text-brand font-medium inline-flex items-center"
                    >
                      Read Article <ArrowLeft className="ml-1 h-3 w-3 rotate-180" />
                    </Link>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-md transition-shadow">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/food-pyramid-deception.png"
                      alt="Food pyramid questioning"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-2">The Food Pyramid Deception</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      What if the very foundation of our dietary understanding has been subtly influenced by forces
                      with agendas beyond our well-being?
                    </p>
                    <Link
                      href="/resources/articles/food-pyramid-deception"
                      className="text-brand font-medium inline-flex items-center"
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
                      className="text-brand font-medium inline-flex items-center"
                    >
                      Read Article <ArrowLeft className="ml-1 h-3 w-3 rotate-180" />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-brand-lighter">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark mb-4">
                Ready to Transform Your Relationship with Protein?
              </h2>
              <p className="text-brand-dark mb-8">
                Book a consultation with our nutrition experts to create a personalized plant-forward plan that works for your unique
                needs and lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-brand hover:bg-brand-dark text-white">
                  <Link href="/contact">Book a Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-brand text-brand-dark hover:bg-brand/10">
                  <Link href="/resources/articles">Explore More Articles</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
