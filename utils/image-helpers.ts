/**
 * Generates a simple blur hash placeholder for images
 * @returns A base64 encoded tiny placeholder image
 */
export function generateBlurPlaceholder(color = "rgba(200, 200, 200, 0.5)") {
  return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
}

/**
 * Optimizes image loading by determining the appropriate loading strategy
 * @param index The index of the image in a list
 * @param isAboveFold Whether the image is likely to be above the fold
 * @returns Object with loading strategy properties
 */
export function getImageLoadingStrategy(index: number, isAboveFold = false) {
  // First 3 images or images above the fold should be prioritized
  const shouldPrioritize = index < 3 || isAboveFold

  return {
    priority: shouldPrioritize,
    loading: shouldPrioritize ? "eager" : "lazy",
    fetchPriority: shouldPrioritize ? "high" : ("auto" as "high" | "auto"),
  }
}

/**
 * Determines the appropriate sizes attribute for responsive images
 * @param layout The layout context of the image (card, hero, thumbnail, etc.)
 * @returns The sizes attribute string
 */
export function getImageSizes(layout: "card" | "hero" | "thumbnail" | "full" = "card") {
  switch (layout) {
    case "hero":
      return "(max-width: 640px) 100vw, 100vw"
    case "card":
      return "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    case "thumbnail":
      return "(max-width: 640px) 50vw, 150px"
    case "full":
      return "100vw"
    default:
      return "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  }
}
