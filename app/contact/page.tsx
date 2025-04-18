"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { toast } from "@/hooks/use-toast"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const headerRef = useRef(null)
  const formRef = useRef(null)
  const mapRef = useRef(null)

  const isFormInView = useInView(formRef, { once: true, amount: 0.2 })
  const isMapInView = useInView(mapRef, { once: true, amount: 0.2 })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log(values)
    setIsSubmitting(false)

    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon!",
    })

    form.reset()
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section ref={headerRef} className="relative w-full py-16 md:py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <Image
                src="/nxlogo-alt.png"
                alt="NxHealth Solutions Logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-green-800 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Have questions or want to learn more about our services? We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={formRef} className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-serif font-light text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="What is this regarding?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="How can we help you?" className="min-h-[120px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-pulse">Sending...</span>
                      </>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-green-50 p-8 rounded-xl h-full">
                <h3 className="text-2xl font-serif font-light text-gray-900 mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">info@nxhealthsolutions.org</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600">
                        123 Wellness Way
                        <br />
                        Healthy City, HC 12345
                        <br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Hours</h4>
                      <p className="text-gray-600">
                        Monday - Friday: 9am - 6pm
                        <br />
                        Saturday: 10am - 4pm
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-medium text-gray-900 mb-3">Connect With Us</h4>
                  <div className="flex space-x-4">
                    <Link
                      href="#"
                      className="bg-white p-3 rounded-full text-gray-600 hover:text-green-600 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </Link>
                    <Link
                      href="#"
                      className="bg-white p-3 rounded-full text-gray-600 hover:text-green-600 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </Link>
                    <Link
                      href="#"
                      className="bg-white p-3 rounded-full text-gray-600 hover:text-green-600 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </Link>
                    <Link
                      href="#"
                      className="bg-white p-3 rounded-full text-gray-600 hover:text-green-600 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section ref={mapRef} className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isMapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-serif font-light text-gray-900 mb-6 text-center">Find Us</h2>
            <Card className="overflow-hidden border-0 shadow-md">
              <CardContent className="p-0">
                <div className="aspect-[16/9] relative">
                  <Image
                    src="/placeholder.svg?height=600&width=1200"
                    alt="Map location"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-lg shadow-lg max-w-xs w-full text-center">
                      <h3 className="font-medium text-gray-900 mb-2">NxHealth Solutions</h3>
                      <p className="text-gray-600 text-sm">
                        123 Wellness Way
                        <br />
                        Healthy City, HC 12345
                      </p>
                      <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white text-sm rounded-full">
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
