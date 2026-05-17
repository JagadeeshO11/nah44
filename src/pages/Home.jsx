import { LuArrowRight, LuFacebook, LuInstagram, LuSparkles, LuUserCheck, LuYoutube } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { contactInfo, taglines } from '../data/siteContent.js'

function Home() {
  return (
    <div className="container">
      <section className="tagline-marquee" aria-label="Featured Highlights">
        <div className="tagline-marquee__track">
          {[...taglines, ...taglines].map((tagline, index) => (
            <span className="tagline-marquee__item" key={`${tagline}-${index}`}>
              <LuSparkles size={16} />
              {tagline}
            </span>
          ))}
        </div>
      </section>

      {/* Split Landing Hero Section */}
      <section className="home-hero-grid home-hero-grid--align-center" aria-label="Welcome">
        <div className="hero-content">
          <span className="eyebrow">Financial & Compliance Partner</span>

          <h1 className="page-title">
            Smart Solutions for <br />
            <span className="page-title__gradient">Insurance & Credit</span>
          </h1>
          
          <p className="page-intro" style={{ marginLeft: 0, textAlign: 'left' }}>
            NAH44 provides trusted assistance across health, life, and automotive insurance, 
            mortgage and business loans, labour licensing compliance, and UDYAM registrations.
          </p>

          <div className="hero-cta-row">
            <Link className="btn btn-primary" to="/services">
              Explore Services <LuArrowRight size={16} />
            </Link>
            <Link className="btn btn-secondary" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Visual Logo Center Panel */}
        <div className="hero-visual-panel">
          <div className="visual-logo-container">
            <img 
              className="visual-logo" 
              src="/image.png" 
              alt="NAH44 Visual Emblem" 
            />
            <div className="visual-text-row">
              <span className="visual-company">NAH44</span>
              <p className="visual-tagline">Secure Today, Build Tomorrow</p>
            </div>
          </div>
          <div className="visual-glow-ring"></div>
        </div>
      </section>

      {/* Core Service Teasers Block */}
      <section className="section-frame" aria-labelledby="core-pillars">
        <div className="section-header-row">
          <span className="eyebrow">Service Pillars</span>
          <h2 className="section-title" id="core-pillars">Solutions Built For High-Trust</h2>
          <p className="section-intro">
            We simplify complex processes and coordinate directly with banking and regulatory channels to secure approvals fast.
          </p>
        </div>

        <div className="premium-grid">
          <article className="service-card">
            <div className="icon-wrap">
              <LuSparkles size={22} />
            </div>
            <h3>Insurance Portfolios</h3>
            <p>
              Health, life, term, vehicle, and property insurance plans tailored with special premium discounts for QR customers.
            </p>
          </article>

          <article className="service-card">
            <div className="icon-wrap">
              <LuUserCheck size={22} />
            </div>
            <h3>Flexible Credit Lines</h3>
            <p>
              Home loans, mortgage credits, business expansion finance, and simplified personal loans with fast compliance.
            </p>
          </article>

          <article className="service-card">
            <div className="icon-wrap">
              <LuSparkles size={22} />
            </div>
            <h3>Corporate Compliance</h3>
            <p>
              Complete support for labour license processing, renewal filings, and corporate UDYAM registrations.
            </p>
          </article>
        </div>
      </section>

      {/* Careers Banner CTA */}
      <section className="section-frame" style={{ border: '1px solid rgba(0, 69, 139, 0.2)' }} aria-labelledby="careers-cta">
        <div className="discount-grid" style={{ gridTemplateColumns: '1.2fr 0.8fr', alignItems: 'center' }}>
          <div>
            <h2 className="section-title" id="careers-cta" style={{ fontSize: '2rem', marginBottom: '10px' }}>
              Join NAH44 and build your future with us.
            </h2>
            <p className="section-intro">
              We are actively hiring motivated Sales Promoters, Sales Executives, and Sales Officers to expand our advisory network.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link className="btn btn-primary" to="/careers" style={{ background: 'linear-gradient(135deg, var(--secondary-light) 0%, var(--secondary-dark) 100%)', boxShadow: 'none' }}>
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* Social Media Link Cards */}
      <section className="section-frame" aria-labelledby="socials-title">
        <div className="section-header-row" style={{ marginBottom: '30px' }}>
          <span className="eyebrow">Social Hub</span>
          <h2 className="section-title" id="socials-title">Follow Us Online</h2>
        </div>

        <div className="premium-grid">
          <a 
            className="service-card" 
            href={contactInfo.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textAlign: 'center', alignItems: 'center' }}
          >
            <div className="icon-wrap" style={{ background: 'rgba(255, 140, 0, 0.1)', color: '#FF8C00' }}>
              <LuInstagram size={24} />
            </div>
            <h3>Instagram Feed</h3>
            <p>Check out our latest tips, financial updates, and career announcements.</p>
          </a>

          <a 
            className="service-card" 
            href={contactInfo.facebook} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textAlign: 'center', alignItems: 'center' }}
          >
            <div className="icon-wrap" style={{ background: 'rgba(0, 69, 139, 0.1)', color: '#005EBD' }}>
              <LuFacebook size={24} />
            </div>
            <h3>Facebook Page</h3>
            <p>Connect with our business community and client success records.</p>
          </a>

          <a
            className="service-card"
            href={contactInfo.youtube}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textAlign: 'center', alignItems: 'center' }}
          >
            <div className="icon-wrap" style={{ background: 'rgba(239, 68, 68, 0.12)', color: '#EF4444' }}>
              <LuYoutube size={24} />
            </div>
            <h3>YouTube Channel</h3>
            <p>Watch updates, service explainers, and brand content from NAH44.</p>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home
