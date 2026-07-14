export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
}

export interface Technology {
  name: string;
  category: 'Web & Software' | 'CMS & Platforms' | 'Mobile, BI & IoT' | 'Staff Augmentation';
  iconName: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  details: string[];
  mockupType: 'laptop' | 'mobile';
  features: string[];
  image: string;
  link?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  initials: string;
  email?: string;
  avatar?: string;
}

