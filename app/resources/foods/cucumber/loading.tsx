import { Skeleton } from "@/components/ui/skeleton"

export default function CucumberLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <div className="bg-white border-b border-green-200">
        <div className="container mx-auto px-4 py-4">
          <Skeleton className="h-4 w-64" />
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <Skeleton className="h-6 w-32 mx-auto mb-4 bg-green-500" />
            <Skeleton className="h-12 w-64 mx-auto mb-4 bg-green-400" />
            <Skeleton className="h-6 w-96 mx-auto mb-8 bg-green-300" />
            <Skeleton className="h-64 md:h-80 w-full max-w-2xl mx-auto rounded-xl bg-green-200" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="h-12 w-full mb-8" />
          <div className="space-y-6">
            <Skeleton className="h-64 w-full" />
            <div className="grid md:grid-cols-2 gap-6">
              <Skeleton className="h-48 w-full" />
              <Skeleton className="h-48 w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
