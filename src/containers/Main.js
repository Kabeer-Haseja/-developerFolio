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
import {observeElements, initParallax, initMouseParallax} from "../utils";
import "./Main.scss";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => {
          setIsShowingSplashAnimation(false);
          setIsLoaded(true);
        },
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    } else {
      setIsLoaded(true);
    }
  }, []);

  // Initialize scroll animations and parallax effects
  useEffect(() => {
    if (isLoaded && !isShowingSplashAnimation) {
      // Initialize scroll observer for fade-in animations
      const observer = observeElements();
      
      // Initialize parallax effects
      const cleanupParallax = initParallax();
      const cleanupMouseParallax = initMouseParallax();
      
      // Add fade-in-section class to all major sections
      const sections = [
        document.getElementById('greeting'),
        document.getElementById('skills'),
        document.getElementById('education'),
        document.getElementById('experience'),
        document.getElementById('projects'),
        document.getElementById('achievements'),
        document.getElementById('blogs'),
        document.getElementById('talks'),
        document.getElementById('contact')
      ].filter(Boolean);
      
      sections.forEach(section => {
        if (section && !section.classList.contains('fade-in-section')) {
          section.classList.add('fade-in-section');
        }
      });

      return () => {
        observer.disconnect();
        cleanupParallax();
        cleanupMouseParallax();
      };
    }
  }, [isLoaded, isShowingSplashAnimation]);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`main-container ${isDark ? "dark-mode" : ""}`}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <div className={`portfolio-content ${isLoaded ? 'loaded' : ''}`}>
            <Header />
            <main className="main-content">
              <section id="greeting" className="section-wrapper">
                <Greeting />
              </section>
              <section id="skills" className="section-wrapper">
                <Skills />
              </section>
              <section id="skill-progress" className="section-wrapper">
                <StackProgress />
              </section>
              <section id="education" className="section-wrapper">
                <Education />
              </section>
              <section id="experience" className="section-wrapper">
                <WorkExperience />
              </section>
              <section id="projects" className="section-wrapper">
                <Projects />
              </section>
              <section id="startup-projects" className="section-wrapper">
                <StartupProject />
              </section>
              <section id="achievements" className="section-wrapper">
                <Achievement />
              </section>
              <section id="blogs" className="section-wrapper">
                <Blogs />
              </section>
              <section id="talks" className="section-wrapper">
                <Talks />
              </section>
              <section id="twitter" className="section-wrapper">
                <Twitter />
              </section>
              <section id="podcast" className="section-wrapper">
                <Podcast />
              </section>
              <section id="profile" className="section-wrapper">
                <Profile />
              </section>
            </main>
            <Footer />
            <ScrollToTopButton />
          </div>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
