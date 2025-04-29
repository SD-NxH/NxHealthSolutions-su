import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export const metadata = {
  title: "Durian | NxHealth",
  description: "Learn about the nutritional benefits and health properties of durian, the king of fruits",
}

export default function DurianPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="relative w-full py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Link href="/resources/d" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Foods Starting with D
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-green-800 mb-4">Durian</h1>
            <p className="text-xl text-gray-600">
              Explore the controversial "King of Fruits" - known for its strong aroma but packed with nutrients and
              unique flavor
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image src="/spiky-durian.png" alt="Fresh durian fruit" fill className="object-cover" priority />
            </div>

            <div className="prose prose-green max-w-none">
              <h2 className="text-2xl font-serif text-green-800 mb-4">Nutritional Profile</h2>

              <p className="text-gray-700 mb-6">
                Durian is exceptionally nutrient-dense, containing high levels of energy, minerals, and vitamins. A 100g
                serving of durian provides: significant amounts of carbohydrates (27g), dietary fiber (3.8g), protein
                (1.5g), and healthy fats (5g). It's particularly rich in potassium, manganese, copper, iron, and
                magnesium. Durian also contains B-vitamins including thiamin (B1), riboflavin (B2), niacin (B3),
                pantothenic acid (B5), pyridoxine (B6), and folate (B9).
              </p>

              <h2 className="text-2xl font-serif text-green-800 mb-4">Health Benefits</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Energy Booster</h3>
                  <p className="text-gray-700">
                    With its high carbohydrate and fat content, durian provides a significant energy boost, making it an
                    excellent natural energy source.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Digestive Health</h3>
                  <p className="text-gray-700">
                    The fiber content in durian supports healthy digestion and may help prevent constipation and promote
                    regular bowel movements.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Blood Pressure Regulation</h3>
                  <p className="text-gray-700">
                    Durian's high potassium content helps regulate blood pressure and maintain proper heart function.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Fertility Support</h3>
                  <p className="text-gray-700">
                    In some traditional medicine systems, durian is considered to have aphrodisiac properties and may
                    support reproductive health.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-serif text-green-800 mb-4">How to Incorporate Durian in Your Diet</h2>

              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Enjoy fresh durian as a dessert or snack (when in season)</li>
                <li>Add durian to smoothies for a creamy texture and unique flavor</li>
                <li>Use durian in traditional Southeast Asian desserts like sticky rice with durian</li>
                <li>Try durian ice cream or pastries for a milder introduction to the flavor</li>
                <li>Incorporate durian into pancakes or waffles for a tropical twist</li>
              </ul>

              <div className="bg-green-100 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-medium text-green-800 mb-2">Did You Know?</h3>
                <p className="text-gray-700">
                  Durian is banned in many hotels, public transportation, and enclosed public spaces throughout
                  Southeast Asia due to its strong smell. Despite this, it's considered a delicacy and is often called
                  the "king of fruits" for its unique taste and creamy texture.
                </p>
              </div>

              <h2 className="text-2xl font-serif text-green-800 mb-4">Cautions and Considerations</h2>

              <p className="text-gray-700 mb-6">
                Durian is high in calories and natural sugars, so it should be consumed in moderation, especially for
                those monitoring their calorie intake or blood sugar levels. Some people may experience heartburn after
                eating durian due to its high fat content. Additionally, there's a folk belief that consuming durian
                with alcohol can cause digestive discomfort or even be dangerous, though scientific evidence for this is
                limited.
              </p>

              <h2 className="text-2xl font-serif text-green-800 mb-4">Selecting and Storing</h2>

              <p className="text-gray-700">
                When selecting a durian, look for one with a strong, pungent smell (a sign of ripeness) and a stem
                that's still slightly green. The shell should yield slightly when pressed gently. Store unopened durian
                at room temperature if you plan to consume it within a day or two. Once opened, refrigerate the flesh in
                an airtight container for up to three days, or freeze it for longer storage.
              </p>
            </div>

            <div className="mt-12 flex justify-center">
              <Link href="/resources/d">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Back to Foods Starting with D
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
