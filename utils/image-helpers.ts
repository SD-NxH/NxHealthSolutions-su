/**
 * Returns appropriate sizes attribute based on the context where the image is used
 */
export function getImageSizes(context: "hero" | "card" | "thumbnail" | "full" | "banner"): string {
  switch (context) {
    case "hero":
      return "(max-width: 640px) 100vw, 100vw"
    case "card":
      return "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    case "thumbnail":
      return "(max-width: 640px) 50vw, 150px"
    case "banner":
      return "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
    case "full":
    default:
      return "100vw"
  }
}

/**
 * Returns appropriate loading strategy based on image position
 */
export function getImageLoadingStrategy(index: number, isFeatured = false) {
  // First 3 featured images or first 6 regular images get priority loading
  const isPriority = isFeatured ? index < 3 : index < 6

  return {
    priority: isPriority,
    loading: isPriority ? undefined : "lazy",
  }
}

/**
 * Creates a simple blur data URL for placeholder
 */
export function generateBlurPlaceholder(width = 10, height = 10): string {
  return `data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}'%3E%3Crect width='${width}' height='${height}' fill='%23f3f4f6'/%3E%3C/svg%3E`
}
