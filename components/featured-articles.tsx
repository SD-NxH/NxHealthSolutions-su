"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { getRandomFeaturedArticles, type Article } from "@/lib/articles-data"

interface FeaturedArticlesProps {
  isInView: boolean
}

export function FeaturedArticles({ isInView }: FeaturedArticlesProps) {
  const [featuredArticles, setFeaturedArticles] = useState<Article[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Get random articles on mount (client-side)
    const randomArticles = getRandomFeaturedArticles(3)
    setFeaturedArticles(randomArticles)
    setIsLoaded(true)
  }, [])

  // Show skeleton while loading to prevent layout shift
  if (!isLoaded) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-card rounded-xl overflow-hidden shadow-md animate-pulse"
          >
            <div className="h-48 w-full bg-muted" />
            <div className="p-6">
              <div className="h-3 w-16 bg-muted rounded mb-3" />
              <div className="h-5 w-3/4 bg-muted rounded mb-3" />
              <div className="h-4 w-full bg-muted rounded mb-2" />
              <div className="h-4 w-2/3 bg-muted rounded mb-4" />
              <div className="h-4 w-24 bg-muted rounded" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {featuredArticles.map((article, index) => (
        <motion.div
          key={article.id}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
          className="bg-card rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg"
        >
          <div className="relative h-48 w-full">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <span className="text-xs font-semibold text-brand uppercase tracking-wider">
              {article.category}
            </span>
            <h3 className="text-xl font-serif font-medium text-gray-900 mt-2 mb-3">
              {article.title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-3">
              {article.description}
            </p>
            <Link
              href={article.url}
              className="inline-flex items-center text-brand hover:bg-brand-lighter font-medium"
            >
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
