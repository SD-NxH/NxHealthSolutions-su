import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen bg-yellow-50">
      {/* Hero Section Skeleton */}
      <section className="relative w-full py-20 bg-gradient-to-b from-yellow-300 via-yellow-200 to-yellow-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Skeleton className="h-4 w-24 mb-6 bg-yellow-200" />
              <Skeleton className="h-12 w-3/4 mb-4 bg-yellow-200" />
              <Skeleton className="h-6 w-full mb-6 bg-yellow-200" />
              <div className="flex flex-wrap gap-3 mb-8">
                <Skeleton className="h-8 w-24 rounded-full bg-yellow-200" />
                <Skeleton className="h-8 w-28 rounded-full bg-yellow-200" />
                <Skeleton className="h-8 w-32 rounded-full bg-yellow-200" />
                <Skeleton className="h-8 w-28 rounded-full bg-yellow-200" />
              </div>
              <Skeleton className="h-11 w-40 bg-yellow-200" />
            </div>
            <Skeleton className="h-[300px] md:h-[400px] rounded-2xl bg-yellow-200" />
          </div>
        </div>
      </section>

      {/* Nutritional Information Skeleton */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Skeleton className="h-10 w-64 mx-auto mb-8 bg-yellow-100" />
            <div className="bg-yellow-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                  <div key={`nutr-${i}`} className="text-center">
                    <Skeleton className="h-10 w-16 mx-auto mb-2 bg-yellow-200" />
                    <Skeleton className="h-4 w-24 mx-auto bg-yellow-200" />
                  </div>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                  <div key={`nutr2-${i}`} className="text-center">
                    <Skeleton className="h-10 w-16 mx-auto mb-2 bg-yellow-200" />
                    <Skeleton className="h-4 w-24 mx-auto bg-yellow-200" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Benefits Skeleton */}
      <section className="py-16 bg-yellow-50">
        <div className="container px-4 md:px-6">
          <Skeleton className="h-10 w-64 mx-auto mb-8 bg-yellow-200" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={`benefit-${i}`} className="bg-white p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <Skeleton className="h-8 w-8 mr-3 bg-yellow-200" />
                  <Skeleton className="h-6 w-40 bg-yellow-200" />
                </div>
                <Skeleton className="h-4 w-full mb-2 bg-yellow-100" />
                <Skeleton className="h-4 w-full mb-2 bg-yellow-100" />
                <Skeleton className="h-4 w-3/4 bg-yellow-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recipe Ideas Skeleton */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <Skeleton className="h-10 w-64 mx-auto mb-8 bg-yellow-100" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={`recipe-${i}`} className="bg-yellow-100 p-6 rounded-2xl">
                <Skeleton className="h-8 w-8 mx-auto mb-4 bg-yellow-200" />
                <Skeleton className="h-6 w-48 mx-auto mb-3 bg-yellow-200" />
                <Skeleton className="h-4 w-full mb-2 mx-auto bg-yellow-200" />
                <Skeleton className="h-4 w-full mb-2 mx-auto bg-yellow-200" />
                <Skeleton className="h-4 w-3/4 mx-auto bg-yellow-200" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
