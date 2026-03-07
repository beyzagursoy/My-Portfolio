import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600">
        Tailwind çalışıyor 🚀
      </h1>
    </div>

      <Navbar />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Contact />
    </>
  )
}

export default App