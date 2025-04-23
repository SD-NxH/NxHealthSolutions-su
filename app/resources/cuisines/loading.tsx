import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <section className="relative py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Skeleton className="h-12 w-3/4 mx-auto mb-6" />
            <Skeleton className="h-6 w-2/3 mx-auto mb-8" />
            <div className="relative w-full max-w-md mx-auto">
              <Skeleton className="h-64 w-full rounded-xl mx-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Skeleton className="h-8 w-32 mx-auto mb-6 rounded-full" />
            <Skeleton className="h-10 w-3/4 mx-auto mb-6" />
            <Skeleton className="h-6 w-2/3 mx-auto mb-10" />

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-lg p-6">
                  <Skeleton className="h-8 w-3/4 mx-auto mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              ))}
            </div>

            <div className="rounded-xl p-8 mb-12">
              <Skeleton className="h-8 w-1/2 mx-auto mb-4" />
              <Skeleton className="h-4 w-2/3 mx-auto mb-6" />

              <div className="max-w-md mx-auto">
                <div className="flex gap-2">
                  <Skeleton className="h-12 flex-grow rounded-full" />
                  <Skeleton className="h-12 w-32 rounded-full" />
                </div>
              </div>
            </div>

            <Skeleton className="h-10 w-40 mx-auto rounded-full" />
          </div>
        </div>
      </section>
    </div>
  )
}
