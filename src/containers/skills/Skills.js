import React from "react";
import "./Skills.scss";
import { DeveloperWorkingSVG } from "../../components/InlineSVG/InlineSVG";

function Skills() {
  return (
    <div className="skills-main-div">
      <div className="skills-image-div">
        <DeveloperWorkingSVG />
      </div>
      <div className="skills-text-div">
        <h1 className="skills-heading">What I do</h1>
        <p className="skills-subtitle">
          CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
        </p>
        
        <div className="skills-categories">
          <div className="skills-category">
            <h3>Frontend Development</h3>
            <ul>
              <li>⚡ React.js, Vue.js, Angular</li>
              <li>⚡ HTML5, CSS3, JavaScript (ES6+)</li>
              <li>⚡ TypeScript, Redux, Vuex</li>
              <li>⚡ Responsive Design, PWA</li>
            </ul>
          </div>
          
          <div className="skills-category">
            <h3>Backend Development</h3>
            <ul>
              <li>⚡ Node.js, Express.js, Django</li>
              <li>⚡ Python, Java, C#</li>
              <li>⚡ RESTful APIs, GraphQL</li>
              <li>⚡ Microservices Architecture</li>
            </ul>
          </div>
          
          <div className="skills-category">
            <h3>Database & Cloud</h3>
            <ul>
              <li>⚡ MongoDB, PostgreSQL, MySQL</li>
              <li>⚡ AWS, Azure, Google Cloud</li>
              <li>⚡ Docker, Kubernetes</li>
              <li>⚡ CI/CD, DevOps</li>
            </ul>
          </div>
          
          <div className="skills-category">
            <h3>Tools & Technologies</h3>
            <ul>
              <li>⚡ Git, GitHub, GitLab</li>
              <li>⚡ VS Code, IntelliJ, WebStorm</li>
              <li>⚡ Jira, Trello, Slack</li>
              <li>⚡ Testing (Jest, Cypress)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
