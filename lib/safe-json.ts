/**
 * Safely fetch and parse JSON with fallback
 * @param url - URL to fetch
 * @param fallback - Fallback value if fetch/parse fails
 * @returns Parsed JSON or fallback
 */
export async function safeJsonFetch<T>(url: string, fallback: T): Promise<T> {
  try {
    const response = await fetch(url)

    // If not OK, return fallback
    if (!response.ok) {
      console.warn(`[safeJsonFetch] ${url} returned ${response.status}`)
      return fallback
    }

    // Check content-type
    const contentType = response.headers.get("content-type")
    if (!contentType || !contentType.includes("application/json")) {
      console.warn(`[safeJsonFetch] ${url} returned non-JSON content-type: ${contentType}`)
      return fallback
    }

    // Check if body is empty (204 No Content)
    if (response.status === 204) {
      return fallback
    }

    const text = await response.text()
    if (!text || text.trim() === "") {
      return fallback
    }

    return JSON.parse(text) as T
  } catch (error) {
    console.error(`[safeJsonFetch] Error fetching ${url}:`, error)
    return fallback
  }
}

/**
 * Safely parse JSON string with fallback
 * @param text - JSON string to parse
 * @param fallback - Fallback value if parse fails
 * @returns Parsed JSON or fallback
 */
export function safeParseJson<T>(text: string, fallback: T): T {
  try {
    if (!text || text.trim() === "") {
      return fallback
    }
    return JSON.parse(text) as T
  } catch (error) {
    console.error("[safeParseJson] Parse error:", error)
    return fallback
  }
}
