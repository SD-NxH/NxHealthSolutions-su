"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function MaintenanceNotification() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show notification initially after a short delay
    const initialTimer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    // Set up recurring notification
    const showNotification = () => {
      setIsVisible(true)

      // Hide after 5 seconds instead of 10
      setTimeout(() => {
        setIsVisible(false)
      }, 5000)
    }

    // Show notification every 2 minutes
    const intervalTimer = setInterval(() => {
      showNotification()
    }, 120000)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(intervalTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 right-4 z-50 w-auto max-w-md bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-lg border border-green-200 p-4"
        >
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">We're currently working to improve your experience.</p>
              <p className="mt-1 text-sm text-gray-500">
                Some site functions are temporarily unavailable. Thank you for your patience!
              </p>
            </div>
            <button
              type="button"
              className="ml-3 flex-shrink-0 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              onClick={() => setIsVisible(false)}
            >
              <span className="sr-only">Close</span>
              <X className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
