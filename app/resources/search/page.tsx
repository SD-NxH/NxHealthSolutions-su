"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, ArrowRight, ExternalLink, Loader2 } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { searchHealthInfo } from "@/app/actions/search-actions"

interface SearchResult {
  title: string
  snippet: string
  url: string
  source: string
}

export default function SearchResultsPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [searchQuery, setSearchQuery] = useState(query)
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  const headerRef = useRef(null)
  const resultsRef = useRef(null)

  const isResultsInView = useInView(resultsRef, { once: true, amount: 0.1 })

  useEffect(() => {
    if (query) {
      performSearch(query)
    }
  }, [query])

  const performSearch = async (searchTerm: string) => {
    if (!searchTerm.trim()) return

    setIsLoading(true)
    try {
      const searchResults = await searchHealthInfo(searchTerm)
      setResults(searchResults)
      setHasSearched(true)
    } catch (error) {
      console.error("Search error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    performSearch(searchQuery)

    // Update URL with search query without page reload
    const url = new URL(window.location.href)
    url.searchParams.set("q", searchQuery)
    window.history.pushState({}, "", url)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section ref={headerRef} className="relative w-full py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-green-800 mb-6">
              Health & Wellness Search
            </h1>

            <form onSubmit={handleSearch} className="relative max-w-xl mx-auto">
              <Input
                type="text"
                placeholder="Search for health, wellness, nutrition info..."
                className="pl-10 pr-4 py-6 rounded-full border-green-200 focus:border-green-500 focus:ring-green-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Button
                type="submit"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full bg-green-600 hover:bg-green-700 h-10 w-10 p-0"
                disabled={isLoading}
              >
                {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Search className="h-5 w-5" />}
                <span className="sr-only">Search</span>
              </Button>
            </form>

            <p className="text-sm text-gray-500 mt-3">
              Search for health topics, nutrition information, wellness tips, and more
            </p>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section ref={resultsRef} className="py-12 bg-white flex-grow">
        <div className="container px-4 md:px-6">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="h-12 w-12 text-green-600 animate-spin mb-4" />
              <p className="text-gray-600">Searching the web for health information...</p>
            </div>
          ) : hasSearched ? (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-serif font-light text-gray-900">
                  {results.length > 0 ? `Search results for "${query}"` : `No results found for "${query}"`}
                </h2>
                <p className="text-gray-600 mt-2">
                  {results.length > 0
                    ? `Found ${results.length} results related to your search`
                    : "Try a different search term or browse our resources below"}
                </p>
              </div>

              {results.length > 0 ? (
                <div className="space-y-6">
                  {results.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isResultsInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="overflow-hidden hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-xl text-green-700 hover:text-green-800">
                            <Link
                              href={`/resources/article?title=${encodeURIComponent(result.title)}&source=${encodeURIComponent(result.source)}&content=${encodeURIComponent(result.snippet)}`}
                              className="flex items-center"
                            >
                              {result.title}
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </CardTitle>
                          <CardDescription className="text-sm text-gray-500">Source: {result.source}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700">{result.snippet}</p>
                        </CardContent>
                        <CardFooter className="flex justify-between pt-0">
                          <Link
                            href={`/resources/article?title=${encodeURIComponent(result.title)}&source=${encodeURIComponent(result.source)}&content=${encodeURIComponent(result.snippet)}`}
                            className="text-green-600 hover:text-green-700 text-sm font-medium"
                          >
                            Read on NxHealth
                          </Link>
                          <a
                            href={result.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-700 text-sm flex items-center"
                          >
                            Original source <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="bg-green-50 rounded-lg p-8 text-center">
                  <p className="text-gray-700 mb-4">No results found for your search.</p>
                  <p className="text-gray-600 mb-6">
                    Try using different keywords or explore our curated resources below.
                  </p>
                  <Link href="/resources">
                    <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full">
                      Browse Resources
                    </Button>
                  </Link>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-6">Enter a search term above to find health and wellness information.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Card className="text-center">
                  <CardHeader>
                    <CardTitle>Nutrition</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Discover information about healthy eating, superfoods, and dietary plans.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => {
                        setSearchQuery("nutrition superfoods")
                        performSearch("nutrition superfoods")
                      }}
                    >
                      Search Nutrition
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <CardTitle>Wellness</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Find tips for mental health, stress management, and overall wellbeing.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => {
                        setSearchQuery("holistic wellness")
                        performSearch("holistic wellness")
                      }}
                    >
                      Search Wellness
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <CardTitle>Fitness</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Learn about exercise routines, movement practices, and physical health.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => {
                        setSearchQuery("fitness exercises")
                        performSearch("fitness exercises")
                      }}
                    >
                      Search Fitness
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
