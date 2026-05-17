import {
  LuBriefcaseBusiness,
  LuBuilding,
  LuFileSpreadsheet,
  LuFileText,
  LuHeartPulse,
  LuLandmark,
  LuShieldAlert,
  LuSparkles,
  LuTrendingUp,
  LuUserRoundCheck
} from 'react-icons/lu'

export const contactInfo = {
  phone: '9032677853',
  email: 'indassociates.ind@gmail.com',
  instagram: 'https://www.instagram.com/ind.associates?igsh=Y2dkcnMzZ3Z0aXpl',
  facebook: 'https://www.facebook.com/share/1CVNLDtS4D/',
  youtube: 'https://youtube.com/@indassociates?si=fsIvAh4VgFc6lQzE',
  address: 'Hyderabad, Telangana, India',
}

export const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
]

export const taglines = [
  'Your Trusted Financial Service Partner',
  'Secure Today, Build Tomorrow',
  'Smart Financial Solutions for Everyone',
  'Loans, Insurance & Business Support Made Simple'
]

export const insuranceOffers = [
  { label: 'Health Insurance Offer', discount: '15% Off', description: 'Up to 15% discount on collected premium for NAH44 QR Customers.' },
  { label: 'Life Insurance Offer', discount: '20% Off', description: 'Up to 20% discount on collected premium for NAH44 QR Customers.' },
  { label: 'Term Insurance Offer', discount: '15% Off', description: 'Up to 15% discount on collected premium for NAH44 QR Customers.' }
]

export const openPositions = [
  {
    title: 'Sales Promoter',
    type: 'Full-Time / Part-Time',
    location: 'Hyderabad & Suburbs',
    experience: 'Fresher to 1 Year',
    description: 'We are seeking energetic individuals to actively promote our financial, loan, and insurance service lines at dealer outlets and customer desks.'
  },
  {
    title: 'Sales Executive',
    type: 'Full-Time',
    location: 'Multiple Locations',
    experience: '1 to 2 Years',
    description: 'Responsible for client onboarding, conducting documentation compliance, and presenting suitable loan and MSME packages to business units.'
  },
  {
    title: 'Sales Officer',
    type: 'Full-Time',
    location: 'Corporate HQ',
    experience: '2+ Years',
    description: 'Lead local sales promoter blocks, drive targets for insurance premium distributions, and coordinate structured loan approvals processes.'
  }
]

export const serviceCategories = [
  {
    title: 'Insurance Services',
    eyebrow: 'Full Protection Mix',
    description: 'Delivering comprehensive health, life, term, vehicle, and property insurance plans tailored to build a secure future for families and business fleets.',
    icon: LuHeartPulse,
    items: [
      'Health Insurance Coverage',
      'Life Insurance Protection',
      'Term Insurance Support',
      'Vehicle & Automotive Insurance',
      'Property & Structural Insurance'
    ]
  },
  {
    title: 'Home Loan Services',
    eyebrow: 'Rebuilding Futures',
    description: 'Providing structural finance support with flexible tenures, competitive percentage rates, and transparent documentation guidelines.',
    icon: LuLandmark,
    items: [
      'Home Purchase Loan',
      'House Mortgage Loan',
      'Construction Support Loan',
      'Open Plot Mortgage Loan',
      'Plot + Construction Loan',
      'Plot Purchase Loan',
      'House Renovation Support',
      'Balance Transfer & Top-up Loan'
    ]
  },
  {
    title: 'Business & Corporate Loan',
    eyebrow: 'Accelerating Scale',
    description: 'Professional financial assistance tailored to fast-track business expansion, manage working capital loops, and accelerate growth.',
    icon: LuBriefcaseBusiness,
    items: [
      'Working Capital Assistance',
      'Corporate Expansion Funding',
      'Startup Launch Finance',
      'Machinery & Equipment Capital'
    ]
  },
  {
    title: 'Personal Loan Support',
    eyebrow: 'Fast & Reliable',
    description: 'Immediate liquidity assistance for medical emergencies, wedding budgets, study programs, or life events with simplified compliance.',
    icon: LuUserRoundCheck,
    items: [
      'Emergency Liquid Funds',
      'Personal Life Event Credit',
      'Educational Tuition Loans'
    ]
  },
  {
    title: 'Corporate Compliance Support',
    eyebrow: 'Guided Registrations',
    description: 'Ensuring your business operations are fully legal, registered, and authorized, giving startup founders peace of mind.',
    icon: LuBuilding,
    items: [
      'Labour Licence Processing',
      'Labour Documentation Support',
      'Labour Renewal Compliance',
      'UDYAM (MSME) Corporate Registration',
      'MSME Scheme Advisory Support'
    ]
  }
]

export const companyValues = [
  {
    title: 'Transparent Guidance',
    description: 'Zero hidden fees, clear documentation checklists, and direct advisory support throughout the loan or insurance lifecycle.',
    icon: LuFileText
  },
  {
    title: 'Speed & Consistency',
    description: 'Optimized submission pipelines that accelerate validation steps for licensing and corporate MSME approvals.',
    icon: LuTrendingUp
  },
  {
    title: 'Secure Compliance',
    description: 'Implementing highest trust standards to safeguard private documents and coordinate securely with banking partners.',
    icon: LuSparkles
  }
]
