import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Skeleton className="h-6 w-32 mb-6" />
            <Skeleton className="h-12 w-full mb-4" />
            <Skeleton className="h-6 w-3/4" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Skeleton className="w-full h-64 md:h-96 mb-8 rounded-lg" />

            <Skeleton className="h-8 w-3/4 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-5/6 mb-6" />

            <Skeleton className="h-6 w-1/2 mb-3" />
            <Skeleton className="h-4 w-full mb-4" />

            <div className="pl-6 mb-6">
              <Skeleton className="h-4 w-1/3 mb-2" />
              <Skeleton className="h-4 w-1/4 mb-2" />
              <Skeleton className="h-4 w-2/5 mb-2" />
              <Skeleton className="h-4 w-1/3 mb-2" />
              <Skeleton className="h-4 w-1/4 mb-2" />
            </div>

            <Skeleton className="h-8 w-2/3 mb-6 mt-12" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Skeleton className="h-40 rounded-lg" />
              <Skeleton className="h-40 rounded-lg" />
              <Skeleton className="h-40 rounded-lg" />
              <Skeleton className="h-40 rounded-lg" />
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <Skeleton className="h-10 w-40" />
              <Skeleton className="h-10 w-40" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
