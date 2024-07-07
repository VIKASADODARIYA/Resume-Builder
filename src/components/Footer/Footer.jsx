import React from "react";
import { useDarkMode } from "../../DarkModeContext";
import './Footer.css'

export default function Footer() {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <footer className={`footer ${isDarkMode ? "dark-mode" : ""}`}>
        <div className="footer">
          <a href="/about" className="navbar-link">
            About Us
          </a>
          <a href="/contact" className="navbar-link">
            Contact
          </a>
          <a href="/jobs" className="navbar-link">
            Jobs
          </a>
          <a href="/presskit" className="navbar-link">
            Press Kit
          </a>
        </div>
        <div className="footer">
          <i className="bi bi-envelope-at-fill"></i>
          <i className="bi bi-linkedin"></i>
          <i className="bi bi-youtube"></i>
          <i className="bi bi-facebook"></i>
        </div>
        <p>
          Copyright &copy; 2024 - All rights reserved by bookStore.com
        </p>
      </footer>
    </>
  );
}
