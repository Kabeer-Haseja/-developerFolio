import React, {useState, useEffect, useContext, Suspense, lazy} from "react";
import "./Project.scss";
import {openSource, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";

export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const {isDark} = useContext(StyleContext);

  useEffect(() => {
    const getRepoData = () => {
      setIsLoading(true);
      fetch("/profile.json")
        .then(result => {
          if (result.ok) {
            return result.json();
          }
          throw result;
        })
        .then(response => {
          setrepoFunction(response.data.user.pinnedItems.edges);
          setIsLoading(false);
        })
        .catch(function (error) {
          console.error(
            `${error} (GitHub data not available, showing fallback content)`
          );
          setHasError(true);
          setIsLoading(false);
        });
    };
    getRepoData();
  }, []);

  function setrepoFunction(array) {
    setrepo(array);
  }

  if (!openSource.display) {
    return null;
  }

  // Show loading state
  if (isLoading) {
    return (
      <div className="main projects-section" id="opensource">
        <div className="projects-header">
          <h1 className="projects-title">
            <span className="title-highlight">Featured</span> Projects
          </h1>
          <p className="projects-subtitle">
            Showcasing innovative solutions and technical expertise
          </p>
        </div>
        <div className="repo-cards-div-main">
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p className="loading-text">Loading amazing projects...</p>
          </div>
        </div>
      </div>
    );
  }

  // Show error state with fallback content
  if (hasError || (typeof repo === "string" || repo instanceof String)) {
    return (
      <div className="main projects-section" id="opensource">
        <div className="projects-header">
          <h1 className="projects-title">
            <span className="title-highlight">Featured</span> Projects
          </h1>
          <p className="projects-subtitle">
            Showcasing innovative solutions and technical expertise
          </p>
        </div>
        <div className="repo-cards-div-main">
          <div className="fallback-content">
            <div className="fallback-icon">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Projects Coming Soon</h3>
            <p>My latest projects will be displayed here. In the meantime, check out my GitHub profile for a complete overview of my work.</p>
            <a 
              href={socialMediaLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button primary"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              Explore GitHub Profile
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Show GitHub projects
  return (
    <Suspense fallback={renderLoader()}>
      <div className="main projects-section" id="opensource">
        <div className="projects-header">
          <h1 className="projects-title">
            <span className="title-highlight">Featured</span> Projects
          </h1>
          <p className="projects-subtitle">
            Showcasing innovative solutions and technical expertise
          </p>
        </div>
        <div className="repo-cards-div-main">
          {repo.map((v, i) => {
            if (!v) {
              console.error(
                `Github Object for repository number : ${i} is undefined`
              );
              return null;
            }
            return (
              <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
            );
          })}
        </div>
        <div className="projects-footer">
          <a 
            href={socialMediaLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button secondary"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </a>
        </div>
      </div>
    </Suspense>
  );
}
