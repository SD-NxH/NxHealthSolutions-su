"use client"

import type React from "react"
import { useEffect, useState, useRef } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, ArrowRight, Filter, Loader2, Calendar, Tag, Globe } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { searchHealthInfo, getSearchFilters, type SearchFilters, type SearchResult } from "@/app/actions/search-actions"

export default function SearchResultsPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [searchQuery, setSearchQuery] = useState(query)
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState<SearchFilters>({})
  const [availableFilters, setAvailableFilters] = useState<any>({})

  const headerRef = useRef(null)
  const resultsRef = useRef(null)

  const isResultsInView = useInView(resultsRef, { once: true, amount: 0.1 })

  useEffect(() => {
    const loadFilters = async () => {
      const filterOptions = await getSearchFilters()
      setAvailableFilters(filterOptions)
    }
    loadFilters()
  }, [])

  useEffect(() => {
    if (query) {
      performSearch(query)
    }
  }, [query])

  const performSearch = async (searchTerm: string) => {
    if (!searchTerm.trim()) return

    setIsLoading(true)
    try {
      const searchResults = await searchHealthInfo(searchTerm, filters)
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

  const handleFilterChange = (filterType: string, value: string) => {
    const newFilters = { ...filters }
    if (value === "all") {
      delete newFilters[filterType as keyof SearchFilters]
    } else {
      newFilters[filterType as keyof SearchFilters] = value
    }
    setFilters(newFilters)

    // Re-search with new filters
    if (searchQuery) {
      performSearch(searchQuery)
    }
  }

  const clearFilters = () => {
    setFilters({})
    if (searchQuery) {
      performSearch(searchQuery)
    }
  }

  const getActiveFilterCount = () => {
    return Object.keys(filters).length
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
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-green-800 mb-6">
              Health & Wellness Search
            </h1>

            <form onSubmit={handleSearch} className="relative max-w-xl mx-auto mb-6">
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

            {/* Filter Toggle */}
            <div className="flex justify-center">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="rounded-full border-green-200 hover:border-green-500"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
                {getActiveFilterCount() > 0 && (
                  <Badge variant="secondary" className="ml-2 bg-green-100 text-green-800">
                    {getActiveFilterCount()}
                  </Badge>
                )}
              </Button>
            </div>

            {/* Filters Panel */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 p-6 bg-white rounded-lg border border-green-200 shadow-sm"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Tag className="h-4 w-4 inline mr-1" />
                      Category
                    </label>
                    <Select onValueChange={(value) => handleFilterChange("category", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="All categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All categories</SelectItem>
                        {availableFilters.categories?.map((cat: any) => (
                          <SelectItem key={cat.value} value={cat.value}>
                            {cat.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Source Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Globe className="h-4 w-4 inline mr-1" />
                      Source
                    </label>
                    <Select onValueChange={(value) => handleFilterChange("source", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="All sources" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All sources</SelectItem>
                        {availableFilters.sources?.map((source: any) => (
                          <SelectItem key={source.value} value={source.value}>
                            {source.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Date Range Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="h-4 w-4 inline mr-1" />
                      Date Range
                    </label>
                    <Select onValueChange={(value) => handleFilterChange("dateRange", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Any time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Any time</SelectItem>
                        {availableFilters.dateRanges?.map((range: any) => (
                          <SelectItem key={range.value} value={range.value}>
                            {range.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {getActiveFilterCount() > 0 && (
                  <div className="mt-4 flex justify-center">
                    <Button variant="outline" onClick={clearFilters} className="text-sm">
                      Clear all filters
                    </Button>
                  </div>
                )}
              </motion.div>
            )}

            <p className="text-sm text-gray-500 mt-3">
              Search our comprehensive health database with advanced filtering
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
              <p className="text-gray-600">Searching our health database...</p>
            </div>
          ) : hasSearched ? (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-serif font-light text-gray-900">
                  {results.length > 0
                    ? `Found ${results.length} results for "${query}"`
                    : `No results found for "${query}"`}
                </h2>
                {getActiveFilterCount() > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="text-sm text-gray-500">Active filters:</span>
                    {Object.entries(filters).map(([key, value]) => (
                      <Badge key={key} variant="secondary" className="bg-green-100 text-green-800">
                        {key}: {value}
                      </Badge>
                    ))}
                  </div>
                )}
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
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-xl text-green-700 hover:text-green-800 flex-1">
                              <Link href={result.internalUrl} className="flex items-center">
                                {result.title}
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </CardTitle>
                            <Badge variant="outline" className="ml-2 text-xs">
                              {result.category}
                            </Badge>
                          </div>
                          <CardDescription className="text-sm text-gray-500 flex items-center gap-4">
                            <span>Source: {result.source}</span>
                            <span>•</span>
                            <span>{new Date(result.date).toLocaleDateString()}</span>
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700">{result.snippet}</p>
                        </CardContent>
                        <CardFooter className="flex justify-between pt-0">
                          <Link
                            href={result.internalUrl}
                            className="text-green-600 hover:text-green-700 text-sm font-medium"
                          >
                            Read on NxHealth
                          </Link>
                          <Badge variant="secondary" className="text-xs">
                            Stay on NxHealth
                          </Badge>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="bg-green-50 rounded-lg p-8 text-center">
                  <p className="text-gray-700 mb-4">No results found for your search with current filters.</p>
                  <p className="text-gray-600 mb-6">Try adjusting your filters or using different keywords.</p>
                  <div className="flex gap-4 justify-center">
                    <Button onClick={clearFilters} variant="outline">
                      Clear Filters
                    </Button>
                    <Link href="/resources">
                      <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full">
                        Browse Resources
                      </Button>
                    </Link>
                  </div>
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
