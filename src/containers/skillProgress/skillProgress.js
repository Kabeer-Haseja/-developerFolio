import React, { useContext } from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function StackProgress() {
  const { isDark } = useContext(StyleContext);
  
  const SkillsIllustration = () => (
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
        gap: '25px',
        zIndex: 1
      }}>
        {/* Trophy icon */}
        <div style={{
          width: '90px',
          height: '90px',
          borderRadius: '50%',
          backgroundColor: '#f39c12',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '45px',
          color: 'white',
          boxShadow: '0 4px 20px rgba(243, 156, 18, 0.3)'
        }}>
          🏆
        </div>
        
        {/* Progress bars visualization */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          alignItems: 'center'
        }}>
          <div style={{
            width: '200px',
            height: '8px',
            backgroundColor: isDark ? '#444' : '#e0e0e0',
            borderRadius: '4px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              width: '85%',
              height: '100%',
              backgroundColor: '#27ae60',
              borderRadius: '4px',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)',
                animation: 'shimmer 2s infinite'
              }} />
            </div>
          </div>
          
          <div style={{
            width: '200px',
            height: '8px',
            backgroundColor: isDark ? '#444' : '#e0e0e0',
            borderRadius: '4px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              width: '92%',
              height: '100%',
              backgroundColor: '#3498db',
              borderRadius: '4px',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)',
                animation: 'shimmer 2s infinite'
              }} />
            </div>
          </div>
          
          <div style={{
            width: '200px',
            height: '8px',
            backgroundColor: isDark ? '#444' : '#e0e0e0',
            borderRadius: '4px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              width: '78%',
              height: '100%',
              backgroundColor: '#e74c3c',
              borderRadius: '4px',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)',
                animation: 'shimmer 2s infinite'
              }} />
            </div>
          </div>
        </div>
        
        {/* Skill icons */}
        <div style={{
          display: 'flex',
          gap: '15px',
          marginTop: '10px'
        }}>
          <div style={{
            width: '45px',
            height: '45px',
            backgroundColor: '#61dafb',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '22px',
            color: 'white',
            boxShadow: '0 2px 10px rgba(97, 218, 251, 0.3)'
          }}>
            ⚛️
          </div>
          <div style={{
            width: '45px',
            height: '45px',
            backgroundColor: '#42b883',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '22px',
            color: 'white',
            boxShadow: '0 2px 10px rgba(66, 184, 131, 0.3)'
          }}>
            🐍
          </div>
          <div style={{
            width: '45px',
            height: '45px',
            backgroundColor: '#f7df1e',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '22px',
            color: 'white',
            boxShadow: '0 2px 10px rgba(247, 223, 30, 0.3)'
          }}>
            🚀
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div style={{
        position: 'absolute',
        top: '25px',
        right: '25px',
        width: '35px',
        height: '35px',
        backgroundColor: '#f39c12',
        borderRadius: '50%',
        opacity: 0.1
      }} />
      <div style={{
        position: 'absolute',
        bottom: '35px',
        left: '35px',
        width: '30px',
        height: '30px',
        backgroundColor: '#f39c12',
        borderRadius: '50%',
        opacity: 0.15
      }} />
      
      {/* CSS for shimmer animation */}
      <style>
        {`
          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
        `}
      </style>
    </div>
  );

  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading">Proficiency</h1>
            {techStack.experience.map((exp, i) => {
              const progressStyle = {
                width: exp.progressPercentage
              };
              return (
                <div key={i} className="skill">
                  <p>{exp.Stack}</p>
                  <div className="meter">
                    <span style={progressStyle}></span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <SkillsIllustration />
            )}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
