import { LuCheck, LuFacebook, LuInstagram, LuMail, LuMapPin, LuPhone, LuYoutube } from 'react-icons/lu'
import { useState } from 'react'
import { contactInfo } from '../data/siteContent.js'

function Contact() {
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
           <h2 className="section-title" id="inquiry-title" style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', marginBottom: 'clamp(15px, 3vw, 25px)' }}>
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

            <div className="span-2" style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
              <button className="btn btn-primary" type="submit" disabled={isSending}>
                {isSending ? 'Sending Request...' : 'Send Inquiry'}
              </button>
            </div>
          </form>
        </section>

{/* Contact Coordinates & Details */}
         <section className="section-frame contact-details" style={{ margin: 0, width: '100%' }} aria-labelledby="details-title">
           <span className="eyebrow">Desk Coordinates</span>
           <h2 className="section-title" id="details-title" style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', marginBottom: 'clamp(15px, 3vw, 25px)' }}>
             Contact Details
           </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              {/* Phone */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div className="icon-wrap" style={{ width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0 }}>
                  <LuPhone size={18} />
                </div>
                <div>
                  <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontWeight: '600', display: 'block' }}>
                    CALL SUPPORT
                  </span>
                  <a href={`tel:${contactInfo.phone}`} style={{ fontSize: '16px', fontWeight: '700', color: '#FFFFFF' }}>
                    IND ASSOCIATES: {contactInfo.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div className="icon-wrap" style={{ width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0 }}>
                  <LuMail size={18} />
                </div>
                <div>
                  <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontWeight: '600', display: 'block' }}>
                    EMAIL SUPPORT
                  </span>
                  <a href={`mailto:${contactInfo.email}`} style={{ fontSize: '15px', fontWeight: '700', color: '#FFFFFF' }}>
                    Mail id: {contactInfo.email}
                  </a>
                </div>
              </div>

            {/* Address */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div className="icon-wrap" style={{ width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0 }}>
                <LuMapPin size={18} />
              </div>
              <div>
                <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontWeight: '600', display: 'block' }}>
                  CORPORATE HEADQUARTERS
                </span>
                <span style={{ fontSize: '15px', fontWeight: '600', color: '#FFFFFF' }}>
                  {contactInfo.address}
                </span>
              </div>
            </div>

            {/* Social Pills */}
            <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '20px' }}>
              <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontWeight: '700', display: 'block', marginBottom: '12px' }}>
                SOCIAL NETWORK CHANNELS
              </span>
              <div className="social-pill-row">
                <a 
                  className="social-pill" 
                  href={contactInfo.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Follow NAH44 on Instagram"
                >
                  <LuInstagram size={14} /> Instagram
                </a>
                <a 
                  className="social-pill social-pill--fb" 
                  href={contactInfo.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Follow NAH44 on Facebook"
                >
                  <LuFacebook size={14} /> Facebook
                </a>
                <a
                  className="social-pill social-pill--yt"
                  href={contactInfo.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Subscribe to NAH44 on YouTube"
                >
                  <LuYoutube size={14} /> YouTube
                </a>
              </div>
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
