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
    icon: "https://api.iconify.design/fluent/phone-desktop-24-regular.svg",
    img: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?auto=format&fit=crop&w=600&q=40",
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
    icon: "https://api.iconify.design/fluent/design-ideas-20-regular.svg",
    img: "https://images.unsplash.com/photo-1533903345306-15d1c30952de?auto=format&fit=crop&w=600&q=40",
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
    icon: "https://api.iconify.design/fluent/code-block-20-regular.svg",
    img: "https://images.unsplash.com/photo-1545243424-0ce743321e11?auto=format&fit=crop&w=600&q=40",
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
    icon: "https://api.iconify.design/fluent/bot-20-regular.svg",
    img: "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?auto=format&fit=crop&w=600&q=40",
    badge: "Hot",
    rating: "4.9",
    slots: 1,
  },

  // NEW CARDS
  {
    id: 5,
    title: "Branding & Logo Design",
    copyShort: "Modern, bold digital brand identities.",
    copyFull:
      "We create premium logos, mascots, color palettes & brand stories with anime/gamer design principles.",
    button: "Create Brand",
    icon: "https://api.iconify.design/fluent/color-background-20-regular.svg",
    img: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?auto=format&fit=crop&w=600&q=40",
    badge: "Trending",
    rating: "4.8",
    slots: 4,
  },
  {
    id: 6,
    title: "Cloud Hosting & Deployment",
    copyShort: "Fast, secure, global hosting.",
    copyFull:
      "Deploy apps with auto-scaling, secure backups, CI/CD pipelines & global edge caching.",
    button: "Deploy Now",
    icon: "https://api.iconify.design/fluent/cloud-flow-20-regular.svg",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=40",
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
    icon: "https://api.iconify.design/fluent/top-speed-20-regular.svg",
    img: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=600&q=40",
    badge: "High ROI",
    rating: "4.9",
    slots: 3,
  },
  {
    id: 8,
    title: "Digital Marketing",
    copyShort: "Social media ads that convert.",
    copyFull:
      "Anime-style creatives, performance ads, UGC campaigns and A/B tested funnels built for ROAS scaling.",
    button: "Grow Now",
    icon: "https://api.iconify.design/fluent/megaphone-loud-20-regular.svg",
    img: "https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&w=600&q=40",
    badge: "Growth",
    rating: "4.8",
    slots: 2,
  },
  {
    id: 9,
    title: "API Integrations",
    copyShort: "Payments, AI APIs, auth, automation.",
    copyFull:
      "Stripe payments, OAuth login, AI APIs, automation pipelines, analytics dashboards & service integrations.",
    button: "Integrate",
    icon: "https://api.iconify.design/fluent/plug-connected-20-regular.svg",
    img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=600&q=40",
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
    icon: "https://api.iconify.design/fluent/shield-lock-20-regular.svg",
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=40",
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
  icon: "https://api.iconify.design/fluent/arrow-sync-checkmark-20-regular.svg",
  img: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=600&q=40",
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
  icon: "https://api.iconify.design/fluent/image-sparkle-20-regular.svg",
  img: "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=600&q=40",
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
  icon: "https://api.iconify.design/fluent/video-chat-24-regular.svg",
  img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=40",
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
  icon: "https://api.iconify.design/fluent/mic-sparkle-20-regular.svg",
  img: "https://images.unsplash.com/photo-1581276879432-15a19d654956?auto=format&fit=crop&w=600&q=40",
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
  icon: "https://api.iconify.design/fluent/books-20-regular.svg",
  img: "https://images.unsplash.com/photo-1549921296-3c6b7f4f7f33?auto=format&fit=crop&w=600&q=40",
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
  icon: "https://api.iconify.design/fluent/cpu-sparkle-20-regular.svg",
  img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=600&q=40",
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
  icon: "https://api.iconify.design/fluent/data-area-20-regular.svg",
  img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=40",
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
  icon: "https://api.iconify.design/fluent/motion-play-20-regular.svg",
  img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=600&q=40",
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
  icon: "https://api.iconify.design/fluent/edit-sparkle-20-regular.svg",
  img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=40",
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
  icon: "https://api.iconify.design/fluent/brain-circuit-20-regular.svg",
  img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=40",
  badge: "AI+",
  rating: "5.0",
  slots: 2,
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
