import React from "react";
import "./Greeting.scss";

import {greeting} from "../../portfolio";

export default function Greeting() {
  if (!greeting.displayGreeting) {
    return null;
  }
  
  return (
    <div style={{ 
      background: 'purple', 
      color: 'white', 
      padding: '50px', 
      margin: '20px',
      fontSize: '18px'
    }}>
      <h1 style={{ color: 'white', fontSize: '32px' }}>
        {greeting.title}
      </h1>
      
      <p style={{ color: 'white', fontSize: '18px' }}>
        {greeting.subTitle}
      </p>
      
      <div style={{ marginTop: '20px' }}>
        <a 
          href="#contact" 
          style={{ 
            background: 'white', 
            color: 'purple', 
            padding: '10px 20px', 
            textDecoration: 'none',
            borderRadius: '5px',
            marginRight: '10px'
          }}
        >
          Get in touch
        </a>
        
        {greeting.resumeLink && (
          <a 
            href={greeting.resumeLink} 
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              background: 'transparent', 
              color: 'white', 
              padding: '10px 20px', 
              textDecoration: 'none',
              borderRadius: '5px',
              border: '2px solid white'
            }}
          >
            View Resume
          </a>
        )}
      </div>
    </div>
  );
}
