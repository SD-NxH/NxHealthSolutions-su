// This is a simple service worker that caches pages and assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("nxhealth-v1")
      .then((cache) =>
        cache.addAll(["/", "/about", "/services", "/resources", "/contact", "/get-started", "/offline.html"]),
      ),
  )
})

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(
      (response) =>
        response ||
        fetch(event.request).catch(() => {
          if (event.request.mode === "navigate") {
            return caches.match("/offline.html")
          }
        }),
    ),
  )
})

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((cacheName) => cacheName.startsWith("nxhealth-") && cacheName !== "nxhealth-v1")
            .map((cacheName) => caches.delete(cacheName)),
        ),
      ),
  )
})
