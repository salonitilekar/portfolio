import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Saloni Tilekar — Full-Stack Software Engineer",
  author: "Saloni Tilekar",
  description:
    "Full-stack software engineer based in San Francisco, USA. I build scalable applications with clean architecture, secure APIs, and responsive UI.",
  lang: "en",
  siteLogo: "/saloni-photo.jpg",
  navLinks: [
    { text: "Resume", href: "https://REPLACE_ME/resume", target: "_blank" },
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/saloni-tilekar" },
    { text: "Github", href: "https://github.com/salonitilekar" },
    { text: "Twitter", href: "https://x.com/salowni_07" },
    { text: "Devpost", href: "https://devpost.com/salonitilekar" },
    { text: "Youtube", href: "https://www.youtube.com/@DiaryOfSaloni" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://REPLACE_ME.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Saloni Tilekar",
    specialty: "Software Developer",
    summary:
      "Full-stack Developer based in San Francisco and M.S. Computer Science candidate at CSU Chico. I design and build scalable applications with clean architecture, secure APIs, and responsive UI. From backend systems at Athenahealth to AI-powered platforms, I engineer software that performs and lasts.",
    email: "saloni.tilekar01@gmail.com",
  },
  experience: [
    {
      company: "JobGrate",
      position: "Software Engineer – Internship",
      startDate: "Apr 2025",
      endDate: "Present",
      summary: [
        "Led a 3-member team building a full-stack platform connecting international job seekers with employers, using React, Flask, and MongoDB Atlas.",
        "Implemented CI/CD pipelines, Git workflows, and Agile practices, improving deployment efficiency and cross-team collaboration.",
        "Developed secure REST APIs with role-based access and JWT, ensuring extensibility and robust authentication.",
        "Built data pipelines and web crawling tools to support the platform's growing job dataset with scalable backend logic.",
      ],
    },
    {
      company: "Athenahealth",
      position: "Associate Member of Technical Staff (SDE)",
      startDate: "July 2022",
      endDate: "July 2024",
      summary: [
        "Optimized SQL queries and backend architecture for a high-load healthcare system, improving latency and reducing server load.",
        "Enhanced a VS Code extension using Java and TypeScript to meet evolving modeling requirements with precision.",
        "Collaborated across DevOps and QA teams to maintain robust CI/CD pipelines and deliver high-quality code through code reviews.",
      ],
    },
  ],
  
  projects: [
    {
      name: "MockMouse – AI-Powered Web App Tester",
      summary: "Built a modular platform for UI testing and performance analytics using Next.js, FastAPI, PostgreSQL, and Docker on AWS.",
      linkPreview: "https://REPLACE_ME/mockmouse",
      linkSource: "https://github.com/REPLACE_ME/mockmouse",
      image: "/spotifu.png",
    },
    {
      name: "ChatBook – AI Group Study Room",
      summary: "Developed a real-time document Q&A and chat app with Flask, LangChain, OpenAI, Socket.IO, and secure Auth0 authentication.",
      linkPreview: "https://REPLACE_ME/chatbook",
      linkSource: "https://github.com/REPLACE_ME/chatbook",
      image: "/shopify-clon.png",
    },
    {
      name: "BalanciFi – Personal Finance App",
      summary: "Built a cross-platform finance tracker in Flutter with real-time sync, offline mode, gamification, and receipt scanning.",
      linkPreview: "https://REPLACE_ME/balancifi",
      linkSource: "https://github.com/REPLACE_ME/balancifi",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi, I'm Saloni Tilekar, a full-stack software engineer who enjoys building scalable applications with clean architecture, secure APIs, and responsive UI. I work across the stack — from backend systems and data pipelines to polished front-end experiences — and I care about software that performs and lasts.

      My experience spans backend optimization for a high-load healthcare system at Athenahealth, leading a small team on an AI-powered job platform at JobGrate, and shipping side projects with modern tooling. Whatever the layer, my focus stays on performance, security, and maintainability.
    `,
    image: "/saloni-photo.jpg",
  },
};

// #5755ff
