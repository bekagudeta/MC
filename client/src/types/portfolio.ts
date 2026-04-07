export interface About {
  _id?: string;
  name: string;
  title: string;
  bio: string;
  profileImage: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  github?: string;
  motto: string;
  description: string;
}

export interface SkillCategory {
  _id?: string;
  category: string;
  items: string[];
}

export interface Experience {
  _id?: string;
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description: string;
  achievements?: string[];
}

export interface Education {
  _id?: string;
  degree: string;
  institution: string;
  year: string;
  gpa?: string;
  description?: string;
}

export interface Research {
  _id?: string;
  title: string;
  description: string;
  journal?: string;
  year: number;
  link?: string;
  coAuthors?: string[];
  status: 'published' | 'in-progress' | 'submitted';
}

export interface Achievement {
  _id?: string;
  title: string;
  year: number;
  description?: string;
  type: 'award' | 'certification' | 'recognition';
  issuer?: string;
}

export interface Contact {
  _id?: string;
  email: string;
  phone: string;
  linkedin?: string;
  github?: string;
  location: string;
  additionalInfo?: string;
}

export interface PortfolioData {
  about: About | null;
  skills: SkillCategory[];
  experience: Experience[];
  education: Education[];
  research: Research[];
  achievements: Achievement[];
  contact: Contact | null;
}

export interface SectionConfig {
  id: string;
  title: string;
  order: number;
  enabled: boolean;
  icon?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface AuthUser {
  _id: string;
  username: string;
  email: string;
  role: string;
}

export interface LoginCredentials {
  identifier: string;
  password: string;
}

export interface AuthResponse {
  user: AuthUser;
  token: string;
}

export interface ThemeConfig {
  primary: string;
  secondary: string;
  accent: string;
  highlight: string;
  background: string;
  text: string;
}

export interface PortfolioConfig {
  theme: ThemeConfig;
  sections: SectionConfig[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}
