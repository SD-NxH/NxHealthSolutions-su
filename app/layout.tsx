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
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata = {
  title: "NxHealth - Better Health, Better Life",
  description: "We provide evidence-based health and wellness solutions to improve your quality of life.",
  manifest: "/manifest.json",
  themeColor: "#4ade80",
  appleWebApp: {
    title: "NxHealth",
    statusBarStyle: "default",
    startupImage: ["/icons/apple-touch-icon.png"],
  },
  icons: {
    icon: [
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png" }],
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#4ade80" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
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
        <Script src="/register-sw.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
