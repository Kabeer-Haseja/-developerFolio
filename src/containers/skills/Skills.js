import React, { useState, useEffect } from "react";
import "./Skills.scss";
import { skillsSection } from "../../portfolio";

function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    {
      title: "Mobile Architecture",
      icon: "📱",
      color: "#0070f3",
      skills: [
        "React Native Development",
        "Cross-platform Solutions", 
        "Native Module Integration",
        "Performance Optimization"
      ]
    },
    {
      title: "Frontend Excellence",
      icon: "🎨",
      color: "#7c3aed",
      skills: [
        "Modern React Patterns",
        "TypeScript Implementation",
        "State Management",
        "UI/UX Development"
      ]
    },
    {
      title: "Backend Systems",
      icon: "⚙️",
      color: "#06b6d4",
      skills: [
        "API Development",
        "Database Design",
        "Cloud Integration",
        "Microservices"
      ]
    },
    {
      title: "DevOps & Tools",
      icon: "🚀",
      color: "#10b981",
      skills: [
        "CI/CD Pipelines",
        "Version Control",
        "Testing Frameworks",
        "Code Quality"
      ]
    }
  ];

  return (
    <div className="skills-main-container">
      {/* Section Header */}
      <div className="skills-header">
        <div className="header-badge">
          <span className="badge-icon">💻</span>
          <span className="badge-text">What I Do</span>
        </div>
        
        <h1 className="skills-main-title">
          Transforming Ideas into 
          <span className="title-highlight"> Digital Reality</span>
        </h1>
        
        <p className="skills-main-subtitle">
          Building next-generation mobile applications with cutting-edge technologies 
          and delivering exceptional user experiences that drive business success
        </p>
      </div>

      {/* Interactive Skills Grid */}
      <div className="skills-content">
        <div className="skills-categories-nav">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`category-nav-item ${activeCategory === index ? 'active' : ''}`}
              onClick={() => setActiveCategory(index)}
              style={{ '--category-color': category.color }}
            >
              <span className="nav-icon">{category.icon}</span>
              <span className="nav-title">{category.title}</span>
            </button>
          ))}
        </div>

        <div className="skills-display-area">
          <div className="active-category-content">
            <div className="category-header">
              <div 
                className="category-icon-large"
                style={{ background: `linear-gradient(135deg, ${categories[activeCategory].color}, ${categories[activeCategory].color}dd)` }}
              >
                {categories[activeCategory].icon}
              </div>
              <h3 className="category-title">{categories[activeCategory].title}</h3>
            </div>
            
            <div className="category-skills">
              {categories[activeCategory].skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="skill-indicator"></div>
                  <span className="skill-text">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Enhancement */}
          <div className="skills-visual">
            <div className="floating-elements">
              <div className="float-element element-1">⚛️</div>
              <div className="float-element element-2">📱</div>
              <div className="float-element element-3">🔧</div>
              <div className="float-element element-4">⚡</div>
            </div>
            
            <div className="code-snippet">
              <div className="code-header">
                <div className="code-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="code-title">skills.js</span>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="code-keyword">const</span>
                  <span className="code-variable"> expertise</span>
                  <span className="code-operator"> = </span>
                  <span className="code-punctuation">{'{'}</span>
                </div>
                <div className="code-line">
                  <span className="code-property">  mobile</span>
                  <span className="code-punctuation">: </span>
                  <span className="code-string">'React Native'</span>
                  <span className="code-punctuation">,</span>
                </div>
                <div className="code-line">
                  <span className="code-property">  frontend</span>
                  <span className="code-punctuation">: </span>
                  <span className="code-string">'TypeScript'</span>
                  <span className="code-punctuation">,</span>
                </div>
                <div className="code-line">
                  <span className="code-property">  passion</span>
                  <span className="code-punctuation">: </span>
                  <span className="code-string">'Innovation'</span>
                </div>
                <div className="code-line">
                  <span className="code-punctuation">{'}'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Highlights */}
      <div className="skills-highlights">
        <div className="highlight-item">
          <div className="highlight-number">5+</div>
          <div className="highlight-label">Years Experience</div>
        </div>
        <div className="highlight-item">
          <div className="highlight-number">50+</div>
          <div className="highlight-label">Projects Delivered</div>
        </div>
        <div className="highlight-item">
          <div className="highlight-number">1M+</div>
          <div className="highlight-label">Users Impacted</div>
        </div>
        <div className="highlight-item">
          <div className="highlight-number">25-40%</div>
          <div className="highlight-label">Performance Boost</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
