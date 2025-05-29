import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Users } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"

export default function VanillaNiceCreamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/vanilla-coconut-ice-cream.jpeg"
          alt="Vanilla 'Nice' Cream in a bowl with vanilla beans and fresh ingredients"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">
            Vanilla 'Nice' Cream (Freeze & Blend Method)
          </h1>
          <p className="text-lg text-green-100">A simple, plant-based frozen treat that's naturally sweet and creamy</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <Link
              href="/resources/articles"
              className="inline-flex items-center text-green-600 hover:text-green-700 mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Link>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                This easy recipe focuses on simplicity and natural sweetness to create a refreshing and creamy vanilla
                treat. Perfect for hot summer days or whenever you're craving something sweet but wholesome.
              </p>

              {/* Recipe Info */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-700">Yields: 2-3 servings</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-700">Prep: 5 minutes</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-700">Freezing: 4-6 hours</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-700">Blend: 5-10 minutes</span>
                </div>
              </div>

              <Separator className="my-8" />

              {/* Ingredients and Equipment */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-serif font-medium text-gray-900 mb-4">Ingredients</h2>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>2 cups unsweetened almond milk</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>1/4 cup coconut sugar (adjust to taste)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>1.5 teaspoons pure vanilla extract (or 1 vanilla bean, scraped)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span className="italic">Optional for extra creaminess:</span>
                      </li>
                      <li className="flex items-start ml-6">
                        <span className="text-green-600 mr-2">-</span>
                        <span>1/2 teaspoon xanthan gum (start with 1/4 tsp)</span>
                      </li>
                      <li className="flex items-start ml-6">
                        <span className="text-green-600 mr-2">-</span>
                        <span>1 tablespoon arrowroot powder (mix with cold milk first)</span>
                      </li>
                      <li className="flex items-start ml-6">
                        <span className="text-green-600 mr-2">-</span>
                        <span>1 tablespoon nut butter</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-serif font-medium text-gray-900 mb-4">Equipment</h2>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Freezer-safe container (ice cube trays, shallow baking dish, or silicone mold)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>High-speed blender or powerful food processor</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Airtight freezer-safe container for storage (if not eating immediately)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Instructions */}
              <div className="mb-8">
                <h2 className="text-2xl font-serif font-medium text-gray-900 mb-4">Instructions</h2>
                <ol className="list-decimal pl-5 space-y-4">
                  <li>
                    <strong>Combine Ingredients:</strong> In a bowl or directly in your blender (if it has a good seal),
                    whisk together the almond milk, coconut sugar, and vanilla extract until the coconut sugar is fully
                    dissolved. Taste and adjust sweetness if desired. If using xanthan gum or arrowroot powder, add it
                    now and whisk thoroughly to avoid clumps.
                  </li>
                  <li>
                    <strong>Freeze the Base:</strong> Pour the liquid mixture into your chosen freezer-safe container.
                    If using ice cube trays, this will make the blending process easier. If using a shallow dish, aim
                    for a layer no thicker than 1 inch.
                  </li>
                  <li>
                    <strong>Freeze Until Solid:</strong> Place the container in the freezer and freeze for at least 4-6
                    hours, or preferably overnight, until the mixture is completely solid and icy.
                  </li>
                  <li>
                    <strong>Prepare for Blending:</strong> Once frozen, remove the solid block of vanilla ice from the
                    container. If using a shallow dish, break it into smaller chunks using a sturdy spoon or the back of
                    a knife. If using ice cubes, simply pop them out.
                  </li>
                  <li>
                    <strong>Blend into Ice Cream:</strong> Place the frozen chunks/cubes into your high-speed blender or
                    powerful food processor. Start blending on a low speed, using the tamper (if your blender has one)
                    to push the frozen chunks towards the blades. Gradually increase the speed. The mixture will likely
                    go through a "snow" or "slush" phase before it becomes creamy.
                  </li>
                  <li>
                    <strong>Be Patient:</strong> Be patient and scrape down the sides as needed. If the mixture is
                    struggling to blend, add just a splash (1-2 tablespoons at a time) of extra almond milk to help it
                    move. Avoid adding too much liquid, or your ice cream will be thin. Continue blending until the
                    mixture is completely smooth, thick, and has the consistency of soft-serve ice cream.
                  </li>
                  <li>
                    <strong>Serve Immediately (Soft-Serve):</strong> Enjoy your vanilla "nice" cream immediately for a
                    soft-serve consistency.
                  </li>
                  <li>
                    <strong>For Firmer Scoop (Optional):</strong> If you prefer a firmer, scoopable ice cream, transfer
                    the blended mixture to an airtight freezer-safe container and freeze for another 1-2 hours. If it
                    becomes too hard, let it sit at room temperature for 5-10 minutes before scooping.
                  </li>
                </ol>
              </div>

              {/* Tips for Success */}
              <div className="bg-green-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-serif font-medium text-gray-900 mb-4">Tips for Success</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>
                      <strong>Sweetness is Key:</strong> Coconut sugar provides a caramel-like note. Adjust the amount
                      to your preference. Remember, cold temperatures dull sweetness, so you might need a little more
                      than you think.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>
                      <strong>Quality Vanilla:</strong> Since vanilla is a primary flavor, using good quality pure
                      vanilla extract or even scraping a vanilla bean will make a big difference.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>
                      <strong>Patience with Blending:</strong> This method requires a powerful blender and some
                      patience. Don't give up if it looks like just frozen chunks at first; keep blending and scraping.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>
                      <strong>Add-ins:</strong> For fun variations, consider blending in a handful of pecans or
                      chocolate chips after the ice cream is mostly smooth, or stirring them in at the end.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Nutrition Information */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-serif font-medium text-gray-900 mb-4">Nutrition Highlights</h2>
                <p className="mb-4">This plant-based ice cream alternative offers several nutritional benefits:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Lower in saturated fat than traditional dairy ice cream</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Contains no artificial flavors, colors, or preservatives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Coconut sugar has a lower glycemic index than refined white sugar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Almond milk provides vitamin E and is typically fortified with calcium and vitamin D</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="sticky top-24">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-serif font-medium text-gray-900 mb-4">More Healthy Desserts</h3>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/resources/banana-buckwheat-muffins" className="text-green-600 hover:text-green-700">
                        Banana Buckwheat Muffins with Nuts & Seeds
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-green-600 hover:text-green-700">
                        Berry Chia Pudding
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-green-600 hover:text-green-700">
                        Chocolate Avocado Mousse
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-green-600 hover:text-green-700">
                        Baked Cinnamon Apples
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
