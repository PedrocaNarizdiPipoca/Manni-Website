import { useEffect, useRef } from 'react'

export const useInertiaScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    let isScrolling = false
    let velocity = 0
    let lastScrollTop = 0
    let animationId: number
    
    const handleScroll = () => {
      if (!scrollRef.current) return
      
      const currentScrollTop = window.scrollY
      velocity = currentScrollTop - lastScrollTop
      lastScrollTop = currentScrollTop
      
      if (!isScrolling) {
        isScrolling = true
        requestAnimationFrame(smoothScroll)
      }
    }
    
    const smoothScroll = () => {
      if (Math.abs(velocity) > 0.1) {
        velocity *= 0.95 // Damping factor
        window.scrollTo(0, window.scrollY + velocity * 0.1)
        animationId = requestAnimationFrame(smoothScroll)
      } else {
        isScrolling = false
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])
  
  return scrollRef
}