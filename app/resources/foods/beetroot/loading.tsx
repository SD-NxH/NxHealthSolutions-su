import { Skeleton } from "@/components/ui/skeleton"

export default function BeetrootLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section Skeleton */}
      <section className="bg-gradient-to-b from-purple-900 to-purple-950 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <Skeleton className="h-6 w-32 bg-purple-800" />
              <Skeleton className="h-12 w-full bg-purple-800" />
              <Skeleton className="h-12 w-3/4 bg-purple-800" />
              <Skeleton className="h-6 w-full bg-purple-800" />
              <div className="flex flex-wrap gap-3 mt-2">
                <Skeleton className="h-8 w-24 rounded-full bg-purple-800" />
                <Skeleton className="h-8 w-24 rounded-full bg-purple-800" />
                <Skeleton className="h-8 w-24 rounded-full bg-purple-800" />
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Skeleton className="w-full max-w-md aspect-square rounded-full bg-purple-800" />
            </div>
          </div>
        </div>
      </section>

      {/* Nutritional Information Skeleton */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="container px-4 md:px-6">
          <Skeleton className="h-10 w-64 mx-auto mb-8 bg-purple-200" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-40 rounded-lg bg-purple-100" />
            ))}
          </div>

          <div className="mt-12">
            <Skeleton className="h-8 w-48 mb-4 bg-purple-200" />
            <div className="grid gap-4 md:grid-cols-2">
              {[...Array(6)].map((_, i) => (
                <Skeleton key={i} className="h-20 rounded-lg bg-purple-100" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Health Benefits Skeleton */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-purple-50">
        <div className="container px-4 md:px-6">
          <Skeleton className="h-10 w-64 mx-auto mb-8 bg-purple-200" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-48 rounded-lg bg-purple-100" />
            ))}
          </div>
        </div>
      </section>

      {/* Culinary Uses Skeleton */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="container px-4 md:px-6">
          <Skeleton className="h-10 w-64 mx-auto mb-8 bg-purple-200" />
          <div className="grid gap-8 md:grid-cols-2">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="rounded-lg overflow-hidden">
                <Skeleton className="h-48 w-full bg-purple-100" />
                <Skeleton className="h-32 w-full bg-purple-50 mt-1" />
              </div>
            ))}
          </div>

          <Skeleton className="h-64 w-full mt-8 rounded-xl bg-purple-100" />
        </div>
      </section>
    </div>
  )
}
