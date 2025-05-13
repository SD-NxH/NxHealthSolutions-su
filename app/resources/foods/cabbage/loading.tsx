import { Skeleton } from "@/components/ui/skeleton"

export default function CabbageLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Skeleton className="h-[300px] md:h-[400px] w-full mb-8 rounded-xl" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <section>
            <Skeleton className="h-10 w-3/4 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-4" />
          </section>

          <section>
            <Skeleton className="h-10 w-3/4 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-4" />

            <div className="bg-green-50/50 p-4 rounded-lg">
              <Skeleton className="h-6 w-3/4 mb-3" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {Array(8)
                  .fill(0)
                  .map((_, i) => (
                    <Skeleton key={i} className="h-4 w-full" />
                  ))}
              </div>
            </div>
          </section>

          <section>
            <Skeleton className="h-10 w-3/4 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-4" />

            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex items-start mb-2">
                  <Skeleton className="h-4 w-4 mr-2 rounded-full" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
          </section>
        </div>

        <div className="md:col-span-1 space-y-6">
          <div className="bg-green-50/50 p-6 rounded-lg">
            <Skeleton className="h-8 w-2/3 mb-3" />
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex items-start mb-2">
                  <Skeleton className="h-4 w-4 mr-2 rounded-full" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
          </div>

          <div className="bg-green-50/50 p-6 rounded-lg">
            <Skeleton className="h-8 w-2/3 mb-3" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-4" />
            <div className="grid grid-cols-4 gap-1">
              {Array(12)
                .fill(0)
                .map((_, i) => (
                  <Skeleton key={i} className="h-8 w-full rounded" />
                ))}
            </div>
          </div>

          <div className="bg-green-50/50 p-6 rounded-lg">
            <Skeleton className="h-8 w-2/3 mb-3" />
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex items-start mb-2">
                  <Skeleton className="h-4 w-4 mr-2" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
