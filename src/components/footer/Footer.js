import React from "react";
import "./Footer.scss";
import SocialMedia from "../socialMedia/SocialMedia";

export default function Footer() {
  return (
    <footer className="footer modern-footer">
      <div className="footer-content modern-footer-content">
        <div className="footer-section modern-footer-brand">
          <div className="footer-logo modern-footer-logo">
            <span className="logo-icon">🌐</span>
            <span className="logo-name">Kabeer Haseja</span>
          </div>
          <p className="footer-description modern-footer-description">
            Digital Creator & App Developer — Crafting seamless, elegant, and innovative digital experiences for a modern world.
          </p>
        </div>
        <div className="footer-section modern-footer-links">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section modern-footer-social">
          <h3>Connect</h3>
          <div className="footer-social modern-footer-social-icons">
            <SocialMedia />
          </div>
        </div>
      </div>
      <div className="footer-bottom modern-footer-bottom">
        <p className="footer-copyright">
          &copy; 2024 Kabeer Haseja. All rights reserved.
        </p>
        <p className="footer-made-with">
          Made with <span role="img" aria-label="love">❤️</span> using <span className="footer-tech">React</span>
        </p>
      </div>
    </footer>
  );
}
