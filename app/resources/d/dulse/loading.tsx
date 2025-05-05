import { Skeleton } from "@/components/ui/skeleton"

export default function DulseLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section Skeleton */}
      <div className="relative w-full h-[50vh] min-h-[400px] bg-red-100">
        <div className="absolute inset-0 flex flex-col justify-center items-center p-6">
          <Skeleton className="h-12 w-48 mb-4" />
          <Skeleton className="h-6 w-96 max-w-full" />
        </div>
      </div>

      {/* Content Section Skeleton */}
      <div className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <Skeleton className="h-6 w-40 mb-6" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content Skeleton */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <Skeleton className="h-8 w-64 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </div>

              <div>
                <Skeleton className="h-8 w-64 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-4" />

                <div className="space-y-2 pl-6">
                  {[...Array(6)].map((_, i) => (
                    <Skeleton key={i} className="h-4 w-5/6" />
                  ))}
                </div>
              </div>

              <div>
                <Skeleton className="h-8 w-64 mb-4" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="bg-red-50 p-4 rounded-lg">
                      <Skeleton className="h-6 w-32 mb-2" />
                      <Skeleton className="h-4 w-full mb-1" />
                      <Skeleton className="h-4 w-full mb-1" />
                      <Skeleton className="h-4 w-2/3" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Skeleton */}
            <div className="space-y-8">
              <div className="bg-red-50 p-6 rounded-lg">
                <Skeleton className="h-6 w-32 mb-4" />
                <div className="space-y-3">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex items-start">
                      <Skeleton className="h-4 w-4 mr-2" />
                      <Skeleton className="h-4 w-5/6" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <Skeleton className="h-6 w-40 mb-4" />
                <Skeleton className="h-5 w-48 mb-2" />
                <Skeleton className="h-4 w-full mb-3" />
                <Skeleton className="h-5 w-32 mb-1" />
                <div className="pl-5 mb-3 space-y-1">
                  {[...Array(3)].map((_, i) => (
                    <Skeleton key={i} className="h-4 w-5/6" />
                  ))}
                </div>
                <Skeleton className="h-5 w-32 mb-1" />
                <div className="pl-5 space-y-1">
                  {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} className="h-4 w-5/6" />
                  ))}
                </div>
              </div>

              <div className="bg-red-100 p-6 rounded-lg">
                <Skeleton className="h-6 w-32 mb-3" />
                <div className="space-y-3">
                  {[...Array(3)].map((_, i) => (
                    <Skeleton key={i} className="h-10 w-full" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
