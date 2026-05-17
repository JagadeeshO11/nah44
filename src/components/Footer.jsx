import { Facebook, Instagram, Mail, Phone, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'
import { contactInfo, navLinks } from '../data/siteContent.js'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__inner">
          <div className="footer-col">
            <div className="footer-logo-row">
              <img 
                className="footer-logo-img" 
                src="/image.png" 
                alt="NAH44 Logo"
                loading="lazy"
              />
              <span>NAH44</span>
            </div>
            <p className="footer-desc">
              Your trusted partner for health, life, and term insurance, 
              home and business loans, labour licensing compliance, and UDYAM (MSME) registrations.
            </p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Connect With Us</h4>
            <p className="footer-desc" style={{ marginBottom: '10px' }}>
              Have questions? Our support officers are ready to help you navigate processes.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontWeight: '700', display: 'block', marginBottom: '4px' }}>
                  PHONE SUPPORT
                </span>
                <a href={`tel:${contactInfo.phone}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '15px', fontWeight: '600', color: '#FFFFFF' }}>
                  <Phone size={14} /> IND ASSOCIATES: {contactInfo.phone}
                </a>
              </div>
              <div>
                <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontWeight: '700', display: 'block', marginBottom: '4px' }}>
                  EMAIL SUPPORT
                </span>
                <a href={`mailto:${contactInfo.email}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '15px', fontWeight: '600', color: '#FFFFFF' }}>
                  <Mail size={14} /> Mail id: {contactInfo.email}
                </a>
              </div>
            </div>
            <div className="social-pill-row">
              <a 
                className="social-pill" 
                href={contactInfo.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow NAH44 on Instagram"
              >
                <Instagram size={14} /> Instagram
              </a>
              <a 
                className="social-pill social-pill--fb" 
                href={contactInfo.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow NAH44 on Facebook"
              >
                <Facebook size={14} /> Facebook
              </a>
              <a
                className="social-pill social-pill--yt"
                href={contactInfo.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe to NAH44 on YouTube"
              >
                <Youtube size={14} /> YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>&copy; {currentYear} NAH44. All Rights Reserved.</p>
          <p>Designed with High-Trust Compliance & Transparency</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
