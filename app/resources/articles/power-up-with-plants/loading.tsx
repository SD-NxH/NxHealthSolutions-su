import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full py-12 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Skeleton className="h-6 w-32 mb-6" />
            <div className="flex items-center gap-2 mb-4">
              <Skeleton className="h-6 w-24 rounded-full" />
              <Skeleton className="h-6 w-36" />
              <Skeleton className="h-6 w-24" />
            </div>
            <Skeleton className="h-12 w-full mb-4" />
            <Skeleton className="h-6 w-3/4 mb-4" />
            <Skeleton className="h-64 md:h-80 w-full rounded-xl mb-6" />
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-5/6" />
                <Skeleton className="h-8 w-1/2 mt-8" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-4/5" />
                <Skeleton className="h-8 w-1/2 mt-8" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-5/6" />
              </div>
            </div>
            <div className="lg:col-span-1">
              <Skeleton className="h-64 w-full rounded-xl mb-8" />
              <Skeleton className="h-48 w-full rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <Skeleton className="h-10 w-64 mb-8 mx-auto" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i}>
                  <Skeleton className="h-48 rounded-xl mb-4" />
                  <Skeleton className="h-6 w-3/4" />
                </div>
              ))}
            </div>
            <Skeleton className="h-12 w-48 rounded-full mx-auto mt-12" />
          </div>
        </div>
      </section>
    </div>
  )
}
