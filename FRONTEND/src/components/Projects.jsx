// src/components/Projects.jsx
import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
  memo,
} from "react";
import "./Projects.css";
import PROJECTS from "../data/projects";

const Projects = () => {
  const wrapperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 650
  );

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState(null);
  const [modalSlide, setModalSlide] = useState(0);

  // Resize listener (rAF throttled)
  useEffect(() => {
    if (typeof window === "undefined") return;
    let rafId = null;

    const onResize = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setIsMobile(window.innerWidth < 650);
      });
    };

    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Reveal animation on scroll into view
  useEffect(() => {
    const sec = document.getElementById("projects");
    if (!sec) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(sec);
    return () => observer.disconnect();
  }, []);

  // Mobile scroll tracking (only when mobile to reduce CPU)
  useEffect(() => {
    if (!isMobile) {
      setActiveIndex(0);
      return;
    }

    const wrap = wrapperRef.current;
    if (!wrap) return;

    let ticking = false;

    const updateIndex = () => {
      const first = wrap.querySelector(".pm-card");
      if (!first) return;
      const gap = parseInt(getComputedStyle(wrap).gap || 16, 10);
      const cardWidth = first.getBoundingClientRect().width + gap;
      const index = Math.max(
        0,
        Math.round((wrap.scrollLeft || 0) / cardWidth)
      );
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

    return () => {
      wrap.removeEventListener("scroll", onScroll);
    };
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

  // Lock scroll when modal open & restore focus
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
          return (
            (s - 1 + modalProject.screenshots.length) %
            modalProject.screenshots.length
          );
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
      (s - 1 + modalProject.screenshots.length) %
      modalProject.screenshots.length
    );
  }, [modalProject]);

  // Pre-render cards with useMemo to avoid recalculation
  const cards = useMemo(
    () =>
      PROJECTS.map((p, i) => (
        <article
          key={p.id}
          className={`pm-card ${revealed ? "show" : ""}`}
          style={{ "--i": i }}
        >
          <div className="pm-img-box">
            <img
              src={p.cover}
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
            </div>
          </div>
        </article>
      )),
    [revealed, openModal]
  );

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
        {cards}
      </div>

      {/* Modal */}
      {modalOpen && modalProject && (
        <div
          className="pm-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`${modalProject.title} details`}
          onClick={(e) => {
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
                  <button
                    className="pm-carousel-btn left"
                    onClick={prevSlide}
                    aria-label="Previous screenshot"
                  >
                    ‹
                  </button>

                  <div className="pm-carousel-track" role="list">
                    {modalProject.screenshots.map((shot, idx) => (
                      <div
                        key={shot + idx}
                        className={`pm-slide ${idx === modalSlide ? "active" : ""}`}
                        role="listitem"
                        aria-hidden={idx !== modalSlide}
                      >
                        <img
                          src={shot}
                          alt={`${modalProject.title} screenshot ${idx + 1}`}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    ))}
                  </div>

                  <button
                    className="pm-carousel-btn right"
                    onClick={nextSlide}
                    aria-label="Next screenshot"
                  >
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
                      <img
                        src={shot}
                        alt={`Thumbnail ${idx + 1}`}
                        loading="lazy"
                        decoding="async"
                      />
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
                  {modalProject.link && modalProject.link !== "#" && (
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
