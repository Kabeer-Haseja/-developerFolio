import React, { useContext } from "react";
import StyleContext from "../../contexts/StyleContext";

export const OfficeWorkerSVG = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="100%" 
    height="100%" 
    viewBox="0 0 500 400"
    style={{ 
      display: 'block', 
      width: '100%', 
      height: 'auto',
      maxWidth: '500px',
      margin: '0 auto'
    }}
  >
    <rect width="500" height="400" fill="#f8f9fa"/>
    <rect x="50" y="250" width="400" height="20" fill="#8B4513"/>
    <rect x="50" y="270" width="400" height="10" fill="#654321"/>
    <rect x="200" y="150" width="100" height="80" fill="#2c3e50"/>
    <rect x="210" y="160" width="80" height="60" fill="#ecf0f1"/>
    <rect x="220" y="170" width="60" height="40" fill="#2c3e50"/>
    <rect x="230" y="180" width="40" height="3" fill="#27ae60"/>
    <rect x="230" y="185" width="50" height="3" fill="#e74c3c"/>
    <rect x="230" y="190" width="35" height="3" fill="#f39c12"/>
    <rect x="230" y="195" width="45" height="3" fill="#9b59b6"/>
    <rect x="230" y="200" width="30" height="3" fill="#3498db"/>
    <circle cx="250" cy="120" r="25" fill="#ecf0f1"/>
    <rect x="235" y="145" width="30" height="40" fill="#ecf0f1"/>
    <rect x="220" y="155" width="10" height="25" rx="5" fill="#ecf0f1"/>
    <rect x="270" y="155" width="10" height="25" rx="5" fill="#ecf0f1"/>
    <rect x="320" y="140" width="12" height="16" rx="6" fill="#e67e22"/>
    <rect x="322" y="142" width="8" height="12" rx="4" fill="#d35400"/>
    <rect x="230" y="200" width="40" height="50" fill="#4a4a4a"/>
    <rect x="235" y="205" width="30" height="40" fill="#6a6a6a"/>
    <circle cx="100" cy="100" r="15" fill="#003459" opacity="0.2"/>
    <circle cx="400" cy="80" r="12" fill="#003459" opacity="0.15"/>
    <circle cx="80" cy="320" r="18" fill="#003459" opacity="0.1"/>
    <circle cx="420" cy="350" r="14" fill="#003459" opacity="0.2"/>
  </svg>
);

export const DeveloperWorkingSVG = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="100%" 
    height="100%" 
    viewBox="0 0 500 400"
    style={{ 
      display: 'block', 
      width: '100%', 
      height: 'auto',
      maxWidth: '500px',
      margin: '0 auto'
    }}
  >
    {/* Background */}
    <rect width="500" height="400" fill="#f8f9fa"/>
    
    {/* Desk */}
    <rect x="50" y="280" width="400" height="20" fill="#8B4513"/>
    <rect x="50" y="300" width="400" height="10" fill="#654321"/>
    
    {/* Laptop */}
    <rect x="150" y="200" width="200" height="120" rx="8" fill="#2c3e50"/>
    <rect x="160" y="210" width="180" height="100" rx="4" fill="#ecf0f1"/>
    <rect x="170" y="220" width="160" height="80" rx="2" fill="#2c3e50"/>
    
    {/* Code on screen */}
    <rect x="180" y="230" width="60" height="3" fill="#27ae60"/>
    <rect x="180" y="240" width="80" height="3" fill="#e74c3c"/>
    <rect x="180" y="250" width="70" height="3" fill="#f39c12"/>
    <rect x="180" y="260" width="65" height="3" fill="#9b59b6"/>
    <rect x="180" y="270" width="75" height="3" fill="#3498db"/>
    <rect x="180" y="280" width="55" height="3" fill="#e67e22"/>
    <rect x="180" y="290" width="85" height="3" fill="#1abc9c"/>
    
    {/* Developer figure */}
    <circle cx="250" cy="120" r="25" fill="#ecf0f1"/>
    <rect x="235" y="145" width="30" height="40" fill="#ecf0f1"/>
    
    {/* Arms */}
    <rect x="220" y="155" width="10" height="25" rx="5" fill="#ecf0f1"/>
    <rect x="270" y="155" width="10" height="25" rx="5" fill="#ecf0f1"/>
    
    {/* Coffee cup */}
    <rect x="320" y="140" width="12" height="16" rx="6" fill="#e67e22"/>
    <rect x="322" y="142" width="8" height="12" rx="4" fill="#d35400"/>
    
    {/* Mobile phone */}
    <rect x="80" y="200" width="40" height="70" rx="6" fill="#2c3e50"/>
    <rect x="85" y="205" width="30" height="60" rx="3" fill="#ecf0f1"/>
    <rect x="90" y="210" width="20" height="50" rx="2" fill="#2c3e50"/>
    <rect x="95" y="215" width="10" height="3" fill="#27ae60"/>
    <rect x="95" y="220" width="10" height="3" fill="#e74c3c"/>
    <rect x="95" y="225" width="10" height="3" fill="#f39c12"/>
    
    {/* Floating tech icons */}
    <circle cx="100" cy="100" r="8" fill="#003459" opacity="0.3"/>
    <circle cx="400" cy="80" r="6" fill="#003459" opacity="0.25"/>
    <circle cx="80" cy="320" r="10" fill="#003459" opacity="0.2"/>
    <circle cx="420" cy="350" r="7" fill="#003459" opacity="0.15"/>
  </svg>
);

