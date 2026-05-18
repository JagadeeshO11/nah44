import { LuCheck, LuMail, LuMapPin, LuPhone } from 'react-icons/lu'
import { SiFacebook, SiInstagram, SiYoutube } from 'react-icons/si'
import { useState } from 'react'
import { contactInfo } from '../data/siteContent.js'

function Contact() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Insurance Services',
    message: '',
  })
  
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    if (!formData.name || !formData.phone) {
      alert('Please fill out Name and Phone fields!')
      return
    }

    setIsSending(true)

    // Simulate API delay
    setTimeout(() => {
      setIsSending(false)
      setShowSuccess(true)
      setFormData({
        name: '',
        phone: '',
        service: 'Insurance Services',
        message: '',
      })
    }, 1000)
  }

  return (
    <div className="container">
      {/* Contact Hero */}
      <section className="page-hero page-hero--rich" aria-label="Contact Header">
        <span className="eyebrow">Direct Support Desk</span>
        <h1 className="page-title">
          Connect With <span className="page-title__gradient">Our Advisors</span>
        </h1>
        <p className="page-intro">
          We are ready to guide you. Reach out via email, telephone, WhatsApp support chat, 
          or drop a direct inquiry using the form below.
        </p>
      </section>

{/* Split Columns: Form & Info */}
      <div className="home-hero-grid contact-grid">
         {/* Direct Inquiry Form */}
         <section className="section-frame contact-section" style={{ margin: 0, width: '100%' }} aria-labelledby="inquiry-title">
           <span className="eyebrow">Submit Inquiry</span>
           <h2 className="section-title section-heading-compact" id="inquiry-title">
             Service Request Form
           </h2>

        <form className="form-grid" onSubmit={handleSubmit} noValidate>
            <label htmlFor="contact-name">
              <span>Full Name *</span>
              <input
                id="contact-name"
                className="input"
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </label>

            <label htmlFor="contact-phone">
              <span>Phone Number *</span>
              <input
                id="contact-phone"
                className="input"
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </label>

            <label htmlFor="contact-service">
              <span>Service Interested In *</span>
              <select
                id="contact-service"
                className="select"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
              >
                <option value="Insurance Services">Insurance Services</option>
                <option value="Home Loan Services">Home Loan Services</option>
                <option value="Business Loan Support">Business Loan Support</option>
                <option value="Personal Loan Support">Personal Loan Support</option>
                <option value="Labour Licence compliance">Labour Licence compliance</option>
                <option value="UDYAM MSME Registration">UDYAM MSME Registration</option>
              </select>
            </label>

            <label htmlFor="contact-message" className="span-2">
              <span>Short Requirement Summary</span>
              <textarea
                id="contact-message"
                className="textarea"
                name="message"
                placeholder="Describe your requirement..."
                value={formData.message}
                onChange={handleInputChange}
              />
            </label>

            <div className="span-2 center-action-row">
              <button className="btn btn-primary" type="submit" disabled={isSending}>
                {isSending ? 'Sending Request...' : 'Send Inquiry'}
              </button>
            </div>
          </form>
        </section>

        {/* Contact Coordinates & Details */}
         <section className="section-frame contact-details" style={{ margin: 0, width: '100%' }} aria-labelledby="details-title">
           <span className="eyebrow">Desk Coordinates</span>
           <h2 className="section-title section-heading-compact" id="details-title">
             Contact Details
           </h2>
           <p className="contact-details__intro">
             Choose a quick way to reach our team.
           </p>

            <div className="contact-detail-grid">
              {/* Phone */}
              <a className="inline-card contact-detail-card" href={`tel:${contactInfo.phone}`}>
                <div className="icon-wrap contact-detail-card__icon">
                  <LuPhone size={18} />
                </div>
                <div className="inline-card__copy contact-detail-card__copy">
                  <span className="inline-card__eyebrow">
                    CALL SUPPORT
                  </span>
                  <span className="inline-card__link">
                    {contactInfo.phone}
                  </span>
                </div>
              </a>

              {/* Email */}
              <a className="inline-card contact-detail-card" href={`mailto:${contactInfo.email}`}>
                <div className="icon-wrap contact-detail-card__icon">
                  <LuMail size={18} />
                </div>
                <div className="inline-card__copy contact-detail-card__copy">
                  <span className="inline-card__eyebrow">
                    EMAIL SUPPORT
                  </span>
                  <span className="inline-card__link">
                    {contactInfo.email}
                  </span>
                </div>
              </a>

              {/* Address */}
              <a
                className="inline-card contact-detail-card contact-detail-card--full"
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icon-wrap contact-detail-card__icon">
                  <LuMapPin size={18} />
                </div>
                <div className="inline-card__copy contact-detail-card__copy">
                  <span className="inline-card__eyebrow">
                    CORPORATE HEADQUARTERS
                  </span>
                  <span className="inline-card__text">
                    {contactInfo.address}
                  </span>
                </div>
              </a>
            </div>

            {/* Social Pills */}
            <div className="contact-social-block">
              <span className="inline-card__eyebrow contact-social-block__label">
                SOCIAL NETWORK CHANNELS
              </span>
              <div className="social-pill-row contact-social-row">
                <a 
                  className="social-pill contact-social-icon social-pill--insta" 
                  href={contactInfo.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Follow NAH44 on Instagram"
                >
                  <SiInstagram size={18} />
                </a>
                <a 
                  className="social-pill contact-social-icon social-pill--fb" 
                  href={contactInfo.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Follow NAH44 on Facebook"
                >
                  <SiFacebook size={18} />
                </a>
                <a
                  className="social-pill contact-social-icon social-pill--yt"
                  href={contactInfo.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Subscribe to NAH44 on YouTube"
                >
                  <SiYoutube size={18} />
                </a>
              </div>
            </div>
        </section>
      </div>

      {/* Success Modal Popup Overlay */}
      {showSuccess && (
        <div className="success-modal" onClick={() => setShowSuccess(false)}>
          <div className="success-modal__content" onClick={(e) => e.stopPropagation()}>
            <div className="success-modal__icon">
              <LuCheck size={32} />
            </div>
            <h3>Inquiry Transmitted!</h3>
            <p>
              Your service request has been successfully sent to NAH44.
            </p>
            <p style={{ fontSize: '12px' }}>
              An advisory compliance officer will inspect your request and call you back shortly.
            </p>
            <button className="btn btn-primary" onClick={() => setShowSuccess(false)} style={{ marginTop: '10px' }}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Contact
