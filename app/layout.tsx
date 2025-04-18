import type React from "react"
import { Inter, Playfair_Display } from "next/font/google"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ScrollProgress from "@/components/scroll-progress"
import ScrollToTop from "@/components/scroll-to-top"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
// Import the CartProvider
import { CartProvider } from "@/context/cart-context"
import MaintenanceNotification from "@/components/maintenance-notification"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata = {
  title: "NxHealth Solutions - Better Health, Better Life",
  description: "We provide evidence-based health and wellness solutions to improve your quality of life.",
  icons: {
    icon: "/nxlogo1.png",
  },
    generator: 'v0.dev'
}

// Update the RootLayout function to wrap the content with CartProvider
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              <ScrollProgress />
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
              <ScrollToTop />
              <MaintenanceNotification />
            </div>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
