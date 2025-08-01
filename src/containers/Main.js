import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

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

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  try {
    return (
      <div className={isDark ? "dark-mode" : ""}>
        <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
          {isShowingSplashAnimation && splashScreen.enabled ? (
            <SplashScreen />
          ) : (
            <div className="portfolio-main">
              <Header />
              
              {/* Test Section */}
              <div style={{ 
                background: 'red', 
                color: 'white', 
                padding: '50px', 
                margin: '20px',
                fontSize: '24px',
                textAlign: 'center'
              }}>
                <h1>TEST - If you see this, React is working!</h1>
                <p>This is a test to see if React is rendering content.</p>
                <p>Dark mode: {isDark ? 'Yes' : 'No'}</p>
              </div>
              
              {/* Hero Section */}
              <section className="hero-section" id="greeting">
                <div className="hero-container">
                  <Greeting />
                </div>
              </section>
              
              {/* About & Skills Section */}
              <section className="about-section" id="skills">
                <div className="section-container">
                  <div style={{ background: 'green', color: 'white', padding: '20px', margin: '10px' }}>
                    <h2>Skills Section Test</h2>
                    <p>If you see this, the Skills section is working!</p>
                  </div>
                  <Skills />
                </div>
              </section>
              
              {/* Skills Progress Section */}
              <section className="skills-progress-section" id="skill-progress">
                <div className="section-container">
                  <div style={{ background: 'blue', color: 'white', padding: '20px', margin: '10px' }}>
                    <h2>Skills Progress Section Test</h2>
                    <p>If you see this, the Skills Progress section is working!</p>
                  </div>
                  <StackProgress />
                </div>
              </section>
              
              {/* Education Section */}
              <section className="education-section" id="education">
                <div className="section-container">
                  <div style={{ background: 'orange', color: 'white', padding: '20px', margin: '10px' }}>
                    <h2>Education Section Test</h2>
                    <p>If you see this, the Education section is working!</p>
                  </div>
                  <Education />
                </div>
              </section>
              
              {/* Experience Section */}
              <section className="experience-section" id="experience">
                <div className="section-container">
                  <div style={{ background: 'purple', color: 'white', padding: '20px', margin: '10px' }}>
                    <h2>Experience Section Test</h2>
                    <p>If you see this, the Experience section is working!</p>
                  </div>
                  <WorkExperience />
                </div>
              </section>
              
              {/* Projects Section */}
              <section className="projects-section" id="projects">
                <div className="section-container">
                  <div style={{ background: 'brown', color: 'white', padding: '20px', margin: '10px' }}>
                    <h2>Projects Section Test</h2>
                    <p>If you see this, the Projects section is working!</p>
                  </div>
                  <Projects />
                </div>
              </section>
              
              {/* Startup Projects Section */}
              <section className="startup-projects-section" id="startup-projects">
                <div className="section-container">
                  <div style={{ background: 'pink', color: 'white', padding: '20px', margin: '10px' }}>
                    <h2>Startup Projects Section Test</h2>
                    <p>If you see this, the Startup Projects section is working!</p>
                  </div>
                  <StartupProject />
                </div>
              </section>
              
              {/* Achievements Section */}
              <section className="achievements-section" id="achievements">
                <div className="section-container">
                  <div style={{ background: 'teal', color: 'white', padding: '20px', margin: '10px' }}>
                    <h2>Achievements Section Test</h2>
                    <p>If you see this, the Achievements section is working!</p>
                  </div>
                  <Achievement />
                </div>
              </section>
              
              {/* Blogs Section */}
              <section className="blogs-section" id="blogs">
                <div className="section-container">
                  <div style={{ background: 'navy', color: 'white', padding: '20px', margin: '10px' }}>
                    <h2>Blogs Section Test</h2>
                    <p>If you see this, the Blogs section is working!</p>
                  </div>
                  <Blogs />
                </div>
              </section>
              
              {/* Talks Section */}
              <section className="talks-section" id="talks">
                <div className="section-container">
                  <div style={{ background: 'maroon', color: 'white', padding: '20px', margin: '10px' }}>
                    <h2>Talks Section Test</h2>
                    <p>If you see this, the Talks section is working!</p>
                  </div>
                  <Talks />
                </div>
              </section>
              
              {/* Twitter Section */}
              <section className="twitter-section" id="twitter">
                <div className="section-container">
                  <div style={{ background: 'olive', color: 'white', padding: '20px', margin: '10px' }}>
                    <h2>Twitter Section Test</h2>
                    <p>If you see this, the Twitter section is working!</p>
                  </div>
                  <Twitter />
                </div>
              </section>
              
              {/* Podcast Section */}
              <section className="podcast-section" id="podcast">
                <div className="section-container">
                  <div style={{ background: 'coral', color: 'white', padding: '20px', margin: '10px' }}>
                    <h2>Podcast Section Test</h2>
                    <p>If you see this, the Podcast section is working!</p>
                  </div>
                  <Podcast />
                </div>
              </section>
              
              {/* Profile Section */}
              <section className="profile-section" id="profile">
                <div className="section-container">
                  <div style={{ background: 'indigo', color: 'white', padding: '20px', margin: '10px' }}>
                    <h2>Profile Section Test</h2>
                    <p>If you see this, the Profile section is working!</p>
                  </div>
                  <Profile />
                </div>
              </section>
              
              <Footer />
              <ScrollToTopButton />
            </div>
          )}
        </StyleProvider>
      </div>
    );
  } catch (error) {
    console.error("Error in Main component:", error);
    return (
      <div style={{ padding: '20px', color: '#003459' }}>
        <h1>Portfolio</h1>
        <p>Loading...</p>
        <p>Error: {error.message}</p>
      </div>
    );
  }
};

export default Main;
