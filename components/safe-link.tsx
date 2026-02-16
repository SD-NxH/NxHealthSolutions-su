import Link from "next/link"
import type { ReactNode } from "react"

interface SafeLinkProps {
  href: string
  children: ReactNode
  className?: string
  prefetch?: boolean
}

// Routes that are not yet built
const WIP_ROUTES = ["/resources/meal-planner", "/resources/grocery-builder", "/services/meal-planning"]

export function SafeLink({ href, children, className = "", prefetch }: SafeLinkProps) {
  const isWIP = WIP_ROUTES.includes(href)

  // For WIP routes, link to coming-soon page
  if (isWIP) {
    return (
      <Link href={`/coming-soon?from=${encodeURIComponent(href)}`} className={className} prefetch={false}>
        {children}
      </Link>
    )
  }

  // For normal routes, use regular Link with optional prefetch control
  return (
    <Link href={href} className={className} prefetch={prefetch}>
      {children}
    </Link>
  )
}
