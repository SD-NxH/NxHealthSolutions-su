export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Skeleton */}
      <section className="relative">
        <div className="relative h-[400px] md:h-[500px] w-full bg-gray-200 animate-pulse">
          <div className="absolute bottom-8 left-8 space-y-4">
            <div className="h-8 bg-gray-300 rounded w-96 animate-pulse"></div>
            <div className="h-6 bg-gray-300 rounded w-80 animate-pulse"></div>
            <div className="flex gap-4">
              <div className="h-4 bg-gray-300 rounded w-20 animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded w-20 animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded w-24 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Skeleton */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="h-4 bg-gray-300 rounded w-32 animate-pulse"></div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2 space-y-4">
              <div className="h-6 bg-gray-300 rounded w-48 animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
            </div>
            <div className="h-48 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="h-96 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="h-96 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