export const MobileDeveloperSVG = () => {
  const { isDark } = useContext(StyleContext);
  
  return (
    <div style={{
      width: '100%',
      height: '400px',
      backgroundColor: isDark ? '#2a2a2a' : '#f8f9fa',
      border: `3px solid ${isDark ? '#444' : '#e0e0e0'}`,
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: isDark ? '0 10px 30px rgba(0, 0, 0, 0.3)' : '0 10px 30px rgba(0, 0, 0, 0.1)'
    }}>
      {/* Background pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: isDark 
          ? 'linear-gradient(45deg, #2a2a2a 25%, transparent 25%), linear-gradient(-45deg, #2a2a2a 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #2a2a2a 75%), linear-gradient(-45deg, transparent 75%, #2a2a2a 75%)'
          : 'linear-gradient(45deg, #f8f9fa 25%, transparent 25%), linear-gradient(-45deg, #f8f9fa 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f8f9fa 75%), linear-gradient(-45deg, transparent 75%, #f8f9fa 75%)',
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
        opacity: 0.3
      }} />
      
      {/* Main content */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        zIndex: 1
      }}>
        {/* Developer icon */}
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          backgroundColor: '#3498db',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '40px',
          color: 'white',
          boxShadow: '0 4px 20px rgba(52, 152, 219, 0.3)'
        }}>
          👨‍💻
        </div>
        
        {/* Mobile devices */}
        <div style={{
          display: 'flex',
          gap: '20px',
          alignItems: 'center'
        }}>
          <div style={{
            width: '60px',
            height: '100px',
            backgroundColor: '#2c3e50',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
            boxShadow: '0 4px 15px rgba(44, 62, 80, 0.3)'
          }}>
            <div style={{ width: '30px', height: '4px', backgroundColor: '#27ae60', borderRadius: '2px' }} />
            <div style={{ width: '25px', height: '4px', backgroundColor: '#e74c3c', borderRadius: '2px' }} />
            <div style={{ width: '35px', height: '4px', backgroundColor: '#f39c12', borderRadius: '2px' }} />
            <div style={{ width: '20px', height: '4px', backgroundColor: '#9b59b6', borderRadius: '2px' }} />
          </div>
          
          <div style={{
            width: '60px',
            height: '100px',
            backgroundColor: '#3498db',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
            boxShadow: '0 4px 15px rgba(52, 152, 219, 0.3)'
          }}>
            <div style={{ width: '30px', height: '4px', backgroundColor: '#27ae60', borderRadius: '2px' }} />
            <div style={{ width: '25px', height: '4px', backgroundColor: '#e74c3c', borderRadius: '2px' }} />
            <div style={{ width: '35px', height: '4px', backgroundColor: '#f39c12', borderRadius: '2px' }} />
            <div style={{ width: '20px', height: '4px', backgroundColor: '#9b59b6', borderRadius: '2px' }} />
          </div>
          
          <div style={{
            width: '60px',
            height: '100px',
            backgroundColor: '#e74c3c',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
            boxShadow: '0 4px 15px rgba(231, 76, 60, 0.3)'
          }}>
            <div style={{ width: '30px', height: '4px', backgroundColor: '#27ae60', borderRadius: '2px' }} />
            <div style={{ width: '25px', height: '4px', backgroundColor: '#e74c3c', borderRadius: '2px' }} />
            <div style={{ width: '35px', height: '4px', backgroundColor: '#f39c12', borderRadius: '2px' }} />
            <div style={{ width: '20px', height: '4px', backgroundColor: '#9b59b6', borderRadius: '2px' }} />
          </div>
        </div>
        
        {/* Tech stack icons */}
        <div style={{
          display: 'flex',
          gap: '15px',
          marginTop: '10px'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#61dafb',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            color: 'white',
            boxShadow: '0 2px 10px rgba(97, 218, 251, 0.3)'
          }}>
            ⚛️
          </div>
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#42b883',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            color: 'white',
            boxShadow: '0 2px 10px rgba(66, 184, 131, 0.3)'
          }}>
            📱
          </div>
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#f7df1e',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            color: 'white',
            boxShadow: '0 2px 10px rgba(247, 223, 30, 0.3)'
          }}>
            🚀
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        width: '30px',
        height: '30px',
        backgroundColor: '#003459',
        borderRadius: '50%',
        opacity: 0.1
      }} />
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '30px',
        width: '25px',
        height: '25px',
        backgroundColor: '#003459',
        borderRadius: '50%',
        opacity: 0.15
      }} />
    </div>
  );
};

// Simple test SVG for debugging
export const TestSVG = () => (
  <div style={{
    width: '100%',
    height: '300px',
    backgroundColor: '#3498db',
    border: '2px solid #2980b9',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold'
  }}>
    🎯 Skills SVG Test - This Should Be Visible!
  </div>
);