import React, { useState, useEffect } from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Categorize skills for better organization
  const skillCategories = {
    "Frontend": [
      { skillName: "React.js", fontAwesomeClassname: "fab fa-react", color: "#61DAFB" },
      { skillName: "React Native", fontAwesomeClassname: "fab fa-react", color: "#61DAFB" },
      { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js", color: "#F7DF1E" },
      { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt", color: "#1572B6" }
    ],
    "Backend": [
      { skillName: "Node.js", fontAwesomeClassname: "fab fa-node-js", color: "#339933" },
      { skillName: "Redux Toolkit", fontAwesomeClassname: "fas fa-bolt", color: "#764ABC" },
      { skillName: "RTK Query", fontAwesomeClassname: "fas fa-bolt", color: "#764ABC" }
    ],
    "Database": [
      { skillName: "MySQL", fontAwesomeClassname: "fas fa-database", color: "#4479A1" },
      { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire", color: "#FFCA28" }
    ]
  };

  return (
    <div className="technical-expertise-container">
      {/* Section Header */}
      <div className="tech-header">
        <div className="tech-badge">
          <span className="tech-badge-icon">⚡</span>
          <span className="tech-badge-text">Technical Expertise</span>
        </div>
        
        <h1 className="tech-main-title">
          Technologies & 
          <span className="tech-title-highlight"> Tools</span>
        </h1>
        
        <p className="tech-main-subtitle">
          Cutting-edge technologies and frameworks I use to build exceptional applications
        </p>
      </div>

      {/* Skills Categories */}
      <div className="tech-categories">
        {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
          <div key={category} className="tech-category-section">
            <div className="category-header-tech">
              <h3 className="category-title-tech">{category}</h3>
              <div className="category-line"></div>
            </div>
            
            <div className="tech-skills-grid">
              {skills.map((skill, index) => (
                <div
                  key={skill.skillName}
                  className={`tech-skill-card ${hoveredSkill === skill.skillName ? 'hovered' : ''}`}
                  onMouseEnter={() => setHoveredSkill(skill.skillName)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  style={{ 
                    '--skill-color': skill.color,
                    animationDelay: `${(categoryIndex * 4 + index) * 0.1}s`
                  }}
                >
                  <div className="skill-icon-container">
                    <i className={skill.fontAwesomeClassname}></i>
                    <div className="skill-glow"></div>
                  </div>
                  
                  <div className="skill-info">
                    <h4 className="skill-name">{skill.skillName}</h4>
                    <div className="skill-proficiency">
                      <div className="proficiency-bar">
                        <div className="proficiency-fill"></div>
                      </div>
                      <span className="proficiency-text">Expert</span>
                    </div>
                  </div>
                  
                  <div className="skill-overlay"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* All Skills Overview */}
      <div className="all-skills-section">
        <h3 className="all-skills-title">Complete Technology Stack</h3>
        <div className="all-skills-grid">
          {skillsSection.softwareSkills.map((skill, index) => (
            <div
              key={skill.skillName}
              className="mini-skill-item"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <i className={skill.fontAwesomeClassname}></i>
              <span>{skill.skillName}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stats */}
      <div className="tech-stats">
        <div className="stat-card">
          <div className="stat-icon">🎯</div>
          <div className="stat-content">
            <div className="stat-number">9+</div>
            <div className="stat-label">Core Technologies</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">🚀</div>
          <div className="stat-content">
            <div className="stat-number">5+</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">⚡</div>
          <div className="stat-content">
            <div className="stat-number">40%</div>
            <div className="stat-label">Performance Boost</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">🏆</div>
          <div className="stat-content">
            <div className="stat-number">100%</div>
            <div className="stat-label">Project Success</div>
          </div>
        </div>
      </div>

      {/* Interactive Tech Showcase */}
      <div className="tech-showcase">
        <div className="showcase-content">
          <h3 className="showcase-title">Featured Technology</h3>
          <div className="featured-tech">
            <div className="featured-icon">
              <i className="fab fa-react"></i>
            </div>
            <div className="featured-info">
              <h4>React Native</h4>
              <p>Building cross-platform mobile applications with native performance and modern development practices.</p>
              <div className="featured-tags">
                <span>Cross-Platform</span>
                <span>Native Performance</span>
                <span>Hot Reload</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="showcase-visual">
          <div className="code-demo">
            <div className="demo-header">
              <div className="demo-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="demo-title">App.js</span>
            </div>
            <div className="demo-code">
              <div className="code-line">
                <span className="import">import</span>
                <span className="text"> React </span>
                <span className="import">from</span>
                <span className="string"> 'react'</span>
              </div>
              <div className="code-line">
                <span className="import">import</span>
                <span className="text"> {'{ View }'} </span>
                <span className="import">from</span>
                <span className="string"> 'react-native'</span>
              </div>
              <div className="code-line">
                <span className="function">const</span>
                <span className="text"> App </span>
                <span className="operator">=</span>
                <span className="text"> () </span>
                <span className="operator">=></span>
                <span className="text"> {'{'}</span>
              </div>
              <div className="code-line">
                <span className="text">  </span>
                <span className="return">return</span>
                <span className="text"> </span>
                <span className="tag">{'<View />'}</span>
              </div>
              <div className="code-line">
                <span className="text">{'}'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
