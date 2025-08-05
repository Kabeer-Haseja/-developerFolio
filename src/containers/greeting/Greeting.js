import React, { useEffect, useState } from "react";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";

export default function Greeting() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-container">
        {/* Animated Background Elements */}
        <div className="bg-animation">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
            <div className="shape shape-5"></div>
          </div>
          <div className="grid-pattern"></div>
        </div>

        <div className="greeting-content">
          <div className="greeting-text-section">
            {/* Professional Badge */}
            <div className={`professional-badge ${isVisible ? 'animate-fade-in-up' : ''}`}>
              <span className="badge-icon">👨‍💻</span>
              <span className="badge-text">Senior React Native Developer</span>
            </div>

            {/* Main Heading with Gradient */}
            <h1 className={`greeting-title ${isVisible ? 'animate-fade-in-up' : ''}`}>
              <span className="title-line-1">Hi there, I'm</span>
              <span className="title-line-2 text-gradient">Kabeer Haseja</span>
              <span className="typing-cursor">|</span>
            </h1>

            {/* Enhanced Subtitle */}
            <div className={`greeting-subtitle ${isVisible ? 'animate-fade-in-up' : ''}`}>
              <p className="subtitle-main">
                Crafting exceptional mobile experiences that drive business growth and user engagement
              </p>
              <div className="tech-highlights">
                <span className="tech-tag">React Native</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">Redux Toolkit</span>
                <span className="tech-tag">Firebase</span>
              </div>
            </div>

            {/* Stats Section */}
            <div className={`stats-section ${isVisible ? 'animate-fade-in-up' : ''}`}>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">1M+</span>
                <span className="stat-label">Users Impacted</span>
              </div>
            </div>

            {/* Social Media */}
            <div className={`social-section ${isVisible ? 'animate-fade-in-up' : ''}`}>
              <SocialMedia />
            </div>

            {/* Action Buttons */}
            <div className={`button-section ${isVisible ? 'animate-fade-in-up' : ''}`}>
              <Button 
                className="btn btn-primary main-button" 
                text="Let's Connect" 
                href="#contact" 
              />
              {greeting.resumeLink && (
                <Button 
                  className="btn btn-secondary main-button" 
                  text="View Resume" 
                  href={greeting.resumeLink} 
                  newTab={true}
                />
              )}
            </div>
          </div>

          {/* Modern Visual Element */}
          <div className="greeting-visual-section">
            <div className="visual-container">
              <div className="code-window">
                <div className="window-header">
                  <div className="window-controls">
                    <span className="control control-close"></span>
                    <span className="control control-minimize"></span>
                    <span className="control control-maximize"></span>
                  </div>
                  <div className="window-title">portfolio.js</div>
                </div>
                <div className="code-content">
                  <div className="code-line">
                    <span className="line-number">1</span>
                    <span className="code-text">
                      <span className="keyword">const</span> 
                      <span className="variable"> developer</span>
                      <span className="operator"> = </span>
                      <span className="punctuation">{'{'}</span>
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">2</span>
                    <span className="code-text">
                      <span className="property">  name</span>
                      <span className="punctuation">: </span>
                      <span className="string">'Kabeer Haseja'</span>
                      <span className="punctuation">,</span>
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">3</span>
                    <span className="code-text">
                      <span className="property">  skills</span>
                      <span className="punctuation">: [</span>
                      <span className="string">'React Native'</span>
                      <span className="punctuation">],</span>
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">4</span>
                    <span className="code-text">
                      <span className="property">  passion</span>
                      <span className="punctuation">: </span>
                      <span className="string">'Building Amazing Apps'</span>
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">5</span>
                    <span className="code-text">
                      <span className="punctuation">{'}'}</span>
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Floating Tech Icons */}
              <div className="floating-tech-icons">
                <div className="tech-icon tech-icon-1">⚛️</div>
                <div className="tech-icon tech-icon-2">📱</div>
                <div className="tech-icon tech-icon-3">🔥</div>
                <div className="tech-icon tech-icon-4">⚡</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-arrow">
            <span>Explore More</span>
            <div className="arrow-down"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
