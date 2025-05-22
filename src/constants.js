// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import codetech from './assets/company_logo/codetech.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import muLogo from './assets/education_logo/muLogo.png';
import brabuLogo from './assets/education_logo/brabuLogo.png';
import bsebLogo from './assets/education_logo/bsebLogo.png';

// Project Section Logo's
import fooddeliveryLogo from './assets/work_logo/fooddeliveryLogo.png';
import spinbearLogo from './assets/work_logo/spinbearLogo.png';
import ticTacToeLogo from './assets/work_logo/ticTacToeLogo.png';

import currencyCoverterLogo from './assets/work_logo/currencyCoverterLogo.png';



export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "GSAP", logo: gsapLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "Java", logo: javaLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: codetech,
      role: "Fullstack Developer",
      company: "CODTECH IT SOLUTIONS PRIVATE LIMITED ",
      date: "January 30th, 2025 to May 30th, 2025",
      desc: "Completed a 6-month internship focused on full-stack web development using the MERN stack. Worked on building dynamic web applications by developing responsive UIs with React and creating RESTful APIs using Node.js and Express. Collaborated in an agile team, handled MongoDB database operations, and followed best practices for performance optimization and version control.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "MongoDb",
        "Redux",
      ],
    },
  ]
  
  export const education = [
    {
      id: 0,
      img: muLogo,
      school: "Marwadi university , Rajkot",
      date: "Sept 2023 - July 2025",
      grade: "7.25 CGPA",
      desc: "I have completed my Master's degree (MCA) in Computer Applications from Marwadi University, Rajkot in 2025. During my academic journey, I developed a strong foundation in programming, software development, and core computer science principles. I studied key subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I also actively participated in technical workshops and coding events, which helped me enhance both my practical skills and problem-solving abilities. My experience at Marwadi University has played a vital role in shaping my technical strengths and overall professional development.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: brabuLogo,
      school: "Brabu University, Bihar",
      date: "Sept 2019 - Aug 2023",
      grade: "71.2%",
      desc: "I completed my Bachelor's degree in Computer Applications (BCA) from Sri Narayan Singh College, Motihari, which is affiliated with Babasaheb Bhimrao Ambedkar Bihar University (BRABU). During my studies, I gained a solid understanding of core computer science concepts and practical software development. I explored subjects like Data Structures, Algorithms, Web Development, and Database Management Systems, which helped me build a strong technical foundation. My academic journey also included working on small projects that allowed me to apply theoretical knowledge to real-world scenarios, further enhancing my problem-solving and coding skills.",
      degree: "Bachelor of Computer Applications - BCA",
    },
    {
      id: 2,
      img: bsebLogo,
      school: "Govt high school, Mokhlishpur, Bihar",
      date: "Apr 2017 - March 2019",
      grade: "60.2%",
      desc: "I completed my Class 12 education from Government High School, Mokhlishpur, Bihar, under the Bihar School Examination Board (BSEB) with a focus on Physics, Chemistry, and Mathematics (PCM). This academic background helped me develop strong analytical and problem-solving skills, which laid the foundation for my interest in computer applications later during my higher studies.",
      degree: "BSEB Ptana(XII) - PCM ",
    },
    {
      id: 3,
      img: bsebLogo,
      school: "Mangal Seminary School, Motihari, Bihar",
      date: "Apr 2015 - March 2016",
      grade: "52.3%",
      desc: " completed my Class 10 education from Mangal Seminary School, Motihari, under the BSEB board Ptana (X). During this period, I studied core subjects including Science, Mathematics, and Social Science, which helped build my academic foundation.",
      degree: "BSEB (X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Food delivery App",
      description:
        "A powerful and user-friendly MERN stack food delivery application designed to provide a seamless and intuitive online food ordering experience. Simply browse through a diverse range of restaurants and menus, add your favorite dishes to the cart, and place orders with ease. The app fetches and manages comprehensive data including user profiles, restaurant details, menus, and order histories through a robust backend API. The intuitive interface, built with React.js and styled using Tailwind CSS/Bootstrap, ensures fast navigation and responsiveness across all devices. State management via React Context API offers smooth and real-time updates of the cart and user sessions. This application is a must-try tool for food lovers, developers, and recruiters looking for a modern, scalable e-commerce-like web solution.",
      image: fooddeliveryLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/raj123215/Food-Delivery",
      webapp: "https://food-delivery-frontend-bbxt.onrender.com",
    },
    {
      id: 1,
      title: "SpinBear",
      description:
        "A visually engaging quiz spin wheel designed using only HTML and CSS, without any JavaScript. The project showcases creative use of CSS animations and transitions to simulate a spinning effect, offering a basic prototype for quiz category selection. Ideal for GATE/UGC NET aspirants, the design demonstrates how interactive UI components can be built using just frontend technologies.",
      image: spinbearLogo,
      tags: ["HTML", "CSS"],
      github: "https://github.com/raj123215/Css-only",
      webapp: "https://jocular-sfogliatella-42cf13.netlify.app/",
    },
    {
      id: 2,
      title: "TicTacToe Game",
      description:
        "A simple and interactive Titako game developed using HTML, CSS, and JavaScript. Players connect dots by dragging the mouse or finger to score points in a fun and challenging way. The game features smooth animations and responsive controls, making it enjoyable for casual gamers.",
      image: ticTacToeLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/raj123215/tic-tac-game",
      webapp: "https://raj123215.github.io/tic-tac-game/",
    },
    {
      id: 3,
      title: "Curency Converter",
      description:
        "A user-friendly and responsive currency converter built using HTML, CSS, and advanced JavaScript. The application fetches real-time exchange rates and allows users to convert amounts between multiple currencies seamlessly. With clean UI and efficient functionality, it helps users quickly perform accurate currency conversions.",
      image: currencyCoverterLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/raj123215/currency-converter-web",
      webapp: "https://currency-converter-web-five.vercel.app/",
    },
  ];