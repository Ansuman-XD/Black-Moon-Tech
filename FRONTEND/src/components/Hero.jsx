import React, { useState, useEffect } from "react";
import "./Hero.css";
import AuthModal from "./AuthModal";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  // Lazy-load video (your upstream logic)
  useEffect(() => {
    const video = document.getElementById("bgVideo");
    const source = document.getElementById("bgSource");

    const realSrc = source?.getAttribute("data-src");
    if (realSrc) {
      source.setAttribute("src", realSrc);
      video.load();
    }
  }, []);

  // Logo slider (your stashed logic)
  const logos = [
    "../public/Logo/orsacLogo.svg",
    "../public/Logo/uncLogo.svg",
    "../public/Logo/usbmLogo.svg",
    "../public/Logo/orsacLogo.svg",
    "../public/Logo/uncLogo.svg",
    "../public/Logo/usbmLogo.svg",
    "../public/Logo/orsacLogo.svg",
    "../public/Logo/uncLogo.svg",
    "../public/Logo/usbmLogo.svg",
  ];

  return (
    <>
      <section className="hero" id="home">

        {/* Background Video */}
        <video
          className="video-bg"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          loading="lazy"
        >
          <source src="sakura-3-compressed.webm" type="video/mp4" />
        </video>

        <div className="hero-content">
          {/* Left Overlay Content */}
          <div className="h-overlay">
            <div className="h-badge">
              <span className="dot"></span> Empowering the Digital Universe
            </div>

            <h1 className="hero-title">Welcome to Black Moon</h1>

            <div className="hero-buttons">
              <button className="btn btn-light" type="button">
                <a href="#projects"> Explore Now </a>
              </button>
              <button className="btn btn-light" type="button">
                <a href="#services"> Learn More </a>
              </button>
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
              Supercharge your digital presence with <b>Black Moon</b> — futuristic automation and growth.
            </p>

            <div className="cta-form">
              <button className="cta-button" onClick={() => setShowModal(true)}>
                Log in to Get Started →
              </button>
            </div>
          </div>
        </div>

        <div className="h-logo">
          <h2 className="trust-title">Our Trusted Partners</h2>

          {/* LOGOS */}
          <div className="logo-slider">
            <div className="logo-track">
              {[...logos, ...logos].map((l, i) => (
                <img key={i} src={l} className="trust-logo" alt="brand" />
              ))}
            </div>
          </div>
        </div>

        {/* Lazy-loaded background video */}
        <video
          id="bgVideo"
          className="video-bg"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/sakura-preview.jpg"
        >
          <source
            id="bgSource"
            data-src="\sakura-3-compressed.webm"
            type="video/webm"
          />
        </video>
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
