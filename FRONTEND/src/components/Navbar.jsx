import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const hamburgerRef = useRef();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Disable scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (window.innerWidth <= 768) {
        if (
          menuRef.current &&
          !menuRef.current.contains(event.target) &&
          hamburgerRef.current &&
          !hamburgerRef.current.contains(event.target)
        ) {
          setIsOpen(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-left">
        <img
          src="\avatars\useblack.png"
          alt="Black Moon Logo"
          className="logo"
        />
      </div>

      {/* Right Menu */}
      <div ref={menuRef} className={`navbar-right ${isOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#services" onClick={toggleMenu}>Services</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>

      {/* Hamburger */}
      <div
        ref={hamburgerRef}
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
