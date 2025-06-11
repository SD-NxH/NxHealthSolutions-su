import { Skeleton } from "@/components/ui/skeleton"

export default function ElderberryLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section Skeleton */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <Skeleton className="h-6 w-32 mb-8 bg-purple-500" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Skeleton className="h-8 w-24 mb-4 bg-purple-500" />
              <Skeleton className="h-16 w-full mb-6 bg-purple-500" />
              <Skeleton className="h-6 w-full mb-2 bg-purple-500" />
              <Skeleton className="h-6 w-3/4 mb-8 bg-purple-500" />
              <div className="flex flex-wrap gap-4">
                <Skeleton className="h-10 w-32 bg-purple-500" />
                <Skeleton className="h-10 w-36 bg-purple-500" />
                <Skeleton className="h-10 w-40 bg-purple-500" />
              </div>
            </div>
            <div className="relative">
              <Skeleton className="h-96 w-full rounded-2xl bg-purple-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="container mx-auto px-4 py-16">
        <Skeleton className="h-10 w-64 mx-auto mb-12" />

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border border-purple-200 rounded-lg p-6">
              <Skeleton className="h-12 w-12 mx-auto mb-4" />
              <Skeleton className="h-6 w-32 mx-auto mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4 mx-auto" />
            </div>
          ))}
        </div>

        <Skeleton className="h-10 w-48 mx-auto mb-12" />

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4">
                <Skeleton className="h-12 w-12 rounded-full flex-shrink-0" />
                <div className="flex-1">
                  <Skeleton className="h-6 w-48 mb-2" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4">
                <Skeleton className="h-12 w-12 rounded-full flex-shrink-0" />
                <div className="flex-1">
                  <Skeleton className="h-6 w-48 mb-2" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
