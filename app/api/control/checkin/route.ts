import { NextResponse } from "next/server"

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbws-gRZN3KEaIz-8qK7b9P3PvHFf0zV0tH_qLqjHveysLF1uerWAXRJ1kLh9Ezpbgxz/exec"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    const { name, email, sleep, energy, load, body: physicalBody, mood } = body
    if (!name || !email || !sleep || !energy || !load || !physicalBody || !mood) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Build reflection string from optional fields
    const reflectionParts: string[] = []
    if (body.clarity) {
      reflectionParts.push(`Cognitive Clarity: ${body.clarity}`)
    }
    if (body.missionCompletion && body.missionCompletion.length > 0) {
      reflectionParts.push(`Previous Day Missions: ${body.missionCompletion.join(", ")}`)
    }
    if (body.obstacles) {
      reflectionParts.push(`Potential Obstacles: ${body.obstacles}`)
    }
    const reflection = reflectionParts.join("\n") || "No additional reflection provided."

    // Map to the payload expected by Apps Script
    const mappedPayload = {
      name,
      email,
      sleep,
      energy,
      load,
      body: physicalBody,
      mood,
      reflection,
    }

    // Forward to Apps Script
    const res = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mappedPayload),
    })

    // Read response as text first to avoid JSON parse errors
    const text = await res.text()

    // Try to parse as JSON if there's content
    let data: unknown = null
    if (text && text.trim()) {
      try {
        data = JSON.parse(text)
      } catch {
        // Response is not JSON, but that's okay if status is ok
      }
    }

    if (res.ok) {
      return NextResponse.json({ ok: true, data })
    } else {
      return NextResponse.json(
        { ok: false, error: data || text || "Unknown error from Apps Script" },
        { status: res.status }
      )
    }
  } catch (error) {
    console.error("[API] Control check-in error:", error)
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "Server error" },
      { status: 500 }
    )
  }
}
