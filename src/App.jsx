import { useCallback, useEffect, useState } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import SocialRail from './components/SocialRail'
import EmailRail from './components/EmailRail'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)
  const handleDone = useCallback(() => setLoading(false), [])

  // Lock scrolling while the splash screen is showing
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = ''
      }
    }
  }, [loading])

  return (
    <>
      {loading && <Loader onDone={handleDone} />}

      <div
        className={`transition-opacity duration-700 ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Navbar />
        <SocialRail />
        <EmailRail />
        <main>
          <Hero />
          <About />
          <Education />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App