"use client"

import { motion } from "framer-motion"
import { NewsletterForm } from "@/components/newsletter-form"
import { Mail, Heart, Sparkles } from "lucide-react"

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-lighter mb-6">
              <Mail className="w-8 h-8 text-brand" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-4">
              Sign Up For Our Newsletter
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Get exclusive health insights, solutions, wellness strategies, and NxHealth updates directly to your inbox.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Form Section - Matching Homepage Style */}
      <section className="pb-20 md:pb-28">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-r from-brand-lighter to-blue-50 rounded-2xl p-8 md:p-12 text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-medium text-gray-900 mb-3">
              Stay In The Know About NxHealth
            </h2>
            <p className="text-gray-600 mb-6">
              Get exclusive health insights, wellness tips, and be the first to know about our latest resources and special offers.
            </p>
            <NewsletterForm />
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-light text-gray-900 mb-4">
              What You&apos;ll Receive
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Join our community and get access to valuable health content curated by Coach J.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-xl p-6 text-center shadow-sm"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-lighter mb-4">
                <Heart className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Health Insights</h3>
              <p className="text-gray-600 text-sm">
                Evidence-based health tips and strategies to improve your wellbeing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white rounded-xl p-6 text-center shadow-sm"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-lighter mb-4">
                <Sparkles className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Exclusive Content</h3>
              <p className="text-gray-600 text-sm">
                Be the first to know about new articles, recipes, and wellness programs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white rounded-xl p-6 text-center shadow-sm"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-lighter mb-4">
                <Mail className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">NxHealth Updates</h3>
              <p className="text-gray-600 text-sm">
                Stay connected with the latest from NxHealth and our community.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
