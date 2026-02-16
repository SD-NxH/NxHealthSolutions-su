"use client"

import { ExternalLink } from "lucide-react"

const FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd1OK3okwLmimjhJkZmKe61_6o8IJWR776qXT5tosAcnUjmww/viewform?embedded=true"
const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd1OK3okwLmimjhJkZmKe61_6o8IJWR776qXT5tosAcnUjmww/viewform"

export function NxGroceriesFormEmbed() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-0">
      <div className="rounded-2xl border border-brand-lighter shadow-sm bg-background p-6 md:p-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-serif font-light text-brand-dark mb-3">
            NxGroceries Request Form
          </h3>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Tell us what you want us to source, and we'll follow up with availability and next steps.
          </p>
        </div>

        {/* Embedded Form */}
        <div className="w-full rounded-xl overflow-hidden border border-border bg-background">
          <iframe
            src={FORM_EMBED_URL}
            className="w-full"
            style={{ height: 2400 }}
            title="NxGroceries Request Form"
            loading="lazy"
            referrerPolicy="no-referrer"
          >
            Loading form...
          </iframe>
        </div>

        {/* Footer */}
        <div className="mt-6 flex flex-col items-center gap-3">
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-brand hover:text-brand-hover underline underline-offset-4 transition-colors"
          >
            Open form in a new tab
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <p className="text-xs text-muted-foreground">
            This form is securely hosted on Google Forms.
          </p>
        </div>
      </div>
    </div>
  )
}
