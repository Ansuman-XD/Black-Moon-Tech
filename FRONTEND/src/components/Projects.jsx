// src/components/Projects.jsx
import React, { useEffect, useRef, useState, useCallback } from "react";
import "./Projects.css";

const PROJECTS = [
  {
    title: "Portfolio Website",
    description: ["Modern React UI", "Responsive", "Neon Animations"],
    image: "../public/AI Automation.avif",
    link: "#",
  },
  {
    title: "Weather App",
    description: ["Live API", "Geo Location", "Dark UI"],
    image: "weatherapp.svg",
    link: "#",
  },
  {
    title: "E-Commerce UI",
    description: ["Filters", "Search", "UI Components"],
    image: "ecommerce.svg",
    link: "#",
  },
  {
    title: "Black Moon Dashboard",
    description: ["Charts", "Widgets", "Dark Theme"],
    image: "blackmoon.svg",
    link: "#",
  },
  {
    title: "AI Chat Support",
    description: ["OpenAI API", "Typing Effect"],
    image: "ai.svg",
    link: "#",
  },
];

const Projects = () => {
  const wrapperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 600);

  // Resize handler
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Reveal animation trigger
  useEffect(() => {
    const sec = document.getElementById("projects");
    if (!sec) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    obs.observe(sec);
  }, []);

  // Limit for mobile view
  const displayed = isMobile ? PROJECTS.slice(0, 3) : PROJECTS;

  // Mobile scroll tracking
  useEffect(() => {
    const wrap = wrapperRef.current;
    if (!wrap) return;

    const onScroll = () => {
      const cardWidth = wrap.offsetWidth * 0.86 + 16;
      const index = Math.round(wrap.scrollLeft / cardWidth);
      setActiveIndex(index);
    };

    wrap.addEventListener("scroll", onScroll);
    return () => wrap.removeEventListener("scroll", onScroll);
  }, [displayed.length]);

  // Dot click handler
  const handleDotClick = (i) => {
    const wrap = wrapperRef.current;
    if (!wrap) return;

    const cardWidth = wrap.offsetWidth * 0.86 + 16;
    wrap.scrollTo({ left: i * cardWidth, behavior: "smooth" });
  };

  return (
    <section id="projects" className="pm-container">
      <h2 className="pm-title">My Projects</h2>

      {/* Mobile Dots */}
      {isMobile && (
        <div className="pm-dots">
          {displayed.map((_, i) => (
            <button
              key={i}
              className={`pm-dot ${i === activeIndex ? "active" : ""}`}
              onClick={() => handleDotClick(i)}
            />
          ))}
        </div>
      )}

      <div className="pm-grid" ref={wrapperRef}>
        {displayed.map((p, i) => (
          <article key={i} className={`pm-card ${show ? "show" : ""}`}>
            {/* TOP IMAGE */}
            <div className="pm-img-box">
              <img
                src={`/images/${p.image}`}
                alt={p.title}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* OVERLAPPING CONTENT */}
            <div className="pm-info">
              <h3 className="pm-card-title">{p.title}</h3>

              <ul className="pm-bullets">
                {p.description.map((item, id) => (
                  <li key={id}>{item}</li>
                ))}
              </ul>

              <a className="pm-btn" href={p.link} target="_blank">
                View Project →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default React.memo(Projects);
