import { Skeleton } from "@/components/ui/skeleton"

export default function MealPlanningLoading() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section Skeleton */}
      <div className="text-center mb-12">
        <Skeleton className="h-10 w-1/3 mx-auto mb-4" />
        <Skeleton className="h-6 w-2/3 mx-auto" />
      </div>

      {/* Benefits Section Skeleton */}
      <div className="mb-16">
        <Skeleton className="h-8 w-1/4 mx-auto mb-8" />

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <Skeleton className="h-8 w-8 mb-4" />
              <Skeleton className="h-6 w-1/2 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </div>

      {/* Meal Plan Builder Skeleton */}
      <div className="mb-16 bg-green-50 p-8 rounded-xl">
        <Skeleton className="h-8 w-1/3 mx-auto mb-8" />

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Skeleton className="h-6 w-1/3 mb-4" />
            <div className="flex flex-wrap gap-4 mb-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton key={i} className="h-6 w-24" />
              ))}
            </div>
            <Skeleton className="h-6 w-1/3 mb-2" />
            <Skeleton className="h-[100px] w-full mb-6" />
            <Skeleton className="h-10 w-full" />
          </div>

          <div>
            <Skeleton className="h-6 w-1/3 mb-4" />
            <div className="bg-white p-6 rounded-lg">
              <div className="space-y-6">
                {["Breakfast", "Lunch", "Dinner", "Snacks"].map((meal) => (
                  <div key={meal}>
                    <Skeleton className="h-6 w-24 mb-2" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section Skeleton */}
      <div className="text-center">
        <Skeleton className="h-6 w-1/3 mx-auto mb-4" />
        <Skeleton className="h-4 w-1/2 mx-auto mb-6" />
        <Skeleton className="h-10 w-48 mx-auto" />
      </div>
    </div>
  )
}
