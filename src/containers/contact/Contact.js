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
    <div style={{
      width: '100%',
      height: '400px',
      backgroundColor: isDark ? '#2a2a2a' : '#f8f9fa',
      border: `3px solid ${isDark ? '#444' : '#e0e0e0'}`,
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: isDark ? '0 10px 30px rgba(0, 0, 0, 0.3)' : '0 10px 30px rgba(0, 0, 0, 0.1)'
    }}>
      {/* Background pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: isDark 
          ? 'linear-gradient(45deg, #2a2a2a 25%, transparent 25%), linear-gradient(-45deg, #2a2a2a 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #2a2a2a 75%), linear-gradient(-45deg, transparent 75%, #2a2a2a 75%)'
          : 'linear-gradient(45deg, #f8f9fa 25%, transparent 25%), linear-gradient(-45deg, #f8f9fa 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f8f9fa 75%), linear-gradient(-45deg, transparent 75%, #f8f9fa 75%)',
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
        opacity: 0.3
      }} />
      
      {/* Main content */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        zIndex: 1
      }}>
        {/* Email icon */}
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          backgroundColor: '#3498db',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '40px',
          color: 'white',
          boxShadow: '0 4px 20px rgba(52, 152, 219, 0.3)'
        }}>
          📧
        </div>
        
        {/* Envelope */}
        <div style={{
          width: '200px',
          height: '120px',
          backgroundColor: '#6c63ff',
          borderRadius: '8px',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 15px rgba(108, 99, 255, 0.3)'
        }}>
          <div style={{
            width: '180px',
            height: '100px',
            backgroundColor: isDark ? '#444' : '#ffffff',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            color: '#6c63ff'
          }}>
            ✉️
          </div>
        </div>
        
        {/* Contact icons */}
        <div style={{
          display: 'flex',
          gap: '15px',
          marginTop: '10px'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#27ae60',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            color: 'white',
            boxShadow: '0 2px 10px rgba(39, 174, 96, 0.3)'
          }}>
            📞
          </div>
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#e74c3c',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            color: 'white',
            boxShadow: '0 2px 10px rgba(231, 76, 60, 0.3)'
          }}>
            📱
          </div>
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#f39c12',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            color: 'white',
            boxShadow: '0 2px 10px rgba(243, 156, 18, 0.3)'
          }}>
            💬
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        width: '30px',
        height: '30px',
        backgroundColor: '#6c63ff',
        borderRadius: '50%',
        opacity: 0.1
      }} />
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '30px',
        width: '25px',
        height: '25px',
        backgroundColor: '#6c63ff',
        borderRadius: '50%',
        opacity: 0.15
      }} />
    </div>
  );

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              {contactInfo.number && (
                <>
                  <a
                    className="contact-detail"
                    href={"tel:" + contactInfo.number}
                  >
                    {contactInfo.number}
                  </a>
                  <br />
                  <br />
                </>
              )}
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <ContactIllustration />
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
