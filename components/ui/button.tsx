"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { useRouter } from "next/navigation"

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
    const router = useRouter()

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

    // If href is provided, render as a standard button (not Link)
    // External components should wrap with Link explicitly
    if (href !== undefined) {
      // Special case for "Learn More About Dark Chocolate" button - override any href
      if (
        children?.toString().toLowerCase().includes("learn more about dark chocolate") ||
        children?.toString().toLowerCase().includes("dark chocolate") ||
        href.includes("dark-chocolate") ||
        href.includes("chocolate")
      ) {
        return (
          <button
            className={cn(
              buttonVariants({ variant: "chocolate", size, className }),
              "!transition-none !duration-0",
              "nxhealth-button dark-chocolate-button",
            )}
            ref={ref}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              router.push("/resources/foods/dark-chocolate")
            }}
            {...props}
          >
            {children}
          </button>
        )
      }

      // Special case for Dulse button - override any href
      if (
        children?.toString().toLowerCase().includes("dulse") ||
        href.includes("dulse") ||
        variant === "dulse" ||
        className?.includes("dulse")
      ) {
        return (
          <button
            className={cn(
              buttonVariants({ variant: "dulse", size, className }),
              "!transition-none !duration-0",
              "nxhealth-button dulse-button",
            )}
            ref={ref}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              router.push("/resources/foods/dulse")
            }}
            {...props}
          >
            {children}
          </button>
        )
      }

      // Standard href button
      return (
        <button
          className={cn(buttonVariants({ variant, size, className }), "!transition-none !duration-0")}
          ref={ref}
          onClick={(e) => {
            e.preventDefault()
            router.push(href)
          }}
          {...props}
        >
          {children}
        </button>
      )
    }

    // Special case: if this is the coconut-themed button, navigate to coconut page
    if (variant === "coconut" || className?.includes("coconut")) {
      return (
        <button
          className={cn(
            buttonVariants({ variant: "coconut", size, className }),
            "!transition-none !duration-0",
            "nxhealth-button coconut-button",
          )}
          ref={ref}
          onClick={(e) => {
            if (props.type === "submit") {
              return
            }
            e.preventDefault()
            router.push("/resources/foods/coconut")
          }}
          {...props}
        >
          {children}
        </button>
      )
    }

    // Special case: if this is the cinnamon-themed button, navigate to cinnamon page
    if (variant === "cinnamon" || className?.includes("cinnamon")) {
      return (
        <button
          className={cn(
            buttonVariants({ variant: "cinnamon", size, className }),
            "!transition-none !duration-0",
            "nxhealth-button cinnamon-button",
          )}
          ref={ref}
          onClick={(e) => {
            if (props.type === "submit") {
              return
            }
            e.preventDefault()
            router.push("/resources/foods/cinnamon")
          }}
          {...props}
        >
          {children}
        </button>
      )
    }

    // Special case: if this is the collard-greens-themed button, navigate to collard greens page
    if (variant === "collardGreens" || className?.includes("collardGreens")) {
      return (
        <button
          className={cn(
            buttonVariants({ variant: "collardGreens", size, className }),
            "!transition-none !duration-0",
            "nxhealth-button collard-greens-button",
          )}
          ref={ref}
          onClick={(e) => {
            if (props.type === "submit") {
              return
            }
            e.preventDefault()
            router.push("/resources/foods/collard-greens")
          }}
          {...props}
        >
          {children}
        </button>
      )
    }

    // Special case: if this is the cranberries-themed button, navigate to cranberries page
    if (variant === "cranberries" || className?.includes("cranberries")) {
      return (
        <button
          className={cn(
            buttonVariants({ variant: "cranberries", size, className }),
            "!transition-none !duration-0",
            "nxhealth-button cranberries-button",
          )}
          ref={ref}
          onClick={(e) => {
            if (props.type === "submit") {
              return
            }
            e.preventDefault()
            router.push("/resources/foods/cranberries")
          }}
          {...props}
        >
          {children}
        </button>
      )
    }

    // Special case: if this is the cucumbers-themed button, navigate to cucumbers page
    if (variant === "cucumber" || variant === "cucumbers" || className?.includes("cucumber")) {
      return (
        <button
          className={cn(
            buttonVariants({ variant: "cucumbers", size, className }),
            "!transition-none !duration-0",
            "nxhealth-button cucumbers-button",
          )}
          ref={ref}
          onClick={(e) => {
            if (props.type === "submit") {
              return
            }
            e.preventDefault()
            router.push("/resources/foods/cucumber")
          }}
          {...props}
        >
          {children}
        </button>
      )
    }

    // Special case: if this is the cumin-themed button, navigate to cumin page
    if (variant === "cumin" || className?.includes("cumin")) {
      return (
        <button
          className={cn(
            buttonVariants({ variant: "cumin", size, className }),
            "!transition-none !duration-0",
            "nxhealth-button cumin-button",
          )}
          ref={ref}
          onClick={(e) => {
            if (props.type === "submit") {
              return
            }
            e.preventDefault()
            router.push("/resources/foods/cumin")
          }}
          {...props}
        >
          {children}
        </button>
      )
    }

    // Special case: if this is the dark-chocolate-themed button, navigate to dark chocolate page
    if (
      variant === "chocolate" ||
      className?.includes("dark-chocolate") ||
      props["data-chocolate"] === "true" ||
      children?.toString().toLowerCase().includes("learn more about dark chocolate")
    ) {
      return (
        <button
          className={cn(
            buttonVariants({ variant: "chocolate", size, className }),
            "!transition-none !duration-0",
            "nxhealth-button dark-chocolate-button",
          )}
          ref={ref}
          onClick={(e) => {
            if (props.type === "submit") {
              return
            }
            e.preventDefault()
            router.push("/resources/foods/dark-chocolate")
          }}
          {...props}
        >
          {children}
        </button>
      )
    }

    // Special case: if this is the dulse-themed button, navigate to dulse page
    if (
      variant === "dulse" ||
      className?.includes("dulse") ||
      props["data-dulse"] === "true" ||
      children?.toString().toLowerCase().includes("dulse")
    ) {
      return (
        <button
          className={cn(
            buttonVariants({ variant: "dulse", size, className }),
            "!transition-none !duration-0",
            "nxhealth-button dulse-button",
          )}
          ref={ref}
          onClick={(e) => {
            if (props.type === "submit") {
              return
            }
            e.preventDefault()
            router.push("/resources/foods/dulse")
          }}
          {...props}
        >
          {children}
        </button>
      )
    }

    // Default fallback - return null if no conditions match
    return null
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
