import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Skeleton */}
      <section className="bg-gradient-to-b from-amber-700 to-amber-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Skeleton className="h-6 w-32 bg-amber-600/50 mb-6" />
            <Skeleton className="h-12 w-full bg-amber-600/50 mb-4" />
            <Skeleton className="h-12 w-3/4 bg-amber-600/50 mb-6" />
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Skeleton className="h-6 w-24 bg-amber-600/50" />
              <Skeleton className="h-6 w-24 bg-amber-600/50" />
              <Skeleton className="h-6 w-24 bg-amber-600/50" />
              <Skeleton className="h-8 w-24 bg-amber-600/50 ml-auto" />
            </div>
            <Skeleton className="h-64 md:h-96 w-full rounded-xl bg-amber-600/50" />
          </div>
        </div>
      </section>

      {/* Article Content Skeleton */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Skeleton className="h-8 w-full bg-gray-200 mb-4" />
            <Skeleton className="h-8 w-5/6 bg-gray-200 mb-8" />

            <Skeleton className="h-4 w-full bg-gray-200 mb-2" />
            <Skeleton className="h-4 w-full bg-gray-200 mb-2" />
            <Skeleton className="h-4 w-3/4 bg-gray-200 mb-6" />

            <Skeleton className="h-6 w-1/2 bg-gray-200 mb-4" />

            <Skeleton className="h-4 w-full bg-gray-200 mb-2" />
            <Skeleton className="h-4 w-full bg-gray-200 mb-2" />
            <Skeleton className="h-4 w-5/6 bg-gray-200 mb-6" />

            <div className="bg-amber-50 p-4 my-8">
              <Skeleton className="h-4 w-full bg-amber-200/50 mb-2" />
              <Skeleton className="h-4 w-full bg-amber-200/50 mb-2" />
              <Skeleton className="h-4 w-2/3 bg-amber-200/50" />
            </div>

            <Skeleton className="h-6 w-1/2 bg-gray-200 mb-4" />

            <Skeleton className="h-4 w-full bg-gray-200 mb-2" />
            <Skeleton className="h-4 w-full bg-gray-200 mb-2" />
            <Skeleton className="h-4 w-4/5 bg-gray-200 mb-6" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <Skeleton className="h-6 w-1/2 bg-green-200/50 mb-4" />
                <Skeleton className="h-4 w-full bg-green-200/50 mb-2" />
                <Skeleton className="h-4 w-full bg-green-200/50 mb-2" />
                <Skeleton className="h-4 w-full bg-green-200/50 mb-2" />
                <Skeleton className="h-4 w-full bg-green-200/50 mb-2" />
                <Skeleton className="h-4 w-3/4 bg-green-200/50" />
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <Skeleton className="h-6 w-1/2 bg-red-200/50 mb-4" />
                <Skeleton className="h-4 w-full bg-red-200/50 mb-2" />
                <Skeleton className="h-4 w-full bg-red-200/50 mb-2" />
                <Skeleton className="h-4 w-full bg-red-200/50 mb-2" />
                <Skeleton className="h-4 w-full bg-red-200/50 mb-2" />
                <Skeleton className="h-4 w-3/4 bg-red-200/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Section Skeleton */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="h-px w-full bg-gray-200 mb-8" />
            <div className="flex items-center">
              <Skeleton className="w-16 h-16 rounded-full bg-amber-200/50 mr-4" />
              <div>
                <Skeleton className="h-6 w-40 bg-gray-200 mb-2" />
                <Skeleton className="h-4 w-64 bg-gray-200" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles Skeleton */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <Skeleton className="h-8 w-64 bg-gray-200 mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border rounded-lg overflow-hidden">
                  <Skeleton className="h-48 w-full bg-gray-200" />
                  <div className="p-6">
                    <Skeleton className="h-6 w-full bg-gray-200 mb-2" />
                    <Skeleton className="h-4 w-full bg-gray-200 mb-2" />
                    <Skeleton className="h-4 w-3/4 bg-gray-200 mb-4" />
                    <Skeleton className="h-4 w-32 bg-amber-200/50" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Skeleton */}
      <section className="py-12 bg-amber-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Skeleton className="h-8 w-2/3 mx-auto bg-amber-200/50 mb-4" />
            <Skeleton className="h-4 w-full mx-auto bg-amber-200/50 mb-8" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Skeleton className="h-10 w-40 mx-auto sm:mx-0 bg-amber-200/50" />
              <Skeleton className="h-10 w-40 mx-auto sm:mx-0 bg-amber-200/50" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
