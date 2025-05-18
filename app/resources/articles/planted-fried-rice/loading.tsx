import { Skeleton } from "@/components/ui/skeleton"

export default function PlantedFriedRiceLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Skeleton */}
      <div className="relative h-[300px] md:h-[400px] w-full bg-gray-200 animate-pulse"></div>

      {/* Breadcrumb Skeleton */}
      <div className="bg-gray-50 py-3 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <Skeleton className="h-4 w-32" />
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Recipe Info Skeleton */}
          <div className="flex flex-wrap gap-6 justify-center mb-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center">
                <Skeleton className="h-5 w-5 mr-2 rounded-full" />
                <div>
                  <Skeleton className="h-3 w-20 mb-1" />
                  <Skeleton className="h-4 w-16" />
                </div>
              </div>
            ))}
          </div>

          <Skeleton className="h-px w-full my-8" />

          {/* Ingredients Skeleton */}
          <Skeleton className="h-8 w-40 mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-10">
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <div key={`ing-${i}`} className="flex items-start">
                  <Skeleton className="h-2 w-2 mt-2 mr-2 rounded-full" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
          </div>

          {/* Equipment Skeleton */}
          <Skeleton className="h-8 w-40 mb-4" />
          <div className="space-y-2 mb-10">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <div key={`eq-${i}`} className="flex items-start">
                  <Skeleton className="h-2 w-2 mt-2 mr-2 rounded-full" />
                  <Skeleton className="h-4 w-40" />
                </div>
              ))}
          </div>

          {/* Instructions Skeleton */}
          <Skeleton className="h-8 w-40 mb-4" />
          <div className="space-y-4 mb-10">
            {Array(7)
              .fill(0)
              .map((_, i) => (
                <div key={`ins-${i}`} className="pl-5">
                  <Skeleton className="h-5 w-40 mb-2" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4 mt-1" />
                </div>
              ))}
          </div>

          {/* Shopping List Skeleton */}
          <Skeleton className="h-8 w-40 mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-10">
            {Array(15)
              .fill(0)
              .map((_, i) => (
                <div key={`shop-${i}`} className="flex items-start">
                  <Skeleton className="h-2 w-2 mt-2 mr-2 rounded-full" />
                  <Skeleton className="h-4 w-24" />
                </div>
              ))}
          </div>

          {/* Dietary Swaps Skeleton */}
          <Skeleton className="h-8 w-40 mb-4" />
          <div className="space-y-3 mb-10">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div key={`diet-${i}`} className="flex items-start">
                  <Skeleton className="h-2 w-2 mt-2 mr-2 rounded-full" />
                  <div>
                    <Skeleton className="h-4 w-32 mb-1" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </div>
              ))}
          </div>

          {/* Chef's Tips Skeleton */}
          <div className="bg-gray-100 p-6 rounded-lg mb-10">
            <div className="flex items-center mb-4">
              <Skeleton className="h-6 w-6 mr-2 rounded-full" />
              <Skeleton className="h-6 w-40" />
            </div>
            <div className="space-y-3">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <div key={`tip-${i}`} className="flex items-start">
                    <Skeleton className="h-2 w-2 mt-2 mr-2 rounded-full" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
