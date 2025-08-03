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
    "I'm a passionate Senior React Native Mobile App Developer 🚀 with 5+ years of experience crafting exceptional cross-platform mobile applications for iOS and Android. My expertise lies in transforming complex business requirements into elegant, scalable, and user-centric mobile solutions.\n\nI specialize in building high-performance applications using cutting-edge technologies including React Native, TypeScript, Redux Toolkit, RTK Query, Firebase, and seamless native integrations. From biometric authentication and real-time geolocation services to push notifications and Single Sign-On implementations, I deliver comprehensive mobile experiences that drive business growth.\n\nWith a proven track record of optimizing app performance, implementing pixel-perfect UIs, and architecting robust, maintainable codebases, I've successfully contributed to products serving millions of users across industries including real estate, e-commerce, CRM, and loyalty platforms. I'm passionate about solving complex technical challenges, mentoring development teams, and continuously pushing the boundaries of mobile innovation."
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
    "Transforming innovative ideas into exceptional, user-centric mobile and web applications 🌟 Let's build the future together! 💻📱",
  skills: [
    emoji(
      "⚡ Architecting and developing highly responsive, scalable React Native applications with exceptional user experiences for both iOS and Android platforms"
    ),
    emoji(
      "⚡ Building enterprise-grade Progressive Web Apps (PWAs) and Single Page Applications (SPAs) using modern JavaScript ecosystems and performance optimization techniques"
    ),
    emoji(
      "⚡ Seamlessly integrating complex third-party services including Firebase, Redux Toolkit, RESTful APIs, real-time push notifications, advanced mapping solutions, and secure payment gateways"
    ),
    emoji(
      "⚡ Implementing real-time communication features with advanced chat functionality, WebSocket integrations, and live data synchronization for enhanced user engagement"
    ),
    emoji(
      "⚡ Optimizing application performance through code splitting, lazy loading, memory management, and implementing robust state management patterns for scalable architectures"
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
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "JavaScript ES6+",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "GraphQL",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "REST APIs",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Git & CI/CD",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "AWS/Cloud",
      fontAwesomeClassname: "fab fa-aws"
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
        "Specialized in Software Engineering, Data Structures & Algorithms, and Mobile Application Development with focus on modern development methodologies",
        "Actively participated in competitive programming, hackathons, and tech innovation challenges, securing top positions in multiple university-level competitions",
        "Led development teams in capstone projects, building real-world applications and contributing to open-source initiatives",
        "Engaged with industry professionals through seminars, workshops, and internships to stay current with emerging technologies and best practices"
      ]
    },
    {
      schoolName: "Government Degree College",
      // logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Higher Secondary Certificate - Pre-Engineering",
      duration: "September 2013 - April 2016",
      desc: "Built a strong foundation in mathematics, physics, and computer science fundamentals that would prove essential for software engineering career",
      descBullets: [
        "Developed analytical thinking and problem-solving skills through advanced mathematics and logical reasoning coursework",
        "Gained early exposure to programming concepts and computer systems architecture, fostering a deep interest in technology",
        "Participated in science fairs and technology exhibitions, showcasing innovative projects and solutions",
        "Collaborated on group projects and presentations, developing essential teamwork and communication skills for professional software development"
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
      progressPercentage: "92%"
    },
    {
      Stack: "Backend Integration",
      progressPercentage: "85%"
    },
    {
      Stack: "DevOps & Cloud",
      progressPercentage: "78%"
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
      company: "Barmajja Technologies",
      companylogo: require("./assets/images/connect_Icon.png"),
      date: "Dec 2024 – Present",
      location: "United Arab Emirates — Remote",
      desc: "Leading the development of innovative location-aware mobile applications that revolutionize customer engagement and drive significant business growth through cutting-edge technology solutions.",
      descBullets: [
        "Spearheaded the development of a React Native loyalty application featuring advanced QR-based offer redemption system, resulting in a remarkable 25% increase in user-driven sales within the first quarter",
        "Architected and implemented sophisticated GPS integration with Google Maps APIs to deliver precision location-based discounts and real-time visibility of nearby offers, enhancing user experience and merchant value",
        "Designed and deployed Firebase-powered push notification system with personalized targeting, achieving a 25% boost in user engagement through strategic deal alerts and timely promotional updates",
        "Collaborated closely with cross-functional teams including product managers, designers, and marketing specialists to align technical implementations with business objectives, resulting in improved customer retention and market positioning"
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Dubizzle (EMPG LABS)",
      companylogo: require("./assets/images/dubizzle.png"),
      date: "Jan 2022 – Present",
      location: "Lahore, Punjab — Remote",
      desc: "Driving digital transformation at one of the largest classifieds platforms in the MENA region, developing mission-critical mobile applications that serve millions of users across Pakistan, UAE, and Egypt's real estate and automotive markets.",
      descBullets: [
        "Led comprehensive modernization of legacy React Native codebases, implementing TypeScript, React Native CLI, and functional programming patterns—achieving a 35% performance improvement across both Android and iOS platforms",
        "Architected seamless integration of enterprise-grade third-party services including OneSignal for push notifications, Google Maps for location services, Firebase Crashlytics for error tracking, and advanced analytics platforms",
        "Pioneered implementation of sophisticated geofencing solutions using GPS and Maps APIs, enabling personalized discount triggers within 0.5-mile radius zones, resulting in a 15% increase in offer redemption rates",
        "Successfully orchestrated React Native framework upgrade from version 0.64.2 to 0.75, ensuring enhanced stability, security, and compatibility with the latest ecosystem while maintaining zero downtime",
        "Championed cross-functional collaboration initiatives that significantly enhanced application stability, reduced crash rates by 40%, and streamlined deployment processes for faster time-to-market in production environments"
      ]
    },
    {
      role: "Freelance Software Developer",
      company: "Upwork & Fiverr",
      companylogo: require("./assets/images/upworkk.png"),
      date: "May 2018 – December 2021",
      location: "Global — Remote",
      desc: "Delivered high-quality custom software solutions to international clients, building expertise in diverse technologies while maintaining exceptional client satisfaction and project delivery standards.",
      descBullets: [
        "Successfully completed 50+ mobile and web development projects for clients across North America, Europe, and Asia, maintaining a 98% client satisfaction rating",
        "Specialized in end-to-end React Native application development, from initial concept and design to deployment on both iOS App Store and Google Play Store",
        "Implemented complex features including real-time chat systems, payment gateway integrations, social media authentication, and cloud storage solutions",
        "Managed multiple concurrent projects while adhering to strict deadlines, demonstrating exceptional time management and communication skills in remote collaboration environments",
        "Built long-term client relationships resulting in repeat business and referrals, contributing to steady revenue growth and professional network expansion"
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
  subtitle: "ENTERPRISE SOLUTIONS AND INNOVATIVE PRODUCTS THAT HAVE MADE A SIGNIFICANT IMPACT",
  projects: [
    {
      image: require("./assets/images/dubizzlecars.png"),
      projectName: "Dubizzle CRM Platform",
      projectDesc:
        "Engineered a comprehensive Customer Relationship Management system for Dubizzle's sales operations, enabling efficient management of thousands of vehicle listings. The platform streamlined complex internal workflows, automated data tracking processes, and facilitated seamless coordination across inspection, auction, and seller operations—resulting in a 40% boost in team efficiency and significantly improved operational scalability.",
      footerLink: [
        {
          name: "Visit Platform",
          url: "https://dubai.dubizzle.com/motors/"
        }
      ]
    },
    {
      image: require("./assets/images/dubizzlecars.png"),
      projectName: "Real-Time Vehicle Auction Platform",
      projectDesc:
        "Developed a sophisticated real-time vehicle auction ecosystem within the Dubizzle marketplace using React Native and WebSocket technology. The platform features secure bidding mechanisms, automated listing approvals, live status tracking, and real-time notifications. This innovation led to a 30% increase in user engagement, tripled monthly car listings, and established a new revenue stream worth millions in transaction value.",
      footerLink: [
        {
          name: "Explore Platform",
          url: "https://dubai.dubizzle.com/motors/"
        }
      ]
    },
    {
      image: require("./assets/images/dubizzlecars.png"),
      projectName: "Mobile Vehicle Inspection Solution",
      projectDesc:
        "Created an enterprise-grade mobile inspection application that revolutionized Dubizzle's quality assurance process. The solution enables field inspectors to efficiently complete 500+ monthly comprehensive reports with 200+ checkpoint validations per vehicle. Features include offline capability, photo documentation, digital signatures, and automated report generation—reducing post-sale disputes by 40% and significantly improving buyer confidence.",
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
        "Architected a comprehensive full-stack product and order management ecosystem for Dubizzle merchants. The platform empowers sellers with advanced listing management, order fulfillment automation, real-time performance analytics, and strategic insights through custom dashboards. Features include inventory management, automated pricing suggestions, bulk operations, and intelligent push notifications that have increased seller productivity by 50%."
    },
    {
      image: require("./assets/images/jarvis_main_logo.png"),
      projectName: "Jarvis Real Estate CRM",
      projectDesc:
        "Led the development and integration of Jarvis, an AI-powered CRM solution that transformed real estate operations across multiple markets. The platform improved task management efficiency by 40%, enhanced sales team productivity through automated lead scoring, and streamlined client communication workflows. Successfully supporting 100K+ active users across Pakistan, UAE, Saudi Arabia, and Egypt for major platforms including zameen.com, bayut.com, and olx.com."
    },
    {
      image: require("./assets/images/olx.png"),
      projectName: "OLX E-commerce Platform",
      projectDesc:
        "Enhanced OLX's core e-commerce infrastructure by implementing secure payment gateway integrations and optimizing logistics APIs, resulting in a 30% increase in customer satisfaction scores. Significantly improved mobile application performance through React Native optimizations, streamlined transaction processes, and implemented advanced search and filtering capabilities that enhanced user experience across both iOS and Android platforms."
    },
    {
      image: require("./assets/images/connect_Icon.png"),
      projectName: "Connect Loyalty Ecosystem",
      projectDesc:
        "Built an intelligent location-aware loyalty application offering personalized deals from 100+ partnered retailers across multiple categories. The platform leverages machine learning algorithms for personalized recommendations, geofencing technology for location-based promotions, and a sophisticated points-based reward system. Achieved a 35% increase in user engagement and 25% boost in repeat transactions while providing valuable analytics to partner businesses."
    },
    {
      image: require("./assets/images/olxSellerCenter.png"),
      projectName: "OLX Seller Center Platform",
      projectDesc:
        "Developed a comprehensive merchant empowerment platform enabling businesses to efficiently manage their online presence on OLX. Features include advanced product listing tools, automated order management, shipment tracking integration, and comprehensive analytics dashboard providing real-time sales insights and performance metrics. The platform has empowered thousands of sellers to scale their operations and optimize their business strategies effectively."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Professional milestones, industry certifications, and recognition that showcase my commitment to excellence and continuous learning in software development.",

  achievementsCards: [
    {
      title: "React Native Expert Certification",
      subtitle:
        "Achieved advanced certification in React Native development, demonstrating expertise in cross-platform mobile application architecture, performance optimization, and native module integration.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "React Native Certification",
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        }
      ]
    },
    {
      title: "AWS Cloud Solutions Architect",
      subtitle:
        "Certified in designing and implementing scalable, highly available, and cost-effective cloud solutions on Amazon Web Services, enhancing my ability to build robust backend infrastructures for mobile applications.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "AWS Certification",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://aws.amazon.com/certification/"
        }
      ]
    },
    {
      title: "Mobile App Security Specialist",
      subtitle: "Completed advanced certification in mobile application security, covering secure coding practices, data encryption, authentication protocols, and protection against common mobile security threats.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Security Certification",
      footerLink: [
        {name: "View Certificate", url: ""},
        {
          name: "Security Best Practices",
          url: "https://owasp.org/www-project-mobile-top-10/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Technical Blog & Knowledge Sharing",
  subtitle:
    "Passionate about sharing insights, best practices, and innovative solutions in mobile development to help the developer community grow and learn together.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@haseja45/optimizing-react-native-performance",
      title: "Advanced React Native Performance Optimization Techniques",
      description:
        "Comprehensive guide covering memory management, bundle optimization, and native bridge optimization techniques that can improve your React Native app performance by up to 40%."
    },
    {
      url: "https://dev.to/kabeerhaseja/typescript-react-native-best-practices",
      title: "TypeScript in React Native: Best Practices and Patterns",
      description:
        "Exploring advanced TypeScript patterns, type safety strategies, and development workflows that enhance code quality and team productivity in React Native projects."
    },
    {
      url: "https://medium.com/@haseja45/ci-cd-react-native-complete-guide",
      title: "Complete CI/CD Pipeline for React Native Applications",
      description:
        "Step-by-step guide to implementing robust continuous integration and deployment pipelines for React Native apps using GitHub Actions, Fastlane, and automated testing strategies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TECH TALKS & PRESENTATIONS",
  subtitle: emoji(
    "SHARING KNOWLEDGE AND INSPIRING THE NEXT GENERATION OF DEVELOPERS 🎤"
  ),

  talks: [
    {
      title: "React Native: Building Scalable Mobile Apps",
      subtitle: "Tech Talk at React Native Meetup Lahore 2023",
      slides_url: "https://bit.ly/kabeer-rn-scalability-slides",
      event_url: "https://www.meetup.com/react-native-lahore/"
    },
    {
      title: "Mobile App Performance: Beyond the Basics",
      subtitle: "Workshop at Mobile Development Conference 2023",
      slides_url: "https://bit.ly/kabeer-performance-workshop",
      event_url: "https://mobiledevconf.com/"
    }
  ],
  display: true // Set true to display this section, defaults to false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast Appearances 🎙️"),
  subtitle: "DISCUSSING MOBILE DEVELOPMENT TRENDS, CAREER INSIGHTS, AND TECHNOLOGY INNOVATION",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/mobiledevpodcast/embed/episodes/kabeer-haseja-react-native-expert"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Let's Connect and Build Something Amazing ☎️"),
  subtitle:
    "Ready to discuss your next mobile app project or explore collaboration opportunities? I'm always excited to work on innovative solutions that make a real impact.",
  number: "+92-3377304400",
  email_address: "haseja45@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "KabeerHaseja", //Replace with actual twitter username
  display: false // Set true to display this section, defaults to false
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
