// src/components/Projects.jsx
import React, { useEffect, useRef, useState, useCallback, memo } from "react";
import "./Projects.css";

const PROJECTS = [
   {
    title: "WeatherSphere",
    description: ["Live Weather API", "Geo Tracking", "Admin Panel"],
    image: "weatherapp.avif",
    folder: "images",
    link: "https://github.com/SAMARESH-PRADHAN/WeatherSphere",
    about:
      "Our platform provides real-time weather updates for any city, helping you stay informed at all times. It includes 5-day forecasts so you can plan your week efficiently. You’ll also get the latest weather news presented in clean. An interactive map displays live and forecasted weather in a visually engaging way. Historical temperature and rainfall charts let you track trends over time. Satellite data is integrated through Google Earth Engine. Forgot password functionality with OTP verification via email keeps your account secure. Finally, the admin dashboard provides user management, feedback statistics, and contact message tracking.",
    tech: ["HTML","CSS","Jquery", "OpenWeather API", "Google earth engine", "Chart.js"],
    screenshots: ["../public/ProjectImages/weather1_11zon.avif", "../public/ProjectImages/weather2_11zon.avif", "../public/ProjectImages/weather3_11zon.avif"],
  },
  {
    title: "Tourism Management System",
    description: ["Explore Destinations", "View Tour Packages", "Analytics From A Single Dashboard"],
    image: "Full-Stack Apps (1).avif",
    folder: "images",
    link: "https://github.com/Saswat-Kumar-Nayak/tourism-management-system",
    about:
      "The Tourism Management System is a web application designed to digitalize the workflow of a travel/tour agency. It allows users to discover destinations on an interactive map, view detailed tour packages, register/login securely, and make bookings online.The admin panel provides a complete back-office solution: administrators can manage users, destinations, tour packages, and bookings, as well as view feedback and contact queries. The system includes analytics such as total users/packages/bookings, rating distribution, and user registration trends, helping admins make data-driven decisions.",
    tech: ["jQuery", "Python (Flask)", "RESTful APIs", "PostgreSQL", "Authentication security"],
    screenshots: ["../public/ProjectImages/tourisim4_11zon.avif", "../public/ProjectImages/tourisim2_11zon.avif", "../public/ProjectImages/tourisim3_11zon.avif"],
  },
 
  {
    title: "Location Based Job Finder",
    description: ["Real-time Geolocation", "Interactive Maps", "Dynamic Job Filtering"],
    image: "ecommerce.avif",
    folder: "images",
    link: "https://github.com/SAMARESH-PRADHAN/Location-Based-Job-Finder",
    about:
      "The Location-Based Job Finder System is a smart, user-friendly web application that helps users discover jobs available near their current location or any selected area on the map. Using real-time geolocation, interactive maps, and dynamic job filtering, the system displays nearby job opportunities with detailed information such as role, company, salary, distance, and exact map position.",
    tech: ["JavaScript", "OpenLayers", "Flask (Python)", "PostgreSQL"],
    screenshots: ["../public/ProjectImages/jobfinder1_11zon.avif", "../public/ProjectImages/jobfinder3_11zon.avif", "../public/ProjectImages/jobfinder4_11zon.avif"],
  },
  {
    title: "HireSphere",
    description: ["Skill-based search", "API-based job results", "Employer job posting module"],
    image: "blackmoon.avif",
    folder: "images",
    link: "#",
    about:
      "A modern, user-friendly job search system designed with a clean, mobile-app–style UI, just like the design in the image.The interface is minimal, centered, and highly accessible—providing a seamless job-finding experience for freshers and professionals.",
    tech: ["React.js", "Framer Motion", "Node.js (Express)", "PostgreSQL / MySQL"],
    screenshots: ["../public/ProjectImages/flux1.avif", "../public/ProjectImages/flux2.avif", "../public/ProjectImages/flux3.avif"],
  },
  {
    title: "LunaAI Chat Assistant",
    description: ["OpenAI Integration", "Typing & Suggestions", "Conversational UI"],
    image: "ai.avif",
    folder: "images",
    link: "#",
    about:
      "An intelligent chat assistant that integrates with LLM APIs for contextual replies, inline suggestions, and adaptive message formatting. Includes conversation memory and plugin links.",
    tech: ["React", "OpenAI", "IndexedDB", "Socket.io"],
    screenshots: ["../public/ProjectImages/luna1.avif", "../public/ProjectImages/luna2.avif", "../public/ProjectImages/luna3.avif"],
  },
  {
    title: "Orion Task Manager",
    description: ["Drag & Drop", "Cloud Sync", "Productivity Focused"],
    image: "tasks.avif",
    folder: "images",
    link: "#",
    about:
      "A productivity-first task manager with drag & drop, offline-first sync, and smart scheduling. Designed to reduce context switching with focused workspaces and keyboard-first interactions.",
    tech: ["React", "PWA", "IndexedDB", "REST API"],
    screenshots: ["../public/ProjectImages/orion1.avif", "../public/ProjectImages/orion2.avif", "../public/ProjectImages/orion3.avif"],
  },
  {
    title: "QuantumDocs — AI PDF Analyzer",
    description: ["AI Summaries", "PDF Extraction", "Smart Search"],
    image: "pdfai.avif",
    folder: "images",
    link: "#",
    about:
      "An AI-powered PDF analyzer that extracts sections, generates concise summaries, and enables semantic search across documents. Ideal for research and knowledge work.",
    tech: ["Node.js", "Python", "PDF.js", "OpenAI"],
    screenshots: ["../public/ProjectImages/quantum1.avif", "../public/ProjectImages/quantum2.avif", "../public/ProjectImages/quantum3.avif"],
  },
  {
    title: "Nebula UI Component Library",
    description: ["Neon UI Kit", "Reusable Components", "Design Tokens"],
    image: "uikit.avif",
    folder: "images",
    link: "#",
    about:
      "A reusable UI component library with neon-themed tokens, accessible components, and theming support. Built for rapid prototyping of consistent interfaces.",
    tech: ["React", "TypeScript", "Storybook", "CSS Variables"],
    screenshots: ["../public/ProjectImages/nebula1.avif", "../public/ProjectImages/nebula2.avif", "../public/ProjectImages/nebula3.avif"],
  },
  {
    title: "FluxAPI — Backend Suite",
    description: ["Node.js + Express", "JWT Auth", "Performance-first"],
    image: "api.avif",
    folder: "images",
    link: "#",
    about:
      "A production-ready backend suite offering auth, rate-limiting, monitoring hooks and a plugin-based routes system. Designed to be small, fast and secure for modern web apps.",
    tech: ["Node.js", "Express", "PostgreSQL", "JWT"],
    screenshots: ["../public/ProjectImages/flux100.avif", "../public/ProjectImages/flux101.avif", "../public/ProjectImages/flux102.avif"],
  },
  {
    title: "Black Moon Mobile (PWA)",
    description: ["Installable", "Offline Support", "Fast UX"],
    image: "pwa.avif",
    folder: "images",
    link: "#",
    about:
      "A Progressive Web App variant of the Black Moon suite: offline pages, installable shell, service-worker caching strategies, and smooth mobile-first UX patterns.",
    tech: ["Node.js", "React.js", "PostgreSQL", "SQL"],
    screenshots: ["../public/ProjectImages/Blackmoon1.avif", "../public/ProjectImages/Blackmoon2.avif", "../public/ProjectImages/Blackmoon3.avif"],
  },
];

