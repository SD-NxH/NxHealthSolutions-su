/**
 * Utility functions for handling URLs and paths throughout the application
 */

/**
 * Gets the absolute URL for a path, using NEXT_PUBLIC_BASE_URL if available
 * @param path - The relative path (should start with /)
 * @returns The absolute URL
 */
export function getAbsoluteUrl(path: string): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith("/") ? path : `/${path}`

  // Use NEXT_PUBLIC_BASE_URL if available in the environment
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    ? process.env.NEXT_PUBLIC_BASE_URL.replace(/\/$/, "") // Remove trailing slash if present
    : ""

  return `${baseUrl}${normalizedPath}`
}

/**
 * Gets the correct image path, handling both absolute URLs and relative paths
 * @param src - The image source (URL or path)
 * @returns The correct image path
 */
export function getImagePath(src: string): string {
  // If it's already an absolute URL, return it as is
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src
  }

  // If it's a data URL, return it as is
  if (src.startsWith("data:")) {
    return src
  }

  // Ensure path starts with /
  const normalizedPath = src.startsWith("/") ? src : `/${src}`

  return normalizedPath
}
