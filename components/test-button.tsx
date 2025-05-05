"use client"

import { Button } from "@/components/ui/button"

export function TestButton() {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Test Navigation Buttons</h2>
      <div className="space-y-4">
        <Button href="/resources/d/dark-chocolate" variant="chocolate" className="w-full">
          Go to Dark Chocolate Page
        </Button>
        <Button href="/resources/d/dulse" variant="dulse" className="w-full">
          Go to Dulse Page
        </Button>
        <Button href="/resources" className="w-full">
          Go to Resources
        </Button>
      </div>
    </div>
  )
}
