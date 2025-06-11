import { Skeleton } from "@/components/ui/skeleton"

export default function EggplantLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section Skeleton */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <Skeleton className="h-6 w-48 mb-8 bg-purple-500" />
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <Skeleton className="h-8 w-32 bg-purple-500" />
              <Skeleton className="h-8 w-40 bg-purple-500" />
            </div>
            <Skeleton className="h-16 w-80 mb-6 bg-purple-500" />
            <Skeleton className="h-24 w-full max-w-3xl mb-8 bg-purple-500" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="text-center">
                  <Skeleton className="h-8 w-16 mx-auto mb-2 bg-purple-500" />
                  <Skeleton className="h-4 w-20 mx-auto bg-purple-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image Skeleton */}
      <Skeleton className="h-96 w-full" />

      {/* Content Skeleton */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Skeleton className="h-12 w-96 mx-auto mb-6" />
          <Skeleton className="h-6 w-full max-w-3xl mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="border rounded-lg p-6">
              <Skeleton className="h-16 w-16 mx-auto mb-4 rounded-full" />
              <Skeleton className="h-6 w-32 mx-auto mb-4" />
              <Skeleton className="h-20 w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
