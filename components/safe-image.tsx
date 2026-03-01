"use client"

import type React from "react"

import Image from "next/image"
import { useState } from "react"

interface SafeImageProps {
  src: string
  alt: string
  className?: string
  fill?: boolean
  width?: number
  height?: number
  priority?: boolean
  sizes?: string
  style?: React.CSSProperties
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
}

export function SafeImage({
  src,
  alt,
  className = "",
  fill = false,
  width,
  height,
  priority = false,
  sizes,
  style,
  objectFit = "cover",
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  // Fallback placeholder
  const placeholder = "/images/placeholder.svg"

  const handleError = () => {
    if (!hasError) {
      setHasError(true)
      setImgSrc(placeholder)
    }
  }

  // If src is missing or empty, use placeholder immediately
  const finalSrc = !src || src.trim() === "" ? placeholder : imgSrc

  if (fill) {
    return (
      <Image
        src={finalSrc || "/placeholder.svg"}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes={sizes}
        style={{ objectFit, ...style }}
        onError={handleError}
      />
    )
  }

  return (
    <Image
      src={finalSrc || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={sizes}
      style={{ objectFit, ...style }}
      onError={handleError}
    />
  )
}
