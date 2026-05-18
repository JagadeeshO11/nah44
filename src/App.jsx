import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import './App.css'
import FloatingContact from './components/FloatingContact.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import About from './pages/About.jsx'
import Careers from './pages/Careers.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import Services from './pages/Services.jsx'

function PageTransition({ children }) {
  const location = useLocation()
  const containerRef = useRef(null)

  useEffect(() => {
    // Scroll to top immediately on route change
    window.scrollTo(0, 0)
    
    const container = containerRef.current
    if (!container) return

    // Reset to initial state
    container.style.opacity = '0'
    container.style.transform = 'translateY(100px)'
    container.style.filter = 'blur(10px)'

    // Trigger animation on next frame
    const raf = requestAnimationFrame(() => {
      container.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      container.style.opacity = '1'
      container.style.transform = 'translateY(0)'
      container.style.filter = 'blur(0)'
    })

    return () => cancelAnimationFrame(raf)
  }, [location.pathname])

  return <div ref={containerRef}>{children}</div>
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="site-shell">
        <Header />
        <main className="page-main">
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </BrowserRouter>
  )
}