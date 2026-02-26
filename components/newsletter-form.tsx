"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, Loader2 } from "lucide-react"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)

    try {
      await fetch("https://formsubmit.co/ajax/nxhealthsolutions@gmail.com", {
        method: "POST",
        body: formData,
      })
      setIsSuccess(true)
      setEmail("")
    } catch (error) {
      // Fallback: submit normally if AJAX fails
      e.currentTarget.submit()
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div role="status" aria-live="polite" className="flex flex-col items-center justify-center py-4 text-center">
        <CheckCircle className="w-12 h-12 text-brand mb-3" />
        <p className="text-lg font-medium text-gray-900">Thanks for subscribing to NxHealth!</p>
        <p className="text-sm text-gray-600 mt-1">You'll receive our latest health insights soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input type="hidden" name="_subject" value="NxHealth Newsletter Signup" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value="https://nxhealthsolutions.org/#newsletter-success" />

      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        name="email"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        required
        aria-required="true"
        aria-describedby="newsletter-description"
        className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
      />
      <span id="newsletter-description" className="sr-only">
        Subscribe to receive health insights and wellness tips from NxHealth
      </span>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="bg-brand hover:bg-brand-hover text-brand-foreground rounded-full px-6 py-3 whitespace-nowrap disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Subscribing...
          </>
        ) : (
          "Subscribe"
        )}
      </Button>
    </form>
  )
}
