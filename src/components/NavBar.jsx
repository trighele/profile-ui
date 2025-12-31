import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

import bulbLight from "../assets/bulb-light.png";
import bulbDark from "../assets/bulb-dark.png";

export default function NavBar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Map routes to page names for active state
  const getPageFromPath = (pathname) => {
    if (pathname === "/") return "Home";
    if (pathname === "/resume") return "Resume";
    if (pathname === "/projects") return "Projects";
    if (pathname === "/aboutme") return "AboutMe";
    if (pathname === "/contact") return "Contact";
    return "Home";
  };
  
  const currentPage = getPageFromPath(location.pathname);

  // Function to toggle the side menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <>
      {/* Main Navbar */}
      <nav className="navbar">
        <div>
          <button 
            type="button"
            className="light-toggle" 
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            <img 
              src={theme === "dark" ? bulbDark : bulbLight} 
              alt={theme === "dark" ? "Light mode icon" : "Dark mode icon"}
            />
          </button>
        </div>

        {/* Desktop Navigation Links - Hidden on small screens */}
        <div className="desktop-nav-links">
          <Link
            to="/"
            className={currentPage === "Home" ? "active" : undefined}
          >
            <p>Home</p>
          </Link>
          <Link
            to="/resume"
            className={currentPage === "Resume" ? "active" : undefined}
          >
            <p>Resume</p>
          </Link>
          <Link
            to="/projects"
            className={currentPage === "Projects" ? "active" : undefined}
          >
            <p>Projects</p>
          </Link>
          <Link
            to="/aboutme"
            className={currentPage === "AboutMe" ? "active" : undefined}
          >
            <p>About Me</p>
          </Link>
          <Link
            to="/contact"
            className={currentPage === "Contact" ? "active" : undefined}
          >
            <p>Contact</p>
          </Link>
        </div>

        {/* Hamburger Icon - Hidden on large screens */}
        <div className="hamburger-icon-container">
          <button 
            type="button"
            onClick={toggleMenu} 
            className="hamburger-button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {/* Hamburger SVG Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              width="30"
              height="30"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Side Pop-Out Menu */}
      <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="side-menu-header">
          <span className="side-menu-title">Menu</span>
          <button 
            type="button"
            onClick={toggleMenu} 
            className="side-menu-close-button"
            aria-label="Close navigation menu"
          >
            {/* Close (X) SVG Icon */}
            <svg
              fill="none"
              width="15"
              height="15"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <nav className="side-menu-nav">
          <Link to="/" onClick={toggleMenu}>
            <p>Home</p>
          </Link>
          <Link to="/resume" onClick={toggleMenu}>
            <p>Resume</p>
          </Link>
          <Link to="/projects" onClick={toggleMenu}>
            <p>Projects</p>
          </Link>
          <Link to="/aboutme" onClick={toggleMenu}>
            <p>About Me</p>
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            <p>Contact</p>
          </Link>
        </nav>
      </div>

      {/* Overlay for when menu is open */}
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
}
