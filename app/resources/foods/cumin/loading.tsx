import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function CuminLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Hero Section Skeleton */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Skeleton className="h-6 w-32 mx-auto mb-4 bg-amber-200" />
            <Skeleton className="h-16 w-64 mx-auto mb-6 bg-amber-200" />
            <Skeleton className="h-6 w-96 mx-auto bg-amber-200" />
          </div>
          <div className="relative max-w-4xl mx-auto mb-12">
            <Skeleton className="aspect-video rounded-2xl bg-amber-200" />
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Skeleton className="h-12 w-full mb-8 bg-amber-200" />

          <div className="space-y-8">
            <Card className="border-amber-200 bg-white/80">
              <CardHeader>
                <Skeleton className="h-8 w-48 bg-amber-200" />
              </CardHeader>
              <CardContent className="space-y-4">
                <Skeleton className="h-4 w-full bg-amber-200" />
                <Skeleton className="h-4 w-3/4 bg-amber-200" />
                <Skeleton className="h-4 w-5/6 bg-amber-200" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
