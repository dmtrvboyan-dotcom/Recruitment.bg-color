"use client"

import { memo, type ReactNode } from "react"
import { motion } from "framer-motion"
import { SCROLL_REVEAL_CONFIG } from "@/lib/utils/animation"

export interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  duration?: number
  y?: number
  scale?: number
  blur?: number
  once?: boolean
  className?: string
}

/**
 * Scroll reveal animation wrapper component
 */
export const ScrollReveal = memo(function ScrollReveal({
  children,
  delay = 0,
  duration = SCROLL_REVEAL_CONFIG.transition.duration,
  y = 60,
  scale = 0.96,
  blur = 8,
  once = true,
  className = "",
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y,
        scale,
        filter: `blur(${blur}px)`,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{ once, amount: 0.05 }}
      transition={{
        duration,
        delay,
        ease: SCROLL_REVEAL_CONFIG.transition.ease,
      }}
    >
      {children}
    </motion.div>
  )
})