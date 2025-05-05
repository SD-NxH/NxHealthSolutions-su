import Link from "next/link"
import { Facebook, Instagram, Mail, Youtube } from "lucide-react"
import ResponsiveImage from "@/components/responsive-image"

export default function SiteFooter() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="relative overflow-hidden rounded-full bg-green-100/70 backdrop-blur-sm shadow-md p-1 transition-all duration-300 hover:shadow-lg">
                <ResponsiveImage
                  src="/nxlogo-alt-2.png"
                  alt="NxHealth Logo"
                  width={60}
                  height={60}
                  className="object-contain rounded-full filter drop-shadow-sm"
                  priority
                />
              </div>
              <span className="text-xl font-serif font-medium text-green-800">NxHealth</span>
            </Link>
            <p className="text-gray-600 mb-6">
              Providing evidence-based health and wellness solutions to improve your quality of life.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/share/169bCLQpDM/?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-green-600"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.tiktok.com/@nxhealth?_t=ZP-8vMeKoynmE3&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-green-600"
              >
                <div className="h-5 w-5 flex items-center justify-center font-bold">T</div>
                <span className="sr-only">TikTok</span>
              </Link>
              <Link
                href="https://youtube.com/@nxhealth?si=rf5hEmahpl5aJCzV"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-green-600"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="https://www.instagram.com/nxhealth_?igsh=MW80aXM0cnRvOXE4cg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-green-600"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/health-wellness" className="text-gray-600 hover:text-green-600">
                  Health & Wellness
                </Link>
              </li>
              <li>
                <Link href="/services/diet-coaching" className="text-gray-600 hover:text-green-600">
                  Diet Coaching
                </Link>
              </li>
              <li>
                <Link href="/services/nutrition-planning" className="text-gray-600 hover:text-green-600">
                  Nutrition Planning
                </Link>
              </li>
              <li>
                <Link href="/services/wellness-programs" className="text-gray-600 hover:text-green-600">
                  Wellness Programs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-green-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-600 hover:text-green-600">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-green-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-green-600">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                <span className="text-gray-600">nxhealthsolutions@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} NxHealth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