const Projects = () => {
  const wrapperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 650
  );

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState(null); // project object
  const [modalSlide, setModalSlide] = useState(0);

  // Resize listener
  useEffect(() => {
    if (typeof window === "undefined") return;
    let rafId = null;
    const onResize = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => setIsMobile(window.innerWidth < 650));
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Reveal animation
  useEffect(() => {
    const sec = document.getElementById("projects");
    if (!sec) return setRevealed(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(sec);
    return () => observer.disconnect();
  }, []);

  // Mobile scroll tracking (rAF optimised)
  useEffect(() => {
    const wrap = wrapperRef.current;
    if (!wrap) return;
    let ticking = false;
    const updateIndex = () => {
      const first = wrap.querySelector(".pm-card");
      if (!first) return;
      const gap = parseInt(getComputedStyle(wrap).gap || 16, 10);
      const cardWidth = first.getBoundingClientRect().width + gap;
      const index = Math.max(0, Math.round((wrap.scrollLeft || 0) / cardWidth));
      setActiveIndex(index);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateIndex);
      }
    };
    wrap.addEventListener("scroll", onScroll, { passive: true });
    updateIndex();
    return () => wrap.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  // Dot click scroll
  const handleDotClick = useCallback((i) => {
    const wrap = wrapperRef.current;
    if (!wrap) return;
    const first = wrap.querySelector(".pm-card");
    if (!first) return;
    const gap = parseInt(getComputedStyle(wrap).gap || 16, 10);
    const cardWidth = first.getBoundingClientRect().width + gap;
    wrap.scrollTo({ left: i * cardWidth, behavior: "smooth" });
    setActiveIndex(i);
  }, []);

  // Modal helpers
  const openModal = useCallback((project) => {
    setModalProject(project);
    setModalSlide(0);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setModalProject(null);
    setModalSlide(0);
  }, []);

  // lock scroll when modal open & restore focus
  const lastActiveRef = useRef(null);
  useEffect(() => {
    if (modalOpen) {
      lastActiveRef.current = document.activeElement;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      if (lastActiveRef.current instanceof HTMLElement) {
        lastActiveRef.current.focus();
      }
    }
  }, [modalOpen]);

  // keyboard navigation for modal
  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowRight") {
        setModalSlide((s) => {
          if (!modalProject) return s;
          return (s + 1) % modalProject.screenshots.length;
        });
      } else if (e.key === "ArrowLeft") {
        setModalSlide((s) => {
          if (!modalProject) return s;
          return (s - 1 + modalProject.screenshots.length) % modalProject.screenshots.length;
        });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen, modalProject, closeModal]);

  // Carousel controls
  const nextSlide = useCallback(() => {
    if (!modalProject) return;
    setModalSlide((s) => (s + 1) % modalProject.screenshots.length);
  }, [modalProject]);

  const prevSlide = useCallback(() => {
    if (!modalProject) return;
    setModalSlide((s) =>
      (s - 1 + modalProject.screenshots.length) % modalProject.screenshots.length
    );
  }, [modalProject]);

  // Render cards
  const renderCards = () =>
    PROJECTS.map((p, i) => (
      <article
        key={p.title + i}
        className={`pm-card ${revealed ? "show" : ""}`}
        style={{ ["--i"]: i }}
      >
        <div className="pm-img-box">
          <img
            src={`/${p.folder}/${p.image}`}
            alt={p.title}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="pm-info">
          <h3 className="pm-card-title">{p.title}</h3>

          <ul className="pm-bullets">
            {p.description.map((d, id) => (
              <li key={id}>{d}</li>
            ))}
          </ul>

          <div className="pm-actions">
            <button
              className="pm-btn"
              onClick={() => openModal(p)}
              aria-label={`Open details for ${p.title}`}
            >
              View Project →
            </button>

            {/* {p.link && (
              <a
                className="pm-btn pm-btn-outline"
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${p.title} in new tab`}
              >
                Live ↗
              </a>
            )} */}
          </div>
        </div>
      </article>
    ));

  return (
    <section id="projects" className="pm-container" aria-labelledby="projectsHeading">
      <h2 id="projectsHeading" className="pm-title">
        Featured Projects
      </h2>

      {isMobile && (
        <div className="pm-dots" aria-hidden={modalOpen}>
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              className={`pm-dot ${i === activeIndex ? "active" : ""}`}
              onClick={() => handleDotClick(i)}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      )}

      <div className="pm-grid" ref={wrapperRef}>
        {renderCards()}
      </div>

      {/* Modal */}
      {modalOpen && modalProject && (
        <div
          className="pm-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`${modalProject.title} details`}
          onClick={(e) => {
            // close when clicking on overlay, not the modal content
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="pm-modal">
            <header className="pm-modal-header">
              <h3>{modalProject.title}</h3>
              <button
                className="pm-modal-close"
                onClick={closeModal}
                aria-label="Close project details"
              >
                ✕
              </button>
            </header>

            <div className="pm-modal-body">
              <div>
                <div className="pm-carousel">
                  <button className="pm-carousel-btn left" onClick={prevSlide} aria-label="Previous">
                    ‹
                  </button>

                  <div className="pm-carousel-track" role="list">
                    {modalProject.screenshots.map((shot, idx) => (
                      <div
                        key={shot + idx}
                        className={`pm-slide ${idx === modalSlide ? "active" : ""}`}
                        role="listitem"
                        aria-hidden={idx === modalSlide ? "false" : "true"}
                      >
                        <img
                          src={`/${modalProject.folder}/${shot}`}
                          alt={`${modalProject.title} screenshot ${idx + 1}`}
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>

                  <button className="pm-carousel-btn right" onClick={nextSlide} aria-label="Next">
                    ›
                  </button>
                </div>

                <div className="pm-carousel-thumbs" aria-hidden={false}>
                  {modalProject.screenshots.map((shot, idx) => (
                    <button
                      key={shot + idx}
                      className={`pm-thumb ${idx === modalSlide ? "active" : ""}`}
                      onClick={() => setModalSlide(idx)}
                      aria-label={`Show screenshot ${idx + 1}`}
                    >
                      <img src={`/${modalProject.folder}/${shot}`} alt={`thumb ${idx + 1}`} />
                    </button>
                  ))}
                </div>
              </div>

              <section className="pm-modal-info">
                <h4>About</h4>
                <p>{modalProject.about}</p>

                <h4>Tech stack</h4>
                <div className="pm-tech-list">
                  {modalProject.tech.map((t) => (
                    <span key={t} className="pm-tech">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pm-modal-cta">
                  {modalProject.link && (
                    <a
                      className="pm-btn"
                      href={modalProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open Live Project ↗
                    </a>
                  )}
                  <button className="pm-btn pm-btn-outline" onClick={closeModal}>
                    Close
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default memo(Projects);
