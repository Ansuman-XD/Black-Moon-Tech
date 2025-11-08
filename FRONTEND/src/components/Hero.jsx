import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Background Video */}
      <video className="video-bg" autoPlay loop muted playsInline>
        <source src="sakura 3.mp4" type="video/mp4" />
      </video>

      {/* Left Overlay Content */}
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

      {/* Right-side branding (NEW STYLE) */}
      <div className="branding">
        <h2 className="tagline">
        The AI Web Revolution Begins Here.<br />
          From Odisha to the World<br />
          
          <span className="highlight">Start your journey .</span>
        </h2>

        <p className="subtext">
          Supercharge your digital presence with <b>Black Moon</b> — the platform built
          for futuristic marketing, automation, and growth. Get started free today.
        </p>

        <div className="cta-form">
          <input type="email" placeholder="Work Email" className="email-input" />
          <button className="cta-button">Get Started →</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
