"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function SecretEatingToSobrietyClientPage() {
  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <Link href="/resources/articles" className="inline-flex items-center text-brand hover:text-brand-hover mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Articles
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-dark to-brand text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-brand-lighter mb-4">
              <span className="text-sm font-semibold uppercase tracking-wider">Wellness</span>
              <span>•</span>
              <span className="text-sm">8 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-light mb-6 leading-tight">
              From Secret Eating to Sobriety: One Woman's Journey to Lasting Health
            </h1>
            <p className="text-lg md:text-xl text-brand-lighter mb-8 leading-relaxed">
              A powerful story of transformation from addiction and disordered eating to lasting health and sobriety.
            </p>
            <div className="flex items-center gap-6 text-brand-lighter">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">May 27, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="text-sm">NxHealth Team</span>
              </div>
            </div>

            {/* Spotify Player Section */}
            <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">🎧 Listen to the Full Story</h3>
                  <p className="text-brand-lighter text-sm">
                    Hear this powerful journey in the guest's own words on our podcast.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="bg-brand hover:bg-brand-hover text-brand-foreground border-0">
                    <a
                      href="https://open.spotify.com/episode/0U81StuxRDj6y9lNen4NQT?si=IUok-FFVSTG20pooinPgdg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                      </svg>
                      Listen on Spotify
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                    onClick={() => {
                      const iframe = document.getElementById("spotify-embed") as HTMLIFrameElement
                      if (iframe) {
                        iframe.style.display = iframe.style.display === "none" ? "block" : "none"
                      }
                    }}
                  >
                    Play Here
                  </Button>
                </div>
              </div>

              {/* Embedded Spotify Player */}
              <iframe
                id="spotify-embed"
                style={{ display: "none" }}
                src="https://open.spotify.com/embed/episode/0U81StuxRDj6y9lNen4NQT?utm_source=generator&theme=0"
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="mt-4 rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {/* Hero Image */}
              <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden">
                <Image
                  src="/weight-scale-measuring-tape.png"
                  alt="Vintage kitchen scale with measuring tape symbolizing the weight loss journey"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="text-muted-foreground leading-relaxed space-y-6">
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  Growing up in New York, a woman (who chose to remain anonymous for this article) faced a lifelong
                  battle with her weight, cycling through "every diet imaginable." This struggle, intertwined with a
                  secret eating habit developed from a young age, laid a challenging foundation. Her journey further
                  complicated by addiction, starting with alcohol at 15 and later progressing to drugs in her late
                  twenties and early thirties, ultimately led to a critical turning point.
                </p>

                <p>
                  "I was a blackout drinker," she revealed, detailing how alcohol led to promiscuity and actions she
                  isn't proud of. Her later addiction to crystal meth, initially driven by its appetite-suppressing
                  effects, resulted in significant weight loss (up to 145 pounds) but at a profound cost to her health
                  and life, culminating in job loss and stealing.
                </p>

                <h2 className="text-2xl md:text-3xl font-serif font-medium text-foreground mt-12 mb-6">
                  The "Aha!" Moment and a New Beginning
                </h2>

                <p>
                  The true turning point came in 2015. After hitting rock bottom and seeking treatment in Mississippi, a
                  relapse early in her sobriety journey served as a powerful catalyst. "Something clicked in my head,"
                  she recalled, realizing the depth of her problem and the necessity of genuine sobriety. This
                  commitment led to 10 months in a sober living house and a remarkable career path, now working as an
                  alumni coordinator for the very facility that helped her. She celebrates nine years of working there
                  this April, with ten years of sobriety approaching in September.
                </p>

                <Card className="my-8 bg-brand-lighter border-brand/30">
                  <CardContent className="p-6">
                    <blockquote className="text-lg italic text-brand-dark">
                      "Something clicked in my head. I realized the depth of my problem and the necessity of genuine
                      sobriety."
                    </blockquote>
                  </CardContent>
                </Card>

                <h2 className="text-2xl md:text-3xl font-serif font-medium text-foreground mt-12 mb-6">
                  Weight Loss: A Long-Term Commitment
                </h2>

                <p>
                  Her weight loss journey has been equally transformative, albeit with its own set of lessons. Initially
                  losing 110 pounds for a friend's wedding in 1997 through Weight Watchers and daily treadmill use, the
                  weight slowly crept back as old habits resurfaced. After sobriety, her focus shifted, and she gained
                  some weight back, reaching 200 pounds by July last year.
                </p>

                <p>
                  Rejecting quick fixes like weight loss drugs, which she believes are unsustainable, she returned to
                  Weight Watchers. "Once I stopped trying to scheme how I could lose weight fast, I decided to go back
                  to my go-to, which was Weight Watchers, and lose weight the right way," she explained.
                </p>

                <div className="my-8 relative aspect-video max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/weight-scale-measuring-tape.png"
                    alt="Vintage scale with measuring tape symbolizing the weight loss journey"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-2 text-center">
                    The journey of weight management requires patience, consistency, and the right tools
                  </div>
                </div>

                <p>
                  Since last July, she has lost an impressive 65 pounds, now weighing 135.8 pounds. Her current routine
                  includes 4.5 miles on the treadmill both Saturday and Sunday, abdominal crunches, and 30 minutes of
                  chair aerobics daily. Beyond exercise, her approach emphasizes mindful eating: prioritizing protein,
                  limiting bread, and making conscious choices, including preparing her own meals.
                </p>

                <div className="bg-muted p-6 rounded-lg my-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Her Current Wellness Routine</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 4.5 miles on treadmill (Saturday & Sunday)</li>
                    <li>• Daily abdominal crunches</li>
                    <li>• 30 minutes of chair aerobics daily</li>
                    <li>• Prioritizing protein in meals</li>
                    <li>• Limiting bread consumption</li>
                    <li>• Preparing her own meals</li>
                  </ul>
                </div>

                <h2 className="text-2xl md:text-3xl font-serif font-medium text-foreground mt-12 mb-6">
                  Mind, Movement, Food, and Collaboration
                </h2>

                <p>
                  Her experience highlights that sustainable health isn't about deprivation but about mindfulness and
                  consistency. "If you truly want to keep the weight off, you have to realize that it's a lifelong
                  journey," she stressed, drawing parallels to her sobriety.
                </p>

                <p>
                  The conversation underscored the importance of mind, movement, and food as pillars of health.
                  Crucially, it also emphasized collaboration. "You can't do it by yourself. Matter of fact, I don't
                  think you can do anything by yourself in this world," she noted, praising the supportive community
                  Weight Watchers provides.
                </p>

                <Card className="my-8 bg-primary/10 border-primary/30">
                  <CardContent className="p-6">
                    <blockquote className="text-lg italic text-primary">
                      "If you truly want to keep the weight off, you have to realize that it's a lifelong journey."
                    </blockquote>
                  </CardContent>
                </Card>

                <p>
                  Now, at 56, she feels healthier than ever, with plans for skin removal surgery to complete her
                  physical transformation. Her story is a testament to the power of commitment, the wisdom gained from
                  past struggles, and the profound impact of making consistent, healthy choices for a better quality of
                  life.
                </p>

                <Separator className="my-12" />

                <div className="bg-brand-lighter p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Key Takeaways from This Journey</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-brand-dark mb-2">Recovery Principles</h4>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• Genuine commitment to change</li>
                        <li>• Community support is essential</li>
                        <li>• Professional help when needed</li>
                        <li>• Long-term perspective</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-dark mb-2">Wellness Approach</h4>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• Mindful eating over quick fixes</li>
                        <li>• Consistent exercise routine</li>
                        <li>• Meal preparation and planning</li>
                        <li>• Sustainable lifestyle changes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif font-medium text-foreground mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <span className="text-xs font-semibold text-brand uppercase tracking-wider">Wellness</span>
                  <h3 className="text-lg font-serif font-medium text-foreground mt-2 mb-3">
                    Mindfulness Practices for Daily Wellness
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Simple mindfulness techniques you can incorporate into your daily routine for better mental health.
                  </p>
                  <Link href="/resources/articles/mindfulness-practice" className="text-brand font-medium text-sm">
                    Read Article →
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <span className="text-xs font-semibold text-brand uppercase tracking-wider">Health</span>
                  <h3 className="text-lg font-serif font-medium text-foreground mt-2 mb-3">
                    Understanding Your Caloric Needs
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Find out how to calculate your daily caloric needs and create a balanced nutrition plan.
                  </p>
                  <Link
                    href="/resources/articles/understanding-caloric-needs"
                    className="text-brand font-medium text-sm"
                  >
                    Read Article →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-brand-lighter">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-serif font-medium text-foreground mb-4">
              Need Support on Your Wellness Journey?
            </h2>
            <p className="text-muted-foreground mb-6">
              Our team of nutrition and wellness experts is here to help you create a sustainable path to health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-brand hover:bg-brand-hover">
                <Link href="/services">Explore Our Services</Link>
              </Button>
              <Button variant="outline" asChild className="border-brand text-brand bg-transparent">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
