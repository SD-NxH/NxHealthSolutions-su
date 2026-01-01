"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bell, Mail } from "lucide-react"
import { useState } from "react"

export default function CuisinesPage() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)
  const [statusMessage, setStatusMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // In a real app, you would call a server action or API endpoint here
      // For now, we'll simulate a successful submission after a delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Simulate successful submission
      setSubmitStatus("success")
      setStatusMessage("Thank you! You'll be notified when our cuisine guides are ready.")
      setEmail("")
    } catch (error) {
      setSubmitStatus("error")
      setStatusMessage("Something went wrong. Please try again.")
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-lighter to-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-brand-dark mb-6">
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
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-brand-lighter text-brand-dark rounded-full text-sm font-medium mb-6">
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
              <Card className="bg-brand-lighter border-0">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-3">Healthy Recipes</h3>
                  <p className="text-gray-600">
                    Nutritionally balanced recipes that honor traditional flavors while supporting your health goals.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-brand-lighter border-0">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-3">Food Recommendations</h3>
                  <p className="text-gray-600">
                    Discover the healthiest options from each cuisine and learn how to incorporate them into your diet.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-brand-lighter border-0">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-3">Cultural Context</h3>
                  <p className="text-gray-600">
                    Learn about the cultural significance of foods and how traditional eating patterns support health.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-brand-lighter rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-medium mb-4">Get Notified When We Launch</h3>
              <p className="text-gray-600 mb-6">
                Be the first to know when our cuisine guides are ready. We'll send you exclusive recipes and early
                access.
              </p>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex gap-2">
                  <div className="relative flex-grow">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      type="email"
                      placeholder="Your email address"
                      className="pl-10 py-6 rounded-full"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="bg-brand hover:bg-brand-hover text-white rounded-full px-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing
                      </span>
                    ) : (
                      <>
                        <Bell className="h-5 w-5 mr-2" />
                        Notify Me
                      </>
                    )}
                  </Button>
                </div>

                {submitStatus && (
                  <div
                    className={`mt-4 text-center ${submitStatus === "success" ? "text-brand-dark" : "text-destructive"}`}
                  >
                    {statusMessage}
                  </div>
                )}
              </form>
            </div>

            <Link href="/resources">
              <Button variant="outline" className="rounded-full bg-transparent">
                Back to Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-16 bg-brand-lighter">
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
              <div key={cuisine} className="bg-background rounded-lg p-4 text-center shadow-sm">
                <p className="font-medium text-brand-dark">{cuisine}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
