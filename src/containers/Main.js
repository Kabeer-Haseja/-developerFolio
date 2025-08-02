import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";

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

  return (
    <div style={{ 
      background: isDark ? '#1a1a1a' : '#ffffff',
      color: isDark ? '#ffffff' : '#000000',
      minHeight: '100vh',
      fontFamily: 'Inter, sans-serif'
    }}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <div>Loading...</div>
        ) : (
          <div style={{ padding: '20px' }}>
            <Header />
            
            {/* Test Section 1 */}
            <div style={{ 
              background: 'red', 
              color: 'white', 
              padding: '50px', 
              margin: '20px',
              fontSize: '24px',
              textAlign: 'center',
              border: '3px solid black'
            }}>
              <h1>TEST 1 - React is working!</h1>
              <p>This is a test to see if React is rendering content.</p>
              <p>Dark mode: {isDark ? 'Yes' : 'No'}</p>
            </div>
            
            {/* Test Section 2 */}
            <div style={{ 
              background: 'blue', 
              color: 'white', 
              padding: '50px', 
              margin: '20px',
              fontSize: '24px',
              textAlign: 'center',
              border: '3px solid black'
            }}>
              <h1>TEST 2 - Content is visible!</h1>
              <p>If you see this blue box, content is rendering.</p>
            </div>
            
            {/* Test Section 3 */}
            <div style={{ 
              background: 'green', 
              color: 'white', 
              padding: '50px', 
              margin: '20px',
              fontSize: '24px',
              textAlign: 'center',
              border: '3px solid black'
            }}>
              <h1>TEST 3 - All sections working!</h1>
              <p>If you see this green box, everything is working.</p>
            </div>
            
            {/* Footer */}
            <div style={{ 
              background: 'purple', 
              color: 'white', 
              padding: '20px', 
              margin: '20px',
              textAlign: 'center'
            }}>
              <p>Footer - If you see this, the page is complete!</p>
            </div>
          </div>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
