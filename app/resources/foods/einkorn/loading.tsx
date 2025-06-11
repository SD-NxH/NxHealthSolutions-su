import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Skeleton className="h-[400px] w-full rounded-xl mb-8" />
      <Skeleton className="h-12 w-3/4 mb-4" />
      <Skeleton className="h-6 w-full mb-2" />
      <Skeleton className="h-6 w-full mb-2" />
      <Skeleton className="h-6 w-3/4 mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        <Skeleton className="h-[250px] w-full rounded-lg" />
        <Skeleton className="h-[250px] w-full rounded-lg" />
        <Skeleton className="h-[250px] w-full rounded-lg" />
      </div>

      <Skeleton className="h-12 w-2/4 mb-4" />
      <Skeleton className="h-6 w-full mb-2" />
      <Skeleton className="h-6 w-full mb-2" />
      <Skeleton className="h-6 w-full mb-8" />
    </div>
  )
}
