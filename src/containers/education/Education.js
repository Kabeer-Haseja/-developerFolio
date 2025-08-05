import React, { useState, useEffect } from "react";
import "./Education.scss";
import { educationInfo } from "../../portfolio";

export default function Education() {
  const [activeEducation, setActiveEducation] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!educationInfo.display) {
    return null;
  }

  return (
    <div className="education-main-container">
      {/* Section Header */}
      <div className="education-header">
        <div className="education-badge">
          <span className="badge-icon">🎓</span>
          <span className="badge-text">Education</span>
        </div>
        
        <h1 className="education-main-title">
          Academic 
          <span className="title-highlight"> Journey</span>
        </h1>
        
        <p className="education-main-subtitle">
          Building a strong foundation through continuous learning and academic excellence
        </p>
      </div>

      {/* Education Timeline */}
      <div className="education-timeline">
        <div className="timeline-line"></div>
        
        {educationInfo.schools.map((school, index) => (
          <div 
            key={index}
            className={`education-timeline-item ${activeEducation === index ? 'active' : ''}`}
            onClick={() => setActiveEducation(index)}
          >
            {/* Timeline Node */}
            <div className="timeline-node">
              <div className="node-inner">
                {school.logo ? (
                  <img 
                    src={school.logo} 
                    alt={school.schoolName}
                    className="node-logo"
                  />
                ) : (
                  <span className="node-icon">🎓</span>
                )}
              </div>
            </div>

            {/* Education Card */}
            <div className="education-card-modern">
              <div className="card-header">
                <div className="header-content">
                  <h3 className="school-name">{school.schoolName}</h3>
                  <p className="school-degree">{school.subHeader}</p>
                  <div className="school-duration">
                    <span className="duration-icon">📅</span>
                    <span className="duration-text">{school.duration}</span>
                  </div>
                </div>
                
                <div className="header-visual">
                  <div className="achievement-badge">
                    <span className="achievement-icon">⭐</span>
                    <span className="achievement-text">Excellence</span>
                  </div>
                </div>
              </div>

              <div className="card-content">
                <p className="school-description">{school.desc}</p>
                
                {school.descBullets && school.descBullets.length > 0 && (
                  <div className="achievements-section">
                    <h4 className="achievements-title">Key Achievements</h4>
                    <div className="achievements-list">
                      {school.descBullets.map((bullet, bulletIndex) => (
                        <div 
                          key={bulletIndex} 
                          className="achievement-item"
                          style={{ animationDelay: `${bulletIndex * 0.1}s` }}
                        >
                          <div className="achievement-indicator"></div>
                          <p className="achievement-text">{bullet}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer with Stats */}
              <div className="card-footer">
                <div className="education-stats">
                  <div className="stat-item">
                    <div className="stat-icon">📚</div>
                    <div className="stat-content">
                      <div className="stat-label">Focus</div>
                      <div className="stat-value">Computer Science</div>
                    </div>
                  </div>
                  
                  <div className="stat-item">
                    <div className="stat-icon">🏆</div>
                    <div className="stat-content">
                      <div className="stat-label">Achievement</div>
                      <div className="stat-value">{index === 0 ? 'Distinction' : 'Excellence'}</div>
                    </div>
                  </div>
                  
                  <div className="stat-item">
                    <div className="stat-icon">⚡</div>
                    <div className="stat-content">
                      <div className="stat-label">Impact</div>
                      <div className="stat-value">High</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Education Summary */}
      <div className="education-summary">
        <div className="summary-card">
          <div className="summary-icon">🎯</div>
          <div className="summary-content">
            <h3 className="summary-title">Academic Excellence</h3>
            <p className="summary-description">
              Maintained high academic standards throughout educational journey with focus on practical application and innovation.
            </p>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon">🚀</div>
          <div className="summary-content">
            <h3 className="summary-title">Leadership & Innovation</h3>
            <p className="summary-description">
              Led multiple hackathon teams and actively participated in tech community events to drive innovation.
            </p>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon">🌟</div>
          <div className="summary-content">
            <h3 className="summary-title">Continuous Learning</h3>
            <p className="summary-description">
              Committed to lifelong learning through workshops, certifications, and staying current with emerging technologies.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Developed */}
      <div className="skills-developed">
        <h3 className="skills-title">Core Skills Developed</h3>
        <div className="skills-grid">
          {[
            "Software Engineering", "Algorithm Design", "Mobile Development",
            "System Architecture", "Problem Solving", "Team Leadership",
            "Project Management", "Technical Communication"
          ].map((skill, index) => (
            <div 
              key={index}
              className="skill-tag"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
