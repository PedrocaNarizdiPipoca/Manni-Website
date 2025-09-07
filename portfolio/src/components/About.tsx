import React from 'react'
import { motion } from 'framer-motion'

export const About: React.FC = () => {
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
      id="about" 
      aria-labelledby="about-title" 
      className="relative py-24 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Profile Image - Left Side */}
          <motion.div className="flex-shrink-0" variants={itemVariants}>
            <div className="relative float">
              <img 
                src="/media/Profile_picture.avif" 
                alt="Portrait of Nnaemeka Emmanuel" 
                className="w-80 h-80 object-cover rounded-full shadow-dark ring-4 ring-primary/30" 
                loading="lazy" 
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-secondary/20"></div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl animate-pulse-slow"></div>
            </div>
            {/* Name below image */}
            <div className="text-center mt-4">
              <h3 
                className="text-3xl font-bold gradient-text"
              >
                Nnaemeka Emmanuel
              </h3>
              <p className="text-neutral-400 mt-2 text-lg">Video Editor Specialist</p>
            </div>
          </motion.div>

          {/* Content - Right Side */}
          <motion.div className="flex-1 space-y-4 text-center lg:text-left" variants={itemVariants}>
            <motion.div className="space-y-3" variants={itemVariants}>
              <h2 
                id="about-title" 
                className="text-4xl lg:text-5xl font-bold text-white glow-text"
              >
                About
              </h2>
              <motion.div 
                className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto lg:mx-0 shadow-glow-sm"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              ></motion.div>
            </motion.div>
            
            <motion.div className="space-y-3" variants={itemVariants}>
              <p 
                className="text-xl text-primary font-semibold glow-text"
              >
                Who am I? Why work with me?
              </p>
              <p 
                className="text-lg text-neutral-300 leading-relaxed"
              >
                I am a professional Video Editor with more than{' '}
                <span className="text-secondary font-semibold">2 years</span> of working in Video Editing. 
                I specialize in crafting{' '}
                <span className="text-primary font-semibold">Talking head and faceless videos</span>{' '}
                content that convert into sales, and clients for business owners, entrepreneurs and coaches.
              </p>
              <p 
                className="text-lg text-neutral-300 leading-relaxed"
              >
                With a passion for creativity and a keen eye for detail, I bring a fresh and innovative approach to every project. My goal is to deliver exceptional results that exceed your expectations, ensuring that your vision is brought to life in the digital world.
              </p>
              
              {/* Stats */}
              <motion.div 
                className="grid grid-cols-2 gap-6 mt-8 pt-6 border-t border-white/10"
                variants={itemVariants}
              >
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold gradient-text">20M+</div>
                  <div className="text-neutral-400 text-sm">Total Views</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold gradient-text">2+</div>
                  <div className="text-neutral-400 text-sm">Years Experience</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
