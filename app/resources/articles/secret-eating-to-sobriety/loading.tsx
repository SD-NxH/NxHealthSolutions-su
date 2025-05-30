import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <Skeleton className="h-6 w-32" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 to-green-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Skeleton className="h-4 w-24 mb-4 bg-green-600" />
            <Skeleton className="h-12 w-full mb-6 bg-green-600" />
            <Skeleton className="h-6 w-3/4 mb-8 bg-green-600" />
            <div className="flex items-center gap-6">
              <Skeleton className="h-4 w-24 bg-green-600" />
              <Skeleton className="h-4 w-32 bg-green-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Skeleton className="h-64 md:h-96 w-full mb-8 rounded-lg" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-8 w-1/2 mt-8" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
