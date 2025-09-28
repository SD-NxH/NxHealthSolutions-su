"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import ResponsiveImage from "@/components/responsive-image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { useMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import ShoppingCartButton from "@/components/shopping-cart"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, User } from "lucide-react"

export default function SiteHeader() {
  const pathname = usePathname()
  const router = useRouter()
  const isMobile = useMobile()
  const [isMounted, setIsMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Handle mobile menu link clicks
  const handleMenuLinkClick = (href: string) => {
    setIsMenuOpen(false) // Close the menu
    router.push(href) // Navigate to the clicked link
  }

  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative overflow-hidden rounded-full bg-green-100/70 backdrop-blur-sm shadow-md p-1 transition-all duration-300 hover:shadow-lg">
            <ResponsiveImage
              src="/nxlogo-alt-2.png"
              alt="NxHealth Logo"
              width={40}
              height={40}
              className="object-contain rounded-full filter drop-shadow-sm"
              priority
            />
          </div>
          <span className="hidden sm:inline-block text-xl font-serif font-medium text-green-800">NxHealth</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="hidden sm:flex items-center space-x-6">
            <Link
              href="/about"
              className={cn(
                "text-sm font-medium transition-colors hover:text-green-600",
                pathname === "/about" ? "text-green-600" : "text-gray-500",
              )}
            >
              About
            </Link>
            <Link
              href="/services"
              className={cn(
                "text-sm font-medium transition-colors hover:text-green-600",
                pathname === "/services" ? "text-green-600" : "text-gray-500",
              )}
            >
              Services
            </Link>
            <Link
              href="/resources"
              className={cn(
                "text-sm font-medium transition-colors hover:text-green-600",
                pathname === "/resources" ? "text-green-600" : "text-gray-500",
              )}
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className={cn(
                "text-sm font-medium transition-colors hover:text-green-600",
                pathname === "/contact" ? "text-green-600" : "text-gray-500",
              )}
            >
              Contact
            </Link>
            <Link
              href="/login"
              className={cn(
                "text-sm font-medium transition-colors hover:text-green-600 flex items-center gap-1",
                pathname === "/login" ? "text-green-600" : "text-gray-500",
              )}
            >
              <User className="h-4 w-4" />
              <span className="sr-only">Profile</span>
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <ShoppingCartButton />

            {/* Get Started Button - Desktop */}
            <div className="hidden md:block">
              <Link href="/get-started">
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full">Get Started</Button>
              </Link>
            </div>

            {isMobile && (
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <button className="p-2 rounded-md hover:bg-gray-100">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open menu</span>
                  </button>
                </SheetTrigger>
                <SheetContent className="w-full sm:max-w-sm bg-white">
                  <div className="grid gap-4 py-4">
                    <button
                      onClick={() => handleMenuLinkClick("/about")}
                      className={cn(
                        "px-4 py-2 rounded-md hover:bg-gray-100 block text-left",
                        pathname === "/about" ? "text-green-600" : "text-gray-500",
                      )}
                    >
                      About
                    </button>
                    <button
                      onClick={() => handleMenuLinkClick("/services")}
                      className={cn(
                        "px-4 py-2 rounded-md hover:bg-gray-100 block text-left",
                        pathname === "/services" ? "text-green-600" : "text-gray-500",
                      )}
                    >
                      Services
                    </button>
                    <button
                      onClick={() => handleMenuLinkClick("/resources")}
                      className={cn(
                        "px-4 py-2 rounded-md hover:bg-gray-100 block text-left",
                        pathname === "/resources" ? "text-green-600" : "text-gray-500",
                      )}
                    >
                      Resources
                    </button>
                    <button
                      onClick={() => handleMenuLinkClick("/contact")}
                      className={cn(
                        "px-4 py-2 rounded-md hover:bg-gray-100 block text-left",
                        pathname === "/contact" ? "text-green-600" : "text-gray-500",
                      )}
                    >
                      Contact
                    </button>
                    <button
                      onClick={() => handleMenuLinkClick("/login")}
                      className={cn(
                        "px-4 py-2 rounded-md hover:bg-gray-100 flex items-center gap-2",
                        pathname === "/login" ? "text-green-600" : "text-gray-500",
                      )}
                    >
                      <User className="h-4 w-4" />
                      Profile
                    </button>

                    {/* Get Started Button - Mobile */}
                    <div className="mt-4">
                      <Link href="/get-started">
                        <Button
                          className="bg-green-600 hover:bg-green-700 text-white rounded-full w-full"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Get Started
                        </Button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
