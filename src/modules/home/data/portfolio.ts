import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export const NAV_LINKS = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'RESUME', href: '#resume' },
  { label: 'PROJECTS', href: '#work' },
  { label: 'CONTACT', href: '#contact' },
] as const;

export const PROFILE = {
  firstName: "Hi, I'm Nhat Nguyen",
  role: 'Full Stack Engineer',
  bio: `Full Stack Engineer specializing in React, Next.js, Node.js, NestJS, and Spring Boot. 
I enjoy building scalable web applications with clean architecture, intuitive user experiences, 
and maintainable code. Recently, I've also been exploring AI-powered applications, automation, 
and modern developer tools to create smarter software solutions.`,
  portrait: '/images/portrait.png',
} as const;

export const ABOUT_TEXT = `
I'm a Full Stack Engineer passionate about building modern web applications from frontend to backend.

My primary stack includes React, Next.js, TypeScript, Tailwind CSS, Node.js, NestJS, Java Spring Boot, MongoDB, PostgreSQL, and Redis. I enjoy designing scalable systems, building REST APIs, and creating responsive user interfaces with a strong focus on performance and maintainability.

Beyond traditional web development, I'm actively exploring AI application development, LLM integrations, workflow automation, and developer tooling. I believe great software is not only functional but also simple, reliable, and enjoyable to use.

Outside of coding, I enjoy learning new technologies, creating technical content, exploring AI trends, and continuously improving my engineering skills.
`;

export type Project = {
  title: string;
  tag: string;
  description: string;
  image: string;
  tech?: string[];
  links: {
    demo?: string;
    github?: string;
  };
};

export const PROJECTS: Project[] = [
  {
    tag: 'Personal · Full Stack',
    title: 'MyCeph — Orthodontic Cloud Platform',
    description:
      "A personal side project I designed, built and deployed on my own from end to end. A cloud web app that helps orthodontic clinics manage patients, treatment progress, appointments and clinical records — with a React/TypeScript frontend and a Node.js + MongoDB API. It's live and open source.",
    image: '/images/project-1.png',
    tech: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    links: {
      demo: 'https://myceph.vercel.app',
      github: 'https://github.com/Nhatnguyen150100/myceph-client',
    },
  },

  {
    tag: 'Full Stack',
    title: 'English Academy',
    description:
      'A full-stack English learning platform featuring a React Native (Expo) mobile app, a React web application, and a Node.js backend. The platform offers interactive courses, online exams, AI-assisted learning, blogging, gamification, multilingual support, and premium subscriptions.',
    image: '/images/project-2.png',
    tech: [
      'React Native',
      'Expo',
      'React',
      'Node.js',
      'Express',
      'TypeScript',
      'Redux Toolkit',
      'MongoDB',
    ],
    links: {
      github: 'https://github.com/Nhatnguyen150100/english-academy-mobile',
    },
  },

  {
    tag: 'Backend',
    title: 'Enterprise Spring Boot Boilerplate',
    description:
      'Designed and developed an enterprise-grade backend architecture using Spring Boot and Java. Implemented secure JWT authentication, role-based access control, Redis caching, database versioning with Flyway, RESTful APIs, monitoring, and scalable application patterns for modern cloud-ready services.',
    image: '/images/project-3.png',
    tech: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'JPA',
      'Hibernate',
      'MySQL',
      'Redis',
      'Flyway',
      'JWT',
      'Docker',
    ],
    links: {
      github: 'https://github.com/Nhatnguyen150100/spring-boot-boilerplate',
    },
  },
];

export const CONTACT_INFO = [
  {
    icon: Phone,
    label: '+84 866441501',
    href: 'tel:+84866441501',
  },
  {
    icon: Mail,
    label: 'nhatnguyen150100@gmail.com',
    href: 'mailto:nhatnguyen150100@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Hanoi, Vietnam',
    href: 'https://maps.app.goo.gl/RJDLQQuBLbZWyWzj9',
  },
] as const;

export const SOCIAL_LINKS = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/Nhatnguyen150100',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nh%E1%BA%A5t-nguy%E1%BB%85n-ab49292a0/',
  },
] as const;

export const CONTACT_COPY = {
  heading: "Let's Build Something Great Together",
  body: `Whether you're looking for a Full Stack Engineer, discussing a new project,
or simply want to connect, I'd love to hear from you. Feel free to reach out—I'm always open to new opportunities and collaborations.`,
} as const;

export type TimelineItem = {
  /** Role title or degree. */
  title: string;
  /** Company or school. */
  org: string;
  /** Optional small logo shown before the org name (path under /public). */
  logo?: string;
  /** Employment type or study mode, e.g. "Full-time". */
  kind?: string;
  /** e.g. "2018 — 2023" or "Aug 2024 — Present". */
  period?: string;
  location?: string;
  description?: string;
  /** Academic grade / classification, e.g. "Good". */
  grade?: string;
  /** Extracurricular / social activities line. */
  activities?: string;
  tags?: string[];
};

export const EXPERIENCE: TimelineItem[] = [
  {
    title: 'Frontend Developer',
    org: 'Solashi Holdings',
    kind: 'Full-time',
    period: 'Aug 2024 — Present',
    location: 'Hanoi, Vietnam',
    description:
      'Develop and maintain modern web applications: building responsive UI components, integrating REST APIs, optimizing performance, and collaborating with backend developers and designers to ship scalable, user-friendly products in an Agile environment.',
    tags: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'REST API'],
  },
  {
    title: 'Frontend Developer',
    org: 'Beedu',
    kind: 'Full-time',
    period: 'Aug 2023 — Aug 2024',
    location: 'Hanoi, Vietnam',
    description:
      'Built and maintained a store-management system in Vue.js — admin dashboards and modules for product, order, customer and revenue management. Also contributed to aiTriage™, an AI-powered chest-pain triage platform, building Flutter interfaces with realtime data and AI API integration.',
    tags: ['Vue.js', 'TypeScript', 'Flutter', 'Firebase', 'REST API'],
  },
  {
    title: 'Full Stack Developer',
    org: 'Medbrain Vietnam',
    kind: 'Part-time',
    period: 'Oct 2021 — Aug 2023',
    location: 'Hanoi, Vietnam',
    description:
      "Worked within the Medbrain team on the company's production clinical software for orthodontic practices, building and maintaining features across the React.js frontend and Node.js backend to deliver scalable, reliable healthcare solutions.",
    tags: ['React', 'Node.js', 'REST API'],
  },
];

export const EDUCATION: TimelineItem[] = [
  {
    title: "Engineer's Degree — Information Technology",
    org: 'Hanoi University of Science and Technology (HUST)',
    logo: '/images/logo-hust.jpg',
    period: 'Jun 2018 — Jun 2023',
    location: 'Hanoi, Vietnam',
    grade: 'Good',
    description:
      'Studied core Information Technology subjects including data structures, algorithms, database systems, web development, software engineering and computer networks.',
    activities:
      'Member of the IT Lab led by Ms. Le — software development, research activities and programming competitions.',
    tags: [
      'Algorithms',
      'Databases',
      'Software Engineering',
      'Computer Networks',
    ],
  },
];

export const CERTIFICATIONS: TimelineItem[] = [
  {
    title: 'JLPT N3 — Japanese',
    org: 'Japan Foundation & JEES',
    description:
      'Intermediate Japanese proficiency across reading, listening, grammar and vocabulary.',
    tags: ['Japanese', 'N3'],
  },
];
