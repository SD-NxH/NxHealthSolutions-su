export default function CarrotsLoading() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="animate-pulse">
        {/* Hero Section Placeholder */}
        <div className="w-full h-64 md:h-96 bg-orange-200 rounded-lg mb-8"></div>

        {/* Quick Facts Placeholder */}
        <div className="bg-orange-50 rounded-lg p-6 mb-8">
          <div className="h-8 bg-orange-200 rounded w-1/3 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-md p-4 h-24"></div>
            <div className="bg-white rounded-md p-4 h-24"></div>
            <div className="bg-white rounded-md p-4 h-24"></div>
          </div>
        </div>

        {/* Nutritional Information Placeholder */}
        <div className="mb-8">
          <div className="h-8 bg-orange-200 rounded w-2/5 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>

          <div className="bg-white border border-orange-200 rounded-lg p-4 mb-4">
            <div className="h-6 bg-orange-100 rounded w-1/3 mb-4"></div>
            <div className="space-y-2">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="flex justify-between">
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/6"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Health Benefits Placeholder */}
        <div className="mb-8">
          <div className="h-8 bg-orange-200 rounded w-1/3 mb-4"></div>
          <div className="space-y-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-orange-50 p-4 rounded-md">
                <div className="h-6 bg-orange-100 rounded w-1/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
