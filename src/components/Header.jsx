import { LuMenu, LuX } from 'react-icons/lu'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navLinks } from '../data/siteContent.js'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined
    }

    const originalBodyStyle = {
      overflow: document.body.style.overflow,
      touchAction: document.body.style.touchAction,
    }

    document.body.style.overflow = 'hidden'
    document.body.style.touchAction = 'none'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = originalBodyStyle.overflow
      document.body.style.touchAction = originalBodyStyle.touchAction
    }
  }, [isMenuOpen])

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" to="/">
          <img
            className="brand-logo-img"
            src="/image.png"
            alt="NAH44 Logo"
            loading="eager"
            fetchPriority="high"
          />
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              className={({ isActive }) =>
                isActive ? 'site-nav__link active' : 'site-nav__link'
              }
              to={link.to}
              end={link.end}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="site-menu-toggle"
          type="button"
          aria-label={
            isMenuOpen
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((prevState) => !prevState)}
        >
          {isMenuOpen ? <LuX size={22} /> : <LuMenu size={22} />}
        </button>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="site-mobile-overlay"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div
        className={`site-mobile-nav ${isMenuOpen ? 'site-mobile-nav--open' : ''
          }`}
        id="mobile-navigation"
      >
        <nav
          className="site-mobile-nav__panel"
          aria-label="Mobile Primary"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              className={({ isActive }) =>
                isActive
                  ? 'site-mobile-nav__link active'
                  : 'site-mobile-nav__link'
              }
              to={link.to}
              end={link.end}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
