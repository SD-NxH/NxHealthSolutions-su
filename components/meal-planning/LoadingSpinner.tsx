import type React from "react"
import { Loader2 } from "lucide-react"

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-neutral-800/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-nx-xl flex flex-col items-center max-w-sm mx-4">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
        </div>
        <h3 className="text-primary-dark font-semibold text-lg mb-2">Creating Your Meal Plan</h3>
        <p className="text-sm text-neutral-600 text-center mb-4">
          Our AI is analyzing your preferences and generating personalized recommendations...
        </p>
        <div className="w-full bg-neutral-200 rounded-full h-2">
          <div className="bg-primary h-2 rounded-full animate-pulse" style={{ width: "70%" }}></div>
        </div>
        <p className="text-xs text-neutral-500 mt-2">This may take a few moments</p>
      </div>
    </div>
  )
}

export default LoadingSpinner
