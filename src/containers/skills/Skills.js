import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={`skills-container ${isDark ? "dark-mode" : ""}`} id="skills">
      <div className="skills-main-div fade-in-section">
        <div className="skills-image-div stagger-child mouse-parallax" data-speed="0.1">
          {illustration.animated ? (
            <DisplayLottie animationData={codingPerson} />
          ) : (
            <img
              alt="Man Working"
              src={require("../../assets/images/developerActivity.svg")}
            />
          )}
          <div className="floating-shapes">
            <div className="shape shape-1 floating-element"></div>
            <div className="shape shape-2 floating-element"></div>
            <div className="shape shape-3 floating-element"></div>
          </div>
        </div>
        
        <div className="skills-content-div">
          <div className="skills-text-div stagger-child">
            <h1 className={`skills-heading ${isDark ? "dark-mode" : ""}`}>
              {skillsSection.title}
            </h1>
            <p className={`skills-text-subtitle ${isDark ? "dark-mode" : ""}`}>
              {skillsSection.subTitle}
            </p>
            
            <div className="software-skills-wrapper stagger-child">
              <SoftwareSkill />
            </div>
            
            <div className="skills-list stagger-child">
              {skillsSection.skills.map((skill, i) => (
                <div
                  key={i}
                  className={`skill-item ${isDark ? "dark-mode" : ""}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="skill-icon">
                    <span>✨</span>
                  </div>
                  <p className="skill-text">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="parallax-bg">
        <div className="bg-element bg-element-1"></div>
        <div className="bg-element bg-element-2"></div>
      </div>
    </div>
  );
}
