import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export default async function ComingSoonPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string }>
}) {
  const params = await searchParams
  const fromPath = params.from || "/resources"

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-brand-lighter to-background px-4">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-gray-900">Coming Soon</h1>
        <p className="text-xl text-gray-600">This page is being built. Thanks for your patience!</p>
        <p className="text-sm text-gray-500">We're working hard to bring you new features and content.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button asChild variant="default" size="lg" className="bg-brand hover:bg-brand-hover">
            <Link href="/resources">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Resources
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
