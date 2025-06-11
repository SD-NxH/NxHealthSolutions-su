import { Skeleton } from "@/components/ui/skeleton"

export default function EscaroleLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section Skeleton */}
      <div className="bg-green-600 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <Skeleton className="h-6 w-48 mb-6 bg-green-500" />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Skeleton className="h-8 w-32 mb-4 bg-green-500" />
              <Skeleton className="h-16 w-full mb-6 bg-green-500" />
              <Skeleton className="h-24 w-full mb-8 bg-green-500" />

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <Skeleton className="h-8 w-16 mx-auto mb-2 bg-green-500" />
                  <Skeleton className="h-4 w-20 mx-auto bg-green-500" />
                </div>
                <div className="text-center">
                  <Skeleton className="h-8 w-16 mx-auto mb-2 bg-green-500" />
                  <Skeleton className="h-4 w-20 mx-auto bg-green-500" />
                </div>
                <div className="text-center">
                  <Skeleton className="h-8 w-16 mx-auto mb-2 bg-green-500" />
                  <Skeleton className="h-4 w-20 mx-auto bg-green-500" />
                </div>
              </div>
            </div>

            <div className="relative">
              <Skeleton className="h-96 w-96 rounded-2xl bg-green-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Health Benefits Section Skeleton */}
      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-96 mx-auto mb-6" />
            <Skeleton className="h-6 w-2/3 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="border border-green-100 rounded-lg p-6">
                <div className="text-center mb-4">
                  <Skeleton className="w-16 h-16 rounded-full mx-auto mb-4" />
                  <Skeleton className="h-6 w-32 mx-auto mb-4" />
                </div>
                <Skeleton className="h-20 w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Usage & Safety Section Skeleton */}
      <div className="bg-green-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Skeleton className="h-10 w-64 mb-8" />
              <div className="space-y-4">
                {[...Array(6)].map((_, index) => (
                  <Skeleton key={index} className="h-6 w-full" />
                ))}
              </div>
            </div>

            <div>
              <Skeleton className="h-10 w-64 mb-8" />
              <div className="space-y-4">
                {[...Array(5)].map((_, index) => (
                  <Skeleton key={index} className="h-6 w-full" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Skeleton */}
      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-green-600 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <Skeleton className="h-10 w-96 mx-auto mb-6 bg-green-500" />
            <Skeleton className="h-6 w-2/3 mx-auto mb-8 bg-green-500" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Skeleton className="h-12 w-48 bg-green-500" />
              <Skeleton className="h-12 w-48 bg-green-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
