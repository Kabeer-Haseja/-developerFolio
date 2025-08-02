import React from "react";
import "./Skills.scss";

export default function SoftwareSkill() {
  return (
    <div className="skills-main-div">
      <div className="skills-image-div">
        <img
          alt="Developer working illustration"
          src={require("../../assets/images/programmerAtWork.svg")}
        />
      </div>
      <div className="skills-text-div">
        <h1 className="skills-heading">What I do</h1>
        <p className="skills-subtitle">
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
