import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <Skeleton className="h-6 w-32 mb-8" />

        <Skeleton className="h-12 w-full max-w-2xl mb-6" />

        <Skeleton className="h-[300px] w-full mb-8 rounded-xl" />

        <Skeleton className="h-24 w-full mb-8" />

        <Skeleton className="h-8 w-64 mt-10 mb-4" />
        <Skeleton className="h-20 w-full mb-4" />
        <Skeleton className="h-20 w-full mb-8" />

        <Skeleton className="h-40 w-full rounded-lg my-8" />

        <Skeleton className="h-8 w-64 mt-10 mb-4" />
        <Skeleton className="h-20 w-full mb-12" />

        <Skeleton className="h-1 w-full mb-8" />
        <Skeleton className="h-8 w-64 mb-4" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-full mb-12" />
      </div>
    </div>
  )
}
