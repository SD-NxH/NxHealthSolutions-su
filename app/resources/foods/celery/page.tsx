import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Celery | NxHealth",
  description:
    "Learn about the health benefits of celery, its nutritional profile, and how to incorporate it into your diet.",
}

export default function CeleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Link href="/resources/c" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to C Foods
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-green-800 mb-4">Celery</h1>
            <p className="text-xl text-gray-600">
              A crunchy, hydrating vegetable with powerful anti-inflammatory properties and numerous health benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image src="/crisp-celery.png" alt="Fresh celery stalks" fill className="object-cover" priority />
            </div>

            <div className="prose max-w-none">
              <h2>What is Celery?</h2>
              <p>
                Celery (Apium graveolens) is a marshland plant in the family Apiaceae that has been cultivated as a
                vegetable since antiquity. It has long, fibrous stalks that taper into leaves, and both the stalks and
                leaves are edible, as are the small seeds that the plant produces.
              </p>
              <p>
                Known for its distinctive flavor and satisfying crunch, celery is a staple in many cuisines around the
                world. It's commonly used in soups, stews, salads, and as a crunchy snack with dips.
              </p>

              <h2>Nutritional Profile</h2>
              <p>
                Celery is exceptionally low in calories while being rich in nutrients. A medium stalk (40g) of celery
                contains:
              </p>
              <ul>
                <li>Calories: 6</li>
                <li>Water: 95%</li>
                <li>Protein: 0.3g</li>
                <li>Carbs: 1.3g</li>
                <li>Fiber: 0.7g</li>
                <li>Fat: 0.1g</li>
                <li>Vitamin K: 24% of the RDI</li>
                <li>Vitamin A: 5% of the RDI</li>
                <li>Folate: 3% of the RDI</li>
                <li>Potassium: 3% of the RDI</li>
              </ul>
              <p>Celery also contains small amounts of vitamin C, B vitamins, calcium, magnesium, and phosphorus.</p>

              <h2>Health Benefits</h2>
              <h3>Anti-inflammatory Properties</h3>
              <p>
                Celery contains antioxidants and polysaccharides that are known to act as anti-inflammatories,
                especially flavonoid and polyphenol antioxidants. These can help reduce inflammation in the body,
                potentially benefiting those with inflammatory conditions.
              </p>

              <h3>Supports Digestive Health</h3>
              <p>
                The high water and fiber content in celery supports a healthy digestive tract and helps prevent
                constipation. The fiber in celery also feeds beneficial gut bacteria, promoting gut health.
              </p>

              <h3>May Help Lower Blood Pressure</h3>
              <p>
                Celery contains compounds called phthalides, which can help relax the muscles in and around arterial
                walls, creating more space and allowing blood to flow more freely. This may help reduce blood pressure.
              </p>

              <h3>Hydration</h3>
              <p>
                With a water content of about 95%, celery is an excellent food for hydration, which is essential for all
                bodily functions.
              </p>

              <h3>Weight Management</h3>
              <p>
                Due to its high water content, fiber, and low calorie count, celery can be a helpful addition to a
                weight management diet. It provides a satisfying crunch and volume without adding many calories.
              </p>

              <h2>How to Incorporate Celery in Your Diet</h2>
              <ul>
                <li>Enjoy raw celery sticks with hummus, nut butter, or other healthy dips</li>
                <li>Add chopped celery to salads for extra crunch</li>
                <li>
                  Use celery as part of a mirepoix (with onions and carrots) as a flavor base for soups, stews, and
                  sauces
                </li>
                <li>Juice celery with other fruits and vegetables for a nutritious beverage</li>
                <li>Add celery to smoothies for added nutrients</li>
                <li>Braise or stir-fry celery as a side dish</li>
              </ul>

              <div className="bg-green-50 p-6 rounded-lg my-8 border border-green-100">
                <h3 className="text-xl font-medium text-green-800 mb-2">Recipe Spotlight</h3>
                <p className="mb-4">
                  Looking for a delicious way to incorporate celery into your meals? Try our refreshing Celery and Apple
                  Salad with Walnuts:
                </p>
                <ul className="mb-4">
                  <li>2 cups thinly sliced celery</li>
                  <li>1 crisp apple, diced</li>
                  <li>1/4 cup chopped walnuts</li>
                  <li>2 tablespoons olive oil</li>
                  <li>1 tablespoon lemon juice</li>
                  <li>Salt and pepper to taste</li>
                </ul>
                <p>Combine all ingredients in a bowl, toss well, and enjoy this crunchy, nutritious salad!</p>
              </div>

              <h2>Selecting and Storing</h2>
              <p>
                When selecting celery, look for crisp, firm stalks with fresh leaves. The stalks should snap easily when
                bent, not bend limply. Avoid celery with wilted leaves or slimy stalks.
              </p>
              <p>
                To store celery, wrap it in aluminum foil and keep it in the refrigerator. Unlike plastic bags, foil
                allows the ethylene gas that celery produces to escape, keeping it fresh for up to two weeks.
                Alternatively, you can store celery stalks in water in the refrigerator to maintain crispness.
              </p>

              <h2>Potential Concerns</h2>
              <p>
                Celery is generally safe for most people when consumed in food amounts. However, some individuals may be
                allergic to celery, with symptoms ranging from oral allergy syndrome to anaphylaxis in severe cases.
              </p>
              <p>
                Celery also contains natural chemicals called psoralens, which can increase sun sensitivity in some
                people when consumed in large amounts.
              </p>

              <h2>Conclusion</h2>
              <p>
                Celery is a versatile, nutritious vegetable that offers numerous health benefits. Its high water and
                fiber content, along with its array of vitamins, minerals, and antioxidants, make it a valuable addition
                to a balanced diet. Whether enjoyed raw as a snack, added to salads, or used as a flavor base in
                cooking, celery can contribute to overall health and wellbeing.
              </p>
            </div>

            <div className="mt-12 border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-serif font-light text-gray-900 mb-4">Related Foods</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Link href="/resources/foods/carrots" className="group">
                  <div className="bg-green-50 rounded-lg p-4 transition-all duration-300 group-hover:bg-green-100">
                    <h4 className="font-medium text-green-800 group-hover:text-green-900">Carrots</h4>
                    <p className="text-sm text-gray-600">Another crunchy vegetable rich in nutrients</p>
                  </div>
                </Link>
                <Link href="/resources/foods/cucumber" className="group">
                  <div className="bg-green-50 rounded-lg p-4 transition-all duration-300 group-hover:bg-green-100">
                    <h4 className="font-medium text-green-800 group-hover:text-green-900">Cucumber</h4>
                    <p className="text-sm text-gray-600">Hydrating vegetable with similar crunch</p>
                  </div>
                </Link>
                <Link href="/resources/foods/bell-pepper" className="group">
                  <div className="bg-green-50 rounded-lg p-4 transition-all duration-300 group-hover:bg-green-100">
                    <h4 className="font-medium text-green-800 group-hover:text-green-900">Bell Peppers</h4>
                    <p className="text-sm text-gray-600">Colorful vegetables often paired with celery</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
