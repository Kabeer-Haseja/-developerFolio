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
    "I'm a dedicated React Native Mobile App Developer 🚀 with 5+ years of experience building fast, reliable, and scalable cross-platform applications for iOS and Android. I specialize in creating seamless mobile experiences using React Native, TypeScript, Redux, RTK Query, Firebase, and native integrations like biometrics, maps, push notifications, and Single Sign-On. \n\nFrom performance optimizations to pixel-perfect UI, I focus on writing clean, reusable code and delivering high-quality apps used across industries like real estate, e-commerce, and CRM. I'm passionate about solving complex problems and continuously improving app architecture, user experience, and developer efficiency."
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
    "Transforming ideas into beautiful, intuitive, and high-performing Web and Mobile Applications 🌟 Let's build something amazing together! 💻📱",
  skills: [
    emoji(
      "⚡ Crafting highly responsive and interactive user interfaces for Web and Mobile apps using React.js and React Native"
    ),
    emoji(
      "⚡ Building Progressive Web Apps (PWAs) and Single Page Applications (SPAs) with modern JavaScript frameworks"
    ),
    emoji(
      "⚡ Seamless integration of third-party services like Firebase, Redux, Axios, Push Notifications, and Maps APIs"
    ),
    emoji(
      "⚡ Implementing real-time chat functionality with Sendbird for seamless user communication"
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
      skillName: "JavaScript",
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
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
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
      companylogo: require("./assets/images/connect_Icon.png"), // Make sure you add this logo to your assets
      date: "Dec 2024 – Present",
      location: "United Arab Emirates — Remote",
      desc: "At Barmajja, I lead the development of location-aware mobile applications, enhancing user engagement and driving business growth through innovative solutions.",
      descBullets: [
        "Developed a React Native loyalty app with QR-based offer redemption, resulting in a 25% increase in user-driven sales in Q1.",
        "Integrated GPS and Google Maps APIs to deliver location-based discounts and real-time visibility of nearby offers.",
        "Implemented Firebase push notifications to boost engagement, leading to a 25% uplift in user interaction via timely deal alerts and updates.",
        "Collaborated with cross-functional teams to align app features with marketing strategies and business objectives, improving customer retention."
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Dubizzle (EMPG LABS)",
      companylogo: require("./assets/images/dubizzle.png"),
      date: "Jan 2022 – Present",
      location: "Lahore, Punjab — Remote",
      desc: "As a Senior Software Engineer at EMPG LABS, I work on high-impact mobile applications that support the digital transformation of real estate platforms in emerging markets such as Pakistan, UAE, and Egypt.",
      descBullets: [
        "Refactored legacy React Native codebases to modern standards using TypeScript, React Native CLI, and functional components—resulting in a 35% improvement in performance across Android and iOS.",
        "Integrated 3rd-party services such as OneSignal, Google Maps, Crashlytics, and Firebase for advanced features like real-time push notifications and location-based services.",
        "Deployed a geofencing solution using GPS and Maps APIs to trigger personalized discounts and offers within a 0.5-mile radius, increasing redemption rates by 15%.",
        "Upgraded the React Native framework from version 0.64.2 to 0.75 to ensure stability and compatibility with the latest ecosystem.",
        "Contributed to cross-functional initiatives that enhanced app stability, reduced crashes, and improved deployment cycles in production."
      ]
    },
    {
      role: "Freelancer",
      company: "Fiverr",
      companylogo: require("./assets/images/upworkk.png"),
      date: "May 2018 – May 2020",
      desc:
        "Provided end-to-end software development services to clients worldwide, delivering high-quality web and mobile solutions on time and within scope.",
      descBullets: [
        "Developed cross-platform mobile applications with React Native, integrating RESTful APIs, Firebase, and intuitive UI/UX designs.",
        "Collaborated directly with clients to refine requirements, set milestones, and guarantee successful, timely delivery."
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
  title: "Big Projects",
  subtitle: "SOME Products AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/dubizzlecars.png"),
      projectName: "Dubizzle CRM",
      projectDesc:
        "Designed and engineered a custom CRM for Dubizzle’s automotive vertical, empowering sales agents to manage thousands of listings end-to-end. Automated lead assignment, data ingestion, and status tracking—cutting manual work by 70% and increasing team throughput by 40%.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://dubai.dubizzle.com/motors/"
        }
      ]
    },
    {
      image: require("./assets/images/dubizzlecars.png"),
      projectName: "Dubizzle Auction App",
      projectDesc:
        "Architected and delivered a real-time vehicle auction module in the Dubizzle app using React Native, WebSockets, and Firebase. Enabled secure bidding with live countdowns and push notifications—boosting engagement by 30% and tripling monthly auction listings.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://dubai.dubizzle.com/motors/"
        }
      ]
    },
    {
      image: require("./assets/images/dubizzlecars.png"),
      projectName: "Dubizzle Inspection App",
      projectDesc:
        "Built an offline-first inspection toolkit for Dubizzle with 200+ checkpoint validations and on-device image compression. Processed 500+ audits monthly, reduced report turnaround from hours to minutes, and lowered post-sale disputes by 40%.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://dubai.dubizzle.com/motors/"
        }
      ]
    },
    {
      image: require("./assets/images/dubizzle_seller_center_icon.png"),
      projectName: "Dubizzle Seller Center",
      projectDesc:
        "Developed a full-stack seller center featuring role-based dashboards, order-fulfillment workflows, and real-time performance analytics. Empowered merchants to optimize inventory, accelerate order processing, and grow revenue across the Dubizzle marketplace."
    },
    {
      image: require("./assets/images/jarvis_main_logo.png"),
      projectName: "Jarvis (Real Estate CRM)",
      projectDesc:
        "Integrated a scalable React Native CRM supporting 100K+ property agents across Pakistan, UAE, KSA, and Egypt. Enhanced lead management, task automation, and analytics—boosting sales-team productivity by 40%."
    },
    {
      image: require("./assets/images/olx.png"), // Replace with actual OLX logo if available
      projectName: "OLX (E-commerce App)",
      projectDesc:
        "Refactored the OLX e-commerce app to integrate PayFort and JazzCash payments along with logistics-tracking APIs. Improved checkout conversion by 30% and elevated overall customer satisfaction.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.olx.com/"
        }
      ]
    },
    {
      image: require("./assets/images/connect_Icon.png"),
      projectName: "Connect (Loyalty App)",
      projectDesc:
        "Created a geo-aware loyalty platform surfacing personalized offers from 100+ retailers. Implemented QR redemption and a points engine—raising repeat purchases by 25% and user engagement by 35%.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.connect.com/"
        }
      ]
    },
    {
      image: require("./assets/images/olxSellerCenter.png"),
      projectName: "Seller Center OLX",
      projectDesc:
        "Engineered a merchant portal for OLX with inventory management, shipment tracking, and real-time analytics. Streamlined order processing and reduced seller response time by 20%."
    },
   
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
