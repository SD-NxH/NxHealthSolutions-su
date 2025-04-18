import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export default function DillPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back Navigation */}
      <div className="mb-8">
        <Link href="/resources/d" className="inline-flex items-center text-green-600 hover:text-green-700">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to D Foods
        </Link>
      </div>

      {/* Hero Section */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-light text-green-800 mb-6">Dill</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Dill (Anethum graveolens) is a versatile herb with feathery green leaves and a distinctive flavor. It has
              been used for culinary and medicinal purposes for centuries, adding a fresh, tangy taste to many dishes
              while providing numerous health benefits.
            </p>
            <div className="bg-green-50 p-6 rounded-lg">
              <h2 className="text-xl font-medium text-green-800 mb-4">Quick Facts</h2>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    ✓
                  </span>
                  <span>
                    <strong>Family:</strong> Apiaceae (same as carrots, celery, and parsley)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    ✓
                  </span>
                  <span>
                    <strong>Origin:</strong> Mediterranean and Western Asia
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    ✓
                  </span>
                  <span>
                    <strong>Season:</strong> Spring through Fall (peak in Summer)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    ✓
                  </span>
                  <span>
                    <strong>Taste:</strong> Fresh, tangy, slightly sweet with hints of anise
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/vibrant-dill.png"
              alt="Fresh Dill herb with feathery green leaves"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Nutritional Information */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-light text-green-800 mb-6">Nutritional Value</h2>
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-medium text-green-800 mb-4 border-b border-green-100 pb-2">Vitamins</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    ✓
                  </span>
                  <div>
                    <span className="font-medium">Vitamin A</span>
                    <p className="text-sm text-gray-600">Supports vision and immune function</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    ✓
                  </span>
                  <div>
                    <span className="font-medium">Vitamin C</span>
                    <p className="text-sm text-gray-600">Antioxidant that supports immune health</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    ✓
                  </span>
                  <div>
                    <span className="font-medium">Folate</span>
                    <p className="text-sm text-gray-600">Important for cell division and DNA synthesis</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    ✓
                  </span>
                  <div>
                    <span className="font-medium">Vitamin B6</span>
                    <p className="text-sm text-gray-600">Supports brain development and function</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-green-800 mb-4 border-b border-green-100 pb-2">Minerals</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    ✓
                  </span>
                  <div>
                    <span className="font-medium">Calcium</span>
                    <p className="text-sm text-gray-600">Essential for bone health and muscle function</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    ✓
                  </span>
                  <div>
                    <span className="font-medium">Iron</span>
                    <p className="text-sm text-gray-600">Helps transport oxygen throughout the body</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    ✓
                  </span>
                  <div>
                    <span className="font-medium">Magnesium</span>
                    <p className="text-sm text-gray-600">Supports muscle and nerve function</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    ✓
                  </span>
                  <div>
                    <span className="font-medium">Manganese</span>
                    <p className="text-sm text-gray-600">Important for metabolism and bone development</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-green-800 mb-4 border-b border-green-100 pb-2">
                Other Nutrients
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    ✓
                  </span>
                  <div>
                    <span className="font-medium">Antioxidants</span>
                    <p className="text-sm text-gray-600">Help protect cells from damage</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    ✓
                  </span>
                  <div>
                    <span className="font-medium">Flavonoids</span>
                    <p className="text-sm text-gray-600">Plant compounds with anti-inflammatory properties</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    ✓
                  </span>
                  <div>
                    <span className="font-medium">Essential Oils</span>
                    <p className="text-sm text-gray-600">Provide aroma and potential health benefits</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    ✓
                  </span>
                  <div>
                    <span className="font-medium">Dietary Fiber</span>
                    <p className="text-sm text-gray-600">Supports digestive health</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Health Benefits */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-light text-green-800 mb-6">Health Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-green-800 mb-2">Digestive Health</h3>
            <p className="text-gray-700">
              Dill has been traditionally used to soothe digestive issues, including gas and bloating. It can help
              stimulate digestive juices and ease stomach discomfort.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-green-800 mb-2">Antimicrobial Properties</h3>
            <p className="text-gray-700">
              Dill contains compounds that may help fight certain bacteria and fungi, potentially helping to prevent
              infections and support the immune system.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-green-800 mb-2">Bone Health</h3>
            <p className="text-gray-700">
              The calcium content in dill contributes to maintaining strong bones and may help prevent osteoporosis when
              consumed as part of a balanced diet.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-green-800 mb-2">Stress Reduction</h3>
            <p className="text-gray-700">
              Compounds in dill may have calming effects on the body, potentially helping to reduce stress and anxiety
              when consumed regularly.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-green-800 mb-2">Anti-inflammatory</h3>
            <p className="text-gray-700">
              The flavonoids in dill have anti-inflammatory properties that may help reduce inflammation in the body and
              alleviate symptoms of inflammatory conditions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4.93 19.07A10 10 0 0 1 2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10c-2.76 0-5.26-1.12-7.07-2.93"></path>
                <path d="m9 16 3-3 3 3"></path>
                <path d="M12 13V9"></path>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-green-800 mb-2">Respiratory Health</h3>
            <p className="text-gray-700">
              Dill has been used traditionally to help clear congestion and support respiratory health, particularly
              during seasonal changes or minor respiratory infections.
            </p>
          </div>
        </div>
      </div>

      {/* How to Use */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-light text-green-800 mb-6">How to Use Dill</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-medium text-green-800 mb-4">Culinary Uses</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                  ✓
                </span>
                <span>Add fresh dill to salads for a burst of flavor</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                  ✓
                </span>
                <span>Use in fish dishes, especially salmon and trout</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                  ✓
                </span>
                <span>Mix into yogurt-based sauces and dips</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                  ✓
                </span>
                <span>Add to potato dishes for a refreshing taste</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                  ✓
                </span>
                <span>Use in pickling recipes, especially for cucumbers</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                  ✓
                </span>
                <span>Incorporate into egg dishes like omelets and frittatas</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-medium text-green-800 mb-4">Preparation Tips</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                  ✓
                </span>
                <span>Add dill at the end of cooking to preserve its flavor</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                  ✓
                </span>
                <span>Use both the feathery leaves and stems for maximum flavor</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                  ✓
                </span>
                <span>Dried dill is more concentrated than fresh (1 tsp dried = 1 tbsp fresh)</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                  ✓
                </span>
                <span>Store fresh dill wrapped in damp paper towel in the refrigerator</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                  ✓
                </span>
                <span>Freeze chopped dill in ice cube trays with water or oil for later use</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                  ✓
                </span>
                <span>For best flavor, purchase dill with fresh, vibrant green fronds</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Recipes */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-light text-green-800 mb-6">Delicious Dill Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-medium text-green-800 mb-4">Cucumber Dill Salad</h3>
            <div className="mb-4">
              <h4 className="font-medium text-green-700 mb-2">Ingredients:</h4>
              <ul className="space-y-1">
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    •
                  </span>
                  <span>2 cucumbers, thinly sliced</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    •
                  </span>
                  <span>1/4 cup fresh dill, chopped</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    •
                  </span>
                  <span>1/3 cup plain Greek yogurt</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    •
                  </span>
                  <span>1 tablespoon lemon juice</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    •
                  </span>
                  <span>1 clove garlic, minced</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    •
                  </span>
                  <span>Salt and pepper to taste</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-green-700 mb-2">Instructions:</h4>
              <ol className="space-y-1">
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    1
                  </span>
                  <span>In a large bowl, combine sliced cucumbers and chopped dill.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    2
                  </span>
                  <span>In a small bowl, mix yogurt, lemon juice, garlic, salt, and pepper.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    3
                  </span>
                  <span>Pour the dressing over the cucumbers and dill, and toss to coat evenly.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    4
                  </span>
                  <span>Refrigerate for at least 30 minutes before serving for best flavor.</span>
                </li>
              </ol>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-medium text-green-800 mb-4">Dill Salmon</h3>
            <div className="mb-4">
              <h4 className="font-medium text-green-700 mb-2">Ingredients:</h4>
              <ul className="space-y-1">
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    •
                  </span>
                  <span>4 salmon fillets (about 6 oz each)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    •
                  </span>
                  <span>3 tablespoons fresh dill, chopped</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    •
                  </span>
                  <span>2 tablespoons olive oil</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    •
                  </span>
                  <span>1 lemon, thinly sliced</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    •
                  </span>
                  <span>2 cloves garlic, minced</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    •
                  </span>
                  <span>Salt and pepper to taste</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-green-700 mb-2">Instructions:</h4>
              <ol className="space-y-1">
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    1
                  </span>
                  <span>Preheat oven to 375°F (190°C).</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    2
                  </span>
                  <span>Place salmon fillets on a baking sheet lined with parchment paper.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    3
                  </span>
                  <span>Brush salmon with olive oil and sprinkle with garlic, salt, and pepper.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    4
                  </span>
                  <span>Top each fillet with fresh dill and lemon slices.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    5
                  </span>
                  <span>Bake for 15-18 minutes until salmon flakes easily with a fork.</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Fun Facts */}
      <div className="bg-green-50 p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-serif font-light text-green-800 mb-6">Did You Know?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-700">
              The name "dill" comes from the Old Norse word "dilla," which means to lull or soothe, reflecting its
              traditional use as a remedy for digestive issues and insomnia.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-700">
              In ancient Egypt, dill was used as a soothing medicine and was also considered a sign of wealth. It was
              often used in Egyptian cooking over 5,000 years ago.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-700">
              Dill is a member of the Apiaceae family, which also includes carrots, celery, and parsley, all known for
              their aromatic properties and distinctive flavors.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-700">
              In medieval Europe, dill was believed to protect against witchcraft and was often used in charms and
              spells for protection and good fortune.
            </p>
          </div>
        </div>
      </div>

      {/* Growing Tips */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-light text-green-800 mb-6">Growing Your Own Dill</h2>
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium text-green-800 mb-4">Planting Tips</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    ✓
                  </span>
                  <span>Plant dill seeds directly in the garden after the last frost</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    ✓
                  </span>
                  <span>Choose a sunny location with well-draining soil</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    ✓
                  </span>
                  <span>Space seeds about 12 inches apart and cover with 1/4 inch of soil</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    ✓
                  </span>
                  <span>Dill can also be grown in containers at least 12 inches deep</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-green-800 mb-4">Care Instructions</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    ✓
                  </span>
                  <span>Water regularly but avoid overwatering</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    ✓
                  </span>
                  <span>Harvest leaves once plants reach 8 inches in height</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    ✓
                  </span>
                  <span>Allow some plants to flower for seed collection</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-2 mt-1">
                    ✓
                  </span>
                  <span>Dill is a self-seeding annual that can return year after year</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-serif font-light text-green-800 mb-6">Explore More</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild variant="outline" className="bg-white hover:bg-green-50">
            <Link href="/resources/d">More D Foods</Link>
          </Button>
          <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
            <Link href="/resources">All Resources</Link>
          </Button>
          <Button asChild variant="outline" className="bg-white hover:bg-green-50">
            <Link href="/get-started">Schedule a Consultation</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
