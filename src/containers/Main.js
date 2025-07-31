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
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : ""}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <div className="portfolio-main">
            <Header />
            
            {/* Hero Section */}
            <section className="hero-section" id="greeting">
              <div className="hero-container">
                <Greeting />
              </div>
            </section>
            
            {/* About & Skills Section */}
            <section className="about-section" id="skills">
              <div className="section-container">
                <Skills />
              </div>
            </section>
            
            {/* Skills Progress Section */}
            <section className="skills-progress-section" id="skill-progress">
              <div className="section-container">
                <StackProgress />
              </div>
            </section>
            
            {/* Education Section */}
            <section className="education-section" id="education">
              <div className="section-container">
                <Education />
              </div>
            </section>
            
            {/* Experience Section */}
            <section className="experience-section" id="experience">
              <div className="section-container">
                <WorkExperience />
              </div>
            </section>
            
            {/* Projects Section */}
            <section className="projects-section" id="projects">
              <div className="section-container">
                <Projects />
              </div>
            </section>
            
            {/* Startup Projects Section */}
            <section className="startup-projects-section" id="startup-projects">
              <div className="section-container">
                <StartupProject />
              </div>
            </section>
            
            {/* Achievements Section */}
            <section className="achievements-section" id="achievements">
              <div className="section-container">
                <Achievement />
              </div>
            </section>
            
            {/* Blogs Section */}
            <section className="blogs-section" id="blogs">
              <div className="section-container">
                <Blogs />
              </div>
            </section>
            
            {/* Talks Section */}
            <section className="talks-section" id="talks">
              <div className="section-container">
                <Talks />
              </div>
            </section>
            
            {/* Twitter Section */}
            <section className="twitter-section" id="twitter">
              <div className="section-container">
                <Twitter />
              </div>
            </section>
            
            {/* Podcast Section */}
            <section className="podcast-section" id="podcast">
              <div className="section-container">
                <Podcast />
              </div>
            </section>
            
            {/* Profile Section */}
            <section className="profile-section" id="profile">
              <div className="section-container">
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
};

export default Main;
