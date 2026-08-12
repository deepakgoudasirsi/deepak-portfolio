export type NavItem = {
  id: string;
  label: string;
};

export type SocialLink = {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "email";
};

export type Experience = {
  title: string;
  company: string;
  subtitle?: string;
  technologies?: string[];
  responsibilities: string[];
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  achievements?: string[];
  gradient: string;
};

export type Education = {
  degree: string;
  institution: string;
  period?: string;
  cgpa: string;
};

export type Certification = {
  title: string;
  issuer?: string;
};

export type PortfolioData = {
  name: string;
  title: string;
  tagline: string;
  intro: string;
  email: string;
  resumeUrl?: string;
  socialLinks: SocialLink[];
  navItems: NavItem[];
  interests: string[];
  experience: Experience[];
  skillCategories: SkillCategory[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  about: {
    summary: string;
    educationHighlights: Education[];
  };
  seo: {
    title: string;
    description: string;
    url: string;
    ogImage: string;
  };
};
