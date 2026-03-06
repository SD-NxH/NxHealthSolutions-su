"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronDown, Check, Shield, Zap, Target, TrendingUp, Award, Lock, BookOpen } from "lucide-react"

export default function ControlGameTestPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    missionCompletion: [] as string[],
    sleep: "",
    energy: "",
    clarity: "",
    physical: "",
    load: "",
    emotional: "",
    obstacles: "",
  })

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      missionCompletion: prev.missionCompletion.includes(value)
        ? prev.missionCompletion.filter((v) => v !== value)
        : [...prev.missionCompletion, value],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Local mock submission - logs to console only
    console.log("[CONTROL Game Test] Check-in submitted:", formData)
    setIsSubmitted(true)
  }

  const resetForm = () => {
    setFormData({
      name: "",
      missionCompletion: [],
      sleep: "",
      energy: "",
      clarity: "",
      physical: "",
      load: "",
      emotional: "",
      obstacles: "",
    })
    setIsSubmitted(false)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#050508] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-brand/20 flex items-center justify-center border border-brand/30">
            <Check className="w-10 h-10 text-brand" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wide">
            CHECK-IN SUBMITTED
          </h1>
          <p className="text-[#8892a0] text-lg mb-8">
            Keep playing — your body thanks you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={resetForm}
              className="px-8 py-3 bg-brand text-white font-bold tracking-widest uppercase text-sm rounded-sm transition-all duration-300 hover:bg-brand-hover"
            >
              Submit Another Check-In
            </button>
            <button
              onClick={() => scrollToSection("hero")}
              className="px-8 py-3 border border-[#1a1f2e] text-[#8892a0] hover:text-white font-bold tracking-widest uppercase text-sm rounded-sm transition-all"
            >
              Back to Top
            </button>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#050508] text-white">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/control-green.jpg"
            alt="CONTROL Game Test"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#050508]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent" />
        </div>

        {/* Prototype Badge */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20">
          <span className="px-4 py-2 bg-brand/20 border border-brand/40 rounded-full text-brand text-xs tracking-widest uppercase font-bold">
            Prototype
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10 container px-4 md:px-6 text-center max-w-4xl mx-auto pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider mb-6 text-white drop-shadow-2xl">
              CONTROL — <span className="text-brand">GAME TEST</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-[#b0b8c4] mb-8 max-w-2xl mx-auto tracking-wide"
          >
            A real-life strategy game. Your daily state determines your missions.
          </motion.p>

          {/* 3 Bullet Strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8"
          >
            {[
              "Stability earns points",
              "Consistency multiplies power",
              "Miss a day — reset",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand rounded-full" />
                <span className="text-[#8892a0] text-sm tracking-wide">{item}</span>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="text-[#6b7280] text-sm mb-10 max-w-md mx-auto"
          >
            Fill out the check-in. You'll receive missions privately.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <button
              onClick={() => scrollToSection("checkin")}
              className="relative px-10 py-4 bg-brand text-white font-bold tracking-widest uppercase text-sm rounded-sm transition-all duration-300 hover:bg-brand-hover hover:shadow-[0_0_30px_rgba(34,139,34,0.4)] border border-brand/50"
            >
              Start Check-In
            </button>

            <button
              onClick={() => scrollToSection("howtoplay")}
              className="flex items-center gap-2 text-[#6b7280] hover:text-brand transition-colors text-sm tracking-widest uppercase"
            >
              How To Play
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
              className="w-1 h-1 bg-brand rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Jump Links / TOC */}
      <section className="sticky top-0 z-40 bg-[#050508]/95 backdrop-blur-sm border-b border-[#1a1f2e]">
        <div className="container px-4 md:px-6 py-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              { label: "How To Play", id: "howtoplay" },
              { label: "Player Check-In", id: "checkin" },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-[#6b7280] hover:text-brand text-sm tracking-widest uppercase transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* How To Play Section */}
      <section id="howtoplay" className="py-20 bg-[#050508]">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-white mb-4">
              HOW TO PLAY
            </h2>
            <p className="text-[#8892a0] max-w-xl mx-auto">
              CONTROL is a real-life performance strategy game.
            </p>
          </motion.div>

          <div className="space-y-6">
            {/* Card 1 - What CONTROL Is */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 md:p-8 border border-[#1a1f2e] rounded-lg bg-[#0a0a0f]/50"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center border border-brand/30 shrink-0">
                  <BookOpen className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <h3 className="text-brand text-xs tracking-widest mb-3 uppercase">What CONTROL Is</h3>
                  <div className="space-y-4 text-[#b0b8c4]">
                    <p>CONTROL is a real-life performance strategy game.</p>
                    <p className="text-[#6b7280]">It's not a fitness app.</p>
                    <p className="text-[#6b7280]">It's not a productivity hack.</p>
                    <p className="text-[#6b7280]">It's not motivation content.</p>
                    <p>It's a daily regulation system that just happens to be a game.</p>
                    <p className="pt-2">Most people try to push harder every day.</p>
                    <p className="text-white font-medium">CONTROL teaches you when to push — and when not to.</p>
                    <p className="pt-2">The goal is not intensity.</p>
                    <p className="text-white font-medium">The goal is stability.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - The Daily Check-In */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 md:p-8 border border-[#1a1f2e] rounded-lg bg-[#0a0a0f]/50"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center border border-brand/30 shrink-0">
                  <Check className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <h3 className="text-brand text-xs tracking-widest mb-3 uppercase">The Daily Check-In</h3>
                  <div className="space-y-4 text-[#b0b8c4]">
                    <p>Every day between <span className="text-white font-medium">9 AM and 9 PM</span>, you complete a quick check-in.</p>
                    <p>It takes about sixty seconds.</p>
                    <p className="pt-2">You'll answer simple questions about:</p>
                    <ul className="space-y-2 text-[#8892a0] pl-4">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                        Sleep
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                        Energy
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                        Workload
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                        Overall state
                      </li>
                    </ul>
                    <p className="pt-2">Based on your answers, the system assigns your mode for the day.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - The Three Modes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 md:p-8 border border-[#1a1f2e] rounded-lg bg-[#0a0a0f]/50"
            >
              <h3 className="text-brand text-xs tracking-widest mb-6 uppercase text-center">The Three Modes</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 bg-[#0d0d14] border border-[#1a1f2e] rounded-lg text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/30">
                    <Shield className="w-6 h-6 text-red-400" />
                  </div>
                  <h4 className="text-white font-bold tracking-wide mb-2">Defense Mode</h4>
                  <p className="text-[#6b7280] text-sm">Protect your baseline.</p>
                </div>
                <div className="p-5 bg-[#0d0d14] border border-[#1a1f2e] rounded-lg text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/30">
                    <Target className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h4 className="text-white font-bold tracking-wide mb-2">Stability Mode</h4>
                  <p className="text-[#6b7280] text-sm">Maintain control.</p>
                </div>
                <div className="p-5 bg-[#0d0d14] border border-[#1a1f2e] rounded-lg text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-brand/10 flex items-center justify-center border border-brand/30">
                    <Zap className="w-6 h-6 text-brand" />
                  </div>
                  <h4 className="text-white font-bold tracking-wide mb-2">Output Mode</h4>
                  <p className="text-[#6b7280] text-sm">Deploy effort strategically.</p>
                </div>
              </div>
            </motion.div>

            {/* Card 4 - Missions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 md:p-8 border border-[#1a1f2e] rounded-lg bg-[#0a0a0f]/50"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center border border-brand/30 shrink-0">
                  <Target className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <h3 className="text-brand text-xs tracking-widest mb-3 uppercase">Missions</h3>
                  <div className="space-y-4 text-[#b0b8c4]">
                    <p>Your mode determines your missions for the day.</p>
                    <p>You'll receive <span className="text-white font-medium">up to three micro-missions privately.</span></p>
                    <p className="pt-2">These are small real-world actions.</p>
                    <p className="text-[#6b7280]">Not dramatic.</p>
                    <p className="text-[#6b7280]">Not overwhelming.</p>
                    <p className="text-white font-medium pt-2">Just the right level of effort for your current capacity.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 5 - Point System */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 md:p-8 border border-[#1a1f2e] rounded-lg bg-[#0a0a0f]/50"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center border border-brand/30 shrink-0">
                  <Award className="w-5 h-5 text-brand" />
                </div>
                <div className="flex-1">
                  <h3 className="text-brand text-xs tracking-widest mb-3 uppercase">Point System</h3>
                  <div className="space-y-4 text-[#b0b8c4]">
                    <p>Points are tracked.</p>
                    <p>There's a <span className="text-white font-medium">live leaderboard.</span></p>
                    <p className="pt-2">Daily maximum: <span className="text-white font-bold text-lg">40 points</span></p>
                    <div className="pt-4 space-y-3">
                      <div className="flex items-center justify-between p-3 bg-[#0d0d14] border border-[#1a1f2e] rounded-lg">
                        <span className="text-[#8892a0]">Completing your daily check-in</span>
                        <span className="text-white font-bold">10 pts</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-[#0d0d14] border border-[#1a1f2e] rounded-lg">
                        <span className="text-[#8892a0]">Completing missions</span>
                        <span className="text-white font-bold">Up to 30 pts</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 6 - The Multiplier */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-6 md:p-8 border border-[#1a1f2e] rounded-lg bg-[#0a0a0f]/50"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center border border-brand/30 shrink-0">
                  <TrendingUp className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <h3 className="text-brand text-xs tracking-widest mb-3 uppercase">The Multiplier</h3>
                  <div className="space-y-4 text-[#b0b8c4]">
                    <p>If you check in multiple days in a row, you earn a <span className="text-white font-medium">multiplier.</span></p>
                    <p>Your points increase.</p>
                    <p className="text-white font-medium pt-2">Consistency becomes powerful.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 7 - The Shield */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="p-6 md:p-8 border border-[#1a1f2e] rounded-lg bg-[#0a0a0f]/50"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center border border-brand/30 shrink-0">
                  <Shield className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <h3 className="text-brand text-xs tracking-widest mb-3 uppercase">The Shield</h3>
                  <div className="space-y-4 text-[#b0b8c4]">
                    <p>After <span className="text-white font-medium">three consecutive check-ins</span>, you earn a <span className="text-white font-medium">Shield.</span></p>
                    <p>A Shield protects your streak if you miss a day due to an emergency.</p>
                    <p className="text-white font-medium pt-2">We reward commitment — not perfection.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 8 - Game Rules */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="p-6 md:p-8 border border-[#1a1f2e] rounded-lg bg-[#0a0a0f]/50"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center border border-brand/30 shrink-0">
                  <Lock className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <h3 className="text-brand text-xs tracking-widest mb-3 uppercase">Game Rules</h3>
                  <ul className="space-y-3 text-[#b0b8c4]">
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                      Missions are private
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                      Leaderboard is public
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                      Maximum three missions per day
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                      Processing window: 9 AM – 9 PM
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                      CONTROL runs in 7-day cycles
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Card 9 - The Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="p-6 md:p-8 border border-brand/30 rounded-lg bg-brand/5"
            >
              <h3 className="text-brand text-xs tracking-widest mb-4 uppercase text-center">The Philosophy</h3>
              <div className="space-y-4 text-[#b0b8c4] text-center max-w-2xl mx-auto">
                <p>This is not about crushing every day.</p>
                <p>It's about avoiding volatility.</p>
                <p className="pt-2">When you stop over-pushing on strong days...</p>
                <p>And stop collapsing on weak days...</p>
                <p className="text-white font-medium pt-2">Something shifts.</p>
                <p className="pt-4">You stop asking:</p>
                <p className="text-[#6b7280] italic">"What should I do today?"</p>
                <p className="pt-2">And start asking:</p>
                <p className="text-white font-medium italic">"What is safe to do today?"</p>
              </div>
            </motion.div>

            {/* Final Card - Closing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="p-6 md:p-8 border border-[#1a1f2e] rounded-lg bg-[#0a0a0f]/50 text-center"
            >
              <div className="space-y-4 text-[#b0b8c4] max-w-xl mx-auto">
                <p>You don't aim for health.</p>
                <p>You don't aim for productivity.</p>
                <p className="text-white font-medium pt-2">You aim to maintain control.</p>
                <p className="pt-4">Performance becomes the side effect.</p>
                <p className="text-white font-bold text-xl pt-4">That's CONTROL.</p>
                <p className="text-brand font-medium pt-6">Good luck.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Player Check-In Form */}
      <section id="checkin" className="py-20 bg-[#080810]">
        <div className="container px-4 md:px-6 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-white mb-4">
              PLAYER CHECK-IN
            </h2>
            <p className="text-[#6b7280]">Takes ~60 seconds.</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {/* 1. Name */}
            <div>
              <label className="block text-white text-sm font-bold tracking-wider mb-3 uppercase">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#0d0d14] border border-[#1a1f2e] rounded-sm px-4 py-3 text-white placeholder-[#4b5563] focus:outline-none focus:border-brand focus:shadow-[0_0_10px_rgba(34,139,34,0.2)] transition-all"
                placeholder="Your name"
              />
            </div>

            {/* 2. Previous Day Mission Completion */}
            <div>
              <label className="block text-white text-sm font-bold tracking-wider mb-3 uppercase">
                Previous Day Mission Completion? <span className="text-[#6b7280] text-xs font-normal">(optional)</span>
              </label>
              <p className="text-[#6b7280] text-sm mb-4">Check all that apply: Mission #1, Mission #2, Mission #3, All missions.</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {["#1", "#2", "#3", "All"].map((label) => (
                  <label
                    key={label}
                    className={`flex items-center justify-center gap-2 p-4 border rounded-sm cursor-pointer transition-all ${
                      formData.missionCompletion.includes(label)
                        ? "border-brand bg-brand/10 text-white"
                        : "border-[#1a1f2e] bg-[#0d0d14] text-[#8892a0] hover:border-[#3b4451]"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.missionCompletion.includes(label)}
                      onChange={() => handleCheckboxChange(label)}
                      className="sr-only"
                    />
                    <span className="text-sm font-medium">{label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 3. Sleep Quality */}
            <div>
              <label className="block text-white text-sm font-bold tracking-wider mb-3 uppercase">
                Sleep Quality (Last Night) <span className="text-red-500">*</span>
              </label>
              <div className="space-y-3">
                {["Rested", "Adequate", "Fragmented / Poor"].map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="sleep"
                      value={option}
                      required
                      checked={formData.sleep === option}
                      onChange={(e) => setFormData({ ...formData, sleep: e.target.value })}
                      className="w-4 h-4 accent-brand"
                    />
                    <span className="text-[#b0b8c4] group-hover:text-white transition-colors">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 4. Current Energy State */}
            <div>
              <label className="block text-white text-sm font-bold tracking-wider mb-3 uppercase">
                Current Energy State <span className="text-red-500">*</span>
              </label>
              <div className="space-y-3">
                {["High", "Moderate", "Low"].map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="energy"
                      value={option}
                      required
                      checked={formData.energy === option}
                      onChange={(e) => setFormData({ ...formData, energy: e.target.value })}
                      className="w-4 h-4 accent-brand"
                    />
                    <span className="text-[#b0b8c4] group-hover:text-white transition-colors">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 5. Cognitive Clarity */}
            <div>
              <label className="block text-white text-sm font-bold tracking-wider mb-3 uppercase">
                Cognitive Clarity <span className="text-red-500">*</span>
              </label>
              <div className="space-y-3">
                {["Clear / Focused", "Slightly Foggy", "Distracted / Scattered"].map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="clarity"
                      value={option}
                      required
                      checked={formData.clarity === option}
                      onChange={(e) => setFormData({ ...formData, clarity: e.target.value })}
                      className="w-4 h-4 accent-brand"
                    />
                    <span className="text-[#b0b8c4] group-hover:text-white transition-colors">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 6. Physical Readiness */}
            <div>
              <label className="block text-white text-sm font-bold tracking-wider mb-3 uppercase">
                Physical Readiness <span className="text-red-500">*</span>
              </label>
              <div className="space-y-3">
                {["Ready", "Tight / Tense", "Fatigued / Drained"].map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="physical"
                      value={option}
                      required
                      checked={formData.physical === option}
                      onChange={(e) => setFormData({ ...formData, physical: e.target.value })}
                      className="w-4 h-4 accent-brand"
                    />
                    <span className="text-[#b0b8c4] group-hover:text-white transition-colors">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 7. Today's Load */}
            <div>
              <label className="block text-white text-sm font-bold tracking-wider mb-3 uppercase">
                Today's Load <span className="text-red-500">*</span>
              </label>
              <div className="space-y-3">
                {["Light", "Normal", "Heavy / High Pressure"].map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="load"
                      value={option}
                      required
                      checked={formData.load === option}
                      onChange={(e) => setFormData({ ...formData, load: e.target.value })}
                      className="w-4 h-4 accent-brand"
                    />
                    <span className="text-[#b0b8c4] group-hover:text-white transition-colors">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 8. Emotional State */}
            <div>
              <label className="block text-white text-sm font-bold tracking-wider mb-3 uppercase">
                Emotional State <span className="text-red-500">*</span>
              </label>
              <div className="space-y-3">
                {["Stable", "Irritable", "Overwhelmed"].map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="emotional"
                      value={option}
                      required
                      checked={formData.emotional === option}
                      onChange={(e) => setFormData({ ...formData, emotional: e.target.value })}
                      className="w-4 h-4 accent-brand"
                    />
                    <span className="text-[#b0b8c4] group-hover:text-white transition-colors">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 9. Obstacles */}
            <div>
              <label className="block text-white text-sm font-bold tracking-wider mb-3 uppercase">
                What could get in your way of being great today? <span className="text-[#6b7280] text-xs font-normal">(optional)</span>
              </label>
              <textarea
                value={formData.obstacles}
                onChange={(e) => setFormData({ ...formData, obstacles: e.target.value })}
                rows={3}
                className="w-full bg-[#0d0d14] border border-[#1a1f2e] rounded-sm px-4 py-3 text-white placeholder-[#4b5563] focus:outline-none focus:border-brand focus:shadow-[0_0_10px_rgba(34,139,34,0.2)] transition-all resize-none"
                placeholder="Meetings, distractions, low energy, stress..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-10 py-4 bg-brand text-white font-bold tracking-widest uppercase text-sm rounded-sm transition-all duration-300 hover:bg-brand-hover hover:shadow-[0_0_30px_rgba(34,139,34,0.4)] border border-brand/50"
            >
              Submit Check-In
            </button>
          </motion.form>
        </div>
      </section>

      {/* Footer spacer */}
      <div className="h-20 bg-[#050508]" />
    </div>
  )
}
