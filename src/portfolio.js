/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Kabeer Haseja",
  title: "Hi there, I'm Kabeer 👋",
  subTitle: emoji(
    "I'm a passionate Senior React Native Developer with 5+ years of experience crafting exceptional mobile experiences that drive business growth and user engagement. I specialize in building scalable, high-performance cross-platform applications using cutting-edge technologies like React Native, TypeScript, Redux Toolkit, and Firebase. \n\nMy expertise spans from architecting complex mobile solutions to implementing advanced features like real-time location services, biometric authentication, push notifications, and seamless third-party integrations. I've successfully delivered apps used by millions of users across real estate, e-commerce, and CRM platforms, consistently achieving 25-40% improvements in performance, user engagement, and business metrics. \n\nI'm driven by the challenge of solving complex technical problems while maintaining clean, maintainable code and exceptional user experiences."
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/1eZ70lh4aQ8sfYto2T4n9LJRujYxJX6Ux?usp=sharing", // Leave empty to hide
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Kabeer-Haseja",
  linkedin: "https://www.linkedin.com/in/kabeer-haseja",
  gmail: "haseja45@gmail.com",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "Transforming innovative ideas into powerful, user-centric mobile applications that drive business success and deliver exceptional user experiences 🚀 Let's build the next generation of mobile apps together! 💻📱",
  skills: [
    emoji(
      "⚡ Architecting and developing high-performance React Native applications with TypeScript, Redux Toolkit, and modern React patterns for seamless cross-platform experiences"
    ),
    emoji(
      "⚡ Implementing advanced mobile features including real-time location services, biometric authentication, push notifications, and seamless third-party API integrations"
    ),
    emoji(
      "⚡ Optimizing app performance through code refactoring, memory management, and implementing best practices that result in 25-40% performance improvements"
    ),
    emoji(
      "⚡ Leading technical initiatives and mentoring development teams while collaborating with cross-functional stakeholders to deliver business-critical mobile solutions"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "React Native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "Redux Toolkit",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "RTK Query",
      fontAwesomeClassname: "fas fa-bolt" // Fallback icon
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sukkur IBA University",
      logo: require("./assets/images/iba.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2017 - July 2021",
      desc: "Graduated with distinction, awarded the prestigious Sindh Endowment Scholarship for academic excellence",
      descBullets: [
        "Led multiple hackathon teams and coding competitions, developing innovative solutions for real-world problems",
        "Actively participated in tech community events and industry workshops to stay current with emerging technologies",
        "Completed advanced coursework in software engineering, algorithms, and mobile application development"
      ]
    },
    {
      schoolName: "Higher Secondary School",
      // logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Intermediate in Computer Science",
      duration: "September 2013 - April 2016",
      desc: "Developed strong foundational knowledge in computer science principles and software development methodologies",
      descBullets: [
        "Gained hands-on experience with programming fundamentals and software development best practices",
        "Learned essential concepts in web security, network protocols, and software system architecture",
        "Collaborated on group projects that enhanced problem-solving, teamwork, and communication skills"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "React Native Development", //Insert stack or technology you have experience in
      progressPercentage: "98%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Mobile App Architecture",
      progressPercentage: "95%"
    },
    {
      Stack: "Performance Optimization",
      progressPercentage: "92%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Barmajja",
      companylogo: require("./assets/images/connect_Icon.png"), // Make sure you add this logo to your assets
      date: "Dec 2024 – Present",
      location: "United Arab Emirates — Remote",
      desc: "Leading the development of innovative location-aware mobile applications that drive user engagement and business growth through cutting-edge mobile technologies and strategic feature implementations.",
      descBullets: [
        "Engineered a React Native loyalty app with QR-based offer redemption system, achieving a 25% increase in user-driven sales within Q1 through strategic feature optimization",
        "Architected and implemented GPS and Google Maps API integration for location-based discount delivery, providing real-time visibility of nearby offers and enhancing user experience",
        "Designed and deployed Firebase push notification system that boosted user engagement by 25% through intelligent, timely deal alerts and personalized updates",
        "Collaborated with marketing and business teams to align app features with strategic objectives, resulting in improved customer retention and increased user lifetime value"
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Dubizzle (EMPG LABS)",
      companylogo: require("./assets/images/dubizzle.png"),
      date: "Jan 2022 – Present",
      location: "Lahore, Punjab — Remote",
      desc: "Spearheading the development of high-impact mobile applications that power digital transformation for real estate platforms across emerging markets including Pakistan, UAE, and Egypt, serving millions of users.",
      descBullets: [
        "Led comprehensive refactoring of legacy React Native codebases to modern standards using TypeScript, React Native CLI, and functional components, achieving 35% performance improvement across Android and iOS platforms",
        "Architected and implemented integration of critical third-party services including OneSignal, Google Maps, Crashlytics, and Firebase for advanced features like real-time push notifications and location-based services",
        "Developed and deployed an innovative geofencing solution using GPS and Maps APIs that triggers personalized discounts within a 0.5-mile radius, increasing redemption rates by 15% and driving user engagement",
        "Successfully upgraded React Native framework from version 0.64.2 to 0.75, ensuring long-term stability and compatibility with the latest ecosystem while maintaining app performance",
        "Contributed to cross-functional initiatives that enhanced app stability, reduced crash rates by 40%, and improved deployment cycles for production releases"
      ]
    },
    {
      role: "Freelance Mobile Developer",
      company: "Fiverr",
      companylogo: require("./assets/images/upworkk.png"),
      date: "May 2018 – May 2020",
      desc: "Delivered high-quality mobile development solutions to international clients, specializing in React Native applications and cross-platform development with a focus on performance and user experience.",
      descBullets: [
        "Developed and deployed mobile applications for iOS and Android platforms using React Native, consistently achieving 4.9+ star ratings from satisfied clients",
        "Managed end-to-end project delivery including requirements analysis, development, testing, and deployment while maintaining strict deadlines and quality standards",
        "Built scalable, maintainable codebases that supported business growth and provided long-term value to clients across various industries"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Projects",
  subtitle: "INNOVATIVE MOBILE SOLUTIONS THAT DRIVE BUSINESS GROWTH AND USER ENGAGEMENT",
  projects: [
    {
      image: require("./assets/images/dubizzlecars.png"),
      projectName: "Dubizzle CRM Platform",
      projectDesc:
        "Architected and developed a comprehensive CRM system for Dubizzle's vehicle marketplace, enabling sales agents to efficiently manage thousands of vehicle listings. The platform streamlined internal workflows, automated data tracking, and enhanced team coordination across inspection, auction, and seller operations, resulting in a 40% improvement in team efficiency and significant reduction in operational overhead.",
      footerLink: [
        {
          name: "Visit Platform",
          url: "https://dubai.dubizzle.com/motors/"
        }
      ]
    },
    {
      image: require("./assets/images/dubizzlecars.png"),
      projectName: "Dubizzle Live Auction System",
      projectDesc:
        "Engineered a sophisticated real-time vehicle auction platform within the Dubizzle ecosystem using React Native and WebSocket technology. Implemented secure bidding mechanisms, automated listing approvals, and live status tracking features that transformed the user experience. The platform achieved a 30% increase in user engagement and tripled monthly car listings, establishing a new revenue stream for the business.",
      footerLink: [
        {
          name: "Explore Auctions",
          url: "https://dubai.dubizzle.com/motors/"
        }
      ]
    },
    {
      image: require("./assets/images/dubizzlecars.png"),
      projectName: "Dubizzle Vehicle Inspection App",
      projectDesc:
        "Designed and developed a comprehensive mobile inspection solution that revolutionized Dubizzle's vehicle evaluation process. The app enabled inspectors to complete 500+ detailed monthly reports with 200+ checkpoint validations per vehicle, significantly reducing post-sale disputes by 40% and improving buyer confidence through transparent, standardized car evaluations.",
      footerLink: [
        {
          name: "Learn More",
          url: "https://dubai.dubizzle.com/motors/"
        }
      ]
    },
    {
      image: require("./assets/images/dubizzle_seller_center_icon.png"),
      projectName: "Dubizzle Seller Center",
      projectDesc:
        "Built a full-stack product and order management system that empowered Dubizzle sellers with comprehensive business tools. The platform featured advanced listing management, order fulfillment workflows, performance analytics dashboards, and intelligent push notifications, enabling merchants to optimize their sales strategy and scale their operations efficiently."
    },
    {
      image: require("./assets/images/jarvis_main_logo.png"),
      projectName: "Jarvis Real Estate CRM",
      projectDesc:
        "Led the development and integration of a comprehensive CRM system for Jarvis, serving 100K+ active users across Pakistan, UAE, Saudi Arabia, and Egypt. The platform supported major real estate platforms including zameen.com, bayut.com, and olx.com, improving task management efficiency by 40% and significantly boosting sales team productivity through automated workflows and intelligent lead management."
    },
    {
      image: require("./assets/images/olx.png"), // Replace with actual OLX logo if available
      projectName: "OLX E-commerce Mobile Platform",
      projectDesc:
        "Architected and implemented seamless payment gateway integrations and logistics management via REST APIs, resulting in a 30% increase in customer satisfaction scores. Enhanced mobile app performance and user experience through React Native optimization, streamlining transactions across iOS and Android platforms while maintaining security and reliability standards."
    },
    {
      image: require("./assets/images/connect_Icon.png"),
      projectName: "Connect Loyalty & Rewards App",
      projectDesc:
        "Developed a sophisticated location-aware loyalty application that partnered with 100+ retailers to offer personalized deals and rewards. Implemented advanced location-based promotional systems and a comprehensive points-based reward mechanism that increased user engagement by 35% and boosted repeat transactions by 25%, creating a sustainable ecosystem for both users and merchants."
    },
    {
      image: require("./assets/images/olxSellerCenter.png"),
      projectName: "OLX Seller Center Platform",
      projectDesc:
        "Engineered a comprehensive merchant platform for OLX that empowered businesses to efficiently list products, manage orders, and track shipments in real-time. Integrated advanced analytics and reporting tools to provide actionable insights on sales performance and market trends, enabling sellers to make data-driven decisions and scale their operations effectively."
    },
   
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Professional Achievements & Certifications 🏆 "),
  subtitle:
    "Recognition of technical excellence, industry certifications, and significant contributions to the mobile development ecosystem",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "Distinguished as the first Pakistani developer selected as a Google Code-in Finalist, competing among 4000+ students from 77 countries worldwide. This recognition highlights exceptional coding skills and contributions to open-source projects.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action Developer",
      subtitle:
        "Successfully developed and deployed a Google Assistant Action called 'JavaScript Guru' that is accessible on over 2 billion devices worldwide. This achievement demonstrates expertise in conversational AI and voice interface development.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Experience the Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "Progressive Web App Specialist",
      subtitle: "Completed comprehensive certification in Progressive Web App Development from SMIT, demonstrating expertise in modern web technologies and cross-platform development methodologies.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "View Certification", url: ""},
        {
          name: "Final Project Demo",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Technical Insights & Industry Perspectives",
  subtitle:
    "Sharing knowledge, experiences, and insights from my journey in mobile development and software engineering",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Building Google Assistant Actions: A Complete Guide to Winning Google Cloud Credits",
      description:
        "Comprehensive tutorial on creating Google Assistant Actions, including best practices, deployment strategies, and how to leverage Google's developer programs for cloud credits and recognition."
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why React Native is Revolutionizing Mobile Development",
      description:
        "Deep dive into React Native's advantages for cross-platform development, performance optimization techniques, and real-world implementation strategies for building scalable mobile applications."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Speaking Engagements & Knowledge Sharing",
  subtitle: emoji(
    "PASSIONATE ABOUT SHARING KNOWLEDGE AND CONTRIBUTING TO THE DEVELOPER COMMUNITY 🎤"
  ),

  talks: [
    {
      title: "Building Actions For Google Assistant",
      subtitle: "Featured speaker at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast Appearances 🎙️"),
  subtitle: "SHARING INSIGHTS ON MOBILE DEVELOPMENT, TECHNOLOGY TRENDS, AND CAREER GROWTH",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to false
};

const contactInfo = {
  title: emoji("Let's Connect & Build Something Amazing ☎️"),
  subtitle:
    "Ready to discuss your next mobile project or explore collaboration opportunities? I'm always excited to connect with fellow developers and potential partners.",
  number: "+92-3377304400",
  email_address: "haseja45@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
