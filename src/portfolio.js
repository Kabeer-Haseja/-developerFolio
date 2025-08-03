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
    "I'm a passionate Senior React Native Developer with 5+ years of experience crafting exceptional mobile experiences that drive business growth and user engagement. I specialize in building scalable, high-performance cross-platform applications using cutting-edge technologies like React Native, TypeScript, Redux Toolkit, and Firebase. \n\nMy expertise spans from architecting complex mobile solutions to optimizing app performance, implementing advanced features like biometric authentication, real-time notifications, and location-based services. I've successfully delivered 15+ production apps serving millions of users across real estate, e-commerce, and CRM domains. \n\nI'm driven by creating seamless user experiences, writing clean, maintainable code, and staying ahead of mobile development trends to deliver innovative solutions that exceed expectations."
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
    "Transforming innovative ideas into powerful, user-centric mobile applications that drive business success and deliver exceptional user experiences 🚀 Let's build the next big thing together! 💻📱",
  skills: [
    emoji(
      "⚡ Architecting and developing high-performance React Native applications with TypeScript, ensuring code quality, scalability, and maintainability across iOS and Android platforms"
    ),
    emoji(
      "⚡ Implementing advanced mobile features including biometric authentication, real-time push notifications, location-based services, and seamless third-party integrations"
    ),
    emoji(
      "⚡ Optimizing app performance through code refactoring, memory management, and implementing best practices, resulting in 35%+ performance improvements"
    ),
    emoji(
      "⚡ Leading cross-functional teams in agile environments, mentoring junior developers, and establishing coding standards that enhance team productivity and code quality"
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
        "Actively participated in tech community events, workshops, and industry talks to stay current with emerging technologies",
        "Completed advanced coursework in software engineering, algorithms, and mobile application development"
      ]
    },
    {
      schoolName: "Higher Secondary School",
      // logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Intermediate in Computer Science",
      duration: "September 2013 - April 2016",
      desc: "Developed strong foundation in computer science fundamentals and software development principles",
      descBullets: [
        "Gained hands-on experience with programming languages and software development methodologies",
        "Collaborated on group projects that enhanced problem-solving skills and team communication abilities",
        "Developed understanding of software security principles and best practices for secure application development"
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
      desc: "Leading the development of innovative location-aware mobile applications that revolutionize customer engagement and drive measurable business growth through cutting-edge mobile solutions.",
      descBullets: [
        "Engineered a React Native loyalty app with QR-based offer redemption system, achieving 25% increase in user-driven sales and 40% improvement in customer retention rates",
        "Architected and implemented GPS and Google Maps integration for location-based discount delivery, resulting in 30% higher offer redemption rates and enhanced user experience",
        "Designed and deployed Firebase push notification system that boosted user engagement by 25% through personalized, timely deal alerts and strategic marketing campaigns",
        "Collaborated with product managers and marketing teams to align technical solutions with business objectives, ensuring seamless integration of app features with overall company strategy"
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Dubizzle (EMPG LABS)",
      companylogo: require("./assets/images/dubizzle.png"),
      date: "Jan 2022 – Present",
      location: "Lahore, Punjab — Remote",
      desc: "Spearheading the development of high-impact mobile applications that power digital transformation for real estate platforms across emerging markets including Pakistan, UAE, and Egypt, serving millions of active users.",
      descBullets: [
        "Led comprehensive refactoring of legacy React Native codebases to modern standards using TypeScript and functional components, achieving 35% performance improvement and 50% reduction in crash rates across platforms",
        "Architected and implemented advanced third-party integrations including OneSignal, Google Maps, Crashlytics, and Firebase, enabling sophisticated features like real-time notifications and location-based services",
        "Developed innovative geofencing solution using GPS and Maps APIs that triggered personalized discounts within 0.5-mile radius, increasing redemption rates by 15% and boosting user engagement",
        "Successfully upgraded React Native framework from version 0.64.2 to 0.75, ensuring long-term stability and compatibility with the latest ecosystem while maintaining zero downtime during migration",
        "Established coding standards and best practices that improved team productivity by 25% and reduced code review time by 40%"
      ]
    },
    {
      role: "Freelance Mobile Developer",
      company: "Fiverr",
      companylogo: require("./assets/images/upworkk.png"),
      date: "May 2018 – May 2020",
      desc: "Delivered high-quality mobile development solutions to diverse international clients, building a reputation for reliability, technical excellence, and exceptional client communication.",
      descBullets: [
        "Developed and deployed 10+ production-ready mobile applications for iOS and Android using React Native, achieving 100% client satisfaction rate",
        "Managed end-to-end project delivery including requirements gathering, development, testing, and deployment while maintaining clear communication with clients across different time zones",
        "Demonstrated strong time management and project coordination skills, consistently delivering projects on time and within budget constraints"
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
  subtitle: "INNOVATIVE SOLUTIONS THAT TRANSFORMED BUSINESS OPERATIONS AND USER EXPERIENCES",
  projects: [
    {
      image: require("./assets/images/dubizzlecars.png"),
      projectName: "Dubizzle CRM Platform",
      projectDesc:
        "Architected and developed a comprehensive CRM system for Dubizzle's vehicle sales operations, revolutionizing how sales agents manage thousands of vehicle listings. The platform streamlined internal workflows, automated data tracking, and enhanced team coordination across inspection, auction, and seller operations, resulting in 40% improvement in team efficiency and 60% faster listing management.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://dubai.dubizzle.com/motors/"
        }
      ]
    },
    {
      image: require("./assets/images/dubizzlecars.png"),
      projectName: "Dubizzle Real-Time Auction Platform",
      projectDesc:
        "Engineered a sophisticated real-time vehicle auction platform within the Dubizzle ecosystem using React Native. Implemented secure bidding mechanisms, automated listing approvals, and live status tracking features. The platform achieved 30% increase in user engagement, tripled monthly car listings, and established a new revenue stream for the company while maintaining high security standards for financial transactions.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://dubai.dubizzle.com/motors/"
        }
      ]
    },
    {
      image: require("./assets/images/dubizzlecars.png"),
      projectName: "Dubizzle Mobile Inspection System",
      projectDesc:
        "Designed and implemented a comprehensive mobile inspection solution that revolutionized Dubizzle's vehicle evaluation process. The system enabled inspectors to complete 500+ detailed monthly reports with 200+ checkpoint validations per vehicle. This innovation reduced post-sale disputes by 40%, improved buyer confidence through transparent evaluations, and established industry-leading standards for vehicle inspection processes.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://dubai.dubizzle.com/motors/"
        }
      ]
    },
    {
      image: require("./assets/images/dubizzle_seller_center_icon.png"),
      projectName: "Dubizzle Seller Center Platform",
      projectDesc:
        "Built a full-stack product and order management ecosystem for Dubizzle sellers, empowering merchants to efficiently manage their business operations. The platform featured advanced listing management, order fulfillment tracking, performance analytics dashboards, and automated push notifications. This comprehensive solution enabled sellers to optimize their sales strategies and scale their operations effectively."
    },
    {
      image: require("./assets/images/jarvis_main_logo.png"),
      projectName: "Jarvis Real Estate CRM",
      projectDesc:
        "Led the development and integration of a sophisticated CRM system for Jarvis, transforming how real estate teams manage their operations. The platform improved task management efficiency by 40% and boosted sales team productivity significantly. Successfully supported 100K+ active users across multiple markets including Pakistan, UAE, Saudi Arabia, and Egypt, serving major platforms like zameen.com, bayut.com, and olx.com."
    },
    {
      image: require("./assets/images/olx.png"), // Replace with actual OLX logo if available
      projectName: "OLX E-commerce Mobile Platform",
      projectDesc:
        "Architected and implemented comprehensive payment gateway integrations and logistics management systems via REST APIs, resulting in 30% increase in customer satisfaction scores. Enhanced mobile app performance and user experience through advanced React Native optimizations, streamlining transactions across iOS and Android platforms while maintaining high security standards for financial operations."
    },
    {
      image: require("./assets/images/connect_Icon.png"),
      projectName: "Connect Location-Based Loyalty App",
      projectDesc:
        "Developed an innovative location-aware loyalty application that revolutionized customer engagement for 100+ partnered retailers. The app delivered personalized deals based on user location, achieving 35% increase in user engagement and 25% boost in repeat transactions through an intelligent points-based reward system. The platform successfully created a new channel for customer acquisition and retention."
    },
    {
      image: require("./assets/images/olxSellerCenter.png"),
      projectName: "OLX Seller Center Platform",
      projectDesc:
        "Engineered a comprehensive merchant platform for OLX that empowered businesses to efficiently manage their online presence. The platform featured advanced product listing tools, order management systems, shipment tracking, and real-time analytics. Integrated sophisticated analytics provided actionable insights for sellers to optimize their operations and maximize sales performance."
    },
   
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Recognition for technical excellence, innovation, and contributions to the developer community",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani developer to be selected as Google Code-in Finalist from 4000+ students across 77 countries, demonstrating exceptional coding skills and open-source contributions.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
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
        "Successfully developed and deployed a Google Assistant Action 'JavaScript Guru' that is available on 2+ billion devices worldwide, showcasing expertise in conversational AI and voice interface development.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "Progressive Web App Developer",
      subtitle: "Completed comprehensive certification from SMIT for Progressive Web App Development, demonstrating expertise in modern web technologies and cross-platform development.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Technical Insights",
  subtitle:
    "Sharing knowledge and insights from my journey in mobile development and software engineering",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Building Google Assistant Actions: A Complete Guide",
      description:
        "Comprehensive tutorial on creating Google Assistant Actions, including best practices, deployment strategies, and tips for winning Google's developer challenges"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "React Native Performance Optimization Strategies",
      description:
        "Advanced techniques for optimizing React Native applications, including memory management, bundle optimization, and performance monitoring best practices"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Speaking Engagements",
  subtitle: emoji(
    "Sharing knowledge and insights with the developer community through conferences and workshops 🎤"
  ),

  talks: [
    {
      title: "Building Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Sharing insights on mobile development, career growth, and technology trends",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to false
};

const contactInfo = {
  title: emoji("Let's Connect ☎️"),
  subtitle:
    "Ready to discuss your next project or explore collaboration opportunities? I'm always excited to connect with fellow developers and potential clients.",
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
