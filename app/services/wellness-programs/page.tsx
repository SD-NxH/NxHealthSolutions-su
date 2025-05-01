import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, Users, Target, Calendar, Heart, Award, Zap } from "lucide-react"

export default function WellnessProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-green-600">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/services" className="text-gray-500 hover:text-green-600">
              Services
            </Link>{" "}
            / <span className="text-green-600">Wellness Programs</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                Personalized Wellness Programs
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your health journey with our customized wellness programs designed specifically for your
                unique needs, goals, and lifestyle.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Get Started Today
                </Button>
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Schedule a Consultation
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/mindfulness-image.jpeg"
                  alt="Personalized wellness program"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Our Personalized Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe that wellness is not one-size-fits-all. Our programs are tailored to your individual needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 rounded-xl p-8 transition-all hover:shadow-lg">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Individual Assessment</h3>
              <p className="text-gray-600">
                We start with a comprehensive assessment of your health history, current lifestyle, goals, and
                challenges to create a foundation for your personalized program.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-8 transition-all hover:shadow-lg">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Custom Program Design</h3>
              <p className="text-gray-600">
                Our experts craft a wellness program specifically for you, combining nutrition, movement, mindfulness,
                and lifestyle modifications tailored to your unique needs.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-8 transition-all hover:shadow-lg">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Calendar className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Ongoing Support</h3>
              <p className="text-gray-600">
                Your journey includes regular check-ins, adjustments to your program as needed, and continuous support
                from our team of wellness professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Benefits of Our Personalized Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience transformative results with a program designed specifically for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-6 h-6 text-green-600" />,
                title: "Improved Overall Health",
                description:
                  "Address your specific health concerns with targeted interventions that work for your body.",
              },
              {
                icon: <Zap className="w-6 h-6 text-green-600" />,
                title: "Increased Energy",
                description: "Optimize your nutrition and lifestyle to boost energy levels throughout the day.",
              },
              {
                icon: <Award className="w-6 h-6 text-green-600" />,
                title: "Better Results",
                description:
                  "Achieve more significant and lasting results with a program tailored to your unique needs.",
              },
              {
                icon: <CheckCircle2 className="w-6 h-6 text-green-600" />,
                title: "Sustainable Habits",
                description: "Develop healthy habits that fit your lifestyle and can be maintained long-term.",
              },
              {
                icon: <Users className="w-6 h-6 text-green-600" />,
                title: "Personalized Support",
                description: "Receive guidance and accountability from experts who understand your individual journey.",
              },
              {
                icon: <Target className="w-6 h-6 text-green-600" />,
                title: "Targeted Approach",
                description: "Focus on the specific areas that will make the biggest impact on your wellness.",
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="mt-1">{benefit.icon}</div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Is NxHealth Right for You? */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                Is NxHealth Right for You?
              </h2>
              <p className="text-xl text-gray-600">
                Our personalized wellness programs are designed for individuals who are committed to making meaningful
                changes in their health and wellbeing.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Our programs are ideal for you if:</h3>
              <ul className="space-y-4">
                {[
                  "You're looking for a personalized approach rather than a one-size-fits-all solution",
                  "You want expert guidance tailored to your specific health needs and goals",
                  "You're committed to making sustainable lifestyle changes",
                  "You value a holistic approach that addresses nutrition, movement, and mindfulness",
                  "You're ready to invest time and effort into your health and wellbeing",
                  "You've tried generic programs in the past without achieving lasting results",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-50 rounded-xl p-8">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                Our approach might not be the best fit if:
              </h3>
              <ul className="space-y-4">
                {[
                  "You're looking for a quick fix or overnight results",
                  "You prefer not to make any changes to your current lifestyle",
                  "You're seeking a strictly medical approach without lifestyle modifications",
                  "You're not ready to actively participate in your wellness journey",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full border-2 border-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-amber-600 text-sm">!</span>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Program Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Our Wellness Program Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the level of personalization and support that best fits your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Essential Wellness",
                description: "A foundational program to establish healthy habits",
                features: [
                  "Initial wellness assessment",
                  "Personalized nutrition guidance",
                  "Basic movement plan",
                  "Monthly check-ins",
                  "Digital resources and tools",
                  "Email support",
                ],
              },
              {
                title: "Comprehensive Wellness",
                description: "Our most popular program for holistic transformation",
                features: [
                  "Detailed health assessment",
                  "Customized nutrition plan",
                  "Tailored movement program",
                  "Stress management techniques",
                  "Bi-weekly check-ins",
                  "Priority email and chat support",
                  "Progress tracking tools",
                ],
                highlighted: true,
              },
              {
                title: "Premium Wellness",
                description: "The ultimate personalized wellness experience",
                features: [
                  "Comprehensive health evaluation",
                  "Fully customized wellness plan",
                  "One-on-one coaching sessions",
                  "Weekly check-ins and adjustments",
                  "24/7 support access",
                  "Advanced progress tracking",
                  "Lifestyle integration support",
                  "Exclusive wellness resources",
                ],
              },
            ].map((program, index) => (
              <div
                key={index}
                className={`rounded-xl overflow-hidden shadow-lg ${
                  program.highlighted ? "border-2 border-green-600 transform scale-105" : "border border-gray-200"
                }`}
              >
                <div className={`p-6 ${program.highlighted ? "bg-green-600" : "bg-white"}`}>
                  <h3
                    className={`text-2xl font-serif font-bold mb-2 ${program.highlighted ? "text-white" : "text-gray-900"}`}
                  >
                    {program.title}
                  </h3>
                  <p className={program.highlighted ? "text-green-100" : "text-gray-600"}>{program.description}</p>
                </div>
                <div className="bg-white p-6">
                  <ul className="space-y-3 mb-8">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Learn More</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from clients who have transformed their lives with our personalized wellness programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "The personalized approach made all the difference. For the first time, I have a wellness plan that actually fits my lifestyle and addresses my specific health concerns.",
                name: "Sarah J.",
                program: "Comprehensive Wellness Program",
              },
              {
                quote:
                  "I've tried so many generic programs before, but nothing stuck. With NxHealth's personalized program, I finally feel like I'm making sustainable changes that work for me.",
                name: "Michael T.",
                program: "Premium Wellness Program",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-sm">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <svg className="w-10 h-10 text-green-600 opacity-30" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 mb-6 flex-grow">{testimonial.quote}</p>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-green-600">{testimonial.program}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Ready to Start Your Personalized Wellness Journey?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Take the first step toward a healthier, more vibrant you with a wellness program designed specifically for
              your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                Schedule a Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-700">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Get answers to common questions about our personalized wellness programs.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How personalized are your wellness programs?",
                  answer:
                    "Our programs are highly personalized based on your health history, current lifestyle, goals, preferences, and challenges. We take the time to understand your unique situation and create a program specifically designed for you.",
                },
                {
                  question: "How long does a typical wellness program last?",
                  answer:
                    "The duration varies based on your goals and needs. Most clients see significant results within 3-6 months, but many choose to continue with ongoing support to maintain and build upon their progress.",
                },
                {
                  question: "Can I change my program as I go?",
                  answer:
                    "We regularly assess your progress and make adjustments to your program as needed. Your wellness journey is dynamic, and your program should be too.",
                },
                {
                  question: "Do I need to live near your location to participate?",
                  answer:
                    "No, our personalized wellness programs are available virtually, allowing us to work with clients anywhere. All consultations, check-ins, and support can be provided remotely.",
                },
                {
                  question: "How do I know if I'm a good fit for your programs?",
                  answer:
                    "We recommend scheduling a free initial consultation where we can discuss your goals, answer your questions, and determine if our approach aligns with your needs and expectations.",
                },
              ].map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
