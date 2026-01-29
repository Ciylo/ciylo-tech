export type CaseStudyCard = {
  id: number;
  slug: string;
  category: "energy" | "pharma" | "healthcare" | "oil";
  logo: string;
  title: string;
  description: string;
  image: string;
};

export type CaseStudyDetail = {
  id: number;
  slug: string;
  category: "energy" | "pharma" | "healthcare" | "oil";
  title: string;
  subtitle: string;
  introduction: string;
  heroImage: string;
  allData: {
    title: string;
    img: string;
    reverse: boolean;
    description: string;
  }[];
  coreFeatures: {
    title: string;
    description: string;
  }[];
  relatedWork: {
    logo: string;
    title: string;
    description: string;
  }[];
  links: string[];
};

// Card data for listing pages
export const caseStudyCards: CaseStudyCard[] = [
  // Energy
  {
    id: 1,
    slug: "callcom",
    category: "energy",
    logo: "/images/case-callcom-logo.svg",
    title: "CALLCOM",
    description:
      "Callcom is an Al powered calling platform that automates inbound and outbound phone calls using intelligent voice agents. It enables businesses to manage campaigns, handle conversations, book meetings and integrate with CRMS streamlining communication at scale.",
    image: "/images/case-callcom-cover.svg",
  },
  {
    id: 2,
    slug: "AI-MEDIK",
    category: "energy",
    logo: "/images/case-ai-madic-logo.svg",
    title: "AI MEDIK.",
    description:
      "AI Medik is a healthcare technology platform that uses AI to assess user reported symptoms and guide people toward appropriate care, while also enabling appointment scheduling and remote consultations with medical professionals. It bridges the gap between initial health concerns and professional medical support making healthcare more accessible, personalized and efficient without replacing real medical advice. ",
    image: "/images/case-ai-madic-cover.svg",
  },
  {
    id: 3,
    slug: "verited",
    category: "energy",
    logo: "/images/case-verited-logo.svg",
    title: "VeritED",
    description:
      "VeritEd is an online tutoring platform that connects students with qualified tutors for personalized, one-on-one learning. It provides tools for booking sessions, real-time communication, and virtual classrooms, making academic support flexible, secure, and accessible from anywhere. ",
    image: "/images/verited-cover.svg",
  },
  {
    id: 4,
    slug: "mirra",
    category: "energy",
    logo: "/images/case-mirra-logo.svg",
    title: "MIRRA",
    description:
      "Mirra is an AI powered platform where you can create and use smart AI agents to automate everyday tasks and workflows. These agents can connect with your tools, take actions for you and handle repetitive or time consuming work so you don’t have to do everything manually. ",
    image: "/images/case-mirra-cover.svg",
  },
  {
    id: 5,
    slug: "biffco-enterprises-ltd",
    category: "energy",
    logo: "/images/Biffco Enterprises Ltd..svg",
    title: "Biffco Enterprises Ltd.",
    description:
      "An intelligent business intelligence platform that transforms raw data into actionable insights. Leveraging advanced machine learning algorithms, it provides predictive analytics, automated reporting, and real-time visualization to drive data-driven decision making for modern enterprises.",
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  // Pharma
  {
    id: 6,
    slug: "medicare-solutions",
    category: "pharma",
    logo: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.1.0",
    title: "MediCare Solutions",
    description:
      "A comprehensive pharmaceutical management platform that streamlines medication distribution, tracks inventory in real-time, and ensures compliance with healthcare regulations. Features include automated prescription processing, drug interaction alerts, and seamless integration with healthcare providers.",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    id: 7,
    slug: "pharmatech-innovations",
    category: "pharma",
    logo: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.1.0",
    title: "PharmaTech Innovations",
    description:
      "An advanced clinical trial management system that accelerates drug development processes. The platform enables researchers to manage patient data, monitor trial progress, analyze results in real-time, and maintain regulatory compliance throughout the entire drug development lifecycle.",
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    id: 8,
    slug: "healthbridge-pharmaceuticals",
    category: "pharma",
    logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.1.0",
    title: "HealthBridge Pharmaceuticals",
    description:
      "A revolutionary telemedicine platform connecting patients with licensed pharmacists for virtual consultations. Features include prescription management, medication adherence tracking, automated refill reminders, and personalized health recommendations based on patient history and current medications.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    id: 9,
    slug: "biopharm-analytics",
    category: "pharma",
    logo: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.1.0",
    title: "BioPharm Analytics",
    description:
      "An intelligent pharmaceutical supply chain management system that optimizes inventory levels, predicts demand fluctuations, and ensures timely delivery of critical medications. The platform uses AI-powered analytics to reduce waste, prevent stockouts, and maintain optimal storage conditions.",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    id: 10,
    slug: "vitacare-pharmaceuticals",
    category: "pharma",
    logo: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.1.0",
    title: "VitaCare Pharmaceuticals",
    description:
      "A comprehensive patient medication management app that helps individuals track their prescriptions, set medication reminders, access drug information, and connect with healthcare providers. The platform includes features for managing multiple medications, tracking side effects, and sharing health data with doctors.",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  // Health Care
  {
    id: 11,
    slug: "medihealth-pro",
    category: "healthcare",
    logo: "https://images.unsplash.com/photo-1576091160550-2173dba999e8?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.1.0",
    title: "MediHealth Pro",
    description:
      "A comprehensive healthcare management platform that connects patients with healthcare providers, manages medical records, schedules appointments, and provides telemedicine services. Features include secure messaging, prescription management, and health analytics.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    id: 12,
    slug: "careconnect-systems",
    category: "healthcare",
    logo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.1.0",
    title: "CareConnect Systems",
    description:
      "An innovative patient care coordination platform that streamlines communication between healthcare teams, tracks patient progress, and ensures continuity of care. The system includes features for care planning, medication management, and discharge planning.",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    id: 13,
    slug: "healthsync-platform",
    category: "healthcare",
    logo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.1.0",
    title: "HealthSync Platform",
    description:
      "A digital health platform that enables seamless integration of electronic health records across multiple healthcare providers. Features include real-time data synchronization, patient portal access, and advanced analytics for population health management.",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    id: 14,
    slug: "wellnesstracker",
    category: "healthcare",
    logo: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.1.0",
    title: "WellnessTracker",
    description:
      "A patient engagement platform that helps individuals manage their health and wellness journey. Features include symptom tracking, medication adherence monitoring, appointment reminders, and personalized health recommendations based on medical history.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  // Oil Company
  {
    id: 15,
    slug: "petrotech-solutions",
    category: "oil",
    logo: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.1.0",
    title: "PetroTech Solutions",
    description:
      "An advanced oil and gas management platform that optimizes drilling operations, monitors equipment performance, and ensures regulatory compliance. Features include real-time data analytics, predictive maintenance, and automated reporting for upstream operations.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    id: 16,
    slug: "energyflow-systems",
    category: "oil",
    logo: "https://images.unsplash.com/photo-1558618047-3c8c8ca6e3b9?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.1.0",
    title: "EnergyFlow Systems",
    description:
      "A comprehensive pipeline management system that monitors flow rates, detects leaks, and ensures safe transportation of oil and gas products. The platform includes features for maintenance scheduling, emergency response coordination, and compliance tracking.",
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c8ca6e3b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    id: 17,
    slug: "refinerymax",
    category: "oil",
    logo: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.1.0",
    title: "RefineryMax",
    description:
      "An intelligent refinery operations platform that optimizes production processes, manages inventory, and ensures quality control. Features include process automation, real-time monitoring, and advanced analytics for maximizing efficiency and reducing operational costs.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    id: 18,
    slug: "oilfield-analytics",
    category: "oil",
    logo: "https://images.unsplash.com/photo-1558618047-3c8c8ca6e3b9?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.1.0",
    title: "OilField Analytics",
    description:
      "A data-driven platform for oil field management that provides insights into production performance, reservoir analysis, and equipment optimization. The system includes features for well monitoring, production forecasting, and cost analysis to maximize field profitability.",
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c8ca6e3b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
];

// Detail data for each case study
export const caseStudyDetails: CaseStudyDetail[] = [
  // Energy - Binford Ltd.
  {
    id: 1,
    slug: "callcom",
    category: "energy",
    title: "CALLCOM",
    subtitle: "Introduction",
    introduction:
      "Callcom is an Al powered calling platform that automates inbound and outbound phone calls using intelligent voice agents. It enables businesses to manage campaigns, handle conversations, book meetings and integrate with CRMS streamlining communication at scale.",
    heroImage: "/images/callcom-1.svg",
    allData: [
      {
        title: "Dashboard",
        img: "/images/callcom-2.svg",
        reverse: false,
        description:
          "Dashboard gives you a quick overview of total calls, minutes used, and appointments booked. It helps users monitor performance and track system usage at a glance.",
      },
      {
        title: "Campaign Configuration",
        img: "/images/callcom-3.svg",
        reverse: true,
        description:
          "Advanced smart grid technology enables automated load balancing, demand response management, and integration of renewable energy sources. The system ensures optimal energy flow while maintaining grid stability and reliability.",
      },
      {
        title: "Agent Creation",
        img: "/images/callcom-4.svg",
        reverse: false,
        description:
          "Callcom allows users to create AI calling agents by selecting a template and defining the agent’s name. It simplifies agent setup for inbound and outbound call handling. ",
      },
      {
        title: "Voice Management",
        img: "/images/callcom-5.svg",
        reverse: true,
        description:
          " Callcom allows users to select and manage AI voice profiles for calling agents. It supports multiple tones and languages to create natural and personalized call experiences or you can clone your voice too. ",
      },
      {
        title: "Prospect Management  ",
        img: "/images/callcom-6.svg",
        reverse: false,
        description:
          "Callcom manages contact lists for AI calling campaigns, allowing users to import, filter, and organize prospects. It ensures accurate targeting for inbound and outbound calls. ",
      },
      {
        title: "Phone Number Management ",
        img: "/images/callcom-7.svg",
        reverse: true,
        description:
          "Callcom allows users to purchase or import phone numbers for AI agents to make and receive calls. It enables seamless connection with telephony providers for inbound and outbound calling. ",
      },
      {
        title: "Meeting Scheduling",
        img: "/images/callcom-8.svg",
        reverse: false,
        description:
          "Callcom displays and manages meetings booked through AI calls using a calendar view. It helps users track appointments and availability efficiently. ",
      },
      {
        title: "Integrations",
        img: "/images/callcom-9.svg",
        reverse: true,
        description:
          "Callcom connects the AI calling system with external tools like CRMs and calendars. It enables automated data syncing, lead management, and meeting scheduling across platforms. ",
      },
      {
        title: "Plans & Subscriptions ",
        img: "/images/callcom-10.svg",
        reverse: false,
        description:
          "Callcom lets users choose subscription plans based on call minutes, features, and usage limits. It manages access to AI calling capabilities and system resources. ",
      },
    ],
    coreFeatures: [
      {
        title: "Al Calling & Conversation Automation",
        description:
          "Automated inbound and outbond calls with intelligent voice agents.",
      },
      {
        title: "Campaign Management",
        description: "Define agent prompts, goals and conversation flows.",
      },
      {
        title: "Agent & Voice Control",
        description: "Choose or clone voice personalities for calls.",
      },
      {
        title: "Prospect Management",
        description:
          "Import prospects  via CRM & CSV, organize, and target prospect contact lists for AI calling campaigns. ",
      },
      {
        title: "Meeting & Appointment Tracking",
        description:
          "Calendar view for scheduled meetings booked through calls.",
      },
      {
        title: "Third-Party Integrations",
        description: "Sync with CRM tools, calendars, and other platforms. ",
      },
    ],
    relatedWork: [
      {
        logo: "/images/Related-1.svg",
        title: "Defigram",
        description: "Social app for chat and stories.",
      },
      {
        logo: "/images/Related-2.svg",
        title: "Frogbase",
        description: "An AI based model training platform.",
      },
    ],
    links: ["Instagram", "Dribbble", "Linkedin", "Github", "Upwork", "Figma"],
  },
  // Energy - Acme Co.
  {
    id: 2,
    slug: "AI-MEDIK",
    category: "energy",
    title: "AI MEDIK",
    subtitle: "Introduction",
    introduction:
      "AI Medik is a healthcare technology platform that uses AI to assess user reported symptoms and guide people toward appropriate care, while also enabling appointment scheduling and remote consultations with medical professionals. It bridges the gap between initial health concerns and professional medical support making healthcare more accessible, personalized and efficient without replacing real medical advice. ",
    heroImage: "/images/ai-madic-1.svg",
    allData: [
      {
        title: "Dashboard",
        img: "/images/ai-madic-2.svg",
        reverse: false,
        description:
          "Clean dashboard screen showing today’s appointments, inbox messages, and shortcuts to AI sessions, doctors, health records, and appointments. ",
      },
      {
        title: "Al Sessions",
        img: "/images/ai-madic-3.svg",
        reverse: true,
        description:
          "In Ai Medik lets users start a new AI health session and view previous symptom analysis sessions, enabling quick AI-based health assessments. ",
      },
      {
        title: "Appointments",
        img: "/images/ai-madic-4.svg",
        reverse: false,
        description:
          "A calendar view where users can see, track, and manage their medical appointments, with monthly navigation for scheduling and planning visits. ",
      },
      {
        title: "My Doctors",
        img: "/images/ai-madic-5.svg",
        reverse: true,
        description:
          "It shows the doctors or physicians assigned to the user, allowing patients to easily view and manage their connected healthcare providers. ",
      },
      {
        title: "Personal Health Information ",
        img: "/images/ai-madic-5.svg",
        reverse: false,
        description:
          "It allows users to enter and manage lifestyle, medical, radiology, and lab details such as sleep, diet, exercise, and stress levels to support accurate AI analysis and better care decisions. ",
      },
    ],
    coreFeatures: [
      {
        title: "Al-Powered Symptom Assessment",
        description:
          "Users enter symptoms and health details, and Al provides preliminary insights and possible causes.",
      },
      {
        title: "Appointment Scheduling",
        description:
          "Users can book appointments with relevant medical specialists directly.",
      },
      {
        title: "Remote Consultations",
        description:
          "The platform supports virtual doctor visits, enabling patients to consult professionals online. ",
      },
      {
        title: "Ai Transcription",
        description:
          "It would record and summarize each doctor-patient consultation and will be sent to both so it can used as a context for next follow up  ",
      },
    ],
    relatedWork: [
      {
        logo: "/images/Related-1.svg",
        title: "Defigram",
        description: "Social app for chat and stories.",
      },
      {
        logo: "/images/Related-2.svg",
        title: "Frogbase",
        description: "An AI based model training platform.",
      },
    ],
    links: ["Instagram", "Dribbble", "Linkedin", "Github", "Upwork", "Figma"],
  },
  // Energy - Barone LLC
  {
    id: 3,
    slug: "verited",
    category: "energy",
    title: "VeritED",
    subtitle: "Introduction",
    introduction:
      "VeritEd is an online tutoring platform that connects students with qualified tutors for personalized, one-on-one learning. It provides tools for booking sessions, real-time communication, and virtual classrooms, making academic support flexible, secure, and accessible from anywhere. ",
    heroImage: "/images/verited-1.svg",
    allData: [
      {
        title: "Dashboard",
        img: "/images/verited-2.svg",
        reverse: false,
        description:
          "Centralized control hub that gives users a real-time summary of their tutoring activity. It enables users to track sessions, monitor learning progress, manage tutors, view upcoming appointments, and access key actions like session requests.  ",
      },
      {
        title: "Communication",
        img: "/images/verited-3.svg",
        reverse: true,
        description:
          "Real time communication between students and tutors through secure in-platform messaging. It allows users to discuss lessons, share updates, coordinate schedules, and quickly join live tutoring sessions. ",
      },
      {
        title: "Booking & Scheduling",
        img: "/images/verited-4.svg",
        reverse: false,
        description:
          "It allows users to schedule, view, and manage tutoring sessions through an integrated calendar. It helps students track upcoming appointments, plan sessions in advance, and avoid scheduling conflicts. ",
      },
      {
        title: "Classroom",
        img: "/images/verited-5.svg",
        reverse: true,
        description:
          "BrainCert is integrated with Verited. When a class is about to start, it automatically switches to BrainCert, where the live session takes place with features like whiteboards, screen sharing, chat, and class recordings.",
      },
    ],
    coreFeatures: [
      {
        title: "Tutor-Student Matching",
        description:
          "Connects students with suitable tutors based on subject needs and availability.",
      },
      {
        title: "Virtual Classroom",
        description:
          "Provides an online space for live tutoring sessions with real-time interaction.",
      },
      {
        title: "Personalized Learning",
        description:
          "Offers one-on-one tutoring tailored to each student's academic goals and level.",
      },
      {
        title: "Progress & Session Management",
        description:
          "Helps users track sessions, learning activity, and overall engagement.",
      },
    ],
    relatedWork: [
      {
        logo: "/images/Related-1.svg",
        title: "Defigram",
        description: "Social app for chat and stories.",
      },
      {
        logo: "/images/Related-2.svg",
        title: "Frogbase",
        description: "An AI based model training platform.",
      },
    ],
    links: ["Instagram", "Dribbble", "Linkedin", "Github", "Upwork", "Figma"],
  },
  // Energy - Big Kahuna Burger Ltd
  {
    id: 4,
    slug: "mirra",
    category: "energy",
    title: "MIRRA",
    subtitle: "Turn Ideas into AI Automation ",
    introduction:
      "Mirra is an AI powered platform where you can create and use smart AI agents to automate everyday tasks and workflows. These agents can connect with your tools, take actions for you and handle repetitive or time consuming work so you don’t have to do everything manually. ",
    heroImage: "/images/mirra-1.svg",
    allData: [
      {
        title: "Agent Creation",
        img: "/images/mirra-2.svg",
        reverse: false,
        description:
          "Mirra allows users to build AI agents using visual workflows. You can define triggers add actions test the workflow, and publish the agent. ",
      },
      {
        title: "Marketplace",
        img: "/images/mirra-3.svg",
        reverse: true,
        description:
          "Mirra’s marketplace is where users can discover, explore and purchase AI agents built by Mirra. It allows you to quickly find ready made agents for automation, try new workflows or publish and sell your own agents to others. ",
      },
      {
        title: "My Agents",
        img: "/images/mirra-4.svg",
        reverse: false,
        description:
          "In Mirra lets users manage, monitor and control their created AI agents. You can view active and inactive agents, enable or disable agents. ",
      },
      {
        title: "Agent Training & Customization ",
        img: "/images/mirra-5.svg",
        reverse: true,
        description:
          "Mirra allows users to train and personalize AI agents by uploading documents or voice data. Agents learn from PDFs, text files or audio recordings to gain domain specific knowledge and communication style. ",
      },
      {
        title: "Integrations",
        img: "/images/mirra-6.svg",
        reverse: false,
        description:
          "Mirra allows connections to user with popular tools and services like Gmail, Slack, Google Calendar, LinkedIn and more. ",
      },
    ],
    coreFeatures: [
      {
        title: "Energy Monitoring",
        description:
          "Real-time monitoring of energy consumption across all facilities with detailed analytics and reporting.",
      },
      {
        title: "Cost Management",
        description:
          "Identify and implement cost-saving strategies through demand management and efficiency optimization.",
      },
      {
        title: "Sustainability Reporting",
        description:
          "Comprehensive sustainability metrics and reporting to track progress toward environmental goals.",
      },
      {
        title: "Automated Optimization",
        description:
          "AI-powered optimization automatically adjusts energy usage to minimize costs while maintaining operations.",
      },
      {
        title: "Automated Optimization",
        description:
          "AI-powered optimization automatically adjusts energy usage to minimize costs while maintaining operations.",
      },
    ],
    relatedWork: [
      {
        logo: "/images/Related-1.svg",
        title: "Defigram",
        description: "Social app for chat and stories.",
      },
      {
        logo: "/images/Related-2.svg",
        title: "Frogbase",
        description: "An AI based model training platform.",
      },
    ],
    links: ["Instagram", "Dribbble", "Linkedin", "Github", "Upwork", "Figma"],
  },
  // Energy - Biffco Enterprises
  {
    id: 5,
    slug: "biffco-enterprises-ltd",
    category: "energy",
    title: "BIFFCO",
    subtitle: "Introduction",
    introduction:
      "Biffco Enterprises Ltd. specializes in intelligent energy solutions that transform operational data into actionable business insights. Our platform leverages advanced analytics to drive efficiency and innovation in the energy sector.",
    heroImage: "/images/fireside-1.svg",
    allData: [
      {
        title: "Intelligent Analytics",
        img: "/images/fireside-2.svg",
        reverse: false,
        description:
          "Advanced analytics platform transforms complex energy data into clear, actionable insights that drive business decisions and operational improvements.",
      },
      {
        title: "Machine Learning",
        img: "/images/fireside-3.svg",
        reverse: true,
        description:
          "Machine learning algorithms continuously learn from operational data to improve predictions, optimize processes, and identify opportunities for efficiency gains.",
      },
    ],
    coreFeatures: [
      {
        title: "Data Intelligence",
        description:
          "Transform raw operational data into actionable insights with advanced analytics and machine learning.",
      },
      {
        title: "Predictive Modeling",
        description:
          "AI-powered models predict trends, optimize operations, and identify opportunities for improvement.",
      },
      {
        title: "Automated Insights",
        description:
          "Automatically generate insights and recommendations based on real-time data analysis.",
      },
      {
        title: "Performance Optimization",
        description:
          "Continuously optimize operations based on data-driven insights and predictive analytics.",
      },
    ],
    relatedWork: [
      {
        logo: "/images/Related-1.svg",
        title: "Defigram",
        description: "Social app for chat and stories.",
      },
      {
        logo: "/images/Related-2.svg",
        title: "Frogbase",
        description: "An AI based model training platform.",
      },
    ],
    links: ["Instagram", "Dribbble", "Linkedin", "Github", "Upwork", "Figma"],
  },
  // Pharma - MediCare Solutions
  {
    id: 6,
    slug: "medicare-solutions",
    category: "pharma",
    title: "FIRESIDE",
    subtitle: "Introduction",
    introduction:
      "Fireside Pharmacy is a full digital solution for managing medications, allowing patients to order prescriptions, request refills, transfer prescriptions and track orders in real time.",
    heroImage: "/images/fireside-1.svg",
    allData: [
      {
        title: "Dashboard",
        img: "/images/fireside-2.svg",
        reverse: false,
        description:
          "The comprehensive dashboard provides patients with a centralized view of all their medications, upcoming refills, and order status. With real-time tracking and notifications, users can stay informed about their prescription journey from order placement to delivery.",
      },
      {
        title: "AI-Powered",
        img: "/images/fireside-3.svg",
        reverse: true,
        description:
          "The comprehensive dashboard provides patients with a centralized view of all their medications, upcoming refills, and order status. With real-time tracking and notifications, users can stay informed about their prescription journey from order placement to delivery.",
      },
      {
        title: "New RX request",
        img: "/images/fireside-4.svg",
        reverse: false,
        description:
          "The comprehensive dashboard provides patients with a centralized view of all their medications, upcoming refills, and order status. With real-time tracking and notifications, users can stay informed about their prescription journey from order placement to delivery.",
      },
      {
        title: "Confirmation / Checkout",
        img: "/images/fireside-5.svg",
        reverse: true,
        description:
          "The comprehensive dashboard provides patients with a centralized view of all their medications, upcoming refills, and order status. With real-time tracking and notifications, users can stay informed about their prescription journey from order placement to delivery.",
      },
      {
        title: "Refill & Transfer RX",
        img: "/images/fireside-6.svg",
        reverse: false,
        description:
          "The comprehensive dashboard provides patients with a centralized view of all their medications, upcoming refills, and order status. With real-time tracking and notifications, users can stay informed about their prescription journey from order placement to delivery.",
      },
    ],
    coreFeatures: [
      {
        title: "AI-Powered Prescription Digitization",
        description:
          "Uses artificial intelligence to instantly read and convert uploaded prescription images into structured and accurate digital data.",
      },
      {
        title: "Order Tracking",
        description:
          "Streamline OASIS and routine visit documentation for nurses and caregivers.",
      },
      {
        title: "Refill Management",
        description:
          "Streamline OASIS and routine visit documentation for nurses and caregivers.",
      },
      {
        title: "Transfer Rx",
        description:
          "Streamline OASIS and routine visit documentation for nurses and caregivers.",
      },
    ],
    relatedWork: [
      {
        logo: "/images/Related-1.svg",
        title: "Defigram",
        description: "Social app for chat and stories.",
      },
      {
        logo: "/images/Related-2.svg",
        title: "Frogbase",
        description: "An AI based model training platform.",
      },
    ],
    links: ["Instagram", "Dribbble", "Linkedin", "Github", "Upwork", "Figma"],
  },
  // Pharma - PharmaTech Innovations
  {
    id: 7,
    slug: "pharmatech-innovations",
    category: "pharma",
    title: "PHARMATECH",
    subtitle: "Introduction",
    introduction:
      "PharmaTech Innovations provides an advanced clinical trial management system that accelerates drug development processes. The platform enables researchers to manage patient data, monitor trial progress, analyze results in real-time, and maintain regulatory compliance.",
    heroImage: "/images/fireside-1.svg",
    allData: [
      {
        title: "Trial Management",
        img: "/images/fireside-2.svg",
        reverse: false,
        description:
          "Comprehensive clinical trial management system tracks patient enrollment, monitors trial progress, and ensures compliance with regulatory requirements throughout the drug development lifecycle.",
      },
      {
        title: "Data Collection",
        img: "/images/fireside-3.svg",
        reverse: true,
        description:
          "Streamlined data collection tools capture patient information, treatment responses, and adverse events in real-time, ensuring accurate and complete trial documentation.",
      },
      {
        title: "Analytics & Reporting",
        img: "/images/fireside-4.svg",
        reverse: false,
        description:
          "Advanced analytics provide insights into trial performance, patient outcomes, and treatment efficacy. Automated reporting ensures regulatory compliance and timely decision-making.",
      },
    ],
    coreFeatures: [
      {
        title: "Clinical Trial Management",
        description:
          "Comprehensive platform for managing all aspects of clinical trials from enrollment to completion.",
      },
      {
        title: "Real-Time Monitoring",
        description:
          "Monitor trial progress, patient data, and safety events in real-time with automated alerts.",
      },
      {
        title: "Regulatory Compliance",
        description:
          "Ensure compliance with FDA and international regulatory requirements throughout the trial process.",
      },
      {
        title: "Data Analytics",
        description:
          "Advanced analytics provide insights into trial outcomes and treatment efficacy.",
      },
    ],
    relatedWork: [
      {
        logo: "/images/Related-1.svg",
        title: "Defigram",
        description: "Social app for chat and stories.",
      },
      {
        logo: "/images/Related-2.svg",
        title: "Frogbase",
        description: "An AI based model training platform.",
      },
    ],
    links: ["Instagram", "Dribbble", "Linkedin", "Github", "Upwork", "Figma"],
  },
  // Pharma - HealthBridge Pharmaceuticals
  {
    id: 8,
    slug: "healthbridge-pharmaceuticals",
    category: "pharma",
    title: "HEALTHBRIDGE",
    subtitle: "Introduction",
    introduction:
      "HealthBridge Pharmaceuticals offers a revolutionary telemedicine platform connecting patients with licensed pharmacists for virtual consultations. Features include prescription management, medication adherence tracking, and personalized health recommendations.",
    heroImage: "/images/fireside-1.svg",
    allData: [
      {
        title: "Telemedicine Platform",
        img: "/images/fireside-2.svg",
        reverse: false,
        description:
          "Secure video consultation platform connects patients with licensed pharmacists for virtual medication counseling, prescription reviews, and health consultations from the comfort of home.",
      },
      {
        title: "Prescription Management",
        img: "/images/fireside-3.svg",
        reverse: true,
        description:
          "Comprehensive prescription management system tracks medications, manages refills, and provides medication reminders to improve adherence and health outcomes.",
      },
      {
        title: "Health Analytics",
        img: "/images/fireside-4.svg",
        reverse: false,
        description:
          "Personalized health analytics provide insights into medication effectiveness, side effects, and health trends based on patient history and current medications.",
      },
    ],
    coreFeatures: [
      {
        title: "Virtual Consultations",
        description:
          "Connect with licensed pharmacists through secure video consultations for medication counseling and health advice.",
      },
      {
        title: "Medication Tracking",
        description:
          "Track medications, set reminders, and monitor adherence to improve health outcomes.",
      },
      {
        title: "Personalized Recommendations",
        description:
          "AI-powered recommendations based on patient history, current medications, and health data.",
      },
      {
        title: "Prescription Management",
        description:
          "Manage prescriptions, refills, and transfers seamlessly across healthcare providers.",
      },
    ],
    relatedWork: [
      {
        logo: "/images/Related-1.svg",
        title: "Defigram",
        description: "Social app for chat and stories.",
      },
      {
        logo: "/images/Related-2.svg",
        title: "Frogbase",
        description: "An AI based model training platform.",
      },
    ],
    links: ["Instagram", "Dribbble", "Linkedin", "Github", "Upwork", "Figma"],
  },
  // Pharma - BioPharm Analytics
  {
    id: 9,
    slug: "biopharm-analytics",
    category: "pharma",
    title: "BIOPHARM",
    subtitle: "Introduction",
    introduction:
      "BioPharm Analytics provides an intelligent pharmaceutical supply chain management system that optimizes inventory levels, predicts demand fluctuations, and ensures timely delivery of critical medications using AI-powered analytics.",
    heroImage: "/images/fireside-1.svg",
    allData: [
      {
        title: "Supply Chain Optimization",
        img: "/images/fireside-2.svg",
        reverse: false,
        description:
          "AI-powered supply chain management optimizes inventory levels, predicts demand, and ensures timely delivery of medications while reducing waste and preventing stockouts.",
      },
      {
        title: "Demand Forecasting",
        img: "/images/fireside-3.svg",
        reverse: true,
        description:
          "Advanced forecasting algorithms predict medication demand based on historical data, seasonal trends, and market conditions to optimize inventory and reduce costs.",
      },
      {
        title: "Quality Control",
        img: "/images/fireside-4.svg",
        reverse: false,
        description:
          "Automated quality control systems monitor storage conditions, track expiration dates, and ensure compliance with pharmaceutical regulations throughout the supply chain.",
      },
    ],
    coreFeatures: [
      {
        title: "Supply Chain Management",
        description:
          "Optimize pharmaceutical supply chains with AI-powered inventory management and demand forecasting.",
      },
      {
        title: "Demand Prediction",
        description:
          "Predict medication demand accurately to optimize inventory levels and reduce waste.",
      },
      {
        title: "Quality Assurance",
        description:
          "Ensure medication quality and compliance with automated monitoring and tracking systems.",
      },
      {
        title: "Cost Optimization",
        description:
          "Reduce costs through optimized inventory management and efficient supply chain operations.",
      },
    ],
    relatedWork: [
      {
        logo: "/images/Related-1.svg",
        title: "Defigram",
        description: "Social app for chat and stories.",
      },
      {
        logo: "/images/Related-2.svg",
        title: "Frogbase",
        description: "An AI based model training platform.",
      },
    ],
    links: ["Instagram", "Dribbble", "Linkedin", "Github", "Upwork", "Figma"],
  },
  // Pharma - VitaCare Pharmaceuticals
  {
    id: 10,
    slug: "vitacare-pharmaceuticals",
    category: "pharma",
    title: "VITACARE",
    subtitle: "Introduction",
    introduction:
      "VitaCare Pharmaceuticals offers a comprehensive patient medication management app that helps individuals track prescriptions, set medication reminders, access drug information, and connect with healthcare providers.",
    heroImage: "/images/fireside-1.svg",
    allData: [
      {
        title: "Medication Tracking",
        img: "/images/fireside-2.svg",
        reverse: false,
        description:
          "Comprehensive medication tracking system helps patients manage multiple prescriptions, track adherence, and monitor side effects to improve health outcomes.",
      },
      {
        title: "Health Integration",
        img: "/images/fireside-3.svg",
        reverse: true,
        description:
          "Seamless integration with healthcare providers allows patients to share medication data, receive recommendations, and coordinate care with their medical team.",
      },
    ],
    coreFeatures: [
      {
        title: "Medication Management",
        description:
          "Track medications, set reminders, and monitor adherence to improve health outcomes.",
      },
      {
        title: "Health Data Sharing",
        description:
          "Securely share medication data with healthcare providers for coordinated care.",
      },
      {
        title: "Drug Information",
        description:
          "Access comprehensive drug information, interactions, and side effect data.",
      },
      {
        title: "Personalized Insights",
        description:
          "Receive personalized health insights and recommendations based on medication history.",
      },
    ],
    relatedWork: [
      {
        logo: "/images/Related-1.svg",
        title: "Defigram",
        description: "Social app for chat and stories.",
      },
      {
        logo: "/images/Related-2.svg",
        title: "Frogbase",
        description: "An AI based model training platform.",
      },
    ],
    links: ["Instagram", "Dribbble", "Linkedin", "Github", "Upwork", "Figma"],
  },
  // Healthcare - MediHealth Pro
  {
    id: 11,
    slug: "medihealth-pro",
    category: "healthcare",
    title: "MEDIHEALTH",
    subtitle: "Introduction",
    introduction:
      "MediHealth Pro is a comprehensive healthcare management platform that connects patients with healthcare providers, manages medical records, schedules appointments, and provides telemedicine services with secure messaging and health analytics.",
    heroImage: "/images/fireside-1.svg",
    allData: [
      {
        title: "Patient Portal",
        img: "/images/fireside-2.svg",
        reverse: false,
        description:
          "Comprehensive patient portal provides access to medical records, test results, appointment scheduling, and secure messaging with healthcare providers for seamless care coordination.",
      },
      {
        title: "Telemedicine",
        img: "/images/fireside-3.svg",
        reverse: true,
        description:
          "Secure telemedicine platform enables virtual consultations with healthcare providers, reducing barriers to care and improving access to medical services.",
      },
      {
        title: "Health Records",
        img: "/images/fireside-4.svg",
        reverse: false,
        description:
          "Centralized electronic health records system stores and manages patient medical history, test results, and treatment plans for comprehensive care management.",
      },
    ],
    coreFeatures: [
      {
        title: "Patient Management",
        description:
          "Comprehensive platform for managing patient records, appointments, and care coordination.",
      },
      {
        title: "Telemedicine Services",
        description:
          "Secure video consultations enable remote healthcare delivery and improved access to care.",
      },
      {
        title: "Health Records",
        description:
          "Centralized electronic health records ensure comprehensive and accessible patient information.",
      },
      {
        title: "Care Coordination",
        description:
          "Seamless communication and coordination between patients and healthcare providers.",
      },
    ],
    relatedWork: [
      {
        logo: "/images/Related-1.svg",
        title: "Defigram",
        description: "Social app for chat and stories.",
      },
      {
        logo: "/images/Related-2.svg",
        title: "Frogbase",
        description: "An AI based model training platform.",
      },
    ],
    links: ["Instagram", "Dribbble", "Linkedin", "Github", "Upwork", "Figma"],
  },
  // Healthcare - CareConnect Systems
  {
    id: 12,
    slug: "careconnect-systems",
    category: "healthcare",
    title: "CARECONNECT",
    subtitle: "Introduction",
    introduction:
      "CareConnect Systems provides an innovative patient care coordination platform that streamlines communication between healthcare teams, tracks patient progress, and ensures continuity of care with comprehensive care planning and medication management.",
    heroImage: "/images/fireside-1.svg",
    allData: [
      {
        title: "Care Coordination",
        img: "/images/fireside-2.svg",
        reverse: false,
        description:
          "Streamlined care coordination platform enables healthcare teams to communicate, share patient information, and coordinate care plans for improved patient outcomes.",
      },
      {
        title: "Care Planning",
        img: "/images/fireside-3.svg",
        reverse: true,
        description:
          "Comprehensive care planning tools help healthcare teams develop, track, and update patient care plans to ensure continuity and quality of care.",
      },
    ],
    coreFeatures: [
      {
        title: "Team Coordination",
        description:
          "Streamline communication and coordination between healthcare team members for improved patient care.",
      },
      {
        title: "Care Planning",
        description:
          "Develop and manage comprehensive care plans to ensure continuity and quality of care.",
      },
      {
        title: "Progress Tracking",
        description:
          "Track patient progress and outcomes to monitor care effectiveness and adjust plans as needed.",
      },
      {
        title: "Medication Management",
        description:
          "Coordinate medication management across care settings to ensure patient safety and adherence.",
      },
    ],
    relatedWork: [
      {
        logo: "/images/Related-1.svg",
        title: "Defigram",
        description: "Social app for chat and stories.",
      },
      {
        logo: "/images/Related-2.svg",
        title: "Frogbase",
        description: "An AI based model training platform.",
      },
    ],
    links: ["Instagram", "Dribbble", "Linkedin", "Github", "Upwork", "Figma"],
  },
  // Healthcare - HealthSync Platform
  {
    id: 13,
    slug: "healthsync-platform",
    category: "healthcare",
    title: "HEALTHSYNC",
    subtitle: "Introduction",
    introduction:
      "HealthSync Platform enables seamless integration of electronic health records across multiple healthcare providers. Features include real-time data synchronization, patient portal access, and advanced analytics for population health management.",
    heroImage: "/images/fireside-1.svg",
    allData: [
      {
        title: "EHR Integration",
        img: "/images/fireside-2.svg",
        reverse: false,
        description:
          "Seamless integration of electronic health records across healthcare providers ensures comprehensive patient information is accessible when and where it's needed.",
      },
      {
        title: "Data Synchronization",
        img: "/images/fireside-3.svg",
        reverse: true,
        description:
          "Real-time data synchronization ensures all healthcare providers have access to the most current patient information for coordinated care delivery.",
      },
    ],
    coreFeatures: [
      {
        title: "EHR Integration",
        description:
          "Seamlessly integrate electronic health records across multiple healthcare providers and systems.",
      },
      {
        title: "Real-Time Sync",
        description:
          "Real-time data synchronization ensures current patient information is available across all care settings.",
      },
      {
        title: "Patient Portal",
        description:
          "Comprehensive patient portal provides access to health records, test results, and care information.",
      },
      {
        title: "Population Health",
        description:
          "Advanced analytics support population health management and care quality improvement initiatives.",
      },
    ],
    relatedWork: [
      {
        logo: "/images/Related-1.svg",
        title: "Defigram",
        description: "Social app for chat and stories.",
      },
      {
        logo: "/images/Related-2.svg",
        title: "Frogbase",
        description: "An AI based model training platform.",
      },
    ],
    links: ["Instagram", "Dribbble", "Linkedin", "Github", "Upwork", "Figma"],
  },
  // Healthcare - WellnessTracker
  {
    id: 14,
    slug: "wellnesstracker",
    category: "healthcare",
    title: "WELLNESSTRACKER",
    subtitle: "Introduction",
    introduction:
      "WellnessTracker is a patient engagement platform that helps individuals manage their health and wellness journey. Features include symptom tracking, medication adherence monitoring, appointment reminders, and personalized health recommendations.",
    heroImage: "/images/fireside-1.svg",
    allData: [
      {
        title: "Health Tracking",
        img: "/images/fireside-2.svg",
        reverse: false,
        description:
          "Comprehensive health tracking tools help patients monitor symptoms, medications, appointments, and health metrics to actively manage their wellness journey.",
      },
      {
        title: "Personalized Insights",
        img: "/images/fireside-3.svg",
        reverse: true,
        description:
          "AI-powered insights provide personalized health recommendations based on patient data, medical history, and wellness goals to improve health outcomes.",
      },
    ],
    coreFeatures: [
      {
        title: "Symptom Tracking",
        description:
          "Track symptoms, medications, and health metrics to monitor wellness and identify patterns.",
      },
      {
        title: "Medication Adherence",
        description:
          "Monitor medication adherence and receive reminders to improve health outcomes.",
      },
      {
        title: "Appointment Management",
        description:
          "Schedule and manage healthcare appointments with automated reminders and notifications.",
      },
      {
        title: "Health Insights",
        description:
          "Receive personalized health insights and recommendations based on your health data.",
      },
    ],
    relatedWork: [
      {
        logo: "/images/Related-1.svg",
        title: "Defigram",
        description: "Social app for chat and stories.",
      },
      {
        logo: "/images/Related-2.svg",
        title: "Frogbase",
        description: "An AI based model training platform.",
      },
    ],
    links: ["Instagram", "Dribbble", "Linkedin", "Github", "Upwork", "Figma"],
  },
  // Oil - PetroTech Solutions
  {
    id: 15,
    slug: "petrotech-solutions",
    category: "oil",
    title: "PETROTECH",
    subtitle: "Introduction",
    introduction:
      "PetroTech Solutions provides an advanced oil and gas management platform that optimizes drilling operations, monitors equipment performance, and ensures regulatory compliance with real-time data analytics and predictive maintenance.",
    heroImage: "/images/fireside-1.svg",
    allData: [
      {
        title: "Drilling Operations",
        img: "/images/fireside-2.svg",
        reverse: false,
        description:
          "Advanced drilling operations management optimizes drilling processes, monitors performance, and ensures safety and compliance throughout upstream operations.",
      },
      {
        title: "Equipment Monitoring",
        img: "/images/fireside-3.svg",
        reverse: true,
        description:
          "Real-time equipment monitoring tracks performance, predicts failures, and schedules maintenance to ensure optimal operations and reduce downtime.",
      },
    ],
    coreFeatures: [
      {
        title: "Operations Optimization",
        description:
          "Optimize drilling and production operations with advanced analytics and real-time monitoring.",
      },
      {
        title: "Predictive Maintenance",
        description:
          "Predict equipment failures and schedule maintenance proactively to reduce downtime and costs.",
      },
      {
        title: "Regulatory Compliance",
        description:
          "Ensure compliance with industry regulations and safety standards throughout operations.",
      },
      {
        title: "Performance Analytics",
        description:
          "Comprehensive analytics provide insights into operations, performance, and optimization opportunities.",
      },
    ],
    relatedWork: [
      {
        logo: "/images/Related-1.svg",
        title: "Defigram",
        description: "Social app for chat and stories.",
      },
      {
        logo: "/images/Related-2.svg",
        title: "Frogbase",
        description: "An AI based model training platform.",
      },
    ],
    links: ["Instagram", "Dribbble", "Linkedin", "Github", "Upwork", "Figma"],
  },
  // Oil - EnergyFlow Systems
  {
    id: 16,
    slug: "energyflow-systems",
    category: "oil",
    title: "ENERGYFLOW",
    subtitle: "Introduction",
    introduction:
      "EnergyFlow Systems provides a comprehensive pipeline management system that monitors flow rates, detects leaks, and ensures safe transportation of oil and gas products with maintenance scheduling and emergency response coordination.",
    heroImage: "/images/fireside-1.svg",
    allData: [
      {
        title: "Pipeline Monitoring",
        img: "/images/fireside-2.svg",
        reverse: false,
        description:
          "Advanced pipeline monitoring system tracks flow rates, pressure, and temperature to ensure safe and efficient transportation of oil and gas products.",
      },
      {
        title: "Leak Detection",
        img: "/images/fireside-3.svg",
        reverse: true,
        description:
          "AI-powered leak detection systems identify potential leaks early, enabling rapid response and minimizing environmental impact and safety risks.",
      },
    ],
    coreFeatures: [
      {
        title: "Pipeline Management",
        description:
          "Comprehensive pipeline monitoring and management system ensures safe and efficient operations.",
      },
      {
        title: "Leak Detection",
        description:
          "Advanced leak detection technology identifies issues early for rapid response and mitigation.",
      },
      {
        title: "Emergency Response",
        description:
          "Coordinated emergency response system ensures rapid and effective response to incidents.",
      },
      {
        title: "Maintenance Scheduling",
        description:
          "Automated maintenance scheduling ensures optimal pipeline performance and safety.",
      },
    ],
    relatedWork: [
      {
        logo: "/images/Related-1.svg",
        title: "Defigram",
        description: "Social app for chat and stories.",
      },
      {
        logo: "/images/Related-2.svg",
        title: "Frogbase",
        description: "An AI based model training platform.",
      },
    ],
    links: ["Instagram", "Dribbble", "Linkedin", "Github", "Upwork", "Figma"],
  },
  // Oil - RefineryMax
  {
    id: 17,
    slug: "refinerymax",
    category: "oil",
    title: "REFINERYMAX",
    subtitle: "Introduction",
    introduction:
      "RefineryMax provides an intelligent refinery operations platform that optimizes production processes, manages inventory, and ensures quality control with process automation, real-time monitoring, and advanced analytics.",
    heroImage: "/images/fireside-1.svg",
    allData: [
      {
        title: "Process Optimization",
        img: "/images/fireside-2.svg",
        reverse: false,
        description:
          "Advanced process optimization tools maximize refinery efficiency, reduce costs, and ensure quality control throughout production processes.",
      },
      {
        title: "Quality Control",
        img: "/images/fireside-3.svg",
        reverse: true,
        description:
          "Comprehensive quality control systems monitor product quality, ensure compliance with specifications, and maintain consistent production standards.",
      },
    ],
    coreFeatures: [
      {
        title: "Process Automation",
        description:
          "Automate refinery processes to maximize efficiency, reduce costs, and ensure consistent quality.",
      },
      {
        title: "Real-Time Monitoring",
        description:
          "Monitor refinery operations in real-time to ensure optimal performance and quality control.",
      },
      {
        title: "Inventory Management",
        description:
          "Optimize inventory levels and manage raw materials and finished products efficiently.",
      },
      {
        title: "Quality Assurance",
        description:
          "Ensure product quality and compliance with automated quality control and testing systems.",
      },
    ],
    relatedWork: [
      {
        logo: "/images/Related-1.svg",
        title: "Defigram",
        description: "Social app for chat and stories.",
      },
      {
        logo: "/images/Related-2.svg",
        title: "Frogbase",
        description: "An AI based model training platform.",
      },
    ],
    links: ["Instagram", "Dribbble", "Linkedin", "Github", "Upwork", "Figma"],
  },
  // Oil - OilField Analytics
  {
    id: 18,
    slug: "oilfield-analytics",
    category: "oil",
    title: "OILFIELD",
    subtitle: "Introduction",
    introduction:
      "OilField Analytics provides a data-driven platform for oil field management that provides insights into production performance, reservoir analysis, and equipment optimization with well monitoring, production forecasting, and cost analysis.",
    heroImage: "/images/fireside-1.svg",
    allData: [
      {
        title: "Production Analytics",
        img: "/images/fireside-2.svg",
        reverse: false,
        description:
          "Advanced production analytics provide insights into well performance, production rates, and optimization opportunities to maximize field profitability.",
      },
      {
        title: "Reservoir Analysis",
        img: "/images/fireside-3.svg",
        reverse: true,
        description:
          "Comprehensive reservoir analysis tools help understand reservoir characteristics, predict production, and optimize extraction strategies.",
      },
    ],
    coreFeatures: [
      {
        title: "Production Monitoring",
        description:
          "Monitor well performance and production rates in real-time to optimize field operations.",
      },
      {
        title: "Reservoir Analysis",
        description:
          "Analyze reservoir characteristics and predict production to optimize extraction strategies.",
      },
      {
        title: "Cost Analysis",
        description:
          "Comprehensive cost analysis helps identify optimization opportunities and maximize profitability.",
      },
      {
        title: "Forecasting",
        description:
          "Accurate production forecasting helps plan operations and optimize resource allocation.",
      },
    ],
    relatedWork: [
      {
        logo: "/images/Related-1.svg",
        title: "Defigram",
        description: "Social app for chat and stories.",
      },
      {
        logo: "/images/Related-2.svg",
        title: "Frogbase",
        description: "An AI based model training platform.",
      },
    ],
    links: ["Instagram", "Dribbble", "Linkedin", "Github", "Upwork", "Figma"],
  },
];

// Helper function to get case study by ID
export const getCaseStudyById = (id: number): CaseStudyDetail | undefined => {
  return caseStudyDetails.find((study) => study.id === id);
};

// Helper function to get case study by slug
export const getCaseStudyBySlug = (
  slug: string
): CaseStudyDetail | undefined => {
  return caseStudyDetails.find((study) => study.slug === slug);
};

// Helper function to get case studies by category
export const getCaseStudiesByCategory = (
  category: "energy" | "pharma" | "healthcare" | "oil"
): CaseStudyCard[] => {
  return caseStudyCards.filter((card) => card.category === category);
};
