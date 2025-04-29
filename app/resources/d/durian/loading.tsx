import { Skeleton } from "@/components/ui/skeleton"

export default function DurianLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section Skeleton */}
      <section className="relative w-full py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Skeleton className="h-6 w-32 mb-6" />
            <Skeleton className="h-12 w-full max-w-md mb-4" />
            <Skeleton className="h-6 w-full max-w-lg" />
          </div>
        </div>
      </section>

      {/* Content Section Skeleton */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Skeleton className="w-full h-64 md:h-96 mb-8 rounded-lg" />

            <div className="space-y-8">
              <div>
                <Skeleton className="h-8 w-64 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </div>

              <div>
                <Skeleton className="h-8 w-64 mb-4" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="bg-gray-100 p-4 rounded-lg">
                      <Skeleton className="h-6 w-1/2 mb-2" />
                      <Skeleton className="h-4 w-full mb-1" />
                      <Skeleton className="h-4 w-full mb-1" />
                      <Skeleton className="h-4 w-2/3" />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Skeleton className="h-8 w-64 mb-4" />
                <div className="space-y-2 pl-6">
                  {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} className="h-4 w-full max-w-lg" />
                  ))}
                </div>
              </div>

              <Skeleton className="h-40 w-full rounded-lg mb-6" />

              <div>
                <Skeleton className="h-8 w-64 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3" />
              </div>

              <div className="flex justify-center">
                <Skeleton className="h-10 w-48" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
