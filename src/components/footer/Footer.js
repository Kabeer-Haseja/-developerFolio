import React from "react";
import "./Footer.scss";
import SocialMedia from "../socialMedia/SocialMedia";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5s22.43-56.85,56.89-58.27c33.95-1.4,56.52,25.53,96.06,38.35,26.57,8.56,54.24,10.3,81.35,4.1C1199.5,52.91,1200,52.47,1200,52.47V0Z" opacity=".5" className="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
      </div>
      
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-bracket">&lt;</span>
              <span className="logo-name">Kabeer Haseja</span>
              <span className="logo-bracket">/&gt;</span>
            </div>
            <p className="footer-description">
              React Native Mobile App Developer with 5+ years of experience building fast, reliable, and scalable cross-platform applications.
            </p>
            <div className="footer-stats">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Success</span>
              </div>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h3 className="footer-section-title">Quick Links</h3>
              <ul className="footer-links-list">
                <li><a href="#skills" className="footer-link">Skills</a></li>
                <li><a href="#experience" className="footer-link">Experience</a></li>
                <li><a href="#projects" className="footer-link">Projects</a></li>
                <li><a href="#contact" className="footer-link">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3 className="footer-section-title">Services</h3>
              <ul className="footer-links-list">
                <li><a href="#" className="footer-link">Mobile Development</a></li>
                <li><a href="#" className="footer-link">Cross-Platform Apps</a></li>
                <li><a href="#" className="footer-link">UI/UX Design</a></li>
                <li><a href="#" className="footer-link">Consulting</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-connect">
          <h3 className="footer-section-title">Let's Connect</h3>
          <p className="footer-connect-text">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
          <div className="footer-social">
            <SocialMedia />
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="footer-copyright">
            © 2024 Kabeer Haseja. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <span className="footer-separator">•</span>
            <a href="#" className="footer-bottom-link">Terms of Service</a>
            <span className="footer-separator">•</span>
            <span className="footer-made-with">
              Made with <span className="heart">❤️</span> using React
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
