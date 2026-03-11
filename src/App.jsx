import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Contact from './components/Contact'

// Context'i import ediyoruz
import { SiteProvider } from './context/SiteContext'

function App() {
  return (
    /* 1. Adım: Tüm uygulamayı Provider ile sarmalıyoruz */
    <SiteProvider>
      {/* 2. Adım: Ana div'e dark mode desteği ve geçiş efekti ekliyoruz.
         dark:bg-[#252128] -> Dark mode aktifse bu rengi kullan.
         transition-colors duration-500 -> Renk değişimi 0.5 saniyede yumuşak olsun.
      */}
      <div className="min-h-screen bg-white dark:bg-[#252128] transition-colors duration-500">
        <Navbar />
        
        {/* Componentlerin kendi içindeki padding (px-31.25) değerlerini koruduk */}
        <Hero />
        
        {/* Semantik olarak her section kendi bg rengini ve transition'ını yönetecek */}
        <Skills />
        <Profile />
        <Projects />
        <Contact />
      </div>
    </SiteProvider>
  )
}

export default App