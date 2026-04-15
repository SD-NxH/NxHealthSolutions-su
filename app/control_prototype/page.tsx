"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronDown,
  Zap,
  Shield,
  TrendingUp,
  Check,
  Star,
  Trophy,
  Flame,
  Target,
  Brain,
  Moon,
  Sun,
  Coffee,
  Dumbbell,
  Smile,
  Meh,
  Frown,
  Clock,
  Sparkles,
  Users,
  Smartphone,
  MessageSquare,
  Mail,
  Globe,
} from "lucide-react"

// Types
type CheckInStep = "sleep" | "energy" | "load" | "body" | "mood" | "complete"
type Mode = "defense" | "stability" | "growth" | null
type AvatarState = "calm" | "focused" | "fatigued" | "overloaded" | "energized"

// Sample leaderboard data
const leaderboardData = [
  { rank: 1, name: "Alex M.", score: 2840, streak: 14, level: "Elite" },
  { rank: 2, name: "Jordan K.", score: 2650, streak: 12, level: "Elite" },
  { rank: 3, name: "Sam T.", score: 2420, streak: 10, level: "Pro" },
  { rank: 4, name: "Riley P.", score: 2180, streak: 8, level: "Pro" },
  { rank: 5, name: "Casey W.", score: 1950, streak: 7, level: "Rising" },
]

// Mission data by mode
const missionsByMode = {
  defense: [
    { title: "Hydrate First", description: "Drink water before caffeine", points: 8, icon: Coffee },
    { title: "Sunlight Reset", description: "5 minutes natural light exposure", points: 6, icon: Sun },
    { title: "Breath Protocol", description: "3 slow deep breaths", points: 5, icon: Zap },
  ],
  stability: [
    { title: "Single-Task Sprint", description: "Focus on one task for 7 minutes", points: 10, icon: Target },
    { title: "Walk & Talk", description: "Take your next call while walking", points: 9, icon: Smartphone },
    { title: "Protein Priority", description: "Include protein in your first meal", points: 8, icon: Dumbbell },
  ],
  growth: [
    { title: "Deep Work Block", description: "20 minute focused work sprint", points: 15, icon: Brain },
    { title: "Phone Delay", description: "Delay phone check for 30 minutes", points: 12, icon: Clock },
    { title: "Movement Reset", description: "5-minute physical reset between tasks", points: 10, icon: Dumbbell },
  ],
}

