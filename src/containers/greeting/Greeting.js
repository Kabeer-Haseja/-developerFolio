import React from "react";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import {greeting} from "../../portfolio";

export default function Greeting() {
  if (!greeting.displayGreeting) {
    return null;
  }
  
  return (
    <div className="hero-wrapper">
      <div className="hero-content">
        <div className="hero-text-section">
          <div className="hero-text-content">
            <div className="hero-badge">
              <span>👋 Available for opportunities</span>
            </div>
            
            <h1 className="hero-title">
              {greeting.title}
            </h1>
            
            <p className="hero-subtitle">
              {greeting.subTitle}
            </p>
            
            <div className="hero-actions">
              <Button text="Get in touch" href="#contact" style="primary" />
              {greeting.resumeLink && (
                <Button
                  text="View Resume"
                  newTab={true}
                  href={greeting.resumeLink}
                  style="secondary"
                />
              )}
            </div>
            
            <div className="hero-social">
              <SocialMedia />
            </div>
          </div>
        </div>
        
        <div className="hero-visual-section">
          <div className="hero-image">
            <img
              alt="Developer illustration"
              src={require("../../assets/images/manOnTable.svg")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
