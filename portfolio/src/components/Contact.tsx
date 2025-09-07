import React from 'react'
import { motion } from 'framer-motion'

export const Contact: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
    <motion.section 
      id="contact" 
      aria-labelledby="contact-title"
      className="relative py-24 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 to-transparent rounded-full animate-pulse-slow"></div>
        <div className="cyber-grid absolute inset-0 opacity-20"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.div className="space-y-4" variants={itemVariants}>
          <h2 
            id="contact-title" 
            className="text-4xl sm:text-5xl font-bold text-white glow-text"
          >
            Let's work together
          </h2>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto shadow-glow-sm"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.p 
            className="text-neutral-300 text-xl max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Ready to transform your raw footage into{' '}
            <span className="text-primary font-semibold glow-text">engaging content</span>{' '}
            that converts? Let's discuss your project and bring your vision to life.
          </motion.p>
        </motion.div>
        
        <motion.div className="space-y-8" variants={itemVariants}>
          <a 
            href="https://x.com/Emystylez_x" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary px-16 py-6 text-2xl font-bold inline-flex items-center gap-4 shadow-glow-lg hover:shadow-glow-lg hover:scale-105 transition-all duration-300"
            aria-label="Contact me on X (Twitter) to discuss your project"
          >
            <svg 
              className="w-8 h-8" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            Get in touch on X
          </a>
          
          <motion.p 
            className="text-neutral-400 text-lg"
            variants={itemVariants}
          >
            DM me on{' '}
            <span className="text-secondary font-semibold">X (Twitter)</span>{' '}
            to discuss your video editing needs
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  )
}