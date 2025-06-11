import { Skeleton } from "@/components/ui/skeleton"

export default function DulseLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-rose-50 to-red-100">
      {/* Hero Section Skeleton */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-red-700">
        <div className="container mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Skeleton className="h-6 w-32 bg-red-200" />
                <Skeleton className="h-16 w-full bg-red-200" />
                <Skeleton className="h-6 w-3/4 bg-red-200" />
                <Skeleton className="h-6 w-2/3 bg-red-200" />
              </div>
              <div className="flex gap-4">
                <Skeleton className="h-12 w-32 bg-red-200" />
                <Skeleton className="h-12 w-24 bg-red-200" />
              </div>
            </div>
            <div className="relative">
              <Skeleton className="aspect-[4/3] rounded-2xl bg-red-200 max-w-sm mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections Skeleton */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-96 mx-auto mb-6" />
            <Skeleton className="h-6 w-2/3 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-48 w-full rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
