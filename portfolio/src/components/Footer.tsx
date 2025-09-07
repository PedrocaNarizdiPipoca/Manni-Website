import React from 'react'
import { motion } from 'framer-motion'

export const Footer: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      }
    }
  }

  return (
    <motion.footer 
      role="contentinfo" 
      className="relative mt-32 border-t border-white/10 py-12 glass"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-responsive flex flex-col sm:flex-row items-center justify-between gap-6 text-neutral-400">
        <motion.p 
          variants={itemVariants}
          className="text-lg"
        >
          © {new Date().getFullYear()}{' '}
          <span className="gradient-text font-semibold">Nnaemeka Emmanuel</span>
        </motion.p>
        <motion.nav aria-label="Footer" variants={itemVariants}>
          <ul className="flex items-center gap-8">
            <li>
              <a 
                className="hover:text-primary transition-all duration-300 hover:glow-text relative group text-lg" 
                href="#about"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                className="hover:text-primary transition-all duration-300 hover:glow-text relative group text-lg" 
                href="#skills"
              >
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                className="hover:text-primary transition-all duration-300 hover:glow-text relative group text-lg" 
                href="#work"
              >
                Work
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                className="hover:text-primary transition-all duration-300 hover:glow-text relative group text-lg" 
                href="#contact"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </motion.nav>
      </div>
      
      {/* Bottom glow line */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      ></motion.div>
    </motion.footer>
  )
}












