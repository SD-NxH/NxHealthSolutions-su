import { Skeleton } from "@/components/ui/skeleton"

export default function DarkChocolateLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Hero Section Skeleton */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-900 via-orange-900 to-red-900">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative z-10 px-4 md:px-6 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Skeleton className="h-6 w-32 mb-6 bg-amber-200/20" />
                <Skeleton className="h-8 w-24 mb-4 bg-amber-200/20" />
                <Skeleton className="h-16 w-full mb-6 bg-amber-200/20" />
                <Skeleton className="h-24 w-full mb-8 bg-amber-200/20" />
              </div>
              <div className="flex flex-wrap gap-3">
                <Skeleton className="h-6 w-32 bg-amber-200/20" />
                <Skeleton className="h-6 w-28 bg-amber-200/20" />
                <Skeleton className="h-6 w-36 bg-amber-200/20" />
              </div>
            </div>
            <div className="relative">
              <Skeleton className="aspect-square rounded-2xl bg-amber-200/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section Skeleton */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="border border-amber-200 rounded-lg p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <Skeleton className="h-6 w-32" />
                </div>
                <Skeleton className="h-20 w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Section Skeleton */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="border border-amber-200 rounded-lg p-8">
              <Skeleton className="h-8 w-64 mx-auto mb-8" />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="text-center p-4 rounded-lg bg-amber-50 border border-amber-200">
                    <Skeleton className="h-8 w-16 mx-auto mb-2" />
                    <Skeleton className="h-4 w-20 mx-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recipes Section Skeleton */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="border border-amber-200 rounded-lg p-6">
                <Skeleton className="h-6 w-48 mb-4" />
                <div className="flex gap-2 mb-4">
                  <Skeleton className="h-6 w-16" />
                  <Skeleton className="h-6 w-16" />
                </div>
                <Skeleton className="h-16 w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
