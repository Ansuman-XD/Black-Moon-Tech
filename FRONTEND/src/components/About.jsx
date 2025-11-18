import React, { useEffect, useRef, useState } from "react";
import "./About.css";

/**
 * ScrollFloatText
 * - Splits text into chars and applies subtle translateY while in viewport.
 * - Exposes a pop animation by adding class .sf-pop (JS triggers it).
 */
const ScrollFloatText = ({ text = "", intensity = 36, className = "" }) => {
  const rootRef = useRef(null);
  const rafRef = useRef(null);
  const inViewRef = useRef(false);
  const chars = Array.from(text);

  // update positions based on viewport position
  const update = () => {
    const el = rootRef.current;
    if (!el || !inViewRef.current) return;
    const rect = el.getBoundingClientRect();
    const viewportH = window.innerHeight || document.documentElement.clientHeight;
    const rel = ((rect.top + rect.height / 2) - viewportH / 2) / (viewportH / 2);
    const clamped = Math.max(-1.2, Math.min(1.2, rel));
    const spans = el.querySelectorAll(".sf-char");
    spans.forEach((sp, i) => {
      const dir = (i % 2 === 0) ? 1 : -1;
      const idxMul = (i / spans.length) * 1.6 + 0.12;
      const y = clamped * intensity * dir * idxMul;
      sp.style.transform = `translateY(${y}px)`;
      sp.style.opacity = `${1 - Math.min(Math.abs(clamped) * 0.55, 0.55)}`;
    });
  };

  const loop = () => {
    update();
    rafRef.current = requestAnimationFrame(loop);
  };

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        inViewRef.current = entry.isIntersecting;
        if (inViewRef.current) {
          if (!rafRef.current) rafRef.current = requestAnimationFrame(loop);
        } else {
          if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
          }
          // reset transforms on leave
          const spans = el.querySelectorAll(".sf-char");
          spans.forEach(sp => { sp.style.transform = ""; sp.style.opacity = ""; });
        }
      });
    }, { threshold: [0, 0.15, 0.5] });

    io.observe(el);
    window.addEventListener("resize", update, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("resize", update);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // pop animation: add class .sf-pop on container to trigger CSS fallback + optional inline stagger
  const popOnce = () => {
    const el = rootRef.current;
    if (!el) return;
    // set per-character transition delays via style attribute for a nice sweep
    const spans = el.querySelectorAll(".sf-char");
    spans.forEach((sp, i) => {
      sp.style.transition = `transform 520ms cubic-bezier(.2,.9,.2,1) ${i * 12}ms, opacity 420ms ease ${i * 12}ms`;
      sp.style.transform = `translateY(-12px)`;
      sp.style.opacity = "1";
    });
    // then reset after
    setTimeout(() => {
      spans.forEach((sp) => {
        sp.style.transform = "";
        sp.style.transition = "";
      });
      // briefly use the CSS fallback class for extra visual consistency
      el.classList.add("sf-pop");
      setTimeout(() => el.classList.remove("sf-pop"), 820);
    }, 720);
  };

  // expose pop function on the element for parent to call if needed
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    el.__popOnce = popOnce;
    return () => { if (el) el.__popOnce = undefined; };
  }, []);

  return (
    <div ref={rootRef} className={`scroll-float ${className}`}>
      {chars.map((ch, i) => (
        <span key={i} className="sf-char" aria-hidden={ch === " "}>
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </div>
  );
};

/**
 * About component
 * - Smooth-scrolls on nav click
 * - Triggers pop animation on nav click
 * - Animates counters when section scrolls into view
 * - Adds short hover-active state on nav-click for visual "re-render" pop
 */
const About = () => {
  const sectionRef = useRef(null);
  const scrollFloatRef = useRef(null); // will point to the DOM node with .scroll-float
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [reach, setReach] = useState(0);

  // counters: animate once when About enters viewport
  useEffect(() => {
    let mounted = true;
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const easeUp = (target, setter, duration = 1000) => {
            const start = Date.now();
            const tick = () => {
              const now = Date.now();
              const progress = Math.min((now - start) / duration, 1);
              const value = Math.round(target * (1 - Math.pow(1 - progress, 3)));
              if (mounted) setter(value);
              if (progress < 1) requestAnimationFrame(tick);
            };
            tick();
          };
          easeUp(120, setClients, 1200);
          setTimeout(() => easeUp(48, setProjects, 1000), 160);
          setTimeout(() => easeUp(320, setReach, 1400), 340);
          io.disconnect();
        }
      });
    }, { threshold: 0.25 });

    if (sectionRef.current) io.observe(sectionRef.current);
    return () => { mounted = false; io.disconnect(); };
  }, []);

  // Handle nav clicks: smooth scroll + pop + hover-active flash
  useEffect(() => {
    const navLinks = Array.from(document.querySelectorAll('a[href="#about"]'));

    const handler = (e) => {
      // prevent default so we can control scroll timing precisely
      e.preventDefault();

      // smooth scroll to About
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      // after a short delay (allow scroll), trigger pop animation and hover-active flash
      const doPop = () => {
        const sf = document.querySelector("#about .scroll-float");
        const aboutEl = document.getElementById("about");
        // pop chars via function if available
        if (sf && sf.__popOnce) {
          try { sf.__popOnce(); } catch (err) { /* ignore */ }
        } else if (sf) {
          // fallback: add CSS class that triggers CSS fallback animation
          sf.classList.add("sf-pop");
          setTimeout(() => sf.classList.remove("sf-pop"), 900);
        }

        // add hover-active to section for short visual pop
        if (aboutEl) {
          aboutEl.classList.add("hover-active");
          setTimeout(() => aboutEl.classList.remove("hover-active"), 720);
        }
      };

      // delay is tuned to match smooth scroll timing on most devices
      setTimeout(doPop, 350);
    };

    navLinks.forEach(lnk => lnk.addEventListener("click", handler));
    return () => navLinks.forEach(lnk => lnk.removeEventListener("click", handler));
  }, []);

  // Also play a small pop when user reaches the section by scrolling directly (IntersectionObserver)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // call pop on float text
          const sf = document.querySelector("#about .scroll-float");
          if (sf && sf.__popOnce) {
            try { sf.__popOnce(); } catch (err) {}
          }
          // small visual accent
          el.classList.add("hover-active");
          setTimeout(() => el.classList.remove("hover-active"), 900);
          io.disconnect();
        }
      });
    }, { threshold: 0.35 });

    io.observe(el);
    return () => io.disconnect();
  }, []);

  // helper: attach ref to the DOM .scroll-float container after mount
  useEffect(() => {
    const sf = document.querySelector("#about .scroll-float");
    if (sf) scrollFloatRef.current = sf;
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef} aria-label="About Black Moon">
      {/* top glow line */}
      <div className="about-divider top" />

      <div className="about-container">
        <div className="about-left">
          <div className="about-label">ABOUT</div>

          <h2 className="about-heading">
            {/* ScrollFloatText does the char splitting + in-view float */}
            <ScrollFloatText text={"Who We Are — The Black Moon Vision"} className="about-heading scroll-floating" intensity={34} />
          </h2>

          <p className="about-text">
            We build modern Web experiences with AI-driven innovation, automation,
            and beautiful UI. From Odisha to the world — we empower brands with
            technology, creativity, and futuristic digital solutions.
          </p>

          <ul className="about-points" aria-hidden={false}>
            <li>AI-Powered Digital Products</li>
            <li>Clean & Modern UI/UX Design</li>
            <li>Fast and Scalable Web Systems</li>
            <li>Automation for Business Workflow</li>
          </ul>

          <div className="about-stats">
            <div className="stat-box">
              <div className="stat-num">{clients}+</div>
              <div className="stat-label">Clients</div>
            </div>

            <div className="stat-box">
              <div className="stat-num">{projects}+</div>
              <div className="stat-label">Projects</div>
            </div>

            <div className="stat-box">
              <div className="stat-num">{reach}K</div>
              <div className="stat-label">Monthly Reach</div>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="about-glass">
            <div className="glass-title">What We Do</div>
            <div className="glass-sub">
              We blend clean design, automation, AI and full-stack development to create products users love.
            </div>

            <div className="feature-list">
              <div className="feature-item">
                <div className="feature-icon" />
                <div className="feature-content">
                  <h4>AI Integrated Systems</h4>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon" />
                <div className="feature-content">
                  <h4>Ultra Modern Web Apps</h4>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon" />
                <div className="feature-content">
                  <h4>Automation & Growth Tools</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="about-neon" />
        </div>
      </div>

      {/* bottom glow line */}
      <div className="about-divider bottom" />
    </section>
  );
};

export default About;
