"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { ArrowLeft, CheckCircle } from "lucide-react"

export default function NxLifeApplyPage() {
  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef(null)
  const isFormInView = useInView(formRef, { once: true, amount: 0.2 })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget
    
    // Let FormSubmit handle the submission, then show success state
    setTimeout(() => {
      setSubmitted(true)
    }, 100)
  }

  if (submitted) {
    return (
      <div className="flex flex-col min-h-screen">
        <section className="relative w-full py-24 md:py-32 bg-gradient-to-b from-brand-lighter to-background">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="w-20 h-20 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="h-10 w-10 text-brand" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight text-foreground mb-6">
                Application Received
              </h1>
              <p className="text-xl text-muted-foreground mb-10">
                {"Thank you for applying — we'll let you know in 24–48 hours if you are approved for the NxLife Program."}
              </p>
              <Link href="/nxlive">
                <Button className="bg-brand hover:bg-brand-hover text-brand-foreground rounded-full px-8 py-6 text-lg">
                  Back to NxLife
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-20 bg-gradient-to-b from-brand-lighter to-background">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Link 
              href="/nxlive" 
              className="inline-flex items-center text-brand hover:text-brand-hover font-medium mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to NxLife
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight text-foreground mb-6">
              Apply for NxLife
            </h1>
            <p className="text-xl text-muted-foreground">
              Answer a few quick questions so we can see if the community is a fit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Application Form Section */}
      <section ref={formRef} className="py-16 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-md border border-border">
              <form 
                action="https://formsubmit.co/nxhealthsolutions@gmail.com" 
                method="POST"
                onSubmit={handleSubmit}
              >
                {/* Hidden fields for FormSubmit */}
                <input type="hidden" name="_subject" value="NxLife Application" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                {/* Full Name */}
                <div className="mb-6">
                  <label htmlFor="full_name" className="block text-foreground text-sm font-bold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    className="shadow appearance-none border border-input rounded-lg w-full py-3 px-4 text-foreground bg-background leading-tight focus:outline-none focus:ring-2 focus:ring-brand"
                    placeholder="Your full name"
                    required
                  />
                </div>

                {/* Email Address */}
                <div className="mb-6">
                  <label htmlFor="email" className="block text-foreground text-sm font-bold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="shadow appearance-none border border-input rounded-lg w-full py-3 px-4 text-foreground bg-background leading-tight focus:outline-none focus:ring-2 focus:ring-brand"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                {/* Question 1 */}
                <div className="mb-6">
                  <label htmlFor="profession" className="block text-foreground text-sm font-bold mb-2">
                    What do you do professionally?
                  </label>
                  <input
                    type="text"
                    id="profession"
                    name="profession"
                    className="shadow appearance-none border border-input rounded-lg w-full py-3 px-4 text-foreground bg-background leading-tight focus:outline-none focus:ring-2 focus:ring-brand"
                    placeholder="Your profession or role"
                    required
                  />
                </div>

                {/* Question 2 */}
                <div className="mb-6">
                  <label htmlFor="responsibility" className="block text-foreground text-sm font-bold mb-2">
                    What responsibility depends on your performance?
                  </label>
                  <textarea
                    id="responsibility"
                    name="responsibility"
                    rows={3}
                    className="shadow appearance-none border border-input rounded-lg w-full py-3 px-4 text-foreground bg-background leading-tight focus:outline-none focus:ring-2 focus:ring-brand resize-none"
                    placeholder="Describe what depends on you performing at your best"
                    required
                  ></textarea>
                </div>

                {/* Question 3 */}
                <div className="mb-6">
                  <label htmlFor="energy_loss" className="block text-foreground text-sm font-bold mb-2">
                    Where are you losing energy right now?
                  </label>
                  <textarea
                    id="energy_loss"
                    name="energy_loss"
                    rows={3}
                    className="shadow appearance-none border border-input rounded-lg w-full py-3 px-4 text-foreground bg-background leading-tight focus:outline-none focus:ring-2 focus:ring-brand resize-none"
                    placeholder="What's draining your energy?"
                    required
                  ></textarea>
                </div>

                {/* Question 4 */}
                <div className="mb-6">
                  <label htmlFor="tried_before" className="block text-foreground text-sm font-bold mb-2">
                    What have you tried before?
                  </label>
                  <textarea
                    id="tried_before"
                    name="tried_before"
                    rows={3}
                    className="shadow appearance-none border border-input rounded-lg w-full py-3 px-4 text-foreground bg-background leading-tight focus:outline-none focus:ring-2 focus:ring-brand resize-none"
                    placeholder="Previous approaches, programs, or solutions you've attempted"
                    required
                  ></textarea>
                </div>

                {/* Question 5 - Radio Group */}
                <div className="mb-6">
                  <label className="block text-foreground text-sm font-bold mb-3">
                    Are you looking for hacks or systems?
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="hacks_or_systems"
                        value="Hacks"
                        className="w-4 h-4 text-brand border-input focus:ring-brand focus:ring-2"
                        required
                      />
                      <span className="ml-3 text-foreground">Hacks</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="hacks_or_systems"
                        value="Systems"
                        className="w-4 h-4 text-brand border-input focus:ring-brand focus:ring-2"
                      />
                      <span className="ml-3 text-foreground">Systems</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="hacks_or_systems"
                        value="Not sure yet"
                        className="w-4 h-4 text-brand border-input focus:ring-brand focus:ring-2"
                      />
                      <span className="ml-3 text-foreground">Not sure yet</span>
                    </label>
                  </div>
                </div>

                {/* Question 6 */}
                <div className="mb-6">
                  <label htmlFor="why_now" className="block text-foreground text-sm font-bold mb-2">
                    Why now?
                  </label>
                  <textarea
                    id="why_now"
                    name="why_now"
                    rows={3}
                    className="shadow appearance-none border border-input rounded-lg w-full py-3 px-4 text-foreground bg-background leading-tight focus:outline-none focus:ring-2 focus:ring-brand resize-none"
                    placeholder="What's motivating you to take action now?"
                    required
                  ></textarea>
                </div>

                {/* Question 7 */}
                <div className="mb-8">
                  <label htmlFor="contact_method" className="block text-foreground text-sm font-bold mb-2">
                    Please provide the best way to contact you. (ex: Phone, Email, Social Media)
                  </label>
                  <textarea
                    id="contact_method"
                    name="contact_method"
                    rows={2}
                    className="shadow appearance-none border border-input rounded-lg w-full py-3 px-4 text-foreground bg-background leading-tight focus:outline-none focus:ring-2 focus:ring-brand resize-none"
                    placeholder="Your preferred contact method and details"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-brand hover:bg-brand-hover text-brand-foreground rounded-full py-6 text-lg font-semibold transition-transform transform hover:scale-[1.02]"
                >
                  Submit Application
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-brand-lighter">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-serif font-light text-foreground mb-6">
              What to Expect
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background rounded-xl p-6">
                <p className="text-4xl font-bold text-brand mb-2">$29</p>
                <p className="text-muted-foreground">Monthly rate locked for founding members</p>
              </div>
              <div className="bg-background rounded-xl p-6">
                <p className="text-4xl font-bold text-brand mb-2">Weekly</p>
                <p className="text-muted-foreground">Performance briefs delivered to you</p>
              </div>
              <div className="bg-background rounded-xl p-6">
                <p className="text-4xl font-bold text-brand mb-2">Direct</p>
                <p className="text-muted-foreground">Q&A access with the community</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
