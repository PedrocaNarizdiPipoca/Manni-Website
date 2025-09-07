import React from 'react'

export const Header: React.FC = () => {
  return (
    <header 
      role="banner" 
      className="sticky top-0 z-50 glass border-b border-white/10"
    >
      <div className="container-responsive flex h-20 items-center justify-between">
        <a 
          href="#hero" 
          className="font-bold text-2xl gradient-text hover:scale-105 transition-transform"
        >
          NE
        </a>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6">
            <li>
              <a 
                className="text-white/80 hover:text-primary transition-all duration-300 hover:glow-text relative group" 
                href="#about"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                className="text-white/80 hover:text-primary transition-all duration-300 hover:glow-text relative group" 
                href="#skills"
              >
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                className="text-white/80 hover:text-primary transition-all duration-300 hover:glow-text relative group" 
                href="#work"
              >
                Work
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                className="text-white/80 hover:text-primary transition-all duration-300 hover:glow-text relative group" 
                href="#contact"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </nav>
        <a 
          href="#contact" 
          className="btn btn-primary px-6 py-3 font-semibold"
        >
          Let's work together
        </a>
      </div>
    </header>
  )
}



