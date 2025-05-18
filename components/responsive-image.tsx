"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface ResponsiveImageProps extends Omit<ImageProps, "onError" | "onLoad"> {
  fallbackSrc?: string
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
}

export default function ResponsiveImage({
  src,
  alt,
  className,
  fallbackSrc = "/placeholder.svg",
  objectFit = "cover",
  ...props
}: ResponsiveImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setError(true)
  }

  return (
    <>
      {isLoading && (
        <div className={cn("absolute inset-0 bg-gray-200 animate-pulse rounded", className)} aria-hidden="true" />
      )}

      <Image
        src={error ? fallbackSrc : src}
        alt={alt}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          `object-${objectFit}`,
          className,
        )}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </>
  )
}