export default function ControlPrototypePage() {
  // Check-in state
  const [checkInStep, setCheckInStep] = useState<CheckInStep>("sleep")
  const [checkInData, setCheckInData] = useState({
    sleep: "",
    energy: "",
    load: "",
    body: "",
    mood: "",
  })
  const [assignedMode, setAssignedMode] = useState<Mode>(null)
  const [completedMissions, setCompletedMissions] = useState<number[]>([])
  const [avatarState, setAvatarState] = useState<AvatarState>("calm")
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(5)

  // Calculate multiplier based on streak
  const getMultiplier = () => {
    if (streak >= 5) return 2.0
    if (streak >= 4) return 1.6
    if (streak >= 3) return 1.4
    if (streak >= 2) return 1.2
    return 1.0
  }

  // Handle check-in selection
  const handleCheckInSelect = (step: CheckInStep, value: string) => {
    setCheckInData({ ...checkInData, [step]: value })
    
    const steps: CheckInStep[] = ["sleep", "energy", "load", "body", "mood", "complete"]
    const currentIndex = steps.indexOf(step)
    
    if (currentIndex < steps.length - 2) {
      setCheckInStep(steps[currentIndex + 1])
    } else {
      // Determine mode based on inputs
      const mode = determineMode({ ...checkInData, [step]: value })
      setAssignedMode(mode)
      setScore((prev) => prev + 10) // Base check-in points
      setCheckInStep("complete")
      
      // Update avatar based on mode
      if (mode === "defense") setAvatarState("fatigued")
      else if (mode === "stability") setAvatarState("calm")
      else setAvatarState("energized")
    }
  }

  // Determine mode based on check-in data
  const determineMode = (data: typeof checkInData): Mode => {
    const negativeIndicators = [
      data.sleep === "poor",
      data.energy === "low",
      data.load === "heavy",
      data.body === "exhausted",
      data.mood === "irritable",
    ].filter(Boolean).length

    if (negativeIndicators >= 3) return "defense"
    if (negativeIndicators <= 1) return "growth"
    return "stability"
  }

  // Handle mission completion
  const handleMissionComplete = (index: number, points: number) => {
    if (!completedMissions.includes(index)) {
      setCompletedMissions([...completedMissions, index])
      const earnedPoints = Math.round(points * getMultiplier())
      setScore((prev) => prev + earnedPoints)
      setAvatarState("focused")
      setTimeout(() => setAvatarState("energized"), 1500)
    }
  }

  // Scroll to section
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  // Reset check-in for demo
  const resetCheckIn = () => {
    setCheckInStep("sleep")
    setCheckInData({ sleep: "", energy: "", load: "", body: "", mood: "" })
    setAssignedMode(null)
    setCompletedMissions([])
    setAvatarState("calm")
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container px-4 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Real-Life Performance Strategy Game</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white mb-6 tracking-tight">
              CONTROL
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-2xl mx-auto font-medium">
              A daily strategy game for stabilizing energy, focus, and execution.
            </p>
            
            <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
              A behavioral engine disguised as a game. Complete your daily check-in, receive adaptive missions, and build your streak.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => scrollToSection("check-in")}
                className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 text-lg"
              >
                Try the Check-In
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="flex items-center gap-2 px-6 py-4 text-white/90 hover:text-white transition-colors"
              >
                See How It Works
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Daily Check-In Section */}
      <section id="check-in" className="py-20 bg-white">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Daily Check-In
            </h2>
            <p className="text-slate-600 text-lg">
              30 seconds to calibrate your day. Answer honestly.
            </p>
          </motion.div>

          {/* Check-in Interface */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-6 md:p-8 shadow-xl border border-slate-200"
          >
            {/* Progress Bar */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                  initial={{ width: "0%" }}
                  animate={{
                    width: checkInStep === "complete" ? "100%" :
                      checkInStep === "mood" ? "80%" :
                      checkInStep === "body" ? "60%" :
                      checkInStep === "load" ? "40%" :
                      checkInStep === "energy" ? "20%" : "0%"
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <span className="text-sm font-medium text-slate-500">
                {checkInStep === "complete" ? "5/5" :
                  checkInStep === "mood" ? "4/5" :
                  checkInStep === "body" ? "3/5" :
                  checkInStep === "load" ? "2/5" :
                  checkInStep === "energy" ? "1/5" : "0/5"}
              </span>
            </div>

            <AnimatePresence mode="wait">
              {checkInStep !== "complete" ? (
                <motion.div
                  key={checkInStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  {/* Sleep Quality */}
                  {checkInStep === "sleep" && (
                    <CheckInQuestion
                      icon={Moon}
                      title="Sleep Quality"
                      subtitle="How did you sleep last night?"
                      options={[
                        { value: "great", label: "Great", color: "bg-emerald-500" },
                        { value: "okay", label: "Okay", color: "bg-amber-500" },
                        { value: "poor", label: "Poor", color: "bg-rose-500" },
                      ]}
                      onSelect={(value) => handleCheckInSelect("sleep", value)}
                    />
                  )}

                  {/* Energy Level */}
                  {checkInStep === "energy" && (
                    <CheckInQuestion
                      icon={Zap}
                      title="Current Energy"
                      subtitle="How's your energy right now?"
                      options={[
                        { value: "high", label: "High", color: "bg-emerald-500" },
                        { value: "medium", label: "Medium", color: "bg-amber-500" },
                        { value: "low", label: "Low", color: "bg-rose-500" },
                      ]}
                      onSelect={(value) => handleCheckInSelect("energy", value)}
                    />
                  )}

                  {/* Today's Load */}
                  {checkInStep === "load" && (
                    <CheckInQuestion
                      icon={Target}
                      title="Today's Load"
                      subtitle="What's on your plate today?"
                      options={[
                        { value: "light", label: "Light", color: "bg-emerald-500" },
                        { value: "normal", label: "Normal", color: "bg-amber-500" },
                        { value: "heavy", label: "Heavy", color: "bg-rose-500" },
                      ]}
                      onSelect={(value) => handleCheckInSelect("load", value)}
                    />
                  )}

                  {/* Body State */}
                  {checkInStep === "body" && (
                    <CheckInQuestion
                      icon={Dumbbell}
                      title="Body State"
                      subtitle="How does your body feel?"
                      options={[
                        { value: "clear", label: "Clear", color: "bg-emerald-500" },
                        { value: "tense", label: "Tense", color: "bg-amber-500" },
                        { value: "exhausted", label: "Exhausted", color: "bg-rose-500" },
                      ]}
                      onSelect={(value) => handleCheckInSelect("body", value)}
                    />
                  )}

                  {/* Mood */}
                  {checkInStep === "mood" && (
                    <CheckInQuestion
                      icon={Smile}
                      title="Mood"
                      subtitle="How are you feeling emotionally?"
                      options={[
                        { value: "positive", label: "Positive", color: "bg-emerald-500", icon: Smile },
                        { value: "neutral", label: "Neutral", color: "bg-amber-500", icon: Meh },
                        { value: "irritable", label: "Irritable", color: "bg-rose-500", icon: Frown },
                      ]}
                      onSelect={(value) => handleCheckInSelect("mood", value)}
                    />
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="complete"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  {/* Mode Result */}
                  <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl text-white font-bold text-xl mb-6 ${
                    assignedMode === "defense" ? "bg-rose-500" :
                    assignedMode === "stability" ? "bg-amber-500" :
                    "bg-emerald-500"
                  }`}>
                    {assignedMode === "defense" && <Shield className="w-6 h-6" />}
                    {assignedMode === "stability" && <Target className="w-6 h-6" />}
                    {assignedMode === "growth" && <TrendingUp className="w-6 h-6" />}
                    {assignedMode?.toUpperCase()} MODE
                  </div>

                  <p className="text-slate-600 mb-8">
                    {assignedMode === "defense" && "Protect your stability. Small actions only."}
                    {assignedMode === "stability" && "Maintain your baseline. Steady execution."}
                    {assignedMode === "growth" && "Deploy your capacity. Time to push forward."}
                  </p>

                  {/* Stats Row */}
                  <div className="flex justify-center gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-600">{score}</div>
                      <div className="text-sm text-slate-500">Points Today</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-3xl font-bold text-orange-500">
                        <Flame className="w-6 h-6" />
                        {streak}
                      </div>
                      <div className="text-sm text-slate-500">Day Streak</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">{getMultiplier()}x</div>
                      <div className="text-sm text-slate-500">Multiplier</div>
                    </div>
                  </div>

                  {/* Mission Cards */}
                  {assignedMode && (
                    <div className="space-y-3 text-left">
                      <h3 className="font-bold text-slate-900 mb-4">Your Missions</h3>
                      {missionsByMode[assignedMode].map((mission, index) => (
                        <MissionCard
                          key={index}
                          mission={mission}
                          completed={completedMissions.includes(index)}
                          multiplier={getMultiplier()}
                          onComplete={() => handleMissionComplete(index, mission.points)}
                        />
                      ))}
                    </div>
                  )}

                  <button
                    onClick={resetCheckIn}
                    className="mt-8 px-6 py-3 text-indigo-600 font-medium hover:bg-indigo-50 rounded-xl transition-colors"
                  >
                    Reset Demo
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Mode Assignment Section */}
      <section id="how-it-works" className="py-20 bg-slate-50">
        <div className="container px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Mode Assignment System
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Based on your daily state, the system assigns you one of three operational modes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Defense Mode */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg border-2 border-rose-200 hover:border-rose-400 transition-colors"
            >
              <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-rose-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Defense Mode</h3>
              <p className="text-rose-600 font-medium mb-4">Protect Stability</p>
              <p className="text-slate-600">
                When capacity is low, focus on protection. Minimal actions, maximum preservation.
              </p>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-sm text-slate-500">Activated when:</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-600">
                  <li>Poor sleep + Low energy</li>
                  <li>Heavy load + Exhausted body</li>
                </ul>
              </div>
            </motion.div>

            {/* Stability Mode */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-lg border-2 border-amber-200 hover:border-amber-400 transition-colors"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Stability Mode</h3>
              <p className="text-amber-600 font-medium mb-4">Maintain Baseline</p>
              <p className="text-slate-600">
                When balanced, maintain your position. Steady actions, consistent output.
              </p>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-sm text-slate-500">Activated when:</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-600">
                  <li>Mixed state indicators</li>
                  <li>Average capacity levels</li>
                </ul>
              </div>
            </motion.div>

            {/* Growth Mode */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-lg border-2 border-emerald-200 hover:border-emerald-400 transition-colors"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Growth Mode</h3>
              <p className="text-emerald-600 font-medium mb-4">Deploy Capacity</p>
              <p className="text-slate-600">
                When operating at peak, push forward. Challenge actions, maximum output.
              </p>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-sm text-slate-500">Activated when:</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-600">
                  <li>Great sleep + High energy</li>
                  <li>Clear body + Positive mood</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Avatar System Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Avatar System
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Your avatar represents your system stability. It reacts to your actions and reflects your current state.
            </p>
          </motion.div>

          {/* Avatar Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar */}
              <div className="relative">
                <motion.div
                  animate={{
                    scale: avatarState === "energized" ? [1, 1.1, 1] : 1,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`w-48 h-48 rounded-full flex items-center justify-center text-8xl shadow-xl ${
                    avatarState === "calm" ? "bg-gradient-to-br from-blue-400 to-blue-500" :
                    avatarState === "focused" ? "bg-gradient-to-br from-purple-400 to-purple-500" :
                    avatarState === "fatigued" ? "bg-gradient-to-br from-slate-400 to-slate-500" :
                    avatarState === "overloaded" ? "bg-gradient-to-br from-rose-400 to-rose-500" :
                    "bg-gradient-to-br from-emerald-400 to-emerald-500"
                  }`}
                >
                  {avatarState === "calm" && <span className="animate-pulse">😌</span>}
                  {avatarState === "focused" && <span>🎯</span>}
                  {avatarState === "fatigued" && <span>😴</span>}
                  {avatarState === "overloaded" && <span>😵</span>}
                  {avatarState === "energized" && <span className="animate-bounce">⚡</span>}
                </motion.div>
                
                {/* Energy ring */}
                <div className="absolute -inset-2 rounded-full border-4 border-white/50" />
              </div>

              {/* States */}
              <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {(["calm", "focused", "fatigued", "overloaded", "energized"] as AvatarState[]).map((state) => (
                  <button
                    key={state}
                    onClick={() => setAvatarState(state)}
                    className={`p-4 rounded-2xl text-center transition-all ${
                      avatarState === state
                        ? "bg-white shadow-lg scale-105"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                  >
                    <span className="text-3xl block mb-2">
                      {state === "calm" && "😌"}
                      {state === "focused" && "🎯"}
                      {state === "fatigued" && "😴"}
                      {state === "overloaded" && "😵"}
                      {state === "energized" && "⚡"}
                    </span>
                    <span className="text-xs font-medium text-slate-600 capitalize">{state}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center text-slate-600">
              <p className="text-sm">
                When you complete missions, your avatar celebrates and gains energy.
                <br />
                When missions are missed, your avatar shows instability.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scoring Engine Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Scoring Engine
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Points accumulate. Streaks multiply. Consistency compounds.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Points Breakdown */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-3xl p-8"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                Points Breakdown
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-slate-700/50 rounded-xl">
                  <span className="text-slate-300">Daily Check-in</span>
                  <span className="font-bold text-emerald-400">+10 pts</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-700/50 rounded-xl">
                  <span className="text-slate-300">Defense Mission</span>
                  <span className="font-bold text-rose-400">5-10 pts</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-700/50 rounded-xl">
                  <span className="text-slate-300">Stability Mission</span>
                  <span className="font-bold text-amber-400">8-12 pts</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-700/50 rounded-xl">
                  <span className="text-slate-300">Growth Mission</span>
                  <span className="font-bold text-emerald-400">10-15 pts</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-indigo-600/30 border border-indigo-500/50 rounded-xl">
                <p className="text-sm text-indigo-200">
                  <strong>Formula:</strong> (10 + mission points) × multiplier
                </p>
              </div>
            </motion.div>

            {/* Multiplier System */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-3xl p-8"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-400" />
                Streak Multiplier
              </h3>
              
              <div className="space-y-3">
                {[
                  { day: "Day 1", mult: "1.0x", active: streak === 1 },
                  { day: "Day 2", mult: "1.2x", active: streak === 2 },
                  { day: "Day 3", mult: "1.4x", active: streak === 3 },
                  { day: "Day 4", mult: "1.6x", active: streak === 4 },
                  { day: "Day 5+", mult: "2.0x", active: streak >= 5 },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex justify-between items-center p-4 rounded-xl transition-colors ${
                      item.active
                        ? "bg-orange-500/30 border border-orange-400/50"
                        : "bg-slate-700/50"
                    }`}
                  >
                    <span className={item.active ? "text-white font-medium" : "text-slate-400"}>
                      {item.day}
                    </span>
                    <span className={`font-bold ${item.active ? "text-orange-400" : "text-slate-500"}`}>
                      {item.mult}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-rose-600/30 border border-rose-500/50 rounded-xl">
                <p className="text-sm text-rose-200">
                  <strong>Warning:</strong> Miss a day and your multiplier resets to 1.0x
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Mission Generator Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              System Mission Generator
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              The System receives your state data and generates personalized missions matched to your current capacity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white"
          >
            <div className="flex items-center gap-3 mb-8">
              <Brain className="w-8 h-8 text-purple-400" />
              <span className="text-slate-400 font-mono text-sm">CONTROL SYSTEM // MISSION GENERATOR</span>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Panel */}
              <div className="space-y-4">
                <h3 className="text-sm font-mono text-slate-500 uppercase tracking-wider mb-4">Input State</h3>
                {[
                  { label: "Sleep", value: "Okay", icon: Moon },
                  { label: "Energy", value: "Medium", icon: Zap },
                  { label: "Load", value: "Normal", icon: Target },
                  { label: "Body", value: "Tense", icon: Dumbbell },
                  { label: "Mood", value: "Neutral", icon: Meh },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-slate-800 rounded-lg">
                    <div className="flex items-center gap-3">
                      <item.icon className="w-4 h-4 text-slate-500" />
                      <span className="text-slate-400">{item.label}</span>
                    </div>
                    <span className="text-amber-400 font-mono">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Output Panel */}
              <div>
                <h3 className="text-sm font-mono text-slate-500 uppercase tracking-wider mb-4">Generated Missions</h3>
                <div className="bg-slate-800/50 border border-purple-500/30 rounded-xl p-6">
                  <div className="flex items-center gap-2 text-amber-400 font-bold mb-4">
                    <Target className="w-5 h-5" />
                    STABILITY MODE ASSIGNED
                  </div>
                  <div className="space-y-3 font-mono text-sm">
                    <p className="text-slate-300">
                      <span className="text-purple-400">{'>'}</span> Mission 1: Single-task 7 minutes
                    </p>
                    <p className="text-slate-300">
                      <span className="text-purple-400">{'>'}</span> Mission 2: Walk during call
                    </p>
                    <p className="text-slate-300">
                      <span className="text-purple-400">{'>'}</span> Mission 3: Protein first meal
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-700">
                    <p className="text-xs text-slate-500">
                      All missions under 20 minutes. Matched to current capacity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Leaderboard
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Compete with others. Build your streak. Climb the ranks.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl overflow-hidden shadow-xl border border-slate-200"
          >
            <div className="p-6 bg-slate-900 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-yellow-400" />
                  <span className="font-bold">Weekly Rankings</span>
                </div>
                <span className="text-sm text-slate-400">Updated daily</span>
              </div>
            </div>

            <div className="divide-y divide-slate-200">
              {leaderboardData.map((player, index) => (
                <motion.div
                  key={player.rank}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-5 hover:bg-white transition-colors"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    player.rank === 1 ? "bg-yellow-400 text-yellow-900" :
                    player.rank === 2 ? "bg-slate-300 text-slate-700" :
                    player.rank === 3 ? "bg-amber-600 text-amber-100" :
                    "bg-slate-100 text-slate-600"
                  }`}>
                    {player.rank}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-slate-900">{player.name}</div>
                    <div className="text-sm text-slate-500">{player.level}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-slate-900">{player.score.toLocaleString()}</div>
                    <div className="flex items-center justify-end gap-1 text-sm text-orange-500">
                      <Flame className="w-3 h-3" />
                      {player.streak} days
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Player Journey Section */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Player Journey
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Under 3 minutes of total interaction per day. Maximum impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Morning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-200"
            >
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                <Sun className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Morning</h3>
              <p className="text-amber-700 font-medium mb-4">60 seconds</p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Open app, run check-in</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Mode assigned automatically</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Missions appear</span>
                </li>
              </ul>
            </motion.div>

            {/* Day */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-200"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">During Day</h3>
              <p className="text-blue-700 font-medium mb-4">As you go</p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Complete missions naturally</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Avatar reacts to progress</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Points accumulate</span>
                </li>
              </ul>
            </motion.div>

            {/* Night */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 border border-purple-200"
            >
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Moon className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Night</h3>
              <p className="text-purple-700 font-medium mb-4">Automatic</p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>Daily score calculated</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>Multiplier updated</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>Leaderboard refreshed</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Game Master Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              System Game Master
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Clear. Strategic. Operational. Never motivational.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Sample Game Master Messages */}
            {[
              {
                mode: "Stability",
                message: "Mode Assigned: Stability. Maintain control. Avoid volatility. Missions deployed.",
                color: "border-amber-500",
              },
              {
                mode: "Defense",
                message: "Mode Assigned: Defense. Protect your capacity. Small actions only. Energy preservation priority.",
                color: "border-rose-500",
              },
              {
                mode: "Growth",
                message: "Mode Assigned: Growth. Deploy available capacity. Challenge-level missions active. Execute.",
                color: "border-emerald-500",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-slate-800 rounded-2xl p-6 border-l-4 ${item.color}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                    <Brain className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="font-mono text-sm text-slate-500">CONTROL // GAME MASTER</span>
                </div>
                <p className="text-lg font-medium text-slate-200">{item.message}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Future Expansion Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
        <div className="container px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Future CONTROL System
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              One scoring engine. Multiple platforms. Same rules everywhere.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: Globe, label: "Web App", status: "Prototype" },
              { icon: Smartphone, label: "Mobile App", status: "Planned" },
              { icon: MessageSquare, label: "Slack Bot", status: "Planned" },
              { icon: Users, label: "Teams Bot", status: "Planned" },
              { icon: Mail, label: "Email Game", status: "Planned" },
              { icon: Sparkles, label: "NxLife Layer", status: "Future" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
              >
                <div className="w-12 h-12 mx-auto bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-1">{item.label}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  item.status === "Prototype" ? "bg-emerald-500/30 text-emerald-200" :
                  item.status === "Planned" ? "bg-amber-500/30 text-amber-200" :
                  "bg-purple-500/30 text-purple-200"
                }`}>
                  {item.status}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-white/70 text-sm max-w-xl mx-auto">
              All versions share the same scoring engine and rule set. Your progress syncs across every platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-white">
        <div className="container px-4 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            This is a prototype concept page.
          </h2>
          <p className="text-slate-600 mb-8">
            CONTROL is currently in development. The interactions above demonstrate the vision for the daily game system.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection("check-in")}
              className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-colors"
            >
              Try the Check-In Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

// Check-In Question Component
function CheckInQuestion({
  icon: Icon,
  title,
  subtitle,
  options,
  onSelect,
}: {
  icon: React.ElementType
  title: string
  subtitle: string
  options: { value: string; label: string; color: string; icon?: React.ElementType }[]
  onSelect: (value: string) => void
}) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 mx-auto bg-indigo-100 rounded-2xl flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-indigo-600" />
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-500 mb-8">{subtitle}</p>
      <div className="flex flex-col sm:flex-row justify-center gap-3">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onSelect(option.value)}
            className={`flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-white transition-all hover:scale-105 hover:shadow-lg ${option.color}`}
          >
            {option.icon && <option.icon className="w-5 h-5" />}
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}

// Mission Card Component
function MissionCard({
  mission,
  completed,
  multiplier,
  onComplete,
}: {
  mission: { title: string; description: string; points: number; icon: React.ElementType }
  completed: boolean
  multiplier: number
  onComplete: () => void
}) {
  const Icon = mission.icon
  const earnedPoints = Math.round(mission.points * multiplier)

  return (
    <motion.div
      layout
      className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${
        completed
          ? "bg-emerald-50 border-2 border-emerald-200"
          : "bg-white border-2 border-slate-200 hover:border-indigo-300"
      }`}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
        completed ? "bg-emerald-100" : "bg-slate-100"
      }`}>
        {completed ? (
          <Check className="w-6 h-6 text-emerald-600" />
        ) : (
          <Icon className="w-6 h-6 text-slate-600" />
        )}
      </div>
      <div className="flex-1">
        <h4 className={`font-bold ${completed ? "text-emerald-700" : "text-slate-900"}`}>
          {mission.title}
        </h4>
        <p className={`text-sm ${completed ? "text-emerald-600" : "text-slate-500"}`}>
          {mission.description}
        </p>
      </div>
      <div className="text-right">
        {completed ? (
          <span className="text-emerald-600 font-bold">+{earnedPoints}</span>
        ) : (
          <button
            onClick={onComplete}
            className="px-4 py-2 bg-indigo-600 text-white text-sm font-bold rounded-xl hover:bg-indigo-700 transition-colors"
          >
            +{earnedPoints} pts
          </button>
        )}
      </div>
    </motion.div>
  )
}
