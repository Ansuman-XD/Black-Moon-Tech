import React, { useEffect, useRef, useState } from "react";
import "./Services.css";


/*
  Anime / Gamer Energetic theme.
  FINAL VERSION WITH 10 SERVICES + INTRO PARAGRAPH
*/

const servicesData = [
  {
    id: 1,
    title: "Custom Website Development",
    copyShort: "Fast, modern & scalable websites.",
    copyFull:
      "We build pixel-perfect, high-performance sites with React, Next.js, TypeScript and blazing-speed SSR.",
    button: "Explore",
    icon: "/icons/phone-desktop.svg",
    img: "/Custom Website Development.avif",
    badge: "Most Popular",
    rating: "4.9",
    slots: 3,
  },
  {
    id: 2,
    title: "UI / UX Design",
    copyShort: "Design systems & prototypes.",
    copyFull:
      "User-first design, interactive prototypes & design systems crafted to convert and scale.",
    button: "View Designs",
    icon: "/icons/design-ideas.svg",
    img: "/UIUXDesign.avif",
    badge: "Editor’s Pick",
    rating: "4.8",
    slots: 5,
  },
  {
    id: 3,
    title: "Full-Stack Apps",
    copyShort: "Web & mobile apps end-to-end.",
    copyFull:
      "APIs, auth, real-time systems, databases & scalable hosting pipelines for enterprise products.",
    button: "Build Now",
    icon: "/icons/code-block.svg",
    img: "/Full-Stack Apps.avif",
    badge: "Enterprise",
    rating: "4.7",
    slots: 2,
  },
  {
    id: 4,
    title: "AI Chatbots",
    copyShort: "AI assistants & automation.",
    copyFull:
      "Smart assistants & customer support bots powered by LLMs and custom fine-tuning.",
    button: "Start AI",
    icon: "/icons/bot.svg",
    img: "/AI Chatbots.avif",
    badge: "Hot",
    rating: "4.9",
    slots: 1,
  },

  // {
  //   id: 5,
  //   title: "Branding & Logo Design",
  //   copyShort: "Modern, bold digital brand identities.",
  //   copyFull:
  //     "We create premium logos, mascots, color palettes & brand stories with anime/gamer design principles.",
  //   button: "Create Brand",
  //   icon: "/icons/color-background.svg",
  //   img: "/service-bg/service-5.jpg",
  //   badge: "Trending",
  //   rating: "4.8",
  //   slots: 4,
  // },
  {
    id: 6,
    title: "Cloud Hosting & Deployment",
    copyShort: "Fast, secure, global hosting.",
    copyFull:
      "Deploy apps with auto-scaling, secure backups, CI/CD pipelines & global edge caching.",
    button: "Deploy Now",
    icon: "/icons/cloud-flow.svg",
    img: "/Cloud Hosting & Deployment.avif",
    badge: "Pro",
    rating: "4.7",
    slots: 6,
  },
  {
    id: 7,
    title: "SEO & Ranking Boost",
    copyShort: "Rank higher & get real traffic.",
    copyFull:
      "Advanced keyword strategy, speed optimization, schema markup, backlinks, & AI-powered content pipelines.",
    button: "Boost SEO",
    icon: "/icons/top-speed.svg",
    img: "/SEO & Ranking Boost.avif",
    badge: "High ROI",
    rating: "4.9",
    slots: 3,
  },
  // {
  //   id: 8,
  //   title: "Digital Marketing",
  //   copyShort: "Social media ads that convert.",
  //   copyFull:
  //     "Anime-style creatives, performance ads, UGC campaigns and A/B tested funnels built for ROAS scaling.",
  //   button: "Grow Now",
  //   icon: "/icons/megaphone-loud.svg",
  //   img: "/service-bg/service-8.jpg",
  //   badge: "Growth",
  //   rating: "4.8",
  //   slots: 2,
  // },
  {
    id: 9,
    title: "AI  AUTOMATION",
    copyShort: "Payments, AI APIs, auth, automation.",
    copyFull:
      "Stripe payments, OAuth login, AI APIs, automation pipelines, analytics dashboards & service integrations.",
    button: "Integrate",
    icon: "/icons/plug-connected.svg",
    img: "/AI Automation.avif",
    badge: "Tech",
    rating: "4.9",
    slots: 2,
  },
  {
    id: 10,
    title: "Cybersecurity & Audit",
    copyShort: "Protect your website & users.",
    copyFull:
      "Security audits, penetration tests, firewall setup, DDoS protection, malware cleanup & secure coding.",
    button: "Secure Now",
    icon: "/icons/shield-lock.svg",
    img: "/Cybersecurity & Audit.avif",
    badge: "Priority",
    rating: "5.0",
    slots: 1,
  },

  {
    id: 11,
    title: "AI Automation Workflows",
    copyShort: "Automate your entire business.",
    copyFull:
      "We build AI-powered automation pipelines that handle email replies, CRM updates, lead scoring, content generation, scheduling, and customer service workflows.",
    button: "Automate",
    icon: "/icons/arrow-sync-checkmark.svg",
    img: "\AI Automation Workflows.avif",
    badge: "New",
    rating: "4.9",
    slots: 3,
  },
  {
    id: 12,
    title: "AI Image Generation",
    copyShort: "Custom AI art for brands.",
    copyFull:
      "We create unique AI-generated illustrations, anime art, logos, thumbnails, and product visuals using advanced diffusion models and style-transfer pipelines.",
    button: "Generate Art",
    icon: "/icons/image-sparkle.svg",
    img: "/AI Image Generation.avif",
    badge: "Creative",
    rating: "4.8",
    slots: 2,
  },
  {
    id: 13,
    title: "AI Video Generation",
    copyShort: "Cinematic AI motion visuals.",
    copyFull:
      "High-quality AI-generated cinematic scenes, anime-style motion shots, and product videos using text-to-video and storyboard AI systems.",
    button: "Create Video",
    icon: "/icons/video-chat.svg",
    img: "AI Video Generation.avif",
    badge: "Trending",
    rating: "4.7",
    slots: 1,
  },
  {
    id: 14,
    title: "AI Voice Assistants",
    copyShort: "Build your own Jarvis.",
    copyFull:
      "Custom voice-controlled AI that listens, understands, and performs actions. Perfect for businesses, apps, websites, and automation.",
    button: "Build Assistant",
    icon: "/icons/mic-sparkle.svg",
    img: "AI Voice Assistants.avif",
    badge: "Hot",
    rating: "5.0",
    slots: 3,
  },
  {
    id: 15,
    title: "AI Chatbot Training",
    copyShort: "Fine-tune AI on your data.",
    copyFull:
      "We train AI chatbots using your company’s documents, FAQs, product manuals, emails, and website content for accurate and personalized support.",
    button: "Train Bot",
    icon: "/icons/books.svg",
    img: "/AI Chatbot Training.avif",
    badge: "AI Pro",
    rating: "4.9",
    slots: 2,
  },
  {
    id: 16,
    title: "AI API Integration",
    copyShort: "Add GPT, Vision, Speech to your app.",
    copyFull:
      "We integrate OpenAI, Claude, Gemini, Stability, Speech-to-Text, Vision AI, and embeddings into your existing website or mobile app.",
    button: "Integrate AI",
    icon: "/icons/cpu-sparkle.svg",
    img: "AI Content Generation.avif",
    badge: "Enterprise",
    rating: "4.8",
    slots: 4,
  },
  {
    id: 17,
    title: "AI Data Analytics",
    copyShort: "Understand your users instantly.",
    copyFull:
      "AI-powered dashboards that analyze customer behavior, sales patterns, heatmaps, sentiment, funnels, and business trends in real-time.",
    button: "Analyze",
    icon: "/icons/data-area.svg",
    img: "/AI Data Analytics.avif",
    badge: "Smart",
    rating: "4.9",
    slots: 3,
  },
  {
    id: 18,
    title: "AI Personalization",
    copyShort: "AI that adapts to users.",
    copyFull:
      "Dynamic AI personalization engines that tailor website UI, product recommendations, pricing, and content based on user behavior.",
    button: "Personalize",
    icon: "/icons/motion-play.svg",
    img: "/AI Personalization.avif",
    badge: "Advanced",
    rating: "4.8",
    slots: 4,
  },
  {
    id: 19,
    title: "AI Content Generation",
    copyShort: "Blogs, ads, captions & scripts.",
    copyFull:
      "We generate SEO-friendly blogs, social posts, ad copy, product descriptions, and YouTube scripts tailored to your brand style.",
    button: "Generate",
    icon: "/icons/edit-sparkle.svg",
    img: "/AI Content Generation.avif",
    badge: "Boost",
    rating: "4.9",
    slots: 6,
  },
  {
    id: 20,
    title: "Machine Learning Solutions",
    copyShort: "Custom ML models for business.",
    copyFull:
      "We build ML models for prediction, fraud detection, anomaly alerts, recommendation systems, NLP tasks, and image classification.",
    button: "Build Model",
    icon: "/icons/brain-circuit.svg",
    img: "/Machine Learning Solutions.avif",
    badge: "AI+",
    rating: "5.0",
    slots: 2,
  },
];



