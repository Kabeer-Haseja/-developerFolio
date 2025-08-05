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
import {useLocalStorage} from "../hooks/useLocalStorage";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: light)");
  const [isDark, setIsDark] = useLocalStorage("isLight", darkPref.matches);
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

  return (
    <div style={{
      background: isDark ? '#1a1a1a' : '#ffffff',
      color: isDark ? '#ffffff' : '#000000',
      minHeight: '100vh',
      fontFamily: 'Inter, sans-serif'
    }}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <div style={{ padding: '0' }}>
            <Header />
            
            {/* Hero Section */}
            <section style={{
              minHeight: '100vh',
              display: 'flex',
              alignItems: 'center',
              background: 'linear-gradient(135deg, rgba(0, 52, 89, 0.02) 0%, rgba(248, 249, 250, 0.8) 100%)',
              padding: '0'
            }}>
              <div style={{ width: '100%' }}>
                <Greeting />
              </div>
            </section>
            
            {/* About & Skills Section */}
            <section style={{
              padding: '6rem 0',
              background: isDark ? '#1a1a1a' : '#ffffff'
            }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <Skills />
              </div>
            </section>
            
            {/* Software Skills Section */}
            <section style={{
              padding: '6rem 0',
              background: isDark ? '#2a2a2a' : '#f8f9fa'
            }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <SoftwareSkill />
              </div>
            </section>
            
            {/* Skills Progress Section */}
            <section style={{
              padding: '6rem 0',
              background: isDark ? '#1a1a1a' : '#ffffff'
            }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <StackProgress />
              </div>
            </section>
            
            {/* Education Section */}
            <section style={{
              padding: '6rem 0',
              background: isDark ? '#2a2a2a' : '#f8f9fa'
            }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <Education />
              </div>
            </section>
            
            {/* Experience Section */}
            <section style={{
              padding: '6rem 0',
              background: isDark ? '#1a1a1a' : '#ffffff'
            }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <WorkExperience />
              </div>
            </section>
            
            {/* Projects Section */}
            <section style={{
              padding: '6rem 0',
              background: isDark ? '#2a2a2a' : '#f8f9fa'
            }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <Projects />
              </div>
            </section>
            
            {/* Startup Projects Section */}
            <section style={{
              padding: '6rem 0',
              background: isDark ? '#1a1a1a' : '#ffffff'
            }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <StartupProject />
              </div>
            </section>
            
            {/* Achievements Section */}
            <section style={{
              padding: '6rem 0',
              background: isDark ? '#2a2a2a' : '#f8f9fa'
            }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <Achievement />
              </div>
            </section>
            
            {/* Blogs Section */}
            <section style={{
              padding: '6rem 0',
              background: isDark ? '#1a1a1a' : '#ffffff'
            }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <Blogs />
              </div>
            </section>
            
            {/* Profile Section */}
            <section style={{
              padding: '6rem 0',
              background: isDark ? '#2a2a2a' : '#f8f9fa'
            }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
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
