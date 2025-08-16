import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Shield, Smartphone, Users, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Health Professional WebService | NxHealth",
  description:
    "Professional website development services for health practitioners. Modern, secure, and effective websites that help you attract new patients and grow your practice.",
}

export default function HealthProfessionalWebServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional Websites for Health Practitioners
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Build your online presence with modern, secure websites that attract new patients and help you manage your
              practice more efficiently.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                Get a Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our WebService?</h2>
              <p className="text-xl text-gray-600">We solve the common challenges health professionals face online</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Attract New Patients</h3>
                  <p className="text-gray-600">
                    SEO-optimized websites that help potential patients find you online and convert visitors into
                    appointments.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Zap className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Online Booking Integration</h3>
                  <p className="text-gray-600">
                    Seamless appointment scheduling systems that work 24/7, reducing administrative burden.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Secure Website Creation</h3>
                  <p className="text-gray-600">
                    We build websites with enterprise-level security from the ground up. Every site includes SSL
                    encryption, secure hosting infrastructure, regular security updates, and protection against common
                    web vulnerabilities. Your website and patient data are safeguarded with industry-leading security
                    protocols, giving you and your patients peace of mind when interacting online.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Smartphone className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Mobile-First Design</h3>
                  <p className="text-gray-600">
                    Responsive websites that look and work perfectly on all devices, from phones to desktops.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
              <p className="text-xl text-gray-600">See how we've helped other health professionals succeed online</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-green-100"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Dr. Sarah Johnson - Family Medicine</h3>
                  <p className="text-gray-600 mb-4">
                    Modern family practice website with online booking, patient portal, and educational resources.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    View Live Site
                  </Button>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-green-100 to-blue-100"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Wellness Center Plus - Integrative Health</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive wellness center site featuring multiple practitioners, services, and online
                    scheduling.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    View Live Site
                  </Button>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-purple-100 to-green-100"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Dr. Michael Chen - Cardiology</h3>
                  <p className="text-gray-600 mb-4">
                    Specialized cardiology practice with patient education, appointment booking, and telehealth
                    integration.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    View Live Site
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What's Included</h2>
              <p className="text-xl text-gray-600">Everything you need for a professional online presence</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Custom responsive design tailored to your practice",
                "SEO optimization for local search visibility",
                "Online appointment booking system",
                "Patient portal integration",
                "Enterprise-level security with SSL encryption and secure hosting",
                "Mobile-friendly layout and navigation",
                "Contact forms and lead capture",
                "Google My Business optimization",
                "Social media integration",
                "Analytics and performance tracking",
                "Ongoing technical support and maintenance",
                "Content management system training",
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600">Hear from satisfied health professionals</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6">
                <CardContent className="pt-0">
                  <div className="text-yellow-400 mb-4">★★★★★</div>
                  <p className="text-gray-700 mb-4 italic">
                    "The new website has transformed my practice. I'm getting 3x more online bookings and patients love
                    the easy scheduling system."
                  </p>
                  <div className="font-semibold text-gray-900">Dr. Emily Rodriguez</div>
                  <div className="text-gray-600 text-sm">Dermatology Practice</div>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent className="pt-0">
                  <div className="text-yellow-400 mb-4">★★★★★</div>
                  <p className="text-gray-700 mb-4 italic">
                    "Professional, secure, and exactly what my practice needed. The ongoing support has been
                    exceptional."
                  </p>
                  <div className="font-semibold text-gray-900">Dr. James Thompson</div>
                  <div className="text-gray-600 text-sm">Physical Therapy Clinic</div>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent className="pt-0">
                  <div className="text-yellow-400 mb-4">★★★★★</div>
                  <p className="text-gray-700 mb-4 italic">
                    "Finally, a website that represents the quality of care we provide. Our online presence now matches
                    our reputation."
                  </p>
                  <div className="font-semibold text-gray-900">Dr. Lisa Park</div>
                  <div className="text-gray-600 text-sm">Pediatric Practice</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Online Presence?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of health professionals who have grown their practices with our professional web services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3">
                Start Your Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 bg-transparent"
              >
                Contact Us Today
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
