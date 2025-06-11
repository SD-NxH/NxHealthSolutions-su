import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header Skeleton */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Skeleton className="h-6 w-32 mb-6 bg-green-500" />
          <Skeleton className="h-12 w-80 mb-4 bg-green-500" />
          <Skeleton className="h-6 w-96 bg-green-500" />
        </div>
      </div>

      {/* Foods Grid Skeleton */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 7 }).map((_, index) => (
            <div key={index} className="border border-green-100 rounded-lg overflow-hidden">
              <Skeleton className="h-48 w-full" />
              <div className="p-6">
                <Skeleton className="h-6 w-32 mb-2" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-3/4 mb-4" />
                <Skeleton className="h-4 w-24 mb-2" />
                <div className="flex flex-wrap gap-2">
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-6 w-16" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
