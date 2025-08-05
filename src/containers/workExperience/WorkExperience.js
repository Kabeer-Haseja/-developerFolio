import React, { useState, useEffect } from "react";
import "./WorkExperience.scss";
import { workExperiences } from "../../portfolio";

export default function WorkExperience() {
  const [activeExperience, setActiveExperience] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!workExperiences.display) {
    return null;
  }

  return (
    <div className="work-experience-main-container">
      {/* Section Header */}
      <div className="work-header">
        <div className="work-badge">
          <span className="badge-icon">💼</span>
          <span className="badge-text">Professional Experience</span>
        </div>
        
        <h1 className="work-main-title">
          Career 
          <span className="title-highlight"> Journey</span>
        </h1>
        
        <p className="work-main-subtitle">
          Building innovative solutions and leading development teams across diverse industries and technologies
        </p>
      </div>

      {/* Experience Navigation */}
      <div className="experience-navigation">
        {workExperiences.experience.map((exp, index) => (
          <button
            key={index}
            className={`exp-nav-item ${activeExperience === index ? 'active' : ''}`}
            onClick={() => setActiveExperience(index)}
          >
            <div className="nav-company-logo">
              <img src={exp.companylogo} alt={exp.company} />
            </div>
            <div className="nav-content">
              <h4 className="nav-company">{exp.company}</h4>
              <p className="nav-role">{exp.role}</p>
              <span className="nav-duration">{exp.date}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Active Experience Details */}
      <div className="experience-details">
        <div className="experience-card-premium">
          {/* Card Header */}
          <div className="card-header-premium">
            <div className="header-left">
              <div className="company-logo-large">
                <img 
                  src={workExperiences.experience[activeExperience].companylogo} 
                  alt={workExperiences.experience[activeExperience].company}
                />
              </div>
              <div className="header-info">
                <h2 className="company-name">{workExperiences.experience[activeExperience].company}</h2>
                <h3 className="role-title">{workExperiences.experience[activeExperience].role}</h3>
                <div className="employment-details">
                  <div className="detail-item">
                    <span className="detail-icon">📅</span>
                    <span className="detail-text">{workExperiences.experience[activeExperience].date}</span>
                  </div>
                  {workExperiences.experience[activeExperience].location && (
                    <div className="detail-item">
                      <span className="detail-icon">📍</span>
                      <span className="detail-text">{workExperiences.experience[activeExperience].location}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="header-right">
              <div className="experience-badge">
                <span className="badge-icon">🚀</span>
                <span className="badge-text">Current</span>
              </div>
            </div>
          </div>

          {/* Card Content */}
          <div className="card-content-premium">
            <div className="description-section">
              <h4 className="section-title">Role Overview</h4>
              <p className="role-description">{workExperiences.experience[activeExperience].desc}</p>
            </div>

            {workExperiences.experience[activeExperience].descBullets && (
              <div className="achievements-section-premium">
                <h4 className="section-title">Key Achievements</h4>
                <div className="achievements-grid">
                  {workExperiences.experience[activeExperience].descBullets.map((bullet, index) => (
                    <div 
                      key={index}
                      className="achievement-card"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="achievement-icon">⭐</div>
                      <p className="achievement-description">{bullet}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Card Footer */}
          <div className="card-footer-premium">
            <div className="impact-metrics">
              <div className="metric-card">
                <div className="metric-icon">📈</div>
                <div className="metric-content">
                  <div className="metric-value">25-40%</div>
                  <div className="metric-label">Performance Boost</div>
                </div>
              </div>
              
              <div className="metric-card">
                <div className="metric-icon">🎯</div>
                <div className="metric-content">
                  <div className="metric-value">100%</div>
                  <div className="metric-label">Project Success</div>
                </div>
              </div>
              
              <div className="metric-card">
                <div className="metric-icon">👥</div>
                <div className="metric-content">
                  <div className="metric-value">1M+</div>
                  <div className="metric-label">Users Impacted</div>
                </div>
              </div>
              
              <div className="metric-card">
                <div className="metric-icon">⚡</div>
                <div className="metric-content">
                  <div className="metric-value">5+</div>
                  <div className="metric-label">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="experience-timeline">
        <h3 className="timeline-title">Professional Timeline</h3>
        <div className="timeline-container">
          <div className="timeline-line-vertical"></div>
          
          {workExperiences.experience.map((exp, index) => (
            <div 
              key={index}
              className={`timeline-item ${activeExperience === index ? 'active' : ''}`}
              onClick={() => setActiveExperience(index)}
            >
              <div className="timeline-marker">
                <img src={exp.companylogo} alt={exp.company} />
              </div>
              
              <div className="timeline-content">
                <div className="timeline-header">
                  <h4 className="timeline-company">{exp.company}</h4>
                  <span className="timeline-date">{exp.date}</span>
                </div>
                <p className="timeline-role">{exp.role}</p>
                <div className="timeline-preview">
                  {exp.descBullets && exp.descBullets.length > 0 && (
                    <p className="preview-text">{exp.descBullets[0].substring(0, 100)}...</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills & Technologies */}
      <div className="skills-technologies">
        <h3 className="skills-tech-title">Technologies & Skills</h3>
        <div className="tech-categories">
          <div className="tech-category">
            <h4 className="category-title">Frontend</h4>
            <div className="tech-tags">
              {["React Native", "TypeScript", "Redux Toolkit", "React.js"].map((tech, index) => (
                <span key={index} className="tech-tag frontend">{tech}</span>
              ))}
            </div>
          </div>
          
          <div className="tech-category">
            <h4 className="category-title">Backend & Cloud</h4>
            <div className="tech-tags">
              {["Node.js", "Firebase", "Google Maps API", "REST APIs"].map((tech, index) => (
                <span key={index} className="tech-tag backend">{tech}</span>
              ))}
            </div>
          </div>
          
          <div className="tech-category">
            <h4 className="category-title">Tools & Platforms</h4>
            <div className="tech-tags">
              {["Git", "CI/CD", "Crashlytics", "OneSignal"].map((tech, index) => (
                <span key={index} className="tech-tag tools">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
