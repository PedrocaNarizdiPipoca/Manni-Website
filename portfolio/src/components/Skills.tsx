import React from 'react'
import { motion } from 'framer-motion'

export const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
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
      id="skills" 
      aria-labelledby="skills-title"
      className="relative py-24 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="space-y-8 text-center">
        <motion.header className="space-y-2" variants={cardVariants}>
          <h2 
            id="skills-title" 
            className="text-4xl sm:text-5xl font-bold text-white glow-text"
          >
            Skills
          </h2>
          <motion.p 
            className="text-neutral-300 text-xl max-w-2xl mx-auto"
            variants={cardVariants}
          >
            Professional tools and expertise I bring to every project.
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto shadow-glow-sm"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.header>
        
        <div className="flex justify-center">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl"
            variants={containerVariants}
          >
            <motion.div 
              className="card px-8 py-8 text-center group hover:scale-105 transition-all duration-300"
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <img 
                  src="/media/Premiere_Pro_logo.webp" 
                  alt="Premiere Pro logo" 
                  className="w-12 h-12 object-contain float"
                />
                <h3 
                  className="font-bold text-xl text-white group-hover:text-primary transition-colors"
                >
                  Premiere Pro
                </h3>
              </div>
              <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors">Professional video editing</p>
            </motion.div>
            <motion.div 
              className="card px-8 py-8 text-center group hover:scale-105 transition-all duration-300"
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <img 
                  src="/media/After_Effects_logo.webp" 
                  alt="After Effects logo" 
                  className="w-12 h-12 object-contain float rounded-xl"
                  style={{ animationDelay: '1s' }}
                />
                <h3 
                  className="font-bold text-xl text-white group-hover:text-secondary transition-colors"
                >
                  After Effects
                </h3>
              </div>
              <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors">Motion graphics & effects</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="flex justify-center"
          variants={cardVariants}
        >
          <div className="max-w-4xl w-full">
            <figure 
              className="card overflow-hidden video-glow neon-border"
            >
              <video 
                controls 
                preload="metadata" 
                className="w-full h-auto rounded-3xl" 
                poster="/media/skills-poster.jpg" 
                aria-label="Skills montage video"
              >
                <source src="/media/Skills_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <figcaption className="px-6 py-4 text-neutral-400 text-center bg-dark-900/50 backdrop-blur-sm">
                <span className="gradient-text font-semibold">Skills showcase</span> - Watch my editing process in action
              </figcaption>
            </figure>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
