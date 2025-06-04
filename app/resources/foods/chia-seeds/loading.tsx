import { Card, CardContent } from "@/components/ui/card"

export default function ChiaSeedsLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      {/* Header Skeleton */}
      <header className="bg-gradient-to-r from-gray-100 to-slate-200 border-b border-gray-200">
        <div className="container px-4 md:px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="w-24 h-8 bg-gray-300 rounded animate-pulse" />
            <div className="h-6 w-px bg-gray-300" />
            <div className="w-48 h-4 bg-gray-300 rounded animate-pulse" />
          </div>
        </div>
      </header>

      {/* Hero Section Skeleton */}
      <section className="py-16 bg-gradient-to-r from-gray-100 via-slate-100 to-gray-200">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-32 h-8 bg-gray-300 rounded-full mx-auto mb-6 animate-pulse" />
            <div className="w-64 h-12 bg-gray-300 rounded mx-auto mb-6 animate-pulse" />
            <div className="w-96 h-6 bg-gray-300 rounded mx-auto mb-4 animate-pulse" />
            <div className="w-80 h-6 bg-gray-300 rounded mx-auto mb-8 animate-pulse" />
            <div className="flex flex-wrap justify-center gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-24 h-6 bg-gray-300 rounded-full animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section Skeleton */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Image Skeleton */}
            <div className="w-full h-64 md:h-96 bg-gray-300 rounded-lg mb-8 animate-pulse" />

            {/* Cards Skeleton */}
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="mb-12 border-gray-200">
                <CardContent className="p-8">
                  <div className="w-64 h-8 bg-gray-300 rounded mb-6 animate-pulse" />
                  <div className="space-y-4">
                    <div className="w-full h-4 bg-gray-300 rounded animate-pulse" />
                    <div className="w-3/4 h-4 bg-gray-300 rounded animate-pulse" />
                    <div className="w-5/6 h-4 bg-gray-300 rounded animate-pulse" />
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
