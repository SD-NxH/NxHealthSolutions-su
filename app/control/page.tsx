"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronDown, Crosshair, Target, Shield } from "lucide-react"

export default function ControlPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [otherEnergyDrop, setOtherEnergyDrop] = useState("")

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-[#0d4f8b]/30 flex items-center justify-center border border-[#1e90ff]/30">
            <Crosshair className="w-10 h-10 text-[#1e90ff]" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wide">
            APPLICATION RECEIVED
          </h1>
          <p className="text-[#8892a0] text-lg mb-8">
            Operators will be notified.
          </p>
          <Link
            href="/"
            className="inline-block text-[#1e90ff] hover:text-[#4da6ff] transition-colors text-sm tracking-widest uppercase"
          >
            Return to Base
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/control-hero.jpeg"
            alt="CONTROL"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0a0a0f]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container px-4 md:px-6 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-wider mb-6 text-white drop-shadow-2xl">
              YOU ARE NOT LAZY.
              <br />
              <span className="text-[#1e90ff]">YOU ARE OVERLOADED.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-[#b0b8c4] mb-4 max-w-2xl mx-auto tracking-wide"
          >
            CONTROL is a daily regulation system for high-responsibility adults operating under constant load.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base md:text-lg text-[#6b7280] mb-10 max-w-xl mx-auto"
          >
            Your energy determines your capacity. Your capacity determines your day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <button
              onClick={() => scrollToSection("application")}
              className="relative px-10 py-4 bg-[#0d4f8b] text-white font-bold tracking-widest uppercase text-sm rounded-sm transition-all duration-300 hover:bg-[#1e90ff] hover:shadow-[0_0_30px_rgba(30,144,255,0.4)] border border-[#1e90ff]/50"
            >
              <span className="relative z-10">Apply for Early Access</span>
            </button>

            <button
              onClick={() => scrollToSection("how-it-works")}
              className="flex items-center gap-2 text-[#6b7280] hover:text-[#1e90ff] transition-colors text-sm tracking-widest uppercase"
            >
              Learn How It Works
              <ChevronDown className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[#3b4451] rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 bg-[#1e90ff] rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Section 2 - What Control Is */}
      <section id="how-it-works" className="py-24 bg-[#0a0a0f]">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-wider text-white mb-4">
              A REAL-LIFE STRATEGY SYSTEM
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-8 border border-[#1a1f2e] rounded-sm bg-[#0d0d14]/50"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#0d4f8b]/20 flex items-center justify-center border border-[#1e90ff]/30">
                <Crosshair className="w-8 h-8 text-[#1e90ff]" />
              </div>
              <div className="text-[#1e90ff] text-sm tracking-widest mb-3">01</div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">REPORT CURRENT STATE</h3>
              <p className="text-[#6b7280]">60-second check-in.</p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-8 border border-[#1a1f2e] rounded-sm bg-[#0d0d14]/50"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#0d4f8b]/20 flex items-center justify-center border border-[#1e90ff]/30">
                <Target className="w-8 h-8 text-[#1e90ff]" />
              </div>
              <div className="text-[#1e90ff] text-sm tracking-widest mb-3">02</div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">MODE ASSIGNED</h3>
              <p className="text-[#6b7280]">Defense. Maintain. Deploy.</p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-8 border border-[#1a1f2e] rounded-sm bg-[#0d0d14]/50"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#0d4f8b]/20 flex items-center justify-center border border-[#1e90ff]/30">
                <Shield className="w-8 h-8 text-[#1e90ff]" />
              </div>
              <div className="text-[#1e90ff] text-sm tracking-widest mb-3">03</div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">STABILIZE THE DAY</h3>
              <p className="text-[#6b7280]">1-3 micro-actions. Preserve multiplier.</p>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-[#8892a0] text-lg max-w-2xl mx-auto"
          >
            CONTROL does not ask you to push harder. It teaches you when to push — and when not to.
          </motion.p>
        </div>
      </section>

      {/* Section 3 - The Problem */}
      <section className="py-24 bg-[#080810]">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-wider text-white mb-8">
              MODERN PERFORMANCE IS UNSTABLE
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12"
          >
            {[
              "Decision fatigue",
              "Context switching",
              "Stacked responsibilities",
              "Cognitive overload",
              "Energy crashes",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 border border-[#1a1f2e] rounded-sm bg-[#0d0d14]/30"
              >
                <div className="w-2 h-2 bg-[#1e90ff] rounded-full" />
                <span className="text-[#b0b8c4] tracking-wide">{item}</span>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-[#6b7280] text-lg"
          >
            Most systems require motivation. <span className="text-[#1e90ff]">CONTROL requires awareness.</span>
          </motion.p>
        </div>
      </section>

      {/* Section 4 - Application Form */}
      <section id="application" className="py-24 bg-[#0a0a0f]">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-white mb-4">
              CONTROL — EARLY ACCESS APPLICATION
            </h2>
            <p className="text-[#6b7280] max-w-xl mx-auto">
              This is not a productivity app. This is a behavioral regulation system. We are selecting early operators for a 7-day closed test.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            action="https://formsubmit.co/nxhealthsolutions@gmail.com"
            method="POST"
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.currentTarget
              fetch(form.action, {
                method: "POST",
                body: new FormData(form),
              }).then(() => {
                setIsSubmitted(true)
              })
            }}
            className="space-y-8"
          >
            {/* Hidden Fields */}
            <input type="hidden" name="_subject" value="CONTROL Waitlist Application" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />

            {/* Full Name */}
            <div>
              <label htmlFor="full_name" className="block text-white text-sm font-bold tracking-wider mb-3 uppercase">
                Full Name
              </label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                required
                className="w-full bg-[#0d0d14] border border-[#1a1f2e] rounded-sm px-4 py-3 text-white placeholder-[#4b5563] focus:outline-none focus:border-[#1e90ff] focus:shadow-[0_0_10px_rgba(30,144,255,0.2)] transition-all"
                placeholder="Your full name"
              />
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-white text-sm font-bold tracking-wider mb-3 uppercase">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-[#0d0d14] border border-[#1a1f2e] rounded-sm px-4 py-3 text-white placeholder-[#4b5563] focus:outline-none focus:border-[#1e90ff] focus:shadow-[0_0_10px_rgba(30,144,255,0.2)] transition-all"
                placeholder="your@email.com"
              />
            </div>

            {/* Question 1 */}
            <div>
              <label htmlFor="profession" className="block text-white text-sm font-bold tracking-wider mb-3 uppercase">
                What do you do professionally?
              </label>
              <input
                type="text"
                name="profession"
                required
                className="w-full bg-[#0d0d14] border border-[#1a1f2e] rounded-sm px-4 py-3 text-white placeholder-[#4b5563] focus:outline-none focus:border-[#1e90ff] focus:shadow-[0_0_10px_rgba(30,144,255,0.2)] transition-all"
                placeholder="Your role or profession"
              />
            </div>

            {/* Question 2 */}
            <div>
              <label className="block text-white text-sm font-bold tracking-wider mb-3 uppercase">
                What depends on your performance?
              </label>
              <textarea
                name="what_depends"
                required
                rows={3}
                className="w-full bg-[#0d0d14] border border-[#1a1f2e] rounded-sm px-4 py-3 text-white placeholder-[#4b5563] focus:outline-none focus:border-[#1e90ff] focus:shadow-[0_0_10px_rgba(30,144,255,0.2)] transition-all resize-none"
                placeholder="People, projects, outcomes..."
              />
            </div>

            {/* Question 3 */}
            <div>
              <label className="block text-white text-sm font-bold tracking-wider mb-3 uppercase">
                When was the last time you felt stretched too thin?
              </label>
              <textarea
                name="stretched_thin"
                required
                rows={3}
                className="w-full bg-[#0d0d14] border border-[#1a1f2e] rounded-sm px-4 py-3 text-white placeholder-[#4b5563] focus:outline-none focus:border-[#1e90ff] focus:shadow-[0_0_10px_rgba(30,144,255,0.2)] transition-all resize-none"
                placeholder="Describe a recent day where your energy didn't match your workload."
              />
            </div>

            {/* Question 4 */}
            <div>
              <label className="block text-white text-sm font-bold tracking-wider mb-3 uppercase">
                Where are you losing energy right now?
              </label>
              <textarea
                name="energy_loss"
                required
                rows={3}
                className="w-full bg-[#0d0d14] border border-[#1a1f2e] rounded-sm px-4 py-3 text-white placeholder-[#4b5563] focus:outline-none focus:border-[#1e90ff] focus:shadow-[0_0_10px_rgba(30,144,255,0.2)] transition-all resize-none"
                placeholder="Activities, people, situations..."
              />
            </div>

            {/* Question 5 */}
            <div>
              <label className="block text-white text-sm font-bold tracking-wider mb-3 uppercase">
                How often does that energy drain show up?
              </label>
              <div className="space-y-3">
                {["Daily", "A few times a week", "Weekly", "Occasionally"].map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="energy_drain_frequency"
                      value={option}
                      required
                      className="w-4 h-4 accent-[#1e90ff]"
                    />
                    <span className="text-[#b0b8c4] group-hover:text-white transition-colors">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Question 6 */}
            <div>
              <label className="block text-white text-sm font-bold tracking-wider mb-3 uppercase">
                What have you tried before?
              </label>
              <textarea
                name="previous_attempts"
                required
                rows={3}
                className="w-full bg-[#0d0d14] border border-[#1a1f2e] rounded-sm px-4 py-3 text-white placeholder-[#4b5563] focus:outline-none focus:border-[#1e90ff] focus:shadow-[0_0_10px_rgba(30,144,255,0.2)] transition-all resize-none"
                placeholder="Apps, systems, habits, coaches..."
              />
            </div>

            {/* Question 7 */}
            <div>
              <label className="block text-white text-sm font-bold tracking-wider mb-3 uppercase">
                Are you currently paying for any tools to help manage performance or focus? If yes — what and how much?
              </label>
              <input
                type="text"
                name="paid_tools"
                required
                className="w-full bg-[#0d0d14] border border-[#1a1f2e] rounded-sm px-4 py-3 text-white placeholder-[#4b5563] focus:outline-none focus:border-[#1e90ff] focus:shadow-[0_0_10px_rgba(30,144,255,0.2)] transition-all"
                placeholder="No / Yes — [tool name, $X/month]"
              />
            </div>

            {/* Question 8 */}
            <div>
              <label className="block text-white text-sm font-bold tracking-wider mb-3 uppercase">
                When your energy drops, what do you typically do?
              </label>
              <div className="space-y-3">
                {[
                  "Push harder",
                  "Avoid / procrastinate",
                  "Reduce workload",
                  "Power through with caffeine",
                ].map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="energy_drop_response"
                      value={option}
                      className="w-4 h-4 accent-[#1e90ff]"
                    />
                    <span className="text-[#b0b8c4] group-hover:text-white transition-colors">{option}</span>
                  </label>
                ))}
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="energy_drop_response"
                    value={`Other: ${otherEnergyDrop}`}
                    checked={otherEnergyDrop.length > 0}
                    onChange={() => {}}
                    className="w-4 h-4 accent-[#1e90ff]"
                  />
                  <span className="text-[#b0b8c4] group-hover:text-white transition-colors">Other:</span>
                  <input
                    type="text"
                    value={otherEnergyDrop}
                    onChange={(e) => setOtherEnergyDrop(e.target.value)}
                    className="flex-1 bg-[#0d0d14] border border-[#1a1f2e] rounded-sm px-3 py-1 text-white placeholder-[#4b5563] focus:outline-none focus:border-[#1e90ff] transition-all text-sm"
                    placeholder="Specify..."
                  />
                </label>
              </div>
            </div>

            {/* Question 9 */}
            <div>
              <label className="block text-white text-sm font-bold tracking-wider mb-3 uppercase">
                Are you looking for hacks or systems?
              </label>
              <div className="space-y-3">
                {["Quick hacks", "Structured systems", "Not sure yet"].map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="hacks_or_systems"
                      value={option}
                      required
                      className="w-4 h-4 accent-[#1e90ff]"
                    />
                    <span className="text-[#b0b8c4] group-hover:text-white transition-colors">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Question 10 */}
            <div>
              <label className="block text-white text-sm font-bold tracking-wider mb-3 uppercase">
                What would need to be true for you to commit to a 7-day test?
              </label>
              <textarea
                name="commitment_requirements"
                required
                rows={3}
                className="w-full bg-[#0d0d14] border border-[#1a1f2e] rounded-sm px-4 py-3 text-white placeholder-[#4b5563] focus:outline-none focus:border-[#1e90ff] focus:shadow-[0_0_10px_rgba(30,144,255,0.2)] transition-all resize-none"
                placeholder="What conditions would make this work for you?"
              />
            </div>

            {/* Question 11 */}
            <div>
              <label className="block text-white text-sm font-bold tracking-wider mb-3 uppercase">
                Why now?
              </label>
              <textarea
                name="why_now"
                required
                rows={3}
                className="w-full bg-[#0d0d14] border border-[#1a1f2e] rounded-sm px-4 py-3 text-white placeholder-[#4b5563] focus:outline-none focus:border-[#1e90ff] focus:shadow-[0_0_10px_rgba(30,144,255,0.2)] transition-all resize-none"
                placeholder="What's driving you to explore this now?"
              />
            </div>

            {/* Optional High-Signal Filter */}
            <div className="border border-[#1a1f2e] rounded-sm p-6 bg-[#080810]">
              <label className="block text-[#6b7280] text-sm font-bold tracking-wider mb-4 uppercase">
                Optional: High-Signal Filter
              </label>
              <p className="text-[#4b5563] text-sm mb-4">If selected, are you willing to:</p>
              <div className="space-y-3">
                {[
                  "Check in daily for 7 days",
                  "Be ranked publicly (missions remain private)",
                  "Give honest feedback afterward",
                ].map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="high_signal_commitments"
                      value={option}
                      className="w-4 h-4 accent-[#1e90ff]"
                    />
                    <span className="text-[#8892a0] group-hover:text-white transition-colors">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full px-10 py-4 bg-[#0d4f8b] text-white font-bold tracking-widest uppercase text-sm rounded-sm transition-all duration-300 hover:bg-[#1e90ff] hover:shadow-[0_0_30px_rgba(30,144,255,0.4)] border border-[#1e90ff]/50"
              >
                Request Access
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Section 5 - Limited Access */}
      <section className="py-24 bg-[#080810]">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-white mb-6">
              LIMITED BETA COHORT
            </h2>
            <p className="text-[#8892a0] text-lg mb-4">
              We are testing retention, not hype. Access will be limited to a small cohort.
            </p>
            <p className="text-[#4b5563] text-sm">
              No testimonials. No fake scarcity. No countdown timers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#0a0a0f] border-t border-[#1a1f2e]">
        <div className="container px-4 md:px-6 text-center">
          <Link href="/" className="text-[#4b5563] hover:text-[#1e90ff] transition-colors text-sm tracking-widest uppercase">
            NxHealth
          </Link>
        </div>
      </footer>
    </div>
  )
}
