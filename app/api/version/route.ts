import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET() {
  return NextResponse.json({
    version: process.env.VERCEL_GIT_COMMIT_SHA ?? "dev",
    ts: Date.now(),
    env: process.env.NODE_ENV,
  })
}
