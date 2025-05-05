// Update notification handler
let refreshing = false

// Listen for messages from the service worker
navigator.serviceWorker.addEventListener("message", (event) => {
  if (event.data.type === "UPDATE_AVAILABLE") {
    console.log("New version available:", event.data.version)
    showUpdateNotification(event.data.version)
  }
})

// Function to show update notification
function showUpdateNotification(version) {
  // Create notification element if it doesn't exist
  if (!document.getElementById("update-notification")) {
    const notification = document.createElement("div")
    notification.id = "update-notification"
    notification.className = "update-notification"
    notification.innerHTML = `
      <div class="update-notification-content">
        <p>A new version (${version}) is available!</p>
        <button id="update-now">Update Now</button>
        <button id="update-later">Later</button>
      </div>
    `

    document.body.appendChild(notification)

    // Add event listeners to buttons
    document.getElementById("update-now").addEventListener("click", () => {
      updateNow()
      notification.style.display = "none"
    })

    document.getElementById("update-later").addEventListener("click", () => {
      notification.style.display = "none"
    })

    // Show the notification
    setTimeout(() => {
      notification.classList.add("visible")
    }, 100)
  }
}

// Function to update the app
function updateNow() {
  if (refreshing) return
  refreshing = true

  // Send message to service worker to skip waiting
  navigator.serviceWorker.controller.postMessage({
    action: "skipWaiting",
  })
}

// Listen for controlling service worker changing
navigator.serviceWorker.addEventListener("controllerchange", () => {
  if (refreshing) return
  refreshing = true

  // Reload the page to get the new version
  window.location.reload()
})

// Check for updates when the page loads
document.addEventListener("DOMContentLoaded", () => {
  // If we have a service worker, check for updates
  if (navigator.serviceWorker.controller) {
    // Force an update check by posting a message
    navigator.serviceWorker.controller.postMessage({
      action: "checkForUpdates",
    })
  }
})
