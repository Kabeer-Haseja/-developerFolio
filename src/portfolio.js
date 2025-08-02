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
  title: "Senior Mobile App Developer",
  subTitle: emoji(
    "I transform complex business challenges into elegant mobile solutions that millions of users love. With 5+ years crafting React Native applications, I specialize in building scalable, high-performance apps that drive real business impact. \n\nFrom real estate platforms serving 100K+ users to loyalty apps boosting engagement by 35%, I've delivered solutions that matter. My expertise spans the full mobile development stack—React Native, TypeScript, Redux, Firebase, and native integrations—with a focus on clean architecture, performance optimization, and exceptional user experiences."
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
  title: "Technical Expertise",
  subTitle:
    "I architect and build mobile applications that scale, perform, and delight users. My technical foundation enables me to tackle complex challenges and deliver solutions that exceed expectations.",
  skills: [
    emoji(
      "🚀 Architecting scalable React Native applications with TypeScript, Redux, and modern state management patterns"
    ),
    emoji(
      "⚡ Optimizing app performance through code refactoring, memory management, and efficient rendering strategies"
    ),
    emoji(
      "🔧 Integrating complex third-party services including Firebase, Google Maps, push notifications, and biometric authentication"
    ),
    emoji(
      "🎯 Leading cross-functional teams to deliver high-impact features that drive business metrics and user engagement"
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
      skillName: "Redux/RTK",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "Git/GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "REST APIs",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Performance",
      fontAwesomeClassname: "fas fa-tachometer-alt"
    },
    {
      skillName: "Testing",
      fontAwesomeClassname: "fas fa-vial"
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
      desc: "Graduated with distinction, awarded Sindh Endowment Scholarship for academic excellence",
      descBullets: [
        "Developed strong foundation in algorithms, data structures, and software engineering principles",
        "Led technical projects and participated in hackathons, building practical problem-solving skills",
        "Collaborated with peers on complex software solutions, honing teamwork and communication abilities"
      ]
    },
    {
      schoolName: "Higher Secondary School",
      // logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Intermediate in Computer Science",
      duration: "September 2013 - April 2016",
      desc: "Established core understanding of computer science fundamentals and programming concepts",
      descBullets: [
        "Built first mobile applications and web projects, sparking passion for software development",
        "Developed analytical thinking and problem-solving skills through hands-on programming projects",
        "Learned the importance of security, optimization, and user experience in software design"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Mobile Development", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend Integration",
      progressPercentage: "85%"
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
      companylogo: require("./assets/images/appIcon.png"), // Make sure you add this logo to your assets
      date: "Dec 2024 – Present",
      location: "United Arab Emirates — Remote",
      desc: "Leading development of innovative location-aware mobile applications that drive user engagement and business growth through cutting-edge technology solutions.",
      descBullets: [
        "Architected and developed a React Native loyalty app with QR-based offer redemption, achieving 25% increase in user-driven sales within Q1",
        "Implemented advanced location services using GPS and Google Maps APIs, delivering personalized discounts and real-time offer visibility",
        "Designed and deployed Firebase push notification system, resulting in 25% uplift in user engagement through strategic deal alerts",
        "Collaborated with cross-functional teams to align technical solutions with business objectives, improving customer retention and satisfaction"
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Dubizzle (EMPG LABS)",
      companylogo: require("./assets/images/dubizzle.png"),
      date: "Jan 2022 – Present",
      location: "Lahore, Punjab — Remote",
      desc: "Driving digital transformation of real estate platforms across emerging markets (Pakistan, UAE, Egypt) through high-impact mobile applications serving millions of users.",
      descBullets: [
        "Led comprehensive refactoring of legacy React Native codebases to modern standards using TypeScript and functional components, achieving 35% performance improvement across Android and iOS platforms",
        "Engineered integration of critical third-party services including OneSignal, Google Maps, Crashlytics, and Firebase for advanced features like real-time push notifications and location-based services",
        "Developed sophisticated geofencing solution using GPS and Maps APIs to trigger personalized discounts within 0.5-mile radius, increasing redemption rates by 15%",
        "Successfully upgraded React Native framework from version 0.64.2 to 0.75, ensuring stability and compatibility with latest ecosystem while maintaining app performance",
        "Contributed to cross-functional initiatives that enhanced app stability, reduced crashes by 40%, and improved deployment cycles in production environments"
      ]
    },
    {
      role: "Freelance Mobile Developer",
      company: "Fiverr",
      companylogo: require("./assets/images/upworkk.png"),
      date: "May 2018 – May 2020",
      desc: "Delivered high-quality mobile applications for international clients, building expertise in cross-platform development and client communication.",
      descBullets: [
        "Developed and deployed mobile applications for iOS and Android using React Native, consistently exceeding client expectations",
        "Managed end-to-end project delivery including requirements gathering, development, testing, and deployment",
        "Built strong client relationships through clear communication, timely delivery, and technical excellence"
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
  subtitle: "Innovative solutions that drive business impact and user engagement",
  projects: [
    {
      image: require("./assets/images/dubizzlecars.png"),
      projectName: "Dubizzle Motors Platform",
      projectDesc:
        "Scaled Dubizzle's automotive marketplace to support 100K+ monthly listings. Built comprehensive vehicle auction platform boosting engagement by 30% and tripling listings. Launched car inspection service completing 500+ inspections/month, reducing post-sale disputes by 40%.",
      footerLink: [
        {
          name: "Visit Platform",
          url: "https://dubai.dubizzle.com/motors/"
        }
      ]
    },
    {
      image: require("./assets/images/img.png"),
      projectName: "Jarvis Real Estate CRM",
      projectDesc:
        "Led CRM integration for Jarvis, improving task management efficiency by 40% and boosting sales team productivity. Supported 100K+ active users across Pakistan, UAE, Saudi Arabia, and Egypt for platforms like zameen.com, bayut.com, and olx.com.",
      footerLink: [
        {
          name: "Learn More",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/olx.png"),
      projectName: "OLX E-commerce Platform",
      projectDesc:
        "Integrated payment gateways and logistics via REST APIs, resulting in 30% increase in customer satisfaction. Enhanced mobile app performance and UX by integrating React Native, streamlining transactions across iOS and Android platforms.",
      footerLink: [
        {
          name: "Visit OLX",
          url: "https://olx.com"
        }
      ]
    },
    {
      image: require("./assets/images/appIcon.png"),
      projectName: "Connect Loyalty App",
      projectDesc:
        "Built location-aware loyalty app offering personalized deals from 100+ partnered retailers. Increased user engagement by 35% through location-based promotions and boosted repeat transactions by 25% with innovative points-based reward system.",
      footerLink: [
        {
          name: "View Details",
          url: "#"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Recognition & Achievements 🏆"),
  subtitle:
    "Professional recognition, certifications, and notable contributions to the tech community",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani selected as Google Code-in Finalist from 4000+ students across 77 countries, demonstrating exceptional coding skills and open source contribution.",
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
          name: "Google Blog Post",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action Developer",
      subtitle:
        "Developed JavaScript Guru Google Assistant Action available on 2+ billion devices worldwide, showcasing expertise in voice technology and AI integration.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Try the Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },
    {
      title: "PWA Web App Developer",
      subtitle: "Completed comprehensive certification from SMIT for Progressive Web App Development, mastering modern web technologies and user experience optimization.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "View Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Technical Writing",
  subtitle:
    "Sharing knowledge and insights from my journey in mobile development and software engineering",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Building Google Assistant Actions: A Complete Guide",
      description:
        "Learn how to create Google Assistant Actions and win Google Cloud credits. Step-by-step guide for developers."
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why React Native is the Future of Mobile Development",
      description:
        "Exploring the advantages of React Native for cross-platform mobile development and why it's becoming the industry standard."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Speaking Engagements",
  subtitle: emoji(
    "Sharing knowledge and experiences with the developer community 🎤"
  ),

  talks: [
    {
      title: "Building Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast Appearances 🎙️"),
  subtitle: "Sharing insights on mobile development, technology trends, and career growth",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Let's Connect ☎️"),
  subtitle:
    "Ready to discuss your next project or explore collaboration opportunities? I'm always open to meaningful conversations about technology and innovation.",
  number: "+92-3377304400",
  email_address: "haseja45@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
