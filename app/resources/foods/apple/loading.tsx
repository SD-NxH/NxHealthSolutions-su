import { Skeleton } from "@/components/ui/skeleton"

export default function AppleLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Skeleton className="h-6 w-40 mb-6" />
            <Skeleton className="h-12 w-full max-w-lg mb-4" />
            <Skeleton className="h-6 w-full max-w-md" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Skeleton className="w-full h-64 md:h-96 mb-8 rounded-lg" />

            <Skeleton className="h-8 w-64 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-6" />

            <Skeleton className="h-8 w-64 mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Skeleton className="h-32 w-full rounded-lg" />
              <Skeleton className="h-32 w-full rounded-lg" />
              <Skeleton className="h-32 w-full rounded-lg" />
              <Skeleton className="h-32 w-full rounded-lg" />
            </div>

            <Skeleton className="h-8 w-64 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-6" />

            <div className="mt-12 flex justify-center">
              <Skeleton className="h-10 w-48" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
