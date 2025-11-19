// -----------------------------------------------------
// BLACK MOON TECH — SUPER OPTIMIZED PROJECTS (SVG-safe)
// -----------------------------------------------------
import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";

const Projects = () => {
  const wrapperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showProjects, setShowProjects] = useState(false);

  // -----------------------------------------------------
  // PROJECT DATA (USE SVG IMAGES IN /public/images/)
  // -----------------------------------------------------
  const projectData = [
    {
      title: "Portfolio Website",
      description: [
        "A modern personal portfolio built using React with a neon UI theme.",
        "Fully responsive design for desktop, tablet, and mobile.",
        "Implemented scroll-triggered animations using GSAP."
      ],
      image: "portfolio.svg",
      link: "#",
    },
    {
      title: "Weather App",
      description: [
        "Real-time weather application using OpenWeather API.",
        "Dynamic UI updates based on user input and location.",
        "Dark-mode friendly neon UI."
      ],
      image: "weatherapp.svg",
      link: "#",
    },
    {
      title: "E-Commerce UI",
      description: [
        "Modern e-commerce UI built with React.",
        "Product listings, filters, and search functionality.",
        "Smooth hover effects and animations."
      ],
      image: "ecommerce.svg",
      link: "#",
    },
    {
      title: "UI Components Library",
      description: [
        "Reusable UI components library.",
        "Contains buttons, cards, modals, sliders, and forms.",
        "Fully responsive and customizable."
      ],
      image: "library.svg",
      link: "#",
    },
    {
      title: "Black Moon Dashboard",
      description: [
        "Futuristic neon dashboard UI with analytics widgets.",
        "Dynamic charts and data tables.",
        "Responsive and interactive layout."
      ],
      image: "blackmoon.svg",
      link: "#",
    },
    {
      title: "AI Chat Support System",
      description: [
        "AI-powered chat assistant built using React + OpenAI.",
        "Typing animation and chat history support.",
        "Designed in the Black Moon neon aesthetic."
      ],
      image: "ai.svg",
      link: "#",
    },
    {
      title: "Finance Tracker Dashboard",
      description: [
        "Track expenses and income visually with charts.",
        "Category filters and advanced analytics.",
        "Beautiful neon dashboard UI."
      ],
      image: "finance.svg",
      link: "#",
    },
    {
      title: "Task Manager App",
      description: [
        "Create, update, delete, and prioritize tasks.",
        "Built using LocalStorage and React state.",
        "Smooth GSAP animations for interactions."
      ],
      image: "task.svg",
      link: "#",
    },
    {
      title: "Music Player UI",
      description: [
        "Futuristic neon music player interface.",
        "Custom audio controls using HTML5 Audio API.",
        "Playlist support and animated waveform."
      ],
      image: "music.svg",
      link: "#",
    },
  ];

  // -----------------------------------------------------
  // Lazy-render projects only when visible
  // -----------------------------------------------------
  useEffect(() => {
    const section = document.getElementById("projects");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowProjects(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (section) observer.observe(section);
  }, []);

  // -----------------------------------------------------
  // Mobile optimization — load only 3 cards
  // -----------------------------------------------------
  const isMobile = window.innerWidth < 600;
  const displayedProjects = isMobile ? projectData.slice(0, 3) : projectData;

  // -----------------------------------------------------
  // Mobile swipe tracking
  // -----------------------------------------------------
  const handleScroll = () => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const cardWidth = wrapper.offsetWidth * 0.9 + 16;
    const index = Math.round(wrapper.scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    wrapper.addEventListener("scroll", handleScroll);
    return () => wrapper.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDotClick = (index) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const cardWidth = wrapper.offsetWidth * 0.9 + 16;
    wrapper.scrollTo({ left: index * cardWidth, behavior: "smooth" });
    setActiveIndex(index);
  };

  // -----------------------------------------------------
  // GSAP animations — loaded dynamically + idle callback
  // -----------------------------------------------------
  useEffect(() => {
    if (!showProjects) return;

    requestIdleCallback(async () => {
      const gsapModule = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsapModule.gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.batch(".new-project-item", {
        start: "top 85%",
        onEnter: (batch) => {
          gsapModule.gsap.to(batch, {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.15,
            duration: 1,
            ease: "power3.out",
          });
        },
      });
    });
  }, [showProjects]);

  // -----------------------------------------------------
  // RETURN JSX — conditional UI, NOT conditional hooks
  // -----------------------------------------------------
  return (
    <div className="new-project-container" id="projects">
      <h1 className="new-project-title">My Projects</h1>

      {!showProjects ? (
        <div className="loading-placeholder">
          <p>Loading Projects...</p>
        </div>
      ) : (
        <div className="new-project-blur-bg">
          <div className="new-project-dots">
            {displayedProjects.map((_, index) => (
              <span
                key={index}
                onClick={() => handleDotClick(index)}
                className={`dot ${index === activeIndex ? "active" : ""}`}
              ></span>
            ))}
          </div>

          <div className="new-project-wrapper" ref={wrapperRef}>
            {displayedProjects.map((project, index) => (
              <div
                key={index}
                className={`new-project-item ${index % 2 === 1 ? "reverse" : ""}`}
              >
                <div className="new-project-image-box">
                  <img
                    src={`/images/${project.image}`}
                    alt={project.title}
                    className="new-project-image"
                  />
                </div>

                <div className="new-project-content">
                  <h2>{project.title}</h2>

                  {project.description.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}

                  <a href={project.link} className="new-project-btn" target="_blank">
                    View Project →
                  </a>

                  <div className="new-project-line" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(Projects);