export default function Services() {
  const [visible, setVisible] = useState({});
  const cardsRef = useRef([]);
  const sliderRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(0);
  const [expanded, setExpanded] = useState({}); // mobile expand

  // Lazy reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = e.target.dataset.id;
            setVisible((p) => ({ ...p, [id]: true }));
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((c) => c && obs.observe(c));
    return () => obs.disconnect();
  }, []);

  // Detect center card
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const computeCenter = () => {
      const rect = slider.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      const children = Array.from(slider.children);

      let minDist = Infinity;
      let idx = 0;

      children.forEach((child, i) => {
        const r = child.getBoundingClientRect();
        const mid = r.left + r.width / 2;
        const diff = Math.abs(mid - center);
        if (diff < minDist) {
          minDist = diff;
          idx = i;
        }
      });

      setCenterIndex(idx);
    };

    slider.addEventListener("scroll", computeCenter, { passive: true });
    computeCenter();
    return () => slider.removeEventListener("scroll", computeCenter);
  }, []);

  const scrollToIndex = (i) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const children = slider.children;
    const idx = Math.max(0, Math.min(i, children.length - 1));
    const child = children[idx];

    const sliderRect = slider.getBoundingClientRect();
    const childRect = child.getBoundingClientRect();

    const offset =
      childRect.left +
      childRect.width / 2 -
      (sliderRect.left + sliderRect.width / 2);

    slider.scrollBy({ left: offset, behavior: "smooth" });
  };

  const toggleExpand = (id) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <section className="services-section theme-anime" id="services">
      <h2 className="services-heading">Our Services</h2>

      {/* ⭐ Anime/Gamer Intro Paragraph */}
      <p className="services-intro">
        At <span>Black Moon</span>, we craft digital experiences with the same
        energy, precision, and style as your favorite anime worlds — bold
        colors, sharp visuals, and game-like interactions.
        <br />
        From design to deployment, we build tech that feels alive.
      </p>

      {/* Arrows */}
      <button
        className="slider-arrow left-arrow"
        onClick={() => scrollToIndex(centerIndex - 1)}
      >
        ‹
      </button>

      <button
        className="slider-arrow right-arrow"
        onClick={() => scrollToIndex(centerIndex + 1)}
      >
        ›
      </button>

      {/* Cards */}
      <div className="page-content" ref={sliderRef}>
        {servicesData.map((s, i) => {
          const isVisible = visible[s.id];
          const isCentered = centerIndex === i;
          const isExpanded = expanded[s.id];

          return (
            <div
              className={`card-wrapper ${isVisible ? "show" : ""} ${
                isCentered ? "centered" : ""
              }`}
              key={s.id}
              data-id={s.id}
              ref={(el) => (cardsRef.current[i] = el)}
              onClick={() =>
                window.innerWidth <= 600 ? toggleExpand(s.id) : scrollToIndex(i)
              }
            >
              {!isVisible ? (
                <div className="shimmer" />
              ) : (
                <div className={`card ${isCentered ? "active" : ""}`}>
                  <div className="particles" />

                  <img src={s.icon} className="service-icon" alt="" />

                  <img src={s.img} className="bg-img" alt="" loading="lazy" />

                  <div className="content">
                    <div className="badges">
                      <span className="badge tag">{s.badge}</span>
                      <span className="badge rating">★ {s.rating}</span>
                      <span className="badge slots">⏳ {s.slots} slots</span>
                    </div>

                    <h3 className="title">{s.title}</h3>

                    <p className={`copy ${isExpanded ? "full" : "short"}`}>
                      {isExpanded ? s.copyFull : s.copyShort}
                    </p>

                    <div className="cta-row">
                      <button
                        className="btn primary"
                        onClick={(e) => {
                          e.stopPropagation();
                          alert(`${s.button} clicked!`);
                        }}
                      >
                        {s.button}
                      </button>

                      <button
                        className="btn ghost"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpand(s.id);
                        }}
                      >
                        Learn more
                      </button>
                    </div>
                  </div>

                  <div className="glow-layer" />
                  <div className="shine" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
