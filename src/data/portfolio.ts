import type { PortfolioData } from "@/types/portfolio";

const github = "https://github.com/deepakgoudasirsi";

export const portfolio: PortfolioData = {
  name: "Deepak Gouda",
  title: "Software Developer | Backend Engineer | Instructor",
  tagline: "Hi, I'm Deepak Gouda 👋",
  intro:
    "I build scalable software, backend systems, cloud solutions, and intelligent applications. I am passionate about software engineering, problem-solving, AI, and teaching.",
  email: "deepakgoudasirsi@gmail.com",
  // Add public/resume.pdf, then uncomment:
  // resumeUrl: "/resume.pdf",
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
      "I am a Computer Science professional with experience in software development, backend engineering, cloud technologies, security, and AI/ML.",
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
    "Software Development",
    "Cloud Computing",
    "Cybersecurity",
    "Artificial Intelligence",
    "Machine Learning",
    "System Design",
    "Teaching and Technology Education",
  ],
  experience: [
    {
      title: "System Engineering Intern",
      company: "Swiggy",
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
      title: "Software Developer + Instructor",
      company: "Bosscoder",
      responsibilities: [
        "Working as a Software Developer and Instructor.",
        "Teaching Web Development and programming concepts.",
        "Creating learning materials, tutorials, worksheets, and coding exercises.",
        "Mentoring students in programming and software development.",
        "Developing and contributing to software projects.",
      ],
    },
  ],
  skillCategories: [
    {
      title: "Programming Languages",
      skills: [
        "Python",
        "Java",
        "JavaScript",
        "TypeScript",
        "SQL",
        "Bash",
        "PHP",
        "C++",
      ],
    },
    {
      title: "Backend Development",
      skills: [
        "FastAPI",
        "Flask",
        "Django",
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT",
        "OAuth",
      ],
    },
    {
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
      ],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "pgvector"],
    },
    {
      title: "Cloud and DevOps",
      skills: [
        "AWS",
        "Docker",
        "GitHub Actions",
        "CI/CD",
        "Linux",
        "Git",
        "GitHub",
      ],
    },
    {
      title: "AI and Machine Learning",
      skills: [
        "PyTorch",
        "TensorFlow",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Streamlit",
      ],
    },
  ],
  projects: [
    {
      title: "AI Security Chatbot",
      description:
        "An AI-powered chatbot focused on cybersecurity knowledge and assistance.",
      technologies: ["Python", "FastAPI", "AI/ML", "PostgreSQL"],
      githubUrl: `${github}/AI-Security-Chatbot`,
      gradient: "from-violet-600 via-purple-600 to-indigo-700",
    },
    {
      title: "Backend-as-a-Service Platform",
      description:
        "A backend platform providing authentication, APIs, databases, and backend services.",
      technologies: ["Python", "FastAPI", "PostgreSQL", "JWT", "Docker"],
      githubUrl: `${github}/Backend-as-a-Service-BaaS-Platform`,
      gradient: "from-cyan-600 via-blue-600 to-indigo-700",
    },
    {
      title: "Smart Video Summarizer",
      description:
        "An application that processes videos and generates intelligent summaries.",
      technologies: ["Python", "AI/ML", "NLP", "Streamlit"],
      githubUrl: `${github}/smart-video-summarizer`,
      gradient: "from-emerald-600 via-teal-600 to-cyan-700",
    },
    {
      title: "Secure SLM",
      description:
        "A lightweight secure language model for network threat detection and security log analysis.",
      technologies: ["Python", "Security", "Machine Learning"],
      githubUrl: `${github}/Secure-SLM`,
      gradient: "from-rose-600 via-red-600 to-orange-700",
    },
    {
      title: "Weakly Supervised Learning Framework",
      description:
        "M.Tech research project focused on machine learning with limited labeled data.",
      technologies: ["Python", "PyTorch", "TensorFlow", "Machine Learning"],
      achievements: [
        "98.26% accuracy on MNIST using only 10% labeled data.",
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
    {
      title: "Walmart USA Software Engineering Job Simulation",
      issuer: "Forage",
    },
    {
      title: "JPMorgan Chase Software Engineering Job Simulation",
      issuer: "Forage",
    },
    {
      title: "Deloitte Australia Technology Job Simulation",
      issuer: "Forage",
    },
  ],
  seo: {
    title: "Deepak Gouda | Software Developer & Instructor",
    description:
      "Portfolio of Deepak Gouda — Software Developer, Backend Engineer, and Instructor specializing in cloud, AI/ML, and scalable systems.",
    url: "https://deepakgoudasirsi.github.io/deepak-portfolio",
    ogImage: "/deepak-portfolio/opengraph-image",
  },
};
