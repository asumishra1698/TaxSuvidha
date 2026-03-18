export type ServiceCategory = 'Registrations' | 'Compliance' | 'Taxation' | 'IPR';

export interface ServiceData {
  slug: string;
  title: string;
  category: ServiceCategory;
  tagline: string;
  overview: string;
  price: string;
  turnaround: string;
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  'Registrations',
  'Compliance',
  'Taxation',
  'IPR',
];

export const CATEGORY_META: Record<ServiceCategory, { accent: string; summary: string }> = {
  Registrations: {
    accent: 'from-blue-600 to-cyan-500',
    summary: 'Business setup, incorporation, and launch-ready registrations.',
  },
  Compliance: {
    accent: 'from-blue-600 to-cyan-500',
    summary: 'Recurring filings, annual maintenance, and statutory support.',
  },
  Taxation: {
    accent: 'from-amber-500 to-orange-500',
    summary: 'GST, income tax, TDS, and monthly tax operations handled properly.',
  },
  IPR: {
    accent: 'from-fuchsia-600 to-rose-500',
    summary: 'Trademark, copyright, and intellectual property protection.',
  },
};

export const SERVICES_DATA: ServiceData[] = [
  {
    slug: 'private-limited-company-registration',
    title: 'Private Limited Company Registration',
    category: 'Registrations',
    tagline: 'Launch a funding-ready company structure with clean incorporation support.',
    overview: 'Tax Suvidha Kendra helps founders register a Private Limited Company with end-to-end documentation, name approval, MCA filing, and incorporation guidance.',
    price: 'Rs. 6,999',
    turnaround: '7 to 10 working days',
  },
  {
    slug: 'llp-registration',
    title: 'LLP Registration',
    category: 'Registrations',
    tagline: 'Build a limited liability partnership with flexibility and lower compliance load.',
    overview: 'Tax Suvidha Kendra manages the complete LLP registration process, including partner documentation, name reservation, incorporation filing, and LLP agreement support.',
    price: 'Rs. 4,999',
    turnaround: '7 to 10 working days',
  },
  {
    slug: 'partnership-firm-registration',
    title: 'Partnership Firm Registration',
    category: 'Registrations',
    tagline: 'Register your partnership with the right deed structure and legal support.',
    overview: 'Tax Suvidha Kendra assists with deed drafting, partner detail review, and registration workflow so the partnership starts on a clear legal foundation.',
    price: 'Rs. 2,999',
    turnaround: '3 to 5 working days',
  },
  {
    slug: 'one-person-company-registration',
    title: 'One Person Company Registration',
    category: 'Registrations',
    tagline: 'Operate as a solo founder with the structure and credibility of a company.',
    overview: 'Tax Suvidha Kendra supports solo entrepreneurs with OPC incorporation, nominee structuring, and MCA filing from start to finish.',
    price: 'Rs. 5,499',
    turnaround: '7 to 10 working days',
  },
  {
    slug: 'startup-india-registration',
    title: 'Startup India Registration',
    category: 'Registrations',
    tagline: 'Get DPIIT recognition and unlock startup scheme benefits faster.',
    overview: 'Tax Suvidha Kendra prepares the business profile, reviews eligibility, and files the Startup India application with practical support at each stage.',
    price: 'Rs. 3,499',
    turnaround: '3 to 7 working days',
  },
  {
    slug: 'trade-license',
    title: 'Trade License',
    category: 'Registrations',
    tagline: 'Secure local authority approval for lawful business operations.',
    overview: 'Tax Suvidha Kendra helps businesses apply for municipal trade licenses with the correct location documents, declarations, and submission support.',
    price: 'Rs. 1,999',
    turnaround: '7 to 15 working days',
  },
  {
    slug: 'llp-annual-compliance',
    title: 'LLP Annual Compliance',
    category: 'Compliance',
    tagline: 'Keep your LLP active with timely MCA annual filings and financial compliance.',
    overview: 'Tax Suvidha Kendra tracks due dates, reviews records, and files required LLP annual forms so penalties do not accumulate.',
    price: 'Rs. 3,999',
    turnaround: 'Scheduled before due dates',
  },
  {
    slug: 'annual-compliance-pvt-ltd',
    title: 'Annual Compliance for Pvt Ltd',
    category: 'Compliance',
    tagline: 'Handle ROC filings, meetings, and annual compliance in one managed workflow.',
    overview: 'Tax Suvidha Kendra supports private limited companies with annual return filing, board compliance, and audit coordination throughout the year.',
    price: 'Rs. 7,999',
    turnaround: 'Scheduled before due dates',
  },
  {
    slug: 'epf-registration',
    title: 'EPF Registration',
    category: 'Compliance',
    tagline: 'Register your establishment correctly under EPFO requirements.',
    overview: 'Tax Suvidha Kendra helps employers complete EPF registration with employer details, workforce data, and portal-based filing support.',
    price: 'Rs. 2,499',
    turnaround: '5 to 7 working days',
  },
  {
    slug: 'udyam-msme-registration',
    title: 'Udyam (MSME) Registration',
    category: 'Compliance',
    tagline: 'Access MSME benefits with a fast and correctly filed Udyam registration.',
    overview: 'Tax Suvidha Kendra helps eligible businesses obtain Udyam registration so they can access government schemes and financing benefits.',
    price: 'Rs. 999',
    turnaround: '1 to 2 working days',
  },
  {
    slug: 'director-appointment',
    title: 'Director Appointment',
    category: 'Compliance',
    tagline: 'Add directors with proper internal resolutions and MCA filings.',
    overview: 'Tax Suvidha Kendra manages director appointment formalities, consent documents, and filing updates required under corporate law.',
    price: 'Rs. 2,999',
    turnaround: '3 to 5 working days',
  },
  {
    slug: 'winding-up-company',
    title: 'Winding Up of A Company',
    category: 'Compliance',
    tagline: 'Close inactive entities through a structured and compliant exit process.',
    overview: 'Tax Suvidha Kendra helps companies evaluate eligibility, prepare closure documents, and complete strike-off or winding-up filings.',
    price: 'Rs. 8,999',
    turnaround: '30 to 90 working days',
  },
  {
    slug: 'income-tax-return-filing',
    title: 'Income Tax Return Filing',
    category: 'Taxation',
    tagline: 'File accurate income tax returns with deduction review and expert support.',
    overview: 'Tax Suvidha Kendra assists salaried individuals, professionals, and businesses with return preparation, review, and compliant filing.',
    price: 'Rs. 999',
    turnaround: '1 to 3 working days',
  },
  {
    slug: 'gst-registration',
    title: 'GST Registration',
    category: 'Taxation',
    tagline: 'Get GST registration in place for smooth invoicing and tax compliance.',
    overview: 'Tax Suvidha Kendra helps businesses complete GST registration with document review, ARN tracking, and portal-based filing support.',
    price: 'Rs. 1,499',
    turnaround: '3 to 5 working days',
  },
  {
    slug: 'gst-return-filing',
    title: 'GST Return Filing',
    category: 'Taxation',
    tagline: 'Stay current with GST returns, reconciliations, and regular filing support.',
    overview: 'Tax Suvidha Kendra handles monthly or quarterly GST return workflows with sales summary review, purchase checks, and submission support.',
    price: 'Rs. 999 per month',
    turnaround: 'Monthly or quarterly cycle',
  },
  {
    slug: 'tds-return-filing',
    title: 'TDS Return Filing',
    category: 'Taxation',
    tagline: 'Manage TDS reporting accurately across quarterly filing cycles.',
    overview: 'Tax Suvidha Kendra supports deductors with challan checks, return preparation, and timely quarterly TDS filing.',
    price: 'Rs. 1,499 per quarter',
    turnaround: 'Quarterly cycle',
  },
  {
    slug: 'gstr-9-filing',
    title: 'GSTR-9 Filing',
    category: 'Taxation',
    tagline: 'Close the GST year with proper annual return review and filing support.',
    overview: 'Tax Suvidha Kendra helps businesses prepare and file GSTR-9 after reconciling annual GST data with reported returns.',
    price: 'Rs. 2,999',
    turnaround: 'Before annual due date',
  },
  {
    slug: 'pf-return-filing',
    title: 'PF Return Filing',
    category: 'Taxation',
    tagline: 'Maintain monthly PF compliance and filing consistency for your workforce.',
    overview: 'Tax Suvidha Kendra supports salary-linked PF return preparation, ECR workflow, and timely monthly filing compliance.',
    price: 'Rs. 999 per month',
    turnaround: 'Monthly cycle',
  },
  {
    slug: 'trademark-registration',
    title: 'Trademark Registration',
    category: 'IPR',
    tagline: 'Protect your brand name and logo with formal trademark filing support.',
    overview: 'Tax Suvidha Kendra helps with trademark search, application filing, class selection, and response coordination when needed.',
    price: 'Rs. 6,999',
    turnaround: '1 to 2 years overall process',
  },
  {
    slug: 'copyright-registration',
    title: 'Copyright Registration',
    category: 'IPR',
    tagline: 'Secure official registration for original creative and digital work.',
    overview: 'Tax Suvidha Kendra helps creators, agencies, and founders register original works with correct filing details and process tracking.',
    price: 'Rs. 3,499',
    turnaround: '1 to 3 months',
  },
  {
    slug: 'patent-registration',
    title: 'Patent Registration',
    category: 'IPR',
    tagline: 'Move inventions toward formal protection with structured patent support.',
    overview: 'Tax Suvidha Kendra coordinates patent documentation, filing workflow, and process guidance to help innovators protect their ideas.',
    price: 'Rs. 14,999',
    turnaround: 'Process varies by examination timeline',
  },
  {
    slug: 'trademark-renewal',
    title: 'Trademark Renewal',
    category: 'IPR',
    tagline: 'Renew existing trademarks before expiry and preserve brand protection.',
    overview: 'Tax Suvidha Kendra helps businesses renew trademark registrations on time with the right records and filing support.',
    price: 'Rs. 4,499',
    turnaround: '3 to 6 months',
  },
  {
    slug: 'trademark-objection',
    title: 'Trademark Objection',
    category: 'IPR',
    tagline: 'Prepare strong responses to trademark objections with expert support.',
    overview: 'Tax Suvidha Kendra reviews examination reports, drafts replies, and supports the response process to move applications forward.',
    price: 'Rs. 4,999',
    turnaround: 'Depends on hearing and review cycle',
  },
  {
    slug: 'international-trademark-registration',
    title: 'International Trademark Registration',
    category: 'IPR',
    tagline: 'Expand brand protection beyond India with structured international filing support.',
    overview: 'Tax Suvidha Kendra helps businesses plan and initiate international trademark registration for selected markets and jurisdictions.',
    price: 'Rs. 24,999',
    turnaround: 'Depends on selected countries',
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES_DATA.find((service) => service.slug === slug);
}

export function getRelatedServices(service: ServiceData) {
  return SERVICES_DATA.filter(
    (item) => item.category === service.category && item.slug !== service.slug
  ).slice(0, 3);
}

export function getServiceBenefits(service: ServiceData) {
  return [
    {
      title: 'Expert handling',
      description: `Tax Suvidha Kendra manages the ${service.title.toLowerCase()} workflow with structured review and filing support.`,
    },
    {
      title: 'Faster execution',
      description: 'Your process moves with defined checkpoints, document tracking, and timely follow-up.',
    },
    {
      title: 'Reduced errors',
      description: 'Documentation and submission details are checked carefully before filing.',
    },
    {
      title: 'Ongoing guidance',
      description: 'Tax Suvidha Kendra explains the process clearly so you know what is required at each stage.',
    },
  ];
}

export function getServiceDocuments(service: ServiceData) {
  const shared = [
    'PAN card',
    'Aadhaar card',
    'Email ID and mobile number',
    'Business address proof',
  ];

  if (service.category === 'Taxation') {
    return [...shared, 'Financial records', 'Bank statements', 'Relevant tax login details'];
  }

  if (service.category === 'Compliance') {
    return [...shared, 'Entity registration documents', 'Previous filing records', 'Authorized signatory details'];
  }

  if (service.category === 'IPR') {
    return [...shared, 'Brand or work details', 'Ownership proof', 'Supporting declaration or authorization'];
  }

  return [...shared, 'Photograph', 'Entity or partner details', 'Supporting registration information'];
}

export function getServiceProcess(service: ServiceData) {
  return [
    {
      step: '01',
      title: 'Consultation and scope',
      description: `Tax Suvidha Kendra reviews your requirement for ${service.title.toLowerCase()} and confirms the right filing path.`,
    },
    {
      step: '02',
      title: 'Document collection',
      description: 'We collect and review the required documents before submission begins.',
    },
    {
      step: '03',
      title: 'Filing and follow-up',
      description: 'Our team prepares the application, completes filing, and tracks progress actively.',
    },
    {
      step: '04',
      title: 'Completion and support',
      description: 'You receive status updates, outcome documents, and guidance on next compliance steps.',
    },
  ];
}

export function getServiceFaqs(service: ServiceData) {
  return [
    {
      question: `What is included in ${service.title}?`,
      answer: `Tax Suvidha Kendra includes requirement review, document guidance, filing support, and practical follow-up for ${service.title.toLowerCase()}.`,
    },
    {
      question: `How long does ${service.title.toLowerCase()} take?`,
      answer: `The estimated turnaround is ${service.turnaround}. The exact timeline depends on authority review and how quickly documents are shared.`,
    },
    {
      question: 'What documents will I need?',
      answer: 'Most cases require identity proof, address proof, business details, and category-specific supporting records. Tax Suvidha Kendra shares a precise checklist after review.',
    },
    {
      question: 'Will Tax Suvidha Kendra help after filing?',
      answer: 'Yes. Tax Suvidha Kendra supports status tracking, clarification handling, and practical next-step guidance after submission.',
    },
  ];
}