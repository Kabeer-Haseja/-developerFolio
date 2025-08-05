import React, { useState, useEffect } from "react";
import "./Progress.scss";
import { techStack } from "../../portfolio";

export default function StackProgress() {
  const [animatedSkills, setAnimatedSkills] = useState([]);
  const [activeSkill, setActiveSkill] = useState(0);

  useEffect(() => {
    // Animate skills on load
    const timer = setTimeout(() => {
      setAnimatedSkills(techStack.experience.map((_, index) => index));
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Enhanced skill data with icons and descriptions
  const enhancedSkills = [
    {
      ...techStack.experience[0],
      icon: "📱",
      color: "#0070f3",
      description: "Expert in building cross-platform mobile applications with native performance and modern development practices.",
      level: "Expert",
      years: "5+"
    },
    {
      ...techStack.experience[1],
      icon: "🏗️",
      color: "#7c3aed",
      description: "Designing scalable and maintainable mobile application architectures for enterprise-level solutions.",
      level: "Advanced",
      years: "4+"
    },
    {
      ...techStack.experience[2],
      icon: "⚡",
      color: "#06b6d4",
      description: "Optimizing application performance through advanced techniques and best practices.",
      level: "Advanced",
      years: "3+"
    }
  ];

  if (!techStack.viewSkillBars) {
    return null;
  }

  return (
    <div className="proficiency-main-container">
      {/* Section Header */}
      <div className="proficiency-header">
        <div className="proficiency-badge">
          <span className="badge-icon">📊</span>
          <span className="badge-text">Proficiency Levels</span>
        </div>
        
        <h1 className="proficiency-main-title">
          Technical 
          <span className="title-highlight"> Mastery</span>
        </h1>
        
        <p className="proficiency-main-subtitle">
          Deep expertise across core technologies with proven track record of delivering exceptional results
        </p>
      </div>

      {/* Interactive Skills Display */}
      <div className="proficiency-content">
        {/* Skills Navigation */}
        <div className="skills-navigation">
          {enhancedSkills.map((skill, index) => (
            <button
              key={index}
              className={`skill-nav-item ${activeSkill === index ? 'active' : ''}`}
              onClick={() => setActiveSkill(index)}
              style={{ '--skill-color': skill.color }}
            >
              <div className="nav-icon">{skill.icon}</div>
              <div className="nav-content">
                <h4 className="nav-title">{skill.Stack}</h4>
                <span className="nav-level">{skill.level}</span>
              </div>
              <div className="nav-percentage">{skill.progressPercentage}</div>
            </button>
          ))}
        </div>

        {/* Active Skill Details */}
        <div className="skill-details-panel">
          <div className="skill-showcase">
            <div className="skill-icon-large" style={{ background: `linear-gradient(135deg, ${enhancedSkills[activeSkill].color}, ${enhancedSkills[activeSkill].color}dd)` }}>
              {enhancedSkills[activeSkill].icon}
            </div>
            
            <div className="skill-info">
              <h3 className="skill-title">{enhancedSkills[activeSkill].Stack}</h3>
              <p className="skill-description">{enhancedSkills[activeSkill].description}</p>
              
              <div className="skill-metrics">
                <div className="metric-item">
                  <div className="metric-label">Experience</div>
                  <div className="metric-value">{enhancedSkills[activeSkill].years} years</div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">Proficiency</div>
                  <div className="metric-value">{enhancedSkills[activeSkill].progressPercentage}</div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">Level</div>
                  <div className="metric-value">{enhancedSkills[activeSkill].level}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Progress Visualization */}
          <div className="progress-visualization">
            <div className="circular-progress">
              <svg className="progress-ring" width="200" height="200">
                <circle
                  className="progress-ring-background"
                  cx="100"
                  cy="100"
                  r="90"
                />
                <circle
                  className="progress-ring-progress"
                  cx="100"
                  cy="100"
                  r="90"
                  style={{
                    '--progress': parseInt(enhancedSkills[activeSkill].progressPercentage),
                    '--color': enhancedSkills[activeSkill].color
                  }}
                />
              </svg>
              <div className="progress-center">
                <div className="progress-percentage">{enhancedSkills[activeSkill].progressPercentage}</div>
                <div className="progress-label">Proficiency</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Comparison Chart */}
      <div className="skills-comparison">
        <h3 className="comparison-title">Skills Overview</h3>
        <div className="comparison-bars">
          {enhancedSkills.map((skill, index) => (
            <div 
              key={index}
              className={`comparison-bar ${animatedSkills.includes(index) ? 'animated' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bar-header">
                <div className="bar-info">
                  <span className="bar-icon">{skill.icon}</span>
                  <span className="bar-name">{skill.Stack}</span>
                </div>
                <span className="bar-percentage">{skill.progressPercentage}</span>
              </div>
              <div className="bar-track">
                <div 
                  className="bar-fill"
                  style={{ 
                    '--width': skill.progressPercentage,
                    '--color': skill.color
                  }}
                >
                  <div className="bar-shimmer"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievement Stats */}
      <div className="achievement-stats">
        <div className="stat-card">
          <div className="stat-icon">🎯</div>
          <div className="stat-content">
            <div className="stat-number">95%</div>
            <div className="stat-label">Average Proficiency</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">🚀</div>
          <div className="stat-content">
            <div className="stat-number">12+</div>
            <div className="stat-label">Years Combined Experience</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">⭐</div>
          <div className="stat-content">
            <div className="stat-number">3</div>
            <div className="stat-label">Core Specializations</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">🏆</div>
          <div className="stat-content">
            <div className="stat-number">100%</div>
            <div className="stat-label">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
}
