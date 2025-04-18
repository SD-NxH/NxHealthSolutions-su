import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="relative w-full py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Skeleton className="h-6 w-40 mb-6" />
            <Skeleton className="h-12 w-full mb-4" />
            <Skeleton className="h-6 w-3/4" />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Skeleton className="w-full h-64 md:h-96 mb-8 rounded-lg" />

            <div className="space-y-6">
              <Skeleton className="h-8 w-64 mb-4" />
              <Skeleton className="h-24 w-full" />

              <Skeleton className="h-8 w-64 mb-4" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <Skeleton className="h-40 w-full rounded-lg" />
                <Skeleton className="h-40 w-full rounded-lg" />
                <Skeleton className="h-40 w-full rounded-lg" />
                <Skeleton className="h-40 w-full rounded-lg" />
              </div>

              <Skeleton className="h-8 w-64 mb-4" />
              <div className="space-y-2">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
              </div>

              <Skeleton className="h-40 w-full rounded-lg" />
              <Skeleton className="h-24 w-full" />

              <div className="flex justify-center mt-12">
                <Skeleton className="h-10 w-48" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
