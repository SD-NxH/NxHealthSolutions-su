"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

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
  onClick?: () => void
  href?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, onClick, href, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    const handleClick = React.useCallback(
      (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        if (onClick) {
          onClick()
        }
      },
      [onClick],
    )

    const Anchor = React.useCallback(
      React.forwardRef<HTMLAnchorElement, React.HTMLAttributes<HTMLAnchorElement>>((props, ref) => {
        return (
          <a
            href={href}
            ref={ref}
            {...props}
            onClick={(e) => {
              handleClick(e)
              // Allow default navigation behavior
            }}
          />
        )
      }),
      [href, handleClick],
    )

    // Add special handling for Dark Chocolate page links
    const isChocolatePage = href === "/resources/d/dark-chocolate"

    const Component = href ? Anchor : Comp

    return (
      <Component
        className={cn(
          buttonVariants({ variant, size, className }),
          "!transition-none !duration-0",
          isChocolatePage && "bg-amber-950 hover:bg-amber-900 text-amber-50 hover:text-amber-100 border-amber-800",
        )}
        ref={ref}
        {...(href && !asChild ? { href } : {})}
        onClick={!href ? handleClick : undefined}
        {...(isChocolatePage ? { "aria-label": "Visit Dark Chocolate Information Page" } : {})}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
