export interface Project {
  title: string;
  description: string;
  category: 'ml' | 'security' | 'iot';
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  focus: string;
  link?: string;
  citation: string;
}

export interface InitiativeItem {
  role: string;
  organization: string;
  period: string;
  bullets: string[];
}

export interface Pillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  items: InitiativeItem[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const contactInfo = {
  name: "Pradip Paneru",
  title: "Cybersecurity & AI Researcher • Wireless Systems • Trustworthy AI",
  email: "pradippaneru444@gmail.com",
  academicEmail: "080msncs020.pradip@pcampus.edu.np",
  phone: "+977-9867358373",
  location: "Kathmandu, Nepal",
  researchGate: "https://www.researchgate.net/profile/Pradip-Paneru-2",
  scholar: "https://scholar.google.com",
  github: "https://github.com/pradippaneru",
};

export const pillars: Pillar[] = [
  {
    id: "strategic-leadership",
    title: "Strategic Leadership & Venture Building",
    subtitle: "Pillar I — Entrepreneurship & Operations",
    description: "Building resilient technology ventures, driving operations, and framing long-term tech architectures for emerging digital ecosystems.",
    items: [
      {
        role: "Chief Operating Officer (COO)",
        organization: "Room Sewa Pvt. Ltd.",
        period: "Operations & Strategy",
        bullets: [
          "Drove corporate operations and strategic development to optimize product delivery.",
          "Led interdisciplinary teams to scale localized accommodation platforms.",
          "Designed and executed technical roadmaps aligning customer value with operational feasibility."
        ]
      },
      {
        role: "Co-Founder",
        organization: "Codesk Innovations Pvt. Ltd.",
        period: "Tech Strategy & Design",
        bullets: [
          "Led early-stage technical strategy, software architecture, and system design.",
          "Guided teams in prototyping and deploying cloud-native web applications.",
          "Established strategic partnership frameworks to foster startup growth."
        ]
      }
    ]
  },
  {
    id: "trustworthy-technology",
    title: "Advancing Trustworthy Technology",
    subtitle: "Pillar II — Cyber Security & Systems Engineering",
    description: "Ensuring deep network security, privacy-preserving machine learning frameworks, and robust cyber-physical systems optimization.",
    items: [
      {
        role: "Cybersecurity Analyst",
        organization: "Wepro Technology Pvt. Ltd.",
        period: "2024",
        bullets: [
          "Conducted vulnerability assessment and penetration testing (VAPT) on enterprise-grade systems.",
          "Identified severe security flaws including injection attacks and access control vulnerabilities.",
          "Designed comprehensive mitigation playbooks to secure data transmission and store architectures."
        ]
      },
      {
        role: "RF & Remote Sensing Engineer",
        organization: "China Comm Services",
        period: "2022",
        bullets: [
          "Collected and analyzed RF signal metrics for telecom infrastructure optimization.",
          "Designed propagation models and investigated network coverage anomalies in challenging environments.",
          "Optimized hardware-software interface parameters for robust signal communication."
        ]
      }
    ]
  },
  {
    id: "educating-generation",
    title: "Educating & Empowering the Next Generation",
    subtitle: "Pillar III — Academic Leadership & Mentorship",
    description: "Translating cutting-edge research into rigorous academic curriculum, mentoring future engineers, and training developers in ML systems.",
    items: [
      {
        role: "Lecturer / Instructor",
        organization: "IOE Thapathali Campus • Cosmos College • Westminster College",
        period: "2023 – 2025",
        bullets: [
          "Instructed core undergraduate courses: Computer Networks, Cybersecurity, Digital Forensics, Operating Systems, C Programming.",
          "Designed hands-on lab exercises and modern technical curriculum aligning with global academic benchmarks.",
          "Mentored undergraduate thesis and capstone projects in distributed computing and networks."
        ]
      },
      {
        role: "Machine Learning Instructor",
        organization: "Crest Technology • Genesis Solution",
        period: "2024",
        bullets: [
          "Delivered intensive hands-on training programs in Python, Machine Learning, and Data Science.",
          "Guided end-to-end student capstone projects in fraud detection, Natural Language Processing (NLP), and computer vision.",
          "Fostered deep industry-academia collaboration by teaching production-grade ML workflows."
        ]
      }
    ]
  }
];

export const publications: Publication[] = [
  {
    title: "Balancing Privacy and Accuracy in Nepali Sentiment Analysis: Fine-Tuning NepaliBERT with Differential Privacy",
    authors: "Pradip Paneru, et al.",
    journal: "ResearchGate & Academic Preprints",
    focus: "Differential Privacy, Trustworthy AI, NLP optimization trade-offs.",
    link: "https://www.researchgate.net/profile/Pradip-Paneru-2",
    citation: "Paneru, P., et al. (2024). Balancing Privacy and Accuracy in Nepali Sentiment Analysis: Fine-Tuning NepaliBERT with Differential Privacy."
  },
  {
    title: "Automated Cyber-Physical Systems Optimization",
    authors: "Pradip Paneru, et al.",
    journal: "Journal of ISMAC",
    focus: "Signal processing, IoT integration, embedded system optimization.",
    citation: "Paneru, P., et al. (2024). Automated Cyber-Physical Systems Optimization. Journal of ISMAC."
  }
];

export const academicContributions = [
  {
    role: "Journal Reviewer",
    organization: "International Journal of Informatics and Communication Technology (IJ-ICT)",
    period: "2026",
    details: "Evaluated high-impact manuscripts, including 'Smart Poultry Farming with IoT: An In-Depth Exploration of Innovations and Trends'."
  }
];

export const projects: Project[] = [
  {
    title: "Privacy-Preserving NLP System",
    description: "Developed differential privacy-based fine-tuning system for NepaliBERT sentiment analysis, resolving complex privacy-utility trade-offs.",
    category: "ml"
  },
  {
    title: "Dynamic Pricing System",
    description: "Built machine learning-based dynamic pricing models for e-commerce optimization, analyzing demand and competitive elasticity.",
    category: "ml"
  },
  {
    title: "Smart Poultry Cyber-Physical System",
    description: "Designed IoT-based automated environmental monitoring system integrating ESP32, wireless sensor networks, and cloud telemetry.",
    category: "iot"
  }
];

export const skills: SkillGroup[] = [
  {
    category: "Programming & Math",
    skills: ["Python", "C/C++", "MATLAB", "Linux", "Git", "Differential Privacy", "Optimization Methods"]
  },
  {
    category: "Machine Learning & AI",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "NLP", "Deep Learning", "Fine-Tuning", "Sentiment Analysis"]
  },
  {
    category: "Cybersecurity & Systems",
    skills: ["VAPT", "Penetration Testing", "Digital Forensics", "Network Security", "RF Remote Sensing", "CSI"]
  },
  {
    category: "Embedded & WSN",
    skills: ["ESP32", "Arduino", "Raspberry Pi", "IoT Systems", "Wi-Fi Systems", "Signal Processing", "FFT"]
  }
];
