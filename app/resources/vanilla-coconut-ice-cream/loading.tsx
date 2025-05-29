import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Skeleton */}
      <div className="relative h-[40vh] min-h-[400px] w-full overflow-hidden bg-gray-200">
        <div className="absolute bottom-6 left-6">
          <Skeleton className="h-10 w-3/4 mb-2" />
          <Skeleton className="h-6 w-1/2" />
        </div>
      </div>

      {/* Content Section Skeleton */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content Skeleton */}
          <div className="flex-1">
            <Skeleton className="h-6 w-32 mb-6" />
            <Skeleton className="h-24 w-full mb-6" />

            {/* Recipe Info Skeleton */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-6 w-32" />
            </div>

            <Skeleton className="h-1 w-full my-8" />

            {/* Ingredients and Equipment Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="border rounded-lg p-6">
                <Skeleton className="h-8 w-32 mb-4" />
                <div className="space-y-2">
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-full" />
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <Skeleton className="h-8 w-32 mb-4" />
                <div className="space-y-2">
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-full" />
                </div>
              </div>
            </div>

            {/* Instructions Skeleton */}
            <Skeleton className="h-8 w-40 mb-4" />
            <div className="space-y-4 mb-8">
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-20 w-full" />
            </div>

            {/* Tips Skeleton */}
            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <Skeleton className="h-8 w-40 mb-4" />
              <div className="space-y-3">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
              </div>
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="border rounded-lg p-6">
              <Skeleton className="h-8 w-40 mb-4" />
              <div className="space-y-4">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
