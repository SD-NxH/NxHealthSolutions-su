"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, Clock, Calendar, Share2, Play, ExternalLink, Target, Lightbulb, TrendingUp, Heart } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function QualityLifeEpisode4Page() {
  const contentRef = useRef(null)
  const relatedRef = useRef(null)

  const isContentInView = useInView(contentRef, { once: true, amount: 0.1 })
  const isRelatedInView = useInView(relatedRef, { once: true, amount: 0.1 })

  const relatedArticles = [
    {
      title: "The Quality Life Series Has BEGUN",
      image: "/images/articles/quality-life-series.jpg",
      link: "/resources/articles/quality-life-series-has-begun",
      category: "Quality Life",
    },
    {
      title: "Oh Gosh, Protein Was Never The Problem",
      image: "/images/articles/protein-problem.jpg",
      link: "/resources/articles/protein-was-never-the-problem",
      category: "Quality Life",
    },
    {
      title: "A Quiet Realization About Health",
      image: "/images/articles/quiet-realization.jpg",
      link: "/resources/articles/quiet-realization-about-health",
      category: "Quality Life",
    },
  ]

  const keyTakeaways = [
    {
      icon: Target,
      title: "Start With a Decision",
      description: "Everything begins with asking yourself: 'If nothing in my life changed, what would my future look like?'",
    },
    {
      icon: Lightbulb,
      title: "Visualize Success",
      description: "If your thoughts are rooted in fear or doubt, your actions will reflect that. Believe in the outcome.",
    },
    {
      icon: TrendingUp,
      title: "Build Systems, Not Hopes",
      description: "Goals need to be specific and measurable. You're not just hoping for results—you're building a structure.",
    },
    {
      icon: Heart,
      title: "Empowerment Over Help",
      description: "Helping provides temporary relief. Empowerment creates lasting change.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[#faf9f6]">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/articles/quality-life-video-4.jpg"
            alt="Quality Life Episode 4 - This Is Why You're Stuck"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2c3e2d]/95 via-[#2c3e2d]/60 to-transparent" />
        </div>

        <div className="relative h-full container px-4 md:px-6 flex flex-col justify-end pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <Link
              href="/resources/articles"
              className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Articles
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-[#4a7c59] text-white px-4 py-1.5 rounded-full text-sm font-medium">
                Quality Life
              </span>
              <span className="flex items-center text-white/80 text-sm">
                <Calendar className="h-4 w-4 mr-1.5" /> April 12, 2026
              </span>
              <span className="flex items-center text-white/80 text-sm">
                <Clock className="h-4 w-4 mr-1.5" /> 8 min read
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight text-balance">
              This Is Why You&apos;re Stuck
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-6 text-pretty">
              Mental health is a lifestyle. Your thoughts, feelings, and behaviors are all connected. Here&apos;s how to break through.
            </p>
            <p className="text-white/80 text-lg">
              By <span className="font-medium text-white">Eric Johnson, M.Sc</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 bg-[#f0ebe3]">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#e5dfd3]">
              <div className="aspect-video relative bg-black">
                <iframe
                  src="https://www.youtube.com/embed/VIDEO_ID_EPISODE_4"
                  title="Quality Life Episode 4 - This Is Why You're Stuck"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="p-6 bg-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Play className="h-5 w-5 text-[#4a7c59]" />
                    <p className="text-sm text-[#5c6d5e]">Watch the full episode on YouTube</p>
                  </div>
                  <a
                    href="https://youtube.com/playlist?list=PLb4-LURph2uCCNtLXPeHb-XUGHVhfpseq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4a7c59] hover:text-[#4a7c59]/80 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section ref={contentRef} className="py-12 bg-[#faf9f6]">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8"
            >
              <div className="prose prose-lg max-w-none">
                {/* Introduction */}
                <div className="bg-[#f0ebe3] border-l-4 border-[#4a7c59] p-6 rounded-r-lg mb-8">
                  <p className="text-xl text-[#2c3e2d] font-medium italic mb-0">
                    In this Episode of Quality Life, I brought Fatima on to dive deeper into one of the three core pillars we talk about all the time: <strong>mind, movement, and nutrition</strong>. Fatima specializes in the mental side.
                  </p>
                </div>

                <p className="text-[#5c6d5e] leading-relaxed mb-6">
                  We wanted to address a common challenge people face—feeling like they don&apos;t have time, not knowing where to begin, or believing that change is too difficult.
                </p>

                {/* Where to Begin */}
                <h2 className="text-3xl font-bold text-[#2c3e2d] mt-12 mb-6">Where Does Someone Begin?</h2>

                <p className="text-[#5c6d5e] leading-relaxed mb-6">
                  We started with a simple but powerful question: <strong className="text-[#2c3e2d]">Where does someone begin if they want to improve their mental health?</strong>
                </p>

                <div className="bg-[#4a7c59] text-white rounded-2xl p-8 mb-8">
                  <p className="text-2xl font-bold mb-4">
                    Everything starts with a decision.
                  </p>
                  <p className="text-xl text-white/90 mb-0">
                    Ask yourself: &quot;If nothing in my life changed, what would my future look like?&quot;
                  </p>
                </div>

                <p className="text-[#5c6d5e] leading-relaxed mb-8">
                  That question creates awareness. From there, it becomes about being intentional and choosing to make a change.
                </p>

                {/* Intention to Action */}
                <h2 className="text-3xl font-bold text-[#2c3e2d] mt-12 mb-6">From Intention to Daily Action</h2>

                <p className="text-[#5c6d5e] leading-relaxed mb-6">
                  Once that decision is made, the next step is understanding how to turn that intention into daily action. <strong className="text-[#2c3e2d]">Mental health isn&apos;t just a one-time choice—it becomes a lifestyle.</strong>
                </p>

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5dfd3] mb-8">
                  <p className="text-lg text-[#5c6d5e] leading-relaxed mb-4">
                    Fatima emphasized that your <strong className="text-[#2c3e2d]">thoughts, feelings, and behaviors are all connected</strong>.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-[#d4a373] mt-2 shrink-0" />
                      <span className="text-[#5c6d5e]">If your thoughts are rooted in fear or doubt, your actions will reflect that.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-[#4a7c59] mt-2 shrink-0" />
                      <span className="text-[#5c6d5e]">But if you can visualize success and genuinely believe in the outcome, your behavior begins to align with that vision.</span>
                    </li>
                  </ul>
                  <p className="text-xl font-bold text-[#4a7c59] mt-6 mb-0">
                    It all comes down to one question: How bad do you want it?
                  </p>
                </div>

                {/* Define Clear Goals */}
                <h2 className="text-3xl font-bold text-[#2c3e2d] mt-12 mb-6">Define Clear Goals</h2>

                <p className="text-[#5c6d5e] leading-relaxed mb-6">
                  We also discussed the importance of defining clear goals.
                </p>

                <div className="grid gap-4 mb-8">
                  <div className="flex items-center gap-3 bg-[#fff8f0] rounded-lg p-4 border border-[#e5dfd3]">
                    <span className="text-2xl">&#10060;</span>
                    <span className="text-[#5c6d5e]">&quot;I want to lose weight&quot;</span>
                  </div>
                  <div className="flex items-center gap-3 bg-[#fff8f0] rounded-lg p-4 border border-[#e5dfd3]">
                    <span className="text-2xl">&#10060;</span>
                    <span className="text-[#5c6d5e]">&quot;I want to feel better&quot;</span>
                  </div>
                </div>

                <p className="text-[#5c6d5e] leading-relaxed mb-6">
                  These aren&apos;t enough. <strong className="text-[#2c3e2d]">Goals need to be specific and measurable.</strong>
                </p>

                <div className="grid gap-4 mb-8">
                  <div className="flex items-center gap-3 bg-[#f0f7f1] rounded-lg p-4 border border-[#c8e6d7]">
                    <span className="text-2xl">&#9989;</span>
                    <span className="text-[#5c6d5e]">Committing to walking three times a week</span>
                  </div>
                  <div className="flex items-center gap-3 bg-[#f0f7f1] rounded-lg p-4 border border-[#c8e6d7]">
                    <span className="text-2xl">&#9989;</span>
                    <span className="text-[#5c6d5e]">Losing a specific number of pounds by a set date</span>
                  </div>
                </div>

                <div className="bg-[#f0ebe3] border-l-4 border-[#d4a373] p-6 rounded-r-lg mb-8">
                  <p className="text-lg text-[#2c3e2d] font-bold mb-2">
                    This is where systems come into play.
                  </p>
                  <p className="text-[#5c6d5e] mb-0">
                    You&apos;re not just hoping for results—you&apos;re building a structure that supports them.
                  </p>
                </div>

                {/* No Perfect Time */}
                <h2 className="text-3xl font-bold text-[#2c3e2d] mt-12 mb-6">There Is No Perfect Time</h2>

                <p className="text-[#5c6d5e] leading-relaxed mb-6">
                  Another key point we explored is that <strong className="text-[#2c3e2d]">there is no perfect time to start</strong>. Many people wait until they feel ready, but that moment rarely comes.
                </p>

                <div className="bg-[#4a7c59] text-white rounded-2xl p-8 mb-8">
                  <p className="text-2xl font-bold mb-4">
                    Growth requires discomfort.
                  </p>
                  <p className="text-white/90 mb-0">
                    You have to be willing to take the first step even when you feel unprepared. Progress happens when you move forward despite fear.
                  </p>
                </div>

                {/* Consistency Over Perfection */}
                <h2 className="text-3xl font-bold text-[#2c3e2d] mt-12 mb-6">Consistency, Not Perfection</h2>

                <p className="text-[#5c6d5e] leading-relaxed mb-6">
                  We also acknowledged that not every day will be perfect. Some days will be harder than others, especially when dealing with mental health challenges.
                </p>

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5dfd3] mb-8">
                  <p className="text-xl text-[#2c3e2d] font-bold mb-4">The goal isn&apos;t perfection—it&apos;s consistency.</p>
                  <ul className="space-y-3 text-[#5c6d5e]">
                    <li className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-[#4a7c59] mt-2 shrink-0" />
                      <span>On good days, you push forward.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-[#4a7c59] mt-2 shrink-0" />
                      <span>On tough days, you avoid self-judgment and keep going.</span>
                    </li>
                  </ul>
                  <p className="text-[#5c6d5e] mt-4 mb-0">
                    Writing down your goals, visualizing outcomes, and checking in with yourself regularly can help maintain that momentum.
                  </p>
                </div>

                {/* The Power of Choice */}
                <h2 className="text-3xl font-bold text-[#2c3e2d] mt-12 mb-6">The Power of Choice</h2>

                <p className="text-[#5c6d5e] leading-relaxed mb-6">
                  A major theme throughout this conversation is <strong className="text-[#2c3e2d]">choice</strong>. You can continue living in a way that leads to burnout, stress, or poor health, or you can choose to create a better quality of life.
                </p>

                <p className="text-[#5c6d5e] leading-relaxed mb-8">
                  That shift doesn&apos;t happen overnight, but it starts with one intentional decision followed by consistent action.
                </p>

                {/* Environment Matters */}
                <h2 className="text-3xl font-bold text-[#2c3e2d] mt-12 mb-6">Your Environment Matters</h2>

                <p className="text-[#5c6d5e] leading-relaxed mb-6">
                  We also talked about the importance of your environment. <strong className="text-[#2c3e2d]">Your surroundings influence your habits more than you realize.</strong>
                </p>

                <div className="bg-[#f0ebe3] rounded-2xl p-8 mb-8">
                  <p className="text-lg text-[#5c6d5e] leading-relaxed mb-4">
                    Whether it&apos;s your physical space, your social circle, or your daily routines, everything plays a role in shaping your behavior.
                  </p>
                  <p className="text-xl font-bold text-[#4a7c59] mb-0">
                    If you want change, you have to create an environment that supports that change.
                  </p>
                </div>

                {/* Everything is Connected */}
                <h2 className="text-3xl font-bold text-[#2c3e2d] mt-12 mb-6">Everything Is Connected</h2>

                <p className="text-[#5c6d5e] leading-relaxed mb-6">
                  Another critical takeaway is that <strong className="text-[#2c3e2d]">everything is connected</strong>. Your mental health, your nutrition, your movement, your environment—they all work together.
                </p>

                <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-[#4a7c59] mb-8">
                  <p className="text-lg text-[#5c6d5e] leading-relaxed mb-4">
                    If one area is off, it affects the others.
                  </p>
                  <p className="text-xl font-bold text-[#4a7c59] mb-0">
                    True healing and growth come from addressing the whole system, not just one piece.
                  </p>
                </div>

                {/* Helping vs Empowering */}
                <h2 className="text-3xl font-bold text-[#2c3e2d] mt-12 mb-6">Helping vs. Empowering</h2>

                <p className="text-[#5c6d5e] leading-relaxed mb-6">
                  Toward the end, we made an important distinction between helping and empowering.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-[#fff8f0] rounded-xl p-6 border border-[#e5dfd3]">
                    <h4 className="text-lg font-bold text-[#2c3e2d] mb-2">Helping</h4>
                    <p className="text-[#5c6d5e] mb-0">Provides temporary relief</p>
                  </div>
                  <div className="bg-[#f0f7f1] rounded-xl p-6 border border-[#c8e6d7]">
                    <h4 className="text-lg font-bold text-[#4a7c59] mb-2">Empowerment</h4>
                    <p className="text-[#5c6d5e] mb-0">Creates lasting change</p>
                  </div>
                </div>

                <p className="text-[#5c6d5e] leading-relaxed mb-8">
                  The goal is not just to give people information, but to inspire action—to get someone to say, <strong className="text-[#2c3e2d]">&quot;I need to start today.&quot;</strong> Whether that&apos;s journaling, planning meals, or simply becoming more aware of their habits, small steps create real momentum.
                </p>

                {/* Nature Analogy */}
                <div className="bg-gradient-to-br from-[#4a7c59] to-[#2c3e2d] rounded-2xl p-8 mb-8 text-white">
                  <p className="text-lg leading-relaxed mb-4">
                    We even tied this concept back to nature. Just like a plant needs the right environment, nutrients, and care to grow, so do we.
                  </p>
                  <p className="text-xl font-bold mb-0">
                    You can&apos;t expect something to thrive without nurturing it. The same applies to your health, your mindset, and your life.
                  </p>
                </div>

                {/* Call to Action */}
                <h2 className="text-3xl font-bold text-[#2c3e2d] mt-12 mb-6">Take One Small Step</h2>

                <p className="text-[#5c6d5e] leading-relaxed mb-6">
                  To close, Fatima challenged everyone to take one small step. It doesn&apos;t have to be perfect. It just has to be intentional.
                </p>

                <div className="bg-[#4a7c59] text-white rounded-2xl p-8 mb-12 text-center">
                  <p className="text-2xl font-bold mb-4">
                    Small changes each day lead to a bigger impact.
                  </p>
                  <p className="text-xl text-white/90 mb-0">
                    The real question is: What are you going to do with this information?
                  </p>
                </div>

                {/* Share Section */}
                <div className="flex items-center justify-between mt-12 pt-8 border-t border-[#e5dfd3]">
                  <p className="text-[#5c6d5e] font-medium">Share this article:</p>
                  <div className="flex gap-3">
                    <Button variant="outline" size="icon" className="rounded-full border-[#e5dfd3] bg-transparent hover:bg-[#f0ebe3]">
                      <Share2 className="h-5 w-5 text-[#4a7c59]" />
                      <span className="sr-only">Share</span>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                {/* Key Takeaways */}
                <Card className="bg-white border-[#e5dfd3] overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#2c3e2d] mb-4">Key Takeaways</h3>
                    <div className="space-y-4">
                      {keyTakeaways.map((takeaway, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-[#f0f7f1] flex items-center justify-center shrink-0">
                            <takeaway.icon className="h-5 w-5 text-[#4a7c59]" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#2c3e2d] text-sm">{takeaway.title}</h4>
                            <p className="text-xs text-[#5c6d5e]">{takeaway.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>

                <Card className="bg-white border-[#e5dfd3] overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#2c3e2d] mb-3">About the Author</h3>
                    <p className="text-[#5c6d5e] mb-4">
                      <strong>Eric Johnson, M.Sc</strong> is a health science and nutrition expert dedicated to making wellness accessible to everyone through education and advocacy.
                    </p>
                    <Button asChild className="w-full bg-[#4a7c59] hover:bg-[#4a7c59]/90 text-white">
                      <Link href="/about">Learn More About Coach J</Link>
                    </Button>
                  </div>
                </Card>

                <Card className="bg-[#f0ebe3] border-[#e5dfd3] p-6">
                  <h3 className="text-lg font-bold text-[#2c3e2d] mb-4">Article Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {["mental health", "mindset", "goals", "consistency", "empowerment", "quality life"].map((tag) => (
                      <span
                        key={tag}
                        className="bg-white px-3 py-1.5 rounded-full text-sm text-[#5c6d5e] border border-[#e5dfd3] hover:bg-[#faf9f6] transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>

                <Card className="bg-gradient-to-br from-[#4a7c59] to-[#2c3e2d] text-white border-0">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">Quality Life Series</h3>
                    <p className="mb-6 text-white/90">
                      Explore more episodes that break down health concepts with clarity and practical systems.
                    </p>
                    <Button asChild variant="secondary" className="w-full bg-white text-[#4a7c59] hover:bg-white/90">
                      <Link href="/resources/articles/quality-life-series-has-begun">View All Episodes</Link>
                    </Button>
                  </div>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section ref={relatedRef} className="py-16 bg-[#f0ebe3]">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isRelatedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-[#2c3e2d] mb-8 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isRelatedInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={article.link}>
                    <Card className="group overflow-hidden border-[#e5dfd3] hover:shadow-lg transition-all duration-300 h-full bg-white">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="bg-[#4a7c59] text-white px-3 py-1 rounded-full text-xs font-medium">
                            {article.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-[#2c3e2d] group-hover:text-[#4a7c59] transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
