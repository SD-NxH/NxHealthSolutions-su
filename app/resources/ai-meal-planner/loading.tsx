import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      <div className="bg-white border-b border-green-100 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <Skeleton className="h-8 w-64 mb-2" />
          <Skeleton className="h-4 w-96" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <Skeleton className="h-12 w-full" />
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <Skeleton className="h-6 w-48 mb-4" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-32 w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
