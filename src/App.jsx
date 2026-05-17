import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FloatingContact from './components/FloatingContact.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import About from './pages/About.jsx'
import Careers from './pages/Careers.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <div className="site-shell">
        <Header />
        <main className="page-main" id="main" tabIndex="-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </BrowserRouter>
  )
}
