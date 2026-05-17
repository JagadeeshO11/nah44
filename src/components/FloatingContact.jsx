import { LuMessageSquareCode } from 'react-icons/lu'
import { contactInfo } from '../data/siteContent.js'

function FloatingContact() {
  const whatsappUrl = `https://wa.me/91${contactInfo.phone}?text=Hello%20NAH44,%20I%20am%20interested%20in%20your%20services.`

  return (
    <div className="floating-contact">
      <a 
        className="floating-contact__btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        aria-label="Contact Support via WhatsApp"
      >
        <LuMessageSquareCode size={26} />
      </a>
    </div>
  )
}

export default FloatingContact
