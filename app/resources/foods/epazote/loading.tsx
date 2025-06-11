import { Skeleton } from "@/components/ui/skeleton"

export default function EpazoteLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section Skeleton */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <Skeleton className="h-6 w-32 mb-6 bg-green-500" />

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <Skeleton className="h-6 w-24 bg-green-500" />
              <Skeleton className="h-6 w-28 bg-green-500" />
            </div>

            <Skeleton className="h-16 w-64 mb-6 bg-green-500" />
            <Skeleton className="h-24 w-full max-w-3xl mb-8 bg-green-500" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="text-center">
                  <Skeleton className="h-8 w-16 mx-auto mb-2 bg-green-500" />
                  <Skeleton className="h-4 w-20 mx-auto bg-green-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="container mx-auto px-4 py-16">
        <Skeleton className="h-10 w-80 mx-auto mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Skeleton className="h-10 w-10 rounded-lg" />
                <Skeleton className="h-6 w-32" />
              </div>
              <Skeleton className="h-20 w-full" />
            </div>
          ))}
        </div>

        <Skeleton className="h-10 w-64 mx-auto mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="border rounded-lg p-6">
              <Skeleton className="h-8 w-40 mb-4" />
              <div className="space-y-4">
                {[...Array(4)].map((_, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Skeleton className="h-2 w-2 rounded-full mt-2" />
                    <div className="flex-1">
                      <Skeleton className="h-5 w-24 mb-1" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border rounded-lg p-6 mb-16">
          <Skeleton className="h-8 w-64 mb-4" />
          <div className="space-y-3">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-4 w-full" />
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-green-50 rounded-xl p-8 max-w-2xl mx-auto">
            <Skeleton className="h-8 w-64 mx-auto mb-4" />
            <Skeleton className="h-16 w-full mb-6" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Skeleton className="h-12 w-32" />
              <Skeleton className="h-12 w-32" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
