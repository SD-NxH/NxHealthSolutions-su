import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section Skeleton */}
      <section className="bg-green-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Skeleton className="h-12 w-3/4 mx-auto bg-green-600/50 mb-6" />
            <Skeleton className="h-6 w-2/3 mx-auto bg-green-600/50 mb-8" />
            <Skeleton className="h-4 w-40 mx-auto bg-green-600/50" />
          </div>
        </div>
      </section>

      {/* Introduction Skeleton */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <Skeleton className="h-6 w-full bg-gray-200 mb-4" />
          <Skeleton className="h-6 w-full bg-gray-200 mb-4" />
          <Skeleton className="h-6 w-3/4 bg-gray-200 mb-4" />
          <Skeleton className="h-6 w-full bg-gray-200 mb-4" />
          <Skeleton className="h-6 w-5/6 bg-gray-200 mb-4" />
        </div>
      </section>

      {/* Recipes Skeleton */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <Skeleton className="h-8 w-64 mx-auto bg-gray-300 mb-12" />

          <div className="space-y-16">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Skeleton className="h-7 w-48 bg-gray-200" />
                    <Skeleton className="h-5 w-32 bg-gray-200" />
                  </div>

                  <Skeleton className="h-5 w-full bg-gray-200 mb-6" />

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <Skeleton className="h-6 w-32 bg-gray-200 mb-3" />
                      {[...Array(5)].map((_, j) => (
                        <Skeleton key={j} className="h-5 w-full bg-gray-200 mb-2" />
                      ))}
                    </div>

                    <div>
                      <Skeleton className="h-6 w-32 bg-gray-200 mb-3" />
                      {[...Array(4)].map((_, j) => (
                        <Skeleton key={j} className="h-5 w-full bg-gray-200 mb-2" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
