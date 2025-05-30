"use client"

import { useScroll, motion, useSpring } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return <motion.div className="fixed top-0 left-0 right-0 h-1 bg-green-600 z-50 origin-left" style={{ scaleX }} />
}

// Also export as default for backward compatibility
export default ScrollProgress
