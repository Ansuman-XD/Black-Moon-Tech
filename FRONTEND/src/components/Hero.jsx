import React, { useState, useEffect } from "react";
import "./Hero.css";
import AuthModal from "./AuthModal";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

<<<<<<< Updated upstream
  useEffect(() => {
    const video = document.getElementById("bgVideo");
    const source = document.getElementById("bgSource");

    // get real src from data-src
    const realSrc = source.getAttribute("data-src");

    if (realSrc) {
      source.setAttribute("src", realSrc);
      video.load();
    }
  }, []);
=======
  const logos = [
  "../public/Logo/orsacLogo.svg",
  "../public/Logo/uncLogo.svg",
  "../public/Logo/usbmLogo.svg",
  "../public/Logo/orsacLogo.svg",
  "../public/Logo/uncLogo.svg",
  "../public/Logo/usbmLogo.svg",
  "../public/Logo/orsacLogo.svg",
  "../public/Logo/uncLogo.svg",
  "../public/Logo/usbmLogo.svg"
  
];

>>>>>>> Stashed changes

  return (
    <>
      <section className="hero" id="home">
<<<<<<< Updated upstream
        
        <div className="hero-content">
=======
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
>>>>>>> Stashed changes
          <div className="overlay">
            <div className="badge">
              <span className="dot"></span> Empowering the Digital Universe
            </div>

            <h1 className="hero-title">Welcome to Black Moon</h1>

            <div className="hero-buttons">
<<<<<<< Updated upstream
              <button className="btn btn-light">Explore Now</button>
              <button className="btn btn-dark">Learn More</button>
=======
              <button className="btn btn-light" type="button">
                <a href="#projects"> Explore Now </a>
              </button>
              <button className="btn btn-light" type="button">
                <a href="#services"> Learn More </a>
              </button>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
              Supercharge your digital presence with <b>Black Moon</b>.
=======
              Supercharge your digital presence with <b>Black Moon</b> —
              futuristic automation and growth.
>>>>>>> Stashed changes
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
            {logos.map((l, i) => (
              <img
                key={i}
                src={l}
                className="trust-logo"
                alt="brand"
              />
            ))}
          </div>
          </div>
        </div>

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
