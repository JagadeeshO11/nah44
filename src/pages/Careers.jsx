import { LuBriefcase, LuCalendar, LuDollarSign, LuMapPin, LuPhone, LuUser } from 'react-icons/lu'
import { useState } from 'react'
import { contactInfo, openPositions } from '../data/siteContent.js'

function Careers() {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    fatherName: '',
    contactNumber: '',
    mailId: '',
    previousExperience: '',
    salaryPerAnnum: '',
    previousCompanyName: '',
    preferredLocation: '',
    residencyLocation: '',
    expectedSalary: '',
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formData.fullName || !formData.contactNumber || !formData.mailId) {
      alert('Please fill out all primary contact fields!')
      return
    }

    const subject = encodeURIComponent(`Job Application - ${formData.fullName}`)
    const body = encodeURIComponent(
      [
        'Job Application Details',
        '',
        `Full Name: ${formData.fullName}`,
        `Date of Birth: ${formData.dob || 'Not provided'}`,
        `Father Name: ${formData.fatherName || 'Not provided'}`,
        `Contact Number: ${formData.contactNumber}`,
        `Mail ID: ${formData.mailId}`,
        `Previous Company Experience: ${formData.previousExperience || 'Not provided'}`,
        `Previous Company Name: ${formData.previousCompanyName || 'Not provided'}`,
        `Previous Company Salary Per Annum: ${formData.salaryPerAnnum || 'Not provided'}`,
        `Preferred Work Location: ${formData.preferredLocation || 'Not provided'}`,
        `Residency Location: ${formData.residencyLocation || 'Not provided'}`,
        `Expected Salary: ${formData.expectedSalary || 'Not provided'}`,
        '',
        'Note: Please attach the relieving letter manually before sending this email.'
      ].join('\n')
    )

    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`
  }

  return (
    <div className="container">
      {/* Careers Hero */}
      <section className="page-hero page-hero--rich" aria-label="Careers Header">
        <span className="eyebrow">Join Our Network</span>
        <h1 className="page-title">
          Build Your <span className="page-title__gradient">Future With Us</span>
        </h1>
        <p className="page-intro">
          "Join NAH44 and build your future with us." <br />
          We are seeking motivated, energetic, and highly dynamic sales officers to expand our local Compliance desks.
        </p>
      </section>

      {/* Open Positions Grid */}
      <section className="section-frame" aria-labelledby="openings-title">
        <div className="section-header-row">
          <span className="eyebrow">Job Board</span>
          <h2 className="section-title" id="openings-title">Open Opportunities</h2>
          <p className="section-intro">
            Select one of our active vacancy tiers and apply using the comprehensive job board submission form below.
          </p>
        </div>

        <div className="premium-grid">
          {openPositions.map((position) => (
            <article className="job-card" key={position.title}>
              <div className="job-header">
                <h3>{position.title}</h3>
                <span className="job-pill">{position.type}</span>
              </div>
              <p>{position.description}</p>
              <div className="job-details-row">
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <LuMapPin size={12} /> {position.location}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <LuBriefcase size={12} /> {position.experience}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 11-Field Application Form */}
       <section className="section-frame" aria-labelledby="apply-form-title">
         <div className="section-header-row">
           <span className="eyebrow">Application Form</span>
           <h2 className="section-title" id="apply-form-title">Submit Your Profile</h2>
           <p className="section-intro">
             Fill in the 11-field job application profile below. The Apply button will open a pre-filled email draft to our team, and you can attach the relieving letter there before sending.
           </p>
         </div>

         <form className="form-grid career-form-grid" onSubmit={handleSubmit} noValidate>
          {/* 1. Full Name */}
          <label htmlFor="career-fullname">
            <span>1. Full Name *</span>
            <div style={{ position: 'relative' }}>
              <LuUser size={16} style={{ position: 'absolute', left: '12px', top: '15px', color: 'var(--text-tertiary)' }} />
              <input
                id="career-fullname"
                className="input"
                style={{ paddingLeft: '40px' }}
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>
          </label>

          {/* 2. Date of Birth */}
          <label htmlFor="career-dob">
            <span>2. Date of Birth *</span>
            <div style={{ position: 'relative' }}>
              <LuCalendar size={16} style={{ position: 'absolute', left: '12px', top: '15px', color: 'var(--text-tertiary)' }} />
              <input
                id="career-dob"
                className="input"
                style={{ paddingLeft: '40px' }}
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                required
              />
            </div>
          </label>

          {/* 3. Father Name */}
          <label htmlFor="career-fathername">
            <span>3. Father Name *</span>
            <input
              id="career-fathername"
              className="input"
              type="text"
              name="fatherName"
              placeholder="Father's Name"
              value={formData.fatherName}
              onChange={handleInputChange}
              required
            />
          </label>

          {/* 4. Contact Number */}
          <label htmlFor="career-contact">
            <span>4. Contact Number *</span>
            <div style={{ position: 'relative' }}>
              <LuPhone size={16} style={{ position: 'absolute', left: '12px', top: '15px', color: 'var(--text-tertiary)' }} />
              <input
                id="career-contact"
                className="input"
                style={{ paddingLeft: '40px' }}
                type="tel"
                name="contactNumber"
                placeholder="Phone Number"
                value={formData.contactNumber}
                onChange={handleInputChange}
                required
              />
            </div>
          </label>

          {/* 5. Mail ID */}
          <label htmlFor="career-mail" className="span-2">
            <span>5. Mail ID *</span>
            <input
              id="career-mail"
              className="input"
              type="email"
              name="mailId"
              placeholder="Email Address"
              value={formData.mailId}
              onChange={handleInputChange}
              required
            />
          </label>

          {/* 6. Previous Company Experience */}
          <label htmlFor="career-experience">
            <span>6. Previous Company Experience (Years)</span>
            <input
              id="career-experience"
              className="input"
              type="text"
              name="previousExperience"
              placeholder="Previous Experience"
              value={formData.previousExperience}
              onChange={handleInputChange}
            />
          </label>

          {/* 7. Previous Company Name */}
          <label htmlFor="career-company">
            <span>7. Previous Company Name</span>
            <input
              id="career-company"
              className="input"
              type="text"
              name="previousCompanyName"
              placeholder="Company Name"
              value={formData.previousCompanyName}
              onChange={handleInputChange}
            />
          </label>

          {/* 8. Previous Company Salary Per Annum */}
          <label htmlFor="career-salary">
            <span>8. Previous Company Salary Per Annum</span>
            <div style={{ position: 'relative' }}>
              <LuDollarSign size={16} style={{ position: 'absolute', left: '12px', top: '15px', color: 'var(--text-tertiary)' }} />
              <input
                id="career-salary"
                className="input"
                style={{ paddingLeft: '40px' }}
                type="text"
                name="previousCompanySalary"
                placeholder="Annual CTC"
                value={formData.salaryPerAnnum}
                onChange={handleInputChange}
              />
            </div>
          </label>

          {/* 9. Preferred Work Location */}
          <label htmlFor="career-location">
            <span>9. Preferred Work Location *</span>
            <select
              id="career-location"
              className="select"
              name="preferredLocation"
              value={formData.preferredLocation}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Location</option>
              <option value="Hyderabad HQ">Hyderabad HQ</option>
              <option value="Secunderabad branch">Secunderabad branch</option>
              <option value="Cyberabad Area Desk">Cyberabad Area Desk</option>
              <option value="Suburbs Desk">Suburbs Desk</option>
            </select>
          </label>

          {/* 10. Residency Location */}
          <label htmlFor="career-residency">
            <span>10. Residency Location *</span>
            <input
              id="career-residency"
              className="input"
              type="text"
              name="residencyLocation"
              placeholder="Residence Area"
              value={formData.residencyLocation}
              onChange={handleInputChange}
              required
            />
          </label>

          {/* 11. Expected Salary */}
          <label htmlFor="career-expected">
            <span>11. Expected Salary *</span>
            <input
              id="career-expected"
              className="input"
              type="text"
              name="expectedSalary"
              placeholder="Expected Annual Salary"
              value={formData.expectedSalary}
              onChange={handleInputChange}
              required
            />
          </label>

          {/* Submit Button */}
          <div className="span-2 center-action-row" style={{ marginTop: '15px' }}>
            <button className="btn btn-primary" type="submit">
              Apply By Email
            </button>
          </div>

          <p className="span-2 form-note">
            The relieving letter cannot be attached automatically from the browser. Your mail app will open with the form details filled in, and you can attach the file manually before sending.
          </p>
        </form>
      </section>
    </div>
  )
}

export default Careers
