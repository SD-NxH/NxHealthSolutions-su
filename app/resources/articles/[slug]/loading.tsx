import { Skeleton } from "@/components/ui/skeleton"

export default function ArticleLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Skeleton */}
      <div className="relative h-[300px] md:h-[400px] w-full bg-gray-200 animate-pulse"></div>

      {/* Breadcrumb Skeleton */}
      <div className="bg-gray-50 py-3 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <Skeleton className="h-4 w-32" />
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          {/* Article Info Skeleton */}
          <div className="mb-8">
            <Skeleton className="h-10 w-3/4 mb-4" />
            <div className="flex items-center gap-4 mb-6">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-2/3" />
          </div>

          <Skeleton className="h-px w-full my-8" />

          {/* Article Content Skeleton */}
          <div className="space-y-6">
            {Array(8)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="space-y-3">
                  {i % 3 === 0 && <Skeleton className="h-7 w-1/2 mb-2" />}
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                  {i % 4 === 0 && <div className="my-6 h-[200px] w-full bg-gray-200 animate-pulse rounded-md"></div>}
                </div>
              ))}
          </div>

          {/* Related Articles Skeleton */}
          <div className="mt-12">
            <Skeleton className="h-8 w-48 mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array(2)
                .fill(0)
                .map((_, i) => (
                  <div key={`related-${i}`} className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 animate-pulse"></div>
                    <div className="p-4">
                      <Skeleton className="h-5 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-full mb-1" />
                      <Skeleton className="h-4 w-2/3" />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
