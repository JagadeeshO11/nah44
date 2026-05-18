import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
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

const loaderFeatures = [
  {
    eyebrow: 'Insurance',
    title: 'Loading policy guidance',
  },
  {
    eyebrow: 'Loans',
    title: 'Loading funding support',
  },
  {
    eyebrow: 'MSME',
    title: 'Loading business registration help',
  },
  {
    eyebrow: 'Compliance',
    title: 'Loading documentation support',
  },
]

const pageLabels = {
  '/': 'Home',
  '/services': 'Services',
  '/about': 'About',
  '/careers': 'Careers',
  '/contact': 'Contact',
}

function PageTransition({ children }) {
  const location = useLocation()
  const containerRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)
  const [featureIndex, setFeatureIndex] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)

    const container = containerRef.current
    if (!container) return

    setIsLoading(true)
    setFeatureIndex((currentIndex) => (currentIndex + 1) % loaderFeatures.length)
    container.style.opacity = '0'
    container.style.transform = 'translateY(36px)'
    container.style.filter = 'blur(8px)'

    const revealTimer = window.setTimeout(() => {
      container.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      container.style.opacity = '1'
      container.style.transform = 'translateY(0)'
      container.style.filter = 'blur(0)'
      setIsLoading(false)
    }, 2000)

    return () => window.clearTimeout(revealTimer)
  }, [location.pathname])

  const activeFeature = loaderFeatures[featureIndex]
  const activePageLabel = pageLabels[location.pathname] ?? 'Page'

  return (
    <>
      {isLoading && (
        <div className="page-loader" aria-live="polite" aria-label="Loading next page">
          <div className="page-loader__backdrop" aria-hidden="true" />
          <div className="page-loader__content">
            <div className="page-loader__feature" aria-hidden="true">
              <span>{activeFeature.eyebrow}</span>
            </div>
            <div className="page-loader__logo-shell">
              <span className="page-loader__orbit page-loader__orbit--one" aria-hidden="true" />
              <span className="page-loader__orbit page-loader__orbit--two" aria-hidden="true" />
              <img
                className="page-loader__logo"
                src="/image.png"
                alt="NAH44"
              />
            </div>
            <div className="page-loader__copy">
              <span className="page-loader__eyebrow">Loading {activePageLabel}</span>
              <span className="page-loader__title">{activeFeature.title}</span>
            </div>
            <div className="page-loader__bars" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      )}
      <div ref={containerRef}>{children}</div>
    </>
  )
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
