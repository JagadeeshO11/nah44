import { CheckCircle2, QrCode } from 'lucide-react'
import { useState } from 'react'
import { contactInfo, insuranceOffers, serviceCategories } from '../data/siteContent.js'

function Services() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [requestForm, setRequestForm] = useState({
    serviceType: '',
    name: '',
    phone: '',
    location: '',
    notes: '',
  })

  const openRequestModal = (category) => {
    setSelectedCategory(category)
    setRequestForm({
      serviceType: category.items[0] ?? '',
      name: '',
      phone: '',
      location: '',
      notes: '',
    })
  }

  const closeRequestModal = () => {
    setSelectedCategory(null)
    setRequestForm({
      serviceType: '',
      name: '',
      phone: '',
      location: '',
      notes: '',
    })
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setRequestForm((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleWhatsappSubmit = (event) => {
    event.preventDefault()

    if (!selectedCategory || !requestForm.name || !requestForm.phone || !requestForm.serviceType) {
      alert('Please fill out at least your name and phone number.')
      return
    }

    const message = [
      'Hello NAH44,',
      '',
      'I would like to request this service:',
      `Category: ${selectedCategory.title}`,
      `Service: ${requestForm.serviceType}`,
      '',
      `Name: ${requestForm.name}`,
      `Phone: ${requestForm.phone}`,
      `Location: ${requestForm.location || 'Not provided'}`,
      `Notes: ${requestForm.notes || 'Not provided'}`
    ].join('\n')

    window.open(`https://wa.me/91${contactInfo.phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
    closeRequestModal()
  }

  return (
    <div className="container">
      {/* Services Hero Header */}
      <section className="page-hero page-hero--rich" aria-label="Services Header">
        <span className="eyebrow">Services Portfolio</span>
        <h1 className="page-title">
          Financial & <span className="page-title__gradient">Compliance Assistance</span>
        </h1>
        <p className="page-intro">
          We deliver structured compliances, licensing compliance, MSME schemes documentation, 
          and banking loan submissions under a unified high-trust roof.
        </p>
        <div className="page-hero__chips">
          <span className="trust-badge">Insurance Premium Support</span>
          <span className="trust-badge">Home/Corporate Loans</span>
          <span className="trust-badge">Labour Compliance & MSME</span>
        </div>
      </section>

      {/* Exclusive Offers for NAH44 QR Customers */}
      <section className="section-frame discount-card" aria-labelledby="exclusive-offers-title">
        <div className="section-header-row" style={{ marginBottom: '30px' }}>
          <span className="eyebrow" style={{ color: 'var(--primary-light)' }}>
            <QrCode size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} /> 
            QR Partner Advantage
          </span>
          <h2 className="section-title" id="exclusive-offers-title" style={{ fontSize: '2.2rem' }}>
            Exclusive Offers for NAH44 Vehicle QR Code Customers
          </h2>
          <p className="section-intro" style={{ color: 'var(--text-primary)' }}>
            As a verified NAH44 Vehicle QR Code user, enjoy premier premium waivers and direct premium waiver codes on our primary policy classes:
          </p>
        </div>

        <div className="discount-grid">
          {insuranceOffers.map((offer) => (
            <div className="discount-item" key={offer.label}>
              <span className="discount-item__value">{offer.discount}</span>
              <span className="discount-item__label" style={{ color: '#FFFFFF', fontWeight: '700', display: 'block', margin: '4px 0' }}>
                {offer.label.split(' Offer')[0]}
              </span>
              <p style={{ fontSize: '11px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Service Categories Cards Grid */}
      <section className="section-frame" aria-labelledby="service-categories-title">
        <div className="section-header-row">
          <span className="eyebrow">Service Directory</span>
          <h2 className="section-title" id="service-categories-title">
            Explore Our Core Categories
          </h2>
          <p className="section-intro">
            Each portfolio is presented as a larger high-trust card, with the detailed service list nested inside it.
          </p>
        </div>

        <div className="outer-card-grid">
          {serviceCategories.map((category) => {
            const Icon = category.icon

            return (
              <article
                key={category.title}
                className="section-frame service-category-card"
                aria-labelledby={category.title.replace(/\s+/g, '-').toLowerCase()}
                style={{ marginTop: 0 }}
              >
                <div className="service-category-card__header">
                  <div className="icon-wrap">
                    <Icon size={24} />
                  </div>
                  <div>
                    <span className="eyebrow">{category.eyebrow}</span>
                    <h2 className="section-title" id={category.title.replace(/\s+/g, '-').toLowerCase()}>
                      {category.title}
                    </h2>
                    <p className="section-intro">{category.description}</p>
                  </div>
                </div>

                <div className="service-category-card__items">
                  {category.items.map((subItem) => (
                    <div key={subItem} className="service-card service-category-card__item">
                      <div className="service-category-card__item-main">
                        <div className="icon-wrap" style={{ width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0 }}>
                          <CheckCircle2 size={18} />
                        </div>
                        <h3 style={{ fontSize: '1rem', fontWeight: '600', margin: 0 }}>
                          {subItem}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="service-category-card__footer">
                  <button
                    className="btn btn-primary service-request-btn"
                    type="button"
                    onClick={() => openRequestModal(category)}
                  >
                    Request This Category
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {selectedCategory && (
        <div className="success-modal" onClick={closeRequestModal}>
          <div className="success-modal__content request-modal" onClick={(event) => event.stopPropagation()}>
            <h3>Request Service</h3>
            <p>
              Fill in your details and we will open WhatsApp with a ready-to-send message for
              <strong> {selectedCategory.title}</strong>.
            </p>

            <form className="form-grid" onSubmit={handleWhatsappSubmit}>
              <label className="span-2">
                <span>Select Service Type *</span>
                <select
                  className="select"
                  name="serviceType"
                  value={requestForm.serviceType}
                  onChange={handleInputChange}
                  required
                >
                  {selectedCategory.items.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                <span>Full Name *</span>
                <input
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Ex: Jagadeesh"
                  value={requestForm.name}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label>
                <span>Phone Number *</span>
                <input
                  className="input"
                  type="tel"
                  name="phone"
                  placeholder="Ex: 9032677851"
                  value={requestForm.phone}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label>
                <span>Location</span>
                <input
                  className="input"
                  type="text"
                  name="location"
                  placeholder="Ex: Hyderabad"
                  value={requestForm.location}
                  onChange={handleInputChange}
                />
              </label>

              <label>
                <span>Category</span>
                <input
                  className="input"
                  type="text"
                  value={selectedCategory.title}
                  readOnly
                />
              </label>

              <label className="span-2">
                <span>Requirement Notes</span>
                <textarea
                  className="textarea"
                  name="notes"
                  placeholder="Tell us what support you need..."
                  value={requestForm.notes}
                  onChange={handleInputChange}
                />
              </label>

              <p className="span-2 request-form-note">
                This opens WhatsApp with your message prefilled. You can review it before sending.
              </p>

              <div className="span-2 request-modal__actions">
                <button className="btn btn-secondary" type="button" onClick={closeRequestModal}>
                  Cancel
                </button>
                <button className="btn btn-primary" type="submit">
                  Continue to WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Services
