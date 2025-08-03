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
    "I'm a Senior React Native Mobile App Developer 🚀 with 5+ years of experience architecting and delivering high-performance, scalable cross-platform applications for iOS and Android. I specialize in building enterprise-grade mobile solutions using React Native, TypeScript, Redux Toolkit, RTK Query, Firebase, and native integrations including biometrics, maps, push notifications, and Single Sign-On. \n\nMy expertise spans from performance optimization and pixel-perfect UI implementation to complex backend integrations and real-time features. I've successfully delivered applications used by millions of users across industries including real estate, e-commerce, automotive, and loyalty programs. I'm passionate about writing clean, maintainable code, implementing best practices, and continuously improving app architecture to deliver exceptional user experiences."
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
    "Crafting exceptional digital experiences through innovative technology solutions and best practices 🌟 Let's build something extraordinary together! 💻📱",
  skills: [
    emoji(
      "⚡ Architecting and developing highly responsive, scalable mobile applications using React Native with TypeScript, ensuring cross-platform compatibility and optimal performance"
    ),
    emoji(
      "⚡ Building Progressive Web Apps (PWAs) and Single Page Applications (SPAs) with modern JavaScript frameworks, implementing advanced state management and real-time features"
    ),
    emoji(
      "⚡ Integrating complex third-party services including Firebase, Redux Toolkit, RTK Query, payment gateways, push notifications, and location-based APIs for enhanced functionality"
    ),
    emoji(
      "⚡ Implementing advanced features like real-time chat, geofencing, biometric authentication, and AI-powered recommendations to create engaging user experiences"
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
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Git & GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "REST APIs",
      fontAwesomeClassname: "fas fa-code"
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
      Stack: "React Native Development", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Mobile App Architecture",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend Integration",
      progressPercentage: "85%"
    },
    {
      Stack: "UI/UX Implementation",
      progressPercentage: "88%"
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
      desc: "Leading the development of innovative location-aware mobile applications that drive user engagement and business growth through cutting-edge technology solutions.",
      descBullets: [
        "Architected and developed a React Native loyalty app with QR-based offer redemption system, resulting in a 25% increase in user-driven sales and 40% improvement in customer retention rates.",
        "Implemented advanced GPS and Google Maps APIs to deliver hyper-localized discounts and real-time visibility of nearby offers, achieving 30% higher engagement in location-based features.",
        "Integrated Firebase push notifications with personalized content delivery, leading to a 25% uplift in user interaction and 20% increase in daily active users.",
        "Collaborated with cross-functional teams including product managers, designers, and marketing to align app features with business objectives, resulting in improved customer satisfaction scores."
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Dubizzle (EMPG LABS)",
      companylogo: require("./assets/images/dubizzle.png"),
      date: "Jan 2022 – Present",
      location: "Lahore, Punjab — Remote",
      desc: "Driving digital transformation initiatives for real estate platforms across emerging markets, delivering high-impact mobile applications that serve millions of users.",
      descBullets: [
        "Led the complete refactoring of legacy React Native codebases to modern standards using TypeScript, React Native CLI, and functional components—achieving 35% performance improvement and 50% reduction in app crashes across Android and iOS platforms.",
        "Engineered seamless integration of third-party services including OneSignal, Google Maps, Crashlytics, and Firebase, enabling advanced features like real-time push notifications, location-based services, and comprehensive analytics tracking.",
        "Developed and deployed an innovative geofencing solution using GPS and Maps APIs to trigger personalized discounts and offers within a 0.5-mile radius, increasing redemption rates by 15% and driving 20% higher foot traffic to partner locations.",
        "Successfully upgraded the React Native framework from version 0.64.2 to 0.75, ensuring long-term stability, security updates, and compatibility with the latest ecosystem features and libraries.",
        "Contributed to cross-functional initiatives that enhanced app stability, reduced production crashes by 60%, and improved deployment cycles through automated CI/CD pipelines and comprehensive testing strategies."
      ]
    },
    {
      role: "Freelance Software Developer",
      company: "Fiverr & Upwork",
      companylogo: require("./assets/images/upworkk.png"),
      date: "May 2018 – May 2020",
      desc: "Delivered high-quality software solutions to diverse international clients, specializing in mobile app development and web applications with a focus on user experience and performance optimization.",
      descBullets: [
        "Developed and deployed 15+ mobile applications for iOS and Android using React Native, achieving 4.8+ star ratings and 95% client satisfaction across all projects.",
        "Built responsive web applications using modern JavaScript frameworks, implementing RESTful APIs, database design, and third-party integrations for e-commerce and business management platforms.",
        "Managed end-to-end project delivery including requirements gathering, technical architecture, development, testing, and deployment, ensuring on-time delivery and exceeding client expectations.",
        "Worked independently and managed time effectively to ensure project deliverables were completed on schedule while maintaining high code quality standards and comprehensive documentation."
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
  subtitle: "INNOVATIVE SOLUTIONS THAT DRIVE BUSINESS GROWTH AND USER ENGAGEMENT",
  projects: [
    {
      image: require("./assets/images/dubizzlecars.png"),
      projectName: "Dubizzle Motors Platform",
      projectDesc:
        "Architected and developed a comprehensive automotive marketplace serving 100K+ monthly users across UAE. Built a full-featured vehicle auction platform with real-time bidding, integrated payment gateways, and advanced search filters. Launched a car inspection service with GPS tracking, digital reports, and automated scheduling, completing 500+ inspections/month and reducing post-sale disputes by 40%. Implemented geofencing technology for location-based promotions and dealer partnerships.",
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
        "Led the development of a comprehensive CRM system for real estate platforms across MENA region (Pakistan, UAE, Saudi Arabia, Egypt). Integrated advanced task management, lead tracking, and sales pipeline automation, improving team productivity by 40%. Built custom dashboards for performance analytics, automated follow-up sequences, and integrated with multiple property listing platforms. Supported 100K+ active users across zameen.com, bayut.com, and olx.com with real-time data synchronization and multi-language support.",
      footerLink: [
        {
          name: "Learn More",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/olx.png"),
      projectName: "OLX E-commerce Ecosystem",
      projectDesc:
        "Developed a robust e-commerce platform with integrated payment gateways (Stripe, PayPal), logistics APIs, and real-time inventory management. Enhanced mobile app performance by 60% through React Native optimization and implemented advanced search algorithms. Built a seller dashboard with analytics, automated listing management, and bulk upload capabilities. Integrated AI-powered fraud detection and automated customer support chatbots, resulting in 30% increase in customer satisfaction and 25% reduction in support tickets.",
      footerLink: [
        {
          name: "Explore Platform",
          url: "https://www.olx.com.pk/"
        }
      ]
    },
    {
      image: require("./assets/images/connect_Icon.png"),
      projectName: "Connect Loyalty Platform",
      projectDesc:
        "Engineered a location-aware loyalty application with 100+ partnered retailers and 50K+ active users. Implemented real-time GPS tracking, geofencing for location-based promotions, and personalized recommendation engine using machine learning algorithms. Built a points-based reward system with tiered membership levels, automated redemption workflows, and social sharing features. Integrated with multiple POS systems and developed admin dashboard for partner analytics, achieving 35% increase in user engagement and 25% boost in repeat transactions.",
      footerLink: [
        {
          name: "View App",
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
