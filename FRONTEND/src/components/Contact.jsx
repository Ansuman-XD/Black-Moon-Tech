// Contact.jsx
import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <section id="contact" className="bm-contact-section" aria-labelledby="bm-contact-heading">
      <div className="bm-contact-inner">
        <h2 id="bm-contact-heading" className="bm-section-heading">
          Contact &amp; Social
        </h2>

        <div className="bm-social-row" role="list" aria-label="Social links">
          <article className="bm-card" role="listitem" aria-label="Instagram - stay connected">
            <div className="bm-card-icon insta" aria-hidden="true">
              <svg viewBox="0 0 448 512" width="72" height="72" role="img" aria-hidden="true">
                <defs>
                  <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#feda75" />
                    <stop offset="0.4" stopColor="#d62976" />
                    <stop offset="1" stopColor="#962fbf" />
                  </linearGradient>
                </defs>
                <rect rx="90" ry="90" x="40" y="40" width="368" height="368" fill="url(#g1)"></rect>
                <g transform="translate(100,100) scale(0.6)">
                  <path fill="#fff" d="M224 202.66A53.34 53.34 0 1 0 170.66 149.32 53.38 53.38 0 0 0 224 202.66Zm124.71-41a21 21 0 1 1-21-21 21 21 0 0 1 21 21zM398.8 80.6A99.64 99.64 0 0 0 321.38 3.2C287.32-6 225-6 225-6s-62.32 0-96.38 9.2A99.64 99.64 0 0 0 49.2 80.6C40 114.66 40 177 40 177s0 62.32 9.2 96.38A99.64 99.64 0 0 0 128.62 421.8C162.68 431 225 431 225 431s62.32 0 96.38-9.2A99.64 99.64 0 0 0 398.8 273.4C408 239.34 408 177 408 177s0-62.32-9.2-96.4z" />
                </g>
              </svg>
            </div>

            <h3 className="bm-card-title">Instagram</h3>
            <p className="bm-card-desc">Share visual stories and behind-the-scenes — follow us on Instagram.</p>

            <a
              className="bm-cta bm-cta-insta"
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram"
            >
              Follow
            </a>
          </article>

          <article className="bm-card" role="listitem" aria-label="Facebook - engage with friends">
            <div className="bm-card-icon fb" aria-hidden="true">
              <svg viewBox="0 0 320 512" width="72" height="72" role="img" aria-hidden="true">
                <circle cx="160" cy="160" r="140" fill="#1877f2" />
                <path fill="#fff" d="M189.6 225.6h30.2v-48.3h-30.2c0-12.3 5.4-40.8 42.3-40.8V96h-57c-59.7 0-65.3 42.4-65.3 62.9v36.6h-44v48.3h44v151.2h57V225.6z" transform="translate(0,40) scale(1.0)" />
              </svg>
            </div>

            <h3 className="bm-card-title">Facebook</h3>
            <p className="bm-card-desc">Join our community — news, events and product updates on Facebook.</p>

            <a
              className="bm-cta bm-cta-fb"
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook"
            >
              Visit
            </a>
          </article>

          <article className="bm-card" role="listitem" aria-label="YouTube - watch and learn">
            <div className="bm-card-icon yt" aria-hidden="true">
              <svg viewBox="0 0 576 512" width="72" height="72" role="img" aria-hidden="true">
                <rect x="18" y="80" rx="70" ry="70" width="540" height="320" fill="#ff0000" />
                <polygon points="230,160 410,256 230,352" fill="#fff" />
              </svg>
            </div>

            <h3 className="bm-card-title">YouTube</h3>
            <p className="bm-card-desc">Tutorials, demos and case studies on YouTube — subscribe to our channel.</p>

            <a
              className="bm-cta bm-cta-yt"
              href="https://youtube.com/channel/yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our YouTube channel"
            >
              Subscribe
            </a>
          </article>
        </div>

        <div className="bm-contact-block" aria-label="Contact details">
          {/* <img src="/assets/logo.png" alt="Black Moon logo" className="bm-mini-logo" /> */}
          <div className="bm-contact-rows">
            <a href="mailto:contact@blackmoon.com" className="bm-email">blackmoon2025@gmail.com</a>
            <a href="tel:+918123456789" className="bm-phone">+91 8260368742</a>
            <address className="bm-address">Bhubaneswar, Odisha, India</address>
          </div>
        </div>

        <p className="bm-seo">
          Black Moon Tech — web development, UI/UX design, mobile app development, AI chatbot, AI automation.
        </p>
      </div>
    </section>
  );
}
