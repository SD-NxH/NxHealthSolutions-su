import Link from "next/link"

export default function TestLinks() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Test Navigation Links</h1>

      <div className="space-y-4">
        <div className="p-4 border rounded">
          <h2 className="font-semibold mb-2">Direct Links (Standard Next.js Links)</h2>
          <div className="space-y-2">
            <div>
              <Link href="/resources/d/dark-chocolate" className="text-amber-900 underline hover:text-amber-700">
                Go to Dark Chocolate Page
              </Link>
            </div>
            <div>
              <Link href="/resources/d/dulse" className="text-red-900 underline hover:text-red-700">
                Go to Dulse Page
              </Link>
            </div>
            <div>
              <Link href="/resources" className="text-green-600 underline hover:text-green-700">
                Go to Resources
              </Link>
            </div>
          </div>
        </div>

        <div className="p-4 border rounded">
          <h2 className="font-semibold mb-2">Styled as Buttons (but still just Links)</h2>
          <div className="space-y-2">
            <div>
              <Link
                href="/resources/d/dark-chocolate"
                className="inline-block px-4 py-2 bg-amber-950 text-amber-50 rounded hover:bg-amber-900"
              >
                Go to Dark Chocolate Page
              </Link>
            </div>
            <div>
              <Link
                href="/resources/d/dulse"
                className="inline-block px-4 py-2 bg-red-900 text-red-50 rounded hover:bg-red-800"
              >
                Go to Dulse Page
              </Link>
            </div>
            <div>
              <Link
                href="/resources"
                className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Go to Resources
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Link href="/" className="text-green-600 underline hover:text-green-700">
          Back to Home
        </Link>
      </div>
    </div>
  )
}
