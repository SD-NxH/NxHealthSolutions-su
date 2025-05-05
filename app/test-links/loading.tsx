export default function TestLinksLoading() {
  return (
    <div className="container mx-auto p-8">
      <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-6"></div>

      <div className="space-y-4">
        <div className="p-4 border rounded">
          <div className="h-6 w-64 bg-gray-200 rounded animate-pulse mb-4"></div>
          <div className="space-y-2">
            <div className="h-6 w-40 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-6 w-40 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-6 w-40 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>

        <div className="p-4 border rounded">
          <div className="h-6 w-64 bg-gray-200 rounded animate-pulse mb-4"></div>
          <div className="space-y-2">
            <div className="h-10 w-48 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-10 w-48 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-10 w-48 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="h-6 w-24 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  )
}
