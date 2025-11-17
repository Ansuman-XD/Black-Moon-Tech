// =============================================
// 🔥 Trust Section (Logos + Stats + Testimonials)
// =============================================

import React from "react";
import "./TrustSection.css";

export default function TrustSection() {
  const logos = [
    "logos:google-icon",
    "logos:amazon-icon",
    "logos:microsoft",
    "logos:netflix-icon",
    "logos:github-icon",
    "logos:figma",
    "logos:upwork",
    "logos:fiverr",
  ];

  const stats = [
    { number: "12+", label: "Projects Completed" },
    { number: "10+", label: "Happy Clients" },
    { number: "4.9⭐", label: "Average Rating" },
    { number: "1.5+ Years", label: "Experience" },
  ];

  const testimonials = [
    {
      name: "Amit Sharma",
      role: "Startup Founder",
      review:
        "Amazing work! The website felt premium, fast and modern. Their design sense is next level.",
      img: "https://i.pravatar.cc/100?img=1",
    },
    {
      name: "Riya Patel",
      role: "Business Owner",
      review:
        "Delivered before deadline with perfect quality. Very professional and creative team.",
      img: "https://i.pravatar.cc/100?img=5",
    },
    {
      name: "John Wilson",
      role: "Upwork Client",
      review:
        "Best developer I have worked with. Clean code, great communication, 10/10.",
      img: "https://i.pravatar.cc/100?img=13",
    },
  ];

  return (
    <section className="trust-section" id="trust">
      <h2 className="trust-title">Trusted By Leading Brands Of ODISHA</h2>

      {/* LOGOS */}
      <div className="logo-row">
        {logos.map((l, i) => (
          <img
            key={i}
            src={`https://api.iconify.design/${l}.svg`}
            className="trust-logo"
            alt="brand"
          />
        ))}
      </div>

      {/* STATS */}
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div key={i} className="stat-card">
            <h3 className="stat-number">{s.number}</h3>
            <p className="stat-label">{s.label}</p>
          </div>
        ))}
      </div>

      {/* TESTIMONIAL SLIDER */}
      <h3 className="testimonial-title">What Our Clients Say</h3>

      <div className="testimonial-slider" id="testimonialSlider">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <img src={t.img} alt={t.name} className="testimonial-img" />
            <p className="testimonial-text">“{t.review}”</p>
            <h4 className="testimonial-name">{t.name}</h4>
            <span className="testimonial-role">{t.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
