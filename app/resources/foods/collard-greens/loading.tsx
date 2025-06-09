import { Skeleton } from "@/components/ui/skeleton"

export default function CollardGreensLoading() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section Skeleton */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-green-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-24 mb-4" />
                <Skeleton className="h-12 w-3/4 mb-2" />
                <Skeleton className="h-6 w-full max-w-[700px]" />
                <Skeleton className="h-6 w-2/3 max-w-[500px]" />
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Skeleton className="h-10 w-40" />
                <Skeleton className="h-10 w-40" />
              </div>
            </div>
            <Skeleton className="aspect-video h-[300px] w-full rounded-xl lg:order-last" />
          </div>
        </div>
      </section>

      {/* Content Section Skeleton */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="w-full mb-8">
            <Skeleton className="h-10 w-full max-w-md mx-auto" />
          </div>
          <div className="space-y-6">
            <div className="grid gap-8 md:grid-cols-2">
              <Skeleton className="h-64 w-full rounded-lg" />
              <Skeleton className="h-64 w-full rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Related Foods Section Skeleton */}
      <section className="py-12 bg-green-50">
        <div className="container px-4 md:px-6">
          <Skeleton className="h-8 w-64 mb-8" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Skeleton className="h-48 w-full rounded-lg" />
            <Skeleton className="h-48 w-full rounded-lg" />
            <Skeleton className="h-48 w-full rounded-lg" />
            <Skeleton className="h-48 w-full rounded-lg" />
          </div>
        </div>
      </section>
    </div>
  )
}
