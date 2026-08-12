import type { PortfolioData } from "@/types/portfolio";

// Update links, resume URL, and personal details here.
export const portfolio: PortfolioData = {
  name: "Deepak Gouda",
  title: "Software Developer | Backend Engineer | Instructor",
  tagline: "Hi, I'm Deepak Gouda 👋",
  intro:
    "I build scalable software, backend systems, cloud solutions, and intelligent applications. I am passionate about software engineering, problem-solving, AI, and teaching.",
  email: "deepakgouda@example.com", // TODO: Replace with your email
  resumeUrl: "/resume.pdf", // TODO: Add resume.pdf to public/ or update URL
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/yourusername", // TODO: Replace
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername", // TODO: Replace
      icon: "linkedin",
    },
    {
      name: "Email",
      url: "mailto:deepakgouda@example.com", // TODO: Replace
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
      title: "Software Engineer Intern",
      company: "Swiggy",
      subtitle: "Systems Engineering",
      technologies: [
        "Python",
        "Go",
        "Bash",
        "AWS",
        "GitHub Actions",
        "CI/CD",
        "Docker",
        "Linux",
      ],
      responsibilities: [
        "Integrated security tools into CI/CD pipelines.",
        "Worked on secret scanning and SAST automation.",
        "Automated AWS ECR image analysis and cleanup.",
        "Built automation using Python, Go, Bash, and AWS services.",
        "Improved security workflows and developer productivity.",
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
      githubUrl: "https://github.com/yourusername/ai-security-chatbot", // TODO
      liveUrl: "#", // TODO
      gradient: "from-violet-600 via-purple-600 to-indigo-700",
    },
    {
      title: "Backend-as-a-Service Platform",
      description:
        "A backend platform providing authentication, APIs, databases, and backend services.",
      technologies: ["Python", "FastAPI", "PostgreSQL", "JWT", "Docker"],
      githubUrl: "https://github.com/yourusername/baas-platform", // TODO
      liveUrl: "#", // TODO
      gradient: "from-cyan-600 via-blue-600 to-indigo-700",
    },
    {
      title: "Smart Video Summarizer",
      description:
        "An application that processes videos and generates intelligent summaries.",
      technologies: ["Python", "AI/ML", "NLP", "Streamlit"],
      githubUrl: "https://github.com/yourusername/video-summarizer", // TODO
      liveUrl: "#", // TODO
      gradient: "from-emerald-600 via-teal-600 to-cyan-700",
    },
    {
      title: "GitHub Secrets Detector",
      description:
        "A security-focused tool for detecting exposed secrets and credentials in GitHub repositories.",
      technologies: ["Python", "GitHub API", "Security Automation"],
      githubUrl: "https://github.com/yourusername/secrets-detector", // TODO
      liveUrl: "#", // TODO
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
      githubUrl: "https://github.com/yourusername/wsl-framework", // TODO
      liveUrl: "#", // TODO
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
    url: "https://deepakgouda.dev", // TODO: Replace with your domain
    ogImage: "/opengraph-image", // Auto-generated by src/app/opengraph-image.tsx
  },
};
