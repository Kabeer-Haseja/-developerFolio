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
              <div className="container modern-digital">
                <div className="section-header">
                  <h2 className="section-title text-gradient">Featured Projects</h2>
                  <p className="section-subtitle modern-description">
                    Explore a curated selection of innovative, impactful, and visually stunning projects that blend technology and creativity. Each project leverages modern frameworks, digital-first design, and elegant user experiences.
                  </p>
                </div>
                <Projects />
              </div>
            </section>
            
            {/* Blog Section */}
            <section className="blog-section section" id="blogs">
              <div className="container modern-digital">
                <div className="section-header">
                  <h2 className="section-title text-gradient">Latest Articles</h2>
                  <p className="section-subtitle modern-description">
                    Stay ahead with insights on emerging tech, digital transformation, and elegant solutions for the modern world. Thoughtfully crafted articles for developers, designers, and digital enthusiasts.
                  </p>
                </div>
                <Blogs />
              </div>
            </section>
            
            {/* Contact/Profile Section */}
            <section className="contact-section section" id="contact">
              <div className="container modern-digital">
                <div className="section-header">
                  <h2 className="section-title text-gradient">Let's Connect</h2>
                  <p className="section-subtitle modern-description">
                    Interested in collaborating, discussing digital innovation, or building something extraordinary? Reach out and let's create the future together.
                  </p>
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
