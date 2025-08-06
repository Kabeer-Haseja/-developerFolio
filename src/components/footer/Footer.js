import React, {useContext} from "react";
import "./Footer.scss";
import SocialMedia from "../socialMedia/SocialMedia";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="modern-footer">
      <div className="footer-background">
        <div className="footer-grid-pattern"></div>
        <div className="footer-gradient-overlay"></div>
      </div>
      
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-bracket">&lt;</span>
              <span className="logo-name">Kabeer Haseja</span>
              <span className="logo-bracket">/&gt;</span>
            </div>
            <p className="footer-tagline">
              Full-Stack Developer & Mobile App Specialist
            </p>
            <p className="footer-description">
              Crafting digital experiences with modern technologies. 
              Passionate about building scalable, user-centric applications 
              that make a difference.
            </p>
            <div className="footer-status">
              <div className="status-indicator">
                <div className="status-dot"></div>
                <span>Available for new opportunities</span>
              </div>
            </div>
          </div>
          
          <div className="footer-connect-section">
            <h3 className="footer-section-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              Let's Connect
            </h3>
            <div className="footer-social">
              <SocialMedia />
            </div>
            <div className="footer-cta">
              <a href="#contact" className="footer-cta-button">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Start a Project
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>© {currentYear} Kabeer Haseja. All rights reserved.</p>
              <p className="footer-built-with">
                Built with 
                <span className="heart-icon">❤️</span> 
                using React & Modern Web Technologies
              </p>
            </div>
            <div className="footer-meta">
              <div className="footer-version">
                <span className="version-badge">v2.0</span>
              </div>
              <div className="footer-location">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Based in India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements for visual appeal */}
      <div className="footer-floating-elements">
        <div className="floating-code floating-code-1">{'<>'}</div>
        <div className="floating-code floating-code-2">{'{ }'}</div>
        <div className="floating-code floating-code-3">{'</>'}</div>
      </div>
    </footer>
  );
}
