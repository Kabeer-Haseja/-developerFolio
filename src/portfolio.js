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
    "I'm a Senior React Native Mobile App Developer 🚀 with 5+ years of experience architecting and building high-performance, scalable cross-platform applications for iOS and Android. I specialize in creating seamless mobile experiences using React Native, TypeScript, Redux, RTK Query, Firebase, and native integrations including biometrics, maps, push notifications, and Single Sign-On. \n\nMy expertise spans from performance optimization and pixel-perfect UI implementation to writing clean, maintainable code and delivering enterprise-grade applications used across industries like real estate, e-commerce, and CRM. I'm passionate about solving complex technical challenges and continuously improving app architecture, user experience, and development efficiency."
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
    "Transforming innovative ideas into beautiful, intuitive, and high-performing Web and Mobile Applications 🌟 Let's build something amazing together! 💻📱",
  skills: [
    emoji(
      "⚡ Architecting and developing highly responsive and interactive user interfaces for Web and Mobile applications using React.js and React Native with TypeScript"
    ),
    emoji(
      "⚡ Building Progressive Web Apps (PWAs) and Single Page Applications (SPAs) with modern JavaScript frameworks and state management solutions like Redux and RTK Query"
    ),
    emoji(
      "⚡ Seamless integration of third-party services including Firebase, Google Maps, OneSignal, payment gateways, and REST APIs for comprehensive app functionality"
    ),
    emoji(
      "⚡ Implementing advanced features like real-time chat, push notifications, geofencing, biometric authentication, and location-based services for enhanced user experience"
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
      skillName: "Redux",
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
      skillName: "CSS3/SCSS",
      fontAwesomeClassname: "fab fa-css3-alt"
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
      desc: "Awarded with Sindh Endowment Scholarship",
      descBullets: [
        "Engaged in extracurricular activities such as hackathons, coding competitions, and tech community events to broaden my skills and network",
        "Attended industry talks and workshops to learn about the latest trends and technologies in software engineering"
      ]
    },
    {
      schoolName: "Higher Secondary School",
      // logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Intermediate",
      duration: "September 2013 - April 2016",
      desc: "Through hands-on assignments and projects, I developed a solid understanding of fundamental concepts in computer science and gained experience in applying them to real-world problems.",
      descBullets: [
        "Developed an appreciation for the importance of security in software systems and learned about techniques for securing web applications and networks",
        "Collaborated with peers on group projects, honing my teamwork and communication skills while working on software solutions to real-world problems"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "98%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "95%"
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
      desc: "Leading the development of innovative location-aware mobile applications that drive business growth and enhance user engagement through cutting-edge technology solutions.",
      descBullets: [
        "Architected and developed a React Native loyalty application with QR-based offer redemption system, resulting in a 25% increase in user-driven sales within Q1 of launch.",
        "Integrated GPS and Google Maps APIs to deliver hyper-localized discounts and real-time visibility of nearby offers, improving user retention by 40%.",
        "Implemented Firebase push notifications and analytics to boost user engagement, achieving a 25% uplift in daily active users through personalized deal alerts.",
        "Collaborated with cross-functional teams including marketing, design, and product to align app features with business objectives, improving customer lifetime value by 30%.",
        "Optimized app performance and reduced crash rates by 60% through code refactoring and implementing best practices in React Native development."
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Dubizzle (EMPG LABS)",
      companylogo: require("./assets/images/dubizzle.png"),
      date: "Jan 2022 – Present",
      location: "Lahore, Punjab — Remote",
      desc: "Driving digital transformation for real estate platforms across emerging markets including Pakistan, UAE, and Egypt through scalable mobile solutions and innovative features.",
      descBullets: [
        "Refactored legacy React Native codebases to modern standards using TypeScript, React Native CLI, and functional components—achieving 35% improvement in app performance across Android and iOS platforms.",
        "Integrated comprehensive 3rd-party services including OneSignal, Google Maps, Crashlytics, and Firebase for advanced features like real-time push notifications, location-based services, and crash analytics.",
        "Deployed an intelligent geofencing solution using GPS and Maps APIs to trigger personalized discounts and offers within a 0.5-mile radius, increasing redemption rates by 15% and user engagement by 25%.",
        "Successfully upgraded React Native framework from version 0.64.2 to 0.75, ensuring stability and compatibility with the latest ecosystem while maintaining backward compatibility.",
        "Led cross-functional initiatives that enhanced app stability, reduced production crashes by 70%, and improved deployment cycles through CI/CD pipeline optimization."
      ]
    },
    {
      role: "Freelance Software Developer",
      company: "Fiverr",
      companylogo: require("./assets/images/upworkk.png"),
      date: "May 2018 – May 2020",
      desc: "Delivered high-quality software solutions to international clients, specializing in mobile app development and web applications with a focus on user experience and performance.",
      descBullets: [
        "Developed and deployed 15+ mobile applications for iOS and Android using React Native, achieving 4.9/5 client satisfaction rating across all projects.",
        "Built responsive web applications using React.js, Node.js, and modern JavaScript frameworks, ensuring cross-browser compatibility and optimal performance.",
        "Managed end-to-end project delivery including requirements gathering, development, testing, and deployment while maintaining clear communication with clients.",
        "Worked independently and managed time effectively to ensure project deliverables were completed on time and exceeded client expectations.",
        "Gained expertise in various industries including e-commerce, healthcare, and education through diverse project requirements and client needs."
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
  subtitle: "SOME NOTABLE PROJECTS AND COMPANIES I'VE HELPED BUILD AND SCALE",
  projects: [
    {
      image: require("./assets/images/dubizzlecars.png"),
      projectName: "Dubizzle Motors Platform",
      projectDesc:
        "Led the development of Dubizzle's comprehensive automotive marketplace serving 100K+ monthly users. Built a full-featured vehicle auction platform that increased user engagement by 30% and tripled listing volume. Implemented a car inspection service completing 500+ inspections/month, reducing post-sale disputes by 40%. Integrated real-time bidding, payment gateways, and advanced search filters using React Native and Firebase.",
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
        "Architected and developed a comprehensive CRM system for Jarvis, serving 100K+ active users across Pakistan, UAE, Saudi Arabia, and Egypt. Integrated with major platforms including zameen.com, bayut.com, and olx.com. Improved task management efficiency by 40% and boosted sales team productivity through automated workflows, lead tracking, and analytics dashboards. Built with React Native, Redux, and REST APIs.",
      footerLink: [
        {
          name: "Learn More",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/olx.png"),
      projectName: "OLX E-commerce Mobile App",
      projectDesc:
        "Developed and optimized OLX's cross-platform mobile application handling millions of transactions. Integrated multiple payment gateways and logistics services via REST APIs, resulting in 30% increase in customer satisfaction. Enhanced app performance by 35% through React Native optimization and implemented advanced features like real-time chat, push notifications, and location-based services.",
      footerLink: [
        {
          name: "View App",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/connect_Icon.png"),
      projectName: "Connect Loyalty Platform",
      projectDesc:
        "Built a location-aware loyalty application serving 100+ partnered retailers with personalized deals and rewards. Implemented GPS integration and geofencing to deliver location-based promotions, increasing user engagement by 35%. Developed a sophisticated points-based reward system that boosted repeat transactions by 25%. Features include real-time offer notifications, QR code redemption, and analytics dashboard.",
      footerLink: [
        {
          name: "Explore Features",
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
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
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
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
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
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
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
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
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
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
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
