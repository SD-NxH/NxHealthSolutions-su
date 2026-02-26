"use client"

import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { Check, X } from "lucide-react"

export default function NxLifePage() {
  const heroRef = useRef(null)
  const brokenRef = useRef(null)
  const whatIsRef = useRef(null)
  const whatIsNotRef = useRef(null)
  const foundingRef = useRef(null)

  const isBrokenInView = useInView(brokenRef, { once: true, amount: 0.2 })
  const isWhatIsInView = useInView(whatIsRef, { once: true, amount: 0.2 })
  const isWhatIsNotInView = useInView(whatIsNotRef, { once: true, amount: 0.2 })
  const isFoundingInView = useInView(foundingRef, { once: true, amount: 0.2 })

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full py-20 md:py-32 bg-gradient-to-b from-brand-lighter to-background"
      >
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold tracking-tight text-foreground mb-6 text-balance">
              If Your Brain Is Your Income, Your Energy Is Your Leverage.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10">
              NxLife is a private performance community for high-responsibility adults who are tired of being tired.
            </p>
            <Link href="/nxlive/apply">
              <Button className="bg-brand hover:bg-brand-hover text-brand-foreground rounded-full px-10 py-6 text-lg transition-transform transform hover:scale-105">
                Apply for NxLife
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* You're Not Broken Section */}
      <section ref={brokenRef} className="py-20 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isBrokenInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-10 text-center">
              {"You're Not Broken"}
            </h2>
            
            <div className="space-y-8">
              <div className="text-center">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  You function.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  You show up.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  You carry responsibility.
                </p>
              </div>

              <div className="text-center pt-4">
                <p className="text-xl text-foreground leading-relaxed">
                  But your energy is inconsistent.
                </p>
                <p className="text-xl text-foreground leading-relaxed">
                  You crash at 3PM.
                </p>
                <p className="text-xl text-foreground leading-relaxed">
                  You rely on caffeine.
                </p>
                <p className="text-xl text-foreground leading-relaxed">
                  {"You're mentally overloaded."}
                </p>
              </div>

              <div className="text-center pt-6 border-t border-border">
                <p className="text-2xl font-medium text-brand pt-6">
                  {"You're not weak."}
                </p>
                <p className="text-2xl font-medium text-brand">
                  {"You're running on broken systems."}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What NxLife Is Section */}
      <section ref={whatIsRef} className="py-20 bg-brand-lighter">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isWhatIsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-10 text-center">
              What NxLife Is
            </h2>
            
            <div className="space-y-4">
              {[
                "Weekly Performance Brief",
                "Monthly Live Performance Lab",
                "Private Performance Community",
                "Direct Q&A Access",
                "Founding Member Lock-In Rate ($29)",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isWhatIsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-background rounded-xl p-5 shadow-sm"
                >
                  <div className="w-10 h-10 bg-brand-light rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-brand" />
                  </div>
                  <span className="text-lg text-foreground font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What This Is Not Section */}
      <section ref={whatIsNotRef} className="py-20 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isWhatIsNotInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-10 text-center">
              What This Is Not
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {[
                "Not a weight loss challenge",
                "Not a supplement group",
                "Not biohacking",
                "Not hustle culture",
                "Not motivation therapy",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isWhatIsNotInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4"
                >
                  <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isWhatIsNotInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center"
            >
              <p className="text-3xl font-serif font-medium text-brand">
                This is infrastructure.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founding Access Section */}
      <section ref={foundingRef} className="py-20 bg-brand-dark text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isFoundingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">
              Founding Access
            </h2>
            
            <p className="text-xl text-brand-light mb-4 leading-relaxed">
              Founding members are joining before NxLife scales into its full performance model.
            </p>
            <p className="text-xl text-brand-light mb-4 leading-relaxed">
              Your rate is locked at $29/month.
            </p>
            <p className="text-xl text-brand-light mb-10 leading-relaxed">
              Application required.
            </p>

            <Link href="/nxlive/apply">
              <Button className="bg-background text-brand hover:bg-brand-lighter rounded-full px-10 py-6 text-lg transition-transform transform hover:scale-105">
                Apply for NxLife
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
