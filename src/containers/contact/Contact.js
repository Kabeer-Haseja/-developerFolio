import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  
  const ContactIllustration = () => (
    <div className="modern-contact-illustration">
      <div className="illustration-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        
        <div className="illustration-content">
          <div className="contact-icon-container">
            <div className="contact-icon">
              <span className="icon-emoji">💬</span>
            </div>
            <div className="icon-glow"></div>
          </div>
          
          <div className="contact-envelope">
            <div className="envelope-body">
              <div className="envelope-content">
                <span className="envelope-icon">✉️</span>
              </div>
            </div>
          </div>
          
          <div className="contact-methods">
            <div className="method-item">
              <div className="method-icon email-icon">
                <span>📧</span>
              </div>
            </div>
            <div className="method-item">
              <div className="method-icon phone-icon">
                <span>📞</span>
              </div>
            </div>
            <div className="method-item">
              <div className="method-icon chat-icon">
                <span>💬</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="modern-contact-container">
        <div className="contact-content">
          <div className="contact-info-section">
            <div className="contact-header">
              <h2 className="contact-title">{contactInfo.title}</h2>
              <p className="contact-subtitle">
                {contactInfo.subtitle}
              </p>
            </div>
            
            <div className="contact-details">
              {contactInfo.number && (
                <div className="contact-item">
                  <div className="contact-item-icon">
                    <span>📞</span>
                  </div>
                  <div className="contact-item-content">
                    <span className="contact-label">Phone</span>
                    <a
                      className="contact-link"
                      href={"tel:" + contactInfo.number}
                    >
                      {contactInfo.number}
                    </a>
                  </div>
                </div>
              )}
              
              <div className="contact-item">
                <div className="contact-item-icon">
                  <span>📧</span>
                </div>
                <div className="contact-item-content">
                  <span className="contact-label">Email</span>
                  <a
                    className="contact-link"
                    href={"mailto:" + contactInfo.email_address}
                  >
                    {contactInfo.email_address}
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-item-icon">
                  <span>📍</span>
                </div>
                <div className="contact-item-content">
                  <span className="contact-label">Location</span>
                  <span className="contact-text">Available for remote work worldwide</span>
                </div>
              </div>
            </div>
            
            <div className="contact-social">
              <h3 className="social-title">Connect with me</h3>
              <div className="social-container">
                <SocialMedia />
              </div>
            </div>
            
            <div className="contact-cta">
              <button className="cta-button">
                <span className="cta-icon">🚀</span>
                <span className="cta-text">Start a Project</span>
                <span className="cta-arrow">→</span>
              </button>
            </div>
          </div>
          
          <div className="contact-visual-section">
            {illustration.animated ? (
              <div className="lottie-container">
                <DisplayLottie animationData={email} />
              </div>
            ) : (
              <ContactIllustration />
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
