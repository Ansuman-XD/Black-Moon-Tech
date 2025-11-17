// ==========================================
// 🔥 TechStack with More Icons + Small Cards
// ==========================================

import React from "react";
import "./TechStack.css";

export default function TechStack() {
  const techStack = [
    { name: "React", icon: "logos:react" },
    { name: "Next.js", icon: "logos:nextjs-icon" },
    { name: "JavaScript", icon: "logos:javascript" },
    { name: "TypeScript", icon: "logos:typescript-icon" },
    { name: "Python", icon: "logos:python" },
    { name: "Node.js", icon: "logos:nodejs-icon" },
    { name: "Express.js", icon: "logos:express" },
    { name: "HTML", icon: "logos:html-5" },
    { name: "CSS", icon: "logos:css-3" },
    { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    { name: "Bootstrap", icon: "logos:bootstrap" },
    { name: "Git", icon: "logos:git-icon" },
    { name: "GitHub", icon: "logos:github-icon" },
    { name: "Docker", icon: "logos:docker-icon" },
    { name: "Kubernetes", icon: "logos:kubernetes" },
    { name: "MongoDB", icon: "logos:mongodb-icon" },
    { name: "PostgreSQL", icon: "logos:postgresql" },
    { name: "MySQL", icon: "logos:mysql" },
    { name: "Figma", icon: "logos:figma" },
  ];

  const certifications = [
    { name: "AWS Cloud Practitioner", icon: "logos:aws" },
    { name: "Azure Fundamentals", icon: "logos:microsoft-azure" },
    { name: "Google Cloud Digital Leader", icon: "logos:google-cloud" },
    { name: "DevOps Essentials", icon: "logos:gitlab" },
    { name: "Cybersecurity Fundamentals", icon: "logos:fortinet" },
    { name: "AI / ML Certification", icon: "logos:tensorflow" },
    { name: "Linux Essentials", icon: "logos:linux-tux" },
    { name: "OpenAI Certification", icon: "logos:openai-icon" },
  ];

  const cloudStack = [
    { name: "Compute – EC2, Azure VM, Cloud Run", icon: "carbon:bare-metal-server" },
    { name: "Storage – S3, Blob, GCS", icon: "mdi:database" },
    { name: "CI/CD – GitHub Actions, Azure Pipeline", icon: "logos:github-actions" },
    { name: "Databases – RDS, DynamoDB, MongoDB", icon: "logos:postgresql" },
    { name: "Containers – Docker & K8s", icon: "logos:docker-icon" },
    { name: "Monitoring – CloudWatch, Grafana", icon: "logos:grafana" },
  ];

  return (
    <section className="techstack-section" id="tech">
      <h2 className="tech-title">Our Technical Power</h2>

      {/* TECH STACK */}
      <div className="tech-grid fade-in-up">
        <h3 className="section-subtitle">Tech Stack</h3>
        <div className="grid small-grid">
          {techStack.map((t, i) => (
            <div key={i} className="tech-card icon-card small-card">
              <img
                src={`https://api.iconify.design/${t.icon}.svg`}
                alt={t.name}
                className="tech-icon rotate"
              />
              <span className="tech-label">{t.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CERTIFICATIONS */}
      <div className="tech-grid fade-in-up delay-1">
        <h3 className="section-subtitle">Certifications</h3>
        <div className="grid small-grid">
          {certifications.map((c, i) => (
            <div key={i} className="tech-card icon-card small-card">
              <img
                src={`https://api.iconify.design/${c.icon}.svg`}
                alt={c.name}
                className="tech-icon rotate"
              />
              <span className="tech-label">{c.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CLOUD STACK */}
      <div className="tech-grid fade-in-up delay-2">
        <h3 className="section-subtitle">Cloud Stack</h3>
        <div className="grid small-grid">
          {cloudStack.map((cs, i) => (
            <div key={i} className="tech-card icon-card small-card wide">
              <img
                src={`https://api.iconify.design/${cs.icon}.svg`}
                alt={cs.name}
                className="tech-icon rotate"
              />
              <span className="tech-label">{cs.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
