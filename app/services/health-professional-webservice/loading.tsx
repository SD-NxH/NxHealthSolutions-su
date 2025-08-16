export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="animate-pulse">
        {/* Hero Section Skeleton */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="h-16 bg-gray-200 rounded mb-6 mx-auto max-w-3xl"></div>
              <div className="h-6 bg-gray-200 rounded mb-8 mx-auto max-w-2xl"></div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="h-12 bg-gray-200 rounded w-48"></div>
                <div className="h-12 bg-gray-200 rounded w-32"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections Skeleton */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="h-10 bg-gray-200 rounded mb-4 mx-auto max-w-md"></div>
                <div className="h-6 bg-gray-200 rounded mx-auto max-w-lg"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="text-center p-6">
                    <div className="w-12 h-12 bg-gray-200 rounded mx-auto mb-4"></div>
                    <div className="h-6 bg-gray-200 rounded mb-3"></div>
                    <div className="h-16 bg-gray-200 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
