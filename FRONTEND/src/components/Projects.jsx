// src/components/Projects.jsx
import React, { useEffect, useRef, useState, useCallback } from "react";
import "./Projects.css";

const PROJECTS = [
  {
    title: "Black Moon Portfolio Platform",
    description: ["React + Vite", "Neon UI", "Premium Animations"],
    image: "/Full-Stack Apps (1).avif",
    folder: "images",
    link: "#",
  },
  {
    title: "HyperCast Weather Intelligence",
    description: ["Live Weather API", "Geo Tracking", "Animated UI"],
    image: "weatherapp.avif",
    folder: "images",
    link: "#",
  },
  {
    title: "NovaCart E-Commerce Interface",
    description: ["AI Filters", "Fast Checkout UX", "Product UI"],
    image: "/ecommerce.avif",
    folder: "images",
    link: "#",
  },
  {
    title: "Black Moon Analytics Dashboard",
    description: ["Real-time Charts", "Widget Composer", "Dark Theme"],
    image: "blackmoon.avif",
    folder: "images",
    link: "#",
  },
  {
    title: "LunaAI Chat Assistant",
    description: ["OpenAI Integration", "Typing & Suggestions", "Conversational UI"],
    image: "/ai.avif",
    folder: "images",
    link: "#",
  },
  {
    title: "Orion Task Manager",
    description: ["Drag & Drop", "Cloud Sync", "Productivity Focused"],
    image: "/tasks.avif",
    folder: "images",
    link: "#",
  },
  {
    title: "QuantumDocs — AI PDF Analyzer",
    description: ["AI Summaries", "PDF Extraction", "Smart Search"],
    image: "pdfai.avif",
    folder: "images",
    link: "#",
  },
  {
    title: "Nebula UI Component Library",
    description: ["Neon UI Kit", "Reusable Components", "Design Tokens"],
    image: "uikit.avif",
    folder: "images",
    link: "#",
  },
  {
    title: "FluxAPI — Backend Suite",
    description: ["Node.js + Express", "JWT Auth", "Performance-first"],
    image: "api.avif",
    folder: "images",
    link: "#",
  },
  {
    title: "Black Moon Mobile (PWA)",
    description: ["Installable", "Offline Support", "Fast UX"],
    image: "pwa.avif",
    folder: "images",
    link: "#",
  },
];

const Projects = () => {
  const wrapperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth < 650);

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

  // Mobile scroll tracking (rAF optimized)
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
  }, [isMobile, PROJECTS.length]);

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

  // Render cards
  const renderCards = () =>
    PROJECTS.map((p, i) => (
      <article
        key={p.title}
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

          <a className="pm-btn" href={p.link} target="_blank" rel="noopener noreferrer">
            View Project →
          </a>
        </div>
      </article>
    ));

  return (
    <section id="projects" className="pm-container">
      <h2 className="pm-title">Featured Projects</h2>

      {isMobile && (
        <div className="pm-dots">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              className={`pm-dot ${i === activeIndex ? "active" : ""}`}
              onClick={() => handleDotClick(i)}
            />
          ))}
        </div>
      )}

      <div className="pm-grid" ref={wrapperRef}>
        {renderCards()}
      </div>
    </section>
  );
};

export default React.memo(Projects);
