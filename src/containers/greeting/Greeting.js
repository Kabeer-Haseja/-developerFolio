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
            <h1 className="hero-title">
              {greeting.title}
            </h1>
            <p className="hero-subtitle">
              {greeting.subTitle}
            </p>
            <div className="hero-actions">
              <Button 
                className="button primary" 
                text="Get in touch" 
                href="#contact" 
              />
              {greeting.resumeLink && (
                <Button 
                  className="button secondary" 
                  text="View Resume" 
                  href={greeting.resumeLink} 
                  newTab={true}
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
              alt="Man sitting on table"
              src={require("../../assets/images/manOnTable.svg")}
              onError={(e) => {
                console.error('Failed to load greeting image:', e.target.src);
                e.target.style.display = 'none';
              }}
              onLoad={() => console.log('Greeting image loaded successfully')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
