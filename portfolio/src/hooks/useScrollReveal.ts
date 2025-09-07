import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

interface ScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  delay?: number
}

export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const ref = useRef<HTMLElement>(null)
  const {
    threshold = 0.2,
    rootMargin = '0px 0px -100px 0px',
    triggerOnce = true,
    delay = 0
  } = options

  const isInView = useInView(ref, {
    once: triggerOnce,
    amount: threshold
  })

  useEffect(() => {
    if (ref.current) {
      const element = ref.current
      
      if (isInView) {
        setTimeout(() => {
          element.style.opacity = '1'
          element.style.transform = 'translateY(0px) scale(1)'
        }, delay)
      } else if (!triggerOnce) {
        element.style.opacity = '0'
        element.style.transform = 'translateY(60px) scale(0.95)'
      }
    }
  }, [isInView, delay, triggerOnce])

  return { ref, isInView }
}

export const useStaggeredScrollReveal = (itemCount: number, staggerDelay: number = 100) => {
  const refs = useRef<(HTMLElement | null)[]>([])
  
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    
    refs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setTimeout(() => {
                  entry.target.classList.add('revealed')
                }, index * staggerDelay)
                observer.unobserve(entry.target)
              }
            })
          },
          {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
          }
        )
        
        observer.observe(ref)
        observers.push(observer)
      }
    })
    
    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [itemCount, staggerDelay])
  
  const setRef = (index: number) => (el: HTMLElement | null) => {
    refs.current[index] = el
  }
  
  return { setRef }
}