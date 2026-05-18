import { LuShieldCheck } from 'react-icons/lu'
import { companyValues } from '../data/siteContent.js'

function About() {
  return (
    <div className="container">
      {/* About Hero Section */}
      <section className="page-hero page-hero--rich" aria-label="About Us Header">
        <span className="eyebrow">Corporate Profile</span>
        <h1 className="page-title">
          Guiding Your <span className="page-title__gradient">Financial Security</span>
        </h1>
        <p className="page-intro">
          NAH44 provides trusted compliance, credit support, and licensing assistance. 
          We eliminate the friction from complex documentation loops.
        </p>
      </section>

      {/* Main Corporate Mission & Description Block */}
      <section className="section-frame" aria-labelledby="mission-title">
        <div className="home-hero-grid" style={{ padding: 0, gap: '40px' }}>
          <div>
            <span className="eyebrow">Our Mission</span>
            <h2 className="section-title" id="mission-title">Transparent Guidance & Advisory Support</h2>
            <p className="section-intro" style={{ marginBottom: '12px' }}>
              NAH44 provides trusted financial and documentation services with customer-focused support. 
              Our mission is to simplify insurance, loan processing, MSME registrations, and business-related 
              services through transparent guidance and reliable assistance.
            </p>
            <p className="section-intro">
              We understand how complex and tiring licensing filings and credit approvals can be. 
              By serving as a dedicated support partner, we manage the heavy lifting so business owners 
              and families can focus on growth and building a secure tomorrow.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="service-card discount-card panel-card">
              <div className="icon-wrap panel-card__icon">
                <LuShieldCheck size={30} />
              </div>
              <h3 className="panel-card__title">100% Verified Partners</h3>
              <p style={{ fontSize: '0.95rem' }}>
                Directly associated with verified government licensing channels and licensed banking credit desks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Value Pillars */}
      <section className="section-frame" aria-labelledby="values-title">
        <div className="section-header-row">
          <span className="eyebrow">Operational Standards</span>
          <h2 className="section-title" id="values-title">Values That Secure Today</h2>
          <p className="section-intro">
            Our advisory process is anchored on complete clarity, fast timelines, and security compliance.
          </p>
        </div>

        <div className="premium-grid">
          {companyValues.map((value) => {
            const Icon = value.icon

            return (
              <article className="service-card" key={value.title}>
                <div className="icon-wrap">
                  <LuShieldCheck size={22} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default About
