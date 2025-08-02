import React from "react";
import "./Skills.scss";
import { DeveloperWorkingSVG } from "../../components/InlineSVG/InlineSVG";

function Skills() {
  console.log("Skills component is rendering");
  
  return (
    <div className="skills-main-div" style={{ 
      border: '2px solid red', 
      padding: '20px', 
      background: '#f0f0f0',
      minHeight: '400px'
    }}>
      <div className="skills-image-div">
        <DeveloperWorkingSVG />
      </div>
      <div className="skills-text-div" style={{ border: '2px solid blue' }}>
        <h1 className="skills-heading" style={{ color: 'black' }}>What I do</h1>
        <p className="skills-subtitle" style={{ color: 'black' }}>
          CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
        </p>
        <ul>
          <li>⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications</li>
          <li>⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks</li>
          <li>⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean</li>
          <li>⚡ Experience of working with Computer Vision and NLP projects</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
