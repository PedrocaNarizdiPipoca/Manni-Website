import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

export const useScrollAnimation = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  
  const y = useMotionValue(0)
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 })
  
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      y.set(scrolled * 0.5)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [y])
  
  return { ref, isInView, smoothY }
}