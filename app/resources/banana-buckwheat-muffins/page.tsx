import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock, Users, ChefHat } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function BananaBuckwheatMuffinsPage() {
  const ingredients = [
    "1 3/4 cups (about 200g) buckwheat flour",
    "1 teaspoon baking powder",
    "1/2 teaspoon baking soda",
    "1/2 teaspoon ground cinnamon (optional, but recommended)",
    "Pinch of salt",
    "3 ripe large bananas, mashed (about 1.5 cups)",
    "1/2 cup unsweetened applesauce",
    "1/4 cup unsweetened almond milk",
    "1/4 cup melted coconut oil or olive oil",
    "1 teaspoon vanilla extract",
    "1/2 cup chopped nuts (walnuts, pecans, almonds)",
    "1/4 cup seeds (chia, flax, sunflower, pumpkin seeds)",
  ]

  const equipment = [
    "12-cup muffin tin",
    "Paper muffin liners or non-stick spray",
    "Large mixing bowl",
    "Medium mixing bowl",
    "Whisk",
    "Spatula or spoon",
  ]

  const instructions = [
    "Preheat your oven to 375°F (190°C). Line a 12-cup muffin tin with paper liners or grease generously with non-stick spray.",
    "In a large mixing bowl, whisk together the buckwheat flour, baking powder, baking soda, cinnamon (if using), and salt.",
    "In a separate medium mixing bowl, mash the ripe bananas well. Add the applesauce, almond milk, melted oil, and vanilla extract. Whisk until well combined.",
    "Pour the wet ingredients into the dry ingredients. Stir gently with a spatula or spoon until just combined. Be careful not to overmix; a few lumps are okay.",
    "Gently fold in the chopped nuts and seeds until evenly distributed throughout the batter.",
    "Divide the batter evenly among the 12 prepared muffin cups, filling each about two-thirds full.",
    "Bake for 20-25 minutes, or until a toothpick inserted into the center of a muffin comes out clean.",
    "Remove from oven and let muffins cool in the tin for 5 minutes before transferring to a wire rack to cool completely.",
  ]

  const tips = [
    {
      title: "Ripe Bananas are Key",
      description: "The riper the bananas (with brown spots), the sweeter and more flavorful your muffins will be.",
    },
    {
      title: "Don't Overmix",
      description: "Overmixing can lead to tough muffins. Mix just until the ingredients are combined.",
    },
    {
      title: "Storage",
      description:
        "Store cooled muffins in an airtight container at room temperature for up to 3 days, or refrigerate for up to 5 days. They freeze well for up to 3 months.",
    },
    {
      title: "Customization",
      description: "Feel free to add 1/2 cup of chocolate chips or shredded unsweetened coconut for extra flavor!",
    },
  ]

  const nutritionFacts = [
    { label: "Calories", value: "165 per muffin" },
    { label: "Protein", value: "4g" },
    { label: "Fiber", value: "3g" },
    { label: "Healthy Fats", value: "6g" },
    { label: "Natural Sugars", value: "8g" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[400px] md:h-[500px] w-full">
          <Image
            src="/banana-buckwheat-muffins.png"
            alt="Sliced banana buckwheat bread and muffins topped with seeds, with fresh bananas on wooden cutting board"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
              Banana Buckwheat Muffins with Nuts & Seeds
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-6">
              Naturally gluten-free muffins packed with flavor, fiber, and nutritious nuts and seeds
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Prep: 15 min</span>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat className="h-4 w-4" />
                <span>Bake: 20-25 min</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Yields: 12 muffins</span>
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
              <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">About These Muffins</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Banana Buckwheat Muffins with Nuts & Seeds are naturally gluten-free and packed with incredible
                flavor and fiber. Made with nutrient-dense buckwheat flour, they provide a hearty, satisfying texture
                while delivering complete proteins and essential minerals.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The combination of ripe bananas, crunchy nuts, and nutritious seeds creates the perfect balance of
                natural sweetness, healthy fats, and plant-based protein. These muffins make an excellent breakfast
                on-the-go or a wholesome afternoon snack.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With no refined sugars and plenty of fiber, these muffins will keep you satisfied and energized
                throughout your day!
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

          {/* Equipment Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">Equipment Needed</h2>
            <Card className="bg-secondary/20 border-secondary">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {equipment.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="inline-block w-2 h-2 bg-secondary rounded-full mr-2"></span>
                      <span className="text-secondary-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

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
            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">Tips for Success</h2>
            <Card className="bg-brand-lighter border-brand-light">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tips.map((tip, index) => (
                    <div key={index}>
                      <h3 className="font-semibold text-brand-dark mb-2">{tip.title}</h3>
                      <p className="text-brand-dark/80 text-sm">{tip.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">Ready to Bake?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              These banana buckwheat muffins are perfect for meal prep, grab-and-go breakfasts, or sharing with loved
              ones. The combination of wholesome ingredients makes them both nutritious and delicious!
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
