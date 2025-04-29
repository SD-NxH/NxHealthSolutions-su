import { Skeleton } from "@/components/ui/skeleton"

export default function DaikonLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section Skeleton */}
      <section className="relative w-full py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Skeleton className="h-6 w-40 mb-6" />
            <Skeleton className="h-12 w-full max-w-md mb-4" />
            <Skeleton className="h-6 w-full max-w-lg" />
          </div>
        </div>
      </section>

      {/* Content Section Skeleton */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Image Skeleton */}
            <Skeleton className="w-full h-64 md:h-96 mb-8 rounded-lg" />

            {/* Content Skeletons */}
            <Skeleton className="h-8 w-64 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-6" />

            <Skeleton className="h-8 w-64 mb-4" />

            {/* Benefits Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-green-50 p-4 rounded-lg">
                  <Skeleton className="h-6 w-40 mb-2" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              ))}
            </div>

            <Skeleton className="h-8 w-64 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-5/6 mb-6" />

            {/* Did You Know Skeleton */}
            <div className="bg-green-100 p-6 rounded-lg mb-6">
              <Skeleton className="h-6 w-40 mb-2" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-4/5" />
            </div>

            {/* Button Skeleton */}
            <div className="mt-12 flex justify-center">
              <Skeleton className="h-10 w-48" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
