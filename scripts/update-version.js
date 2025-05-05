// Script to update version.json when deploying
const fs = require("fs")
const path = require("path")

// Generate a new version number based on date/time
const generateVersion = () => {
  const now = new Date()
  const major = now.getFullYear().toString().substring(2) // 2-digit year
  const minor = (now.getMonth() + 1).toString().padStart(2, "0") // 2-digit month
  const patch = now.getDate().toString().padStart(2, "0") // 2-digit day
  const build = now.getHours().toString().padStart(2, "0") + now.getMinutes().toString().padStart(2, "0")

  return `${major}.${minor}.${patch}-${build}`
}

// Update the version.json file
const updateVersion = () => {
  const versionPath = path.join(__dirname, "../public/version.json")
  const version = generateVersion()
  const updated = new Date().toISOString()

  const versionData = {
    version,
    updated,
    notes: `Automatic update at ${updated}`,
  }

  fs.writeFileSync(versionPath, JSON.stringify(versionData, null, 2))
  console.log(`Updated version to ${version}`)

  // Also update the service worker version
  const swPath = path.join(__dirname, "../public/sw.js")
  let swContent = fs.readFileSync(swPath, "utf8")

  // Replace the APP_VERSION value
  swContent = swContent.replace(/const APP_VERSION = ['"].*?['"]/, `const APP_VERSION = '${version}'`)

  fs.writeFileSync(swPath, swContent)
  console.log(`Updated service worker version to ${version}`)
}

// Run the update
updateVersion()
