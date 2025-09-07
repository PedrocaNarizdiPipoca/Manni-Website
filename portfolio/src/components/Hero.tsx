import React from 'react'
import { motion } from 'framer-motion'

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      }
    }
  }

  return (
    <section id="hero" aria-labelledby="hero-title" className="relative pt-32 pb-20 hero-glow overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full animate-pulse-slow"></div>
      </div>
      
      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div 
          className="flex flex-col items-center text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Headline */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h1 
              id="hero-title" 
              className="text-5xl sm:text-6xl lg:text-7xl text-white leading-tight"
            >
              <span className="font-condensed font-bold tracking-tight uppercase">From raw footage</span>
              <br />
              <span className="font-serif font-medium italic gradient-text glow-text">to perfectly cooked videos</span>
            </h1>
            <motion.p 
              className="text-neutral-300 text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Top 1% video editor with over{' '}
              <span className="text-primary font-semibold glow-text">20M+ views</span>. 
              I craft engaging digital experiences through talking-head videos, faceless content, and more.
            </motion.p>
          </motion.div>

          {/* VSL Video */}
          <motion.div 
            className="w-full max-w-3xl"
            variants={itemVariants}
          >
            <figure 
              className="card overflow-hidden video-glow neon-border"
            >
              <video 
                controls 
                preload="metadata" 
                className="w-full h-auto rounded-3xl" 
                poster="/media/vsl-poster.jpg" 
                aria-label="VSL demo video"
              >
                <source src="/media/VSL_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <figcaption className="sr-only">VSL showcase</figcaption>
            </figure>
          </motion.div>

          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <a 
              href="#contact" 
              className="btn btn-primary px-10 py-5 text-xl font-semibold shadow-glow-lg hover:shadow-glow-lg"
            >
              Let's work together
            </a>
            <a 
              href="#work" 
              className="btn btn-secondary px-10 py-5 text-xl font-semibold"
            >
              Portfólio
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}












