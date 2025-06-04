import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function CauliflowerLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Hero Section Skeleton */}
      <section className="relative py-20 bg-gradient-to-r from-green-100 to-emerald-100">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Skeleton className="h-6 w-32 mb-4 bg-green-200" />
              <Skeleton className="h-16 w-80 mb-6 bg-green-200" />
              <Skeleton className="h-6 w-full mb-2 bg-green-200" />
              <Skeleton className="h-6 w-3/4 mb-8 bg-green-200" />
              <div className="flex gap-4">
                <Skeleton className="h-10 w-32 bg-green-200" />
                <Skeleton className="h-10 w-32 bg-green-200" />
              </div>
            </div>
            <div className="relative">
              <Skeleton className="w-full h-96 rounded-2xl bg-green-200" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section Skeleton */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Skeleton className="w-full h-64 md:h-96 mb-8 rounded-lg bg-green-100" />

            <div className="space-y-4 mb-8">
              <Skeleton className="h-8 w-64 bg-green-100" />
              <Skeleton className="h-4 w-full bg-green-100" />
              <Skeleton className="h-4 w-full bg-green-100" />
              <Skeleton className="h-4 w-3/4 bg-green-100" />
            </div>

            {/* Nutritional Info Skeleton */}
            <Card className="mb-12 border-green-200 bg-green-50">
              <CardContent className="p-8">
                <Skeleton className="h-6 w-48 mb-6 bg-green-200" />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="text-center">
                      <Skeleton className="h-8 w-12 mx-auto mb-2 bg-green-200" />
                      <Skeleton className="h-4 w-16 mx-auto bg-green-200" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Health Benefits Skeleton */}
            <div className="mb-12">
              <Skeleton className="h-8 w-48 mb-8 bg-green-100" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[...Array(4)].map((_, i) => (
                  <Card key={i} className="border-green-200">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Skeleton className="w-12 h-12 rounded-full bg-green-200" />
                        <div className="flex-1">
                          <Skeleton className="h-5 w-32 mb-2 bg-green-200" />
                          <Skeleton className="h-4 w-full mb-1 bg-green-200" />
                          <Skeleton className="h-4 w-3/4 bg-green-200" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
