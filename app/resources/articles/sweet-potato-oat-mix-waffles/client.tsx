"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock, Users, Printer, Share2, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function SweetPotatoOatMixWafflesClient() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-brand-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link
              href="/resources/articles"
              className="inline-flex items-center text-brand-lighter hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Link>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-brand text-brand-foreground">Recipes</Badge>
              <Badge variant="outline" className="border-brand-lighter text-brand-lighter">
                Gluten-Free
              </Badge>
              <Badge variant="outline" className="border-brand-lighter text-brand-lighter">
                Plant-Based
              </Badge>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-serif font-light mb-6 text-balance">
              Sweet Potato Oat Mix Waffles
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-brand-lighter mb-8">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>5 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Yields: 6 standard waffles</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                size="sm"
                className="border-brand-lighter text-brand-lighter hover:bg-brand-lighter/10 bg-transparent"
                onClick={() => window.print()}
              >
                <Printer className="h-4 w-4 mr-2" />
                Print Recipe
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-brand-lighter text-brand-lighter hover:bg-brand-lighter/10 bg-transparent"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: "Sweet Potato Oat Mix Waffles",
                      url: window.location.href,
                    })
                  }
                }}
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <a href="#ingredients" className="inline-flex">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-brand-lighter text-brand-lighter hover:bg-brand-lighter/10 bg-transparent"
                >
                  <ChevronDown className="h-4 w-4 mr-2" />
                  Jump to Recipe
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative -mt-8 md:-mt-12 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/recipes/sweet-potato-oat-waffles.jpg"
                alt="Sweet Potato Oat Mix Waffles"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            These hearty waffles use an oat flour pancake/waffle mix as the base and are naturally sweetened and
            moistened with creamy sweet potato. They're perfect for a nourishing breakfast or freezer-friendly meal
            prep.
          </p>
        </div>
      </section>

      {/* Recipe Details */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-background rounded-lg p-4 shadow-sm">
              <p className="text-sm text-muted-foreground mb-1">Yields</p>
              <p className="font-medium text-foreground">6 waffles</p>
            </div>
            <div className="bg-background rounded-lg p-4 shadow-sm">
              <p className="text-sm text-muted-foreground mb-1">Prep Time</p>
              <p className="font-medium text-foreground">10 minutes</p>
            </div>
            <div className="bg-background rounded-lg p-4 shadow-sm">
              <p className="text-sm text-muted-foreground mb-1">Cook Time</p>
              <p className="font-medium text-foreground">5-7 min/waffle</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section id="ingredients" className="py-12 md:py-16 scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-foreground mb-8">Ingredients</h2>

          <div className="space-y-8">
            {/* Dry Base */}
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-lg font-medium text-foreground mb-4 flex items-center">
                <span className="w-2 h-2 bg-brand rounded-full mr-3"></span>
                Dry Base
              </h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground flex items-start">
                  <span className="text-brand mr-3">•</span>
                  1½ cups oat flour pancake/waffle mix
                </li>
              </ul>
            </div>

            {/* Wet Ingredients */}
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-lg font-medium text-foreground mb-4 flex items-center">
                <span className="w-2 h-2 bg-brand rounded-full mr-3"></span>
                Wet Ingredients
              </h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground flex items-start">
                  <span className="text-brand mr-3">•</span>¾ cup cooked sweet potato purée, smooth and mashed
                </li>
                <li className="text-muted-foreground flex items-start">
                  <span className="text-brand mr-3">•</span>
                  ½–¾ cup unsweetened plant-based milk (adjust for thickness)
                </li>
                <li className="text-muted-foreground flex items-start">
                  <span className="text-brand mr-3">•</span>2 tablespoons melted plant butter or neutral oil
                </li>
              </ul>
            </div>

            {/* Binder */}
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-lg font-medium text-foreground mb-4 flex items-center">
                <span className="w-2 h-2 bg-brand rounded-full mr-3"></span>
                Binder
              </h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground flex items-start">
                  <span className="text-brand mr-3">•</span>1 tablespoon chia seeds (whole or ground)
                </li>
                <li className="text-muted-foreground flex items-start">
                  <span className="text-brand mr-3">•</span>¼ cup warm water
                </li>
              </ul>
            </div>

            {/* Flavor */}
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-lg font-medium text-foreground mb-4 flex items-center">
                <span className="w-2 h-2 bg-brand rounded-full mr-3"></span>
                Flavor (Optional)
              </h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground flex items-start">
                  <span className="text-brand mr-3">•</span>½ teaspoon ground cinnamon
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Instructions */}
      <section id="instructions" className="py-12 md:py-16 bg-muted scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-foreground mb-8">Instructions</h2>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-brand text-brand-foreground rounded-full flex items-center justify-center font-medium">
                  1
                </span>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Prepare the Chia Gel</h3>
                  <p className="text-muted-foreground">
                    In a small bowl, whisk the chia seeds with the warm water. Set aside for 10 minutes, until a thick
                    gel forms.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-brand text-brand-foreground rounded-full flex items-center justify-center font-medium">
                  2
                </span>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Make the Batter</h3>
                  <p className="text-muted-foreground mb-4">
                    In a large mixing bowl, whisk together the sweet potato purée, plant-based milk, melted butter or
                    oil, and the prepared chia gel. Add the oat flour pancake/waffle mix and cinnamon (if using). Gently
                    stir until just combined.
                  </p>
                  <div className="bg-brand-lighter/30 border border-brand-lighter rounded-lg p-4">
                    <p className="text-sm text-foreground">
                      <strong>Tip:</strong> The batter should be thick but pourable. If it's too thick, add plant milk
                      1–2 tablespoons at a time until the desired consistency is reached.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-brand text-brand-foreground rounded-full flex items-center justify-center font-medium">
                  3
                </span>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Cook the Waffles</h3>
                  <p className="text-muted-foreground mb-4">
                    Preheat your waffle iron and lightly grease it. Pour about ½ cup of batter (or according to your
                    waffle iron size) into the center of the iron. Close the lid and cook for 5–7 minutes.
                  </p>
                  <p className="text-muted-foreground">
                    Because these waffles are gluten-free and moisture-rich, allow them to cook fully. They're ready
                    when steam mostly stops escaping from the iron.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-brand text-brand-foreground rounded-full flex items-center justify-center font-medium">
                  4
                </span>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Serve</h3>
                  <p className="text-muted-foreground">
                    Serve warm with maple syrup, toasted pecans, fruit, or nut butter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pro Tip */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="bg-brand-lighter/30 border border-brand rounded-xl p-6 md:p-8">
            <h3 className="text-xl font-serif font-medium text-foreground mb-4">Pro Tip: Extra-Crispy Waffles</h3>
            <p className="text-muted-foreground">
              If the waffles are slightly soft due to the sweet potato, place them in a toaster or a 350°F (175°C) oven
              for 2–3 minutes just before serving to crisp the outside perfectly.
            </p>
          </div>
        </div>
      </section>

      {/* Related Recipes */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-foreground mb-8 text-center">
            More Recipes You Might Enjoy
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/resources/banana-buckwheat-muffins" className="group">
              <div className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <Badge className="bg-brand/10 text-brand mb-3">Recipes</Badge>
                <h3 className="font-medium text-foreground group-hover:text-brand transition-colors mb-2">
                  Banana Buckwheat Muffins with Nuts & Seeds
                </h3>
                <p className="text-sm text-muted-foreground">
                  Naturally gluten-free muffins packed with flavor and fiber.
                </p>
              </div>
            </Link>

            <Link href="/resources/articles/quick-healthy-recipes" className="group">
              <div className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <Badge className="bg-brand/10 text-brand mb-3">Recipes</Badge>
                <h3 className="font-medium text-foreground group-hover:text-brand transition-colors mb-2">
                  10 Quick and Healthy Recipes for Busy Professionals
                </h3>
                <p className="text-sm text-muted-foreground">Plant-based meals prepared in 15 minutes or less.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-foreground mb-6">
            Ready to Explore More Recipes?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover more plant-based recipes and nutrition tips to support your health journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-brand hover:bg-brand-hover text-brand-foreground">
              <Link href="/resources/articles">Browse All Articles</Link>
            </Button>
            <Button asChild variant="outline" className="border-brand text-brand hover:bg-brand-lighter bg-transparent">
              <Link href="/meal-planner">Explore Meal Planner</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
