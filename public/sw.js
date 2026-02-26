// Service Worker for NxHealth PWA
let CACHE_NAME = "nxhealth-cache-v1" // Changed from const to let
const APP_VERSION = "1.0.0" // Version identifier
const VERSION_CHECK_INTERVAL = 60 * 60 * 1000 // Check for updates every hour (in milliseconds)

const urlsToCache = [
  "/",
  "/index.html",
  "/globals.css",
  "/nxlogo-alt-2.png",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
  "/manifest.json",
]

// Install event - cache assets
self.addEventListener("install", (event) => {
  console.log("[ServiceWorker] Installing new version:", APP_VERSION)
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("[ServiceWorker] Caching app shell")
        return cache.addAll(urlsToCache)
      })
      .then(() => {
        // Force activation without waiting for existing clients to close
        return self.skipWaiting()
      }),
  )
})

// Activate event - clean up old caches and take control
self.addEventListener("activate", (event) => {
  console.log("[ServiceWorker] Activate")
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log("[ServiceWorker] Clearing old cache:", cacheName)
              return caches.delete(cacheName)
            }
          }),
        )
      })
      .then(() => {
        // Take control of all clients immediately
        return self.clients.claim()
      }),
  )
})

// Fetch event - serve from cache or network
self.addEventListener("fetch", (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response
      }

      // Clone the request
      const fetchRequest = event.request.clone()

      return fetch(fetchRequest).then((response) => {
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response
        }

        // Clone the response
        const responseToCache = response.clone()

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache)
        })

        return response
      })
    }),
  )
})

// Message event - handle messages from clients
self.addEventListener("message", (event) => {
  if (event.data.action === "skipWaiting") {
    self.skipWaiting()
  }
})

// Function to check for updates
const checkForUpdates = async () => {
  // Try multiple endpoints for version info
  const versionUrls = [
    "/api/version?_=" + new Date().getTime(),
    "/version.json?_=" + new Date().getTime(),
  ]

  for (const url of versionUrls) {
    try {
      const response = await fetch(url)
      if (!response.ok) continue

      const contentType = response.headers.get("content-type")
      if (!contentType || !contentType.includes("application/json")) continue

      const text = await response.text()
      if (!text || text.trim() === "") continue

      let data
      try {
        data = JSON.parse(text)
      } catch (parseError) {
        console.warn("[ServiceWorker] Failed to parse version response from", url)
        continue
      }

      // If server version is different from our version, notify clients
      if (data.version && data.version !== APP_VERSION) {
        console.log("[ServiceWorker] New version available:", data.version)

        // Notify all clients about the update
        const clients = await self.clients.matchAll()
        clients.forEach((client) => {
          client.postMessage({
            type: "UPDATE_AVAILABLE",
            version: data.version,
          })
        })

        // Update our cache name to force a refresh on next load
        const newCacheName = "nxhealth-cache-" + data.version
        CACHE_NAME = newCacheName
      }
      return // Successfully checked, exit
    } catch (error) {
      console.warn("[ServiceWorker] Update check failed for", url)
    }
  }
}

// Check for updates periodically
setInterval(checkForUpdates, VERSION_CHECK_INTERVAL)

// Also check immediately when the service worker starts
checkForUpdates()
