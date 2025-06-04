"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { cn } from "@/lib/utils"

// This is the core Button component used throughout the application.
// It provides consistent styling and behavior for all buttons.
// Removing it would break the application.
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
    if (props["data-hidden"] === "true") {
      return null
    }

    // Check if children contains a Link component
    const hasLinkChild = React.Children.toArray(children).some(
      (child) => React.isValidElement(child) && (child.type === Link || (child.type as any)?.displayName === "Link"),
    )

    // If children contains a Link, use asChild to avoid nested <a> tags
    if (hasLinkChild) {
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

    // Only render as Link if href is explicitly provided
    if (href !== undefined) {
      return (
        <Link
          href={href} // Use the provided href value
          className={cn(buttonVariants({ variant, size, className }), "!transition-none !duration-0")}
          {...props}
        >
          {children}
        </Link>
      )
    }

    // Otherwise render as button instead of anchor tag
    if (props["data-hide-button"] === "true") {
      return null
    }

    return (
      <button
        className={cn(
          buttonVariants({ variant, size, className }),
          "!transition-none !duration-0",
          "nxhealth-button freedom-food-default-button",
        )}
        ref={ref}
        onClick={(e) => {
          e.preventDefault()
          router.push("/resources/foods/chickpeas")
        }}
        {...props}
      >
        {children}
      </button>
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
