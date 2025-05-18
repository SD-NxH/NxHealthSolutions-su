import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section Skeleton */}
      <div className="relative h-[300px] md:h-[400px] w-full bg-gray-200"></div>

      {/* Content Skeleton */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button Skeleton */}
          <Skeleton className="h-6 w-32 mb-6" />

          {/* Recipe Info Skeleton */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
            </div>

            <Skeleton className="h-20 w-full mb-6" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Ingredients Skeleton */}
              <div>
                <Skeleton className="h-8 w-32 mb-4" />
                {Array(10)
                  .fill(null)
                  .map((_, i) => (
                    <Skeleton key={`ing-${i}`} className="h-4 w-full mb-2" />
                  ))}

                <Skeleton className="h-8 w-32 mt-6 mb-4" />
                {Array(3)
                  .fill(null)
                  .map((_, i) => (
                    <Skeleton key={`equip-${i}`} className="h-4 w-full mb-2" />
                  ))}
              </div>

              {/* Instructions Skeleton */}
              <div>
                <Skeleton className="h-8 w-32 mb-4" />
                {Array(7)
                  .fill(null)
                  .map((_, i) => (
                    <Skeleton key={`inst-${i}`} className="h-16 w-full mb-3" />
                  ))}
              </div>
            </div>
          </div>

          {/* Shopping List Skeleton */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <Skeleton className="h-8 w-32 mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                {Array(8)
                  .fill(null)
                  .map((_, i) => (
                    <Skeleton key={`shop1-${i}`} className="h-4 w-full mb-2" />
                  ))}
              </div>
              <div>
                {Array(7)
                  .fill(null)
                  .map((_, i) => (
                    <Skeleton key={`shop2-${i}`} className="h-4 w-full mb-2" />
                  ))}
              </div>
            </div>
          </div>

          {/* Dietary Swaps Skeleton */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <Skeleton className="h-8 w-32 mb-4" />
            {Array(4)
              .fill(null)
              .map((_, i) => (
                <Skeleton key={`diet-${i}`} className="h-4 w-full mb-2" />
              ))}
          </div>

          {/* Tips Skeleton */}
          <div className="bg-gray-100 rounded-lg p-6 mb-8">
            <Skeleton className="h-8 w-32 mb-4" />
            {Array(4)
              .fill(null)
              .map((_, i) => (
                <Skeleton key={`tip-${i}`} className="h-4 w-full mb-2" />
              ))}
          </div>

          {/* Buttons Skeleton */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-40" />
          </div>
        </div>
      </div>
    </div>
  )
}
