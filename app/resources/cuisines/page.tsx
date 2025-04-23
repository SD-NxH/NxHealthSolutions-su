import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bell, Mail } from "lucide-react"

export default function CuisinesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-green-800 mb-6">
              Explore World Cuisines
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover healthy recipes and food recommendations from around the world.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
              <div className="relative h-64 w-full">
                <Image
                  src="/vibrant-plant-based-spread.png"
                  alt="Colorful plant-based food spread"
                  fill
                  className="object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="relative h-64 w-full">
                <Image
                  src="/mediterranean-abundance.png"
                  alt="Mediterranean plant-based foods"
                  fill
                  className="object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              Coming Soon
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6">
              We're Cooking Up Something Special
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Our team of nutritionists and culinary experts are working to bring you a comprehensive collection of
              healthy recipes and food recommendations from cuisines around the world.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-green-50 border-0">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-3">Healthy Recipes</h3>
                  <p className="text-gray-600">
                    Nutritionally balanced recipes that honor traditional flavors while supporting your health goals.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-0">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-3">Food Recommendations</h3>
                  <p className="text-gray-600">
                    Discover the healthiest options from each cuisine and learn how to incorporate them into your diet.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-0">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-3">Cultural Context</h3>
                  <p className="text-gray-600">
                    Learn about the cultural significance of foods and how traditional eating patterns support health.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-green-100 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-medium mb-4">Get Notified When We Launch</h3>
              <p className="text-gray-600 mb-6">
                Be the first to know when our cuisine guides are ready. We'll send you exclusive recipes and early
                access.
              </p>

              <form className="max-w-md mx-auto">
                <div className="flex gap-2">
                  <div className="relative flex-grow">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input type="email" placeholder="Your email address" className="pl-10 py-6 rounded-full" required />
                  </div>
                  <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6">
                    <Bell className="h-5 w-5 mr-2" />
                    Notify Me
                  </Button>
                </div>
              </form>
            </div>

            <Link href="/resources">
              <Button variant="outline" className="rounded-full">
                Back to Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-16 bg-green-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6">Cuisines We'll Feature</h2>
            <p className="text-lg text-gray-600">
              Our guides will cover these cuisines and more, with a focus on their healthiest aspects.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Mediterranean",
              "Asian",
              "Latin American",
              "Middle Eastern",
              "African",
              "European",
              "Indian",
              "Plant-Based",
            ].map((cuisine) => (
              <div key={cuisine} className="bg-white rounded-lg p-4 text-center shadow-sm">
                <p className="font-medium text-green-800">{cuisine}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
