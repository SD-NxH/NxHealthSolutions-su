import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function CranberriesLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-rose-50 to-pink-50">
      {/* Hero Section Skeleton */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Skeleton className="h-6 w-32 bg-red-200" />
                <Skeleton className="h-16 w-64 bg-red-200" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full bg-red-200" />
                  <Skeleton className="h-4 w-full bg-red-200" />
                  <Skeleton className="h-4 w-3/4 bg-red-200" />
                </div>
              </div>
            </div>

            <div className="relative">
              <Skeleton className="aspect-square rounded-2xl bg-red-200" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section Skeleton */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Tabs Skeleton */}
          <div className="flex space-x-1 bg-red-100 p-1 rounded-lg">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="flex-1 h-10 bg-red-200" />
            ))}
          </div>

          {/* Content Cards Skeleton */}
          <div className="space-y-6">
            <Card className="border-red-200">
              <CardHeader>
                <Skeleton className="h-8 w-48 bg-red-200" />
                <Skeleton className="h-4 w-32 bg-red-200" />
              </CardHeader>
              <CardContent className="space-y-4">
                <Skeleton className="h-4 w-full bg-red-200" />
                <Skeleton className="h-4 w-full bg-red-200" />
                <Skeleton className="h-4 w-3/4 bg-red-200" />

                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="p-4 bg-red-50 rounded-lg">
                      <Skeleton className="h-8 w-8 mx-auto mb-2 bg-red-200" />
                      <Skeleton className="h-4 w-20 mx-auto mb-1 bg-red-200" />
                      <Skeleton className="h-3 w-16 mx-auto bg-red-200" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
