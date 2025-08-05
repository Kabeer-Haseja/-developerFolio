import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import SoftwareSkill from "../components/softwareSkills/SoftwareSkill";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";

const Main = () => {
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] = useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    } else {
      setIsShowingSplashAnimation(false);
    }
  }, []);

  // Light theme only - no theme switching
  const styleContext = {
    isDark: false,
    changeTheme: () => {} // No-op function
  };

  return (
    <div className="app-container">
      <StyleProvider value={styleContext}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <div className="main-content">
            <Header />
            
            {/* Hero Section with Animated Background */}
            <section className="hero-section section" id="home">
              <div className="hero-background">
                <div className="hero-gradient"></div>
                <div className="floating-particles">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className={`particle particle-${i + 1}`}></div>
                  ))}
                </div>
              </div>
              <Greeting />
            </section>
            
            {/* About & Skills Section */}
            <section className="skills-section section" id="skills">
              <div className="section-background">
                <div className="section-pattern"></div>
              </div>
              <div className="container">
                <Skills />
              </div>
            </section>
            
            {/* Technical Skills Section */}
            <section className="tech-skills-section section">
              <div className="container">
                <div className="section-header">
                  <h2 className="section-title text-gradient">Technical Expertise</h2>
                  <p className="section-subtitle">
                    Technologies and tools I work with to build exceptional applications
                  </p>
                </div>
                <SoftwareSkill />
              </div>
            </section>
            
            {/* Skills Progress Section */}
            <section className="progress-section section">
              <div className="section-background alt">
                <div className="section-pattern"></div>
              </div>
              <div className="container">
                <div className="section-header">
                  <h2 className="section-title">Proficiency Levels</h2>
                  <p className="section-subtitle">
                    My expertise across different technologies and frameworks
                  </p>
                </div>
                <StackProgress />
              </div>
            </section>
            
            {/* Education Section */}
            <section className="education-section section" id="education">
              <div className="container">
                <div className="section-header">
                  <h2 className="section-title text-gradient">Education</h2>
                  <p className="section-subtitle">
                    Academic background and continuous learning journey
                  </p>
                </div>
                <Education />
              </div>
            </section>
            
            {/* Experience Section */}
            <section className="experience-section section" id="experience">
              <div className="section-background">
                <div className="section-pattern"></div>
              </div>
              <div className="container">
                <div className="section-header">
                  <h2 className="section-title">Professional Experience</h2>
                  <p className="section-subtitle">
                    Building innovative solutions and leading development teams
                  </p>
                </div>
                <WorkExperience />
              </div>
            </section>
            
            {/* Projects Section */}
            <section className="projects-section section" id="projects">
              <div className="container">
                <div className="section-header modern-header">
                  <div className="section-badge">
                    <span className="badge-icon">🚀</span>
                    <span className="badge-text">Portfolio</span>
                  </div>
                  <h2 className="section-title text-gradient modern-title">
                    Featured Projects
                    <span className="title-accent"></span>
                  </h2>
                  <p className="section-subtitle modern-subtitle">
                    Showcasing applications that demonstrate technical expertise and innovation
                  </p>
                  <div className="section-decoration">
                    <div className="decoration-line"></div>
                    <div className="decoration-dot"></div>
                    <div className="decoration-line"></div>
                  </div>
                </div>
                <Projects />
              </div>
            </section>
            
            {/* Startup Projects Section */}
            <section className="startup-section section">
              <div className="section-background alt">
                <div className="section-pattern"></div>
              </div>
              <div className="container">
                <div className="section-header">
                  <h2 className="section-title">Startup Ventures</h2>
                  <p className="section-subtitle">
                    Entrepreneurial projects and innovative business solutions
                  </p>
                </div>
                <StartupProject />
              </div>
            </section>
            
            {/* Achievements Section */}
            <section className="achievements-section section" id="achievements">
              <div className="container">
                <div className="section-header">
                  <h2 className="section-title text-gradient">Achievements & Recognition</h2>
                  <p className="section-subtitle">
                    Awards, certifications, and professional milestones
                  </p>
                </div>
                <Achievement />
              </div>
            </section>
            
            {/* Blog Section */}
            <section className="blog-section section" id="blogs">
              <div className="section-background">
                <div className="section-pattern"></div>
              </div>
              <div className="container">
                <div className="section-header modern-header">
                  <div className="section-badge">
                    <span className="badge-icon">📝</span>
                    <span className="badge-text">Insights</span>
                  </div>
                  <h2 className="section-title text-gradient modern-title">
                    Latest Articles
                    <span className="title-accent"></span>
                  </h2>
                  <p className="section-subtitle modern-subtitle">
                    Sharing insights on technology, development, and industry trends
                  </p>
                  <div className="section-decoration">
                    <div className="decoration-line"></div>
                    <div className="decoration-dot"></div>
                    <div className="decoration-line"></div>
                  </div>
                </div>
                <Blogs />
              </div>
            </section>
            
            {/* Contact/Profile Section */}
            <section className="contact-section section" id="contact">
              <div className="container">
                <div className="section-header modern-header">
                  <div className="section-badge">
                    <span className="badge-icon">💬</span>
                    <span className="badge-text">Connect</span>
                  </div>
                  <h2 className="section-title text-gradient modern-title">
                    Let's Connect
                    <span className="title-accent"></span>
                  </h2>
                  <p className="section-subtitle modern-subtitle">
                    Ready to collaborate on your next project or discuss opportunities
                  </p>
                  <div className="section-decoration">
                    <div className="decoration-line"></div>
                    <div className="decoration-dot"></div>
                    <div className="decoration-line"></div>
                  </div>
                </div>
                <Profile />
              </div>
            </section>
            
            <Footer />
            <ScrollToTopButton />
            
            {/* Floating Action Button for Quick Contact */}
            <button 
              className="fab"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              aria-label="Contact"
            >
              💬
            </button>
          </div>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
