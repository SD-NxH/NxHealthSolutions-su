import Link from "next/link"
import { ArrowLeft, Clock, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"

const recipes = [
  {
    id: 1,
    title: "15-Minute Buddha Bowl",
    description:
      "A nutrient-packed bowl with quinoa, roasted chickpeas, avocado, and fresh vegetables drizzled with tahini sauce.",
    prepTime: "5 minutes",
    cookTime: "10 minutes",
    ingredients: [
      "1 cup cooked quinoa",
      "1 can chickpeas, drained and rinsed",
      "1 avocado, sliced",
      "1 cup cherry tomatoes, halved",
      "1 cucumber, diced",
      "2 cups mixed greens",
      "2 tbsp tahini",
      "1 tbsp lemon juice",
      "1 tsp maple syrup",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Heat pre-cooked quinoa in the microwave for 1 minute.",
      "Toss chickpeas with olive oil, salt, and paprika. Roast in air fryer for 8 minutes or pan-fry for 5 minutes.",
      "Arrange quinoa, chickpeas, avocado, tomatoes, cucumber, and greens in a bowl.",
      "Mix tahini, lemon juice, maple syrup, and 1-2 tbsp water for the dressing.",
      "Drizzle dressing over the bowl and enjoy!",
    ],
  },
  {
    id: 2,
    title: "5-Minute Peanut Butter Banana Smoothie",
    description: "A protein-rich smoothie that's perfect for breakfast on the go or a post-workout refuel.",
    prepTime: "5 minutes",
    cookTime: "0 minutes",
    ingredients: [
      "1 ripe banana",
      "2 tbsp natural peanut butter",
      "1 cup plant-based milk",
      "1 tbsp chia seeds",
      "1 tsp maple syrup (optional)",
      "1/2 tsp cinnamon",
      "Ice cubes (optional)",
    ],
    instructions: [
      "Add all ingredients to a blender.",
      "Blend until smooth and creamy.",
      "Pour into a glass or travel cup and enjoy immediately!",
    ],
  },
  {
    id: 3,
    title: "10-Minute Chickpea Salad Wrap",
    description: "A protein-packed alternative to tuna salad that makes for a satisfying lunch.",
    prepTime: "10 minutes",
    cookTime: "0 minutes",
    ingredients: [
      "1 can chickpeas, drained and rinsed",
      "1/4 cup diced red onion",
      "1/4 cup diced celery",
      "2 tbsp vegan mayo or tahini",
      "1 tsp dijon mustard",
      "1 tbsp lemon juice",
      "1/4 tsp each salt and pepper",
      "Whole grain wraps or pita bread",
      "Lettuce leaves",
      "Sliced tomato",
    ],
    instructions: [
      "Mash chickpeas in a bowl with a fork, leaving some texture.",
      "Add onion, celery, mayo/tahini, mustard, lemon juice, salt, and pepper. Mix well.",
      "Spread mixture onto a wrap, top with lettuce and tomato.",
      "Roll up and enjoy immediately, or wrap in foil for lunch on the go.",
    ],
  },
  {
    id: 4,
    title: "7-Minute Microwave Sweet Potato",
    description: "A versatile base for a quick meal that can be topped with various plant-based ingredients.",
    prepTime: "2 minutes",
    cookTime: "5 minutes",
    ingredients: [
      "1 medium sweet potato",
      "1/2 can black beans, drained and rinsed",
      "1/4 avocado, sliced",
      "2 tbsp salsa",
      "1 tbsp nutritional yeast (optional)",
      "Fresh cilantro (optional)",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Wash sweet potato and pierce several times with a fork.",
      "Microwave on high for 5-7 minutes, turning halfway through, until soft.",
      "Split open and fluff the inside with a fork.",
      "Top with black beans, avocado, salsa, nutritional yeast, cilantro, salt, and pepper.",
    ],
  },
  {
    id: 5,
    title: "12-Minute Veggie Stir Fry",
    description: "A customizable stir fry that works with whatever vegetables you have on hand.",
    prepTime: "7 minutes",
    cookTime: "5 minutes",
    ingredients: [
      "2 cups mixed vegetables (bell peppers, broccoli, carrots, snow peas)",
      "1 block extra-firm tofu, cubed (or use pre-cubed tofu)",
      "2 tbsp soy sauce or tamari",
      "1 tbsp maple syrup",
      "1 tsp sriracha (optional)",
      "1 tsp sesame oil",
      "1 clove garlic, minced",
      "1 tsp grated ginger",
      "Pre-cooked rice or rice noodles",
    ],
    instructions: [
      "Heat sesame oil in a large pan over medium-high heat.",
      "Add tofu and cook for 2 minutes until lightly browned.",
      "Add vegetables, garlic, and ginger. Stir fry for 3 minutes.",
      "Mix soy sauce, maple syrup, and sriracha in a small bowl, then pour over the stir fry.",
      "Cook for 1 more minute, then serve over rice or noodles.",
    ],
  },
  {
    id: 6,
    title: "3-Minute Avocado Toast with Upgrades",
    description: "The classic avocado toast with flavorful additions to make it more satisfying and nutritious.",
    prepTime: "3 minutes",
    cookTime: "0 minutes",
    ingredients: [
      "2 slices whole grain bread",
      "1 ripe avocado",
      "1/4 cup microgreens or sprouts",
      "2 tbsp hemp seeds",
      "Red pepper flakes",
      "Lemon juice",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Toast bread to desired crispness.",
      "Mash avocado and spread on toast.",
      "Top with microgreens, hemp seeds, red pepper flakes, a squeeze of lemon juice, salt, and pepper.",
    ],
  },
  {
    id: 7,
    title: "8-Minute Mediterranean Hummus Bowl",
    description: "A no-cook meal that's packed with Mediterranean flavors and plant-based protein.",
    prepTime: "8 minutes",
    cookTime: "0 minutes",
    ingredients: [
      "1/2 cup hummus",
      "1 cup cucumber, diced",
      "1 cup cherry tomatoes, halved",
      "1/4 cup red onion, thinly sliced",
      "1/4 cup kalamata olives",
      "2 tbsp fresh parsley, chopped",
      "1 tbsp olive oil",
      "1 tbsp lemon juice",
      "Whole grain pita bread",
    ],
    instructions: [
      "Spread hummus in the bottom of a bowl.",
      "Arrange cucumber, tomatoes, red onion, and olives on top.",
      "Drizzle with olive oil and lemon juice.",
      "Sprinkle with parsley and serve with pita bread.",
    ],
  },
  {
    id: 8,
    title: "10-Minute Loaded Oatmeal",
    description: "A hearty breakfast that will keep you full all morning with minimal effort.",
    prepTime: "2 minutes",
    cookTime: "8 minutes",
    ingredients: [
      "1 cup rolled oats",
      "2 cups plant-based milk",
      "1 tbsp chia seeds",
      "1 tbsp maple syrup",
      "1/2 tsp cinnamon",
      "1/4 cup mixed berries",
      "1 tbsp nut butter",
      "2 tbsp chopped nuts or seeds",
    ],
    instructions: [
      "Combine oats, milk, chia seeds, maple syrup, and cinnamon in a microwave-safe bowl.",
      "Microwave on high for 2-3 minutes, stir, then microwave for another 1-2 minutes until desired consistency.",
      "Top with berries, nut butter, and chopped nuts or seeds.",
    ],
  },
  {
    id: 9,
    title: "5-Minute Veggie Wrap",
    description: "A grab-and-go lunch option that's fresh, crunchy, and satisfying.",
    prepTime: "5 minutes",
    cookTime: "0 minutes",
    ingredients: [
      "1 large whole grain tortilla",
      "3 tbsp hummus",
      "1 cup mixed greens",
      "1/4 cup grated carrot",
      "1/4 cup sliced bell pepper",
      "1/4 avocado, sliced",
      "2 tbsp sunflower seeds",
      "1 tbsp balsamic glaze (optional)",
    ],
    instructions: [
      "Spread hummus over the tortilla, leaving a small border around the edge.",
      "Layer greens, carrot, bell pepper, avocado, and sunflower seeds on top.",
      "Drizzle with balsamic glaze if using.",
      "Roll up tightly, tucking in the sides as you go.",
      "Cut in half and enjoy immediately or wrap in foil for later.",
    ],
  },
  {
    id: 10,
    title: "15-Minute One-Pot Pasta",
    description: "A simple pasta dish where everything cooks in one pot for minimal cleanup.",
    prepTime: "5 minutes",
    cookTime: "10 minutes",
    ingredients: [
      "8 oz whole grain pasta",
      "2 cups cherry tomatoes, halved",
      "2 cups baby spinach",
      "1/4 cup sun-dried tomatoes, chopped",
      "3 cloves garlic, minced",
      "1 tsp dried basil",
      "1/2 tsp red pepper flakes",
      "3 cups vegetable broth",
      "2 tbsp nutritional yeast",
      "1 tbsp olive oil",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Add pasta, cherry tomatoes, sun-dried tomatoes, garlic, basil, red pepper flakes, and vegetable broth to a large pot.",
      "Bring to a boil, then reduce heat and simmer for 8-10 minutes, stirring occasionally, until pasta is al dente and most of the liquid is absorbed.",
      "Stir in spinach and nutritional yeast until spinach is wilted.",
      "Drizzle with olive oil and season with salt and pepper before serving.",
    ],
  },
]

export default function QuickHealthyRecipesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-serif font-light mb-6">
              10 Quick and Healthy Recipes for Busy Professionals
            </h1>
            <p className="text-lg md:text-xl mb-8 text-green-100">
              Plant-based meals that can be prepared in 15 minutes or less, perfect for your busy lifestyle
            </p>
            <Link href="/resources/articles" className="inline-flex items-center text-green-200 hover:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-green max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Finding time to prepare healthy meals can be challenging when you're juggling a demanding career, but
              nourishing your body with wholesome plant-based foods is essential for maintaining energy, focus, and
              overall wellbeing throughout your busy day.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We've compiled 10 quick and easy plant-based recipes that require minimal prep time, simple ingredients,
              and little to no cooking expertise. Each recipe can be prepared in 15 minutes or less, making them perfect
              for busy mornings, lunch breaks, or weeknight dinners when you're short on time but don't want to
              compromise on nutrition.
            </p>
          </div>
        </div>
      </section>

      {/* Recipes */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-gray-900 mb-12 text-center">The Recipes</h2>

          <div className="space-y-16">
            {recipes.map((recipe) => (
              <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl md:text-2xl font-serif font-medium text-gray-900">{recipe.title}</h3>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>
                        {recipe.prepTime} prep | {recipe.cookTime} cook
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6">{recipe.description}</p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="flex items-center text-lg font-medium text-gray-900 mb-3">
                        <Utensils className="h-5 w-5 mr-2 text-green-600" />
                        Ingredients
                      </h4>
                      <ul className="space-y-2">
                        {recipe.ingredients.map((ingredient, index) => (
                          <li key={index} className="text-gray-700 flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            {ingredient}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-3">Instructions</h4>
                      <ol className="space-y-2 list-decimal list-inside">
                        {recipe.instructions.map((instruction, index) => (
                          <li key={index} className="text-gray-700">
                            {instruction}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-12 md:py-16 bg-green-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-gray-900 mb-8 text-center">
            Tips for Quick & Healthy Meal Prep
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Batch Cooking Basics</h3>
              <p className="text-gray-700 mb-4">
                Dedicate 1-2 hours on the weekend to prep ingredients or batch cook staples like grains, beans, and
                roasted vegetables. Store in containers in the refrigerator for quick assembly during the week.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Smart Shortcuts</h3>
              <p className="text-gray-700 mb-4">
                Don't hesitate to use time-saving ingredients like pre-cut vegetables, canned beans, frozen fruits, and
                pre-cooked grains. These convenience items can significantly reduce prep time without compromising
                nutrition.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-3">One-Pot Wonders</h3>
              <p className="text-gray-700 mb-4">
                Embrace one-pot or one-pan meals that minimize cleanup. Sheet pan dinners, stir-fries, and skillet meals
                are perfect for busy weeknights and can be customized based on what you have available.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Freezer-Friendly Options</h3>
              <p className="text-gray-700 mb-4">
                When you do have time to cook, make double batches and freeze portions for future meals. Soups, stews,
                and casseroles freeze well and can be lifesavers on particularly hectic days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-gray-900 mb-6">
            Ready to Transform Your Meals?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Explore more plant-based recipes and nutrition tips to support your busy lifestyle while prioritizing your
            health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <Link href="/resources/meal-planning" className="text-white">
                Explore Meal Planning
              </Link>
            </Button>
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              <Link href="/resources/articles" className="text-green-600">
                Browse More Articles
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
