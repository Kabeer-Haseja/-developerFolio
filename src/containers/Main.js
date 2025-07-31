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
            
            <section className="portfolio-section" id="greeting">
              <Greeting />
            </section>
            
            <section className="portfolio-section" id="skills">
              <Skills />
            </section>
            
            <section className="portfolio-section" id="skill-progress">
              <StackProgress />
            </section>
            
            <section className="portfolio-section" id="education">
              <Education />
            </section>
            
            <section className="portfolio-section" id="experience">
              <WorkExperience />
            </section>
            
            <section className="portfolio-section" id="projects">
              <Projects />
            </section>
            
            <section className="portfolio-section" id="startup-projects">
              <StartupProject />
            </section>
            
            <section className="portfolio-section" id="achievements">
              <Achievement />
            </section>
            
            <section className="portfolio-section" id="blogs">
              <Blogs />
            </section>
            
            <section className="portfolio-section" id="talks">
              <Talks />
            </section>
            
            <section className="portfolio-section" id="twitter">
              <Twitter />
            </section>
            
            <section className="portfolio-section" id="podcast">
              <Podcast />
            </section>
            
            <section className="portfolio-section" id="profile">
              <Profile />
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
