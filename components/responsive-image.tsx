"use client"

import type React from "react"
import Image from "next/image"
import { getImagePath } from "@/utils/url-helpers"

interface ResponsiveImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ src, alt, width, height, className, priority }) => {
  // Use the utility function to get the correct image path
  const imageSrc = getImagePath(src || "/placeholder.svg")

  return (
    <Image
      src={imageSrc || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={{
        maxWidth: "100%",
        height: "auto",
      }}
      priority={priority}
    />
  )
}

export default ResponsiveImage
