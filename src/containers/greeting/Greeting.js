import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <div className="hero-wrapper">
      <Fade bottom duration={1000} distance="40px">
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
            {illustration.animated ? (
              <div className="hero-animation">
                <DisplayLottie animationData={landingPerson} />
              </div>
            ) : (
              <div className="hero-image">
                <img
                  alt="Developer illustration"
                  src={require("../../assets/images/manOnTable.svg")}
                />
              </div>
            )}
          </div>
        </div>
      </Fade>
    </div>
  );
}
