import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="startup-projects-container">
        <div className="projects-grid">
          {bigProjects.projects.map((project, i) => {
            return (
              <div
                key={i}
                className={
                  isDark
                    ? "modern-project-card project-card-dark"
                    : "modern-project-card project-card-light"
                }
              >
                <div className="project-card-header">
                  {project.image ? (
                    <div className="project-image-container">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="project-image"
                      />
                      <div className="project-image-overlay">
                        <div className="overlay-content">
                          <span className="view-project">View Project</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="project-placeholder">
                      <div className="placeholder-icon">💼</div>
                    </div>
                  )}
                  <div className="project-status">
                    <span className="status-badge">Featured</span>
                  </div>
                </div>
                
                <div className="project-card-content">
                  <h3 className="project-title">
                    {project.projectName}
                  </h3>
                  <p className="project-description">
                    {project.projectDesc}
                  </p>
                  
                  {project.footerLink ? (
                    <div className="project-links">
                      {project.footerLink.map((link, i) => {
                        return (
                          <button
                            key={i}
                            className="project-link-button"
                            onClick={() => openUrlInNewTab(link.url)}
                            aria-label={`Open ${link.name}`}
                          >
                            <span className="link-icon">🔗</span>
                            <span className="link-text">{link.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
                
                <div className="project-card-footer">
                  <div className="project-meta">
                    <span className="project-type">Startup</span>
                    <span className="project-year">2024</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
