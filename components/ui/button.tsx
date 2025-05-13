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
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }), "!transition-none !duration-0")}
          {...props}
        >
          {children}
        </Link>
      )
    }

    // Otherwise render as div instead of button
    return (
      <div
        className={cn(
          buttonVariants({ variant, size, className }),
          "!transition-none !duration-0",
          "nxhealth-button carrots-default-button cursor-pointer",
        )}
        role="button"
        tabIndex={0}
        onClick={(e) => {
          // Call the original onClick if it exists
          if (props.onClick) {
            props.onClick(e as any)
            return // Stop here to let the custom onClick handle everything
          }

          // Check for data attributes that specify custom behavior
          if (props["data-target"]) {
            router.push(props["data-target"] as string)
            return
          }

          // Navigation based on class names
          const classStr = className || ""

          // Map of class names to destination pages
          const classToPageMap = {
            "btn-articles": "/resources/articles",
            "btn-about": "/about",
            "btn-services": "/services",
            "btn-contact": "/contact",
            "btn-get-started": "/get-started",
            "btn-resources": "/resources",
            "btn-foods": "/resources/foods/apple",
            "btn-consultation": "/services/consultation",
            "btn-nutrition": "/services/nutrition-plans",
            "btn-calorie-counter": "/resources/calorie-counter",
            "btn-what-to-eat": "/resources/what-to-eat",
            "btn-meal-planning": "/resources/meal-planning",
            "btn-shop": "/shop",
            "btn-login": "/login",
            "btn-signup": "/sign-up",
            "btn-profile": "/user-profile",
            "btn-cart": "/cart",
            "btn-checkout": "/checkout",
          }

          // Check if the button has any of the mapped classes
          for (const [btnClass, page] of Object.entries(classToPageMap)) {
            if (classStr.includes(btnClass)) {
              router.push(page)
              return
            }
          }

          // Determine navigation based on button text content
          const buttonText = typeof children === "string" ? children.toLowerCase() : ""

          // Map of button text keywords to destination pages
          const textToPageMap = {
            about: "/about",
            services: "/services",
            contact: "/contact",
            "get started": "/get-started",
            resources: "/resources",
            articles: "/resources/articles",
            consultation: "/services/consultation",
            consult: "/services/consultation",
            schedule: "/services/consultation",
            nutrition: "/services/nutrition-plans",
            "meal plan": "/services/nutrition-plans",
            diet: "/services/nutrition-plans",
            foods: "/resources/foods/apple",
            calorie: "/resources/calorie-counter",
            "what to eat": "/resources/what-to-eat",
            "meal planning": "/resources/meal-planning",
            shop: "/shop",
            login: "/login",
            "sign up": "/sign-up",
            profile: "/user-profile",
            cart: "/cart",
            checkout: "/checkout",
          }

          // Check if the button text contains any of the mapped keywords
          for (const [keyword, page] of Object.entries(textToPageMap)) {
            if (buttonText.includes(keyword)) {
              router.push(page)
              return
            }
          }

          // If we still don't know where to navigate, use the default based on the button's context
          if (props.className?.includes("consultation") || buttonText.includes("consult")) {
            router.push("/services/consultation")
            return
          }

          if (props.className?.includes("nutrition") || buttonText.includes("nutrition")) {
            router.push("/services/nutrition-plans")
            return
          }

          if (props.className?.includes("article") || buttonText.includes("article")) {
            router.push("/resources/articles")
            return
          }

          if (props.className?.includes("resource") || buttonText.includes("resource")) {
            router.push("/resources")
            return
          }

          // If all else fails, navigate to the Carrots page as the default
          router.push("/resources/foods/carrots")
        }}
        onKeyDown={(e) => {
          // Handle keyboard accessibility
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            e.currentTarget.click()
          }
        }}
        {...props}
      >
        {children}
      </div>
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
