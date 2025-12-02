import React, { useEffect, useState } from "react";
import "./Hero.css";
import AuthModal from "./AuthModal";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  // Lazy-load background video AFTER page loads
  useEffect(() => {
    const source = document.querySelector("#bgVideoSource");
    const video = document.querySelector("#bgVideo");

    const actualSrc = source.getAttribute("data-src");
    if (actualSrc) {
      source.src = actualSrc;
      video.load();
    }
  }, []);

  const logos = [
    "/partnerLogo/part1.avif",
    "/partnerLogo\part2.avif",
    "/partnerLogo/part3.avif",
    "/partnerLogo/part4.avif",
    "/partnerLogo/part5.avif",
    "/partnerLogo/part9.avif",
    "/partnerLogo/part10.avif",
    "/partnerLogo/part56.avif",
  ];

  return (
    <>
      <section className="hero" id="home">
        
        {/* ========================== */}
        {/*  ⭐ SINGLE Background Video */}
        {/* ========================== */}
        <video
          id="bgVideo"
          className="video-bg"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/sakura-preview.jpg"   // optional placeholder
        >
          <source
            id="bgVideoSource"
            data-src="/sakura-3-compressed.webm"   // <-- correct Vite path
            type="video/webm"
          />
        </video>

        {/* ========================== */}
        {/*      MAIN HERO CONTENT     */}
        {/* ========================== */}
        <div className="hero-content">
          
          <div className="h-overlay">
            <div className="h-badge">
              <span className="dot"></span> Empowering the Digital Universe
            </div>

            <h1 className="hero-title">Welcome to Black Moon</h1>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-light">Explore Now</a>
              <a href="#services" className="btn btn-light">Learn More</a>
            </div>
          </div>

          <div className="branding">
            <h2 className="tagline">
              The AI Web Revolution Begins Here.
              <br />
              From Odisha to the World
              <br />
              <span className="highlight">Start your journey.</span>
            </h2>

            <p className="subtext">
              Supercharge your digital presence with <b>Black Moon</b> —
              futuristic automation and growth.
            </p>

            <div className="cta-form">
              <button className="cta-button" onClick={() => setShowModal(true)}>
                Log in to Get Started →
              </button>
            </div>
          </div>

        </div>

        {/* ========================== */}
        {/*         LOGO SLIDER        */}
        {/* ========================== */}
        <div className="h-logo">
          <h2 className="trust-title">Our Trusted Partners</h2>

          <div className="logo-slider">
            <div className="logo-track">
              {logos.concat(logos).map((l, i) => (
                <img key={i} src={l} className="trust-logo" alt="logo" />
              ))}
            </div>
          </div>
        </div>

      </section>

      <AuthModal
        show={showModal}
        onClose={() => setShowModal(false)}
        setUser={() => {}}
      />
    </>
  );
};

export default Hero;
