import React from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Work } from './components/Work'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

const App: React.FC = () => {

  return (
    <div>
      <Header />
      <main id="main" role="main" className="container-responsive space-y-24 sm:space-y-28">
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App



