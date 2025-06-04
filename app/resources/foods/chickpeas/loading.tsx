import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      {/* Navigation Skeleton */}
      <nav className="border-b border-amber-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container px-4 md:px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="h-8 w-24 bg-amber-200 rounded animate-pulse" />
          </div>
        </div>
      </nav>

      {/* Hero Section Skeleton */}
      <section className="py-16 bg-gradient-to-r from-amber-100 to-yellow-100">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="h-12 w-64 bg-amber-300 rounded mx-auto mb-6 animate-pulse" />
            <div className="h-6 w-96 bg-amber-200 rounded mx-auto mb-4 animate-pulse" />
            <div className="h-6 w-80 bg-amber-200 rounded mx-auto mb-8 animate-pulse" />
            <div className="flex justify-center gap-4">
              <div className="h-8 w-24 bg-white/70 rounded-full animate-pulse" />
              <div className="h-8 w-28 bg-white/70 rounded-full animate-pulse" />
              <div className="h-8 w-24 bg-white/70 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section Skeleton */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Image Skeleton */}
            <div className="w-full h-64 md:h-96 mb-8 rounded-lg bg-amber-200 animate-pulse" />

            {/* Cards Skeleton */}
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="mb-8 border-amber-200">
                <CardHeader>
                  <div className="h-8 w-48 bg-amber-200 rounded animate-pulse" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="h-4 w-full bg-amber-100 rounded animate-pulse" />
                    <div className="h-4 w-5/6 bg-amber-100 rounded animate-pulse" />
                    <div className="h-4 w-4/6 bg-amber-100 rounded animate-pulse" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
