"use client"

import { Card, CardContent } from "@/components/ui/card"

export default function CoconutLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Hero Section Skeleton */}
      <div className="bg-gradient-to-r from-amber-100 via-orange-100 to-yellow-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="w-20 h-20 bg-amber-200 rounded-full mx-auto mb-6 animate-pulse" />
            <div className="h-12 bg-amber-200 rounded-lg mx-auto mb-4 max-w-md animate-pulse" />
            <div className="h-6 bg-amber-200 rounded-lg mx-auto mb-6 max-w-2xl animate-pulse" />
            <div className="flex justify-center gap-3">
              <div className="h-6 w-24 bg-amber-200 rounded-full animate-pulse" />
              <div className="h-6 w-24 bg-orange-200 rounded-full animate-pulse" />
              <div className="h-6 w-24 bg-yellow-200 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Image Skeleton */}
      <div className="max-w-6xl mx-auto px-4 mb-12 -mt-8">
        <div className="h-96 bg-amber-200 rounded-xl animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Content Skeletons */}
        <div className="space-y-16">
          {/* Introduction Skeleton */}
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-8">
              <div className="space-y-3">
                <div className="h-4 bg-amber-200 rounded animate-pulse" />
                <div className="h-4 bg-amber-200 rounded animate-pulse" />
                <div className="h-4 bg-amber-200 rounded w-3/4 animate-pulse" />
              </div>
            </CardContent>
          </Card>

          {/* Nutrition Grid Skeleton */}
          <div>
            <div className="h-8 bg-amber-200 rounded mx-auto mb-8 w-64 animate-pulse" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} className="bg-white border-amber-200">
                  <CardContent className="p-6 text-center">
                    <div className="w-8 h-8 bg-amber-200 rounded mx-auto mb-3 animate-pulse" />
                    <div className="h-4 bg-amber-200 rounded mb-2 animate-pulse" />
                    <div className="h-4 bg-amber-200 rounded w-1/2 mx-auto animate-pulse" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits Grid Skeleton */}
          <div>
            <div className="h-8 bg-amber-200 rounded mx-auto mb-8 w-64 animate-pulse" />
            <div className="grid md:grid-cols-2 gap-8">
              {Array.from({ length: 4 }).map((_, i) => (
                <Card key={i} className="bg-amber-50 border-amber-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-6 h-6 bg-amber-200 rounded animate-pulse" />
                      <div className="h-5 bg-amber-200 rounded flex-1 animate-pulse" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 bg-amber-200 rounded animate-pulse" />
                      <div className="h-4 bg-amber-200 rounded w-3/4 animate-pulse" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
