// src/data/projects.js

const PROJECTS = [
  {
    id: "weather-sphere",
    title: "WeatherSphere",
    description: ["Live Weather API", "Geo Tracking", "Admin Panel"],
    cover: "/images/weatherapp.avif",
    link: "https://github.com/SAMARESH-PRADHAN/WeatherSphere",
    about:
      "Our platform provides real-time weather updates for any city, helping you stay informed at all times. It includes 5-day forecasts so you can plan your week efficiently. You’ll also get the latest weather news presented in clean. An interactive map displays live and forecasted weather in a visually engaging way. Historical temperature and rainfall charts let you track trends over time. Satellite data is integrated through Google Earth Engine. Forgot password functionality with OTP verification via email keeps your account secure. Finally, the admin dashboard provides user management, feedback statistics, and contact message tracking.",
    tech: ["HTML", "CSS", "Jquery", "OpenWeather API", "Google earth engine", "Chart.js"],
    screenshots: [
      "/ProjectImages/weather1_11zon.avif",
      "/ProjectImages/weather2_11zon.avif",
      "/ProjectImages/weather3_11zon.avif",
    ],
  },
  {
    id: "tourism-management",
    title: "Tourism Management System",
    description: ["Explore Destinations", "View Tour Packages", "Analytics From A Single Dashboard"],
    cover: "/images/Full-Stack Apps (1).avif",
    link: "https://github.com/Saswat-Kumar-Nayak/tourism-management-system",
    about:
      "The Tourism Management System is a web application designed to digitalize the workflow of a travel/tour agency. It allows users to discover destinations on an interactive map, view detailed tour packages, register/login securely, and make bookings online. The admin panel provides a complete back-office solution: administrators can manage users, destinations, tour packages, and bookings, as well as view feedback and contact queries. The system includes analytics such as total users/packages/bookings, rating distribution, and user registration trends, helping admins make data-driven decisions.",
    tech: ["jQuery", "Python (Flask)", "RESTful APIs", "PostgreSQL", "Authentication security"],
    screenshots: [
      "/ProjectImages/tourisim4_11zon.avif",
      "/ProjectImages/tourisim2_11zon.avif",
      "/ProjectImages/tourisim3_11zon.avif",
    ],
  },
  {
    id: "location-job-finder",
    title: "Location Based Job Finder",
    description: ["Real-time Geolocation", "Interactive Maps", "Dynamic Job Filtering"],
    cover: "/images/ecommerce.avif",
    link: "https://github.com/SAMARESH-PRADHAN/Location-Based-Job-Finder",
    about:
      "The Location-Based Job Finder System is a smart, user-friendly web application that helps users discover jobs available near their current location or any selected area on the map. Using real-time geolocation, interactive maps, and dynamic job filtering, the system displays nearby job opportunities with detailed information such as role, company, salary, distance, and exact map position.",
    tech: ["JavaScript", "OpenLayers", "Flask (Python)", "PostgreSQL"],
    screenshots: [
      "/ProjectImages/jobfinder1_11zon.avif",
      "/ProjectImages/jobfinder3_11zon.avif",
      "/ProjectImages/jobfinder4_11zon.avif",
    ],
  },
  {
    id: "hire-sphere",
    title: "HireSphere",
    description: ["Skill-based search", "API-based job results", "Employer job posting module"],
    cover: "/images/blackmoon.avif",
    link: "#",
    about:
      "A modern, user-friendly job search system designed with a clean, mobile-app–style UI, just like the design in the image. The interface is minimal, centered, and highly accessible—providing a seamless job-finding experience for freshers and professionals.",
    tech: ["React.js", "Framer Motion", "Node.js (Express)", "PostgreSQL / MySQL"],
    screenshots: [
      "/ProjectImages/flux1.avif",
      "/ProjectImages/flux2.avif",
      "/ProjectImages/flux3.avif",
    ],
  },
  {
    id: "luna-ai",
    title: "LunaAI Chat Assistant",
    description: ["OpenAI Integration", "Typing & Suggestions", "Conversational UI"],
    cover: "/images/ai.avif",
    link: "#",
    about:
      "An intelligent chat assistant that integrates with LLM APIs for contextual replies, inline suggestions, and adaptive message formatting. Includes conversation memory and plugin links.",
    tech: ["React", "OpenAI", "IndexedDB", "Socket.io"],
    screenshots: [
      "/ProjectImages/luna1.avif",
      "/ProjectImages/luna2.avif",
      "/ProjectImages/luna3.avif",
    ],
  },
  {
    id: "orion-tasks",
    title: "Orion Task Manager",
    description: ["Drag & Drop", "Cloud Sync", "Productivity Focused"],
    cover: "/images/tasks.avif",
    link: "#",
    about:
      "A productivity-first task manager with drag & drop, offline-first sync, and smart scheduling. Designed to reduce context switching with focused workspaces and keyboard-first interactions.",
    tech: ["React", "PWA", "IndexedDB", "REST API"],
    screenshots: [
      "/ProjectImages/orion1.avif",
      "/ProjectImages/orion2.avif",
      "/ProjectImages/orion3.avif",
    ],
  },
  {
    id: "quantum-docs",
    title: "QuantumDocs — AI PDF Analyzer",
    description: ["AI Summaries", "PDF Extraction", "Smart Search"],
    cover: "/images/pdfai.avif",
    link: "#",
    about:
      "An AI-powered PDF analyzer that extracts sections, generates concise summaries, and enables semantic search across documents. Ideal for research and knowledge work.",
    tech: ["Node.js", "Python", "PDF.js", "OpenAI"],
    screenshots: [
      "/ProjectImages/quantum1.avif",
      "/ProjectImages/quantum2.avif",
      "/ProjectImages/quantum3.avif",
    ],
  },
  {
    id: "nebula-ui",
    title: "Nebula UI Component Library",
    description: ["Neon UI Kit", "Reusable Components", "Design Tokens"],
    cover: "/images/uikit.avif",
    link: "#",
    about:
      "A reusable UI component library with neon-themed tokens, accessible components, and theming support. Built for rapid prototyping of consistent interfaces.",
    tech: ["React", "TypeScript", "Storybook", "CSS Variables"],
    screenshots: [
      "/ProjectImages/nebula1.avif",
      "/ProjectImages/nebula2.avif",
      "/ProjectImages/nebula3.avif",
    ],
  },
  {
    id: "flux-api",
    title: "FluxAPI — Backend Suite",
    description: ["Node.js + Express", "JWT Auth", "Performance-first"],
    cover: "/images/api.avif",
    link: "#",
    about:
      "A production-ready backend suite offering auth, rate-limiting, monitoring hooks and a plugin-based routes system. Designed to be small, fast and secure for modern web apps.",
    tech: ["Node.js", "Express", "PostgreSQL", "JWT"],
    screenshots: [
      "/ProjectImages/flux100.avif",
      "/ProjectImages/flux101.avif",
      "/ProjectImages/flux102.avif",
    ],
  },
  {
    id: "blackmoon-pwa",
    title: "Black Moon Mobile (PWA)",
    description: ["Installable", "Offline Support", "Fast UX"],
    cover: "/images/pwa.avif",
    link: "#",
    about:
      "A Progressive Web App variant of the Black Moon suite: offline pages, installable shell, service-worker caching strategies, and smooth mobile-first UX patterns.",
    tech: ["Node.js", "React.js", "PostgreSQL", "SQL"],
    screenshots: [
      "/ProjectImages/Blackmoon1.avif",
      "/ProjectImages/Blackmoon2.avif",
      "/ProjectImages/Blackmoon3.avif",
    ],
  },
];

export default PROJECTS;
