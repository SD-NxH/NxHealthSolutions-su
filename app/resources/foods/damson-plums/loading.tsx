import { Skeleton } from "@/components/ui/skeleton"
import { ChevronLeft } from "lucide-react"

export default function DamsonPlumsLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="relative w-full py-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center text-purple-600 mb-6">
              <ChevronLeft className="h-4 w-4 mr-1" />
              <Skeleton className="h-4 w-32" />
            </div>
            <Skeleton className="h-12 w-3/4 mb-4" />
            <Skeleton className="h-6 w-full" />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Skeleton className="w-full h-64 md:h-96 mb-8 rounded-lg" />

            <div className="space-y-6">
              <div>
                <Skeleton className="h-8 w-64 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </div>

              <Skeleton className="h-48 w-full rounded-lg" />

              <div>
                <Skeleton className="h-8 w-64 mb-4" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <Skeleton className="h-32 rounded-lg" />
                  <Skeleton className="h-32 rounded-lg" />
                  <Skeleton className="h-32 rounded-lg" />
                  <Skeleton className="h-32 rounded-lg" />
                </div>
              </div>

              <div>
                <Skeleton className="h-8 w-64 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </div>

              <Skeleton className="h-48 w-full rounded-lg" />

              <div>
                <Skeleton className="h-8 w-64 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Skeleton className="h-10 w-48" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
