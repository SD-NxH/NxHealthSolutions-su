import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cabbage | NxHealth",
  description:
    "Learn about the nutritional benefits and culinary uses of cabbage, a versatile cruciferous vegetable packed with vitamins and antioxidants.",
}

export default function CabbagePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative h-[300px] md:h-[400px] w-full mb-8 rounded-xl overflow-hidden">
        <Image src="/vibrant-cabbage.png" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl md:text-5xl font-serif text-white mb-2">Cabbage</h1>
            <div className="flex items-center text-white/80 text-sm">
              <span>Cruciferous Vegetable</span>
              <span className="mx-2">•</span>
              <span>Nutritional Powerhouse</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <section>
            <h2 className="text-2xl font-serif text-green-800 mb-4">About Cabbage</h2>
            <p className="text-gray-700 mb-4">
              Cabbage (Brassica oleracea var. capitata) is a leafy green, red, or white biennial plant grown as an
              annual vegetable crop for its dense-leaved heads. It is a member of the "cole crops" or brassicas, meaning
              it is closely related to broccoli, cauliflower, and Brussels sprouts.
            </p>
            <p className="text-gray-700 mb-4">
              Cabbage heads generally range from 0.5 to 4 kg (1 to 9 lb), and can be green, purple or white.
              Smooth-leafed, firm-headed green cabbages are the most common, but savoy, red, and Napa varieties are also
              popular. Cabbage is a versatile vegetable that can be prepared in numerous ways, including raw in salads
              and slaws, fermented as sauerkraut or kimchi, or cooked in soups, stews, and stir-fries.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-green-800 mb-4">Nutritional Benefits</h2>
            <p className="text-gray-700 mb-4">
              Cabbage is an excellent source of vitamin C and vitamin K. It also contains significant amounts of dietary
              fiber, folate, and manganese. Additionally, cabbage is rich in antioxidants, including polyphenols and
              sulfur compounds, which have been linked to reduced inflammation and a lower risk of certain diseases.
            </p>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-medium text-green-800 mb-2">Nutritional Value per 100g of Raw Cabbage:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                <li>• Calories: 25</li>
                <li>• Carbohydrates: 5.8g</li>
                <li>• Fiber: 2.5g</li>
                <li>• Protein: 1.3g</li>
                <li>• Vitamin C: 36.6mg (61% DV)</li>
                <li>• Vitamin K: 76μg (95% DV)</li>
                <li>• Folate: 43μg (11% DV)</li>
                <li>• Manganese: 0.2mg (10% DV)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-green-800 mb-4">Health Benefits</h2>
            <p className="text-gray-700 mb-4">
              Cabbage offers numerous health benefits due to its rich nutrient profile and bioactive compounds:
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                <strong>Anti-inflammatory Properties:</strong> The antioxidants and anti-inflammatory compounds in
                cabbage may help reduce chronic inflammation.
              </li>
              <li>
                <strong>Digestive Health:</strong> The fiber content in cabbage promotes healthy digestion and may help
                prevent constipation.
              </li>
              <li>
                <strong>Heart Health:</strong> Regular consumption of cruciferous vegetables like cabbage is associated
                with a reduced risk of heart disease.
              </li>
              <li>
                <strong>Cancer Prevention:</strong> Cabbage contains glucosinolates, which are compounds that have been
                studied for their potential cancer-fighting properties.
              </li>
              <li>
                <strong>Immune Support:</strong> The high vitamin C content in cabbage helps support immune function.
              </li>
              <li>
                <strong>Bone Health:</strong> Vitamin K in cabbage plays a crucial role in bone metabolism and may help
                prevent osteoporosis.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-green-800 mb-4">Culinary Uses</h2>
            <p className="text-gray-700 mb-4">
              Cabbage is incredibly versatile in the kitchen and can be prepared in numerous ways:
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                <strong>Raw:</strong> Shredded in salads, slaws, or as a crunchy topping for tacos and sandwiches.
              </li>
              <li>
                <strong>Fermented:</strong> Transformed into sauerkraut, kimchi, or other fermented dishes that provide
                probiotic benefits.
              </li>
              <li>
                <strong>Cooked:</strong> Sautéed, stir-fried, braised, or added to soups and stews.
              </li>
              <li>
                <strong>Stuffed:</strong> Whole leaves can be blanched and used as wrappers for various fillings.
              </li>
              <li>
                <strong>Roasted:</strong> Cut into wedges and roasted for a caramelized flavor.
              </li>
              <li>
                <strong>Juiced:</strong> Combined with other vegetables and fruits for nutritious juices.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-green-800 mb-4">Selection and Storage</h2>
            <p className="text-gray-700 mb-4">
              When selecting cabbage, look for heads that feel heavy for their size with crisp, colorful leaves. Avoid
              cabbages with discolored leaves, visible damage, or signs of decay. Store whole cabbage heads in the
              refrigerator, where they can last for several weeks. Once cut, wrap the remaining portion tightly in
              plastic wrap and refrigerate for up to a week.
            </p>
          </section>
        </div>

        <div className="md:col-span-1 space-y-6">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium text-green-800 mb-3">Quick Facts</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Cabbage is one of the oldest known vegetables, dating back to the 1600s BCE.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>China is the world's largest producer of cabbage.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>There are over 400 different varieties of cabbage grown around the world.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Red cabbage contains more antioxidants than green cabbage.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Cabbage is a good source of glutamine, an amino acid that has anti-inflammatory properties.</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium text-green-800 mb-3">Seasonal Availability</h3>
            <p className="text-gray-700 mb-4">
              Cabbage is available year-round, but it's at its peak during late fall and winter months. Different
              varieties may have different peak seasons.
            </p>
            <div className="grid grid-cols-4 gap-1 text-center text-sm">
              <div className="bg-green-200 p-2 rounded">Jan</div>
              <div className="bg-green-200 p-2 rounded">Feb</div>
              <div className="bg-green-100 p-2 rounded">Mar</div>
              <div className="bg-green-100 p-2 rounded">Apr</div>
              <div className="bg-white p-2 rounded border border-green-100">May</div>
              <div className="bg-white p-2 rounded border border-green-100">Jun</div>
              <div className="bg-white p-2 rounded border border-green-100">Jul</div>
              <div className="bg-white p-2 rounded border border-green-100">Aug</div>
              <div className="bg-green-100 p-2 rounded">Sep</div>
              <div className="bg-green-100 p-2 rounded">Oct</div>
              <div className="bg-green-200 p-2 rounded">Nov</div>
              <div className="bg-green-200 p-2 rounded">Dec</div>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium text-green-800 mb-3">Recipe Ideas</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">→</span>
                <span>Classic Coleslaw with Creamy Dressing</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">→</span>
                <span>Homemade Sauerkraut</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">→</span>
                <span>Stuffed Cabbage Rolls</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">→</span>
                <span>Cabbage and Potato Soup</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">→</span>
                <span>Roasted Cabbage Steaks</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">→</span>
                <span>Asian-Inspired Cabbage Stir-Fry</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
