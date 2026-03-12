import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify';
import { SiteProvider } from './context/SiteContext'

function App() {
  return (
    <SiteProvider>
      <div className="min-h-screen bg-white dark:bg-[#252128] transition-colors duration-500">
        <Navbar />
        <Hero />
        <Skills />
        <Profile />
        <Projects />
        <Contact />
        <ToastContainer 
          position="top-right" 
          autoClose={2000} 
          hideProgressBar={false}
          closeOnClick
          theme="colored"
        />
      </div>
    </SiteProvider>
  )
}

export default App