import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Other Services | NxHealth",
  description:
    "Explore our additional health and wellness services designed to support your journey to optimal health.",
}

export default function OtherServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Other Services</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of additional health and wellness services tailored to meet your unique
              needs and support your wellness journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Service Placeholder Cards */}
            {Array.from({ length: 1 }, (_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-green-500 rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Health Professional WebService</h3>
                <p className="text-gray-600 mb-4">
                  This service specializes in building modern, secure, and effective websites for health professionals.
                  Its purpose is to help them build their online presence, attract new patients, and manage their
                  practice more efficiently. The websites are designed to look professional, work flawlessly on all
                  devices, and include features that make it easier for users to understand the work that they do. This
                  allows health professionals to focus on providing excellent care while their online presence works for
                  them.
                </p>
                <Link
                  href="/services/health-professional-webservice"
                  className="text-green-600 font-medium hover:text-green-700 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-gray-600 mb-6">
              We're continuously expanding our service offerings to better serve your health and wellness needs. Check
              back soon for updates on our additional services.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-green-100 text-green-800 rounded-lg">
              <span className="font-medium">More services will be added here</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
