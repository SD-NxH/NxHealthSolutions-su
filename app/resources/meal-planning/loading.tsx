import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Skeleton className="h-10 w-64 mx-auto mb-4" />
          <Skeleton className="h-6 w-full max-w-3xl mx-auto" />
        </div>

        <Skeleton className="h-96 w-full mb-12 rounded-lg" />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Skeleton className="h-[500px] w-full rounded-lg" />
          <Skeleton className="h-[500px] w-full rounded-lg" />
        </div>

        <Skeleton className="h-64 w-full rounded-lg" />
      </div>
    </div>
  )
}
