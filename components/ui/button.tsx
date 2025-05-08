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
  ({ className, variant, size, asChild = false, href, ...props }, ref) => {
    const router = useRouter()

    // Check if this button should be hidden
    if (props["data-hidden"] === "true") {
      return null
    }

    // Only render as Link if href is explicitly provided
    if (href && !asChild) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }), "!transition-none !duration-0")}
          {...props}
        >
          {props.children}
        </Link>
      )
    }

    // Otherwise render as button or slot
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), "!transition-none !duration-0")}
        ref={ref}
        onClick={(e) => {
          // Call the original onClick if it exists
          if (props.onClick) {
            props.onClick(e as any)
          }

          // Check if this is a share button
          const isShareButton =
            props.className?.includes("share") ||
            (props as any)["data-share"] === "true" ||
            props.children?.toString().toLowerCase().includes("share")

          if (isShareButton) {
            // Copy the current URL to clipboard
            const currentUrl = window.location.href
            navigator.clipboard
              .writeText(currentUrl)
              .then(() => {
                // Show success feedback
                const button = e.currentTarget as HTMLButtonElement
                const originalText = button.innerText

                // Store original content
                const originalContent = button.innerHTML

                // Change text to "Copied!"
                button.innerHTML = "Copied!"

                // Reset after 2 seconds
                setTimeout(() => {
                  button.innerHTML = originalContent
                }, 2000)
              })
              .catch((err) => {
                console.error("Failed to copy URL: ", err)
              })
          }
          // Check if this is an articles button
          else if (
            props.className?.includes("articles") ||
            (props as any)["data-articles"] === "true" ||
            (props.children && typeof props.children === "string" && props.children.toLowerCase().includes("articles"))
          ) {
            // Navigate to the articles hub
            router.push("/resources/articles")
          }
          // Check if this is an explore button
          else {
            const isExploreButton = props.className?.includes("explore") || (props as any)["data-explore"] === "true"

            if (isExploreButton) {
              // List of possible pages to navigate to
              const pages = [
                "/resources",
                "/about",
                "/services",
                "/contact",
                "/get-started",
                "/resources/foods/apple",
                "/resources/foods/almond",
                "/resources/foods/avocado",
                "/resources/foods/artichoke",
                "/resources/foods/asparagus",
                "/resources/foods/dark-chocolate",
                "/resources/foods/dulse",
                "/resources/foods/damson-plums",
                "/resources/d/dill",
                "/resources/calorie-counter",
                "/resources/what-to-eat",
              ]

              // Select a random page
              const randomPage = pages[Math.floor(Math.random() * pages.length)]
              router.push(randomPage)
            }
            // Navigate to Articles page if not using asChild and not an explore button
            else if (!asChild && !href) {
              router.push("/resources/articles")
            }
          }
        }}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
