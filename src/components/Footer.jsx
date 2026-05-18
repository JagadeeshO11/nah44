import { SiFacebook, SiInstagram, SiWhatsapp, SiYoutube } from 'react-icons/si'
import { LuMail } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { contactInfo, navLinks } from '../data/siteContent.js'

function Footer() {
  const currentYear = new Date().getFullYear()
  const whatsappUrl = `https://wa.me/91${contactInfo.phone}?text=Hello%20NAH44,%20I%20am%20interested%20in%20your%20services.`

  return (
    <footer className='site-footer'>
      <div className='container'>
        <div className='site-footer__inner'>
          <div className='footer-col'>
            <div className='footer-logo-row'>
              <img
                className='footer-logo-img'
                src='/image.png'
                alt='NAH44 Logo'
                loading='lazy'
              />
              {/* <span>NAH44</span> */}
            </div>
            <p className='footer-desc'>
              Your trusted partner for health, life, and term insurance,
              home and business loans, labour licensing compliance, and UDYAM (MSME) registrations.
            </p>
          </div>

          <div className='footer-col'>
            <h4 >Quick Links</h4>
            <ul align='center' className='footer-links'>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='footer-col'>
            <h4>Connect With Us</h4>
            <div className='social-pill-row footer-connect-row'>
              <a
                className='social-pill footer-connect-pill footer-connect-pill--mail'
                href={`mailto:${contactInfo.email}`}
                aria-label='Email NAH44'
              >
                <LuMail size={18} />
              </a>
              <a
                className='social-pill footer-connect-pill footer-connect-pill--wa'
                href={whatsappUrl}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Chat with NAH44 on WhatsApp'
              >
                <SiWhatsapp size={18} />
              </a>
              <a
                className='social-pill footer-connect-pill social-pill--insta'
                href={contactInfo.instagram}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Follow NAH44 on Instagram'
              >
                <SiInstagram size={18} />
              </a>
              <a
                className='social-pill footer-connect-pill social-pill--fb'
                href={contactInfo.facebook}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Follow NAH44 on Facebook'
              >
                <SiFacebook size={18} />
              </a>
              <a
                className='social-pill footer-connect-pill social-pill--yt'
                href={contactInfo.youtube}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Subscribe to NAH44 on YouTube'
              >
                <SiYoutube size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className='site-footer__bottom'>
          <p>&copy; {currentYear} NAH44. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
