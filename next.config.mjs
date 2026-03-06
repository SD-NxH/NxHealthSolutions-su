/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // This ensures Next.js uses /_next/image?url=... in production
  images: {
    // Allow images from these domains (legacy, but kept for compatibility)
    domains: ['v0.blob.com'],
    // Remote patterns for external images (preferred over domains)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Modern image formats for optimization
    formats: ['image/avif', 'image/webp'],
    // NOTE: Do NOT add path, loader, or loaderFile here
    // Default Next.js image optimization will use /_next/image
  },
  // Add headers for PWA
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default nextConfig
