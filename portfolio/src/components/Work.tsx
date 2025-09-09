import React from 'react'
import { motion } from 'framer-motion'

const shortVideos = [
  { src: '/media/short_video1.mp4' },
  { src: '/media/short_video2.mp4' },
  { src: '/media/short_video3.mp4' },
]

const longVideos = [
  { src: '/media/long_video1.mp4' },
  { src: '/media/long_video2.mp4' },
  { src: '/media/long_video3.mp4' },
  { src: '/media/long_video4.mp4' },
]

export const Work: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const videoVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      }
    }
  }

  const sectionVariants = {
    hidden: { y: 60, opacity: 0 },
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
      id="work" 
      aria-labelledby="work-title"
      className="relative py-24 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="cyber-grid absolute inset-0 opacity-30"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 space-y-14">
        <motion.header className="text-center space-y-3" variants={sectionVariants}>
          <h2 
            id="work-title" 
            className="text-4xl sm:text-5xl font-bold text-white glow-text"
          >
            Some of my work
          </h2>
          <motion.p 
            className="text-neutral-300 text-xl max-w-2xl mx-auto"
            variants={sectionVariants}
          >
            A selection of short and long-form edits.
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto shadow-glow-sm"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.header>
        
        {/* Short Videos Grid */}
        <motion.div className="space-y-8" variants={sectionVariants}>
          <h3 
            className="text-2xl font-bold text-center gradient-text"
          >
            Short Form Videos
          </h3>
          <div className="flex justify-center">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl"
              variants={containerVariants}
            >
              {shortVideos.map((video, index) => (
                <motion.figure 
                  key={index} 
                  className="card overflow-hidden video-glow neon-border group"
                  variants={videoVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <video 
                    controls 
                    preload="metadata" 
                    className="w-full h-auto rounded-3xl" 
                    aria-label={`Short form video ${index + 1}`}
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </motion.figure>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Long Videos Grid */}
        <motion.div className="space-y-8" variants={sectionVariants}>
          <h3 
            className="text-2xl font-bold text-center gradient-text"
          >
            Long Form Videos
          </h3>
          <div className="flex justify-center">
            <motion.div 
              className="grid grid-cols-2 gap-8 max-w-5xl"
              variants={containerVariants}
            >
              {longVideos.map((video, index) => (
                <motion.figure 
                  key={index} 
                  className="card overflow-hidden video-glow neon-border group"
                  variants={videoVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <video 
                    controls 
                    preload="metadata" 
                    className="w-full h-auto rounded-3xl" 
                    aria-label={`Long form video ${index + 1}`}
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </motion.figure>
              ))}
            </motion.div>
          </div>
        </motion.div>
        
        {/* Results Section */}
        <motion.div className="flex justify-center" variants={sectionVariants}>
          <div className="max-w-3xl text-center space-y-8">
            <motion.div className="space-y-3" variants={sectionVariants}>
              <h3 
                className="text-3xl font-bold text-white glow-text"
              >
                Results my work can bring you
              </h3>
              <motion.p 
                className="text-neutral-300 text-lg"
                variants={sectionVariants}
              >
                Increase engagement, retention, and conversions with professional editing tailored to your audience.
              </motion.p>
            </motion.div>
            <motion.div 
              className="flex justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/media/perfomace_increase.webp" 
                alt="Results my work can bring you: increased performance chart" 
                className="w-4/5 h-auto rounded-3xl shadow-dark ring-2 ring-primary/30 hover:ring-primary/50 transition-all duration-300" 
                loading="lazy"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}












