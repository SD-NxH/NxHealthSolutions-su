"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, Clock, Calendar, AlertTriangle, Skull, Brain, Flame, Eye, Zap, HeartPulse, ShieldAlert, ChevronRight } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function IngredientInvestigationHotChipPage() {
  const contentRef = useRef(null)
  const subscribeRef = useRef(null)

  const isContentInView = useInView(contentRef, { once: true, amount: 0.1 })
  const isSubscribeInView = useInView(subscribeRef, { once: true, amount: 0.1 })

  const healthConcerns = [
    {
      icon: Brain,
      title: "Neurobehavioral & Neurotoxic Risks",
      description: "Potential impact on brain function and behavior patterns",
    },
    {
      icon: Zap,
      title: "Metabolic Dysfunction",
      description: "Disruption to your body's natural metabolic processes",
    },
    {
      icon: HeartPulse,
      title: "Immune System Decline",
      description: "Weakening of the body's natural defense mechanisms",
    },
    {
      icon: ShieldAlert,
      title: "Gut Health Deterioration",
      description: "Damage to the digestive system and microbiome",
    },
  ]

  const warningQuestions = [
    "Do you observe a child becoming suddenly hyperactive, irritable, or restless shortly after consuming this snack?",
    "Have you noticed a \"behavioral crash\" or extreme mood swings that seem to follow after eating lots of these snacks?",
    "Do you see difficulty with focus or concentration?",
    "Do you ever experience a \"bottomless\" hunger, where you can finish an entire package and still feel an urge to keep eating?",
    "Do you experience \"brain fog\" or a sharp energy crash after eating this snack?",
    "Do you deal with unexplained skin rashes, joint pain, or allergic reactions that flare up without a clear cause?",
    "Have you experienced chronic digestive discomfort?",
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
      {/* Hero Section - Dark & Dramatic */}
      <section className="relative w-full min-h-[70vh] md:min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/articles/ingredient-investigation-hot-chip.png"
            alt="The Multi-Color Addictive Hot Chip - Ingredient Investigation"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/60 to-transparent" />
        </div>

        <div className="relative h-full container px-4 md:px-6 flex flex-col justify-end pb-16 min-h-[70vh] md:min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <Link
              href="/resources/articles"
              className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Articles
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-red-600 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                <Eye className="h-4 w-4" />
                Ingredient Investigation
              </span>
              <span className="flex items-center text-gray-400 text-sm">
                <Calendar className="h-4 w-4 mr-1.5" /> April 28, 2026
              </span>
              <span className="flex items-center text-gray-400 text-sm">
                <Clock className="h-4 w-4 mr-1.5" /> 10 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
              The Multi-Color<br />
              <span className="text-red-500">Addictive</span> Hot Chip
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light mb-6 max-w-2xl">
              This rolled chip has had children and adults in a choke hold since 2001.
            </p>
            <p className="text-gray-500 text-lg">
              Investigation by <span className="font-medium text-white">Coach J (@coachj.58)</span>
            </p>
          </motion.div>
        </div>

        {/* Animated scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronRight className="h-8 w-8 text-red-500 rotate-90" />
        </motion.div>
      </section>

      {/* Warning Banner */}
      <section className="bg-gradient-to-r from-red-900/50 via-red-800/50 to-red-900/50 border-y border-red-500/30">
        <div className="container px-4 md:px-6 py-6">
          <div className="flex items-center justify-center gap-4 text-center">
            <AlertTriangle className="h-6 w-6 text-red-500 shrink-0" />
            <p className="text-red-200 font-medium">
              Welcome to the Ingredient Investigation, where I investigate popular foods and snacks so you don&apos;t have to.
            </p>
            <AlertTriangle className="h-6 w-6 text-red-500 shrink-0" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section ref={contentRef} className="py-16 bg-[#0a0a0a]">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8"
            >
              <div className="prose prose-lg prose-invert max-w-none">
                {/* Introduction */}
                <div className="bg-gradient-to-r from-red-950/50 to-orange-950/30 border-l-4 border-red-500 p-6 rounded-r-lg mb-10">
                  <p className="text-xl text-gray-200 font-medium italic mb-0">
                    The intense heat, super seasoned flavored &apos;snacks&apos; are everywhere: workplaces, backpacks, desks, stores, and prize pots. But we seem to gloss past the damage the &quot;product&quot; has caused and the potential harm of constant consumption.
                  </p>
                </div>

                <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                  Let&apos;s get started!
                </p>

                {/* Health Concerns Grid */}
                <h2 className="text-3xl font-black text-white mt-16 mb-8 flex items-center gap-3">
                  <Skull className="h-8 w-8 text-red-500" />
                  Health Concerns From This Snack
                </h2>

                <div className="grid md:grid-cols-2 gap-4 mb-12">
                  {healthConcerns.map((concern, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gradient-to-br from-gray-900 to-gray-950 border border-red-500/20 rounded-xl p-6 hover:border-red-500/50 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                          <concern.icon className="h-6 w-6 text-red-500" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-lg mb-1">{concern.title}</h4>
                          <p className="text-gray-500 text-sm mb-0">{concern.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* The Moderation Myth */}
                <div className="bg-gradient-to-r from-orange-950/30 to-red-950/30 rounded-2xl p-8 mb-12 border border-orange-500/20">
                  <h3 className="text-2xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                    <Flame className="h-6 w-6" />
                    The &quot;Moderation&quot; Myth
                  </h3>
                  <p className="text-gray-300 text-lg italic mb-4">
                    &quot;But I only eat them in moderation.&quot;
                  </p>
                  <p className="text-gray-300 text-lg italic mb-0">
                    &quot;But I only let them eat them a couple of times during the week.&quot;
                  </p>
                </div>

                {/* Warning Questions */}
                <h2 className="text-3xl font-black text-white mt-16 mb-6 flex items-center gap-3">
                  <AlertTriangle className="h-8 w-8 text-yellow-500" />
                  Do You Experience Any of These?
                </h2>

                <p className="text-gray-400 leading-relaxed mb-8">
                  Do you experience or witness any of these happenings?
                </p>

                <div className="space-y-4 mb-12">
                  {warningQuestions.map((question, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
                      className="flex items-start gap-4 bg-gray-900/50 border border-gray-800 rounded-lg p-4 hover:border-yellow-500/30 transition-colors"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center mt-0.5">
                        <span className="text-yellow-500 font-bold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-gray-300 mb-0">{question}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-br from-red-950 via-gray-900 to-gray-950 rounded-2xl p-8 border border-red-500/30 mb-12">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    If so, you should read more into this investigation.
                  </h3>
                  <p className="text-gray-400 mb-6">
                    I break down the ingredients list one by one for you to understand. Then, I make sense of the ingredients and how they may be impacting your health.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="#subscribe">
                      <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 h-auto">
                        Get the Full Investigation
                        <ChevronRight className="h-5 w-5 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                {/* Series Info Card */}
                <Card className="p-6 bg-gray-900 border-red-500/20 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="h-6 w-6 text-red-500" />
                    <h3 className="text-lg font-bold">Ingredient Investigation</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    A dark dive into the ingredients hiding in your favorite foods. Captivating. Revealing. Essential reading.
                  </p>
                  <div className="border-t border-gray-800 pt-4">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Series Theme</p>
                    <p className="text-gray-300 text-sm">Dark, captivating investigations designed for deep reading and discovery.</p>
                  </div>
                </Card>

                {/* Warning Card */}
                <Card className="p-6 bg-gradient-to-br from-red-950/50 to-gray-900 border-red-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Skull className="h-6 w-6 text-red-500" />
                    <h3 className="text-lg font-bold text-white">Key Warning Signs</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2 text-gray-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                      Hyperactivity after eating
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                      Extreme mood swings
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                      Bottomless hunger
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                      Brain fog & energy crashes
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                      Unexplained skin issues
                    </li>
                  </ul>
                </Card>

                {/* More Investigations Coming */}
                <Card className="p-6 bg-gray-900 border-gray-800">
                  <h3 className="text-lg font-bold text-white mb-2">More Investigations Coming</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Subscribe to get notified when new Ingredient Investigations drop.
                  </p>
                  <Link href="#subscribe">
                    <Button variant="outline" className="w-full border-red-500/50 text-red-400 hover:bg-red-500/10 hover:text-red-300">
                      Subscribe Now
                    </Button>
                  </Link>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section id="subscribe" ref={subscribeRef} className="py-20 bg-gradient-to-b from-[#0a0a0a] via-red-950/20 to-[#0a0a0a]">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSubscribeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center">
                <Eye className="h-8 w-8 text-red-500" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Stay Informed
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Subscribe to get the full ingredient breakdown and future investigations delivered to you.
            </p>
            
            {/* Substack Embed */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-red-500/20">
              <iframe 
                src="https://coachj58.substack.com/embed" 
                width="100%" 
                height="320" 
                style={{ border: "1px solid #333", background: "#0a0a0a", borderRadius: "12px" }}
                frameBorder="0" 
                scrolling="no"
                title="Subscribe to Ingredient Investigation"
              />
            </div>

            <p className="text-gray-500 text-sm mt-6">
              Join the investigation. Know what you&apos;re really eating.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Back to Articles */}
      <section className="py-12 bg-[#0a0a0a] border-t border-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex justify-center">
            <Link href="/resources/articles">
              <Button variant="outline" className="border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Back to All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
