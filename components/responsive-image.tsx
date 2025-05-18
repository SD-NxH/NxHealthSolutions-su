"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { getImagePath } from "@/utils/url-helpers"

interface ResponsiveImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
  quality?: number
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  fill = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 85,
  objectFit = "cover",
}) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  // Use the utility function to get the correct image path
  const imageSrc = getImagePath(src || "/placeholder.svg")

  // Simple blur data URL for placeholder
  const blurDataURL =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="

  // Handle image load complete
  const handleLoadComplete = () => {
    setLoading(false)
  }

  // Handle image load error
  const handleError = () => {
    setError(true)
    setLoading(false)
  }

  return (
    <div className={`relative ${className} ${loading ? "bg-gray-100 animate-pulse" : ""}`}>
      {error ? (
        <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-500">
          <span>Image not available</span>
        </div>
      ) : (
        <Image
          src={error ? "/placeholder.svg" : imageSrc}
          alt={alt}
          width={fill ? undefined : width || 1200}
          height={fill ? undefined : height || 800}
          fill={fill}
          sizes={sizes}
          quality={quality}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          placeholder="blur"
          blurDataURL={blurDataURL}
          onLoadingComplete={handleLoadComplete}
          onError={handleError}
          className={`transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"} ${fill ? "object-cover" : ""}`}
          style={{
            objectFit: objectFit,
          }}
        />
      )}
    </div>
  )
}

export default ResponsiveImage
