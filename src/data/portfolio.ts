import type { PortfolioData } from "@/types/portfolio";

const github = "https://github.com/deepakgoudasirsi";

export const portfolio: PortfolioData = {
  name: "Deepak Gouda",
  title: "Backend Engineer | Ex-Swiggy Intern | M.Tech CSE",
  tagline: "Hi, I'm Deepak Gouda",
  intro:
    "Backend engineer with M.Tech in Computer Science and intern experience at Swiggy in CI/CD security automation, AWS, and platform engineering. I build backend services, cloud pipelines, and security tooling with Python, Go, Java, and FastAPI.",
  email: "deepakgoudasirsi@gmail.com",
  socialLinks: [
    {
      name: "GitHub",
      url: github,
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/deepakgoudasirsi",
      icon: "linkedin",
    },
    {
      name: "Email",
      url: "mailto:deepakgoudasirsi@gmail.com",
      icon: "email",
    },
  ],
  navItems: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ],
  about: {
    summary:
      "M.Tech CSE graduate from RV College of Engineering with backend and security engineering experience at Swiggy. Currently working as a Software Developer at Bosscoder.",
    educationHighlights: [
      {
        degree: "M.Tech in Computer Science and Engineering",
        institution: "RV College of Engineering",
        cgpa: "8.68/10",
      },
      {
        degree: "B.E. in Computer Science",
        institution: "Sir M. Visvesvaraya Institute of Technology",
        cgpa: "7.5/10",
      },
    ],
  },
  interests: [
    "Backend Engineering",
    "Cloud & DevOps",
    "Cybersecurity",
    "System Design",
    "Machine Learning",
  ],
  experience: [
    {
      title: "System Engineering Intern",
      company: "Swiggy",
      period: "Jan 2025 – Jun 2025",
      subtitle: "Security & Platform Engineering",
      technologies: [
        "Python",
        "Go",
        "Bash",
        "AWS",
        "GitHub Actions",
        "CI/CD",
        "Docker",
        "Databricks",
        "Orca CLI",
      ],
      responsibilities: [
        "Integrated Orca CLI into CI/CD pipelines for secret scanning and SAST automation.",
        "Connected security pipelines to Apollo GitHub workflows for real-time PR checks.",
        "Authored developer SOPs for secret rotation across AWS, GitHub, GCP, and Slack.",
        "Automated AWS ECR image analysis and cleanup via lifecycle policies.",
        "Built security reporting data pipelines using Databricks.",
      ],
    },
    {
      title: "Software Developer",
      company: "Bosscoder",
      period: "2025 – Present",
      technologies: ["JavaScript", "React", "Node.js", "Git"],
      responsibilities: [
        "Develop and maintain web applications using JavaScript, React, and Node.js.",
        "Build backend APIs and debug production issues in existing codebases.",
      ],
    },
  ],
  skillCategories: [
    {
      title: "Languages",
      skills: ["Python", "Java", "Go", "JavaScript", "TypeScript", "SQL", "Bash"],
    },
    {
      title: "Backend",
      skills: [
        "Spring Boot",
        "FastAPI",
        "Flask",
        "Node.js",
        "Microservices",
        "REST APIs",
        "JWT",
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "AWS",
        "Docker",
        "Kafka",
        "Redis",
        "GitHub Actions",
        "CI/CD",
        "Linux",
      ],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
    },
    {
      title: "Security",
      skills: ["SAST", "Secret Scanning", "CI/CD Security", "MITRE ATT&CK"],
    },
    {
      title: "AI / ML",
      skills: ["PyTorch", "TensorFlow", "scikit-learn"],
    },
  ],
  projects: [
    {
      title: "Smart Hospital & Telemedicine Platform",
      period: "May 2026 – Jun 2026",
      description:
        "Healthcare platform with patient management, appointments, telemedicine, and EHR. REST APIs, JWT auth, Kafka, Redis, and Dockerized microservices.",
      technologies: [
        "Java",
        "Spring Boot",
        "Kafka",
        "Redis",
        "PostgreSQL",
        "Docker",
      ],
      githubUrl: `${github}/smart-hospital-platform`,
      gradient: "from-sky-600 via-blue-600 to-indigo-700",
    },
    {
      title: "FinGuard AI — Fraud Detection & AML",
      period: "Jan 2026 – Mar 2026",
      description:
        "Fraud detection platform for financial transactions using ensemble ML, anomaly detection, and explainable AI for real-time risk scoring.",
      technologies: ["Python", "FastAPI", "Machine Learning"],
      githubUrl: `${github}/ai-financial-workflow`,
      gradient: "from-emerald-600 via-teal-600 to-cyan-700",
    },
    {
      title: "Secure-SLM",
      period: "Apr 2026 – May 2026",
      description:
        "Cybersecurity assistant for SOC log analysis with rule-based IDS, ML classification, and MITRE ATT&CK retrieval. Runs offline for privacy-sensitive use.",
      technologies: ["Python", "FastAPI", "scikit-learn", "Docker"],
      githubUrl: `${github}/Secure-SLM`,
      gradient: "from-rose-600 via-red-600 to-orange-700",
    },
    {
      title: "Backend-as-a-Service Platform",
      period: "May 2025 – Aug 2025",
      description:
        "Backend platform with authentication, storage, email APIs, and data services. JWT-based auth and PostgreSQL-backed REST APIs.",
      technologies: ["Python", "FastAPI", "PostgreSQL", "JWT", "Docker"],
      githubUrl: `${github}/Backend-as-a-Service-BaaS-Platform`,
      gradient: "from-cyan-600 via-blue-600 to-indigo-700",
    },
    {
      title: "Weakly Supervised Learning Framework",
      period: "Apr 2025 – Dec 2025",
      description:
        "M.Tech research project for training models with limited labeled data using pseudo-labeling and consistency regularization.",
      technologies: ["Python", "PyTorch", "TensorFlow"],
      achievements: [
        "98.26% accuracy on MNIST with 10% labeled data.",
        "89.3% accuracy on CIFAR-10.",
      ],
      githubUrl: `${github}/WSL-Framework`,
      gradient: "from-amber-600 via-orange-600 to-rose-700",
    },
  ],
  education: [
    {
      degree: "M.Tech — Computer Science and Engineering",
      institution: "RV College of Engineering",
      period: "2024 – 2025",
      cgpa: "8.68/10",
    },
    {
      degree: "B.E. — Computer Science and Engineering",
      institution: "Sir M. Visvesvaraya Institute of Technology",
      cgpa: "7.5/10",
    },
  ],
  certifications: [
    { title: "AWS Educate Machine Learning Foundations", issuer: "AWS Educate" },
    { title: "Cisco Python Essentials", issuer: "Cisco" },
  ],
  seo: {
    title: "Deepak Gouda | Backend Engineer | Ex-Swiggy",
    description:
      "Backend engineer with Swiggy intern experience in CI/CD security, AWS, and platform engineering. M.Tech CSE from RV College of Engineering.",
    url: "https://deepakgoudasirsi.github.io/deepak-portfolio",
    ogImage: "/opengraph-image",
  },
};
