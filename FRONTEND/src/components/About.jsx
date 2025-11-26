// AboutNew.jsx
import React, { useEffect, useRef, useState } from "react";
import "./About.css";

const IDLE_TIMEOUT = 400;

export default function AboutNew() {
  const heroRef = useRef(null);
  const containerRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [typed, setTyped] = useState("");
  const [mounted, setMounted] = useState(false);
  const [replayTyping, setReplayTyping] = useState(false);
  const [isMobileListMode, setIsMobileListMode] = useState(false);
  const [centeredIndex, setCenteredIndex] = useState(0);
  const fullIntro = "We design living interfaces — fast, bold, adaptive.";

  // Typing (runs after lazy init)
  useEffect(() => {
    if (!replayTyping) return;
    let idx = 0;
    setTyped("");
    const id = setInterval(() => {
      idx += 1;
      setTyped(fullIntro.slice(0, idx));
      if (idx >= fullIntro.length) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, [replayTyping]);

  // Lazy mount when hero in view & idle
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) {
      const t = setTimeout(() => {
        setMounted(true);
        setReplayTyping(true);
      }, 600);
      return () => clearTimeout(t);
    }
    let idleHandle;
    const onIdle = () => {
      setTimeout(() => {
        setMounted(true);
        setReplayTyping(true);
      }, 120);
    };
    const idleCb =
      window.requestIdleCallback ||
      function (cb) {
        return setTimeout(cb, IDLE_TIMEOUT);
      };
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            idleHandle = idleCb(onIdle, { timeout: 1000 });
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(hero);
    return () => {
      obs.disconnect();
      if (window.cancelIdleCallback) window.cancelIdleCallback(idleHandle);
      else clearTimeout(idleHandle);
    };
  }, []);

  // Determine mobile list mode
  useEffect(() => {
    const checkMode = () => {
      setIsMobileListMode(window.innerWidth <= 980);
    };
    checkMode();
    window.addEventListener("resize", checkMode);
    return () => window.removeEventListener("resize", checkMode);
  }, []);

  // Card centering observer (used for mobile mode)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const children = Array.from(container.querySelectorAll(".ng-card"));
    if (!children.length) return;

    // If not mobile mode, clear centered classes & state
    if (!isMobileListMode) {
      children.forEach((c) => c.classList.remove("centered"));
      setCenteredIndex(0);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        // Choose entry with greatest intersectionRatio
        const visible = entries.filter((e) => e.isIntersecting);
        if (!visible.length) return;
        let best = visible[0];
        visible.forEach((e) => {
          if (e.intersectionRatio > best.intersectionRatio) best = e;
        });
        children.forEach((c) => c.classList.remove("centered"));
        const idx = children.indexOf(best.target);
        if (idx >= 0) {
          best.target.classList.add("centered");
          setCenteredIndex(idx);
        }
      },
      { root: container, threshold: [0.4, 0.6, 0.75] }
    );

    children.forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, [isMobileListMode, mounted]);

  // Mouse parallax for hero
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      const x = (clientX - (rect.left + rect.width / 2)) / rect.width;
      const y = (clientY - (rect.top + rect.height / 2)) / rect.height;
      setMouse({ x, y });
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("touchmove", onMove, { passive: true });
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("touchmove", onMove);
    };
  }, []);

  // Card hover handlers (tilt + sheen)
  const onCardMouseMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (py - 0.5) * -10;
    const ry = (px - 0.5) * 14;
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
    el.style.setProperty("--sx", `${(px - 0.5) * 90}px`);
    el.style.setProperty("--sy", `${(py - 0.5) * 90}px`);
    el.style.setProperty("--sheenX", `${px * 100}%`);
    el.style.setProperty("--sheenY", `${py * 100}%`);
    el.classList.add("hovered");
  };
  const onCardLeave = (e) => {
    const el = e.currentTarget;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
    el.style.setProperty("--sx", `0px`);
    el.style.setProperty("--sy", `0px`);
    el.style.setProperty("--sheenX", `50%`);
    el.style.setProperty("--sheenY", `50%`);
    el.classList.remove("hovered");
  };

  const tx = Math.round(mouse.x * 8);
  const ty = Math.round(mouse.y * 5);

  // cards
  const cards = [
    { title: "Motion Systems", text: "Micro-interactions and motion language that guide attention and delight.", tag: "Motion" },
    { title: "Adaptive UI", text: "Layouts that reshape themselves to content, device, and user intent.", tag: "Adaptive" },
    { title: "AI Workflows", text: "Smart pipelines that automate repetitive tasks while keeping humans in control.", tag: "AI" },
    { title: "Accessibility", text: "Design that includes — color, contrast, voice, and reduced-motion-first patterns.", tag: "A11y" },
    { title: "Performance", text: "Optimized builds, cache strategies and 60 FPS-first animations.", tag: "Fast" },
    { title: "Design Ops", text: "Component systems, tokens, and pipelines that scale design across teams.", tag: "DesignOps" },
  ];

  // Scroll to card by index smoothly
  const scrollToIndex = (i) => {
    const container = containerRef.current;
    if (!container) return;
    const children = Array.from(container.querySelectorAll(".ng-card"));
    const idx = Math.max(0, Math.min(i, children.length - 1));
    const child = children[idx];
    if (!child) return;
    // align child center within container
    const containerRect = container.getBoundingClientRect();
    const childRect = child.getBoundingClientRect();
    const offset = (childRect.left + childRect.width / 2) - (containerRect.left + containerRect.width / 2);
    container.scrollBy({ left: offset, behavior: "smooth" });
  };

  const scrollPrev = () => scrollToIndex(centeredIndex - 1);
  const scrollNext = () => scrollToIndex(centeredIndex + 1);

  return (
    <main className="ng-about" id="about">
      <section className={`ng-hero ${mounted ? "mounted" : "placeholder"}`} ref={heroRef} aria-label="About hero">
        <div className="ng-hero-inner" style={{ transform: `translate3d(${tx}px, ${ty}px, 0)` }}>
          <h1 className="ng-title" aria-label="We design living interfaces">
            <span className="ng-title-main">Designing</span>
            <span className="ng-title-accent">the next generation</span>
          </h1>

          <p className="ng-vision">
           BlackMoon Tech is a new-age IT solutions company from Odisha, built with the mission to
simplify technology for businesses. We empower brands with modern web development,
AI‑powered tools, automation systems, and digital transformation services.
Our focus is simple: build smarter solutions, deliver premium quality, and help
businesses grow with technology.
          </p>

          <p className="ng-intro" aria-live="polite">
            {mounted ? <span className="typed">{typed}</span> : <span className="shimmer-line short" />}
            <span className="cursor" aria-hidden />
          </p>
        </div>
      </section>

      <section className="ng-content">
        {/* mobile arrows (only visible in CSS at mobile sizes) */}
        <div className="mobile-nav" aria-hidden={!isMobileListMode}>
          <button className="mobile-arrow left" onClick={scrollPrev} aria-label="Previous card">‹</button>
          <button className="mobile-arrow right" onClick={scrollNext} aria-label="Next card">›</button>
        </div>

        <div className={`ng-container ${isMobileListMode ? "mobile" : "grid"}`} ref={containerRef} aria-live="polite" role="list">
          {cards.map((c, i) => (
            <article
              key={c.title}
              className={`ng-card ${mounted ? "reveal" : "skeleton"}`}
              tabIndex={0}
              onMouseMove={onCardMouseMove}
              onMouseLeave={onCardLeave}
              onFocus={(e) => e.currentTarget.classList.add("focus")}
              onBlur={(e) => e.currentTarget.classList.remove("focus")}
              style={{
                transitionDelay: `${i * 90}ms`,
                ["--rx"]: "0deg",
                ["--ry"]: "0deg",
                ["--sx"]: "0px",
                ["--sy"]: "0px",
                ["--sheenX"]: "50%",
                ["--sheenY"]: "50%",
              }}
              aria-labelledby={`card-${i}-title`}
              role="listitem"
            >
              <div className="ng-card-inner">
                {mounted ? (
                  <>
                    <div className="ng-card-tag">{c.tag}</div>
                    <h3 id={`card-${i}-title`} className="ng-card-title">{c.title}</h3>
                    <p className="ng-card-copy">{c.text}</p>
                  </>
                ) : (
                  <>
                    <div className="shimmer-pill" />
                    <div className="shimmer-line title" />
                    <div className="shimmer-line copy" />
                  </>
                )}
              </div>

              <div className="ng-sheen" aria-hidden style={{ left: "var(--sheenX)", top: "var(--sheenY)" }} />
            </article>
          ))}
        </div>

        {/* mobile dots indicator */}
        <div className="mobile-dots" role="tablist" aria-hidden={!isMobileListMode}>
          {cards.map((_, i) => (
            <button
              key={i}
              className={`dot ${centeredIndex === i ? "active" : ""}`}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to card ${i + 1}`}
              aria-pressed={centeredIndex === i}
              type="button"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
