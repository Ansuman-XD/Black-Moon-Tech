import React, { useState, useEffect } from "react";
import "./Hero.css";
import AuthModal from "./AuthModal";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

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

  return (
    <>
      <section className="hero" id="home">
        
        <div className="hero-content">
          <div className="overlay">
            <div className="badge">
              <span className="dot"></span> Empowering the Digital Universe
            </div>

            <h1 className="hero-title">Welcome to Black Moon</h1>

            <div className="hero-buttons">
              <button className="btn btn-light">Explore Now</button>
              <button className="btn btn-dark">Learn More</button>
            </div>
          </div>

          <div className="branding">
            <h2 className="tagline">
              The AI Web Revolution Begins Here.<br />
              From Odisha to the World<br />
              <span className="highlight">Start your journey.</span>
            </h2>

            <p className="subtext">
              Supercharge your digital presence with <b>Black Moon</b>.
            </p>

            <div className="cta-form">
              <button className="cta-button" onClick={() => setShowModal(true)}>
                Log in to Get Started →
              </button>
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
