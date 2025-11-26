// ==========================================
// ⚡ Premium Black Moon TechStack Section
// ==========================================

import React from "react";
import "./TechStack.css";

export default function TechStack() {
  const techStack = [
    { name: "HTML", file: "html-5.svg" },
    { name: "CSS", file: "css-3.svg" },
    { name: "Tailwind CSS", file: "tailwindcss-icon.svg" },
    { name: "Bootstrap", file: "bootstrap.svg" },
    { name: "JavaScript", file: "javascript.svg" },
    { name: "React", file: "react.svg" },
    { name: "Next.js", file: "nextjs-icon.svg" },
    { name: "TypeScript", file: "typescript-icon.svg" },
    { name: "Python", file: "python.svg" },
    { name: "Node.js", file: "nodejs-icon.svg" },
    { name: "Express.js", file: "express.svg" },
    { name: "MongoDB", file: "mongodb-icon.svg" },
    { name: "PostgreSQL", file: "postgresql.svg" },
    { name: "MySQL", file: "mysql.svg" },
    { name: "Git", file: "git-icon.svg" },
    { name: "GitHub", file: "github-icon.svg" },
    { name: "Docker", file: "docker-icon.svg" },
    { name: "Kubernetes", file: "kubernetes.svg" },
    { name: "Figma", file: "figma.svg" },
  ];

  const certifications = [
    { name: "AWS Cloud Practitioner", file: "aws.svg" },
    { name: "Azure Fundamentals", file: "microsoft-azure.svg" },
    { name: "Google Cloud Digital Leader", file: "google-cloud.svg" },
    { name: "DevOps Essentials", file: "gitlab.svg" },
    { name: "Cybersecurity Fundamentals", file: "fortinet.svg" },
    { name: "AI / ML Certification", file: "tensorflow.svg" },
    // { name: "Linux Essentials", file: "linux-tux.svg" },
    { name: "OpenAI Certification", file: "openai-icon.svg" },
  ];

  const cloudStack = [
    { name: "Compute – EC2, Azure VM, Cloud Run", file: "bare-metal-server.svg" },
    { name: "Storage – S3, Blob, GCS", file: "database.svg" },
    { name: "CI/CD – GitHub Actions, Azure Pipeline", file: "github-actions.svg" },
    { name: "Databases – RDS, DynamoDB, MongoDB", file: "postgresql.svg" },
    { name: "Containers – Docker & K8s", file: "docker-icon.svg" },
    { name: "Monitoring – CloudWatch, Grafana", file: "grafana.svg" },
  ];

  // Reusable card renderer
  const RenderCards = (list, delay = 0) =>
    list.map((item, i) => (
      <div
        key={i}
        className="tech-card icon-card fade-in-up"
        style={{ animationDelay: `${delay + i * 0.05}s` }}
      >
        <img
          src={`/icons/${item.file}`}
          alt={item.name}
          className="tech-icon"
          loading="lazy"
        />
        <span className="tech-label">{item.name}</span>
      </div>
    ));

  return (
    <section className="techstack-section" id="tech">

      <h2 className="tech-title fade-in-up" style={{ animationDelay: "0s" }}>
        Our Technical Power
      </h2>

      {/* TECH STACK BLOCK */}
      <div className="tech-grid-block fade-in-up" style={{ animationDelay: "0.2s" }}>
        <h3 className="section-subtitle">Tech Stack</h3>
        <div className="grid">{RenderCards(techStack, 0.2)}</div>
      </div>

      {/* CERTIFICATIONS BLOCK */}
      <div className="tech-grid-block fade-in-up" style={{ animationDelay: "0.4s" }}>
        <h3 className="section-subtitle">Certifications</h3>
        <div className="grid">{RenderCards(certifications, 0.4)}</div>
      </div>

      {/* CLOUD STACK BLOCK */}
      <div className="tech-grid-block fade-in-up" style={{ animationDelay: "0.6s" }}>
        <h3 className="section-subtitle">Cloud Stack</h3>
        <div className="grid">{RenderCards(cloudStack, 0.6)}</div>
      </div>
    </section>
  );
}
