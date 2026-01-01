import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock, Users, ChefHat } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function BananaBuckwheatBreadPage() {
  const ingredients = [
    "2 cups buckwheat flour",
    "3 large ripe bananas, mashed",
    "1/3 cup coconut oil, melted",
    "1/4 cup maple syrup",
    "2 large eggs",
    "1 tsp vanilla extract",
    "1 tsp baking soda",
    "1/2 tsp salt",
    "1/2 tsp cinnamon",
    "1/4 cup chopped walnuts (optional)",
    "1/4 cup dark chocolate chips (optional)",
  ]

  const instructions = [
    "Preheat your oven to 350°F (175°C). Grease a 9x5 inch loaf pan or line with parchment paper.",
    "In a large bowl, mash the ripe bananas until smooth. Add melted coconut oil, maple syrup, eggs, and vanilla extract. Mix well.",
    "In a separate bowl, whisk together buckwheat flour, baking soda, salt, and cinnamon.",
    "Add the dry ingredients to the wet ingredients and stir until just combined. Don't overmix.",
    "Fold in walnuts and chocolate chips if using.",
    "Pour the batter into the prepared loaf pan and smooth the top.",
    "Bake for 55-65 minutes, or until a toothpick inserted in the center comes out clean.",
    "Cool in the pan for 10 minutes, then turn out onto a wire rack to cool completely before slicing.",
  ]

  const nutritionFacts = [
    { label: "Calories", value: "180 per slice" },
    { label: "Protein", value: "5g" },
    { label: "Fiber", value: "4g" },
    { label: "Healthy Fats", value: "8g" },
    { label: "Natural Sugars", value: "12g" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[400px] md:h-[500px] w-full">
          <Image
            src="/banana-buckwheat-bread.png"
            alt="Sliced banana buckwheat bread on wooden cutting board"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">Banana Buckwheat Bread</h1>
            <p className="text-lg md:text-xl text-gray-100 mb-6">
              A wholesome, gluten-free treat that's naturally sweetened and packed with nutrients
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Prep: 15 min</span>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat className="h-4 w-4" />
                <span>Bake: 60 min</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Serves: 10-12</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-muted/50 py-4 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <Link
            href="/resources/articles"
            className="text-brand hover:text-brand-hover flex items-center text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Articles
          </Link>
        </div>
      </div>

      {/* Recipe Content */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Recipe Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">About This Recipe</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This Banana Buckwheat Bread is a nutritious twist on the classic banana bread. Made with buckwheat
                flour, it's naturally gluten-free and provides a rich, nutty flavor along with impressive nutritional
                benefits. Buckwheat is a complete protein and excellent source of fiber, making this bread both
                satisfying and nourishing.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The natural sweetness from ripe bananas and a touch of maple syrup means you can enjoy this treat
                without the guilt. Perfect for breakfast, snacks, or even a healthy dessert!
              </p>
            </div>

            {/* Nutrition Facts */}
            <Card className="h-fit">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Nutrition Highlights</h3>
                <div className="space-y-3">
                  {nutritionFacts.map((fact, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-600">{fact.label}</span>
                      <span className="font-medium text-brand">{fact.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Separator className="my-8" />

          {/* Ingredients and Instructions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Ingredients */}
            <div>
              <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">Ingredients</h2>
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Instructions */}
            <div>
              <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">Instructions</h2>
              <Card>
                <CardContent className="p-6">
                  <ol className="space-y-4">
                    {instructions.map((instruction, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-brand-lighter text-brand rounded-full text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-gray-700 leading-relaxed">{instruction}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Tips Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">Chef's Tips</h2>
            <Card className="bg-brand-lighter border-brand-light">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-2">Perfect Bananas</h3>
                    <p className="text-brand-dark/80 text-sm">
                      Use very ripe bananas with brown spots for the best sweetness and flavor. They should be soft and
                      easy to mash.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-2">Storage</h3>
                    <p className="text-brand-dark/80 text-sm">
                      Store covered at room temperature for up to 3 days, or freeze slices for up to 3 months.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-2">Make it Muffins</h3>
                    <p className="text-brand-dark/80 text-sm">
                      Divide batter into muffin cups and bake for 18-22 minutes for individual portions.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-2">Buckwheat Benefits</h3>
                    <p className="text-brand-dark/80 text-sm">
                      Buckwheat is rich in rutin, magnesium, and complete proteins, making this bread incredibly
                      nutritious.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">Ready to Bake?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              This banana buckwheat bread is perfect for meal prep, breakfast on-the-go, or sharing with friends and
              family. Give it a try and let us know how it turns out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-brand hover:bg-brand-hover">
                <Link href="/resources/articles">Explore More Recipes</Link>
              </Button>
              <Button variant="outline" asChild className="border-brand text-brand bg-transparent">
                <Link href="/resources/meal-planning">Plan Your Meals</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
