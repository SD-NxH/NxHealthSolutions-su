export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="h-4 w-32 bg-gray-200 rounded mb-6"></div>

      <div className="relative h-[300px] w-full mb-6 bg-gray-200 rounded-lg"></div>

      <div className="h-8 w-64 bg-gray-200 rounded mb-6"></div>
      <div className="h-4 w-full bg-gray-200 rounded mb-8"></div>

      <div className="mb-8">
        <div className="h-6 w-40 bg-gray-200 rounded mb-4"></div>
        <div className="space-y-2">
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
          <div className="h-4 w-36 bg-gray-200 rounded"></div>
          <div className="h-4 w-28 bg-gray-200 rounded"></div>
        </div>
      </div>

      <div className="mb-8">
        <div className="h-6 w-40 bg-gray-200 rounded mb-4"></div>
        <div className="space-y-2">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="h-4 w-full bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>

      <div>
        <div className="h-6 w-40 bg-gray-200 rounded mb-4"></div>
        <div className="space-y-2">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="h-4 w-full bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  )
}
