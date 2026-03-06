"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { Check, X, FileText, Users, Video } from "lucide-react"

export default function NxLifePage() {
  const heroRef = useRef(null)
  const brokenRef = useRef(null)
  const whatIsRef = useRef(null)
  const howItWorksRef = useRef(null)
  const whatIsNotRef = useRef(null)
  const foundingRef = useRef(null)
  const pricingRef = useRef(null)

  const isBrokenInView = useInView(brokenRef, { once: true, amount: 0.2 })
  const isWhatIsInView = useInView(whatIsRef, { once: true, amount: 0.2 })
  const isHowItWorksInView = useInView(howItWorksRef, { once: true, amount: 0.2 })
  const isWhatIsNotInView = useInView(whatIsNotRef, { once: true, amount: 0.2 })
  const isFoundingInView = useInView(foundingRef, { once: true, amount: 0.2 })
  const isPricingInView = useInView(pricingRef, { once: true, amount: 0.3 })

  const prefersReducedMotion = useReducedMotion()
  const [priceAnimationComplete, setPriceAnimationComplete] = useState(false)

  useEffect(() => {
    if (isPricingInView && !priceAnimationComplete) {
      const timer = setTimeout(() => {
        setPriceAnimationComplete(true)
      }, prefersReducedMotion ? 0 : 600)
      return () => clearTimeout(timer)
    }
  }, [isPricingInView, priceAnimationComplete, prefersReducedMotion])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full pt-24 pb-20 md:pt-32 md:pb-28"
      >
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold tracking-tight text-foreground mb-6 text-balance leading-tight">
              If Your Brain Is Your Income, Your Energy Is Your Leverage.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              NxLife is a private performance community for high-responsibility adults who are tired of being tired.
            </p>

            {/* Value Strip */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-12 py-6 border-y border-border/50">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-brand" />
                <span className="text-sm font-medium text-foreground">Weekly Health Solutions </span>
              </div>
              <div className="flex items-center gap-3">
                <Video className="w-5 h-5 text-brand" />
                <span className="text-sm font-medium text-foreground">Monthly Live Performance Lab</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-brand" />
                <span className="text-sm font-medium text-foreground">Private Performance Community</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/nxlive/apply">
                <Button className="bg-brand hover:bg-brand-hover text-brand-foreground rounded-full px-10 py-6 text-lg transition-all hover:shadow-lg">
                  Apply for NxLife
                </Button>
              </Link>
              <button
                onClick={() => scrollToSection("what-nxlife-is")}
                className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors flex items-center gap-1"
              >
                See what&apos;s inside
                <span className="text-xs">↓</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* You're Not Broken Section */}
      <section ref={brokenRef} className="py-24 md:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isBrokenInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-16 text-center">
              You&apos;re Not Broken
            </h2>
            
            <div className="space-y-12">
              <div className="text-center space-y-2">
                <p className="text-lg text-muted-foreground">You function.</p>
                <p className="text-lg text-muted-foreground">You show up.</p>
                <p className="text-lg text-muted-foreground">You carry responsibility.</p>
              </div>

              <div className="w-16 h-px bg-border mx-auto" />

              <div className="text-center space-y-2">
                <p className="text-lg text-foreground">But your energy is inconsistent.</p>
                <p className="text-lg text-foreground">You crash at 3PM.</p>
                <p className="text-lg text-foreground">You rely on caffeine.</p>
                <p className="text-lg text-foreground">You&apos;re mentally overloaded.</p>
              </div>

              <div className="w-16 h-px bg-border mx-auto" />

              <div className="text-center space-y-1">
                <p className="text-xl font-medium text-brand">You&apos;re not weak.</p>
                <p className="text-xl font-medium text-brand">You&apos;re running on broken systems.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What NxLife Is Section */}
      <section id="what-nxlife-is" ref={whatIsRef} className="py-24 md:py-32 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWhatIsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-16 text-center">
              What NxLife Is
            </h2>
            
            <div className="space-y-4">
              {[
                "Weekly Performance Brief",
                "Monthly Live Performance Lab",
                "Private Performance Community",
                "Direct Q&A Access",
                "Founding Member Lock-In Rate",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isWhatIsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-center gap-4 bg-background rounded-xl p-5 border border-border/50"
                >
                  <div className="w-8 h-8 bg-brand/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-brand" />
                  </div>
                  <span className="text-base text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isWhatIsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mt-12"
            >
              <Link href="/nxlive/apply">
                <Button className="bg-brand hover:bg-brand-hover text-brand-foreground rounded-full px-8 py-5 text-base transition-all hover:shadow-lg">
                  Apply for NxLife
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section ref={howItWorksRef} className="py-20 md:py-24 border-y border-border/50">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHowItWorksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-serif font-medium text-foreground mb-12 text-center">
              How It Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                { step: "1", title: "Apply", description: "Submit your application" },
                { step: "2", title: "Get Onboarded", description: "Join the community" },
                { step: "3", title: "Run the Rhythm", description: "Weekly brief + monthly lab" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHowItWorksInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-10 h-10 rounded-full border border-brand text-brand font-medium text-sm flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-base font-medium text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What This Is Not Section */}
      <section ref={whatIsNotRef} className="py-24 md:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWhatIsNotInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-16 text-center">
              What This Is Not
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-16">
              {[
                "Not a weight loss challenge",
                "Not a supplement group",
                "Not biohacking",
                "Not hustle culture",
                "Not motivation therapy",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={isWhatIsNotInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-center gap-3 py-2"
                >
                  <X className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isWhatIsNotInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl font-serif font-medium text-brand">
                This is infrastructure.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founding Access Section */}
      <section ref={foundingRef} className="py-24 md:py-32 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFoundingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-8">
              Founding Access
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground mb-8">
              <p>Founding members are joining before NxLife scales into its full performance model.</p>
              <p>Your rate is locked in as a founding member.</p>
              <p className="text-foreground font-medium">Application required.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founding Group Promotion Section */}
      <section ref={pricingRef} className="py-24 md:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-lg mx-auto"
          >
            <div className="bg-background border border-border rounded-2xl p-8 md:p-10 text-center shadow-sm">
              <h2 className="text-2xl font-serif font-medium text-foreground mb-2">
                Founding Group Promotion
              </h2>
              <p className="text-sm text-muted-foreground mb-8">
                Early access at a locked-in founders rate
              </p>

              {/* Price Display with Animation */}
              <div className="mb-8">
                <div className="flex items-baseline justify-center gap-3">
                  {/* Standard Price - fades and strikes through */}
                  <motion.span
                    initial={prefersReducedMotion ? { opacity: 0.4 } : { opacity: 1 }}
                    animate={isPricingInView ? { opacity: 0.4 } : {}}
                    transition={{ duration: 0.3, delay: prefersReducedMotion ? 0 : 0.1 }}
                    className="text-2xl text-muted-foreground line-through decoration-1"
                  >
                    $19
                  </motion.span>

                  {/* Founders Price - slides in */}
                  <motion.div
                    initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                    animate={isPricingInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: prefersReducedMotion ? 0 : 0.3 }}
                    className="flex items-baseline"
                  >
                    <span className="text-5xl md:text-6xl font-semibold text-brand">$7</span>
                    <span className="text-lg text-muted-foreground ml-1">/month</span>
                  </motion.div>
                </div>

                <motion.p
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
                  animate={isPricingInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: prefersReducedMotion ? 0 : 0.5 }}
                  className="text-sm text-brand font-medium mt-3"
                >
                  Founders rate locked in
                </motion.p>
              </div>

              <div className="w-full h-px bg-border mb-8" />

              <p className="text-sm text-muted-foreground mb-6">
                Promotion ends <span className="text-foreground font-medium">March 9, 2026</span>
              </p>

              <Link href="/nxlive/apply">
                <Button className="w-full bg-brand hover:bg-brand-hover text-brand-foreground rounded-full py-6 text-base transition-all hover:shadow-lg">
                  Apply for NxLife
                </Button>
              </Link>

              <p className="text-xs text-muted-foreground mt-4">
                Limited to founding cohort
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
