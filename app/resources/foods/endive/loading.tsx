import { Skeleton } from "@/components/ui/skeleton"

export default function EndiveLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section Skeleton */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 py-20">
        <div className="container mx-auto px-4">
          <Skeleton className="h-6 w-48 mb-8 bg-green-500/20" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Skeleton className="h-6 w-32 mb-4 bg-green-500/20" />
              <Skeleton className="h-16 w-64 mb-6 bg-green-500/20" />
              <Skeleton className="h-24 w-full mb-8 bg-green-500/20" />

              <div className="grid grid-cols-2 gap-4">
                <Skeleton className="h-20 w-full bg-green-500/20" />
                <Skeleton className="h-20 w-full bg-green-500/20" />
              </div>
            </div>

            <Skeleton className="h-96 w-full bg-green-500/20 rounded-2xl" />
          </div>
        </div>
      </div>

      {/* Health Benefits Section Skeleton */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-96 mx-auto mb-6" />
            <Skeleton className="h-6 w-full max-w-3xl mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="border rounded-lg p-6">
                <div className="text-center pb-4">
                  <Skeleton className="w-16 h-16 rounded-full mx-auto mb-4" />
                  <Skeleton className="h-6 w-32 mx-auto mb-2" />
                </div>
                <Skeleton className="h-20 w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Usage and Safety Section Skeleton */}
      <div className="bg-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="border rounded-lg p-6">
              <Skeleton className="h-8 w-48 mb-2" />
              <Skeleton className="h-4 w-64 mb-6" />
              <div className="space-y-3">
                {[...Array(6)].map((_, index) => (
                  <Skeleton key={index} className="h-4 w-full" />
                ))}
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <Skeleton className="h-8 w-48 mb-2" />
              <Skeleton className="h-4 w-64 mb-6" />
              <div className="space-y-3">
                {[...Array(6)].map((_, index) => (
                  <Skeleton key={index} className="h-4 w-full" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Skeleton */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-2xl p-12 max-w-4xl mx-auto">
              <Skeleton className="h-10 w-96 mx-auto mb-6" />
              <Skeleton className="h-6 w-full max-w-2xl mx-auto mb-8" />
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Skeleton className="h-14 w-48" />
                <Skeleton className="h-14 w-48" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
