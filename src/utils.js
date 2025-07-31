export const formatFileSizeDisplay = value => {
  if (value < 1024) {
    return `${value} KB`;
  }
  return `${parseFloat((value / 1024).toFixed(1))} MB`;
};

// Enhanced scroll animation utilities
export const observeElements = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Add stagger delay to child elements
        const children = entry.target.querySelectorAll('.stagger-child');
        children.forEach((child, index) => {
          child.style.animationDelay = `${index * 0.1}s`;
          child.classList.add('animate-fadeInUp');
        });
      }
    });
  }, observerOptions);

  // Observe all fade-in sections
  const sections = document.querySelectorAll('.fade-in-section');
  sections.forEach(section => observer.observe(section));

  return observer;
};

// Smooth scroll to element with offset
export const smoothScrollTo = (elementId, offset = 80) => {
  const element = document.getElementById(elementId);
  if (element) {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};

// Parallax effect utility
export const initParallax = () => {
  const parallaxElements = document.querySelectorAll('.parallax');
  
  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    parallaxElements.forEach(element => {
      element.style.transform = `translate3d(0, ${rate}px, 0)`;
    });
  };

  // Throttle scroll events for performance
  let ticking = false;
  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(handleScroll);
      ticking = true;
      setTimeout(() => { ticking = false; }, 16);
    }
  };

  window.addEventListener('scroll', requestTick);
  return () => window.removeEventListener('scroll', requestTick);
};

// Mouse move parallax effect
export const initMouseParallax = () => {
  const parallaxElements = document.querySelectorAll('.mouse-parallax');
  
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    parallaxElements.forEach(element => {
      const speed = element.dataset.speed || 0.1;
      const x = (clientX - centerX) * speed;
      const y = (clientY - centerY) * speed;
      
      element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
  };

  document.addEventListener('mousemove', handleMouseMove);
  return () => document.removeEventListener('mousemove', handleMouseMove);
};
