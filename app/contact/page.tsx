import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"
import { Facebook } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - NxHealth",
  description: "Contact NxHealth for inquiries and assistance.",
}

const ContactPage = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
          <form action="https://formsubmit.co/nxhealthsolutions@gmail.com" method="POST">
            <input type="hidden" name="_next" value="https://nxhealthsolutions.org" />
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                name="message"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <Button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-600 mb-2">Feel free to reach out to us with any questions or inquiries.</p>
          <div className="mb-4">
            <h3 className="font-semibold">Address:</h3>
            <p className="text-gray-600">
              3564 AVALON PARK EAST BLVD STE 1-AA928
              <br />
              Orlando, Florida 32828
            </p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Email:</h3>
            <p className="text-gray-600">nxhealthsolutions@gmail.com</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Facebook:</h3>
            <Link
              href="https://www.facebook.com/share/1B9KNuEpwP/?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 flex items-center"
            >
              <Facebook className="h-4 w-4 mr-1" />
              Visit us on Facebook
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
