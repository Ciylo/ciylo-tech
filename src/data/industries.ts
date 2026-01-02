export type IndustryCard = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export type IndustryDetail = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  firstRowSolutions: {
    slug: string;
    title: string;
    description: string;
    colSpan: string;
    fontWeight: string;
  }[];
  secondRowSolutions: {
    slug: string;
    title: string;
    description: string;
    fontWeight: string;
  }[];
  firstRowItems: {
    slug: string;
    text: string;
    colSpan: string;
  }[];
  secondRowItems: {
    slug: string;
    text: string;
  }[];
};

// Card data for listing pages
export const industryCards: IndustryCard[] = [
  {
    slug: "oil-industry",
    title: "Oil industry",
    description:
      "We help oil and energy companies tackle complex operational challenges through innovative technology, strategic design, and data-driven solutions. From exploration and production to distribution and management, our work optimizes processes, enhances safety, and drives measurable efficiency across the industry",
    image: "/images/pipe_pipeline-20.svg",
  },
  {
    slug: "health-care",
    title: "Health Care",
    description:
      "We help healthcare providers and organizations tackle complex operational challenges through innovative technology, strategic design, and data-driven solutions. From patient care and clinical workflows to administrative systems and data analytics, our work optimizes processes, enhances safety, and drives measurable efficiency across the industry",
    image: "/images/undraw_medicine_hqqg 1.svg",
  },
  {
    slug: "pharmaceutical",
    title: "Pharmaceutical",
    description:
      "We help pharmaceutical companies tackle complex operational challenges through innovative technology, strategic design, and data-driven solutions. From drug development and manufacturing to distribution and management, our work optimizes processes, enhances safety, and drives measurable efficiency across the industry",
    image: "/images/undraw_medical-care_7m9g (1) 1.svg",
  },
];

