import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Saloni Tilekar — Mobile & Web Developer",
  author: "Saloni Tilekar",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
    { text: "Blog", href: "/blog" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
    { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
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
    {
      company: "JobGrate (Pre-launch)",
      position: "Software Engineer – Internship",
      startDate: "Apr 2025",
      endDate: "Present",
      summary: [
        "Developed data pipelines and web crawling tools to support the platform's growing job dataset with scalable backend logic.",
        "Contributed across the stack and handled edge cases with foresight to ensure long-term maintainability of the product.",
      ],
    },
  ],
  
  projects: [
    {
      name: "MockMouse – AI-Powered Web App Tester",
      summary: "Built a modular platform for UI testing and performance analytics using Next.js, FastAPI, PostgreSQL, and Docker on AWS.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "ChatBook – AI Group Study Room",
      summary: "Developed a real-time document Q&A and chat app with Flask, LangChain, OpenAI, Socket.IO, and secure Auth0 authentication.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "BalanciFi – Personal Finance App",
      summary: "Built a cross-platform finance tracker in Flutter with real-time sync, offline mode, gamification, and receipt scanning.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi, I'm Saloni Tilekar, a passionate Mobile and Web Developer with a knack for crafting seamless digital experiences. With a strong background in both Android and iOS development, as well as front-end web technologies, I thrive in the intersection where creativity meets technology.

      Over the years, I've honed my skills in building robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what's possible. My projects range from innovative mobile applications to responsive web designs, all with a focus on performance, security, and scalability.
    `,
    image: "/saloni-photo.jpg",
  },
};

// #5755ff
