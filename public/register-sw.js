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
if (!window.deferredPrompt) {
  window.deferredPrompt = null
}

if (!window.addBtn) {
  window.addBtn = document.createElement("button")
  window.addBtn.style.display = "none"
}

window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault()
  // Stash the event so it can be triggered later.
  window.deferredPrompt = e
  // Update UI to notify the user they can add to home screen
  window.addBtn.style.display = "block"

  window.addBtn.removeEventListener("click", window.addBtnClickHandler)

  window.addBtnClickHandler = (e) => {
    // Show the prompt
    window.deferredPrompt.prompt()
    // Wait for the user to respond to the prompt
    window.deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt")
      } else {
        console.log("User dismissed the A2HS prompt")
      }
      window.deferredPrompt = null
    })
  }

  window.addBtn.addEventListener("click", window.addBtnClickHandler)
})
