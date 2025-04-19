import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Earthly Treasures",
  description: "Contact Earthly Treasures for inquiries and assistance.",
}

const ContactPage = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Message
              </button>
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
            <p className="text-gray-600">info@earthlytreasures.com</p>
          </div>
          <div>
            <h3 className="font-semibold">Phone:</h3>
            <p className="text-gray-600">555-123-4567</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