// Detail data for each industry
export const industryDetails: IndustryDetail[] = [
  {
    slug: "health-care",
    title: "Health Care",
    subtitle: "Let's Start",
    description:
      "We help healthcare providers and organizations tackle complex operational challenges through innovative technology, strategic design, and data-driven solutions. From patient care and clinical workflows to administrative systems and data analytics, our work optimizes processes, enhances safety, and drives measurable efficiency across the industry",
    heroImage: "/images/Industry-1.svg",
    firstRowSolutions: [
      {
        slug: "telemedicine-platforms",
        title: "Telemedicine Platforms",
        description: "Reduce your environmental footprint by upgrading production systems and techniques",
        colSpan: "",
        fontWeight: "font-bold",
      },
      {
        slug: "electronic-medical-records",
        title: "Electronic Medical Records",
        description: "Reduce your environmental footprint by upgrading production systems and techniques",
        colSpan: "",
        fontWeight: "font-semibold",
      },
      {
        slug: "patient-portals",
        title: "Patient Portals",
        description: "Reduce your environmental footprint by upgrading production systems and techniques",
        colSpan: "sm:col-span-2 lg:col-span-1",
        fontWeight: "font-semibold",
      },
    ],
    secondRowSolutions: [
      {
        slug: "hospital-management",
        title: "Hospital Management",
        description: "Reduce your environmental footprint by upgrading production systems and techniques",
        fontWeight: "font-semibold",
      },
      {
        slug: "remote-patient-monitoring",
        title: "Remote Patient Monitoring",
        description: "Reduce your environmental footprint by upgrading production systems and techniques",
        fontWeight: "font-semibold",
      },
    ],
    firstRowItems: [
      {
        slug: "seamless-doctor-patient-communication",
        text: "Seamless doctor-patient communication",
        colSpan: "",
      },
      {
        slug: "higher-staff-productivity",
        text: "Higher staff productivity",
        colSpan: "",
      },
      {
        slug: "faster-diagnosis-ai-insights",
        text: "Faster diagnosis through AI insights",
        colSpan: "col-span-2 lg:col-span-1",
      },
    ],
    secondRowItems: [
      {
        slug: "reduced-patient-wait-times",
        text: "Reduced patient wait times",
      },
      {
        slug: "secure-paperless-workflows",
        text: "Secure and paperless workflows",
      },
    ],
  },
  {
    slug: "oil-industry",
    title: "Oil Industry",
    subtitle: "Let's Start",
    description:
      "We help oil and energy companies tackle complex operational challenges through innovative technology, strategic design, and data-driven solutions. From exploration and production to distribution and management, our work optimizes processes, enhances safety, and drives measurable efficiency across the industry",
    heroImage: "/images/pipe_pipeline-20.svg",
    firstRowSolutions: [
      {
        slug: "exploration-platforms",
        title: "Exploration Platforms",
        description: "Advanced technology for oil and gas exploration with real-time data analysis",
        colSpan: "",
        fontWeight: "font-bold",
      },
      {
        slug: "production-management",
        title: "Production Management",
        description: "Streamline production processes with intelligent automation and monitoring",
        colSpan: "",
        fontWeight: "font-semibold",
      },
      {
        slug: "safety-systems",
        title: "Safety Systems",
        description: "Comprehensive safety monitoring and risk management solutions",
        colSpan: "sm:col-span-2 lg:col-span-1",
        fontWeight: "font-semibold",
      },
    ],
    secondRowSolutions: [
      {
        slug: "distribution-management",
        title: "Distribution Management",
        description: "Optimize logistics and distribution networks for maximum efficiency",
        fontWeight: "font-semibold",
      },
      {
        slug: "environmental-monitoring",
        title: "Environmental Monitoring",
        description: "Track and reduce environmental impact with advanced monitoring systems",
        fontWeight: "font-semibold",
      },
    ],
    firstRowItems: [
      {
        slug: "real-time-monitoring",
        text: "Real-time operational monitoring",
        colSpan: "",
      },
      {
        slug: "predictive-maintenance",
        text: "Predictive maintenance systems",
        colSpan: "",
      },
      {
        slug: "cost-optimization",
        text: "Cost optimization through AI",
        colSpan: "col-span-2 lg:col-span-1",
      },
    ],
    secondRowItems: [
      {
        slug: "enhanced-safety",
        text: "Enhanced safety protocols",
      },
      {
        slug: "sustainable-practices",
        text: "Sustainable operational practices",
      },
    ],
  },
  {
    slug: "pharmaceutical",
    title: "Pharmaceutical",
    subtitle: "Let's Start",
    description:
      "We help pharmaceutical companies tackle complex operational challenges through innovative technology, strategic design, and data-driven solutions. From drug development and manufacturing to distribution and management, our work optimizes processes, enhances safety, and drives measurable efficiency across the industry",
    heroImage: "/images/undraw_medical-care_7m9g (1) 1.svg",
    firstRowSolutions: [
      {
        slug: "drug-development",
        title: "Drug Development Platforms",
        description: "Accelerate drug discovery and development with advanced analytics",
        colSpan: "",
        fontWeight: "font-bold",
      },
      {
        slug: "manufacturing-systems",
        title: "Manufacturing Systems",
        description: "Optimize pharmaceutical manufacturing with precision and quality control",
        colSpan: "",
        fontWeight: "font-semibold",
      },
      {
        slug: "regulatory-compliance",
        title: "Regulatory Compliance",
        description: "Ensure compliance with global pharmaceutical regulations",
        colSpan: "sm:col-span-2 lg:col-span-1",
        fontWeight: "font-semibold",
      },
    ],
    secondRowSolutions: [
      {
        slug: "supply-chain",
        title: "Supply Chain Management",
        description: "Streamline pharmaceutical supply chains for efficiency and reliability",
        fontWeight: "font-semibold",
      },
      {
        slug: "quality-assurance",
        title: "Quality Assurance",
        description: "Maintain highest quality standards with automated testing and validation",
        fontWeight: "font-semibold",
      },
    ],
    firstRowItems: [
      {
        slug: "faster-time-to-market",
        text: "Faster time to market",
        colSpan: "",
      },
      {
        slug: "improved-quality",
        text: "Improved quality control",
        colSpan: "",
      },
      {
        slug: "regulatory-tracking",
        text: "Comprehensive regulatory tracking",
        colSpan: "col-span-2 lg:col-span-1",
      },
    ],
    secondRowItems: [
      {
        slug: "cost-reduction",
        text: "Significant cost reduction",
      },
      {
        slug: "data-driven-insights",
        text: "Data-driven decision making",
      },
    ],
  },
];

// Helper function to get industry by slug
export const getIndustryBySlug = (slug: string): IndustryDetail | undefined => {
  return industryDetails.find((industry) => industry.slug === slug);
};

// Helper function to get all industry cards
export const getAllIndustryCards = (): IndustryCard[] => {
  return industryCards;
};

