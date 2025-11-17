import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
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
        <source src="sakura-3-compressed.mp4" type="video/mp4" />
      </video>

      <div className="hero-content">

        {/* Left Overlay Content */}
        <div className="overlay">
          <div className="badge">
            <span className="dot"></span> Empowering the Digital Universe
          </div>

          <h1 className="hero-title">Welcome to Black Moon</h1>

          <div className="hero-buttons">
            <button className="btn btn-light" type="button">
              Explore Now
            </button>
            <button className="btn btn-dark" type="button">
              Learn More
            </button>
          </div>
        </div>

        {/* Right-side branding */}
        <div className="branding">
          <h2 className="tagline">
            The AI Web Revolution Begins Here.<br />
            From Odisha to the World<br />
            <span className="highlight">Start your journey.</span>
          </h2>

          <p className="subtext">
            Supercharge your digital presence with <b>Black Moon</b> — futuristic automation and growth.
          </p>

          <div className="cta-form">

            <input
              type="email"
              id="work-email"
              name="workEmail"
              placeholder="Work Email"
              className="email-input"
              autoComplete="email"
              aria-label="Work Email"
              inputMode="email"
            />

            <button className="cta-button" type="button">
              Get Started →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
