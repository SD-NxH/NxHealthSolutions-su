// Register service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").then(
      (registration) => {
        // Registration was successful
        console.log("ServiceWorker registration successful with scope: ", registration.scope)
      },
      (err) => {
        // registration failed :(
        console.log("ServiceWorker registration failed: ", err)
      },
    )
  })
}

// Add to home screen prompt
let deferredPrompt
const addBtn = document.createElement("button")
addBtn.style.display = "none"

window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault()
  // Stash the event so it can be triggered later.
  deferredPrompt = e
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = "block"

  addBtn.addEventListener("click", (e) => {
    // Show the prompt
    deferredPrompt.prompt()
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt")
      } else {
        console.log("User dismissed the A2HS prompt")
      }
      deferredPrompt = null
    })
  })
})
