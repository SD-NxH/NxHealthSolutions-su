import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function CinnamonLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section Skeleton */}
        <div className="relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-r from-amber-900 via-orange-800 to-red-900">
          <div className="relative z-10 px-8 py-16 text-center">
            <div className="mx-auto mb-6 h-24 w-24 animate-pulse rounded-full bg-amber-100/50"></div>
            <div className="mx-auto mb-4 h-12 w-64 animate-pulse rounded bg-white/20"></div>
            <div className="mx-auto mb-6 h-6 w-96 animate-pulse rounded bg-white/20"></div>
            <div className="flex justify-center gap-3">
              <div className="h-6 w-24 animate-pulse rounded-full bg-white/20"></div>
              <div className="h-6 w-28 animate-pulse rounded-full bg-white/20"></div>
              <div className="h-6 w-32 animate-pulse rounded-full bg-white/20"></div>
            </div>
          </div>
        </div>

        {/* Quick Facts Skeleton */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="border-amber-200 bg-amber-50">
              <CardHeader className="pb-3">
                <div className="h-6 w-20 animate-pulse rounded bg-amber-200"></div>
              </CardHeader>
              <CardContent>
                <div className="h-4 w-full animate-pulse rounded bg-amber-200"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Content Cards Skeleton */}
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="mb-12 border-amber-300 bg-gradient-to-r from-amber-50 to-orange-50">
            <CardHeader>
              <div className="h-8 w-48 animate-pulse rounded bg-amber-200"></div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-4 w-full animate-pulse rounded bg-amber-200"></div>
              <div className="h-4 w-3/4 animate-pulse rounded bg-amber-200"></div>
              <div className="h-4 w-1/2 animate-pulse rounded bg-amber-200"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
