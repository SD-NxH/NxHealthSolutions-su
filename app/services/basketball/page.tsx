"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, Users, Dumbbell, ChevronDown, Phone, CheckCircle } from "lucide-react"

export default function BasketballPage() {
  const [showSkipButton, setShowSkipButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercentage = (scrollPosition / pageHeight) * 100

      // Show button after scrolling 35-45% of the page
      setShowSkipButton(scrollPercentage > 35)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToPackages = () => {
    const packagesSection = document.getElementById("packages")
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Floating Skip to Packages Button */}
      <button
        onClick={scrollToPackages}
        className={`fixed right-8 top-1/2 -translate-y-1/2 z-50 px-6 py-3 rounded-full border-2 border-brand bg-background/80 backdrop-blur-sm text-brand font-medium shadow-lg hover:bg-brand hover:text-brand-foreground transition-all duration-300 hidden md:flex items-center gap-2 ${
          showSkipButton ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8 pointer-events-none"
        }`}
        aria-label="Skip to Packages and Pricing"
      >
        Skip to Pricing
        <ChevronDown className="h-4 w-4" />
      </button>

      {/* Mobile Skip Button */}
      <button
        onClick={scrollToPackages}
        className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden px-6 py-3 rounded-full border-2 border-brand bg-background/90 backdrop-blur-sm text-brand font-medium shadow-lg hover:bg-brand hover:text-brand-foreground transition-all duration-300 flex items-center gap-2 ${
          showSkipButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
        }`}
        aria-label="Skip to Packages and Pricing"
      >
        Skip to Pricing
        <ChevronDown className="h-4 w-4" />
      </button>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-brand-lighter via-background to-brand-light/20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Basketball Performance & Media
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Coaching • Training • Sports Photography & Film
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Where basketball performance meets sustainable health—so you play better, longer, and with less burnout.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-brand hover:bg-brand-hover text-brand-foreground rounded-full px-8">
                Book a Call
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToPackages}
                className="border-brand text-brand hover:bg-brand-lighter rounded-full px-8 bg-transparent"
              >
                View Packages
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What We Offer</h2>
              <p className="text-lg text-muted-foreground">Comprehensive basketball services to elevate your game</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Sports Photography & Film */}
              <Card className="border-brand-light hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="h-8 w-8 text-brand" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Sports Photography & Film</h3>
                  <p className="text-muted-foreground">Game action, highlights, athlete branding, recruiting content</p>
                </CardContent>
              </Card>

              {/* Coaching */}
              <Card className="border-brand-light hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-brand" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Coaching</h3>
                  <p className="text-muted-foreground">
                    Skill development, IQ, accountability, leadership & confidence
                  </p>
                </CardContent>
              </Card>

              {/* Training */}
              <Card className="border-brand-light hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Dumbbell className="h-8 w-8 text-brand" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Training</h3>
                  <p className="text-muted-foreground">
                    Performance training focused on durability, speed, mobility, and longevity
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">My Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                I've been playing basketball since I was four years old. I had the blessing of being trained and coached
                by many successful and influential people. I had the opportunity to win championships and be part of
                winning programs. I played in high school and college, and I was able to play professionally—while
                maintaining great health.
              </p>
              <p>
                Even though I'm now deeply in the nutrition, health, and wellness space, I can't forget where I came
                from. Linking these two worlds is how I deliver the highest value. When you start eating a certain way,
                your performance improves. When you start making better lifestyle choices, your durability increases.
                That means better performance, fewer injuries, less burnout—and more time loving the sport you fell in
                love with in the first place.
              </p>
              <p>
                Basketball is an art that I love. I will always love it. I'm forever indebted to the game. I teach,
                coach, and give back because I had great coaches and teachers who helped me reach places I never thought
                I'd go—and I want to help others do the same.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="py-12 bg-brand-light">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Want to see packages and pricing?</h3>
            <Button
              size="lg"
              onClick={scrollToPackages}
              className="bg-brand hover:bg-brand-hover text-brand-foreground rounded-full px-8"
            >
              Skip to Packages
            </Button>
          </div>
        </div>
      </section>

      {/* Packages / Pricing Section */}
      <section id="packages" className="py-16 bg-background scroll-mt-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Packages & Pricing</h2>
              <p className="text-lg text-muted-foreground">Choose the package that fits your goals</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Media Package */}
              <Card className="border-brand hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Media Package</h3>
                  <div className="text-3xl font-bold text-brand mb-6">Contact for pricing</div>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Game action photography</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Highlight reels & film</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Athlete branding content</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Recruiting content</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    <strong>Ideal for:</strong> Athletes looking to build their brand and showcase their skills
                  </p>
                  <Button className="w-full bg-brand hover:bg-brand-hover text-brand-foreground rounded-full">
                    Request Availability
                  </Button>
                </CardContent>
              </Card>

              {/* Coaching Package */}
              <Card className="border-brand hover:shadow-xl transition-shadow ring-2 ring-brand">
                <CardContent className="p-8">
                  <div className="text-xs font-semibold text-brand uppercase tracking-wider mb-2">Most Popular</div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Coaching Package</h3>
                  <div className="text-3xl font-bold text-brand mb-6">Contact for pricing</div>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Skill development sessions</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Basketball IQ training</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Accountability & mentorship</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Leadership & confidence building</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    <strong>Ideal for:</strong> Players who want to elevate their game and mental approach
                  </p>
                  <Button className="w-full bg-brand hover:bg-brand-hover text-brand-foreground rounded-full">
                    Book a Call
                  </Button>
                </CardContent>
              </Card>

              {/* Training Package */}
              <Card className="border-brand hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Training Package</h3>
                  <div className="text-3xl font-bold text-brand mb-6">Contact for pricing</div>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Performance training</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Speed & agility work</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Mobility & flexibility</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Injury prevention & durability</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    <strong>Ideal for:</strong> Athletes focused on long-term performance and staying healthy
                  </p>
                  <Button className="w-full bg-brand hover:bg-brand-hover text-brand-foreground rounded-full">
                    Request Availability
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-semibold text-foreground mb-2">Who is this for?</h3>
                <p className="text-muted-foreground">
                  These services are for basketball players of all levels—from youth to professional—who want to improve
                  their skills, capture their game, or optimize their performance through better training and nutrition.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-semibold text-foreground mb-2">Do you travel?</h3>
                <p className="text-muted-foreground">
                  Yes! For media coverage and certain training packages, travel can be arranged. Contact us to discuss
                  your specific needs and location.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-semibold text-foreground mb-2">Can you bundle training + media?</h3>
                <p className="text-muted-foreground">
                  We offer custom packages that combine coaching, training, and media services. This is perfect for
                  athletes who want comprehensive support.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-semibold text-foreground mb-2">How do I book?</h3>
                <p className="text-muted-foreground">
                  Click any "Book a Call" or "Request Availability" button to schedule a free consultation. We'll
                  discuss your goals and find the best package for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Footer */}
      <section className="py-20 bg-gradient-to-br from-brand to-brand-dark text-brand-foreground">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to level up performance and longevity?</h2>
            <p className="text-lg mb-8 opacity-90">
              Let's work together to elevate your game while building sustainable health habits
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-background text-brand hover:bg-brand-lighter rounded-full px-8">
                <Phone className="h-5 w-5 mr-2" />
                Book a Call
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToPackages}
                className="border-brand-foreground text-brand-foreground hover:bg-brand-foreground hover:text-brand rounded-full px-8 bg-transparent"
              >
                View Packages
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
