import React from "react";
import "./Footer.scss";
import SocialMedia from "../socialMedia/SocialMedia";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <span className="grey-color">&lt;</span>
            <span className="logo-name">Kabeer Haseja</span>
            <span className="grey-color">/&gt;</span>
          </div>
          <p className="footer-description">
            React Native Mobile App Developer with 5+ years of experience building fast, reliable, and scalable cross-platform applications.
          </p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Connect</h3>
          <div className="footer-social">
            <SocialMedia />
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2024 Kabeer Haseja. All rights reserved.
        </p>
        <p className="footer-made-with">
          Made with ❤️ using React
        </p>
      </div>
    </footer>
  );
}
