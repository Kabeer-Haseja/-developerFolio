import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {skillsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  
  if (!skillsSection.display) {
    return null;
  }
  
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <div className="skills-image-div">
          <img
            alt="Man Working"
            src={require("../../assets/images/manOnTable.svg")}
            style={{ maxWidth: '100%', height: 'auto' }}
            onError={(e) => {
              console.error('Failed to load skills image:', e.target.src);
              e.target.style.display = 'none';
            }}
            onLoad={() => console.log('Skills image loaded successfully')}
          />
        </div>
        <div className="skills-text-div">
          <h1
            className={isDark ? "dark-mode skills-heading" : "skills-heading"}
          >
            {skillsSection.title}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode subTitle skills-text-subtitle"
                : "subTitle skills-text-subtitle"
            }
          >
            {skillsSection.subTitle}
          </p>
          <SoftwareSkill />
          <div className="skills-list">
            {skillsSection.skills.map((skills, i) => {
              return (
                <p
                  key={i}
                  className={
                    isDark
                      ? "dark-mode subTitle skills-text"
                      : "subTitle skills-text"
                  }
                >
                  {skills}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
