"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive hover:text-destructive-foreground",
        outline: "border border-input bg-background hover:bg-background hover:text-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary hover:text-secondary-foreground",
        ghost: "hover:bg-transparent hover:text-inherit",
        link: "text-primary underline-offset-4 hover:text-primary",
        chocolate: "bg-amber-950 hover:bg-amber-900 text-amber-50 hover:text-amber-100 border-amber-800",
        dulse: "bg-red-900 hover:bg-red-800 text-red-50 hover:text-red-100 border-red-950",
        carrot: "bg-orange-600 hover:bg-orange-700 text-white hover:text-white border-orange-700",
        banana: "bg-yellow-400 hover:bg-yellow-500 text-yellow-900 hover:text-yellow-950 border-yellow-500",
        beetroot: "bg-purple-900 hover:bg-purple-950 text-pink-50 hover:text-pink-100 border-purple-800",
        cinnamon: "bg-amber-800 hover:bg-amber-900 text-amber-50 hover:text-amber-100 border-amber-900",
        coconut: "bg-amber-600 hover:bg-amber-700 text-amber-50 hover:text-amber-100 border-amber-700",
        collardGreens: "bg-green-700 hover:bg-green-800 text-green-50 hover:text-green-100 border-green-800",
        cranberries: "bg-red-700 hover:bg-red-800 text-red-50 hover:text-red-100 border-red-800",
        cucumbers: "bg-green-600 hover:bg-green-700 text-green-50 hover:text-green-100 border-green-700",
        cumin: "bg-amber-700 hover:bg-amber-800 text-amber-50 hover:text-amber-100 border-amber-800",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  href?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, href, children = "Get Started", ...props }, ref) => {
    const [showPopup, setShowPopup] = React.useState(false)

    // Check if this button should be hidden
    if (props["data-hidden"] === "true" || props["data-hide-button"] === "true") {
      return null
    }

    // If asChild is true, use Slot to render children as-is
    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }), "!transition-none !duration-0")}
          ref={ref}
          {...props}
        >
          {children}
        </Slot>
      )
    }

    const handleShowPopup = () => {
      setShowPopup(true)
    }

    // Default button implementation - shows PDF popup preview
    return (
      <>
        <button
          className={cn(buttonVariants({ variant, size, className }), "!transition-none !duration-0")}
          ref={ref}
          onClick={(e) => {
            e.preventDefault()
            handleShowPopup()
          }}
          {...props}
        >
          {children}
        </button>

        {showPopup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
                <h2 className="text-xl font-bold text-green-800">Transform Your Life in 30 Days</h2>
                <button onClick={() => setShowPopup(false)} className="p-1 hover:bg-gray-100 rounded">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-green-800 mb-2">Transform Your Life in 30 Days</h1>
                  <p className="text-lg text-green-600 mb-1">NXHEALTH SOLUTIONS</p>
                  <p className="text-md text-gray-600">Eric Johnson M.Sc</p>
                  <p className="text-sm text-gray-500 mt-2">M.S. Health Science & Nutrition • B.S. Exercise Science</p>
                  <p className="text-sm text-gray-500">Food Scientist • Nutritionist • Health Fitness Specialist</p>
                </div>

                <div className="border-t pt-4">
                  <h3 className="text-lg font-semibold text-green-700 mb-3">Getting Started - 3 Essential Promises</h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800">1. Don't Make Excuses</h4>
                      <p className="text-sm text-gray-700 mt-1">
                        Change does not have to be bad. You decided to make a change, you owe it to yourself to follow
                        through.
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800">2. Be Nice To Yourself</h4>
                      <p className="text-sm text-gray-700 mt-1">
                        Distinguish discipline from self-torture. Celebrate every positive step, no matter how small.
                        It's about progress, not perfection.
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800">3. Get Uncomfortable</h4>
                      <p className="text-sm text-gray-700 mt-1">
                        Embrace discomfort—it's where growth happens. In discomfort, you discover your true potential.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="text-lg font-semibold text-green-700 mb-3">Sample Days Preview</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded">
                      <h4 className="font-medium text-green-700">Day 1: Mindful Mornings</h4>
                      <p className="text-sm text-gray-600">Start your day with gratitude and awaken your body & mind</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <h4 className="font-medium text-green-700">Day 3: Plant-Powered</h4>
                      <p className="text-sm text-gray-600">Discover the health wonders of plant-based nutrition</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <h4 className="font-medium text-green-700">Day 10: Positivity is Powerful</h4>
                      <p className="text-sm text-gray-600">Cultivate a positive mindset for enhanced well-being</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4 text-center">
                  <p className="text-sm text-gray-600 mb-4">
                    This comprehensive 30-day guide includes daily practices, challenges, and insights to transform your
                    health and well-being.
                  </p>
                  <button
                    onClick={() => {
                      const link = document.createElement("a")
                      link.href = "/transform-your-life-30-days.pdf"
                      link.download = "Transform-Your-Life-30-Days-NxHealth.pdf"
                      document.body.appendChild(link)
                      link.click()
                      document.body.removeChild(link)
                      setShowPopup(false)
                    }}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium"
                  >
                    Download Full Guide
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
